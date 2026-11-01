import{c as wm,g as Am,a as Jh,B as Gs,s as pi,R as Lm,d as Rm,b as Pm,n as Cm}from"./units-C1gz7Gri.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="160",Si={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Im=0,Qh=1,Dm=2,_f=1,Nm=2,Mi=3,Ai=0,Sn=1,ni=2,Xi=0,dr=1,tu=2,eu=3,nu=4,Um=5,ps=100,Om=101,Bm=102,iu=103,su=104,Fm=200,km=201,zm=202,Hm=203,dc=204,fc=205,Gm=206,Vm=207,Wm=208,jm=209,Xm=210,Zm=211,qm=212,Km=213,Ym=214,$m=0,Jm=1,Qm=2,Co=3,tg=4,eg=5,ng=6,ig=7,kc=0,sg=1,rg=2,Zi=0,ag=1,og=2,lg=3,cg=4,hg=5,ug=6,ru="attached",dg="detached",vf=300,gr=301,_r=302,pc=303,mc=304,Go=306,vr=1e3,On=1001,Io=1002,Ye=1003,gc=1004,Ao=1005,vn=1006,xf=1007,As=1008,qi=1009,fg=1010,pg=1011,zc=1012,yf=1013,Wi=1014,Ei=1015,da=1016,Mf=1017,Sf=1018,Ss=1020,mg=1021,Bn=1023,gg=1024,_g=1025,bs=1026,xr=1027,vg=1028,bf=1029,xg=1030,Ef=1031,Tf=1033,Ml=33776,Sl=33777,bl=33778,El=33779,au=35840,ou=35841,lu=35842,cu=35843,wf=36196,hu=37492,uu=37496,du=37808,fu=37809,pu=37810,mu=37811,gu=37812,_u=37813,vu=37814,xu=37815,yu=37816,Mu=37817,Su=37818,bu=37819,Eu=37820,Tu=37821,Tl=36492,wu=36494,Au=36495,yg=36283,Lu=36284,Ru=36285,Pu=36286,fa=2300,yr=2301,wl=2302,Cu=2400,Iu=2401,Du=2402,Mg=2500,Sg=0,Af=1,_c=2,Lf=3e3,Es=3001,bg=3200,Eg=3201,Hc=0,Tg=1,Fn="",Le="srgb",je="srgb-linear",Gc="display-p3",Vo="display-p3-linear",Do="linear",Ae="srgb",No="rec709",Uo="p3",Ws=7680,Nu=519,wg=512,Ag=513,Lg=514,Rf=515,Rg=516,Pg=517,Cg=518,Ig=519,vc=35044,Uu="300 es",xc=1035,Ti=2e3,Oo=2001;class Ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ou=1234567;const fr=Math.PI/180,Mr=180/Math.PI;function qn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[s&255]+on[s>>8&255]+on[s>>16&255]+on[s>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function $e(s,t,e){return Math.max(t,Math.min(e,s))}function Vc(s,t){return(s%t+t)%t}function Dg(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function Ng(s,t,e){return s!==t?(e-s)/(t-s):0}function oa(s,t,e){return(1-e)*s+e*t}function Ug(s,t,e,n){return oa(s,t,1-Math.exp(-e*n))}function Og(s,t=1){return t-Math.abs(Vc(s,t*2)-t)}function Bg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Fg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function kg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function zg(s,t){return s+Math.random()*(t-s)}function Hg(s){return s*(.5-Math.random())}function Gg(s){s!==void 0&&(Ou=s);let t=Ou+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vg(s){return s*fr}function Wg(s){return s*Mr}function yc(s){return(s&s-1)===0&&s!==0}function jg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xg(s,t,e,n,r){const a=Math.cos,l=Math.sin,c=a(e/2),h=l(e/2),d=a((t+n)/2),f=l((t+n)/2),p=a((t-n)/2),g=l((t-n)/2),x=a((n-t)/2),M=l((n-t)/2);switch(r){case"XYX":s.set(c*f,h*p,h*g,c*d);break;case"YZY":s.set(h*g,c*f,h*p,c*d);break;case"ZXZ":s.set(h*p,h*g,c*f,c*d);break;case"XZX":s.set(c*f,h*M,h*x,c*d);break;case"YXY":s.set(h*x,c*f,h*M,c*d);break;case"ZYZ":s.set(h*M,h*x,c*f,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wr={DEG2RAD:fr,RAD2DEG:Mr,generateUUID:qn,clamp:$e,euclideanModulo:Vc,mapLinear:Dg,inverseLerp:Ng,lerp:oa,damp:Ug,pingpong:Og,smoothstep:Bg,smootherstep:Fg,randInt:kg,randFloat:zg,randFloatSpread:Hg,seededRandom:Gg,degToRad:Vg,radToDeg:Wg,isPowerOfTwo:yc,ceilPowerOfTwo:jg,floorPowerOfTwo:Bo,setQuaternionFromProperEuler:Xg,normalize:Se,denormalize:ii};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*n-l*r+t.x,this.y=a*r+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,r,a,l,c,h,d){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,l,c,h,d)}set(t,e,n,r,a,l,c,h,d){const f=this.elements;return f[0]=t,f[1]=r,f[2]=c,f[3]=e,f[4]=a,f[5]=h,f[6]=n,f[7]=l,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,l=n[0],c=n[3],h=n[6],d=n[1],f=n[4],p=n[7],g=n[2],x=n[5],M=n[8],S=r[0],v=r[3],_=r[6],T=r[1],b=r[4],P=r[7],F=r[2],U=r[5],I=r[8];return a[0]=l*S+c*T+h*F,a[3]=l*v+c*b+h*U,a[6]=l*_+c*P+h*I,a[1]=d*S+f*T+p*F,a[4]=d*v+f*b+p*U,a[7]=d*_+f*P+p*I,a[2]=g*S+x*T+M*F,a[5]=g*v+x*b+M*U,a[8]=g*_+x*P+M*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],c=t[5],h=t[6],d=t[7],f=t[8];return e*l*f-e*c*d-n*a*f+n*c*h+r*a*d-r*l*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],c=t[5],h=t[6],d=t[7],f=t[8],p=f*l-c*d,g=c*h-f*a,x=d*a-l*h,M=e*p+n*g+r*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=p*S,t[1]=(r*d-f*n)*S,t[2]=(c*n-r*l)*S,t[3]=g*S,t[4]=(f*e-r*h)*S,t[5]=(r*a-c*e)*S,t[6]=x*S,t[7]=(n*h-d*e)*S,t[8]=(l*e-n*a)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,a,l,c){const h=Math.cos(a),d=Math.sin(a);return this.set(n*h,n*d,-n*(h*l+d*c)+l+t,-r*d,r*h,-r*(-d*l+h*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Al.makeScale(t,e)),this}rotate(t){return this.premultiply(Al.makeRotation(-t)),this}translate(t,e){return this.premultiply(Al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new ue;function Pf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zg(){const s=pa("canvas");return s.style.display="block",s}const Bu={};function la(s){s in Bu||(Bu[s]=!0,console.warn(s))}const Fu=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ku=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[je]:{transfer:Do,primaries:No,toReference:s=>s,fromReference:s=>s},[Le]:{transfer:Ae,primaries:No,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Vo]:{transfer:Do,primaries:Uo,toReference:s=>s.applyMatrix3(ku),fromReference:s=>s.applyMatrix3(Fu)},[Gc]:{transfer:Ae,primaries:Uo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ku),fromReference:s=>s.applyMatrix3(Fu).convertLinearToSRGB()}},qg=new Set([je,Vo]),ve={enabled:!0,_workingColorSpace:je,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!qg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ka[t].toReference,r=ka[e].fromReference;return r(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ka[s].primaries},getTransfer:function(s){return s===Fn?Do:ka[s].transfer}};function pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ll(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let js;class Cf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=pa("canvas")),js.width=t.width,js.height=t.height;const n=js.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=pr(a[l]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pr(e[n]/255)*255):e[n]=pr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kg=0;class If{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=qn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Rl(r[l].image)):a.push(Rl(r[l]))}else a=Rl(r);n.url=a}return e||(t.images[this.uuid]=n),n}}function Rl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;class rn extends Ds{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=On,r=On,a=vn,l=As,c=Bn,h=qi,d=rn.DEFAULT_ANISOTROPY,f=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=qn(),this.name="",this.source=new If(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(la("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Es?Le:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return la("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?Es:Lf}set encoding(t){la("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Es?Le:Fn}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=vf;rn.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,r=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*e+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*e+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*e+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,a;const h=t.elements,d=h[0],f=h[4],p=h[8],g=h[1],x=h[5],M=h[9],S=h[2],v=h[6],_=h[10];if(Math.abs(f-g)<.01&&Math.abs(p-S)<.01&&Math.abs(M-v)<.01){if(Math.abs(f+g)<.1&&Math.abs(p+S)<.1&&Math.abs(M+v)<.1&&Math.abs(d+x+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(d+1)/2,P=(x+1)/2,F=(_+1)/2,U=(f+g)/4,I=(p+S)/4,it=(M+v)/4;return b>P&&b>F?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=U/n,a=I/n):P>F?P<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(P),n=U/r,a=it/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=I/a,r=it/a),this.set(n,r,a,e),this}let T=Math.sqrt((v-M)*(v-M)+(p-S)*(p-S)+(g-f)*(g-f));return Math.abs(T)<.001&&(T=1),this.x=(v-M)/T,this.y=(p-S)/T,this.z=(g-f)/T,this.w=Math.acos((d+x+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $g extends Ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(la("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Es?Le:Fn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new If(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends $g{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Df extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jg extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,a,l,c){let h=n[r+0],d=n[r+1],f=n[r+2],p=n[r+3];const g=a[l+0],x=a[l+1],M=a[l+2],S=a[l+3];if(c===0){t[e+0]=h,t[e+1]=d,t[e+2]=f,t[e+3]=p;return}if(c===1){t[e+0]=g,t[e+1]=x,t[e+2]=M,t[e+3]=S;return}if(p!==S||h!==g||d!==x||f!==M){let v=1-c;const _=h*g+d*x+f*M+p*S,T=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const F=Math.sqrt(b),U=Math.atan2(F,_*T);v=Math.sin(v*U)/F,c=Math.sin(c*U)/F}const P=c*T;if(h=h*v+g*P,d=d*v+x*P,f=f*v+M*P,p=p*v+S*P,v===1-c){const F=1/Math.sqrt(h*h+d*d+f*f+p*p);h*=F,d*=F,f*=F,p*=F}}t[e]=h,t[e+1]=d,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,a,l){const c=n[r],h=n[r+1],d=n[r+2],f=n[r+3],p=a[l],g=a[l+1],x=a[l+2],M=a[l+3];return t[e]=c*M+f*p+h*x-d*g,t[e+1]=h*M+f*g+d*p-c*x,t[e+2]=d*M+f*x+c*g-h*p,t[e+3]=f*M-c*p-h*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,a=t._z,l=t._order,c=Math.cos,h=Math.sin,d=c(n/2),f=c(r/2),p=c(a/2),g=h(n/2),x=h(r/2),M=h(a/2);switch(l){case"XYZ":this._x=g*f*p+d*x*M,this._y=d*x*p-g*f*M,this._z=d*f*M+g*x*p,this._w=d*f*p-g*x*M;break;case"YXZ":this._x=g*f*p+d*x*M,this._y=d*x*p-g*f*M,this._z=d*f*M-g*x*p,this._w=d*f*p+g*x*M;break;case"ZXY":this._x=g*f*p-d*x*M,this._y=d*x*p+g*f*M,this._z=d*f*M+g*x*p,this._w=d*f*p-g*x*M;break;case"ZYX":this._x=g*f*p-d*x*M,this._y=d*x*p+g*f*M,this._z=d*f*M-g*x*p,this._w=d*f*p+g*x*M;break;case"YZX":this._x=g*f*p+d*x*M,this._y=d*x*p+g*f*M,this._z=d*f*M-g*x*p,this._w=d*f*p-g*x*M;break;case"XZY":this._x=g*f*p-d*x*M,this._y=d*x*p-g*f*M,this._z=d*f*M+g*x*p,this._w=d*f*p+g*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],a=e[8],l=e[1],c=e[5],h=e[9],d=e[2],f=e[6],p=e[10],g=n+c+p;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(f-h)*x,this._y=(a-d)*x,this._z=(l-r)*x}else if(n>c&&n>p){const x=2*Math.sqrt(1+n-c-p);this._w=(f-h)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(a+d)/x}else if(c>p){const x=2*Math.sqrt(1+c-n-p);this._w=(a-d)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(h+f)/x}else{const x=2*Math.sqrt(1+p-n-c);this._w=(l-r)/x,this._x=(a+d)/x,this._y=(h+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,a=t._z,l=t._w,c=e._x,h=e._y,d=e._z,f=e._w;return this._x=n*f+l*c+r*d-a*h,this._y=r*f+l*h+a*c-n*d,this._z=a*f+l*d+n*h-r*c,this._w=l*f-n*c-r*h-a*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,a=this._z,l=this._w;let c=l*t._w+n*t._x+r*t._y+a*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-e;return this._w=x*l+e*this._w,this._x=x*n+e*this._x,this._y=x*r+e*this._y,this._z=x*a+e*this._z,this.normalize(),this}const d=Math.sqrt(h),f=Math.atan2(d,c),p=Math.sin((1-e)*f)/d,g=Math.sin(e*f)/d;return this._w=l*p+this._w*g,this._x=n*p+this._x*g,this._y=r*p+this._y*g,this._z=a*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(a),n*Math.cos(a),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*r,this.y=a[1]*e+a[4]*n+a[7]*r,this.z=a[2]*e+a[5]*n+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=t.elements,l=1/(a[3]*e+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*e+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*e+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,a=t.x,l=t.y,c=t.z,h=t.w,d=2*(l*r-c*n),f=2*(c*e-a*r),p=2*(a*n-l*e);return this.x=e+h*d+l*p-c*f,this.y=n+h*f+c*d-a*p,this.z=r+h*p+a*f-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r,this.y=a[1]*e+a[5]*n+a[9]*r,this.z=a[2]*e+a[6]*n+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,a=t.z,l=e.x,c=e.y,h=e.z;return this.x=r*h-a*c,this.y=a*l-n*h,this.z=n*c-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pl.copy(this).projectOnVector(t),this.sub(Pl)}reflect(t){return this.sub(Pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new O,zu=new ai;class Oe{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,Wn):Wn.fromBufferAttribute(a,l),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}const r=t.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),Ha.subVectors(this.max,Zr),Xs.subVectors(t.a,Zr),Zs.subVectors(t.b,Zr),qs.subVectors(t.c,Zr),Ii.subVectors(Zs,Xs),Di.subVectors(qs,Zs),os.subVectors(Xs,qs);let e=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-os.z,os.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,os.z,0,-os.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-os.y,os.x,0];return!Cl(e,Xs,Zs,qs,Ha)||(e=[1,0,0,0,1,0,0,0,1],!Cl(e,Xs,Zs,qs,Ha))?!1:(Ga.crossVectors(Ii,Di),e=[Ga.x,Ga.y,Ga.z],Cl(e,Xs,Zs,qs,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mi=[new O,new O,new O,new O,new O,new O,new O,new O],Wn=new O,za=new Oe,Xs=new O,Zs=new O,qs=new O,Ii=new O,Di=new O,os=new O,Zr=new O,Ha=new O,Ga=new O,ls=new O;function Cl(s,t,e,n,r){for(let a=0,l=s.length-3;a<=l;a+=3){ls.fromArray(s,a);const c=r.x*Math.abs(ls.x)+r.y*Math.abs(ls.y)+r.z*Math.abs(ls.z),h=t.dot(ls),d=e.dot(ls),f=n.dot(ls);if(Math.max(-Math.max(h,d,f),Math.min(h,d,f))>c)return!1}return!0}const Qg=new Oe,qr=new O,Il=new O;class Hn{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qg.setFromPoints(t).getCenter(n);let r=0;for(let a=0,l=t.length;a<l;a++)r=Math.max(r,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(qr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(Il)),this.expandByPoint(qr.copy(t.center).sub(Il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new O,Dl=new O,Va=new O,Ni=new O,Nl=new O,Wa=new O,Ul=new O;class Ar{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Dl.copy(t).add(e).multiplyScalar(.5),Va.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(Dl);const a=t.distanceTo(e)*.5,l=-this.direction.dot(Va),c=Ni.dot(this.direction),h=-Ni.dot(Va),d=Ni.lengthSq(),f=Math.abs(1-l*l);let p,g,x,M;if(f>0)if(p=l*h-c,g=l*c-h,M=a*f,p>=0)if(g>=-M)if(g<=M){const S=1/f;p*=S,g*=S,x=p*(p+l*g+2*c)+g*(l*p+g+2*h)+d}else g=a,p=Math.max(0,-(l*g+c)),x=-p*p+g*(g+2*h)+d;else g=-a,p=Math.max(0,-(l*g+c)),x=-p*p+g*(g+2*h)+d;else g<=-M?(p=Math.max(0,-(-l*a+c)),g=p>0?-a:Math.min(Math.max(-a,-h),a),x=-p*p+g*(g+2*h)+d):g<=M?(p=0,g=Math.min(Math.max(-a,-h),a),x=g*(g+2*h)+d):(p=Math.max(0,-(l*a+c)),g=p>0?a:Math.min(Math.max(-a,-h),a),x=-p*p+g*(g+2*h)+d);else g=l>0?-a:a,p=Math.max(0,-(l*g+c)),x=-p*p+g*(g+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Dl).addScaledVector(Va,g),x}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),r=gi.dot(gi)-n*n,a=t.radius*t.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,a,l,c,h;const d=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,g=this.origin;return d>=0?(n=(t.min.x-g.x)*d,r=(t.max.x-g.x)*d):(n=(t.max.x-g.x)*d,r=(t.min.x-g.x)*d),f>=0?(a=(t.min.y-g.y)*f,l=(t.max.y-g.y)*f):(a=(t.max.y-g.y)*f,l=(t.min.y-g.y)*f),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),p>=0?(c=(t.min.z-g.z)*p,h=(t.max.z-g.z)*p):(c=(t.max.z-g.z)*p,h=(t.min.z-g.z)*p),n>h||c>r)||((c>n||n!==n)&&(n=c),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,r,a){Nl.subVectors(e,t),Wa.subVectors(n,t),Ul.crossVectors(Nl,Wa);let l=this.direction.dot(Ul),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Ni.subVectors(this.origin,t);const h=c*this.direction.dot(Wa.crossVectors(Ni,Wa));if(h<0)return null;const d=c*this.direction.dot(Nl.cross(Ni));if(d<0||h+d>l)return null;const f=-c*Ni.dot(Ul);return f<0?null:this.at(f/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,r,a,l,c,h,d,f,p,g,x,M,S,v){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,l,c,h,d,f,p,g,x,M,S,v)}set(t,e,n,r,a,l,c,h,d,f,p,g,x,M,S,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=a,_[5]=l,_[9]=c,_[13]=h,_[2]=d,_[6]=f,_[10]=p,_[14]=g,_[3]=x,_[7]=M,_[11]=S,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ks.setFromMatrixColumn(t,0).length(),a=1/Ks.setFromMatrixColumn(t,1).length(),l=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,a=t.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){const g=l*f,x=l*p,M=c*f,S=c*p;e[0]=h*f,e[4]=-h*p,e[8]=d,e[1]=x+M*d,e[5]=g-S*d,e[9]=-c*h,e[2]=S-g*d,e[6]=M+x*d,e[10]=l*h}else if(t.order==="YXZ"){const g=h*f,x=h*p,M=d*f,S=d*p;e[0]=g+S*c,e[4]=M*c-x,e[8]=l*d,e[1]=l*p,e[5]=l*f,e[9]=-c,e[2]=x*c-M,e[6]=S+g*c,e[10]=l*h}else if(t.order==="ZXY"){const g=h*f,x=h*p,M=d*f,S=d*p;e[0]=g-S*c,e[4]=-l*p,e[8]=M+x*c,e[1]=x+M*c,e[5]=l*f,e[9]=S-g*c,e[2]=-l*d,e[6]=c,e[10]=l*h}else if(t.order==="ZYX"){const g=l*f,x=l*p,M=c*f,S=c*p;e[0]=h*f,e[4]=M*d-x,e[8]=g*d+S,e[1]=h*p,e[5]=S*d+g,e[9]=x*d-M,e[2]=-d,e[6]=c*h,e[10]=l*h}else if(t.order==="YZX"){const g=l*h,x=l*d,M=c*h,S=c*d;e[0]=h*f,e[4]=S-g*p,e[8]=M*p+x,e[1]=p,e[5]=l*f,e[9]=-c*f,e[2]=-d*f,e[6]=x*p+M,e[10]=g-S*p}else if(t.order==="XZY"){const g=l*h,x=l*d,M=c*h,S=c*d;e[0]=h*f,e[4]=-p,e[8]=d*f,e[1]=g*p+S,e[5]=l*f,e[9]=x*p-M,e[2]=M*p-x,e[6]=c*f,e[10]=S*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(t_,t,e_)}lookAt(t,e,n){const r=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ui.crossVectors(n,bn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ui.crossVectors(n,bn)),Ui.normalize(),ja.crossVectors(bn,Ui),r[0]=Ui.x,r[4]=ja.x,r[8]=bn.x,r[1]=Ui.y,r[5]=ja.y,r[9]=bn.y,r[2]=Ui.z,r[6]=ja.z,r[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,l=n[0],c=n[4],h=n[8],d=n[12],f=n[1],p=n[5],g=n[9],x=n[13],M=n[2],S=n[6],v=n[10],_=n[14],T=n[3],b=n[7],P=n[11],F=n[15],U=r[0],I=r[4],it=r[8],R=r[12],D=r[1],G=r[5],$=r[9],ht=r[13],z=r[2],K=r[6],Y=r[10],lt=r[14],j=r[3],at=r[7],q=r[11],ot=r[15];return a[0]=l*U+c*D+h*z+d*j,a[4]=l*I+c*G+h*K+d*at,a[8]=l*it+c*$+h*Y+d*q,a[12]=l*R+c*ht+h*lt+d*ot,a[1]=f*U+p*D+g*z+x*j,a[5]=f*I+p*G+g*K+x*at,a[9]=f*it+p*$+g*Y+x*q,a[13]=f*R+p*ht+g*lt+x*ot,a[2]=M*U+S*D+v*z+_*j,a[6]=M*I+S*G+v*K+_*at,a[10]=M*it+S*$+v*Y+_*q,a[14]=M*R+S*ht+v*lt+_*ot,a[3]=T*U+b*D+P*z+F*j,a[7]=T*I+b*G+P*K+F*at,a[11]=T*it+b*$+P*Y+F*q,a[15]=T*R+b*ht+P*lt+F*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],a=t[12],l=t[1],c=t[5],h=t[9],d=t[13],f=t[2],p=t[6],g=t[10],x=t[14],M=t[3],S=t[7],v=t[11],_=t[15];return M*(+a*h*p-r*d*p-a*c*g+n*d*g+r*c*x-n*h*x)+S*(+e*h*x-e*d*g+a*l*g-r*l*x+r*d*f-a*h*f)+v*(+e*d*p-e*c*x-a*l*p+n*l*x+a*c*f-n*d*f)+_*(-r*c*f-e*h*p+e*c*g+r*l*p-n*l*g+n*h*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],c=t[5],h=t[6],d=t[7],f=t[8],p=t[9],g=t[10],x=t[11],M=t[12],S=t[13],v=t[14],_=t[15],T=p*v*d-S*g*d+S*h*x-c*v*x-p*h*_+c*g*_,b=M*g*d-f*v*d-M*h*x+l*v*x+f*h*_-l*g*_,P=f*S*d-M*p*d+M*c*x-l*S*x-f*c*_+l*p*_,F=M*p*h-f*S*h-M*c*g+l*S*g+f*c*v-l*p*v,U=e*T+n*b+r*P+a*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return t[0]=T*I,t[1]=(S*g*a-p*v*a-S*r*x+n*v*x+p*r*_-n*g*_)*I,t[2]=(c*v*a-S*h*a+S*r*d-n*v*d-c*r*_+n*h*_)*I,t[3]=(p*h*a-c*g*a-p*r*d+n*g*d+c*r*x-n*h*x)*I,t[4]=b*I,t[5]=(f*v*a-M*g*a+M*r*x-e*v*x-f*r*_+e*g*_)*I,t[6]=(M*h*a-l*v*a-M*r*d+e*v*d+l*r*_-e*h*_)*I,t[7]=(l*g*a-f*h*a+f*r*d-e*g*d-l*r*x+e*h*x)*I,t[8]=P*I,t[9]=(M*p*a-f*S*a-M*n*x+e*S*x+f*n*_-e*p*_)*I,t[10]=(l*S*a-M*c*a+M*n*d-e*S*d-l*n*_+e*c*_)*I,t[11]=(f*c*a-l*p*a-f*n*d+e*p*d+l*n*x-e*c*x)*I,t[12]=F*I,t[13]=(f*S*r-M*p*r+M*n*g-e*S*g-f*n*v+e*p*v)*I,t[14]=(M*c*r-l*S*r-M*n*h+e*S*h+l*n*v-e*c*v)*I,t[15]=(l*p*r-f*c*r+f*n*h-e*p*h-l*n*g+e*c*g)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,a=t.z;return e[0]*=n,e[4]*=r,e[8]*=a,e[1]*=n,e[5]*=r,e[9]*=a,e[2]*=n,e[6]*=r,e[10]*=a,e[3]*=n,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),a=1-n,l=t.x,c=t.y,h=t.z,d=a*l,f=a*c;return this.set(d*l+n,d*c-r*h,d*h+r*c,0,d*c+r*h,f*c+n,f*h-r*l,0,d*h-r*c,f*h+r*l,a*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,a,l){return this.set(1,n,a,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,a=e._x,l=e._y,c=e._z,h=e._w,d=a+a,f=l+l,p=c+c,g=a*d,x=a*f,M=a*p,S=l*f,v=l*p,_=c*p,T=h*d,b=h*f,P=h*p,F=n.x,U=n.y,I=n.z;return r[0]=(1-(S+_))*F,r[1]=(x+P)*F,r[2]=(M-b)*F,r[3]=0,r[4]=(x-P)*U,r[5]=(1-(g+_))*U,r[6]=(v+T)*U,r[7]=0,r[8]=(M+b)*I,r[9]=(v-T)*I,r[10]=(1-(g+S))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let a=Ks.set(r[0],r[1],r[2]).length();const l=Ks.set(r[4],r[5],r[6]).length(),c=Ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],jn.copy(this);const d=1/a,f=1/l,p=1/c;return jn.elements[0]*=d,jn.elements[1]*=d,jn.elements[2]*=d,jn.elements[4]*=f,jn.elements[5]*=f,jn.elements[6]*=f,jn.elements[8]*=p,jn.elements[9]*=p,jn.elements[10]*=p,e.setFromRotationMatrix(jn),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,r,a,l,c=Ti){const h=this.elements,d=2*a/(e-t),f=2*a/(n-r),p=(e+t)/(e-t),g=(n+r)/(n-r);let x,M;if(c===Ti)x=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(c===Oo)x=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=f,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,a,l,c=Ti){const h=this.elements,d=1/(e-t),f=1/(n-r),p=1/(l-a),g=(e+t)*d,x=(n+r)*f;let M,S;if(c===Ti)M=(l+a)*p,S=-2*p;else if(c===Oo)M=a*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*f,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=S,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ks=new O,jn=new oe,t_=new O(0,0,0),e_=new O(1,1,1),Ui=new O,ja=new O,bn=new O,Hu=new oe,Gu=new ai;class Wo{constructor(t=0,e=0,n=0,r=Wo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,a=r[0],l=r[4],c=r[8],h=r[1],d=r[5],f=r[9],p=r[2],g=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin($e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-$e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-f,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wo.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let n_=0;const Vu=new O,Ys=new ai,_i=new oe,Xa=new O,Kr=new O,i_=new O,s_=new ai,Wu=new O(1,0,0),ju=new O(0,1,0),Xu=new O(0,0,1),r_={type:"added"},a_={type:"removed"};class Ie extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new O,e=new Wo,n=new ai,r=new O(1,1,1);function a(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new ue}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Wu,t)}rotateY(t){return this.rotateOnAxis(ju,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wu,t)}translateY(t){return this.translateOnAxis(ju,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xa.copy(t):Xa.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Kr,Xa,this.up):_i.lookAt(Xa,Kr,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(_i),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(r_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(a_)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,i_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,s_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const a=e[n];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const c=r[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,f=h.length;d<f;d++){const p=h[d];a(t.shapes,p)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(a(t.materials,this.material[h]));r.material=c}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];r.animations.push(a(t.animations,h))}}if(e){const c=l(t.geometries),h=l(t.materials),d=l(t.textures),f=l(t.images),p=l(t.shapes),g=l(t.skeletons),x=l(t.animations),M=l(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),M.length>0&&(n.nodes=M)}return n.object=r,n;function l(c){const h=[];for(const d in c){const f=c[d];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ie.DEFAULT_UP=new O(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new O,vi=new O,Ol=new O,xi=new O,$s=new O,Js=new O,Zu=new O,Bl=new O,Fl=new O,kl=new O;let Za=!1;class Un{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Xn.subVectors(t,e),r.cross(Xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,n,r,a){Xn.subVectors(r,e),vi.subVectors(n,e),Ol.subVectors(t,e);const l=Xn.dot(Xn),c=Xn.dot(vi),h=Xn.dot(Ol),d=vi.dot(vi),f=vi.dot(Ol),p=l*d-c*c;if(p===0)return a.set(0,0,0),null;const g=1/p,x=(d*h-c*f)*g,M=(l*f-c*h)*g;return a.set(1-x-M,M,x)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(t,e,n,r,a,l,c,h){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),this.getInterpolation(t,e,n,r,a,l,c,h)}static getInterpolation(t,e,n,r,a,l,c,h){return this.getBarycoord(t,e,n,r,xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,xi.x),h.addScaledVector(l,xi.y),h.addScaledVector(c,xi.z),h)}static isFrontFacing(t,e,n,r){return Xn.subVectors(n,e),vi.subVectors(t,e),Xn.cross(vi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Xn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,a){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),Un.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}getInterpolation(t,e,n,r,a){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,a=this.c;let l,c;$s.subVectors(r,n),Js.subVectors(a,n),Bl.subVectors(t,n);const h=$s.dot(Bl),d=Js.dot(Bl);if(h<=0&&d<=0)return e.copy(n);Fl.subVectors(t,r);const f=$s.dot(Fl),p=Js.dot(Fl);if(f>=0&&p<=f)return e.copy(r);const g=h*p-f*d;if(g<=0&&h>=0&&f<=0)return l=h/(h-f),e.copy(n).addScaledVector($s,l);kl.subVectors(t,a);const x=$s.dot(kl),M=Js.dot(kl);if(M>=0&&x<=M)return e.copy(a);const S=x*d-h*M;if(S<=0&&d>=0&&M<=0)return c=d/(d-M),e.copy(n).addScaledVector(Js,c);const v=f*M-x*p;if(v<=0&&p-f>=0&&x-M>=0)return Zu.subVectors(a,r),c=(p-f)/(p-f+(x-M)),e.copy(r).addScaledVector(Zu,c);const _=1/(v+S+g);return l=S*_,c=g*_,e.copy(n).addScaledVector($s,l).addScaledVector(Js,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function zl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ve.workingColorSpace){if(t=Vc(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,l=2*n-a;this.r=zl(l,a,t+1/3),this.g=zl(l,a,t),this.b=zl(l,a,t-1/3)}return ve.toWorkingColorSpace(this,r),this}setStyle(t,e=Le){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}copyLinearToSRGB(t){return this.r=Ll(t.r),this.g=Ll(t.g),this.b=Ll(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ve.fromWorkingColorSpace(ln.copy(this),t),Math.round($e(ln.r*255,0,255))*65536+Math.round($e(ln.g*255,0,255))*256+Math.round($e(ln.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,r=ln.g,a=ln.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let h,d;const f=(c+l)/2;if(c===l)h=0,d=0;else{const p=l-c;switch(d=f<=.5?p/(l+c):p/(2-l-c),l){case n:h=(r-a)/p+(r<a?6:0);break;case r:h=(a-n)/p+2;break;case a:h=(n-r)/p+4;break}h/=6}return t.h=h,t.s=d,t.l=f,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Le){ve.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,r=ln.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(qa);const n=oa(Oi.h,qa.h,e),r=oa(Oi.s,qa.s,e),a=oa(Oi.l,qa.l,e);return this.setHSL(n,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*r,this.g=a[1]*e+a[4]*n+a[7]*r,this.b=a[2]*e+a[5]*n+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Zt;Zt.NAMES=Nf;let o_=0;class Kn extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=dr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}if(e){const a=r(t.textures),l=r(t.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _s extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new O,Ka=new jt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ka.fromBufferAttribute(this,e),Ka.applyMatrix3(t),this.setXY(e,Ka.x,Ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),a=Se(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vc&&(t.usage=this.usage),t}}class Uf extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Of extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Tn extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let l_=0;const Dn=new oe,Hl=new Ie,Qs=new O,En=new Oe,Yr=new Oe,Ke=new O;class mn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pf(t)?Of:Uf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ue().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Hl.lookAt(t),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Tn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const a=e[n];En.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){const c=e[a];Yr.setFromBufferAttribute(c),this.morphTargetsRelative?(Ke.addVectors(En.min,Yr.min),En.expandByPoint(Ke),Ke.addVectors(En.max,Yr.max),En.expandByPoint(Ke)):(En.expandByPoint(Yr.min),En.expandByPoint(Yr.max))}En.getCenter(n);let r=0;for(let a=0,l=t.count;a<l;a++)Ke.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(Ke));if(e)for(let a=0,l=e.length;a<l;a++){const c=e[a],h=this.morphTargetsRelative;for(let d=0,f=c.count;d<f;d++)Ke.fromBufferAttribute(c,d),h&&(Qs.fromBufferAttribute(t,d),Ke.add(Qs)),r=Math.max(r,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,a=e.normal.array,l=e.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,d=[],f=[];for(let D=0;D<c;D++)d[D]=new O,f[D]=new O;const p=new O,g=new O,x=new O,M=new jt,S=new jt,v=new jt,_=new O,T=new O;function b(D,G,$){p.fromArray(r,D*3),g.fromArray(r,G*3),x.fromArray(r,$*3),M.fromArray(l,D*2),S.fromArray(l,G*2),v.fromArray(l,$*2),g.sub(p),x.sub(p),S.sub(M),v.sub(M);const ht=1/(S.x*v.y-v.x*S.y);isFinite(ht)&&(_.copy(g).multiplyScalar(v.y).addScaledVector(x,-S.y).multiplyScalar(ht),T.copy(x).multiplyScalar(S.x).addScaledVector(g,-v.x).multiplyScalar(ht),d[D].add(_),d[G].add(_),d[$].add(_),f[D].add(T),f[G].add(T),f[$].add(T))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let D=0,G=P.length;D<G;++D){const $=P[D],ht=$.start,z=$.count;for(let K=ht,Y=ht+z;K<Y;K+=3)b(n[K+0],n[K+1],n[K+2])}const F=new O,U=new O,I=new O,it=new O;function R(D){I.fromArray(a,D*3),it.copy(I);const G=d[D];F.copy(G),F.sub(I.multiplyScalar(I.dot(G))).normalize(),U.crossVectors(it,G);const ht=U.dot(f[D])<0?-1:1;h[D*4]=F.x,h[D*4+1]=F.y,h[D*4+2]=F.z,h[D*4+3]=ht}for(let D=0,G=P.length;D<G;++D){const $=P[D],ht=$.start,z=$.count;for(let K=ht,Y=ht+z;K<Y;K+=3)R(n[K+0]),R(n[K+1]),R(n[K+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);const r=new O,a=new O,l=new O,c=new O,h=new O,d=new O,f=new O,p=new O;if(t)for(let g=0,x=t.count;g<x;g+=3){const M=t.getX(g+0),S=t.getX(g+1),v=t.getX(g+2);r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,S),l.fromBufferAttribute(e,v),f.subVectors(l,a),p.subVectors(r,a),f.cross(p),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,v),c.add(f),h.add(f),d.add(f),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(S,h.x,h.y,h.z),n.setXYZ(v,d.x,d.y,d.z)}else for(let g=0,x=e.count;g<x;g+=3)r.fromBufferAttribute(e,g+0),a.fromBufferAttribute(e,g+1),l.fromBufferAttribute(e,g+2),f.subVectors(l,a),p.subVectors(r,a),f.cross(p),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(c,h){const d=c.array,f=c.itemSize,p=c.normalized,g=new d.constructor(h.length*f);let x=0,M=0;for(let S=0,v=h.length;S<v;S++){c.isInterleavedBufferAttribute?x=h[S]*c.data.stride+c.offset:x=h[S]*f;for(let _=0;_<f;_++)g[M++]=d[x++]}return new Ve(g,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,r=this.attributes;for(const c in r){const h=r[c],d=t(h,n);e.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,p=d.length;f<p;f++){const g=d[f],x=t(g,n);h.push(x)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const d=l[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const d=n[h];t.data.attributes[h]=d.toJSON(t.data)}const r={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],f=[];for(let p=0,g=d.length;p<g;p++){const x=d[p];f.push(x.toJSON(t.data))}f.length>0&&(r[h]=f,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const d in r){const f=r[d];this.setAttribute(d,f.clone(e))}const a=t.morphAttributes;for(const d in a){const f=[],p=a[d];for(let g=0,x=p.length;g<x;g++)f.push(p[g].clone(e));this.morphAttributes[d]=f}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let d=0,f=l.length;d<f;d++){const p=l[d];this.addGroup(p.start,p.count,p.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new oe,cs=new Ar,Ya=new Hn,Ku=new O,tr=new O,er=new O,nr=new O,Gl=new O,$a=new O,Ja=new jt,Qa=new jt,to=new jt,Yu=new O,$u=new O,Ju=new O,eo=new O,no=new O;class Mn extends Ie{constructor(t=new mn,e=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(a&&c){$a.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const f=c[h],p=a[h];f!==0&&(Gl.fromBufferAttribute(p,t),l?$a.addScaledVector(Gl,f):$a.addScaledVector(Gl.sub(e),f))}e.add($a)}return e}raycast(t,e){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(a),cs.copy(t.ray).recast(t.near),!(Ya.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ya,Ku)===null||cs.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&(qu.copy(a).invert(),cs.copy(t.ray).applyMatrix4(qu),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let r;const a=this.geometry,l=this.material,c=a.index,h=a.attributes.position,d=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,g=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,S=g.length;M<S;M++){const v=g[M],_=l[v.materialIndex],T=Math.max(v.start,x.start),b=Math.min(c.count,Math.min(v.start+v.count,x.start+x.count));for(let P=T,F=b;P<F;P+=3){const U=c.getX(P),I=c.getX(P+1),it=c.getX(P+2);r=io(this,_,t,n,d,f,p,U,I,it),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const M=Math.max(0,x.start),S=Math.min(c.count,x.start+x.count);for(let v=M,_=S;v<_;v+=3){const T=c.getX(v),b=c.getX(v+1),P=c.getX(v+2);r=io(this,l,t,n,d,f,p,T,b,P),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let M=0,S=g.length;M<S;M++){const v=g[M],_=l[v.materialIndex],T=Math.max(v.start,x.start),b=Math.min(h.count,Math.min(v.start+v.count,x.start+x.count));for(let P=T,F=b;P<F;P+=3){const U=P,I=P+1,it=P+2;r=io(this,_,t,n,d,f,p,U,I,it),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const M=Math.max(0,x.start),S=Math.min(h.count,x.start+x.count);for(let v=M,_=S;v<_;v+=3){const T=v,b=v+1,P=v+2;r=io(this,l,t,n,d,f,p,T,b,P),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function c_(s,t,e,n,r,a,l,c){let h;if(t.side===Sn?h=n.intersectTriangle(l,a,r,!0,c):h=n.intersectTriangle(r,a,l,t.side===Ai,c),h===null)return null;no.copy(c),no.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(no);return d<e.near||d>e.far?null:{distance:d,point:no.clone(),object:s}}function io(s,t,e,n,r,a,l,c,h,d){s.getVertexPosition(c,tr),s.getVertexPosition(h,er),s.getVertexPosition(d,nr);const f=c_(s,t,e,n,tr,er,nr,eo);if(f){r&&(Ja.fromBufferAttribute(r,c),Qa.fromBufferAttribute(r,h),to.fromBufferAttribute(r,d),f.uv=Un.getInterpolation(eo,tr,er,nr,Ja,Qa,to,new jt)),a&&(Ja.fromBufferAttribute(a,c),Qa.fromBufferAttribute(a,h),to.fromBufferAttribute(a,d),f.uv1=Un.getInterpolation(eo,tr,er,nr,Ja,Qa,to,new jt),f.uv2=f.uv1),l&&(Yu.fromBufferAttribute(l,c),$u.fromBufferAttribute(l,h),Ju.fromBufferAttribute(l,d),f.normal=Un.getInterpolation(eo,tr,er,nr,Yu,$u,Ju,new O),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:c,b:h,c:d,normal:new O,materialIndex:0};Un.getNormal(tr,er,nr,p.normal),f.face=p}return f}class ya extends mn{constructor(t=1,e=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const h=[],d=[],f=[],p=[];let g=0,x=0;M("z","y","x",-1,-1,n,e,t,l,a,0),M("z","y","x",1,-1,n,e,-t,l,a,1),M("x","z","y",1,1,t,n,e,r,l,2),M("x","z","y",1,-1,t,n,-e,r,l,3),M("x","y","z",1,-1,t,e,n,r,a,4),M("x","y","z",-1,-1,t,e,-n,r,a,5),this.setIndex(h),this.setAttribute("position",new Tn(d,3)),this.setAttribute("normal",new Tn(f,3)),this.setAttribute("uv",new Tn(p,2));function M(S,v,_,T,b,P,F,U,I,it,R){const D=P/I,G=F/it,$=P/2,ht=F/2,z=U/2,K=I+1,Y=it+1;let lt=0,j=0;const at=new O;for(let q=0;q<Y;q++){const ot=q*G-ht;for(let Mt=0;Mt<K;Mt++){const J=Mt*D-$;at[S]=J*T,at[v]=ot*b,at[_]=z,d.push(at.x,at.y,at.z),at[S]=0,at[v]=0,at[_]=U>0?1:-1,f.push(at.x,at.y,at.z),p.push(Mt/I),p.push(1-q/it),lt+=1}}for(let q=0;q<it;q++)for(let ot=0;ot<I;ot++){const Mt=g+ot+K*q,J=g+ot+K*(q+1),st=g+(ot+1)+K*(q+1),ut=g+(ot+1)+K*q;h.push(Mt,J,ut),h.push(J,st,ut),j+=6}c.addGroup(x,j,R),x+=j,g+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function fn(s){const t={};for(let e=0;e<s.length;e++){const n=Sr(s[e]);for(const r in n)t[r]=n[r]}return t}function h_(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bf(s){return s.getRenderTarget()===null?s.outputColorSpace:ve.workingColorSpace}const jc={clone:Sr,merge:fn};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=d_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=h_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ff extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends Ff{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,d=l.fullHeight;a+=l.offsetX*r/h,e-=l.offsetY*n/d,r*=l.width/h,n*=l.height/d}const c=this.filmOffset;c!==0&&(a+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ir=-90,sr=1;class f_ extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(ir,sr,t,e);r.layers=this.layers,this.add(r);const a=new pn(ir,sr,t,e);a.layers=this.layers,this.add(a);const l=new pn(ir,sr,t,e);l.layers=this.layers,this.add(l);const c=new pn(ir,sr,t,e);c.layers=this.layers,this.add(c);const h=new pn(ir,sr,t,e);h.layers=this.layers,this.add(h);const d=new pn(ir,sr,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,a,l,c,h]=e;for(const d of e)this.remove(d);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,h,d,f]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,a),t.setRenderTarget(n,1,r),t.render(e,l),t.setRenderTarget(n,2,r),t.render(e,c),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,d),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(p,g,x),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class kf extends rn{constructor(t,e,n,r,a,l,c,h,d,f){t=t!==void 0?t:[],e=e!==void 0?e:gr,super(t,e,n,r,a,l,c,h,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p_ extends Ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(la("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Es?Le:Fn),this.texture=new kf(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),a=new $i({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Xi});a.uniforms.tEquirect.value=e;const l=new Mn(r,a),c=e.minFilter;return e.minFilter===As&&(e.minFilter=vn),new f_(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,r){const a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,r);t.setRenderTarget(a)}}const Vl=new O,m_=new O,g_=new ue;class Hi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Vl.subVectors(n,e).cross(m_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||g_.getNormalMatrix(t),r=this.coplanarPoint(Vl).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Hn,so=new O;class Xc{constructor(t=new Hi,e=new Hi,n=new Hi,r=new Hi,a=new Hi,l=new Hi){this.planes=[t,e,n,r,a,l]}set(t,e,n,r,a,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti){const n=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],d=r[4],f=r[5],p=r[6],g=r[7],x=r[8],M=r[9],S=r[10],v=r[11],_=r[12],T=r[13],b=r[14],P=r[15];if(n[0].setComponents(h-a,g-d,v-x,P-_).normalize(),n[1].setComponents(h+a,g+d,v+x,P+_).normalize(),n[2].setComponents(h+l,g+f,v+M,P+T).normalize(),n[3].setComponents(h-l,g-f,v-M,P-T).normalize(),n[4].setComponents(h-c,g-p,v-S,P-b).normalize(),e===Ti)n[5].setComponents(h+c,g+p,v+S,P+b).normalize();else if(e===Oo)n[5].setComponents(c,p,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(so.x=r.normal.x>0?t.max.x:t.min.x,so.y=r.normal.y>0?t.max.y:t.min.y,so.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zf(){let s=null,t=!1,e=null,n=null;function r(a,l){e(a,l),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function __(s,t){const e=t.isWebGL2,n=new WeakMap;function r(d,f){const p=d.array,g=d.usage,x=p.byteLength,M=s.createBuffer();s.bindBuffer(f,M),s.bufferData(f,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)S=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:M,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,f,p){const g=f.array,x=f._updateRange,M=f.updateRanges;if(s.bindBuffer(p,d),x.count===-1&&M.length===0&&s.bufferSubData(p,0,g),M.length!==0){for(let S=0,v=M.length;S<v;S++){const _=M[S];e?s.bufferSubData(p,_.start*g.BYTES_PER_ELEMENT,g,_.start,_.count):s.bufferSubData(p,_.start*g.BYTES_PER_ELEMENT,g.subarray(_.start,_.start+_.count))}f.clearUpdateRanges()}x.count!==-1&&(e?s.bufferSubData(p,x.offset*g.BYTES_PER_ELEMENT,g,x.offset,x.count):s.bufferSubData(p,x.offset*g.BYTES_PER_ELEMENT,g.subarray(x.offset,x.offset+x.count)),x.count=-1),f.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=n.get(d);f&&(s.deleteBuffer(f.buffer),n.delete(d))}function h(d,f){if(d.isGLBufferAttribute){const g=n.get(d);(!g||g.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const p=n.get(d);if(p===void 0)n.set(d,r(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,f),p.version=d.version}}return{get:l,remove:c,update:h}}class Zc extends mn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const a=t/2,l=e/2,c=Math.floor(n),h=Math.floor(r),d=c+1,f=h+1,p=t/c,g=e/h,x=[],M=[],S=[],v=[];for(let _=0;_<f;_++){const T=_*g-l;for(let b=0;b<d;b++){const P=b*p-a;M.push(P,-T,0),S.push(0,0,1),v.push(b/c),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let T=0;T<c;T++){const b=T+d*_,P=T+d*(_+1),F=T+1+d*(_+1),U=T+1+d*_;x.push(b,P,U),x.push(P,F,U)}this.setIndex(x),this.setAttribute("position",new Tn(M,3)),this.setAttribute("normal",new Tn(S,3)),this.setAttribute("uv",new Tn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.width,t.height,t.widthSegments,t.heightSegments)}}var v_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,C_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",K_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,av=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_v=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Dv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:v_,alphahash_pars_fragment:x_,alphamap_fragment:y_,alphamap_pars_fragment:M_,alphatest_fragment:S_,alphatest_pars_fragment:b_,aomap_fragment:E_,aomap_pars_fragment:T_,batching_pars_vertex:w_,batching_vertex:A_,begin_vertex:L_,beginnormal_vertex:R_,bsdfs:P_,iridescence_fragment:C_,bumpmap_pars_fragment:I_,clipping_planes_fragment:D_,clipping_planes_pars_fragment:N_,clipping_planes_pars_vertex:U_,clipping_planes_vertex:O_,color_fragment:B_,color_pars_fragment:F_,color_pars_vertex:k_,color_vertex:z_,common:H_,cube_uv_reflection_fragment:G_,defaultnormal_vertex:V_,displacementmap_pars_vertex:W_,displacementmap_vertex:j_,emissivemap_fragment:X_,emissivemap_pars_fragment:Z_,colorspace_fragment:q_,colorspace_pars_fragment:K_,envmap_fragment:Y_,envmap_common_pars_fragment:$_,envmap_pars_fragment:J_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:uv,envmap_vertex:tv,fog_vertex:ev,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:sv,gradientmap_pars_fragment:rv,lightmap_fragment:av,lightmap_pars_fragment:ov,lights_lambert_fragment:lv,lights_lambert_pars_fragment:cv,lights_pars_begin:hv,lights_toon_fragment:dv,lights_toon_pars_fragment:fv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:gv,lights_physical_pars_fragment:_v,lights_fragment_begin:vv,lights_fragment_maps:xv,lights_fragment_end:yv,logdepthbuf_fragment:Mv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:bv,logdepthbuf_vertex:Ev,map_fragment:Tv,map_pars_fragment:wv,map_particle_fragment:Av,map_particle_pars_fragment:Lv,metalnessmap_fragment:Rv,metalnessmap_pars_fragment:Pv,morphcolor_vertex:Cv,morphnormal_vertex:Iv,morphtarget_pars_vertex:Dv,morphtarget_vertex:Nv,normal_fragment_begin:Uv,normal_fragment_maps:Ov,normal_pars_fragment:Bv,normal_pars_vertex:Fv,normal_vertex:kv,normalmap_pars_fragment:zv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Gv,clearcoat_pars_fragment:Vv,iridescence_pars_fragment:Wv,opaque_fragment:jv,packing:Xv,premultiplied_alpha_fragment:Zv,project_vertex:qv,dithering_fragment:Kv,dithering_pars_fragment:Yv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:Jv,shadowmap_pars_fragment:Qv,shadowmap_pars_vertex:tx,shadowmap_vertex:ex,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ax,specularmap_fragment:ox,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:hx,transmission_fragment:ux,transmission_pars_fragment:dx,uv_pars_fragment:fx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:_x,background_frag:vx,backgroundCube_vert:xx,backgroundCube_frag:yx,cube_vert:Mx,cube_frag:Sx,depth_vert:bx,depth_frag:Ex,distanceRGBA_vert:Tx,distanceRGBA_frag:wx,equirect_vert:Ax,equirect_frag:Lx,linedashed_vert:Rx,linedashed_frag:Px,meshbasic_vert:Cx,meshbasic_frag:Ix,meshlambert_vert:Dx,meshlambert_frag:Nx,meshmatcap_vert:Ux,meshmatcap_frag:Ox,meshnormal_vert:Bx,meshnormal_frag:Fx,meshphong_vert:kx,meshphong_frag:zx,meshphysical_vert:Hx,meshphysical_frag:Gx,meshtoon_vert:Vx,meshtoon_frag:Wx,points_vert:jx,points_frag:Xx,shadow_vert:Zx,shadow_frag:qx,sprite_vert:Kx,sprite_frag:Yx},bt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},xn={basic:{uniforms:fn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:fn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:fn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:fn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:fn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:fn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:fn([bt.points,bt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:fn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:fn([bt.common,bt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:fn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:fn([bt.sprite,bt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:fn([bt.common,bt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:fn([bt.lights,bt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};xn.physical={uniforms:fn([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const ro={r:0,b:0,g:0};function $x(s,t,e,n,r,a,l){const c=new Zt(0);let h=a===!0?0:1,d,f,p=null,g=0,x=null;function M(v,_){let T=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?e:t).get(b)),b===null?S(c,h):b&&b.isColor&&(S(b,1),T=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Go)?(f===void 0&&(f=new Mn(new ya(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Sr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=ve.getTransfer(b.colorSpace)!==Ae,(p!==b||g!==b.version||x!==s.toneMapping)&&(f.material.needsUpdate=!0,p=b,g=b.version,x=s.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Mn(new Zc(2,2),new $i({name:"BackgroundMaterial",uniforms:Sr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=ve.getTransfer(b.colorSpace)!==Ae,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||g!==b.version||x!==s.toneMapping)&&(d.material.needsUpdate=!0,p=b,g=b.version,x=s.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function S(v,_){v.getRGB(ro,Bf(s)),n.buffers.color.setClear(ro.r,ro.g,ro.b,_,l)}return{getClearColor:function(){return c},setClearColor:function(v,_=1){c.set(v),h=_,S(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,S(c,h)},render:M}}function Jx(s,t,e,n){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:t.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,c={},h=v(null);let d=h,f=!1;function p(z,K,Y,lt,j){let at=!1;if(l){const q=S(lt,Y,K);d!==q&&(d=q,x(d.object)),at=_(z,lt,Y,j),at&&T(z,lt,Y,j)}else{const q=K.wireframe===!0;(d.geometry!==lt.id||d.program!==Y.id||d.wireframe!==q)&&(d.geometry=lt.id,d.program=Y.id,d.wireframe=q,at=!0)}j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(at||f)&&(f=!1,it(z,K,Y,lt),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function g(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function x(z){return n.isWebGL2?s.bindVertexArray(z):a.bindVertexArrayOES(z)}function M(z){return n.isWebGL2?s.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function S(z,K,Y){const lt=Y.wireframe===!0;let j=c[z.id];j===void 0&&(j={},c[z.id]=j);let at=j[K.id];at===void 0&&(at={},j[K.id]=at);let q=at[lt];return q===void 0&&(q=v(g()),at[lt]=q),q}function v(z){const K=[],Y=[],lt=[];for(let j=0;j<r;j++)K[j]=0,Y[j]=0,lt[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:Y,attributeDivisors:lt,object:z,attributes:{},index:null}}function _(z,K,Y,lt){const j=d.attributes,at=K.attributes;let q=0;const ot=Y.getAttributes();for(const Mt in ot)if(ot[Mt].location>=0){const st=j[Mt];let ut=at[Mt];if(ut===void 0&&(Mt==="instanceMatrix"&&z.instanceMatrix&&(ut=z.instanceMatrix),Mt==="instanceColor"&&z.instanceColor&&(ut=z.instanceColor)),st===void 0||st.attribute!==ut||ut&&st.data!==ut.data)return!0;q++}return d.attributesNum!==q||d.index!==lt}function T(z,K,Y,lt){const j={},at=K.attributes;let q=0;const ot=Y.getAttributes();for(const Mt in ot)if(ot[Mt].location>=0){let st=at[Mt];st===void 0&&(Mt==="instanceMatrix"&&z.instanceMatrix&&(st=z.instanceMatrix),Mt==="instanceColor"&&z.instanceColor&&(st=z.instanceColor));const ut={};ut.attribute=st,st&&st.data&&(ut.data=st.data),j[Mt]=ut,q++}d.attributes=j,d.attributesNum=q,d.index=lt}function b(){const z=d.newAttributes;for(let K=0,Y=z.length;K<Y;K++)z[K]=0}function P(z){F(z,0)}function F(z,K){const Y=d.newAttributes,lt=d.enabledAttributes,j=d.attributeDivisors;Y[z]=1,lt[z]===0&&(s.enableVertexAttribArray(z),lt[z]=1),j[z]!==K&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,K),j[z]=K)}function U(){const z=d.newAttributes,K=d.enabledAttributes;for(let Y=0,lt=K.length;Y<lt;Y++)K[Y]!==z[Y]&&(s.disableVertexAttribArray(Y),K[Y]=0)}function I(z,K,Y,lt,j,at,q){q===!0?s.vertexAttribIPointer(z,K,Y,j,at):s.vertexAttribPointer(z,K,Y,lt,j,at)}function it(z,K,Y,lt){if(n.isWebGL2===!1&&(z.isInstancedMesh||lt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const j=lt.attributes,at=Y.getAttributes(),q=K.defaultAttributeValues;for(const ot in at){const Mt=at[ot];if(Mt.location>=0){let J=j[ot];if(J===void 0&&(ot==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),ot==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),J!==void 0){const st=J.normalized,ut=J.itemSize,xt=e.get(J);if(xt===void 0)continue;const Pt=xt.buffer,zt=xt.type,qt=xt.bytesPerElement,Bt=n.isWebGL2===!0&&(zt===s.INT||zt===s.UNSIGNED_INT||J.gpuType===yf);if(J.isInterleavedBufferAttribute){const ne=J.data,Z=ne.stride,Re=J.offset;if(ne.isInstancedInterleavedBuffer){for(let H=0;H<Mt.locationSize;H++)F(Mt.location+H,ne.meshPerAttribute);z.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let H=0;H<Mt.locationSize;H++)P(Mt.location+H);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let H=0;H<Mt.locationSize;H++)I(Mt.location+H,ut/Mt.locationSize,zt,st,Z*qt,(Re+ut/Mt.locationSize*H)*qt,Bt)}else{if(J.isInstancedBufferAttribute){for(let ne=0;ne<Mt.locationSize;ne++)F(Mt.location+ne,J.meshPerAttribute);z.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ne=0;ne<Mt.locationSize;ne++)P(Mt.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let ne=0;ne<Mt.locationSize;ne++)I(Mt.location+ne,ut/Mt.locationSize,zt,st,ut*qt,ut/Mt.locationSize*ne*qt,Bt)}}else if(q!==void 0){const st=q[ot];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(Mt.location,st);break;case 3:s.vertexAttrib3fv(Mt.location,st);break;case 4:s.vertexAttrib4fv(Mt.location,st);break;default:s.vertexAttrib1fv(Mt.location,st)}}}}U()}function R(){$();for(const z in c){const K=c[z];for(const Y in K){const lt=K[Y];for(const j in lt)M(lt[j].object),delete lt[j];delete K[Y]}delete c[z]}}function D(z){if(c[z.id]===void 0)return;const K=c[z.id];for(const Y in K){const lt=K[Y];for(const j in lt)M(lt[j].object),delete lt[j];delete K[Y]}delete c[z.id]}function G(z){for(const K in c){const Y=c[K];if(Y[z.id]===void 0)continue;const lt=Y[z.id];for(const j in lt)M(lt[j].object),delete lt[j];delete Y[z.id]}}function $(){ht(),f=!0,d!==h&&(d=h,x(d.object))}function ht(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:$,resetDefaultState:ht,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:G,initAttributes:b,enableAttribute:P,disableUnusedAttributes:U}}function Qx(s,t,e,n){const r=n.isWebGL2;let a;function l(f){a=f}function c(f,p){s.drawArrays(a,f,p),e.update(p,a,1)}function h(f,p,g){if(g===0)return;let x,M;if(r)x=s,M="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[M](a,f,p,g),e.update(p,a,g)}function d(f,p,g){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<g;M++)this.render(f[M],p[M]);else{x.multiDrawArraysWEBGL(a,f,0,p,0,g);let M=0;for(let S=0;S<g;S++)M+=p[S];e.update(M,a,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function ty(s,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=e.precision!==void 0?e.precision:"highp";const h=a(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=l||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,P=l||t.has("OES_texture_float"),F=b&&P,U=l?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:b,floatFragmentTextures:P,floatVertexTextures:F,maxSamples:U}}function ey(s){const t=this;let e=null,n=0,r=!1,a=!1;const l=new Hi,c=new ue,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const x=p.length!==0||g||n!==0||r;return r=g,n=p.length,x},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,g){e=f(p,g,0)},this.setState=function(p,g,x){const M=p.clippingPlanes,S=p.clipIntersection,v=p.clipShadows,_=s.get(p);if(!r||M===null||M.length===0||a&&!v)a?f(null):d();else{const T=a?0:n,b=T*4;let P=_.clippingState||null;h.value=P,P=f(M,g,b,x);for(let F=0;F!==b;++F)P[F]=e[F];_.clippingState=P,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(p,g,x,M){const S=p!==null?p.length:0;let v=null;if(S!==0){if(v=h.value,M!==!0||v===null){const _=x+S*4,T=g.matrixWorldInverse;c.getNormalMatrix(T),(v===null||v.length<_)&&(v=new Float32Array(_));for(let b=0,P=x;b!==S;++b,P+=4)l.copy(p[b]).applyMatrix4(T,c),l.normal.toArray(v,P),v[P+3]=l.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,v}}function ny(s){let t=new WeakMap;function e(l,c){return c===pc?l.mapping=gr:c===mc&&(l.mapping=_r),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===pc||c===mc)if(t.has(l)){const h=t.get(l).texture;return e(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const d=new p_(h.height/2);return d.fromEquirectangularTexture(s,l),t.set(l,d),l.addEventListener("dispose",r),e(d.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class qc extends Ff{constructor(t=-1,e=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-t,l=n+t,c=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,c-=f*this.view.offsetY,h=c-f*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const lr=4,Qu=[.125,.215,.35,.446,.526,.582],ms=20,Wl=new qc,td=new Zt;let jl=null,Xl=0,Zl=0;const fs=(1+Math.sqrt(5))/2,rr=1/fs,ed=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,fs,rr),new O(0,fs,-rr),new O(rr,0,fs),new O(-rr,0,fs),new O(fs,rr,0),new O(-fs,rr,0)];class nd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){jl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jl,Xl,Zl),t.scissorTest=!1,ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:da,format:Bn,colorSpace:je,depthBuffer:!1},r=id(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iy(a)),this._blurMaterial=sy(a,t,e)}return r}_compileMaterial(t){const e=new Mn(this._lodPlanes[0],t);this._renderer.compile(e,Wl)}_sceneToCubeUV(t,e,n,r){const c=new pn(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,g=f.toneMapping;f.getClearColor(td),f.toneMapping=Zi,f.autoClear=!1;const x=new _s({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),M=new Mn(new ya,x);let S=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,S=!0):(x.color.copy(td),S=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(c.up.set(0,h[_],0),c.lookAt(d[_],0,0)):T===1?(c.up.set(0,0,h[_]),c.lookAt(0,d[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,d[_]));const b=this._cubeSize;ao(r,T*b,_>2?b:0,b,b),f.setRenderTarget(r),S&&f.render(M,c),f.render(t,c)}M.geometry.dispose(),M.material.dispose(),f.toneMapping=g,f.autoClear=p,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===gr||t.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new Mn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=t;const h=this._cubeSize;ao(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(l,Wl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=ed[(r-1)%ed.length];this._blur(t,r-1,r,a,l)}e.autoClear=n}_blur(t,e,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,r,"latitudinal",a),this._halfBlur(l,t,n,n,r,"longitudinal",a)}_halfBlur(t,e,n,r,a,l,c){const h=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Mn(this._lodPlanes[r],d),g=d.uniforms,x=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*ms-1),S=a/M,v=isFinite(a)?1+Math.floor(f*S):ms;v>ms&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ms}`);const _=[];let T=0;for(let I=0;I<ms;++I){const it=I/S,R=Math.exp(-it*it/2);_.push(R),I===0?T+=R:I<v&&(T+=2*R)}for(let I=0;I<_.length;I++)_[I]=_[I]/T;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-n;const P=this._sizeLods[r],F=3*P*(r>b-lr?r-b+lr:0),U=4*(this._cubeSize-P);ao(e,F,U,3*P,2*P),h.setRenderTarget(e),h.render(p,Wl)}}function iy(s){const t=[],e=[],n=[];let r=s;const a=s-lr+1+Qu.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);e.push(c);let h=1/c;l>s-lr?h=Qu[l-s+lr-1]:l===0&&(h=0),n.push(h);const d=1/(c-2),f=-d,p=1+d,g=[f,f,p,f,p,p,f,f,p,p,f,p],x=6,M=6,S=3,v=2,_=1,T=new Float32Array(S*M*x),b=new Float32Array(v*M*x),P=new Float32Array(_*M*x);for(let U=0;U<x;U++){const I=U%3*2/3-1,it=U>2?0:-1,R=[I,it,0,I+2/3,it,0,I+2/3,it+1,0,I,it,0,I+2/3,it+1,0,I,it+1,0];T.set(R,S*M*U),b.set(g,v*M*U);const D=[U,U,U,U,U,U];P.set(D,_*M*U)}const F=new mn;F.setAttribute("position",new Ve(T,S)),F.setAttribute("uv",new Ve(b,v)),F.setAttribute("faceIndex",new Ve(P,_)),t.push(F),r>lr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function id(s,t,e){const n=new Ls(s,t,e);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function sy(s,t,e){const n=new Float32Array(ms),r=new O(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function sd(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function rd(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ry(s){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const h=c.mapping,d=h===pc||h===mc,f=h===gr||h===_r;if(d||f)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=t.get(c);return e===null&&(e=new nd(s)),p=d?e.fromEquirectangular(c,p):e.fromCubemap(c,p),t.set(c,p),p.texture}else{if(t.has(c))return t.get(c).texture;{const p=c.image;if(d&&p&&p.height>0||f&&p&&r(p)){e===null&&(e=new nd(s));const g=d?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,g),c.addEventListener("dispose",a),g.texture}else return null}}}return c}function r(c){let h=0;const d=6;for(let f=0;f<d;f++)c[f]!==void 0&&h++;return h===d}function a(c){const h=c.target;h.removeEventListener("dispose",a);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function ay(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function oy(s,t,e,n){const r={},a=new WeakMap;function l(p){const g=p.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);for(const M in g.morphAttributes){const S=g.morphAttributes[M];for(let v=0,_=S.length;v<_;v++)t.remove(S[v])}g.removeEventListener("dispose",l),delete r[g.id];const x=a.get(g);x&&(t.remove(x),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(p,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,e.memory.geometries++),g}function h(p){const g=p.attributes;for(const M in g)t.update(g[M],s.ARRAY_BUFFER);const x=p.morphAttributes;for(const M in x){const S=x[M];for(let v=0,_=S.length;v<_;v++)t.update(S[v],s.ARRAY_BUFFER)}}function d(p){const g=[],x=p.index,M=p.attributes.position;let S=0;if(x!==null){const T=x.array;S=x.version;for(let b=0,P=T.length;b<P;b+=3){const F=T[b+0],U=T[b+1],I=T[b+2];g.push(F,U,U,I,I,F)}}else if(M!==void 0){const T=M.array;S=M.version;for(let b=0,P=T.length/3-1;b<P;b+=3){const F=b+0,U=b+1,I=b+2;g.push(F,U,U,I,I,F)}}else return;const v=new(Pf(g)?Of:Uf)(g,1);v.version=S;const _=a.get(p);_&&t.remove(_),a.set(p,v)}function f(p){const g=a.get(p);if(g){const x=p.index;x!==null&&g.version<x.version&&d(p)}else d(p);return a.get(p)}return{get:c,update:h,getWireframeAttribute:f}}function ly(s,t,e,n){const r=n.isWebGL2;let a;function l(x){a=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function f(x,M){s.drawElements(a,M,c,x*h),e.update(M,a,1)}function p(x,M,S){if(S===0)return;let v,_;if(r)v=s,_="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](a,M,c,x*h,S),e.update(M,a,S)}function g(x,M,S){if(S===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<S;_++)this.render(x[_]/h,M[_]);else{v.multiDrawElementsWEBGL(a,M,0,c,x,0,S);let _=0;for(let T=0;T<S;T++)_+=M[T];e.update(_,a,1)}}this.setMode=l,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=g}function cy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=c*(a/3);break;case s.LINES:e.lines+=c*(a/2);break;case s.LINE_STRIP:e.lines+=c*(a-1);break;case s.LINE_LOOP:e.lines+=c*a;break;case s.POINTS:e.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function hy(s,t){return s[0]-t[0]}function uy(s,t){return Math.abs(t[1])-Math.abs(s[1])}function dy(s,t,e){const n={},r=new Float32Array(8),a=new WeakMap,l=new _e,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function h(d,f,p){const g=d.morphTargetInfluences;if(t.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,M=x!==void 0?x.length:0;let S=a.get(f);if(S===void 0||S.count!==M){let z=function(){$.dispose(),a.delete(f),f.removeEventListener("dispose",z)};S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,F=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let it=0;T===!0&&(it=1),b===!0&&(it=2),P===!0&&(it=3);let R=f.attributes.position.count*it,D=1;R>t.maxTextureSize&&(D=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const G=new Float32Array(R*D*4*M),$=new Df(G,R,D,M);$.type=Ei,$.needsUpdate=!0;const ht=it*4;for(let K=0;K<M;K++){const Y=F[K],lt=U[K],j=I[K],at=R*D*4*K;for(let q=0;q<Y.count;q++){const ot=q*ht;T===!0&&(l.fromBufferAttribute(Y,q),G[at+ot+0]=l.x,G[at+ot+1]=l.y,G[at+ot+2]=l.z,G[at+ot+3]=0),b===!0&&(l.fromBufferAttribute(lt,q),G[at+ot+4]=l.x,G[at+ot+5]=l.y,G[at+ot+6]=l.z,G[at+ot+7]=0),P===!0&&(l.fromBufferAttribute(j,q),G[at+ot+8]=l.x,G[at+ot+9]=l.y,G[at+ot+10]=l.z,G[at+ot+11]=j.itemSize===4?l.w:1)}}S={count:M,texture:$,size:new jt(R,D)},a.set(f,S),f.addEventListener("dispose",z)}let v=0;for(let T=0;T<g.length;T++)v+=g[T];const _=f.morphTargetsRelative?1:1-v;p.getUniforms().setValue(s,"morphTargetBaseInfluence",_),p.getUniforms().setValue(s,"morphTargetInfluences",g),p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,e),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}else{const x=g===void 0?0:g.length;let M=n[f.id];if(M===void 0||M.length!==x){M=[];for(let b=0;b<x;b++)M[b]=[b,0];n[f.id]=M}for(let b=0;b<x;b++){const P=M[b];P[0]=b,P[1]=g[b]}M.sort(uy);for(let b=0;b<8;b++)b<x&&M[b][1]?(c[b][0]=M[b][0],c[b][1]=M[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(hy);const S=f.morphAttributes.position,v=f.morphAttributes.normal;let _=0;for(let b=0;b<8;b++){const P=c[b],F=P[0],U=P[1];F!==Number.MAX_SAFE_INTEGER&&U?(S&&f.getAttribute("morphTarget"+b)!==S[F]&&f.setAttribute("morphTarget"+b,S[F]),v&&f.getAttribute("morphNormal"+b)!==v[F]&&f.setAttribute("morphNormal"+b,v[F]),r[b]=U,_+=U):(S&&f.hasAttribute("morphTarget"+b)===!0&&f.deleteAttribute("morphTarget"+b),v&&f.hasAttribute("morphNormal"+b)===!0&&f.deleteAttribute("morphNormal"+b),r[b]=0)}const T=f.morphTargetsRelative?1:1-_;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:h}}function fy(s,t,e,n){let r=new WeakMap;function a(h){const d=n.render.frame,f=h.geometry,p=t.get(h,f);if(r.get(p)!==d&&(t.update(p),r.set(p,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return p}function l(){r=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}class Hf extends rn{constructor(t,e,n,r,a,l,c,h,d,f){if(f=f!==void 0?f:bs,f!==bs&&f!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===bs&&(n=Wi),n===void 0&&f===xr&&(n=Ss),super(null,r,a,l,c,h,f,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:Ye,this.minFilter=h!==void 0?h:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gf=new rn,Vf=new Hf(1,1);Vf.compareFunction=Rf;const Wf=new Df,jf=new Jg,Xf=new kf,ad=[],od=[],ld=new Float32Array(16),cd=new Float32Array(9),hd=new Float32Array(4);function Lr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let a=ad[r];if(a===void 0&&(a=new Float32Array(r),ad[r]=a),t!==0){n.toArray(a,0);for(let l=1,c=0;l!==t;++l)c+=e,s[l].toArray(a,c)}return a}function Xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function jo(s,t){let e=od[t];e===void 0&&(e=new Int32Array(t),od[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function py(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function my(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2fv(this.addr,t),Ze(e,t)}}function gy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;s.uniform3fv(this.addr,t),Ze(e,t)}}function _y(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4fv(this.addr,t),Ze(e,t)}}function vy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Xe(e,n))return;hd.set(n),s.uniformMatrix2fv(this.addr,!1,hd),Ze(e,n)}}function xy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Xe(e,n))return;cd.set(n),s.uniformMatrix3fv(this.addr,!1,cd),Ze(e,n)}}function yy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Xe(e,n))return;ld.set(n),s.uniformMatrix4fv(this.addr,!1,ld),Ze(e,n)}}function My(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2iv(this.addr,t),Ze(e,t)}}function by(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3iv(this.addr,t),Ze(e,t)}}function Ey(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4iv(this.addr,t),Ze(e,t)}}function Ty(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function wy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2uiv(this.addr,t),Ze(e,t)}}function Ay(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3uiv(this.addr,t),Ze(e,t)}}function Ly(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4uiv(this.addr,t),Ze(e,t)}}function Ry(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);const a=this.type===s.SAMPLER_2D_SHADOW?Vf:Gf;e.setTexture2D(t||a,r)}function Py(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||jf,r)}function Cy(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Xf,r)}function Iy(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Wf,r)}function Dy(s){switch(s){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return vy;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return Sy;case 35668:case 35672:return by;case 35669:case 35673:return Ey;case 5125:return Ty;case 36294:return wy;case 36295:return Ay;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Iy}}function Ny(s,t){s.uniform1fv(this.addr,t)}function Uy(s,t){const e=Lr(t,this.size,2);s.uniform2fv(this.addr,e)}function Oy(s,t){const e=Lr(t,this.size,3);s.uniform3fv(this.addr,e)}function By(s,t){const e=Lr(t,this.size,4);s.uniform4fv(this.addr,e)}function Fy(s,t){const e=Lr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ky(s,t){const e=Lr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function zy(s,t){const e=Lr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Hy(s,t){s.uniform1iv(this.addr,t)}function Gy(s,t){s.uniform2iv(this.addr,t)}function Vy(s,t){s.uniform3iv(this.addr,t)}function Wy(s,t){s.uniform4iv(this.addr,t)}function jy(s,t){s.uniform1uiv(this.addr,t)}function Xy(s,t){s.uniform2uiv(this.addr,t)}function Zy(s,t){s.uniform3uiv(this.addr,t)}function qy(s,t){s.uniform4uiv(this.addr,t)}function Ky(s,t,e){const n=this.cache,r=t.length,a=jo(e,r);Xe(n,a)||(s.uniform1iv(this.addr,a),Ze(n,a));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||Gf,a[l])}function Yy(s,t,e){const n=this.cache,r=t.length,a=jo(e,r);Xe(n,a)||(s.uniform1iv(this.addr,a),Ze(n,a));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||jf,a[l])}function $y(s,t,e){const n=this.cache,r=t.length,a=jo(e,r);Xe(n,a)||(s.uniform1iv(this.addr,a),Ze(n,a));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||Xf,a[l])}function Jy(s,t,e){const n=this.cache,r=t.length,a=jo(e,r);Xe(n,a)||(s.uniform1iv(this.addr,a),Ze(n,a));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||Wf,a[l])}function Qy(s){switch(s){case 5126:return Ny;case 35664:return Uy;case 35665:return Oy;case 35666:return By;case 35674:return Fy;case 35675:return ky;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return Gy;case 35668:case 35672:return Vy;case 35669:case 35673:return Wy;case 5125:return jy;case 36294:return Xy;case 36295:return Zy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Jy}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dy(e.type)}}class e0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qy(e.type)}}class n0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(t,e[c.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function ud(s,t){s.seq.push(t),s.map[t.id]=t}function i0(s,t,e){const n=s.name,r=n.length;for(ql.lastIndex=0;;){const a=ql.exec(n),l=ql.lastIndex;let c=a[1];const h=a[2]==="]",d=a[3];if(h&&(c=c|0),d===void 0||d==="["&&l+2===r){ud(e,d===void 0?new t0(c,s,t):new e0(c,s,t));break}else{let p=e.map[c];p===void 0&&(p=new n0(c),ud(e,p)),e=p}}}class Lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);i0(a,l,this)}}setValue(t,e,n,r){const a=this.map[e];a!==void 0&&a.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let a=0,l=e.length;a!==l;++a){const c=e[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,a=t.length;r!==a;++r){const l=t[r];l.id in e&&n.push(l)}return n}}function dd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const s0=37297;let r0=0;function a0(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return n.join(`
`)}function o0(s){const t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(s);let n;switch(t===e?n="":t===Uo&&e===No?n="LinearDisplayP3ToLinearSRGB":t===No&&e===Uo&&(n="LinearSRGBToLinearDisplayP3"),s){case je:case Vo:return[n,"LinearTransferOETF"];case Le:case Gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fd(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+a0(s.getShaderSource(t),l)}else return r}function l0(s,t){const e=o0(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function c0(s,t){let e;switch(t){case ag:e="Linear";break;case og:e="Reinhard";break;case lg:e="OptimizedCineon";break;case cg:e="ACESFilmic";break;case ug:e="AgX";break;case hg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function h0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function u0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(cr).join(`
`)}function d0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(t,r),l=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),e[l]={type:a.type,location:s.getAttribLocation(t,l),locationSize:c}}return e}function cr(s){return s!==""}function pd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function md(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(s){return s.replace(p0,g0)}const m0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g0(s,t){let e=ae[t];if(e===void 0){const n=m0.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(s){return s.replace(_0,v0)}function v0(s,t,e,n){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function _d(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function x0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_f?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function y0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gr:case _r:t="ENVMAP_TYPE_CUBE";break;case Go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function S0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case sg:t="ENVMAP_BLENDING_MIX";break;case rg:t="ENVMAP_BLENDING_ADD";break}return t}function b0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function E0(s,t,e,n){const r=s.getContext(),a=e.defines;let l=e.vertexShader,c=e.fragmentShader;const h=x0(e),d=y0(e),f=M0(e),p=S0(e),g=b0(e),x=e.isWebGL2?"":h0(e),M=u0(e),S=d0(a),v=r.createProgram();let _,T,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(cr).join(`
`),_.length>0&&(_+=`
`),T=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(cr).join(`
`),T.length>0&&(T+=`
`)):(_=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),T=[x,_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?ae.tonemapping_pars_fragment:"",e.toneMapping!==Zi?c0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,l0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),l=Mc(l),l=pd(l,e),l=md(l,e),c=Mc(c),c=pd(c,e),c=md(c,e),l=gd(l),c=gd(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,T=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const P=b+_+l,F=b+T+c,U=dd(r,r.VERTEX_SHADER,P),I=dd(r,r.FRAGMENT_SHADER,F);r.attachShader(v,U),r.attachShader(v,I),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function it($){if(s.debug.checkShaderErrors){const ht=r.getProgramInfoLog(v).trim(),z=r.getShaderInfoLog(U).trim(),K=r.getShaderInfoLog(I).trim();let Y=!0,lt=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,v,U,I);else{const j=fd(r,U,"vertex"),at=fd(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+ht+`
`+j+`
`+at)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(z===""||K==="")&&(lt=!1);lt&&($.diagnostics={runnable:Y,programLog:ht,vertexShader:{log:z,prefix:_},fragmentShader:{log:K,prefix:T}})}r.deleteShader(U),r.deleteShader(I),R=new Lo(r,v),D=f0(r,v)}let R;this.getUniforms=function(){return R===void 0&&it(this),R};let D;this.getAttributes=function(){return D===void 0&&it(this),D};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(v,s0)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=I,this}let T0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new A0(t),e.set(t,n)),n}}class A0{constructor(t){this.id=T0++,this.code=t,this.usedTimes=0}}function L0(s,t,e,n,r,a,l){const c=new Wc,h=new w0,d=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,g=r.vertexTextures;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(R){return R===0?"uv":`uv${R}`}function v(R,D,G,$,ht){const z=$.fog,K=ht.geometry,Y=R.isMeshStandardMaterial?$.environment:null,lt=(R.isMeshStandardMaterial?e:t).get(R.envMap||Y),j=lt&&lt.mapping===Go?lt.image.height:null,at=M[R.type];R.precision!==null&&(x=r.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=q!==void 0?q.length:0;let Mt=0;K.morphAttributes.position!==void 0&&(Mt=1),K.morphAttributes.normal!==void 0&&(Mt=2),K.morphAttributes.color!==void 0&&(Mt=3);let J,st,ut,xt;if(at){const we=xn[at];J=we.vertexShader,st=we.fragmentShader}else J=R.vertexShader,st=R.fragmentShader,h.update(R),ut=h.getVertexShaderID(R),xt=h.getFragmentShaderID(R);const Pt=s.getRenderTarget(),zt=ht.isInstancedMesh===!0,qt=ht.isBatchedMesh===!0,Bt=!!R.map,ne=!!R.matcap,Z=!!lt,Re=!!R.aoMap,H=!!R.lightMap,rt=!!R.bumpMap,ct=!!R.normalMap,Gt=!!R.displacementMap,Dt=!!R.emissiveMap,A=!!R.metalnessMap,w=!!R.roughnessMap,X=R.anisotropy>0,pt=R.clearcoat>0,dt=R.iridescence>0,gt=R.sheen>0,Ct=R.transmission>0,Et=X&&!!R.anisotropyMap,At=pt&&!!R.clearcoatMap,Ot=pt&&!!R.clearcoatNormalMap,Jt=pt&&!!R.clearcoatRoughnessMap,mt=dt&&!!R.iridescenceMap,de=dt&&!!R.iridescenceThicknessMap,Qt=gt&&!!R.sheenColorMap,Vt=gt&&!!R.sheenRoughnessMap,Tt=!!R.specularMap,St=!!R.specularColorMap,N=!!R.specularIntensityMap,_t=Ct&&!!R.transmissionMap,Nt=Ct&&!!R.thicknessMap,It=!!R.gradientMap,vt=!!R.alphaMap,k=R.alphaTest>0,yt=!!R.alphaHash,wt=!!R.extensions,Xt=!!K.attributes.uv1,Ht=!!K.attributes.uv2,le=!!K.attributes.uv3;let ce=Zi;return R.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(ce=s.toneMapping),{isWebGL2:f,shaderID:at,shaderType:R.type,shaderName:R.name,vertexShader:J,fragmentShader:st,defines:R.defines,customVertexShaderID:ut,customFragmentShaderID:xt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:qt,instancing:zt,instancingColor:zt&&ht.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Pt===null?s.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:je,map:Bt,matcap:ne,envMap:Z,envMapMode:Z&&lt.mapping,envMapCubeUVHeight:j,aoMap:Re,lightMap:H,bumpMap:rt,normalMap:ct,displacementMap:g&&Gt,emissiveMap:Dt,normalMapObjectSpace:ct&&R.normalMapType===Tg,normalMapTangentSpace:ct&&R.normalMapType===Hc,metalnessMap:A,roughnessMap:w,anisotropy:X,anisotropyMap:Et,clearcoat:pt,clearcoatMap:At,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Jt,iridescence:dt,iridescenceMap:mt,iridescenceThicknessMap:de,sheen:gt,sheenColorMap:Qt,sheenRoughnessMap:Vt,specularMap:Tt,specularColorMap:St,specularIntensityMap:N,transmission:Ct,transmissionMap:_t,thicknessMap:Nt,gradientMap:It,opaque:R.transparent===!1&&R.blending===dr,alphaMap:vt,alphaTest:k,alphaHash:yt,combine:R.combine,mapUv:Bt&&S(R.map.channel),aoMapUv:Re&&S(R.aoMap.channel),lightMapUv:H&&S(R.lightMap.channel),bumpMapUv:rt&&S(R.bumpMap.channel),normalMapUv:ct&&S(R.normalMap.channel),displacementMapUv:Gt&&S(R.displacementMap.channel),emissiveMapUv:Dt&&S(R.emissiveMap.channel),metalnessMapUv:A&&S(R.metalnessMap.channel),roughnessMapUv:w&&S(R.roughnessMap.channel),anisotropyMapUv:Et&&S(R.anisotropyMap.channel),clearcoatMapUv:At&&S(R.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&S(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&S(R.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&S(R.iridescenceMap.channel),iridescenceThicknessMapUv:de&&S(R.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&S(R.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&S(R.sheenRoughnessMap.channel),specularMapUv:Tt&&S(R.specularMap.channel),specularColorMapUv:St&&S(R.specularColorMap.channel),specularIntensityMapUv:N&&S(R.specularIntensityMap.channel),transmissionMapUv:_t&&S(R.transmissionMap.channel),thicknessMapUv:Nt&&S(R.thicknessMap.channel),alphaMapUv:vt&&S(R.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ct||X),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:Xt,vertexUv2s:Ht,vertexUv3s:le,pointsUvs:ht.isPoints===!0&&!!K.attributes.uv&&(Bt||vt),fog:!!z,useFog:R.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ht.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Mt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Bt&&R.map.isVideoTexture===!0&&ve.getTransfer(R.map.colorSpace)===Ae,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ni,flipSided:R.side===Sn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:wt&&R.extensions.derivatives===!0,extensionFragDepth:wt&&R.extensions.fragDepth===!0,extensionDrawBuffers:wt&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:wt&&R.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function _(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)D.push(G),D.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(T(D,R),b(D,R),D.push(s.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function T(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function b(R,D){c.disableAll(),D.isWebGL2&&c.enable(0),D.supportsVertexTextures&&c.enable(1),D.instancing&&c.enable(2),D.instancingColor&&c.enable(3),D.matcap&&c.enable(4),D.envMap&&c.enable(5),D.normalMapObjectSpace&&c.enable(6),D.normalMapTangentSpace&&c.enable(7),D.clearcoat&&c.enable(8),D.iridescence&&c.enable(9),D.alphaTest&&c.enable(10),D.vertexColors&&c.enable(11),D.vertexAlphas&&c.enable(12),D.vertexUv1s&&c.enable(13),D.vertexUv2s&&c.enable(14),D.vertexUv3s&&c.enable(15),D.vertexTangents&&c.enable(16),D.anisotropy&&c.enable(17),D.alphaHash&&c.enable(18),D.batching&&c.enable(19),R.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.skinning&&c.enable(4),D.morphTargets&&c.enable(5),D.morphNormals&&c.enable(6),D.morphColors&&c.enable(7),D.premultipliedAlpha&&c.enable(8),D.shadowMapEnabled&&c.enable(9),D.useLegacyLights&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),R.push(c.mask)}function P(R){const D=M[R.type];let G;if(D){const $=xn[D];G=jc.clone($.uniforms)}else G=R.uniforms;return G}function F(R,D){let G;for(let $=0,ht=d.length;$<ht;$++){const z=d[$];if(z.cacheKey===D){G=z,++G.usedTimes;break}}return G===void 0&&(G=new E0(s,D,R,a),d.push(G)),G}function U(R){if(--R.usedTimes===0){const D=d.indexOf(R);d[D]=d[d.length-1],d.pop(),R.destroy()}}function I(R){h.remove(R)}function it(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:P,acquireProgram:F,releaseProgram:U,releaseShaderCache:I,programs:d,dispose:it}}function R0(){let s=new WeakMap;function t(a){let l=s.get(a);return l===void 0&&(l={},s.set(a,l)),l}function e(a){s.delete(a)}function n(a,l,c){s.get(a)[l]=c}function r(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function P0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function vd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xd(){const s=[];let t=0;const e=[],n=[],r=[];function a(){t=0,e.length=0,n.length=0,r.length=0}function l(p,g,x,M,S,v){let _=s[t];return _===void 0?(_={id:p.id,object:p,geometry:g,material:x,groupOrder:M,renderOrder:p.renderOrder,z:S,group:v},s[t]=_):(_.id=p.id,_.object=p,_.geometry=g,_.material=x,_.groupOrder=M,_.renderOrder=p.renderOrder,_.z=S,_.group=v),t++,_}function c(p,g,x,M,S,v){const _=l(p,g,x,M,S,v);x.transmission>0?n.push(_):x.transparent===!0?r.push(_):e.push(_)}function h(p,g,x,M,S,v){const _=l(p,g,x,M,S,v);x.transmission>0?n.unshift(_):x.transparent===!0?r.unshift(_):e.unshift(_)}function d(p,g){e.length>1&&e.sort(p||P0),n.length>1&&n.sort(g||vd),r.length>1&&r.sort(g||vd)}function f(){for(let p=t,g=s.length;p<g;p++){const x=s[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:a,push:c,unshift:h,finish:f,sort:d}}function C0(){let s=new WeakMap;function t(n,r){const a=s.get(n);let l;return a===void 0?(l=new xd,s.set(n,[l])):r>=a.length?(l=new xd,a.push(l)):l=a[r],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function I0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function D0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let N0=0;function U0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function O0(s,t){const e=new I0,n=D0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new O);const a=new O,l=new oe,c=new oe;function h(f,p){let g=0,x=0,M=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let S=0,v=0,_=0,T=0,b=0,P=0,F=0,U=0,I=0,it=0,R=0;f.sort(U0);const D=p===!0?Math.PI:1;for(let $=0,ht=f.length;$<ht;$++){const z=f[$],K=z.color,Y=z.intensity,lt=z.distance,j=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=K.r*Y*D,x+=K.g*Y*D,M+=K.b*Y*D;else if(z.isLightProbe){for(let at=0;at<9;at++)r.probe[at].addScaledVector(z.sh.coefficients[at],Y);R++}else if(z.isDirectionalLight){const at=e.get(z);if(at.color.copy(z.color).multiplyScalar(z.intensity*D),z.castShadow){const q=z.shadow,ot=n.get(z);ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,r.directionalShadow[S]=ot,r.directionalShadowMap[S]=j,r.directionalShadowMatrix[S]=z.shadow.matrix,P++}r.directional[S]=at,S++}else if(z.isSpotLight){const at=e.get(z);at.position.setFromMatrixPosition(z.matrixWorld),at.color.copy(K).multiplyScalar(Y*D),at.distance=lt,at.coneCos=Math.cos(z.angle),at.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),at.decay=z.decay,r.spot[_]=at;const q=z.shadow;if(z.map&&(r.spotLightMap[I]=z.map,I++,q.updateMatrices(z),z.castShadow&&it++),r.spotLightMatrix[_]=q.matrix,z.castShadow){const ot=n.get(z);ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,r.spotShadow[_]=ot,r.spotShadowMap[_]=j,U++}_++}else if(z.isRectAreaLight){const at=e.get(z);at.color.copy(K).multiplyScalar(Y),at.halfWidth.set(z.width*.5,0,0),at.halfHeight.set(0,z.height*.5,0),r.rectArea[T]=at,T++}else if(z.isPointLight){const at=e.get(z);if(at.color.copy(z.color).multiplyScalar(z.intensity*D),at.distance=z.distance,at.decay=z.decay,z.castShadow){const q=z.shadow,ot=n.get(z);ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,ot.shadowCameraNear=q.camera.near,ot.shadowCameraFar=q.camera.far,r.pointShadow[v]=ot,r.pointShadowMap[v]=j,r.pointShadowMatrix[v]=z.shadow.matrix,F++}r.point[v]=at,v++}else if(z.isHemisphereLight){const at=e.get(z);at.skyColor.copy(z.color).multiplyScalar(Y*D),at.groundColor.copy(z.groundColor).multiplyScalar(Y*D),r.hemi[b]=at,b++}}T>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=bt.LTC_FLOAT_1,r.rectAreaLTC2=bt.LTC_FLOAT_2):(r.rectAreaLTC1=bt.LTC_HALF_1,r.rectAreaLTC2=bt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=bt.LTC_FLOAT_1,r.rectAreaLTC2=bt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=bt.LTC_HALF_1,r.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=M;const G=r.hash;(G.directionalLength!==S||G.pointLength!==v||G.spotLength!==_||G.rectAreaLength!==T||G.hemiLength!==b||G.numDirectionalShadows!==P||G.numPointShadows!==F||G.numSpotShadows!==U||G.numSpotMaps!==I||G.numLightProbes!==R)&&(r.directional.length=S,r.spot.length=_,r.rectArea.length=T,r.point.length=v,r.hemi.length=b,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=U+I-it,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=it,r.numLightProbes=R,G.directionalLength=S,G.pointLength=v,G.spotLength=_,G.rectAreaLength=T,G.hemiLength=b,G.numDirectionalShadows=P,G.numPointShadows=F,G.numSpotShadows=U,G.numSpotMaps=I,G.numLightProbes=R,r.version=N0++)}function d(f,p){let g=0,x=0,M=0,S=0,v=0;const _=p.matrixWorldInverse;for(let T=0,b=f.length;T<b;T++){const P=f[T];if(P.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(_),g++}else if(P.isSpotLight){const F=r.spot[M];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(_),F.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(_),M++}else if(P.isRectAreaLight){const F=r.rectArea[S];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(_),c.identity(),l.copy(P.matrixWorld),l.premultiply(_),c.extractRotation(l),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const F=r.point[x];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(_),x++}else if(P.isHemisphereLight){const F=r.hemi[v];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(_),v++}}}return{setup:h,setupView:d,state:r}}function yd(s,t){const e=new O0(s,t),n=[],r=[];function a(){n.length=0,r.length=0}function l(p){n.push(p)}function c(p){r.push(p)}function h(p){e.setup(n,p)}function d(p){e.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:h,setupLightsView:d,pushLight:l,pushShadow:c}}function B0(s,t){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let h;return c===void 0?(h=new yd(s,t),e.set(a,[h])):l>=c.length?(h=new yd(s,t),c.push(h)):h=c[l],h}function r(){e=new WeakMap}return{get:n,dispose:r}}class F0 extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class k0 extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G0(s,t,e){let n=new Xc;const r=new jt,a=new jt,l=new _e,c=new F0({depthPacking:Eg}),h=new k0,d={},f=e.maxTextureSize,p={[Ai]:Sn,[Sn]:Ai,[ni]:ni},g=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:z0,fragmentShader:H0}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new mn;M.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Mn(M,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let _=this.type;this.render=function(U,I,it){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||U.length===0)return;const R=s.getRenderTarget(),D=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Xi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ht=_!==Mi&&this.type===Mi,z=_===Mi&&this.type!==Mi;for(let K=0,Y=U.length;K<Y;K++){const lt=U[K],j=lt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const at=j.getFrameExtents();if(r.multiply(at),a.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/at.x),r.x=a.x*at.x,j.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/at.y),r.y=a.y*at.y,j.mapSize.y=a.y)),j.map===null||ht===!0||z===!0){const ot=this.type!==Mi?{minFilter:Ye,magFilter:Ye}:{};j.map!==null&&j.map.dispose(),j.map=new Ls(r.x,r.y,ot),j.map.texture.name=lt.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const q=j.getViewportCount();for(let ot=0;ot<q;ot++){const Mt=j.getViewport(ot);l.set(a.x*Mt.x,a.y*Mt.y,a.x*Mt.z,a.y*Mt.w),$.viewport(l),j.updateMatrices(lt,ot),n=j.getFrustum(),P(I,it,j.camera,lt,this.type)}j.isPointLightShadow!==!0&&this.type===Mi&&T(j,it),j.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(R,D,G)};function T(U,I){const it=t.update(S);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ls(r.x,r.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(I,null,it,g,S,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(I,null,it,x,S,null)}function b(U,I,it,R){let D=null;const G=it.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)D=G;else if(D=it.isPointLight===!0?h:c,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const $=D.uuid,ht=I.uuid;let z=d[$];z===void 0&&(z={},d[$]=z);let K=z[ht];K===void 0&&(K=D.clone(),z[ht]=K,I.addEventListener("dispose",F)),D=K}if(D.visible=I.visible,D.wireframe=I.wireframe,R===Mi?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:p[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,it.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const $=s.properties.get(D);$.light=it}return D}function P(U,I,it,R,D){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&D===Mi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,U.matrixWorld);const ht=t.update(U),z=U.material;if(Array.isArray(z)){const K=ht.groups;for(let Y=0,lt=K.length;Y<lt;Y++){const j=K[Y],at=z[j.materialIndex];if(at&&at.visible){const q=b(U,at,R,D);U.onBeforeShadow(s,U,I,it,ht,q,j),s.renderBufferDirect(it,null,ht,q,U,j),U.onAfterShadow(s,U,I,it,ht,q,j)}}}else if(z.visible){const K=b(U,z,R,D);U.onBeforeShadow(s,U,I,it,ht,K,null),s.renderBufferDirect(it,null,ht,K,U,null),U.onAfterShadow(s,U,I,it,ht,K,null)}}const $=U.children;for(let ht=0,z=$.length;ht<z;ht++)P($[ht],I,it,R,D)}function F(U){U.target.removeEventListener("dispose",F);for(const it in d){const R=d[it],D=U.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function V0(s,t,e){const n=e.isWebGL2;function r(){let k=!1;const yt=new _e;let wt=null;const Xt=new _e(0,0,0,0);return{setMask:function(Ht){wt!==Ht&&!k&&(s.colorMask(Ht,Ht,Ht,Ht),wt=Ht)},setLocked:function(Ht){k=Ht},setClear:function(Ht,le,ce,Pe,we){we===!0&&(Ht*=Pe,le*=Pe,ce*=Pe),yt.set(Ht,le,ce,Pe),Xt.equals(yt)===!1&&(s.clearColor(Ht,le,ce,Pe),Xt.copy(yt))},reset:function(){k=!1,wt=null,Xt.set(-1,0,0,0)}}}function a(){let k=!1,yt=null,wt=null,Xt=null;return{setTest:function(Ht){Ht?qt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(Ht){yt!==Ht&&!k&&(s.depthMask(Ht),yt=Ht)},setFunc:function(Ht){if(wt!==Ht){switch(Ht){case $m:s.depthFunc(s.NEVER);break;case Jm:s.depthFunc(s.ALWAYS);break;case Qm:s.depthFunc(s.LESS);break;case Co:s.depthFunc(s.LEQUAL);break;case tg:s.depthFunc(s.EQUAL);break;case eg:s.depthFunc(s.GEQUAL);break;case ng:s.depthFunc(s.GREATER);break;case ig:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=Ht}},setLocked:function(Ht){k=Ht},setClear:function(Ht){Xt!==Ht&&(s.clearDepth(Ht),Xt=Ht)},reset:function(){k=!1,yt=null,wt=null,Xt=null}}}function l(){let k=!1,yt=null,wt=null,Xt=null,Ht=null,le=null,ce=null,Pe=null,we=null;return{setTest:function(me){k||(me?qt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(me){yt!==me&&!k&&(s.stencilMask(me),yt=me)},setFunc:function(me,Ue,wn){(wt!==me||Xt!==Ue||Ht!==wn)&&(s.stencilFunc(me,Ue,wn),wt=me,Xt=Ue,Ht=wn)},setOp:function(me,Ue,wn){(le!==me||ce!==Ue||Pe!==wn)&&(s.stencilOp(me,Ue,wn),le=me,ce=Ue,Pe=wn)},setLocked:function(me){k=me},setClear:function(me){we!==me&&(s.clearStencil(me),we=me)},reset:function(){k=!1,yt=null,wt=null,Xt=null,Ht=null,le=null,ce=null,Pe=null,we=null}}}const c=new r,h=new a,d=new l,f=new WeakMap,p=new WeakMap;let g={},x={},M=new WeakMap,S=[],v=null,_=!1,T=null,b=null,P=null,F=null,U=null,I=null,it=null,R=new Zt(0,0,0),D=0,G=!1,$=null,ht=null,z=null,K=null,Y=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,at=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=at>=1):q.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=at>=2);let ot=null,Mt={};const J=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),ut=new _e().fromArray(J),xt=new _e().fromArray(st);function Pt(k,yt,wt,Xt){const Ht=new Uint8Array(4),le=s.createTexture();s.bindTexture(k,le),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ce=0;ce<wt;ce++)n&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(yt,0,s.RGBA,1,1,Xt,0,s.RGBA,s.UNSIGNED_BYTE,Ht):s.texImage2D(yt+ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ht);return le}const zt={};zt[s.TEXTURE_2D]=Pt(s.TEXTURE_2D,s.TEXTURE_2D,1),zt[s.TEXTURE_CUBE_MAP]=Pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(zt[s.TEXTURE_2D_ARRAY]=Pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),zt[s.TEXTURE_3D]=Pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),qt(s.DEPTH_TEST),h.setFunc(Co),Dt(!1),A(Qh),qt(s.CULL_FACE),ct(Xi);function qt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Bt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function ne(k,yt){return x[k]!==yt?(s.bindFramebuffer(k,yt),x[k]=yt,n&&(k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=yt),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=yt)),!0):!1}function Z(k,yt){let wt=S,Xt=!1;if(k)if(wt=M.get(yt),wt===void 0&&(wt=[],M.set(yt,wt)),k.isWebGLMultipleRenderTargets){const Ht=k.texture;if(wt.length!==Ht.length||wt[0]!==s.COLOR_ATTACHMENT0){for(let le=0,ce=Ht.length;le<ce;le++)wt[le]=s.COLOR_ATTACHMENT0+le;wt.length=Ht.length,Xt=!0}}else wt[0]!==s.COLOR_ATTACHMENT0&&(wt[0]=s.COLOR_ATTACHMENT0,Xt=!0);else wt[0]!==s.BACK&&(wt[0]=s.BACK,Xt=!0);Xt&&(e.isWebGL2?s.drawBuffers(wt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(wt))}function Re(k){return v!==k?(s.useProgram(k),v=k,!0):!1}const H={[ps]:s.FUNC_ADD,[Om]:s.FUNC_SUBTRACT,[Bm]:s.FUNC_REVERSE_SUBTRACT};if(n)H[iu]=s.MIN,H[su]=s.MAX;else{const k=t.get("EXT_blend_minmax");k!==null&&(H[iu]=k.MIN_EXT,H[su]=k.MAX_EXT)}const rt={[Fm]:s.ZERO,[km]:s.ONE,[zm]:s.SRC_COLOR,[dc]:s.SRC_ALPHA,[Xm]:s.SRC_ALPHA_SATURATE,[Wm]:s.DST_COLOR,[Gm]:s.DST_ALPHA,[Hm]:s.ONE_MINUS_SRC_COLOR,[fc]:s.ONE_MINUS_SRC_ALPHA,[jm]:s.ONE_MINUS_DST_COLOR,[Vm]:s.ONE_MINUS_DST_ALPHA,[Zm]:s.CONSTANT_COLOR,[qm]:s.ONE_MINUS_CONSTANT_COLOR,[Km]:s.CONSTANT_ALPHA,[Ym]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(k,yt,wt,Xt,Ht,le,ce,Pe,we,me){if(k===Xi){_===!0&&(Bt(s.BLEND),_=!1);return}if(_===!1&&(qt(s.BLEND),_=!0),k!==Um){if(k!==T||me!==G){if((b!==ps||U!==ps)&&(s.blendEquation(s.FUNC_ADD),b=ps,U=ps),me)switch(k){case dr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tu:s.blendFunc(s.ONE,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,F=null,I=null,it=null,R.set(0,0,0),D=0,T=k,G=me}return}Ht=Ht||yt,le=le||wt,ce=ce||Xt,(yt!==b||Ht!==U)&&(s.blendEquationSeparate(H[yt],H[Ht]),b=yt,U=Ht),(wt!==P||Xt!==F||le!==I||ce!==it)&&(s.blendFuncSeparate(rt[wt],rt[Xt],rt[le],rt[ce]),P=wt,F=Xt,I=le,it=ce),(Pe.equals(R)===!1||we!==D)&&(s.blendColor(Pe.r,Pe.g,Pe.b,we),R.copy(Pe),D=we),T=k,G=!1}function Gt(k,yt){k.side===ni?Bt(s.CULL_FACE):qt(s.CULL_FACE);let wt=k.side===Sn;yt&&(wt=!wt),Dt(wt),k.blending===dr&&k.transparent===!1?ct(Xi):ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Xt=k.stencilWrite;d.setTest(Xt),Xt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),X(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?qt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(k){$!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),$=k)}function A(k){k!==Im?(qt(s.CULL_FACE),k!==ht&&(k===Qh?s.cullFace(s.BACK):k===Dm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),ht=k}function w(k){k!==z&&(j&&s.lineWidth(k),z=k)}function X(k,yt,wt){k?(qt(s.POLYGON_OFFSET_FILL),(K!==yt||Y!==wt)&&(s.polygonOffset(yt,wt),K=yt,Y=wt)):Bt(s.POLYGON_OFFSET_FILL)}function pt(k){k?qt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function dt(k){k===void 0&&(k=s.TEXTURE0+lt-1),ot!==k&&(s.activeTexture(k),ot=k)}function gt(k,yt,wt){wt===void 0&&(ot===null?wt=s.TEXTURE0+lt-1:wt=ot);let Xt=Mt[wt];Xt===void 0&&(Xt={type:void 0,texture:void 0},Mt[wt]=Xt),(Xt.type!==k||Xt.texture!==yt)&&(ot!==wt&&(s.activeTexture(wt),ot=wt),s.bindTexture(k,yt||zt[k]),Xt.type=k,Xt.texture=yt)}function Ct(){const k=Mt[ot];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Et(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(k){ut.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ut.copy(k))}function _t(k){xt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),xt.copy(k))}function Nt(k,yt){let wt=p.get(yt);wt===void 0&&(wt=new WeakMap,p.set(yt,wt));let Xt=wt.get(k);Xt===void 0&&(Xt=s.getUniformBlockIndex(yt,k.name),wt.set(k,Xt))}function It(k,yt){const Xt=p.get(yt).get(k);f.get(yt)!==Xt&&(s.uniformBlockBinding(yt,Xt,k.__bindingPointIndex),f.set(yt,Xt))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ot=null,Mt={},x={},M=new WeakMap,S=[],v=null,_=!1,T=null,b=null,P=null,F=null,U=null,I=null,it=null,R=new Zt(0,0,0),D=0,G=!1,$=null,ht=null,z=null,K=null,Y=null,ut.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:qt,disable:Bt,bindFramebuffer:ne,drawBuffers:Z,useProgram:Re,setBlending:ct,setMaterial:Gt,setFlipSided:Dt,setCullFace:A,setLineWidth:w,setPolygonOffset:X,setScissorTest:pt,activeTexture:dt,bindTexture:gt,unbindTexture:Ct,compressedTexImage2D:Et,compressedTexImage3D:At,texImage2D:Tt,texImage3D:St,updateUBOMapping:Nt,uniformBlockBinding:It,texStorage2D:Qt,texStorage3D:Vt,texSubImage2D:Ot,texSubImage3D:Jt,compressedTexSubImage2D:mt,compressedTexSubImage3D:de,scissor:N,viewport:_t,reset:vt}}function W0(s,t,e,n,r,a,l){const c=r.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let p;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,w){return x?new OffscreenCanvas(A,w):pa("canvas")}function S(A,w,X,pt){let dt=1;if((A.width>pt||A.height>pt)&&(dt=pt/Math.max(A.width,A.height)),dt<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const gt=w?Bo:Math.floor,Ct=gt(dt*A.width),Et=gt(dt*A.height);p===void 0&&(p=M(Ct,Et));const At=X?M(Ct,Et):p;return At.width=Ct,At.height=Et,At.getContext("2d").drawImage(A,0,0,Ct,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ct+"x"+Et+")."),At}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return yc(A.width)&&yc(A.height)}function _(A){return c?!1:A.wrapS!==On||A.wrapT!==On||A.minFilter!==Ye&&A.minFilter!==vn}function T(A,w){return A.generateMipmaps&&w&&A.minFilter!==Ye&&A.minFilter!==vn}function b(A){s.generateMipmap(A)}function P(A,w,X,pt,dt=!1){if(c===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt=w;if(w===s.RED&&(X===s.FLOAT&&(gt=s.R32F),X===s.HALF_FLOAT&&(gt=s.R16F),X===s.UNSIGNED_BYTE&&(gt=s.R8)),w===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(gt=s.R8UI),X===s.UNSIGNED_SHORT&&(gt=s.R16UI),X===s.UNSIGNED_INT&&(gt=s.R32UI),X===s.BYTE&&(gt=s.R8I),X===s.SHORT&&(gt=s.R16I),X===s.INT&&(gt=s.R32I)),w===s.RG&&(X===s.FLOAT&&(gt=s.RG32F),X===s.HALF_FLOAT&&(gt=s.RG16F),X===s.UNSIGNED_BYTE&&(gt=s.RG8)),w===s.RGBA){const Ct=dt?Do:ve.getTransfer(pt);X===s.FLOAT&&(gt=s.RGBA32F),X===s.HALF_FLOAT&&(gt=s.RGBA16F),X===s.UNSIGNED_BYTE&&(gt=Ct===Ae?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(gt=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(gt=s.RGB5_A1)}return(gt===s.R16F||gt===s.R32F||gt===s.RG16F||gt===s.RG32F||gt===s.RGBA16F||gt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function F(A,w,X){return T(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function U(A){return A===Ye||A===gc||A===Ao?s.NEAREST:s.LINEAR}function I(A){const w=A.target;w.removeEventListener("dispose",I),R(w),w.isVideoTexture&&f.delete(w)}function it(A){const w=A.target;w.removeEventListener("dispose",it),G(w)}function R(A){const w=n.get(A);if(w.__webglInit===void 0)return;const X=A.source,pt=g.get(X);if(pt){const dt=pt[w.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&D(A),Object.keys(pt).length===0&&g.delete(X)}n.remove(A)}function D(A){const w=n.get(A);s.deleteTexture(w.__webglTexture);const X=A.source,pt=g.get(X);delete pt[w.__cacheKey],l.memory.textures--}function G(A){const w=A.texture,X=n.get(A),pt=n.get(w);if(pt.__webglTexture!==void 0&&(s.deleteTexture(pt.__webglTexture),l.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(X.__webglFramebuffer[dt]))for(let gt=0;gt<X.__webglFramebuffer[dt].length;gt++)s.deleteFramebuffer(X.__webglFramebuffer[dt][gt]);else s.deleteFramebuffer(X.__webglFramebuffer[dt]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[dt])}else{if(Array.isArray(X.__webglFramebuffer))for(let dt=0;dt<X.__webglFramebuffer.length;dt++)s.deleteFramebuffer(X.__webglFramebuffer[dt]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let dt=0;dt<X.__webglColorRenderbuffer.length;dt++)X.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[dt]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let dt=0,gt=w.length;dt<gt;dt++){const Ct=n.get(w[dt]);Ct.__webglTexture&&(s.deleteTexture(Ct.__webglTexture),l.memory.textures--),n.remove(w[dt])}n.remove(w),n.remove(A)}let $=0;function ht(){$=0}function z(){const A=$;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),$+=1,A}function K(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function Y(A,w){const X=n.get(A);if(A.isVideoTexture&&Gt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const pt=A.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(X,A,w);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function lt(A,w){const X=n.get(A);if(A.version>0&&X.__version!==A.version){ut(X,A,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function j(A,w){const X=n.get(A);if(A.version>0&&X.__version!==A.version){ut(X,A,w);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function at(A,w){const X=n.get(A);if(A.version>0&&X.__version!==A.version){xt(X,A,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}const q={[vr]:s.REPEAT,[On]:s.CLAMP_TO_EDGE,[Io]:s.MIRRORED_REPEAT},ot={[Ye]:s.NEAREST,[gc]:s.NEAREST_MIPMAP_NEAREST,[Ao]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[xf]:s.LINEAR_MIPMAP_NEAREST,[As]:s.LINEAR_MIPMAP_LINEAR},Mt={[wg]:s.NEVER,[Ig]:s.ALWAYS,[Ag]:s.LESS,[Rf]:s.LEQUAL,[Lg]:s.EQUAL,[Cg]:s.GEQUAL,[Rg]:s.GREATER,[Pg]:s.NOTEQUAL};function J(A,w,X){if(X?(s.texParameteri(A,s.TEXTURE_WRAP_S,q[w.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,q[w.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,q[w.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ot[w.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ot[w.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==On||w.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,U(w.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,U(w.minFilter)),w.minFilter!==Ye&&w.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const pt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ye||w.minFilter!==Ao&&w.minFilter!==As||w.type===Ei&&t.has("OES_texture_float_linear")===!1||c===!1&&w.type===da&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function st(A,w){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",I));const pt=w.source;let dt=g.get(pt);dt===void 0&&(dt={},g.set(pt,dt));const gt=K(w);if(gt!==A.__cacheKey){dt[gt]===void 0&&(dt[gt]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,X=!0),dt[gt].usedTimes++;const Ct=dt[A.__cacheKey];Ct!==void 0&&(dt[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&D(w)),A.__cacheKey=gt,A.__webglTexture=dt[gt].texture}return X}function ut(A,w,X){let pt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pt=s.TEXTURE_3D);const dt=st(A,w),gt=w.source;e.bindTexture(pt,A.__webglTexture,s.TEXTURE0+X);const Ct=n.get(gt);if(gt.version!==Ct.__version||dt===!0){e.activeTexture(s.TEXTURE0+X);const Et=ve.getPrimaries(ve.workingColorSpace),At=w.colorSpace===Fn?null:ve.getPrimaries(w.colorSpace),Ot=w.colorSpace===Fn||Et===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Jt=_(w)&&v(w.image)===!1;let mt=S(w.image,Jt,!1,r.maxTextureSize);mt=Dt(w,mt);const de=v(mt)||c,Qt=a.convert(w.format,w.colorSpace);let Vt=a.convert(w.type),Tt=P(w.internalFormat,Qt,Vt,w.colorSpace,w.isVideoTexture);J(pt,w,de);let St;const N=w.mipmaps,_t=c&&w.isVideoTexture!==!0&&Tt!==wf,Nt=Ct.__version===void 0||dt===!0,It=F(w,mt,de);if(w.isDepthTexture)Tt=s.DEPTH_COMPONENT,c?w.type===Ei?Tt=s.DEPTH_COMPONENT32F:w.type===Wi?Tt=s.DEPTH_COMPONENT24:w.type===Ss?Tt=s.DEPTH24_STENCIL8:Tt=s.DEPTH_COMPONENT16:w.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===bs&&Tt===s.DEPTH_COMPONENT&&w.type!==zc&&w.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Wi,Vt=a.convert(w.type)),w.format===xr&&Tt===s.DEPTH_COMPONENT&&(Tt=s.DEPTH_STENCIL,w.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ss,Vt=a.convert(w.type))),Nt&&(_t?e.texStorage2D(s.TEXTURE_2D,1,Tt,mt.width,mt.height):e.texImage2D(s.TEXTURE_2D,0,Tt,mt.width,mt.height,0,Qt,Vt,null));else if(w.isDataTexture)if(N.length>0&&de){_t&&Nt&&e.texStorage2D(s.TEXTURE_2D,It,Tt,N[0].width,N[0].height);for(let vt=0,k=N.length;vt<k;vt++)St=N[vt],_t?e.texSubImage2D(s.TEXTURE_2D,vt,0,0,St.width,St.height,Qt,Vt,St.data):e.texImage2D(s.TEXTURE_2D,vt,Tt,St.width,St.height,0,Qt,Vt,St.data);w.generateMipmaps=!1}else _t?(Nt&&e.texStorage2D(s.TEXTURE_2D,It,Tt,mt.width,mt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt.width,mt.height,Qt,Vt,mt.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,mt.width,mt.height,0,Qt,Vt,mt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){_t&&Nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,Tt,N[0].width,N[0].height,mt.depth);for(let vt=0,k=N.length;vt<k;vt++)St=N[vt],w.format!==Bn?Qt!==null?_t?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,St.width,St.height,mt.depth,Qt,St.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,Tt,St.width,St.height,mt.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?e.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,St.width,St.height,mt.depth,Qt,Vt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,vt,Tt,St.width,St.height,mt.depth,0,Qt,Vt,St.data)}else{_t&&Nt&&e.texStorage2D(s.TEXTURE_2D,It,Tt,N[0].width,N[0].height);for(let vt=0,k=N.length;vt<k;vt++)St=N[vt],w.format!==Bn?Qt!==null?_t?e.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,St.width,St.height,Qt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,vt,Tt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?e.texSubImage2D(s.TEXTURE_2D,vt,0,0,St.width,St.height,Qt,Vt,St.data):e.texImage2D(s.TEXTURE_2D,vt,Tt,St.width,St.height,0,Qt,Vt,St.data)}else if(w.isDataArrayTexture)_t?(Nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,Tt,mt.width,mt.height,mt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Qt,Vt,mt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,mt.width,mt.height,mt.depth,0,Qt,Vt,mt.data);else if(w.isData3DTexture)_t?(Nt&&e.texStorage3D(s.TEXTURE_3D,It,Tt,mt.width,mt.height,mt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Qt,Vt,mt.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,mt.width,mt.height,mt.depth,0,Qt,Vt,mt.data);else if(w.isFramebufferTexture){if(Nt)if(_t)e.texStorage2D(s.TEXTURE_2D,It,Tt,mt.width,mt.height);else{let vt=mt.width,k=mt.height;for(let yt=0;yt<It;yt++)e.texImage2D(s.TEXTURE_2D,yt,Tt,vt,k,0,Qt,Vt,null),vt>>=1,k>>=1}}else if(N.length>0&&de){_t&&Nt&&e.texStorage2D(s.TEXTURE_2D,It,Tt,N[0].width,N[0].height);for(let vt=0,k=N.length;vt<k;vt++)St=N[vt],_t?e.texSubImage2D(s.TEXTURE_2D,vt,0,0,Qt,Vt,St):e.texImage2D(s.TEXTURE_2D,vt,Tt,Qt,Vt,St);w.generateMipmaps=!1}else _t?(Nt&&e.texStorage2D(s.TEXTURE_2D,It,Tt,mt.width,mt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Qt,Vt,mt)):e.texImage2D(s.TEXTURE_2D,0,Tt,Qt,Vt,mt);T(w,de)&&b(pt),Ct.__version=gt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function xt(A,w,X){if(w.image.length!==6)return;const pt=st(A,w),dt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+X);const gt=n.get(dt);if(dt.version!==gt.__version||pt===!0){e.activeTexture(s.TEXTURE0+X);const Ct=ve.getPrimaries(ve.workingColorSpace),Et=w.colorSpace===Fn?null:ve.getPrimaries(w.colorSpace),At=w.colorSpace===Fn||Ct===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ot=w.isCompressedTexture||w.image[0].isCompressedTexture,Jt=w.image[0]&&w.image[0].isDataTexture,mt=[];for(let vt=0;vt<6;vt++)!Ot&&!Jt?mt[vt]=S(w.image[vt],!1,!0,r.maxCubemapSize):mt[vt]=Jt?w.image[vt].image:w.image[vt],mt[vt]=Dt(w,mt[vt]);const de=mt[0],Qt=v(de)||c,Vt=a.convert(w.format,w.colorSpace),Tt=a.convert(w.type),St=P(w.internalFormat,Vt,Tt,w.colorSpace),N=c&&w.isVideoTexture!==!0,_t=gt.__version===void 0||pt===!0;let Nt=F(w,de,Qt);J(s.TEXTURE_CUBE_MAP,w,Qt);let It;if(Ot){N&&_t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,St,de.width,de.height);for(let vt=0;vt<6;vt++){It=mt[vt].mipmaps;for(let k=0;k<It.length;k++){const yt=It[k];w.format!==Bn?Vt!==null?N?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,k,0,0,yt.width,yt.height,Vt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,k,St,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,k,0,0,yt.width,yt.height,Vt,Tt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,k,St,yt.width,yt.height,0,Vt,Tt,yt.data)}}}else{It=w.mipmaps,N&&_t&&(It.length>0&&Nt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,St,mt[0].width,mt[0].height));for(let vt=0;vt<6;vt++)if(Jt){N?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,mt[vt].width,mt[vt].height,Vt,Tt,mt[vt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,St,mt[vt].width,mt[vt].height,0,Vt,Tt,mt[vt].data);for(let k=0;k<It.length;k++){const wt=It[k].image[vt].image;N?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,k+1,0,0,wt.width,wt.height,Vt,Tt,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,k+1,St,wt.width,wt.height,0,Vt,Tt,wt.data)}}else{N?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Vt,Tt,mt[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,St,Vt,Tt,mt[vt]);for(let k=0;k<It.length;k++){const yt=It[k];N?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,k+1,0,0,Vt,Tt,yt.image[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,k+1,St,Vt,Tt,yt.image[vt])}}}T(w,Qt)&&b(s.TEXTURE_CUBE_MAP),gt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Pt(A,w,X,pt,dt,gt){const Ct=a.convert(X.format,X.colorSpace),Et=a.convert(X.type),At=P(X.internalFormat,Ct,Et,X.colorSpace);if(!n.get(w).__hasExternalTextures){const Jt=Math.max(1,w.width>>gt),mt=Math.max(1,w.height>>gt);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?e.texImage3D(dt,gt,At,Jt,mt,w.depth,0,Ct,Et,null):e.texImage2D(dt,gt,At,Jt,mt,0,Ct,Et,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ct(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,dt,n.get(X).__webglTexture,0,rt(w)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,dt,n.get(X).__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(A,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let pt=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||ct(w)){const dt=w.depthTexture;dt&&dt.isDepthTexture&&(dt.type===Ei?pt=s.DEPTH_COMPONENT32F:dt.type===Wi&&(pt=s.DEPTH_COMPONENT24));const gt=rt(w);ct(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,pt,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,pt,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,pt,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const pt=rt(w);X&&ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,w.width,w.height):ct(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const pt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let dt=0;dt<pt.length;dt++){const gt=pt[dt],Ct=a.convert(gt.format,gt.colorSpace),Et=a.convert(gt.type),At=P(gt.internalFormat,Ct,Et,gt.colorSpace),Ot=rt(w);X&&ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,At,w.width,w.height):ct(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot,At,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,At,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const pt=n.get(w.depthTexture).__webglTexture,dt=rt(w);if(w.depthTexture.format===bs)ct(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(w.depthTexture.format===xr)ct(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Bt(A){const w=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");qt(w.__webglFramebuffer,A)}else if(X){w.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pt]),w.__webglDepthbuffer[pt]=s.createRenderbuffer(),zt(w.__webglDepthbuffer[pt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),zt(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(A,w,X){const pt=n.get(A);w!==void 0&&Pt(pt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Bt(A)}function Z(A){const w=A.texture,X=n.get(A),pt=n.get(w);A.addEventListener("dispose",it),A.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=w.version,l.memory.textures++);const dt=A.isWebGLCubeRenderTarget===!0,gt=A.isWebGLMultipleRenderTargets===!0,Ct=v(A)||c;if(dt){X.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(c&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Et]=[];for(let At=0;At<w.mipmaps.length;At++)X.__webglFramebuffer[Et][At]=s.createFramebuffer()}else X.__webglFramebuffer[Et]=s.createFramebuffer()}else{if(c&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Et=0;Et<w.mipmaps.length;Et++)X.__webglFramebuffer[Et]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(gt)if(r.drawBuffers){const Et=A.texture;for(let At=0,Ot=Et.length;At<Ot;At++){const Jt=n.get(Et[At]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&A.samples>0&&ct(A)===!1){const Et=gt?w:[w];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let At=0;At<Et.length;At++){const Ot=Et[At];X.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[At]);const Jt=a.convert(Ot.format,Ot.colorSpace),mt=a.convert(Ot.type),de=P(Ot.internalFormat,Jt,mt,Ot.colorSpace,A.isXRRenderTarget===!0),Qt=rt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,de,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,X.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),J(s.TEXTURE_CUBE_MAP,w,Ct);for(let Et=0;Et<6;Et++)if(c&&w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)Pt(X.__webglFramebuffer[Et][At],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,At);else Pt(X.__webglFramebuffer[Et],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);T(w,Ct)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){const Et=A.texture;for(let At=0,Ot=Et.length;At<Ot;At++){const Jt=Et[At],mt=n.get(Jt);e.bindTexture(s.TEXTURE_2D,mt.__webglTexture),J(s.TEXTURE_2D,Jt,Ct),Pt(X.__webglFramebuffer,A,Jt,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),T(Jt,Ct)&&b(s.TEXTURE_2D)}e.unbindTexture()}else{let Et=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(c?Et=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Et,pt.__webglTexture),J(Et,w,Ct),c&&w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)Pt(X.__webglFramebuffer[At],A,w,s.COLOR_ATTACHMENT0,Et,At);else Pt(X.__webglFramebuffer,A,w,s.COLOR_ATTACHMENT0,Et,0);T(w,Ct)&&b(Et),e.unbindTexture()}A.depthBuffer&&Bt(A)}function Re(A){const w=v(A)||c,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pt=0,dt=X.length;pt<dt;pt++){const gt=X[pt];if(T(gt,w)){const Ct=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Et=n.get(gt).__webglTexture;e.bindTexture(Ct,Et),b(Ct),e.unbindTexture()}}}function H(A){if(c&&A.samples>0&&ct(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,pt=A.height;let dt=s.COLOR_BUFFER_BIT;const gt=[],Ct=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(A),At=A.isWebGLMultipleRenderTargets===!0;if(At)for(let Ot=0;Ot<w.length;Ot++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ot=0;Ot<w.length;Ot++){gt.push(s.COLOR_ATTACHMENT0+Ot),A.depthBuffer&&gt.push(Ct);const Jt=Et.__ignoreDepthValues!==void 0?Et.__ignoreDepthValues:!1;if(Jt===!1&&(A.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),At&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Ot]),Jt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ct]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ct])),At){const mt=n.get(w[Ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,mt,0)}s.blitFramebuffer(0,0,X,pt,0,0,X,pt,dt,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Ot=0;Ot<w.length;Ot++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Ot]);const Jt=n.get(w[Ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}}function rt(A){return Math.min(r.maxSamples,A.samples)}function ct(A){const w=n.get(A);return c&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Gt(A){const w=l.render.frame;f.get(A)!==w&&(f.set(A,w),A.update())}function Dt(A,w){const X=A.colorSpace,pt=A.format,dt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===xc||X!==je&&X!==Fn&&(ve.getTransfer(X)===Ae?c===!1?t.has("EXT_sRGB")===!0&&pt===Bn?(A.format=xc,A.minFilter=vn,A.generateMipmaps=!1):w=Cf.sRGBToLinear(w):(pt!==Bn||dt!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=z,this.resetTextureUnits=ht,this.setTexture2D=Y,this.setTexture2DArray=lt,this.setTexture3D=j,this.setTextureCube=at,this.rebindTextures=ne,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=ct}function j0(s,t,e){const n=e.isWebGL2;function r(a,l=Fn){let c;const h=ve.getTransfer(l);if(a===qi)return s.UNSIGNED_BYTE;if(a===Mf)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Sf)return s.UNSIGNED_SHORT_5_5_5_1;if(a===fg)return s.BYTE;if(a===pg)return s.SHORT;if(a===zc)return s.UNSIGNED_SHORT;if(a===yf)return s.INT;if(a===Wi)return s.UNSIGNED_INT;if(a===Ei)return s.FLOAT;if(a===da)return n?s.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===mg)return s.ALPHA;if(a===Bn)return s.RGBA;if(a===gg)return s.LUMINANCE;if(a===_g)return s.LUMINANCE_ALPHA;if(a===bs)return s.DEPTH_COMPONENT;if(a===xr)return s.DEPTH_STENCIL;if(a===xc)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===vg)return s.RED;if(a===bf)return s.RED_INTEGER;if(a===xg)return s.RG;if(a===Ef)return s.RG_INTEGER;if(a===Tf)return s.RGBA_INTEGER;if(a===Ml||a===Sl||a===bl||a===El)if(h===Ae)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Ml)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Sl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Ml)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Sl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===bl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===El)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===au||a===ou||a===lu||a===cu)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===au)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ou)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===lu)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===cu)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===wf)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===hu||a===uu)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===hu)return h===Ae?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===uu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===du||a===fu||a===pu||a===mu||a===gu||a===_u||a===vu||a===xu||a===yu||a===Mu||a===Su||a===bu||a===Eu||a===Tu)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===du)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===fu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===pu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===mu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===gu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===_u)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===vu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===xu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===yu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Mu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Su)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===bu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Eu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Tu)return h===Ae?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Tl||a===wu||a===Au)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Tl)return h===Ae?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===wu)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Au)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===yg||a===Lu||a===Ru||a===Pu)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Lu)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ru)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Pu)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ss?n?s.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class X0 extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vs extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,a=null,l=null;const c=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(const S of t.hand.values()){const v=e.getJointPose(S,n),_=this._getHandJoint(d,S);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const f=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],g=f.position.distanceTo(p.position),x=.02,M=.005;d.inputState.pinching&&g>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class q0 extends Ds{constructor(t,e){super();const n=this;let r=null,a=1,l=null,c="local-floor",h=1,d=null,f=null,p=null,g=null,x=null,M=null;const S=e.getContextAttributes();let v=null,_=null;const T=[],b=[],P=new jt;let F=null;const U=new pn;U.layers.enable(1),U.viewport=new _e;const I=new pn;I.layers.enable(2),I.viewport=new _e;const it=[U,I],R=new X0;R.layers.enable(1),R.layers.enable(2);let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=T[J];return st===void 0&&(st=new Kl,T[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=T[J];return st===void 0&&(st=new Kl,T[J]=st),st.getGripSpace()},this.getHand=function(J){let st=T[J];return st===void 0&&(st=new Kl,T[J]=st),st.getHandSpace()};function $(J){const st=b.indexOf(J.inputSource);if(st===-1)return;const ut=T[st];ut!==void 0&&(ut.update(J.inputSource,J.frame,d||l),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function ht(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ht),r.removeEventListener("inputsourceschange",z);for(let J=0;J<T.length;J++){const st=b[J];st!==null&&(b[J]=null,T[J].disconnect(st))}D=null,G=null,t.setRenderTarget(v),x=null,g=null,p=null,r=null,_=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){c=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ht),r.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),_=new Ls(x.framebufferWidth,x.framebufferHeight,{format:Bn,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let st=null,ut=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=S.stencil?xr:bs,ut=S.stencil?Ss:Wi);const Pt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:a};p=new XRWebGLBinding(r,e),g=p.createProjectionLayer(Pt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),_=new Ls(g.textureWidth,g.textureHeight,{format:Bn,type:qi,depthTexture:new Hf(g.textureWidth,g.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0});const zt=t.properties.get(_);zt.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=await r.requestReferenceSpace(c),Mt.setContext(r),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(J){for(let st=0;st<J.removed.length;st++){const ut=J.removed[st],xt=b.indexOf(ut);xt>=0&&(b[xt]=null,T[xt].disconnect(ut))}for(let st=0;st<J.added.length;st++){const ut=J.added[st];let xt=b.indexOf(ut);if(xt===-1){for(let zt=0;zt<T.length;zt++)if(zt>=b.length){b.push(ut),xt=zt;break}else if(b[zt]===null){b[zt]=ut,xt=zt;break}if(xt===-1)break}const Pt=T[xt];Pt&&Pt.connect(ut)}}const K=new O,Y=new O;function lt(J,st,ut){K.setFromMatrixPosition(st.matrixWorld),Y.setFromMatrixPosition(ut.matrixWorld);const xt=K.distanceTo(Y),Pt=st.projectionMatrix.elements,zt=ut.projectionMatrix.elements,qt=Pt[14]/(Pt[10]-1),Bt=Pt[14]/(Pt[10]+1),ne=(Pt[9]+1)/Pt[5],Z=(Pt[9]-1)/Pt[5],Re=(Pt[8]-1)/Pt[0],H=(zt[8]+1)/zt[0],rt=qt*Re,ct=qt*H,Gt=xt/(-Re+H),Dt=Gt*-Re;st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Dt),J.translateZ(Gt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const A=qt+Gt,w=Bt+Gt,X=rt-Dt,pt=ct+(xt-Dt),dt=ne*Bt/w*A,gt=Z*Bt/w*A;J.projectionMatrix.makePerspective(X,pt,dt,gt,A,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function j(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;R.near=I.near=U.near=J.near,R.far=I.far=U.far=J.far,(D!==R.near||G!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,G=R.far);const st=J.parent,ut=R.cameras;j(R,st);for(let xt=0;xt<ut.length;xt++)j(ut[xt],st);ut.length===2?lt(R,U,I):R.projectionMatrix.copy(U.projectionMatrix),at(J,R,st)};function at(J,st,ut){ut===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Mr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(J){h=J,g!==null&&(g.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)};let q=null;function ot(J,st){if(f=st.getViewerPose(d||l),M=st,f!==null){const ut=f.views;x!==null&&(t.setRenderTargetFramebuffer(_,x.framebuffer),t.setRenderTarget(_));let xt=!1;ut.length!==R.cameras.length&&(R.cameras.length=0,xt=!0);for(let Pt=0;Pt<ut.length;Pt++){const zt=ut[Pt];let qt=null;if(x!==null)qt=x.getViewport(zt);else{const ne=p.getViewSubImage(g,zt);qt=ne.viewport,Pt===0&&(t.setRenderTargetTextures(_,ne.colorTexture,g.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(_))}let Bt=it[Pt];Bt===void 0&&(Bt=new pn,Bt.layers.enable(Pt),Bt.viewport=new _e,it[Pt]=Bt),Bt.matrix.fromArray(zt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(zt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(qt.x,qt.y,qt.width,qt.height),Pt===0&&(R.matrix.copy(Bt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xt===!0&&R.cameras.push(Bt)}}for(let ut=0;ut<T.length;ut++){const xt=b[ut],Pt=T[ut];xt!==null&&Pt!==void 0&&Pt.update(xt,st,d||l)}q&&q(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),M=null}const Mt=new zf;Mt.setAnimationLoop(ot),this.setAnimationLoop=function(J){q=J},this.dispose=function(){}}}function K0(s,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,Bf(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,T,b,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(v,_):_.isMeshToonMaterial?(a(v,_),p(v,_)):_.isMeshPhongMaterial?(a(v,_),f(v,_)):_.isMeshStandardMaterial?(a(v,_),g(v,_),_.isMeshPhysicalMaterial&&x(v,_,P)):_.isMeshMatcapMaterial?(a(v,_),M(v,_)):_.isMeshDepthMaterial?a(v,_):_.isMeshDistanceMaterial?(a(v,_),S(v,_)):_.isMeshNormalMaterial?a(v,_):_.isLineBasicMaterial?(l(v,_),_.isLineDashedMaterial&&c(v,_)):_.isPointsMaterial?h(v,_,T,b):_.isSpriteMaterial?d(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Sn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Sn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const T=t.get(_).envMap;if(T&&(v.envMap.value=T,v.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const b=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*b,e(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function l(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function c(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,T,b){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*T,v.scale.value=b*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function f(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function p(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),t.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function x(v,_,T){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Sn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=T.texture,v.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,_){_.matcap&&(v.matcap.value=_.matcap)}function S(v,_){const T=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(T.matrixWorld),v.nearDistance.value=T.shadow.camera.near,v.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y0(s,t,e,n){let r={},a={},l=[];const c=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(T,b){const P=b.program;n.uniformBlockBinding(T,P)}function d(T,b){let P=r[T.id];P===void 0&&(M(T),P=f(T),r[T.id]=P,T.addEventListener("dispose",v));const F=b.program;n.updateUBOMapping(T,F);const U=t.render.frame;a[T.id]!==U&&(g(T),a[T.id]=U)}function f(T){const b=p();T.__bindingPointIndex=b;const P=s.createBuffer(),F=T.__size,U=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,P),P}function p(){for(let T=0;T<c;T++)if(l.indexOf(T)===-1)return l.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const b=r[T.id],P=T.uniforms,F=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let U=0,I=P.length;U<I;U++){const it=Array.isArray(P[U])?P[U]:[P[U]];for(let R=0,D=it.length;R<D;R++){const G=it[R];if(x(G,U,R,F)===!0){const $=G.__offset,ht=Array.isArray(G.value)?G.value:[G.value];let z=0;for(let K=0;K<ht.length;K++){const Y=ht[K],lt=S(Y);typeof Y=="number"||typeof Y=="boolean"?(G.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,$+z,G.__data)):Y.isMatrix3?(G.__data[0]=Y.elements[0],G.__data[1]=Y.elements[1],G.__data[2]=Y.elements[2],G.__data[3]=0,G.__data[4]=Y.elements[3],G.__data[5]=Y.elements[4],G.__data[6]=Y.elements[5],G.__data[7]=0,G.__data[8]=Y.elements[6],G.__data[9]=Y.elements[7],G.__data[10]=Y.elements[8],G.__data[11]=0):(Y.toArray(G.__data,z),z+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(T,b,P,F){const U=T.value,I=b+"_"+P;if(F[I]===void 0)return typeof U=="number"||typeof U=="boolean"?F[I]=U:F[I]=U.clone(),!0;{const it=F[I];if(typeof U=="number"||typeof U=="boolean"){if(it!==U)return F[I]=U,!0}else if(it.equals(U)===!1)return it.copy(U),!0}return!1}function M(T){const b=T.uniforms;let P=0;const F=16;for(let I=0,it=b.length;I<it;I++){const R=Array.isArray(b[I])?b[I]:[b[I]];for(let D=0,G=R.length;D<G;D++){const $=R[D],ht=Array.isArray($.value)?$.value:[$.value];for(let z=0,K=ht.length;z<K;z++){const Y=ht[z],lt=S(Y),j=P%F;j!==0&&F-j<lt.boundary&&(P+=F-j),$.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=lt.storage}}}const U=P%F;return U>0&&(P+=F-U),T.__size=P,T.__cache={},this}function S(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function v(T){const b=T.target;b.removeEventListener("dispose",v);const P=l.indexOf(b.__bindingPointIndex);l.splice(P,1),s.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function _(){for(const T in r)s.deleteBuffer(r[T]);l=[],r={},a={}}return{bind:h,update:d,dispose:_}}class Zf{constructor(t={}){const{canvas:e=Zg(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let g;n!==null?g=n.getContextAttributes().alpha:g=l;const x=new Uint32Array(4),M=new Int32Array(4);let S=null,v=null;const _=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const b=this;let P=!1,F=0,U=0,I=null,it=-1,R=null;const D=new _e,G=new _e;let $=null;const ht=new Zt(0);let z=0,K=e.width,Y=e.height,lt=1,j=null,at=null;const q=new _e(0,0,K,Y),ot=new _e(0,0,K,Y);let Mt=!1;const J=new Xc;let st=!1,ut=!1,xt=null;const Pt=new oe,zt=new jt,qt=new O,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return I===null?lt:1}let Z=n;function Re(C,V){for(let et=0;et<C.length;et++){const nt=C[et],Q=e.getContext(nt,V);if(Q!==null)return Q}return null}try{const C={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",yt,!1),Z===null){const V=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&V.shift(),Z=Re(V,C),Z===null)throw Re(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let H,rt,ct,Gt,Dt,A,w,X,pt,dt,gt,Ct,Et,At,Ot,Jt,mt,de,Qt,Vt,Tt,St,N,_t;function Nt(){H=new ay(Z),rt=new ty(Z,H,t),H.init(rt),St=new j0(Z,H,rt),ct=new V0(Z,H,rt),Gt=new cy(Z),Dt=new R0,A=new W0(Z,H,ct,Dt,rt,St,Gt),w=new ny(b),X=new ry(b),pt=new __(Z,rt),N=new Jx(Z,H,pt,rt),dt=new oy(Z,pt,Gt,N),gt=new fy(Z,dt,pt,Gt),Qt=new dy(Z,rt,A),Jt=new ey(Dt),Ct=new L0(b,w,X,H,rt,N,Jt),Et=new K0(b,Dt),At=new C0,Ot=new B0(H,rt),de=new $x(b,w,X,ct,gt,g,h),mt=new G0(b,gt,rt),_t=new Y0(Z,Gt,rt,ct),Vt=new Qx(Z,H,Gt,rt),Tt=new ly(Z,H,Gt,rt),Gt.programs=Ct.programs,b.capabilities=rt,b.extensions=H,b.properties=Dt,b.renderLists=At,b.shadowMap=mt,b.state=ct,b.info=Gt}Nt();const It=new q0(b,Z);this.xr=It,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const C=H.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=H.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(C){C!==void 0&&(lt=C,this.setSize(K,Y,!1))},this.getSize=function(C){return C.set(K,Y)},this.setSize=function(C,V,et=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,Y=V,e.width=Math.floor(C*lt),e.height=Math.floor(V*lt),et===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(K*lt,Y*lt).floor()},this.setDrawingBufferSize=function(C,V,et){K=C,Y=V,lt=et,e.width=Math.floor(C*et),e.height=Math.floor(V*et),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,V,et,nt){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,V,et,nt),ct.viewport(D.copy(q).multiplyScalar(lt).floor())},this.getScissor=function(C){return C.copy(ot)},this.setScissor=function(C,V,et,nt){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,V,et,nt),ct.scissor(G.copy(ot).multiplyScalar(lt).floor())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(C){ct.setScissorTest(Mt=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){at=C},this.getClearColor=function(C){return C.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(C=!0,V=!0,et=!0){let nt=0;if(C){let Q=!1;if(I!==null){const Lt=I.texture.format;Q=Lt===Tf||Lt===Ef||Lt===bf}if(Q){const Lt=I.texture.type,Ft=Lt===qi||Lt===Wi||Lt===zc||Lt===Ss||Lt===Mf||Lt===Sf,Wt=de.getClearColor(),Yt=de.getClearAlpha(),re=Wt.r,te=Wt.g,ie=Wt.b;Ft?(x[0]=re,x[1]=te,x[2]=ie,x[3]=Yt,Z.clearBufferuiv(Z.COLOR,0,x)):(M[0]=re,M[1]=te,M[2]=ie,M[3]=Yt,Z.clearBufferiv(Z.COLOR,0,M))}else nt|=Z.COLOR_BUFFER_BIT}V&&(nt|=Z.DEPTH_BUFFER_BIT),et&&(nt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),At.dispose(),Ot.dispose(),Dt.dispose(),w.dispose(),X.dispose(),gt.dispose(),N.dispose(),_t.dispose(),Ct.dispose(),It.dispose(),It.removeEventListener("sessionstart",we),It.removeEventListener("sessionend",me),xt&&(xt.dispose(),xt=null),Ue.stop()};function vt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=Gt.autoReset,V=mt.enabled,et=mt.autoUpdate,nt=mt.needsUpdate,Q=mt.type;Nt(),Gt.autoReset=C,mt.enabled=V,mt.autoUpdate=et,mt.needsUpdate=nt,mt.type=Q}function yt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function wt(C){const V=C.target;V.removeEventListener("dispose",wt),Xt(V)}function Xt(C){Ht(C),Dt.remove(C)}function Ht(C){const V=Dt.get(C).programs;V!==void 0&&(V.forEach(function(et){Ct.releaseProgram(et)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,et,nt,Q,Lt){V===null&&(V=Bt);const Ft=Q.isMesh&&Q.matrixWorld.determinant()<0,Wt=Or(C,V,et,nt,Q);ct.setMaterial(nt,Ft);let Yt=et.index,re=1;if(nt.wireframe===!0){if(Yt=dt.getWireframeAttribute(et),Yt===void 0)return;re=2}const te=et.drawRange,ie=et.attributes.position;let De=te.start*re,Je=(te.start+te.count)*re;Lt!==null&&(De=Math.max(De,Lt.start*re),Je=Math.min(Je,(Lt.start+Lt.count)*re)),Yt!==null?(De=Math.max(De,0),Je=Math.min(Je,Yt.count)):ie!=null&&(De=Math.max(De,0),Je=Math.min(Je,ie.count));const Ce=Je-De;if(Ce<0||Ce===1/0)return;N.setup(Q,nt,Wt,et,Yt);let Ln,Ee=Vt;if(Yt!==null&&(Ln=pt.get(Yt),Ee=Tt,Ee.setIndex(Ln)),Q.isMesh)nt.wireframe===!0?(ct.setLineWidth(nt.wireframeLinewidth*ne()),Ee.setMode(Z.LINES)):Ee.setMode(Z.TRIANGLES);else if(Q.isLine){let ee=nt.linewidth;ee===void 0&&(ee=1),ct.setLineWidth(ee*ne()),Q.isLineSegments?Ee.setMode(Z.LINES):Q.isLineLoop?Ee.setMode(Z.LINE_LOOP):Ee.setMode(Z.LINE_STRIP)}else Q.isPoints?Ee.setMode(Z.POINTS):Q.isSprite&&Ee.setMode(Z.TRIANGLES);if(Q.isBatchedMesh)Ee.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Ee.renderInstances(De,Ce,Q.count);else if(et.isInstancedBufferGeometry){const ee=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,fe=Math.min(et.instanceCount,ee);Ee.renderInstances(De,Ce,fe)}else Ee.render(De,Ce)};function le(C,V,et){C.transparent===!0&&C.side===ni&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,Ji(C,V,et),C.side=Ai,C.needsUpdate=!0,Ji(C,V,et),C.side=ni):Ji(C,V,et)}this.compile=function(C,V,et=null){et===null&&(et=C),v=Ot.get(et),v.init(),T.push(v),et.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),C!==et&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights(b._useLegacyLights);const nt=new Set;return C.traverse(function(Q){const Lt=Q.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){const Wt=Lt[Ft];le(Wt,et,Q),nt.add(Wt)}else le(Lt,et,Q),nt.add(Lt)}),T.pop(),v=null,nt},this.compileAsync=function(C,V,et=null){const nt=this.compile(C,V,et);return new Promise(Q=>{function Lt(){if(nt.forEach(function(Ft){Dt.get(Ft).currentProgram.isReady()&&nt.delete(Ft)}),nt.size===0){Q(C);return}setTimeout(Lt,10)}H.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let ce=null;function Pe(C){ce&&ce(C)}function we(){Ue.stop()}function me(){Ue.start()}const Ue=new zf;Ue.setAnimationLoop(Pe),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(C){ce=C,It.setAnimationLoop(C),C===null?Ue.stop():Ue.start()},It.addEventListener("sessionstart",we),It.addEventListener("sessionend",me),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(V),V=It.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,V,I),v=Ot.get(C,T.length),v.init(),T.push(v),Pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),J.setFromProjectionMatrix(Pt),ut=this.localClippingEnabled,st=Jt.init(this.clippingPlanes,ut),S=At.get(C,_.length),S.init(),_.push(S),wn(C,V,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(j,at),this.info.render.frame++,st===!0&&Jt.beginShadows();const et=v.state.shadowsArray;if(mt.render(et,C,V),st===!0&&Jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(S,C),v.setupLights(b._useLegacyLights),V.isArrayCamera){const nt=V.cameras;for(let Q=0,Lt=nt.length;Q<Lt;Q++){const Ft=nt[Q];ba(S,C,Ft,Ft.viewport)}}else ba(S,C,V);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(b,C,V),N.resetDefaultState(),it=-1,R=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,_.pop(),_.length>0?S=_[_.length-1]:S=null};function wn(C,V,et,nt){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){nt&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pt);const Ft=gt.update(C),Wt=C.material;Wt.visible&&S.push(C,Ft,Wt,et,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const Ft=gt.update(C),Wt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),qt.copy(Ft.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(Pt)),Array.isArray(Wt)){const Yt=Ft.groups;for(let re=0,te=Yt.length;re<te;re++){const ie=Yt[re],De=Wt[ie.materialIndex];De&&De.visible&&S.push(C,Ft,De,et,qt.z,ie)}}else Wt.visible&&S.push(C,Ft,Wt,et,qt.z,null)}}const Lt=C.children;for(let Ft=0,Wt=Lt.length;Ft<Wt;Ft++)wn(Lt[Ft],V,et,nt)}function ba(C,V,et,nt){const Q=C.opaque,Lt=C.transmissive,Ft=C.transparent;v.setupLightsView(et),st===!0&&Jt.setGlobalState(b.clippingPlanes,et),Lt.length>0&&An(Q,Lt,V,et),nt&&ct.viewport(D.copy(nt)),Q.length>0&&Ut(Q,V,et),Lt.length>0&&Ut(Lt,V,et),Ft.length>0&&Ut(Ft,V,et),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function An(C,V,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const Lt=rt.isWebGL2;xt===null&&(xt=new Ls(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?da:qi,minFilter:As,samples:Lt?4:0})),b.getDrawingBufferSize(zt),Lt?xt.setSize(zt.x,zt.y):xt.setSize(Bo(zt.x),Bo(zt.y));const Ft=b.getRenderTarget();b.setRenderTarget(xt),b.getClearColor(ht),z=b.getClearAlpha(),z<1&&b.setClearColor(16777215,.5),b.clear();const Wt=b.toneMapping;b.toneMapping=Zi,Ut(C,et,nt),A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt);let Yt=!1;for(let re=0,te=V.length;re<te;re++){const ie=V[re],De=ie.object,Je=ie.geometry,Ce=ie.material,Ln=ie.group;if(Ce.side===ni&&De.layers.test(nt.layers)){const Ee=Ce.side;Ce.side=Sn,Ce.needsUpdate=!0,Dr(De,et,nt,Je,Ce,Ln),Ce.side=Ee,Ce.needsUpdate=!0,Yt=!0}}Yt===!0&&(A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt)),b.setRenderTarget(Ft),b.setClearColor(ht,z),b.toneMapping=Wt}function Ut(C,V,et){const nt=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,Lt=C.length;Q<Lt;Q++){const Ft=C[Q],Wt=Ft.object,Yt=Ft.geometry,re=nt===null?Ft.material:nt,te=Ft.group;Wt.layers.test(et.layers)&&Dr(Wt,V,et,Yt,re,te)}}function Dr(C,V,et,nt,Q,Lt){C.onBeforeRender(b,V,et,nt,Q,Lt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(b,V,et,nt,C,Lt),Q.transparent===!0&&Q.side===ni&&Q.forceSinglePass===!1?(Q.side=Sn,Q.needsUpdate=!0,b.renderBufferDirect(et,V,nt,Q,C,Lt),Q.side=Ai,Q.needsUpdate=!0,b.renderBufferDirect(et,V,nt,Q,C,Lt),Q.side=ni):b.renderBufferDirect(et,V,nt,Q,C,Lt),C.onAfterRender(b,V,et,nt,Q,Lt)}function Ji(C,V,et){V.isScene!==!0&&(V=Bt);const nt=Dt.get(C),Q=v.state.lights,Lt=v.state.shadowsArray,Ft=Q.state.version,Wt=Ct.getParameters(C,Q.state,Lt,V,et),Yt=Ct.getProgramCacheKey(Wt);let re=nt.programs;nt.environment=C.isMeshStandardMaterial?V.environment:null,nt.fog=V.fog,nt.envMap=(C.isMeshStandardMaterial?X:w).get(C.envMap||nt.environment),re===void 0&&(C.addEventListener("dispose",wt),re=new Map,nt.programs=re);let te=re.get(Yt);if(te!==void 0){if(nt.currentProgram===te&&nt.lightsStateVersion===Ft)return Ur(C,Wt),te}else Wt.uniforms=Ct.getUniforms(C),C.onBuild(et,Wt,b),C.onBeforeCompile(Wt,b),te=Ct.acquireProgram(Wt,Yt),re.set(Yt,te),nt.uniforms=Wt.uniforms;const ie=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ie.clippingPlanes=Jt.uniform),Ur(C,Wt),nt.needsLights=Ri(C),nt.lightsStateVersion=Ft,nt.needsLights&&(ie.ambientLightColor.value=Q.state.ambient,ie.lightProbe.value=Q.state.probe,ie.directionalLights.value=Q.state.directional,ie.directionalLightShadows.value=Q.state.directionalShadow,ie.spotLights.value=Q.state.spot,ie.spotLightShadows.value=Q.state.spotShadow,ie.rectAreaLights.value=Q.state.rectArea,ie.ltc_1.value=Q.state.rectAreaLTC1,ie.ltc_2.value=Q.state.rectAreaLTC2,ie.pointLights.value=Q.state.point,ie.pointLightShadows.value=Q.state.pointShadow,ie.hemisphereLights.value=Q.state.hemi,ie.directionalShadowMap.value=Q.state.directionalShadowMap,ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ie.spotShadowMap.value=Q.state.spotShadowMap,ie.spotLightMatrix.value=Q.state.spotLightMatrix,ie.spotLightMap.value=Q.state.spotLightMap,ie.pointShadowMap.value=Q.state.pointShadowMap,ie.pointShadowMatrix.value=Q.state.pointShadowMatrix),nt.currentProgram=te,nt.uniformsList=null,te}function Nr(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Lo.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Ur(C,V){const et=Dt.get(C);et.outputColorSpace=V.outputColorSpace,et.batching=V.batching,et.instancing=V.instancing,et.instancingColor=V.instancingColor,et.skinning=V.skinning,et.morphTargets=V.morphTargets,et.morphNormals=V.morphNormals,et.morphColors=V.morphColors,et.morphTargetsCount=V.morphTargetsCount,et.numClippingPlanes=V.numClippingPlanes,et.numIntersection=V.numClipIntersection,et.vertexAlphas=V.vertexAlphas,et.vertexTangents=V.vertexTangents,et.toneMapping=V.toneMapping}function Or(C,V,et,nt,Q){V.isScene!==!0&&(V=Bt),A.resetTextureUnits();const Lt=V.fog,Ft=nt.isMeshStandardMaterial?V.environment:null,Wt=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:je,Yt=(nt.isMeshStandardMaterial?X:w).get(nt.envMap||Ft),re=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,te=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),ie=!!et.morphAttributes.position,De=!!et.morphAttributes.normal,Je=!!et.morphAttributes.color;let Ce=Zi;nt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ce=b.toneMapping);const Ln=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ee=Ln!==void 0?Ln.length:0,ee=Dt.get(nt),fe=v.state.lights;if(st===!0&&(ut===!0||C!==R)){const Qe=C===R&&nt.id===it;Jt.setState(nt,C,Qe)}let $t=!1;nt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==fe.state.version||ee.outputColorSpace!==Wt||Q.isBatchedMesh&&ee.batching===!1||!Q.isBatchedMesh&&ee.batching===!0||Q.isInstancedMesh&&ee.instancing===!1||!Q.isInstancedMesh&&ee.instancing===!0||Q.isSkinnedMesh&&ee.skinning===!1||!Q.isSkinnedMesh&&ee.skinning===!0||Q.isInstancedMesh&&ee.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ee.instancingColor===!1&&Q.instanceColor!==null||ee.envMap!==Yt||nt.fog===!0&&ee.fog!==Lt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Jt.numPlanes||ee.numIntersection!==Jt.numIntersection)||ee.vertexAlphas!==re||ee.vertexTangents!==te||ee.morphTargets!==ie||ee.morphNormals!==De||ee.morphColors!==Je||ee.toneMapping!==Ce||rt.isWebGL2===!0&&ee.morphTargetsCount!==Ee)&&($t=!0):($t=!0,ee.__version=nt.version);let Rn=ee.currentProgram;$t===!0&&(Rn=Ji(nt,V,Q));let ci=!1,Pn=!1,Qi=!1;const kt=Rn.getUniforms(),ye=ee.uniforms;if(ct.useProgram(Rn.program)&&(ci=!0,Pn=!0,Qi=!0),nt.id!==it&&(it=nt.id,Pn=!0),ci||R!==C){kt.setValue(Z,"projectionMatrix",C.projectionMatrix),kt.setValue(Z,"viewMatrix",C.matrixWorldInverse);const Qe=kt.map.cameraPosition;Qe!==void 0&&Qe.setValue(Z,qt.setFromMatrixPosition(C.matrixWorld)),rt.logarithmicDepthBuffer&&kt.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&kt.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Pn=!0,Qi=!0)}if(Q.isSkinnedMesh){kt.setOptional(Z,Q,"bindMatrix"),kt.setOptional(Z,Q,"bindMatrixInverse");const Qe=Q.skeleton;Qe&&(rt.floatVertexTextures?(Qe.boneTexture===null&&Qe.computeBoneTexture(),kt.setValue(Z,"boneTexture",Qe.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(kt.setOptional(Z,Q,"batchingTexture"),kt.setValue(Z,"batchingTexture",Q._matricesTexture,A));const ts=et.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0&&rt.isWebGL2===!0)&&Qt.update(Q,et,Rn),(Pn||ee.receiveShadow!==Q.receiveShadow)&&(ee.receiveShadow=Q.receiveShadow,kt.setValue(Z,"receiveShadow",Q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(ye.envMap.value=Yt,ye.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),Pn&&(kt.setValue(Z,"toneMappingExposure",b.toneMappingExposure),ee.needsLights&&Ea(ye,Qi),Lt&&nt.fog===!0&&Et.refreshFogUniforms(ye,Lt),Et.refreshMaterialUniforms(ye,nt,lt,Y,xt),Lo.upload(Z,Nr(ee),ye,A)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Lo.upload(Z,Nr(ee),ye,A),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&kt.setValue(Z,"center",Q.center),kt.setValue(Z,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(Z,"normalMatrix",Q.normalMatrix),kt.setValue(Z,"modelMatrix",Q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Qe=nt.uniformsGroups;for(let an=0,Jo=Qe.length;an<Jo;an++)if(rt.isWebGL2){const es=Qe[an];_t.update(es,Rn),_t.bind(es,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function Ea(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Ri(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,V,et){Dt.get(C.texture).__webglTexture=V,Dt.get(C.depthTexture).__webglTexture=et;const nt=Dt.get(C);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const et=Dt.get(C);et.__webglFramebuffer=V,et.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,et=0){I=C,F=V,U=et;let nt=!0,Q=null,Lt=!1,Ft=!1;if(C){const Yt=Dt.get(C);Yt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(Z.FRAMEBUFFER,null),nt=!1):Yt.__webglFramebuffer===void 0?A.setupRenderTarget(C):Yt.__hasExternalTextures&&A.rebindTextures(C,Dt.get(C.texture).__webglTexture,Dt.get(C.depthTexture).__webglTexture);const re=C.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ft=!0);const te=Dt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[V])?Q=te[V][et]:Q=te[V],Lt=!0):rt.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?Q=Dt.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?Q=te[et]:Q=te,D.copy(C.viewport),G.copy(C.scissor),$=C.scissorTest}else D.copy(q).multiplyScalar(lt).floor(),G.copy(ot).multiplyScalar(lt).floor(),$=Mt;if(ct.bindFramebuffer(Z.FRAMEBUFFER,Q)&&rt.drawBuffers&&nt&&ct.drawBuffers(C,Q),ct.viewport(D),ct.scissor(G),ct.setScissorTest($),Lt){const Yt=Dt.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Yt.__webglTexture,et)}else if(Ft){const Yt=Dt.get(C.texture),re=V||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Yt.__webglTexture,et||0,re)}it=-1},this.readRenderTargetPixels=function(C,V,et,nt,Q,Lt,Ft){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Dt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Wt=Wt[Ft]),Wt){ct.bindFramebuffer(Z.FRAMEBUFFER,Wt);try{const Yt=C.texture,re=Yt.format,te=Yt.type;if(re!==Bn&&St.convert(re)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ie=te===da&&(H.has("EXT_color_buffer_half_float")||rt.isWebGL2&&H.has("EXT_color_buffer_float"));if(te!==qi&&St.convert(te)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(te===Ei&&(rt.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-nt&&et>=0&&et<=C.height-Q&&Z.readPixels(V,et,nt,Q,St.convert(re),St.convert(te),Lt)}finally{const Yt=I!==null?Dt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(Z.FRAMEBUFFER,Yt)}}},this.copyFramebufferToTexture=function(C,V,et=0){const nt=Math.pow(2,-et),Q=Math.floor(V.image.width*nt),Lt=Math.floor(V.image.height*nt);A.setTexture2D(V,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,et,0,0,C.x,C.y,Q,Lt),ct.unbindTexture()},this.copyTextureToTexture=function(C,V,et,nt=0){const Q=V.image.width,Lt=V.image.height,Ft=St.convert(et.format),Wt=St.convert(et.type);A.setTexture2D(et,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,et.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,et.unpackAlignment),V.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,nt,C.x,C.y,Q,Lt,Ft,Wt,V.image.data):V.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,nt,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ft,V.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,nt,C.x,C.y,Ft,Wt,V.image),nt===0&&et.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(C,V,et,nt,Q=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Lt=C.max.x-C.min.x+1,Ft=C.max.y-C.min.y+1,Wt=C.max.z-C.min.z+1,Yt=St.convert(nt.format),re=St.convert(nt.type);let te;if(nt.isData3DTexture)A.setTexture3D(nt,0),te=Z.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)A.setTexture2DArray(nt,0),te=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,nt.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,nt.unpackAlignment);const ie=Z.getParameter(Z.UNPACK_ROW_LENGTH),De=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Je=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Ce=Z.getParameter(Z.UNPACK_SKIP_ROWS),Ln=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Ee=et.isCompressedTexture?et.mipmaps[Q]:et.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Ee.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ee.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,C.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,C.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,C.min.z),et.isDataTexture||et.isData3DTexture?Z.texSubImage3D(te,Q,V.x,V.y,V.z,Lt,Ft,Wt,Yt,re,Ee.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(te,Q,V.x,V.y,V.z,Lt,Ft,Wt,Yt,Ee.data)):Z.texSubImage3D(te,Q,V.x,V.y,V.z,Lt,Ft,Wt,Yt,re,Ee),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ie),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,De),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Je),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Ce),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ln),Q===0&&nt.generateMipmaps&&Z.generateMipmap(te),ct.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),ct.unbindTexture()},this.resetState=function(){F=0,U=0,I=null,ct.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Gc?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===Vo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?Es:Lf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Es?Le:je}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class $0 extends Zf{}$0.prototype.isWebGL1Renderer=!0;class J0 extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class qf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,a=this.stride;r<a;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new O;class wi{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),a=Se(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Md=new O,Sd=new _e,bd=new _e,Q0=new O,Ed=new oe,oo=new O,Yl=new Hn,Td=new oe,$l=new Ar;class tM extends Mn{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ru,this.bindMatrix=new oe,this.bindMatrixInverse=new oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oe),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,oo),this.boundingSphere.expandByPoint(oo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yl.copy(this.boundingSphere),Yl.applyMatrix4(r),t.ray.intersectsSphere(Yl)!==!1&&(Td.copy(r).invert(),$l.copy(t.ray).applyMatrix4(Td),!(this.boundingBox!==null&&$l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,$l)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new _e,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;Sd.fromBufferAttribute(r.attributes.skinIndex,t),bd.fromBufferAttribute(r.attributes.skinWeight,t),Md.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let a=0;a<4;a++){const l=bd.getComponent(a);if(l!==0){const c=Sd.getComponent(a);Ed.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),e.addScaledVector(Q0.copy(Md).applyMatrix4(Ed),l)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class Kf extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eM extends rn{constructor(t=null,e=1,n=1,r,a,l,c,h,d=Ye,f=Ye,p,g){super(null,l,c,h,d,f,r,a,p,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new oe,nM=new oe;class Yc{constructor(t=[],e=[]){this.uuid=qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new oe)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new oe;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let a=0,l=t.length;a<l;a++){const c=t[a]?t[a].matrixWorld:nM;wd.multiplyMatrices(c,e[a]),wd.toArray(n,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Yc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new eM(e,t,t,Bn,Ei);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const a=t.bones[n];let l=e[a];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),l=new Kf),this.bones.push(l),this.boneInverses.push(new oe().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,a=e.length;r<a;r++){const l=e[r];t.bones.push(l.uuid);const c=n[r];t.boneInverses.push(c.toArray())}return t}}class Sc extends Ve{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ar=new oe,Ad=new oe,lo=[],Ld=new Oe,iM=new oe,$r=new Mn,Jr=new Hn;class sM extends Mn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,iM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),Ld.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union(Ld)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),Jr.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,r=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),t.ray.intersectsSphere(Jr)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,ar),Ad.multiplyMatrices(n,ar),$r.matrixWorld=Ad,$r.raycast(t,lo);for(let l=0,c=lo.length;l<c;l++){const h=lo[l];h.instanceId=a,h.object=this,e.push(h)}lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class $c extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rd=new O,Pd=new O,Cd=new oe,Jl=new Ar,co=new Hn;class Jc extends Ie{constructor(t=new mn,e=new $c){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,a=e.count;r<a;r++)Rd.fromBufferAttribute(e,r-1),Pd.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Rd.distanceTo(Pd);t.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),co.radius+=a,t.ray.intersectsSphere(co)===!1)return;Cd.copy(r).invert(),Jl.copy(t.ray).applyMatrix4(Cd);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=new O,f=new O,p=new O,g=new O,x=this.isLineSegments?2:1,M=n.index,v=n.attributes.position;if(M!==null){const _=Math.max(0,l.start),T=Math.min(M.count,l.start+l.count);for(let b=_,P=T-1;b<P;b+=x){const F=M.getX(b),U=M.getX(b+1);if(d.fromBufferAttribute(v,F),f.fromBufferAttribute(v,U),Jl.distanceSqToSegment(d,f,g,p)>h)continue;g.applyMatrix4(this.matrixWorld);const it=t.ray.origin.distanceTo(g);it<t.near||it>t.far||e.push({distance:it,point:p.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,l.start),T=Math.min(v.count,l.start+l.count);for(let b=_,P=T-1;b<P;b+=x){if(d.fromBufferAttribute(v,b),f.fromBufferAttribute(v,b+1),Jl.distanceSqToSegment(d,f,g,p)>h)continue;g.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(g);U<t.near||U>t.far||e.push({distance:U,point:p.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}const Id=new O,Dd=new O;class Yf extends Jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,a=e.count;r<a;r+=2)Id.fromBufferAttribute(e,r),Dd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Id.distanceTo(Dd);t.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rM extends Jc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class $f extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nd=new oe,bc=new Ar,ho=new Hn,uo=new O;class aM extends Ie{constructor(t=new mn,e=new $f){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,a=t.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),ho.radius+=a,t.ray.intersectsSphere(ho)===!1)return;Nd.copy(r).invert(),bc.copy(t.ray).applyMatrix4(Nd);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=n.index,p=n.attributes.position;if(d!==null){const g=Math.max(0,l.start),x=Math.min(d.count,l.start+l.count);for(let M=g,S=x;M<S;M++){const v=d.getX(M);uo.fromBufferAttribute(p,v),Ud(uo,v,h,r,t,e,this)}}else{const g=Math.max(0,l.start),x=Math.min(p.count,l.start+l.count);for(let M=g,S=x;M<S;M++)uo.fromBufferAttribute(p,M),Ud(uo,M,h,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ud(s,t,e,n,r,a,l){const c=bc.distanceSqToPoint(s);if(c<e){const h=new O;bc.closestPointToPoint(s,h),h.applyMatrix4(n);const d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:t,face:null,object:l})}}const fo=new O,po=new O,Ql=new O,mo=new Un;class Jf extends mn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),a=Math.cos(fr*e),l=t.getIndex(),c=t.getAttribute("position"),h=l?l.count:c.count,d=[0,0,0],f=["a","b","c"],p=new Array(3),g={},x=[];for(let M=0;M<h;M+=3){l?(d[0]=l.getX(M),d[1]=l.getX(M+1),d[2]=l.getX(M+2)):(d[0]=M,d[1]=M+1,d[2]=M+2);const{a:S,b:v,c:_}=mo;if(S.fromBufferAttribute(c,d[0]),v.fromBufferAttribute(c,d[1]),_.fromBufferAttribute(c,d[2]),mo.getNormal(Ql),p[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,p[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let T=0;T<3;T++){const b=(T+1)%3,P=p[T],F=p[b],U=mo[f[T]],I=mo[f[b]],it=`${P}_${F}`,R=`${F}_${P}`;R in g&&g[R]?(Ql.dot(g[R].normal)<=a&&(x.push(U.x,U.y,U.z),x.push(I.x,I.y,I.z)),g[R]=null):it in g||(g[it]={index0:d[T],index1:d[b],normal:Ql.clone()})}}for(const M in g)if(g[M]){const{index0:S,index1:v}=g[M];fo.fromBufferAttribute(c,S),po.fromBufferAttribute(c,v),x.push(fo.x,fo.y,fo.z),x.push(po.x,po.y,po.z)}this.setAttribute("position",new Tn(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}const oM={triangulate:function(s,t,e=2){const n=t&&t.length,r=n?t[0]*e:s.length;let a=Qf(s,0,r,e,!0);const l=[];if(!a||a.next===a.prev)return l;let c,h,d,f,p,g,x;if(n&&(a=dM(s,t,a,e)),s.length>80*e){c=d=s[0],h=f=s[1];for(let M=e;M<r;M+=e)p=s[M],g=s[M+1],p<c&&(c=p),g<h&&(h=g),p>d&&(d=p),g>f&&(f=g);x=Math.max(d-c,f-h),x=x!==0?32767/x:0}return ma(a,l,e,c,h,x,0),l}};function Qf(s,t,e,n,r){let a,l;if(r===bM(s,t,e,n)>0)for(a=t;a<e;a+=n)l=Od(a,s[a],s[a+1],l);else for(a=e-n;a>=t;a-=n)l=Od(a,s[a],s[a+1],l);return l&&Xo(l,l.next)&&(_a(l),l=l.next),l}function Rs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Xo(e,e.next)||Ne(e.prev,e,e.next)===0)){if(_a(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ma(s,t,e,n,r,a,l){if(!s)return;!l&&a&&_M(s,n,r,a);let c=s,h,d;for(;s.prev!==s.next;){if(h=s.prev,d=s.next,a?cM(s,n,r,a):lM(s)){t.push(h.i/e|0),t.push(s.i/e|0),t.push(d.i/e|0),_a(s),s=d.next,c=d.next;continue}if(s=d,s===c){l?l===1?(s=hM(Rs(s),t,e),ma(s,t,e,n,r,a,2)):l===2&&uM(s,t,e,n,r,a):ma(Rs(s),t,e,n,r,a,1);break}}}function lM(s){const t=s.prev,e=s,n=s.next;if(Ne(t,e,n)>=0)return!1;const r=t.x,a=e.x,l=n.x,c=t.y,h=e.y,d=n.y,f=r<a?r<l?r:l:a<l?a:l,p=c<h?c<d?c:d:h<d?h:d,g=r>a?r>l?r:l:a>l?a:l,x=c>h?c>d?c:d:h>d?h:d;let M=n.next;for(;M!==t;){if(M.x>=f&&M.x<=g&&M.y>=p&&M.y<=x&&hr(r,c,a,h,l,d,M.x,M.y)&&Ne(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function cM(s,t,e,n){const r=s.prev,a=s,l=s.next;if(Ne(r,a,l)>=0)return!1;const c=r.x,h=a.x,d=l.x,f=r.y,p=a.y,g=l.y,x=c<h?c<d?c:d:h<d?h:d,M=f<p?f<g?f:g:p<g?p:g,S=c>h?c>d?c:d:h>d?h:d,v=f>p?f>g?f:g:p>g?p:g,_=Ec(x,M,t,e,n),T=Ec(S,v,t,e,n);let b=s.prevZ,P=s.nextZ;for(;b&&b.z>=_&&P&&P.z<=T;){if(b.x>=x&&b.x<=S&&b.y>=M&&b.y<=v&&b!==r&&b!==l&&hr(c,f,h,p,d,g,b.x,b.y)&&Ne(b.prev,b,b.next)>=0||(b=b.prevZ,P.x>=x&&P.x<=S&&P.y>=M&&P.y<=v&&P!==r&&P!==l&&hr(c,f,h,p,d,g,P.x,P.y)&&Ne(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;b&&b.z>=_;){if(b.x>=x&&b.x<=S&&b.y>=M&&b.y<=v&&b!==r&&b!==l&&hr(c,f,h,p,d,g,b.x,b.y)&&Ne(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;P&&P.z<=T;){if(P.x>=x&&P.x<=S&&P.y>=M&&P.y<=v&&P!==r&&P!==l&&hr(c,f,h,p,d,g,P.x,P.y)&&Ne(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function hM(s,t,e){let n=s;do{const r=n.prev,a=n.next.next;!Xo(r,a)&&tp(r,n,n.next,a)&&ga(r,a)&&ga(a,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(a.i/e|0),_a(n),_a(n.next),n=s=a),n=n.next}while(n!==s);return Rs(n)}function uM(s,t,e,n,r,a){let l=s;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&yM(l,c)){let h=ep(l,c);l=Rs(l,l.next),h=Rs(h,h.next),ma(l,t,e,n,r,a,0),ma(h,t,e,n,r,a,0);return}c=c.next}l=l.next}while(l!==s)}function dM(s,t,e,n){const r=[];let a,l,c,h,d;for(a=0,l=t.length;a<l;a++)c=t[a]*n,h=a<l-1?t[a+1]*n:s.length,d=Qf(s,c,h,n,!1),d===d.next&&(d.steiner=!0),r.push(xM(d));for(r.sort(fM),a=0;a<r.length;a++)e=pM(r[a],e);return e}function fM(s,t){return s.x-t.x}function pM(s,t){const e=mM(s,t);if(!e)return t;const n=ep(e,s);return Rs(n,n.next),Rs(e,e.next)}function mM(s,t){let e=t,n=-1/0,r;const a=s.x,l=s.y;do{if(l<=e.y&&l>=e.next.y&&e.next.y!==e.y){const g=e.x+(l-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=a&&g>n&&(n=g,r=e.x<e.next.x?e:e.next,g===a))return r}e=e.next}while(e!==t);if(!r)return null;const c=r,h=r.x,d=r.y;let f=1/0,p;e=r;do a>=e.x&&e.x>=h&&a!==e.x&&hr(l<d?a:n,l,h,d,l<d?n:a,l,e.x,e.y)&&(p=Math.abs(l-e.y)/(a-e.x),ga(e,s)&&(p<f||p===f&&(e.x>r.x||e.x===r.x&&gM(r,e)))&&(r=e,f=p)),e=e.next;while(e!==c);return r}function gM(s,t){return Ne(s.prev,s,t.prev)<0&&Ne(t.next,s,s.next)<0}function _M(s,t,e,n){let r=s;do r.z===0&&(r.z=Ec(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==s);r.prevZ.nextZ=null,r.prevZ=null,vM(r)}function vM(s){let t,e,n,r,a,l,c,h,d=1;do{for(e=s,s=null,a=null,l=0;e;){for(l++,n=e,c=0,t=0;t<d&&(c++,n=n.nextZ,!!n);t++);for(h=d;c>0||h>0&&n;)c!==0&&(h===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,c--):(r=n,n=n.nextZ,h--),a?a.nextZ=r:s=r,r.prevZ=a,a=r;e=n}a.nextZ=null,d*=2}while(l>1);return s}function Ec(s,t,e,n,r){return s=(s-e)*r|0,t=(t-n)*r|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function xM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hr(s,t,e,n,r,a,l,c){return(r-l)*(t-c)>=(s-l)*(a-c)&&(s-l)*(n-c)>=(e-l)*(t-c)&&(e-l)*(a-c)>=(r-l)*(n-c)}function yM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!MM(s,t)&&(ga(s,t)&&ga(t,s)&&SM(s,t)&&(Ne(s.prev,s,t.prev)||Ne(s,t.prev,t))||Xo(s,t)&&Ne(s.prev,s,s.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Xo(s,t){return s.x===t.x&&s.y===t.y}function tp(s,t,e,n){const r=_o(Ne(s,t,e)),a=_o(Ne(s,t,n)),l=_o(Ne(e,n,s)),c=_o(Ne(e,n,t));return!!(r!==a&&l!==c||r===0&&go(s,e,t)||a===0&&go(s,n,t)||l===0&&go(e,s,n)||c===0&&go(e,t,n))}function go(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function _o(s){return s>0?1:s<0?-1:0}function MM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&tp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ga(s,t){return Ne(s.prev,s,s.next)<0?Ne(s,t,s.next)>=0&&Ne(s,s.prev,t)>=0:Ne(s,t,s.prev)<0||Ne(s,s.next,t)<0}function SM(s,t){let e=s,n=!1;const r=(s.x+t.x)/2,a=(s.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&r<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ep(s,t){const e=new Tc(s.i,s.x,s.y),n=new Tc(t.i,t.x,t.y),r=s.next,a=t.prev;return s.next=t,t.prev=s,e.next=r,r.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function Od(s,t,e,n){const r=new Tc(s,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function _a(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Tc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bM(s,t,e,n){let r=0;for(let a=t,l=e-n;a<e;a+=n)r+=(s[l]-s[a])*(s[a+1]+s[l+1]),l=a;return r}class Qc{static area(t){const e=t.length;let n=0;for(let r=e-1,a=0;a<e;r=a++)n+=t[r].x*t[a].y-t[a].x*t[r].y;return n*.5}static isClockWise(t){return Qc.area(t)<0}static triangulateShape(t,e){const n=[],r=[],a=[];Bd(t),Fd(n,t);let l=t.length;e.forEach(Bd);for(let h=0;h<e.length;h++)r.push(l),l+=e[h].length,Fd(n,e[h]);const c=oM.triangulate(n,r);for(let h=0;h<c.length;h+=3)a.push(c.slice(h,h+3));return a}}function Bd(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Fd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class EM extends mn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,r=new O,a=new O;if(t.index!==null){const l=t.attributes.position,c=t.index;let h=t.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let d=0,f=h.length;d<f;++d){const p=h[d],g=p.start,x=p.count;for(let M=g,S=g+x;M<S;M+=3)for(let v=0;v<3;v++){const _=c.getX(M+v),T=c.getX(M+(v+1)%3);r.fromBufferAttribute(l,_),a.fromBufferAttribute(l,T),kd(r,a,n)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}}else{const l=t.attributes.position;for(let c=0,h=l.count/3;c<h;c++)for(let d=0;d<3;d++){const f=3*c+d,p=3*c+(d+1)%3;r.fromBufferAttribute(l,f),a.fromBufferAttribute(l,p),kd(r,a,n)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new Tn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function kd(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}class th extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Li extends th{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class TM extends Kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function vo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function wM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function AM(s){function t(r,a){return s[r]-s[a]}const e=s.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function zd(s,t,e){const n=s.length,r=new s.constructor(n);for(let a=0,l=0;l!==n;++a){const c=e[a]*t;for(let h=0;h!==t;++h)r[l++]=s[c+h]}return r}function np(s,t,e,n){let r=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[r++];if(a===void 0)return;let l=a[n];if(l!==void 0)if(Array.isArray(l))do l=a[n],l!==void 0&&(t.push(a.time),e.push.apply(e,l)),a=s[r++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[n],l!==void 0&&(t.push(a.time),l.toArray(e,e.length)),a=s[r++];while(a!==void 0);else do l=a[n],l!==void 0&&(t.push(a.time),e.push(l)),a=s[r++];while(a!==void 0)}class Ma{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],a=e[n-1];n:{t:{let l;e:{i:if(!(t<r)){for(let c=n+2;;){if(r===void 0){if(t<a)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=r,r=e[++n],t<r)break t}l=e.length;break e}if(!(t>=a)){const c=e[1];t<c&&(n=2,a=c);for(let h=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=a,a=e[--n-1],t>=a)break t}l=n,n=0;break e}break n}for(;n<l;){const c=n+l>>>1;t<e[c]?l=c:n=c+1}if(r=e[n],a=e[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=t*r;for(let l=0;l!==r;++l)e[l]=n[a+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class LM extends Ma{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cu,endingEnd:Cu}}intervalChanged_(t,e,n){const r=this.parameterPositions;let a=t-2,l=t+1,c=r[a],h=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case Iu:a=t,c=2*e-n;break;case Du:a=r.length-2,c=e+r[a]-r[a+1];break;default:a=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Iu:l=t,h=2*n-e;break;case Du:l=1,h=n+r[1]-r[0];break;default:l=t-1,h=e}const d=(n-e)*.5,f=this.valueSize;this._weightPrev=d/(e-c),this._weightNext=d/(h-n),this._offsetPrev=a*f,this._offsetNext=l*f}interpolate_(t,e,n,r){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,f=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,x=this._weightNext,M=(n-e)/(r-e),S=M*M,v=S*M,_=-g*v+2*g*S-g*M,T=(1+g)*v+(-1.5-2*g)*S+(-.5+g)*M+1,b=(-1-x)*v+(1.5+x)*S+.5*M,P=x*v-x*S;for(let F=0;F!==c;++F)a[F]=_*l[f+F]+T*l[d+F]+b*l[h+F]+P*l[p+F];return a}}class RM extends Ma{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,f=(n-e)/(r-e),p=1-f;for(let g=0;g!==c;++g)a[g]=l[d+g]*p+l[h+g]*f;return a}}class PM extends Ma{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class li{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new PM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new RM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new LM(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fa:e=this.InterpolantFactoryMethodDiscrete;break;case yr:e=this.InterpolantFactoryMethodLinear;break;case wl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let a=0,l=r-1;for(;a!==r&&n[a]<t;)++a;for(;l!==-1&&n[l]>e;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);const c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let c=0;c!==a;c++){const h=n[c];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(l!==null&&l>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,h,l),t=!1;break}l=h}if(r!==void 0&&wM(r))for(let c=0,h=r.length;c!==h;++c){const d=r[c];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,d),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===wl,a=t.length-1;let l=1;for(let c=1;c<a;++c){let h=!1;const d=t[c],f=t[c+1];if(d!==f&&(c!==1||d!==t[0]))if(r)h=!0;else{const p=c*n,g=p-n,x=p+n;for(let M=0;M!==n;++M){const S=e[p+M];if(S!==e[g+M]||S!==e[x+M]){h=!0;break}}}if(h){if(c!==l){t[l]=t[c];const p=c*n,g=l*n;for(let x=0;x!==n;++x)e[g+x]=e[p+x]}++l}}if(a>0){t[l]=t[a];for(let c=a*n,h=l*n,d=0;d!==n;++d)e[h+d]=e[c+d];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=yr;class Rr extends li{}Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=fa;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class ip extends li{}ip.prototype.ValueTypeName="color";class br extends li{}br.prototype.ValueTypeName="number";class CM extends Ma{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=(n-e)/(r-e);let d=t*c;for(let f=d+c;d!==f;d+=4)ai.slerpFlat(a,0,l,d-c,l,d,h);return a}}class Ps extends li{InterpolantFactoryMethodLinear(t){return new CM(this.times,this.values,this.getValueSize(),t)}}Ps.prototype.ValueTypeName="quaternion";Ps.prototype.DefaultInterpolation=yr;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends li{}Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=fa;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends li{}Er.prototype.ValueTypeName="vector";class IM{constructor(t,e=-1,n,r=Mg){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let l=0,c=n.length;l!==c;++l)e.push(NM(n[l]).scale(r));const a=new this(t.name,t.duration,e,t.blendMode);return a.uuid=t.uuid,a}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let a=0,l=n.length;a!==l;++a)e.push(li.toJSON(n[a]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const a=e.length,l=[];for(let c=0;c<a;c++){let h=[],d=[];h.push((c+a-1)%a,c,(c+1)%a),d.push(0,1,0);const f=AM(h);h=zd(h,1,f),d=zd(d,1,f),!r&&h[0]===0&&(h.push(a),d.push(d[0])),l.push(new br(".morphTargetInfluences["+e[c].name+"]",h,d).scale(1/n))}return new this(t,-1,l)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,h=t.length;c<h;c++){const d=t[c],f=d.name.match(a);if(f&&f.length>1){const p=f[1];let g=r[p];g||(r[p]=g=[]),g.push(d)}}const l=[];for(const c in r)l.push(this.CreateFromMorphTargetSequence(c,r[c],e,n));return l}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,g,x,M,S){if(x.length!==0){const v=[],_=[];np(x,v,_,M),v.length!==0&&S.push(new p(g,v,_))}},r=[],a=t.name||"default",l=t.fps||30,c=t.blendMode;let h=t.length||-1;const d=t.hierarchy||[];for(let p=0;p<d.length;p++){const g=d[p].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const x={};let M;for(M=0;M<g.length;M++)if(g[M].morphTargets)for(let S=0;S<g[M].morphTargets.length;S++)x[g[M].morphTargets[S]]=-1;for(const S in x){const v=[],_=[];for(let T=0;T!==g[M].morphTargets.length;++T){const b=g[M];v.push(b.time),_.push(b.morphTarget===S?1:0)}r.push(new br(".morphTargetInfluence["+S+"]",v,_))}h=x.length*l}else{const x=".bones["+e[p].name+"]";n(Er,x+".position",g,"pos",r),n(Ps,x+".quaternion",g,"rot",r),n(Er,x+".scale",g,"scl",r)}}return r.length===0?null:new this(a,h,r,c)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const a=this.tracks[n];e=Math.max(e,a.times[a.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function DM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return br;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return ip;case"quaternion":return Ps;case"bool":case"boolean":return Rr;case"string":return Pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function NM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=DM(s.type);if(s.times===void 0){const e=[],n=[];np(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ji={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class UM{constructor(t,e,n){const r=this;let a=!1,l=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){c++,a===!1&&r.onStart!==void 0&&r.onStart(f,l,c),a=!0},this.itemEnd=function(f){l++,r.onProgress!==void 0&&r.onProgress(f,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return h?h(f):f},this.setURLModifier=function(f){return h=f,this},this.addHandler=function(f,p){return d.push(f,p),this},this.removeHandler=function(f){const p=d.indexOf(f);return p!==-1&&d.splice(p,2),this},this.getHandler=function(f){for(let p=0,g=d.length;p<g;p+=2){const x=d[p],M=d[p+1];if(x.global&&(x.lastIndex=0),x.test(f))return M}return null}}}const OM=new UM;class Ns{constructor(t){this.manager=t!==void 0?t:OM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,a){n.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class BM extends Error{constructor(t,e){super(t),this.response=e}}class Fo extends Ns{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=ji.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(yi[t]!==void 0){yi[t].push({onLoad:e,onProgress:n,onError:r});return}yi[t]=[],yi[t].push({onLoad:e,onProgress:n,onError:r});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,h=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const f=yi[t],p=d.body.getReader(),g=d.headers.get("Content-Length")||d.headers.get("X-File-Size"),x=g?parseInt(g):0,M=x!==0;let S=0;const v=new ReadableStream({start(_){T();function T(){p.read().then(({done:b,value:P})=>{if(b)_.close();else{S+=P.byteLength;const F=new ProgressEvent("progress",{lengthComputable:M,loaded:S,total:x});for(let U=0,I=f.length;U<I;U++){const it=f[U];it.onProgress&&it.onProgress(F)}_.enqueue(P),T()}})}}});return new Response(v)}else throw new BM(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return d.json();default:if(c===void 0)return d.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),g=p&&p[1]?p[1].toLowerCase():void 0,x=new TextDecoder(g);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{ji.add(t,d);const f=yi[t];delete yi[t];for(let p=0,g=f.length;p<g;p++){const x=f[p];x.onLoad&&x.onLoad(d)}}).catch(d=>{const f=yi[t];if(f===void 0)throw this.manager.itemError(t),d;delete yi[t];for(let p=0,g=f.length;p<g;p++){const x=f[p];x.onError&&x.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class FM extends Ns{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,l=ji.get(t);if(l!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(l),a.manager.itemEnd(t)},0),l;const c=pa("img");function h(){f(),ji.add(t,this),e&&e(this),a.manager.itemEnd(t)}function d(p){f(),r&&r(p),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(t),c.src=t,c}}class kM extends Ns{constructor(t){super(t)}load(t,e,n,r){const a=new rn,l=new FM(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(c){a.image=c,a.needsUpdate=!0,e!==void 0&&e(a)},n,r),a}}class Zo extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class zM extends Zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const tc=new oe,Hd=new O,Gd=new O;class eh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hd),Gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gd),e.updateMatrixWorld(),tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class HM extends eh{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Mr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(n!==e.fov||r!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=r,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class GM extends Zo{constructor(t,e,n=0,r=Math.PI/3,a=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=r,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new HM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Vd=new oe,Qr=new O,ec=new O;class VM extends eh{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Qr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qr),ec.copy(n.position),ec.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ec),n.updateMatrixWorld(),r.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd)}}class WM extends Zo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new VM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jM extends eh{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sp extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new jM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ca{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class XM extends mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class ZM extends Ns{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,l=ji.get(t);if(l!==void 0){if(a.manager.itemStart(t),l.then){l.then(d=>{e&&e(d),a.manager.itemEnd(t)}).catch(d=>{r&&r(d)});return}return setTimeout(function(){e&&e(l),a.manager.itemEnd(t)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const h=fetch(t,c).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return ji.add(t,d),e&&e(d),a.manager.itemEnd(t),d}).catch(function(d){r&&r(d),ji.remove(t),a.manager.itemError(t),a.manager.itemEnd(t)});ji.add(t,h),a.manager.itemStart(t)}}const nh="\\[\\]\\.:\\/",qM=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",KM="[^"+nh.replace("\\.","")+"]",YM=/((?:WC+[\/:])*)/.source.replace("WC",ih),$M=/(WCOD+)?/.source.replace("WCOD",KM),JM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),QM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),tS=new RegExp("^"+YM+$M+JM+QM+"$"),eS=["material","materials","bones","map"];class nS{constructor(t,e,n){const r=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Me{constructor(t,e,n){this.path=e,this.parsedPath=n||Me.parseTrackName(e),this.node=Me.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Me.Composite(t,e,n):new Me(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qM,"")}static parseTrackName(t){const e=tS.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const a=n.nodeName.substring(r+1);eS.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(a){for(let l=0;l<a.length;l++){const c=a[l];if(c.name===e||c.uuid===e)return c;const h=n(c.children);if(h)return h}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,r=e.propertyName;let a=e.propertyIndex;if(t||(t=Me.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===d){d=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(d!==void 0){if(t[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const l=t[r];if(l===void 0){const d=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Me.Composite=nS;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wc extends qf{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class sh{constructor(t,e,n=0,r=1/0){this.ray=new Ar(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(Wd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,a=t.length;r<a;r++)Ac(t[r],this,n,e);return n.sort(Wd),n}}function Wd(s,t){return s.distance-t.distance}function Ac(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const r=s.children;for(let a=0,l=r.length;a<l;a++)Ac(r[a],t,e,!0)}}class Lc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jd=new O,xo=new O;class iS{constructor(t=new O,e=new O){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){jd.subVectors(t,this.start),xo.subVectors(this.end,this.start);const n=xo.dot(xo);let a=xo.dot(jd)/n;return e&&(a=$e(a,0,1)),a}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);const Xd={type:"change"},nc={type:"start"},Zd={type:"end"},yo=new Ar,qd=new Hi,sS=Math.cos(70*wr.DEG2RAD);class rS extends Ds{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Ot),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ot),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xd),n.update(),a=r.NONE},this.update=function(){const N=new O,_t=new ai().setFromUnitVectors(t.up,new O(0,1,0)),Nt=_t.clone().invert(),It=new O,vt=new ai,k=new O,yt=2*Math.PI;return function(Xt=null){const Ht=n.object.position;N.copy(Ht).sub(n.target),N.applyQuaternion(_t),c.setFromVector3(N),n.autoRotate&&a===r.NONE&&$(D(Xt)),n.enableDamping?(c.theta+=h.theta*n.dampingFactor,c.phi+=h.phi*n.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let le=n.minAzimuthAngle,ce=n.maxAzimuthAngle;isFinite(le)&&isFinite(ce)&&(le<-Math.PI?le+=yt:le>Math.PI&&(le-=yt),ce<-Math.PI?ce+=yt:ce>Math.PI&&(ce-=yt),le<=ce?c.theta=Math.max(le,Math.min(ce,c.theta)):c.theta=c.theta>(le+ce)/2?Math.max(le,c.theta):Math.min(ce,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&U||n.object.isOrthographicCamera?c.radius=q(c.radius):c.radius=q(c.radius*d),N.setFromSpherical(c),N.applyQuaternion(Nt),Ht.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),f.set(0,0,0));let Pe=!1;if(n.zoomToCursor&&U){let we=null;if(n.object.isPerspectiveCamera){const me=N.length();we=q(me*d);const Ue=me-we;n.object.position.addScaledVector(P,Ue),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const me=new O(F.x,F.y,0);me.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),Pe=!0;const Ue=new O(F.x,F.y,0);Ue.unproject(n.object),n.object.position.sub(Ue).add(me),n.object.updateMatrixWorld(),we=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;we!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(we).add(n.object.position):(yo.origin.copy(n.object.position),yo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(yo.direction))<sS?t.lookAt(n.target):(qd.setFromNormalAndCoplanarPoint(n.object.up,n.target),yo.intersectPlane(qd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),Pe=!0);return d=1,U=!1,Pe||It.distanceToSquared(n.object.position)>l||8*(1-vt.dot(n.object.quaternion))>l||k.distanceToSquared(n.target)>0?(n.dispatchEvent(Xd),It.copy(n.object.position),vt.copy(n.object.quaternion),k.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",de),n.domElement.removeEventListener("pointerdown",A),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",gt),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",X),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ot),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,c=new Lc,h=new Lc;let d=1;const f=new O,p=new jt,g=new jt,x=new jt,M=new jt,S=new jt,v=new jt,_=new jt,T=new jt,b=new jt,P=new O,F=new jt;let U=!1;const I=[],it={};let R=!1;function D(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function G(N){const _t=Math.abs(N*.01);return Math.pow(.95,n.zoomSpeed*_t)}function $(N){h.theta-=N}function ht(N){h.phi-=N}const z=function(){const N=new O;return function(Nt,It){N.setFromMatrixColumn(It,0),N.multiplyScalar(-Nt),f.add(N)}}(),K=function(){const N=new O;return function(Nt,It){n.screenSpacePanning===!0?N.setFromMatrixColumn(It,1):(N.setFromMatrixColumn(It,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(Nt),f.add(N)}}(),Y=function(){const N=new O;return function(Nt,It){const vt=n.domElement;if(n.object.isPerspectiveCamera){const k=n.object.position;N.copy(k).sub(n.target);let yt=N.length();yt*=Math.tan(n.object.fov/2*Math.PI/180),z(2*Nt*yt/vt.clientHeight,n.object.matrix),K(2*It*yt/vt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(Nt*(n.object.right-n.object.left)/n.object.zoom/vt.clientWidth,n.object.matrix),K(It*(n.object.top-n.object.bottom)/n.object.zoom/vt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function lt(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function at(N,_t){if(!n.zoomToCursor)return;U=!0;const Nt=n.domElement.getBoundingClientRect(),It=N-Nt.left,vt=_t-Nt.top,k=Nt.width,yt=Nt.height;F.x=It/k*2-1,F.y=-(vt/yt)*2+1,P.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function ot(N){p.set(N.clientX,N.clientY)}function Mt(N){at(N.clientX,N.clientX),_.set(N.clientX,N.clientY)}function J(N){M.set(N.clientX,N.clientY)}function st(N){g.set(N.clientX,N.clientY),x.subVectors(g,p).multiplyScalar(n.rotateSpeed);const _t=n.domElement;$(2*Math.PI*x.x/_t.clientHeight),ht(2*Math.PI*x.y/_t.clientHeight),p.copy(g),n.update()}function ut(N){T.set(N.clientX,N.clientY),b.subVectors(T,_),b.y>0?lt(G(b.y)):b.y<0&&j(G(b.y)),_.copy(T),n.update()}function xt(N){S.set(N.clientX,N.clientY),v.subVectors(S,M).multiplyScalar(n.panSpeed),Y(v.x,v.y),M.copy(S),n.update()}function Pt(N){at(N.clientX,N.clientY),N.deltaY<0?j(G(N.deltaY)):N.deltaY>0&&lt(G(N.deltaY)),n.update()}function zt(N){let _t=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?ht(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),_t=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?ht(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),_t=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),_t=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),_t=!0;break}_t&&(N.preventDefault(),n.update())}function qt(N){if(I.length===1)p.set(N.pageX,N.pageY);else{const _t=St(N),Nt=.5*(N.pageX+_t.x),It=.5*(N.pageY+_t.y);p.set(Nt,It)}}function Bt(N){if(I.length===1)M.set(N.pageX,N.pageY);else{const _t=St(N),Nt=.5*(N.pageX+_t.x),It=.5*(N.pageY+_t.y);M.set(Nt,It)}}function ne(N){const _t=St(N),Nt=N.pageX-_t.x,It=N.pageY-_t.y,vt=Math.sqrt(Nt*Nt+It*It);_.set(0,vt)}function Z(N){n.enableZoom&&ne(N),n.enablePan&&Bt(N)}function Re(N){n.enableZoom&&ne(N),n.enableRotate&&qt(N)}function H(N){if(I.length==1)g.set(N.pageX,N.pageY);else{const Nt=St(N),It=.5*(N.pageX+Nt.x),vt=.5*(N.pageY+Nt.y);g.set(It,vt)}x.subVectors(g,p).multiplyScalar(n.rotateSpeed);const _t=n.domElement;$(2*Math.PI*x.x/_t.clientHeight),ht(2*Math.PI*x.y/_t.clientHeight),p.copy(g)}function rt(N){if(I.length===1)S.set(N.pageX,N.pageY);else{const _t=St(N),Nt=.5*(N.pageX+_t.x),It=.5*(N.pageY+_t.y);S.set(Nt,It)}v.subVectors(S,M).multiplyScalar(n.panSpeed),Y(v.x,v.y),M.copy(S)}function ct(N){const _t=St(N),Nt=N.pageX-_t.x,It=N.pageY-_t.y,vt=Math.sqrt(Nt*Nt+It*It);T.set(0,vt),b.set(0,Math.pow(T.y/_.y,n.zoomSpeed)),lt(b.y),_.copy(T);const k=(N.pageX+_t.x)*.5,yt=(N.pageY+_t.y)*.5;at(k,yt)}function Gt(N){n.enableZoom&&ct(N),n.enablePan&&rt(N)}function Dt(N){n.enableZoom&&ct(N),n.enableRotate&&H(N)}function A(N){n.enabled!==!1&&(I.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",X)),Qt(N),N.pointerType==="touch"?Jt(N):pt(N))}function w(N){n.enabled!==!1&&(N.pointerType==="touch"?mt(N):dt(N))}function X(N){Vt(N),I.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",X)),n.dispatchEvent(Zd),a=r.NONE}function pt(N){let _t;switch(N.button){case 0:_t=n.mouseButtons.LEFT;break;case 1:_t=n.mouseButtons.MIDDLE;break;case 2:_t=n.mouseButtons.RIGHT;break;default:_t=-1}switch(_t){case Si.DOLLY:if(n.enableZoom===!1)return;Mt(N),a=r.DOLLY;break;case Si.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;J(N),a=r.PAN}else{if(n.enableRotate===!1)return;ot(N),a=r.ROTATE}break;case Si.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;ot(N),a=r.ROTATE}else{if(n.enablePan===!1)return;J(N),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(nc)}function dt(N){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;st(N);break;case r.DOLLY:if(n.enableZoom===!1)return;ut(N);break;case r.PAN:if(n.enablePan===!1)return;xt(N);break}}function gt(N){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(N.preventDefault(),n.dispatchEvent(nc),Pt(Ct(N)),n.dispatchEvent(Zd))}function Ct(N){const _t=N.deltaMode,Nt={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(_t){case 1:Nt.deltaY*=16;break;case 2:Nt.deltaY*=100;break}return N.ctrlKey&&!R&&(Nt.deltaY*=10),Nt}function Et(N){N.key==="Control"&&(R=!0,document.addEventListener("keyup",At,{passive:!0,capture:!0}))}function At(N){N.key==="Control"&&(R=!1,document.removeEventListener("keyup",At,{passive:!0,capture:!0}))}function Ot(N){n.enabled===!1||n.enablePan===!1||zt(N)}function Jt(N){switch(Tt(N),I.length){case 1:switch(n.touches.ONE){case Vs.ROTATE:if(n.enableRotate===!1)return;qt(N),a=r.TOUCH_ROTATE;break;case Vs.PAN:if(n.enablePan===!1)return;Bt(N),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Vs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(N),a=r.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(N),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(nc)}function mt(N){switch(Tt(N),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;H(N),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;rt(N),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Gt(N),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(N),n.update();break;default:a=r.NONE}}function de(N){n.enabled!==!1&&N.preventDefault()}function Qt(N){I.push(N.pointerId)}function Vt(N){delete it[N.pointerId];for(let _t=0;_t<I.length;_t++)if(I[_t]==N.pointerId){I.splice(_t,1);return}}function Tt(N){let _t=it[N.pointerId];_t===void 0&&(_t=new jt,it[N.pointerId]=_t),_t.set(N.pageX,N.pageY)}function St(N){const _t=N.pointerId===I[0]?I[1]:I[0];return it[_t]}n.domElement.addEventListener("contextmenu",de),n.domElement.addEventListener("pointerdown",A),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",gt,{passive:!1}),document.addEventListener("keydown",Et,{passive:!0,capture:!0}),this.update()}}function Kd(s,t){if(t===Sg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===_c||t===Af){let e=s.getIndex();if(e===null){const l=[],c=s.getAttribute("position");if(c!==void 0){for(let h=0;h<c.count;h++)l.push(h);s.setIndex(l),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,r=[];if(t===_c)for(let l=1;l<=n;l++)r.push(e.getX(0)),r.push(e.getX(l)),r.push(e.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(r.push(e.getX(l)),r.push(e.getX(l+1)),r.push(e.getX(l+2))):(r.push(e.getX(l+2)),r.push(e.getX(l+1)),r.push(e.getX(l)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class aS extends Ns{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new uS(e)}),this.register(function(e){return new yS(e)}),this.register(function(e){return new MS(e)}),this.register(function(e){return new SS(e)}),this.register(function(e){return new fS(e)}),this.register(function(e){return new pS(e)}),this.register(function(e){return new mS(e)}),this.register(function(e){return new gS(e)}),this.register(function(e){return new hS(e)}),this.register(function(e){return new _S(e)}),this.register(function(e){return new dS(e)}),this.register(function(e){return new xS(e)}),this.register(function(e){return new vS(e)}),this.register(function(e){return new lS(e)}),this.register(function(e){return new bS(e)}),this.register(function(e){return new ES(e)})}load(t,e,n,r){const a=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const d=ca.extractUrlBase(t);l=ca.resolveURL(d,this.path)}else l=ca.extractUrlBase(t);this.manager.itemStart(t);const c=function(d){r?r(d):console.error(d),a.manager.itemError(t),a.manager.itemEnd(t)},h=new Fo(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{a.parse(d,l,function(f){e(f),a.manager.itemEnd(t)},c)}catch(f){c(f)}},n,c)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,r){let a;const l={},c={},h=new TextDecoder;if(typeof t=="string")a=JSON.parse(t);else if(t instanceof ArrayBuffer)if(h.decode(new Uint8Array(t,0,4))===rp){try{l[pe.KHR_BINARY_GLTF]=new TS(t)}catch(p){r&&r(p);return}a=JSON.parse(l[pe.KHR_BINARY_GLTF].content)}else a=JSON.parse(h.decode(t));else a=t;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new FS(a,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const p=this.pluginCallbacks[f](d);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[p.name]=p,l[p.name]=!0}if(a.extensionsUsed)for(let f=0;f<a.extensionsUsed.length;++f){const p=a.extensionsUsed[f],g=a.extensionsRequired||[];switch(p){case pe.KHR_MATERIALS_UNLIT:l[p]=new cS;break;case pe.KHR_DRACO_MESH_COMPRESSION:l[p]=new wS(a,this.dracoLoader);break;case pe.KHR_TEXTURE_TRANSFORM:l[p]=new AS;break;case pe.KHR_MESH_QUANTIZATION:l[p]=new LS;break;default:g.indexOf(p)>=0&&c[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}d.setExtensions(l),d.setPlugins(c),d.parse(n,r)}parseAsync(t,e){const n=this;return new Promise(function(r,a){n.parse(t,e,r,a)})}}function oS(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const pe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lS{constructor(t){this.parser=t,this.name=pe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,r=e.length;n<r;n++){const a=e[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let r=e.cache.get(n);if(r)return r;const a=e.json,h=((a.extensions&&a.extensions[this.name]||{}).lights||[])[t];let d;const f=new Zt(16777215);h.color!==void 0&&f.setRGB(h.color[0],h.color[1],h.color[2],je);const p=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new sp(f),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new WM(f),d.distance=p;break;case"spot":d=new GM(f),d.distance=p,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),d.decay=2,Gi(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=e.createUniqueName(h.name||"light_"+t),r=Promise.resolve(d),e.cache.add(n,r),r}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,a=n.json.nodes[t],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(h){return n._getNodeRef(e.cache,c,h)})}}class cS{constructor(){this.name=pe.KHR_MATERIALS_UNLIT}getMaterialType(){return _s}extendParams(t,e,n){const r=[];t.color=new Zt(1,1,1),t.opacity=1;const a=e.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const l=a.baseColorFactor;t.color.setRGB(l[0],l[1],l[2],je),t.opacity=l[3]}a.baseColorTexture!==void 0&&r.push(n.assignTexture(t,"map",a.baseColorTexture,Le))}return Promise.all(r)}}class hS{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name].emissiveStrength;return a!==void 0&&(e.emissiveIntensity=a),Promise.resolve()}}class uS{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];if(l.clearcoatFactor!==void 0&&(e.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&a.push(n.assignTexture(e,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(e,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(e,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new jt(c,c)}return Promise.all(a)}}class dS{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];return l.iridescenceFactor!==void 0&&(e.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&a.push(n.assignTexture(e,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(e.iridescenceIOR=l.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(e,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(a)}}class fS{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[];e.sheenColor=new Zt(0,0,0),e.sheenRoughness=0,e.sheen=1;const l=r.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;e.sheenColor.setRGB(c[0],c[1],c[2],je)}return l.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&a.push(n.assignTexture(e,"sheenColorMap",l.sheenColorTexture,Le)),l.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(e,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(a)}}class pS{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];return l.transmissionFactor!==void 0&&(e.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&a.push(n.assignTexture(e,"transmissionMap",l.transmissionTexture)),Promise.all(a)}}class mS{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];e.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&a.push(n.assignTexture(e,"thicknessMap",l.thicknessTexture)),e.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return e.attenuationColor=new Zt().setRGB(c[0],c[1],c[2],je),Promise.all(a)}}class gS{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name];return e.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class _S{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];e.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&a.push(n.assignTexture(e,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return e.specularColor=new Zt().setRGB(c[0],c[1],c[2],je),l.specularColorTexture!==void 0&&a.push(n.assignTexture(e,"specularColorMap",l.specularColorTexture,Le)),Promise.all(a)}}class vS{constructor(t){this.parser=t,this.name=pe.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];return e.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&a.push(n.assignTexture(e,"bumpMap",l.bumpTexture)),Promise.all(a)}}class xS{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];return l.anisotropyStrength!==void 0&&(e.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(e.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&a.push(n.assignTexture(e,"anisotropyMap",l.anisotropyTexture)),Promise.all(a)}}class yS{constructor(t){this.parser=t,this.name=pe.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,r=n.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const a=r.extensions[this.name],l=e.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,a.source,l)}}class MS{constructor(t){this.parser=t,this.name=pe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,r=n.json,a=r.textures[t];if(!a.extensions||!a.extensions[e])return null;const l=a.extensions[e],c=r.images[l.source];let h=n.textureLoader;if(c.uri){const d=n.options.manager.getHandler(c.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(t,l.source,h);if(r.extensionsRequired&&r.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class SS{constructor(t){this.parser=t,this.name=pe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,r=n.json,a=r.textures[t];if(!a.extensions||!a.extensions[e])return null;const l=a.extensions[e],c=r.images[l.source];let h=n.textureLoader;if(c.uri){const d=n.options.manager.getHandler(c.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(t,l.source,h);if(r.extensionsRequired&&r.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class bS{constructor(t){this.name=pe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const h=r.byteOffset||0,d=r.byteLength||0,f=r.count,p=r.byteStride,g=new Uint8Array(c,h,d);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(f,p,g,r.mode,r.filter).then(function(x){return x.buffer}):l.ready.then(function(){const x=new ArrayBuffer(f*p);return l.decodeGltfBuffer(new Uint8Array(x),f,p,g,r.mode,r.filter),x})})}else return null}}class ES{constructor(t){this.name=pe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=e.meshes[n.mesh];for(const d of r.primitives)if(d.mode!==Nn.TRIANGLES&&d.mode!==Nn.TRIANGLE_STRIP&&d.mode!==Nn.TRIANGLE_FAN&&d.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],h={};for(const d in l)c.push(this.parser.getDependency("accessor",l[d]).then(f=>(h[d]=f,h[d])));return c.length<1?null:(c.push(this.parser.createNodeMesh(t)),Promise.all(c).then(d=>{const f=d.pop(),p=f.isGroup?f.children:[f],g=d[0].count,x=[];for(const M of p){const S=new oe,v=new O,_=new ai,T=new O(1,1,1),b=new sM(M.geometry,M.material,g);for(let P=0;P<g;P++)h.TRANSLATION&&v.fromBufferAttribute(h.TRANSLATION,P),h.ROTATION&&_.fromBufferAttribute(h.ROTATION,P),h.SCALE&&T.fromBufferAttribute(h.SCALE,P),b.setMatrixAt(P,S.compose(v,_,T));for(const P in h)if(P==="_COLOR_0"){const F=h[P];b.instanceColor=new Sc(F.array,F.itemSize,F.normalized)}else P!=="TRANSLATION"&&P!=="ROTATION"&&P!=="SCALE"&&M.geometry.setAttribute(P,h[P]);Ie.prototype.copy.call(b,M),this.parser.assignFinalMaterial(b),x.push(b)}return f.isGroup?(f.clear(),f.add(...x),f):x[0]}))}}const rp="glTF",ta=12,Yd={JSON:1313821514,BIN:5130562};class TS{constructor(t){this.name=pe.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ta,a=new DataView(t,ta);let l=0;for(;l<r;){const c=a.getUint32(l,!0);l+=4;const h=a.getUint32(l,!0);if(l+=4,h===Yd.JSON){const d=new Uint8Array(t,ta+l,c);this.content=n.decode(d)}else if(h===Yd.BIN){const d=ta+l;this.body=t.slice(d,d+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wS{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,r=this.dracoLoader,a=t.extensions[this.name].bufferView,l=t.extensions[this.name].attributes,c={},h={},d={};for(const f in l){const p=Rc[f]||f.toLowerCase();c[p]=l[f]}for(const f in t.attributes){const p=Rc[f]||f.toLowerCase();if(l[f]!==void 0){const g=n.accessors[t.attributes[f]],x=mr[g.componentType];d[p]=x.name,h[p]=g.normalized===!0}}return e.getDependency("bufferView",a).then(function(f){return new Promise(function(p,g){r.decodeDracoFile(f,function(x){for(const M in x.attributes){const S=x.attributes[M],v=h[M];v!==void 0&&(S.normalized=v)}p(x)},c,d,je,g)})})}}class AS{constructor(){this.name=pe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class LS{constructor(){this.name=pe.KHR_MESH_QUANTIZATION}}class ap extends Ma{constructor(t,e,n,r){super(t,e,n,r)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=t*r*3+r;for(let l=0;l!==r;l++)e[l]=n[a+l];return e}interpolate_(t,e,n,r){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=c*2,d=c*3,f=r-e,p=(n-e)/f,g=p*p,x=g*p,M=t*d,S=M-d,v=-2*x+3*g,_=x-g,T=1-v,b=_-g+p;for(let P=0;P!==c;P++){const F=l[S+P+c],U=l[S+P+h]*f,I=l[M+P+c],it=l[M+P]*f;a[P]=T*F+b*U+v*I+_*it}return a}}const RS=new ai;class PS extends ap{interpolate_(t,e,n,r){const a=super.interpolate_(t,e,n,r);return RS.fromArray(a).normalize().toArray(a),a}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$d={9728:Ye,9729:vn,9984:gc,9985:xf,9986:Ao,9987:As},Jd={33071:On,33648:Io,10497:vr},ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CS={CUBICSPLINE:void 0,LINEAR:yr,STEP:fa},sc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new th({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),s.DefaultMaterial}function us(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Gi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function DS(s,t,e){let n=!1,r=!1,a=!1;for(let d=0,f=t.length;d<f;d++){const p=t[d];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(r=!0),p.COLOR_0!==void 0&&(a=!0),n&&r&&a)break}if(!n&&!r&&!a)return Promise.resolve(s);const l=[],c=[],h=[];for(let d=0,f=t.length;d<f;d++){const p=t[d];if(n){const g=p.POSITION!==void 0?e.getDependency("accessor",p.POSITION):s.attributes.position;l.push(g)}if(r){const g=p.NORMAL!==void 0?e.getDependency("accessor",p.NORMAL):s.attributes.normal;c.push(g)}if(a){const g=p.COLOR_0!==void 0?e.getDependency("accessor",p.COLOR_0):s.attributes.color;h.push(g)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],p=d[1],g=d[2];return n&&(s.morphAttributes.position=f),r&&(s.morphAttributes.normal=p),a&&(s.morphAttributes.color=g),s.morphTargetsRelative=!0,s})}function NS(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,r=e.length;n<r;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function US(s){let t;const e=s.extensions&&s.extensions[pe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+rc(e.attributes):t=s.indices+":"+rc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,r=s.targets.length;n<r;n++)t+=":"+rc(s.targets[n]);return t}function rc(s){let t="";const e=Object.keys(s).sort();for(let n=0,r=e.length;n<r;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Pc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const BS=new oe;class FS{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new oS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&a<98?this.textureLoader=new kM(this.options.manager):this.textureLoader=new ZM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][r.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:r.asset,parser:n,userData:{}};return us(a,c,r),Gi(c,r),Promise.all(n._invokeAll(function(h){return h.afterRoot&&h.afterRoot(c)})).then(function(){t(c)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let r=0,a=e.length;r<a;r++){const l=e[r].joints;for(let c=0,h=l.length;c<h;c++)t[l[c]].isBone=!0}for(let r=0,a=t.length;r<a;r++){const l=t[r];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const r=n.clone(),a=(l,c)=>{const h=this.associations.get(l);h!=null&&this.associations.set(c,h);for(const[d,f]of l.children.entries())a(f,c.children[d])};return a(n,r),r.name+="_instance_"+t.uses[e]++,r}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const r=t(e[n]);if(r)return r}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let r=0;r<e.length;r++){const a=t(e[r]);a&&n.push(a)}return n}getDependency(t,e){const n=t+":"+e;let r=this.cache.get(n);if(!r){switch(t){case"scene":r=this.loadScene(e);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(e)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(e)});break;case"accessor":r=this.loadAccessor(e);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(e)});break;case"buffer":r=this.loadBuffer(e);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(e)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(e)});break;case"skin":r=this.loadSkin(e);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(e)});break;case"camera":r=this.loadCamera(e);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(t,e)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(n,r)}return r}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(r.map(function(a,l){return n.getDependency(t,l)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[pe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(a,l){n.load(ca.resolveURL(e.uri,r.path),a,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const r=e.byteLength||0,a=e.byteOffset||0;return n.slice(a,a+r)})}loadAccessor(t){const e=this,n=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const l=ic[r.type],c=mr[r.componentType],h=r.normalized===!0,d=new c(r.count*l);return Promise.resolve(new Ve(d,l,h))}const a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(l){const c=l[0],h=ic[r.type],d=mr[r.componentType],f=d.BYTES_PER_ELEMENT,p=f*h,g=r.byteOffset||0,x=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,M=r.normalized===!0;let S,v;if(x&&x!==p){const _=Math.floor(g/x),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let b=e.cache.get(T);b||(S=new d(c,_*x,r.count*x/f),b=new qf(S,x/f),e.cache.add(T,b)),v=new wi(b,h,g%x/f,M)}else c===null?S=new d(r.count*h):S=new d(c,g,r.count*h),v=new Ve(S,h,M);if(r.sparse!==void 0){const _=ic.SCALAR,T=mr[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,P=r.sparse.values.byteOffset||0,F=new T(l[1],b,r.sparse.count*_),U=new d(l[2],P,r.sparse.count*h);c!==null&&(v=new Ve(v.array.slice(),v.itemSize,v.normalized));for(let I=0,it=F.length;I<it;I++){const R=F[I];if(v.setX(R,U[I*h]),h>=2&&v.setY(R,U[I*h+1]),h>=3&&v.setZ(R,U[I*h+2]),h>=4&&v.setW(R,U[I*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(t){const e=this.json,n=this.options,a=e.textures[t].source,l=e.images[a];let c=this.textureLoader;if(l.uri){const h=n.manager.getHandler(l.uri);h!==null&&(c=h)}return this.loadTextureImage(t,a,c)}loadTextureImage(t,e,n){const r=this,a=this.json,l=a.textures[t],c=a.images[e],h=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(e,n).then(function(f){f.flipY=!1,f.name=l.name||c.name||"",f.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(f.name=c.uri);const g=(a.samplers||{})[l.sampler]||{};return f.magFilter=$d[g.magFilter]||vn,f.minFilter=$d[g.minFilter]||As,f.wrapS=Jd[g.wrapS]||vr,f.wrapT=Jd[g.wrapT]||vr,r.associations.set(f,{textures:t}),f}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(t,e){const n=this,r=this.json,a=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(p=>p.clone());const l=r.images[t],c=self.URL||self.webkitURL;let h=l.uri||"",d=!1;if(l.bufferView!==void 0)h=n.getDependency("bufferView",l.bufferView).then(function(p){d=!0;const g=new Blob([p],{type:l.mimeType});return h=c.createObjectURL(g),h});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const f=Promise.resolve(h).then(function(p){return new Promise(function(g,x){let M=g;e.isImageBitmapLoader===!0&&(M=function(S){const v=new rn(S);v.needsUpdate=!0,g(v)}),e.load(ca.resolveURL(p,a.path),M,void 0,x)})}).then(function(p){return d===!0&&c.revokeObjectURL(h),p.userData.mimeType=l.mimeType||OS(l.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),p});return this.sourceCache[t]=f,f}assignTexture(t,e,n,r){const a=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),a.extensions[pe.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[pe.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const h=a.associations.get(l);l=a.extensions[pe.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),a.associations.set(l,h)}}return r!==void 0&&(l.colorSpace=r),t[e]=l,l})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const r=e.attributes.tangent===void 0,a=e.attributes.color!==void 0,l=e.attributes.normal===void 0;if(t.isPoints){const c="PointsMaterial:"+n.uuid;let h=this.cache.get(c);h||(h=new $f,Kn.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(c,h)),n=h}else if(t.isLine){const c="LineBasicMaterial:"+n.uuid;let h=this.cache.get(c);h||(h=new $c,Kn.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,this.cache.add(c,h)),n=h}if(r||a||l){let c="ClonedMaterial:"+n.uuid+":";r&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let h=this.cache.get(c);h||(h=n.clone(),a&&(h.vertexColors=!0),l&&(h.flatShading=!0),r&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(c,h),this.associations.set(h,this.associations.get(n))),n=h}t.material=n}getMaterialType(){return th}loadMaterial(t){const e=this,n=this.json,r=this.extensions,a=n.materials[t];let l;const c={},h=a.extensions||{},d=[];if(h[pe.KHR_MATERIALS_UNLIT]){const p=r[pe.KHR_MATERIALS_UNLIT];l=p.getMaterialType(),d.push(p.extendParams(c,a,e))}else{const p=a.pbrMetallicRoughness||{};if(c.color=new Zt(1,1,1),c.opacity=1,Array.isArray(p.baseColorFactor)){const g=p.baseColorFactor;c.color.setRGB(g[0],g[1],g[2],je),c.opacity=g[3]}p.baseColorTexture!==void 0&&d.push(e.assignTexture(c,"map",p.baseColorTexture,Le)),c.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,c.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(d.push(e.assignTexture(c,"metalnessMap",p.metallicRoughnessTexture)),d.push(e.assignTexture(c,"roughnessMap",p.metallicRoughnessTexture))),l=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(t)}),d.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(t,c)})))}a.doubleSided===!0&&(c.side=ni);const f=a.alphaMode||sc.OPAQUE;if(f===sc.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,f===sc.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&l!==_s&&(d.push(e.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new jt(1,1),a.normalTexture.scale!==void 0)){const p=a.normalTexture.scale;c.normalScale.set(p,p)}if(a.occlusionTexture!==void 0&&l!==_s&&(d.push(e.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&l!==_s){const p=a.emissiveFactor;c.emissive=new Zt().setRGB(p[0],p[1],p[2],je)}return a.emissiveTexture!==void 0&&l!==_s&&d.push(e.assignTexture(c,"emissiveMap",a.emissiveTexture,Le)),Promise.all(d).then(function(){const p=new l(c);return a.name&&(p.name=a.name),Gi(p,a),e.associations.set(p,{materials:t}),a.extensions&&us(r,p,a),p})}createUniqueName(t){const e=Me.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,r=this.primitiveCache;function a(c){return n[pe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,e).then(function(h){return Qd(h,c,e)})}const l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c],f=US(d),p=r[f];if(p)l.push(p.promise);else{let g;d.extensions&&d.extensions[pe.KHR_DRACO_MESH_COMPRESSION]?g=a(d):g=Qd(new mn,d,e),r[f]={primitive:d,promise:g},l.push(g)}}return Promise.all(l)}loadMesh(t){const e=this,n=this.json,r=this.extensions,a=n.meshes[t],l=a.primitives,c=[];for(let h=0,d=l.length;h<d;h++){const f=l[h].material===void 0?IS(this.cache):this.getDependency("material",l[h].material);c.push(f)}return c.push(e.loadGeometries(l)),Promise.all(c).then(function(h){const d=h.slice(0,h.length-1),f=h[h.length-1],p=[];for(let x=0,M=f.length;x<M;x++){const S=f[x],v=l[x];let _;const T=d[x];if(v.mode===Nn.TRIANGLES||v.mode===Nn.TRIANGLE_STRIP||v.mode===Nn.TRIANGLE_FAN||v.mode===void 0)_=a.isSkinnedMesh===!0?new tM(S,T):new Mn(S,T),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),v.mode===Nn.TRIANGLE_STRIP?_.geometry=Kd(_.geometry,Af):v.mode===Nn.TRIANGLE_FAN&&(_.geometry=Kd(_.geometry,_c));else if(v.mode===Nn.LINES)_=new Yf(S,T);else if(v.mode===Nn.LINE_STRIP)_=new Jc(S,T);else if(v.mode===Nn.LINE_LOOP)_=new rM(S,T);else if(v.mode===Nn.POINTS)_=new aM(S,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(_.geometry.morphAttributes).length>0&&NS(_,a),_.name=e.createUniqueName(a.name||"mesh_"+t),Gi(_,a),v.extensions&&us(r,_,v),e.assignFinalMaterial(_),p.push(_)}for(let x=0,M=p.length;x<M;x++)e.associations.set(p[x],{meshes:t,primitives:x});if(p.length===1)return a.extensions&&us(r,p[0],a),p[0];const g=new vs;a.extensions&&us(r,g,a),e.associations.set(g,{meshes:t});for(let x=0,M=p.length;x<M;x++)g.add(p[x]);return g})}loadCamera(t){let e;const n=this.json.cameras[t],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new pn(wr.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(e=new qc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Gi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let r=0,a=e.joints.length;r<a;r++)n.push(this._loadNodeShallow(e.joints[r]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const a=r.pop(),l=r,c=[],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];if(p){c.push(p);const g=new oe;a!==null&&g.fromArray(a.array,d*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[d])}return new Yc(c,h)})}loadAnimation(t){const e=this.json,n=this,r=e.animations[t],a=r.name?r.name:"animation_"+t,l=[],c=[],h=[],d=[],f=[];for(let p=0,g=r.channels.length;p<g;p++){const x=r.channels[p],M=r.samplers[x.sampler],S=x.target,v=S.node,_=r.parameters!==void 0?r.parameters[M.input]:M.input,T=r.parameters!==void 0?r.parameters[M.output]:M.output;S.node!==void 0&&(l.push(this.getDependency("node",v)),c.push(this.getDependency("accessor",_)),h.push(this.getDependency("accessor",T)),d.push(M),f.push(S))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(h),Promise.all(d),Promise.all(f)]).then(function(p){const g=p[0],x=p[1],M=p[2],S=p[3],v=p[4],_=[];for(let T=0,b=g.length;T<b;T++){const P=g[T],F=x[T],U=M[T],I=S[T],it=v[T];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const R=n._createAnimationTracks(P,F,U,I,it);if(R)for(let D=0;D<R.length;D++)_.push(R[D])}return new IM(a,void 0,_)})}createNodeMesh(t){const e=this.json,n=this,r=e.nodes[t];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(a){const l=n._getNodeRef(n.meshCache,r.mesh,a);return r.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let h=0,d=r.weights.length;h<d;h++)c.morphTargetInfluences[h]=r.weights[h]}),l})}loadNode(t){const e=this.json,n=this,r=e.nodes[t],a=n._loadNodeShallow(t),l=[],c=r.children||[];for(let d=0,f=c.length;d<f;d++)l.push(n.getDependency("node",c[d]));const h=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([a,Promise.all(l),h]).then(function(d){const f=d[0],p=d[1],g=d[2];g!==null&&f.traverse(function(x){x.isSkinnedMesh&&x.bind(g,BS)});for(let x=0,M=p.length;x<M;x++)f.add(p[x]);return f})}_loadNodeShallow(t){const e=this.json,n=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const a=e.nodes[t],l=a.name?r.createUniqueName(a.name):"",c=[],h=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(t)});return h&&c.push(h),a.camera!==void 0&&c.push(r.getDependency("camera",a.camera).then(function(d){return r._getNodeRef(r.cameraCache,a.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(t)}).forEach(function(d){c.push(d)}),this.nodeCache[t]=Promise.all(c).then(function(d){let f;if(a.isBone===!0?f=new Kf:d.length>1?f=new vs:d.length===1?f=d[0]:f=new Ie,f!==d[0])for(let p=0,g=d.length;p<g;p++)f.add(d[p]);if(a.name&&(f.userData.name=a.name,f.name=l),Gi(f,a),a.extensions&&us(n,f,a),a.matrix!==void 0){const p=new oe;p.fromArray(a.matrix),f.applyMatrix4(p)}else a.translation!==void 0&&f.position.fromArray(a.translation),a.rotation!==void 0&&f.quaternion.fromArray(a.rotation),a.scale!==void 0&&f.scale.fromArray(a.scale);return r.associations.has(f)||r.associations.set(f,{}),r.associations.get(f).nodes=t,f}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],r=this,a=new vs;n.name&&(a.name=r.createUniqueName(n.name)),Gi(a,n),n.extensions&&us(e,a,n);const l=n.nodes||[],c=[];for(let h=0,d=l.length;h<d;h++)c.push(r.getDependency("node",l[h]));return Promise.all(c).then(function(h){for(let f=0,p=h.length;f<p;f++)a.add(h[f]);const d=f=>{const p=new Map;for(const[g,x]of r.associations)(g instanceof Kn||g instanceof rn)&&p.set(g,x);return f.traverse(g=>{const x=r.associations.get(g);x!=null&&p.set(g,x)}),p};return r.associations=d(a),a})}_createAnimationTracks(t,e,n,r,a){const l=[],c=t.name?t.name:t.uuid,h=[];Bi[a.path]===Bi.weights?t.traverse(function(g){g.morphTargetInfluences&&h.push(g.name?g.name:g.uuid)}):h.push(c);let d;switch(Bi[a.path]){case Bi.weights:d=br;break;case Bi.rotation:d=Ps;break;case Bi.position:case Bi.scale:d=Er;break;default:switch(n.itemSize){case 1:d=br;break;case 2:case 3:default:d=Er;break}break}const f=r.interpolation!==void 0?CS[r.interpolation]:yr,p=this._getArrayFromAccessor(n);for(let g=0,x=h.length;g<x;g++){const M=new d(h[g]+"."+Bi[a.path],e.array,p,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),l.push(M)}return l}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Pc(e.constructor),r=new Float32Array(e.length);for(let a=0,l=e.length;a<l;a++)r[a]=e[a]*n;e=r}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const r=this instanceof Ps?PS:ap;return new r(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kS(s,t,e){const n=t.attributes,r=new Oe;if(n.POSITION!==void 0){const c=e.json.accessors[n.POSITION],h=c.min,d=c.max;if(h!==void 0&&d!==void 0){if(r.set(new O(h[0],h[1],h[2]),new O(d[0],d[1],d[2])),c.normalized){const f=Pc(mr[c.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=t.targets;if(a!==void 0){const c=new O,h=new O;for(let d=0,f=a.length;d<f;d++){const p=a[d];if(p.POSITION!==void 0){const g=e.json.accessors[p.POSITION],x=g.min,M=g.max;if(x!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),g.normalized){const S=Pc(mr[g.componentType]);h.multiplyScalar(S)}c.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}s.boundingBox=r;const l=new Hn;r.getCenter(l.center),l.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=l}function Qd(s,t,e){const n=t.attributes,r=[];function a(l,c){return e.getDependency("accessor",l).then(function(h){s.setAttribute(c,h)})}for(const l in n){const c=Rc[l]||l.toLowerCase();c in s.attributes||r.push(a(n[l],c))}if(t.indices!==void 0&&!s.index){const l=e.getDependency("accessor",t.indices).then(function(c){s.setIndex(c)});r.push(l)}return ve.workingColorSpace!==je&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ve.workingColorSpace}" not supported.`),Gi(s,t),kS(s,t,e),Promise.all(r).then(function(){return t.targets!==void 0?DS(s,t.targets,e):s})}const ac=new WeakMap;class zS extends Ns{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,r){const a=new Fo(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,l=>{this.parse(l,e,r)},n,r)}parse(t,e,n=()=>{}){this.decodeDracoFile(t,e,null,null,Le).catch(n)}decodeDracoFile(t,e,n,r,a=je,l=()=>{}){const c={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:a};return this.decodeGeometry(t,c).then(e).catch(l)}decodeGeometry(t,e){const n=JSON.stringify(e);if(ac.has(t)){const h=ac.get(t);if(h.key===n)return h.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const a=this.workerNextTaskID++,l=t.byteLength,c=this._getWorker(a,l).then(h=>(r=h,new Promise((d,f)=>{r._callbacks[a]={resolve:d,reject:f},r.postMessage({type:"decode",id:a,taskConfig:e,buffer:t},[t])}))).then(h=>this._createGeometry(h.geometry));return c.catch(()=>!0).then(()=>{r&&a&&this._releaseTask(r,a)}),ac.set(t,{key:n,promise:c}),c}_createGeometry(t){const e=new mn;t.index&&e.setIndex(new Ve(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const r=t.attributes[n],a=r.name,l=r.array,c=r.itemSize,h=new Ve(l,c);a==="color"&&(this._assignVertexColorSpace(h,r.vertexColorSpace),h.normalized=!(l instanceof Float32Array)),e.setAttribute(a,h)}return e}_assignVertexColorSpace(t,e){if(e!==Le)return;const n=new Zt;for(let r=0,a=t.count;r<a;r++)n.fromBufferAttribute(t,r).convertSRGBToLinear(),t.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(t,e){const n=new Fo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise((r,a)=>{n.load(t,r,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(n=>{const r=n[0];t||(this.decoderConfig.wasmBinary=n[1]);const a=HS.toString(),l=["/* draco decoder */",r,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(a){const l=a.data;switch(l.type){case"decode":r._callbacks[l.id].resolve(l);break;case"error":r._callbacks[l.id].reject(l);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+l.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,a){return r._taskLoad>a._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function HS(){let s,t;onmessage=function(l){const c=l.data;switch(c.type){case"init":s=c.decoderConfig,t=new Promise(function(f){s.onModuleLoaded=function(p){f({draco:p})},DracoDecoderModule(s)});break;case"decode":const h=c.buffer,d=c.taskConfig;t.then(f=>{const p=f.draco,g=new p.Decoder;try{const x=e(p,g,new Int8Array(h),d),M=x.attributes.map(S=>S.array.buffer);x.index&&M.push(x.index.array.buffer),self.postMessage({type:"decode",id:c.id,geometry:x},M)}catch(x){console.error(x),self.postMessage({type:"error",id:c.id,error:x.message})}finally{p.destroy(g)}});break}};function e(l,c,h,d){const f=d.attributeIDs,p=d.attributeTypes;let g,x;const M=c.GetEncodedGeometryType(h);if(M===l.TRIANGULAR_MESH)g=new l.Mesh,x=c.DecodeArrayToMesh(h,h.byteLength,g);else if(M===l.POINT_CLOUD)g=new l.PointCloud,x=c.DecodeArrayToPointCloud(h,h.byteLength,g);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!x.ok()||g.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+x.error_msg());const S={index:null,attributes:[]};for(const v in f){const _=self[p[v]];let T,b;if(d.useUniqueIDs)b=f[v],T=c.GetAttributeByUniqueId(g,b);else{if(b=c.GetAttributeId(g,l[f[v]]),b===-1)continue;T=c.GetAttribute(g,b)}const P=r(l,c,g,v,_,T);v==="color"&&(P.vertexColorSpace=d.vertexColorSpace),S.attributes.push(P)}return M===l.TRIANGULAR_MESH&&(S.index=n(l,c,g)),l.destroy(g),S}function n(l,c,h){const f=h.num_faces()*3,p=f*4,g=l._malloc(p);c.GetTrianglesUInt32Array(h,p,g);const x=new Uint32Array(l.HEAPF32.buffer,g,f).slice();return l._free(g),{array:x,itemSize:1}}function r(l,c,h,d,f,p){const g=p.num_components(),M=h.num_points()*g,S=M*f.BYTES_PER_ELEMENT,v=a(l,f),_=l._malloc(S);c.GetAttributeDataArrayForAllPoints(h,p,v,S,_);const T=new f(l.HEAPF32.buffer,_,M).slice();return l._free(_),{name:d,array:T,itemSize:g}}function a(l,c){switch(c){case Float32Array:return l.DT_FLOAT32;case Int8Array:return l.DT_INT8;case Int16Array:return l.DT_INT16;case Int32Array:return l.DT_INT32;case Uint8Array:return l.DT_UINT8;case Uint16Array:return l.DT_UINT16;case Uint32Array:return l.DT_UINT32}}}const tf=new Oe,Mo=new O;class op extends XM{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Tn(t,3)),this.setAttribute("uv",new Tn(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new wc(e,6,1);return this.setAttribute("instanceStart",new wi(n,3,0)),this.setAttribute("instanceEnd",new wi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new wc(e,6,1);return this.setAttribute("instanceColorStart",new wi(n,3,0)),this.setAttribute("instanceColorEnd",new wi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new EM(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),tf.setFromBufferAttribute(e),this.boundingBox.union(tf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let a=0,l=t.count;a<l;a++)Mo.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(Mo)),Mo.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Mo));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}bt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new jt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};xn.line={uniforms:jc.merge([bt.common,bt.fog,bt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class lp extends $i{constructor(t){super({type:"LineMaterial",uniforms:jc.clone(xn.line.uniforms),vertexShader:xn.line.vertexShader,fragmentShader:xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const ef=new O,nf=new O,en=new _e,nn=new _e,ti=new _e,oc=new O,lc=new oe,sn=new iS,sf=new O,So=new Oe,bo=new Hn,ei=new _e;let si,Ts;function rf(s,t,e){return ei.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),ei.multiplyScalar(1/ei.w),ei.x=Ts/e.width,ei.y=Ts/e.height,ei.applyMatrix4(s.projectionMatrixInverse),ei.multiplyScalar(1/ei.w),Math.abs(Math.max(ei.x,ei.y))}function GS(s,t){const e=s.matrixWorld,n=s.geometry,r=n.attributes.instanceStart,a=n.attributes.instanceEnd,l=Math.min(n.instanceCount,r.count);for(let c=0,h=l;c<h;c++){sn.start.fromBufferAttribute(r,c),sn.end.fromBufferAttribute(a,c),sn.applyMatrix4(e);const d=new O,f=new O;si.distanceSqToSegment(sn.start,sn.end,f,d),f.distanceTo(d)<Ts*.5&&t.push({point:f,pointOnLine:d,distance:si.origin.distanceTo(f),object:s,face:null,faceIndex:c,uv:null,uv1:null})}}function VS(s,t,e){const n=t.projectionMatrix,a=s.material.resolution,l=s.matrixWorld,c=s.geometry,h=c.attributes.instanceStart,d=c.attributes.instanceEnd,f=Math.min(c.instanceCount,h.count),p=-t.near;si.at(1,ti),ti.w=1,ti.applyMatrix4(t.matrixWorldInverse),ti.applyMatrix4(n),ti.multiplyScalar(1/ti.w),ti.x*=a.x/2,ti.y*=a.y/2,ti.z=0,oc.copy(ti),lc.multiplyMatrices(t.matrixWorldInverse,l);for(let g=0,x=f;g<x;g++){if(en.fromBufferAttribute(h,g),nn.fromBufferAttribute(d,g),en.w=1,nn.w=1,en.applyMatrix4(lc),nn.applyMatrix4(lc),en.z>p&&nn.z>p)continue;if(en.z>p){const b=en.z-nn.z,P=(en.z-p)/b;en.lerp(nn,P)}else if(nn.z>p){const b=nn.z-en.z,P=(nn.z-p)/b;nn.lerp(en,P)}en.applyMatrix4(n),nn.applyMatrix4(n),en.multiplyScalar(1/en.w),nn.multiplyScalar(1/nn.w),en.x*=a.x/2,en.y*=a.y/2,nn.x*=a.x/2,nn.y*=a.y/2,sn.start.copy(en),sn.start.z=0,sn.end.copy(nn),sn.end.z=0;const S=sn.closestPointToPointParameter(oc,!0);sn.at(S,sf);const v=wr.lerp(en.z,nn.z,S),_=v>=-1&&v<=1,T=oc.distanceTo(sf)<Ts*.5;if(_&&T){sn.start.fromBufferAttribute(h,g),sn.end.fromBufferAttribute(d,g),sn.start.applyMatrix4(l),sn.end.applyMatrix4(l);const b=new O,P=new O;si.distanceSqToSegment(sn.start,sn.end,P,b),e.push({point:P,pointOnLine:b,distance:si.origin.distanceTo(P),object:s,face:null,faceIndex:g,uv:null,uv1:null})}}}class WS extends Mn{constructor(t=new op,e=new lp({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let l=0,c=0,h=e.count;l<h;l++,c+=2)ef.fromBufferAttribute(e,l),nf.fromBufferAttribute(n,l),r[c]=c===0?0:r[c-1],r[c+1]=r[c]+ef.distanceTo(nf);const a=new wc(r,2,1);return t.setAttribute("instanceDistanceStart",new wi(a,1,0)),t.setAttribute("instanceDistanceEnd",new wi(a,1,1)),this}raycast(t,e){const n=this.material.worldUnits,r=t.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=t.params.Line2!==void 0&&t.params.Line2.threshold||0;si=t.ray;const l=this.matrixWorld,c=this.geometry,h=this.material;Ts=h.linewidth+a,c.boundingSphere===null&&c.computeBoundingSphere(),bo.copy(c.boundingSphere).applyMatrix4(l);let d;if(n)d=Ts*.5;else{const p=Math.max(r.near,bo.distanceToPoint(si.origin));d=rf(r,p,h.resolution)}if(bo.radius+=d,si.intersectsSphere(bo)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),So.copy(c.boundingBox).applyMatrix4(l);let f;if(n)f=Ts*.5;else{const p=Math.max(r.near,So.distanceToPoint(si.origin));f=rf(r,p,h.resolution)}So.expandByScalar(f),si.intersectsBox(So)!==!1&&(n?GS(this,e):VS(this,r,e))}}const cp=3,jS=1.8,Vi={uTime:{value:0},uOn:{value:1},uZ0:{value:0},uZ1:{value:1}},hp=new jt(innerWidth,innerHeight),ha={1:7,2:5,3:3},Cc={1:{value:ha[1]},2:{value:ha[2]},3:{value:ha[3]}};let gs=!0;try{gs=localStorage.getItem("blood2")!=="0"}catch{}let af=0,of=null;const XS=`varying float vWz;
uniform float uTime, uOn, uZ0, uZ1;
`,ZS=`
  {
    float v = clamp((vWz - uZ0) / max(uZ1 - uZ0, 0.000001), 0.0, 1.0);     // 0 = top (north), 1 = bottom (south)
    float s = mod(uTime, ${cp.toFixed(1)});
    float f = s / ${jS.toFixed(1)} * 1.35 - 0.05;                        // front of the pulse, starts above the map
    float lead = 1.0 - smoothstep(f - 0.05, f, v);                           // nothing below the front yet
    float trail = exp(-max(f - v, 0.0) / 0.22);                              // fades behind the front
    float blood = lead * trail;
    vec3 red = mix(vec3(0.60, 0.0, 0.03), vec3(1.0, 0.12, 0.10), blood);
    red += vec3(0.5, 0.2, 0.1) * pow(blood, 6.0);                            // glossy hot head of the pulse
    diffuseColor.rgb = red;
    alpha *= clamp(blood * 1.4, 0.0, 1.0) * uOn;                             // invisible between pumps
  }
`;function qS(s){s.onBeforeCompile=t=>{if(!/diffuseColor/.test(t.fragmentShader)||!/gl_FragColor\s*=\s*vec4\(\s*diffuseColor\.rgb\s*,\s*alpha\s*\)\s*;/.test(t.fragmentShader)){s.visible=!1;return}Object.assign(t.uniforms,Vi),t.vertexShader=t.vertexShader.replace(/void\s+main\s*\(\s*\)\s*\{/,`varying float vWz;
void main() {
  vWz = (modelMatrix * vec4(position.y < 0.5 ? instanceStart : instanceEnd, 1.0)).z;`),t.fragmentShader=t.fragmentShader.replace(/void\s+main\s*\(\s*\)\s*\{/,XS+"void main() {").replace(/gl_FragColor\s*=\s*vec4\(\s*diffuseColor\.rgb\s*,\s*alpha\s*\)\s*;/,ZS+"  gl_FragColor = vec4( diffuseColor.rgb, alpha );")},s.customProgramCacheKey=()=>"bloodpump"}function KS(s,t){const e=new Jf(s,25),n=e.attributes.position.array;s.computeBoundingBox();const r=s.boundingBox,a=r.max.y-(r.max.y-r.min.y)*.2,l=[];for(let f=0;f+5<n.length;f+=6)if(n[f+1]>=a&&n[f+4]>=a)for(let p=0;p<6;p++)l.push(n[f+p]);const c=new op;c.setPositions(l.length?l:Array.from(n)),e.dispose();const h=new lp({color:12849180,linewidth:ha[t]||3.5,transparent:!0,opacity:1,depthWrite:!1,worldUnits:!1});h.uniforms.resolution.value=hp,h.uniforms.linewidth=Cc[t]||Cc[3],h.polygonOffset=!0,h.polygonOffsetFactor=-4,h.polygonOffsetUnits=-4,qS(h);const d=new WS(c,h);return d.frustumCulled=!1,d.renderOrder=5,d}function YS(s,t){const e=t===1?.35:.85,n=new Yf(new Jf(s,25),new $c({color:16056311,transparent:!0,opacity:e}));n.userData.baseOpacity=e;try{const r=KS(s,t);n.add(r);let a=e;Object.defineProperty(n.material,"opacity",{configurable:!0,get:()=>a,set:l=>{a=l,r.material.opacity=Math.min(1,l/e)}})}catch(r){console.error("Blood line failed:",r);const a=document.getElementById("msg");a&&!window.__bloodErr&&(window.__bloodErr=1,a.textContent="Blood effect error: "+r.message,a.style.display="block")}return n}const $S=()=>{};(function(){const t=document.createElement("style");t.textContent=`#bloodtoggle{position:fixed;top:14px;right:178px;z-index:20;border-radius:999px;padding:7px 14px;cursor:pointer;
    font:600 13px system-ui,sans-serif;color:#fff;background:rgba(10,30,22,.78);border:1px solid rgba(255,255,255,.25);backdrop-filter:blur(6px)}
    #bloodtoggle.on{background:#b3121f;border-color:#ff6b73}`,document.head.appendChild(t);const e=document.createElement("button");e.id="bloodtoggle";const n=()=>{e.textContent="❤ Blood "+(gs?"ON":"OFF"),e.classList.toggle("on",gs)};e.onclick=()=>{gs=!gs,n();try{localStorage.setItem("blood2",gs?"1":"0")}catch{}},n(),document.body.appendChild(e)})();function JS(s){const t=new Oe;s.forEach(e=>t.expandByObject(e)),!t.isEmpty()&&(Vi.uZ0.value=t.min.z,Vi.uZ1.value=t.max.z)}function QS(s,t,e){const n=Math.min(.1,s-af);af=s,hp.set(innerWidth,innerHeight),Vi.uTime.value=s,e&&e.length&&e!==of&&(of=e,JS(e)),Vi.uOn.value+=((gs?1:0)-Vi.uOn.value)*Math.min(1,n*5);const r=s%cp,a=Math.exp(-Math.pow(r/.15,2))+.6*Math.exp(-Math.pow((r-.3)/.1,2)),l=(.45+.55*Vi.uOn.value)*(1+.3*a*Vi.uOn.value);for(const c of[1,2,3])Cc[c].value=ha[c]*l}const tb=[.../^(localhost|127\.|192\.168\.|10\.)/.test(location.hostname)?[]:["/api/overpass"],"https://overpass.kumi.systems/api/interpreter","https://maps.mail.ru/osm/tools/overpass/api/interpreter","https://overpass.private.coffee/api/interpreter","https://overpass-api.de/api/interpreter"];function up(){return new Promise((s,t)=>{const e=indexedDB.open("vland-buildings",1);e.onupgradeneeded=()=>e.result.createObjectStore("areas"),e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error)})}async function eb(s){try{const t=await up();return await new Promise(e=>{const n=t.transaction("areas").objectStore("areas").get(s);n.onsuccess=()=>e(n.result||null),n.onerror=()=>e(null)})}catch{return null}}async function nb(s,t){try{(await up()).transaction("areas","readwrite").objectStore("areas").put(t,s)}catch{}}async function ib(s,t){let e;for(let n=0;n<2;n++){for(const r of tb)try{const a=new AbortController,l=setTimeout(()=>a.abort(),25e3),c=await fetch(r,{method:"POST",body:"data="+encodeURIComponent(s),headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:a.signal});if(clearTimeout(l),!c.ok)throw new Error("HTTP "+c.status);return await c.json()}catch(a){e=a}await new Promise(r=>setTimeout(r,3e3*(n+1)))}throw e||new Error("Overpass failed")}function Ic(s){let t=(Number(s)||1)*2654435761%4294967296;return t^=t>>>13,t=Math.imul(t,1274126177)>>>0,t/4294967295}function dp(s,t){s=s||{};const e=parseFloat(String(s.height||"").replace(",","."));if(e>0)return Math.max(3,e);const n=parseFloat(s["building:levels"]);if(n>0)return Math.max(3,n*3.2);const r=Ic(t);return 4+14*r*r}function sb(s){const t=[];for(const e of s.elements||[]){if(e.type!=="way"||!e.geometry||e.geometry.length<4)continue;const n=[];let r=0,a=0;for(const h of e.geometry)n.push(+h.lat.toFixed(6),+h.lon.toFixed(6)),r+=h.lat,a+=h.lon;const l=e.geometry.length,c=e.tags||{};t.push({i:e.id,h:dp(c,e.id),g:n,c:[r/l,a/l],n:c.name||c["addr:housename"]||""})}return t}const rb="https://aginpbyaazzrcyoyhvsk.supabase.co/storage/v1/object/public/tiles/t/";async function ab(s){try{const t=await fetch(rb+s+".json.gz");if(!t.ok)throw new Error(t.status);return await new Response(t.body.pipeThrough(new DecompressionStream("gzip"))).json()}catch{try{const e=await fetch("/buildings/t/"+s+".json");return e.ok?await e.json():[]}catch{return[]}}}let ea;async function ob(s){try{if(ea===void 0){const d=await fetch("/buildings/index.json"),f=d.ok?await d.json():null;ea=f&&f.tiles?{step:f.step,set:new Set(f.tiles)}:null}if(!ea)return null;const t=Math.round(1/ea.step),e=Math.floor(s.s*t),n=Math.floor(s.n*t),r=Math.floor(s.w*t),a=Math.floor(s.e*t),l=[];for(let d=e;d<=n;d++)for(let f=r;f<=a;f++){const p=d+"_"+f;ea.set.has(p)&&l.push(ab(p))}let c=[];for(const d of await Promise.all(l))for(const[f,p,g,x]of d){const M=x.length/2-1;let S=0,v=0;for(let T=0;T<M*2;T+=2)S+=x[T],v+=x[T+1];const _=[S/M,v/M];_[0]<s.s||_[0]>s.n||_[1]<s.w||_[1]>s.e||c.push({i:f,h:p>0?Math.max(3,p):dp({},f),g:x,c:_,n:g})}const h=25e3;if(c.length>h){const d=c.length/h;c=Array.from({length:h},(f,p)=>c[Math.floor(p*d)])}return c}catch(t){return console.warn("tile buildings unavailable",t),null}}let na;async function lb(s,t,e){try{if(na===void 0){const h=await fetch("/buildings/est.json");na=h.ok?await h.json():null}if(!na)return null;const n=na.step,r=na.cells,a=[];for(let h=0;h<r.length;h+=3){const d=(r[h]+.5)*n,f=(r[h+1]+.5)*n;d<s.s||d>s.n||f<s.w||f>s.e||a.push({c:[d,f],n:r[h+2]})}const c=(t?await fp(a,t,e):a).reduce((h,d)=>h+d.n,0);return c>=1e3?Math.round(c/100)*100:c}catch{return null}}async function cb(s,t,e){const n=await ob(s);if(n)return console.log("STATIC buildings",n.length),n;const r="v2|"+t+"|"+[s.s,s.w,s.n,s.e].map(v=>v.toFixed(3)).join(","),a=await eb(r);if(a&&a.fps)return a.fps;const l=.012,c=64,h=Math.min(8,Math.max(1,Math.ceil((s.n-s.s)/l))),d=Math.min(8,Math.max(1,Math.ceil((s.e-s.w)/l))),f=(s.n-s.s)/h,p=(s.e-s.w)/d,g=new Map;let x=0;const M=Math.min(h*d,c);for(let v=0;v<h;v++)for(let _=0;_<d&&!(x>=c);_++){const T=s.s+v*f,b=T+f,P=s.w+_*p,F=P+p,U='[out:json][timeout:60];(way["building"]('+[T,P,b,F].map(I=>I.toFixed(5)).join(",")+"););out geom;";e&&e("Loading buildings… tile "+(x+1)+"/"+M);try{for(const I of sb(await ib(U,null)))g.set(I.i,I)}catch(I){console.warn("tile failed",v,_,I)}x++}const S=[...g.values()];return S.length&&nb(r,{fps:S,t:Date.now()}),S}async function fp(s,t,e){e.updateWorldMatrix(!0,!0);const n=new Oe().setFromObject(e),r=new sh,a=new O(0,-1,0),l=new O,c=[];let h=performance.now();for(const d of s){const f=t(d.c[0],d.c[1]);f.x>=n.min.x&&f.x<=n.max.x&&f.z>=n.min.z&&f.z<=n.max.z&&(l.set(f.x,n.max.y+1,f.z),r.set(l,a),r.intersectObject(e,!1).length&&c.push(d)),performance.now()-h>12&&(await new Promise(p=>setTimeout(p,0)),h=performance.now())}return c}const hb=["#d9c9a8","#c98b6b","#bfb8ad","#e6d5a0","#a9bfc4","#cfa38a","#9aa585"],ub=["#7a7d80","#8a4b38","#5e6a73","#a8a49c","#6b5a4a"],db=new Zt("#ffd54a");function fb(s,{geo2xz:t,origin:e,upm:n,exag:r=2}){const a=[],l=[],c=[];let h=0;const d=hb.map(M=>new Zt(M)),f=ub.map(M=>new Zt(M));for(const M of s){const S=M.g.slice();S.length>4&&S[0]===S[S.length-2]&&S[1]===S[S.length-1]&&(S.length-=2);const v=[];for(let G=0;G<S.length;G+=2){const $=t(S[G],S[G+1]);v.push(new jt($.x-e.x,$.z-e.z))}if(v.length<3)continue;let _=0;for(let G=0;G<v.length;G++){const $=(G+1)%v.length;_+=v[G].x*v[$].y-v[$].x*v[G].y}_>0&&v.reverse();const T=M.h*n*r;T>h&&(h=T);const b=a.length/3,P=d[Math.floor(Ic(M.i)*d.length)%d.length],F=f[Math.floor(Ic(M.i+7)*f.length)%f.length],U=(G,$,ht,z)=>{a.push(G,$,ht),l.push(z.r,z.g,z.b)};let I=[];try{I=Qc.triangulateShape(v,[])}catch{I=[]}for(const G of I){let $=v[G[0]],ht=v[G[1]],z=v[G[2]];if((ht.y-$.y)*(z.x-$.x)-(ht.x-$.x)*(z.y-$.y)<0){const Y=ht;ht=z,z=Y}U($.x,T,$.y,F),U(ht.x,T,ht.y,F),U(z.x,T,z.y,F)}const it=v.length;for(let G=0;G<it;G++){const $=v[G],ht=v[(G+1)%it];U($.x,0,$.y,P),U(ht.x,0,ht.y,P),U(ht.x,T,ht.y,P),U($.x,0,$.y,P),U(ht.x,T,ht.y,P),U($.x,T,$.y,P)}let R=0,D=0;v.forEach(G=>{R+=G.x,D+=G.y}),c.push({v0:b,v1:a.length/3,lat:M.c[0],lng:M.c[1],cx:R/it,cz:D/it,h:M.h,name:M.n,id:M.i})}const p=new mn;p.setAttribute("position",new Ve(new Float32Array(a),3));const g=new Float32Array(l);return p.setAttribute("color",new Ve(g.slice(),3)),p.computeVertexNormals(),{obj:new Mn(p,new TM({vertexColors:!0})),ranges:c,orig:g,maxH:h,sel:-1}}function pb(s,t){let e=0,n=s.length-1;for(;e<=n;){const r=e+n>>1;if(t<s[r].v0)n=r-1;else if(t>=s[r].v1)e=r+1;else return r}return-1}function mb(s,t){const e=s.obj.geometry.attributes.color,n=e.array,r=(a,l)=>{const c=s.ranges[a];for(let h=c.v0;h<c.v1;h++)l?(n[h*3]=l.r,n[h*3+1]=l.g,n[h*3+2]=l.b):(n[h*3]=s.orig[h*3],n[h*3+1]=s.orig[h*3+1],n[h*3+2]=s.orig[h*3+2])};s.sel>=0&&r(s.sel,null),s.sel=t,t>=0&&r(t,db),e.needsUpdate=!0}function gb(s,t,e){const n=s.toFixed(6),r=t.toFixed(6);return{satEmbed:"https://maps.google.com/maps?q="+n+","+r+"&ll="+n+","+r+"&t=k&z=20&output=embed",pin:"https://www.google.com/maps/search/?api=1&query="+n+","+r,street:"https://www.google.com/maps/@?api=1&map_action=pano&viewpoint="+n+","+r+"&heading="+e+"&pitch=8&fov=85",earth:"https://earth.google.com/web/@"+n+","+r+",8a,220d,35y,"+e+"h,72t,0r"}}const _b=[["ঢাকা","Dhaka"],["চট্টগ্রাম","Chittagong","Chattogram"],["খুলনা","Khulna"],["রাজশাহী","Rajshahi"],["রংপুর","Rangpur"],["বরিশাল","Barisal","Barishal"],["সিলেট","Sylhet"],["ময়মনসিংহ","Mymensingh"],["গাজীপুর","Gazipur"],["নারায়ণগঞ্জ","Narayanganj"],["নরসিংদী","Narsingdi","Narshingdi"],["মুন্সিগঞ্জ","Munshiganj","Munshigonj"],["মানিকগঞ্জ","Manikganj"],["টাঙ্গাইল","Tangail"],["কিশোরগঞ্জ","Kishoreganj","Kishorganj"],["ফরিদপুর","Faridpur"],["রাজবাড়ী","Rajbari"],["গোপালগঞ্জ","Gopalganj"],["মাদারীপুর","Madaripur"],["শরীয়তপুর","Shariatpur"],["জামালপুর","Jamalpur"],["নেত্রকোণা","Netrokona","Netrakona"],["শেরপুর","Sherpur"],["কক্সবাজার","Cox's Bazar","Cox Bazar"],["কুমিল্লা","Comilla","Cumilla"],["ব্রাহ্মণবাড়িয়া","Brahmanbaria"],["চাঁদপুর","Chandpur"],["লক্ষ্মীপুর","Lakshmipur","Laxmipur"],["নোয়াখালী","Noakhali"],["ফেনী","Feni"],["খাগড়াছড়ি","Khagrachhari","Khagrachari"],["রাঙ্গামাটি","Rangamati"],["বান্দরবান","Bandarban"],["বাগেরহাট","Bagerhat"],["সাতক্ষীরা","Satkhira"],["যশোর","Jessore","Jashore"],["নড়াইল","Narail"],["মাগুরা","Magura"],["ঝিনাইদহ","Jhenaidah","Jhenidah"],["কুষ্টিয়া","Kushtia"],["চুয়াডাঙ্গা","Chuadanga"],["মেহেরপুর","Meherpur"],["ভোলা","Bhola"],["পটুয়াখালী","Patuakhali"],["পিরোজপুর","Pirojpur"],["ঝালকাঠি","Jhalokati","Jhalokathi","Jhalakathi"],["বরগুনা","Barguna"],["চাঁপাইনবাবগঞ্জ","Chapainawabganj","Chapai Nawabganj","Nawabganj"],["নওগাঁ","Naogaon"],["নাটোর","Natore"],["পাবনা","Pabna"],["সিরাজগঞ্জ","Sirajganj"],["বগুড়া","Bogra","Bogura"],["জয়পুরহাট","Joypurhat"],["দিনাজপুর","Dinajpur"],["ঠাকুরগাঁও","Thakurgaon"],["পঞ্চগড়","Panchagarh"],["নীলফামারী","Nilphamari"],["লালমনিরহাট","Lalmonirhat"],["কুড়িগ্রাম","Kurigram"],["গাইবান্ধা","Gaibandha"],["সুনামগঞ্জ","Sunamganj"],["হবিগঞ্জ","Habiganj"],["মৌলভীবাজার","Moulvibazar","Maulvibazar"],["অভয়নগর","Abhaynagar"],["আদাবর","Adabor"],["আদমদীঘি","Adamdighi"],["আদিতমারী","Aditmari"],["আগৈলঝাড়া","Agailjhara"],["আজমিরীগঞ্জ","Ajmiriganj"],["আখাউড়া","Akhaura"],["আক্কেলপুর","Akkelpur"],["আলমডাঙ্গা","Alamdanga"],["আলফাডাঙ্গা","Alfadanga"],["আলীকদম","Alikadam"],["আমতলী","Amtali"],["আনোয়ারা","Anowara"],["আড়াইহাজার","Araihazar"],["আশুগঞ্জ","Ashuganj"],["আশাশুনি","Assasuni"],["আটঘরিয়া","Atgharia"],["আটপাড়া","Atpara"],["আত্রাই","Atrai"],["আটোয়ারী","Atwari"],["অষ্টগ্রাম","Austagram"],["বাবুগঞ্জ","Babuganj"],["বদলগাছী","Badalgachhi"],["বদরগঞ্জ","Badarganj"],["বাড্ডা","Badda"],["বাগাতিপাড়া","Bagati Para"],["বাগেরহাট সদর","Bagerhat Sadar"],["বাঘা","Bagha"],["বাঘাইছড়ি","Baghai Chhari"],["বাঘারপাড়া","Bagher Para"],["বাগমারা","Baghmara"],["বাহুবল","Bahubal"],["বাজিতপুর","Bajitpur"],["বাকলিয়া","Bakalia"],["বাকেরগঞ্জ","Bakerganj"],["বকশীগঞ্জ","Bakshiganj"],["বালাগঞ্জ","Balaganj"],["বালিয়াকান্দি","Balia Kandi"],["বালিয়াডাঙ্গী","Baliadangi"],["বামনা","Bamna"],["বানারীপাড়া","Banari Para"],["বাঞ্ছারামপুর","Banchharampur"],["বন্দর","Bandar"],["বান্দরবান সদর","Bandarban Sadar"],["বংশাল","Bangshal"],["বানিয়াচং","Baniachong"],["বাঁশখালী","Banshkhali"],["বড়াইগ্রাম","Baraigram"],["বরগুনা সদর","Barguna Sadar"],["বারহাট্টা","Barhatta"],["বরিশাল সদর (কোতোয়ালী)","Barisal Sadar (Kotwali)"],["বরকল","Barkal"],["বড়লেখা","Barlekha"],["বরুড়া","Barura"],["বাসাইল","Basail"],["বটিয়াঘাটা","Batiaghata"],["বাউফল","Bauphal"],["বায়েজিদ বোস্তামী","Bayejid Bostami"],["বিয়ানীবাজার","Beani Bazar"],["বেগমগঞ্জ","Begumganj"],["বেলাব","Belabo"],["বিলাইছড়ি","Belai Chhari"],["বেলকুচি","Belkuchi"],["বেড়া","Bera"],["বেতাগী","Betagi"],["ভৈরব","Bhairab"],["ভালুকা","Bhaluka"],["ভান্ডারিয়া","Bhandaria"],["ভাঙ্গা","Bhanga"],["ভাঙ্গুড়া","Bhangura"],["ভেদরগঞ্জ","Bhedarganj"],["ভেড়ামারা","Bheramara"],["ভোলা সদর","Bhola Sadar"],["ভোলাহাট","Bholahat"],["ভূঞাপুর","Bhuapur"],["ভুরুঙ্গামারী","Bhurungamari"],["বিজয়নগর","Bijoynagar"],["বিমানবন্দর","Biman Bandar"],["বিরল","Biral"],["বীরামপুর","Birampur"],["বীরগঞ্জ","Birganj"],["বিশ্বম্ভরপুর","Bishwambarpur"],["বিশ্বনাথ","Bishwanath"],["বোয়ালিয়া","Boalia"],["বোয়ালখালী","Boalkhali"],["বোয়ালমারী","Boalmari"],["বোচাগঞ্জ","Bochaganj"],["বোদা","Boda"],["বগুড়া সদর","Bogra Sadar"],["ব্রাহ্মণপাড়া","Brahman Para"],["ব্রাহ্মণবাড়িয়া সদর","Brahmanbaria Sadar"],["বুরহানউদ্দিন","Burhanuddin"],["বুড়িচং","Burichang"],["ক্যান্টনমেন্ট","Cantonment"],["চকবাজার","Chak Bazar"],["চকরিয়া","Chakaria"],["চন্দনাইশ","Chandanaish"],["চান্দগাঁও","Chandgaon"],["চান্দিনা","Chandina"],["চাঁদপুর সদর","Chandpur Sadar"],["চরভদ্রাসন","Char Bhadrasan"],["চরফ্যাশন","Char Fasson"],["চর রাজিবপুর","Char Rajibpur"],["চারঘাট","Charghat"],["চাটখিল","Chatkhil"],["চাটমোহর","Chatmohar"],["চৌদ্দগ্রাম","Chauddagram"],["চৌগাছা","Chaugachha"],["চৌহালী","Chauhali"],["ছাগলনাইয়া","Chhagalnaiya"],["ছাতক","Chhatak"],["চিলমারী","Chilmari"],["চিরিরবন্দর","Chirirbandar"],["চিতলমারী","Chitalmari"],["চট্টগ্রাম বন্দর","Chittagong Port"],["চুয়াডাঙ্গা সদর","Chuadanga Sadar"],["চুনারুঘাট","Chunarughat"],["কুমিল্লা আদর্শ সদর","Comilla Adarsha Sadar"],["কুমিল্লা সদর দক্ষিণ","Comilla Sadar Dakshin"],["কোম্পানীগঞ্জ","Companiganj Noakhali"],["কোম্পানীগঞ্জ","Companiganj Sylhet"],["কক্সবাজার সদর","CoxS Bazar Sadar"],["দাকোপ","Dacope"],["দাগনভূঞা","Daganbhuiyan"],["দক্ষিণ সুনামগঞ্জ","Dakshin Sunamganj"],["দক্ষিণ সুরমা","Dakshin Surma"],["দক্ষিণখান","Dakshinkhan"],["ডামুড্যা","Damudya"],["দামুড়হুদা","Damurhuda"],["দারুস সালাম","Darus Salam"],["দশমিনা","Dashmina"],["দাউদকান্দি","Daudkandi"],["দৌলতখান","Daulatkhan"],["দৌলতপুর","Daulatpur Khulna"],["দৌলতপুর","Daulatpur Kushtia"],["দৌলতপুর","Daulatpur Manikganj"],["দেবহাটা","Debhata"],["দেবিদ্বার","Debidwar"],["দেবীগঞ্জ","Debiganj"],["দেলদুয়ার","Delduar"],["ডেমরা","Demra"],["দিরাই","Derai"],["দেওয়ানগঞ্জ","Dewanganj"],["ধামইরহাট","Dhamoirhat"],["ধামরাই","Dhamrai"],["ধনবাড়ী","Dhanbari"],["ধানমন্ডি","Dhanmondi"],["ধর্মপাশা","Dharampasha"],["ধোবাউড়া","Dhobaura"],["ধুনট","Dhunat"],["দুপচাঁচিয়া","Dhupchanchia"],["দিঘলিয়া","Dighalia"],["দীঘিনালা","Dighinala"],["ডিমলা","Dimla"],["দিনাজপুর সদর","Dinajpur Sadar"],["দোহার","Dohar"],["ডোমার","Domar"],["ডবলমুরিং","Double Mooring"],["দোয়ারাবাজার","Dowarabazar"],["দুমকি","Dumki"],["ডুমুরিয়া","Dumuria"],["দুর্গাপুর","Durgapur Netrakona"],["দুর্গাপুর","Durgapur Rajshahi"],["ফকিরহাট","Fakirhat"],["ফরিদগঞ্জ","Faridganj"],["ফরিদপুর","Faridpur"],["ফরিদপুর সদর","Faridpur Sadar"],["ফটিকছড়ি","Fatikchhari"],["ফেঞ্চুগঞ্জ","Fenchuganj"],["ফেনী সদর","Feni Sadar"],["ফুলবাড়ী","Fulbari"],["ফুলবাড়ীয়া","Fulbaria"],["ফুলছড়ি","Fulchhari"],["ফুলগাজী","Fulgazi"],["গাবতলী","Gabtali"],["গফরগাঁও","Gaffargaon"],["গাইবান্ধা সদর","Gaibandha Sadar"],["গলাচিপা","Galachipa"],["গঙ্গাচড়া","Gangachara"],["গাংনী","Gangni"],["গৌরীপুর","Gauripur"],["গৌরনদী","Gaurnadi"],["গজারিয়া","Gazaria"],["গাজীপুর সদর","Gazipur Sadar"],["গেন্ডারিয়া","Gendaria"],["ঘাটাইল","Ghatail"],["ঘিওর","Ghior"],["ঘোড়াঘাট","Ghoraghat"],["গোয়ালন্দ ঘাট","Goalandaghat"],["গোবিন্দগঞ্জ","Gobindaganj"],["গোদাগাড়ী","Godagari"],["গোলাপগঞ্জ","Golabganj"],["গোমস্তাপুর","Gomastapur"],["গোপালগঞ্জ সদর","Gopalganj Sadar"],["গোপালপুর","Gopalpur"],["গোসাইরহাট","Gosairhat"],["গোয়াইনঘাট","Gowainghat"],["গুলশান","Gulshan"],["গুরুদাসপুর","Gurudaspur"],["হবিগঞ্জ সদর","Habiganj Sadar"],["হাইমচর","Haim Char"],["হাজীগঞ্জ","Hajiganj"],["হাকিমপুর","Hakimpur"],["হালিশহর","Halishahar"],["হালুয়াঘাট","Haluaghat"],["হরিণাকুন্ডু","Harinakunda"],["হরিপুর","Haripur"],["হরিরামপুর","Harirampur"],["হাটহাজারী","Hathazari"],["হাতীবান্ধা","Hatibandha"],["হাতিয়া","Hatiya"],["হাজারীবাগ","Hazaribagh"],["হিজলা","Hizla"],["হোমনা","Homna"],["হোসেনপুর","Hossainpur"],["ঈশ্বরদী","Ishwardi"],["ঈশ্বরগঞ্জ","Ishwarganj"],["ইসলামপুর","Islampur"],["ইটনা","Itna"],["জগন্নাথপুর","Jagannathpur"],["জৈন্তাপুর","Jaintiapur"],["জলঢাকা","Jaldhaka"],["জামালগঞ্জ","Jamalganj"],["জামালপুর সদর","Jamalpur Sadar"],["যাত্রাবাড়ী","Jatrabari"],["ঝালকাঠি সদর","Jhalokati Sadar"],["ঝিনাইদহ সদর","Jhenaidah Sadar"],["ঝিনাইগাতী","Jhenaigati"],["ঝিকরগাছা","Jhikargachha"],["জীবননগর","Jiban Nagar"],["জয়পুরহাট সদর","Joypurhat Sadar"],["জুরাছড়ি","Jurai Chhari"],["জুড়ী","Juri"],["কবিরহাট","Kabirhat"],["কচুয়া","Kachua Bagerhat"],["কচুয়া","Kachua Chandpur"],["কদমতলী","Kadamtali"],["কাফরুল","Kafrul"],["কাহালু","Kahaloo"],["কাহারোল","Kaharole"],["কলাপাড়া","Kala Para"],["কলাবাগান","Kalabagan"],["কালাই","Kalai"],["কলারোয়া","Kalaroa"],["কালিয়া","Kalia"],["কালিয়াকৈর","Kaliakair"],["কালীগঞ্জ","Kaliganj Gazipur"],["কালীগঞ্জ","Kaliganj Jhenaidah"],["কালীগঞ্জ","Kaliganj Lalmonirhat"],["কালীগঞ্জ পৌরসভা","Kaliganj Paurashava"],["কালীগঞ্জ","Kaliganj Satkhira"],["কালিহাতী","Kalihati"],["কালকিনি","Kalkini"],["কলমাকান্দা","Kalmakanda"],["কালুখালী","Kalukhali"],["কমলগঞ্জ","Kamalganj"],["কমলনগর","Kamalnagar"],["কামারখন্দ","Kamarkhanda"],["কামরাঙ্গীরচর","Kamrangir Char"],["কানাইঘাট","Kanaighat"],["কাঁঠালিয়া","Kanthalia"],["কাপাসিয়া","Kapasia"],["কাপ্তাই","Kaptai"],["করিমগঞ্জ","Karimganj"],["কসবা","Kasba"],["কাশিয়ানী","Kashiani"],["কটিয়াদী","Katiadi"],["কাউনিয়া","Kaunia"],["কাউখালী","Kawkhali"],["কাউখালী (বেতবুনিয়া)","Kawkhali (Betbunia)"],["কাজীপুর","Kazipur"],["কেন্দুয়া","Kendua"],["কেরানীগঞ্জ","Keraniganj"],["কেশবপুর","Keshabpur"],["খাগড়াছড়ি সদর","Khagrachhari Sadar"],["খালিয়াজুরি","Khaliajuri"],["খালিশপুর","Khalishpur"],["খান জাহান আলী","Khan Jahan Ali"],["খানসামা","Khansama"],["ক্ষেতলাল","Khetlal"],["খিলগাঁও","Khilgaon"],["খিলক্ষেত","Khilkhet"],["খোকসা","Khoksa"],["খুলনা সদর","Khulna Sadar"],["খুলশী","Khulshi"],["কিশোরগঞ্জ","Kishoreganj"],["কিশোরগঞ্জ সদর","Kishoreganj Sadar"],["কোটালীপাড়া","Kotali Para"],["কোটচাঁদপুর","Kotchandpur"],["কোতোয়ালী","Kotwali Chittagong"],["কোতোয়ালী","Kotwali Dhaka"],["কোতোয়ালী","Kotwali Jessore"],["কয়রা","Koyra"],["কুলাউড়া","Kulaura"],["কুলিয়ারচর","Kuliar Char"],["কুমারখালী","Kumarkhali"],["কুড়িগ্রাম সদর","Kurigram Sadar"],["কুষ্টিয়া সদর","Kushtia Sadar"],["কুতুবদিয়া","Kutubdia"],["লাখাই","Lakhai"],["লাকসাম","Laksam"],["লক্ষ্মীছড়ি","Lakshmichhari"],["লক্ষ্মীপুর সদর","Lakshmipur Sadar"],["লালবাগ","Lalbagh"],["লালমোহন","Lalmohan"],["লালমনিরহাট সদর","Lalmonirhat Sadar"],["লালপুর","Lalpur"],["লামা","Lama"],["লংগদু","Langadu"],["লোহাগাড়া","Lohagara Chittagong"],["লোহাগড়া","Lohagara Narail"],["লৌহজং","Lohajang"],["মদন","Madan"],["মাদারগঞ্জ","Madarganj"],["মাদারীপুর সদর","Madaripur Sadar"],["মাধবপুর","Madhabpur"],["মধুখালী","Madhukhali"],["মধুপুর","Madhupur"],["মাগুরা সদর","Magura Sadar"],["মহাদেবপুর","Mahadebpur"],["মহালছড়ি","Mahalchhari"],["মহেশখালী","Maheshkhali"],["মহেশপুর","Maheshpur"],["মান্দা","Manda"],["মানিকছড়ি","Manikchhari"],["মানিকগঞ্জ সদর","Manikganj Sadar"],["মণিরামপুর","Manirampur"],["মনোহরদী","Manohardi"],["মনোহরগঞ্জ","Manoharganj"],["মনপুরা","Manpura"],["মঠবাড়িয়া","Mathbaria"],["মতিহার","Matihar"],["মাটিরাঙ্গা","Matiranga"],["মতলব দক্ষিণ","Matlab Dakshin"],["মতলব উত্তর","Matlab Uttar"],["মৌলভীবাজার সদর","Maulvi Bazar Sadar"],["মেঘনা","Meghna"],["মেহেন্দীগঞ্জ","Mehendiganj"],["মেহেরপুর সদর","Meherpur Sadar"],["মেলান্দহ","Melandaha"],["মিরপুর","Mirpur Dhaka"],["মিরপুর","Mirpur Kushtia"],["মীরসরাই","Mirsharai"],["মির্জাগঞ্জ","Mirzaganj"],["মির্জাপুর","Mirzapur"],["মিঠাপুকুর","Mitha Pukur"],["মিঠামইন","Mithamain"],["মোহাম্মদপুর","Mohammadpur Dhaka"],["মহম্মদপুর","Mohammadpur Magura"],["মোহনগঞ্জ","Mohanganj"],["মোহনপুর","Mohanpur"],["মোল্লাহাট","Mollahat"],["মোংলা","Mongla"],["মোড়েলগঞ্জ","Morrelganj"],["মতিঝিল","Motijheel"],["মুজিবনগর","Mujib Nagar"],["মুকসুদপুর","Muksudpur"],["মুক্তাগাছা","Muktagachha"],["মুলাদী","Muladi"],["মুন্সিগঞ্জ সদর","Munshiganj Sadar"],["মুরাদনগর","Muradnagar"],["ময়মনসিংহ সদর","Mymensingh Sadar"],["নবীগঞ্জ","Nabiganj"],["নবীনগর","Nabinagar"],["নাচোল","Nachole"],["নগরকান্দা","Nagarkanda"],["নাগরপুর","Nagarpur"],["নাগেশ্বরী","Nageshwari"],["নাইক্ষ্যংছড়ি","Naikhongchhari"],["নকলা","Nakla"],["নলছিটি","Nalchity"],["নালিতাবাড়ী","Nalitabari"],["নান্দাইল","Nandail"],["নন্দীগ্রাম","Nandigram"],["নাঙ্গলকোট","Nangalkot"],["নানিয়ারচর","Naniarchar"],["নওগাঁ সদর","Naogaon Sadar"],["নড়াইল সদর","Narail Sadar"],["নারায়ণগঞ্জ সদর","Narayanganj Sadar"],["নড়িয়া","Naria"],["নরসিংদী সদর","Narsingdi Sadar"],["নাসিরনগর","Nasirnagar"],["নাটোর সদর","Natore Sadar"],["নবাবগঞ্জ","Nawabganj Dhaka"],["নবাবগঞ্জ","Nawabganj Dinajpur"],["চাঁপাইনবাবগঞ্জ সদর","Nawabganj Sadar"],["নাজিরপুর","Nazirpur"],["নেছারাবাদ (স্বরূপকাঠি)","Nesarabad (Swarupkati)"],["নেত্রকোণা সদর","Netrokona Sadar"],["নিউমার্কেট","New Market"],["নিয়ামতপুর","Niamatpur"],["নিকলী","Nikli"],["নীলফামারী সদর","Nilphamari Sadar"],["নোয়াখালী সদর (সুধারাম)","Noakhali Sadar (Sudharam)"],["পবা","Paba"],["পাবনা সদর","Pabna Sadar"],["পাহাড়তলী","Pahartali"],["পাইকগাছা","Paikgachha"],["পাকুন্দিয়া","Pakundia"],["পলাশ","Palash"],["পলাশবাড়ী","Palashbari"],["পল্লবী","Pallabi"],["পল্টন","Paltan"],["পঞ্চগড় সদর","Panchagarh Sadar"],["পাঁচবিবি","Panchbibi"],["পানছড়ি","Panchhari"],["পাঁচলাইশ","Panchlaish"],["পাংশা","Pangsha"],["পার্বতীপুর","Parbatipur"],["পরশুরাম","Parshuram"],["পতেঙ্গা","Patenga"],["পাটগ্রাম","Patgram"],["পাথরঘাটা","Patharghata"],["পটিয়া","Patiya"],["পত্নীতলা","Patnitala"],["পটুয়াখালী সদর","Patuakhali Sadar"],["পেকুয়া","Pekua"],["ফুলবাড়ী","Phulbari"],["ফুলপুর","Phulpur"],["ফুলতলা","Phultala"],["পীরগাছা","Pirgachha"],["পীরগঞ্জ","Pirganj Rangpur"],["পীরগঞ্জ","Pirganj Thakurgaon"],["পিরোজপুর সদর","Pirojpur Sadar"],["পোরশা","Porsha"],["পূর্বধলা","Purbadhala"],["পুঠিয়া","Puthia"],["রাজাপুর","Rajapur"],["রাজারহাট","Rajarhat"],["রাজস্থলী","Rajasthali"],["রাজবাড়ী সদর","Rajbari Sadar"],["রাজনগর","Rajnagar"],["রাজৈর","Rajoir"],["রাজপাড়া","Rajpara"],["রামগঞ্জ","Ramganj"],["রামগড়","Ramgarh"],["রামগতি","Ramgati"],["রমনা","Ramna"],["রামপাল","Rampal"],["রামপুরা","Rampura"],["রামু","Ramu"],["রাঙ্গামাটি সদর","Rangamati Sadar"],["রংপুর","Rangpur"],["রংপুর সদর","Rangpur Sadar"],["রাঙ্গুনিয়া","Rangunia"],["রাণীনগর","Raninagar"],["রাণীশংকৈল","Ranisankail"],["রাউজান","Raozan"],["রৌমারী","Raumari"],["রোয়াংছড়ি","Rowangchhari"],["রায়গঞ্জ","Royganj"],["রায়পুর","Roypur"],["রায়পুরা","Roypura"],["রুমা","Ruma"],["রূপগঞ্জ","Rupganj"],["রূপসা","Rupsa"],["সবুজবাগ","Sabujbagh"],["সদরপুর","Sadarpur"],["সাদুল্লাপুর","Sadullapur"],["সাঘাটা","Saghatta"],["সৈয়দপুর","Saidpur"],["সখিপুর","Sakhipur"],["সালথা","Saltha"],["সন্দ্বীপ","Sandwip"],["সাঁথিয়া","Santhia"],["সাপাহার","Sapahar"],["সরাইল","Sarail"],["শরণখোলা","Sarankhola"],["সারিয়াকান্দি","Sariakandi"],["সরিষাবাড়ী","Sarishabari"],["সাতকানিয়া","Satkania"],["সাতক্ষীরা সদর","Satkhira Sadar"],["সাটুরিয়া","Saturia"],["সাভার","Savar"],["সেনবাগ","Senbagh"],["সিরাজদিখান","Serajdikhan"],["শাহ আলী","Shah Ali"],["শাহ মখদুম","Shah Makhdum"],["শাহবাগ","Shahbagh"],["শাহজাদপুর","Shahjadpur"],["শাহরাস্তি","Shahrasti"],["শৈলকুপা","Shailkupa"],["শাজাহানপুর","Shajahanpur"],["শালিখা","Shalikha"],["শরীয়তপুর সদর","Shariatpur Sadar"],["শার্শা","Sharsha"],["শেরেবাংলা নগর","Sher-e-bangla Nagar"],["শেরপুর","Sherpur"],["শেরপুর সদর","Sherpur Sadar"],["শিবচর","Shib Char"],["শিবালয়","Shibalaya"],["শিবগঞ্জ","Shibganj Bogra"],["শিবগঞ্জ","Shibganj Nawabganj"],["শিবপুর","Shibpur"],["শ্যামনগর","Shyamnagar"],["শ্যামপুর","Shyampur"],["সিংগাইর","Singair"],["সিংড়া","Singra"],["সিরাজগঞ্জ সদর","Sirajganj Sadar"],["সীতাকুণ্ড","Sitakunda"],["সোনাডাঙ্গা","Sonadanga"],["সোনাগাজী","Sonagazi"],["সোনাইমুড়ী","Sonaimuri"],["সোনারগাঁও","Sonargaon"],["সোনাতলা","Sonatola"],["শ্রীবরদী","Sreebardi"],["শ্রীমঙ্গল","Sreemangal"],["শ্রীনগর","Sreenagar"],["শ্রীপুর","Sreepur Gazipur"],["শ্রীপুর","Sreepur Magura"],["সুবর্ণচর","Subarnachar"],["সুজানগর","Sujanagar"],["সুল্লা","Sulla"],["সুনামগঞ্জ সদর","Sunamganj Sadar"],["সুন্দরগঞ্জ","Sundarganj"],["সূত্রাপুর","Sutrapur"],["সিলেট সদর","Sylhet Sadar"],["তাহিরপুর","Tahirpur"],["তালা","Tala"],["টাঙ্গাইল সদর","Tangail Sadar"],["তানোর","Tanore"],["তারাগঞ্জ","Taraganj"],["তাড়াইল","Tarail"],["তাড়াশ","Tarash"],["তজুমদ্দিন","Tazumuddin"],["তেজগাঁও","Tejgaon"],["তেজগাঁও শিল্পাঞ্চল","Tejgaon Ind Area"],["টেকনাফ","Teknaf"],["তেঁতুলিয়া","Tentulia"],["তেরখাদা","Terokhada"],["ঠাকুরগাঁও সদর","Thakurgaon Sadar"],["থানচি","Thanchi"],["তিতাস","Titas"],["টঙ্গিবাড়ী","Tongibari"],["ত্রিশাল","Trishal"],["টুঙ্গিপাড়া","Tungi Para"],["তুরাগ","Turag"],["উখিয়া","Ukhia"],["উলিপুর","Ulipur"],["উল্লাপাড়া","Ullah Para"],["উত্তরখান","Uttar Khan"],["উত্তরা","Uttara"],["উজিরপুর","Wazirpur"],["জকিগঞ্জ","Zakiganj"],["জাজিরা","Zanjira"],["জিয়ানগর","Zianagar"]],lf={"Companiganj Noakhali":"Companiganj","Companiganj Sylhet":"Companiganj","Daulatpur Khulna":"Daulatpur","Daulatpur Kushtia":"Daulatpur","Daulatpur Manikganj":"Daulatpur","Durgapur Netrakona":"Durgapur","Durgapur Rajshahi":"Durgapur","Kaliganj Gazipur":"Kaliganj","Kaliganj Jhenaidah":"Kaliganj","Kaliganj Lalmonirhat":"Kaliganj","Kaliganj Satkhira":"Kaliganj","Kaliganj Paurashava":"Kaliganj (Paurashava)","Kachua Bagerhat":"Kachua","Kachua Chandpur":"Kachua","Kotwali Chittagong":"Kotwali","Kotwali Dhaka":"Kotwali","Kotwali Jessore":"Kotwali","Lohagara Chittagong":"Lohagara","Lohagara Narail":"Lohagara","Mirpur Dhaka":"Mirpur","Mirpur Kushtia":"Mirpur","Mohammadpur Dhaka":"Mohammadpur","Mohammadpur Magura":"Mohammadpur","Nawabganj Dhaka":"Nawabganj","Nawabganj Dinajpur":"Nawabganj","Pirganj Rangpur":"Pirganj","Pirganj Thakurgaon":"Pirganj","Shibganj Bogra":"Shibganj","Shibganj Nawabganj":"Shibganj","Sreepur Gazipur":"Sreepur","Sreepur Magura":"Sreepur","CoxS Bazar Sadar":"Cox's Bazar Sadar","Tejgaon Ind Area":"Tejgaon Industrial Area","Sher-e-bangla Nagar":"Sher-e-Bangla Nagar"};var Dc={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(s,t){(function(e,n){n(t)})(wm,function(e){var n="1.9.4";function r(i){var o,u,m,y;for(u=1,m=arguments.length;u<m;u++){y=arguments[u];for(o in y)i[o]=y[o]}return i}var a=Object.create||function(){function i(){}return function(o){return i.prototype=o,new i}}();function l(i,o){var u=Array.prototype.slice;if(i.bind)return i.bind.apply(i,u.call(arguments,1));var m=u.call(arguments,2);return function(){return i.apply(o,m.length?m.concat(u.call(arguments)):arguments)}}var c=0;function h(i){return"_leaflet_id"in i||(i._leaflet_id=++c),i._leaflet_id}function d(i,o,u){var m,y,E,B;return B=function(){m=!1,y&&(E.apply(u,y),y=!1)},E=function(){m?y=arguments:(i.apply(u,arguments),setTimeout(B,o),m=!0)},E}function f(i,o,u){var m=o[1],y=o[0],E=m-y;return i===m&&u?i:((i-y)%E+E)%E+y}function p(){return!1}function g(i,o){if(o===!1)return i;var u=Math.pow(10,o===void 0?6:o);return Math.round(i*u)/u}function x(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function M(i){return x(i).split(/\s+/)}function S(i,o){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var u in o)i.options[u]=o[u];return i.options}function v(i,o,u){var m=[];for(var y in i)m.push(encodeURIComponent(u?y.toUpperCase():y)+"="+encodeURIComponent(i[y]));return(!o||o.indexOf("?")===-1?"?":"&")+m.join("&")}var _=/\{ *([\w_ -]+) *\}/g;function T(i,o){return i.replace(_,function(u,m){var y=o[m];if(y===void 0)throw new Error("No value provided for variable "+u);return typeof y=="function"&&(y=y(o)),y})}var b=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function P(i,o){for(var u=0;u<i.length;u++)if(i[u]===o)return u;return-1}var F="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function U(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var I=0;function it(i){var o=+new Date,u=Math.max(0,16-(o-I));return I=o+u,window.setTimeout(i,u)}var R=window.requestAnimationFrame||U("RequestAnimationFrame")||it,D=window.cancelAnimationFrame||U("CancelAnimationFrame")||U("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function G(i,o,u){if(u&&R===it)i.call(o);else return R.call(window,l(i,o))}function $(i){i&&D.call(window,i)}var ht={__proto__:null,extend:r,create:a,bind:l,get lastId(){return c},stamp:h,throttle:d,wrapNum:f,falseFn:p,formatNum:g,trim:x,splitWords:M,setOptions:S,getParamString:v,template:T,isArray:b,indexOf:P,emptyImageUrl:F,requestFn:R,cancelFn:D,requestAnimFrame:G,cancelAnimFrame:$};function z(){}z.extend=function(i){var o=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=o.__super__=this.prototype,m=a(u);m.constructor=o,o.prototype=m;for(var y in this)Object.prototype.hasOwnProperty.call(this,y)&&y!=="prototype"&&y!=="__super__"&&(o[y]=this[y]);return i.statics&&r(o,i.statics),i.includes&&(K(i.includes),r.apply(null,[m].concat(i.includes))),r(m,i),delete m.statics,delete m.includes,m.options&&(m.options=u.options?a(u.options):{},r(m.options,i.options)),m._initHooks=[],m.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var E=0,B=m._initHooks.length;E<B;E++)m._initHooks[E].call(this)}},o},z.include=function(i){var o=this.prototype.options;return r(this.prototype,i),i.options&&(this.prototype.options=o,this.mergeOptions(i.options)),this},z.mergeOptions=function(i){return r(this.prototype.options,i),this},z.addInitHook=function(i){var o=Array.prototype.slice.call(arguments,1),u=typeof i=="function"?i:function(){this[i].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function K(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=b(i)?i:[i];for(var o=0;o<i.length;o++)i[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Y={on:function(i,o,u){if(typeof i=="object")for(var m in i)this._on(m,i[m],o);else{i=M(i);for(var y=0,E=i.length;y<E;y++)this._on(i[y],o,u)}return this},off:function(i,o,u){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var m in i)this._off(m,i[m],o);else{i=M(i);for(var y=arguments.length===1,E=0,B=i.length;E<B;E++)y?this._off(i[E]):this._off(i[E],o,u)}return this},_on:function(i,o,u,m){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(i,o,u)===!1){u===this&&(u=void 0);var y={fn:o,ctx:u};m&&(y.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(y)}},_off:function(i,o,u){var m,y,E;if(this._events&&(m=this._events[i],!!m)){if(arguments.length===1){if(this._firingCount)for(y=0,E=m.length;y<E;y++)m[y].fn=p;delete this._events[i];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var B=this._listens(i,o,u);if(B!==!1){var W=m[B];this._firingCount&&(W.fn=p,this._events[i]=m=m.slice()),m.splice(B,1)}}},fire:function(i,o,u){if(!this.listens(i,u))return this;var m=r({},o,{type:i,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var y=this._events[i];if(y){this._firingCount=this._firingCount+1||1;for(var E=0,B=y.length;E<B;E++){var W=y[E],tt=W.fn;W.once&&this.off(i,tt,W.ctx),tt.call(W.ctx||this,m)}this._firingCount--}}return u&&this._propagateEvent(m),this},listens:function(i,o,u,m){typeof i!="string"&&console.warn('"string" type argument expected');var y=o;typeof o!="function"&&(m=!!o,y=void 0,u=void 0);var E=this._events&&this._events[i];if(E&&E.length&&this._listens(i,y,u)!==!1)return!0;if(m){for(var B in this._eventParents)if(this._eventParents[B].listens(i,o,u,m))return!0}return!1},_listens:function(i,o,u){if(!this._events)return!1;var m=this._events[i]||[];if(!o)return!!m.length;u===this&&(u=void 0);for(var y=0,E=m.length;y<E;y++)if(m[y].fn===o&&m[y].ctx===u)return y;return!1},once:function(i,o,u){if(typeof i=="object")for(var m in i)this._on(m,i[m],o,!0);else{i=M(i);for(var y=0,E=i.length;y<E;y++)this._on(i[y],o,u,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[h(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[h(i)],this},_propagateEvent:function(i){for(var o in this._eventParents)this._eventParents[o].fire(i.type,r({layer:i.target,propagatedFrom:i.target},i),!0)}};Y.addEventListener=Y.on,Y.removeEventListener=Y.clearAllEventListeners=Y.off,Y.addOneTimeEventListener=Y.once,Y.fireEvent=Y.fire,Y.hasEventListeners=Y.listens;var lt=z.extend(Y);function j(i,o,u){this.x=u?Math.round(i):i,this.y=u?Math.round(o):o}var at=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};j.prototype={clone:function(){return new j(this.x,this.y)},add:function(i){return this.clone()._add(q(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(q(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new j(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new j(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=at(this.x),this.y=at(this.y),this},distanceTo:function(i){i=q(i);var o=i.x-this.x,u=i.y-this.y;return Math.sqrt(o*o+u*u)},equals:function(i){return i=q(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=q(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+g(this.x)+", "+g(this.y)+")"}};function q(i,o,u){return i instanceof j?i:b(i)?new j(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new j(i.x,i.y):new j(i,o,u)}function ot(i,o){if(i)for(var u=o?[i,o]:i,m=0,y=u.length;m<y;m++)this.extend(u[m])}ot.prototype={extend:function(i){var o,u;if(!i)return this;if(i instanceof j||typeof i[0]=="number"||"x"in i)o=u=q(i);else if(i=Mt(i),o=i.min,u=i.max,!o||!u)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=u.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(i){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var o,u;return typeof i[0]=="number"||i instanceof j?i=q(i):i=Mt(i),i instanceof ot?(o=i.min,u=i.max):o=u=i,o.x>=this.min.x&&u.x<=this.max.x&&o.y>=this.min.y&&u.y<=this.max.y},intersects:function(i){i=Mt(i);var o=this.min,u=this.max,m=i.min,y=i.max,E=y.x>=o.x&&m.x<=u.x,B=y.y>=o.y&&m.y<=u.y;return E&&B},overlaps:function(i){i=Mt(i);var o=this.min,u=this.max,m=i.min,y=i.max,E=y.x>o.x&&m.x<u.x,B=y.y>o.y&&m.y<u.y;return E&&B},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var o=this.min,u=this.max,m=Math.abs(o.x-u.x)*i,y=Math.abs(o.y-u.y)*i;return Mt(q(o.x-m,o.y-y),q(u.x+m,u.y+y))},equals:function(i){return i?(i=Mt(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function Mt(i,o){return!i||i instanceof ot?i:new ot(i,o)}function J(i,o){if(i)for(var u=o?[i,o]:i,m=0,y=u.length;m<y;m++)this.extend(u[m])}J.prototype={extend:function(i){var o=this._southWest,u=this._northEast,m,y;if(i instanceof ut)m=i,y=i;else if(i instanceof J){if(m=i._southWest,y=i._northEast,!m||!y)return this}else return i?this.extend(xt(i)||st(i)):this;return!o&&!u?(this._southWest=new ut(m.lat,m.lng),this._northEast=new ut(y.lat,y.lng)):(o.lat=Math.min(m.lat,o.lat),o.lng=Math.min(m.lng,o.lng),u.lat=Math.max(y.lat,u.lat),u.lng=Math.max(y.lng,u.lng)),this},pad:function(i){var o=this._southWest,u=this._northEast,m=Math.abs(o.lat-u.lat)*i,y=Math.abs(o.lng-u.lng)*i;return new J(new ut(o.lat-m,o.lng-y),new ut(u.lat+m,u.lng+y))},getCenter:function(){return new ut((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ut(this.getNorth(),this.getWest())},getSouthEast:function(){return new ut(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof ut||"lat"in i?i=xt(i):i=st(i);var o=this._southWest,u=this._northEast,m,y;return i instanceof J?(m=i.getSouthWest(),y=i.getNorthEast()):m=y=i,m.lat>=o.lat&&y.lat<=u.lat&&m.lng>=o.lng&&y.lng<=u.lng},intersects:function(i){i=st(i);var o=this._southWest,u=this._northEast,m=i.getSouthWest(),y=i.getNorthEast(),E=y.lat>=o.lat&&m.lat<=u.lat,B=y.lng>=o.lng&&m.lng<=u.lng;return E&&B},overlaps:function(i){i=st(i);var o=this._southWest,u=this._northEast,m=i.getSouthWest(),y=i.getNorthEast(),E=y.lat>o.lat&&m.lat<u.lat,B=y.lng>o.lng&&m.lng<u.lng;return E&&B},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,o){return i?(i=st(i),this._southWest.equals(i.getSouthWest(),o)&&this._northEast.equals(i.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function st(i,o){return i instanceof J?i:new J(i,o)}function ut(i,o,u){if(isNaN(i)||isNaN(o))throw new Error("Invalid LatLng object: ("+i+", "+o+")");this.lat=+i,this.lng=+o,u!==void 0&&(this.alt=+u)}ut.prototype={equals:function(i,o){if(!i)return!1;i=xt(i);var u=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return u<=(o===void 0?1e-9:o)},toString:function(i){return"LatLng("+g(this.lat,i)+", "+g(this.lng,i)+")"},distanceTo:function(i){return zt.distance(this,xt(i))},wrap:function(){return zt.wrapLatLng(this)},toBounds:function(i){var o=180*i/40075017,u=o/Math.cos(Math.PI/180*this.lat);return st([this.lat-o,this.lng-u],[this.lat+o,this.lng+u])},clone:function(){return new ut(this.lat,this.lng,this.alt)}};function xt(i,o,u){return i instanceof ut?i:b(i)&&typeof i[0]!="object"?i.length===3?new ut(i[0],i[1],i[2]):i.length===2?new ut(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new ut(i.lat,"lng"in i?i.lng:i.lon,i.alt):o===void 0?null:new ut(i,o,u)}var Pt={latLngToPoint:function(i,o){var u=this.projection.project(i),m=this.scale(o);return this.transformation._transform(u,m)},pointToLatLng:function(i,o){var u=this.scale(o),m=this.transformation.untransform(i,u);return this.projection.unproject(m)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var o=this.projection.bounds,u=this.scale(i),m=this.transformation.transform(o.min,u),y=this.transformation.transform(o.max,u);return new ot(m,y)},infinite:!1,wrapLatLng:function(i){var o=this.wrapLng?f(i.lng,this.wrapLng,!0):i.lng,u=this.wrapLat?f(i.lat,this.wrapLat,!0):i.lat,m=i.alt;return new ut(u,o,m)},wrapLatLngBounds:function(i){var o=i.getCenter(),u=this.wrapLatLng(o),m=o.lat-u.lat,y=o.lng-u.lng;if(m===0&&y===0)return i;var E=i.getSouthWest(),B=i.getNorthEast(),W=new ut(E.lat-m,E.lng-y),tt=new ut(B.lat-m,B.lng-y);return new J(W,tt)}},zt=r({},Pt,{wrapLng:[-180,180],R:6371e3,distance:function(i,o){var u=Math.PI/180,m=i.lat*u,y=o.lat*u,E=Math.sin((o.lat-i.lat)*u/2),B=Math.sin((o.lng-i.lng)*u/2),W=E*E+Math.cos(m)*Math.cos(y)*B*B,tt=2*Math.atan2(Math.sqrt(W),Math.sqrt(1-W));return this.R*tt}}),qt=6378137,Bt={R:qt,MAX_LATITUDE:85.0511287798,project:function(i){var o=Math.PI/180,u=this.MAX_LATITUDE,m=Math.max(Math.min(u,i.lat),-u),y=Math.sin(m*o);return new j(this.R*i.lng*o,this.R*Math.log((1+y)/(1-y))/2)},unproject:function(i){var o=180/Math.PI;return new ut((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*o,i.x*o/this.R)},bounds:function(){var i=qt*Math.PI;return new ot([-i,-i],[i,i])}()};function ne(i,o,u,m){if(b(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=o,this._c=u,this._d=m}ne.prototype={transform:function(i,o){return this._transform(i.clone(),o)},_transform:function(i,o){return o=o||1,i.x=o*(this._a*i.x+this._b),i.y=o*(this._c*i.y+this._d),i},untransform:function(i,o){return o=o||1,new j((i.x/o-this._b)/this._a,(i.y/o-this._d)/this._c)}};function Z(i,o,u,m){return new ne(i,o,u,m)}var Re=r({},zt,{code:"EPSG:3857",projection:Bt,transformation:function(){var i=.5/(Math.PI*Bt.R);return Z(i,.5,-i,.5)}()}),H=r({},Re,{code:"EPSG:900913"});function rt(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ct(i,o){var u="",m,y,E,B,W,tt;for(m=0,E=i.length;m<E;m++){for(W=i[m],y=0,B=W.length;y<B;y++)tt=W[y],u+=(y?"L":"M")+tt.x+" "+tt.y;u+=o?Ut.svg?"z":"x":""}return u||"M0 0"}var Gt=document.documentElement.style,Dt="ActiveXObject"in window,A=Dt&&!document.addEventListener,w="msLaunchUri"in navigator&&!("documentMode"in document),X=An("webkit"),pt=An("android"),dt=An("android 2")||An("android 3"),gt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ct=pt&&An("Google")&&gt<537&&!("AudioNode"in window),Et=!!window.opera,At=!w&&An("chrome"),Ot=An("gecko")&&!X&&!Et&&!Dt,Jt=!At&&An("safari"),mt=An("phantom"),de="OTransition"in Gt,Qt=navigator.platform.indexOf("Win")===0,Vt=Dt&&"transition"in Gt,Tt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!dt,St="MozPerspective"in Gt,N=!window.L_DISABLE_3D&&(Vt||Tt||St)&&!de&&!mt,_t=typeof orientation<"u"||An("mobile"),Nt=_t&&X,It=_t&&Tt,vt=!window.PointerEvent&&window.MSPointerEvent,k=!!(window.PointerEvent||vt),yt="ontouchstart"in window||!!window.TouchEvent,wt=!window.L_NO_TOUCH&&(yt||k),Xt=_t&&Et,Ht=_t&&Ot,le=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ce=function(){var i=!1;try{var o=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",p,o),window.removeEventListener("testPassiveEventSupport",p,o)}catch{}return i}(),Pe=function(){return!!document.createElement("canvas").getContext}(),we=!!(document.createElementNS&&rt("svg").createSVGRect),me=!!we&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ue=!we&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var o=i.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}}(),wn=navigator.platform.indexOf("Mac")===0,ba=navigator.platform.indexOf("Linux")===0;function An(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Ut={ie:Dt,ielt9:A,edge:w,webkit:X,android:pt,android23:dt,androidStock:Ct,opera:Et,chrome:At,gecko:Ot,safari:Jt,phantom:mt,opera12:de,win:Qt,ie3d:Vt,webkit3d:Tt,gecko3d:St,any3d:N,mobile:_t,mobileWebkit:Nt,mobileWebkit3d:It,msPointer:vt,pointer:k,touch:wt,touchNative:yt,mobileOpera:Xt,mobileGecko:Ht,retina:le,passiveEvents:ce,canvas:Pe,svg:we,vml:Ue,inlineSvg:me,mac:wn,linux:ba},Dr=Ut.msPointer?"MSPointerDown":"pointerdown",Ji=Ut.msPointer?"MSPointerMove":"pointermove",Nr=Ut.msPointer?"MSPointerUp":"pointerup",Ur=Ut.msPointer?"MSPointerCancel":"pointercancel",Or={touchstart:Dr,touchmove:Ji,touchend:Nr,touchcancel:Ur},Ea={touchstart:Yt,touchmove:Wt,touchend:Wt,touchcancel:Wt},Ri={},C=!1;function V(i,o,u){return o==="touchstart"&&Ft(),Ea[o]?(u=Ea[o].bind(this,u),i.addEventListener(Or[o],u,!1),u):(console.warn("wrong event specified:",o),p)}function et(i,o,u){if(!Or[o]){console.warn("wrong event specified:",o);return}i.removeEventListener(Or[o],u,!1)}function nt(i){Ri[i.pointerId]=i}function Q(i){Ri[i.pointerId]&&(Ri[i.pointerId]=i)}function Lt(i){delete Ri[i.pointerId]}function Ft(){C||(document.addEventListener(Dr,nt,!0),document.addEventListener(Ji,Q,!0),document.addEventListener(Nr,Lt,!0),document.addEventListener(Ur,Lt,!0),C=!0)}function Wt(i,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var u in Ri)o.touches.push(Ri[u]);o.changedTouches=[o],i(o)}}function Yt(i,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&tn(o),Wt(i,o)}function re(i){var o={},u,m;for(m in i)u=i[m],o[m]=u&&u.bind?u.bind(i):u;return i=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var te=200;function ie(i,o){i.addEventListener("dblclick",o);var u=0,m;function y(E){if(E.detail!==1){m=E.detail;return}if(!(E.pointerType==="mouse"||E.sourceCapabilities&&!E.sourceCapabilities.firesTouchEvents)){var B=ph(E);if(!(B.some(function(tt){return tt instanceof HTMLLabelElement&&tt.attributes.for})&&!B.some(function(tt){return tt instanceof HTMLInputElement||tt instanceof HTMLSelectElement}))){var W=Date.now();W-u<=te?(m++,m===2&&o(re(E))):m=1,u=W}}}return i.addEventListener("click",y),{dblclick:o,simDblclick:y}}function De(i,o){i.removeEventListener("dblclick",o.dblclick),i.removeEventListener("click",o.simDblclick)}var Je=es(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Ce=es(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ln=Ce==="webkitTransition"||Ce==="OTransition"?Ce+"End":"transitionend";function Ee(i){return typeof i=="string"?document.getElementById(i):i}function ee(i,o){var u=i.style[o]||i.currentStyle&&i.currentStyle[o];if((!u||u==="auto")&&document.defaultView){var m=document.defaultView.getComputedStyle(i,null);u=m?m[o]:null}return u==="auto"?null:u}function fe(i,o,u){var m=document.createElement(i);return m.className=o||"",u&&u.appendChild(m),m}function $t(i){var o=i.parentNode;o&&o.removeChild(i)}function Rn(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function ci(i){var o=i.parentNode;o&&o.lastChild!==i&&o.appendChild(i)}function Pn(i){var o=i.parentNode;o&&o.firstChild!==i&&o.insertBefore(i,o.firstChild)}function Qi(i,o){if(i.classList!==void 0)return i.classList.contains(o);var u=Qe(i);return u.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(u)}function kt(i,o){if(i.classList!==void 0)for(var u=M(o),m=0,y=u.length;m<y;m++)i.classList.add(u[m]);else if(!Qi(i,o)){var E=Qe(i);ts(i,(E?E+" ":"")+o)}}function ye(i,o){i.classList!==void 0?i.classList.remove(o):ts(i,x((" "+Qe(i)+" ").replace(" "+o+" "," ")))}function ts(i,o){i.className.baseVal===void 0?i.className=o:i.className.baseVal=o}function Qe(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function an(i,o){"opacity"in i.style?i.style.opacity=o:"filter"in i.style&&Jo(i,o)}function Jo(i,o){var u=!1,m="DXImageTransform.Microsoft.Alpha";try{u=i.filters.item(m)}catch{if(o===1)return}o=Math.round(o*100),u?(u.Enabled=o!==100,u.Opacity=o):i.style.filter+=" progid:"+m+"(opacity="+o+")"}function es(i){for(var o=document.documentElement.style,u=0;u<i.length;u++)if(i[u]in o)return i[u];return!1}function ns(i,o,u){var m=o||new j(0,0);i.style[Je]=(Ut.ie3d?"translate("+m.x+"px,"+m.y+"px)":"translate3d("+m.x+"px,"+m.y+"px,0)")+(u?" scale("+u+")":"")}function Fe(i,o){i._leaflet_pos=o,Ut.any3d?ns(i,o):(i.style.left=o.x+"px",i.style.top=o.y+"px")}function is(i){return i._leaflet_pos||new j(0,0)}var Br,Fr,Qo;if("onselectstart"in document)Br=function(){se(window,"selectstart",tn)},Fr=function(){Te(window,"selectstart",tn)};else{var kr=es(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Br=function(){if(kr){var i=document.documentElement.style;Qo=i[kr],i[kr]="none"}},Fr=function(){kr&&(document.documentElement.style[kr]=Qo,Qo=void 0)}}function tl(){se(window,"dragstart",tn)}function el(){Te(window,"dragstart",tn)}var Ta,nl;function il(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(wa(),Ta=i,nl=i.style.outlineStyle,i.style.outlineStyle="none",se(window,"keydown",wa))}function wa(){Ta&&(Ta.style.outlineStyle=nl,Ta=void 0,nl=void 0,Te(window,"keydown",wa))}function dh(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function sl(i){var o=i.getBoundingClientRect();return{x:o.width/i.offsetWidth||1,y:o.height/i.offsetHeight||1,boundingClientRect:o}}var Ip={__proto__:null,TRANSFORM:Je,TRANSITION:Ce,TRANSITION_END:Ln,get:Ee,getStyle:ee,create:fe,remove:$t,empty:Rn,toFront:ci,toBack:Pn,hasClass:Qi,addClass:kt,removeClass:ye,setClass:ts,getClass:Qe,setOpacity:an,testProp:es,setTransform:ns,setPosition:Fe,getPosition:is,get disableTextSelection(){return Br},get enableTextSelection(){return Fr},disableImageDrag:tl,enableImageDrag:el,preventOutline:il,restoreOutline:wa,getSizedParentNode:dh,getScale:sl};function se(i,o,u,m){if(o&&typeof o=="object")for(var y in o)al(i,y,o[y],u);else{o=M(o);for(var E=0,B=o.length;E<B;E++)al(i,o[E],u,m)}return this}var $n="_leaflet_events";function Te(i,o,u,m){if(arguments.length===1)fh(i),delete i[$n];else if(o&&typeof o=="object")for(var y in o)ol(i,y,o[y],u);else if(o=M(o),arguments.length===2)fh(i,function(W){return P(o,W)!==-1});else for(var E=0,B=o.length;E<B;E++)ol(i,o[E],u,m);return this}function fh(i,o){for(var u in i[$n]){var m=u.split(/\d/)[0];(!o||o(m))&&ol(i,m,null,null,u)}}var rl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function al(i,o,u,m){var y=o+h(u)+(m?"_"+h(m):"");if(i[$n]&&i[$n][y])return this;var E=function(W){return u.call(m||i,W||window.event)},B=E;!Ut.touchNative&&Ut.pointer&&o.indexOf("touch")===0?E=V(i,o,E):Ut.touch&&o==="dblclick"?E=ie(i,E):"addEventListener"in i?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?i.addEventListener(rl[o]||o,E,Ut.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(E=function(W){W=W||window.event,cl(i,W)&&B(W)},i.addEventListener(rl[o],E,!1)):i.addEventListener(o,B,!1):i.attachEvent("on"+o,E),i[$n]=i[$n]||{},i[$n][y]=E}function ol(i,o,u,m,y){y=y||o+h(u)+(m?"_"+h(m):"");var E=i[$n]&&i[$n][y];if(!E)return this;!Ut.touchNative&&Ut.pointer&&o.indexOf("touch")===0?et(i,o,E):Ut.touch&&o==="dblclick"?De(i,E):"removeEventListener"in i?i.removeEventListener(rl[o]||o,E,!1):i.detachEvent("on"+o,E),i[$n][y]=null}function ss(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function ll(i){return al(i,"wheel",ss),this}function zr(i){return se(i,"mousedown touchstart dblclick contextmenu",ss),i._leaflet_disable_click=!0,this}function tn(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function rs(i){return tn(i),ss(i),this}function ph(i){if(i.composedPath)return i.composedPath();for(var o=[],u=i.target;u;)o.push(u),u=u.parentNode;return o}function mh(i,o){if(!o)return new j(i.clientX,i.clientY);var u=sl(o),m=u.boundingClientRect;return new j((i.clientX-m.left)/u.x-o.clientLeft,(i.clientY-m.top)/u.y-o.clientTop)}var Dp=Ut.linux&&Ut.chrome?window.devicePixelRatio:Ut.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function gh(i){return Ut.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/Dp:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function cl(i,o){var u=o.relatedTarget;if(!u)return!0;try{for(;u&&u!==i;)u=u.parentNode}catch{return!1}return u!==i}var Np={__proto__:null,on:se,off:Te,stopPropagation:ss,disableScrollPropagation:ll,disableClickPropagation:zr,preventDefault:tn,stop:rs,getPropagationPath:ph,getMousePosition:mh,getWheelDelta:gh,isExternalTarget:cl,addListener:se,removeListener:Te},_h=lt.extend({run:function(i,o,u,m){this.stop(),this._el=i,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(m||.5,.2),this._startPos=is(i),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=G(this._animate,this),this._step()},_step:function(i){var o=+new Date-this._startTime,u=this._duration*1e3;o<u?this._runFrame(this._easeOut(o/u),i):(this._runFrame(1),this._complete())},_runFrame:function(i,o){var u=this._startPos.add(this._offset.multiplyBy(i));o&&u._round(),Fe(this._el,u),this.fire("step")},_complete:function(){$(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),ge=lt.extend({options:{crs:Re,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,o){o=S(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(xt(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Ce&&Ut.any3d&&!Ut.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),se(this._proxy,Ln,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,o,u){if(o=o===void 0?this._zoom:this._limitZoom(o),i=this._limitCenter(xt(i),o,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=r({animate:u.animate},u.zoom),u.pan=r({animate:u.animate,duration:u.duration},u.pan));var m=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,o,u.zoom):this._tryAnimatedPan(i,u.pan);if(m)return clearTimeout(this._sizeTimer),this}return this._resetView(i,o,u.pan&&u.pan.noMoveStart),this},setZoom:function(i,o){return this._loaded?this.setView(this.getCenter(),i,{zoom:o}):(this._zoom=i,this)},zoomIn:function(i,o){return i=i||(Ut.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,o)},zoomOut:function(i,o){return i=i||(Ut.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,o)},setZoomAround:function(i,o,u){var m=this.getZoomScale(o),y=this.getSize().divideBy(2),E=i instanceof j?i:this.latLngToContainerPoint(i),B=E.subtract(y).multiplyBy(1-1/m),W=this.containerPointToLatLng(y.add(B));return this.setView(W,o,{zoom:u})},_getBoundsCenterZoom:function(i,o){o=o||{},i=i.getBounds?i.getBounds():st(i);var u=q(o.paddingTopLeft||o.padding||[0,0]),m=q(o.paddingBottomRight||o.padding||[0,0]),y=this.getBoundsZoom(i,!1,u.add(m));if(y=typeof o.maxZoom=="number"?Math.min(o.maxZoom,y):y,y===1/0)return{center:i.getCenter(),zoom:y};var E=m.subtract(u).divideBy(2),B=this.project(i.getSouthWest(),y),W=this.project(i.getNorthEast(),y),tt=this.unproject(B.add(W).divideBy(2).add(E),y);return{center:tt,zoom:y}},fitBounds:function(i,o){if(i=st(i),!i.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(i,o);return this.setView(u.center,u.zoom,o)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,o){return this.setView(i,this._zoom,{pan:o})},panBy:function(i,o){if(i=q(i).round(),o=o||{},!i.x&&!i.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new _h,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){kt(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,u,o.duration||.25,o.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,o,u){if(u=u||{},u.animate===!1||!Ut.any3d)return this.setView(i,o,u);this._stop();var m=this.project(this.getCenter()),y=this.project(i),E=this.getSize(),B=this._zoom;i=xt(i),o=o===void 0?B:o;var W=Math.max(E.x,E.y),tt=W*this.getZoomScale(B,o),ft=y.distanceTo(m)||1,Rt=1.42,Kt=Rt*Rt;function he(ke){var Fa=ke?-1:1,Sm=ke?tt:W,bm=tt*tt-W*W+Fa*Kt*Kt*ft*ft,Em=2*Sm*Kt*ft,yl=bm/Em,$h=Math.sqrt(yl*yl+1)-yl,Tm=$h<1e-9?-18:Math.log($h);return Tm}function hn(ke){return(Math.exp(ke)-Math.exp(-ke))/2}function qe(ke){return(Math.exp(ke)+Math.exp(-ke))/2}function In(ke){return hn(ke)/qe(ke)}var gn=he(0);function Hs(ke){return W*(qe(gn)/qe(gn+Rt*ke))}function vm(ke){return W*(qe(gn)*In(gn+Rt*ke)-hn(gn))/Kt}function xm(ke){return 1-Math.pow(1-ke,1.5)}var ym=Date.now(),Kh=(he(1)-gn)/Rt,Mm=u.duration?1e3*u.duration:1e3*Kh*.8;function Yh(){var ke=(Date.now()-ym)/Mm,Fa=xm(ke)*Kh;ke<=1?(this._flyToFrame=G(Yh,this),this._move(this.unproject(m.add(y.subtract(m).multiplyBy(vm(Fa)/ft)),B),this.getScaleZoom(W/Hs(Fa),B),{flyTo:!0})):this._move(i,o)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),Yh.call(this),this},flyToBounds:function(i,o){var u=this._getBoundsCenterZoom(i,o);return this.flyTo(u.center,u.zoom,o)},setMaxBounds:function(i){return i=st(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var o=this.options.minZoom;return this.options.minZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var o=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,o){this._enforcingBounds=!0;var u=this.getCenter(),m=this._limitCenter(u,this._zoom,st(i));return u.equals(m)||this.panTo(m,o),this._enforcingBounds=!1,this},panInside:function(i,o){o=o||{};var u=q(o.paddingTopLeft||o.padding||[0,0]),m=q(o.paddingBottomRight||o.padding||[0,0]),y=this.project(this.getCenter()),E=this.project(i),B=this.getPixelBounds(),W=Mt([B.min.add(u),B.max.subtract(m)]),tt=W.getSize();if(!W.contains(E)){this._enforcingBounds=!0;var ft=E.subtract(W.getCenter()),Rt=W.extend(E).getSize().subtract(tt);y.x+=ft.x<0?-Rt.x:Rt.x,y.y+=ft.y<0?-Rt.y:Rt.y,this.panTo(this.unproject(y),o),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=r({animate:!1,pan:!0},i===!0?{animate:!0}:i);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),m=o.divideBy(2).round(),y=u.divideBy(2).round(),E=m.subtract(y);return!E.x&&!E.y?this:(i.animate&&i.pan?this.panBy(E):(i.pan&&this._rawPanBy(E),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=r({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,u,i):navigator.geolocation.getCurrentPosition(o,u,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var o=i.code,u=i.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var o=i.coords.latitude,u=i.coords.longitude,m=new ut(o,u),y=m.toBounds(i.coords.accuracy*2),E=this._locateOptions;if(E.setView){var B=this.getBoundsZoom(y);this.setView(m,E.maxZoom?Math.min(B,E.maxZoom):B)}var W={latlng:m,bounds:y,timestamp:i.timestamp};for(var tt in i.coords)typeof i.coords[tt]=="number"&&(W[tt]=i.coords[tt]);this.fire("locationfound",W)}},addHandler:function(i,o){if(!o)return this;var u=this[i]=new o(this);return this._handlers.push(u),this.options[i]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),$t(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&($(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)$t(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,o){var u="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),m=fe("div",u,o||this._mapPane);return i&&(this._panes[i]=m),m},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),o=this.unproject(i.getBottomLeft()),u=this.unproject(i.getTopRight());return new J(o,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,o,u){i=st(i),u=q(u||[0,0]);var m=this.getZoom()||0,y=this.getMinZoom(),E=this.getMaxZoom(),B=i.getNorthWest(),W=i.getSouthEast(),tt=this.getSize().subtract(u),ft=Mt(this.project(W,m),this.project(B,m)).getSize(),Rt=Ut.any3d?this.options.zoomSnap:1,Kt=tt.x/ft.x,he=tt.y/ft.y,hn=o?Math.max(Kt,he):Math.min(Kt,he);return m=this.getScaleZoom(hn,m),Rt&&(m=Math.round(m/(Rt/100))*(Rt/100),m=o?Math.ceil(m/Rt)*Rt:Math.floor(m/Rt)*Rt),Math.max(y,Math.min(E,m))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new j(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,o){var u=this._getTopLeftPoint(i,o);return new ot(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,o){var u=this.options.crs;return o=o===void 0?this._zoom:o,u.scale(i)/u.scale(o)},getScaleZoom:function(i,o){var u=this.options.crs;o=o===void 0?this._zoom:o;var m=u.zoom(i*u.scale(o));return isNaN(m)?1/0:m},project:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(xt(i),o)},unproject:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(q(i),o)},layerPointToLatLng:function(i){var o=q(i).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(i){var o=this.project(xt(i))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(xt(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(st(i))},distance:function(i,o){return this.options.crs.distance(xt(i),xt(o))},containerPointToLayerPoint:function(i){return q(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return q(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var o=this.containerPointToLayerPoint(q(i));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(xt(i)))},mouseEventToContainerPoint:function(i){return mh(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var o=this._container=Ee(i);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");se(o,"scroll",this._onScroll,this),this._containerId=h(o)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Ut.any3d,kt(i,"leaflet-container"+(Ut.touch?" leaflet-touch":"")+(Ut.retina?" leaflet-retina":"")+(Ut.ielt9?" leaflet-oldie":"")+(Ut.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=ee(i,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Fe(this._mapPane,new j(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(kt(i.markerPane,"leaflet-zoom-hide"),kt(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,o,u){Fe(this._mapPane,new j(0,0));var m=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var y=this._zoom!==o;this._moveStart(y,u)._move(i,o)._moveEnd(y),this.fire("viewreset"),m&&this.fire("load")},_moveStart:function(i,o){return i&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(i,o,u,m){o===void 0&&(o=this._zoom);var y=this._zoom!==o;return this._zoom=o,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),m?u&&u.pinch&&this.fire("zoom",u):((y||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return $(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){Fe(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[h(this._container)]=this;var o=i?Te:se;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Ut.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){$(this._resizeRequest),this._resizeRequest=G(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,o){for(var u=[],m,y=o==="mouseout"||o==="mouseover",E=i.target||i.srcElement,B=!1;E;){if(m=this._targets[h(E)],m&&(o==="click"||o==="preclick")&&this._draggableMoved(m)){B=!0;break}if(m&&m.listens(o,!0)&&(y&&!cl(E,i)||(u.push(m),y))||E===this._container)break;E=E.parentNode}return!u.length&&!B&&!y&&this.listens(o,!0)&&(u=[this]),u},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var o=i.target||i.srcElement;if(!(!this._loaded||o._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(o))){var u=i.type;u==="mousedown"&&il(o),this._fireDOMEvent(i,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,o,u){if(i.type==="click"){var m=r({},i);m.type="preclick",this._fireDOMEvent(m,m.type,u)}var y=this._findEventTargets(i,o);if(u){for(var E=[],B=0;B<u.length;B++)u[B].listens(o,!0)&&E.push(u[B]);y=E.concat(y)}if(y.length){o==="contextmenu"&&tn(i);var W=y[0],tt={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var ft=W.getLatLng&&(!W._radius||W._radius<=10);tt.containerPoint=ft?this.latLngToContainerPoint(W.getLatLng()):this.mouseEventToContainerPoint(i),tt.layerPoint=this.containerPointToLayerPoint(tt.containerPoint),tt.latlng=ft?W.getLatLng():this.layerPointToLatLng(tt.layerPoint)}for(B=0;B<y.length;B++)if(y[B].fire(o,tt,!0),tt.originalEvent._stopped||y[B].options.bubblingMouseEvents===!1&&P(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,o=this._handlers.length;i<o;i++)this._handlers[i].disable()},whenReady:function(i,o){return this._loaded?i.call(o||this,{target:this}):this.on("load",i,o),this},_getMapPanePos:function(){return is(this._mapPane)||new j(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,o){var u=i&&o!==void 0?this._getNewPixelOrigin(i,o):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,o){var u=this.getSize()._divideBy(2);return this.project(i,o)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,o,u){var m=this._getNewPixelOrigin(u,o);return this.project(i,o)._subtract(m)},_latLngBoundsToNewLayerBounds:function(i,o,u){var m=this._getNewPixelOrigin(u,o);return Mt([this.project(i.getSouthWest(),o)._subtract(m),this.project(i.getNorthWest(),o)._subtract(m),this.project(i.getSouthEast(),o)._subtract(m),this.project(i.getNorthEast(),o)._subtract(m)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,o,u){if(!u)return i;var m=this.project(i,o),y=this.getSize().divideBy(2),E=new ot(m.subtract(y),m.add(y)),B=this._getBoundsOffset(E,u,o);return Math.abs(B.x)<=1&&Math.abs(B.y)<=1?i:this.unproject(m.add(B),o)},_limitOffset:function(i,o){if(!o)return i;var u=this.getPixelBounds(),m=new ot(u.min.add(i),u.max.add(i));return i.add(this._getBoundsOffset(m,o))},_getBoundsOffset:function(i,o,u){var m=Mt(this.project(o.getNorthEast(),u),this.project(o.getSouthWest(),u)),y=m.min.subtract(i.min),E=m.max.subtract(i.max),B=this._rebound(y.x,-E.x),W=this._rebound(y.y,-E.y);return new j(B,W)},_rebound:function(i,o){return i+o>0?Math.round(i-o)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(o))},_limitZoom:function(i){var o=this.getMinZoom(),u=this.getMaxZoom(),m=Ut.any3d?this.options.zoomSnap:1;return m&&(i=Math.round(i/m)*m),Math.max(o,Math.min(u,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ye(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,o){var u=this._getCenterOffset(i)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,o),!0)},_createAnimProxy:function(){var i=this._proxy=fe("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(o){var u=Je,m=this._proxy.style[u];ns(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),m===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){$t(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),o=this.getZoom();ns(this._proxy,this.project(i,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,o,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var m=this.getZoomScale(o),y=this._getCenterOffset(i)._divideBy(1-1/m);return u.animate!==!0&&!this.getSize().contains(y)?!1:(G(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(i,o,!0)},this),!0)},_animateZoom:function(i,o,u,m){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=o,kt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:o,noUpdate:m}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ye(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Up(i,o){return new ge(i,o)}var Gn=z.extend({options:{position:"topright"},initialize:function(i){S(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var o=this._map;return o&&o.removeControl(this),this.options.position=i,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var o=this._container=this.onAdd(i),u=this.getPosition(),m=i._controlCorners[u];return kt(o,"leaflet-control"),u.indexOf("bottom")!==-1?m.insertBefore(o,m.firstChild):m.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?($t(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Hr=function(i){return new Gn(i)};ge.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},o="leaflet-",u=this._controlContainer=fe("div",o+"control-container",this._container);function m(y,E){var B=o+y+" "+o+E;i[y+E]=fe("div",B,u)}m("top","left"),m("top","right"),m("bottom","left"),m("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)$t(this._controlCorners[i]);$t(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var vh=Gn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,o,u,m){return u<m?-1:m<u?1:0}},initialize:function(i,o,u){S(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var m in i)this._addLayer(i[m],m);for(m in o)this._addLayer(o[m],m,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Gn.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,o){return this._addLayer(i,o),this._map?this._update():this},addOverlay:function(i,o){return this._addLayer(i,o,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var o=this._getLayer(h(i));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){kt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(kt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):ye(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ye(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",o=this._container=fe("div",i),u=this.options.collapsed;o.setAttribute("aria-haspopup",!0),zr(o),ll(o);var m=this._section=fe("section",i+"-list");u&&(this._map.on("click",this.collapse,this),se(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var y=this._layersLink=fe("a",i+"-toggle",o);y.href="#",y.title="Layers",y.setAttribute("role","button"),se(y,{keydown:function(E){E.keyCode===13&&this._expandSafely()},click:function(E){tn(E),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=fe("div",i+"-base",m),this._separator=fe("div",i+"-separator",m),this._overlaysList=fe("div",i+"-overlays",m),o.appendChild(m)},_getLayer:function(i){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&h(this._layers[o].layer)===i)return this._layers[o]},_addLayer:function(i,o,u){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:o,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(m,y){return this.options.sortFunction(m.layer,y.layer,m.name,y.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Rn(this._baseLayersList),Rn(this._overlaysList),this._layerControlInputs=[];var i,o,u,m,y=0;for(u=0;u<this._layers.length;u++)m=this._layers[u],this._addItem(m),o=o||m.overlay,i=i||!m.overlay,y+=m.overlay?0:1;return this.options.hideSingleBase&&(i=i&&y>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=o&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var o=this._getLayer(h(i.target)),u=o.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;u&&this._map.fire(u,o)},_createRadioElement:function(i,o){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(o?' checked="checked"':"")+"/>",m=document.createElement("div");return m.innerHTML=u,m.firstChild},_addItem:function(i){var o=document.createElement("label"),u=this._map.hasLayer(i.layer),m;i.overlay?(m=document.createElement("input"),m.type="checkbox",m.className="leaflet-control-layers-selector",m.defaultChecked=u):m=this._createRadioElement("leaflet-base-layers_"+h(this),u),this._layerControlInputs.push(m),m.layerId=h(i.layer),se(m,"click",this._onInputClick,this);var y=document.createElement("span");y.innerHTML=" "+i.name;var E=document.createElement("span");o.appendChild(E),E.appendChild(m),E.appendChild(y);var B=i.overlay?this._overlaysList:this._baseLayersList;return B.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,o,u,m=[],y=[];this._handlingClick=!0;for(var E=i.length-1;E>=0;E--)o=i[E],u=this._getLayer(o.layerId).layer,o.checked?m.push(u):o.checked||y.push(u);for(E=0;E<y.length;E++)this._map.hasLayer(y[E])&&this._map.removeLayer(y[E]);for(E=0;E<m.length;E++)this._map.hasLayer(m[E])||this._map.addLayer(m[E]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,o,u,m=this._map.getZoom(),y=i.length-1;y>=0;y--)o=i[y],u=this._getLayer(o.layerId).layer,o.disabled=u.options.minZoom!==void 0&&m<u.options.minZoom||u.options.maxZoom!==void 0&&m>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,se(i,"click",tn),this.expand();var o=this;setTimeout(function(){Te(i,"click",tn),o._preventClick=!1})}}),Op=function(i,o,u){return new vh(i,o,u)},hl=Gn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var o="leaflet-control-zoom",u=fe("div",o+" leaflet-bar"),m=this.options;return this._zoomInButton=this._createButton(m.zoomInText,m.zoomInTitle,o+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(m.zoomOutText,m.zoomOutTitle,o+"-out",u,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,o,u,m,y){var E=fe("a",u,m);return E.innerHTML=i,E.href="#",E.title=o,E.setAttribute("role","button"),E.setAttribute("aria-label",o),zr(E),se(E,"click",rs),se(E,"click",y,this),se(E,"click",this._refocusOnMap,this),E},_updateDisabled:function(){var i=this._map,o="leaflet-disabled";ye(this._zoomInButton,o),ye(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(kt(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(kt(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});ge.mergeOptions({zoomControl:!0}),ge.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new hl,this.addControl(this.zoomControl))});var Bp=function(i){return new hl(i)},xh=Gn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var o="leaflet-control-scale",u=fe("div",o),m=this.options;return this._addScales(m,o+"-line",u),i.on(m.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),u},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,o,u){i.metric&&(this._mScale=fe("div",o,u)),i.imperial&&(this._iScale=fe("div",o,u))},_update:function(){var i=this._map,o=i.getSize().y/2,u=i.distance(i.containerPointToLatLng([0,o]),i.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(u)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var o=this._getRoundNum(i),u=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,u,o/i)},_updateImperial:function(i){var o=i*3.2808399,u,m,y;o>5280?(u=o/5280,m=this._getRoundNum(u),this._updateScale(this._iScale,m+" mi",m/u)):(y=this._getRoundNum(o),this._updateScale(this._iScale,y+" ft",y/o))},_updateScale:function(i,o,u){i.style.width=Math.round(this.options.maxWidth*u)+"px",i.innerHTML=o},_getRoundNum:function(i){var o=Math.pow(10,(Math.floor(i)+"").length-1),u=i/o;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,o*u}}),Fp=function(i){return new xh(i)},kp='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ul=Gn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Ut.inlineSvg?kp+" ":"")+"Leaflet</a>"},initialize:function(i){S(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=fe("div","leaflet-control-attribution"),zr(this._container);for(var o in i._layers)i._layers[o].getAttribution&&this.addAttribution(i._layers[o].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var o in this._attributions)this._attributions[o]&&i.push(o);var u=[];this.options.prefix&&u.push(this.options.prefix),i.length&&u.push(i.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});ge.mergeOptions({attributionControl:!0}),ge.addInitHook(function(){this.options.attributionControl&&new ul().addTo(this)});var zp=function(i){return new ul(i)};Gn.Layers=vh,Gn.Zoom=hl,Gn.Scale=xh,Gn.Attribution=ul,Hr.layers=Op,Hr.zoom=Bp,Hr.scale=Fp,Hr.attribution=zp;var Jn=z.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Jn.addTo=function(i,o){return i.addHandler(o,this),this};var Hp={Events:Y},yh=Ut.touch?"touchstart mousedown":"mousedown",Pi=lt.extend({options:{clickTolerance:3},initialize:function(i,o,u,m){S(this,m),this._element=i,this._dragStartTarget=o||i,this._preventOutline=u},enable:function(){this._enabled||(se(this._dragStartTarget,yh,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Pi._dragging===this&&this.finishDrag(!0),Te(this._dragStartTarget,yh,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Qi(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Pi._dragging===this&&this.finishDrag();return}if(!(Pi._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Pi._dragging=this,this._preventOutline&&il(this._element),tl(),Br(),!this._moving)){this.fire("down");var o=i.touches?i.touches[0]:i,u=dh(this._element);this._startPoint=new j(o.clientX,o.clientY),this._startPos=is(this._element),this._parentScale=sl(u);var m=i.type==="mousedown";se(document,m?"mousemove":"touchmove",this._onMove,this),se(document,m?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var o=i.touches&&i.touches.length===1?i.touches[0]:i,u=new j(o.clientX,o.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,tn(i),this._moved||(this.fire("dragstart"),this._moved=!0,kt(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),kt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),Fe(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){ye(document.body,"leaflet-dragging"),this._lastTarget&&(ye(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Te(document,"mousemove touchmove",this._onMove,this),Te(document,"mouseup touchend touchcancel",this._onUp,this),el(),Fr();var o=this._moved&&this._moving;this._moving=!1,Pi._dragging=!1,o&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function Mh(i,o,u){var m,y=[1,4,2,8],E,B,W,tt,ft,Rt,Kt,he;for(E=0,Rt=i.length;E<Rt;E++)i[E]._code=as(i[E],o);for(W=0;W<4;W++){for(Kt=y[W],m=[],E=0,Rt=i.length,B=Rt-1;E<Rt;B=E++)tt=i[E],ft=i[B],tt._code&Kt?ft._code&Kt||(he=Aa(ft,tt,Kt,o,u),he._code=as(he,o),m.push(he)):(ft._code&Kt&&(he=Aa(ft,tt,Kt,o,u),he._code=as(he,o),m.push(he)),m.push(tt));i=m}return i}function Sh(i,o){var u,m,y,E,B,W,tt,ft,Rt;if(!i||i.length===0)throw new Error("latlngs not passed");Cn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Kt=xt([0,0]),he=st(i),hn=he.getNorthWest().distanceTo(he.getSouthWest())*he.getNorthEast().distanceTo(he.getNorthWest());hn<1700&&(Kt=dl(i));var qe=i.length,In=[];for(u=0;u<qe;u++){var gn=xt(i[u]);In.push(o.project(xt([gn.lat-Kt.lat,gn.lng-Kt.lng])))}for(W=tt=ft=0,u=0,m=qe-1;u<qe;m=u++)y=In[u],E=In[m],B=y.y*E.x-E.y*y.x,tt+=(y.x+E.x)*B,ft+=(y.y+E.y)*B,W+=B*3;W===0?Rt=In[0]:Rt=[tt/W,ft/W];var Hs=o.unproject(q(Rt));return xt([Hs.lat+Kt.lat,Hs.lng+Kt.lng])}function dl(i){for(var o=0,u=0,m=0,y=0;y<i.length;y++){var E=xt(i[y]);o+=E.lat,u+=E.lng,m++}return xt([o/m,u/m])}var Gp={__proto__:null,clipPolygon:Mh,polygonCenter:Sh,centroid:dl};function bh(i,o){if(!o||!i.length)return i.slice();var u=o*o;return i=jp(i,u),i=Wp(i,u),i}function Eh(i,o,u){return Math.sqrt(Gr(i,o,u,!0))}function Vp(i,o,u){return Gr(i,o,u)}function Wp(i,o){var u=i.length,m=typeof Uint8Array<"u"?Uint8Array:Array,y=new m(u);y[0]=y[u-1]=1,fl(i,y,o,0,u-1);var E,B=[];for(E=0;E<u;E++)y[E]&&B.push(i[E]);return B}function fl(i,o,u,m,y){var E=0,B,W,tt;for(W=m+1;W<=y-1;W++)tt=Gr(i[W],i[m],i[y],!0),tt>E&&(B=W,E=tt);E>u&&(o[B]=1,fl(i,o,u,m,B),fl(i,o,u,B,y))}function jp(i,o){for(var u=[i[0]],m=1,y=0,E=i.length;m<E;m++)Xp(i[m],i[y])>o&&(u.push(i[m]),y=m);return y<E-1&&u.push(i[E-1]),u}var Th;function wh(i,o,u,m,y){var E=m?Th:as(i,u),B=as(o,u),W,tt,ft;for(Th=B;;){if(!(E|B))return[i,o];if(E&B)return!1;W=E||B,tt=Aa(i,o,W,u,y),ft=as(tt,u),W===E?(i=tt,E=ft):(o=tt,B=ft)}}function Aa(i,o,u,m,y){var E=o.x-i.x,B=o.y-i.y,W=m.min,tt=m.max,ft,Rt;return u&8?(ft=i.x+E*(tt.y-i.y)/B,Rt=tt.y):u&4?(ft=i.x+E*(W.y-i.y)/B,Rt=W.y):u&2?(ft=tt.x,Rt=i.y+B*(tt.x-i.x)/E):u&1&&(ft=W.x,Rt=i.y+B*(W.x-i.x)/E),new j(ft,Rt,y)}function as(i,o){var u=0;return i.x<o.min.x?u|=1:i.x>o.max.x&&(u|=2),i.y<o.min.y?u|=4:i.y>o.max.y&&(u|=8),u}function Xp(i,o){var u=o.x-i.x,m=o.y-i.y;return u*u+m*m}function Gr(i,o,u,m){var y=o.x,E=o.y,B=u.x-y,W=u.y-E,tt=B*B+W*W,ft;return tt>0&&(ft=((i.x-y)*B+(i.y-E)*W)/tt,ft>1?(y=u.x,E=u.y):ft>0&&(y+=B*ft,E+=W*ft)),B=i.x-y,W=i.y-E,m?B*B+W*W:new j(y,E)}function Cn(i){return!b(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Ah(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Cn(i)}function Lh(i,o){var u,m,y,E,B,W,tt,ft;if(!i||i.length===0)throw new Error("latlngs not passed");Cn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Rt=xt([0,0]),Kt=st(i),he=Kt.getNorthWest().distanceTo(Kt.getSouthWest())*Kt.getNorthEast().distanceTo(Kt.getNorthWest());he<1700&&(Rt=dl(i));var hn=i.length,qe=[];for(u=0;u<hn;u++){var In=xt(i[u]);qe.push(o.project(xt([In.lat-Rt.lat,In.lng-Rt.lng])))}for(u=0,m=0;u<hn-1;u++)m+=qe[u].distanceTo(qe[u+1])/2;if(m===0)ft=qe[0];else for(u=0,E=0;u<hn-1;u++)if(B=qe[u],W=qe[u+1],y=B.distanceTo(W),E+=y,E>m){tt=(E-m)/y,ft=[W.x-tt*(W.x-B.x),W.y-tt*(W.y-B.y)];break}var gn=o.unproject(q(ft));return xt([gn.lat+Rt.lat,gn.lng+Rt.lng])}var Zp={__proto__:null,simplify:bh,pointToSegmentDistance:Eh,closestPointOnSegment:Vp,clipSegment:wh,_getEdgeIntersection:Aa,_getBitCode:as,_sqClosestPointOnSegment:Gr,isFlat:Cn,_flat:Ah,polylineCenter:Lh},pl={project:function(i){return new j(i.lng,i.lat)},unproject:function(i){return new ut(i.y,i.x)},bounds:new ot([-180,-90],[180,90])},ml={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ot([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var o=Math.PI/180,u=this.R,m=i.lat*o,y=this.R_MINOR/u,E=Math.sqrt(1-y*y),B=E*Math.sin(m),W=Math.tan(Math.PI/4-m/2)/Math.pow((1-B)/(1+B),E/2);return m=-u*Math.log(Math.max(W,1e-10)),new j(i.lng*o*u,m)},unproject:function(i){for(var o=180/Math.PI,u=this.R,m=this.R_MINOR/u,y=Math.sqrt(1-m*m),E=Math.exp(-i.y/u),B=Math.PI/2-2*Math.atan(E),W=0,tt=.1,ft;W<15&&Math.abs(tt)>1e-7;W++)ft=y*Math.sin(B),ft=Math.pow((1-ft)/(1+ft),y/2),tt=Math.PI/2-2*Math.atan(E*ft)-B,B+=tt;return new ut(B*o,i.x*o/u)}},qp={__proto__:null,LonLat:pl,Mercator:ml,SphericalMercator:Bt},Kp=r({},zt,{code:"EPSG:3395",projection:ml,transformation:function(){var i=.5/(Math.PI*ml.R);return Z(i,.5,-i,.5)}()}),Rh=r({},zt,{code:"EPSG:4326",projection:pl,transformation:Z(1/180,1,-1/180,.5)}),Yp=r({},Pt,{projection:pl,transformation:Z(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,o){var u=o.lng-i.lng,m=o.lat-i.lat;return Math.sqrt(u*u+m*m)},infinite:!0});Pt.Earth=zt,Pt.EPSG3395=Kp,Pt.EPSG3857=Re,Pt.EPSG900913=H,Pt.EPSG4326=Rh,Pt.Simple=Yp;var Vn=lt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[h(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[h(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var o=i.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var u=this.getEvents();o.on(u,this),this.once("remove",function(){o.off(u,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});ge.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var o=h(i);return this._layers[o]?this:(this._layers[o]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var o=h(i);return this._layers[o]?(this._loaded&&i.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return h(i)in this._layers},eachLayer:function(i,o){for(var u in this._layers)i.call(o,this._layers[u]);return this},_addLayers:function(i){i=i?b(i)?i:[i]:[];for(var o=0,u=i.length;o<u;o++)this.addLayer(i[o])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[h(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var o=h(i);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,o=-1/0,u=this._getZoomSpan();for(var m in this._zoomBoundLayers){var y=this._zoomBoundLayers[m].options;i=y.minZoom===void 0?i:Math.min(i,y.minZoom),o=y.maxZoom===void 0?o:Math.max(o,y.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=i===1/0?void 0:i,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Os=Vn.extend({initialize:function(i,o){S(this,o),this._layers={};var u,m;if(i)for(u=0,m=i.length;u<m;u++)this.addLayer(i[u])},addLayer:function(i){var o=this.getLayerId(i);return this._layers[o]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var o=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(i){var o=typeof i=="number"?i:this.getLayerId(i);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var o=Array.prototype.slice.call(arguments,1),u,m;for(u in this._layers)m=this._layers[u],m[i]&&m[i].apply(m,o);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,o){for(var u in this._layers)i.call(o,this._layers[u]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return h(i)}}),$p=function(i,o){return new Os(i,o)},hi=Os.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Os.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Os.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new J;for(var o in this._layers){var u=this._layers[o];i.extend(u.getBounds?u.getBounds():u.getLatLng())}return i}}),Jp=function(i,o){return new hi(i,o)},Bs=z.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){S(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,o){var u=this._getIconUrl(i);if(!u){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var m=this._createImg(u,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(m,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(m.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),m},_setIconStyles:function(i,o){var u=this.options,m=u[o+"Size"];typeof m=="number"&&(m=[m,m]);var y=q(m),E=q(o==="shadow"&&u.shadowAnchor||u.iconAnchor||y&&y.divideBy(2,!0));i.className="leaflet-marker-"+o+" "+(u.className||""),E&&(i.style.marginLeft=-E.x+"px",i.style.marginTop=-E.y+"px"),y&&(i.style.width=y.x+"px",i.style.height=y.y+"px")},_createImg:function(i,o){return o=o||document.createElement("img"),o.src=i,o},_getIconUrl:function(i){return Ut.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function Qp(i){return new Bs(i)}var Vr=Bs.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Vr.imagePath!="string"&&(Vr.imagePath=this._detectIconPath()),(this.options.imagePath||Vr.imagePath)+Bs.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var o=function(u,m,y){var E=m.exec(u);return E&&E[y]};return i=o(i,/^url\((['"])?(.+)\1\)$/,2),i&&o(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=fe("div","leaflet-default-icon-path",document.body),o=ee(i,"background-image")||ee(i,"backgroundImage");if(document.body.removeChild(i),o=this._stripUrl(o),o)return o;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),Ph=Jn.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Pi(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),kt(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ye(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var o=this._marker,u=o._map,m=this._marker.options.autoPanSpeed,y=this._marker.options.autoPanPadding,E=is(o._icon),B=u.getPixelBounds(),W=u.getPixelOrigin(),tt=Mt(B.min._subtract(W).add(y),B.max._subtract(W).subtract(y));if(!tt.contains(E)){var ft=q((Math.max(tt.max.x,E.x)-tt.max.x)/(B.max.x-tt.max.x)-(Math.min(tt.min.x,E.x)-tt.min.x)/(B.min.x-tt.min.x),(Math.max(tt.max.y,E.y)-tt.max.y)/(B.max.y-tt.max.y)-(Math.min(tt.min.y,E.y)-tt.min.y)/(B.min.y-tt.min.y)).multiplyBy(m);u.panBy(ft,{animate:!1}),this._draggable._newPos._add(ft),this._draggable._startPos._add(ft),Fe(o._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=G(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&($(this._panRequest),this._panRequest=G(this._adjustPan.bind(this,i)))},_onDrag:function(i){var o=this._marker,u=o._shadow,m=is(o._icon),y=o._map.layerPointToLatLng(m);u&&Fe(u,m),o._latlng=y,i.latlng=y,i.oldLatLng=this._oldLatLng,o.fire("move",i).fire("drag",i)},_onDragEnd:function(i){$(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),La=Vn.extend({options:{icon:new Vr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,o){S(this,o),this._latlng=xt(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var o=this._latlng;return this._latlng=xt(i),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=i.icon.createIcon(this._icon),m=!1;u!==this._icon&&(this._icon&&this._removeIcon(),m=!0,i.title&&(u.title=i.title),u.tagName==="IMG"&&(u.alt=i.alt||"")),kt(u,o),i.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&se(u,"focus",this._panOnFocus,this);var y=i.icon.createShadow(this._shadow),E=!1;y!==this._shadow&&(this._removeShadow(),E=!0),y&&(kt(y,o),y.alt=""),this._shadow=y,i.opacity<1&&this._updateOpacity(),m&&this.getPane().appendChild(this._icon),this._initInteraction(),y&&E&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Te(this._icon,"focus",this._panOnFocus,this),$t(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&$t(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&Fe(this._icon,i),this._shadow&&Fe(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(kt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ph)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ph(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&an(this._icon,i),this._shadow&&an(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var o=this.options.icon.options,u=o.iconSize?q(o.iconSize):q(0,0),m=o.iconAnchor?q(o.iconAnchor):q(0,0);i.panInside(this._latlng,{paddingTopLeft:m,paddingBottomRight:u.subtract(m)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function tm(i,o){return new La(i,o)}var Ci=Vn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return S(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ra=Ci.extend({options:{fill:!0,radius:10},initialize:function(i,o){S(this,o),this._latlng=xt(i),this._radius=this.options.radius},setLatLng:function(i){var o=this._latlng;return this._latlng=xt(i),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var o=i&&i.radius||this._radius;return Ci.prototype.setStyle.call(this,i),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,o=this._radiusY||i,u=this._clickTolerance(),m=[i+u,o+u];this._pxBounds=new ot(this._point.subtract(m),this._point.add(m))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function em(i,o){return new Ra(i,o)}var gl=Ra.extend({initialize:function(i,o,u){if(typeof o=="number"&&(o=r({},u,{radius:o})),S(this,o),this._latlng=xt(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new J(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Ci.prototype.setStyle,_project:function(){var i=this._latlng.lng,o=this._latlng.lat,u=this._map,m=u.options.crs;if(m.distance===zt.distance){var y=Math.PI/180,E=this._mRadius/zt.R/y,B=u.project([o+E,i]),W=u.project([o-E,i]),tt=B.add(W).divideBy(2),ft=u.unproject(tt).lat,Rt=Math.acos((Math.cos(E*y)-Math.sin(o*y)*Math.sin(ft*y))/(Math.cos(o*y)*Math.cos(ft*y)))/y;(isNaN(Rt)||Rt===0)&&(Rt=E/Math.cos(Math.PI/180*o)),this._point=tt.subtract(u.getPixelOrigin()),this._radius=isNaN(Rt)?0:tt.x-u.project([ft,i-Rt]).x,this._radiusY=tt.y-B.y}else{var Kt=m.unproject(m.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(Kt).x}this._updateBounds()}});function nm(i,o,u){return new gl(i,o,u)}var ui=Ci.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,o){S(this,o),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var o=1/0,u=null,m=Gr,y,E,B=0,W=this._parts.length;B<W;B++)for(var tt=this._parts[B],ft=1,Rt=tt.length;ft<Rt;ft++){y=tt[ft-1],E=tt[ft];var Kt=m(i,y,E,!0);Kt<o&&(o=Kt,u=m(i,y,E))}return u&&(u.distance=Math.sqrt(o)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Lh(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,o){return o=o||this._defaultShape(),i=xt(i),o.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new J,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return Cn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var o=[],u=Cn(i),m=0,y=i.length;m<y;m++)u?(o[m]=xt(i[m]),this._bounds.extend(o[m])):o[m]=this._convertLatLngs(i[m]);return o},_project:function(){var i=new ot;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),o=new j(i,i);this._rawPxBounds&&(this._pxBounds=new ot([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(i,o,u){var m=i[0]instanceof ut,y=i.length,E,B;if(m){for(B=[],E=0;E<y;E++)B[E]=this._map.latLngToLayerPoint(i[E]),u.extend(B[E]);o.push(B)}else for(E=0;E<y;E++)this._projectLatlngs(i[E],o,u)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,u,m,y,E,B,W,tt;for(u=0,y=0,E=this._rings.length;u<E;u++)for(tt=this._rings[u],m=0,B=tt.length;m<B-1;m++)W=wh(tt[m],tt[m+1],i,m,!0),W&&(o[y]=o[y]||[],o[y].push(W[0]),(W[1]!==tt[m+1]||m===B-2)&&(o[y].push(W[1]),y++))}},_simplifyPoints:function(){for(var i=this._parts,o=this.options.smoothFactor,u=0,m=i.length;u<m;u++)i[u]=bh(i[u],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,o){var u,m,y,E,B,W,tt=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(u=0,E=this._parts.length;u<E;u++)for(W=this._parts[u],m=0,B=W.length,y=B-1;m<B;y=m++)if(!(!o&&m===0)&&Eh(i,W[y],W[m])<=tt)return!0;return!1}});function im(i,o){return new ui(i,o)}ui._flat=Ah;var Fs=ui.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Sh(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var o=ui.prototype._convertLatLngs.call(this,i),u=o.length;return u>=2&&o[0]instanceof ut&&o[0].equals(o[u-1])&&o.pop(),o},_setLatLngs:function(i){ui.prototype._setLatLngs.call(this,i),Cn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Cn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,o=this.options.weight,u=new j(o,o);if(i=new ot(i.min.subtract(u),i.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var m=0,y=this._rings.length,E;m<y;m++)E=Mh(this._rings[m],i,!0),E.length&&this._parts.push(E)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var o=!1,u,m,y,E,B,W,tt,ft;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(E=0,tt=this._parts.length;E<tt;E++)for(u=this._parts[E],B=0,ft=u.length,W=ft-1;B<ft;W=B++)m=u[B],y=u[W],m.y>i.y!=y.y>i.y&&i.x<(y.x-m.x)*(i.y-m.y)/(y.y-m.y)+m.x&&(o=!o);return o||ui.prototype._containsPoint.call(this,i,!0)}});function sm(i,o){return new Fs(i,o)}var di=hi.extend({initialize:function(i,o){S(this,o),this._layers={},i&&this.addData(i)},addData:function(i){var o=b(i)?i:i.features,u,m,y;if(o){for(u=0,m=o.length;u<m;u++)y=o[u],(y.geometries||y.geometry||y.features||y.coordinates)&&this.addData(y);return this}var E=this.options;if(E.filter&&!E.filter(i))return this;var B=Pa(i,E);return B?(B.feature=Da(i),B.defaultOptions=B.options,this.resetStyle(B),E.onEachFeature&&E.onEachFeature(i,B),this.addLayer(B)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=r({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(o){this._setLayerStyle(o,i)},this)},_setLayerStyle:function(i,o){i.setStyle&&(typeof o=="function"&&(o=o(i.feature)),i.setStyle(o))}});function Pa(i,o){var u=i.type==="Feature"?i.geometry:i,m=u?u.coordinates:null,y=[],E=o&&o.pointToLayer,B=o&&o.coordsToLatLng||_l,W,tt,ft,Rt;if(!m&&!u)return null;switch(u.type){case"Point":return W=B(m),Ch(E,i,W,o);case"MultiPoint":for(ft=0,Rt=m.length;ft<Rt;ft++)W=B(m[ft]),y.push(Ch(E,i,W,o));return new hi(y);case"LineString":case"MultiLineString":return tt=Ca(m,u.type==="LineString"?0:1,B),new ui(tt,o);case"Polygon":case"MultiPolygon":return tt=Ca(m,u.type==="Polygon"?1:2,B),new Fs(tt,o);case"GeometryCollection":for(ft=0,Rt=u.geometries.length;ft<Rt;ft++){var Kt=Pa({geometry:u.geometries[ft],type:"Feature",properties:i.properties},o);Kt&&y.push(Kt)}return new hi(y);case"FeatureCollection":for(ft=0,Rt=u.features.length;ft<Rt;ft++){var he=Pa(u.features[ft],o);he&&y.push(he)}return new hi(y);default:throw new Error("Invalid GeoJSON object.")}}function Ch(i,o,u,m){return i?i(o,u):new La(u,m&&m.markersInheritOptions&&m)}function _l(i){return new ut(i[1],i[0],i[2])}function Ca(i,o,u){for(var m=[],y=0,E=i.length,B;y<E;y++)B=o?Ca(i[y],o-1,u):(u||_l)(i[y]),m.push(B);return m}function vl(i,o){return i=xt(i),i.alt!==void 0?[g(i.lng,o),g(i.lat,o),g(i.alt,o)]:[g(i.lng,o),g(i.lat,o)]}function Ia(i,o,u,m){for(var y=[],E=0,B=i.length;E<B;E++)y.push(o?Ia(i[E],Cn(i[E])?0:o-1,u,m):vl(i[E],m));return!o&&u&&y.length>0&&y.push(y[0].slice()),y}function ks(i,o){return i.feature?r({},i.feature,{geometry:o}):Da(o)}function Da(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var xl={toGeoJSON:function(i){return ks(this,{type:"Point",coordinates:vl(this.getLatLng(),i)})}};La.include(xl),gl.include(xl),Ra.include(xl),ui.include({toGeoJSON:function(i){var o=!Cn(this._latlngs),u=Ia(this._latlngs,o?1:0,!1,i);return ks(this,{type:(o?"Multi":"")+"LineString",coordinates:u})}}),Fs.include({toGeoJSON:function(i){var o=!Cn(this._latlngs),u=o&&!Cn(this._latlngs[0]),m=Ia(this._latlngs,u?2:o?1:0,!0,i);return o||(m=[m]),ks(this,{type:(u?"Multi":"")+"Polygon",coordinates:m})}}),Os.include({toMultiPoint:function(i){var o=[];return this.eachLayer(function(u){o.push(u.toGeoJSON(i).geometry.coordinates)}),ks(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(i){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(i);var u=o==="GeometryCollection",m=[];return this.eachLayer(function(y){if(y.toGeoJSON){var E=y.toGeoJSON(i);if(u)m.push(E.geometry);else{var B=Da(E);B.type==="FeatureCollection"?m.push.apply(m,B.features):m.push(B)}}}),u?ks(this,{geometries:m,type:"GeometryCollection"}):{type:"FeatureCollection",features:m}}});function Ih(i,o){return new di(i,o)}var rm=Ih,Na=Vn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,o,u){this._url=i,this._bounds=st(o),S(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(kt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){$t(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&ci(this._image),this},bringToBack:function(){return this._map&&Pn(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=st(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",o=this._image=i?this._url:fe("img");if(kt(o,"leaflet-image-layer"),this._zoomAnimated&&kt(o,"leaflet-zoom-animated"),this.options.className&&kt(o,this.options.className),o.onselectstart=p,o.onmousemove=p,o.onload=l(this.fire,this,"load"),o.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(i){var o=this._map.getZoomScale(i.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;ns(this._image,u,o)},_reset:function(){var i=this._image,o=new ot(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=o.getSize();Fe(i,o.min),i.style.width=u.x+"px",i.style.height=u.y+"px"},_updateOpacity:function(){an(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),am=function(i,o,u){return new Na(i,o,u)},Dh=Na.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",o=this._image=i?this._url:fe("video");if(kt(o,"leaflet-image-layer"),this._zoomAnimated&&kt(o,"leaflet-zoom-animated"),this.options.className&&kt(o,this.options.className),o.onselectstart=p,o.onmousemove=p,o.onloadeddata=l(this.fire,this,"load"),i){for(var u=o.getElementsByTagName("source"),m=[],y=0;y<u.length;y++)m.push(u[y].src);this._url=u.length>0?m:[o.src];return}b(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var E=0;E<this._url.length;E++){var B=fe("source");B.src=this._url[E],o.appendChild(B)}}});function om(i,o,u){return new Dh(i,o,u)}var Nh=Na.extend({_initImage:function(){var i=this._image=this._url;kt(i,"leaflet-image-layer"),this._zoomAnimated&&kt(i,"leaflet-zoom-animated"),this.options.className&&kt(i,this.options.className),i.onselectstart=p,i.onmousemove=p}});function lm(i,o,u){return new Nh(i,o,u)}var Qn=Vn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,o){i&&(i instanceof ut||b(i))?(this._latlng=xt(i),S(this,o)):(S(this,i),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&an(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&an(this._container,1),this.bringToFront(),this.options.interactive&&(kt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(an(this._container,0),this._removeTimeout=setTimeout(l($t,void 0,this._container),200)):$t(this._container),this.options.interactive&&(ye(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=xt(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ci(this._container),this},bringToBack:function(){return this._map&&Pn(this._container),this},_prepareOpen:function(i){var o=this._source;if(!o._map)return!1;if(o instanceof hi){o=null;var u=this._source._layers;for(var m in u)if(u[m]._map){o=u[m];break}if(!o)return!1;this._source=o}if(!i)if(o.getCenter)i=o.getCenter();else if(o.getLatLng)i=o.getLatLng();else if(o.getBounds)i=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")i.innerHTML=o;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),o=q(this.options.offset),u=this._getAnchor();this._zoomAnimated?Fe(this._container,i.add(u)):o=o.add(i).add(u);var m=this._containerBottom=-o.y,y=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=m+"px",this._container.style.left=y+"px"}},_getAnchor:function(){return[0,0]}});ge.include({_initOverlay:function(i,o,u,m){var y=o;return y instanceof i||(y=new i(m).setContent(o)),u&&y.setLatLng(u),y}}),Vn.include({_initOverlay:function(i,o,u,m){var y=u;return y instanceof i?(S(y,m),y._source=this):(y=o&&!m?o:new i(m,this),y.setContent(u)),y}});var Ua=Qn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Qn.prototype.openOn.call(this,i)},onAdd:function(i){Qn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Ci||this._source.on("preclick",ss))},onRemove:function(i){Qn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Ci||this._source.off("preclick",ss))},getEvents:function(){var i=Qn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",o=this._container=fe("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=fe("div",i+"-content-wrapper",o);if(this._contentNode=fe("div",i+"-content",u),zr(o),ll(this._contentNode),se(o,"contextmenu",ss),this._tipContainer=fe("div",i+"-tip-container",o),this._tip=fe("div",i+"-tip",this._tipContainer),this.options.closeButton){var m=this._closeButton=fe("a",i+"-close-button",o);m.setAttribute("role","button"),m.setAttribute("aria-label","Close popup"),m.href="#close",m.innerHTML='<span aria-hidden="true">&#215;</span>',se(m,"click",function(y){tn(y),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,o=i.style;o.width="",o.whiteSpace="nowrap";var u=i.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),o.width=u+1+"px",o.whiteSpace="",o.height="";var m=i.offsetHeight,y=this.options.maxHeight,E="leaflet-popup-scrolled";y&&m>y?(o.height=y+"px",kt(i,E)):ye(i,E),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),u=this._getAnchor();Fe(this._container,o.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,o=parseInt(ee(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+o,m=this._containerWidth,y=new j(this._containerLeft,-u-this._containerBottom);y._add(is(this._container));var E=i.layerPointToContainerPoint(y),B=q(this.options.autoPanPadding),W=q(this.options.autoPanPaddingTopLeft||B),tt=q(this.options.autoPanPaddingBottomRight||B),ft=i.getSize(),Rt=0,Kt=0;E.x+m+tt.x>ft.x&&(Rt=E.x+m-ft.x+tt.x),E.x-Rt-W.x<0&&(Rt=E.x-W.x),E.y+u+tt.y>ft.y&&(Kt=E.y+u-ft.y+tt.y),E.y-Kt-W.y<0&&(Kt=E.y-W.y),(Rt||Kt)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([Rt,Kt]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),cm=function(i,o){return new Ua(i,o)};ge.mergeOptions({closePopupOnClick:!0}),ge.include({openPopup:function(i,o,u){return this._initOverlay(Ua,i,o,u).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Vn.include({bindPopup:function(i,o){return this._popup=this._initOverlay(Ua,this._popup,i,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof hi||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){rs(i);var o=i.layer||i.target;if(this._popup._source===o&&!(o instanceof Ci)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=o,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Oa=Qn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Qn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Qn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Qn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",o=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=fe("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var o,u,m=this._map,y=this._container,E=m.latLngToContainerPoint(m.getCenter()),B=m.layerPointToContainerPoint(i),W=this.options.direction,tt=y.offsetWidth,ft=y.offsetHeight,Rt=q(this.options.offset),Kt=this._getAnchor();W==="top"?(o=tt/2,u=ft):W==="bottom"?(o=tt/2,u=0):W==="center"?(o=tt/2,u=ft/2):W==="right"?(o=0,u=ft/2):W==="left"?(o=tt,u=ft/2):B.x<E.x?(W="right",o=0,u=ft/2):(W="left",o=tt+(Rt.x+Kt.x)*2,u=ft/2),i=i.subtract(q(o,u,!0)).add(Rt).add(Kt),ye(y,"leaflet-tooltip-right"),ye(y,"leaflet-tooltip-left"),ye(y,"leaflet-tooltip-top"),ye(y,"leaflet-tooltip-bottom"),kt(y,"leaflet-tooltip-"+W),Fe(y,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&an(this._container,i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(o)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),hm=function(i,o){return new Oa(i,o)};ge.include({openTooltip:function(i,o,u){return this._initOverlay(Oa,i,o,u).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Vn.include({bindTooltip:function(i,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Oa,this._tooltip,i,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var o=i?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[o](u),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof hi||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&(se(o,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),se(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var o=i.latlng,u,m;this._tooltip.options.sticky&&i.originalEvent&&(u=this._map.mouseEventToContainerPoint(i.originalEvent),m=this._map.containerPointToLayerPoint(u),o=this._map.layerPointToLatLng(m)),this._tooltip.setLatLng(o)}});var Uh=Bs.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var o=i&&i.tagName==="DIV"?i:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Rn(o),o.appendChild(u.html)):o.innerHTML=u.html!==!1?u.html:"",u.bgPos){var m=q(u.bgPos);o.style.backgroundPosition=-m.x+"px "+-m.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function um(i){return new Uh(i)}Bs.Default=Vr;var Wr=Vn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Ut.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){S(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),$t(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ci(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Pn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof j?i:new j(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var o=this.getPane().children,u=-i(-1/0,1/0),m=0,y=o.length,E;m<y;m++)E=o[m].style.zIndex,o[m]!==this._container&&E&&(u=i(u,+E));isFinite(u)&&(this.options.zIndex=u+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Ut.ielt9){an(this._container,this.options.opacity);var i=+new Date,o=!1,u=!1;for(var m in this._tiles){var y=this._tiles[m];if(!(!y.current||!y.loaded)){var E=Math.min(1,(i-y.loaded)/200);an(y.el,E),E<1?o=!0:(y.active?u=!0:this._onOpaqueTile(y),y.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),o&&($(this._fadeFrame),this._fadeFrame=G(this._updateOpacity,this))}},_onOpaqueTile:p,_initContainer:function(){this._container||(this._container=fe("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,o=this.options.maxZoom;if(i!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===i?(this._levels[u].el.style.zIndex=o-Math.abs(i-u),this._onUpdateLevel(u)):($t(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var m=this._levels[i],y=this._map;return m||(m=this._levels[i]={},m.el=fe("div","leaflet-tile-container leaflet-zoom-animated",this._container),m.el.style.zIndex=o,m.origin=y.project(y.unproject(y.getPixelOrigin()),i).round(),m.zoom=i,this._setZoomTransform(m,y.getCenter(),y.getZoom()),p(m.el.offsetWidth),this._onCreateLevel(m)),this._level=m,m}},_onUpdateLevel:p,_onRemoveLevel:p,_onCreateLevel:p,_pruneTiles:function(){if(this._map){var i,o,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)o=this._tiles[i],o.retain=o.current;for(i in this._tiles)if(o=this._tiles[i],o.current&&!o.active){var m=o.coords;this._retainParent(m.x,m.y,m.z,m.z-5)||this._retainChildren(m.x,m.y,m.z,m.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var o in this._tiles)this._tiles[o].coords.z===i&&this._removeTile(o)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)$t(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,o,u,m){var y=Math.floor(i/2),E=Math.floor(o/2),B=u-1,W=new j(+y,+E);W.z=+B;var tt=this._tileCoordsToKey(W),ft=this._tiles[tt];return ft&&ft.active?(ft.retain=!0,!0):(ft&&ft.loaded&&(ft.retain=!0),B>m?this._retainParent(y,E,B,m):!1)},_retainChildren:function(i,o,u,m){for(var y=2*i;y<2*i+2;y++)for(var E=2*o;E<2*o+2;E++){var B=new j(y,E);B.z=u+1;var W=this._tileCoordsToKey(B),tt=this._tiles[W];if(tt&&tt.active){tt.retain=!0;continue}else tt&&tt.loaded&&(tt.retain=!0);u+1<m&&this._retainChildren(y,E,u+1,m)}},_resetView:function(i){var o=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var o=this.options;return o.minNativeZoom!==void 0&&i<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<i?o.maxNativeZoom:i},_setView:function(i,o,u,m){var y=Math.round(o);this.options.maxZoom!==void 0&&y>this.options.maxZoom||this.options.minZoom!==void 0&&y<this.options.minZoom?y=void 0:y=this._clampZoom(y);var E=this.options.updateWhenZooming&&y!==this._tileZoom;(!m||E)&&(this._tileZoom=y,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),y!==void 0&&this._update(i),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(i,o)},_setZoomTransforms:function(i,o){for(var u in this._levels)this._setZoomTransform(this._levels[u],i,o)},_setZoomTransform:function(i,o,u){var m=this._map.getZoomScale(u,i.zoom),y=i.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(o,u)).round();Ut.any3d?ns(i.el,y,m):Fe(i.el,y)},_resetGrid:function(){var i=this._map,o=i.options.crs,u=this._tileSize=this.getTileSize(),m=this._tileZoom,y=this._map.getPixelWorldBounds(this._tileZoom);y&&(this._globalTileRange=this._pxBoundsToTileRange(y)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,o.wrapLng[0]],m).x/u.x),Math.ceil(i.project([0,o.wrapLng[1]],m).x/u.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([o.wrapLat[0],0],m).y/u.x),Math.ceil(i.project([o.wrapLat[1],0],m).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var o=this._map,u=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),m=o.getZoomScale(u,this._tileZoom),y=o.project(i,this._tileZoom).floor(),E=o.getSize().divideBy(m*2);return new ot(y.subtract(E),y.add(E))},_update:function(i){var o=this._map;if(o){var u=this._clampZoom(o.getZoom());if(i===void 0&&(i=o.getCenter()),this._tileZoom!==void 0){var m=this._getTiledPixelBounds(i),y=this._pxBoundsToTileRange(m),E=y.getCenter(),B=[],W=this.options.keepBuffer,tt=new ot(y.getBottomLeft().subtract([W,-W]),y.getTopRight().add([W,-W]));if(!(isFinite(y.min.x)&&isFinite(y.min.y)&&isFinite(y.max.x)&&isFinite(y.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ft in this._tiles){var Rt=this._tiles[ft].coords;(Rt.z!==this._tileZoom||!tt.contains(new j(Rt.x,Rt.y)))&&(this._tiles[ft].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(i,u);return}for(var Kt=y.min.y;Kt<=y.max.y;Kt++)for(var he=y.min.x;he<=y.max.x;he++){var hn=new j(he,Kt);if(hn.z=this._tileZoom,!!this._isValidTile(hn)){var qe=this._tiles[this._tileCoordsToKey(hn)];qe?qe.current=!0:B.push(hn)}}if(B.sort(function(gn,Hs){return gn.distanceTo(E)-Hs.distanceTo(E)}),B.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var In=document.createDocumentFragment();for(he=0;he<B.length;he++)this._addTile(B[he],In);this._level.el.appendChild(In)}}}},_isValidTile:function(i){var o=this._map.options.crs;if(!o.infinite){var u=this._globalTileRange;if(!o.wrapLng&&(i.x<u.min.x||i.x>u.max.x)||!o.wrapLat&&(i.y<u.min.y||i.y>u.max.y))return!1}if(!this.options.bounds)return!0;var m=this._tileCoordsToBounds(i);return st(this.options.bounds).overlaps(m)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var o=this._map,u=this.getTileSize(),m=i.scaleBy(u),y=m.add(u),E=o.unproject(m,i.z),B=o.unproject(y,i.z);return[E,B]},_tileCoordsToBounds:function(i){var o=this._tileCoordsToNwSe(i),u=new J(o[0],o[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var o=i.split(":"),u=new j(+o[0],+o[1]);return u.z=+o[2],u},_removeTile:function(i){var o=this._tiles[i];o&&($t(o.el),delete this._tiles[i],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){kt(i,"leaflet-tile");var o=this.getTileSize();i.style.width=o.x+"px",i.style.height=o.y+"px",i.onselectstart=p,i.onmousemove=p,Ut.ielt9&&this.options.opacity<1&&an(i,this.options.opacity)},_addTile:function(i,o){var u=this._getTilePos(i),m=this._tileCoordsToKey(i),y=this.createTile(this._wrapCoords(i),l(this._tileReady,this,i));this._initTile(y),this.createTile.length<2&&G(l(this._tileReady,this,i,null,y)),Fe(y,u),this._tiles[m]={el:y,coords:i,current:!0},o.appendChild(y),this.fire("tileloadstart",{tile:y,coords:i})},_tileReady:function(i,o,u){o&&this.fire("tileerror",{error:o,tile:u,coords:i});var m=this._tileCoordsToKey(i);u=this._tiles[m],u&&(u.loaded=+new Date,this._map._fadeAnimated?(an(u.el,0),$(this._fadeFrame),this._fadeFrame=G(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),o||(kt(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Ut.ielt9||!this._map._fadeAnimated?G(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var o=new j(this._wrapX?f(i.x,this._wrapX):i.x,this._wrapY?f(i.y,this._wrapY):i.y);return o.z=i.z,o},_pxBoundsToTileRange:function(i){var o=this.getTileSize();return new ot(i.min.unscaleBy(o).floor(),i.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function dm(i){return new Wr(i)}var zs=Wr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,o){this._url=i,o=S(this,o),o.detectRetina&&Ut.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,o){return this._url===i&&o===void 0&&(o=!0),this._url=i,o||this.redraw(),this},createTile:function(i,o){var u=document.createElement("img");return se(u,"load",l(this._tileOnLoad,this,o,u)),se(u,"error",l(this._tileOnError,this,o,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(i),u},getTileUrl:function(i){var o={r:Ut.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-i.y;this.options.tms&&(o.y=u),o["-y"]=u}return T(this._url,r(o,this.options))},_tileOnLoad:function(i,o){Ut.ielt9?setTimeout(l(i,this,null,o),0):i(null,o)},_tileOnError:function(i,o,u){var m=this.options.errorTileUrl;m&&o.getAttribute("src")!==m&&(o.src=m),i(u,o)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,o=this.options.maxZoom,u=this.options.zoomReverse,m=this.options.zoomOffset;return u&&(i=o-i),i+m},_getSubdomain:function(i){var o=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var i,o;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(o=this._tiles[i].el,o.onload=p,o.onerror=p,!o.complete)){o.src=F;var u=this._tiles[i].coords;$t(o),delete this._tiles[i],this.fire("tileabort",{tile:o,coords:u})}},_removeTile:function(i){var o=this._tiles[i];if(o)return o.el.setAttribute("src",F),Wr.prototype._removeTile.call(this,i)},_tileReady:function(i,o,u){if(!(!this._map||u&&u.getAttribute("src")===F))return Wr.prototype._tileReady.call(this,i,o,u)}});function Oh(i,o){return new zs(i,o)}var Bh=zs.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,o){this._url=i;var u=r({},this.defaultWmsParams);for(var m in o)m in this.options||(u[m]=o[m]);o=S(this,o);var y=o.detectRetina&&Ut.retina?2:1,E=this.getTileSize();u.width=E.x*y,u.height=E.y*y,this.wmsParams=u},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,zs.prototype.onAdd.call(this,i)},getTileUrl:function(i){var o=this._tileCoordsToNwSe(i),u=this._crs,m=Mt(u.project(o[0]),u.project(o[1])),y=m.min,E=m.max,B=(this._wmsVersion>=1.3&&this._crs===Rh?[y.y,y.x,E.y,E.x]:[y.x,y.y,E.x,E.y]).join(","),W=zs.prototype.getTileUrl.call(this,i);return W+v(this.wmsParams,W,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+B},setParams:function(i,o){return r(this.wmsParams,i),o||this.redraw(),this}});function fm(i,o){return new Bh(i,o)}zs.WMS=Bh,Oh.wms=fm;var fi=Vn.extend({options:{padding:.1},initialize:function(i){S(this,i),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),kt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,o){var u=this._map.getZoomScale(o,this._zoom),m=this._map.getSize().multiplyBy(.5+this.options.padding),y=this._map.project(this._center,o),E=m.multiplyBy(-u).add(y).subtract(this._map._getNewPixelOrigin(i,o));Ut.any3d?ns(this._container,E,u):Fe(this._container,E)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,o=this._map.getSize(),u=this._map.containerPointToLayerPoint(o.multiplyBy(-i)).round();this._bounds=new ot(u,u.add(o.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Fh=fi.extend({options:{tolerance:0},getEvents:function(){var i=fi.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){fi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");se(i,"mousemove",this._onMouseMove,this),se(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),se(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){$(this._redrawRequest),delete this._ctx,$t(this._container),Te(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var o in this._layers)i=this._layers[o],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){fi.prototype._update.call(this);var i=this._bounds,o=this._container,u=i.getSize(),m=Ut.retina?2:1;Fe(o,i.min),o.width=m*u.x,o.height=m*u.y,o.style.width=u.x+"px",o.style.height=u.y+"px",Ut.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){fi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[h(i)]=i;var o=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var o=i._order,u=o.next,m=o.prev;u?u.prev=m:this._drawLast=m,m?m.next=u:this._drawFirst=u,delete i._order,delete this._layers[h(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var o=i.options.dashArray.split(/[, ]+/),u=[],m,y;for(y=0;y<o.length;y++){if(m=Number(o[y]),isNaN(m))return;u.push(m)}i.options._dashArray=u}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||G(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var o=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ot,this._redrawBounds.extend(i._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(i._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var o=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,o=this._redrawBounds;if(this._ctx.save(),o){var u=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var m=this._drawFirst;m;m=m.next)i=m.layer,(!o||i._pxBounds&&i._pxBounds.intersects(o))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,o){if(this._drawing){var u,m,y,E,B=i._parts,W=B.length,tt=this._ctx;if(W){for(tt.beginPath(),u=0;u<W;u++){for(m=0,y=B[u].length;m<y;m++)E=B[u][m],tt[m?"lineTo":"moveTo"](E.x,E.y);o&&tt.closePath()}this._fillStroke(tt,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var o=i._point,u=this._ctx,m=Math.max(Math.round(i._radius),1),y=(Math.max(Math.round(i._radiusY),1)||m)/m;y!==1&&(u.save(),u.scale(1,y)),u.beginPath(),u.arc(o.x,o.y/y,m,0,Math.PI*2,!1),y!==1&&u.restore(),this._fillStroke(u,i)}},_fillStroke:function(i,o){var u=o.options;u.fill&&(i.globalAlpha=u.fillOpacity,i.fillStyle=u.fillColor||u.color,i.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(i.setLineDash&&i.setLineDash(o.options&&o.options._dashArray||[]),i.globalAlpha=u.opacity,i.lineWidth=u.weight,i.strokeStyle=u.color,i.lineCap=u.lineCap,i.lineJoin=u.lineJoin,i.stroke())},_onClick:function(i){for(var o=this._map.mouseEventToLayerPoint(i),u,m,y=this._drawFirst;y;y=y.next)u=y.layer,u.options.interactive&&u._containsPoint(o)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(u))&&(m=u);this._fireEvent(m?[m]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,o)}},_handleMouseOut:function(i){var o=this._hoveredLayer;o&&(ye(this._container,"leaflet-interactive"),this._fireEvent([o],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,o){if(!this._mouseHoverThrottled){for(var u,m,y=this._drawFirst;y;y=y.next)u=y.layer,u.options.interactive&&u._containsPoint(o)&&(m=u);m!==this._hoveredLayer&&(this._handleMouseOut(i),m&&(kt(this._container,"leaflet-interactive"),this._fireEvent([m],i,"mouseover"),this._hoveredLayer=m)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,o,u){this._map._fireDOMEvent(o,u||o.type,i)},_bringToFront:function(i){var o=i._order;if(o){var u=o.next,m=o.prev;if(u)u.prev=m;else return;m?m.next=u:u&&(this._drawFirst=u),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(i)}},_bringToBack:function(i){var o=i._order;if(o){var u=o.next,m=o.prev;if(m)m.next=u;else return;u?u.prev=m:m&&(this._drawLast=m),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(i)}}});function kh(i){return Ut.canvas?new Fh(i):null}var jr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),pm={_initContainer:function(){this._container=fe("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(fi.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var o=i._container=jr("shape");kt(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",i._path=jr("path"),o.appendChild(i._path),this._updateStyle(i),this._layers[h(i)]=i},_addPath:function(i){var o=i._container;this._container.appendChild(o),i.options.interactive&&i.addInteractiveTarget(o)},_removePath:function(i){var o=i._container;$t(o),i.removeInteractiveTarget(o),delete this._layers[h(i)]},_updateStyle:function(i){var o=i._stroke,u=i._fill,m=i.options,y=i._container;y.stroked=!!m.stroke,y.filled=!!m.fill,m.stroke?(o||(o=i._stroke=jr("stroke")),y.appendChild(o),o.weight=m.weight+"px",o.color=m.color,o.opacity=m.opacity,m.dashArray?o.dashStyle=b(m.dashArray)?m.dashArray.join(" "):m.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=m.lineCap.replace("butt","flat"),o.joinstyle=m.lineJoin):o&&(y.removeChild(o),i._stroke=null),m.fill?(u||(u=i._fill=jr("fill")),y.appendChild(u),u.color=m.fillColor||m.color,u.opacity=m.fillOpacity):u&&(y.removeChild(u),i._fill=null)},_updateCircle:function(i){var o=i._point.round(),u=Math.round(i._radius),m=Math.round(i._radiusY||u);this._setPath(i,i._empty()?"M0 0":"AL "+o.x+","+o.y+" "+u+","+m+" 0,"+65535*360)},_setPath:function(i,o){i._path.v=o},_bringToFront:function(i){ci(i._container)},_bringToBack:function(i){Pn(i._container)}},Ba=Ut.vml?jr:rt,Xr=fi.extend({_initContainer:function(){this._container=Ba("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ba("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){$t(this._container),Te(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){fi.prototype._update.call(this);var i=this._bounds,o=i.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,u.setAttribute("width",o.x),u.setAttribute("height",o.y)),Fe(u,i.min),u.setAttribute("viewBox",[i.min.x,i.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(i){var o=i._path=Ba("path");i.options.className&&kt(o,i.options.className),i.options.interactive&&kt(o,"leaflet-interactive"),this._updateStyle(i),this._layers[h(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){$t(i._path),i.removeInteractiveTarget(i._path),delete this._layers[h(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var o=i._path,u=i.options;o&&(u.stroke?(o.setAttribute("stroke",u.color),o.setAttribute("stroke-opacity",u.opacity),o.setAttribute("stroke-width",u.weight),o.setAttribute("stroke-linecap",u.lineCap),o.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?o.setAttribute("stroke-dasharray",u.dashArray):o.removeAttribute("stroke-dasharray"),u.dashOffset?o.setAttribute("stroke-dashoffset",u.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),u.fill?(o.setAttribute("fill",u.fillColor||u.color),o.setAttribute("fill-opacity",u.fillOpacity),o.setAttribute("fill-rule",u.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(i,o){this._setPath(i,ct(i._parts,o))},_updateCircle:function(i){var o=i._point,u=Math.max(Math.round(i._radius),1),m=Math.max(Math.round(i._radiusY),1)||u,y="a"+u+","+m+" 0 1,0 ",E=i._empty()?"M0 0":"M"+(o.x-u)+","+o.y+y+u*2+",0 "+y+-u*2+",0 ";this._setPath(i,E)},_setPath:function(i,o){i._path.setAttribute("d",o)},_bringToFront:function(i){ci(i._path)},_bringToBack:function(i){Pn(i._path)}});Ut.vml&&Xr.include(pm);function zh(i){return Ut.svg||Ut.vml?new Xr(i):null}ge.include({getRenderer:function(i){var o=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var o=this._paneRenderers[i];return o===void 0&&(o=this._createRenderer({pane:i}),this._paneRenderers[i]=o),o},_createRenderer:function(i){return this.options.preferCanvas&&kh(i)||zh(i)}});var Hh=Fs.extend({initialize:function(i,o){Fs.prototype.initialize.call(this,this._boundsToLatLngs(i),o)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=st(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function mm(i,o){return new Hh(i,o)}Xr.create=Ba,Xr.pointsToPath=ct,di.geometryToLayer=Pa,di.coordsToLatLng=_l,di.coordsToLatLngs=Ca,di.latLngToCoords=vl,di.latLngsToCoords=Ia,di.getFeature=ks,di.asFeature=Da,ge.mergeOptions({boxZoom:!0});var Gh=Jn.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){se(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Te(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){$t(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Br(),tl(),this._startPoint=this._map.mouseEventToContainerPoint(i),se(document,{contextmenu:rs,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=fe("div","leaflet-zoom-box",this._container),kt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var o=new ot(this._point,this._startPoint),u=o.getSize();Fe(this._box,o.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&($t(this._box),ye(this._container,"leaflet-crosshair")),Fr(),el(),Te(document,{contextmenu:rs,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var o=new J(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ge.addInitHook("addHandler","boxZoom",Gh),ge.mergeOptions({doubleClickZoom:!0});var Vh=Jn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var o=this._map,u=o.getZoom(),m=o.options.zoomDelta,y=i.originalEvent.shiftKey?u-m:u+m;o.options.doubleClickZoom==="center"?o.setZoom(y):o.setZoomAround(i.containerPoint,y)}});ge.addInitHook("addHandler","doubleClickZoom",Vh),ge.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Wh=Jn.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Pi(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}kt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ye(this._map._container,"leaflet-grab"),ye(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=st(this._map.options.maxBounds);this._offsetLimit=Mt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var o=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(o),this._prunePositions(o)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,o){return i-(i-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;i.x<o.min.x&&(i.x=this._viscousLimit(i.x,o.min.x)),i.y<o.min.y&&(i.y=this._viscousLimit(i.y,o.min.y)),i.x>o.max.x&&(i.x=this._viscousLimit(i.x,o.max.x)),i.y>o.max.y&&(i.y=this._viscousLimit(i.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,o=Math.round(i/2),u=this._initialWorldOffset,m=this._draggable._newPos.x,y=(m-o+u)%i+o-u,E=(m+o+u)%i-o-u,B=Math.abs(y+u)<Math.abs(E+u)?y:E;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=B},_onDragEnd:function(i){var o=this._map,u=o.options,m=!u.inertia||i.noInertia||this._times.length<2;if(o.fire("dragend",i),m)o.fire("moveend");else{this._prunePositions(+new Date);var y=this._lastPos.subtract(this._positions[0]),E=(this._lastTime-this._times[0])/1e3,B=u.easeLinearity,W=y.multiplyBy(B/E),tt=W.distanceTo([0,0]),ft=Math.min(u.inertiaMaxSpeed,tt),Rt=W.multiplyBy(ft/tt),Kt=ft/(u.inertiaDeceleration*B),he=Rt.multiplyBy(-Kt/2).round();!he.x&&!he.y?o.fire("moveend"):(he=o._limitOffset(he,o.options.maxBounds),G(function(){o.panBy(he,{duration:Kt,easeLinearity:B,noMoveStart:!0,animate:!0})}))}}});ge.addInitHook("addHandler","dragging",Wh),ge.mergeOptions({keyboard:!0,keyboardPanDelta:80});var jh=Jn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),se(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Te(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,o=document.documentElement,u=i.scrollTop||o.scrollTop,m=i.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(m,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var o=this._panKeys={},u=this.keyCodes,m,y;for(m=0,y=u.left.length;m<y;m++)o[u.left[m]]=[-1*i,0];for(m=0,y=u.right.length;m<y;m++)o[u.right[m]]=[i,0];for(m=0,y=u.down.length;m<y;m++)o[u.down[m]]=[0,i];for(m=0,y=u.up.length;m<y;m++)o[u.up[m]]=[0,-1*i]},_setZoomDelta:function(i){var o=this._zoomKeys={},u=this.keyCodes,m,y;for(m=0,y=u.zoomIn.length;m<y;m++)o[u.zoomIn[m]]=i;for(m=0,y=u.zoomOut.length;m<y;m++)o[u.zoomOut[m]]=-i},_addHooks:function(){se(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Te(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var o=i.keyCode,u=this._map,m;if(o in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(m=this._panKeys[o],i.shiftKey&&(m=q(m).multiplyBy(3)),u.options.maxBounds&&(m=u._limitOffset(q(m),u.options.maxBounds)),u.options.worldCopyJump){var y=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(m)));u.panTo(y)}else u.panBy(m)}else if(o in this._zoomKeys)u.setZoom(u.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;rs(i)}}});ge.addInitHook("addHandler","keyboard",jh),ge.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Xh=Jn.extend({addHooks:function(){se(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Te(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var o=gh(i),u=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var m=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),m),rs(i)},_performZoom:function(){var i=this._map,o=i.getZoom(),u=this._map.options.zoomSnap||0;i._stop();var m=this._delta/(this._map.options.wheelPxPerZoomLevel*4),y=4*Math.log(2/(1+Math.exp(-Math.abs(m))))/Math.LN2,E=u?Math.ceil(y/u)*u:y,B=i._limitZoom(o+(this._delta>0?E:-E))-o;this._delta=0,this._startTime=null,B&&(i.options.scrollWheelZoom==="center"?i.setZoom(o+B):i.setZoomAround(this._lastMousePos,o+B))}});ge.addInitHook("addHandler","scrollWheelZoom",Xh);var gm=600;ge.mergeOptions({tapHold:Ut.touchNative&&Ut.safari&&Ut.mobile,tapTolerance:15});var Zh=Jn.extend({addHooks:function(){se(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Te(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var o=i.touches[0];this._startPos=this._newPos=new j(o.clientX,o.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(se(document,"touchend",tn),se(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),gm),se(document,"touchend touchcancel contextmenu",this._cancel,this),se(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Te(document,"touchend",tn),Te(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Te(document,"touchend touchcancel contextmenu",this._cancel,this),Te(document,"touchmove",this._onMove,this)},_onMove:function(i){var o=i.touches[0];this._newPos=new j(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,o){var u=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});u._simulated=!0,o.target.dispatchEvent(u)}});ge.addInitHook("addHandler","tapHold",Zh),ge.mergeOptions({touchZoom:Ut.touch,bounceAtZoomLimits:!0});var qh=Jn.extend({addHooks:function(){kt(this._map._container,"leaflet-touch-zoom"),se(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ye(this._map._container,"leaflet-touch-zoom"),Te(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var o=this._map;if(!(!i.touches||i.touches.length!==2||o._animatingZoom||this._zooming)){var u=o.mouseEventToContainerPoint(i.touches[0]),m=o.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(u.add(m)._divideBy(2))),this._startDist=u.distanceTo(m),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),se(document,"touchmove",this._onTouchMove,this),se(document,"touchend touchcancel",this._onTouchEnd,this),tn(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var o=this._map,u=o.mouseEventToContainerPoint(i.touches[0]),m=o.mouseEventToContainerPoint(i.touches[1]),y=u.distanceTo(m)/this._startDist;if(this._zoom=o.getScaleZoom(y,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&y<1||this._zoom>o.getMaxZoom()&&y>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,y===1)return}else{var E=u._add(m)._divideBy(2)._subtract(this._centerPoint);if(y===1&&E.x===0&&E.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(E),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),$(this._animRequest);var B=l(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=G(B,this,!0),tn(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,$(this._animRequest),Te(document,"touchmove",this._onTouchMove,this),Te(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ge.addInitHook("addHandler","touchZoom",qh),ge.BoxZoom=Gh,ge.DoubleClickZoom=Vh,ge.Drag=Wh,ge.Keyboard=jh,ge.ScrollWheelZoom=Xh,ge.TapHold=Zh,ge.TouchZoom=qh,e.Bounds=ot,e.Browser=Ut,e.CRS=Pt,e.Canvas=Fh,e.Circle=gl,e.CircleMarker=Ra,e.Class=z,e.Control=Gn,e.DivIcon=Uh,e.DivOverlay=Qn,e.DomEvent=Np,e.DomUtil=Ip,e.Draggable=Pi,e.Evented=lt,e.FeatureGroup=hi,e.GeoJSON=di,e.GridLayer=Wr,e.Handler=Jn,e.Icon=Bs,e.ImageOverlay=Na,e.LatLng=ut,e.LatLngBounds=J,e.Layer=Vn,e.LayerGroup=Os,e.LineUtil=Zp,e.Map=ge,e.Marker=La,e.Mixin=Hp,e.Path=Ci,e.Point=j,e.PolyUtil=Gp,e.Polygon=Fs,e.Polyline=ui,e.Popup=Ua,e.PosAnimation=_h,e.Projection=qp,e.Rectangle=Hh,e.Renderer=fi,e.SVG=Xr,e.SVGOverlay=Nh,e.TileLayer=zs,e.Tooltip=Oa,e.Transformation=ne,e.Util=ht,e.VideoOverlay=Dh,e.bind=l,e.bounds=Mt,e.canvas=kh,e.circle=nm,e.circleMarker=em,e.control=Hr,e.divIcon=um,e.extend=r,e.featureGroup=Jp,e.geoJSON=Ih,e.geoJson=rm,e.gridLayer=dm,e.icon=Qp,e.imageOverlay=am,e.latLng=xt,e.latLngBounds=st,e.layerGroup=$p,e.map=Up,e.marker=tm,e.point=q,e.polygon=sm,e.polyline=im,e.popup=cm,e.rectangle=mm,e.setOptions=S,e.stamp=h,e.svg=zh,e.svgOverlay=lm,e.tileLayer=Oh,e.tooltip=hm,e.transformation=Z,e.version=n,e.videoOverlay=om;var _m=window.L;e.noConflict=function(){return window.L=_m,this},window.L=e})})(Dc,Dc.exports);var vb=Dc.exports;const _n=Am(vb),xb='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6.5v13L9 17l6 3 6-2.5v-13L15 7z"/><path d="M9 4v13M15 7v13"/></svg>';function yb(){return document.getElementById("tools")}function rh(){const s=document.querySelector(".mp-fab");if(!s)return;const t=(r,a)=>s.style.setProperty(r,a,"important");if(!s.querySelector("svg")){const r=s.textContent.replace("🗺️","").trim();s.innerHTML="<span>"+xb+"</span> "+r}const e=yb(),n=e&&e.getBoundingClientRect();if(n&&n.width>0){const r=Math.max(60,Math.round(n.width));t("width",r+"px"),t("height",r+"px"),t("left",Math.round(n.left)+"px"),t("right","auto"),t("top",Math.max(8,Math.round(n.top-r-10))+"px"),t("bottom","auto")}else t("width","74px"),t("height","74px"),t("right","12px"),t("left","auto"),t("top","110px")}setInterval(rh,300);window.addEventListener("resize",rh);rh();const xs=6378137,kn=Math.PI/180;function pp(s){const t=s.reduce((r,a)=>r+a[0],0)/s.length,e=s.reduce((r,a)=>r+a[1],0)/s.length,n=Math.cos(t*kn);return{pts:s.map(([r,a])=>[(a-e)*kn*xs*n,(r-t)*kn*xs]),back:([r,a])=>[t+a/(xs*kn),e+r/(xs*kn*n)]}}function Ro(s){let t=0;for(let e=0;e<s.length;e++){const n=s[e],r=s[(e+1)%s.length];t+=n[0]*r[1]-r[0]*n[1]}return Math.abs(t)/2}function Nc(s,t){const e=(t[0]-s[0])*kn,n=(t[1]-s[1])*kn,r=Math.sin(e/2)**2+Math.cos(s[0]*kn)*Math.cos(t[0]*kn)*Math.sin(n/2)**2;return 2*xs*Math.asin(Math.sqrt(r))}const cf=s=>s.length<3?0:Ro(pp(s).pts);function hf(s,t=!0){let e=0;for(let n=0;n<s.length-(t?0:1);n++)e+=Nc(s[n],s[(n+1)%s.length]);return e}function cc(s,t,e,n){const r=l=>n?e-(l[0]*t[0]+l[1]*t[1]):l[0]*t[0]+l[1]*t[1]-e,a=[];for(let l=0;l<s.length;l++){const c=s[l],h=s[(l+1)%s.length],d=r(c),f=r(h);if(d>=0&&a.push(c),d>=0!=f>=0){const p=d/(d-f);a.push([c[0]+(h[0]-c[0])*p,c[1]+(h[1]-c[1])*p])}}return a}function Mb(s,t,e=!1){const{pts:n,back:r}=pp(s);let a=0,l=0;for(let v=0;v<n.length;v++){const _=n[v],T=n[(v+1)%n.length],b=Math.hypot(T[0]-_[0],T[1]-_[1]);b>a&&(a=b,l=Math.atan2(T[1]-_[1],T[0]-_[0]))}e&&(l+=Math.PI/2);const c=[Math.cos(l),Math.sin(l)],h=n.map(v=>v[0]*c[0]+v[1]*c[1]),d=Math.min(...h),f=Math.max(...h),p=Ro(n),g=t.reduce((v,_)=>v+_,0),x=[d];let M=0;for(let v=0;v<t.length-1;v++){M+=t[v]/g;let _=d,T=f;for(let b=0;b<60;b++){const P=(_+T)/2;Ro(cc(n,c,P,!0))<M*p?_=P:T=P}x.push((_+T)/2)}x.push(f);const S=[];for(let v=0;v<t.length;v++){let _=cc(n,c,x[v],!1);_=cc(_,c,x[v+1],!0),S.push({latlngs:_.map(r),sqm:Ro(_)})}return S}function uf(s){const t=s.reduce((r,a)=>r+a[0],0)/s.length,e=s.reduce((r,a)=>r+a[1],0)/s.length,n=Math.cos(t*kn);return([r,a])=>[(a-e)*kn*xs*n,(r-t)*kn*xs]}const Sb={bn:{title:"ম্যাপিং",home:"জমি ম্যাপ",newMap:"নতুন ম্যাপ",empty:"এখনো কোনো জমি সংরক্ষণ করা হয়নি",back:"ফিরে যান",satellite:"স্যাটেলাইট",map:"নকশা",search:"স্থান খুঁজুন…",go:"খুঁজুন",tap:"মানচিত্রে স্পর্শ করে কোণ চিহ্নিত করুন",tapSub:"কমপক্ষে ৩টি কোণ দরকার",points:"কোণ",area:"ক্ষেত্রফল",perimeter:"পরিসীমা",finish:"হিসাব দেখুন",undo:"পূর্বাবস্থা",clear:"মুছে ফেলুন",locate:"আমার অবস্থান",save:"সংরক্ষণ করুন",share:"শেয়ার করুন",split:"ভাগ করুন",edit:"পুনরায় মাপুন",cancel:"বাতিল",name:"নাম",note:"নোট",notePh:"এই জমি সম্পর্কে নোট লিখুন…",heirs:"অংশের সংখ্যা (শরিক)",method:"ভাগের পদ্ধতি",equal:"সমান ভাগ",custom:"কাস্টম অনুপাত",ratio:"অনুপাত",share_of:"অংশ",flip:"দিক পরিবর্তন",region:"অঞ্চল / এককের ধরন",language:"ভাষা",settings:"সেটিংস",backup:"ব্যাকআপ",export:"ব্যাকআপ রপ্তানি",import:"ব্যাকআপ আমদানি",delete:"মুছুন",open:"খুলুন",saved:"সংরক্ষিত হয়েছে",disclaimer:"এটি একটি আনুমানিক হিসাব। দলিল বা সরকারি জরিপের বিকল্প নয়।",noPlace:"স্থান পাওয়া যায়নি",noGps:"লোকেশন পাওয়া যায়নি",total:"মোট",close:"বন্ধ",untitled:"জমি",imported:"ব্যাকআপ আমদানি হয়েছে",badFile:"ফাইলটি সঠিক নয়",side:"বাহু"},en:{title:"Mapping",home:"Land Map",newMap:"New map",empty:"No saved land yet",back:"Back",satellite:"Satellite",map:"Map",search:"Search a place…",go:"Go",tap:"Tap on the map to mark corners",tapSub:"At least 3 corners needed",points:"Corners",area:"Area",perimeter:"Perimeter",finish:"See result",undo:"Undo",clear:"Clear",locate:"My location",save:"Save",share:"Share",split:"Split",edit:"Re-measure",cancel:"Cancel",name:"Name",note:"Note",notePh:"Write a note about this land…",heirs:"Number of shares",method:"Split method",equal:"Equal",custom:"Custom ratio",ratio:"Ratio",share_of:"Share",flip:"Flip direction",region:"Region / unit system",language:"Language",settings:"Settings",backup:"Backup",export:"Export backup",import:"Import backup",delete:"Delete",open:"Open",saved:"Saved",disclaimer:"This is an approximate calculation, not a substitute for legal deeds or an official survey.",noPlace:"Place not found",noGps:"Could not get location",total:"Total",close:"Close",untitled:"Land",imported:"Backup imported",badFile:"Invalid file",side:"Side"}},bb={bn:["ক","খ","গ","ঘ","ঙ","চ"],en:["A","B","C","D","E","F"]},Eo=["#e2543a","#3fa66a","#4a8fd6","#d9a53a","#9b6bd1","#2fb5b0"],df="mapping.v1",Fi=s=>String(s??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Eb(s={}){const t={lang:s.lang||"bn",region:"standard",unit:"decimal",base:"sat",screen:"home",homeView:"list",pts:[],lands:[],editId:null,name:"",note:"",heirs:{n:2,mode:"equal",list:[]},flip:!1,pieces:null};try{const H=JSON.parse(localStorage.getItem(df)||"{}");Object.assign(t,H.settings||{}),t.lands=H.lands||[]}catch{}const e=()=>{try{localStorage.setItem(df,JSON.stringify({lands:t.lands,settings:{lang:t.lang,region:t.region,unit:t.unit}}))}catch{}},n=H=>Sb[t.lang][H],r=(H,rt)=>Cm(H,t.lang,rt),a=document.createElement("div");a.className="mp-root",a.hidden=!0,a.innerHTML=`
    <section class="mp-home"></section>
    <section class="mp-stage" hidden>
      <div class="mp-map"></div>
      <div class="mp-top"></div>
      <div class="mp-panel"></div>
    </section>
    <div class="mp-toast" hidden></div>
    <input type="file" accept="application/json" class="mp-file" hidden />`,document.body.appendChild(a);const l=H=>a.querySelector(H),c=l(".mp-home"),h=l(".mp-stage"),d=l(".mp-top"),f=l(".mp-panel"),p=document.createElement("button");p.className="mp-fab",p.type="button";const g=s.insertBefore&&document.querySelector(s.insertBefore);g?(p.classList.add("inline"),g.parentNode.insertBefore(p,g)):document.body.appendChild(p),p.addEventListener("click",ne);const x=()=>{p.innerHTML=`<span>🗺️</span> ${Fi(n("title"))}`};let M;const S=H=>{const rt=l(".mp-toast");rt.textContent=H,rt.hidden=!1,clearTimeout(M),M=setTimeout(()=>rt.hidden=!0,2200)};let v,_,T,b=[],P,F,U;const I={sat:["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}","Imagery © Esri"],map:["https://tile.openstreetmap.org/{z}/{x}/{y}.png","© OpenStreetMap contributors"]};function it(){v||(v=_n.map(l(".mp-map"),{zoomControl:!1,attributionControl:!0,maxZoom:20}).setView([23.8103,90.4125],16),R(t.base),_n.control.zoom({position:"bottomright"}).addTo(v),P=_n.layerGroup().addTo(v),F=_n.layerGroup().addTo(v),v.on("click",H=>{t.screen==="draw"&&(t.pts.push([H.latlng.lat,H.latlng.lng]),G(),$(),st())}))}function R(H){t.base=H,_&&v.removeLayer(_),_=_n.tileLayer(I[H][0],{maxZoom:20,maxNativeZoom:19,attribution:I[H][1]}).addTo(v),_.bringToBack()}const D=H=>_n.divIcon({className:"mp-pt",html:`<b>${H+1}</b>`,iconSize:[26,26]});function G(){b.forEach(H=>v.removeLayer(H)),b=[],t.screen==="draw"&&t.pts.forEach((H,rt)=>{const ct=_n.marker(H,{draggable:!0,icon:D(rt),keyboard:!1}).addTo(v);ct.on("drag",()=>{const Gt=ct.getLatLng();t.pts[rt]=[Gt.lat,Gt.lng],$(),K()}),ct.on("dragend",st),b.push(ct)})}function $(){T&&(v.removeLayer(T),T=null),P.clearLayers(),t.pts.length>=3?T=_n.polygon(t.pts,{color:"#ffffff",weight:2,fillColor:"#3fa66a",fillOpacity:t.pieces?0:.3}).addTo(v):t.pts.length===2&&(T=_n.polyline(t.pts,{color:"#ffffff",weight:2}).addTo(v));const H=t.pts.length,rt=H>=3;for(let ct=0;ct<(rt?H:H-1);ct++){const Gt=t.pts[ct],Dt=t.pts[(ct+1)%H],A=Nc(Gt,Dt);_n.marker([(Gt[0]+Dt[0])/2,(Gt[1]+Dt[1])/2],{interactive:!1,icon:_n.divIcon({className:"mp-edge",html:`<span>${r(A,1)} ${t.lang==="bn"?"মি":"m"}</span>`,iconSize:[60,18]})}).addTo(P)}}function ht(){F.clearLayers(),t.pieces&&t.pieces.forEach((H,rt)=>{_n.polygon(H.latlngs,{color:"#fff",weight:2,fillColor:Eo[rt],fillOpacity:.55}).bindTooltip(`${Fi(t.heirs.list[rt].name)}<br>${r(pi(H.sqm,t.unit))} ${Gs[t.unit][t.lang]}`,{permanent:!0,direction:"center",className:"mp-tip"}).addTo(F)})}function z(){if(t.pts.length<2)return;const H=window.innerWidth>=800;v.fitBounds(_n.latLngBounds(t.pts),{paddingTopLeft:[H?460:30,80],paddingBottomRight:[30,H?40:Math.round(window.innerHeight*.5)],maxZoom:20})}function K(){const H=f.querySelector("[data-live]");H&&(H.innerHTML=Mt());const rt=f.querySelector("[data-act=finish]");rt&&(rt.disabled=t.pts.length<3)}function Y(H){t.screen=H;const rt=H==="home";c.hidden=!rt,h.hidden=rt,rt||(it(),setTimeout(()=>v.invalidateSize(),0)),t.pieces=H==="split"?t.pieces:null,v&&(F.clearLayers(),G(),$(),H==="split"&&ht()),at(),st(),lt()}function lt(){if(t.screen==="home"){if(t.homeView==="settings"){c.innerHTML=`
        <header><button class="mp-ic" data-act="home-list">←</button><h2>${n("settings")}</h2><span></span></header>
        <div class="mp-body">
          <h3>${n("region")}</h3>
          ${Object.entries(Lm).map(([H,rt])=>`
            <button class="mp-opt ${t.region===H?"on":""}" data-act="region" data-v="${H}">
              <b>${rt[t.lang]}</b><small>${rt.hint[t.lang]}</small></button>`).join("")}
          <h3>${n("language")}</h3>
          <div class="mp-seg"><button class="${t.lang==="bn"?"on":""}" data-act="lang" data-v="bn">বাংলা</button>
          <button class="${t.lang==="en"?"on":""}" data-act="lang" data-v="en">English</button></div>
          <h3>${n("backup")}</h3>
          <button class="mp-btn primary" data-act="export">${n("export")}</button>
          <button class="mp-btn" data-act="import">${n("import")}</button>
          <p class="mp-small">${n("disclaimer")}</p>
        </div>`;return}c.innerHTML=`
      <header><button class="mp-ic" data-act="close">←</button><h2>${n("home")}</h2><button class="mp-ic" data-act="home-settings">⚙</button></header>
      <div class="mp-body">
        ${t.lands.length?t.lands.map(H=>`
          <div class="mp-land" data-id="${H.id}">
            <div class="mp-thumb">${j(H.pts)}</div>
            <div class="mp-land-info" data-act="open-land" data-id="${H.id}">
              <b>${Fi(H.name)}</b>
              <span>${r(pi(cf(H.pts),t.unit))} ${Gs[t.unit][t.lang]}</span>
              <small>${Rm(new Date(H.created).toLocaleDateString(t.lang==="bn"?"bn-BD":"en-GB",{day:"numeric",month:"short",year:"numeric"}),t.lang)}</small>
            </div>
            <button class="mp-ic danger" data-act="del-land" data-id="${H.id}" title="${n("delete")}">🗑</button>
          </div>`).join(""):`<p class="mp-empty">${n("empty")}</p>`}
      </div>
      <footer><button class="mp-btn primary" data-act="new">${n("newMap")}</button></footer>`}}function j(H){const rt=uf(H),ct=H.map(rt),Gt=ct.map(Ct=>Ct[0]),Dt=ct.map(Ct=>Ct[1]),A=Math.min(...Gt),w=Math.max(...Gt),X=Math.min(...Dt),pt=Math.max(...Dt),dt=48/Math.max(w-A,pt-X,1);return`<svg viewBox="0 0 60 60"><polygon points="${ct.map(([Ct,Et])=>`${(Ct-A)*dt+6},${(pt-Et)*dt+6}`).join(" ")}" fill="rgba(63,166,106,.35)" stroke="#9be0b5" stroke-width="1.5"/></svg>`}function at(){t.screen!=="home"&&(d.innerHTML=`
      <button class="mp-ic" data-act="to-home">←</button>
      <form class="mp-search" data-act="search"><input name="q" placeholder="${Fi(n("search"))}" autocomplete="off" /><button>${n("go")}</button></form>
      <div class="mp-seg small"><button class="${t.base==="sat"?"on":""}" data-act="base" data-v="sat">${n("satellite")}</button>
      <button class="${t.base==="map"?"on":""}" data-act="base" data-v="map">${n("map")}</button></div>`)}const q=H=>Gs[H][t.lang],ot=()=>cf(t.pts),Mt=()=>t.pts.length<3?`<b>${n("tap")}</b><small>${n("tapSub")} · ${n("points")}: ${r(t.pts.length,0)}</small>`:`<div class="mp-live"><strong>${r(pi(ot(),t.unit))}</strong> <em>${q(t.unit)}</em></div>
       <small>${n("points")}: ${r(t.pts.length,0)} · ${n("perimeter")}: ${r(hf(t.pts),1)} ${t.lang==="bn"?"মি":"m"}</small>`,J=()=>`<div class="mp-chips">${Jh(t.region).map(H=>`<button class="${t.unit===H?"on":""}" data-act="unit" data-v="${H}">${q(H)}</button>`).join("")}</div>`;function st(){if(t.screen!=="home"){if(t.screen==="draw")f.innerHTML=`
        <div class="mp-card" data-live>${Mt()}</div>
        ${t.pts.length>=3?J():""}
        <div class="mp-tools">
          <button data-act="locate">◎<small>${n("locate")}</small></button>
          <button data-act="undo" ${t.pts.length?"":"disabled"}>↶<small>${n("undo")}</small></button>
          <button data-act="clear" ${t.pts.length?"":"disabled"}>🗑<small>${n("clear")}</small></button>
        </div>
        <button class="mp-btn primary" data-act="finish" ${t.pts.length<3?"disabled":""}>${n("finish")}</button>`;else if(t.screen==="result"){const H=ot();f.innerHTML=`
        <input class="mp-name" data-bind="name" value="${Fi(t.name)}" placeholder="${n("name")}" />
        <div class="mp-big"><strong>${r(pi(H,t.unit))}</strong><em>${q(t.unit)}</em></div>
        <div class="mp-break">${Pm(H,t.region,t.lang)}</div>
        ${J()}
        <div class="mp-meta"><span>${n("points")}: ${r(t.pts.length,0)}</span><span>${n("perimeter")}: ${r(hf(t.pts),1)} ${t.lang==="bn"?"মি":"m"}</span>
          <span>${r(H,1)} ${Gs.sqm[t.lang]} · ${r(pi(H,"sqft"),0)} ${Gs.sqft[t.lang]}</span></div>
        <textarea data-bind="note" rows="2" placeholder="${Fi(n("notePh"))}">${Fi(t.note)}</textarea>
        <p class="mp-small">${n("disclaimer")}</p>
        <div class="mp-row"><button class="mp-btn primary" data-act="save">${n("save")}</button>
          <button class="mp-btn" data-act="split">${n("split")}</button></div>
        <div class="mp-row"><button class="mp-btn" data-act="share">${n("share")}</button>
          <button class="mp-btn" data-act="edit">${n("edit")}</button></div>`}else if(t.screen==="split"){ut();const H=t.heirs.list.reduce((rt,ct)=>rt+(t.heirs.mode==="equal"?1:ct.ratio),0);f.innerHTML=`
        <div class="mp-h">${n("heirs")}</div>
        <div class="mp-chips">${[2,3,4,5,6].map(rt=>`<button class="${t.heirs.n===rt?"on":""}" data-act="heirs" data-v="${rt}">${r(rt,0)}</button>`).join("")}</div>
        <div class="mp-h">${n("method")}</div>
        <div class="mp-seg"><button class="${t.heirs.mode==="equal"?"on":""}" data-act="mode" data-v="equal">${n("equal")}</button>
          <button class="${t.heirs.mode==="custom"?"on":""}" data-act="mode" data-v="custom">${n("custom")}</button></div>
        ${J()}
        <div class="mp-heirs">${t.heirs.list.map((rt,ct)=>{const Gt=t.heirs.mode==="equal"?1:rt.ratio;return`<div class="mp-heir"><i style="background:${Eo[ct]}"></i>
            <input data-heir="${ct}" value="${Fi(rt.name)}" />
            ${t.heirs.mode==="custom"?`<div class="mp-step"><button data-act="ratio" data-i="${ct}" data-d="-1">−</button><b>${r(rt.ratio,0)}</b><button data-act="ratio" data-i="${ct}" data-d="1">+</button></div>`:""}
            <div class="mp-heir-a"><b>${r(pi(t.pieces[ct].sqm,t.unit))} ${q(t.unit)}</b><small>${r(Gt/H*100,1)}%</small></div></div>`}).join("")}</div>
        <div class="mp-meta"><span>${n("total")}: ${r(pi(ot(),t.unit))} ${q(t.unit)}</span></div>
        <div class="mp-row"><button class="mp-btn" data-act="flip">⟳ ${n("flip")}</button><button class="mp-btn primary" data-act="share">${n("share")}</button></div>
        <button class="mp-btn" data-act="to-result">${n("back")}</button>`}}}function ut(){const H=t.heirs;for(;H.list.length<H.n;)H.list.push({name:bb[t.lang][H.list.length],ratio:1});H.list.length=H.n,xt()}function xt(){const H=t.heirs.list.map(rt=>t.heirs.mode==="equal"?1:Math.max(1,rt.ratio));t.pieces=Mb(t.pts,H,t.flip),v&&(F.clearLayers(),ht(),T&&T.setStyle({fillOpacity:0}))}async function Pt(){const H=t.pieces?t.pieces.map((Tt,St)=>({name:t.heirs.list[St].name,sqm:Tt.sqm,c:Eo[St]})):[{name:t.name||n("untitled"),sqm:ot(),c:"#3fa66a"}],rt=900,ct=520,Gt=130+ct+50+H.length*46+90,Dt=document.createElement("canvas");Dt.width=rt,Dt.height=Gt;const A=Dt.getContext("2d");A.fillStyle="#0d1712",A.fillRect(0,0,rt,Gt),A.fillStyle="#e8f5ec",A.font='700 34px system-ui, "Noto Sans Bengali", sans-serif',A.fillText(t.name||n("untitled"),40,60),A.fillStyle="#9bb8a5",A.font='24px system-ui, "Noto Sans Bengali", sans-serif',A.fillText(`${r(pi(ot(),t.unit))} ${q(t.unit)}  ·  ${r(ot(),1)} ${Gs.sqm[t.lang]}`,40,98);const w=uf(t.pts),X=t.pts.map(w),pt=X.map(Tt=>Tt[0]),dt=X.map(Tt=>Tt[1]),gt=Math.min(...pt),Ct=Math.max(...pt),Et=Math.min(...dt),At=Math.max(...dt),Ot=Math.min((rt-160)/(Ct-gt||1),(ct-60)/(At-Et||1)),Jt=(rt-(Ct-gt)*Ot)/2,mt=130+(ct-(At-Et)*Ot)/2,de=([Tt,St])=>[Jt+(Tt-gt)*Ot,mt+(At-St)*Ot],Qt=Tt=>{A.beginPath(),Tt.map(w).map(de).forEach(([St,N],_t)=>_t?A.lineTo(St,N):A.moveTo(St,N)),A.closePath()};A.lineJoin="round",t.pieces?t.pieces.forEach((Tt,St)=>{Qt(Tt.latlngs),A.fillStyle=Eo[St]+"aa",A.fill(),A.strokeStyle="#fff",A.lineWidth=2,A.stroke()}):(Qt(t.pts),A.fillStyle="rgba(63,166,106,.45)",A.fill()),Qt(t.pts),A.strokeStyle="#fff",A.lineWidth=4,A.stroke(),A.font='600 20px system-ui, "Noto Sans Bengali", sans-serif',A.textAlign="center",t.pts.forEach((Tt,St)=>{const N=t.pts[(St+1)%t.pts.length],[_t,Nt]=de(w([(Tt[0]+N[0])/2,(Tt[1]+N[1])/2]));A.fillStyle="#0d1712cc",A.fillRect(_t-36,Nt-15,72,26),A.fillStyle="#fff",A.fillText(`${r(Nc(Tt,N),1)}`,_t,Nt+5)}),A.textAlign="left";let Vt=130+ct+30;return H.forEach(Tt=>{A.fillStyle=Tt.c,A.fillRect(40,Vt,10,30),A.fillStyle="#e8f5ec",A.font='600 26px system-ui, "Noto Sans Bengali", sans-serif',A.fillText(Tt.name,66,Vt+25),A.textAlign="right",A.fillText(`${r(pi(Tt.sqm,t.unit))} ${q(t.unit)}`,rt-40,Vt+25),A.textAlign="left",Vt+=46}),A.fillStyle="#6f8c7a",A.font='18px system-ui, "Noto Sans Bengali", sans-serif',A.fillText(n("disclaimer"),40,Gt-30),new Promise(Tt=>Dt.toBlob(Tt,"image/png"))}async function zt(){var ct;const H=await Pt(),rt=new File([H],"mapping.png",{type:"image/png"});if((ct=navigator.canShare)!=null&&ct.call(navigator,{files:[rt]}))try{await navigator.share({files:[rt],title:t.name||n("title")});return}catch(Gt){if(Gt.name==="AbortError")return}qt(H,"mapping.png")}function qt(H,rt){const ct=document.createElement("a");ct.href=URL.createObjectURL(H),ct.download=rt,ct.click(),setTimeout(()=>URL.revokeObjectURL(ct.href),2e3)}const Bt={close:Z,"home-list":()=>{t.homeView="list",lt()},"home-settings":()=>{t.homeView="settings",lt()},new:()=>{t.pts=[],t.editId=null,t.name="",t.note="",t.pieces=null,Y("draw")},"to-home":()=>{t.homeView="list",Y("home")},"open-land":H=>{const rt=t.lands.find(ct=>ct.id===H.dataset.id);rt&&(t.pts=rt.pts.map(ct=>[...ct]),t.editId=rt.id,t.name=rt.name,t.note=rt.note||"",Y("result"),setTimeout(z,60))},"del-land":H=>{t.lands=t.lands.filter(rt=>rt.id!==H.dataset.id),e(),lt()},region:H=>{t.region=H.dataset.v,t.unit=Jh(t.region)[0],e(),lt()},lang:H=>{Re(H.dataset.v)},base:H=>{R(H.dataset.v),at()},unit:H=>{t.unit=H.dataset.v,e(),t.pieces&&ht(),st()},undo:()=>{t.pts.pop(),G(),$(),st()},clear:()=>{t.pts=[],G(),$(),st()},finish:()=>{t.pts.length<3||(t.name||(t.name=`${n("untitled")} ${r(t.lands.length+1,0)}`),Y("result"),z())},edit:()=>Y("draw"),"to-result":()=>{t.pieces=null,Y("result")},save:()=>{const H={id:t.editId||String(Date.now()),name:t.name||n("untitled"),note:t.note,pts:t.pts,created:Date.now()},rt=t.lands.findIndex(ct=>ct.id===H.id);rt>=0?(H.created=t.lands[rt].created,t.lands[rt]=H):t.lands.unshift(H),t.editId=H.id,e(),S(n("saved"))},split:()=>{t.flip=!1,ut(),Y("split")},heirs:H=>{t.heirs.n=+H.dataset.v,ut(),st()},mode:H=>{t.heirs.mode=H.dataset.v,xt(),st()},ratio:H=>{const rt=t.heirs.list[+H.dataset.i];rt.ratio=Math.min(99,Math.max(1,rt.ratio+ +H.dataset.d)),xt(),st()},flip:()=>{t.flip=!t.flip,xt(),st()},share:zt,locate:()=>{if(!navigator.geolocation)return S(n("noGps"));navigator.geolocation.getCurrentPosition(H=>{const rt=[H.coords.latitude,H.coords.longitude];v.setView(rt,19),U&&v.removeLayer(U),U=_n.circleMarker(rt,{radius:8,color:"#fff",weight:3,fillColor:"#2f7bff",fillOpacity:1,interactive:!1}).addTo(v)},()=>S(n("noGps")),{enableHighAccuracy:!0,timeout:1e4})},export:()=>qt(new Blob([JSON.stringify({app:"mapping",version:1,lands:t.lands},null,2)],{type:"application/json"}),"mapping-backup.json"),import:()=>l(".mp-file").click()};a.addEventListener("click",H=>{var ct;const rt=H.target.closest("[data-act]");!rt||rt.tagName==="FORM"||rt.disabled||(ct=Bt[rt.dataset.act])==null||ct.call(Bt,rt)}),a.addEventListener("submit",async H=>{var ct;H.preventDefault();const rt=(ct=new FormData(H.target).get("q"))==null?void 0:ct.toString().trim();if(rt)try{const Gt=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(rt)}`)).json();if(!Gt[0])return S(n("noPlace"));v.setView([+Gt[0].lat,+Gt[0].lon],18)}catch{S(n("noPlace"))}}),a.addEventListener("input",H=>{const rt=H.target.dataset.bind;rt&&(t[rt]=H.target.value),H.target.dataset.heir!=null&&(t.heirs.list[+H.target.dataset.heir].name=H.target.value,ht())}),l(".mp-file").addEventListener("change",async H=>{const rt=H.target.files[0];if(H.target.value="",!!rt)try{const ct=JSON.parse(await rt.text());if(!Array.isArray(ct.lands))throw 0;const Gt=new Set(t.lands.map(Dt=>Dt.id));ct.lands.filter(Dt=>Dt&&Array.isArray(Dt.pts)&&!Gt.has(Dt.id)).forEach(Dt=>t.lands.push(Dt)),e(),S(n("imported"))}catch{S(n("badFile"))}});function ne(){a.hidden=!1,document.body.classList.add("mp-lock"),t.homeView="list",Y("home")}function Z(){a.hidden=!0,document.body.classList.remove("mp-lock")}function Re(H){t.lang=H==="en"?"en":"bn",t.heirs.list=[],e(),x(),t.screen==="split"&&ut(),v&&(at(),$()),lt(),st()}return x(),lt(),{open:ne,close:Z,setLang:Re}}const mp={bn:{verify:"প্লট যাচাই করুন",signin:"লগইন",citizen:"নাগরিক",citizenSub:"কেনার আগে যাচাই",admin:"অ্যাডমিন",adminSub:"অনুমোদিত কর্মকর্তা",verifyHere:"এই এলাকার প্লট যাচাই করুন",sat:"স্যাটেলাইট মানচিত্র খুলুন",close:"বন্ধ করুন",area:"এলাকা"},en:{verify:"Verify a Plot",signin:"Sign in",citizen:"Citizen",citizenSub:"Check before you buy",admin:"Admin",adminSub:"Authorised staff",verifyHere:"Verify plots here",sat:"Open satellite map",close:"Close",area:"Area"}},ko={shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6.5v13L9 17l6 3 6-2.5v-13L15 7z"/><path d="M9 4v13M15 7v13"/></svg>'},gp=()=>{try{return localStorage.getItem("lang")==="en"?"en":"bn"}catch{return"bn"}},ia=s=>String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);let bi=null;function Uc(){const s=document.getElementById("top");if(!s||document.getElementById("vl-actions"))return;const t=document.createElement("div");t.id="vl-actions",t.innerHTML=`<a class="vl-btn primary" id="vl-verify" href="/portal/verify">${ko.shield}<span class="vl-label" data-k="verify"></span></a><div id="vl-signin"><button class="vl-btn" id="vl-signbtn" aria-haspopup="true" aria-expanded="false">${ko.user}<span class="vl-label" data-k="signin"></span></button><div id="vl-menu" role="menu"><a role="menuitem" href="/portal/login"><b data-k="citizen"></b><small data-k="citizenSub"></small></a><a role="menuitem" href="/admin/login"><b data-k="admin"></b><small data-k="adminSub"></small></a></div></div>`,s.appendChild(t);const e=document.createElement("div");e.id="vl-sheet",e.setAttribute("role","dialog"),e.setAttribute("aria-live","polite"),document.body.appendChild(e);const n=t.querySelector("#vl-signbtn"),r=t.querySelector("#vl-menu"),a=l=>{r.classList.toggle("open",l),n.setAttribute("aria-expanded",String(l))};n.addEventListener("click",l=>{l.stopPropagation(),a(!r.classList.contains("open"))}),document.addEventListener("click",l=>{l.target.closest("#vl-signin")||a(!1)}),addEventListener("keydown",l=>{l.key==="Escape"&&(e.classList.contains("open")?(l.stopImmediatePropagation(),l.preventDefault(),Oc()):r.classList.contains("open")&&(a(!1),n.focus()))},!0),ah()}function ah(){const s=mp[gp()];document.querySelectorAll("#vl-actions [data-k]").forEach(n=>{n.textContent=s[n.dataset.k]});const t=document.getElementById("vl-verify");t&&t.setAttribute("aria-label",s.verify);const e=document.getElementById("vl-signbtn");e&&e.setAttribute("aria-label",s.signin),bi&&_p()}function _p(){const s=mp[gp()],t=document.getElementById("vl-sheet");t.setAttribute("aria-label",bi.label),t.innerHTML=`<div class="vl-head"><div><h2>${ia(bi.label)}</h2><div class="vl-sub">${ia(bi.crumbs.slice(0,-1).join(" › "))}</div></div><button class="vl-x" aria-label="${ia(s.close)}">✕</button></div><div class="vl-row"><a class="vl-btn primary" id="vl-go" href="/portal/verify?area=${encodeURIComponent(bi.key)}">${ko.shield}<span>${ia(s.verifyHere)}</span></a><button class="vl-btn" id="vl-sat">${ko.map}<span>${ia(s.sat)}</span></button></div>`,t.querySelector(".vl-x").onclick=Oc,t.querySelector("#vl-sat").onclick=()=>{const e=bi&&bi.open;Oc(),e&&e()}}function Oc(){bi=null;const s=document.getElementById("vl-sheet");s&&s.classList.remove("open")}window.__vlandAreaSheet=s=>{Uc(),bi=s,_p();const t=document.getElementById("vl-sheet");requestAnimationFrame(()=>{t.classList.add("open");const e=t.querySelector("#vl-go");e&&e.focus({preventScroll:!0})})};document.addEventListener("click",s=>{s.target.closest("[data-l]")&&setTimeout(ah,0)});addEventListener("storage",s=>{s.key==="lang"&&ah()});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Uc):Uc();const Bc="__",vp=s=>s.toLowerCase().replace(/[^a-z]/g,""),xp={};_b.forEach(([s,...t])=>t.forEach(e=>xp[vp(e)]=s));let cn="bn";try{cn=localStorage.getItem("lang")||"bn"}catch{}const yp=new Set;window.__missingBn=()=>[...yp];const Cr=s=>{const t=s.replace(/\s+\d+$/,"");if(cn!=="bn")return lf&&lf[t]||t;const e=xp[vp(t)];return e||yp.add(t),e||t},or={1:"/models/divisions.glb",2:"/models/districts.glb",3:"/models/areas.glb"},Mp={1:"Bangladesh",2:"Division",3:"District",4:"Area"},oi=document.getElementById("c"),va=new Zf({canvas:oi,antialias:!0,alpha:!0});va.setPixelRatio(Math.min(devicePixelRatio,2));va.outputColorSpace=Le;const Ir=new J0,be=new pn(40,1,.01,1e5),Be=new rS(be,oi);Be.enableDamping=!0;Be.dampingFactor=.08;Be.screenSpacePanning=!0;Be.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.PAN,RIGHT:Si.PAN};Ir.add(new zM(16777215,3364164,1.1));const Sp=new sp(16777215,1.6);Sp.position.set(-1,2,1.5);Ir.add(Sp);const bp=new zS;bp.setDecoderPath("/draco/");const Ep=new aS;Ep.setDRACOLoader(bp);const ws={};let Yn=1,ri=[],We=[],sa=null,He=!1,Ge=null;const ff={pos:new O,target:new O},xe=s=>document.getElementById(s),Tb=s=>s.replace(/_/g," ").replace(/\s+/g," ").trim(),oh=s=>s.name.split(Bc).map(Tb),Us=s=>oh(s).slice(-1)[0];function zn(s,t=3500){const e=xe("msg");e.textContent=s,e.style.display="block",clearTimeout(zn.t),zn.t=setTimeout(()=>e.style.display="none",t)}const ra={};function qo(s,t=!1){return ws[s]?Promise.resolve(ws[s]):(ra[s]?t||(xe("loadtxt").textContent="Loading map…",xe("loading").classList.remove("hide"),ra[s].then(()=>xe("loading").classList.add("hide"))):ra[s]=wb(s,t).then(e=>(e||delete ra[s],e)),ra[s])}async function wb(s,t){if(ws[s])return ws[s];t||(xe("loadtxt").textContent=`Loading ${Mp[s+1]||""} map…`,xe("loading").classList.remove("hide"));try{const e=await Promise.race([Ep.loadAsync(or[s],l=>console.log("[load]",or[s],l.loaded,"/",l.total)),new Promise((l,c)=>setTimeout(()=>c(new Error("timeout 30s: model or Draco decoder stalled")),3e4))]);console.log("[load] done",or[s]);const n=e.scene,r=[];n.traverse(l=>{l.isMesh&&!l.isLineSegments2&&r.push(l)});let a=performance.now();for(const l of r){{if(l.material=l.material.clone(),s>1&&Ab(l),l.userData.base=l.material.color.clone(),s===1){const h=["dhaka","chittagong","khulna","rangpur","rajshahi","sylhet","barisal","mymensingh"].indexOf(Us(l).toLowerCase());l.position.y+=.004*(h<0?4:h)}l.userData.baseY=l.position.y,Lb(l,s),l.visible=!1}performance.now()-a>8&&(await new Promise(c=>setTimeout(c,0)),a=performance.now())}if(console.log("[load] meshes ready",or[s]),s>1){n.updateMatrixWorld(!0);const l=Ko(n).map(p=>({o:p,b:new Oe().setFromObject(p)})),c=p=>(p.max.x-p.min.x)*(p.max.z-p.min.z);l.sort((p,g)=>c(g.b)-c(p.b));let h=0;l.forEach((p,g)=>{const x=new Set;for(let S=0;S<g;S++){const v=l[S].b;p.b.min.x<v.max.x&&p.b.max.x>v.min.x&&p.b.min.z<v.max.z&&p.b.max.z>v.min.z&&x.add(l[S].c)}let M=0;for(;x.has(M);)M++;p.c=M,h=Math.max(h,M)});const d=l.length?l[0].b.max.y-l[0].b.min.y:1,f=Math.min(d*.006,d*.12/Math.max(1,h));l.forEach(p=>{p.o.position.y+=f*p.c,p.o.userData.baseY=p.o.position.y}),console.log("layers",s,h+1,"eps",f)}return Ir.add(n),ws[s]=n,s===1&&$S(n),n}catch(e){return console.error(e),zn(`Could not load ${or[s]} – check the file exists in public/models/ (${e&&e.message})`,7e3),null}finally{t||xe("loading").classList.add("hide")}}function hc(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)/4294967295}function Ab(s){const t={};s.material.color.getHSL(t);const e=hc(s.name),n=hc(s.name+"x"),r=hc(s.name+"y");s.material.color.setHSL((t.h+(n-.5)*.06+1)%1,Math.min(.85,Math.max(.2,t.s+(r-.5)*.25)),Math.min(.68,Math.max(.2,t.l+(e-.5)*.32)))}function Lb(s,t){const e=YS(s.geometry,t);s.add(e),s.userData.line=e}function ua(s,t){s.material.opacity=t;const e=s.userData.line;e&&(e.material.opacity=e.userData.baseOpacity*t)}function Ko(s){const t=[];return s.traverse(e=>e.isMesh&&!e.isLineSegments2&&t.push(e)),t}function Ki(s,{tilt:t=.9,fit:e=1.25,instant:n=!1}={}){const r=s.getSize(new O),a=s.getCenter(new O),c=Math.max(r.x,r.z,r.y)*.5*e/Math.tan(wr.degToRad(be.fov/2)),h=new O(0,Math.sin(t),Math.cos(t)*.55+.001).normalize(),d=a.clone().addScaledVector(h,c);if(Be.minDistance=c*.05,Be.maxDistance=c*4,be.near=c/500,be.far=c*50,be.updateProjectionMatrix(),n)return be.position.copy(d),Be.target.copy(a),Be.update(),Promise.resolve();const f=be.position.clone(),p=Be.target.clone();return Cs(900,g=>{be.position.lerpVectors(f,d,g),Be.target.lerpVectors(p,a,g)})}function Cs(s,t){return new Promise(e=>{const n=performance.now(),r=a=>{const l=Math.min(1,(a-n)/s),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;t(c),l<1?requestAnimationFrame(r):e()};requestAnimationFrame(r)})}function Is(s){const t=new Oe;return s.forEach(e=>t.expandByObject(e)),t}function Yi(s){We.forEach(t=>t.visible=!1),We=s,s.forEach(t=>{t.visible=!0,t.position.y=t.userData.baseY,t.material.transparent=!1,ua(t,1)})}async function lh(s=!1){if(He)return;He=!0,$o(),Yn=1,ri=[];const t=await qo(1);t&&(Yi(Ko(t)),await Ki(Is(We),{instant:s}),s&&(ff.pos.copy(be.position),ff.target.copy(Be.target))),Yo(),He=!1}async function Tp(s){if(He)return;He=!0;const t=Us(s),e=Yn+1;if(Yn===3)return He=!1,Gb(s);const n=Is([s]).getSize(new O).length()*.12,r=We.filter(d=>d!==s);r.forEach(d=>d.material.transparent=!0),await Cs(450,d=>{s.position.y=s.userData.baseY+n*d,r.forEach(f=>ua(f,1-.85*d))});const a=await qo(e);if(!a){Yi(We),He=!1;return}const l=[...ri,t].map(d=>d.toLowerCase()),c=Ko(a).filter(d=>{const f=oh(d).map(p=>p.toLowerCase());return f.length>l.length&&l.every((p,g)=>f[g]===p)});if(!c.length){zn(`No ${Mp[e+1]||"sub"} meshes named "${[...ri,t].join(Bc)}${Bc}…" found in ${or[e]}`,8e3),Yi(We),He=!1;return}ri.push(t),Yn=e,s.visible=!1,Yi(c),c.forEach(d=>{d.position.y=d.userData.baseY-n,d.material.transparent=!0,ua(d,0)});const h=Ki(Is(c));Cs(700,d=>c.forEach(f=>{f.position.y=f.userData.baseY-n*(1-d),ua(f,d)})).then(()=>c.forEach(d=>d.material.transparent=!1)),await h,Yo(),He=!1}async function wp(s){if(He||s===Yn)return;if(s===1)return lh();$o(),He=!0;const t=ri.slice(0,s-1),e=await qo(s),n=t.map(a=>a.toLowerCase()),r=Ko(e).filter(a=>{const l=oh(a).map(c=>c.toLowerCase());return l.length>n.length&&n.every((c,h)=>l[h]===c)});ri=t,Yn=s,Yi(r),await Ki(Is(r)),Yo(),He=!1}async function Rb(s){const t=String(s||"").split("__").filter(Boolean);for(let e=0;e<t.length;e+=1){const n=t[e].toLowerCase(),r=We.find(a=>Us(a).toLowerCase()===n);if(!r){zn(cn==="bn"?"এই প্লটের মানচিত্র পাওয়া যায়নি":"Map area not found for this plot",6e3);return}await Tp(r)}}function Pb(){if(Ge)return Cp();Yn>1&&wp(Yn-1)}function Yo(){const s=xe("crumbs");s.innerHTML="";const t=[cn==="bn"?"বাংলাদেশ":"Bangladesh",...ri.map(Cr)];t.forEach((n,r)=>{r&&s.insertAdjacentHTML("beforeend","<i>›</i>");const a=r===t.length-1,l=document.createElement(a?"span":"button");l.textContent=n,a?l.className="cur":l.onclick=()=>wp(r+1),s.appendChild(l)});const e=(cn==="bn"?{1:"একটি বিভাগে ট্যাপ করুন",2:"একটি জেলায় ট্যাপ করুন",3:"একটি এলাকায় ট্যাপ করুন"}:{1:"Tap a division",2:"Tap a district",3:"Tap an area"})[Yn];s.insertAdjacentHTML("beforeend",`<i>·</i><span style="opacity:.65">${e}</span>`)}let Zn=null,ys=null;function Cb(s){const t=ws[3];t.updateMatrixWorld(!0),Zn||(Zn=new Oe().setFromObject(t));const e=new Oe().setFromObject(s).getCenter(new O),n=(e.x-Zn.min.x)/(Zn.max.x-Zn.min.x);return{lat:(26.63-(e.z-Zn.min.z)/(Zn.max.z-Zn.min.z)*(26.63-20.74)).toFixed(4),lng:(88.03+n*(92.67-88.03)).toFixed(4)}}function ch(s,t){xe("gmap").src=s,xe("openg").href=t}function pf(s){const t=encodeURIComponent(s);ch(`https://maps.google.com/maps?q=${t}&z=13&output=embed`,`https://www.google.com/maps/search/?api=1&query=${t}`)}function Po(s){const{lat:t,lng:e}=ys.geo;ch(`https://maps.google.com/maps?q=${t},${e}&ll=${t},${e}&z=${s||12}&output=embed`,`https://www.google.com/maps/search/?api=1&query=${t},${e}`)}(function(){const t=document.querySelector(".maphead"),e=document.createElement("input");e.id="mapq",e.placeholder="Search place…";const n=document.createElement("button");n.textContent="Search";const r=document.createElement("button");r.textContent="📍 3D position",n.onclick=()=>pf(e.value),r.onclick=()=>ys&&Po(),e.addEventListener("keydown",a=>a.key==="Enter"&&pf(e.value)),t.insertBefore(r,xe("openg")),t.insertBefore(n,r),t.insertBefore(e,n)})();async function Ib(s,t,e){const n=+e.lat,r=+e.lng,a=1,l=[r-a,n+a,r+a,n-a].join(","),c=["q="+encodeURIComponent(s)+"&viewbox="+l+"&bounded=1","q="+encodeURIComponent(s+", "+t),"q="+encodeURIComponent(s+", Bangladesh")];for(const h of c)try{const f=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=bd&accept-language=en&"+h)).json();if(f&&f[0])return{lat:(+f[0].lat).toFixed(5),lng:(+f[0].lon).toFixed(5),name:f[0].display_name}}catch{}return null}function Db(s,t,e){const[n,r,a]=s,l=a.replace(/\s+\d+$/,"");if(ys={geo:e||Cb(t)},xe("maptitle").textContent=`${l} · ${r} · ${n}`,xe("mapq").value=`${l}, ${r}, Bangladesh`,xe("mapview").hidden=!1,console.log("MAP",JSON.stringify(s),JSON.stringify(ys.geo)),s.join("/"),e){Po(16);return}Po(13),Ib(l,r,ys.geo).then(c=>{console.log("GEOCODE",l,c),c&&!xe("mapview").hidden&&xe("maptitle").textContent.startsWith(l)&&(ys.geo=c,Po(15))})}xe("closemap").onclick=()=>{xe("mapview").hidden=!0,xe("gmap").src="about:blank"};const zo=new sh,Ho=new jt;function Ap(s){const t=oi.getBoundingClientRect();Ho.set((s.clientX-t.left)/t.width*2-1,-((s.clientY-t.top)/t.height)*2+1),zo.setFromCamera(Ho,be);const e=zo.intersectObjects(We,!1);if(!e.length)return null;const n=e[0].object,r=e[0].point,a=f=>f.userData._bb||(f.userData._bb=new Oe().setFromObject(f)),l=We.filter(f=>{const p=a(f);return r.x>=p.min.x&&r.x<=p.max.x&&r.z>=p.min.z&&r.z<=p.max.z});if(l.length<2)return n;const c=new sh(new O(r.x,1e5,r.z),new O(0,-1,0)),h=[...new Set(c.intersectObjects(l,!1).map(f=>f.object))];if(!h.includes(n))return n;const d=f=>{const p=a(f);return(p.max.x-p.min.x)*(p.max.z-p.min.z)};return h.sort((f,p)=>d(f)-d(p)),h[0]}function Nb(s,t){var n;sa&&sa!==s&&sa.material.emissive&&sa.material.emissive.setHex(0),sa=s;const e=xe("tip");s?((n=s.material.emissive)==null||n.setHex(2779722),e.textContent=Cr(Us(s)),e.style.opacity=1,e.style.left=t.clientX+"px",e.style.top=t.clientY+"px",oi.style.cursor="pointer"):(e.style.opacity=0,oi.style.cursor="grab")}oi.addEventListener("pointermove",s=>{s.pointerType==="mouse"&&!He&&Nb(Ap(s),s)});let aa=null;oi.addEventListener("pointerdown",s=>aa={x:s.clientX,y:s.clientY,t:performance.now()});oi.addEventListener("pointerup",s=>{if(!aa)return;const t=Math.hypot(s.clientX-aa.x,s.clientY-aa.y);if(aa=null,t>6||He)return;if(Ge){const n=Vb(s);if(n!==null)return Wb(n)}const e=Ap(s);e&&Tp(e)});const Ub={rotL:()=>To(-.25,0),rotR:()=>To(.25,0),tiltU:()=>To(0,-.18),tiltD:()=>To(0,.18),panL:()=>wo(-1,0),panR:()=>wo(1,0),panU:()=>wo(0,1),panD:()=>wo(0,-1),zoomIn:()=>mf(.8),zoomOut:()=>mf(1.25),reset:()=>{He||Ki(Is(We))}};function To(s,t){const e=be.position.clone().sub(Be.target),n=new Lc().setFromVector3(e);n.theta+=s,n.phi=wr.clamp(n.phi+t,.05,Math.PI-.05);const r=new O().setFromSpherical(n).add(Be.target),a=be.position.clone();Cs(250,l=>be.position.lerpVectors(a,r,l))}function wo(s,t){const e=be.position.distanceTo(Be.target)*.18,n=new O().setFromMatrixColumn(be.matrix,0).multiplyScalar(s*e).add(new O().setFromMatrixColumn(be.matrix,1).multiplyScalar(t*e)),r=be.position.clone(),a=Be.target.clone();Cs(250,l=>{be.position.copy(r).addScaledVector(n,l),Be.target.copy(a).addScaledVector(n,l)})}function mf(s){const t=be.position.clone().sub(Be.target),e=wr.clamp(t.length()*s,Be.minDistance,Be.maxDistance),n=Be.target.clone().add(t.setLength(e)),r=be.position.clone();Cs(250,a=>be.position.lerpVectors(r,n,a))}document.querySelectorAll("[data-act]").forEach(s=>s.addEventListener("click",()=>Ub[s.dataset.act]()));xe("home").onclick=()=>lh();xe("back").onclick=Pb;(function(){const t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@600;700&display=swap",document.head.appendChild(t);const e=document.createElement("style");e.textContent=`
#labels{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.lb{position:absolute;left:0;top:0;white-space:nowrap;font-weight:700;color:#fff;
  font-family:'Noto Sans Bengali','Kalpurush','Nirmala UI','Bangla Sangam MN',system-ui,sans-serif;
  text-shadow:1px 1px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,0 0 6px rgba(0,0,0,.8);will-change:transform}
.lb.l1{font-size:19px}.lb.l2{font-size:15px}.lb.l3{font-size:12.5px}
@media (max-width:700px){.lb.l1{font-size:15px}.lb.l2{font-size:12px}.lb.l3{font-size:10.5px}}
#langtoggle{position:fixed;top:14px;right:14px;z-index:20;display:flex;gap:2px;padding:3px;border-radius:999px;
  background:rgba(10,30,22,.78);border:1px solid rgba(255,255,255,.25);backdrop-filter:blur(6px)}
#langtoggle button{border:0;background:transparent;color:#cfe9db;padding:6px 14px;border-radius:999px;cursor:pointer;
  font:600 13px 'Noto Sans Bengali','Nirmala UI','Bangla Sangam MN',system-ui,sans-serif}
#langtoggle button.on{background:#2a9d62;color:#fff}`,document.head.appendChild(e)})();const Tr=document.createElement("div");Tr.id="labels";oi.insertAdjacentElement("afterend",Tr);let Ms=[],Lp=null,hh=!0;const dn=new O,ki=new O,zi=new O,ds=new O;function Ob(s){s.updateWorldMatrix(!0,!1);const t=s.geometry.attributes.position,e=s.geometry.index,n=e?e.count:t.count;let r=-1/0,a=1/0;for(let x=0;x<t.count;x++)dn.fromBufferAttribute(t,x).applyMatrix4(s.matrixWorld),dn.y>r&&(r=dn.y),dn.y<a&&(a=dn.y);const l=r-(r-a)*.05-1e-6,c=(x,M)=>M.fromBufferAttribute(t,e?e.getX(x):x).applyMatrix4(s.matrixWorld);let h=0,d=0,f=0;const p=[];for(let x=0;x+2<n;x+=3){if(c(x,dn),c(x+1,ki),c(x+2,zi),dn.y<l||ki.y<l||zi.y<l)continue;const M=Math.abs((ki.x-dn.x)*(zi.z-dn.z)-(zi.x-dn.x)*(ki.z-dn.z))/2;p.push(dn.x,dn.z,ki.x,ki.z,zi.x,zi.z),h+=M*(dn.x+ki.x+zi.x)/3,d+=M*(dn.z+ki.z+zi.z)/3,f+=M}if(!f){const x=new Oe().setFromObject(s).getCenter(new O);return{x:x.x,y:r,z:x.z,area:0,y0:s.position.y}}const g=Bb(p,h/f,d/f);return{x:g.x,y:r,z:g.z,area:f,y0:s.position.y}}function Bb(s,t,e){let n=1/0,r=-1/0,a=1/0,l=-1/0;for(let _=0;_<s.length;_+=2)n=Math.min(n,s[_]),r=Math.max(r,s[_]),a=Math.min(a,s[_+1]),l=Math.max(l,s[_+1]);const c=Math.max(r-n,l-a);if(!(c>0))return{x:t,z:e};const h=96,d=c/h,f=Math.ceil((r-n)/d)+3,p=Math.ceil((l-a)/d)+3,g=new Uint8Array(f*p);for(let _=0;_<s.length;_+=6){const T=s[_],b=s[_+1],P=s[_+2],F=s[_+3],U=s[_+4],I=s[_+5],it=Math.max(0,Math.floor((Math.min(T,P,U)-n)/d)),R=Math.min(f-1,Math.ceil((Math.max(T,P,U)-n)/d)+1),D=Math.max(0,Math.floor((Math.min(b,F,I)-a)/d)),G=Math.min(p-1,Math.ceil((Math.max(b,F,I)-a)/d)+1);for(let $=D;$<=G;$++)for(let ht=it;ht<=R;ht++){const z=n+(ht-1+.5)*d,K=a+($-1+.5)*d,Y=(z-P)*(b-F)-(T-P)*(K-F),lt=(z-U)*(F-I)-(P-U)*(K-I),j=(z-T)*(I-b)-(U-T)*(K-b);(Y<0||lt<0||j<0)&&(Y>0||lt>0||j>0)||(g[$*f+ht]=1)}}const x=new Float32Array(f*p);for(let _=0;_<x.length;_++)x[_]=g[_]?1e9:0;for(let _=1;_<p-1;_++)for(let T=1;T<f-1;T++){const b=_*f+T;g[b]&&(x[b]=Math.min(x[b],x[b-1]+1,x[b-f]+1,x[b-f-1]+1.414,x[b-f+1]+1.414))}let M=0,S=-1,v=-1;for(let _=p-2;_>=1;_--)for(let T=f-2;T>=1;T--){const b=_*f+T;g[b]&&(x[b]=Math.min(x[b],x[b+1]+1,x[b+f]+1,x[b+f+1]+1.414,x[b+f-1]+1.414),x[b]>M&&(M=x[b],S=T,v=_))}return S<0?{x:t,z:e}:{x:n+(S-1+.5)*d,z:a+(v-1+.5)*d}}function Fb(){Tr.innerHTML="",Ms=[],Lp=We,hh=!1,We.forEach(s=>{s.userData.lc||(s.userData.lc=Ob(s));const t=document.createElement("div");t.className="lb l"+Yn,t.textContent=Cr(Us(s)),Tr.appendChild(t),Ms.push({m:s,el:t,lc:s.userData.lc,w:0,h:0})}),Ms.forEach(s=>{s.w=s.el.offsetWidth,s.h=s.el.offsetHeight}),Ms.sort((s,t)=>t.lc.area-s.lc.area)}function kb(){(We!==Lp||hh)&&Fb();const s=innerWidth,t=innerHeight,e=[];for(const n of Ms){const{m:r,el:a,lc:l}=n;ds.set(l.x,l.y+(r.position.y-l.y0),l.z).project(be);let c=r.visible&&ds.z>-1&&ds.z<1&&Math.abs(ds.x)<1.05&&Math.abs(ds.y)<1.05,h=0,d=0;if(c){h=(ds.x*.5+.5)*s,d=(-ds.y*.5+.5)*t;const f={x0:h-n.w/2-3,x1:h+n.w/2+3,y0:d-n.h/2-1,y1:d+n.h/2+1};e.some(p=>f.x0<p.x1&&f.x1>p.x0&&f.y0<p.y1&&f.y1>p.y0)?c=!1:e.push(f)}if(!c){n.on!==!1&&(a.style.opacity=0,n.on=!1);continue}n.on=!0,a.style.opacity=Math.min(1,r.material.opacity),a.style.transform=`translate(${(h-n.w/2).toFixed(1)}px,${(d-n.h/2).toFixed(1)}px)`}}const Sa=document.createElement("div");Sa.id="langtoggle";Sa.innerHTML='<button data-l="bn">বাংলা</button><button data-l="en">English</button>';document.body.appendChild(Sa);function Rp(s){cn=s;try{localStorage.setItem("lang",s)}catch{}document.documentElement.lang=s,Sa.querySelectorAll("button").forEach(t=>t.classList.toggle("on",t.dataset.l===s)),hh=!0,Yo(),Ms.forEach(t=>{t.el.textContent=Cr(Us(t.m)),t.w=t.el.offsetWidth,t.h=t.el.offsetHeight})}Sa.addEventListener("click",s=>{const t=s.target.closest("button");t&&(Rp(t.dataset.l),zn("Language: "+t.dataset.l+" · "+Ms.length+" labels on map",4e3))});Rp(cn);function Pp(){const s=innerWidth,t=innerHeight;va.setSize(s,t,!1),be.aspect=s/t,be.updateProjectionMatrix()}addEventListener("resize",Pp);Pp();va.setAnimationLoop(()=>{Be.update(),QS(performance.now()/1e3,Yn,We),va.render(Ir,be);try{kb()}catch(s){window.__lblErr||(window.__lblErr=1,console.error(s),zn("Label error: "+s.message,15e3))}});async function zb(){await lh(!0),xe("loading").classList.add("hide");const s=e=>window.requestIdleCallback?requestIdleCallback(e,{timeout:1500}):setTimeout(e,300);for(const e of[2,3])await new Promise(n=>s(n)),await qo(e,!0);const t=new URLSearchParams(location.search).get("focus");t&&await Rb(t)}zb();const yn=window.__geo=window.__geo||{latN:26.63,latS:20.74,lngW:88.03,lngE:92.67};function uh(){const s=ws[3];return s.updateMatrixWorld(!0),Zn||(Zn=new Oe().setFromObject(s)),Zn}function uc(s,t){const e=uh();return{x:e.min.x+(t-yn.lngW)/(yn.lngE-yn.lngW)*(e.max.x-e.min.x),z:e.min.z+(yn.latN-s)/(yn.latN-yn.latS)*(e.max.z-e.min.z)}}function gf(s,t){const e=uh();return{lat:yn.latN-(t-e.min.z)/(e.max.z-e.min.z)*(yn.latN-yn.latS),lng:yn.lngW+(s-e.min.x)/(e.max.x-e.min.x)*(yn.lngE-yn.lngW)}}(function(){const t=document.createElement("style");t.textContent=`
#bldhud{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:25;display:none;align-items:center;gap:10px;
  padding:8px 14px;border-radius:999px;background:rgba(10,30,22,.85);border:1px solid rgba(255,255,255,.25);color:#e8f7ef;
  backdrop-filter:blur(6px);font:600 13px 'Noto Sans Bengali',system-ui,sans-serif;max-width:94vw}
#bldhud button{border:0;border-radius:999px;padding:6px 12px;cursor:pointer;background:#2a9d62;color:#fff;font:inherit}
#bldhud small{opacity:.6;font-weight:400}
.maphead a.bldlink{display:none;padding:6px 10px;border-radius:8px;background:#2a9d62;color:#fff;text-decoration:none;font:600 13px system-ui;margin-right:6px;white-space:nowrap}`,document.head.appendChild(t)})();const xa=document.createElement("div");xa.id="bldhud";document.body.appendChild(xa);const ur=function(){const s=document.querySelector(".maphead"),t=r=>{const a=document.createElement("a");return a.className="bldlink",a.target="_blank",a.rel="noopener",a.textContent=r,a},e=t("🚶 Street view"),n=t("🌍 Google Earth");return s&&(s.insertBefore(n,xe("openg")),s.insertBefore(e,n)),{street:e,earth:n}}();function $o(){Ge&&(Ir.remove(Ge.obj),Ge.obj.geometry.dispose(),Ge.obj.material.dispose(),Ge=null,xa.style.display="none",Tr.style.display="",Yi(We))}function Cp(){return $o(),Ki(Is(We))}async function Hb(s,t,e){const n=s.replace(/\s+\d+$/,"");try{const r=encodeURIComponent(n+", "+t+", Bangladesh"),a="rb|"+r;let l=null;try{l=JSON.parse(localStorage.getItem(a)||"null")}catch{}if(!l){const T=new AbortController;setTimeout(()=>T.abort(),6e3),l=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=8&countrycodes=bd&accept-language=en&q="+r,{signal:T.signal})).json();try{localStorage.setItem(a,JSON.stringify(l))}catch{}}const c=String(t).toLowerCase(),h=l.find(T=>String(T.display_name).toLowerCase().includes(c)&&T.boundingbox)||l.find(T=>T.boundingbox);if(!h)return null;let[d,f,p,g]=h.boundingbox.map(Number);const x=(d+f)/2,M=(p+g)/2,S=.025,v=.006;f-d>2*S&&(d=x-S,f=x+S),g-p>2*S&&(p=M-S,g=M+S),f-d<2*v&&(d=x-v,f=x+v),g-p<2*v&&(p=M-v,g=M+v);const _={lat:(d+f)/2,lng:(p+g)/2};return{bbox:{s:d,n:f,w:p,e:g},c:_,dLat:e.lat-_.lat,dLng:e.lng-_.lng,label:h.display_name}}catch(r){return console.warn("realBox failed",r),null}}async function Gb(s){if(He)return;if(Ge&&Ge.mesh===s){Ki(Ge.box,{tilt:.5,fit:.95});return}He=!0,$o();const t=Us(s);try{const e=We.filter(I=>I!==s);e.forEach(I=>I.material.transparent=!0),Cs(500,I=>e.forEach(it=>ua(it,1-.8*I)));const n=Is([s]),r=performance.now(),a=Ki(n,{tilt:.7,fit:1.1}),l=gf(n.min.x,n.min.z),c=gf(n.max.x,n.max.z),h={n:l.lat,w:l.lng,s:c.lat,e:c.lng},d=await Hb(t,ri[1]||"",{lat:(l.lat+c.lat)/2,lng:(l.lng+c.lng)/2});console.log("REALBOX",t,d&&d.label,d&&JSON.stringify(d.bbox),"est",JSON.stringify(h));const f=d?d.bbox:h;window.__realGeo=d?{lat:d.c.lat.toFixed(5),lng:d.c.lng.toFixed(5)}:null;const p=d?(I,it)=>uc(I+d.dLat,it+d.dLng):uc;zn(cn==="bn"?"ভবন লোড হচ্ছে…":"Loading buildings…",6e4);const g=await cb(f,[...ri,t].join("/").toLowerCase(),I=>zn(I,6e4));console.log("T fetched",Math.round(performance.now()-r),"ms");let x=d?g:await fp(g,uc,s),M="";if(console.log("COUNT fetched",g.length,"kept",x.length),x.length<5&&g.length>50&&(x=g,M=" (area outline did not line up with the map, showing the whole box)"),!x.length){zn(cn==="bn"?"এই এলাকায় OSM-এ কোনো ভবন নেই":"No buildings mapped in OpenStreetMap here",6e3),Yi(We),He=!1;return}let S=await lb(f,d?null:p,s);S!=null&&S<x.length&&(S=x.length),await a;const v=uh(),_=(v.max.z-v.min.z)/((yn.latN-yn.latS)*111320),T=n.getCenter(new O),b=s.userData.lc?s.userData.lc.y+(s.position.y-s.userData.lc.y0):n.max.y,P=I=>(I=I.slice().sort((it,R)=>it-R),I[I.length>>1]);window.__areaGeo={lat:P(x.map(I=>I.c[0])).toFixed(5),lng:P(x.map(I=>I.c[1])).toFixed(5)};const F=fb(x,{geo2xz:p,origin:T,upm:_,exag:2});console.log("T mesh built",Math.round(performance.now()-r),"ms,",x.length,"buildings"),F.obj.position.set(T.x,b,T.z),Ir.add(F.obj);const U=new Oe(new O(n.min.x,b,n.min.z),new O(n.max.x,b+F.maxH,n.max.z));Ge={mesh:s,name:t,box:U,...F},Tr.style.display="none",xe("msg").style.display="none",xa.innerHTML=`<span>${Cr(t)} · ${x.length.toLocaleString()} ${cn==="bn"?"ম্যাপ করা ভবন":"mapped buildings"}${S?(cn==="bn"?" / আনুমানিক ~":" / est. ~")+S.toLocaleString():""} — ${cn==="bn"?"একটি ভবনে ট্যাপ করুন":"tap one"}</span><button id="bldmap">🗺 ${cn==="bn"?"এলাকার ম্যাপ":"Area map"}</button><button id="bldexit">✕</button><small>© OpenStreetMap</small>`,xa.style.display="flex",xe("bldexit").onclick=()=>Cp(),xe("bldmap").onclick=()=>{ur.street.style.display=ur.earth.style.display="none",Db([...ri,t],s,window.__realGeo||window.__areaGeo)},M&&zn(M,7e3),await Ki(U,{tilt:.5,fit:.95})}catch(e){console.error(e),zn("Could not load buildings: "+(e&&e.message?e.message:e),8e3),Yi(We)}He=!1}function Vb(s){if(!Ge)return null;const t=oi.getBoundingClientRect();Ho.set((s.clientX-t.left)/t.width*2-1,-((s.clientY-t.top)/t.height)*2+1),zo.setFromCamera(Ho,be);const e=zo.intersectObject(Ge.obj,!1)[0];if(!e)return null;const n=pb(Ge.ranges,e.faceIndex*3);return n<0?null:n}function Wb(s){const t=Ge.ranges[s];mb(Ge,s);const e=Ge.obj.position.x+t.cx,n=Ge.obj.position.z+t.cz,r=Math.round((Math.atan2(e-be.position.x,-(n-be.position.z))*180/Math.PI+360)%360),a=gb(t.lat,t.lng,r);ys={geo:{lat:t.lat.toFixed(6),lng:t.lng.toFixed(6)}},xe("maptitle").textContent=`${t.name||(cn==="bn"?"ভবন":"Building")} · ${Cr(Ge.name)}`,xe("mapq").value=`${t.lat.toFixed(6)}, ${t.lng.toFixed(6)}`,xe("mapview").hidden=!1,ch(a.satEmbed,a.pin),ur.street.href=a.street,ur.earth.href=a.earth,ur.street.style.display=ur.earth.style.display="inline-block"}const jb=Eb({lang:typeof cn<"u"&&cn||"bn"});document.addEventListener("click",s=>{const t=s.target.closest("[data-l]");t&&(t.dataset.l==="bn"||t.dataset.l==="en")&&jb.setLang(t.dataset.l)});addEventListener("keydown",s=>{if(s.ctrlKey||s.altKey||s.metaKey)return;const t=s.target;if(t&&(/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)||t.isContentEditable))return;const e=document.getElementById("mapview");if(e&&!e.hidden)return;const n=s.key.length===1?s.key.toLowerCase():s.key,r={ArrowLeft:"rotL",ArrowRight:"rotR",ArrowUp:"tiltU",ArrowDown:"tiltD",a:"panL",d:"panR",w:"panU",s:"panD","+":"zoomIn","=":"zoomIn","-":"zoomOut",_:"zoomOut"},a={r:'[data-act="reset"]',h:"#home",Home:"#home",Escape:"#back",Backspace:"#back"};let l=null;r[n]?l=document.querySelector('#tools [data-act="'+r[n]+'"]'):a[n]&&!s.repeat&&(l=document.querySelector("#tools "+a[n])),l&&(s.preventDefault(),l.click())});
