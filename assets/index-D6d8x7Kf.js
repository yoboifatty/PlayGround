(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="170",tl=0,Ja=1,el=2,fc=1,pc=2,mn=3,Dn=0,Ce=1,ue=2,Pn=0,Si=1,je=2,Qa=3,to=4,nl=5,Xn=100,il=101,sl=102,rl=103,al=104,ol=200,cl=201,ll=202,hl=203,Fr=204,Or=205,ul=206,dl=207,fl=208,pl=209,ml=210,gl=211,_l=212,xl=213,vl=214,kr=0,Br=1,zr=2,bi=3,Hr=4,Gr=5,Vr=6,Wr=7,mc=0,Ml=1,yl=2,Ln=0,Sl=1,El=2,wl=3,gc=4,Tl=5,bl=6,Al=7,_c=300,Ai=301,Ci=302,Xr=303,qr=304,Zs=306,Qi=1e3,Yn=1001,Yr=1002,ze=1003,Cl=1004,as=1005,sn=1006,er=1007,$n=1008,xn=1009,xc=1010,vc=1011,ts=1012,Ca=1013,Kn=1014,rn=1015,ns=1016,Ra=1017,Pa=1018,Ri=1020,Mc=35902,yc=1021,Sc=1022,Ze=1023,Ec=1024,wc=1025,Ei=1026,Pi=1027,La=1028,Ia=1029,Tc=1030,Da=1031,Ua=1033,Os=33776,ks=33777,Bs=33778,zs=33779,$r=35840,Kr=35841,jr=35842,Zr=35843,Jr=36196,Qr=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,aa=37813,oa=37814,ca=37815,la=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,Hs=36492,ma=36494,ga=36495,bc=36283,_a=36284,xa=36285,va=36286,Rl=3200,Pl=3201,Ac=0,Ll=1,Rn="",Ue="srgb",Ii="srgb-linear",Js="linear",ne="srgb",ti=7680,eo=519,Il=512,Dl=513,Ul=514,Cc=515,Nl=516,Fl=517,Ol=518,kl=519,Ma=35044,no="300 es",gn=2e3,Ws=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nr=Math.PI/180,ya=180/Math.PI;function In(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[s&255]+be[s>>8&255]+be[s>>16&255]+be[s>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Ne(s,t,e){return Math.max(t,Math.min(e,s))}function Bl(s,t){return(s%t+t)%t}function ir(s,t,e){return(1-e)*s+e*t}function nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,i,r,a,o,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],M=i[1],E=i[4],v=i[7],I=i[2],A=i[5],T=i[8];return r[0]=a*_+o*M+c*I,r[3]=a*m+o*E+c*A,r[6]=a*d+o*v+c*T,r[1]=l*_+h*M+u*I,r[4]=l*m+h*E+u*A,r[7]=l*d+h*v+u*T,r[2]=f*_+p*M+g*I,r[5]=f*m+p*E+g*A,r[8]=f*d+p*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sr.makeScale(t,e)),this}rotate(t){return this.premultiply(sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new kt;function Rc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zl(){const s=Xs("canvas");return s.style.display="block",s}const io={};function Ki(s){s in io||(io[s]=!0,console.warn(s))}function Hl(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Js:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const so=[.64,.33,.3,.6,.15,.06],ro=[.2126,.7152,.0722],ao=[.3127,.329],oo=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Ii]:{primaries:so,whitePoint:ao,transfer:Js,toXYZ:oo,fromXYZ:co,luminanceCoefficients:ro,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:so,whitePoint:ao,transfer:ne,toXYZ:oo,fromXYZ:co,luminanceCoefficients:ro,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let ei;class Wl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=Xs("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xl=0;class Pc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(rr(i[a].image)):r.push(rr(i[a]))}else r=rr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function rr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ql=0;class Re extends Di{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Yn,i=Yn,r=sn,a=$n,o=Ze,c=xn,l=Re.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=In(),this.name="",this.source=new Pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=_c;Re.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(p+1)/2,I=(d+1)/2,A=(h+f)/4,T=(u+_)/4,R=(g+m)/4;return E>v&&E>I?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=T/n):v>I?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=R/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=T/r,i=R/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yl extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Pc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $l extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-o;const d=c*f+l*p+h*g+u*_,M=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const I=Math.sqrt(E),A=Math.atan2(I,d*M);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}const v=o*M;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-o*p,t[e+2]=l*g+h*p+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ar.copy(this).projectOnVector(t),this.sub(ar)}reflect(t){return this.sub(ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new P,lo=new is;class Zn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),cs.subVectors(this.max,Oi),ni.subVectors(t.a,Oi),ii.subVectors(t.b,Oi),si.subVectors(t.c,Oi),yn.subVectors(ii,ni),Sn.subVectors(si,ii),On.subVectors(ni,si);let e=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-On.z,On.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,On.z,0,-On.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-On.y,On.x,0];return!or(e,ni,ii,si,cs)||(e=[1,0,0,0,1,0,0,0,1],!or(e,ni,ii,si,cs))?!1:(ls.crossVectors(yn,Sn),e=[ls.x,ls.y,ls.z],or(e,ni,ii,si,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new P,new P,new P,new P,new P,new P,new P,new P],Ye=new P,os=new Zn,ni=new P,ii=new P,si=new P,yn=new P,Sn=new P,On=new P,Oi=new P,cs=new P,ls=new P,kn=new P;function or(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){kn.fromArray(s,r);const o=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),c=t.dot(kn),l=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Kl=new Zn,ki=new P,cr=new P;class Jn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(cr)),this.expandByPoint(ki.copy(t.center).sub(cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new P,lr=new P,hs=new P,En=new P,hr=new P,us=new P,ur=new P;class Na{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){lr.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),En.copy(this.origin).sub(lr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=En.dot(this.direction),c=-En.dot(hs),l=En.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(lr).addScaledVector(hs,f),p}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,i,r){hr.subVectors(e,t),us.subVectors(n,t),ur.crossVectors(hr,us);let a=this.direction.dot(ur),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);const c=o*this.direction.dot(us.crossVectors(En,us));if(c<0)return null;const l=o*this.direction.dot(hr.cross(En));if(l<0||c+l>a)return null;const h=-o*En.dot(ur);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,r,a,o,c,l,h,u,f,p,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,p,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jl,t,Zl)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),wn.crossVectors(n,Oe),wn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),wn.crossVectors(n,Oe)),wn.normalize(),ds.crossVectors(Oe,wn),i[0]=wn.x,i[4]=ds.x,i[8]=Oe.x,i[1]=wn.y,i[5]=ds.y,i[9]=Oe.y,i[2]=wn.z,i[6]=ds.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],E=n[7],v=n[11],I=n[15],A=i[0],T=i[4],R=i[8],S=i[12],x=i[1],C=i[5],L=i[9],F=i[13],V=i[2],Y=i[6],X=i[10],Z=i[14],z=i[3],st=i[7],dt=i[11],nt=i[15];return r[0]=a*A+o*x+c*V+l*z,r[4]=a*T+o*C+c*Y+l*st,r[8]=a*R+o*L+c*X+l*dt,r[12]=a*S+o*F+c*Z+l*nt,r[1]=h*A+u*x+f*V+p*z,r[5]=h*T+u*C+f*Y+p*st,r[9]=h*R+u*L+f*X+p*dt,r[13]=h*S+u*F+f*Z+p*nt,r[2]=g*A+_*x+m*V+d*z,r[6]=g*T+_*C+m*Y+d*st,r[10]=g*R+_*L+m*X+d*dt,r[14]=g*S+_*F+m*Z+d*nt,r[3]=M*A+E*x+v*V+I*z,r[7]=M*T+E*C+v*Y+I*st,r[11]=M*R+E*L+v*X+I*dt,r[15]=M*S+E*F+v*Z+I*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*p-n*c*p)+_*(+e*c*p-e*l*f+r*a*f-i*a*p+i*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=u*m*l-_*f*l+_*c*p-o*m*p-u*c*d+o*f*d,E=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,v=h*_*l-g*u*l+g*o*p-a*_*p-h*o*d+a*u*d,I=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,A=e*M+n*E+i*v+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=M*T,t[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*T,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*d+n*c*d)*T,t[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*p-n*c*p)*T,t[4]=E*T,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*T,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*d-e*c*d)*T,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*p+e*c*p)*T,t[8]=v*T,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*d+e*o*d)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*T,t[12]=I*T,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*T,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,M=c*l,E=c*h,v=c*u,I=n.x,A=n.y,T=n.z;return i[0]=(1-(_+d))*I,i[1]=(p+v)*I,i[2]=(g-E)*I,i[3]=0,i[4]=(p-v)*A,i[5]=(1-(f+d))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+E)*T,i[9]=(m-M)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const l=1/r,h=1/a,u=1/o;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=gn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(o===gn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ws)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=gn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*l,p=(n+i)*h;let g,_;if(o===gn)g=(a+r)*u,_=-2*u;else if(o===Ws)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new P,$e=new ee,jl=new P(0,0,0),Zl=new P(1,1,1),wn=new P,ds=new P,Oe=new P,ho=new ee,uo=new is;class an{constructor(t=0,e=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ho,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uo.setFromEuler(this),this.setFromQuaternion(uo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jl=0;const fo=new P,ai=new is,dn=new ee,fs=new P,Bi=new P,Ql=new P,th=new is,po=new P(1,0,0),mo=new P(0,1,0),go=new P(0,0,1),_o={type:"added"},eh={type:"removed"},oi={type:"childadded",child:null},dr={type:"childremoved",child:null};class ge extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new P,e=new an,n=new is,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new kt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(po,t)}rotateY(t){return this.rotateOnAxis(mo,t)}rotateZ(t){return this.rotateOnAxis(go,t)}translateOnAxis(t,e){return fo.copy(t).applyQuaternion(this.quaternion),this.position.add(fo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(po,t)}translateY(t){return this.translateOnAxis(mo,t)}translateZ(t){return this.translateOnAxis(go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Bi,fs,this.up):dn.lookAt(fs,Bi,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),ai.setFromRotationMatrix(dn),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_o),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eh),dr.child=t,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_o),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,Ql),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new P(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new P,fn=new P,fr=new P,pn=new P,ci=new P,li=new P,xo=new P,pr=new P,mr=new P,gr=new P,_r=new se,xr=new se,vr=new se;class We{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),fn.subVectors(n,e),fr.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(fn),c=Ke.dot(fr),l=fn.dot(fn),h=fn.dot(fr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pn.x),c.addScaledVector(a,pn.y),c.addScaledVector(o,pn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return _r.setScalar(0),xr.setScalar(0),vr.setScalar(0),_r.fromBufferAttribute(t,e),xr.fromBufferAttribute(t,n),vr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(_r,r.x),a.addScaledVector(xr,r.y),a.addScaledVector(vr,r.z),a}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),fn.subVectors(t,e),Ke.cross(fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ke.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ci.subVectors(i,n),li.subVectors(r,n),pr.subVectors(t,n);const c=ci.dot(pr),l=li.dot(pr);if(c<=0&&l<=0)return e.copy(n);mr.subVectors(t,i);const h=ci.dot(mr),u=li.dot(mr);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ci,a);gr.subVectors(t,r);const p=ci.dot(gr),g=li.dot(gr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(li,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xo.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(xo,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(ci,a).addScaledVector(li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Mr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Bl(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Mr(a,r,t+1/3),this.g=Mr(a,r,t),this.b=Mr(a,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Dc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return jt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ne(Ae.r*255,0,255))*65536+Math.round(Ne(Ae.g*255,0,255))*256+Math.round(Ne(Ae.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,r=Ae.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Ue){jt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(ps);const n=ir(Tn.h,ps.h,e),i=ir(Tn.s,ps.s,e),r=ir(Tn.l,ps.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new ut;ut.NAMES=Dc;let nh=0;class Un extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=In(),this.name="",this.blending=Si,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Or,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fr&&(n.blendSrc=this.blendSrc),this.blendDst!==Or&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dt extends Un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new P,ms=new Lt;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}}class Uc extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nc extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ih=0;const Ve=new ee,yr=new ge,hi=new P,ke=new Zn,zi=new Zn,Ee=new P;class ve extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rc(t)?Nc:Uc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(ke.min,zi.min),ke.expandByPoint(Ee),Ee.addVectors(ke.max,zi.max),ke.expandByPoint(Ee)):(ke.expandByPoint(zi.min),ke.expandByPoint(zi.max))}ke.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ee.fromBufferAttribute(o,l),c&&(hi.fromBufferAttribute(t,l),Ee.add(hi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new P,c[R]=new P;const l=new P,h=new P,u=new P,f=new Lt,p=new Lt,g=new Lt,_=new P,m=new P;function d(R,S,x){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[R].add(_),o[S].add(_),o[x].add(_),c[R].add(m),c[S].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const x=M[R],C=x.start,L=x.count;for(let F=C,V=C+L;F<V;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new P,v=new P,I=new P,A=new P;function T(R){I.fromBufferAttribute(i,R),A.copy(I);const S=o[R];E.copy(S),E.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(A,S);const C=v.dot(c[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,C)}for(let R=0,S=M.length;R<S;++R){const x=M[R],C=x.start,L=x.count;for(let F=C,V=C+L;F<V;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new we(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new ee,Bn=new Na,gs=new Jn,Mo=new P,_s=new P,xs=new P,vs=new P,Sr=new P,Ms=new P,yo=new P,ys=new P;class B extends ge{constructor(t=new ve,e=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Sr.fromBufferAttribute(u,t),a?Ms.addScaledVector(Sr,h):Ms.addScaledVector(Sr.sub(e),h))}e.add(Ms)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(gs.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(gs,Mo)===null||Bn.origin.distanceToSquared(Mo)>(t.far-t.near)**2))&&(vo.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(vo),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,I=E;v<I;v+=3){const A=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);i=Ss(this,d,t,n,l,h,u,A,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);i=Ss(this,a,t,n,l,h,u,M,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,I=E;v<I;v+=3){const A=v,T=v+1,R=v+2;i=Ss(this,d,t,n,l,h,u,A,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,E=m+1,v=m+2;i=Ss(this,a,t,n,l,h,u,M,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function sh(s,t,e,n,i,r,a,o){let c;if(t.side===Ce?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Dn,o),c===null)return null;ys.copy(o),ys.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ys);return l<e.near||l>e.far?null:{distance:l,point:ys.clone(),object:s}}function Ss(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,_s),s.getVertexPosition(c,xs),s.getVertexPosition(l,vs);const h=sh(s,t,e,n,_s,xs,vs,yo);if(h){const u=new P;We.getBarycoord(yo,_s,xs,vs,u),i&&(h.uv=We.getInterpolatedAttribute(i,o,c,l,u,new Lt)),r&&(h.uv1=We.getInterpolatedAttribute(r,o,c,l,u,new Lt)),a&&(h.normal=We.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};We.getNormal(_s,xs,vs,f.normal),h.face=f,h.barycoord=u}return h}class mt extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,m,d,M,E,v,I,A,T,R,S){const x=v/T,C=I/R,L=v/2,F=I/2,V=A/2,Y=T+1,X=R+1;let Z=0,z=0;const st=new P;for(let dt=0;dt<X;dt++){const nt=dt*C-F;for(let yt=0;yt<Y;yt++){const Gt=yt*x-L;st[_]=Gt*M,st[m]=nt*E,st[d]=V,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(yt/T),u.push(1-dt/R),Z+=1}}for(let dt=0;dt<R;dt++)for(let nt=0;nt<T;nt++){const yt=f+nt+Y*dt,Gt=f+nt+Y*(dt+1),q=f+(nt+1)+Y*(dt+1),et=f+(nt+1)+Y*dt;c.push(yt,Gt,et),c.push(Gt,q,et),z+=6}o.addGroup(p,z,S),p+=z,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Le(s){const t={};for(let e=0;e<s.length;e++){const n=Li(s[e]);for(const i in n)t[i]=n[i]}return t}function rh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Fc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const ah={clone:Li,merge:Le};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oc extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new P,So=new Lt,Eo=new Lt;class Be extends Oc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,So,Eo),e.subVectors(Eo,So)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,di=1;class lh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(ui,di,t,e);i.layers=this.layers,this.add(i);const r=new Be(ui,di,t,e);r.layers=this.layers,this.add(r);const a=new Be(ui,di,t,e);a.layers=this.layers,this.add(a);const o=new Be(ui,di,t,e);o.layers=this.layers,this.add(o);const c=new Be(ui,di,t,e);c.layers=this.layers,this.add(c);const l=new Be(ui,di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kc extends Re{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ai,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hh extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new kc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mt(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Pn});r.uniforms.tEquirect.value=e;const a=new B(i,r),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=sn),new lh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Er=new P,uh=new P,dh=new kt;class Vn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Er.subVectors(n,e).cross(uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dh.getNormalMatrix(t),i=this.coplanarPoint(Er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Jn,Es=new P;class Fa{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],M=i[13],E=i[14],v=i[15];if(n[0].setComponents(c-r,f-l,m-p,v-d).normalize(),n[1].setComponents(c+r,f+l,m+p,v+d).normalize(),n[2].setComponents(c+a,f+h,m+g,v+M).normalize(),n[3].setComponents(c-a,f-h,m-g,v-M).normalize(),n[4].setComponents(c-o,f-u,m-_,v-E).normalize(),e===gn)n[5].setComponents(c+o,f+u,m+_,v+E).normalize();else if(e===Ws)n[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Es.x=i.normal.x>0?t.max.x:t.min.x,Es.y=i.normal.y>0?t.max.y:t.min.y,Es.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function fh(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Kt extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const M=d*f-a;for(let E=0;E<l;E++){const v=E*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const E=M+l*d,v=M+l*(d+1),I=M+1+l*(d+1),A=M+1+l*d;p.push(E,v,A),p.push(v,I,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.widthSegments,t.heightSegments)}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
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
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
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
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
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
#endif`,Ch=`#ifdef USE_BUMPMAP
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
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
} // validated`,kh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bh=`vec3 transformedNormal = objectNormal;
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
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
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
}`,nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uu=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,du=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,fu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,pu=`#if defined( RE_IndirectDiffuse )
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eu=`#if defined( USE_POINTS_UV )
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
#endif`,wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
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
#endif`,Ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nd=`#ifdef USE_SKINNING
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
#endif`,id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ad=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,od=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pd=`uniform sampler2D t2D;
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Md=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yd=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Sd=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Cd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Rd=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Pd=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ld=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Id=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Dd=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Ud=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nd=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Fd=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Od=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,kd=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Bd=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,zd=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hd=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Gd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Vd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Wd=`uniform vec3 color;
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
}`,Xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,zt={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:xh,alphatest_pars_fragment:vh,aomap_fragment:Mh,aomap_pars_fragment:yh,batching_pars_vertex:Sh,batching_vertex:Eh,begin_vertex:wh,beginnormal_vertex:Th,bsdfs:bh,iridescence_fragment:Ah,bumpmap_pars_fragment:Ch,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Ih,color_fragment:Dh,color_pars_fragment:Uh,color_pars_vertex:Nh,color_vertex:Fh,common:Oh,cube_uv_reflection_fragment:kh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:zh,displacementmap_vertex:Hh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Vh,colorspace_fragment:Wh,colorspace_pars_fragment:Xh,envmap_fragment:qh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:$h,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:au,envmap_vertex:jh,fog_vertex:Zh,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:tu,gradientmap_pars_fragment:eu,lightmap_pars_fragment:nu,lights_lambert_fragment:iu,lights_lambert_pars_fragment:su,lights_pars_begin:ru,lights_toon_fragment:ou,lights_toon_pars_fragment:cu,lights_phong_fragment:lu,lights_phong_pars_fragment:hu,lights_physical_fragment:uu,lights_physical_pars_fragment:du,lights_fragment_begin:fu,lights_fragment_maps:pu,lights_fragment_end:mu,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:vu,map_fragment:Mu,map_pars_fragment:yu,map_particle_fragment:Su,map_particle_pars_fragment:Eu,metalnessmap_fragment:wu,metalnessmap_pars_fragment:Tu,morphinstance_vertex:bu,morphcolor_vertex:Au,morphnormal_vertex:Cu,morphtarget_pars_vertex:Ru,morphtarget_vertex:Pu,normal_fragment_begin:Lu,normal_fragment_maps:Iu,normal_pars_fragment:Du,normal_pars_vertex:Uu,normal_vertex:Nu,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Ou,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:zu,opaque_fragment:Hu,packing:Gu,premultiplied_alpha_fragment:Vu,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:qu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:ju,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:td,skinning_vertex:ed,skinnormal_vertex:nd,specularmap_fragment:id,specularmap_pars_fragment:sd,tonemapping_fragment:rd,tonemapping_pars_fragment:ad,transmission_fragment:od,transmission_pars_fragment:cd,uv_pars_fragment:ld,uv_pars_vertex:hd,uv_vertex:ud,worldpos_vertex:dd,background_vert:fd,background_frag:pd,backgroundCube_vert:md,backgroundCube_frag:gd,cube_vert:_d,cube_frag:xd,depth_vert:vd,depth_frag:Md,distanceRGBA_vert:yd,distanceRGBA_frag:Sd,equirect_vert:Ed,equirect_frag:wd,linedashed_vert:Td,linedashed_frag:bd,meshbasic_vert:Ad,meshbasic_frag:Cd,meshlambert_vert:Rd,meshlambert_frag:Pd,meshmatcap_vert:Ld,meshmatcap_frag:Id,meshnormal_vert:Dd,meshnormal_frag:Ud,meshphong_vert:Nd,meshphong_frag:Fd,meshphysical_vert:Od,meshphysical_frag:kd,meshtoon_vert:Bd,meshtoon_frag:zd,points_vert:Hd,points_frag:Gd,shadow_vert:Vd,shadow_frag:Wd,sprite_vert:Xd,sprite_frag:qd},it={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},en={basic:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new ut(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Le([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Le([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new ut(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Le([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Le([it.points,it.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Le([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Le([it.common,it.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Le([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Le([it.sprite,it.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Le([it.common,it.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Le([it.lights,it.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};en.physical={uniforms:Le([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const ws={r:0,b:0,g:0},Hn=new an,Yd=new ee;function $d(s,t,e,n,i,r,a){const o=new ut(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?e:t).get(E)),E}function _(M){let E=!1;const v=g(M);v===null?d(o,c):v&&v.isColor&&(d(v,1),E=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===Zs)?(h===void 0&&(h=new B(new mt(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Li(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hn.copy(E.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yd.makeRotationFromEuler(Hn)),h.material.toneMapped=jt.getTransfer(v.colorSpace)!==ne,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new B(new Kt(2,2),new on({name:"BackgroundMaterial",uniforms:Li(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=jt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,E){M.getRGB(ws,Fc(s)),n.buffers.color.setClear(ws.r,ws.g,ws.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(o,c)},render:_,addToRenderList:m}}function Kd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(x,C,L,F,V){let Y=!1;const X=u(F,L,C);r!==X&&(r=X,l(r.object)),Y=p(x,F,L,V),Y&&g(x,F,L,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(x,C,L,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,C,L){const F=L.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let Y=V[C.id];Y===void 0&&(Y={},V[C.id]=Y);let X=Y[F];return X===void 0&&(X=f(c()),Y[F]=X),X}function f(x){const C=[],L=[],F=[];for(let V=0;V<e;V++)C[V]=0,L[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,C,L,F){const V=r.attributes,Y=C.attributes;let X=0;const Z=L.getAttributes();for(const z in Z)if(Z[z].location>=0){const dt=V[z];let nt=Y[z];if(nt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),dt===void 0||dt.attribute!==nt||nt&&dt.data!==nt.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(x,C,L,F){const V={},Y=C.attributes;let X=0;const Z=L.getAttributes();for(const z in Z)if(Z[z].location>=0){let dt=Y[z];dt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor));const nt={};nt.attribute=dt,dt&&dt.data&&(nt.data=dt.data),V[z]=nt,X++}r.attributes=V,r.attributesNum=X,r.index=F}function _(){const x=r.newAttributes;for(let C=0,L=x.length;C<L;C++)x[C]=0}function m(x){d(x,0)}function d(x,C){const L=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;L[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),V[x]!==C&&(s.vertexAttribDivisor(x,C),V[x]=C)}function M(){const x=r.newAttributes,C=r.enabledAttributes;for(let L=0,F=C.length;L<F;L++)C[L]!==x[L]&&(s.disableVertexAttribArray(L),C[L]=0)}function E(x,C,L,F,V,Y,X){X===!0?s.vertexAttribIPointer(x,C,L,V,Y):s.vertexAttribPointer(x,C,L,F,V,Y)}function v(x,C,L,F){_();const V=F.attributes,Y=L.getAttributes(),X=C.defaultAttributeValues;for(const Z in Y){const z=Y[Z];if(z.location>=0){let st=V[Z];if(st===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const dt=st.normalized,nt=st.itemSize,yt=t.get(st);if(yt===void 0)continue;const Gt=yt.buffer,q=yt.type,et=yt.bytesPerElement,St=q===s.INT||q===s.UNSIGNED_INT||st.gpuType===Ca;if(st.isInterleavedBufferAttribute){const at=st.data,Rt=at.stride,Ut=st.offset;if(at.isInstancedInterleavedBuffer){for(let Ht=0;Ht<z.locationSize;Ht++)d(z.location+Ht,at.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ht=0;Ht<z.locationSize;Ht++)m(z.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Ht=0;Ht<z.locationSize;Ht++)E(z.location+Ht,nt/z.locationSize,q,dt,Rt*et,(Ut+nt/z.locationSize*Ht)*et,St)}else{if(st.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)d(z.location+at,st.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let at=0;at<z.locationSize;at++)m(z.location+at);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let at=0;at<z.locationSize;at++)E(z.location+at,nt/z.locationSize,q,dt,nt*et,nt/z.locationSize*at*et,St)}}else if(X!==void 0){const dt=X[Z];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(z.location,dt);break;case 3:s.vertexAttrib3fv(z.location,dt);break;case 4:s.vertexAttrib4fv(z.location,dt);break;default:s.vertexAttrib1fv(z.location,dt)}}}}M()}function I(){R();for(const x in n){const C=n[x];for(const L in C){const F=C[L];for(const V in F)h(F[V].object),delete F[V];delete C[L]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const L in C){const F=C[L];for(const V in F)h(F[V].object),delete F[V];delete C[L]}delete n[x.id]}function T(x){for(const C in n){const L=n[C];if(L[x.id]===void 0)continue;const F=L[x.id];for(const V in F)h(F[V].object),delete F[V];delete L[x.id]}}function R(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function jd(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Zd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Ze&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==xn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==rn&&!R)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function Jd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Vn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,E=M*4;let v=d.clippingState||null;c.value=v,v=h(g,f,E,p);for(let I=0;I!==E;++I)v[I]=e[I];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,v=p;E!==_;++E,v+=4)a.copy(u[E]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Qd(s){let t=new WeakMap;function e(a,o){return o===Xr?a.mapping=Ai:o===qr&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xr||o===qr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new hh(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zc extends Oc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yi=4,wo=[.125,.215,.35,.446,.526,.582],qn=20,wr=new zc,To=new ut;let Tr=null,br=0,Ar=0,Cr=!1;const Wn=(1+Math.sqrt(5))/2,fi=1/Wn,bo=[new P(-Wn,fi,0),new P(Wn,fi,0),new P(-fi,0,Wn),new P(fi,0,Wn),new P(0,Wn,-fi),new P(0,Wn,fi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Sa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tr,br,Ar),this._renderer.xr.enabled=Cr,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ns,format:Ze,colorSpace:Ii,depthBuffer:!1},i=Ao(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tf(r)),this._blurMaterial=ef(r,t,e)}return i}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,wr)}_sceneToCubeUV(t,e,n,i){const o=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(To),h.toneMapping=Ln,h.autoClear=!1;const p=new Dt({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new B(new mt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(To),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):M===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const E=this._cubeSize;Ts(i,M*E,d>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ai||t.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Co());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new B(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ts(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bo[(i-r-1)%bo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new B(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const d=[];let M=0;for(let T=0;T<qn;++T){const R=T/_,S=Math.exp(-R*R/2);d.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const v=this._sizeLods[i],I=3*v*(i>E-yi?i-E+yi:0),A=4*(this._cubeSize-v);Ts(e,I,A,3*v,2*v),c.setRenderTarget(e),c.render(u,wr)}}function tf(s){const t=[],e=[],n=[];let i=s;const r=s-yi+1+wo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-yi?c=wo[a-s+yi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(S,_*g*A),E.set(f,m*g*A);const x=[A,A,A,A,A,A];v.set(x,d*g*A)}const I=new ve;I.setAttribute("position",new we(M,_)),I.setAttribute("uv",new we(E,m)),I.setAttribute("faceIndex",new we(v,d)),t.push(I),i>yi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ao(s,t,e){const n=new jn(s,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ef(s,t,e){const n=new Float32Array(qn),i=new P(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Co(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ro(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function nf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Xr||c===qr,h=c===Ai||c===Ci;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Sa(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Sa(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rf(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let E=0,v=M.length;E<v;E+=3){const I=M[E+0],A=M[E+1],T=M[E+2];f.push(I,A,A,T,T,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const I=E+0,A=E+1,T=E+2;f.push(I,A,A,T,T,I)}}else return;const m=new(Rc(f)?Nc:Uc)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function af(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*_[M];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function of(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cf(s,t,e){const n=new WeakMap,i=new se;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let I=o.attributes.position.count*v,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const T=new Float32Array(I*A*4*u),R=new Lc(T,I,A,u);R.type=rn,R.needsUpdate=!0;const S=v*4;for(let C=0;C<u;C++){const L=d[C],F=M[C],V=E[C],Y=I*A*4*C;for(let X=0;X<L.count;X++){const Z=X*S;g===!0&&(i.fromBufferAttribute(L,X),T[Y+Z+0]=i.x,T[Y+Z+1]=i.y,T[Y+Z+2]=i.z,T[Y+Z+3]=0),_===!0&&(i.fromBufferAttribute(F,X),T[Y+Z+4]=i.x,T[Y+Z+5]=i.y,T[Y+Z+6]=i.z,T[Y+Z+7]=0),m===!0&&(i.fromBufferAttribute(V,X),T[Y+Z+8]=i.x,T[Y+Z+9]=i.y,T[Y+Z+10]=i.z,T[Y+Z+11]=V.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new Lt(I,A)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function lf(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Hc extends Re{constructor(t,e,n,i,r,a,o,c,l,h=Ei){if(h!==Ei&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=Kn),n===void 0&&h===Pi&&(n=Ri),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gc=new Re,Po=new Hc(1,1),Vc=new Lc,Wc=new $l,Xc=new kc,Lo=[],Io=[],Do=new Float32Array(16),Uo=new Float32Array(9),No=new Float32Array(4);function Ui(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Lo[i];if(r===void 0&&(r=new Float32Array(i),Lo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Qs(s,t){let e=Io[t];e===void 0&&(e=new Int32Array(t),Io[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function pf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;No.set(n),s.uniformMatrix2fv(this.addr,!1,No),Se(e,n)}}function mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Uo.set(n),s.uniformMatrix3fv(this.addr,!1,Uo),Se(e,n)}}function gf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Do.set(n),s.uniformMatrix4fv(this.addr,!1,Do),Se(e,n)}}function _f(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Po.compareFunction=Cc,r=Po):r=Gc,e.setTexture2D(t||r,i)}function bf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wc,i)}function Af(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Xc,i)}function Cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vc,i)}function Rf(s){switch(s){case 5126:return hf;case 35664:return uf;case 35665:return df;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return xf;case 35668:case 35672:return vf;case 35669:case 35673:return Mf;case 5125:return yf;case 36294:return Sf;case 36295:return Ef;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Cf}}function Pf(s,t){s.uniform1fv(this.addr,t)}function Lf(s,t){const e=Ui(t,this.size,2);s.uniform2fv(this.addr,e)}function If(s,t){const e=Ui(t,this.size,3);s.uniform3fv(this.addr,e)}function Df(s,t){const e=Ui(t,this.size,4);s.uniform4fv(this.addr,e)}function Uf(s,t){const e=Ui(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Nf(s,t){const e=Ui(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ff(s,t){const e=Ui(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Of(s,t){s.uniform1iv(this.addr,t)}function kf(s,t){s.uniform2iv(this.addr,t)}function Bf(s,t){s.uniform3iv(this.addr,t)}function zf(s,t){s.uniform4iv(this.addr,t)}function Hf(s,t){s.uniform1uiv(this.addr,t)}function Gf(s,t){s.uniform2uiv(this.addr,t)}function Vf(s,t){s.uniform3uiv(this.addr,t)}function Wf(s,t){s.uniform4uiv(this.addr,t)}function Xf(s,t,e){const n=this.cache,i=t.length,r=Qs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Gc,r[a])}function qf(s,t,e){const n=this.cache,i=t.length,r=Qs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Wc,r[a])}function Yf(s,t,e){const n=this.cache,i=t.length,r=Qs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Xc,r[a])}function $f(s,t,e){const n=this.cache,i=t.length,r=Qs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Vc,r[a])}function Kf(s){switch(s){case 5126:return Pf;case 35664:return Lf;case 35665:return If;case 35666:return Df;case 35674:return Uf;case 35675:return Nf;case 35676:return Ff;case 5124:case 35670:return Of;case 35667:case 35671:return kf;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return Hf;case 36294:return Gf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return $f}}class jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rf(e.type)}}class Zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kf(e.type)}}class Jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function Fo(s,t){s.seq.push(t),s.map[t.id]=t}function Qf(s,t,e){const n=s.name,i=n.length;for(Rr.lastIndex=0;;){const r=Rr.exec(n),a=Rr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Fo(e,l===void 0?new jf(o,s,t):new Zf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Jf(o),Fo(e,u)),e=u}}}class Gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Qf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Oo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const tp=37297;let ep=0;function np(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ko=new kt;function ip(s){jt._getMatrix(ko,jt.workingColorSpace,s);const t=`mat3( ${ko.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case Js:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+np(s.getShaderSource(t),a)}else return i}function sp(s,t){const e=ip(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rp(s,t){let e;switch(t){case Sl:e="Linear";break;case El:e="Reinhard";break;case wl:e="Cineon";break;case gc:e="ACESFilmic";break;case bl:e="AgX";break;case Al:e="Neutral";break;case Tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bs=new P;function ap(){jt.getLuminanceCoefficients(bs);const s=bs.x.toFixed(4),t=bs.y.toFixed(4),e=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function op(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function cp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ji(s){return s!==""}function zo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ho(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(s){return s.replace(hp,dp)}const up=new Map;function dp(s,t){let e=zt[t];if(e===void 0){const n=up.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ea(e)}const fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Go(s){return s.replace(fp,pp)}function pp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function gp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ai:case Ci:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _p(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function xp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ml:t="ENVMAP_BLENDING_MIX";break;case yl:t="ENVMAP_BLENDING_ADD";break}return t}function vp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=mp(e),l=gp(e),h=_p(e),u=xp(e),f=vp(e),p=op(e),g=cp(r),_=i.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ji).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ji).join(`
`),d.length>0&&(d+=`
`)):(m=[Vo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),d=[Vo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?zt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,sp("linearToOutputTexel",e.outputColorSpace),ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),a=Ea(a),a=zo(a,e),a=Ho(a,e),o=Ea(o),o=zo(o,e),o=Ho(o,e),a=Go(a),o=Go(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=M+m+a,v=M+d+o,I=Oo(i,i.VERTEX_SHADER,E),A=Oo(i,i.FRAGMENT_SHADER,v);i.attachShader(_,I),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(C){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(I).trim(),V=i.getShaderInfoLog(A).trim();let Y=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,A);else{const Z=Bo(i,I,"vertex"),z=Bo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+Z+`
`+z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||V==="")&&(X=!1);X&&(C.diagnostics={runnable:Y,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:d}})}i.deleteShader(I),i.deleteShader(A),R=new Gs(i,_),S=lp(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,tp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ep++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let yp=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ep(t),e.set(t,n)),n}}class Ep{constructor(t){this.id=yp++,this.code=t,this.usedTimes=0}}function wp(s,t,e,n,i,r,a){const o=new Ic,c=new Sp,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,L,F){const V=L.fog,Y=F.geometry,X=S.isMeshStandardMaterial?L.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),z=Z&&Z.mapping===Zs?Z.image.height:null,st=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=dt!==void 0?dt.length:0;let yt=0;Y.morphAttributes.position!==void 0&&(yt=1),Y.morphAttributes.normal!==void 0&&(yt=2),Y.morphAttributes.color!==void 0&&(yt=3);let Gt,q,et,St;if(st){const te=en[st];Gt=te.vertexShader,q=te.fragmentShader}else Gt=S.vertexShader,q=S.fragmentShader,c.update(S),et=c.getVertexShaderID(S),St=c.getFragmentShaderID(S);const at=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,Ht=F.isBatchedMesh===!0,fe=!!S.map,Yt=!!S.matcap,_e=!!Z,O=!!S.aoMap,He=!!S.lightMap,Wt=!!S.bumpMap,Xt=!!S.normalMap,At=!!S.displacementMap,ce=!!S.emissiveMap,bt=!!S.metalnessMap,b=!!S.roughnessMap,y=S.anisotropy>0,k=S.clearcoat>0,K=S.dispersion>0,J=S.iridescence>0,$=S.sheen>0,Et=S.transmission>0,ot=y&&!!S.anisotropyMap,pt=k&&!!S.clearcoatMap,$t=k&&!!S.clearcoatNormalMap,Q=k&&!!S.clearcoatRoughnessMap,gt=J&&!!S.iridescenceMap,Ct=J&&!!S.iridescenceThicknessMap,Pt=$&&!!S.sheenColorMap,_t=$&&!!S.sheenRoughnessMap,qt=!!S.specularMap,Bt=!!S.specularColorMap,re=!!S.specularIntensityMap,D=Et&&!!S.transmissionMap,rt=Et&&!!S.thicknessMap,W=!!S.gradientMap,j=!!S.alphaMap,ht=S.alphaTest>0,ct=!!S.alphaHash,Ft=!!S.extensions;let pe=Ln;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(pe=s.toneMapping);const Te={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Gt,fragmentShader:q,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ii,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:Yt,envMap:_e,envMapMode:_e&&Z.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:He,bumpMap:Wt,normalMap:Xt,displacementMap:f&&At,emissiveMap:ce,normalMapObjectSpace:Xt&&S.normalMapType===Ll,normalMapTangentSpace:Xt&&S.normalMapType===Ac,metalnessMap:bt,roughnessMap:b,anisotropy:y,anisotropyMap:ot,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:$t,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:Pt,sheenRoughnessMap:_t,specularMap:qt,specularColorMap:Bt,specularIntensityMap:re,transmission:Et,transmissionMap:D,thicknessMap:rt,gradientMap:W,opaque:S.transparent===!1&&S.blending===Si&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:ct,combine:S.combine,mapUv:fe&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:He&&_(S.lightMap.channel),bumpMapUv:Wt&&_(S.bumpMap.channel),normalMapUv:Xt&&_(S.normalMap.channel),displacementMapUv:At&&_(S.displacementMap.channel),emissiveMapUv:ce&&_(S.emissiveMap.channel),metalnessMapUv:bt&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:pt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(S.sheenRoughnessMap.channel),specularMapUv:qt&&_(S.specularMap.channel),specularColorMapUv:Bt&&_(S.specularColorMap.channel),specularIntensityMapUv:re&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:rt&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Xt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(fe||j),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:yt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ue,flipSided:S.side===Ce,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function d(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(x,S),E(x,S),x.push(s.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function M(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function E(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const x=g[S.type];let C;if(x){const L=en[x];C=ah.clone(L.uniforms)}else C=S.uniforms;return C}function I(S,x){let C;for(let L=0,F=h.length;L<F;L++){const V=h[L];if(V.cacheKey===x){C=V,++C.usedTimes;break}}return C===void 0&&(C=new Mp(s,x,S,r),h.push(C)),C}function A(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:R}}function Tp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function bp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,g,_,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||bp),n.length>1&&n.sort(f||Wo),i.length>1&&i.sort(f||Wo)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Ap(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Xo,s.set(n,[a])):i>=r.length?(a=new Xo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ut};break;case"SpotLight":e={position:new P,direction:new P,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Rp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Pp=0;function Lp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ip(s){const t=new Cp,e=Rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new ee,a=new ee;function o(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,M=0,E=0,v=0,I=0,A=0,T=0;l.sort(Lp);for(let S=0,x=l.length;S<x;S++){const C=l[S],L=C.color,F=C.intensity,V=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*F,u+=L.g*F,f+=L.b*F;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],F);T++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,z=e.get(C);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,M++}n.directional[p]=X,p++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(L).multiplyScalar(F),X.distance=V,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[_]=X;const Z=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,Z.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,C.castShadow){const z=e.get(C);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Y,v++}_++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(L).multiplyScalar(F),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const Z=C.shadow,z=e.get(C);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(F),X.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[d]=X,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==M||R.numPointShadows!==E||R.numSpotShadows!==v||R.numSpotMaps!==I||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=M,R.numPointShadows=E,R.numSpotShadows=v,R.numSpotMaps=I,R.numLightProbes=T,n.version=Pp++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){const E=l[d];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function qo(s){const t=new Ip(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Dp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new qo(s),t.set(i,[o])):r>=a.length?(o=new qo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Up extends Un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Np extends Un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Op=`uniform sampler2D shadow_pass;
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
}`;function kp(s,t,e){let n=new Fa;const i=new Lt,r=new Lt,a=new se,o=new Up({depthPacking:Pl}),c=new Np,l={},h=e.maxTextureSize,u={[Dn]:Ce,[Ce]:Dn,[ue]:ue},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Fp,fragmentShader:Op}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new B(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let d=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Pn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=d!==mn&&this.type===mn,V=d===mn&&this.type!==mn;for(let Y=0,X=A.length;Y<X;Y++){const Z=A[Y],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const st=z.getFrameExtents();if(i.multiply(st),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,z.mapSize.y=r.y)),z.map===null||F===!0||V===!0){const nt=this.type!==mn?{minFilter:ze,magFilter:ze}:{};z.map!==null&&z.map.dispose(),z.map=new jn(i.x,i.y,nt),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const dt=z.getViewportCount();for(let nt=0;nt<dt;nt++){const yt=z.getViewport(nt);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),L.viewport(a),z.updateMatrices(Z,nt),n=z.getFrustum(),v(T,R,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===mn&&M(z,R),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(S,x,C)};function M(A,T){const R=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,R,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,R,p,_,null)}function E(A,T,R,S){let x=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)x=C;else if(x=R.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=x.uuid,F=T.uuid;let V=l[L];V===void 0&&(V={},l[L]=V);let Y=V[F];Y===void 0&&(Y=x.clone(),V[F]=Y,T.addEventListener("dispose",I)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,S===mn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=s.properties.get(x);L.light=R}return x}function v(A,T,R,S,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===mn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=t.update(A),V=A.material;if(Array.isArray(V)){const Y=F.groups;for(let X=0,Z=Y.length;X<Z;X++){const z=Y[X],st=V[z.materialIndex];if(st&&st.visible){const dt=E(A,st,S,x);A.onBeforeShadow(s,A,T,R,F,dt,z),s.renderBufferDirect(R,null,F,dt,A,z),A.onAfterShadow(s,A,T,R,F,dt,z)}}}else if(V.visible){const Y=E(A,V,S,x);A.onBeforeShadow(s,A,T,R,F,Y,null),s.renderBufferDirect(R,null,F,Y,A,null),A.onAfterShadow(s,A,T,R,F,Y,null)}}const L=A.children;for(let F=0,V=L.length;F<V;F++)v(L[F],T,R,S,x)}function I(A){A.target.removeEventListener("dispose",I);for(const R in l){const S=l[R],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Bp={[kr]:Br,[zr]:Vr,[Hr]:Wr,[bi]:Gr,[Br]:kr,[Vr]:zr,[Wr]:Hr,[Gr]:bi};function zp(s,t){function e(){let D=!1;const rt=new se;let W=null;const j=new se(0,0,0,0);return{setMask:function(ht){W!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,Ft,pe,Te){Te===!0&&(ht*=pe,ct*=pe,Ft*=pe),rt.set(ht,ct,Ft,pe),j.equals(rt)===!1&&(s.clearColor(ht,ct,Ft,pe),j.copy(rt))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,W=null,j=null,ht=null;return{setReversed:function(ct){if(rt!==ct){const Ft=t.get("EXT_clip_control");rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const pe=ht;ht=null,this.setClear(pe)}rt=ct},getReversed:function(){return rt},setTest:function(ct){ct?at(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(ct){W!==ct&&!D&&(s.depthMask(ct),W=ct)},setFunc:function(ct){if(rt&&(ct=Bp[ct]),j!==ct){switch(ct){case kr:s.depthFunc(s.NEVER);break;case Br:s.depthFunc(s.ALWAYS);break;case zr:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case Hr:s.depthFunc(s.EQUAL);break;case Gr:s.depthFunc(s.GEQUAL);break;case Vr:s.depthFunc(s.GREATER);break;case Wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(rt&&(ct=1-ct),s.clearDepth(ct),ht=ct)},reset:function(){D=!1,W=null,j=null,ht=null,rt=!1}}}function i(){let D=!1,rt=null,W=null,j=null,ht=null,ct=null,Ft=null,pe=null,Te=null;return{setTest:function(te){D||(te?at(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(te){rt!==te&&!D&&(s.stencilMask(te),rt=te)},setFunc:function(te,Xe,cn){(W!==te||j!==Xe||ht!==cn)&&(s.stencilFunc(te,Xe,cn),W=te,j=Xe,ht=cn)},setOp:function(te,Xe,cn){(ct!==te||Ft!==Xe||pe!==cn)&&(s.stencilOp(te,Xe,cn),ct=te,Ft=Xe,pe=cn)},setLocked:function(te){D=te},setClear:function(te){Te!==te&&(s.clearStencil(te),Te=te)},reset:function(){D=!1,rt=null,W=null,j=null,ht=null,ct=null,Ft=null,pe=null,Te=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,E=null,v=null,I=null,A=null,T=new ut(0,0,0),R=0,S=!1,x=null,C=null,L=null,F=null,V=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=Z>=2);let st=null,dt={};const nt=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),Gt=new se().fromArray(nt),q=new se().fromArray(yt);function et(D,rt,W,j){const ht=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<W;Ft++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(rt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ct}const St={};St[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(bi),Wt(!1),Xt(Ja),at(s.CULL_FACE),O(Pn);function at(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ut(D,rt){return u[D]!==rt?(s.bindFramebuffer(D,rt),u[D]=rt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=rt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ht(D,rt){let W=p,j=!1;if(D){W=f.get(rt),W===void 0&&(W=[],f.set(rt,W));const ht=D.textures;if(W.length!==ht.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Ft=ht.length;ct<Ft;ct++)W[ct]=s.COLOR_ATTACHMENT0+ct;W.length=ht.length,j=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,j=!0);j&&s.drawBuffers(W)}function fe(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Yt={[Xn]:s.FUNC_ADD,[il]:s.FUNC_SUBTRACT,[sl]:s.FUNC_REVERSE_SUBTRACT};Yt[rl]=s.MIN,Yt[al]=s.MAX;const _e={[ol]:s.ZERO,[cl]:s.ONE,[ll]:s.SRC_COLOR,[Fr]:s.SRC_ALPHA,[ml]:s.SRC_ALPHA_SATURATE,[fl]:s.DST_COLOR,[ul]:s.DST_ALPHA,[hl]:s.ONE_MINUS_SRC_COLOR,[Or]:s.ONE_MINUS_SRC_ALPHA,[pl]:s.ONE_MINUS_DST_COLOR,[dl]:s.ONE_MINUS_DST_ALPHA,[gl]:s.CONSTANT_COLOR,[_l]:s.ONE_MINUS_CONSTANT_COLOR,[xl]:s.CONSTANT_ALPHA,[vl]:s.ONE_MINUS_CONSTANT_ALPHA};function O(D,rt,W,j,ht,ct,Ft,pe,Te,te){if(D===Pn){_===!0&&(Rt(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),D!==nl){if(D!==m||te!==S){if((d!==Xn||v!==Xn)&&(s.blendEquation(s.FUNC_ADD),d=Xn,v=Xn),te)switch(D){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case je:s.blendFunc(s.ONE,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case to:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case je:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case to:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,E=null,I=null,A=null,T.set(0,0,0),R=0,m=D,S=te}return}ht=ht||rt,ct=ct||W,Ft=Ft||j,(rt!==d||ht!==v)&&(s.blendEquationSeparate(Yt[rt],Yt[ht]),d=rt,v=ht),(W!==M||j!==E||ct!==I||Ft!==A)&&(s.blendFuncSeparate(_e[W],_e[j],_e[ct],_e[Ft]),M=W,E=j,I=ct,A=Ft),(pe.equals(T)===!1||Te!==R)&&(s.blendColor(pe.r,pe.g,pe.b,Te),T.copy(pe),R=Te),m=D,S=!1}function He(D,rt){D.side===ue?Rt(s.CULL_FACE):at(s.CULL_FACE);let W=D.side===Ce;rt&&(W=!W),Wt(W),D.blending===Si&&D.transparent===!1?O(Pn):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function Xt(D){D!==tl?(at(s.CULL_FACE),D!==C&&(D===Ja?s.cullFace(s.BACK):D===el?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),C=D}function At(D){D!==L&&(X&&s.lineWidth(D),L=D)}function ce(D,rt,W){D?(at(s.POLYGON_OFFSET_FILL),(F!==rt||V!==W)&&(s.polygonOffset(rt,W),F=rt,V=W)):Rt(s.POLYGON_OFFSET_FILL)}function bt(D){D?at(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function b(D){D===void 0&&(D=s.TEXTURE0+Y-1),st!==D&&(s.activeTexture(D),st=D)}function y(D,rt,W){W===void 0&&(st===null?W=s.TEXTURE0+Y-1:W=st);let j=dt[W];j===void 0&&(j={type:void 0,texture:void 0},dt[W]=j),(j.type!==D||j.texture!==rt)&&(st!==W&&(s.activeTexture(W),st=W),s.bindTexture(D,rt||St[D]),j.type=D,j.texture=rt)}function k(){const D=dt[st];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Gt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Gt.copy(D))}function _t(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function qt(D,rt){let W=l.get(rt);W===void 0&&(W=new WeakMap,l.set(rt,W));let j=W.get(D);j===void 0&&(j=s.getUniformBlockIndex(rt,D.name),W.set(D,j))}function Bt(D,rt){const j=l.get(rt).get(D);c.get(rt)!==j&&(s.uniformBlockBinding(rt,j,D.__bindingPointIndex),c.set(rt,j))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,dt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,E=null,v=null,I=null,A=null,T=new ut(0,0,0),R=0,S=!1,x=null,C=null,L=null,F=null,V=null,Gt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Rt,bindFramebuffer:Ut,drawBuffers:Ht,useProgram:fe,setBlending:O,setMaterial:He,setFlipSided:Wt,setCullFace:Xt,setLineWidth:At,setPolygonOffset:ce,setScissorTest:bt,activeTexture:b,bindTexture:y,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:gt,texImage3D:Ct,updateUBOMapping:qt,uniformBlockBinding:Bt,texStorage2D:$t,texStorage3D:Q,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:Pt,viewport:_t,reset:re}}function Yo(s,t,e,n){const i=Hp(n);switch(e){case yc:return s*t;case Ec:return s*t;case wc:return s*t*2;case La:return s*t/i.components*i.byteLength;case Ia:return s*t/i.components*i.byteLength;case Tc:return s*t*2/i.components*i.byteLength;case Da:return s*t*2/i.components*i.byteLength;case Sc:return s*t*3/i.components*i.byteLength;case Ze:return s*t*4/i.components*i.byteLength;case Ua:return s*t*4/i.components*i.byteLength;case Os:case ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bs:case zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kr:case Zr:return Math.max(s,16)*Math.max(t,8)/4;case $r:case jr:return Math.max(s,8)*Math.max(t,8)/2;case Jr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case aa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case oa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case la:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case da:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hs:case ma:case ga:return Math.ceil(s/4)*Math.ceil(t/4)*16;case bc:case _a:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xa:case va:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hp(s){switch(s){case xn:case xc:return{byteLength:1,components:1};case ts:case vc:case ns:return{byteLength:2,components:1};case Ra:case Pa:return{byteLength:2,components:4};case Kn:case Ca:case rn:return{byteLength:4,components:1};case Mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Gp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):Xs("canvas")}function _(b,y,k){let K=1;const J=bt(b);if((J.width>k||J.height>k)&&(K=k/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const $=Math.floor(K*J.width),Et=Math.floor(K*J.height);u===void 0&&(u=g($,Et));const ot=y?g($,Et):u;return ot.width=$,ot.height=Et,ot.getContext("2d").drawImage(b,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Et+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){s.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,y,k,K,J=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=y;if(y===s.RED&&(k===s.FLOAT&&($=s.R32F),k===s.HALF_FLOAT&&($=s.R16F),k===s.UNSIGNED_BYTE&&($=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.R8UI),k===s.UNSIGNED_SHORT&&($=s.R16UI),k===s.UNSIGNED_INT&&($=s.R32UI),k===s.BYTE&&($=s.R8I),k===s.SHORT&&($=s.R16I),k===s.INT&&($=s.R32I)),y===s.RG&&(k===s.FLOAT&&($=s.RG32F),k===s.HALF_FLOAT&&($=s.RG16F),k===s.UNSIGNED_BYTE&&($=s.RG8)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RG8UI),k===s.UNSIGNED_SHORT&&($=s.RG16UI),k===s.UNSIGNED_INT&&($=s.RG32UI),k===s.BYTE&&($=s.RG8I),k===s.SHORT&&($=s.RG16I),k===s.INT&&($=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGB8UI),k===s.UNSIGNED_SHORT&&($=s.RGB16UI),k===s.UNSIGNED_INT&&($=s.RGB32UI),k===s.BYTE&&($=s.RGB8I),k===s.SHORT&&($=s.RGB16I),k===s.INT&&($=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGBA8UI),k===s.UNSIGNED_SHORT&&($=s.RGBA16UI),k===s.UNSIGNED_INT&&($=s.RGBA32UI),k===s.BYTE&&($=s.RGBA8I),k===s.SHORT&&($=s.RGBA16I),k===s.INT&&($=s.RGBA32I)),y===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),y===s.RGBA){const Et=J?Js:jt.getTransfer(K);k===s.FLOAT&&($=s.RGBA32F),k===s.HALF_FLOAT&&($=s.RGBA16F),k===s.UNSIGNED_BYTE&&($=Et===ne?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(b,y){let k;return b?y===null||y===Kn||y===Ri?k=s.DEPTH24_STENCIL8:y===rn?k=s.DEPTH32F_STENCIL8:y===ts&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Kn||y===Ri?k=s.DEPTH_COMPONENT24:y===rn?k=s.DEPTH_COMPONENT32F:y===ts&&(k=s.DEPTH_COMPONENT16),k}function I(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ze&&b.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function A(b){const y=b.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&h.delete(y)}function T(b){const y=b.target;y.removeEventListener("dispose",T),x(y)}function R(b){const y=n.get(b);if(y.__webglInit===void 0)return;const k=b.source,K=f.get(k);if(K){const J=K[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(b),Object.keys(K).length===0&&f.delete(k)}n.remove(b)}function S(b){const y=n.get(b);s.deleteTexture(y.__webglTexture);const k=b.source,K=f.get(k);delete K[y.__cacheKey],a.memory.textures--}function x(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let J=0;J<y.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[K][J]);else s.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)s.deleteFramebuffer(y.__webglFramebuffer[K]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=b.textures;for(let K=0,J=k.length;K<J;K++){const $=n.get(k[K]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(b)}let C=0;function L(){C=0}function F(){const b=C;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),C+=1,b}function V(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function Y(b,y){const k=n.get(b);if(b.isVideoTexture&&At(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,b,y);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function X(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){q(k,b,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function Z(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){q(k,b,y);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function z(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){et(k,b,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const st={[Qi]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Yr]:s.MIRRORED_REPEAT},dt={[ze]:s.NEAREST,[Cl]:s.NEAREST_MIPMAP_NEAREST,[as]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[er]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},nt={[Il]:s.NEVER,[kl]:s.ALWAYS,[Dl]:s.LESS,[Cc]:s.LEQUAL,[Ul]:s.EQUAL,[Ol]:s.GEQUAL,[Nl]:s.GREATER,[Fl]:s.NOTEQUAL};function yt(b,y){if(y.type===rn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===er||y.magFilter===as||y.magFilter===$n||y.minFilter===sn||y.minFilter===er||y.minFilter===as||y.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,st[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,st[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,st[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,dt[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,dt[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ze||y.minFilter!==as&&y.minFilter!==$n||y.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Gt(b,y){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const K=y.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const $=V(y);if($!==b.__cacheKey){J[$]===void 0&&(J[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[$].usedTimes++;const Et=J[b.__cacheKey];Et!==void 0&&(J[b.__cacheKey].usedTimes--,Et.usedTimes===0&&S(y)),b.__cacheKey=$,b.__webglTexture=J[$].texture}return k}function q(b,y,k){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);const J=Gt(b,y),$=y.source;e.bindTexture(K,b.__webglTexture,s.TEXTURE0+k);const Et=n.get($);if($.version!==Et.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const ot=jt.getPrimaries(jt.workingColorSpace),pt=y.colorSpace===Rn?null:jt.getPrimaries(y.colorSpace),$t=y.colorSpace===Rn||ot===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Q=_(y.image,!1,i.maxTextureSize);Q=ce(y,Q);const gt=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let Pt=E(y.internalFormat,gt,Ct,y.colorSpace,y.isVideoTexture);yt(K,y);let _t;const qt=y.mipmaps,Bt=y.isVideoTexture!==!0,re=Et.__version===void 0||J===!0,D=$.dataReady,rt=I(y,Q);if(y.isDepthTexture)Pt=v(y.format===Pi,y.type),re&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,Pt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Pt,Q.width,Q.height,0,gt,Ct,null));else if(y.isDataTexture)if(qt.length>0){Bt&&re&&e.texStorage2D(s.TEXTURE_2D,rt,Pt,qt[0].width,qt[0].height);for(let W=0,j=qt.length;W<j;W++)_t=qt[W],Bt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,W,Pt,_t.width,_t.height,0,gt,Ct,_t.data);y.generateMipmaps=!1}else Bt?(re&&e.texStorage2D(s.TEXTURE_2D,rt,Pt,Q.width,Q.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,gt,Ct,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,Q.width,Q.height,0,gt,Ct,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Pt,qt[0].width,qt[0].height,Q.depth);for(let W=0,j=qt.length;W<j;W++)if(_t=qt[W],y.format!==Ze)if(gt!==null)if(Bt){if(D)if(y.layerUpdates.size>0){const ht=Yo(_t.width,_t.height,y.format,y.type);for(const ct of y.layerUpdates){const Ft=_t.data.subarray(ct*ht/_t.data.BYTES_PER_ELEMENT,(ct+1)*ht/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ct,_t.width,_t.height,1,gt,Ft)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,Q.depth,gt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Pt,_t.width,_t.height,Q.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,Q.depth,gt,Ct,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Pt,_t.width,_t.height,Q.depth,0,gt,Ct,_t.data)}else{Bt&&re&&e.texStorage2D(s.TEXTURE_2D,rt,Pt,qt[0].width,qt[0].height);for(let W=0,j=qt.length;W<j;W++)_t=qt[W],y.format!==Ze?gt!==null?Bt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,W,Pt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(y.isDataArrayTexture)if(Bt){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Pt,Q.width,Q.height,Q.depth),D)if(y.layerUpdates.size>0){const W=Yo(Q.width,Q.height,y.format,y.type);for(const j of y.layerUpdates){const ht=Q.data.subarray(j*W/Q.data.BYTES_PER_ELEMENT,(j+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,gt,Ct,ht)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,gt,Ct,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,Q.width,Q.height,Q.depth,0,gt,Ct,Q.data);else if(y.isData3DTexture)Bt?(re&&e.texStorage3D(s.TEXTURE_3D,rt,Pt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,gt,Ct,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,Q.width,Q.height,Q.depth,0,gt,Ct,Q.data);else if(y.isFramebufferTexture){if(re)if(Bt)e.texStorage2D(s.TEXTURE_2D,rt,Pt,Q.width,Q.height);else{let W=Q.width,j=Q.height;for(let ht=0;ht<rt;ht++)e.texImage2D(s.TEXTURE_2D,ht,Pt,W,j,0,gt,Ct,null),W>>=1,j>>=1}}else if(qt.length>0){if(Bt&&re){const W=bt(qt[0]);e.texStorage2D(s.TEXTURE_2D,rt,Pt,W.width,W.height)}for(let W=0,j=qt.length;W<j;W++)_t=qt[W],Bt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,gt,Ct,_t):e.texImage2D(s.TEXTURE_2D,W,Pt,gt,Ct,_t);y.generateMipmaps=!1}else if(Bt){if(re){const W=bt(Q);e.texStorage2D(s.TEXTURE_2D,rt,Pt,W.width,W.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Ct,Q)}else e.texImage2D(s.TEXTURE_2D,0,Pt,gt,Ct,Q);m(y)&&d(K),Et.__version=$.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function et(b,y,k){if(y.image.length!==6)return;const K=Gt(b,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+k);const $=n.get(J);if(J.version!==$.__version||K===!0){e.activeTexture(s.TEXTURE0+k);const Et=jt.getPrimaries(jt.workingColorSpace),ot=y.colorSpace===Rn?null:jt.getPrimaries(y.colorSpace),pt=y.colorSpace===Rn||Et===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let j=0;j<6;j++)!$t&&!Q?gt[j]=_(y.image[j],!0,i.maxCubemapSize):gt[j]=Q?y.image[j].image:y.image[j],gt[j]=ce(y,gt[j]);const Ct=gt[0],Pt=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),qt=E(y.internalFormat,Pt,_t,y.colorSpace),Bt=y.isVideoTexture!==!0,re=$.__version===void 0||K===!0,D=J.dataReady;let rt=I(y,Ct);yt(s.TEXTURE_CUBE_MAP,y);let W;if($t){Bt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,qt,Ct.width,Ct.height);for(let j=0;j<6;j++){W=gt[j].mipmaps;for(let ht=0;ht<W.length;ht++){const ct=W[ht];y.format!==Ze?Pt!==null?Bt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,ct.width,ct.height,Pt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,qt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,ct.width,ct.height,Pt,_t,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,qt,ct.width,ct.height,0,Pt,_t,ct.data)}}}else{if(W=y.mipmaps,Bt&&re){W.length>0&&rt++;const j=bt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,qt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,gt[j].width,gt[j].height,Pt,_t,gt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,gt[j].width,gt[j].height,0,Pt,_t,gt[j].data);for(let ht=0;ht<W.length;ht++){const Ft=W[ht].image[j].image;Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Ft.width,Ft.height,Pt,_t,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,qt,Ft.width,Ft.height,0,Pt,_t,Ft.data)}}else{Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,_t,gt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Pt,_t,gt[j]);for(let ht=0;ht<W.length;ht++){const ct=W[ht];Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Pt,_t,ct.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,qt,Pt,_t,ct.image[j])}}}m(y)&&d(s.TEXTURE_CUBE_MAP),$.__version=J.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function St(b,y,k,K,J,$){const Et=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),pt=E(k.internalFormat,Et,ot,k.colorSpace),$t=n.get(y),Q=n.get(k);if(Q.__renderTarget=y,!$t.__hasExternalTextures){const gt=Math.max(1,y.width>>$),Ct=Math.max(1,y.height>>$);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,$,pt,gt,Ct,y.depth,0,Et,ot,null):e.texImage2D(J,$,pt,gt,Ct,0,Et,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,Q.__webglTexture,0,Wt(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,Q.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(b,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const K=y.depthTexture,J=K&&K.isDepthTexture?K.type:null,$=v(y.stencilBuffer,J),Et=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Wt(y);Xt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,$,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,b)}else{const K=y.textures;for(let J=0;J<K.length;J++){const $=K[J],Et=r.convert($.format,$.colorSpace),ot=r.convert($.type),pt=E($.internalFormat,Et,ot,$.colorSpace),$t=Wt(y);k&&Xt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,pt,y.width,y.height):Xt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,pt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const J=K.__webglTexture,$=Wt(y);if(y.depthTexture.format===Ei)Xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===Pi)Xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ut(b){const y=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=K}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Rt(y.__webglFramebuffer,b)}else if(k){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=s.createRenderbuffer(),at(y.__webglDepthbuffer[K],b,!1);else{const J=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),at(y.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(b,y,k){const K=n.get(b);y!==void 0&&St(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ut(b)}function fe(b){const y=b.texture,k=n.get(b),K=n.get(y);b.addEventListener("dispose",T);const J=b.textures,$=b.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let pt=0;pt<y.mipmaps.length;pt++)k.__webglFramebuffer[ot][pt]=s.createFramebuffer()}else k.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)k.__webglFramebuffer[ot]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ot=0,pt=J.length;ot<pt;ot++){const $t=n.get(J[ot]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Xt(b)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const pt=J[ot];k.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ot]);const $t=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),gt=E(pt.internalFormat,$t,Q,pt.colorSpace,b.isXRRenderTarget===!0),Ct=Wt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,gt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,k.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),at(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),yt(s.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)St(k.__webglFramebuffer[ot][pt],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else St(k.__webglFramebuffer[ot],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(y)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,pt=J.length;ot<pt;ot++){const $t=J[ot],Q=n.get($t);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),yt(s.TEXTURE_2D,$t),St(k.__webglFramebuffer,b,$t,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m($t)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),yt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)St(k.__webglFramebuffer[pt],b,y,s.COLOR_ATTACHMENT0,ot,pt);else St(k.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,ot,0);m(y)&&d(ot),e.unbindTexture()}b.depthBuffer&&Ut(b)}function Yt(b){const y=b.textures;for(let k=0,K=y.length;k<K;k++){const J=y[k];if(m(J)){const $=M(b),Et=n.get(J).__webglTexture;e.bindTexture($,Et),d($),e.unbindTexture()}}}const _e=[],O=[];function He(b){if(b.samples>0){if(Xt(b)===!1){const y=b.textures,k=b.width,K=b.height;let J=s.COLOR_BUFFER_BIT;const $=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(b),ot=y.length>1;if(ot)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[pt]);const $t=n.get(y[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,J,s.NEAREST),c===!0&&(_e.length=0,O.length=0,_e.push(s.COLOR_ATTACHMENT0+pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(_e.push($),O.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[pt]);const $t=n.get(y[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Wt(b){return Math.min(i.maxSamples,b.samples)}function Xt(b){const y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(b){const y=a.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function ce(b,y){const k=b.colorSpace,K=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Ii&&k!==Rn&&(jt.getTransfer(k)===ne?(K!==Ze||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function bt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=Ht,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Xt}function Vp(s,t){function e(n,i=Rn){let r;const a=jt.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Ra)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return s.BYTE;if(n===vc)return s.SHORT;if(n===ts)return s.UNSIGNED_SHORT;if(n===Ca)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===ns)return s.HALF_FLOAT;if(n===yc)return s.ALPHA;if(n===Sc)return s.RGB;if(n===Ze)return s.RGBA;if(n===Ec)return s.LUMINANCE;if(n===wc)return s.LUMINANCE_ALPHA;if(n===Ei)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===La)return s.RED;if(n===Ia)return s.RED_INTEGER;if(n===Tc)return s.RG;if(n===Da)return s.RG_INTEGER;if(n===Ua)return s.RGBA_INTEGER;if(n===Os||n===ks||n===Bs||n===zs)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$r||n===Kr||n===jr||n===Zr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jr||n===Qr||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jr||n===Qr)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hs||n===ma||n===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hs)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===_a||n===xa||n===va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Wp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xp={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $p{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new on({vertexShader:qp,fragmentShader:Yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new Kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kp extends Di{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=new $p,m=e.getContextAttributes();let d=null,M=null;const E=[],v=[],I=new Lt;let A=null;const T=new Be;T.viewport=new se;const R=new Be;R.viewport=new se;const S=[T,R],x=new Wp;let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=E[q];return et===void 0&&(et=new Pr,E[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=E[q];return et===void 0&&(et=new Pr,E[q]=et),et.getGripSpace()},this.getHand=function(q){let et=E[q];return et===void 0&&(et=new Pr,E[q]=et),et.getHandSpace()};function F(q){const et=v.indexOf(q.inputSource);if(et===-1)return;const St=E[et];St!==void 0&&(St.update(q.inputSource,q.frame,l||a),St.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<E.length;q++){const et=v[q];et!==null&&(v[q]=null,E[q].disconnect(et))}C=null,L=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,M=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new jn(p.framebufferWidth,p.framebufferHeight,{format:Ze,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,St=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Pi:Ei,St=m.stencil?Ri:Kn);const Rt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Rt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new jn(f.textureWidth,f.textureHeight,{format:Ze,type:xn,depthTexture:new Hc(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(q){for(let et=0;et<q.removed.length;et++){const St=q.removed[et],at=v.indexOf(St);at>=0&&(v[at]=null,E[at].disconnect(St))}for(let et=0;et<q.added.length;et++){const St=q.added[et];let at=v.indexOf(St);if(at===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=v.length){v.push(St),at=Ut;break}else if(v[Ut]===null){v[Ut]=St,at=Ut;break}if(at===-1)break}const Rt=E[at];Rt&&Rt.connect(St)}}const X=new P,Z=new P;function z(q,et,St){X.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const at=X.distanceTo(Z),Rt=et.projectionMatrix.elements,Ut=St.projectionMatrix.elements,Ht=Rt[14]/(Rt[10]-1),fe=Rt[14]/(Rt[10]+1),Yt=(Rt[9]+1)/Rt[5],_e=(Rt[9]-1)/Rt[5],O=(Rt[8]-1)/Rt[0],He=(Ut[8]+1)/Ut[0],Wt=Ht*O,Xt=Ht*He,At=at/(-O+He),ce=At*-O;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ce),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=Ht+At,b=fe+At,y=Wt-ce,k=Xt+(at-ce),K=Yt*fe/b*bt,J=_e*fe/b*bt;q.projectionMatrix.makePerspective(y,k,K,J,bt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,St=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(St=_.depthFar)),x.near=R.near=T.near=et,x.far=R.far=T.far=St,(C!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,L=x.far),T.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,x.layers.mask=T.layers.mask|R.layers.mask;const at=q.parent,Rt=x.cameras;st(x,at);for(let Ut=0;Ut<Rt.length;Ut++)st(Rt[Ut],at);Rt.length===2?z(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),dt(q,x,at)};function dt(q,et,St){St===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ya*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let nt=null;function yt(q,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const St=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let at=!1;St.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Ut=0;Ut<St.length;Ut++){const Ht=St[Ut];let fe=null;if(p!==null)fe=p.getViewport(Ht);else{const _e=u.getViewSubImage(f,Ht);fe=_e.viewport,Ut===0&&(t.setRenderTargetTextures(M,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),t.setRenderTarget(M))}let Yt=S[Ut];Yt===void 0&&(Yt=new Be,Yt.layers.enable(Ut),Yt.viewport=new se,S[Ut]=Yt),Yt.matrix.fromArray(Ht.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Ht.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(fe.x,fe.y,fe.width,fe.height),Ut===0&&(x.matrix.copy(Yt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Yt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Ut=u.getDepthInformation(St[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,i.renderState)}}for(let St=0;St<E.length;St++){const at=v[St],Rt=E[St];at!==null&&Rt!==void 0&&Rt.update(at,et,l||a)}nt&&nt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Gt=new Bc;Gt.setAnimationLoop(yt),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const Gn=new an,jp=new ee;function Zp(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Fc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,E,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,M,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ce&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ce&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),E=M.envMap,v=M.envMapRotation;E&&(m.envMap.value=E,Gn.copy(v),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(Gn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ce&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){const v=E.program;n.uniformBlockBinding(M,v)}function l(M,E){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(M,I);const A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const E=u();M.__bindingPointIndex=E;const v=s.createBuffer(),I=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const E=i[M.id],v=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,T=v.length;A<T;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,x=R.length;S<x;S++){const C=R[S];if(p(C,A,S,I)===!0){const L=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let Y=0;Y<F.length;Y++){const X=F[Y],Z=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,L+V,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,E,v,I){const A=M.value,T=E+"_"+v;if(I[T]===void 0)return typeof A=="number"||typeof A=="boolean"?I[T]=A:I[T]=A.clone(),!0;{const R=I[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const E=M.uniforms;let v=0;const I=16;for(let T=0,R=E.length;T<R;T++){const S=Array.isArray(E[T])?E[T]:[E[T]];for(let x=0,C=S.length;x<C;x++){const L=S[x],F=Array.isArray(L.value)?L.value:[L.value];for(let V=0,Y=F.length;V<Y;V++){const X=F[V],Z=_(X),z=v%I,st=z%Z.boundary,dt=z+st;v+=st,dt!==0&&I-dt<Z.storage&&(v+=I-dt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=Z.storage}}}const A=v%I;return A>0&&(v+=I-A),M.__size=v,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function d(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:d}}class Qp{constructor(t={}){const{canvas:e=zl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=Ln,this.toneMappingExposure=1;const v=this;let I=!1,A=0,T=0,R=null,S=-1,x=null;const C=new se,L=new se;let F=null;const V=new ut(0);let Y=0,X=e.width,Z=e.height,z=1,st=null,dt=null;const nt=new se(0,0,X,Z),yt=new se(0,0,X,Z);let Gt=!1;const q=new Fa;let et=!1,St=!1;const at=new ee,Rt=new ee,Ut=new P,Ht=new se,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function _e(){return R===null?z:1}let O=n;function He(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){const U="webgl2";if(O=He(U,w),O===null)throw He(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Wt,Xt,At,ce,bt,b,y,k,K,J,$,Et,ot,pt,$t,Q,gt,Ct,Pt,_t,qt,Bt,re,D;function rt(){Wt=new sf(O),Wt.init(),Bt=new Vp(O,Wt),Xt=new Zd(O,Wt,t,Bt),At=new zp(O,Wt),Xt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),ce=new of(O),bt=new Tp,b=new Gp(O,Wt,At,bt,Xt,Bt,ce),y=new Qd(v),k=new nf(v),K=new fh(O),re=new Kd(O,K),J=new rf(O,K,ce,re),$=new lf(O,J,K,ce),Pt=new cf(O,Xt,b),Q=new Jd(bt),Et=new wp(v,y,k,Wt,Xt,re,Q),ot=new Zp(v,bt),pt=new Ap,$t=new Dp(Wt),Ct=new $d(v,y,k,At,$,p,c),gt=new kp(v,$,Xt),D=new Jp(O,ce,Xt,At),_t=new jd(O,Wt,ce),qt=new af(O,Wt,ce),ce.programs=Et.programs,v.capabilities=Xt,v.extensions=Wt,v.properties=bt,v.renderLists=pt,v.shadowMap=gt,v.state=At,v.info=ce}rt();const W=new Kp(v,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(X,Z,!1))},this.getSize=function(w){return w.set(X,Z)},this.setSize=function(w,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,Z=U,e.width=Math.floor(w*z),e.height=Math.floor(U*z),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(X*z,Z*z).floor()},this.setDrawingBufferSize=function(w,U,H){X=w,Z=U,z=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,U,H,G){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,U,H,G),At.viewport(C.copy(nt).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,U,H,G){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,U,H,G),At.scissor(L.copy(yt).multiplyScalar(z).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(w){At.setScissorTest(Gt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,U=!0,H=!0){let G=0;if(w){let N=!1;if(R!==null){const tt=R.texture.format;N=tt===Ua||tt===Da||tt===Ia}if(N){const tt=R.texture.type,lt=tt===xn||tt===Kn||tt===ts||tt===Ri||tt===Ra||tt===Pa,xt=Ct.getClearColor(),vt=Ct.getClearAlpha(),It=xt.r,Ot=xt.g,Mt=xt.b;lt?(g[0]=It,g[1]=Ot,g[2]=Mt,g[3]=vt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=It,_[1]=Ot,_[2]=Mt,_[3]=vt,O.clearBufferiv(O.COLOR,0,_))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),pt.dispose(),$t.dispose(),bt.dispose(),y.dispose(),k.dispose(),$.dispose(),re.dispose(),D.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",Wa),W.removeEventListener("sessionend",Xa),Fn.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=ce.autoReset,U=gt.enabled,H=gt.autoUpdate,G=gt.needsUpdate,N=gt.type;rt(),ce.autoReset=w,gt.enabled=U,gt.autoUpdate=H,gt.needsUpdate=G,gt.type=N}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ft(w){const U=w.target;U.removeEventListener("dispose",Ft),pe(U)}function pe(w){Te(w),bt.remove(w)}function Te(w){const U=bt.get(w).programs;U!==void 0&&(U.forEach(function(H){Et.releaseProgram(H)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,G,N,tt){U===null&&(U=fe);const lt=N.isMesh&&N.matrixWorld.determinant()<0,xt=Zc(w,U,H,G,N);At.setMaterial(G,lt);let vt=H.index,It=1;if(G.wireframe===!0){if(vt=J.getWireframeAttribute(H),vt===void 0)return;It=2}const Ot=H.drawRange,Mt=H.attributes.position;let Zt=Ot.start*It,ae=(Ot.start+Ot.count)*It;tt!==null&&(Zt=Math.max(Zt,tt.start*It),ae=Math.min(ae,(tt.start+tt.count)*It)),vt!==null?(Zt=Math.max(Zt,0),ae=Math.min(ae,vt.count)):Mt!=null&&(Zt=Math.max(Zt,0),ae=Math.min(ae,Mt.count));const le=ae-Zt;if(le<0||le===1/0)return;re.setup(N,G,xt,H,vt);let De,Jt=_t;if(vt!==null&&(De=K.get(vt),Jt=qt,Jt.setIndex(De)),N.isMesh)G.wireframe===!0?(At.setLineWidth(G.wireframeLinewidth*_e()),Jt.setMode(O.LINES)):Jt.setMode(O.TRIANGLES);else if(N.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),At.setLineWidth(wt*_e()),N.isLineSegments?Jt.setMode(O.LINES):N.isLineLoop?Jt.setMode(O.LINE_LOOP):Jt.setMode(O.LINE_STRIP)}else N.isPoints?Jt.setMode(O.POINTS):N.isSprite&&Jt.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,ln=N._multiDrawCounts,Qt=N._multiDrawCount,qe=vt?K.get(vt).bytesPerElement:1,Qn=bt.get(G).currentProgram.getUniforms();for(let Fe=0;Fe<Qt;Fe++)Qn.setValue(O,"_gl_DrawID",Fe),Jt.render(wt[Fe]/qe,ln[Fe])}else if(N.isInstancedMesh)Jt.renderInstances(Zt,le,N.count);else if(H.isInstancedBufferGeometry){const wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ln=Math.min(H.instanceCount,wt);Jt.renderInstances(Zt,le,ln)}else Jt.render(Zt,le)};function te(w,U,H){w.transparent===!0&&w.side===ue&&w.forceSinglePass===!1?(w.side=Ce,w.needsUpdate=!0,rs(w,U,H),w.side=Dn,w.needsUpdate=!0,rs(w,U,H),w.side=ue):rs(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),d=$t.get(H),d.init(U),E.push(d),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),w!==H&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const G=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const xt=tt[lt];te(xt,H,N),G.add(xt)}else te(tt,H,N),G.add(tt)}),E.pop(),d=null,G},this.compileAsync=function(w,U,H=null){const G=this.compile(w,U,H);return new Promise(N=>{function tt(){if(G.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&G.delete(lt)}),G.size===0){N(w);return}setTimeout(tt,10)}Wt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Xe=null;function cn(w){Xe&&Xe(w)}function Wa(){Fn.stop()}function Xa(){Fn.start()}const Fn=new Bc;Fn.setAnimationLoop(cn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(w){Xe=w,W.setAnimationLoop(w),w===null?Fn.stop():Fn.start()},W.addEventListener("sessionstart",Wa),W.addEventListener("sessionend",Xa),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,R),d=$t.get(w,E.length),d.init(U),E.push(d),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,et=Q.init(this.clippingPlanes,St),m=pt.get(w,M.length),m.init(),M.push(m),W.enabled===!0&&W.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&tr(tt,U,-1/0,v.sortObjects)}tr(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,dt),Yt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Yt&&Ct.addToRenderList(m,w),this.info.render.frame++,et===!0&&Q.beginShadows();const H=d.state.shadowsArray;gt.render(H,w,U),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let lt=0,xt=tt.length;lt<xt;lt++){const vt=tt[lt];Ya(G,N,w,vt)}Yt&&Ct.render(w);for(let lt=0,xt=tt.length;lt<xt;lt++){const vt=tt[lt];qa(m,w,vt,vt.viewport)}}else N.length>0&&Ya(G,N,w,U),Yt&&Ct.render(w),qa(m,w,U);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,U),re.resetDefaultState(),S=-1,x=null,E.pop(),E.length>0?(d=E[E.length-1],et===!0&&Q.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function tr(w,U,H,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){G&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const lt=$.update(w),xt=w.material;xt.visible&&m.push(w,lt,xt,H,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const lt=$.update(w),xt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ht.copy(lt.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(xt)){const vt=lt.groups;for(let It=0,Ot=vt.length;It<Ot;It++){const Mt=vt[It],Zt=xt[Mt.materialIndex];Zt&&Zt.visible&&m.push(w,lt,Zt,H,Ht.z,Mt)}}else xt.visible&&m.push(w,lt,xt,H,Ht.z,null)}}const tt=w.children;for(let lt=0,xt=tt.length;lt<xt;lt++)tr(tt[lt],U,H,G)}function qa(w,U,H,G){const N=w.opaque,tt=w.transmissive,lt=w.transparent;d.setupLightsView(H),et===!0&&Q.setGlobalState(v.clippingPlanes,H),G&&At.viewport(C.copy(G)),N.length>0&&ss(N,U,H),tt.length>0&&ss(tt,U,H),lt.length>0&&ss(lt,U,H),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ya(w,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new jn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?ns:xn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[G.id],lt=G.viewport||C;tt.setSize(lt.z,lt.w);const xt=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(V),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Yt&&Ct.render(H);const vt=v.toneMapping;v.toneMapping=Ln;const It=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),et===!0&&Q.setGlobalState(v.clippingPlanes,G),ss(w,H,G),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Mt=0,Zt=U.length;Mt<Zt;Mt++){const ae=U[Mt],le=ae.object,De=ae.geometry,Jt=ae.material,wt=ae.group;if(Jt.side===ue&&le.layers.test(G.layers)){const ln=Jt.side;Jt.side=Ce,Jt.needsUpdate=!0,$a(le,H,G,De,Jt,wt),Jt.side=ln,Jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}v.setRenderTarget(xt),v.setClearColor(V,Y),It!==void 0&&(G.viewport=It),v.toneMapping=vt}function ss(w,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=w.length;N<tt;N++){const lt=w[N],xt=lt.object,vt=lt.geometry,It=G===null?lt.material:G,Ot=lt.group;xt.layers.test(H.layers)&&$a(xt,U,H,vt,It,Ot)}}function $a(w,U,H,G,N,tt){w.onBeforeRender(v,U,H,G,N,tt),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,H,G,w,tt),N.transparent===!0&&N.side===ue&&N.forceSinglePass===!1?(N.side=Ce,N.needsUpdate=!0,v.renderBufferDirect(H,U,G,N,w,tt),N.side=Dn,N.needsUpdate=!0,v.renderBufferDirect(H,U,G,N,w,tt),N.side=ue):v.renderBufferDirect(H,U,G,N,w,tt),w.onAfterRender(v,U,H,G,N,tt)}function rs(w,U,H){U.isScene!==!0&&(U=fe);const G=bt.get(w),N=d.state.lights,tt=d.state.shadowsArray,lt=N.state.version,xt=Et.getParameters(w,N.state,tt,U,H),vt=Et.getProgramCacheKey(xt);let It=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?k:y).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",Ft),It=new Map,G.programs=It);let Ot=It.get(vt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===lt)return ja(w,xt),Ot}else xt.uniforms=Et.getUniforms(w),w.onBeforeCompile(xt,v),Ot=Et.acquireProgram(xt,vt),It.set(vt,Ot),G.uniforms=xt.uniforms;const Mt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=Q.uniform),ja(w,xt),G.needsLights=Qc(w),G.lightsStateVersion=lt,G.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function Ka(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Gs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ja(w,U){const H=bt.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Zc(w,U,H,G,N){U.isScene!==!0&&(U=fe),b.resetTextureUnits();const tt=U.fog,lt=G.isMeshStandardMaterial?U.environment:null,xt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ii,vt=(G.isMeshStandardMaterial?k:y).get(G.envMap||lt),It=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Mt=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let le=Ln;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=v.toneMapping);const De=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Jt=De!==void 0?De.length:0,wt=bt.get(G),ln=d.state.lights;if(et===!0&&(St===!0||w!==x)){const Ge=w===x&&G.id===S;Q.setState(G,w,Ge)}let Qt=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ln.state.version||wt.outputColorSpace!==xt||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==vt||G.fog===!0&&wt.fog!==tt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Q.numPlanes||wt.numIntersection!==Q.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Ot||wt.morphTargets!==Mt||wt.morphNormals!==Zt||wt.morphColors!==ae||wt.toneMapping!==le||wt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,wt.__version=G.version);let qe=wt.currentProgram;Qt===!0&&(qe=rs(G,U,N));let Qn=!1,Fe=!1,Ni=!1;const he=qe.getUniforms(),Je=wt.uniforms;if(At.useProgram(qe.program)&&(Qn=!0,Fe=!0,Ni=!0),G.id!==S&&(S=G.id,Fe=!0),Qn||x!==w){At.buffers.depth.getReversed()?(at.copy(w.projectionMatrix),Gl(at),Vl(at),he.setValue(O,"projectionMatrix",at)):he.setValue(O,"projectionMatrix",w.projectionMatrix),he.setValue(O,"viewMatrix",w.matrixWorldInverse);const vn=he.map.cameraPosition;vn!==void 0&&vn.setValue(O,Ut.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&he.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Fe=!0,Ni=!0)}if(N.isSkinnedMesh){he.setOptional(O,N,"bindMatrix"),he.setOptional(O,N,"bindMatrixInverse");const Ge=N.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),he.setValue(O,"boneTexture",Ge.boneTexture,b))}N.isBatchedMesh&&(he.setOptional(O,N,"batchingTexture"),he.setValue(O,"batchingTexture",N._matricesTexture,b),he.setOptional(O,N,"batchingIdTexture"),he.setValue(O,"batchingIdTexture",N._indirectTexture,b),he.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(O,"batchingColorTexture",N._colorsTexture,b));const Fi=H.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Pt.update(N,H,qe),(Fe||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,he.setValue(O,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Je.envMap.value=vt,Je.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Je.envMapIntensity.value=U.environmentIntensity),Fe&&(he.setValue(O,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&Jc(Je,Ni),tt&&G.fog===!0&&ot.refreshFogUniforms(Je,tt),ot.refreshMaterialUniforms(Je,G,z,Z,d.state.transmissionRenderTarget[w.id]),Gs.upload(O,Ka(wt),Je,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Gs.upload(O,Ka(wt),Je,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(O,"center",N.center),he.setValue(O,"modelViewMatrix",N.modelViewMatrix),he.setValue(O,"normalMatrix",N.normalMatrix),he.setValue(O,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ge=G.uniformsGroups;for(let vn=0,Mn=Ge.length;vn<Mn;vn++){const Za=Ge[vn];D.update(Za,qe),D.bind(Za,qe)}}return qe}function Jc(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Qc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,H){bt.get(w.texture).__webglTexture=U,bt.get(w.depthTexture).__webglTexture=H;const G=bt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const H=bt.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){R=w,A=U,T=H;let G=!0,N=null,tt=!1,lt=!1;if(w){const vt=bt.get(w);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(vt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(vt.__hasExternalTextures)b.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Mt=w.depthTexture;if(vt.__boundDepthTexture!==Mt){if(Mt!==null&&bt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(lt=!0);const Ot=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?N=Ot[U][H]:N=Ot[U],tt=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?N=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[H]:N=Ot,C.copy(w.viewport),L.copy(w.scissor),F=w.scissorTest}else C.copy(nt).multiplyScalar(z).floor(),L.copy(yt).multiplyScalar(z).floor(),F=Gt;if(At.bindFramebuffer(O.FRAMEBUFFER,N)&&G&&At.drawBuffers(w,N),At.viewport(C),At.scissor(L),At.setScissorTest(F),tt){const vt=bt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,H)}else if(lt){const vt=bt.get(w.texture),It=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,vt.__webglTexture,H||0,It)}S=-1},this.readRenderTargetPixels=function(w,U,H,G,N,tt,lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(xt=xt[lt]),xt){At.bindFramebuffer(O.FRAMEBUFFER,xt);try{const vt=w.texture,It=vt.format,Ot=vt.type;if(!Xt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&H>=0&&H<=w.height-N&&O.readPixels(U,H,G,N,Bt.convert(It),Bt.convert(Ot),tt)}finally{const vt=R!==null?bt.get(R).__webglFramebuffer:null;At.bindFramebuffer(O.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,G,N,tt,lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(xt=xt[lt]),xt){const vt=w.texture,It=vt.format,Ot=vt.type;if(!Xt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&H>=0&&H<=w.height-N){At.bindFramebuffer(O.FRAMEBUFFER,xt);const Mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.bufferData(O.PIXEL_PACK_BUFFER,tt.byteLength,O.STREAM_READ),O.readPixels(U,H,G,N,Bt.convert(It),Bt.convert(Ot),0);const Zt=R!==null?bt.get(R).__webglFramebuffer:null;At.bindFramebuffer(O.FRAMEBUFFER,Zt);const ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Hl(O,ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,tt),O.deleteBuffer(Mt),O.deleteSync(ae),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(Ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-H),N=Math.floor(w.image.width*G),tt=Math.floor(w.image.height*G),lt=U!==null?U.x:0,xt=U!==null?U.y:0;b.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,lt,xt,N,tt),At.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,G=null,N=0){w.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let tt,lt,xt,vt,It,Ot,Mt,Zt,ae;const le=w.isCompressedTexture?w.mipmaps[N]:w.image;H!==null?(tt=H.max.x-H.min.x,lt=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,vt=H.min.x,It=H.min.y,Ot=H.isBox3?H.min.z:0):(tt=le.width,lt=le.height,xt=le.depth||1,vt=0,It=0,Ot=0),G!==null?(Mt=G.x,Zt=G.y,ae=G.z):(Mt=0,Zt=0,ae=0);const De=Bt.convert(U.format),Jt=Bt.convert(U.type);let wt;U.isData3DTexture?(b.setTexture3D(U,0),wt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),wt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),wt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const ln=O.getParameter(O.UNPACK_ROW_LENGTH),Qt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qe=O.getParameter(O.UNPACK_SKIP_PIXELS),Qn=O.getParameter(O.UNPACK_SKIP_ROWS),Fe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,le.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,vt),O.pixelStorei(O.UNPACK_SKIP_ROWS,It),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ot);const Ni=w.isDataArrayTexture||w.isData3DTexture,he=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Je=bt.get(w),Fi=bt.get(U),Ge=bt.get(Je.__renderTarget),vn=bt.get(Fi.__renderTarget);At.bindFramebuffer(O.READ_FRAMEBUFFER,Ge.__webglFramebuffer),At.bindFramebuffer(O.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Mn=0;Mn<xt;Mn++)Ni&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.get(w).__webglTexture,N,Ot+Mn),w.isDepthTexture?(he&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,N,ae+Mn),O.blitFramebuffer(vt,It,tt,lt,Mt,Zt,tt,lt,O.DEPTH_BUFFER_BIT,O.NEAREST)):he?O.copyTexSubImage3D(wt,N,Mt,Zt,ae+Mn,vt,It,tt,lt):O.copyTexSubImage2D(wt,N,Mt,Zt,ae+Mn,vt,It,tt,lt);At.bindFramebuffer(O.READ_FRAMEBUFFER,null),At.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(wt,N,Mt,Zt,ae,tt,lt,xt,De,Jt,le.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,N,Mt,Zt,ae,tt,lt,xt,De,le.data):O.texSubImage3D(wt,N,Mt,Zt,ae,tt,lt,xt,De,Jt,le):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Mt,Zt,tt,lt,De,Jt,le.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Mt,Zt,le.width,le.height,De,le.data):O.texSubImage2D(O.TEXTURE_2D,N,Mt,Zt,tt,lt,De,Jt,le);O.pixelStorei(O.UNPACK_ROW_LENGTH,ln),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fe),N===0&&U.generateMipmaps&&O.generateMipmap(wt),At.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,G=null,N=0){return w.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,H,G,N)},this.initRenderTarget=function(w){bt.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,At.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class ka{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new ka(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qc extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ma,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new P;class qs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wa extends Un{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let pi;const Hi=new P,mi=new P,gi=new P,_i=new Lt,Gi=new Lt,Yc=new ee,As=new P,Vi=new P,Cs=new P,$o=new Lt,Lr=new Lt,Ko=new Lt;class jo extends ge{constructor(t=new wa){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tm(e,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new qs(n,3,0,!1)),pi.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=pi,this.material=t,this.center=new Lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mi.setFromMatrixScale(this.matrixWorld),Yc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mi.multiplyScalar(-gi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Rs(As.set(-.5,-.5,0),gi,a,mi,i,r),Rs(Vi.set(.5,-.5,0),gi,a,mi,i,r),Rs(Cs.set(.5,.5,0),gi,a,mi,i,r),$o.set(0,0),Lr.set(1,0),Ko.set(1,1);let o=t.ray.intersectTriangle(As,Vi,Cs,!1,Hi);if(o===null&&(Rs(Vi.set(-.5,.5,0),gi,a,mi,i,r),Lr.set(0,1),o=t.ray.intersectTriangle(As,Cs,Vi,!1,Hi),o===null))return;const c=t.ray.origin.distanceTo(Hi);c<t.near||c>t.far||e.push({distance:c,point:Hi.clone(),uv:We.getInterpolation(Hi,As,Vi,Cs,$o,Lr,Ko,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rs(s,t,e,n,i,r){_i.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Gi.x=r*_i.x-i*_i.y,Gi.y=i*_i.x+r*_i.y):Gi.copy(_i),s.copy(t),s.x+=Gi.x,s.y+=Gi.y,s.applyMatrix4(Yc)}class em extends Re{constructor(t=null,e=1,n=1,i,r,a,o,c,l=ze,h=ze,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo extends we{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xi=new ee,Jo=new ee,Ps=[],Qo=new Zn,nm=new ee,Wi=new B,Xi=new Jn;class Ir extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Qo.copy(t.boundingBox).applyMatrix4(xi),this.boundingBox.union(Qo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Xi.copy(t.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Xi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),t.ray.intersectsSphere(Xi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xi),Jo.multiplyMatrices(n,xi),Wi.matrixWorld=Jo,Wi.raycast(t,Ps);for(let a=0,o=Ps.length;a<o;a++){const c=Ps[a];c.instanceId=r,c.object=this,e.push(c)}Ps.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new em(new Float32Array(i*this.count),i,this.count,La,rn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $c extends Un{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ys=new P,$s=new P,tc=new ee,qi=new Na,Ls=new Jn,Dr=new P,ec=new P;class im extends ge{constructor(t=new ve,e=new $c){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ys.fromBufferAttribute(e,i-1),$s.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ys.distanceTo($s);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(i),Ls.radius+=r,t.ray.intersectsSphere(Ls)===!1)return;tc.copy(i).invert(),qi.copy(t.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=h.getX(_),M=h.getX(_+1),E=Is(this,t,qi,c,d,M);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=Is(this,t,qi,c,_,m);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=Is(this,t,qi,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Is(this,t,qi,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Is(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(Ys.fromBufferAttribute(a,i),$s.fromBufferAttribute(a,r),e.distanceSqToSegment(Ys,$s,Dr,ec)>n)return;Dr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Dr);if(!(c<t.near||c>t.far))return{distance:c,point:ec.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class Ta extends Un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nc=new ee,ba=new Na,Ds=new Jn,Us=new P;class ic extends ge{constructor(t=new ve,e=new Ta){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;nc.copy(i).invert(),ba.copy(t.ray).applyMatrix4(nc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);Us.fromBufferAttribute(u,m),sc(Us,m,c,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)Us.fromBufferAttribute(u,g),sc(Us,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sc(s,t,e,n,i,r,a){const o=ba.distanceSqToPoint(s);if(o<e){const c=new P;ba.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class sm extends Re{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new Lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ie extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(p,2));function M(){const v=new P,I=new P;let A=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const S=[],x=R/r,C=x*(e-t)+t;for(let L=0;L<=i;L++){const F=L/i,V=F*c+o,Y=Math.sin(V),X=Math.cos(V);I.x=C*Y,I.y=-x*n+m,I.z=C*X,u.push(I.x,I.y,I.z),v.set(Y,T,X).normalize(),f.push(v.x,v.y,v.z),p.push(F,1-x),S.push(g++)}_.push(S)}for(let R=0;R<i;R++)for(let S=0;S<r;S++){const x=_[S][R],C=_[S+1][R],L=_[S+1][R+1],F=_[S][R+1];(t>0||S!==0)&&(h.push(x,C,F),A+=3),(e>0||S!==r-1)&&(h.push(C,L,F),A+=3)}l.addGroup(d,A,0),d+=A}function E(v){const I=g,A=new Lt,T=new P;let R=0;const S=v===!0?t:e,x=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const C=g;for(let L=0;L<=i;L++){const V=L/i*c+o,Y=Math.cos(V),X=Math.sin(V);T.x=S*X,T.y=m*x,T.z=S*Y,u.push(T.x,T.y,T.z),f.push(0,x,0),A.x=Y*.5+.5,A.y=X*.5*x+.5,p.push(A.x,A.y),g++}for(let L=0;L<i;L++){const F=I+L,V=C+L;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),R+=3}l.addGroup(d,R,v===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ba extends Ie{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ba(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class za extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new P,v=new P,I=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],E),p(e[A+1],v),p(e[A+2],I),c(E,v,I,M)}function c(M,E,v,I){const A=I+1,T=[];for(let R=0;R<=A;R++){T[R]=[];const S=M.clone().lerp(v,R/A),x=E.clone().lerp(v,R/A),C=A-R;for(let L=0;L<=C;L++)L===0&&R===A?T[R][L]=S:T[R][L]=S.clone().lerp(x,L/C)}for(let R=0;R<A;R++)for(let S=0;S<2*(A-R)-1;S++){const x=Math.floor(S/2);S%2===0?(f(T[R][x+1]),f(T[R+1][x]),f(T[R][x])):(f(T[R][x+1]),f(T[R+1][x+1]),f(T[R+1][x]))}}function l(M){const E=new P;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(M),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){const M=new P;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const v=m(M)/2/Math.PI+.5,I=d(M)/Math.PI+.5;a.push(v,1-I)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const E=a[M+0],v=a[M+2],I=a[M+4],A=Math.max(E,v,I),T=Math.min(E,v,I);A>.9&&T<.1&&(E<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),I<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,E){const v=M*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){const M=new P,E=new P,v=new P,I=new P,A=new Lt,T=new Lt,R=new Lt;for(let S=0,x=0;S<r.length;S+=9,x+=6){M.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(a[x+0],a[x+1]),T.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),I.copy(M).add(E).add(v).divideScalar(3);const C=m(I);_(A,x+0,M,C),_(T,x+2,E,C),_(R,x+4,v,C)}}function _(M,E,v,I){I<0&&M.x===1&&(a[E]=M.x-1),v.x===0&&v.z===0&&(a[E]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.vertices,t.indices,t.radius,t.details)}}class Ha extends za{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ha(t.radius,t.detail)}}class es extends ve{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,p=new P,g=new Lt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let d=0;d<n;d++){const M=d+m,E=M,v=M+n+1,I=M+n+2,A=M+1;o.push(E,v,A),o.push(v,I,A)}}this.setIndex(o),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class de extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,f=new P,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const M=[],E=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){const A=I/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+v,1-E),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const E=h[d][M+1],v=h[d][M],I=h[d+1][M],A=h[d+1][M+1];(d!==0||a>0)&&p.push(E,v,A),(d!==n-1||c<Math.PI)&&p.push(v,I,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ga extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new P,u=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,M=(i+1)*p+g;a.push(_,m,M),a.push(m,d,M)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Tt extends Un{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Va extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rm extends Va{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ur=new ee,rc=new P,ac=new P;class Kc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),Ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oc=new ee,Yi=new P,Nr=new P;class am extends Kc{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yi),Nr.copy(n.position),Nr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Nr),n.updateMatrixWorld(),i.makeTranslation(-Yi.x,-Yi.y,-Yi.z),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}}class Ti extends Va{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new am}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class om extends Kc{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cc extends Va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new om}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);function $i(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new ve;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const p=s[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=hc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][f]);const g=hc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function hc(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new we(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}class lm extends qc{constructor(){super();const t=new mt;t.deleteAttribute("uv");const e=new Tt({side:Ce}),n=new Tt,i=new Ti(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new B(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new B(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new B(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new B(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new B(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new B(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new B(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new B(t,vi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new B(t,vi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new B(t,vi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new B(t,vi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new B(t,vi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new B(t,vi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function vi(s){const t=new Dt;return t.color.setScalar(s),t}const hm=(s,t,e)=>new P(s,t,e),Zi=(s,t,e)=>Math.min(e,Math.max(t,s)),An=(s,t,e)=>s+(t-s)*e,um=(s,t,e)=>{const n=Zi((e-s)/(t-s),0,1);return n*n*(3-2*n)};class dm{constructor(t=1337){this.s=t>>>0}r(){return this.s=this.s*1664525+1013904223>>>0,this.s/4294967296}range(t,e){return t+(e-t)*this.r()}pick(t){return t[Math.floor(this.r()*t.length)]}}const ft={center:new Lt(0,0),road:80,roadW:14,gridMin:-6,gridMax:5,beachR:660},Nt={motel:{x:-120,z:200,door:{x:-120,z:236},label:"PALM SHADE MOTEL",color:"#ff5da8"},gas:{x:120,z:120,door:{x:120,z:147},label:"GAS & GO",color:"#ffd166"},pawn:{x:-360,z:40,door:{x:-360,z:73},label:"PAWN & PWN",color:"#7dff9c"},bank:{x:40,z:-120,door:{x:40,z:-86},label:"LEONIDA NATIONAL",color:"#38e8ff"},store:{x:280,z:-40,door:{x:280,z:-7},label:"24/7 MART",color:"#ff9c5b"},hospital:{x:-40,z:-280,door:{x:-40,z:-246},label:"MERCY HOSPITAL",color:"#ff6b6b"},charger:{x:360,z:120,door:{x:360,z:120},label:"VOLT CHARGE",color:"#38e8ff"}};function fm(s){return new dm(s)}function Nn(s,t,e,n={}){const i=document.createElement("canvas");i.width=s,i.height=t;const r=i.getContext("2d");e(r,s,t);const a=new sm(i);return a.colorSpace=Ue,a.anisotropy=4,n.repeat&&(a.wrapS=a.wrapT=Qi,a.repeat.set(n.repeat[0],n.repeat[1])),a}function pm(){const s=Nn(128,256,(t,e,n)=>{t.fillStyle="#3d3f4b",t.fillRect(0,0,e,n),t.fillStyle="#30323c";for(let i=0;i<n;i+=32)t.fillRect(0,i,e,10);for(let i=8;i<n-12;i+=32)for(let r=6;r<e-8;r+=18){if(Math.random()>.35){const o=Math.random()>.5;t.fillStyle=o?"rgba(255,214,150,.9)":"rgba(190,225,255,.82)"}else t.fillStyle="rgba(22,26,38,.9)";t.fillRect(r,i,11,15),t.fillStyle="rgba(0,0,0,.25)",t.fillRect(r,i+15,11,2)}t.fillStyle="rgba(255,255,255,.05)";for(let i=0;i<e;i+=64)t.fillRect(i,0,1,n)});return s.wrapS=s.wrapT=Qi,s}function mm(){return Nn(256,256,(s,t,e)=>{s.fillStyle="#24232b",s.fillRect(0,0,t,e);for(let n=0;n<5e3;n++){const i=Math.random()*40+20;s.fillStyle=`rgba(${i},${i},${i+4},${Math.random()*.25})`,s.fillRect(Math.random()*t,Math.random()*e,1.5,1.5)}s.strokeStyle="rgba(0,0,0,.2)",s.lineWidth=1;for(let n=0;n<8;n++)s.beginPath(),s.moveTo(Math.random()*t,0),s.lineTo(Math.random()*t,e),s.stroke()},{repeat:[46,46]})}function gm(){return Nn(256,256,(s,t,e)=>{s.fillStyle="#d9bf94",s.fillRect(0,0,t,e);for(let n=0;n<6e3;n++){const i=150+Math.random()*70;s.fillStyle=`rgba(${i},${i*.88},${i*.66},${Math.random()*.35})`,s.fillRect(Math.random()*t,Math.random()*e,2,2)}},{repeat:[40,40]})}function _m(){return Nn(256,256,(s,t,e)=>{s.fillStyle="#6f6d72",s.fillRect(0,0,t,e);for(let n=0;n<3e3;n++){const i=90+Math.random()*50;s.fillStyle=`rgba(${i},${i},${i+3},.2)`,s.fillRect(Math.random()*t,Math.random()*e,2,2)}s.strokeStyle="rgba(35,35,40,.55)",s.lineWidth=2;for(let n=0;n<=4;n++)s.beginPath(),s.moveTo(n*64,0),s.lineTo(n*64,e),s.stroke(),s.beginPath(),s.moveTo(0,n*64),s.lineTo(t,n*64),s.stroke()},{repeat:[14,14]})}function Cn(s,t="#ff2f8e",e="rgba(6,4,12,.88)",n="",i=512,r=160){return Nn(i,r,a=>{a.fillStyle=e,a.fillRect(0,0,i,r),a.strokeStyle=t,a.lineWidth=5,a.strokeRect(5,5,i-10,r-10),a.shadowColor=t,a.shadowBlur=26,a.fillStyle="#fff",a.font=`900 ${Math.floor(r*.34)}px "Arial Black", Impact, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(s,i/2,n?r*.42:r*.52),n&&(a.fillStyle=t,a.font=`700 ${Math.floor(r*.13)}px Arial, sans-serif`,a.fillText(n,i/2,r*.72))})}function xm(){return Nn(256,128,(s,t,e)=>{s.clearRect(0,0,t,e);for(let n=0;n<28;n++){const i=t/2+(Math.random()-.5)*t*.8,r=e*.55+(Math.random()-.5)*e*.4,a=20+Math.random()*44,o=s.createRadialGradient(i,r,0,i,r,a);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(.55,"rgba(255,255,255,.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.beginPath(),s.arc(i,r,a,0,Math.PI*2),s.fill()}})}function vm(){return Nn(128,128,(s,t,e)=>{const n=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.fillRect(0,0,t,e)})}class Mm{constructor(t,e){this.scene=t,this.renderer=e,this.rng=fm(90210),this.colliders=[],this.windObjects=[],this.streetMaterials=[],this.puddles=[],this.time=0,this.hour=19.2,this.dayLength=420,this.weather={mode:"clear",rain:0,wind:.7,wetness:0,targetRain:0,timer:55,flash:0,lightningTimer:7},this._tmp=new P,this._tmp2=new P,this.nightFactor=0,this.cameraPos=hm(0,20,0),this._buildEnvironment(),this._buildGround(),this._buildCity(),this._buildSpecials(),this._buildVegetation(),this._buildStreetLights(),this._buildWeather(),this._buildInterior(),this._buildMapCanvas()}_buildEnvironment(){const t=this.scene,e=new Sa(this.renderer);t.environment=e.fromScene(new lm,.04).texture,e.dispose(),t.fog=new ka(2892856,.0016),this.hemi=new rm(10471167,3811888,.7),t.add(this.hemi),this.sun=new cc(16767408,2.1),this.sun.position.set(-160,210,90),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=20,this.sun.shadow.camera.far=620;const n=150;this.sun.shadow.camera.left=-n,this.sun.shadow.camera.right=n,this.sun.shadow.camera.top=n,this.sun.shadow.camera.bottom=-n,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.02,t.add(this.sun),t.add(this.sun.target),this.moon=new cc(7968726,.22),this.moon.position.set(120,160,-80),t.add(this.moon);const i=(l,h,u,f,p=40,g=5)=>{const _=new Ti(l,g,p,2);return _.position.set(h,u,f),t.add(_),_};this.neonLights=[i(16723854,-120,7,212,34,10),i(3729663,40,15,-95,44,12),i(16765286,120,6,120,30,7),i(8257436,-360,6,58,26,7)],this.skyUniforms={top:{value:new ut(1775158)},mid:{value:new ut(7159142)},bottom:{value:new ut(16751210)},sunDir:{value:new P(-.4,.3,.2).normalize()},sunCol:{value:new ut(16765088)},night:{value:0}};const r=new de(1300,32,20),a=new on({side:Ce,depthWrite:!1,fog:!1,uniforms:this.skyUniforms,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 top, mid, bottom, sunCol; uniform vec3 sunDir; uniform float night;
        varying vec3 vDir;
        void main(){
          float h = clamp(vDir.y*0.5+0.5, 0.0, 1.0);
          vec3 col = mix(bottom, mid, smoothstep(0.42,0.62,h));
          col = mix(col, top, smoothstep(0.6,0.98,h));
          float sd = max(dot(normalize(vDir), normalize(sunDir)),0.0);
          col += sunCol * pow(sd, 90.0) * 1.25;
          col += sunCol * pow(sd, 8.0) * 0.18;
          // horizon haze
          col = mix(col, bottom*1.05, pow(1.0-abs(vDir.y),8.0)*0.35);
          gl_FragColor = vec4(col,1.0);
        }`});this.sky=new B(r,a),this.sky.frustumCulled=!1,t.add(this.sky);const o=new ve,c=new Float32Array(900*3);for(let l=0;l<900;l++){const h=Math.random()*Math.PI*2,u=Math.random()*Math.PI*.48;c[l*3]=Math.cos(h)*Math.sin(u)*1100,c[l*3+1]=Math.cos(u)*900+60,c[l*3+2]=Math.sin(h)*Math.sin(u)*1100}o.setAttribute("position",new we(c,3)),this.starMat=new Ta({color:16777215,size:2.2,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),this.stars=new ic(o,this.starMat),t.add(this.stars),this.sunSprite=new jo(new wa({map:vm(),color:16769456,transparent:!0,opacity:.9,depthWrite:!1,blending:je,fog:!1})),this.sunSprite.scale.set(130,130,1),t.add(this.sunSprite)}_buildGround(){const t=this.scene,e=new Kt(5200,5200,90,90);e.rotateX(-Math.PI/2),this.oceanUniforms={time:{value:0},deep:{value:new ut(533562)},shallow:{value:new ut(1731450)},sky:{value:new ut(5917298)},sun:{value:new P(.4,.3,.2)}};const n=new on({uniforms:this.oceanUniforms,transparent:!1,vertexShader:`uniform float time; varying vec3 vPos; varying vec3 vN;
        void main(){ vec3 p = position; float w = sin(p.x*0.035 + time*0.8)*0.35 + sin(p.z*0.05 - time*0.6)*0.28;
          p.y += w; vPos = p; vN = normalize(vec3(-cos(p.x*0.035+time*0.8)*0.02, 1.0, -cos(p.z*0.05-time*0.6)*0.02));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0); }`,fragmentShader:`uniform vec3 deep, shallow, sky; uniform float time; varying vec3 vPos; varying vec3 vN;
        void main(){ vec3 v = normalize(cameraPosition - vPos);
          float fres = pow(1.0 - max(dot(v, normalize(vN)), 0.0), 2.2);
          float waves = sin(vPos.x*0.11 + time*1.2 + sin(vPos.z*0.08))*0.5+0.5;
          vec3 col = mix(deep, shallow, waves*0.18 + 0.18);
          col = mix(col, sky, fres*0.55);
          col += vec3(0.9,0.75,0.5)*pow(max(dot(normalize(vN), normalize(vec3(0.3,0.4,0.2))),0.0), 20.0)*0.18;
          gl_FragColor = vec4(col, 1.0); }`});this.ocean=new B(e,n),this.ocean.position.y=-.9,t.add(this.ocean);const i=new Ks(ft.beachR,96);i.rotateX(-Math.PI/2);const r=new Tt({map:gm(),roughness:.96,metalness:0});this.sand=new B(i,r),this.sand.position.y=-.32,this.sand.receiveShadow=!0,t.add(this.sand);const a=_m();a.repeat.set(22,22);const o=new Tt({map:a,roughness:.74,metalness:.08,color:10985895}),c=new Kt(1e3,1e3);c.rotateX(-Math.PI/2),this.cityGround=new B(c,o),this.cityGround.position.y=.005,this.cityGround.receiveShadow=!0,t.add(this.cityGround),this.cityMat=o;const l=new es(468,480,96);l.rotateX(-Math.PI/2);const h=new Tt({color:9144208,roughness:.8}),u=new B(l,h);u.position.y=.03,t.add(u);const f=[],p=ft.roadW;for(let R=ft.gridMin;R<=ft.gridMax+1;R++){const S=R*ft.road,x=new Kt(p,(ft.gridMax-ft.gridMin+1)*ft.road+30);x.rotateX(-Math.PI/2),x.translate(S,.02,(ft.gridMin+ft.gridMax+1)*ft.road/2),f.push(x);const C=new Kt((ft.gridMax-ft.gridMin+1)*ft.road+30,p);C.rotateX(-Math.PI/2),C.translate((ft.gridMin+ft.gridMax+1)*ft.road/2,.025,S),f.push(C)}const g=mm();this.roadMat=new Tt({map:g,color:9407381,roughness:.88,metalness:.12});const _=new B($i(f),this.roadMat);_.receiveShadow=!0,t.add(_),this.streetMaterials.push({mat:this.roadMat,baseColor:new ut(9407381),wetColor:new ut(4013900),rough:[.88,.28]});const m=[];for(let R=ft.gridMin;R<=ft.gridMax+1;R++){const S=R*ft.road;for(let x=-460;x<400;x+=13){const C=new Kt(.22,5.4);C.rotateX(-Math.PI/2),C.translate(S,.045,x+3),m.push(C)}for(let x=-460;x<400;x+=13){const C=new Kt(5.4,.22);C.rotateX(-Math.PI/2),C.translate(x+3,.047,S),m.push(C)}}const d=new Dt({color:15261896,transparent:!0,opacity:.42});this.markMesh=new B($i(m),d),t.add(this.markMesh);const M=[];for(let R=ft.gridMin;R<=ft.gridMax;R++)for(let S=ft.gridMin;S<=ft.gridMax;S++){const x=R*ft.road+40,C=S*ft.road+40,L=new mt(72,.26,72);L.translate(x,.13,C),M.push(L)}const E=new Tt({color:10131104,roughness:.85,metalness:.04});this.sideMat=E;const v=new B($i(M),E);v.receiveShadow=!0,t.add(v),this.streetMaterials.push({mat:E,baseColor:new ut(10131104),wetColor:new ut(5920866),rough:[.85,.45]});const I=new Tt({color:2831686,roughness:.06,metalness:.92,transparent:!0,opacity:0,envMapIntensity:1.4,depthWrite:!1,side:ue}),A=new Ks(1,12);A.rotateX(-Math.PI/2),this.puddleMesh=new Ir(A,I,90);const T=new ge;for(let R=0;R<90;R++){const S=Math.random()>.5,x=Math.floor(this.rng.range(ft.gridMin,ft.gridMax+1)),C=this.rng.range(-440,360),L=this.rng.range(-4.6,4.6);T.position.set(S?x*ft.road+L:C,.055,S?C:x*ft.road+L),T.rotation.set(0,this.rng.range(0,6.28),0),T.scale.set(this.rng.range(1.2,4.2),1,this.rng.range(.8,2.6)),T.updateMatrix(),this.puddleMesh.setMatrixAt(R,T.matrix)}this.puddleMat=I,t.add(this.puddleMesh),this._outerDressing()}_outerDressing(){const t=this.rng;for(let e=0;e<70;e++){const n=t.range(0,Math.PI*2),i=t.range(500,640),r=Math.cos(n)*i,a=Math.sin(n)*i;this._palm(r,a,t.range(.8,1.35))}for(let e=0;e<9;e++){const n=t.range(0,Math.PI*2),i=t.range(950,1350),r=t.range(20,60),a=new B(new Ba(t.range(80,170),r,6),new Tt({color:1713200,roughness:1}));a.position.set(Math.cos(n)*i,-2,Math.sin(n)*i),this.scene.add(a)}}_buildCity(){const t=this.rng;this.buildingGeos=[];const e=new Set(["-2,2","1,1","-5,0","0,-2","3,-1","-1,-4","1,0","4,1"]),n={downtown:[10194853,8359584,11576225,7240588,10918540,9077655,6187640],beach:[16758728,10477784,16769192,13154559,11069183,16761760,16049880],port:[9078136,7172716,10259058,8220513,6252395,10130823],keys:[13215392,9418664,14205856,11057352,14727344]};new ut;for(let r=ft.gridMin;r<=ft.gridMax;r++)for(let a=ft.gridMin;a<=ft.gridMax;a++){if(e.has(`${r},${a}`))continue;const o=r*ft.road+40,c=a*ft.road+40,l=Math.hypot(o,c);let h=n.downtown;if(o>240?h=n.beach:o<-250?h=n.port:c>300&&(h=n.keys),t.r()<.07){this._park(o,c);continue}const u=60,f=60,p=1+Math.floor(t.r()*3);if(p===1){const g=this._heightFor(o,c,l,h),_=t.range(34,56),m=t.range(34,56);this._building(o+t.range(-3,3),c+t.range(-3,3),_,m,g,t.pick(h),t)}else for(let g=0;g<p;g++){const _=t.range(20,32),m=t.range(20,32),d=t.range(-u/2+_/2+3,u/2-_/2-3),M=t.range(-f/2+m/2+3,f/2-m/2-3),E=this._heightFor(o,c,l,h);this._building(o+d,c+M,_,m,E,t.pick(h),t)}t.r()<.28&&this._neonSign(o+t.range(-24,24),c+t.range(-24,24),t.range(5,18),t.pick(["VICE","HOTEL","LIQUOR","TACOS","MOTEL","CLUB","PAWN","24/7","GYM","BAIT","SUNSET","LEONIDA"]),t)}const i=pm();this.bodies=new B($i(this.buildingGeos),new Tt({map:i,emissiveMap:i,vertexColors:!0,roughness:.78,metalness:.12,emissive:16766624,emissiveIntensity:.2})),this.bodies.castShadow=!0,this.bodies.receiveShadow=!0,this.buildingMat=this.bodies.material,this.scene.add(this.bodies);for(const r of this.parks||[])for(let a=0;a<5;a++)this._palm(r.x+this.rng.range(-25,25),r.z+this.rng.range(-25,25),this.rng.range(.7,1.1))}_heightFor(t,e,n,i){const r=this.rng;return i==="beach"?r.range(7,21):t<-250?r.range(8,18):e>300?r.range(6,13):n<170?r.range(34,105)*(1-n/420):n<300?r.range(14,46):r.range(8,22)}_building(t,e,n,i,r,a,o){const c=new mt(n,r,i),l=c.attributes.uv,h=Math.max(n,i)/12,u=r/16;for(let g=0;g<l.count;g++)l.setXY(g,l.getX(g)*h,l.getY(g)*u);c.translate(t,r/2+.26,e);const f=new ut(a).convertSRGBToLinear(),p=new Float32Array(c.attributes.position.count*3);for(let g=0;g<c.attributes.position.count;g++)p[g*3]=f.r,p[g*3+1]=f.g,p[g*3+2]=f.b;if(c.setAttribute("color",new we(p,3)),this.buildingGeos.push(c),this.colliders.push({minX:t-n/2,maxX:t+n/2,minZ:e-i/2,maxZ:e+i/2,h:r}),r>45&&o.r()<.75){const g=new B(new Ie(.16,.3,r*.16,5),new Tt({color:9408410,roughness:.5,metalness:.7}));g.position.set(t,r+.26+r*.08,e),this.scene.add(g);const _=new B(new de(.5,8,6),new Dt({color:16724804}));_.position.set(t,r+.26+r*.16,e),this.scene.add(_)}}_park(t,e){this.parks=this.parks||[],this.parks.push({x:t,z:e});const n=new Kt(56,56);n.rotateX(-Math.PI/2);const i=new Tt({color:5204808,roughness:1}),r=new B(n,i);r.position.set(t,.28,e),r.receiveShadow=!0,this.scene.add(r);const a=new Kt(5,56);a.rotateX(-Math.PI/2);const o=new B(a,new Tt({color:9209208,roughness:.95}));o.position.set(t,.29,e),this.scene.add(o)}_neonSign(t,e,n,i,r){const a=r.pick(["#ff2f8e","#38e8ff","#ffd166","#7dff9c","#ff7a4d","#c38bff"]),o=Cn(i,a,"rgba(8,6,14,.92)",r.r()>.5?"LEONIDA":""),c=new Dt({map:o,transparent:!0,side:ue,toneMapped:!1}),l=new B(new Kt(11,3.4),c);return l.position.set(t,n,e),l.rotation.y=r.pick([0,Math.PI/2,Math.PI,-Math.PI/2]),this.scene.add(l),l}_buildSpecials(){const t=new Tt({color:14263970,roughness:.85}),e=new Tt({color:6962520,roughness:.7}),n=new Vt,i=new B(new mt(46,9,16),t);i.position.set(-120,4.76,214),n.add(i);const r=new B(new mt(50,.6,19),e);r.position.set(-120,9.4,214),n.add(r);for(let nt=0;nt<6;nt++){const yt=new B(new Kt(2.2,4.4),new Dt({color:2759722}));yt.position.set(-142+nt*8.6,2.5,205.9),yt.rotation.y=0,n.add(yt);const Gt=new B(new Kt(2.4,2),new Dt({color:nt%2?16767392:3359836}));Gt.position.set(-138.8+nt*8.6,5.5,205.9),n.add(Gt);const q=new B(new de(.22,6,4),new Dt({color:16760698}));q.position.set(-142+nt*8.6,6.4,205.6),n.add(q)}const a=Cn("PALM SHADE","#ff5da8","rgba(10,5,15,.9)","MOTEL · VACANCY"),o=new B(new Kt(20,6),new Dt({map:a,transparent:!0,toneMapped:!1,side:ue}));o.position.set(-120,13,206.5),n.add(o),this.motelSignMat=o.material;const c=new B(new Ie(.25,.3,8,6),e);c.position.set(-120,13.5,208.5),c.rotation.x=.08,n.add(c);const l=new B(new Kt(16,9),new Tt({color:2002080,roughness:.1,metalness:.6}));l.rotation.x=-Math.PI/2,l.position.set(-120,.33,228),n.add(l),this.scene.add(n),this.colliders.push({minX:-143,maxX:-97,minZ:206,maxZ:222,h:9}),this.colliders.push({minX:-128,maxX:-112,minZ:224,maxZ:232,h:.4});const h=new B(new mt(30,.8,20),new Tt({color:14144196,roughness:.6,metalness:.4}));h.position.set(120,6.2,120),this.scene.add(h);for(const[nt,yt]of[[107,113],[133,113],[107,127],[133,127]]){const Gt=new B(new Ie(.4,.4,6.2,8),new Tt({color:9407368,metalness:.6,roughness:.4}));Gt.position.set(nt,3.1,yt),this.scene.add(Gt)}const u=new B(new mt(16,8,12),new Tt({color:15196111,roughness:.8}));u.position.set(138,4.26,129),this.scene.add(u),this.colliders.push({minX:130,maxX:146,minZ:123,maxZ:135,h:8});for(const nt of[118,122]){const yt=new Vt,Gt=new B(new mt(1.1,2.2,.8),new Tt({color:14605010,roughness:.5}));Gt.position.y=1.1,yt.add(Gt);const q=new B(new Kt(.7,.5),new Dt({color:3729663}));q.position.set(0,1.55,.42),yt.add(q),yt.position.set(122,.3,nt),this.scene.add(yt)}const f=Cn("GAS & GO","#ffd166","rgba(10,7,4,.9)","FUEL · REPAIR · ICE"),p=new B(new Kt(22,6),new Dt({map:f,transparent:!0,toneMapped:!1,side:ue}));p.position.set(138,10.5,123),this.scene.add(p);const g=new B(new mt(34,11,22),new Tt({color:9403490,roughness:.85}));g.position.set(-360,5.76,40),this.scene.add(g),this.colliders.push({minX:-377,maxX:-343,minZ:29,maxZ:51,h:11});const _=Cn("PAWN & PWN","#7dff9c","rgba(5,10,7,.92)","WE BUY · NO QUESTIONS"),m=new B(new Kt(24,6),new Dt({map:_,transparent:!0,toneMapped:!1,side:ue}));m.position.set(-360,9.4,52),this.scene.add(m);for(let nt=0;nt<8;nt++){const yt=new B(new mt(1.2,2.4,.4),new Tt({color:11576719,roughness:.6}));yt.position.set(-372+nt*3.4,.9,52.3),this.scene.add(yt)}const d=new B(new mt(4,1,1.6),new Tt({color:4010794}));d.position.set(-360,.8,24.5),this.scene.add(d);const M=new mt(52,74,42);M.translate(40,37.26,-120);const E=new ut(9214634).convertSRGBToLinear(),v=new Float32Array(M.attributes.position.count*3);for(let nt=0;nt<M.attributes.position.count;nt++)v[nt*3]=E.r,v[nt*3+1]=E.g,v[nt*3+2]=E.b;M.setAttribute("color",new we(v,3));const I=new B(M,new Tt({color:10135738,roughness:.55,metalness:.35,emissive:1780282,emissiveIntensity:.5}));I.castShadow=!0,this.scene.add(I),this.colliders.push({minX:14,maxX:66,minZ:-141,maxZ:-99,h:74});const A=Cn("LEONIDA NATIONAL","#38e8ff","rgba(5,8,14,.94)","SECURE YOUR FUTURE"),T=new B(new Kt(34,8),new Dt({map:A,transparent:!0,toneMapped:!1,side:ue}));T.position.set(40,58,-98.6),this.scene.add(T);for(let nt=0;nt<6;nt++){const yt=new B(new Ie(1,1,16,10),new Tt({color:12371666,roughness:.6}));yt.position.set(18+nt*9,8,-92),this.scene.add(yt)}const R=new B(new mt(40,1.2,10),new Tt({color:7831434,roughness:.9}));R.position.set(40,.6,-93),this.scene.add(R);const S=new B(new mt(30,7,20),new Tt({color:15784352,roughness:.8}));S.position.set(280,3.76,-40),this.scene.add(S),this.colliders.push({minX:265,maxX:295,minZ:-50,maxZ:-30,h:7});const x=Cn("24/7 MART","#ff9c5b","rgba(12,7,4,.9)","OPEN ALL NIGHT"),C=new B(new Kt(18,5),new Dt({map:x,transparent:!0,toneMapped:!1,side:ue}));C.position.set(280,8.6,-29),this.scene.add(C);const L=new B(new mt(22,.3,6),new Tt({color:12866106,roughness:.7}));L.position.set(280,5,-27),this.scene.add(L);const F=new B(new mt(40,28,34),new Tt({color:14080994,roughness:.7}));F.position.set(-40,14.26,-280),this.scene.add(F),this.colliders.push({minX:-60,maxX:-20,minZ:-297,maxZ:-263,h:28});const V=new Dt({color:16728160,toneMapped:!1}),Y=new B(new mt(10,3,.5),V);Y.position.set(-40,22,-262.7),this.scene.add(Y);const X=new B(new mt(3,10,.5),V);X.position.set(-40,22,-262.7),this.scene.add(X);const Z=Cn("MERCY HOSPITAL","#ff6b6b","rgba(8,5,8,.9)","TRAUMA · 24H"),z=new B(new Kt(18,5),new Dt({map:Z,transparent:!0,toneMapped:!1,side:ue}));z.position.set(-40,15,-262.5),this.scene.add(z);for(let nt=0;nt<3;nt++){const yt=new B(new mt(1.6,3.2,1),new Tt({color:15267583,emissive:3729663,emissiveIntensity:1.1,roughness:.4}));yt.position.set(348+nt*6,1.9,122),this.scene.add(yt)}const st=Cn("VOLT","#38e8ff","rgba(4,8,12,.9)","EV CHARGE"),dt=new B(new Kt(12,5),new Dt({map:st,transparent:!0,toneMapped:!1,side:ue}));dt.position.set(360,7,110),this.scene.add(dt),this.pumps=[{x:122,z:118},{x:122,z:122}]}_buildVegetation(){const t=this.rng;for(let e=0;e<120;e++){const n=Math.floor(t.range(ft.gridMin,ft.gridMax+1)),i=Math.floor(t.range(ft.gridMin,ft.gridMax+1)),r=n*ft.road+40,a=i*ft.road+40,o=t.r();let c,l;o<.5?(c=r+t.range(-35,35),l=a+(t.r()>.5?34.4:-34.4)):(c=r+(t.r()>.5?34.4:-34.4),l=a+t.range(-35,35)),!this.isInsideBuilding(c,l,2)&&this._palm(c,l,t.range(.7,1.2))}}_palm(t,e,n=1){const i=new Vt,r=new B(new Ie(.26*n,.42*n,7*n,6),new Tt({color:7032116,roughness:.95}));r.position.y=3.5*n,r.rotation.z=this.rng.range(-.09,.09),r.castShadow=!0,i.add(r);const a=new Vt,o=new Tt({color:this.rng.r()>.35?3107653:4029002,roughness:.9,side:ue}),c=[];for(let h=0;h<7;h++){const u=new Kt(.9,4.6);u.translate(0,2.3,0),u.rotateX(-.55-this.rng.range(0,.2)),u.rotateY(h/7*Math.PI*2+this.rng.range(-.2,.2)),c.push(u)}const l=new B($i(c),o);l.position.y=7*n,l.castShadow=!0,l.scale.setScalar(n),a.add(l),i.add(a),i.position.set(t,.28,e),i.userData.phase=this.rng.range(0,6.28),i.userData.crown=a,this.windObjects.push(i),this.scene.add(i)}_buildStreetLights(){const t=[];for(let c=ft.gridMin;c<=ft.gridMax+1;c++)for(let l=-440;l<380;l+=40)t.push([c*ft.road+8.2,l,0]),t.push([l,c*ft.road+8.2,1]);const e=new Ie(.13,.18,7.2,6),n=new Tt({color:3947332,roughness:.6,metalness:.5}),i=new Ir(e,n,t.length),r=new de(.34,7,6);this.bulbMat=new Tt({color:16767392,emissive:16761456,emissiveIntensity:.2});const a=new Ir(r,this.bulbMat,t.length),o=new ge;t.forEach((c,l)=>{o.position.set(c[0],3.6,c[2]===0?c[1]:c[0]),c[2]===1&&o.position.set(c[0],3.6,c[1]),o.rotation.set(0,0,0),o.updateMatrix(),i.setMatrixAt(l,o.matrix),o.position.y=7.25,o.updateMatrix(),a.setMatrixAt(l,o.matrix)}),this.scene.add(i),this.scene.add(a),this.streetBulbs=a}_buildWeather(){this.cloudGroup=new Vt,this.scene.add(this.cloudGroup);const t=xm();this.clouds=[];for(let a=0;a<16;a++){const o=new jo(new wa({map:t,transparent:!0,opacity:.25,depthWrite:!1,color:16777215,fog:!1})),c=a/16*Math.PI*2+this.rng.range(-.3,.3),l=this.rng.range(250,900);o.position.set(Math.cos(c)*l,this.rng.range(150,290),Math.sin(c)*l);const h=this.rng.range(280,620);o.scale.set(h,h*.45,1),o.userData.base={x:o.position.x,z:o.position.z,o:o.material.opacity,r:l},this.cloudGroup.add(o),this.clouds.push(o)}const e=4500,n=new Float32Array(e*3);for(let a=0;a<e;a++)n[a*3]=this.rng.range(-55,55),n[a*3+1]=this.rng.range(0,45),n[a*3+2]=this.rng.range(-55,55);const i=new ve;i.setAttribute("position",new we(n,3));const r=Nn(16,64,(a,o,c)=>{const l=a.createLinearGradient(0,0,0,c);l.addColorStop(0,"rgba(200,225,255,0)"),l.addColorStop(.5,"rgba(210,232,255,.9)"),l.addColorStop(1,"rgba(180,210,255,0)"),a.fillStyle=l,a.fillRect(o/2-1.5,0,3,c)});this.rainMat=new Ta({map:r,size:1.6,transparent:!0,opacity:0,depthWrite:!1,color:13625087,sizeAttenuation:!0,blending:je}),this.rain=new ic(i,this.rainMat),this.rain.frustumCulled=!1,this.rain.visible=!1,this.scene.add(this.rain),this.rainData={count:e,speeds:new Float32Array(e)};for(let a=0;a<e;a++)this.rainData.speeds[a]=this.rng.range(22,42)}_buildInterior(){const t=new Vt;t.position.set(1600,0,1600);const e=new Tt({color:7162690,roughness:.7}),n=new Tt({color:9337453,roughness:.9}),i=new B(new mt(18,.3,15),e);i.position.y=.1,t.add(i);const r=new B(new mt(18,.3,15),new Tt({color:14207928,roughness:.8}));r.position.y=4.2,t.add(r);const a=(R,S,x,C)=>{const L=new B(new mt(R,4.4,S),n);L.position.set(x,2.2,C),t.add(L)};a(18,.4,0,-7.3),a(.4,15,-8.8,0),a(.4,15,8.8,0),a(6,.4,-6,7.3),a(6,.4,6,7.3);const o=new mt(2.2,3.6,.2),c=new Tt({color:3811876}),l=new B(o,c);l.position.set(0,1.9,7.28),t.add(l);const h=new B(o,c);h.position.set(0,1.9,-7.1),t.add(h);const u=new B(new Kt(2.4,3.8),new Dt({color:8257436,transparent:!0,opacity:.22,side:ue}));u.position.set(0,1.9,-7.02),t.add(u);const f=new B(new Kt(2.4,3.8),new Dt({color:16723854,transparent:!0,opacity:.18,side:ue}));f.position.set(0,1.9,7.22),t.add(f);const p=new Vt,g=new B(new mt(4.6,.8,6),new Tt({color:6042178,roughness:.9}));g.position.y=.7,p.add(g);const _=new B(new mt(4.4,.22,5.6),new Tt({color:15128272,roughness:.95}));_.position.y=1.2,p.add(_);const m=new B(new mt(3.4,.4,1.2),new Tt({color:16771551}));m.position.set(0,1.4,-2.2),p.add(m),p.position.set(-5.8,.25,-2.4),t.add(p);const d=new B(new Kt(4,2.2),new Dt({color:1785696}));d.position.set(.2,2.4,-7),t.add(d);const M=new B(new Kt(3.9,2.1),new Dt({color:3729663,transparent:!0,opacity:.15}));M.position.set(.2,2.4,-6.98),t.add(M);const E=new B(new mt(5,1.2,1.8),new Tt({color:4930130}));E.position.set(0,.9,-4.6),t.add(E);const v=new B(new Ie(1.3,1.2,.15,12),new Tt({color:3811876}));v.position.set(.2,1.25,-1.8),t.add(v);const I=new Ti(16760714,18,22,2);I.position.set(0,3.6,0),t.add(I);const A=new B(new de(.28,8,6),new Dt({color:16767392}));A.position.set(0,3.6,0),t.add(A);const T=new B(new mt(1.2,.7,1.7),new Tt({color:2763306,roughness:.9}));T.position.set(3.2,1.7,-1.6),t.add(T),t.visible=!1,this.interior={group:t,front:{x:1600,z:1607.5},back:{x:1600,z:1592.5},center:{x:1600,z:1600}},this.scene.add(t)}isInsideBuilding(t,e,n=0){for(const i of this.colliders)if(!(i.h<.8)&&t>i.minX-n&&t<i.maxX+n&&e>i.minZ-n&&e<i.maxZ+n)return!0;return!1}lineBlocked(t,e,n,i){for(let a=1;a<7;a++){const o=a/7;if(this.isInsideBuilding(An(t,n,o),An(e,i,o),.2))return!0}return!1}collideCircle(t,e){let n=!1;for(const r of this.colliders){if(r.h<.5)continue;const a=Zi(t.x,r.minX,r.maxX),o=Zi(t.z,r.minZ,r.maxZ);let c=t.x-a,l=t.z-o;const h=c*c+l*l;if(h<e*e){let u=Math.sqrt(h);u<1e-4&&(c=t.x-(r.minX+r.maxX)/2,l=t.z-(r.minZ+r.maxZ)/2,u=Math.hypot(c,l)||1);const f=e-u;t.x+=c/u*f,t.z+=l/u*f,n=!0}}const i=Math.hypot(t.x,t.z);if(i>ft.beachR-4){const r=(ft.beachR-4)/i;t.x*=r,t.z*=r,n=!0}return n}districtAt(t,e){return Math.hypot(t-Nt.motel.x,e-Nt.motel.z)<130?"PALM SHADE":t<-250?"PORT GELLHORN":e>300?"LEONIDA KEYS":t>230?"OCEAN BEACH":Math.abs(t)<180&&Math.abs(e)<200?"DOWNTOWN VICE CITY":"VICE CITY"}setWeather(t){const e=this.weather;e.mode=t,t==="clear"&&(e.targetRain=0,e.wind=.55,e.timer=70+Math.random()*60),t==="cloudy"&&(e.targetRain=0,e.wind=.9,e.timer=45+Math.random()*50),t==="rain"&&(e.targetRain=.7,e.wind=1.15,e.timer=60+Math.random()*50),t==="storm"&&(e.targetRain=1,e.wind=2.1,e.timer=45+Math.random()*40)}update(t,e,n,i){var C;this.time+=t,this.cameraPos.copy(e.position);const r=this.weather;if(r.timer-=t,r.timer<=0){const L=["clear","clear","cloudy","rain","storm"];let F=L[Math.floor(Math.random()*L.length)];F===r.mode&&(F="cloudy"),this.setWeather(F),(C=i==null?void 0:i.onWeatherChange)==null||C.call(i,F)}r.rain+=(r.targetRain-r.rain)*Math.min(1,t*.35),r.rain>.01?r.wetness=Math.min(1,r.wetness+t*.06*r.rain):r.wetness=Math.max(0,r.wetness-t*.012),r.wind+=(.55+r.rain*1.5-r.wind)*Math.min(1,t*.4),r.flash=Math.max(0,r.flash-t*4.5),r.rain>.55&&(r.lightningTimer-=t,r.lightningTimer<=0&&(r.lightningTimer=6+Math.random()*12,r.flash=1,i!=null&&i.audio&&i.audio.thunder())),this.hour=(this.hour+24/this.dayLength*t)%24;const a=this.hour/24,o=Math.sin((a-.25)*Math.PI*2),c=a*Math.PI*2,l=new P(Math.cos(c)*Math.cos(o*.8),o,Math.sin(c)*Math.cos(o*.8)).normalize(),h=um(-.12,.22,o),u=Math.max(0,1-Math.abs(o)*3.2);this.nightFactor=1-h;const f=new ut(4159928),p=new ut(10272989),g=new ut(16768954),_=new ut(2366020),m=new ut(8142186),d=new ut(16751210),M=new ut(263696),E=new ut(725030),v=new ut(1908792),I=M.clone().lerp(f,h).lerp(_,u*.7),A=E.clone().lerp(p,h).lerp(m,u*.75),T=v.clone().lerp(g,h).lerp(d,u*.85);this.skyUniforms.top.value.copy(I),this.skyUniforms.mid.value.copy(A),this.skyUniforms.bottom.value.copy(T),this.skyUniforms.sunDir.value.copy(l),this.skyUniforms.night.value=this.nightFactor;const R=T.clone().lerp(A,.4);this.scene.fog.color.copy(R),this.scene.fog.density=.0014+r.rain*.0025,this.oceanUniforms.sky.value.copy(R),this.oceanUniforms.time.value=this.time,this.oceanUniforms.sun.value.copy(l),this.sun.position.copy(l).multiplyScalar(320),this.sun.position.y=Math.max(30,this.sun.position.y),this.sun.intensity=An(.25,2.35,h)*(1-r.rain*.55)+1.5*r.flash,this.sun.color.copy(new ut(16751203).lerp(new ut(16773334),h)),this.sun.target.position.set(this.cameraPos.x,0,this.cameraPos.z),this.hemi.intensity=An(.22,.72,h)*(1-r.rain*.25),this.hemi.color.copy(new ut(2240597).lerp(new ut(11064063),h)),this.hemi.groundColor.copy(new ut(1446428).lerp(new ut(5982778),h)),this.moon.intensity=this.nightFactor*.28,this.sky.position.copy(e.position),this.stars.position.copy(e.position),this.starMat.opacity=this.nightFactor*.9,this.sunSprite.position.copy(e.position).add(l.clone().multiplyScalar(950)),this.sunSprite.material.opacity=Zi(o*2.5,0,.85),this.sunSprite.material.color.copy(new ut(16756848).lerp(new ut(16774352),h)),this.sunSprite.scale.setScalar(An(70,150,Zi(o,0,1)));const S=this.nightFactor;this.buildingMat.emissiveIntensity=An(.05,.55,S)+u*.12,this.bulbMat.emissiveIntensity=An(.1,2.2,S),this.neonLights&&this.neonLights.forEach((L,F)=>{L.intensity=(F<2?10:7)*(.35+S*1.1)});for(const L of this.streetMaterials){const F=r.wetness;L.mat.roughness=An(L.rough[0],L.rough[1],F),L.mat.color.copy(L.baseColor).lerp(L.wetColor,F*.75)}this.puddleMat.opacity=r.wetness*.8;const x=r.wind;for(const L of this.windObjects){const F=L.userData.phase+this.time;L.userData.crown.rotation.z=Math.sin(F*1.1)*.055*x,L.userData.crown.rotation.x=Math.cos(F*.8)*.04*x}for(let L=0;L<this.clouds.length;L++){const F=this.clouds[L];F.position.x+=t*2.2*x*(.6+L%3*.15),F.position.x-this.cameraPos.x>900&&(F.position.x=this.cameraPos.x-900),F.position.z+=Math.sin(this.time*.05+L)*t*.6,F.material.opacity=(r.mode==="storm"?.72:r.mode==="rain"?.55:r.mode==="cloudy"?.4:.22)*(.5+this.rng.r()*.02),F.material.color.setHex(r.mode==="storm"?4869470:r.mode==="rain"?8094358:16777215)}if(this.rain.visible=r.rain>.02,this.rain.visible){const L=this.rain.geometry.attributes.position.array,F=this.rainData.speeds,V=e.position.x,Y=e.position.y,X=e.position.z,Z=.9+r.rain;for(let z=0;z<this.rainData.count;z++)L[z*3+1]-=F[z]*t*Z,L[z*3]+=x*4.5*t,L[z*3+2]+=x*1.5*t,L[z*3+1]<Y-6&&(L[z*3]=V+(Math.random()-.5)*110,L[z*3+1]=Y+38+Math.random()*12,L[z*3+2]=X+(Math.random()-.5)*110),Math.abs(L[z*3]-V)>70&&(L[z*3]=V+(Math.random()-.5)*110),Math.abs(L[z*3+2]-X)>70&&(L[z*3+2]=X+(Math.random()-.5)*110);this.rain.geometry.attributes.position.needsUpdate=!0,this.rainMat.opacity=r.rain*.62}i!=null&&i.audio&&i.audio.setRain(r.rain),r.flash>.01&&(this.hemi.intensity+=r.flash*2.5),this.sky.visible=!this.interiorActive,this.interiorActive&&(this.scene.fog.density=0)}clockString(){const t=Math.floor(this.hour),e=Math.floor(this.hour%1*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}weatherLabel(){const t=this.weather;return t.mode==="storm"?"HURRICANE WARNING":t.mode==="rain"?"TROPICAL RAIN":t.mode==="cloudy"?"OVERCAST":this.nightFactor>.5?"CLEAR NIGHT":"CLEAR"}_buildMapCanvas(){const n=document.createElement("canvas");n.width=n.height=2048;const i=n.getContext("2d"),r=2048/1400,a=2048/2;i.fillStyle="#0a1a26",i.fillRect(0,0,2048,2048),i.fillStyle="#1a2a33",i.beginPath(),i.arc(a,a,660*r,0,Math.PI*2),i.fill(),i.fillStyle="#2f2b36",i.beginPath(),i.arc(a,a,500*r,0,Math.PI*2),i.fill(),i.strokeStyle="#4b4756",i.lineWidth=14*r;for(let c=ft.gridMin;c<=ft.gridMax+1;c++){const l=a+c*ft.road*r;i.beginPath(),i.moveTo(l,a+ft.gridMin*ft.road*r),i.lineTo(l,a+(ft.gridMax+1)*ft.road*r),i.stroke(),i.beginPath(),i.moveTo(a+ft.gridMin*ft.road*r,l),i.lineTo(a+(ft.gridMax+1)*ft.road*r,l),i.stroke()}for(let c=ft.gridMin;c<=ft.gridMax;c++)for(let l=ft.gridMin;l<=ft.gridMax;l++){const h=a+(c*ft.road+40)*r,u=a+(l*ft.road+40)*r;i.fillStyle=c<-2?"#4c4a42":c>3?"#5c464e":"#3f3b4b",i.fillRect(h-30*r,u-30*r,60*r,60*r)}const o={motel:"#ff5da8",gas:"#ffd166",pawn:"#7dff9c",bank:"#38e8ff",store:"#ff9c5b",hospital:"#ff6b6b",charger:"#38e8ff"};for(const c in Nt){i.fillStyle=o[c]||"#fff";const l=a+Nt[c].x*r,h=a+Nt[c].z*r;i.fillRect(l-9,h-9,18,18),i.strokeStyle="rgba(0,0,0,.6)",i.lineWidth=3,i.strokeRect(l-9,h-9,18,18)}this.mapCanvas=n,this.mapScale=r,this.mapCenter=a}drawRadar(t,e,n,i,r,a){const o=t.canvas.width,c=o/2,h=c/115;t.clearRect(0,0,o,o),t.save(),t.beginPath(),t.arc(c,c,c,0,Math.PI*2),t.clip(),t.fillStyle="#0a1a26",t.fillRect(0,0,o,o);const u=this.mapScale/h,f=this.mapCenter+e*this.mapScale,p=this.mapCenter+n*this.mapScale;t.drawImage(this.mapCanvas,f-c*u,p-c*u,c*2*u,c*2*u,0,0,o,o),t.fillStyle="rgba(4,6,12,.18)",t.fillRect(0,0,o,o);const g=(_,m)=>[c+(_-e)*h,c+(m-n)*h];if(a){const[_,m]=g(a.x,a.z);t.fillStyle="#ffd166",t.beginPath(),t.moveTo(_,m-9),t.lineTo(_+7,m+5),t.lineTo(_-7,m+5),t.closePath(),t.fill(),t.strokeStyle="rgba(0,0,0,.5)",t.lineWidth=2,t.stroke()}for(const _ of r){const[m,d]=g(_.x,_.z);Math.hypot(m-c,d-c)>c-4||(_.type==="police"?(t.fillStyle=_.flash?"#ffffff":"#ff3b46",t.beginPath(),t.arc(m,d,5,0,Math.PI*2),t.fill(),t.strokeStyle=_.flash?"#ff3b46":"#ffffff",t.lineWidth=1.5,t.stroke()):_.type==="personal"?(t.fillStyle="#38e8ff",t.fillRect(m-4,d-4,8,8)):_.type==="partner"?(t.fillStyle="#ffd166",t.beginPath(),t.arc(m,d,4,0,Math.PI*2),t.fill()):_.type==="enemy"?(t.fillStyle="#ff6b6b",t.beginPath(),t.arc(m,d,3.5,0,Math.PI*2),t.fill()):_.type==="poi"&&(t.fillStyle=_.color||"#7dff9c",t.fillRect(m-3,d-3,6,6)))}t.save(),t.translate(c,c),t.rotate(i),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(0,-10),t.lineTo(7,8),t.lineTo(0,4),t.lineTo(-7,8),t.closePath(),t.fill(),t.strokeStyle="#ff2f8e",t.lineWidth=2,t.stroke(),t.restore(),t.restore(),t.fillStyle="rgba(56,232,255,.9)",t.font="bold 11px Arial",t.textAlign="center",t.fillText("N",c,16)}setInterior(t){this.interiorActive=t,this.interior.group.visible=t,this.ocean.visible=!t,this.sand.visible=!t,this.cityGround.visible=!t,this.hiddenWorld=this.hiddenWorld||[]}}const Ns=(s,t,e)=>s+(t-s)*e,ym=[{id:"pistol",name:"PISTOL",damage:32,head:3.2,mag:12,reserve:96,rate:.28,spread:.008,recoil:.012,pellets:1,weight:1,range:140,sound:"pistol"},{id:"smg",name:"SMG",damage:15,head:2.4,mag:30,reserve:150,rate:.085,spread:.022,recoil:.007,pellets:1,weight:.9,range:110,sound:"smg"},{id:"shotgun",name:"SHOTGUN",damage:14,head:2,mag:6,reserve:36,rate:.82,spread:.062,recoil:.045,pellets:8,weight:1.6,range:55,sound:"shotgun"}];function Qe(s,t=.9,e=.02){return new Tt({color:s,roughness:t,metalness:e})}function Sm(s){const t=s==="lucia",e=new Vt,n=Qe(t?12155476:13209450,.85),i=Qe(t?2105126:15262422,.9),r=Qe(t?7283512:3029834,.85),a=Qe(t?2830140:4937830,.95),o=Qe(t?1774352:2760986,.95),c=Qe(1512986,.8),l=new Vt,h=new Vt;l.add(h);const u=new B(new mt(.55,.3,.32),a);u.position.y=1,h.add(u);const f=new B(new mt(.64,.72,.36),t?i:r);if(f.position.y=1.46,h.add(f),t){const x=new B(new mt(.58,.09,.36),Qe(855312));x.position.y=1.12,h.add(x)}else{const x=new B(new mt(.3,.64,.38),Qe(14209732));x.position.y=1.48,h.add(x);const C=new B(new mt(.7,.12,.4),Qe(1844270));C.position.y=1.8,h.add(C)}const p=new B(new Ie(.11,.12,.16,8),n);p.position.y=1.86,h.add(p);const g=new Vt;g.position.y=2,h.add(g);const _=new B(new de(.225,14,12),n);_.scale.set(.92,1.06,.95),g.add(_);const m=new B(new mt(.055,.09,.08),n);m.position.set(0,-.02,.21),g.add(m);for(const x of[-1,1]){const C=new B(new de(.026,6,5),Qe(1314830,.4));C.position.set(x*.08,.04,.2),g.add(C)}let d=new Vt;if(t){const x=new B(new de(.248,12,10,0,Math.PI*2,0,Math.PI*.62),o);x.position.y=.03,x.scale.set(1,1.08,1),g.add(x);for(let L=0;L<7;L++){const F=.1+Math.random()*.05,V=.55+Math.random()*.28,Y=new B(new mt(F,V,.07),o);Y.position.set(-.18+L*.06,-V/2-.1,-.15-L%2*.04),Y.rotation.z=(L-3)*.06,d.add(Y)}const C=new B(new mt(.4,.16,.1),o);C.position.set(0,.13,.17),C.rotation.x=.2,g.add(C),g.add(d)}else{const x=new B(new de(.238,10,8,0,Math.PI*2,0,Math.PI*.52),o);x.position.y=.035,g.add(x);const C=new B(new mt(.22,.1,.08),o);C.position.set(0,-.14,.17),g.add(C)}const M=new Vt,E=new Vt;M.position.set(-.4,1.72,0),E.position.set(.4,1.72,0);for(const[x,C]of[[M,-1],[E,1]]){const L=new B(new mt(.18,.46,.2),t&&C<0?r:i);L.position.y=-.22,x.add(L);const F=new B(new mt(.15,.4,.17),t?n:r);F.position.y=-.6,x.add(F);const V=new B(new de(.085,7,6),n);V.position.y=-.82,x.add(V),h.add(x)}const v=new Vt,I=new Vt;v.position.set(-.17,.9,0),I.position.set(.17,.9,0);for(const[x,C]of[[v,-1],[I,1]]){const L=new B(new mt(.23,.46,.26),a);L.position.y=-.22,x.add(L);const F=new B(new mt(.2,.44,.22),a);F.position.y=-.65,x.add(F);const V=new B(new mt(.22,.12,.36),c);V.position.set(0,-.9,.06),x.add(V),h.add(x)}const A=new Vt,T=new Tt({color:2303018,roughness:.45,metalness:.75}),R=new B(new mt(.07,.1,.42),T);R.position.z=.2,A.add(R);const S=new B(new mt(.08,.2,.1),T);return S.position.set(0,-.13,.03),S.rotation.x=-.2,A.add(S),s==="shotgun"&&(R.scale.z=1.6,R.position.z=.36),A.position.set(0,-.82,.12),A.visible=!1,E.add(A),l.traverse(x=>{x.isMesh&&(x.castShadow=!0)}),e.add(l),{kind:s,group:e,root:l,body:h,headGroup:g,hairGroup:d,armL:M,armR:E,legL:v,legR:I,gun:A,parts:{head:_,torso:f,pelvis:u,armL:M,armR:E,legL:v,legR:I}}}class uc{constructor(t,e,n={}){this.kind=t,this.name=t==="jason"?"JASON":"LUCIA";const i=Sm(t);this.model=i,this.group=i.group,this.group.position.set(n.x??0,.27,n.z??0),this.pos=this.group.position,this.vel=new P,this.heading=n.heading??0,this.moveSpeed=4.7,this.sprintSpeed=8.4,this.speed=0,this.vy=0,this.onGround=!0,this.hp=100,this.maxHp=100,this.armor=0,this.focus=100,this.maxFocus=100,this.focusActive=!1,this.aim=!1,this.sprinting=!1,this.inVehicle=null,this.seat=null,this.dead=!1,this.phase=Math.random()*6,this.weapons=ym.map(r=>({...r,magAmmo:r.mag,reserveAmmo:r.reserve})),this.weapon=0,this.fireCooldown=0,this.reloading=!1,this.reloadT=0,this.recoil=0,this.aimSway=0,this.lastShot=0,this.beam=null,this.setVisible=!0,this.hairPhase=Math.random()*7,e.add(this.group),this.model.gun.visible=!0,this.btn={x:0,z:0}}get weaponDef(){return this.weapons[this.weapon]}lookAtPoint(t,e){this.heading=Math.atan2(t-this.pos.x,e-this.pos.z)}update(t,e,n,i,r){var h,u,f;if(this.dead)return;if(this.fireCooldown=Math.max(0,this.fireCooldown-t),this.recoil=Math.max(0,this.recoil-t*5.5),this.aimSway+=t*(.8+this.weaponDef.weight*.7),this.reloading&&(this.reloadT-=t,this.reloadT<=0)){const p=this.weaponDef,g=p.mag-p.magAmmo,_=Math.min(g,p.reserveAmmo);p.magAmmo+=_,p.reserveAmmo-=_,this.reloading=!1,(h=r==null?void 0:r.updateHud)==null||h.call(r)}this.inVehicle==null?(e.focus&&!this.focusActive&&this.focus>2&&(this.focusActive=!0,(f=(u=r==null?void 0:r.audio)==null?void 0:u.pickup)==null||f.call(u,!0)),(!e.focus||this.focus<=.5)&&(this.focusActive=!1),this.focusActive?this.focus=Math.max(0,this.focus-t*12):this.focus=Math.min(this.maxFocus,this.focus+t*4.5)):(this.focusActive=!1,this.focus=Math.min(this.maxFocus,this.focus+t*2));let a=0,o=0;!this.inVehicle&&!r.uiLocked&&(e.forward&&(o+=1),e.back&&(o-=1),e.left&&(a-=1),e.right&&(a+=1));const c=Math.hypot(a,o);let l=!1;if(c>.01){a/=c,o/=c;const p=Math.sin(n),g=Math.cos(n),_=a*g+o*p,m=-a*p+o*g,d=this.aim?3.1:this.sprinting?this.sprintSpeed:this.moveSpeed,M=this.weaponDef.weight>1.3?.86:1,E=d*M;this.pos.x+=_*E*t,this.pos.z+=m*E*t,this.heading=Math.atan2(_,m),this.speed=E,l=!0}else this.speed=0;this.inVehicle==null&&(i.collideCircle(this.pos,.48),e.jump&&this.onGround&&(this.vy=6.4,this.onGround=!1),this.vy-=19*t,this.pos.y+=this.vy*t,this.pos.y<=.27&&(this.pos.y=.27,this.vy=0,this.onGround=!0),Math.hypot(this.pos.x,this.pos.z)>650&&(this.pos.x*=.99,this.pos.z*=.99)),this.group.rotation.y=this.heading,this.animate(t,l,i)}animate(t,e,n){var o;const i=this.model,r=this.aim&&!this.inVehicle;e?this.phase+=t*(this.sprinting?12:8):this.phase+=t*1.6;const a=e?Math.sin(this.phase)*(this.sprinting?.95:.62):0;if(i.legL.rotation.x=a,i.legR.rotation.x=-a,r?(i.armR.rotation.x=Ns(i.armR.rotation.x,-1.55-this.recoil*.8,.35),i.armL.rotation.x=Ns(i.armL.rotation.x,-1.2,.3),i.armL.rotation.y=.35,i.armR.rotation.y=-.05):(i.armL.rotation.x=Ns(i.armL.rotation.x,-a*.8,.4),i.armR.rotation.x=Ns(i.armR.rotation.x,a*.8,.4),i.armL.rotation.y=0,i.armR.rotation.y=0),i.body.position.y=e?Math.abs(Math.sin(this.phase))*.045:Math.sin(this.phase)*.012,i.headGroup.rotation.x=r?-.08:Math.sin(this.phase*.5)*.02,this.kind==="lucia"&&i.hairGroup){const c=performance.now()*.001,l=((o=n==null?void 0:n.weather)==null?void 0:o.wind)||.6;i.hairGroup.children.forEach((h,u)=>{h.rotation.x=Math.sin(c*2.2+u*.4)*.08*l+(this.sprinting?-.2:0),h.rotation.z=(u-3)*.06+Math.sin(c*1.7+u)*.03*l})}this.recoil>.001&&!r&&(i.armR.rotation.x-=this.recoil*.5)}shoot(t,e=1){var i;const n=this.weaponDef;return this.fireCooldown>0||this.reloading?!1:n.magAmmo<=0?(this.reload(t),!1):(n.magAmmo--,this.fireCooldown=n.rate,this.recoil=Math.min(1,this.recoil+n.recoil*20),this.lastShot=performance.now(),(i=t.audio)==null||i.shot(n.sound),t.fireBullet(this,n,e),t.updateHud(),n.magAmmo===0&&this.reload(t),!0)}reload(t){var n;const e=this.weaponDef;this.reloading||e.magAmmo>=e.mag||e.reserveAmmo<=0||(this.reloading=!0,this.reloadT=1.35,(n=t.audio)==null||n.reload(),t.toast(`RELOADING ${e.name}`,""))}switchWeapon(t,e){var n;t!==this.weapon&&(this.weapon=t,this.reloading=!1,this.fireCooldown=.2,(n=e.audio)==null||n.tick(),e.updateHud())}damage(t,e,n){var r,a;if(this.dead)return;let i=t;if(this.armor>0){const o=Math.min(this.armor,i*.7);this.armor-=o,i-=o}this.hp-=i,(r=e==null?void 0:e.onPlayerDamaged)==null||r.call(e,this,i,n),this.hp<=0&&(this.hp=0,this.dead=!0,(a=e==null?void 0:e.onPlayerDeath)==null||a.call(e,this))}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}setWeaponModel(){const t=this.weaponDef;this.model.gun.visible=!0,this.model.gun.scale.set(1,1,t.id==="shotgun"?1.5:t.id==="smg"?1.15:1)}}class Em{constructor(t,e,n,i="gang",r){this.kind=i,this.scene=t,this.group=new Vt,this.hp=i==="cop"?70:55,this.maxHp=this.hp,this.dead=!1,this.pos=this.group.position,this.pos.set(e,.27,n),this.heading=0,this.phase=Math.random()*5,this.fireT=1+Math.random()*2,this.state="idle",this.speed=i==="cop"?4.1:3.4,this.game=r,this.aggro=!1,this.weak=null,this.corpseT=0,this.walkT=0,this.hitFlash=0;const a=i==="cop"?2371663:[9383743,3104575,3816010,7294767][Math.floor(Math.random()*4)],o=i==="cop"?1844019:2829108,c=[13209450,9067069,14725264,7292464][Math.floor(Math.random()*4)],l=M=>new Tt({color:M,roughness:.9}),h=new B(new mt(.64,.78,.36),l(a));if(h.position.y=1.28,this.group.add(h),i==="cop"){const M=new B(new mt(.68,.5,.4),l(1185311));M.position.y=1.3,this.group.add(M);const E=new B(new Kt(.1,.08),new Dt({color:16765286}));E.position.set(-.15,1.42,.2),this.group.add(E)}const u=new B(new de(.23,10,8),l(c));u.position.y=1.87,this.group.add(u),this.head=u;const f=new B(new de(.235,8,6,0,Math.PI*2,0,Math.PI*.5),l(i==="cop"?1779e3:2103314));if(f.position.y=1.9,this.group.add(f),i==="cop"){const M=new B(new Ie(.25,.27,.16,10),l(1713206));M.position.y=2.05,this.group.add(M);const E=new B(new mt(.3,.04,.2),l(1120294));E.position.set(0,1.99,.2),this.group.add(E)}this.weak=new B(new de(.34,10,8),new Dt({color:16765286,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1})),this.weak.position.y=1.87,this.group.add(this.weak),this.weak2=new B(new de(.46,8,6),new Dt({color:16723854,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1})),this.weak2.position.y=1.25,this.group.add(this.weak2);const p=new Vt,g=new Vt;for(const[M,E]of[[p,-.17],[g,.17]]){const v=new B(new mt(.23,.82,.26),l(o));v.position.y=-.36,M.add(v),M.position.set(E,.82,0),this.group.add(M)}const _=new Vt,m=new Vt;for(const[M,E]of[[_,-.42],[m,.42]]){const v=new B(new mt(.18,.68,.2),l(a));v.position.y=-.3,M.add(v),M.position.set(E,1.6,0),this.group.add(M)}const d=new B(new mt(.08,.12,.5),new Tt({color:1776416,metalness:.8,roughness:.4}));d.position.set(0,-.65,.22),m.add(d),this.armL=_,this.armR=m,this.legL=p,this.legR=g,this.group.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),t.add(this.group)}update(t,e){if(this.dead){this.corpseT+=t;return}this.fireT-=t,this.hitFlash=Math.max(0,this.hitFlash-t*4);const n=e.activeChar,i=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,a=Math.hypot(i,r);if(this.weak.material.opacity=e.focus?.85:0,this.weak2.material.opacity=e.focus?.55:0,this.head,e.focus&&(this.weak.material.opacity=.6+Math.sin(e.time*6)*.25),this.hitFlash>0?(this.head.material.emissive=new ut(16733542),this.head.material.emissiveIntensity=.6):this.head.material.emissiveIntensity=0,this.aggro&&a>2.2&&a<80){const o=i/(a||1),c=r/(a||1);a>9?(this.pos.x+=o*this.speed*t,this.pos.z+=c*this.speed*t):a<6&&(this.pos.x-=o*this.speed*.5*t,this.pos.z-=c*this.speed*.5*t),this.pos.x+=-c*Math.sin(e.time*.8+this.phase)*1.2*t,this.pos.z+=o*Math.sin(e.time*.8+this.phase)*1.2*t,e.world.collideCircle(this.pos,.45),this.heading=Math.atan2(i,r),this.walkT+=t*8,this.legL.rotation.x=Math.sin(this.walkT)*.6,this.legR.rotation.x=-Math.sin(this.walkT)*.6,this.armR.rotation.x=-1.45,this.armL.rotation.x=-1.1,this.fireT<=0&&a<48&&(this.fireT=(this.kind==="cop"?1.1:1.35)+Math.random()*.9,e.enemyShoot(this,a))}else this.walkT+=t*2.2,this.legL.rotation.x=Math.sin(this.walkT)*.1,this.legR.rotation.x=-Math.sin(this.walkT)*.1,this.armR.rotation.x=0,this.armL.rotation.x=0;this.group.rotation.y=this.heading,this.group.position.y=.27}damage(t,e,n=!1){var i,r,a;this.dead||(this.hp-=t,this.hitFlash=1,this.aggro=!0,(r=(i=e==null?void 0:e.audio)==null?void 0:i.hit)==null||r.call(i),this.hp<=0&&(this.dead=!0,this.aggro=!1,this.group.rotation.x=-Math.PI/2,this.group.position.y=.35,this.weak.material.opacity=0,this.weak2.material.opacity=0,(a=e==null?void 0:e.onEnemyKilled)==null||a.call(e,this,n)))}}const Vs=(s,t,e)=>Math.min(e,Math.max(t,s)),wm=(s,t,e)=>s+(t-s)*e,js={grotto:{name:"GROTTO GT",maxSpeed:47,accel:17,brake:26,handling:1.55,fuel:100,consumption:1.15,mass:1300,color:16723854},sedan:{name:"LEONIDA SEDAN",maxSpeed:38,accel:12,brake:22,handling:1.35,fuel:90,consumption:.9,mass:1500,color:7180200},muscle:{name:"VICE MUSCLE",maxSpeed:46,accel:16,brake:20,handling:1.2,fuel:95,consumption:1.35,mass:1600,color:11549230},van:{name:"GELHORN VAN",maxSpeed:31,accel:9,brake:18,handling:1,fuel:110,consumption:1,mass:2200,color:12169894},sports:{name:"VAPID TORERO",maxSpeed:54,accel:21,brake:30,handling:1.7,fuel:85,consumption:1.5,mass:1200,color:16765286},police:{name:"POLICE CRUISER",maxSpeed:50,accel:19,brake:28,handling:1.5,fuel:120,consumption:1.4,mass:1500,color:1778736},ev:{name:"VOLT EV",maxSpeed:43,accel:18,brake:26,handling:1.45,fuel:100,consumption:0,mass:1400,color:10479871,isEV:!0},taxi:{name:"BEACH TAXI",maxSpeed:39,accel:13,brake:23,handling:1.4,fuel:90,consumption:1,mass:1450,color:15909198}},jc=new Ie(.36,.36,.26,10);jc.rotateZ(Math.PI/2);function tn(s,t,e,n,i={}){return new B(new mt(s,t,e),new Tt({color:n,roughness:i.rough??.42,metalness:i.metal??.5,emissive:i.emissive??0,emissiveIntensity:i.ei??0}))}function Tm(s,t){const e=js[s]||js.sedan,n=t??e.color,i=new Vt,r=new Vt,a=s==="van",o=s==="sports",c=a?4.9:o?4.35:4.15,l=a?2.1:1.92,h=tn(l,.52,c,n,{rough:.32,metal:.75});h.position.y=.66,r.add(h);const u=tn(l+.03,.28,c-.2,1513244,{rough:.7,metal:.3});u.position.y=.38,r.add(u);const f=tn(l-.12,.22,c*.3,n,{rough:.32,metal:.75});f.position.set(0,.95,c*.28),r.add(f);const p=a?1.5:o?.56:.68,g=tn(l-.16,p,c*.44,1844784,{rough:.12,metal:.9});g.position.set(0,.92+p/2,a?.25:-.15),r.add(g);const _=tn(l-.2,.12,c*.4,n,{rough:.3,metal:.7});_.position.set(0,.92+p+.04,a?.25:-.15),r.add(_);const m=tn(l+.04,.22,.24,2236970,{metal:.6});m.position.set(0,.5,c/2+.06),r.add(m);const d=tn(l+.04,.22,.24,2236970,{metal:.6});d.position.set(0,.5,-c/2-.06),r.add(d);const M=new Dt({color:16773832,toneMapped:!1}),E=new Dt({color:16720435,toneMapped:!1});for(const A of[-1,1]){const T=new B(new mt(.34,.16,.06),M);T.position.set(A*(l/2-.3),.78,c/2+.11),r.add(T);const R=new B(new mt(.4,.14,.06),E);R.position.set(A*(l/2-.3),.78,-c/2-.1),r.add(R)}if(s==="police"){const A=new B(new mt(1.1,.14,.32),new Dt({color:16720435,toneMapped:!1}));A.position.set(0,1.9,-.05),r.add(A);const T=new B(new mt(1.1,.14,.32),new Dt({color:2241535,toneMapped:!1,transparent:!0,opacity:.6}));T.position.set(0,1.9,-.05),r.add(T),i.userData.bar1=A,i.userData.bar2=T;const R=new B(new Kt(l-.04,.5),new Dt({color:15329774}));R.position.set(0,.68,-c/2-.13),R.rotation.y=Math.PI,r.add(R)}if(s==="taxi"){const A=tn(.6,.22,.3,16765286,{emissive:16757504,ei:1.2});A.position.set(0,1.78,-.1),r.add(A)}if(o){const A=tn(l-.2,.08,.4,1513244,{metal:.7});A.position.set(0,1.2,-c/2+.24),r.add(A);for(const T of[-.6,.6]){const R=tn(.08,.24,.08,1513244);R.position.set(T,1.08,-c/2+.24),r.add(R)}}const v=[],I=c*.31;for(const A of[-1,1])for(const T of[-1,1]){const R=new B(jc,new Tt({color:1184278,roughness:.9}));R.position.set(A*(l/2-.03),.37,T*I),R.castShadow=!0;const S=new B(new Ie(.16,.16,.28,8),new Tt({color:10197928,metalness:.9,roughness:.25}));S.rotation.z=Math.PI/2,S.position.copy(R.position),r.add(R),r.add(S),v.push({w:R,hub:S,sx:A,sz:T})}if(i.add(r),s==="grotto"||s==="ev"){const A=new B(new Kt(l+1,c+.6),new Dt({color:s==="ev"?3729663:16723854,transparent:!0,opacity:.28,blending:je,depthWrite:!1,toneMapped:!1}));A.rotation.x=-Math.PI/2,A.position.y=.06,i.add(A),i.userData.underglow=A}return i.userData={...i.userData,body:r,wheels:v,headMat:M,tailMat:E,len:c,wid:l},i}class Ji{constructor(t,e,n={}){this.type=t,this.spec=js[t]||js.sedan,this.scene=e,this.mesh=Tm(t,n.color),e.add(this.mesh),this.pos=this.mesh.position,this.heading=n.heading??0,this.speed=0,this.fuel=n.fuel??this.spec.fuel,this.maxFuel=this.spec.fuel,this.health=100,this.maxHealth=100,this.locked=!!n.locked,this.personal=!!n.personal,this.isEV=!!this.spec.isEV,this.occupied=!!n.occupied,this.police=t==="police",this.driver=n.driver||null,this.ai=n.ai||null,this.seats=2,this.driverSeat=null,this.passengerSeat=null,this.steerVisual=0,this.wheelSpin=0,this.sirenT=0,this.prevSpeed=0,this.smokeT=0,this.dead=!1,this.parkedBrake=!0,this.throttle=0,this.node=n.node||null,this.spawnedByPolice=!!n.policeSpawn,this.aiTimer=0,this.hitCooldown=0,this.braking=!1,this.turning=0,this.mesh.userData.vehicle=this,this.mesh.traverse(i=>{i.userData.vehicle=this}),n.x!==void 0&&this.pos.set(n.x,0,n.z),this.mesh.rotation.y=this.heading,this.parkedBrake=!n.ai,this.setLights(0)}setLights(t){const{headMat:e,tailMat:n}=this.mesh.userData;e&&e.color.setHex(this.speed!==0||this.driver?16773832:9077871),n&&n.color.setHex(this.braking?16733508:10228768),this.mesh.userData.underglow&&(this.mesh.userData.underglow.material.opacity=.18+t*.3)}headingVector(t=new P){return t.set(Math.sin(this.heading),0,Math.cos(this.heading))}forwardPoint(t,e=new P){return e.set(this.pos.x+Math.sin(this.heading)*t,0,this.pos.z+Math.cos(this.heading)*t)}update(t,e,n,i,r){var A;if(this.dead)return;const a=this.spec,o=(e==null?void 0:e.throttle)||0,c=(e==null?void 0:e.brake)||0,l=(e==null?void 0:e.steer)||0,h=!!(e!=null&&e.handbrake);this.throttle=o,this.braking=c>0,this.fuel<=0&&(this.fuel=0),this.fuel>0?(o>0&&(this.speed+=a.accel*o*t*(this.speed<0?2.2:1)),c>0&&(this.speed>.4?this.speed-=a.brake*c*t:this.speed-=a.accel*.42*c*t),o===0&&c===0&&(this.speed*=1-.55*t),this.fuel=Math.max(0,this.fuel-(Math.abs(o)*a.consumption+.05)*t)):this.speed*=1-1.2*t,this.speed=Vs(this.speed,-a.maxSpeed*.35,a.maxSpeed),h&&(this.speed*=1-3.2*t);const f=Vs(Math.abs(this.speed)/13,0,1.25),p=this.speed<0?-1:1,g=l*a.handling*f*.95*p;this.heading+=g*t*(h?1.3:1),this.turning=g;const _=this.headingVector(this._fwd||(this._fwd=new P));this.pos.x+=_.x*this.speed*t,this.pos.z+=_.z*this.speed*t;const m=1.15,d=this.forwardPoint(1.45,this._p1||(this._p1=new P)),M=this.forwardPoint(-1.45,this._p2||(this._p2=new P));let E=!1;const v=new P(d.x,0,d.z);n.collideCircle(v,m)&&(E=!0),this.pos.x+=v.x-d.x,this.pos.z+=v.z-d.z;const I=new P(M.x,0,M.z);if(n.collideCircle(I,m)&&(E=!0),this.pos.x+=I.x-M.x,this.pos.z+=I.z-M.z,E){const T=Math.abs(this.speed);T>12&&(this.damage(T*.7,r),r!=null&&r.onCarCrash&&r.onCarCrash(this,T)),this.speed*=-.12}if(r&&r.vehicles)for(const T of r.vehicles){if(T===this||T.dead)continue;const R=T.pos.x-this.pos.x,S=T.pos.z-this.pos.z,x=R*R+S*S;if(x<7.5&&x>.01){const C=Math.sqrt(x),L=(2.74-C)*.5;this.pos.x-=R/C*L,this.pos.z-=S/C*L,T.pos.x+=R/C*L,T.pos.z+=S/C*L,Math.abs(this.speed)>8&&(this.damage(Math.abs(this.speed)*.25,r),T.damage(Math.abs(this.speed)*.2,r),this.speed*=.55,r.onCarCrash&&r.onCarCrash(this,Math.abs(this.speed)))}}this.mesh.position.copy(this.pos),this.mesh.rotation.y=this.heading,this.mesh.rotation.z=wm(this.mesh.rotation.z,-g*.06*Vs(Math.abs(this.speed)/25,0,1),.1),this.wheelSpin+=this.speed*t/.36;for(const T of this.mesh.userData.wheels)T.w.rotation.x=this.wheelSpin,T.sz>0&&(T.w.rotation.y=l*.42),T.hub.rotation.x=this.wheelSpin;if(this.setLights(n.nightFactor),this.police&&this.mesh.userData.bar1){this.sirenT+=t;const T=Math.sin(this.sirenT*8)>0;this.mesh.userData.bar1.material.color.setHex(T?16720435:2755086),this.mesh.userData.bar2.material.opacity=T?.12:.95}this.health<35&&(this.smokeT+=t,this.smokeT>1.4&&(this.smokeT=0,(A=r==null?void 0:r.spawnSmoke)==null||A.call(r,this)))}damage(t,e){this.dead||(this.health-=t,this.health<=0&&(this.health=0,this.dead=!0,e&&e.explodeVehicle(this)))}refuel(t,e,n){this.isEV?this.fuel=Math.min(this.maxFuel,this.fuel+e):this.fuel=Math.min(this.maxFuel,this.fuel+e),this.health=Math.min(100,this.health+25),n&&n.toast(`${this.isEV?"CHARGE":"FUEL"} ${Math.round(this.fuel)}% · BODY REPAIRED`,"good")}enterSeat(t,e){e==="driver"?this.driverSeat=t:this.passengerSeat=t,this.occupied=!0,this.parkedBrake=!1}exitSeat(t){this.driverSeat===t&&(this.driverSeat=null),this.passengerSeat===t&&(this.passengerSeat=null),!this.driverSeat&&!this.passengerSeat&&(this.occupied=!1)}seatPosition(t,e=new P){const n=t==="driver"?-.42:.42,i=-.1,r=Math.sin(this.heading),a=Math.cos(this.heading);return e.set(this.pos.x+a*n+r*i,.7,this.pos.z-r*n+a*i),e}}const Mi=80;class bm{constructor(t,e){this.scene=t,this.world=e,this.vehicles=[],this.peds=[],this.rngSeed=77}rng(){return this.rngSeed=this.rngSeed*1664525+1013904223>>>0,this.rngSeed/4294967296}range(t,e){return t+(e-t)*this.rng()}pick(t){return t[Math.floor(this.rng()*t.length)]}spawnTraffic(t){const r=["sedan","muscle","taxi","van","sports","ev"];for(let a=0;a<16;a++){let o=Math.floor(this.range(-5,5)),c=Math.floor(this.range(-5,5));Math.abs(o*80)<90&&Math.abs(c*80)<90&&(o+=2,c+=1);const l=this.pick([[1,0],[-1,0],[0,1],[0,-1]]),h=o*80-l[0]*4*this.range(-1,1),u=c*80-l[1]*4*this.range(-1,1),f=Math.atan2(l[0],l[1]),p=new Ji(this.pick(r),this.scene,{x:h,z:u,heading:f,locked:!1,ai:!0,occupied:!0});p.traffic=!0,p.aiDir=l,p.aiNode={x:o*80,z:c*80},p.aiTarget={x:(o+l[0])*80,z:(c+l[1])*80},p.cruise=this.range(9,15),this.vehicles.push(p),t.vehicles.push(p),t.trafficCars.push(p)}for(let a=0;a<8;a++){const o=Math.floor(this.range(-5,5)),c=Math.floor(this.range(-5,5)),l=this.rng()>.5,h=l?o*80+this.range(-4,4):o*80+this.range(20,55),u=l?c*80+this.range(20,55):c*80+this.range(-4,4),f=new Ji(this.pick(r),this.scene,{x:h,z:u,heading:l?Math.PI/2:0,locked:this.rng()>.25,occupied:!1});f.parked=!0,f.parkedBrake=!0,this.vehicles.push(f),t.vehicles.push(f),t.parkedCars.push(f)}}spawnPeds(t){const e=[14191210,8363967,11575504,14729360,10452847,6987914,13684944];for(let n=0;n<26;n++){const i=Math.floor(this.range(-5,5)),r=Math.floor(this.range(-5,5)),a=this.rng()>.5?1:-1,o=i*Mi+a*31.5+this.range(-1.5,1.5),c=r*Mi+this.range(-30,30),l=Am(e[Math.floor(this.rng()*e.length)],this.range(.9,1.08));l.isPed=!0,l.hp=30,l.maxHp=30,l.dead=!1,l.group.position.set(o,.27,c),l.walkDir=this.range(0,Math.PI*2),l.walkT=0,l.speed=this.range(.7,1.4),l.home={x:o,z:c},this.scene.add(l.group),t.peds.push(l)}}update(t,e,n){for(const i of this.vehicles)i.dead||(i.traffic?this.updateTrafficCar(i,t,e):(i.parked||!i.driverSeat&&!i.personal)&&i.update(t,null,this.world,n,e));for(const i of e.peds){if(i.dead||i.isPlayer)continue;i.walkT+=t;const r=i.flee?e.player.pos:null;if(!i.flee)i.group.position.x+=Math.sin(i.walkDir)*i.speed*t,i.group.position.z+=Math.cos(i.walkDir)*i.speed*t,Math.hypot(i.group.position.x-i.home.x,i.group.position.z-i.home.z)>26&&(i.walkDir+=Math.PI),this.world.isInsideBuilding(i.group.position.x,i.group.position.z,.6)&&(i.walkDir+=Math.PI*.7),Math.hypot(i.group.position.x,i.group.position.z)>640&&(i.walkDir+=Math.PI),i.group.rotation.y=i.walkDir;else if(r){const o=i.group.position.x-r.x,c=i.group.position.z-r.z,l=Math.hypot(o,c)||1;l<22&&(i.group.position.x+=o/l*3.4*t,i.group.position.z+=c/l*3.4*t,i.group.rotation.y=Math.atan2(-o,-c))}const a=i.group.userData.walker;if(a){const o=Math.sin(i.walkT*(i.flee?12:7))*.55*(i.flee?1.5:1);a.legL.rotation.x=o,a.legR.rotation.x=-o,a.armL.rotation.x=-o*.8,a.armR.rotation.x=o*.8}i.group.position.y=.27}}updateTrafficCar(t,e,n){const i=t.aiTarget,r=i.x-t.pos.x,a=i.z-t.pos.z;if(Math.hypot(r,a)<9){const _=Math.round(i.x/Mi),m=Math.round(i.z/Mi),d=[[1,0],[-1,0],[0,1],[0,-1]].filter(E=>!(E[0]===-t.aiDir[0]&&E[1]===-t.aiDir[1])),M=this.pick(d);t.aiDir=M,t.aiTarget={x:(_+M[0])*Mi,z:(m+M[1])*Mi},(Math.abs(t.aiTarget.x)>380||Math.abs(t.aiTarget.z)>380)&&(t.aiTarget={x:0,z:0})}let l=(Math.atan2(r,a)-t.heading+Math.PI*3)%(Math.PI*2)-Math.PI;const h=Vs(l*1.8,-1,1);let u=!1;for(const _ of n.vehicles){if(_===t||_.dead)continue;const m=_.pos.x-t.pos.x,d=_.pos.z-t.pos.z;if(Math.hypot(m,d)<9&&Math.sin(t.heading)*m+Math.cos(t.heading)*d>2){u=!0;break}}const f=u?0:Math.abs(l)>.8?4:t.cruise||11,p=t.speed<f?.85:0,g=t.speed>f+2?1:0;t.update(e,{throttle:p,brake:g,steer:h,handbrake:!1},this.world,n.time,n),t.health<=0&&!t.dead&&(t.dead=!0,n.explodeVehicle(t))}}function Am(s,t=1){const e=new Vt,n=[13209450,9067069,14725264,7292464][Math.floor(Math.random()*4)],i=[2764864,4207914,2040876,5917242][Math.floor(Math.random()*4)],r=p=>new Tt({color:p,roughness:.9}),a=new B(new mt(.62,.78,.34),r(s));a.position.y=1.18,e.add(a);const o=new B(new de(.22,10,8),r(n));o.position.y=1.75,e.add(o);const c=new B(new de(.225,8,6,0,Math.PI*2,0,Math.PI*.55),r(2365972));c.position.y=1.78,e.add(c);const l=new Vt,h=new Vt;for(const[p,g]of[[l,-.17],[h,.17]]){const _=new B(new mt(.22,.78,.24),r(i));_.position.y=-.34,p.add(_),p.position.set(g,.78,0),e.add(p)}const u=new Vt,f=new Vt;for(const[p,g]of[[u,-.42],[f,.42]]){const _=new B(new mt(.17,.64,.19),r(s));_.position.y=-.28,p.add(_),p.position.set(g,1.5,0),e.add(p)}return e.scale.setScalar(t),e.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),e.userData.walker={legL:l,legR:h,armL:u,armR:f},{group:e,torso:a,head:o,hair:c,legL:l,legR:h,armL:u,armR:f,scale:t}}class Cm{constructor(){this.ctx=null,this.master=null,this.engineOsc=null,this.engineGain=null,this.engineFilter=null,this.rainGain=null,this.sirenOsc=null,this.sirenGain=null,this.volume=.55,this._lastShot=0,this._lastThunder=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);const e=this._noiseBuffer(2.5),n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=900,this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=0,n.connect(i),i.connect(this.rainGain),this.rainGain.connect(this.master),n.start(),this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=50,this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=380,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engineOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.master),this.engineOsc.start(),this.sirenOsc=this.ctx.createOscillator(),this.sirenOsc.type="square",this.sirenOsc.frequency.value=650,this.sirenGain=this.ctx.createGain(),this.sirenGain.gain.value=0;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=800,r.Q.value=2,this.sirenOsc.connect(r),r.connect(this.sirenGain),this.sirenGain.connect(this.master),this.sirenOsc.start(),this._sirenT=0}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}_noiseBuffer(t=1){const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;return n}_noise(t,e,n="lowpass",i=1200){if(!this.ctx)return;const r=this.ctx.createBufferSource();r.buffer=this._noiseBuffer(Math.max(.08,t));const a=this.ctx.createBiquadFilter();a.type=n,a.frequency.value=i;const o=this.ctx.createGain(),c=this.ctx.currentTime;o.gain.setValueAtTime(e,c),o.gain.exponentialRampToValueAtTime(1e-4,c+t),r.connect(a),a.connect(o),o.connect(this.master),r.start(),r.stop(c+t)}shot(t="pistol"){if(!this.ctx)return;const e=performance.now();if(e-this._lastShot<35)return;this._lastShot=e;const n=t==="shotgun"?[.35,.55,700]:t==="smg"?[.16,.32,1800]:[.22,.42,1400];this._noise(n[0],n[1],"lowpass",n[2]);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(t==="shotgun"?120:220,this.ctx.currentTime),i.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.12),r.gain.setValueAtTime(.22,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.14),i.connect(r),r.connect(this.master),i.start(),i.stop(this.ctx.currentTime+.16)}hit(){this.ctx&&this._noise(.08,.25,"bandpass",1800)}reload(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const[e,n]of[[0,420],[.14,300],[.3,520]]){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.value=n,r.gain.setValueAtTime(.06,t+e),r.gain.exponentialRampToValueAtTime(1e-4,t+e+.05),i.connect(r),r.connect(this.master),i.start(t+e),i.stop(t+e+.06)}}thunder(){if(!this.ctx)return;const t=performance.now();t-this._lastThunder<4e3||(this._lastThunder=t,this._noise(2.4,.6,"lowpass",240),this._noise(.5,.4,"lowpass",900))}explosion(){if(!this.ctx)return;this._noise(1.2,.9,"lowpass",500);const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(90,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(20,this.ctx.currentTime+.9),e.gain.setValueAtTime(.5,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+1),t.connect(e),e.connect(this.master),t.start(),t.stop(this.ctx.currentTime+1.05)}pickup(t=!0){if(!this.ctx)return;const e=this.ctx.currentTime;(t?[660,990]:[220,160]).forEach((i,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.value=i,o.gain.setValueAtTime(.001,e+r*.09),o.gain.exponentialRampToValueAtTime(.14,e+r*.09+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+r*.09+.16),a.connect(o),o.connect(this.master),a.start(e+r*.09),a.stop(e+r*.09+.18)})}ui(){this.ctx&&this._noise(.03,.08,"bandpass",2400)}tick(){this.ctx&&this._noise(.02,.1,"bandpass",3e3)}alarm(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<3;e++){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.value=1150,i.gain.setValueAtTime(.001,t+e*.18),i.gain.linearRampToValueAtTime(.09,t+e*.18+.01),i.gain.exponentialRampToValueAtTime(1e-4,t+e*.18+.15),n.connect(i),i.connect(this.master),n.start(t+e*.18),n.stop(t+e*.18+.16)}}horn(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const e of[330,415]){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.value=e,i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.1,t+.02),i.gain.setValueAtTime(.1,t+.28),i.gain.exponentialRampToValueAtTime(1e-4,t+.4),n.connect(i),i.connect(this.master),n.start(t),n.stop(t+.42)}}setEngine(t,e,n){if(!this.engineGain)return;const i=this.ctx.currentTime,r=t?.05+Math.min(1,Math.abs(e)/45)*.07+(n?.02:0):0;this.engineGain.gain.setTargetAtTime(r,i,.08),this.engineOsc.frequency.setTargetAtTime(42+Math.abs(e)*3.4+(n?16:0),i,.09),this.engineFilter.frequency.setTargetAtTime(280+Math.abs(e)*22,i,.12)}setRain(t){this.rainGain&&this.rainGain.gain.setTargetAtTime(t*.16,this.ctx.currentTime,.6)}setSiren(t,e){if(this.sirenGain&&(this.sirenGain.gain.setTargetAtTime(t*.035,this.ctx.currentTime,.15),t>.01)){const n=Math.floor(e*1.6)%2;this.sirenOsc.frequency.setTargetAtTime(n?880:610,this.ctx.currentTime,.05)}}}class Rm{constructor(t){this.g=t,this.missions=Pm(),this.index=-1,this.step=0,this.stepTime=0,this.active=!1,this.pending=-1,this.pendingT=0,this.marker=null,this.finished=!1}start(t){var n,i;if(t>=this.missions.length){this.finished=!0;return}this.index=t,this.step=0,this.stepTime=0,this.active=!0;const e=this.missions[t];this.g.toast(`MISSION · ${e.title}`,"money"),(i=(n=this.g).clearMissionFlags)==null||i.call(n),this.enterStep(),this.g.say(e.who||"JASON",e.intro||e.title,4.2)}get mission(){return this.missions[this.index]}get current(){var t;return(t=this.mission)==null?void 0:t.steps[this.step]}enterStep(){const t=this.current;t&&(this.stepTime=0,t.enter&&t.enter(this.g),t.text&&this.g.toast(t.text,""))}update(t){if(this.pending>=0){if(this.pendingT-=t,this.pendingT<=0){const r=this.pending;this.pending=-1,this.start(r)}return}if(!this.active)return;this.stepTime+=t;const e=this.current;if(!e)return;const n=e.waypoint?e.waypoint(this.g):null;this.marker=n;let i=0;if(n){const r=this.g.activeChar;i=Math.hypot(r.pos.x-n.x,r.pos.z-n.z)}this.g.updateMissionHud(this.mission,e,i),e.check&&e.check(this.g,this.stepTime)&&this.advance()}advance(){var e,n;const t=this.mission;if(this.step++,this.step>=t.steps.length){this.complete();return}(n=(e=this.g.audio)==null?void 0:e.pickup)==null||n.call(e,!0),this.enterStep()}complete(){const t=this.mission;this.active=!1,this.marker=null,this.g.onMissionComplete(t),this.index+1<this.missions.length?(this.pending=this.index+1,this.pendingT=9,this.g.updateMissionHud(null,null,0)):(this.finished=!0,this.g.freeRoam=!0,this.g.updateMissionHud(null,null,0))}failReset(){var t,e;this.active&&(this.step=0,this.stepTime=0,(e=(t=this.g).clearMissionFlags)==null||e.call(t),this.enterStep(),this.g.toast("MISSION RESET · GET BACK TO IT","bad"))}cancel(){this.active=!1,this.marker=null,this.g.updateMissionHud(null,null,0)}}function Pm(){return[{id:"m1",title:"FIRST SHIFT",who:"LUCIA",intro:"Nice ride. Shame it is running on fumes. Gas station first, then we talk business.",steps:[{text:"Get in the Grotto GT",waypoint:s=>s.personalCar?{x:s.personalCar.pos.x,z:s.personalCar.pos.z}:null,check:s=>s.activeChar.inVehicle===s.personalCar},{text:"Fuel up at Gas & Go — pull in and press E",waypoint:()=>Nt.gas.door,enter:s=>{s.personalCar.fuel=Math.min(s.personalCar.fuel,18),s.toast("TANK IS DRY · FOLLOW THE GOLD BEAM","bad")},check:s=>s.flags.m1refuel},{text:"Drive to the Palm Shade Motel",waypoint:()=>Nt.motel.door,enter:s=>{var t;(t=s.setTaskHint)==null||t.call(s,"The motel is where the crew plans the score.")},check:(s,t)=>Math.hypot(s.activeChar.pos.x-Nt.motel.door.x,s.activeChar.pos.z-Nt.motel.door.z)<18&&t>6.5}],reward:300,outro:"Look at us. Two broke dreamers with one car and a city full of opportunity. Deposit that money through BuckMe — bank money is safe money."},{id:"m2",title:"GAS MONEY",who:"JASON",intro:"The 24/7 on Ocean Beach cashes out heavy and the clerk is half asleep. In and out, no auto-aim heroics.",steps:[{text:"Go to the 24/7 Mart on Ocean Beach",waypoint:()=>Nt.store.door,check:s=>Math.hypot(s.activeChar.pos.x-Nt.store.door.x,s.activeChar.pos.z-Nt.store.door.z)<9},{text:"Hold E to clean out the register",waypoint:()=>Nt.store.door,enter:s=>{var t;s.flags.m2rob=!0,s.toast("HOLD E · SILENT ALARM WILL TRIP","bad"),(t=s.setTaskHint)==null||t.call(s,"")},check:s=>s.flags.m2stolen},{text:"Lose the heat — break line of sight",waypoint:null,enter:s=>{var t;s.flags.m2stolen,(t=s.setTaskHint)==null||t.call(s,"Duck through alleys. White stars are eyes on you; red stars are dispatch.")},check:s=>s.flags.m2dispatched&&s.heat<=.01&&s.suspicion<=.01},{text:"Open BuckMe (M) and deposit the cash",waypoint:null,enter:s=>s.toast("BANK MONEY SURVIVES DEATH AND ARREST","money"),check:s=>s.flags.m2deposit}],reward:450,outro:"See? Clean money. Now we need muscle and a trunk big enough for the kind of trouble I bring home."},{id:"m3",title:"HEAVY TRUNK",who:"LUCIA",intro:"A dock worker in Port Gellhorn is holding a duffel for us. Grab it, stow it, and let the fence make it disappear.",steps:[{text:"Collect the duffel at the Port Gellhorn docks",waypoint:()=>({x:-360,z:160}),enter:s=>s.showDuffel(),check:s=>s.flags.m3bag},{text:"Store the duffel in the Grotto trunk (T near your car)",waypoint:s=>s.personalCar?{x:s.personalCar.pos.x,z:s.personalCar.pos.z}:null,enter:s=>s.toast("TRUNKS HOLD BAGS, WEAPONS AND PROBLEMS",""),check:s=>s.flags.m3stored},{text:"Fence the loot at Pawn & Pwn, Port Gellhorn (E)",waypoint:()=>Nt.pawn.door,check:s=>s.flags.m3fenced}],reward:600,outro:"Fenced. Clean. Enough for petrol and bad decisions. Word is a buyer wants to meet at the Palm Shade."},{id:"m4",title:"NO BACK DOOR",who:"JASON",intro:"Buyer wants to meet inside the motel. Something feels off. Keep your hand near the pistol.",steps:[{text:"Meet the buyer inside the Palm Shade Motel (E at the door)",waypoint:()=>Nt.motel.door,enter:s=>{var t;return(t=s.setTaskHint)==null?void 0:t.call(s,"The motel has a front door and a rear exit. Remember both.")},check:s=>s.inInterior},{text:"The deal is burned. Take the rear exit.",waypoint:null,enter:s=>{s.say("BUYER","Cops! Front door! You set me up!",4),s.say("LUCIA","Rear exit. Move, Jason!",3.4)},check:s=>s.flags.m4rear},{text:"Reach the Grotto and lose the tail",waypoint:s=>s.personalCar?{x:s.personalCar.pos.x,z:s.personalCar.pos.z}:null,enter:s=>{var t;s.setHeat(3,!0),s.spawnCopWave(2,!0),s.toast("3-STAR HEAT · DISPATCH CONFIRMED","bad"),(t=s.setTaskHint)==null||t.call(s,"They came in the front. You are already behind them.")},check:s=>s.activeChar.inVehicle===s.personalCar},{text:"Swap seats (X / TAB) — Lucia drives, you shoot",waypoint:null,enter:s=>{s.isDuoInCar()||s.boardPartner(s.personalCar),s.toast("PRESS X · PASSENGER BECOMES GUNNER",""),s.spawnCopWave(2,!1)},check:s=>s.flags.m4swap},{text:"Wreck the pursuit",waypoint:null,enter:s=>{s.setHeat(3,!0),s.toast("FOCUS (Q) HIGHLIGHTS WEAK POINTS","money")},check:s=>s.policeKills>=2||s.heat<=.01&&s.flags.m4swap}],reward:2e3,outro:"That is how we work. One drives, one shoots. Now the whole city knows our names. Time to make it count."},{id:"m5",title:"LEONIDA DREAMING",who:"LUCIA",intro:"Leonida National. Vault, duffels, four stars, hurricane. The whole dream in one night. No auto-aim, no turning back.",steps:[{text:"Drive to Leonida National Bank downtown",waypoint:()=>Nt.bank.door,check:s=>Math.hypot(s.activeChar.pos.x-Nt.bank.door.x,s.activeChar.pos.z-Nt.bank.door.z)<12},{text:"Hold E at the vault",waypoint:()=>Nt.bank.door,enter:s=>{var t;(t=s.setTaskHint)==null||t.call(s,"Get the duffels. The alarm is already screaming.")},check:s=>s.flags.m5vault},{text:"Escape Vice City — lose the heat",waypoint:null,enter:s=>{var t;s.setHeat(4,!0),s.spawnCopWave(4,!0),s.world.setWeather("storm"),s.toast("HURRICANE + 4 STARS · GOOD LUCK","bad"),(t=s.setTaskHint)==null||t.call(s,"Trunk full of duffels. Lose them before you fence it.")},check:s=>s.heat<=.01&&s.suspicion<=.01},{text:"Deposit the clean score through BuckMe (M)",waypoint:null,enter:s=>s.toast("FENCE THE DUFFELS, THEN DEPOSIT","money"),check:s=>s.flags.m5deposit&&s.totalBags()===0},{text:"Return to the Palm Shade with Lucia",waypoint:()=>Nt.motel.door,check:s=>Math.hypot(s.activeChar.pos.x-Nt.motel.door.x,s.activeChar.pos.z-Nt.motel.door.z)<16}],reward:25e3,outro:"We did it. Bank full, trunk empty, sun coming up over Leonida. For the first time, tomorrow is ours."}]}const Me=(s,t,e)=>Math.min(e,Math.max(t,s)),dc=(s,t,e)=>s+(t-s)*e,Lm=(s,t,e)=>{let n=(t-s+Math.PI*3)%(Math.PI*2)-Math.PI;return s+n*e},me=s=>"$"+Math.round(s).toLocaleString("en-US");function Fs(s,t,e,n){const i=e.x-s.x,r=e.y-s.y,a=e.z-s.z,o=i*t.x+r*t.y+a*t.z;if(o<0)return null;const c=i*i+r*r+a*a-o*o,l=n*n;return c>l?null:o-Math.sqrt(Math.max(0,l-c))}function Im(s,t,e){let n=0,i=1e9;const r=[["x","minX","maxX"],["y",null,null],["z","minZ","maxZ"]];for(const[a,o,c]of r){const l=s[a],h=t[a];let u,f;if(a==="y"?(u=0,f=e.h):(u=e[o],f=e[c]),Math.abs(h)<1e-8){if(l<u||l>f)return null}else{let p=(u-l)/h,g=(f-l)/h;if(p>g){const _=p;p=g,g=_}if(n=Math.max(n,p),i=Math.min(i,g),n>i)return null}}return n>0?n:null}class Dm{constructor(){this.state="boot",this.started=!1,this.uiLocked=!1,this.time=0,this.clock=new cm,this.timeScale=1,this.cash=420,this.bank=1250,this.bags=[1250,1680],this.policeKills=0,this.flags={},this.freeRoam=!1,this.inInterior=!1,this.heat=0,this.suspicion=0,this.visualContact=!1,this.escapeTimer=0,this.dispatch={t:0,pending:0,severity:0},this.profile={violence:0,notoriety:0,witnesses:0},this.vehicles=[],this.policeCars=[],this.police=[],this.enemies=[],this.peds=[],this.parkedCars=[],this.trafficCars=[],this.pickups=[],this.corpses=[],this.effects=[],this.toasts=[],this.subQueue=[],this.subCurrent=null,this.subT=0,this.promptCache="",this.heatCooldown=0,this.dispatchSpawnT=0,this.copSpawnT=0,this.arrestT=0,this.deathT=0,this.shake=0,this.recoilKick=0,this.spread=0,this.mouseDown=!1,this.touchFire=!1,this.focus=!1,this.lastDamage=0,this.radioT=0,this.camYaw=Math.PI/2,this.camPitch=-.16,this.camDist=5,this.camLook=new P,this.recentMouse=0,this.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,this.frameTimes=[],this.lowPerf=!1,this.stats={kills:0,arrests:0,stolen:0,missions:0,distance:0},this.duffelVisible=!1,this.hold=null,this.input={forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,aim:!1,focus:!1,interact:!1,interactPressed:!1,firePressed:!1},this._tmp=new P,this._tmp2=new P,this._tmp3=new P,this._dir=new P,this.init()}init(){const t=document.getElementById("app");this.renderer=new Qp({antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.isTouch?1.25:1.6)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pc,this.renderer.toneMapping=gc,this.renderer.toneMappingExposure=1.08,this.renderer.outputColorSpace=Ue,t.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.scene=new qc,this.camera=new Be(62,window.innerWidth/window.innerHeight,.08,2600),this.camera.position.set(-150,12,270),this.world=new Mm(this.scene,this.renderer),this.audio=new Cm,this.traffic=new bm(this.scene,this.world),this.personalCar=new Ji("grotto",this.scene,{x:-96,z:244,heading:Math.PI/2,personal:!0,fuel:34}),this.vehicles.push(this.personalCar),this.traffic.spawnTraffic(this),this.traffic.spawnPeds(this),this.jason=new uc("jason",this.scene,{x:-112,z:239,heading:Math.PI/2}),this.lucia=new uc("lucia",this.scene,{x:-110.4,z:235.2,heading:Math.PI/2}),this.activeChar=this.jason,this.partner=this.lucia,this.missions=new Rm(this),this.buildMarkers(),this.buildProps(),this.bindUI(),this.bindInput(),this.buildStars(),this.updateHud(),window.addEventListener("resize",()=>this.onResize()),this.onResize(),this.clock.start(),this.loop=this.loop.bind(this),this.renderer.setAnimationLoop(this.loop),setTimeout(()=>{document.getElementById("boot").style.opacity="0",setTimeout(()=>document.getElementById("boot").classList.add("hidden"),700),document.getElementById("title").classList.add("show"),this.state="title",this.titleTime=0},450)}onResize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}buildMarkers(){const t=new Vt,e=new B(new Ie(1.7,1.7,18,20,1,!0),new Dt({color:16765286,transparent:!0,opacity:.14,side:ue,depthWrite:!1,blending:je}));e.position.y=9,t.add(e);const n=new B(new es(1.5,2.2,28),new Dt({color:16765286,transparent:!0,opacity:.32,side:ue,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.12,t.add(n);const i=new B(new Kt(.5,18),new Dt({color:16765286,transparent:!0,opacity:.45,side:ue,depthWrite:!1,blending:je}));i.position.y=9,t.add(i);const r=new B(new Ha(.6),new Dt({color:16765286,toneMapped:!1}));r.position.y=19,t.add(r),t.visible=!1,this.marker=t,this.markerParts={cyl:e,ring:n,beam:i,diamond:r},this.scene.add(t)}buildProps(){const t=new Vt,e=new B(new mt(1,.55,.6),new Tt({color:2763310,roughness:.86}));e.position.y=.3,t.add(e);const n=new B(new Ga(.36,.055,6,14,Math.PI),new Tt({color:5921376,roughness:.7}));n.rotation.z=Math.PI,n.position.y=.58,t.add(n);const i=new B(new es(1,1.6,24),new Dt({color:16765286,transparent:!0,opacity:.35,side:ue,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.08,t.add(i),t.position.set(-360,.3,160),t.visible=!1,this.scene.add(t),this.duffel=t,this.carLight=new Ti(16770736,0,34,2),this.scene.add(this.carLight),this.carLight2=new Ti(16726906,0,16,2),this.scene.add(this.carLight2),this.boomLight=new Ti(16747066,0,60,2),this.scene.add(this.boomLight)}buildStars(){const t=document.getElementById("wanted"),e="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17l-6 3.3 1.3-6.7-5-4.6 6.8-.8z";for(let n=0;n<5;n++){const i=document.createElement("div");i.className="star",i.innerHTML=`<svg viewBox="0 0 24 24"><path fill="currentColor" d="${e}"/></svg>`,t.appendChild(i)}this.starEls=[...t.children]}bindUI(){const t=n=>document.getElementById(n);this.el={boot:t("boot"),title:t("title"),hud:t("hud"),missionKicker:t("missionKicker"),missionObj:t("missionObj"),missionDist:t("missionDist"),missionPayout:t("missionPayout"),clock:t("clock"),weather:t("weatherLabel"),loc:t("locName"),hpFill:t("hpFill"),hpVal:t("hpVal"),arFill:t("arFill"),arVal:t("arVal"),foFill:t("foFill"),foVal:t("foVal"),cash:t("cashHud"),bank:t("bankHud"),loot:t("lootHud"),weaponName:t("weaponName"),ammoMag:t("ammoMag"),ammoRes:t("ammoReserve"),roleTag:t("roleTag"),prompt:t("prompt"),promptKey:t("promptKey"),promptText:t("promptText"),subtitle:t("subtitle"),subWho:t("subWho"),subLine:t("subLine"),swapBanner:t("swapBanner"),swapBig:t("swapBig"),swapSmall:t("swapSmall"),crosshair:t("crosshair"),focusVig:t("focusVignette"),damageVig:t("damageVignette"),hitflash:t("hitflash"),cinema:t("cinema"),toasts:t("toasts"),vehicleHud:t("vehicleHud"),vSpeed:t("vSpeed"),vGear:t("vGear"),vFuel:t("vFuel"),vHealth:t("vHealth"),vSeat:t("vSeat"),phone:t("phone"),trunk:t("trunk"),lockpick:t("lockpick"),qte:t("qte"),pause:t("pause"),phoneBank:t("phoneBank"),phoneCash:t("phoneCash"),phoneLoot:t("phoneLoot"),phoneBags:t("phoneBags"),phoneAcct:t("phoneAcct"),phoneHeat:t("phoneHeat"),phoneSeverity:t("phoneSeverity"),profViolence:t("profViolence"),profNotoriety:t("profNotoriety"),profWitness:t("profWitness"),trunkBags:t("trunkBags"),trunkBodies:t("trunkBodies"),trunkCapacity:t("trunkCapacity"),carriedBags:t("carriedBags"),trunkWeapons:t("trunkWeapons"),bodyCount:t("bodyCount"),trunkSub:t("trunkSub"),phoneClock:t("phoneClock")},this.el.hud.classList.add("hidden"),t("btnPlay").addEventListener("click",()=>this.startGame()),t("btnDeposit").addEventListener("click",()=>this.depositCash()),t("btnWithdraw").addEventListener("click",()=>this.withdrawCash()),t("btnSummon").addEventListener("click",()=>{this.summonCar(),this.updatePhone()}),t("btnStoreBag").addEventListener("click",()=>this.storeBag()),t("btnTakeBag").addEventListener("click",()=>this.takeBag()),t("btnStoreBody").addEventListener("click",()=>this.concealBody(!0)),t("btnLockPick").addEventListener("click",()=>this.pickLock()),t("btnLockCancel").addEventListener("click",()=>this.closeLockpick(!1)),t("btnResume").addEventListener("click",()=>this.togglePause(!1)),t("btnHelpPhone").addEventListener("click",()=>{this.togglePause(!1,!0),this.togglePhone(!0)}),t("btnQuit").addEventListener("click",()=>this.quitToTitle()),document.querySelectorAll('[data-close="trunk"]').forEach(n=>n.addEventListener("click",()=>this.toggleTrunk(!1))),t("phone").addEventListener("click",n=>{n.target===t("phone")&&this.togglePhone(!1)}),document.querySelectorAll(".phoneTabbar button").forEach(n=>n.addEventListener("click",()=>{var r;const i=n.dataset.tab;if(i==="close")return this.togglePhone(!1);document.querySelectorAll(".phoneTabbar button").forEach(a=>a.classList.remove("active")),n.classList.add("active"),i==="profile"&&((r=document.querySelector(".crimeBars"))==null||r.scrollIntoView({behavior:"smooth",block:"center"})),this.audio.ui()})),t("btnLockPick").tabIndex=0,t("setVol").addEventListener("input",n=>this.audio.setVolume(n.target.value/100)),t("setSens").addEventListener("input",n=>{this.sens=n.target.value/100}),t("setTouchSens").addEventListener("input",n=>{this.touchSens=n.target.value/100}),this.sens=1,this.touchSens=1.1;const e=()=>{this.audio.unlock()};window.addEventListener("pointerdown",e,{once:!1}),window.addEventListener("keydown",e,{once:!1})}bindInput(){const t={KeyW:"forward",KeyS:"back",KeyA:"left",KeyD:"right",ArrowUp:"forward",ArrowDown:"back",ArrowLeft:"left",ArrowRight:"right"};window.addEventListener("keydown",g=>{var _,m,d,M,E,v;if(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(g.code)&&g.preventDefault(),this.qte){this.handleQteKey(g.code);return}if(this.lockpick){(g.code==="Space"||g.code==="KeyE")&&(g.preventDefault(),this.pickLock());return}if(t[g.code]&&(this.input[t[g.code]]=!0),(g.code==="ShiftLeft"||g.code==="ShiftRight")&&(this.input.sprint=!0),!g.repeat){if(g.code==="Enter"&&this.state==="title"){this.startGame();return}if(g.code==="Escape")return this.lockpick?this.closeLockpick(!1):this.el.phone.classList.contains("hidden")?this.el.trunk.classList.contains("hidden")?this.el.pause.classList.contains("hidden")?this.state==="playing"?this.togglePause(!0):void 0:this.togglePause(!1):this.toggleTrunk(!1):this.togglePhone(!1);if(!(this.state!=="playing"||this.uiLocked))switch(g.code){case"KeyQ":this.input.focus=!0;break;case"KeyE":this.input.interact=!0,this.input.interactPressed=!0;break;case"KeyF":this.enterExitVehicle();break;case"Tab":this.switchOrSwap();break;case"KeyX":this.swapSeats();break;case"KeyT":this.toggleTrunk(!0);break;case"KeyM":this.togglePhone(!0);break;case"KeyR":(_=this.activeChar)==null||_.reload(this);break;case"Digit1":(m=this.activeChar)==null||m.switchWeapon(0,this);break;case"Digit2":(d=this.activeChar)==null||d.switchWeapon(1,this);break;case"Digit3":(M=this.activeChar)==null||M.switchWeapon(2,this);break;case"KeyH":(E=this.activeChar)!=null&&E.inVehicle&&this.audio.horn();break;case"Space":(v=this.activeChar)!=null&&v.inVehicle?this.input.jump=!0:this.input.jump=!0;break}}}),window.addEventListener("keyup",g=>{t[g.code]&&(this.input[t[g.code]]=!1),(g.code==="ShiftLeft"||g.code==="ShiftRight")&&(this.input.sprint=!1),g.code==="KeyQ"&&(this.input.focus=!1),g.code==="KeyE"&&(this.input.interact=!1),g.code==="Space"&&(this.input.jump=!1)});const e=this.canvas;e.addEventListener("click",()=>{var g;this.state==="playing"&&!this.uiLocked&&document.pointerLockElement!==e&&((g=e.requestPointerLock)==null||g.call(e))}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==e&&this.state==="playing"&&!this.uiLocked&&this.togglePause(!0)}),document.addEventListener("mousemove",g=>{if(this.state!=="playing"||this.uiLocked||!(document.pointerLockElement===e)&&!this.dragging)return;const m=.0022*(this.sens||1);this.camYaw+=g.movementX*m,this.camPitch=Me(this.camPitch-g.movementY*m*.85,-.62,.48),this.recentMouse=.7}),e.addEventListener("mousedown",g=>{this.state!=="playing"||this.uiLocked||(g.button===0?(this.mouseDown=!0,this.attemptShoot()):g.button===2?this.input.aim=!0:g.button===1&&(this.dragging=!0,g.preventDefault()))}),window.addEventListener("mouseup",g=>{g.button===0&&(this.mouseDown=!1),g.button===2&&(this.input.aim=!1),g.button===1&&(this.dragging=!1)}),e.addEventListener("contextmenu",g=>g.preventDefault()),window.addEventListener("blur",()=>{this.mouseDown=!1,this.touchFire=!1,this.input.aim=!1}),this.isTouch&&document.body.classList.add("touch");const n=document.getElementById("stickBase"),i=document.getElementById("stickKnob");let r=null;const a=(g,_)=>{const d=Math.hypot(g,_),M=d>44?44/d:1;i.style.transform=`translate(${g*M}px,${_*M}px)`;const E=g*M/44,v=_*M/44;this.input.left=E<-.25,this.input.right=E>.25,this.input.forward=v<-.25,this.input.back=v>.25,this.input.sprint=Math.hypot(E,v)>.92};n==null||n.addEventListener("pointerdown",g=>{r=g.pointerId,n.setPointerCapture(g.pointerId),this.audio.unlock()}),n==null||n.addEventListener("pointermove",g=>{if(g.pointerId!==r)return;const _=n.getBoundingClientRect();a(g.clientX-(_.left+_.width/2),g.clientY-(_.top+_.height/2))});const o=g=>{g.pointerId===r&&(r=null,i.style.transform="translate(0,0)",this.input.forward=this.input.back=this.input.left=this.input.right=!1,this.input.sprint=!1)};n==null||n.addEventListener("pointerup",o),n==null||n.addEventListener("pointercancel",o);const c=document.getElementById("touchLook");let l=null,h=0,u=0;c==null||c.addEventListener("pointerdown",g=>{g.target===c&&(l=g.pointerId,h=g.clientX,u=g.clientY,this.audio.unlock())}),c==null||c.addEventListener("pointermove",g=>{if(g.pointerId!==l)return;const _=.0045*(this.touchSens||1);this.camYaw+=(g.clientX-h)*_,this.camPitch=Me(this.camPitch-(g.clientY-u)*_*.8,-.62,.48),h=g.clientX,u=g.clientY,this.recentMouse=.7});const f=g=>{g.pointerId===l&&(l=null)};c==null||c.addEventListener("pointerup",f),c==null||c.addEventListener("pointercancel",f);const p=(g,_,m)=>{const d=document.getElementById(g);d&&(d.addEventListener("pointerdown",M=>{M.preventDefault(),this.audio.unlock(),_()}),d.addEventListener("pointerup",M=>{M.preventDefault(),m==null||m()}),d.addEventListener("pointercancel",()=>m==null?void 0:m()),d.addEventListener("pointerleave",()=>m==null?void 0:m()))};this.isTouch&&(p("tbFire",()=>{this.touchFire=!0,this.attemptShoot()},()=>{this.touchFire=!1}),p("tbFocus",()=>{this.input.focus=!0},()=>{this.input.focus=!1}),p("tbEnter",()=>{this.input.interactPressed=!0,this.input.interact=!0},()=>{this.input.interact=!1}),p("tbSwap",()=>this.switchOrSwap()),p("tbPhone",()=>this.togglePhone()),p("tbJump",()=>{this.input.jump=!0,setTimeout(()=>this.input.jump=!1,180)}),p("tbFocus2",()=>{this.activeChar.switchWeapon((this.activeChar.weapon+1)%3,this)}))}startGame(){var t,e;this.started||(this.started=!0,this.state="playing",this.audio.unlock(),this.audio.ui(),document.getElementById("title").classList.remove("show"),this.el.hud.classList.remove("hidden"),this.el.hud.classList.add("show"),(e=(t=this.canvas).requestPointerLock)==null||e.call(t),this.world.hour=19.55,this.world.setWeather("clear"),this.camYaw=Math.PI/2,this.camPitch=-.15,this.say("JASON","There she is. The Grotto. Half a tank and a full trunk of bad ideas.",4.5),this.say("LUCIA","Gas first, romance later. Press E to get in. I am not pushing.",4.5),this.toast("WASD MOVE · MOUSE LOOK · E INTERACT · F ENTER/EXIT",""),this.toast("Q FOCUS · TAB SWAP · M BUCKME PHONE","money"),this.missions.start(0),this.updateHud())}quitToTitle(){location.reload()}togglePause(t,e){var i,r,a;if(this.state==="title")return;const n=t!==void 0?t:this.el.pause.classList.contains("hidden");this.el.pause.classList.toggle("hidden",!n),this.uiLocked=n,this.input.forward=this.input.back=this.input.left=this.input.right=!1,this.mouseDown=!1,n?((i=document.exitPointerLock)==null||i.call(document),this.state="paused"):(this.state="playing",e||(a=(r=this.canvas).requestPointerLock)==null||a.call(r))}togglePhone(t){var n,i,r;if(this.state==="title")return;const e=t!==void 0?t:this.el.phone.classList.contains("hidden");e&&this.state==="playing"?(this.el.phone.classList.remove("hidden"),this.uiLocked=!0,(n=document.exitPointerLock)==null||n.call(document),this.updatePhone(),this.audio.ui()):e||(this.el.phone.classList.add("hidden"),this.uiLocked=!1,this.state==="playing"&&((r=(i=this.canvas).requestPointerLock)==null||r.call(i)),this.audio.ui())}updatePhone(){var i;const t=this.personalCar;this.el.phoneBank.textContent=Math.round(this.bank).toLocaleString("en-US"),this.el.phoneCash.textContent=me(this.cash);const e=this.bags.reduce((r,a)=>r+a,0)+((t==null?void 0:t.trunkBags)||[]).reduce((r,a)=>r+a,0);this.el.phoneLoot.textContent=me(e),this.el.phoneBags.textContent=this.bags.length+(((i=t==null?void 0:t.trunkBags)==null?void 0:i.length)||0),this.el.phoneHeat.textContent=this.heat>0?`${this.heat.toFixed(1)} / 5`:"CLEAR";const n=Math.floor(this.profile.violence/34)+(this.heat>0?1:0);this.el.phoneSeverity.textContent=n>3?"EXTREME":n>1?"HIGH":"LOW",this.el.phoneHeat.style.color=this.heat>0?"#ff6b6b":"#7dff9c",this.el.profViolence.style.width=`${Math.min(100,this.profile.violence)}%`,this.el.profNotoriety.style.width=`${Math.min(100,this.profile.notoriety)}%`,this.el.profWitness.style.width=`${Math.min(100,this.profile.witnesses)}%`,this.el.phoneClock.textContent=this.world.clockString(),this.el.phoneAcct.textContent=`•••• 0417 · ${this.activeChar.kind==="jason"?"J. DUVAL":"L. CAMINOS"}`}depositCash(){if(this.cash<=0){this.toast("NOTHING TO DEPOSIT","bad");return}const t=this.cash;this.bank+=t,this.cash=0,t>0&&(this.flags.m2deposit=!0,this.flags.m5deposit=!0),this.audio.pickup(!0),this.toast(`DEPOSITED ${me(t)} · SECURE`,"money"),this.updatePhone(),this.updateHud()}withdrawCash(){if(this.bank<500){this.toast("BANK BALANCE TOO LOW","bad");return}this.bank-=500,this.cash+=500,this.audio.pickup(!1),this.toast("WITHDREW $500 CASH",""),this.updatePhone(),this.updateHud()}toggleTrunk(t){var n,i,r;if(!this.personalCar)return;if(t!==void 0?t:this.el.trunk.classList.contains("hidden")){if(Math.hypot(this.activeChar.pos.x-this.personalCar.pos.x,this.activeChar.pos.z-this.personalCar.pos.z)>8&&this.activeChar.inVehicle!==this.personalCar){this.toast("GET TO THE GROTTO TRUNK","bad");return}this.el.trunk.classList.remove("hidden"),this.uiLocked=!0,(n=document.exitPointerLock)==null||n.call(document),this.updateTrunkUI(),this.audio.ui()}else this.el.trunk.classList.add("hidden"),this.uiLocked=!1,this.state==="playing"&&((r=(i=this.canvas).requestPointerLock)==null||r.call(i)),this.audio.ui()}updateTrunkUI(){const t=this.personalCar;t.trunkBags=t.trunkBags||[],t.bodies=t.bodies||0,this.el.trunkBags.textContent=t.trunkBags.length,this.el.trunkBodies.textContent=t.bodies,this.el.trunkCapacity.textContent=`${t.trunkBags.length+t.bodies}/8`,this.el.carriedBags.textContent=`${this.bags.length} bags · ${me(this.bags.reduce((e,n)=>e+n,0))}`,this.el.trunkWeapons.textContent="PISTOL · SMG · SHOTGUN",this.el.bodyCount.textContent=`${t.bodies} concealed`,this.el.trunkSub.textContent=`PERSONAL VEHICLE · ${t.spec.name.toUpperCase()} · FUEL ${Math.round(t.fuel)}%`,this.el.btnStoreBody=this.el.btnStoreBody||document.getElementById("btnStoreBody"),this.el.btnStoreBody&&(this.el.btnStoreBody.disabled=this.corpses.length===0||t.bodies>=4)}storeBag(){const t=this.personalCar;if(t.trunkBags=t.trunkBags||[],!this.bags.length){this.toast("NO DUFFEL BAGS CARRIED","bad");return}if(t.trunkBags.length+t.bodies>=8){this.toast("TRUNK FULL","bad");return}const e=this.bags.pop();t.trunkBags.push(e),this.flags.m3stored=!0,this.audio.pickup(!0),this.toast(`DUFFEL STORED · ${me(e)} RAW`,"good"),this.updateTrunkUI(),this.updateHud()}takeBag(){const t=this.personalCar;if(t.trunkBags=t.trunkBags||[],!t.trunkBags.length){this.toast("TRUNK HAS NO DUFFELS","bad");return}this.bags.push(t.trunkBags.pop()),this.audio.pickup(!0),this.toast("DUFFEL MOVED TO CARRY",""),this.updateTrunkUI(),this.updateHud()}concealBody(t=!1){if(!this.corpses.length){this.toast("NO BODY NEARBY","bad");return}const e=this.personalCar;if(e.bodies=e.bodies||0,e.bodies>=4){this.toast("TOO MANY BODIES IN THE TRUNK","bad");return}if(Math.hypot(this.activeChar.pos.x-e.pos.x,this.activeChar.pos.z-e.pos.z)>20){this.toast("PARK THE GROTTO CLOSER","bad");return}let i=null,r=24;for(const a of this.corpses){const o=Math.hypot(a.x-this.activeChar.pos.x,a.z-this.activeChar.pos.z);o<r&&(r=o,i=a)}if(!i){this.toast("NO BODY NEARBY","bad");return}e.bodies++,i.obj&&this.scene.remove(i.obj),this.corpses=this.corpses.filter(a=>a!==i),this.suspicion=Math.max(0,this.suspicion-.5),this.audio.pickup(!1),this.toast("BODY CONCEALED · WITNESSES REDUCED","good"),t&&this.updateTrunkUI(),this.updateHud()}startLockpick(t){var e;this.lockpick={car:t,needle:.18,dir:1,speed:.82,pins:0,fails:0},this.uiLocked=!0,this.el.lockpick.classList.remove("hidden"),document.getElementById("lockCar").textContent=`${t.spec.name.toUpperCase()} · LOCKED · 3 PINS`,document.getElementById("lockMsg").textContent="CLICK / SPACE IN THE GREEN",document.querySelectorAll(".pin").forEach(n=>n.classList.remove("ok")),(e=document.exitPointerLock)==null||e.call(document),this.newLockZone(),this.updateLockpickUI()}newLockZone(){const t=.15+Math.random()*.06,e=.08+Math.random()*(.84-t);this.lockpick.zoneStart=e,this.lockpick.zoneW=t,document.getElementById("lockZone").style.left=`${e*100}%`,document.getElementById("lockZone").style.width=`${t*100}%`}updateLockpickUI(){const t=this.lockpick;if(t){document.getElementById("lockNeedle").style.left=`${Me(t.needle,0,.995)*100}%`;for(let e=0;e<3;e++){const n=document.getElementById(`pin${e+1}`);n&&n.classList.toggle("ok",e<t.pins)}}}pickLock(){const t=this.lockpick;if(t){if(t.needle>=t.zoneStart&&t.needle<=t.zoneStart+t.zoneW){if(t.pins++,this.audio.tick(),t.pins>=3){document.getElementById("lockMsg").textContent="IGNITION LIVE · GO",this.closeLockpick(!0),this.reportCrime(1,{label:"CAR THEFT",witnessed:!0,delay:6});return}t.speed+=.12,document.getElementById("lockMsg").textContent=`PIN ${t.pins}/3 · KEEP GOING`,this.newLockZone()}else t.fails++,this.audio.alarm(),document.getElementById("lockMsg").textContent="SLIPPED",t.fails>=2&&(this.toast("ALARM TRIPPED · WITNESSES CALLING","bad"),this.closeLockpick(!1),this.reportCrime(1,{label:"ATTEMPTED THEFT",witnessed:!0,delay:5}));this.updateLockpickUI()}}closeLockpick(t){var n,i;const e=this.lockpick;this.el.lockpick.classList.add("hidden"),this.lockpick=null,this.uiLocked=!1,e!=null&&e.car&&(t?(e.car.locked=!1,this.toast("HOTWIRED · ENGINE READY","good"),this.enterVehicle(e.car)):this.toast("WALKED AWAY","")),this.state==="playing"&&((i=(n=this.canvas).requestPointerLock)==null||i.call(n))}startHijack(t){var r;const e=["KeyA","KeyD","KeyW","KeyS"],n=[];for(let a=0;a<3;a++)n.push(e[Math.floor(Math.random()*e.length)]);this.qte={car:t,seq:n,index:0,t:4.6,max:4.6,fails:0},this.uiLocked=!0,this.el.qte.classList.remove("hidden"),document.body.classList.add("qte-open");const i=document.getElementById("qteKeys");i.innerHTML=n.map((a,o)=>`<div class="qk${o===0?" next":""}" data-i="${o}">${a.replace("Key","")}</div>`).join(""),document.getElementById("qteTitle").textContent="Hijack",document.getElementById("qteFill").style.width="100%",(r=document.exitPointerLock)==null||r.call(document)}handleQteKey(t){var r;const e=this.qte;if(!e)return;const n=e.seq[e.index],i=[...document.querySelectorAll(".qk")];t===n?(i[e.index].classList.remove("next"),i[e.index].classList.add("ok"),e.index++,this.audio.tick(),e.index>=e.seq.length?(i.forEach(a=>a.classList.remove("next")),this.finishHijack(!0)):i[e.index].classList.add("next")):(e.fails++,this.audio.hit(),(r=i[e.index])==null||r.classList.add("fail"),e.fails>=2&&this.finishHijack(!1))}finishHijack(t){var i,r;const e=this.qte;if(this.qte=null,this.el.qte.classList.add("hidden"),document.body.classList.remove("qte-open"),this.uiLocked=!1,!e)return;const n=e.car;t?(n.occupied=!1,n.driver=null,n.traffic=!1,n.ai&&(n.ai=null),n.driverSeat&&(n.driverSeat=null),n.passengerSeat&&(n.passengerSeat=null),this.stats.stolen++,this.toast("HIJACKED · DRIVER EJECTED","good"),this.reportCrime(1,{label:"CARJACKING",witnessed:!0,delay:5}),this.enterVehicle(n)):(this.activeChar.damage(14,this),this.toast("THE DRIVER FOUGHT BACK","bad"),n.speed=Math.max(n.speed,10),this.reportCrime(1,{label:"CARJACKING",witnessed:!0,delay:5}),this.showBanner("SHAKEN","THEY GOT AWAY")),this.state==="playing"&&((r=(i=this.canvas).requestPointerLock)==null||r.call(i))}loop(){const t=Math.min(.05,this.clock.getDelta());if(this.state==="title"){this.titleTime=(this.titleTime||0)+t;const e=this.titleTime*.075+2.35;this.camera.position.set(-108+Math.cos(e)*31,8.6+Math.sin(this.titleTime*.2)*.7,226+Math.sin(e)*31),this.camera.lookAt(-114,3.2,219),this.world.update(t,this.camera,!1,this),this.traffic.update(t,this,this.time),this.animateIdle(t),this.updateHudClock(),this.renderer.render(this.scene,this.camera);return}if(this.state==="paused"){this.world.update(0,this.camera,!1,this),this.renderer.render(this.scene,this.camera);return}this.state==="playing"&&(this.time+=t,this.frameTimes.push(t),this.frameTimes.length>60&&this.frameTimes.shift(),this.updatePlaying(t),this.updateHudClock(),this.renderer.render(this.scene,this.camera))}animateIdle(t){for(const e of[this.jason,this.lucia])if(e&&(e.phase+=t*1.2,e.model.body.position.y=Math.sin(e.phase)*.012,e.kind==="lucia"&&e.model.hairGroup)){const n=performance.now()*.001;e.model.hairGroup.children.forEach((i,r)=>{i.rotation.z=(r-3)*.06+Math.sin(n*1.4+r)*.04*this.world.weather.wind})}}updatePlaying(t){if(this.down){this.updateDown(t);return}const e=this.activeChar.focusActive&&!this.uiLocked;this.focus=e,this.timeScale=dc(this.timeScale,e?.34:1,Math.min(1,t*9));const n=t*this.timeScale;this.recentMouse=Math.max(0,this.recentMouse-t);const i=this.activeChar.inVehicle;if(i){if(this.syncCharactersToVehicle(i),this.activeChar.seat==="driver"){const r={throttle:this.uiLocked?0:this.input.forward?1:0,brake:this.uiLocked||this.input.back?1:0,steer:this.uiLocked?0:(this.input.right?1:0)-(this.input.left?1:0),handbrake:this.uiLocked?!0:!!this.input.jump};i.update(n,r,this.world,this.time,this),i.engineOn=!0}else this.partnerAutoDrive(i,n),i.update(n,i._autoControls||{throttle:0,brake:1,steer:0},this.world,this.time,this);this.activeChar.seat==="driver"&&this.partner.inVehicle===i&&this.partnerAutoShoot(n,i),this.activeChar.seat==="passenger"&&(this.activeChar.aim=!this.uiLocked&&(this.input.aim||this.mouseDown))}else this.activeChar.update(n,this.input,this.camYaw,this.world,this),this.partnerFollow(n),this.activeChar.aim=!this.uiLocked&&(this.input.aim||this.mouseDown);for(const r of this.vehicles)r===i||r===this.personalCar||r.traffic||r.parked||r.police||r.driverSeat||r.update(n,null,this.world,this.time,this);this.personalCar&&this.personalCar!==i&&this.personalCar.update(n,null,this.world,this.time,this),this.traffic.update(n,this,this.time),this.updatePolice(n);for(const r of this.enemies)r.update(n,this);this.updatePlayerShoot(n),this.updateCamera(t),this.updateInteractions(t),this.updateEffects(t),this.updateMissionMarker(t),this.missions.update(t),this.world.update(t,this.camera,this.focus,this),this.updateDialogue(t),this.updateHudTick(t),this.updateAudio(t),this.updateDownCheck(t),this.updateLockpick(t),this.updateQte(t),this.checkArrest(t),this.focus&&(this.activeChar.focus=Math.max(0,this.activeChar.focus-t*2.2)),this.stats.distance+=Math.abs(this.activeChar.speed)*n}updateDown(t){this.down.t-=t,this.world.update(t,this.camera,!1,this),this.updateEffects(t),this.updateDialogue(t),this.updateHudTick(t),this.updateAudio(t),this.down.t<=0&&this.respawn(this.down.kind)}updateDownCheck(t){this.heat>=1&&!this.activeChar.inVehicle&&!this.activeChar.dead?this.enemies.some(n=>n.kind==="cop"&&!n.dead&&Math.hypot(n.pos.x-this.activeChar.pos.x,n.pos.z-this.activeChar.pos.z)<2.4)||this.policeCars.some(n=>!n.dead&&Math.hypot(n.pos.x-this.activeChar.pos.x,n.pos.z-this.activeChar.pos.z)<3)?(this.arrestT+=t,this.arrestT>1.6&&this.bust()):this.arrestT=Math.max(0,this.arrestT-t*2):this.arrestT=0}checkArrest(t){this.heat<1||this.activeChar.inVehicle||this.activeChar.dead||this.arrestT>1.2&&this.arrestT<1.3&&this.toast("HANDS UP OR RUN","bad")}bust(){this.down||(this.down={kind:"busted",t:4.2},this.stats.arrests++,this.showBanner("BUSTED","CASH AND LOOT SEIZED"),this.el.cinema.classList.add("on"),this.audio.pickup(!1),this.activeChar.dead=!1,this.input.forward=this.input.back=this.input.left=this.input.right=!1,this.mouseDown=!1)}onPlayerDeath(t){this.down||(this.down={kind:"wasted",t:4.4},this.showBanner("WASTED","CASH AND LOOT LOST"),this.el.cinema.classList.add("on"),t.model.root.rotation.z=Math.PI/2,t.model.root.position.y=.3,this.audio.hit(),this.mouseDown=!1,t.inVehicle&&(t.inVehicle.exitSeat(t),t.inVehicle=null,t.group.visible=!0))}respawn(t){var n,i;this.down=null,this.el.cinema.classList.remove("on"),this.cash=0,this.bags=[],this.heat=0,this.suspicion=0,this.dispatch.pending=0,this.dispatch.t=0,this.clearPolice();const e=this.activeChar;e.dead=!1,e.hp=100,e.armor=0,e.model.root.rotation.z=0,e.model.root.position.y=0,e.group.visible=!0,e.pos.set(Nt.hospital.door.x,.27,Nt.hospital.door.z+6),e.heading=Math.PI,this.partner&&(this.partner.dead=!1,this.partner.hp=100,this.partner.inVehicle=null,this.partner.group.visible=!0,this.partner.pos.set(Nt.hospital.door.x+3,.27,Nt.hospital.door.z+6)),this.escapeTimer=0,this.visualContact=!1,this.state="playing",this.uiLocked=!1,this.missions.failReset(),this.updateHud(),this.updatePhone(),this.toast(t==="busted"?"RELEASED · NO CASH, NO LOOT":"PATCHED UP AT MERCY HOSPITAL","bad"),this.say("LUCIA","You okay? We lost the cash. Bank is still clean. Get back to it.",4.2),(i=(n=this.canvas).requestPointerLock)==null||i.call(n)}updateCamera(t){const e=this.activeChar.inVehicle;let n;e?(n=this._tmp.set(e.pos.x,e.pos.y+1.25,e.pos.z),this.recentMouse<=0&&this.activeChar.seat==="driver"&&(this.camYaw=Lm(this.camYaw,e.heading,Math.min(1,t*2.6)))):n=this._tmp.set(this.activeChar.pos.x,this.activeChar.pos.y+1.5,this.activeChar.pos.z);const i=(this.input.aim||this.mouseDown)&&this.activeChar.seat!=="driver",r=e?i?5:9.2:i?2.15:4.9;this.camDist=dc(this.camDist,r,Math.min(1,t*7));const a=this.camPitch,o=this._dir.set(Math.sin(this.camYaw)*Math.cos(a),Math.sin(a),Math.cos(this.camYaw)*Math.cos(a)).normalize(),c=this._tmp2.copy(n).addScaledVector(o,-this.camDist);c.y=Math.max(c.y,.55),this.inInterior&&(c.x=Me(c.x,1591.4,1608.6),c.z=Me(c.z,1592,1607.8)),this.camera.position.lerp(c,Math.min(1,t*18));const l=this._tmp3.copy(n);if(i&&!e){const u=new P(Math.cos(this.camYaw),0,-Math.sin(this.camYaw));this.camera.position.addScaledVector(u,.62),l.addScaledVector(u,.5)}this.shake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake*.6,this.camera.position.z+=(Math.random()-.5)*this.shake,this.shake*=Math.pow(.02,t));const h=this.recoilKick;if(this.recoilKick=Math.max(0,this.recoilKick-t*2.4),l.y+=h*.5,this.camera.lookAt(l),this.camLook.copy(l),e){const u=e.pos.x+Math.sin(e.heading)*3.2,f=e.pos.z+Math.cos(e.heading)*3.2;this.carLight.position.set(u,1.2,f),this.carLight.intensity=this.world.nightFactor*24+2,this.carLight2.position.set(e.pos.x,.5,e.pos.z),this.carLight2.intensity=5+this.world.nightFactor*8,this.carLight2.color.setHex(e.isEV?3729663:16723854)}else this.carLight.intensity=0,this.carLight2.intensity=0}boardPartner(t){if(!t||this.partner.inVehicle===t)return;const e=t.driverSeat===this.activeChar||t.driverSeat?"passenger":"driver";e==="driver"&&t.driverSeat||e==="passenger"&&t.passengerSeat||(this.partner.inVehicle=t,this.partner.seat=e,t.enterSeat(this.partner,e),this.partner.group.visible=!1,this.partner.pos.copy(t.seatPosition(e)))}isDuoInCar(){const t=this.activeChar.inVehicle;return!!(t&&this.partner.inVehicle===t&&t.driverSeat&&t.passengerSeat)}syncCharactersToVehicle(t){const e=this.activeChar;e.pos.copy(t.seatPosition(e.seat||"driver")),e.group.position.copy(e.pos),e.group.visible=!1,this.partner.inVehicle===t&&(this.partner.pos.copy(t.seatPosition(this.partner.seat||"passenger")),this.partner.group.position.copy(this.partner.pos),this.partner.group.visible=!1)}enterVehicle(t){if(!t||t.dead||this.activeChar.inVehicle)return;if(t.locked){this.startLockpick(t);return}if(t.occupied&&!t.personal){if(t.police){this.toast("NOT GETTING IN A CRUISER WITH COPS WATCHING","bad");return}this.startHijack(t);return}const e=t.driverSeat?"passenger":"driver";if(t.driverSeat&&t.passengerSeat){this.toast("CAR IS FULL","bad");return}this.activeChar.inVehicle=t,this.activeChar.seat=e,t.enterSeat(this.activeChar,e),this.activeChar.group.visible=!1,this.activeChar.pos.copy(t.seatPosition(e)),t.traffic&&(t.traffic=!1,t.ai=null),t.parked&&(t.parked=!1),this.boardPartner(t),this.camYaw=t.heading,this.camPitch=-.12,this.audio.ui(),this.toast(`ENTERED · ${t.spec.name}`,"good"),t.fuel<12&&this.toast("LOW FUEL · FIND A STATION","bad"),this.flags.m2car=!0}exitVehicle(){const t=this.activeChar.inVehicle;if(!t)return;if(Math.abs(t.speed)>9){this.toast("SLOW DOWN BEFORE EXITING","bad");return}const e=this.activeChar,n=this.partner;t.exitSeat(e),t.exitSeat(n),e.inVehicle=null,n.inVehicle=null,e.seat=null,n.seat=null,e.group.visible=!0,n.group.visible=!0;const i=2.1;e.group.position.set(t.pos.x+Math.cos(t.heading)*i,.27,t.pos.z-Math.sin(t.heading)*i),n.group.position.set(t.pos.x-Math.cos(t.heading)*i,.27,t.pos.z+Math.sin(t.heading)*i),e.pos.copy(e.group.position),n.pos.copy(n.group.position),this.world.collideCircle(e.pos,.5),this.world.collideCircle(n.pos,.5),t.parked=!1,t.parkedBrake=!0,this.audio.ui(),this.toast("EXITED VEHICLE","")}enterExitVehicle(){if(this.uiLocked)return;if(this.activeChar.inVehicle){this.exitVehicle();return}const t=this.nearestVehicle(4.2);t?this.enterVehicle(t):this.toast("NO VEHICLE IN REACH","bad")}nearestVehicle(t=5){let e=null,n=t;for(const i of this.vehicles){if(i.dead)continue;const r=Math.hypot(i.pos.x-this.activeChar.pos.x,i.pos.z-this.activeChar.pos.z);r<n&&(n=r,e=i)}return e}switchOrSwap(){if(this.uiLocked)return;const t=this.activeChar.inVehicle;if(t&&this.partner.inVehicle===t){this.swapSeats();return}this.switchCharacter()}swapSeats(){const t=this.activeChar.inVehicle;if(!t){this.toast("GET IN A CAR TO SWAP SEATS","bad");return}if(this.partner.inVehicle!==t){this.toast("LUCIA IS NOT IN THE CAR","bad");return}const e=this.activeChar,n=this.partner,i=e.seat,r=n.seat;if(!i||!r||i===r){this.toast("NO FREE SEAT TO SWAP","bad");return}t.driverSeat=null,t.passengerSeat=null,e.seat=r,n.seat=i,t.enterSeat(e,r),t.enterSeat(n,i),this.activeChar=n,this.partner=e,this.activeChar.inVehicle=t,this.partner.inVehicle=t,this.flags.m4swap=!0,this.showBanner(this.activeChar.name,"REAL-TIME ROLE SWAP · "+(r==="driver"?"YOU DRIVE":"YOU SHOOT")),this.toast(r==="driver"?"LUCIA TAKES THE WHEEL":"JASON TAKES THE WHEEL","money"),this.audio.tick(),this.camYaw=t.heading,this.updateHud()}switchCharacter(){if(this.activeChar.inVehicle){this.swapSeats();return}if(this.partner.inVehicle){this.toast("YOUR PARTNER IS DRIVING","bad");return}const t=this.activeChar;this.activeChar=this.partner,this.partner=t,this.showBanner(this.activeChar.name,"PROTAGONIST SWITCH"),this.toast(`NOW PLAYING AS ${this.activeChar.name}`,"money"),this.camYaw=this.activeChar.heading,this.updateHud()}partnerFollow(t){const e=this.partner,n=this.activeChar;if(!e||e.dead||e.inVehicle)return;const i=n.pos.x-e.pos.x,r=n.pos.z-e.pos.z,a=Math.hypot(i,r);if(a>75){e.pos.set(n.pos.x-Math.sin(n.heading)*2,.27,n.pos.z-Math.cos(n.heading)*2);return}if(a>2.6&&!n.inVehicle){const o=i/a,c=r/a,l=a>10?7.4:4.4;e.pos.x+=o*l*t,e.pos.z+=c*l*t,e.heading=Math.atan2(o,c),e.speed=l,this.world.collideCircle(e.pos,.45),e.animate(t,!0,this.world),e.phase+=t*6}else e.heading=n.heading,e.animate(t,!1,this.world),e.speed=0;e.group.rotation.y=e.heading}partnerAutoDrive(t,e){var _;const n=(_=this.missions)==null?void 0:_.marker;let i,r;n?(i=n.x,r=n.z):(i=t.pos.x+Math.sin(t.heading)*65,r=t.pos.z+Math.cos(t.heading)*65);const a=i-t.pos.x,o=r-t.pos.z,c=Math.hypot(a,o);let h=(Math.atan2(a,o)-t.heading+Math.PI*3)%(Math.PI*2)-Math.PI;t._stuckT=t._stuckT||0,Math.abs(t.speed)<1&&Math.abs(h)<1.2?t._stuckT+=e:t._stuckT=0;const u=t._stuckT>1.5;let f=0,p=0,g=0;if(u)f=-1,g=-Math.sign(h)||.5,t._stuckT>3&&(t._stuckT=0);else{const m=c<14?0:Math.abs(h)>1?6:c<40?11:19;f=t.speed<m?.95:0,p=t.speed>m+6?1:0,g=Me(h*1.7,-1,1)}t._autoControls={throttle:f,brake:p,steer:g,handbrake:!1}}partnerAutoShoot(t,e){if(this.partnerShootT=(this.partnerShootT||0)-t,this.partnerShootT>0)return;let n=null,i=55;for(const o of this.enemies){if(o.dead)continue;const c=Math.hypot(o.pos.x-e.pos.x,o.pos.z-e.pos.z);c<i&&(i=c,n=o)}if(!n)return;this.partnerShootT=.85+Math.random()*.5,this.audio.shot("smg");const r=new P(e.pos.x,1.2,e.pos.z),a=new P(n.pos.x,1.3,n.pos.z);this.addTracer(r,a,16773792),Math.random()<.62&&n.damage(14,this,!1)}attemptShoot(){if(this.state!=="playing"||this.uiLocked||this.down)return;if(this.activeChar.inVehicle&&this.activeChar.seat==="driver"){(this.hornWarnT||0)<this.time&&(this.hornWarnT=this.time+2,this.toast("SWAP SEATS TO SHOOT · X","bad"));return}const e=this.focus?.5:1,n=this.input.aim?.55:1,i=this.activeChar.speed>1?1.35:1;this.activeChar.shoot(this,e*n*i),this.recoilKick+=this.activeChar.weaponDef.recoil*2.2,this.spread=Math.min(1,(this.spread||0)+this.activeChar.weaponDef.recoil*12)}updatePlayerShoot(t){if(this.spread=Math.max(0,(this.spread||0)-t*1.6),this.activeChar.inVehicle){const e=this.activeChar;if(e.fireCooldown=Math.max(0,e.fireCooldown-t),e.reloading&&(e.reloadT-=t,e.reloadT<=0)){const n=e.weaponDef,i=n.mag-n.magAmmo,r=Math.min(i,n.reserveAmmo);n.magAmmo+=r,n.reserveAmmo-=r,e.reloading=!1,this.updateHud()}}!this.uiLocked&&(this.mouseDown||this.touchFire)&&this.attemptShoot()}fireBullet(t,e,n=1){const i=this.camera.position.clone(),r=new P;this.camera.getWorldDirection(r);const a=e.pellets||1;for(let o=0;o<a;o++){const c=r.clone(),l=e.spread*n*(1+this.spread*.8);c.x+=(Math.random()-.5)*l*2,c.y+=(Math.random()-.5)*l*2,c.z+=(Math.random()-.5)*l*2,c.normalize();const h=this.traceShot(i,c,e,t),u=i.clone().addScaledVector(c,h?h.t:e.range);this.addTracer(i.clone().addScaledVector(c,.8),u,16773296)}this.addMuzzleFlash(i.clone().addScaledVector(r,1.4)),this.shake=Math.max(this.shake,e.recoil*2.5);for(const o of this.peds)o.dead||Math.hypot(o.group.position.x-t.pos.x,o.group.position.z-t.pos.z)<42&&(o.flee=!0)}traceShot(t,e,n,i){let r=null;const a=(h,u,f,p)=>{h===null||h<0||h>n.range||(!r||h<r.t)&&(r={t:h,kind:u,obj:f,head:p})},o=new P,c=new P;for(const h of this.enemies)h.dead||(o.set(h.pos.x,h.pos.y+1.25,h.pos.z),c.set(h.pos.x,h.pos.y+1.87,h.pos.z),a(Fs(t,e,c,.28),"enemy",h,!0),a(Fs(t,e,o,.48),"enemy",h,!1));for(const h of this.peds)h.dead||(o.set(h.group.position.x,1.2,h.group.position.z),a(Fs(t,e,o,.45),"ped",h,!1));for(const h of this.vehicles){if(h.dead||h===this.activeChar.inVehicle)continue;const u=new P(h.pos.x,h.pos.y+.85,h.pos.z);a(Fs(t,e,u,1.55),"vehicle",h,!1)}for(const h of this.world.colliders)a(Im(t,e,h),"world",h,!1);if(e.y<-.01){const h=-t.y/e.y;h>0&&a(h,"ground",null,!1)}if(!r)return null;const l=t.clone().addScaledVector(e,r.t);if(r.kind==="enemy"){const h=r.obj,u=n.damage*(r.head?n.head:1);h.damage(u,this,r.head),this.hitMarker(r.head?1:0),this.audio.hit(),this.addBlood(l),i===this.activeChar&&(this.profile.violence=Math.min(100,this.profile.violence+(r.head?3:1.2)))}else r.kind==="ped"?(this.killPed(r.obj,i),this.addBlood(l)):r.kind==="vehicle"?(r.obj.damage(n.damage*1.7,this),this.addSpark(l),r.obj.traffic&&r.obj.driver&&(r.obj.aiTarget={x:r.obj.pos.x-e.x*120,z:r.obj.pos.z-e.z*120})):r.kind==="world"?this.addSpark(l):this.addSpark(l);return{t:r.t,kind:r.kind,obj:r.obj}}enemyShoot(t,e){if(this.down)return;const n=this.activeChar.inVehicle,i=new P(t.pos.x,1.6,t.pos.z),r=new P(this.activeChar.pos.x,1.25,this.activeChar.pos.z);this.audio.shot("pistol"),this.addTracer(i,r,16756832);const a=t.kind==="cop"?.56:.44,o=Me(a-e/190+this.profile.violence*-.001,.12,.72);if(Math.random()<o)n?(n.damage(7,this),r.y=1.1,this.addSpark(r),Math.random()<.35&&this.activeChar.damage(4,this,t),this.toast("TAKING FIRE","bad")):(this.activeChar.damage(t.kind==="cop"?9:7,this,t),this.addBlood(r));else{const c=r.clone().add(new P((Math.random()-.5)*3,.5,(Math.random()-.5)*3));this.addTracer(i,c,16756832)}}killPed(t,e){if(t.dead)return;t.dead=!0,t.group.rotation.x=-Math.PI/2,t.group.position.y=.4,this.corpses.push({x:t.group.position.x,z:t.group.position.z,obj:t.group}),this.profile.violence=Math.min(100,this.profile.violence+6),this.profile.notoriety=Math.min(100,this.profile.notoriety+3),this.stats.kills++,this.countWitnesses()>0?this.reportCrime(1,{label:"CIVILIAN DOWN",witnessed:!0,delay:6}):this.toast("NO WITNESSES · HEAT AVOIDED","good")}countWitnesses(){let t=0;for(const e of this.peds)e.dead||Math.hypot(e.group.position.x-this.activeChar.pos.x,e.group.position.z-this.activeChar.pos.z)<45&&t++;return t}onEnemyKilled(t,e){if(this.stats.kills++,this.profile.violence=Math.min(100,this.profile.violence+(t.kind==="cop"?10:6)),this.profile.notoriety=Math.min(100,this.profile.notoriety+8),this.corpses.push({x:t.pos.x,z:t.pos.z,obj:t.group}),this.corpses.length>18){const n=this.corpses.shift();n.obj&&this.scene.remove(n.obj)}t.kind==="cop"?(this.heat=Me(Math.max(this.heat+.8,1),0,5),this.escapeTimer=0,this.toast("OFFICER DOWN · HEAT RISING","bad")):(this.cash+=45+Math.floor(Math.random()*80),this.toast(`DROPPED ${me(45)} · VIOLENCE +`,"money")),this.hitMarker(e?2:1)}reportCrime(t,e={}){const n=e.force?!0:e.witnessed!==!1&&this.countWitnesses()>0;if(this.profile.notoriety=Math.min(100,this.profile.notoriety+t*4),this.profile.violence=Math.min(100,this.profile.violence+t*1.5),!n){this.toast(`${e.label||"CRIME"} · NO WITNESSES`,"good");return}if(this.profile.witnesses=Math.min(100,this.profile.witnesses+t*10),e.immediate){this.heat=Me(Math.max(this.heat,t),0,5),this.escapeTimer=0,this.spawnCopWave(Math.ceil(t/2)+1,!0),this.toast(`${e.label||"CRIME"} · DISPATCH CONFIRMED`,"bad");return}this.suspicion=Me(this.suspicion+t,0,5);const i=e.delay??6;this.dispatch.pending=Math.max(this.dispatch.pending,i),this.dispatch.severity=Math.max(this.dispatch.severity,this.suspicion),this.dispatch.label=e.label||"CRIME";for(const r of this.peds)!r.dead&&Math.hypot(r.group.position.x-this.activeChar.pos.x,r.group.position.z-this.activeChar.pos.z)<48&&(r.flee=!0);this.toast(`${e.label||"CRIME"} WITNESSED · CALLS IN ${Math.ceil(i)}s`,"bad"),this.flags.m2stolen&&(this.flags.m2dispatched=!0)}setHeat(t,e=!1){this.heat=Me(Math.max(this.heat,t),0,5),e&&(this.suspicion=0,this.dispatch.pending=0,this.escapeTimer=0),this.updateHud()}spawnCopWave(t=2,e=!1){for(let n=0;n<t;n++)this.spawnPoliceCar(e?n:void 0)}spawnPoliceCar(t){if(this.policeCars.filter(c=>!c.dead).length>=6)return null;const e=t!==void 0?t/3*Math.PI*2+Math.random()*.5:Math.random()*Math.PI*2,n=95+Math.random()*60;let i=this.activeChar.pos.x+Math.cos(e)*n,r=this.activeChar.pos.z+Math.sin(e)*n;i=Math.round(i/80)*80+(Math.random()>.5?4:-4),r=Math.round(r/80)*80+(Math.random()>.5?4:-4),Math.hypot(i,r)>560&&(i=0,r=this.activeChar.pos.z+120);const a=Math.atan2(this.activeChar.pos.x-i,this.activeChar.pos.z-r),o=new Ji("police",this.scene,{x:i,z:r,heading:a,occupied:!1,policeSpawn:!0});return o.police=!0,o.policeAI=!0,o.deployed=!1,o.shootT=1+Math.random(),o.despawnT=0,this.vehicles.push(o),this.policeCars.push(o),o}deployCops(t){if(!t.deployed){t.deployed=!0;for(let e=0;e<2;e++){const n=Math.cos(t.heading)*(1.8+e*.8)*(e?-1:1),i=-Math.sin(t.heading)*(1.8+e*.8)*(e?-1:1),r=new Em(this.scene,t.pos.x+n,t.pos.z+i,"cop",this);r.aggro=!0,this.enemies.push(r),this.police.push(r)}}}updatePolice(t){if(this.dispatch.pending>0&&(this.dispatch.pending-=t,this.dispatch.pending<=0)){const h=Math.max(1,Math.min(5,this.dispatch.severity));this.suspicion=0,this.heat=Me(Math.max(this.heat,h),0,5),this.escapeTimer=0,this.toast("DISPATCH CONFIRMED · UNITS EN ROUTE","bad"),this.flags.m2stolen&&(this.flags.m2dispatched=!0),this.dispatch.severity=0,this.spawnCopWave(Math.ceil(h/2)+1,!0)}let e=!1;const n=this.activeChar.pos.x,i=this.activeChar.pos.z;for(const h of this.policeCars){if(h.dead)continue;if(Math.hypot(h.pos.x-n,h.pos.z-i)<70&&!this.world.lineBlocked(h.pos.x,h.pos.z,n,i)){e=!0;break}}if(!e)for(const h of this.police){if(h.dead)continue;if(Math.hypot(h.pos.x-n,h.pos.z-i)<58&&!this.world.lineBlocked(h.pos.x,h.pos.z,n,i)){e=!0;break}}this.heat>0&&this.suspicion>0,this.visualContact=e&&(this.heat>.01||this.suspicion>.01),this.heat>0?(e?this.escapeTimer=0:(this.escapeTimer+=t,this.escapeTimer>3.5&&(this.heat=Math.max(0,this.heat-t*.115),this.suspicion=Math.max(0,this.suspicion-t*.08),this.heat<=.005&&(this.heat=0,this.heatLostShown||(this.heatLostShown=!0,this.toast("HEAT LOST · LAY LOW","good"),this.audio.pickup(!0))))),this.heat>.01&&(this.heatLostShown=!1)):(this.escapeTimer=0,this.suspicion<=.01&&this.dispatch.pending<=0&&(this.heatLostShown=!1)),this.dispatch.pending<=0&&(this.suspicion=Math.max(0,this.suspicion-t*.12)),this.copSpawnT-=t;const r=Math.floor(this.profile.violence/35),a=this.heat>.01?Me(Math.ceil(this.heat/1.5)+r,1,5):0,o=this.policeCars.filter(h=>!h.dead);this.heat>.01&&o.length<a&&this.copSpawnT<=0&&(this.spawnPoliceCar(),this.copSpawnT=2.8-Math.min(1.2,this.heat*.25));for(const h of this.policeCars){if(h.dead){h.despawnT+=t,h.despawnT>2&&(h.mesh.visible=!1);continue}if(this.heat<=.01&&this.escapeTimer>2.5&&(h.despawnT+=t,h.despawnT>9)){this.removeVehicle(h);continue}const u=n-h.pos.x,f=i-h.pos.z,p=Math.hypot(u,f);if(p>230){this.removeVehicle(h);continue}let _=(Math.atan2(u,f)-h.heading+Math.PI*3)%(Math.PI*2)-Math.PI;h._stuckT=(h._stuckT||0)+(Math.abs(h.speed)<1?t:-t*2);let m=0,d=0,M=0;if(h._stuckT>2)m=-1,M=-Math.sign(_)||.4,h._stuckT>4&&(h._stuckT=0);else{const E=p<18?0:p<45?11:27;m=h.speed<E?.95:0,d=h.speed>E+7?1:0,M=Me(_*1.9,-1,1)}if(h.update(t,{throttle:m,brake:d,steer:M,handbrake:!1},this.world,this.time,this),p<30&&this.deployCops(h),h.shootT-=t,p<46&&h.shootT<=0&&this.heat>0){h.shootT=1.25+Math.random()*.8,this.audio.shot("pistol");const E=new P(h.pos.x,1.5,h.pos.z),v=new P(this.activeChar.pos.x,1.1,this.activeChar.pos.z);this.addTracer(E,v,16756832),Math.random()<.5&&(this.activeChar.inVehicle?(this.activeChar.inVehicle.damage(5,this),this.activeChar.damage(2,this)):this.activeChar.damage(6,this),this.addSpark(v))}}for(const h of this.police){if(h.dead)continue;const u=Math.hypot(h.pos.x-this.activeChar.pos.x,h.pos.z-this.activeChar.pos.z);this.heat<=.01&&u>55&&(h.dead=!0)}let c=999;for(const h of this.policeCars)h.dead||(c=Math.min(c,Math.hypot(h.pos.x-n,h.pos.z-i)));const l=this.heat>.01?Me(1-c/160,0,1):0;this.audio.setSiren(l,this.time)}removeVehicle(t){t.dead=!0,t.mesh.visible=!1,this.policeCars=this.policeCars.filter(e=>e!==t),this.vehicles=this.vehicles.filter(e=>e!==t),this.scene.remove(t.mesh)}clearPolice(){for(const t of this.policeCars)this.scene.remove(t.mesh),this.vehicles=this.vehicles.filter(e=>e!==t);for(const t of this.police)this.scene.remove(t.group),this.enemies=this.enemies.filter(e=>e!==t);this.policeCars=[],this.police=[],this.audio.setSiren(0,this.time)}explodeVehicle(t){if(t.exploded)return;t.exploded=!0,t.dead=!0,this.audio.explosion(),this.shake=Math.max(this.shake,1.4);const e=t.pos.clone();this.boomLight.position.set(e.x,2,e.z),this.boomLight.intensity=120;const n=new B(new de(1.8,14,10),new Dt({color:16756832,transparent:!0,opacity:.95,blending:je,depthWrite:!1}));n.position.copy(e),n.position.y=1.2,this.scene.add(n),this.effects.push({mesh:n,life:.6,max:.6,type:"fire"});for(let i=0;i<9;i++){const r=new B(new de(.6+Math.random()*.8,8,6),new Dt({color:2763310,transparent:!0,opacity:.55,depthWrite:!1}));r.position.set(e.x+(Math.random()-.5)*2,1+Math.random(),e.z+(Math.random()-.5)*2),this.scene.add(r),this.effects.push({mesh:r,life:2.4+Math.random()*2,max:3.5,type:"smoke",vy:1+Math.random()*1.5,vx:Math.random()-.5,vz:Math.random()-.5})}t.police&&(this.policeKills++,this.profile.notoriety=Math.min(100,this.profile.notoriety+6)),this.vehicles.includes(t)&&(this.vehicles=this.vehicles.filter(i=>i!==t)),this.policeCars.includes(t)&&(this.policeCars=this.policeCars.filter(i=>i!==t)),t.driverSeat===this.activeChar&&this.activeChar.damage(100,this);for(const i of this.enemies)!i.dead&&Math.hypot(i.pos.x-e.x,i.pos.z-e.z)<8&&i.damage(80,this,!1);for(const i of this.peds)!i.dead&&Math.hypot(i.group.position.x-e.x,i.group.position.z-e.z)<8&&this.killPed(i,this.activeChar);setTimeout(()=>{t.mesh.visible=!1},2200)}spawnSmoke(t){const e=new B(new de(.28+Math.random()*.3,7,5),new Dt({color:3355448,transparent:!0,opacity:.4,depthWrite:!1}));e.position.set(t.pos.x+(Math.random()-.5),1,t.pos.z+(Math.random()-.5)),this.scene.add(e),this.effects.push({mesh:e,life:1.6,max:1.6,type:"smoke",vy:1.6,vx:.2,vz:.2})}addTracer(t,e,n=16773296){const i=new ve().setFromPoints([t,e]),r=new $c({color:n,transparent:!0,opacity:.9,blending:je,depthWrite:!1}),a=new im(i,r);this.scene.add(a),this.effects.push({mesh:a,life:.075,max:.075,type:"tracer"})}addMuzzleFlash(t){const e=new B(new de(.13,7,5),new Dt({color:16765286,transparent:!0,opacity:1,blending:je,depthWrite:!1}));e.position.copy(t),this.scene.add(e),this.effects.push({mesh:e,life:.06,max:.06,type:"tracer"})}addBlood(t){for(let e=0;e<5;e++){const n=new B(new de(.05,4,3),new Dt({color:9048096,transparent:!0,opacity:.8}));n.position.copy(t),this.scene.add(n),this.effects.push({mesh:n,life:.4,max:.4,type:"tracer"})}}addSpark(t){for(let e=0;e<4;e++){const n=new B(new de(.035,3,3),new Dt({color:16765286,transparent:!0,opacity:1,blending:je,depthWrite:!1}));n.position.copy(t),this.scene.add(n),this.effects.push({mesh:n,life:.18,max:.18,type:"spark",vx:(Math.random()-.5)*4,vy:Math.random()*4,vz:(Math.random()-.5)*4})}}updateEffects(t){var e,n,i,r;this.boomLight.intensity=Math.max(0,this.boomLight.intensity-t*300);for(let a=this.effects.length-1;a>=0;a--){const o=this.effects[a];if(o.life-=t,o.life<=0){this.scene.remove(o.mesh),o.mesh.geometry&&((n=(e=o.mesh.geometry).dispose)==null||n.call(e)),o.mesh.material&&((r=(i=o.mesh.material).dispose)==null||r.call(i)),this.effects.splice(a,1);continue}const c=o.life/o.max;(o.type==="tracer"||o.type==="fire")&&(o.mesh.material.opacity=c),o.type==="fire"&&o.mesh.scale.setScalar(1+(1-c)*2.2),o.type==="smoke"&&(o.mesh.material.opacity=.5*c,o.mesh.position.y+=(o.vy||1)*t,o.mesh.position.x+=(o.vx||0)*t,o.mesh.position.z+=(o.vz||0)*t,o.mesh.scale.setScalar(1+(1-c)*3)),o.type==="spark"&&(o.mesh.material.opacity=c,o.mesh.position.x+=(o.vx||0)*t,o.mesh.position.y+=(o.vy||0)*t,o.mesh.position.z+=(o.vz||0)*t,o.vy-=9*t)}this.shake=Math.max(0,this.shake-t*1.6),this.el.damageVig.style.opacity=String(Me((1-this.activeChar.hp/100)*1.2+(this.lastDamage>0?.35:0),0,.9))}hitMarker(t){this.el.hitflash.style.opacity="0.16",setTimeout(()=>{this.el.hitflash.style.opacity="0"},60),this.el.crosshair.classList.add("enemy"),clearTimeout(this.crossT),this.crossT=setTimeout(()=>this.el.crosshair.classList.remove("enemy"),180)}updateInteractions(t){if(this.promptCandidate||(this.promptCandidate=null),this.uiLocked||this.down){this.el.prompt.classList.remove("show");return}const e=this.activeChar;let n=null;const i=e.inVehicle;if(this.inInterior){const c=Math.hypot(e.pos.x-1600,e.pos.z-1592.6),l=Math.hypot(e.pos.x-1600,e.pos.z-1607.4);c<2.4?n={key:"E",text:"Take rear exit",action:()=>this.exitInterior("back")}:l<2.4&&(n={key:"E",text:"Exit to the front",action:()=>this.exitInterior("front")}),this.showInteraction(n,t);return}if(i){const c=i,l=Math.min(...this.world.pumps.map(u=>Math.hypot(c.pos.x-u.x,c.pos.z-u.z))),h=Math.hypot(c.pos.x-Nt.charger.x,c.pos.z-Nt.charger.z);l<9.5?n={key:"E",text:"Refuel & repair · $60",action:()=>this.buyFuel(c,"fuel")}:c.isEV&&h<13?n={key:"E",text:"Charge & repair · $40",action:()=>this.buyFuel(c,"charge")}:Math.abs(c.speed)<1.2&&c===this.personalCar&&(n={key:"F",text:"Exit · T trunk",action:null,hintOnly:!0}),n?this.showInteraction(n,t):this.el.prompt.classList.remove("show");return}const r=e.pos.x,a=e.pos.z,o=(c,l,h)=>Math.hypot(r-c,a-l)<h;if(this.duffelVisible&&o(this.duffel.position.x,this.duffel.position.z,4.2))n={key:"E",text:"Grab the duffel",action:()=>this.collectDuffel()};else if(o(Nt.motel.door.x,Nt.motel.door.z,7))n={key:"E",text:"Enter Palm Shade Motel",action:()=>this.enterInterior()};else if(o(Nt.store.door.x,Nt.store.door.z,8.5)&&!this.storeLooted)n={key:"E",text:"Hold E · rob the register",hold:2.6,need:2.6,action:()=>this.robStore()};else if(o(Nt.bank.door.x,Nt.bank.door.z,9)&&this.missions.index===4&&this.missions.step===1&&!this.bankLooted)n={key:"E",text:"Hold E · crack the vault",hold:5,need:5,action:()=>this.robBank()};else if(o(Nt.pawn.door.x,Nt.pawn.door.z,7)){const c=this.totalBags();c>0?n={key:"E",text:`Fence ${c} duffel${c>1?"s":""} · ${me(this.totalLootValue())}`,action:()=>this.fenceLoot()}:n={key:"E",text:"Pawn & Pwn · no loot",action:()=>this.toast("BRING ME DUFFEL BAGS, NOT EXCUSES","bad")}}else if(o(Nt.hospital.door.x,Nt.hospital.door.z,8))n={key:"E",text:this.activeChar.hp<90?"Patch up · $50":"Mercy Hospital",action:()=>this.hospitalHeal()};else{const c=this.nearestVehicle(4.4);if(c){let l;c.locked?l=`Hotwire ${c.spec.name}`:c.occupied&&!c.personal?l=`Hijack ${c.spec.name}`:l=`Enter ${c.spec.name}`,c===this.personalCar&&(l+=" · T trunk"),n={key:"E",text:l,action:()=>this.enterVehicle(c)}}else this.corpses.length&&this.corpses.find(h=>Math.hypot(h.x-r,h.z-a)<5)&&(n={key:"E",text:"Conceal body in trunk",action:()=>this.concealBody(!1)})}this.showInteraction(n,t)}showInteraction(t,e){if(!t){this.el.prompt.classList.remove("show"),this.holdT=0,this.promptCandidate=null;return}if(this.promptCandidate=t,t.hintOnly){this.el.promptKey.textContent=t.key,this.el.promptText.textContent=t.text,this.el.prompt.classList.add("show");return}if(t.hold){this.input.interact?this.holdT=(this.holdT||0)+e:this.holdT=Math.max(0,(this.holdT||0)-e*3);const n=Math.round(Me((this.holdT||0)/t.need,0,1)*100);this.el.promptKey.textContent=t.key,this.el.promptText.textContent=`${t.text.replace("Hold E · ","")} · ${n}%`,this.el.prompt.classList.add("show"),this.holdT>=t.need&&(this.holdT=0,t.action(),this.input.interactPressed=!1);return}this.holdT=0,this.el.promptKey.textContent=t.key,this.el.promptText.textContent=t.text,this.el.prompt.classList.add("show"),this.input.interactPressed&&(t.action(),this.input.interactPressed=!1)}buyFuel(t,e){const n=e==="charge"?40:60;if(this.cash<n){this.toast(`NEED ${me(n)} CASH`,"bad");return}this.cash-=n,e==="charge"?t.fuel=Math.min(t.maxFuel,t.fuel+100):t.refuel(this.world,100,this),t.health=100,this.flags.m1refuel=!0,this.audio.pickup(!0),this.toast(`${e==="charge"?"CHARGED":"REFUELED"} · BODY REPAIRED · -${me(n)}`,"good"),this.updateHud()}robStore(){if(this.storeLooted)return;this.storeLooted=!0;const t=280+Math.floor(Math.random()*220);this.cash+=t,this.flags.m2stolen=!0,this.audio.pickup(!0),this.toast(`REGISTER CLEANED · +${me(t)} CASH`,"money"),this.reportCrime(2,{label:"ARMED ROBBERY",witnessed:"force",force:!0,delay:5.5}),this.profile.notoriety=Math.min(100,this.profile.notoriety+12),this.updateHud()}robBank(){if(this.bankLooted)return;this.bankLooted=!0;const t=2600;this.cash+=t,this.bags.push(1900,2350,2100,2500),this.flags.m5vault=!0,this.audio.alarm(),this.audio.pickup(!0),this.toast(`VAULT OPEN · ${me(t)} CASH + 4 DUFFELS`,"money"),this.setHeat(4,!0),this.spawnCopWave(4,!0),this.updateHud()}fenceLoot(){const t=this.totalLootValue(),e=this.totalBags();e&&(this.bags=[],this.personalCar.trunkBags&&(this.personalCar.trunkBags=[]),this.cash+=t,this.flags.m3fenced=!0,this.audio.pickup(!0),this.toast(`FENCED ${e} DUFFEL${e>1?"S":""} · +${me(t)} CASH`,"money"),this.profile.notoriety=Math.min(100,this.profile.notoriety+5),this.updateHud(),this.missions.index===2&&this.say("LUCIA","Now that is what I call a clean transaction.",3))}totalBags(){var t;return this.bags.length+(((t=this.personalCar.trunkBags)==null?void 0:t.length)||0)}totalLootValue(){return this.bags.reduce((t,e)=>t+e,0)+(this.personalCar.trunkBags||[]).reduce((t,e)=>t+e,0)}collectDuffel(){if(!this.duffelVisible)return;const t=1850;this.duffel.visible=!1,this.duffelVisible=!1,this.bags.push(t),this.flags.m3bag=!0,this.audio.pickup(!0),this.toast(`DUFFEL SECURED · ${me(t)} RAW LOOT`,"money"),this.updateHud(),this.say("LUCIA","Do not open it in the street. Trunk. Now.",3.2)}hospitalHeal(){if(this.activeChar.hp>=99&&this.activeChar.armor>=90){this.toast("YOU LOOK FINE TO ME","");return}if(this.cash<50){this.toast("NEED $50 CASH","bad");return}this.cash-=50,this.activeChar.hp=100,this.activeChar.armor=Math.min(100,this.activeChar.armor+25),this.audio.pickup(!0),this.toast("PATCHED UP · -$50","good"),this.updateHud()}enterInterior(){if(this.inInterior)return;if(this.activeChar.inVehicle){this.toast("EXIT THE VEHICLE FIRST","bad");return}this.savedPos={a:this.activeChar.pos.clone(),p:this.partner.pos.clone()},this.inInterior=!0,this.world.setInterior(!0);const t=this.activeChar,e=this.partner;t.pos.set(1600,.27,1604.2),t.heading=Math.PI,e.pos.set(1598.4,.27,1602.4),e.heading=Math.PI,t.group.visible=!0,e.group.visible=!0,t.group.position.copy(t.pos),e.group.position.copy(e.pos),this.camYaw=Math.PI,this.camPitch=-.1,this.camera.position.set(1600,2.6,1611),this.world.hour=this.world.hour,this.audio.ui(),this.toast("PALM SHADE MOTEL · ROOM 6 · TWO EXITS",""),this.say("BUYER","Close the door. The money is in the bag. Where is the product?",4),this.say("JASON","Easy. We do this the quiet way.",3.4)}exitInterior(t){if(!this.inInterior)return;this.inInterior=!1,this.world.setInterior(!1);const e=this.activeChar,n=this.partner;t==="back"?(e.pos.set(-120,.27,203.4),n.pos.set(-116.5,.27,203.4),e.heading=0,n.heading=0,this.flags.m4rear=!0,this.toast("REAR EXIT · STAY LOW","good"),this.say("LUCIA","Rear alley. They are all watching the front.",3.4)):(e.pos.set(-120,.27,238.5),n.pos.set(-116.5,.27,238.5),e.heading=0,n.heading=0,this.toast("FRONT EXIT · SMILE FOR THE CAMERAS","")),e.group.position.copy(e.pos),n.group.position.copy(n.pos),this.camYaw=0,this.camPitch=-.16,this.camera.position.set(e.pos.x,3,e.pos.z+6),this.audio.ui()}updateMissionHud(t,e,n){if(!t){this.freeRoam?(this.el.missionKicker.textContent="FREE ROAM",this.el.missionObj.textContent="Leonida is yours. Rob, race, fence, repeat.",this.el.missionDist.textContent="BANK "+me(this.bank)+" · CASH "+me(this.cash)):(this.el.missionKicker.textContent="STORY",this.el.missionObj.textContent="—",this.el.missionDist.textContent=""),this.el.missionPayout.textContent="";return}this.el.missionKicker.textContent=`MISSION ${this.missions.index+1}/${this.missions.missions.length} · ${t.title}`,this.el.missionObj.textContent=(e==null?void 0:e.text)||"",this.el.missionDist.textContent=e!=null&&e.waypoint&&n?`${Math.round(n)}m`:"",this.el.missionPayout.textContent=t.reward?`PAYOUT ${me(t.reward)}`:""}onMissionComplete(t){this.bank+=t.reward||0,this.stats.missions++,this.audio.pickup(!0),this.showBanner("MISSION COMPLETE",`${t.title} · ${me(t.reward||0)} DEPOSITED`),this.toast(`+${me(t.reward||0)} BANKED · CLEAN MONEY`,"money"),t.outro&&this.say(t.who||"LUCIA",t.outro,6),this.updateHud(),this.missions.index===this.missions.missions.length-1&&this.ending()}ending(){this.freeRoam=!0,this.world.hour=6.25,this.world.setWeather("clear"),this.el.cinema.classList.add("on"),setTimeout(()=>{this.showBanner("LEONIDA DREAMING","THE END · FREE ROAM UNLOCKED"),this.say("JASON","Sun coming up. Bank full. Trunk empty. What now?",5),this.say("LUCIA","Now we find another city that thinks it can stop us.",5),this.toast(`STATS · KILLS ${this.stats.kills} · MISSIONS ${this.stats.missions} · STOLEN ${this.stats.stolen}`,""),setTimeout(()=>this.el.cinema.classList.remove("on"),9e3)},1200)}clearMissionFlags(){this.flags={m1refuel:!1,m2rob:!1,m2stolen:!1,m2dispatched:!1,m2deposit:!1,m3bag:!1,m3stored:!1,m3fenced:!1,m4rear:!1,m4swap:!1,m5vault:!1,m5deposit:!1},this.storeLooted=!1,this.bankLooted=!1}setTaskHint(t){t&&(this.taskHint=t,this.toast(t,""))}showDuffel(){this.duffel.visible=!0,this.duffelVisible=!0,this.toast("DUFFEL SPOTTED AT THE DOCKS","money")}updateMissionMarker(t){const e=this.missions.marker;if(!e||this.inInterior){this.marker.visible=!1;return}this.marker.visible=!0,this.marker.position.set(e.x,0,e.z),this.markerParts.diamond.rotation.y+=t*1.6,this.markerParts.diamond.position.y=19+Math.sin(this.time*2)*.4,this.markerParts.ring.rotation.z+=t*.8,this.markerParts.cyl.material.opacity=.1+Math.sin(this.time*2.4)*.04+.06,this.markerParts.beam.rotation.y+=t*.6}onWeatherChange(t){t==="storm"?(this.toast("HURRICANE WARNING · WIND RISING","bad"),this.say("LUCIA","Storm coming. Drive like the ocean is chasing us.",3.6)):t==="rain"?this.toast("TROPICAL RAIN · STREETS GET SLICK",""):t==="clear"&&this.toast("SKIES CLEARING OVER LEONIDA","")}updateHudClock(){this.el&&(this.el.clock.textContent=this.world.clockString(),this.el.weather.textContent=this.world.weatherLabel(),this.el.loc.textContent=this.inInterior?"PALM SHADE · ROOM 6":this.world.districtAt(this.activeChar.pos.x,this.activeChar.pos.z),this.el.phone.classList.contains("hidden")||(this.el.phoneClock.textContent=this.world.clockString()))}updateHud(){if(!this.el)return;const t=this.activeChar;if(!t)return;const e=Math.max(0,Math.round(t.hp));this.el.hpFill.style.width=`${e}%`,this.el.hpVal.textContent=e,this.el.arFill.style.width=`${Math.round(t.armor)}%`,this.el.arVal.textContent=Math.round(t.armor),this.el.foFill.style.width=`${Math.round(t.focus)}%`,this.el.foVal.textContent=Math.round(t.focus),this.el.cash.textContent=me(this.cash),this.el.bank.textContent=me(this.bank),this.el.loot.textContent=this.totalBags();const n=t.weaponDef;this.el.weaponName.textContent=t.reloading?`${n.name} · RELOADING`:n.name,this.el.ammoMag.textContent=n.magAmmo,this.el.ammoRes.textContent=n.reserveAmmo;const i=t.inVehicle,r=i?`${t.name} · ${t.seat==="driver"?"DRIVER":"GUNNER"}`:t.name;this.el.roleTag.innerHTML=`${r} <span class="swap">${i?"X SWAP":"TAB SWAP"}</span>`,document.querySelectorAll(".slot").forEach(l=>l.classList.toggle("active",Number(l.dataset.slot)===t.weapon+1));const a=document.getElementById("titleBank"),o=document.getElementById("titleCash");a&&(a.textContent=me(this.bank)),o&&(o.textContent=me(this.cash));const c=Math.ceil(Math.max(this.heat,this.suspicion)-1e-4);for(let l=0;l<this.starEls.length;l++){const h=l<c,u=l<Math.ceil(this.heat-1e-4),f=h&&(!u||this.visualContact),p=h&&u&&!this.visualContact,g=this.starEls[l];g.classList.toggle("on",h),g.classList.toggle("white",f),g.classList.toggle("red",p),g.classList.toggle("pulse",h&&(f||this.suspicion>0))}if(i){this.el.vehicleHud.classList.add("show");const l=Math.round(Math.abs(i.speed)*2.23694);this.el.vSpeed.textContent=l,this.el.vGear.textContent=i.speed<-.5?"R":Math.abs(i.speed)<.5?"N":"D",this.el.vFuel.style.width=`${Math.round(i.fuel)}%`,this.el.vHealth.style.width=`${Math.round(i.health)}%`,this.el.vFuel.classList.toggle("low",i.fuel<18),this.el.vHealth.classList.toggle("low",i.health<32),this.el.vSeat.textContent=`${t.name} · ${t.seat==="driver"?"DRIVER":"GUNNER"} · ${i.spec.name}`}else this.el.vehicleHud.classList.remove("show");this.el.focusVig.classList.toggle("on",this.focus),this.el.crosshair.classList.toggle("focus",this.focus)}updateHudTick(t){this.uiT=(this.uiT||0)+t,this.uiT>.1&&(this.uiT=0,this.updateHud(),this.drawRadar(),this.el.phone.classList.contains("hidden")||this.updatePhone(),this.el.trunk.classList.contains("hidden")||this.updateTrunkUI());const e=this.activeChar.inVehicle;this.el.crosshair.style.opacity=e&&this.activeChar.seat==="driver"?"0":"1";const n=1+(this.spread||0)*2.4+(this.input.aim?-.18:0);this.el.crosshair.style.transform=`translate(-50%,-50%) scale(${Me(n,.6,2.2)})`}drawRadar(){if(!this.radarCtx){const a=document.getElementById("radar");if(!a)return;this.radarCtx=a.getContext("2d")}const t=this.activeChar.inVehicle,e=t?t.pos.x:this.activeChar.pos.x,n=t?t.pos.z:this.activeChar.pos.z,i=t?t.heading:this.activeChar.heading,r=[];for(const a of this.policeCars)a.dead||r.push({type:"police",x:a.pos.x,z:a.pos.z,flash:Math.sin(this.time*8)>0});for(const a of this.enemies)!a.dead&&a.kind==="cop"&&r.push({type:"police",x:a.pos.x,z:a.pos.z,flash:!0});for(const a of this.enemies)!a.dead&&a.kind!=="cop"&&r.push({type:"enemy",x:a.pos.x,z:a.pos.z});this.partner&&this.partner.inVehicle!==t&&r.push({type:"partner",x:this.partner.pos.x,z:this.partner.pos.z}),this.personalCar&&this.personalCar!==t&&!this.personalCar.dead&&r.push({type:"personal",x:this.personalCar.pos.x,z:this.personalCar.pos.z});for(const a in Nt)r.push({type:"poi",x:Nt[a].x,z:Nt[a].z,color:Nt[a].color});this.world.drawRadar(this.radarCtx,e,n,Math.PI-i,r,this.missions.marker)}say(t,e,n=4){this.subQueue.push({who:t,text:e,dur:n}),this.subCurrent||this.nextSub()}nextSub(){if(!this.subQueue.length){this.subCurrent=null;return}this.subCurrent=this.subQueue.shift(),this.subT=this.subCurrent.dur,this.el.subWho.textContent=this.subCurrent.who,this.el.subLine.textContent=this.subCurrent.text,this.el.subtitle.classList.add("show")}updateDialogue(t){this.subCurrent?(this.subT-=t,this.subT<=0&&(this.el.subtitle.classList.remove("show"),this.subCurrent=null,this.subGap=.22)):this.subGap>0?(this.subGap-=t,this.subGap<=0&&this.nextSub()):this.subQueue.length&&this.nextSub()}showBanner(t,e){this.el.swapBig.textContent=t,this.el.swapSmall.textContent=e||"",this.el.swapBanner.classList.add("show"),clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>this.el.swapBanner.classList.remove("show"),2800)}toast(t,e=""){if(!this.el){this.toasts=this.toasts||[],this.toasts.push({text:t,kind:e});return}const n=document.createElement("div");for(n.className="toast "+e,n.textContent=t,this.el.toasts.appendChild(n);this.el.toasts.children.length>5;)this.el.toasts.removeChild(this.el.toasts.firstChild);setTimeout(()=>n.remove(),4200)}updateAudio(t){var n;const e=(n=this.activeChar)==null?void 0:n.inVehicle;e&&!e.dead?this.audio.setEngine(!0,e.speed,e.throttle>0):this.audio.setEngine(!1,0,!1),this.lastDamage=Math.max(0,this.lastDamage-t*2)}updateLockpick(t){const e=this.lockpick;e&&(e.needle+=e.dir*e.speed*t,e.needle>1&&(e.needle=1,e.dir=-1),e.needle<0&&(e.needle=0,e.dir=1),this.updateLockpickUI())}updateQte(t){const e=this.qte;e&&(e.t-=t,document.getElementById("qteFill").style.width=`${Me(e.t/e.max,0,1)*100}%`,e.t<=0&&this.finishHijack(!1))}onPlayerDamaged(t,e,n){this.lastDamage=1,this.el.damageVig.style.opacity="0.75",this.el.hitflash.style.opacity="0.12",setTimeout(()=>{this.el.damageVig.style.opacity="",this.el.hitflash.style.opacity="0"},160),this.shake=Math.max(this.shake,Math.min(.5,e*.02)),t===this.activeChar&&this.updateHud()}onCarCrash(t,e){this.audio.hit(),this.shake=Math.max(this.shake,Math.min(.7,e*.03))}summonCar(){if(this.inInterior){this.toast("NOT FROM INSIDE THE MOTEL","bad");return}if(this.activeChar.inVehicle){this.toast("YOU ARE ALREADY IN A CAR","bad");return}(!this.personalCar||this.personalCar.dead)&&(this.personalCar=new Ji("grotto",this.scene,{x:this.activeChar.pos.x,z:this.activeChar.pos.z,personal:!0,fuel:70}),this.vehicles.push(this.personalCar));const t=this.activeChar.pos.x,e=this.activeChar.pos.z,n=Math.round(t/80)*80,i=Math.round(e/80)*80,r=[{x:n+4.5,z:e,h:0},{x:n-4.5,z:e,h:Math.PI},{x:t,z:i+4.5,h:Math.PI/2},{x:t,z:i-4.5,h:-Math.PI/2}];let a=r.find(o=>!this.world.isInsideBuilding(o.x,o.z,2))||r[0];this.personalCar.pos.set(a.x,0,a.z),this.personalCar.heading=a.h,this.personalCar.mesh.rotation.y=a.h,this.personalCar.dead=!1,this.personalCar.mesh.visible=!0,this.personalCar.speed=0,this.toast("GROTTO GT DELIVERED · BUCKME CONCIERGE","money"),this.audio.ui()}debugSummary(){var t,e;return{state:this.state,started:this.started,mission:(t=this.missions)==null?void 0:t.index,step:(e=this.missions)==null?void 0:e.step,pos:{x:+this.activeChar.pos.x.toFixed(1),z:+this.activeChar.pos.z.toFixed(1)},cash:this.cash,bank:this.bank,heat:this.heat,vehicles:this.vehicles.length,peds:this.peds.length}}}const Um=new Dm;window.game=Um;
