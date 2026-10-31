var QR=(()=>{
  const ECC={L:[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],M:[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28]};
  const BLK={L:[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],M:[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49]};
  const FMT={L:1,M:0};
  const mul=(x,y)=>{let z=0;for(let i=7;i>=0;i--){z=(z<<1)^((z>>>7)*0x11D);z^=((y>>>i)&1)*x}return z};
  const rawModules=v=>{let r=(16*v+128)*v+64;if(v>=2){const na=Math.floor(v/7)+2;r-=(25*na-10)*na-55;if(v>=7)r-=36}return r};
  const dataCw=(v,e)=>Math.floor(rawModules(v)/8)-ECC[e][v]*BLK[e][v];
  const alignPos=v=>{if(v===1)return [];const na=Math.floor(v/7)+2,size=v*4+17,step=v===32?26:Math.ceil((v*4+4)/(na*2-2))*2,r=[6];for(let p=size-7;r.length<na;p-=step)r.splice(1,0,p);return r};
  const rsDiv=d=>{const r=new Array(d).fill(0);r[d-1]=1;let root=1;for(let i=0;i<d;i++){for(let j=0;j<d;j++){r[j]=mul(r[j],root);if(j+1<d)r[j]^=r[j+1]}root=mul(root,2)}return r};
  const rsRem=(data,div)=>{const r=div.map(()=>0);for(const b of data){const f=b^r.shift();r.push(0);div.forEach((c,i)=>{r[i]^=mul(c,f)})}return r};
  const MASKS=[(x,y)=>(x+y)%2===0,(x,y)=>y%2===0,(x,y)=>x%3===0,(x,y)=>(x+y)%3===0,(x,y)=>(Math.floor(x/3)+Math.floor(y/2))%2===0,(x,y)=>x*y%2+x*y%3===0,(x,y)=>(x*y%2+x*y%3)%2===0,(x,y)=>((x+y)%2+x*y%3)%2===0];
  function penalty(M,n){let p=0,dark=0;
    for(let a=0;a<n;a++){let rr=1,rc=1;for(let b=1;b<=n;b++){if(b<n&&M[a][b]===M[a][b-1])rr++;else{if(rr>=5)p+=rr-2;rr=1}if(b<n&&M[b][a]===M[b-1][a])rc++;else{if(rc>=5)p+=rc-2;rc=1}}}
    for(let y=0;y<n;y++)for(let x=0;x<n;x++){if(M[y][x])dark++;if(y<n-1&&x<n-1){const c=M[y][x];if(c===M[y][x+1]&&c===M[y+1][x]&&c===M[y+1][x+1])p+=3}}
    return p+Math.max(0,Math.ceil(Math.abs(dark*20-n*n*10)/(n*n))-1)*10}
  function encode(text,e){e=e||'L';const bytes=Array.from(new TextEncoder().encode(text));let v=1,cap=0;
    for(;v<=40;v++){cap=dataCw(v,e)*8;if(4+(v<10?8:16)+bytes.length*8<=cap)break}
    if(v>40)throw new Error('Données trop longues pour un QR code');
    const bits=[],put=(val,len)=>{for(let i=len-1;i>=0;i--)bits.push((val>>>i)&1)};
    put(4,4);put(bytes.length,v<10?8:16);bytes.forEach(b=>put(b,8));
    put(0,Math.min(4,cap-bits.length));put(0,(8-bits.length%8)%8);for(let p=0xEC;bits.length<cap;p^=0xEC^0x11)put(p,8);
    const data=[];for(let i=0;i<bits.length;i+=8){let b=0;for(let j=0;j<8;j++)b=(b<<1)|bits[i+j];data.push(b)}
    const nb=BLK[e][v],el=ECC[e][v],raw=Math.floor(rawModules(v)/8),nShort=nb-raw%nb,shortLen=Math.floor(raw/nb),div=rsDiv(el),blocks=[];
    for(let i=0,k=0;i<nb;i++){const dat=data.slice(k,k+shortLen-el+(i<nShort?0:1));k+=dat.length;const ec=rsRem(dat,div);if(i<nShort)dat.push(0);blocks.push(dat.concat(ec))}
    const all=[];for(let i=0;i<blocks[0].length;i++)blocks.forEach((b,j)=>{if(i!==shortLen-el||j>=nShort)all.push(b[i])});
    const size=v*4+17,M=Array.from({length:size},()=>new Array(size).fill(false)),F=Array.from({length:size},()=>new Array(size).fill(false));
    const setF=(x,y,d)=>{M[y][x]=d;F[y][x]=true};
    for(let i=0;i<size;i++){setF(6,i,i%2===0);setF(i,6,i%2===0)}
    [[3,3],[size-4,3],[3,size-4]].forEach(([cx,cy])=>{for(let dy=-4;dy<=4;dy++)for(let dx=-4;dx<=4;dx++){const xx=cx+dx,yy=cy+dy;if(xx>=0&&xx<size&&yy>=0&&yy<size){const d=Math.max(Math.abs(dx),Math.abs(dy));setF(xx,yy,d!==2&&d!==4)}}});
    const ap=alignPos(v),na=ap.length;
    for(let i=0;i<na;i++)for(let j=0;j<na;j++){if((i===0&&j===0)||(i===0&&j===na-1)||(i===na-1&&j===0))continue;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)setF(ap[i]+dx,ap[j]+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1)}
    const drawFmt=m=>{const d=FMT[e]<<3|m;let r=d;for(let i=0;i<10;i++)r=(r<<1)^((r>>>9)*0x537);const b=((d<<10)|r)^0x5412,g=i=>((b>>>i)&1)!==0;
      for(let i=0;i<=5;i++)setF(8,i,g(i));setF(8,7,g(6));setF(8,8,g(7));setF(7,8,g(8));for(let i=9;i<15;i++)setF(14-i,8,g(i));
      for(let i=0;i<8;i++)setF(size-1-i,8,g(i));for(let i=8;i<15;i++)setF(8,size-15+i,g(i));setF(8,size-8,true)};
    drawFmt(0);
    if(v>=7){let r=v;for(let i=0;i<12;i++)r=(r<<1)^((r>>>11)*0x1F25);const b=v<<12|r;for(let i=0;i<18;i++){const bt=((b>>>i)&1)!==0,a=size-11+i%3,c=Math.floor(i/3);setF(a,c,bt);setF(c,a,bt)}}
    let idx=0;for(let right=size-1;right>=1;right-=2){if(right===6)right=5;for(let vert=0;vert<size;vert++)for(let j=0;j<2;j++){const x=right-j,up=((right+1)&2)===0,y=up?size-1-vert:vert;if(!F[y][x]&&idx<all.length*8){M[y][x]=((all[idx>>>3]>>>(7-(idx&7)))&1)!==0;idx++}}}
    const apply=m=>{for(let y=0;y<size;y++)for(let x=0;x<size;x++)if(!F[y][x]&&MASKS[m](x,y))M[y][x]=!M[y][x]};
    let best=0,bp=Infinity;for(let m=0;m<8;m++){apply(m);drawFmt(m);const p=penalty(M,size);if(p<bp){bp=p;best=m}apply(m)}
    apply(best);drawFmt(best);return M}
  function canvas(text,px,e){const q=encode(text,e),n=q.length,quiet=4,total=n+quiet*2,scale=Math.max(2,Math.floor((px||300)/total)),c=document.createElement('canvas');
    c.width=c.height=total*scale;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.fillStyle='#000';
    for(let y=0;y<n;y++)for(let xx=0;xx<n;xx++)if(q[y][xx])x.fillRect((xx+quiet)*scale,(y+quiet)*scale,scale,scale);c.className='qr';return c}
  return {encode,canvas};
})();