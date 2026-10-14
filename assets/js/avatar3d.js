/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ia="170";var Gl=0,Ja=1,Hl=2;var Qc=1,Wl=2,Cn=3,$n=0,Fe=1,In=2,Jn=0,zi=1,$a=2,Ka=3,ja=4,Xl=5,ci=100,Yl=101,ql=102,Zl=103,Jl=104,$l=200,Kl=201,jl=202,Ql=203,oo=204,ao=205,th=206,eh=207,nh=208,ih=209,sh=210,rh=211,oh=212,ah=213,ch=214,co=0,lo=1,ho=2,Hi=3,uo=4,fo=5,po=6,mo=7,tl=0,lh=1,hh=2,Oe=0,uh=1,dh=2,fh=3,ph=4,mh=5,gh=6,_h=7;var el=300,Wi=301,Xi=302,go=303,_o=304,xr=306,xo=1e3,ui=1001,yo=1002,hn=1003,xh=1004;var ws=1005;var gn=1006,Tr=1007;var di=1008;var Nn=1009,nl=1010,il=1011,ps=1012,La=1013,fi=1014,Ln=1015,xs=1016,Da=1017,Ua=1018,Yi=1020,sl=35902,rl=1021,ol=1022,ln=1023,al=1024,cl=1025,ki=1026,qi=1027,ll=1028,Na=1029,hl=1030,Fa=1031;var Oa=1033,qs=33776,Zs=33777,Js=33778,$s=33779,vo=35840,Mo=35841,So=35842,bo=35843,wo=36196,Ao=37492,To=37496,Eo=37808,Ro=37809,Co=37810,Po=37811,Io=37812,Lo=37813,Do=37814,Uo=37815,No=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,Ks=36492,Vo=36494,Go=36495,ul=36283,Ho=36284,Wo=36285,Xo=36286;var js=2300,Yo=2301,Er=2302,Qa=2400,tc=2401,ec=2402;var yh=3200,vh=3201;var dl=0,Mh=1,qn="",le="srgb",$i="srgb-linear",yr="linear",ae="srgb";var wi=7680;var nc=519,Sh=512,bh=513,wh=514,fl=515,Ah=516,Th=517,Eh=518,Rh=519,ic=35044;var sc="300 es",Dn=2e3,Qs=2001,Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rr=Math.PI/180,qo=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Ch(i,t){return(i%t+t)%t}function Cr(i,t,e){return(1-e)*i+e*t}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,o,a,l,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,u)}set(t,e,n,s,r,o,a,l,u){let c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],d=n[7],f=n[2],h=n[5],p=n[8],y=s[0],g=s[3],m=s[6],v=s[1],T=s[4],x=s[7],B=s[2],I=s[5],L=s[8];return r[0]=o*y+a*v+l*B,r[3]=o*g+a*T+l*I,r[6]=o*m+a*x+l*L,r[1]=u*y+c*v+d*B,r[4]=u*g+c*T+d*I,r[7]=u*m+c*x+d*L,r[2]=f*y+h*v+p*B,r[5]=f*g+h*T+p*I,r[8]=f*m+h*x+p*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-n*r*c+n*a*l+s*r*u-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],d=c*o-a*u,f=a*l-c*r,h=u*r-o*l,p=e*d+n*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=d*y,t[1]=(s*u-c*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(c*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=h*y,t[7]=(n*l-u*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pr=new Zt;function pl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){let i=tr("canvas");return i.style.display="block",i}var rc={};function ls(i){i in rc||(rc[i]=!0,console.warn(i))}function Ih(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?yr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var oc=[.64,.33,.3,.6,.15,.06],ac=[.2126,.7152,.0722],cc=[.3127,.329],lc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[$i]:{primaries:oc,whitePoint:cc,transfer:yr,toXYZ:lc,fromXYZ:hc,luminanceCoefficients:ac,workingColorSpaceConfig:{unpackColorSpace:le},outputColorSpaceConfig:{drawingBufferColorSpace:le}},[le]:{primaries:oc,whitePoint:cc,transfer:ae,toXYZ:lc,fromXYZ:hc,luminanceCoefficients:ac,outputColorSpaceConfig:{drawingBufferColorSpace:le}}});var Ai,Zo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=tr("canvas")),Ai.width=t.width,Ai.height=t.height;let n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uh=0,er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ir(s[o].image)):r.push(Ir(s[o]))}else r=Ir(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ir(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nh=0,Qe=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ui,s=ui,r=gn,o=di,a=ln,l=Nn,u=i.DEFAULT_ANISOTROPY,c=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=ys(),this.name="",this.source=new er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==el)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=el;Qe.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(u+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(u+1)/2,x=(h+1)/2,B=(m+1)/2,I=(c+f)/4,L=(d+y)/4,G=(p+g)/4;return T>x&&T>B?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=I/n,r=L/n):x>B?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=I/s,r=G/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=L/r,s=G/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-y)/v,this.z=(f-c)/v,this.w=Math.acos((u+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends Kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Me=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],u=n[s+1],c=n[s+2],d=n[s+3],f=r[o+0],h=r[o+1],p=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=p,t[e+3]=y;return}if(d!==y||l!==f||u!==h||c!==p){let g=1-a,m=l*f+u*h+c*p+d*y,v=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){let B=Math.sqrt(T),I=Math.atan2(B,m*v);g=Math.sin(g*I)/B,a=Math.sin(a*I)/B}let x=a*v;if(l=l*g+f*x,u=u*g+h*x,c=c*g+p*x,d=d*g+y*x,g===1-a){let B=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=B,u*=B,c*=B,d*=B}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],u=n[s+2],c=n[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return t[e]=a*p+c*d+l*h-u*f,t[e+1]=l*p+c*f+u*d-a*h,t[e+2]=u*p+c*h+a*f-l*d,t[e+3]=c*p-a*d-l*f-u*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(s/2),d=a(r/2),f=l(n/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*c*d+u*h*p,this._y=u*h*d-f*c*p,this._z=u*c*p+f*h*d,this._w=u*c*d-f*h*p;break;case"YXZ":this._x=f*c*d+u*h*p,this._y=u*h*d-f*c*p,this._z=u*c*p-f*h*d,this._w=u*c*d+f*h*p;break;case"ZXY":this._x=f*c*d-u*h*p,this._y=u*h*d+f*c*p,this._z=u*c*p+f*h*d,this._w=u*c*d-f*h*p;break;case"ZYX":this._x=f*c*d-u*h*p,this._y=u*h*d+f*c*p,this._z=u*c*p-f*h*d,this._w=u*c*d+f*h*p;break;case"YZX":this._x=f*c*d+u*h*p,this._y=u*h*d+f*c*p,this._z=u*c*p-f*h*d,this._w=u*c*d-f*h*p;break;case"XZY":this._x=f*c*d-u*h*p,this._y=u*h*d-f*c*p,this._z=u*c*p+f*h*d,this._w=u*c*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],d=e[10],f=n+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(r-u)*h,this._z=(o-s)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+u)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(r-u)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+c)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=n*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-n*u,this._z=r*c+o*u+n*l-s*a,this._w=o*c-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}let u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-e)*c)/u,f=Math.sin(e*c)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*n),c=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*u+o*d-a*c,this.y=n+l*c+a*u-r*d,this.z=s+l*d+r*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lr.copy(this).projectOnVector(t),this.sub(Lr)}reflect(t){return this.sub(Lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lr=new V,uc=new Me,pi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Ts.subVectors(this.max,rs),Ti.subVectors(t.a,rs),Ei.subVectors(t.b,rs),Ri.subVectors(t.c,rs),Vn.subVectors(Ei,Ti),Gn.subVectors(Ri,Ei),ei.subVectors(Ti,Ri);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ei.z,ei.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ei.z,0,-ei.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ei.y,ei.x,0];return!Dr(e,Ti,Ei,Ri,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,Ti,Ei,Ri,Ts))?!1:(Es.crossVectors(Vn,Gn),e=[Es.x,Es.y,Es.z],Dr(e,Ti,Ei,Ri,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new V,new V,new V,new V,new V,new V,new V,new V],on=new V,As=new pi,Ti=new V,Ei=new V,Ri=new V,Vn=new V,Gn=new V,ei=new V,rs=new V,Ts=new V,Es=new V,ni=new V;function Dr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);let a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),u=e.dot(ni),c=n.dot(ni);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}var Fh=new pi,os=new V,Ur=new V,ms=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);let e=os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Ur)),this.expandByPoint(os.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new V,Nr=new V,Rs=new V,Hn=new V,Fr=new V,Cs=new V,Or=new V,Ko=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Nr.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Nr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Rs),a=Hn.dot(this.direction),l=-Hn.dot(Rs),u=Hn.lengthSq(),c=Math.abs(1-o*o),d,f,h,p;if(c>0)if(d=o*l-a,f=o*a-l,p=r*c,d>=0)if(f>=-p)if(f<=p){let y=1/c;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+u):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Nr).addScaledVector(Rs,f),h}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),c>=0?(r=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){Fr.subVectors(e,t),Cs.subVectors(n,t),Or.crossVectors(Fr,Cs);let o=this.direction.dot(Or),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);let l=a*this.direction.dot(Cs.crossVectors(Hn,Cs));if(l<0)return null;let u=a*this.direction.dot(Fr.cross(Hn));if(u<0||l+u>o)return null;let c=-a*Hn.dot(Or);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,l,u,c,d,f,h,p,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,u,c,d,f,h,p,y,g)}set(t,e,n,s,r,o,a,l,u,c,d,f,h,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*c,h=o*d,p=a*c,y=a*d;e[0]=l*c,e[4]=-l*d,e[8]=u,e[1]=h+p*u,e[5]=f-y*u,e[9]=-a*l,e[2]=y-f*u,e[6]=p+h*u,e[10]=o*l}else if(t.order==="YXZ"){let f=l*c,h=l*d,p=u*c,y=u*d;e[0]=f+y*a,e[4]=p*a-h,e[8]=o*u,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=h*a-p,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*c,h=l*d,p=u*c,y=u*d;e[0]=f-y*a,e[4]=-o*d,e[8]=p+h*a,e[1]=h+p*a,e[5]=o*c,e[9]=y-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*c,h=o*d,p=a*c,y=a*d;e[0]=l*c,e[4]=p*u-h,e[8]=f*u+y,e[1]=l*d,e[5]=y*u+f,e[9]=h*u-p,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,h=o*u,p=a*l,y=a*u;e[0]=l*c,e[4]=y-f*d,e[8]=p*d+h,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=h*d+p,e[10]=f-y*d}else if(t.order==="XZY"){let f=o*l,h=o*u,p=a*l,y=a*u;e[0]=l*c,e[4]=-d,e[8]=u*c,e[1]=f*d+y,e[5]=o*c,e[9]=h*d-p,e[2]=p*d-h,e[6]=a*c,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oh,t,Bh)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Wn.crossVectors(n,Xe),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Wn.crossVectors(n,Xe)),Wn.normalize(),Ps.crossVectors(Xe,Wn),s[0]=Wn.x,s[4]=Ps.x,s[8]=Xe.x,s[1]=Wn.y,s[5]=Ps.y,s[9]=Xe.y,s[2]=Wn.z,s[6]=Ps.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],d=n[5],f=n[9],h=n[13],p=n[2],y=n[6],g=n[10],m=n[14],v=n[3],T=n[7],x=n[11],B=n[15],I=s[0],L=s[4],G=s[8],w=s[12],M=s[1],z=s[5],tt=s[9],Q=s[13],lt=s[2],dt=s[6],ht=s[10],mt=s[14],ct=s[3],_t=s[7],vt=s[11],wt=s[15];return r[0]=o*I+a*M+l*lt+u*ct,r[4]=o*L+a*z+l*dt+u*_t,r[8]=o*G+a*tt+l*ht+u*vt,r[12]=o*w+a*Q+l*mt+u*wt,r[1]=c*I+d*M+f*lt+h*ct,r[5]=c*L+d*z+f*dt+h*_t,r[9]=c*G+d*tt+f*ht+h*vt,r[13]=c*w+d*Q+f*mt+h*wt,r[2]=p*I+y*M+g*lt+m*ct,r[6]=p*L+y*z+g*dt+m*_t,r[10]=p*G+y*tt+g*ht+m*vt,r[14]=p*w+y*Q+g*mt+m*wt,r[3]=v*I+T*M+x*lt+B*ct,r[7]=v*L+T*z+x*dt+B*_t,r[11]=v*G+T*tt+x*ht+B*vt,r[15]=v*w+T*Q+x*mt+B*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],d=t[6],f=t[10],h=t[14],p=t[3],y=t[7],g=t[11],m=t[15];return p*(+r*l*d-s*u*d-r*a*f+n*u*f+s*a*h-n*l*h)+y*(+e*l*h-e*u*f+r*o*f-s*o*h+s*u*c-r*l*c)+g*(+e*u*d-e*a*h-r*o*d+n*o*h+r*a*c-n*u*c)+m*(-s*a*c-e*l*d+e*a*f+s*o*d-n*o*f+n*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],d=t[9],f=t[10],h=t[11],p=t[12],y=t[13],g=t[14],m=t[15],v=d*g*u-y*f*u+y*l*h-a*g*h-d*l*m+a*f*m,T=p*f*u-c*g*u-p*l*h+o*g*h+c*l*m-o*f*m,x=c*y*u-p*d*u+p*a*h-o*y*h-c*a*m+o*d*m,B=p*d*l-c*y*l-p*a*f+o*y*f+c*a*g-o*d*g,I=e*v+n*T+s*x+r*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return t[0]=v*L,t[1]=(y*f*r-d*g*r-y*s*h+n*g*h+d*s*m-n*f*m)*L,t[2]=(a*g*r-y*l*r+y*s*u-n*g*u-a*s*m+n*l*m)*L,t[3]=(d*l*r-a*f*r-d*s*u+n*f*u+a*s*h-n*l*h)*L,t[4]=T*L,t[5]=(c*g*r-p*f*r+p*s*h-e*g*h-c*s*m+e*f*m)*L,t[6]=(p*l*r-o*g*r-p*s*u+e*g*u+o*s*m-e*l*m)*L,t[7]=(o*f*r-c*l*r+c*s*u-e*f*u-o*s*h+e*l*h)*L,t[8]=x*L,t[9]=(p*d*r-c*y*r-p*n*h+e*y*h+c*n*m-e*d*m)*L,t[10]=(o*y*r-p*a*r+p*n*u-e*y*u-o*n*m+e*a*m)*L,t[11]=(c*a*r-o*d*r-c*n*u+e*d*u+o*n*h-e*a*h)*L,t[12]=B*L,t[13]=(c*y*s-p*d*s+p*n*f-e*y*f-c*n*g+e*d*g)*L,t[14]=(p*a*s-o*y*s-p*n*l+e*y*l+o*n*g-e*a*g)*L,t[15]=(o*d*s-c*a*s+c*n*l-e*d*l-o*n*f+e*a*f)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,u=r*o,c=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+n,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,c=o+o,d=a+a,f=r*u,h=r*c,p=r*d,y=o*c,g=o*d,m=a*d,v=l*u,T=l*c,x=l*d,B=n.x,I=n.y,L=n.z;return s[0]=(1-(y+m))*B,s[1]=(h+x)*B,s[2]=(p-T)*B,s[3]=0,s[4]=(h-x)*I,s[5]=(1-(f+m))*I,s[6]=(g+v)*I,s[7]=0,s[8]=(p+T)*L,s[9]=(g-v)*L,s[10]=(1-(f+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ci.set(s[0],s[1],s[2]).length(),o=Ci.set(s[4],s[5],s[6]).length(),a=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);let u=1/r,c=1/o,d=1/a;return an.elements[0]*=u,an.elements[1]*=u,an.elements[2]*=u,an.elements[4]*=c,an.elements[5]*=c,an.elements[6]*=c,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){let l=this.elements,u=2*r/(e-t),c=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),h,p;if(a===Dn)h=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Qs)h=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){let l=this.elements,u=1/(e-t),c=1/(n-s),d=1/(o-r),f=(e+t)*u,h=(n+s)*c,p,y;if(a===Dn)p=(o+r)*d,y=-2*d;else if(a===Qs)p=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new V,an=new ve,Oh=new V(0,0,0),Bh=new V(1,1,1),Wn=new V,Ps=new V,Xe=new V,dc=new ve,fc=new Me,qe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-De(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qe.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zh=0,pc=new V,Pi=new Me,Tn=new ve,Is=new V,as=new V,kh=new V,Vh=new Me,mc=new V(1,0,0),gc=new V(0,1,0),_c=new V(0,0,1),xc={type:"added"},Gh={type:"removed"},Ii={type:"childadded",child:null},Br={type:"childremoved",child:null},Ae=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new qe,n=new Me,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Zt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(mc,t)}rotateY(t){return this.rotateOnAxis(gc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return pc.copy(t).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mc,t)}translateY(t){return this.translateOnAxis(gc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(as,Is,this.up):Tn.lookAt(Is,as,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gh),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let d=l[u];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let u in a){let c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new V(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new V,En=new V,zr=new V,Rn=new V,Li=new V,Di=new V,yc=new V,kr=new V,Vr=new V,Gr=new V,Hr=new xe,Wr=new xe,Xr=new xe,li=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),En.subVectors(n,e),zr.subVectors(t,e);let o=cn.dot(cn),a=cn.dot(En),l=cn.dot(zr),u=En.dot(En),c=En.dot(zr),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(u*l-a*c)*f,p=(o*c-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Hr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Hr.fromBufferAttribute(t,e),Wr.fromBufferAttribute(t,n),Xr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Hr,r.x),o.addScaledVector(Wr,r.y),o.addScaledVector(Xr,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),En.subVectors(t,e),cn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),cn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Li.subVectors(s,n),Di.subVectors(r,n),kr.subVectors(t,n);let l=Li.dot(kr),u=Di.dot(kr);if(l<=0&&u<=0)return e.copy(n);Vr.subVectors(t,s);let c=Li.dot(Vr),d=Di.dot(Vr);if(c>=0&&d<=c)return e.copy(s);let f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Li,o);Gr.subVectors(t,r);let h=Li.dot(Gr),p=Di.dot(Gr);if(p>=0&&h<=p)return e.copy(r);let y=h*u-l*p;if(y<=0&&u>=0&&p<=0)return a=u/(u-p),e.copy(n).addScaledVector(Di,a);let g=c*p-h*d;if(g<=0&&d-c>=0&&h-p>=0)return yc.subVectors(r,s),a=(d-c)/(d-c+(h-p)),e.copy(s).addScaledVector(yc,a);let m=1/(g+y+f);return o=y*m,a=f*m,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Yr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Ch(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yr(o,r,t+1/3),this.g=Yr(o,r,t),this.b=Yr(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=le){let n=ml[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=le){return Qt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(De(Ne.r*255,0,255))*65536+Math.round(De(Ne.g*255,0,255))*256+Math.round(De(Ne.b*255,0,255))}getHexString(t=le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,u,c=(a+o)/2;if(a===o)l=0,u=0;else{let d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=le){Qt.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Ls);let n=Cr(Xn.h,Ls.h,e),s=Cr(Xn.s,Ls.s,e),r=Cr(Xn.l,Ls.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Vt;Vt.NAMES=ml;var Hh=0,mi=class extends Kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ys(),this.name="",this.blending=zi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=ao,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oo&&(n.blendSrc=this.blendSrc),this.blendDst!==ao&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},tn=class extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new V,Ds=new Pt,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ic&&(t.usage=this.usage),t}};var sr=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var rr=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wh=0,Ke=new ve,qr=new Ae,Ui=new V,Ye=new pi,cs=new pi,Ie=new V,Be=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pl(t)?rr:sr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return qr.lookAt(t),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(Ye.min,cs.min),Ye.expandByPoint(Ie),Ie.addVectors(Ye.max,cs.max),Ye.expandByPoint(Ie)):(Ye.expandByPoint(cs.min),Ye.expandByPoint(cs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ie.fromBufferAttribute(a,u),l&&(Ui.fromBufferAttribute(t,u),Ie.add(Ui)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let G=0;G<n.count;G++)a[G]=new V,l[G]=new V;let u=new V,c=new V,d=new V,f=new Pt,h=new Pt,p=new Pt,y=new V,g=new V;function m(G,w,M){u.fromBufferAttribute(n,G),c.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,G),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),c.sub(u),d.sub(u),h.sub(f),p.sub(f);let z=1/(h.x*p.y-p.x*h.y);isFinite(z)&&(y.copy(c).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(z),g.copy(d).multiplyScalar(h.x).addScaledVector(c,-p.x).multiplyScalar(z),a[G].add(y),a[w].add(y),a[M].add(y),l[G].add(g),l[w].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let G=0,w=v.length;G<w;++G){let M=v[G],z=M.start,tt=M.count;for(let Q=z,lt=z+tt;Q<lt;Q+=3)m(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let T=new V,x=new V,B=new V,I=new V;function L(G){B.fromBufferAttribute(s,G),I.copy(B);let w=a[G];T.copy(w),T.sub(B.multiplyScalar(B.dot(w))).normalize(),x.crossVectors(I,w);let z=x.dot(l[G])<0?-1:1;o.setXYZW(G,T.x,T.y,T.z,z)}for(let G=0,w=v.length;G<w;++G){let M=v[G],z=M.start,tt=M.count;for(let Q=z,lt=z+tt;Q<lt;Q+=3)L(t.getX(Q+0)),L(t.getX(Q+1)),L(t.getX(Q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,u=new V,c=new V,d=new V;if(t)for(let f=0,h=t.count;f<h;f+=3){let p=t.getX(f+0),y=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),a.add(c),l.add(c),u.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){let u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c),h=0,p=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*c;for(let m=0;m<c;m++)f[p++]=u[h++]}return new je(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],u=t(l,n);e.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let l=[],u=r[a];for(let c=0,d=u.length;c<d;c++){let f=u[c],h=t(f,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let u=n[l];t.data.attributes[l]=u.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){let h=u[d];c.push(h.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(e))}let r=t.morphAttributes;for(let u in r){let c=[],d=r[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,c=o.length;u<c;u++){let d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vc=new ve,ii=new Ko,Us=new ms,Mc=new V,Ns=new V,Fs=new V,Os=new V,Zr=new V,Bs=new V,Sc=new V,zs=new V,ye=class extends Ae{constructor(t=new Be,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bs.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let c=a[l],d=r[l];c!==0&&(Zr.fromBufferAttribute(d,t),o?Bs.addScaledVector(Zr,c):Bs.addScaledVector(Zr.sub(e),c))}e.add(Bs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Us.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Us,Mc)===null||ii.origin.distanceToSquared(Mc)>(t.far-t.near)**2))&&(vc.copy(r).invert(),ii.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,h.start),T=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,B=T;x<B;x+=3){let I=a.getX(x),L=a.getX(x+1),G=a.getX(x+2);s=ks(this,m,t,n,u,c,d,I,L,G),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let g=p,m=y;g<m;g+=3){let v=a.getX(g),T=a.getX(g+1),x=a.getX(g+2);s=ks(this,o,t,n,u,c,d,v,T,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,h.start),T=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,B=T;x<B;x+=3){let I=x,L=x+1,G=x+2;s=ks(this,m,t,n,u,c,d,I,L,G),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let g=p,m=y;g<m;g+=3){let v=g,T=g+1,x=g+2;s=ks(this,o,t,n,u,c,d,v,T,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Xh(i,t,e,n,s,r,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===$n,a),l===null)return null;zs.copy(a),zs.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(zs);return u<e.near||u>e.far?null:{distance:u,point:zs.clone(),object:i}}function ks(i,t,e,n,s,r,o,a,l,u){i.getVertexPosition(a,Ns),i.getVertexPosition(l,Fs),i.getVertexPosition(u,Os);let c=Xh(i,t,e,n,Ns,Fs,Os,Sc);if(c){let d=new V;li.getBarycoord(Sc,Ns,Fs,Os,d),s&&(c.uv=li.getInterpolatedAttribute(s,a,l,u,d,new Pt)),r&&(c.uv1=li.getInterpolatedAttribute(r,a,l,u,d,new Pt)),o&&(c.normal=li.getInterpolatedAttribute(o,a,l,u,d,new V),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let f={a,b:l,c:u,normal:new V,materialIndex:0};li.getNormal(Ns,Fs,Os,f.normal),c.face=f,c.barycoord=d}return c}var Ze=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],u=[],c=[],d=[],f=0,h=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(d,2));function p(y,g,m,v,T,x,B,I,L,G,w){let M=x/L,z=B/G,tt=x/2,Q=B/2,lt=I/2,dt=L+1,ht=G+1,mt=0,ct=0,_t=new V;for(let vt=0;vt<ht;vt++){let wt=vt*z-Q;for(let Nt=0;Nt<dt;Nt++){let Wt=Nt*M-tt;_t[y]=Wt*v,_t[g]=wt*T,_t[m]=lt,u.push(_t.x,_t.y,_t.z),_t[y]=0,_t[g]=0,_t[m]=I>0?1:-1,c.push(_t.x,_t.y,_t.z),d.push(Nt/L),d.push(1-vt/G),mt+=1}}for(let vt=0;vt<G;vt++)for(let wt=0;wt<L;wt++){let Nt=f+wt+dt*vt,Wt=f+wt+dt*(vt+1),ut=f+(wt+1)+dt*(vt+1),pt=f+(wt+1)+dt*vt;l.push(Nt,Wt,pt),l.push(Wt,ut,pt),ct+=6}a.addGroup(h,ct,w),h+=ct,f+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Yh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var qh={clone:Zi,merge:ke},Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Yh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},or=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new V,bc=new Pt,wc=new Pt,we=class extends or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,bc,wc),e.subVectors(wc,bc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ni=-90,Fi=1,jo=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(Ni,Fi,t,e);s.layers=this.layers,this.add(s);let r=new we(Ni,Fi,t,e);r.layers=this.layers,this.add(r);let o=new we(Ni,Fi,t,e);o.layers=this.layers,this.add(o);let a=new we(Ni,Fi,t,e);a.layers=this.layers,this.add(a);let l=new we(Ni,Fi,t,e);l.layers=this.layers,this.add(l);let u=new we(Ni,Fi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let u of e)this.remove(u);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,u,c]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(d,f,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ar=class extends Qe{constructor(t,e,n,s,r,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qo=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ar(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Jn});r.uniforms.tEquirect.value=e;let o=new ye(s,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=gn),new jo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Jr=new V,$h=new V,Kh=new Zt,Pn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Jr.subVectors(n,e).cross($h.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kh.getNormalMatrix(t),s=this.coplanarPoint(Jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new ms,Vs=new V,gs=class{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],d=s[6],f=s[7],h=s[8],p=s[9],y=s[10],g=s[11],m=s[12],v=s[13],T=s[14],x=s[15];if(n[0].setComponents(l-r,f-u,g-h,x-m).normalize(),n[1].setComponents(l+r,f+u,g+h,x+m).normalize(),n[2].setComponents(l+o,f+c,g+p,x+v).normalize(),n[3].setComponents(l-o,f-c,g-p,x-v).normalize(),n[4].setComponents(l-a,f-d,g-y,x-T).normalize(),e===Dn)n[5].setComponents(l+a,f+d,g+y,x+T).normalize();else if(e===Qs)n[5].setComponents(a,d,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vs.x=s.normal.x>0?t.max.x:t.min.x,Vs.y=s.normal.y>0?t.max.y:t.min.y,Vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _l(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jh(i){let t=new WeakMap;function e(a,l){let u=a.array,c=a.usage,d=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=i.SHORT;else if(u instanceof Uint32Array)h=i.UNSIGNED_INT;else if(u instanceof Int32Array)h=i.INT;else if(u instanceof Int8Array)h=i.BYTE;else if(u instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,u){let c=l.array,d=l.updateRanges;if(i.bindBuffer(u,a),d.length===0)i.bufferSubData(u,0,c);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],y=d[h];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let y=d[h];i.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var cr=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),u=a+1,c=l+1,d=t/a,f=e/l,h=[],p=[],y=[],g=[];for(let m=0;m<c;m++){let v=m*f-o;for(let T=0;T<u;T++){let x=T*d-r;p.push(x,-v,0),y.push(0,0,1),g.push(T/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let T=v+u*m,x=v+u*(m+1),B=v+1+u*(m+1),I=v+1+u*m;h.push(T,x,I),h.push(x,B,I)}this.setIndex(h),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tu=`#ifdef USE_ALPHAHASH
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
#endif`,eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
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
#endif`,ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,au=`#ifdef USE_BATCHING
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
#endif`,cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,du=`#ifdef USE_IRIDESCENCE
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
#endif`,fu=`#ifdef USE_BUMPMAP
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Su=`#define PI 3.141592653589793
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
} // validated`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wu=`vec3 transformedNormal = objectNormal;
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
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
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
}`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wu=`uniform bool receiveShadow;
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
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
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
#endif`,Ku=`struct PhysicalMaterial {
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
}`,ju=`
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cd=`#if defined( USE_POINTS_UV )
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
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`#ifdef USE_MORPHTARGETS
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
#endif`,md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
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
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Od=`float getShadowMask() {
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
}`,Bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`#include <common>
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
}`,of=`#if DEPTH_PACKING == 3200
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
}`,af=`#define DISTANCE
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
}`,cf=`#define DISTANCE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`uniform float scale;
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#define LAMBERT
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
}`,gf=`#define LAMBERT
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
}`,_f=`#define MATCAP
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
}`,xf=`#define MATCAP
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
}`,yf=`#define NORMAL
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
}`,vf=`#define NORMAL
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
}`,Mf=`#define PHONG
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
}`,Sf=`#define PHONG
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
}`,bf=`#define STANDARD
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
}`,wf=`#define STANDARD
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
}`,Af=`#define TOON
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
}`,Tf=`#define TOON
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
}`,Ef=`uniform float size;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Pf=`uniform vec3 color;
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
}`,If=`uniform float rotation;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Qh,alphahash_pars_fragment:tu,alphamap_fragment:eu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:su,aomap_fragment:ru,aomap_pars_fragment:ou,batching_pars_vertex:au,batching_vertex:cu,begin_vertex:lu,beginnormal_vertex:hu,bsdfs:uu,iridescence_fragment:du,bumpmap_pars_fragment:fu,clipping_planes_fragment:pu,clipping_planes_pars_fragment:mu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:_u,color_fragment:xu,color_pars_fragment:yu,color_pars_vertex:vu,color_vertex:Mu,common:Su,cube_uv_reflection_fragment:bu,defaultnormal_vertex:wu,displacementmap_pars_vertex:Au,displacementmap_vertex:Tu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Ru,colorspace_fragment:Cu,colorspace_pars_fragment:Pu,envmap_fragment:Iu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Du,envmap_pars_vertex:Uu,envmap_physical_pars_fragment:Xu,envmap_vertex:Nu,fog_vertex:Fu,fog_pars_vertex:Ou,fog_fragment:Bu,fog_pars_fragment:zu,gradientmap_pars_fragment:ku,lightmap_pars_fragment:Vu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Wu,lights_toon_fragment:Yu,lights_toon_pars_fragment:qu,lights_phong_fragment:Zu,lights_phong_pars_fragment:Ju,lights_physical_fragment:$u,lights_physical_pars_fragment:Ku,lights_fragment_begin:ju,lights_fragment_maps:Qu,lights_fragment_end:td,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:nd,logdepthbuf_pars_vertex:id,logdepthbuf_vertex:sd,map_fragment:rd,map_pars_fragment:od,map_particle_fragment:ad,map_particle_pars_fragment:cd,metalnessmap_fragment:ld,metalnessmap_pars_fragment:hd,morphinstance_vertex:ud,morphcolor_vertex:dd,morphnormal_vertex:fd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:xd,normal_pars_vertex:yd,normal_vertex:vd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Ad,opaque_fragment:Td,packing:Ed,premultiplied_alpha_fragment:Rd,project_vertex:Cd,dithering_fragment:Pd,dithering_pars_fragment:Id,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Nd,shadowmap_vertex:Fd,shadowmask_pars_fragment:Od,skinbase_vertex:Bd,skinning_pars_vertex:zd,skinning_vertex:kd,skinnormal_vertex:Vd,specularmap_fragment:Gd,specularmap_pars_fragment:Hd,tonemapping_fragment:Wd,tonemapping_pars_fragment:Xd,transmission_fragment:Yd,transmission_pars_fragment:qd,uv_pars_fragment:Zd,uv_pars_vertex:Jd,uv_vertex:$d,worldpos_vertex:Kd,background_vert:jd,background_frag:Qd,backgroundCube_vert:tf,backgroundCube_frag:ef,cube_vert:nf,cube_frag:sf,depth_vert:rf,depth_frag:of,distanceRGBA_vert:af,distanceRGBA_frag:cf,equirect_vert:lf,equirect_frag:hf,linedashed_vert:uf,linedashed_frag:df,meshbasic_vert:ff,meshbasic_frag:pf,meshlambert_vert:mf,meshlambert_frag:gf,meshmatcap_vert:_f,meshmatcap_frag:xf,meshnormal_vert:yf,meshnormal_frag:vf,meshphong_vert:Mf,meshphong_frag:Sf,meshphysical_vert:bf,meshphysical_frag:wf,meshtoon_vert:Af,meshtoon_frag:Tf,points_vert:Ef,points_frag:Rf,shadow_vert:Cf,shadow_frag:Pf,sprite_vert:If,sprite_frag:Lf},St={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},mn={basic:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ke([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ke([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ke([St.points,St.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ke([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ke([St.common,St.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ke([St.sprite,St.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ke([St.common,St.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ke([St.lights,St.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};mn.physical={uniforms:ke([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Gs={r:0,b:0,g:0},ri=new qe,Df=new ve;function Uf(i,t,e,n,s,r,o){let a=new Vt(0),l=r===!0?0:1,u,c,d=null,f=0,h=null;function p(v){let T=v.isScene===!0?v.background:null;return T&&T.isTexture&&(T=(v.backgroundBlurriness>0?e:t).get(T)),T}function y(v){let T=!1,x=p(v);x===null?m(a,l):x&&x.isColor&&(m(x,1),T=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,T){let x=p(T);x&&(x.isCubeTexture||x.mapping===xr)?(c===void 0&&(c=new ye(new Ze(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Zi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(B,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),ri.copy(T.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(ri)),c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ae,(d!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ye(new cr(2,2),new _n({name:"BackgroundMaterial",uniforms:Zi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,h=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function m(v,T){v.getRGB(Gs,gl(i)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),l=T,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:y,addToRenderList:g}}function Nf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,z,tt,Q,lt){let dt=!1,ht=d(Q,tt,z);r!==ht&&(r=ht,u(r.object)),dt=h(M,Q,tt,lt),dt&&p(M,Q,tt,lt),lt!==null&&t.update(lt,i.ELEMENT_ARRAY_BUFFER),(dt||o)&&(o=!1,x(M,z,tt,Q),lt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function l(){return i.createVertexArray()}function u(M){return i.bindVertexArray(M)}function c(M){return i.deleteVertexArray(M)}function d(M,z,tt){let Q=tt.wireframe===!0,lt=n[M.id];lt===void 0&&(lt={},n[M.id]=lt);let dt=lt[z.id];dt===void 0&&(dt={},lt[z.id]=dt);let ht=dt[Q];return ht===void 0&&(ht=f(l()),dt[Q]=ht),ht}function f(M){let z=[],tt=[],Q=[];for(let lt=0;lt<e;lt++)z[lt]=0,tt[lt]=0,Q[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:tt,attributeDivisors:Q,object:M,attributes:{},index:null}}function h(M,z,tt,Q){let lt=r.attributes,dt=z.attributes,ht=0,mt=tt.getAttributes();for(let ct in mt)if(mt[ct].location>=0){let vt=lt[ct],wt=dt[ct];if(wt===void 0&&(ct==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),ct==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor)),vt===void 0||vt.attribute!==wt||wt&&vt.data!==wt.data)return!0;ht++}return r.attributesNum!==ht||r.index!==Q}function p(M,z,tt,Q){let lt={},dt=z.attributes,ht=0,mt=tt.getAttributes();for(let ct in mt)if(mt[ct].location>=0){let vt=dt[ct];vt===void 0&&(ct==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),ct==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));let wt={};wt.attribute=vt,vt&&vt.data&&(wt.data=vt.data),lt[ct]=wt,ht++}r.attributes=lt,r.attributesNum=ht,r.index=Q}function y(){let M=r.newAttributes;for(let z=0,tt=M.length;z<tt;z++)M[z]=0}function g(M){m(M,0)}function m(M,z){let tt=r.newAttributes,Q=r.enabledAttributes,lt=r.attributeDivisors;tt[M]=1,Q[M]===0&&(i.enableVertexAttribArray(M),Q[M]=1),lt[M]!==z&&(i.vertexAttribDivisor(M,z),lt[M]=z)}function v(){let M=r.newAttributes,z=r.enabledAttributes;for(let tt=0,Q=z.length;tt<Q;tt++)z[tt]!==M[tt]&&(i.disableVertexAttribArray(tt),z[tt]=0)}function T(M,z,tt,Q,lt,dt,ht){ht===!0?i.vertexAttribIPointer(M,z,tt,lt,dt):i.vertexAttribPointer(M,z,tt,Q,lt,dt)}function x(M,z,tt,Q){y();let lt=Q.attributes,dt=tt.getAttributes(),ht=z.defaultAttributeValues;for(let mt in dt){let ct=dt[mt];if(ct.location>=0){let _t=lt[mt];if(_t===void 0&&(mt==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),mt==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),_t!==void 0){let vt=_t.normalized,wt=_t.itemSize,Nt=t.get(_t);if(Nt===void 0)continue;let Wt=Nt.buffer,ut=Nt.type,pt=Nt.bytesPerElement,bt=ut===i.INT||ut===i.UNSIGNED_INT||_t.gpuType===La;if(_t.isInterleavedBufferAttribute){let gt=_t.data,Rt=gt.stride,Ot=_t.offset;if(gt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<ct.locationSize;Bt++)m(ct.location+Bt,gt.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Bt=0;Bt<ct.locationSize;Bt++)g(ct.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Bt=0;Bt<ct.locationSize;Bt++)T(ct.location+Bt,wt/ct.locationSize,ut,vt,Rt*pt,(Ot+wt/ct.locationSize*Bt)*pt,bt)}else{if(_t.isInstancedBufferAttribute){for(let gt=0;gt<ct.locationSize;gt++)m(ct.location+gt,_t.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let gt=0;gt<ct.locationSize;gt++)g(ct.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let gt=0;gt<ct.locationSize;gt++)T(ct.location+gt,wt/ct.locationSize,ut,vt,wt*pt,wt/ct.locationSize*gt*pt,bt)}}else if(ht!==void 0){let vt=ht[mt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(ct.location,vt);break;case 3:i.vertexAttrib3fv(ct.location,vt);break;case 4:i.vertexAttrib4fv(ct.location,vt);break;default:i.vertexAttrib1fv(ct.location,vt)}}}}v()}function B(){G();for(let M in n){let z=n[M];for(let tt in z){let Q=z[tt];for(let lt in Q)c(Q[lt].object),delete Q[lt];delete z[tt]}delete n[M]}}function I(M){if(n[M.id]===void 0)return;let z=n[M.id];for(let tt in z){let Q=z[tt];for(let lt in Q)c(Q[lt].object),delete Q[lt];delete z[tt]}delete n[M.id]}function L(M){for(let z in n){let tt=n[z];if(tt[M.id]===void 0)continue;let Q=tt[M.id];for(let lt in Q)c(Q[lt].object),delete Q[lt];delete tt[M.id]}}function G(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function Ff(i,t,e){let n;function s(u){n=u}function r(u,c){i.drawArrays(n,u,c),e.update(c,n,1)}function o(u,c,d){d!==0&&(i.drawArraysInstanced(n,u,c,d),e.update(c,n,d))}function a(u,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,d);let h=0;for(let p=0;p<d;p++)h+=c[p];e.update(h,n,1)}function l(u,c,d,f){if(d===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<u.length;p++)o(u[p],c[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(n,u,0,c,0,f,0,d);let p=0;for(let y=0;y<d;y++)p+=c[y]*f[y];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Of(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==ln&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let G=L===xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Nn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ln&&!G)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=p>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:B,maxSamples:I}}function Bf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Pn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=c(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?c(null):u();else{let v=r?0:n,T=v*4,x=m.clippingState||null;l.value=x,x=c(p,f,T,h);for(let B=0;B!==T;++B)x[B]=e[B];m.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,f,h,p){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=h+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,x=h;T!==y;++T,x+=4)o.copy(d[T]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function zf(i){let t=new WeakMap;function e(o,a){return a===go?o.mapping=Wi:a===_o&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===go||a===_o)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let u=new Qo(l.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var lr=class extends or{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bi=4,Ac=[.125,.215,.35,.446,.526,.582],hi=20,$r=new lr,Tc=new Vt,Kr=null,jr=0,Qr=0,to=!1,ai=(1+Math.sqrt(5))/2,Oi=1/ai,Ec=[new V(-ai,Oi,0),new V(ai,Oi,0),new V(-Oi,0,ai),new V(Oi,0,ai),new V(0,ai,-Oi),new V(0,ai,Oi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Kr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr,jr,Qr),this._renderer.xr.enabled=to,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:xs,format:ln,colorSpace:$i,depthBuffer:!1},s=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kf(r)),this._blurMaterial=Vf(r,t,e)}return s}_compileMaterial(t){let e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,n,s){let a=new we(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Tc),c.toneMapping=Oe,c.autoClear=!1;let h=new tn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),p=new ye(new Ze,h),y=!1,g=t.background;g?g.isColor&&(h.color.copy(g),t.background=null,y=!0):(h.color.copy(Tc),y=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));let T=this._cubeSize;Hs(s,v*T,m>2?T:0,T,T),c.setRenderTarget(s),y&&c.render(p,a),c.render(t,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=f,c.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$r)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ec[(s-r-1)%Ec.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,d=new ye(this._lodPlanes[s],u),f=u.uniforms,h=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*hi-1),y=r/p,g=isFinite(r)?1+Math.floor(c*y):hi;g>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hi}`);let m=[],v=0;for(let L=0;L<hi;++L){let G=L/y,w=Math.exp(-G*G/2);m.push(w),L===0?v+=w:L<g&&(v+=2*w)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:T}=this;f.dTheta.value=p,f.mipInt.value=T-n;let x=this._sizeLods[s],B=3*x*(s>T-Bi?s-T+Bi:0),I=4*(this._cubeSize-x);Hs(e,B,I,3*x,2*x),l.setRenderTarget(e),l.render(d,$r)}};function kf(i){let t=[],e=[],n=[],s=i,r=i-Bi+1+Ac.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Bi?l=Ac[o-i+Bi-1]:o===0&&(l=0),n.push(l);let u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,p=6,y=3,g=2,m=1,v=new Float32Array(y*p*h),T=new Float32Array(g*p*h),x=new Float32Array(m*p*h);for(let I=0;I<h;I++){let L=I%3*2/3-1,G=I>2?0:-1,w=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];v.set(w,y*p*I),T.set(f,g*p*I);let M=[I,I,I,I,I,I];x.set(M,m*p*I)}let B=new Be;B.setAttribute("position",new je(v,y)),B.setAttribute("uv",new je(T,g)),B.setAttribute("faceIndex",new je(x,m)),t.push(B),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(i,t,e){let n=new Fn(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vf(i,t,e){let n=new Float32Array(hi),s=new V(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Cc(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Pc(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function Gf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,u=l===go||l===_o,c=l===Wi||l===Xi;if(u||c){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new hr(i)),d=u?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return u&&h&&h.height>0||c&&h&&s(h)?(e===null&&(e=new hr(i)),d=u?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){let l=a.target;l.removeEventListener("dispose",r);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wf(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let y=f.morphAttributes[p];for(let g=0,m=y.length;g<m;g++)t.remove(y[g])}f.removeEventListener("dispose",o),delete s[f.id];let h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER);let h=d.morphAttributes;for(let p in h){let y=h[p];for(let g=0,m=y.length;g<m;g++)t.update(y[g],i.ARRAY_BUFFER)}}function u(d){let f=[],h=d.index,p=d.attributes.position,y=0;if(h!==null){let v=h.array;y=h.version;for(let T=0,x=v.length;T<x;T+=3){let B=v[T+0],I=v[T+1],L=v[T+2];f.push(B,I,I,L,L,B)}}else if(p!==void 0){let v=p.array;y=p.version;for(let T=0,x=v.length/3-1;T<x;T+=3){let B=T+0,I=T+1,L=T+2;f.push(B,I,I,L,L,B)}}else return;let g=new(pl(f)?rr:sr)(f,1);g.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function c(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function Xf(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function u(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*o,p),e.update(h,n,p))}function c(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];e.update(g,n,1)}function d(f,h,p,y){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/o,h[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,y,0,p);let m=0;for(let v=0;v<p;v++)m+=h[v]*y[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Yf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qf(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0,f=n.get(a);if(f===void 0||f.count!==d){let w=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;h===!0&&(T=1),p===!0&&(T=2),y===!0&&(T=3);let x=a.attributes.position.count*T,B=1;x>t.maxTextureSize&&(B=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let I=new Float32Array(x*B*4*d),L=new nr(I,x,B,d);L.type=Ln,L.needsUpdate=!0;let G=T*4;for(let M=0;M<d;M++){let z=g[M],tt=m[M],Q=v[M],lt=x*B*4*M;for(let dt=0;dt<z.count;dt++){let ht=dt*G;h===!0&&(s.fromBufferAttribute(z,dt),I[lt+ht+0]=s.x,I[lt+ht+1]=s.y,I[lt+ht+2]=s.z,I[lt+ht+3]=0),p===!0&&(s.fromBufferAttribute(tt,dt),I[lt+ht+4]=s.x,I[lt+ht+5]=s.y,I[lt+ht+6]=s.z,I[lt+ht+7]=0),y===!0&&(s.fromBufferAttribute(Q,dt),I[lt+ht+8]=s.x,I[lt+ht+9]=s.y,I[lt+ht+10]=s.z,I[lt+ht+11]=Q.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Pt(x,B)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let y=0;y<u.length;y++)h+=u[y];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zf(i,t,e,n){let s=new WeakMap;function r(l){let u=n.render.frame,c=l.geometry,d=t.get(l,c);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function a(l){let u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}var ur=class extends Qe{constructor(t,e,n,s,r,o,a,l,u,c=ki){if(c!==ki&&c!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ki&&(n=fi),n===void 0&&c===qi&&(n=Yi),super(null,s,r,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xl=new Qe,Ic=new ur(1,1),yl=new nr,vl=new $o,Ml=new ar,Lc=[],Dc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function Ki(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lc[s];if(r===void 0&&(r=new Float32Array(s),Lc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vr(i,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Qf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ee(e,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),Re(e,n)}}function tp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ee(e,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),Re(e,n)}}function ep(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ee(e,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),Re(e,n)}}function np(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=fl,r=Ic):r=xl,e.setTexture2D(t||r,s)}function up(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vl,s)}function dp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ml,s)}function fp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yl,s)}function pp(i){switch(i){case 5126:return Jf;case 35664:return $f;case 35665:return Kf;case 35666:return jf;case 35674:return Qf;case 35675:return tp;case 35676:return ep;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return op;case 36294:return ap;case 36295:return cp;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return fp}}function mp(i,t){i.uniform1fv(this.addr,t)}function gp(i,t){let e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function _p(i,t){let e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function xp(i,t){let e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function yp(i,t){let e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vp(i,t){let e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mp(i,t){let e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sp(i,t){i.uniform1iv(this.addr,t)}function bp(i,t){i.uniform2iv(this.addr,t)}function wp(i,t){i.uniform3iv(this.addr,t)}function Ap(i,t){i.uniform4iv(this.addr,t)}function Tp(i,t){i.uniform1uiv(this.addr,t)}function Ep(i,t){i.uniform2uiv(this.addr,t)}function Rp(i,t){i.uniform3uiv(this.addr,t)}function Cp(i,t){i.uniform4uiv(this.addr,t)}function Pp(i,t,e){let n=this.cache,s=t.length,r=vr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xl,r[o])}function Ip(i,t,e){let n=this.cache,s=t.length,r=vr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vl,r[o])}function Lp(i,t,e){let n=this.cache,s=t.length,r=vr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ml,r[o])}function Dp(i,t,e){let n=this.cache,s=t.length,r=vr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yl,r[o])}function Up(i){switch(i){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return xp;case 35674:return yp;case 35675:return vp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return bp;case 35668:case 35672:return wp;case 35669:case 35673:return Ap;case 5125:return Tp;case 36294:return Ep;case 36295:return Rp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}var ta=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pp(e.type)}},ea=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Up(e.type)}},na=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},eo=/(\w+)(\])?(\[|\.)?/g;function Oc(i,t){i.seq.push(t),i.map[t.id]=t}function Np(i,t,e){let n=i.name,s=n.length;for(eo.lastIndex=0;;){let r=eo.exec(n),o=eo.lastIndex,a=r[1],l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Oc(e,u===void 0?new ta(a,i,t):new ea(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new na(a),Oc(e,d)),e=d}}}var Gi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Np(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Bc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Fp=37297,Op=0;function Bp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var zc=new Zt;function zp(i){Qt._getMatrix(zc,Qt.workingColorSpace,i);let t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Bp(i.getShaderSource(t),o)}else return s}function kp(i,t){let e=zp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vp(i,t){let e;switch(t){case uh:e="Linear";break;case dh:e="Reinhard";break;case fh:e="Cineon";break;case ph:e="ACESFilmic";break;case gh:e="AgX";break;case _h:e="Neutral";break;case mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ws=new V;function Gp(){Qt.getLuminanceCoefficients(Ws);let i=Ws.x.toFixed(4),t=Ws.y.toFixed(4),e=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Wp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function hs(i){return i!==""}function Vc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(i){return i.replace(Yp,Zp)}var qp=new Map;function Zp(i,t){let e=$t[t];if(e===void 0){let n=qp.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}var Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(i){return i.replace(Jp,$p)}function $p(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function jp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function tm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tl:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case hh:t="ENVMAP_BLENDING_ADD";break}return t}function em(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function nm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Kp(e),u=jp(e),c=Qp(e),d=tm(e),f=em(e),h=Hp(e),p=Wp(r),y=s.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hs).join(`
`),m.length>0&&(m+=`
`)):(g=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),m=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oe?"#define TONE_MAPPING":"",e.toneMapping!==Oe?$t.tonemapping_pars_fragment:"",e.toneMapping!==Oe?Vp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,kp("linearToOutputTexel",e.outputColorSpace),Gp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=ia(o),o=Vc(o,e),o=Gc(o,e),a=ia(a),a=Vc(a,e),a=Gc(a,e),o=Hc(o),a=Hc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=v+g+o,x=v+m+a,B=Bc(s,s.VERTEX_SHADER,T),I=Bc(s,s.FRAGMENT_SHADER,x);s.attachShader(y,B),s.attachShader(y,I),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(z){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(y).trim(),Q=s.getShaderInfoLog(B).trim(),lt=s.getShaderInfoLog(I).trim(),dt=!0,ht=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,B,I);else{let mt=kc(s,B,"vertex"),ct=kc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+tt+`
`+mt+`
`+ct)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(Q===""||lt==="")&&(ht=!1);ht&&(z.diagnostics={runnable:dt,programLog:tt,vertexShader:{log:Q,prefix:g},fragmentShader:{log:lt,prefix:m}})}s.deleteShader(B),s.deleteShader(I),G=new Gi(s,y),w=Xp(s,y)}let G;this.getUniforms=function(){return G===void 0&&L(this),G};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Fp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Op++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=B,this.fragmentShader=I,this}var im=0,sa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ra(t),e.set(t,n)),n}},ra=class{constructor(t){this.id=im++,this.code=t,this.usedTimes=0}};function sm(i,t,e,n,s,r,o){let a=new ir,l=new sa,u=new Set,c=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,h=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return u.add(w),w===0?"uv":`uv${w}`}function g(w,M,z,tt,Q){let lt=tt.fog,dt=Q.geometry,ht=w.isMeshStandardMaterial?tt.environment:null,mt=(w.isMeshStandardMaterial?e:t).get(w.envMap||ht),ct=mt&&mt.mapping===xr?mt.image.height:null,_t=p[w.type];w.precision!==null&&(h=s.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let vt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,wt=vt!==void 0?vt.length:0,Nt=0;dt.morphAttributes.position!==void 0&&(Nt=1),dt.morphAttributes.normal!==void 0&&(Nt=2),dt.morphAttributes.color!==void 0&&(Nt=3);let Wt,ut,pt,bt;if(_t){let Ut=mn[_t];Wt=Ut.vertexShader,ut=Ut.fragmentShader}else Wt=w.vertexShader,ut=w.fragmentShader,l.update(w),pt=l.getVertexShaderID(w),bt=l.getFragmentShaderID(w);let gt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Ot=Q.isInstancedMesh===!0,Bt=Q.isBatchedMesh===!0,Gt=!!w.map,kt=!!w.matcap,jt=!!mt,q=!!w.aoMap,Se=!!w.lightMap,Xt=!!w.bumpMap,zt=!!w.normalMap,Tt=!!w.displacementMap,Kt=!!w.emissiveMap,X=!!w.metalnessMap,S=!!w.roughnessMap,_=w.anisotropy>0,Y=w.clearcoat>0,it=w.dispersion>0,P=w.iridescence>0,N=w.sheen>0,C=w.transmission>0,D=_&&!!w.anisotropyMap,H=Y&&!!w.clearcoatMap,E=Y&&!!w.clearcoatNormalMap,A=Y&&!!w.clearcoatRoughnessMap,U=P&&!!w.iridescenceMap,W=P&&!!w.iridescenceThicknessMap,k=N&&!!w.sheenColorMap,F=N&&!!w.sheenRoughnessMap,j=!!w.specularMap,st=!!w.specularColorMap,et=!!w.specularIntensityMap,R=C&&!!w.transmissionMap,K=C&&!!w.thicknessMap,O=!!w.gradientMap,$=!!w.alphaMap,nt=w.alphaTest>0,ot=!!w.alphaHash,ft=!!w.extensions,Mt=Oe;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let Ct={shaderID:_t,shaderType:w.type,shaderName:w.name,vertexShader:Wt,fragmentShader:ut,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:bt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Bt,batchingColor:Bt&&Q._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&Q.instanceColor!==null,instancingMorph:Ot&&Q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:$i,alphaToCoverage:!!w.alphaToCoverage,map:Gt,matcap:kt,envMap:jt,envMapMode:jt&&mt.mapping,envMapCubeUVHeight:ct,aoMap:q,lightMap:Se,bumpMap:Xt,normalMap:zt,displacementMap:f&&Tt,emissiveMap:Kt,normalMapObjectSpace:zt&&w.normalMapType===Mh,normalMapTangentSpace:zt&&w.normalMapType===dl,metalnessMap:X,roughnessMap:S,anisotropy:_,anisotropyMap:D,clearcoat:Y,clearcoatMap:H,clearcoatNormalMap:E,clearcoatRoughnessMap:A,dispersion:it,iridescence:P,iridescenceMap:U,iridescenceThicknessMap:W,sheen:N,sheenColorMap:k,sheenRoughnessMap:F,specularMap:j,specularColorMap:st,specularIntensityMap:et,transmission:C,transmissionMap:R,thicknessMap:K,gradientMap:O,opaque:w.transparent===!1&&w.blending===zi&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:nt,alphaHash:ot,combine:w.combine,mapUv:Gt&&y(w.map.channel),aoMapUv:q&&y(w.aoMap.channel),lightMapUv:Se&&y(w.lightMap.channel),bumpMapUv:Xt&&y(w.bumpMap.channel),normalMapUv:zt&&y(w.normalMap.channel),displacementMapUv:Tt&&y(w.displacementMap.channel),emissiveMapUv:Kt&&y(w.emissiveMap.channel),metalnessMapUv:X&&y(w.metalnessMap.channel),roughnessMapUv:S&&y(w.roughnessMap.channel),anisotropyMapUv:D&&y(w.anisotropyMap.channel),clearcoatMapUv:H&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:E&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:W&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:k&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:F&&y(w.sheenRoughnessMap.channel),specularMapUv:j&&y(w.specularMap.channel),specularColorMapUv:st&&y(w.specularColorMap.channel),specularIntensityMapUv:et&&y(w.specularIntensityMap.channel),transmissionMapUv:R&&y(w.transmissionMap.channel),thicknessMapUv:K&&y(w.thicknessMap.channel),alphaMapUv:$&&y(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(zt||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!dt.attributes.uv&&(Gt||$),fog:!!lt,useFog:w.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:Q.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Gt&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===ae,decodeVideoTextureEmissive:Kt&&w.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(w.emissiveMap.colorSpace)===ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===In,flipSided:w.side===Fe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ft&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&w.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ct.vertexUv1s=u.has(1),Ct.vertexUv2s=u.has(2),Ct.vertexUv3s=u.has(3),u.clear(),Ct}function m(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let z in w.defines)M.push(z),M.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(v(M,w),T(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function T(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let M=p[w.type],z;if(M){let tt=mn[M];z=qh.clone(tt.uniforms)}else z=w.uniforms;return z}function B(w,M){let z;for(let tt=0,Q=c.length;tt<Q;tt++){let lt=c[tt];if(lt.cacheKey===M){z=lt,++z.usedTimes;break}}return z===void 0&&(z=new nm(i,M,w,r),c.push(z)),z}function I(w){if(--w.usedTimes===0){let M=c.indexOf(w);c[M]=c[c.length-1],c.pop(),w.destroy()}}function L(w){l.remove(w)}function G(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:B,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:G}}function rm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,h,p,y,g){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:y,group:g},i[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=y,m.group=g),t++,m}function a(d,f,h,p,y,g){let m=o(d,f,h,p,y,g);h.transmission>0?n.push(m):h.transparent===!0?s.push(m):e.push(m)}function l(d,f,h,p,y,g){let m=o(d,f,h,p,y,g);h.transmission>0?n.unshift(m):h.transparent===!0?s.unshift(m):e.unshift(m)}function u(d,f){e.length>1&&e.sort(d||om),n.length>1&&n.sort(f||Xc),s.length>1&&s.sort(f||Xc)}function c(){for(let d=t,f=i.length;d<f;d++){let h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function am(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Yc,i.set(n,[o])):s>=r.length?(o=new Yc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Vt};break;case"SpotLight":e={position:new V,direction:new V,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function lm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hm=0;function um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dm(i){let t=new cm,e=lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new V);let s=new V,r=new ve,o=new ve;function a(u){let c=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let h=0,p=0,y=0,g=0,m=0,v=0,T=0,x=0,B=0,I=0,L=0;u.sort(um);for(let w=0,M=u.length;w<M;w++){let z=u[w],tt=z.color,Q=z.intensity,lt=z.distance,dt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)c+=tt.r*Q,d+=tt.g*Q,f+=tt.b*Q;else if(z.isLightProbe){for(let ht=0;ht<9;ht++)n.probe[ht].addScaledVector(z.sh.coefficients[ht],Q);L++}else if(z.isDirectionalLight){let ht=t.get(z);if(ht.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let mt=z.shadow,ct=e.get(z);ct.shadowIntensity=mt.intensity,ct.shadowBias=mt.bias,ct.shadowNormalBias=mt.normalBias,ct.shadowRadius=mt.radius,ct.shadowMapSize=mt.mapSize,n.directionalShadow[h]=ct,n.directionalShadowMap[h]=dt,n.directionalShadowMatrix[h]=z.shadow.matrix,v++}n.directional[h]=ht,h++}else if(z.isSpotLight){let ht=t.get(z);ht.position.setFromMatrixPosition(z.matrixWorld),ht.color.copy(tt).multiplyScalar(Q),ht.distance=lt,ht.coneCos=Math.cos(z.angle),ht.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ht.decay=z.decay,n.spot[y]=ht;let mt=z.shadow;if(z.map&&(n.spotLightMap[B]=z.map,B++,mt.updateMatrices(z),z.castShadow&&I++),n.spotLightMatrix[y]=mt.matrix,z.castShadow){let ct=e.get(z);ct.shadowIntensity=mt.intensity,ct.shadowBias=mt.bias,ct.shadowNormalBias=mt.normalBias,ct.shadowRadius=mt.radius,ct.shadowMapSize=mt.mapSize,n.spotShadow[y]=ct,n.spotShadowMap[y]=dt,x++}y++}else if(z.isRectAreaLight){let ht=t.get(z);ht.color.copy(tt).multiplyScalar(Q),ht.halfWidth.set(z.width*.5,0,0),ht.halfHeight.set(0,z.height*.5,0),n.rectArea[g]=ht,g++}else if(z.isPointLight){let ht=t.get(z);if(ht.color.copy(z.color).multiplyScalar(z.intensity),ht.distance=z.distance,ht.decay=z.decay,z.castShadow){let mt=z.shadow,ct=e.get(z);ct.shadowIntensity=mt.intensity,ct.shadowBias=mt.bias,ct.shadowNormalBias=mt.normalBias,ct.shadowRadius=mt.radius,ct.shadowMapSize=mt.mapSize,ct.shadowCameraNear=mt.camera.near,ct.shadowCameraFar=mt.camera.far,n.pointShadow[p]=ct,n.pointShadowMap[p]=dt,n.pointShadowMatrix[p]=z.shadow.matrix,T++}n.point[p]=ht,p++}else if(z.isHemisphereLight){let ht=t.get(z);ht.skyColor.copy(z.color).multiplyScalar(Q),ht.groundColor.copy(z.groundColor).multiplyScalar(Q),n.hemi[m]=ht,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=f;let G=n.hash;(G.directionalLength!==h||G.pointLength!==p||G.spotLength!==y||G.rectAreaLength!==g||G.hemiLength!==m||G.numDirectionalShadows!==v||G.numPointShadows!==T||G.numSpotShadows!==x||G.numSpotMaps!==B||G.numLightProbes!==L)&&(n.directional.length=h,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+B-I,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,G.directionalLength=h,G.pointLength=p,G.spotLength=y,G.rectAreaLength=g,G.hemiLength=m,G.numDirectionalShadows=v,G.numPointShadows=T,G.numSpotShadows=x,G.numSpotMaps=B,G.numLightProbes=L,n.version=hm++)}function l(u,c){let d=0,f=0,h=0,p=0,y=0,g=c.matrixWorldInverse;for(let m=0,v=u.length;m<v;m++){let T=u[m];if(T.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(T.isSpotLight){let x=n.spot[h];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(T.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(T.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(T.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function qc(i){let t=new dm(i),e=[],n=[];function s(c){u.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}let u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qc(i),t.set(s,[a])):r>=o.length?(a=new qc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var oa=class extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},aa=class extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
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
}`;function gm(i,t,e){let n=new gs,s=new Pt,r=new Pt,o=new xe,a=new oa({depthPacking:vh}),l=new aa,u={},c=e.maxTextureSize,d={[$n]:Fe,[Fe]:$n,[In]:In},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new Be;p.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ye(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let m=this.type;this.render=function(I,L,G){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(Jn),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let Q=m!==Cn&&this.type===Cn,lt=m===Cn&&this.type!==Cn;for(let dt=0,ht=I.length;dt<ht;dt++){let mt=I[dt],ct=mt.shadow;if(ct===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(ct.autoUpdate===!1&&ct.needsUpdate===!1)continue;s.copy(ct.mapSize);let _t=ct.getFrameExtents();if(s.multiply(_t),r.copy(ct.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/_t.x),s.x=r.x*_t.x,ct.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/_t.y),s.y=r.y*_t.y,ct.mapSize.y=r.y)),ct.map===null||Q===!0||lt===!0){let wt=this.type!==Cn?{minFilter:hn,magFilter:hn}:{};ct.map!==null&&ct.map.dispose(),ct.map=new Fn(s.x,s.y,wt),ct.map.texture.name=mt.name+".shadowMap",ct.camera.updateProjectionMatrix()}i.setRenderTarget(ct.map),i.clear();let vt=ct.getViewportCount();for(let wt=0;wt<vt;wt++){let Nt=ct.getViewport(wt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),tt.viewport(o),ct.updateMatrices(mt,wt),n=ct.getFrustum(),x(L,G,ct.camera,mt,this.type)}ct.isPointLightShadow!==!0&&this.type===Cn&&v(ct,G),ct.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,M,z)};function v(I,L){let G=t.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Fn(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,G,f,y,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,G,h,y,null)}function T(I,L,G,w){let M=null,z=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)M=z;else if(M=G.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let tt=M.uuid,Q=L.uuid,lt=u[tt];lt===void 0&&(lt={},u[tt]=lt);let dt=lt[Q];dt===void 0&&(dt=M.clone(),lt[Q]=dt,L.addEventListener("dispose",B)),M=dt}if(M.visible=L.visible,M.wireframe=L.wireframe,w===Cn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,G.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let tt=i.properties.get(M);tt.light=G}return M}function x(I,L,G,w,M){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===Cn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);let Q=t.update(I),lt=I.material;if(Array.isArray(lt)){let dt=Q.groups;for(let ht=0,mt=dt.length;ht<mt;ht++){let ct=dt[ht],_t=lt[ct.materialIndex];if(_t&&_t.visible){let vt=T(I,_t,w,M);I.onBeforeShadow(i,I,L,G,Q,vt,ct),i.renderBufferDirect(G,null,Q,vt,I,ct),I.onAfterShadow(i,I,L,G,Q,vt,ct)}}}else if(lt.visible){let dt=T(I,lt,w,M);I.onBeforeShadow(i,I,L,G,Q,dt,null),i.renderBufferDirect(G,null,Q,dt,I,null),I.onAfterShadow(i,I,L,G,Q,dt,null)}}let tt=I.children;for(let Q=0,lt=tt.length;Q<lt;Q++)x(tt[Q],L,G,w,M)}function B(I){I.target.removeEventListener("dispose",B);for(let G in u){let w=u[G],M=I.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var _m={[co]:lo,[ho]:po,[uo]:mo,[Hi]:fo,[lo]:co,[po]:ho,[mo]:uo,[fo]:Hi};function xm(i,t){function e(){let R=!1,K=new xe,O=null,$=new xe(0,0,0,0);return{setMask:function(nt){O!==nt&&!R&&(i.colorMask(nt,nt,nt,nt),O=nt)},setLocked:function(nt){R=nt},setClear:function(nt,ot,ft,Mt,Ct){Ct===!0&&(nt*=Mt,ot*=Mt,ft*=Mt),K.set(nt,ot,ft,Mt),$.equals(K)===!1&&(i.clearColor(nt,ot,ft,Mt),$.copy(K))},reset:function(){R=!1,O=null,$.set(-1,0,0,0)}}}function n(){let R=!1,K=!1,O=null,$=null,nt=null;return{setReversed:function(ot){if(K!==ot){let ft=t.get("EXT_clip_control");K?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);let Mt=nt;nt=null,this.setClear(Mt)}K=ot},getReversed:function(){return K},setTest:function(ot){ot?gt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ot){O!==ot&&!R&&(i.depthMask(ot),O=ot)},setFunc:function(ot){if(K&&(ot=_m[ot]),$!==ot){switch(ot){case co:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ot}},setLocked:function(ot){R=ot},setClear:function(ot){nt!==ot&&(K&&(ot=1-ot),i.clearDepth(ot),nt=ot)},reset:function(){R=!1,O=null,$=null,nt=null,K=!1}}}function s(){let R=!1,K=null,O=null,$=null,nt=null,ot=null,ft=null,Mt=null,Ct=null;return{setTest:function(Ut){R||(Ut?gt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Ut){K!==Ut&&!R&&(i.stencilMask(Ut),K=Ut)},setFunc:function(Ut,Yt,Et){(O!==Ut||$!==Yt||nt!==Et)&&(i.stencilFunc(Ut,Yt,Et),O=Ut,$=Yt,nt=Et)},setOp:function(Ut,Yt,Et){(ot!==Ut||ft!==Yt||Mt!==Et)&&(i.stencilOp(Ut,Yt,Et),ot=Ut,ft=Yt,Mt=Et)},setLocked:function(Ut){R=Ut},setClear:function(Ut){Ct!==Ut&&(i.clearStencil(Ut),Ct=Ut)},reset:function(){R=!1,K=null,O=null,$=null,nt=null,ot=null,ft=null,Mt=null,Ct=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,u=new WeakMap,c={},d={},f=new WeakMap,h=[],p=null,y=!1,g=null,m=null,v=null,T=null,x=null,B=null,I=null,L=new Vt(0,0,0),G=0,w=!1,M=null,z=null,tt=null,Q=null,lt=null,dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ht=!1,mt=0,ct=i.getParameter(i.VERSION);ct.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(ct)[1]),ht=mt>=1):ct.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),ht=mt>=2);let _t=null,vt={},wt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Wt=new xe().fromArray(wt),ut=new xe().fromArray(Nt);function pt(R,K,O,$){let nt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(R,ot),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<O;ft++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(K+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return ot}let bt={};bt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),o.setFunc(Hi),Xt(!1),zt(Ja),gt(i.CULL_FACE),q(Jn);function gt(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function Rt(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function Ot(R,K){return d[R]!==K?(i.bindFramebuffer(R,K),d[R]=K,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Bt(R,K){let O=h,$=!1;if(R){O=f.get(K),O===void 0&&(O=[],f.set(K,O));let nt=R.textures;if(O.length!==nt.length||O[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,ft=nt.length;ot<ft;ot++)O[ot]=i.COLOR_ATTACHMENT0+ot;O.length=nt.length,$=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,$=!0);$&&i.drawBuffers(O)}function Gt(R){return p!==R?(i.useProgram(R),p=R,!0):!1}let kt={[ci]:i.FUNC_ADD,[Yl]:i.FUNC_SUBTRACT,[ql]:i.FUNC_REVERSE_SUBTRACT};kt[Zl]=i.MIN,kt[Jl]=i.MAX;let jt={[$l]:i.ZERO,[Kl]:i.ONE,[jl]:i.SRC_COLOR,[oo]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[nh]:i.DST_COLOR,[th]:i.DST_ALPHA,[Ql]:i.ONE_MINUS_SRC_COLOR,[ao]:i.ONE_MINUS_SRC_ALPHA,[ih]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[ah]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function q(R,K,O,$,nt,ot,ft,Mt,Ct,Ut){if(R===Jn){y===!0&&(Rt(i.BLEND),y=!1);return}if(y===!1&&(gt(i.BLEND),y=!0),R!==Xl){if(R!==g||Ut!==w){if((m!==ci||x!==ci)&&(i.blendEquation(i.FUNC_ADD),m=ci,x=ci),Ut)switch(R){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}v=null,T=null,B=null,I=null,L.set(0,0,0),G=0,g=R,w=Ut}return}nt=nt||K,ot=ot||O,ft=ft||$,(K!==m||nt!==x)&&(i.blendEquationSeparate(kt[K],kt[nt]),m=K,x=nt),(O!==v||$!==T||ot!==B||ft!==I)&&(i.blendFuncSeparate(jt[O],jt[$],jt[ot],jt[ft]),v=O,T=$,B=ot,I=ft),(Mt.equals(L)===!1||Ct!==G)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Ct),L.copy(Mt),G=Ct),g=R,w=!1}function Se(R,K){R.side===In?Rt(i.CULL_FACE):gt(i.CULL_FACE);let O=R.side===Fe;K&&(O=!O),Xt(O),R.blending===zi&&R.transparent===!1?q(Jn):q(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let $=R.stencilWrite;a.setTest($),$&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Kt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(R){M!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),M=R)}function zt(R){R!==Gl?(gt(i.CULL_FACE),R!==z&&(R===Ja?i.cullFace(i.BACK):R===Hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),z=R}function Tt(R){R!==tt&&(ht&&i.lineWidth(R),tt=R)}function Kt(R,K,O){R?(gt(i.POLYGON_OFFSET_FILL),(Q!==K||lt!==O)&&(i.polygonOffset(K,O),Q=K,lt=O)):Rt(i.POLYGON_OFFSET_FILL)}function X(R){R?gt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function S(R){R===void 0&&(R=i.TEXTURE0+dt-1),_t!==R&&(i.activeTexture(R),_t=R)}function _(R,K,O){O===void 0&&(_t===null?O=i.TEXTURE0+dt-1:O=_t);let $=vt[O];$===void 0&&($={type:void 0,texture:void 0},vt[O]=$),($.type!==R||$.texture!==K)&&(_t!==O&&(i.activeTexture(O),_t=O),i.bindTexture(R,K||bt[R]),$.type=R,$.texture=K)}function Y(){let R=vt[_t];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function P(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function N(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function C(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function D(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function E(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function U(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(R){Wt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Wt.copy(R))}function F(R){ut.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ut.copy(R))}function j(R,K){let O=u.get(K);O===void 0&&(O=new WeakMap,u.set(K,O));let $=O.get(R);$===void 0&&($=i.getUniformBlockIndex(K,R.name),O.set(R,$))}function st(R,K){let $=u.get(K).get(R);l.get(K)!==$&&(i.uniformBlockBinding(K,$,R.__bindingPointIndex),l.set(K,$))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},_t=null,vt={},d={},f=new WeakMap,h=[],p=null,y=!1,g=null,m=null,v=null,T=null,x=null,B=null,I=null,L=new Vt(0,0,0),G=0,w=!1,M=null,z=null,tt=null,Q=null,lt=null,Wt.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Rt,bindFramebuffer:Ot,drawBuffers:Bt,useProgram:Gt,setBlending:q,setMaterial:Se,setFlipSided:Xt,setCullFace:zt,setLineWidth:Tt,setPolygonOffset:Kt,setScissorTest:X,activeTexture:S,bindTexture:_,unbindTexture:Y,compressedTexImage2D:it,compressedTexImage3D:P,texImage2D:U,texImage3D:W,updateUBOMapping:j,uniformBlockBinding:st,texStorage2D:E,texStorage3D:A,texSubImage2D:N,texSubImage3D:C,compressedTexSubImage2D:D,compressedTexSubImage3D:H,scissor:k,viewport:F,reset:et}}function Zc(i,t,e,n){let s=ym(n);switch(e){case rl:return i*t;case al:return i*t;case cl:return i*t*2;case ll:return i*t/s.components*s.byteLength;case Na:return i*t/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case Fa:return i*t*2/s.components*s.byteLength;case ol:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case Oa:return i*t*4/s.components*s.byteLength;case qs:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:case bo:return Math.max(i,16)*Math.max(t,8)/4;case vo:case So:return Math.max(i,8)*Math.max(t,8)/2;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ks:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ul:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ym(i){switch(i){case Nn:case nl:return{byteLength:1,components:1};case ps:case il:case xs:return{byteLength:2,components:1};case Da:case Ua:return{byteLength:2,components:4};case fi:case La:case Ln:return{byteLength:4,components:1};case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Pt,c=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(S,_){return h?new OffscreenCanvas(S,_):tr("canvas")}function y(S,_,Y){let it=1,P=X(S);if((P.width>Y||P.height>Y)&&(it=Y/Math.max(P.width,P.height)),it<1)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap||typeof VideoFrame!="undefined"&&S instanceof VideoFrame){let N=Math.floor(it*P.width),C=Math.floor(it*P.height);d===void 0&&(d=p(N,C));let D=_?p(N,C):d;return D.width=N,D.height=C,D.getContext("2d").drawImage(S,0,0,N,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+N+"x"+C+")."),D}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),S;return S}function g(S){return S.generateMipmaps}function m(S){i.generateMipmap(S)}function v(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,_,Y,it,P=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let N=_;if(_===i.RED&&(Y===i.FLOAT&&(N=i.R32F),Y===i.HALF_FLOAT&&(N=i.R16F),Y===i.UNSIGNED_BYTE&&(N=i.R8)),_===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(N=i.R8UI),Y===i.UNSIGNED_SHORT&&(N=i.R16UI),Y===i.UNSIGNED_INT&&(N=i.R32UI),Y===i.BYTE&&(N=i.R8I),Y===i.SHORT&&(N=i.R16I),Y===i.INT&&(N=i.R32I)),_===i.RG&&(Y===i.FLOAT&&(N=i.RG32F),Y===i.HALF_FLOAT&&(N=i.RG16F),Y===i.UNSIGNED_BYTE&&(N=i.RG8)),_===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(N=i.RG8UI),Y===i.UNSIGNED_SHORT&&(N=i.RG16UI),Y===i.UNSIGNED_INT&&(N=i.RG32UI),Y===i.BYTE&&(N=i.RG8I),Y===i.SHORT&&(N=i.RG16I),Y===i.INT&&(N=i.RG32I)),_===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(N=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(N=i.RGB16UI),Y===i.UNSIGNED_INT&&(N=i.RGB32UI),Y===i.BYTE&&(N=i.RGB8I),Y===i.SHORT&&(N=i.RGB16I),Y===i.INT&&(N=i.RGB32I)),_===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),Y===i.UNSIGNED_INT&&(N=i.RGBA32UI),Y===i.BYTE&&(N=i.RGBA8I),Y===i.SHORT&&(N=i.RGBA16I),Y===i.INT&&(N=i.RGBA32I)),_===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),_===i.RGBA){let C=P?yr:Qt.getTransfer(it);Y===i.FLOAT&&(N=i.RGBA32F),Y===i.HALF_FLOAT&&(N=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(N=C===ae?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function x(S,_){let Y;return S?_===null||_===fi||_===Yi?Y=i.DEPTH24_STENCIL8:_===Ln?Y=i.DEPTH32F_STENCIL8:_===ps&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===Yi?Y=i.DEPTH_COMPONENT24:_===Ln?Y=i.DEPTH_COMPONENT32F:_===ps&&(Y=i.DEPTH_COMPONENT16),Y}function B(S,_){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==hn&&S.minFilter!==gn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function I(S){let _=S.target;_.removeEventListener("dispose",I),G(_),_.isVideoTexture&&c.delete(_)}function L(S){let _=S.target;_.removeEventListener("dispose",L),M(_)}function G(S){let _=n.get(S);if(_.__webglInit===void 0)return;let Y=S.source,it=f.get(Y);if(it){let P=it[_.__cacheKey];P.usedTimes--,P.usedTimes===0&&w(S),Object.keys(it).length===0&&f.delete(Y)}n.remove(S)}function w(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let Y=S.source,it=f.get(Y);delete it[_.__cacheKey],o.memory.textures--}function M(S){let _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(_.__webglFramebuffer[it]))for(let P=0;P<_.__webglFramebuffer[it].length;P++)i.deleteFramebuffer(_.__webglFramebuffer[it][P]);else i.deleteFramebuffer(_.__webglFramebuffer[it]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[it])}else{if(Array.isArray(_.__webglFramebuffer))for(let it=0;it<_.__webglFramebuffer.length;it++)i.deleteFramebuffer(_.__webglFramebuffer[it]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let it=0;it<_.__webglColorRenderbuffer.length;it++)_.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[it]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let Y=S.textures;for(let it=0,P=Y.length;it<P;it++){let N=n.get(Y[it]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(Y[it])}n.remove(S)}let z=0;function tt(){z=0}function Q(){let S=z;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),z+=1,S}function lt(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function dt(S,_){let Y=n.get(S);if(S.isVideoTexture&&Tt(S),S.isRenderTargetTexture===!1&&S.version>0&&Y.__version!==S.version){let it=S.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Y,S,_);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+_)}function ht(S,_){let Y=n.get(S);if(S.version>0&&Y.__version!==S.version){ut(Y,S,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+_)}function mt(S,_){let Y=n.get(S);if(S.version>0&&Y.__version!==S.version){ut(Y,S,_);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+_)}function ct(S,_){let Y=n.get(S);if(S.version>0&&Y.__version!==S.version){pt(Y,S,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+_)}let _t={[xo]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},vt={[hn]:i.NEAREST,[xh]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},wt={[Sh]:i.NEVER,[Rh]:i.ALWAYS,[bh]:i.LESS,[fl]:i.LEQUAL,[wh]:i.EQUAL,[Eh]:i.GEQUAL,[Ah]:i.GREATER,[Th]:i.NOTEQUAL};function Nt(S,_){if(_.type===Ln&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===gn||_.magFilter===Tr||_.magFilter===ws||_.magFilter===di||_.minFilter===gn||_.minFilter===Tr||_.minFilter===ws||_.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,_t[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,_t[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,_t[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,vt[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,vt[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,wt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==ws&&_.minFilter!==di||_.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Wt(S,_){let Y=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",I));let it=_.source,P=f.get(it);P===void 0&&(P={},f.set(it,P));let N=lt(_);if(N!==S.__cacheKey){P[N]===void 0&&(P[N]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),P[N].usedTimes++;let C=P[S.__cacheKey];C!==void 0&&(P[S.__cacheKey].usedTimes--,C.usedTimes===0&&w(_)),S.__cacheKey=N,S.__webglTexture=P[N].texture}return Y}function ut(S,_,Y){let it=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(it=i.TEXTURE_3D);let P=Wt(S,_),N=_.source;e.bindTexture(it,S.__webglTexture,i.TEXTURE0+Y);let C=n.get(N);if(N.version!==C.__version||P===!0){e.activeTexture(i.TEXTURE0+Y);let D=Qt.getPrimaries(Qt.workingColorSpace),H=_.colorSpace===qn?null:Qt.getPrimaries(_.colorSpace),E=_.colorSpace===qn||D===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,E);let A=y(_.image,!1,s.maxTextureSize);A=Kt(_,A);let U=r.convert(_.format,_.colorSpace),W=r.convert(_.type),k=T(_.internalFormat,U,W,_.colorSpace,_.isVideoTexture);Nt(it,_);let F,j=_.mipmaps,st=_.isVideoTexture!==!0,et=C.__version===void 0||P===!0,R=N.dataReady,K=B(_,A);if(_.isDepthTexture)k=x(_.format===qi,_.type),et&&(st?e.texStorage2D(i.TEXTURE_2D,1,k,A.width,A.height):e.texImage2D(i.TEXTURE_2D,0,k,A.width,A.height,0,U,W,null));else if(_.isDataTexture)if(j.length>0){st&&et&&e.texStorage2D(i.TEXTURE_2D,K,k,j[0].width,j[0].height);for(let O=0,$=j.length;O<$;O++)F=j[O],st?R&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,F.width,F.height,U,W,F.data):e.texImage2D(i.TEXTURE_2D,O,k,F.width,F.height,0,U,W,F.data);_.generateMipmaps=!1}else st?(et&&e.texStorage2D(i.TEXTURE_2D,K,k,A.width,A.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,U,W,A.data)):e.texImage2D(i.TEXTURE_2D,0,k,A.width,A.height,0,U,W,A.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){st&&et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,k,j[0].width,j[0].height,A.depth);for(let O=0,$=j.length;O<$;O++)if(F=j[O],_.format!==ln)if(U!==null)if(st){if(R)if(_.layerUpdates.size>0){let nt=Zc(F.width,F.height,_.format,_.type);for(let ot of _.layerUpdates){let ft=F.data.subarray(ot*nt/F.data.BYTES_PER_ELEMENT,(ot+1)*nt/F.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,ot,F.width,F.height,1,U,ft)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,F.width,F.height,A.depth,U,F.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,k,F.width,F.height,A.depth,0,F.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,F.width,F.height,A.depth,U,W,F.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,k,F.width,F.height,A.depth,0,U,W,F.data)}else{st&&et&&e.texStorage2D(i.TEXTURE_2D,K,k,j[0].width,j[0].height);for(let O=0,$=j.length;O<$;O++)F=j[O],_.format!==ln?U!==null?st?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,F.width,F.height,U,F.data):e.compressedTexImage2D(i.TEXTURE_2D,O,k,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?R&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,F.width,F.height,U,W,F.data):e.texImage2D(i.TEXTURE_2D,O,k,F.width,F.height,0,U,W,F.data)}else if(_.isDataArrayTexture)if(st){if(et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,k,A.width,A.height,A.depth),R)if(_.layerUpdates.size>0){let O=Zc(A.width,A.height,_.format,_.type);for(let $ of _.layerUpdates){let nt=A.data.subarray($*O/A.data.BYTES_PER_ELEMENT,($+1)*O/A.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,A.width,A.height,1,U,W,nt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,U,W,A.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,k,A.width,A.height,A.depth,0,U,W,A.data);else if(_.isData3DTexture)st?(et&&e.texStorage3D(i.TEXTURE_3D,K,k,A.width,A.height,A.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,U,W,A.data)):e.texImage3D(i.TEXTURE_3D,0,k,A.width,A.height,A.depth,0,U,W,A.data);else if(_.isFramebufferTexture){if(et)if(st)e.texStorage2D(i.TEXTURE_2D,K,k,A.width,A.height);else{let O=A.width,$=A.height;for(let nt=0;nt<K;nt++)e.texImage2D(i.TEXTURE_2D,nt,k,O,$,0,U,W,null),O>>=1,$>>=1}}else if(j.length>0){if(st&&et){let O=X(j[0]);e.texStorage2D(i.TEXTURE_2D,K,k,O.width,O.height)}for(let O=0,$=j.length;O<$;O++)F=j[O],st?R&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,U,W,F):e.texImage2D(i.TEXTURE_2D,O,k,U,W,F);_.generateMipmaps=!1}else if(st){if(et){let O=X(A);e.texStorage2D(i.TEXTURE_2D,K,k,O.width,O.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,U,W,A)}else e.texImage2D(i.TEXTURE_2D,0,k,U,W,A);g(_)&&m(it),C.__version=N.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function pt(S,_,Y){if(_.image.length!==6)return;let it=Wt(S,_),P=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+Y);let N=n.get(P);if(P.version!==N.__version||it===!0){e.activeTexture(i.TEXTURE0+Y);let C=Qt.getPrimaries(Qt.workingColorSpace),D=_.colorSpace===qn?null:Qt.getPrimaries(_.colorSpace),H=_.colorSpace===qn||C===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let E=_.isCompressedTexture||_.image[0].isCompressedTexture,A=_.image[0]&&_.image[0].isDataTexture,U=[];for(let $=0;$<6;$++)!E&&!A?U[$]=y(_.image[$],!0,s.maxCubemapSize):U[$]=A?_.image[$].image:_.image[$],U[$]=Kt(_,U[$]);let W=U[0],k=r.convert(_.format,_.colorSpace),F=r.convert(_.type),j=T(_.internalFormat,k,F,_.colorSpace),st=_.isVideoTexture!==!0,et=N.__version===void 0||it===!0,R=P.dataReady,K=B(_,W);Nt(i.TEXTURE_CUBE_MAP,_);let O;if(E){st&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,K,j,W.width,W.height);for(let $=0;$<6;$++){O=U[$].mipmaps;for(let nt=0;nt<O.length;nt++){let ot=O[nt];_.format!==ln?k!==null?st?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt,0,0,ot.width,ot.height,k,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt,j,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt,0,0,ot.width,ot.height,k,F,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt,j,ot.width,ot.height,0,k,F,ot.data)}}}else{if(O=_.mipmaps,st&&et){O.length>0&&K++;let $=X(U[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,K,j,$.width,$.height)}for(let $=0;$<6;$++)if(A){st?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,U[$].width,U[$].height,k,F,U[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,j,U[$].width,U[$].height,0,k,F,U[$].data);for(let nt=0;nt<O.length;nt++){let ft=O[nt].image[$].image;st?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt+1,0,0,ft.width,ft.height,k,F,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt+1,j,ft.width,ft.height,0,k,F,ft.data)}}else{st?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,k,F,U[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,j,k,F,U[$]);for(let nt=0;nt<O.length;nt++){let ot=O[nt];st?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt+1,0,0,k,F,ot.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt+1,j,k,F,ot.image[$])}}}g(_)&&m(i.TEXTURE_CUBE_MAP),N.__version=P.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function bt(S,_,Y,it,P,N){let C=r.convert(Y.format,Y.colorSpace),D=r.convert(Y.type),H=T(Y.internalFormat,C,D,Y.colorSpace),E=n.get(_),A=n.get(Y);if(A.__renderTarget=_,!E.__hasExternalTextures){let U=Math.max(1,_.width>>N),W=Math.max(1,_.height>>N);P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?e.texImage3D(P,N,H,U,W,_.depth,0,C,D,null):e.texImage2D(P,N,H,U,W,0,C,D,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),zt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,P,A.__webglTexture,0,Xt(_)):(P===i.TEXTURE_2D||P>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,P,A.__webglTexture,N),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(S,_,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){let it=_.depthTexture,P=it&&it.isDepthTexture?it.type:null,N=x(_.stencilBuffer,P),C=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=Xt(_);zt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D,N,_.width,_.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,D,N,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,N,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,S)}else{let it=_.textures;for(let P=0;P<it.length;P++){let N=it[P],C=r.convert(N.format,N.colorSpace),D=r.convert(N.type),H=T(N.internalFormat,C,D,N.colorSpace),E=Xt(_);Y&&zt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,E,H,_.width,_.height):zt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E,H,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,H,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(_.depthTexture);it.__renderTarget=_,(!it.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),dt(_.depthTexture,0);let P=it.__webglTexture,N=Xt(_);if(_.depthTexture.format===ki)zt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,P,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,P,0);else if(_.depthTexture.format===qi)zt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,P,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,P,0);else throw new Error("Unknown depthTexture format")}function Ot(S){let _=n.get(S),Y=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let it=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),it){let P=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,it.removeEventListener("dispose",P)};it.addEventListener("dispose",P),_.__depthDisposeCallback=P}_.__boundDepthTexture=it}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Rt(_.__webglFramebuffer,S)}else if(Y){_.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[it]),_.__webglDepthbuffer[it]===void 0)_.__webglDepthbuffer[it]=i.createRenderbuffer(),gt(_.__webglDepthbuffer[it],S,!1);else{let P=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=_.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,N)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),gt(_.__webglDepthbuffer,S,!1);else{let it=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,P)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(S,_,Y){let it=n.get(S);_!==void 0&&bt(it.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ot(S)}function Gt(S){let _=S.texture,Y=n.get(S),it=n.get(_);S.addEventListener("dispose",L);let P=S.textures,N=S.isWebGLCubeRenderTarget===!0,C=P.length>1;if(C||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=_.version,o.memory.textures++),N){Y.__webglFramebuffer=[];for(let D=0;D<6;D++)if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer[D]=[];for(let H=0;H<_.mipmaps.length;H++)Y.__webglFramebuffer[D][H]=i.createFramebuffer()}else Y.__webglFramebuffer[D]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer=[];for(let D=0;D<_.mipmaps.length;D++)Y.__webglFramebuffer[D]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(C)for(let D=0,H=P.length;D<H;D++){let E=n.get(P[D]);E.__webglTexture===void 0&&(E.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&zt(S)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let D=0;D<P.length;D++){let H=P[D];Y.__webglColorRenderbuffer[D]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[D]);let E=r.convert(H.format,H.colorSpace),A=r.convert(H.type),U=T(H.internalFormat,E,A,H.colorSpace,S.isXRRenderTarget===!0),W=Xt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,U,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,Y.__webglColorRenderbuffer[D])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(Y.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,_);for(let D=0;D<6;D++)if(_.mipmaps&&_.mipmaps.length>0)for(let H=0;H<_.mipmaps.length;H++)bt(Y.__webglFramebuffer[D][H],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H);else bt(Y.__webglFramebuffer[D],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);g(_)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(C){for(let D=0,H=P.length;D<H;D++){let E=P[D],A=n.get(E);e.bindTexture(i.TEXTURE_2D,A.__webglTexture),Nt(i.TEXTURE_2D,E),bt(Y.__webglFramebuffer,S,E,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,0),g(E)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let D=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(D=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(D,it.__webglTexture),Nt(D,_),_.mipmaps&&_.mipmaps.length>0)for(let H=0;H<_.mipmaps.length;H++)bt(Y.__webglFramebuffer[H],S,_,i.COLOR_ATTACHMENT0,D,H);else bt(Y.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,D,0);g(_)&&m(D),e.unbindTexture()}S.depthBuffer&&Ot(S)}function kt(S){let _=S.textures;for(let Y=0,it=_.length;Y<it;Y++){let P=_[Y];if(g(P)){let N=v(S),C=n.get(P).__webglTexture;e.bindTexture(N,C),m(N),e.unbindTexture()}}}let jt=[],q=[];function Se(S){if(S.samples>0){if(zt(S)===!1){let _=S.textures,Y=S.width,it=S.height,P=i.COLOR_BUFFER_BIT,N=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=n.get(S),D=_.length>1;if(D)for(let H=0;H<_.length;H++)e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,C.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglFramebuffer);for(let H=0;H<_.length;H++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(P|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(P|=i.STENCIL_BUFFER_BIT)),D){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,C.__webglColorRenderbuffer[H]);let E=n.get(_[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,E,0)}i.blitFramebuffer(0,0,Y,it,0,0,Y,it,P,i.NEAREST),l===!0&&(jt.length=0,q.length=0,jt.push(i.COLOR_ATTACHMENT0+H),S.depthBuffer&&S.resolveDepthBuffer===!1&&(jt.push(N),q.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),D)for(let H=0;H<_.length;H++){e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,C.__webglColorRenderbuffer[H]);let E=n.get(_[H]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,E,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Xt(S){return Math.min(s.maxSamples,S.samples)}function zt(S){let _=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Tt(S){let _=o.render.frame;c.get(S)!==_&&(c.set(S,_),S.update())}function Kt(S,_){let Y=S.colorSpace,it=S.format,P=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||Y!==$i&&Y!==qn&&(Qt.getTransfer(Y)===ae?(it!==ln||P!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),_}function X(S){return typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame!="undefined"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=tt,this.setTexture2D=dt,this.setTexture2DArray=ht,this.setTexture3D=mt,this.setTextureCube=ct,this.rebindTextures=Bt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=zt}function Mm(i,t){function e(n,s=qn){let r,o=Qt.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nl)return i.BYTE;if(n===il)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===La)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===xs)return i.HALF_FLOAT;if(n===rl)return i.ALPHA;if(n===ol)return i.RGB;if(n===ln)return i.RGBA;if(n===al)return i.LUMINANCE;if(n===cl)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===hl)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===qs||n===Zs||n===Js||n===$s)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===So||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Ao||n===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Ao)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eo||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===Vo||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ks)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===Ho||n===Wo||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ca=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zn=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sm={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(u,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,p=.005;u.inputState.pinching&&f>h+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=h-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wm=`
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

}`,la=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _n({vertexShader:bm,fragmentShader:wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ha=class extends Kn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,p=null,y=new la,g=e.getContextAttributes(),m=null,v=null,T=[],x=[],B=new Pt,I=null,L=new we;L.viewport=new xe;let G=new we;G.viewport=new xe;let w=[L,G],M=new ca,z=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let pt=T[ut];return pt===void 0&&(pt=new us,T[ut]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(ut){let pt=T[ut];return pt===void 0&&(pt=new us,T[ut]=pt),pt.getGripSpace()},this.getHand=function(ut){let pt=T[ut];return pt===void 0&&(pt=new us,T[ut]=pt),pt.getHandSpace()};function Q(ut){let pt=x.indexOf(ut.inputSource);if(pt===-1)return;let bt=T[pt];bt!==void 0&&(bt.update(ut.inputSource,ut.frame,u||o),bt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function lt(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",dt);for(let ut=0;ut<T.length;ut++){let pt=x[ut];pt!==null&&(x[ut]=null,T[ut].disconnect(pt))}z=null,tt=null,y.reset(),t.setRenderTarget(m),h=null,f=null,d=null,s=null,v=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){r=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){a=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ut){u=ut},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",dt),g.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Fn(h.framebufferWidth,h.framebufferHeight,{format:ln,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let pt=null,bt=null,gt=null;g.depth&&(gt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=g.stencil?qi:ki,bt=g.stencil?Yi:fi);let Rt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Fn(f.textureWidth,f.textureHeight,{format:ln,type:Nn,depthTexture:new ur(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function dt(ut){for(let pt=0;pt<ut.removed.length;pt++){let bt=ut.removed[pt],gt=x.indexOf(bt);gt>=0&&(x[gt]=null,T[gt].disconnect(bt))}for(let pt=0;pt<ut.added.length;pt++){let bt=ut.added[pt],gt=x.indexOf(bt);if(gt===-1){for(let Ot=0;Ot<T.length;Ot++)if(Ot>=x.length){x.push(bt),gt=Ot;break}else if(x[Ot]===null){x[Ot]=bt,gt=Ot;break}if(gt===-1)break}let Rt=T[gt];Rt&&Rt.connect(bt)}}let ht=new V,mt=new V;function ct(ut,pt,bt){ht.setFromMatrixPosition(pt.matrixWorld),mt.setFromMatrixPosition(bt.matrixWorld);let gt=ht.distanceTo(mt),Rt=pt.projectionMatrix.elements,Ot=bt.projectionMatrix.elements,Bt=Rt[14]/(Rt[10]-1),Gt=Rt[14]/(Rt[10]+1),kt=(Rt[9]+1)/Rt[5],jt=(Rt[9]-1)/Rt[5],q=(Rt[8]-1)/Rt[0],Se=(Ot[8]+1)/Ot[0],Xt=Bt*q,zt=Bt*Se,Tt=gt/(-q+Se),Kt=Tt*-q;if(pt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(Kt),ut.translateZ(Tt),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),Rt[10]===-1)ut.projectionMatrix.copy(pt.projectionMatrix),ut.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let X=Bt+Tt,S=Gt+Tt,_=Xt-Kt,Y=zt+(gt-Kt),it=kt*Gt/S*X,P=jt*Gt/S*X;ut.projectionMatrix.makePerspective(_,Y,it,P,X,S),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function _t(ut,pt){pt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(pt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let pt=ut.near,bt=ut.far;y.texture!==null&&(y.depthNear>0&&(pt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),M.near=G.near=L.near=pt,M.far=G.far=L.far=bt,(z!==M.near||tt!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),z=M.near,tt=M.far),L.layers.mask=ut.layers.mask|2,G.layers.mask=ut.layers.mask|4,M.layers.mask=L.layers.mask|G.layers.mask;let gt=ut.parent,Rt=M.cameras;_t(M,gt);for(let Ot=0;Ot<Rt.length;Ot++)_t(Rt[Ot],gt);Rt.length===2?ct(M,L,G):M.projectionMatrix.copy(L.projectionMatrix),vt(ut,M,gt)};function vt(ut,pt,bt){bt===null?ut.matrix.copy(pt.matrixWorld):(ut.matrix.copy(bt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(pt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(pt.projectionMatrix),ut.projectionMatrixInverse.copy(pt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=qo*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ut){l=ut,f!==null&&(f.fixedFoveation=ut),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ut)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let wt=null;function Nt(ut,pt){if(c=pt.getViewerPose(u||o),p=pt,c!==null){let bt=c.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let gt=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,gt=!0);for(let Ot=0;Ot<bt.length;Ot++){let Bt=bt[Ot],Gt=null;if(h!==null)Gt=h.getViewport(Bt);else{let jt=d.getViewSubImage(f,Bt);Gt=jt.viewport,Ot===0&&(t.setRenderTargetTextures(v,jt.colorTexture,f.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(v))}let kt=w[Ot];kt===void 0&&(kt=new we,kt.layers.enable(Ot),kt.viewport=new xe,w[Ot]=kt),kt.matrix.fromArray(Bt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Bt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Ot===0&&(M.matrix.copy(kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),gt===!0&&M.cameras.push(kt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Ot=d.getDepthInformation(bt[0]);Ot&&Ot.isValid&&Ot.texture&&y.init(t,Ot,s.renderState)}}for(let bt=0;bt<T.length;bt++){let gt=x[bt],Rt=T[bt];gt!==null&&Rt!==void 0&&Rt.update(gt,pt,u||o)}wt&&wt(ut,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),p=null}let Wt=new _l;Wt.setAnimationLoop(Nt),this.setAnimationLoop=function(ut){wt=ut},this.dispose=function(){}}},oi=new qe,Am=new ve;function Tm(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,gl(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,T,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),c(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,T):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Fe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Fe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),T=v.envMap,x=v.envMapRotation;T&&(g.envMap.value=T,oi.copy(x),oi.x*=-1,oi.y*=-1,oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),g.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(oi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Em(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let x=T.program;n.uniformBlockBinding(v,x)}function u(v,T){let x=s[v.id];x===void 0&&(p(v),x=c(v),s[v.id]=x,v.addEventListener("dispose",g));let B=T.program;n.updateUBOMapping(v,B);let I=t.render.frame;r[v.id]!==I&&(f(v),r[v.id]=I)}function c(v){let T=d();v.__bindingPointIndex=T;let x=i.createBuffer(),B=v.__size,I=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,B,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let T=s[v.id],x=v.uniforms,B=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let I=0,L=x.length;I<L;I++){let G=Array.isArray(x[I])?x[I]:[x[I]];for(let w=0,M=G.length;w<M;w++){let z=G[w];if(h(z,I,w,B)===!0){let tt=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value],lt=0;for(let dt=0;dt<Q.length;dt++){let ht=Q[dt],mt=y(ht);typeof ht=="number"||typeof ht=="boolean"?(z.__data[0]=ht,i.bufferSubData(i.UNIFORM_BUFFER,tt+lt,z.__data)):ht.isMatrix3?(z.__data[0]=ht.elements[0],z.__data[1]=ht.elements[1],z.__data[2]=ht.elements[2],z.__data[3]=0,z.__data[4]=ht.elements[3],z.__data[5]=ht.elements[4],z.__data[6]=ht.elements[5],z.__data[7]=0,z.__data[8]=ht.elements[6],z.__data[9]=ht.elements[7],z.__data[10]=ht.elements[8],z.__data[11]=0):(ht.toArray(z.__data,lt),lt+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,T,x,B){let I=v.value,L=T+"_"+x;if(B[L]===void 0)return typeof I=="number"||typeof I=="boolean"?B[L]=I:B[L]=I.clone(),!0;{let G=B[L];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return B[L]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function p(v){let T=v.uniforms,x=0,B=16;for(let L=0,G=T.length;L<G;L++){let w=Array.isArray(T[L])?T[L]:[T[L]];for(let M=0,z=w.length;M<z;M++){let tt=w[M],Q=Array.isArray(tt.value)?tt.value:[tt.value];for(let lt=0,dt=Q.length;lt<dt;lt++){let ht=Q[lt],mt=y(ht),ct=x%B,_t=ct%mt.boundary,vt=ct+_t;x+=_t,vt!==0&&B-vt<mt.storage&&(x+=B-vt),tt.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=x,x+=mt.storage}}}let I=x%B;return I>0&&(x+=B-I),v.__size=x,v.__cache={},this}function y(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),T}function g(v){let T=v.target;T.removeEventListener("dispose",g);let x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:u,dispose:m}}var xn=class{constructor(t={}){let{canvas:e=Ph(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,v=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=le,this.toneMapping=Oe,this.toneMappingExposure=1;let x=this,B=!1,I=0,L=0,G=null,w=-1,M=null,z=new xe,tt=new xe,Q=null,lt=new Vt(0),dt=0,ht=e.width,mt=e.height,ct=1,_t=null,vt=null,wt=new xe(0,0,ht,mt),Nt=new xe(0,0,ht,mt),Wt=!1,ut=new gs,pt=!1,bt=!1,gt=new ve,Rt=new ve,Ot=new V,Bt=new xe,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function jt(){return G===null?ct:1}let q=n;function Se(b,Z){return e.getContext(b,Z)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ia}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),q===null){let Z="webgl2";if(q=Se(Z,b),q===null)throw Se(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Xt,zt,Tt,Kt,X,S,_,Y,it,P,N,C,D,H,E,A,U,W,k,F,j,st,et,R;function K(){Xt=new Hf(q),Xt.init(),st=new Mm(q,Xt),zt=new Of(q,Xt,t,st),Tt=new xm(q,Xt),zt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),Kt=new Yf(q),X=new rm,S=new vm(q,Xt,Tt,X,zt,st,Kt),_=new zf(x),Y=new Gf(x),it=new jh(q),et=new Nf(q,it),P=new Wf(q,it,Kt,et),N=new Zf(q,P,it,Kt),k=new qf(q,zt,S),A=new Bf(X),C=new sm(x,_,Y,Xt,zt,et,A),D=new Tm(x,X),H=new am,E=new fm(Xt),W=new Uf(x,_,Y,Tt,N,h,l),U=new gm(x,N,zt),R=new Em(q,Kt,zt,Tt),F=new Ff(q,Xt,Kt),j=new Xf(q,Xt,Kt),Kt.programs=C.programs,x.capabilities=zt,x.extensions=Xt,x.properties=X,x.renderLists=H,x.shadowMap=U,x.state=Tt,x.info=Kt}K();let O=new ha(x,q);this.xr=O,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let b=Xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(b){b!==void 0&&(ct=b,this.setSize(ht,mt,!1))},this.getSize=function(b){return b.set(ht,mt)},this.setSize=function(b,Z,rt=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=b,mt=Z,e.width=Math.floor(b*ct),e.height=Math.floor(Z*ct),rt===!0&&(e.style.width=b+"px",e.style.height=Z+"px"),this.setViewport(0,0,b,Z)},this.getDrawingBufferSize=function(b){return b.set(ht*ct,mt*ct).floor()},this.setDrawingBufferSize=function(b,Z,rt){ht=b,mt=Z,ct=rt,e.width=Math.floor(b*rt),e.height=Math.floor(Z*rt),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,Z,rt,at){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,Z,rt,at),Tt.viewport(z.copy(wt).multiplyScalar(ct).round())},this.getScissor=function(b){return b.copy(Nt)},this.setScissor=function(b,Z,rt,at){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,Z,rt,at),Tt.scissor(tt.copy(Nt).multiplyScalar(ct).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(b){Tt.setScissorTest(Wt=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(b=!0,Z=!0,rt=!0){let at=0;if(b){let J=!1;if(G!==null){let xt=G.texture.format;J=xt===Oa||xt===Fa||xt===Na}if(J){let xt=G.texture.type,At=xt===Nn||xt===fi||xt===ps||xt===Yi||xt===Da||xt===Ua,It=W.getClearColor(),Lt=W.getClearAlpha(),Ht=It.r,qt=It.g,Dt=It.b;At?(p[0]=Ht,p[1]=qt,p[2]=Dt,p[3]=Lt,q.clearBufferuiv(q.COLOR,0,p)):(y[0]=Ht,y[1]=qt,y[2]=Dt,y[3]=Lt,q.clearBufferiv(q.COLOR,0,y))}else at|=q.COLOR_BUFFER_BIT}Z&&(at|=q.DEPTH_BUFFER_BIT),rt&&(at|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),H.dispose(),E.dispose(),X.dispose(),_.dispose(),Y.dispose(),N.dispose(),et.dispose(),R.dispose(),C.dispose(),O.dispose(),O.removeEventListener("sessionstart",re),O.removeEventListener("sessionend",ce),ue.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let b=Kt.autoReset,Z=U.enabled,rt=U.autoUpdate,at=U.needsUpdate,J=U.type;K(),Kt.autoReset=b,U.enabled=Z,U.autoUpdate=rt,U.needsUpdate=at,U.type=J}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ft(b){let Z=b.target;Z.removeEventListener("dispose",ft),Mt(Z)}function Mt(b){Ct(b),X.remove(b)}function Ct(b){let Z=X.get(b).programs;Z!==void 0&&(Z.forEach(function(rt){C.releaseProgram(rt)}),b.isShaderMaterial&&C.releaseShaderCache(b))}this.renderBufferDirect=function(b,Z,rt,at,J,xt){Z===null&&(Z=Gt);let At=J.isMesh&&J.matrixWorld.determinant()<0,It=Si(b,Z,rt,at,J);Tt.setMaterial(at,At);let Lt=rt.index,Ht=1;if(at.wireframe===!0){if(Lt=P.getWireframeAttribute(rt),Lt===void 0)return;Ht=2}let qt=rt.drawRange,Dt=rt.attributes.position,ee=qt.start*Ht,de=(qt.start+qt.count)*Ht;xt!==null&&(ee=Math.max(ee,xt.start*Ht),de=Math.min(de,(xt.start+xt.count)*Ht)),Lt!==null?(ee=Math.max(ee,0),de=Math.min(de,Lt.count)):Dt!=null&&(ee=Math.max(ee,0),de=Math.min(de,Dt.count));let pe=de-ee;if(pe<0||pe===1/0)return;et.setup(J,at,It,rt,Lt);let Ve,ie=F;if(Lt!==null&&(Ve=it.get(Lt),ie=j,ie.setIndex(Ve)),J.isMesh)at.wireframe===!0?(Tt.setLineWidth(at.wireframeLinewidth*jt()),ie.setMode(q.LINES)):ie.setMode(q.TRIANGLES);else if(J.isLine){let Ft=at.linewidth;Ft===void 0&&(Ft=1),Tt.setLineWidth(Ft*jt()),J.isLineSegments?ie.setMode(q.LINES):J.isLineLoop?ie.setMode(q.LINE_LOOP):ie.setMode(q.LINE_STRIP)}else J.isPoints?ie.setMode(q.POINTS):J.isSprite&&ie.setMode(q.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ie.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ie.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Ft=J._multiDrawStarts,bn=J._multiDrawCounts,se=J._multiDrawCount,rn=Lt?it.get(Lt).bytesPerElement:1,bi=X.get(at).currentProgram.getUniforms();for(let We=0;We<se;We++)bi.setValue(q,"_gl_DrawID",We),ie.render(Ft[We]/rn,bn[We])}else if(J.isInstancedMesh)ie.renderInstances(ee,pe,J.count);else if(rt.isInstancedBufferGeometry){let Ft=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,bn=Math.min(rt.instanceCount,Ft);ie.renderInstances(ee,pe,bn)}else ie.render(ee,pe)};function Ut(b,Z,rt){b.transparent===!0&&b.side===In&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,Pe(b,Z,rt),b.side=$n,b.needsUpdate=!0,Pe(b,Z,rt),b.side=In):Pe(b,Z,rt)}this.compile=function(b,Z,rt=null){rt===null&&(rt=b),m=E.get(rt),m.init(Z),T.push(m),rt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),b!==rt&&b.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights();let at=new Set;return b.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let xt=J.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){let It=xt[At];Ut(It,rt,J),at.add(It)}else Ut(xt,rt,J),at.add(xt)}),T.pop(),m=null,at},this.compileAsync=function(b,Z,rt=null){let at=this.compile(b,Z,rt);return new Promise(J=>{function xt(){if(at.forEach(function(At){X.get(At).currentProgram.isReady()&&at.delete(At)}),at.size===0){J(b);return}setTimeout(xt,10)}Xt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Yt=null;function Et(b){Yt&&Yt(b)}function re(){ue.stop()}function ce(){ue.start()}let ue=new _l;ue.setAnimationLoop(Et),typeof self!="undefined"&&ue.setContext(self),this.setAnimationLoop=function(b){Yt=b,O.setAnimationLoop(b),b===null?ue.stop():ue.start()},O.addEventListener("sessionstart",re),O.addEventListener("sessionend",ce),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(Z),Z=O.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,Z,G),m=E.get(b,T.length),m.init(Z),T.push(m),Rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ut.setFromProjectionMatrix(Rt),bt=this.localClippingEnabled,pt=A.init(this.clippingPlanes,bt),g=H.get(b,v.length),g.init(),v.push(g),O.enabled===!0&&O.isPresenting===!0){let xt=x.xr.getDepthSensingMesh();xt!==null&&ne(xt,Z,-1/0,x.sortObjects)}ne(b,Z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(_t,vt),kt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,kt&&W.addToRenderList(g,b),this.info.render.frame++,pt===!0&&A.beginShadows();let rt=m.state.shadowsArray;U.render(rt,b,Z),pt===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset();let at=g.opaque,J=g.transmissive;if(m.setupLights(),Z.isArrayCamera){let xt=Z.cameras;if(J.length>0)for(let At=0,It=xt.length;At<It;At++){let Lt=xt[At];be(at,J,b,Lt)}kt&&W.render(b);for(let At=0,It=xt.length;At<It;At++){let Lt=xt[At];te(g,b,Lt,Lt.viewport)}}else J.length>0&&be(at,J,b,Z),kt&&W.render(b),te(g,b,Z);G!==null&&(S.updateMultisampleRenderTarget(G),S.updateRenderTargetMipmap(G)),b.isScene===!0&&b.onAfterRender(x,b,Z),et.resetDefaultState(),w=-1,M=null,T.pop(),T.length>0?(m=T[T.length-1],pt===!0&&A.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ne(b,Z,rt,at){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ut.intersectsSprite(b)){at&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);let At=N.update(b),It=b.material;It.visible&&g.push(b,At,It,rt,Bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ut.intersectsObject(b))){let At=N.update(b),It=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Bt.copy(At.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(It)){let Lt=At.groups;for(let Ht=0,qt=Lt.length;Ht<qt;Ht++){let Dt=Lt[Ht],ee=It[Dt.materialIndex];ee&&ee.visible&&g.push(b,At,ee,rt,Bt.z,Dt)}}else It.visible&&g.push(b,At,It,rt,Bt.z,null)}}let xt=b.children;for(let At=0,It=xt.length;At<It;At++)ne(xt[At],Z,rt,at)}function te(b,Z,rt,at){let J=b.opaque,xt=b.transmissive,At=b.transparent;m.setupLightsView(rt),pt===!0&&A.setGlobalState(x.clippingPlanes,rt),at&&Tt.viewport(z.copy(at)),J.length>0&&fn(J,Z,rt),xt.length>0&&fn(xt,Z,rt),At.length>0&&fn(At,Z,rt),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function be(b,Z,rt,at){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[at.id]===void 0&&(m.state.transmissionRenderTarget[at.id]=new Fn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?xs:Nn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let xt=m.state.transmissionRenderTarget[at.id],At=at.viewport||z;xt.setSize(At.z,At.w);let It=x.getRenderTarget();x.setRenderTarget(xt),x.getClearColor(lt),dt=x.getClearAlpha(),dt<1&&x.setClearColor(16777215,.5),x.clear(),kt&&W.render(rt);let Lt=x.toneMapping;x.toneMapping=Oe;let Ht=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),m.setupLightsView(at),pt===!0&&A.setGlobalState(x.clippingPlanes,at),fn(b,rt,at),S.updateMultisampleRenderTarget(xt),S.updateRenderTargetMipmap(xt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Dt=0,ee=Z.length;Dt<ee;Dt++){let de=Z[Dt],pe=de.object,Ve=de.geometry,ie=de.material,Ft=de.group;if(ie.side===In&&pe.layers.test(at.layers)){let bn=ie.side;ie.side=Fe,ie.needsUpdate=!0,On(pe,rt,at,Ve,ie,Ft),ie.side=bn,ie.needsUpdate=!0,qt=!0}}qt===!0&&(S.updateMultisampleRenderTarget(xt),S.updateRenderTargetMipmap(xt))}x.setRenderTarget(It),x.setClearColor(lt,dt),Ht!==void 0&&(at.viewport=Ht),x.toneMapping=Lt}function fn(b,Z,rt){let at=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,xt=b.length;J<xt;J++){let At=b[J],It=At.object,Lt=At.geometry,Ht=at===null?At.material:at,qt=At.group;It.layers.test(rt.layers)&&On(It,Z,rt,Lt,Ht,qt)}}function On(b,Z,rt,at,J,xt){b.onBeforeRender(x,Z,rt,at,J,xt),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(x,Z,rt,at,b,xt),J.transparent===!0&&J.side===In&&J.forceSinglePass===!1?(J.side=Fe,J.needsUpdate=!0,x.renderBufferDirect(rt,Z,at,J,b,xt),J.side=$n,J.needsUpdate=!0,x.renderBufferDirect(rt,Z,at,J,b,xt),J.side=In):x.renderBufferDirect(rt,Z,at,J,b,xt),b.onAfterRender(x,Z,rt,at,J,xt)}function Pe(b,Z,rt){Z.isScene!==!0&&(Z=Gt);let at=X.get(b),J=m.state.lights,xt=m.state.shadowsArray,At=J.state.version,It=C.getParameters(b,J.state,xt,Z,rt),Lt=C.getProgramCacheKey(It),Ht=at.programs;at.environment=b.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(b.isMeshStandardMaterial?Y:_).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?Z.environmentRotation:b.envMapRotation,Ht===void 0&&(b.addEventListener("dispose",ft),Ht=new Map,at.programs=Ht);let qt=Ht.get(Lt);if(qt!==void 0){if(at.currentProgram===qt&&at.lightsStateVersion===At)return Je(b,It),qt}else It.uniforms=C.getUniforms(b),b.onBeforeCompile(It,x),qt=C.acquireProgram(It,Lt),Ht.set(Lt,qt),at.uniforms=It.uniforms;let Dt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=A.uniform),Je(b,It),at.needsLights=Ar(b),at.lightsStateVersion=At,at.needsLights&&(Dt.ambientLightColor.value=J.state.ambient,Dt.lightProbe.value=J.state.probe,Dt.directionalLights.value=J.state.directional,Dt.directionalLightShadows.value=J.state.directionalShadow,Dt.spotLights.value=J.state.spot,Dt.spotLightShadows.value=J.state.spotShadow,Dt.rectAreaLights.value=J.state.rectArea,Dt.ltc_1.value=J.state.rectAreaLTC1,Dt.ltc_2.value=J.state.rectAreaLTC2,Dt.pointLights.value=J.state.point,Dt.pointLightShadows.value=J.state.pointShadow,Dt.hemisphereLights.value=J.state.hemi,Dt.directionalShadowMap.value=J.state.directionalShadowMap,Dt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Dt.spotShadowMap.value=J.state.spotShadowMap,Dt.spotLightMatrix.value=J.state.spotLightMatrix,Dt.spotLightMap.value=J.state.spotLightMap,Dt.pointShadowMap.value=J.state.pointShadowMap,Dt.pointShadowMatrix.value=J.state.pointShadowMatrix),at.currentProgram=qt,at.uniformsList=null,qt}function Bn(b){if(b.uniformsList===null){let Z=b.currentProgram.getUniforms();b.uniformsList=Gi.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function Je(b,Z){let rt=X.get(b);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Si(b,Z,rt,at,J){Z.isScene!==!0&&(Z=Gt),S.resetTextureUnits();let xt=Z.fog,At=at.isMeshStandardMaterial?Z.environment:null,It=G===null?x.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:$i,Lt=(at.isMeshStandardMaterial?Y:_).get(at.envMap||At),Ht=at.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,qt=!!rt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Dt=!!rt.morphAttributes.position,ee=!!rt.morphAttributes.normal,de=!!rt.morphAttributes.color,pe=Oe;at.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(pe=x.toneMapping);let Ve=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ie=Ve!==void 0?Ve.length:0,Ft=X.get(at),bn=m.state.lights;if(pt===!0&&(bt===!0||b!==M)){let $e=b===M&&at.id===w;A.setState(at,b,$e)}let se=!1;at.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==bn.state.version||Ft.outputColorSpace!==It||J.isBatchedMesh&&Ft.batching===!1||!J.isBatchedMesh&&Ft.batching===!0||J.isBatchedMesh&&Ft.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ft.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ft.instancing===!1||!J.isInstancedMesh&&Ft.instancing===!0||J.isSkinnedMesh&&Ft.skinning===!1||!J.isSkinnedMesh&&Ft.skinning===!0||J.isInstancedMesh&&Ft.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ft.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ft.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ft.instancingMorph===!1&&J.morphTexture!==null||Ft.envMap!==Lt||at.fog===!0&&Ft.fog!==xt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==A.numPlanes||Ft.numIntersection!==A.numIntersection)||Ft.vertexAlphas!==Ht||Ft.vertexTangents!==qt||Ft.morphTargets!==Dt||Ft.morphNormals!==ee||Ft.morphColors!==de||Ft.toneMapping!==pe||Ft.morphTargetsCount!==ie)&&(se=!0):(se=!0,Ft.__version=at.version);let rn=Ft.currentProgram;se===!0&&(rn=Pe(at,Z,J));let bi=!1,We=!1,ns=!1,me=rn.getUniforms(),pn=Ft.uniforms;if(Tt.useProgram(rn.program)&&(bi=!0,We=!0,ns=!0),at.id!==w&&(w=at.id,We=!0),bi||M!==b){Tt.buffers.depth.getReversed()?(gt.copy(b.projectionMatrix),Lh(gt),Dh(gt),me.setValue(q,"projectionMatrix",gt)):me.setValue(q,"projectionMatrix",b.projectionMatrix),me.setValue(q,"viewMatrix",b.matrixWorldInverse);let zn=me.map.cameraPosition;zn!==void 0&&zn.setValue(q,Ot.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&me.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&me.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,We=!0,ns=!0)}if(J.isSkinnedMesh){me.setOptional(q,J,"bindMatrix"),me.setOptional(q,J,"bindMatrixInverse");let $e=J.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),me.setValue(q,"boneTexture",$e.boneTexture,S))}J.isBatchedMesh&&(me.setOptional(q,J,"batchingTexture"),me.setValue(q,"batchingTexture",J._matricesTexture,S),me.setOptional(q,J,"batchingIdTexture"),me.setValue(q,"batchingIdTexture",J._indirectTexture,S),me.setOptional(q,J,"batchingColorTexture"),J._colorsTexture!==null&&me.setValue(q,"batchingColorTexture",J._colorsTexture,S));let is=rt.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&k.update(J,rt,rn),(We||Ft.receiveShadow!==J.receiveShadow)&&(Ft.receiveShadow=J.receiveShadow,me.setValue(q,"receiveShadow",J.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(pn.envMap.value=Lt,pn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Z.environment!==null&&(pn.envMapIntensity.value=Z.environmentIntensity),We&&(me.setValue(q,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&wr(pn,ns),xt&&at.fog===!0&&D.refreshFogUniforms(pn,xt),D.refreshMaterialUniforms(pn,at,ct,mt,m.state.transmissionRenderTarget[b.id]),Gi.upload(q,Bn(Ft),pn,S)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Gi.upload(q,Bn(Ft),pn,S),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&me.setValue(q,"center",J.center),me.setValue(q,"modelViewMatrix",J.modelViewMatrix),me.setValue(q,"normalMatrix",J.normalMatrix),me.setValue(q,"modelMatrix",J.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){let $e=at.uniformsGroups;for(let zn=0,kn=$e.length;zn<kn;zn++){let Za=$e[zn];R.update(Za,rn),R.bind(Za,rn)}}return rn}function wr(b,Z){b.ambientLightColor.needsUpdate=Z,b.lightProbe.needsUpdate=Z,b.directionalLights.needsUpdate=Z,b.directionalLightShadows.needsUpdate=Z,b.pointLights.needsUpdate=Z,b.pointLightShadows.needsUpdate=Z,b.spotLights.needsUpdate=Z,b.spotLightShadows.needsUpdate=Z,b.rectAreaLights.needsUpdate=Z,b.hemisphereLights.needsUpdate=Z}function Ar(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,Z,rt){X.get(b.texture).__webglTexture=Z,X.get(b.depthTexture).__webglTexture=rt;let at=X.get(b);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=rt===void 0,at.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,Z){let rt=X.get(b);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(b,Z=0,rt=0){G=b,I=Z,L=rt;let at=!0,J=null,xt=!1,At=!1;if(b){let Lt=X.get(b);if(Lt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(q.FRAMEBUFFER,null),at=!1;else if(Lt.__webglFramebuffer===void 0)S.setupRenderTarget(b);else if(Lt.__hasExternalTextures)S.rebindTextures(b,X.get(b.texture).__webglTexture,X.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Dt=b.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&X.has(Dt)&&(b.width!==Dt.image.width||b.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(b)}}let Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);let qt=X.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qt[Z])?J=qt[Z][rt]:J=qt[Z],xt=!0):b.samples>0&&S.useMultisampledRTT(b)===!1?J=X.get(b).__webglMultisampledFramebuffer:Array.isArray(qt)?J=qt[rt]:J=qt,z.copy(b.viewport),tt.copy(b.scissor),Q=b.scissorTest}else z.copy(wt).multiplyScalar(ct).floor(),tt.copy(Nt).multiplyScalar(ct).floor(),Q=Wt;if(Tt.bindFramebuffer(q.FRAMEBUFFER,J)&&at&&Tt.drawBuffers(b,J),Tt.viewport(z),Tt.scissor(tt),Tt.setScissorTest(Q),xt){let Lt=X.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Lt.__webglTexture,rt)}else if(At){let Lt=X.get(b.texture),Ht=Z||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Lt.__webglTexture,rt||0,Ht)}w=-1},this.readRenderTargetPixels=function(b,Z,rt,at,J,xt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){Tt.bindFramebuffer(q.FRAMEBUFFER,It);try{let Lt=b.texture,Ht=Lt.format,qt=Lt.type;if(!zt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=b.width-at&&rt>=0&&rt<=b.height-J&&q.readPixels(Z,rt,at,J,st.convert(Ht),st.convert(qt),xt)}finally{let Lt=G!==null?X.get(G).__webglFramebuffer:null;Tt.bindFramebuffer(q.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,Z,rt,at,J,xt,At){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){let Lt=b.texture,Ht=Lt.format,qt=Lt.type;if(!zt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=b.width-at&&rt>=0&&rt<=b.height-J){Tt.bindFramebuffer(q.FRAMEBUFFER,It);let Dt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Dt),q.bufferData(q.PIXEL_PACK_BUFFER,xt.byteLength,q.STREAM_READ),q.readPixels(Z,rt,at,J,st.convert(Ht),st.convert(qt),0);let ee=G!==null?X.get(G).__webglFramebuffer:null;Tt.bindFramebuffer(q.FRAMEBUFFER,ee);let de=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ih(q,de,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Dt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,xt),q.deleteBuffer(Dt),q.deleteSync(de),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Z=null,rt=0){b.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,b=arguments[1]);let at=Math.pow(2,-rt),J=Math.floor(b.image.width*at),xt=Math.floor(b.image.height*at),At=Z!==null?Z.x:0,It=Z!==null?Z.y:0;S.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,rt,0,0,At,It,J,xt),Tt.unbindTexture()},this.copyTextureToTexture=function(b,Z,rt=null,at=null,J=0){b.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,b=arguments[1],Z=arguments[2],J=arguments[3]||0,rt=null);let xt,At,It,Lt,Ht,qt,Dt,ee,de,pe=b.isCompressedTexture?b.mipmaps[J]:b.image;rt!==null?(xt=rt.max.x-rt.min.x,At=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,Lt=rt.min.x,Ht=rt.min.y,qt=rt.isBox3?rt.min.z:0):(xt=pe.width,At=pe.height,It=pe.depth||1,Lt=0,Ht=0,qt=0),at!==null?(Dt=at.x,ee=at.y,de=at.z):(Dt=0,ee=0,de=0);let Ve=st.convert(Z.format),ie=st.convert(Z.type),Ft;Z.isData3DTexture?(S.setTexture3D(Z,0),Ft=q.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(S.setTexture2DArray(Z,0),Ft=q.TEXTURE_2D_ARRAY):(S.setTexture2D(Z,0),Ft=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);let bn=q.getParameter(q.UNPACK_ROW_LENGTH),se=q.getParameter(q.UNPACK_IMAGE_HEIGHT),rn=q.getParameter(q.UNPACK_SKIP_PIXELS),bi=q.getParameter(q.UNPACK_SKIP_ROWS),We=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,pe.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,pe.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Lt),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ht),q.pixelStorei(q.UNPACK_SKIP_IMAGES,qt);let ns=b.isDataArrayTexture||b.isData3DTexture,me=Z.isDataArrayTexture||Z.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let pn=X.get(b),is=X.get(Z),$e=X.get(pn.__renderTarget),zn=X.get(is.__renderTarget);Tt.bindFramebuffer(q.READ_FRAMEBUFFER,$e.__webglFramebuffer),Tt.bindFramebuffer(q.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let kn=0;kn<It;kn++)ns&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,X.get(b).__webglTexture,J,qt+kn),b.isDepthTexture?(me&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,X.get(Z).__webglTexture,J,de+kn),q.blitFramebuffer(Lt,Ht,xt,At,Dt,ee,xt,At,q.DEPTH_BUFFER_BIT,q.NEAREST)):me?q.copyTexSubImage3D(Ft,J,Dt,ee,de+kn,Lt,Ht,xt,At):q.copyTexSubImage2D(Ft,J,Dt,ee,de+kn,Lt,Ht,xt,At);Tt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else me?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(Ft,J,Dt,ee,de,xt,At,It,Ve,ie,pe.data):Z.isCompressedArrayTexture?q.compressedTexSubImage3D(Ft,J,Dt,ee,de,xt,At,It,Ve,pe.data):q.texSubImage3D(Ft,J,Dt,ee,de,xt,At,It,Ve,ie,pe):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,J,Dt,ee,xt,At,Ve,ie,pe.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,J,Dt,ee,pe.width,pe.height,Ve,pe.data):q.texSubImage2D(q.TEXTURE_2D,J,Dt,ee,xt,At,Ve,ie,pe);q.pixelStorei(q.UNPACK_ROW_LENGTH,bn),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,se),q.pixelStorei(q.UNPACK_SKIP_PIXELS,rn),q.pixelStorei(q.UNPACK_SKIP_ROWS,bi),q.pixelStorei(q.UNPACK_SKIP_IMAGES,We),J===0&&Z.generateMipmaps&&q.generateMipmap(Ft),Tt.unbindTexture()},this.copyTextureToTexture3D=function(b,Z,rt=null,at=null,J=0){return b.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,at=arguments[1]||null,b=arguments[2],Z=arguments[3],J=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Z,rt,at,J)},this.initRenderTarget=function(b){X.get(b).__webglFramebuffer===void 0&&S.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),Tt.unbindTexture()},this.resetState=function(){I=0,L=0,G=null,Tt.reset(),et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var yn=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let c=n[s],f=n[s+1]-c,h=(o-c)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Pt:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new V,s=[],r=[],o=[],a=new V,l=new ve;for(let h=0;h<=t;h++){let p=h/t;s[h]=this.getTangentAt(p,new V)}r[0]=new V,o[0]=new V;let u=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=u&&(u=c,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(De(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(De(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_s=class extends en{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=u-this.aY;l=f*c-h*d+this.aX,u=f*d+h*c+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ua=class extends _s{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function za(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,c,d){let f=(o-r)/u-(a-r)/(u+c)+(a-o)/c,h=(a-o)/c-(l-o)/(c+d)+(l-a)/d;f*=c,h*=c,s(o,a,f,h)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Xs=new V,no=new za,io=new za,so=new za,da=class extends en{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%r]:(Xs.subVectors(s[0],s[1]).add(s[0]),u=Xs);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Xs.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(u.distanceToSquared(d),h),y=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(c),h);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),no.initNonuniformCatmullRom(u.x,d.x,f.x,c.x,p,y,g),io.initNonuniformCatmullRom(u.y,d.y,f.y,c.y,p,y,g),so.initNonuniformCatmullRom(u.z,d.z,f.z,c.z,p,y,g)}else this.curveType==="catmullrom"&&(no.initCatmullRom(u.x,d.x,f.x,c.x,this.tension),io.initCatmullRom(u.y,d.y,f.y,c.y,this.tension),so.initCatmullRom(u.z,d.z,f.z,c.z,this.tension));return n.set(no.calc(l),io.calc(l),so.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Rm(i,t){let e=1-i;return e*e*t}function Cm(i,t){return 2*(1-i)*i*t}function Pm(i,t){return i*i*t}function ds(i,t,e,n){return Rm(i,t)+Cm(i,e)+Pm(i,n)}function Im(i,t){let e=1-i;return e*e*e*t}function Lm(i,t){let e=1-i;return 3*e*e*i*t}function Dm(i,t){return 3*(1-i)*i*i*t}function Um(i,t){return i*i*i*t}function fs(i,t,e,n,s){return Im(i,t)+Lm(i,e)+Dm(i,n)+Um(i,s)}var dr=class extends en{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,s.x,r.x,o.x,a.x),fs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends en{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,s.x,r.x,o.x,a.x),fs(t,s.y,r.y,o.y,a.y),fs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fr=class extends en{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends en{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pr=class extends en{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends en{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y),ds(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mr=class extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],c=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Jc(a,l.x,u.x,c.x,d.x),Jc(a,l.y,u.y,c.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},$c=Object.freeze({__proto__:null,ArcCurve:ua,CatmullRomCurve3:da,CubicBezierCurve:dr,CubicBezierCurve3:fa,EllipseCurve:_s,LineCurve:fr,LineCurve3:pa,QuadraticBezierCurve:pr,QuadraticBezierCurve3:ma,SplineCurve:mr}),ga=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $c[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){let c=l[u];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new $c[s.type]().fromJSON(s))}return this}},_a=class extends ga{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fr(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new pr(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new dr(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s),new Pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new mr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+u,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let u=new _s(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);let c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xa=class i extends Be{constructor(t=[new Pt(0,-.5),new Pt(.5,0),new Pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=De(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],u=[],c=1/e,d=new V,f=new Pt,h=new V,p=new V,y=new V,g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,h.x=m*1,h.y=-g,h.z=m*0,y.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,h.x=m*1,h.y=-g,h.z=m*0,p.copy(h),h.x+=y.x,h.y+=y.y,h.z+=y.z,h.normalize(),l.push(h.x,h.y,h.z),y.copy(p)}for(let v=0;v<=e;v++){let T=n+v*c*s,x=Math.sin(T),B=Math.cos(T);for(let I=0;I<=t.length-1;I++){d.x=t[I].x*x,d.y=t[I].y,d.z=t[I].x*B,o.push(d.x,d.y,d.z),f.x=v/e,f.y=I/(t.length-1),a.push(f.x,f.y);let L=l[3*I+0]*x,G=l[3*I+1],w=l[3*I+0]*B;u.push(L,G,w)}}for(let v=0;v<e;v++)for(let T=0;T<t.length-1;T++){let x=T+v*t.length,B=x,I=x+t.length,L=x+t.length+1,G=x+1;r.push(B,I,G),r.push(L,G,I)}this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},jn=class i extends xa{constructor(t=1,e=1,n=4,s=8){let r=new _a;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Qn=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let u=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],f=[],h=[],p=0,y=[],g=n/2,m=0;v(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(c),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(h,2));function v(){let x=new V,B=new V,I=0,L=(e-t)/n;for(let G=0;G<=r;G++){let w=[],M=G/r,z=M*(e-t)+t;for(let tt=0;tt<=s;tt++){let Q=tt/s,lt=Q*l+a,dt=Math.sin(lt),ht=Math.cos(lt);B.x=z*dt,B.y=-M*n+g,B.z=z*ht,d.push(B.x,B.y,B.z),x.set(dt,L,ht).normalize(),f.push(x.x,x.y,x.z),h.push(Q,1-M),w.push(p++)}y.push(w)}for(let G=0;G<s;G++)for(let w=0;w<r;w++){let M=y[w][G],z=y[w+1][G],tt=y[w+1][G+1],Q=y[w][G+1];(t>0||w!==0)&&(c.push(M,z,Q),I+=3),(e>0||w!==r-1)&&(c.push(z,tt,Q),I+=3)}u.addGroup(m,I,0),m+=I}function T(x){let B=p,I=new Pt,L=new V,G=0,w=x===!0?t:e,M=x===!0?1:-1;for(let tt=1;tt<=s;tt++)d.push(0,g*M,0),f.push(0,M,0),h.push(.5,.5),p++;let z=p;for(let tt=0;tt<=s;tt++){let lt=tt/s*l+a,dt=Math.cos(lt),ht=Math.sin(lt);L.x=w*ht,L.y=g*M,L.z=w*dt,d.push(L.x,L.y,L.z),f.push(0,M,0),I.x=dt*.5+.5,I.y=ht*.5*M+.5,h.push(I.x,I.y),p++}for(let tt=0;tt<s;tt++){let Q=B+tt,lt=z+tt;x===!0?c.push(lt,lt+1,Q):c.push(lt+1,lt,Q),G+=3}u.addGroup(m,G,x===!0?1:2),m+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vn=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),u=0,c=[],d=new V,f=new V,h=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let v=[],T=m/n,x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let B=0;B<=e;B++){let I=B/e;d.x=-t*Math.cos(s+I*r)*Math.sin(o+T*a),d.y=t*Math.cos(o+T*a),d.z=t*Math.sin(s+I*r)*Math.sin(o+T*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(I+x,1-T),v.push(u++)}c.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let T=c[m][v+1],x=c[m][v],B=c[m+1][v],I=c[m+1][v+1];(m!==0||o>0)&&h.push(T,x,I),(m!==n-1||l<Math.PI)&&h.push(x,B,I)}this.setIndex(h),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Mn=class extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ys(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Nm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ya=class extends Ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qa,endingEnd:Qa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tc:r=t,a=2*e-n;break;case ec:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tc:o=t,l=2*n-e;break;case ec:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let u=(n-e)*.5,c=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,u=l-a,c=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(n-e)/(s-e),y=p*p,g=y*p,m=-f*g+2*f*y-f*p,v=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*p+1,T=(-1-h)*g+(1.5+h)*y+.5*p,x=h*g-h*y;for(let B=0;B!==a;++B)r[B]=m*o[c+B]+v*o[u+B]+T*o[l+B]+x*o[d+B];return r}},va=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,u=l-a,c=(n-e)/(s-e),d=1-c;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[l+f]*c;return r}},Ma=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ya(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case js:e=this.InterpolantFactoryMethodDiscrete;break;case Yo:e=this.InterpolantFactoryMethodLinear;break;case Er:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Er}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Nm(s))for(let a=0,l=s.length;a!==l;++a){let u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Er,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,u=t[a],c=t[a+1];if(u!==c&&(a!==1||u!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,h=d+n;for(let p=0;p!==n;++p){let y=e[d+p];if(y!==e[f+p]||y!==e[h+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let h=0;h!==n;++h)e[f+h]=e[d+h]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)e[l+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Yo;var gi=class extends un{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=js;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends un{};Sa.prototype.ValueTypeName="color";var ba=class extends un{};ba.prototype.ValueTypeName="number";var wa=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),u=t*a;for(let c=u+a;u!==c;u+=4)Me.slerpFlat(r,0,o,u-a,o,u,l);return r}},gr=class extends un{InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}};gr.prototype.ValueTypeName="quaternion";gr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends un{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=js;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends un{};Aa.prototype.ValueTypeName="vector";var Ta=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){let d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){let h=u[d],p=u[d+1];if(h.global&&(h.lastIndex=0),h.test(c))return p}return null}}},Fm=new Ta,Ea=class{constructor(t){this.manager=t!==void 0?t:Fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Sn=class extends _r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ro=new ve,Kc=new V,jc=new V,Ra=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ca=class extends Ra{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Le=class extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Ca}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ka="\\[\\]\\.:\\/",Om=new RegExp("["+ka+"]","g"),Va="[^"+ka+"]",Bm="[^"+ka.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",Va),km=/(WCOD+)?/.source.replace("WCOD",Bm),Vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Va),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Va),Hm=new RegExp("^"+zm+km+Vm+Gm+"$"),Wm=["material","materials","bones","map"],Pa=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(t){let e=Hm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[s];if(o===void 0){let u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Pa;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);var vs=new V;function nn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;vs.copy(t),vs[n]=0,vs.normalize();let u=.5*o/(o+a),c=1-vs.angleTo(i)/l;return Math.sign(vs[e])===1?c*u:a/(o+a)+u+u*(1-c)}var Mr=class extends Ze{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new V,l=new V,u=new V(t,e,n).divideScalar(2).subScalar(r),c=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,h=c.length/6,p=new V,y=.5/s;for(let g=0,m=0;g<c.length;g+=3,m+=2)switch(a.fromArray(c,g),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),c[g+0]=u.x*Math.sign(a.x)+l.x*r,c[g+1]=u.y*Math.sign(a.y)+l.y*r,c[g+2]=u.z*Math.sign(a.z)+l.z*r,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/h)){case 0:p.set(1,0,0),f[m+0]=nn(p,l,"z","y",r,n),f[m+1]=1-nn(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),f[m+0]=1-nn(p,l,"z","y",r,n),f[m+1]=1-nn(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),f[m+0]=1-nn(p,l,"x","z",r,t),f[m+1]=nn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),f[m+0]=1-nn(p,l,"x","z",r,t),f[m+1]=1-nn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),f[m+0]=1-nn(p,l,"x","y",r,t),f[m+1]=1-nn(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),f[m+0]=nn(p,l,"x","y",r,t),f[m+1]=1-nn(p,l,"y","x",r,e);break}}};var yt={bodyCenterY:.33,bodyRadii:[.3,.33,.27],neckY:.6,headCenterY:.42,headRadius:.5,earOffset:[.35,.43,.06],earRadii:[.14,.14,.08],innerEarOffset:[.36,.45,.12],innerEarRadii:[.07,.07,.03],eyeX:.165,eyeY:-.02,eyeRadii:[.062,.088,.03],gazeTravelX:.035,gazeTravelY:.03,shutEyeScale:.1,browY:.125,browTravel:.03,browTilt:.25,cheekX:.29,cheekY:-.14,mouthY:-.19,mouthHalfWidth:.052,smileTilt:.55,mouthDrop:.055,mouthLineGoneAt:.18,openSmileFlatten:.6,smileWiden:.012,shoulderX:.22,shoulderY:.48,upperLength:.17,forearmLength:.16,limbRadius:.045,palmRadius:.065,restArmAngle:.7,clearance:.012,breathAmount:.012,bounceHeight:.06,bodyRiseFollow:.12,handShapeFade:.06},He=(i,t,e)=>new Vt().setRGB(i,t,e,le),oe={cream:He(1,.95,.88),blue:He(.62,.8,.98),blueDark:He(.5,.68,.9),pink:He(1,.7,.76),ink:He(.22,.15,.15),mouth:He(.42,.16,.2),leaf:He(.46,.78,.45),white:He(1,1,1),outline:He(.3,.22,.22),heart:He(1,.42,.55)},Xm=1.045,ti=(i,t,e)=>Math.min(e,Math.max(t,i)),Ym=i=>{let t=ti(i,0,1);return t*t*(3-2*t)},Sl=i=>new V(i[0],i[1],i[2]),Wa=new V(0,0,1),Ga=new V(0,1,0),bl=new V(0,-1,0);function Ha(i,t){return i.dot(t)<-.9999?new Me().setFromAxisAngle(Wa,Math.PI):new Me().setFromUnitVectors(i,t)}function xi(i,t,e){this.x=i,this.v=0,this.t=i,this.k=t,this.c=e}xi.prototype.step=function(i){for(;i>1e-6;){let t=Math.min(i,.008333333333333333),e=(this.t-this.x)*this.k-this.v*this.c;this.v+=e*t,this.x+=this.v*t,i-=t}};xi.prototype.reset=function(i){this.x=this.t=i,this.v=0};function qm(i,t){let e=new xn({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});e.setClearColor(0,0),e.outputColorSpace=le,e.toneMapping=Oe;let n=new yn,s=new vn(1,40,28),r=new Map,o=(X,S=.85)=>{let _=X.getHexString()+S;return r.has(_)||r.set(_,new Mn({color:X,roughness:S,metalness:0})),r.get(_)},a=new tn({color:oe.outline,side:Fe}),l=new Map,u=(X,S)=>{let _=X+":"+S;return l.has(_)||l.set(_,new jn(S,Math.max(1e-4,X-2*S),6,14)),l.get(_)};function c(X){let S=new ye(X.geometry,a);S.scale.setScalar(Xm),X.add(S)}function d(X,S,_=!1,Y=.85){let it=new ye(s,o(S,Y));return it.scale.set(X[0],X[1],X[2]),_&&c(it),it}function f(X,S,_,Y=!0){let it=new ye(u(X,S),o(_));return Y&&c(it),it}let h=()=>new Zn,p=h(),y=h(),g=h(),m=h(),v=h(),T=h();n.add(p),p.add(y),y.add(g),y.add(m),m.add(v),m.position.set(0,yt.neckY,0);let x=new xi(0,140,7),B=0;for(let X of[-1,1]){let S=d([.11,.07,.13],oe.blueDark,!0);S.position.set(X*.12,.03,.05),p.add(S)}let I=d(yt.bodyRadii,oe.blue,!0);I.position.set(0,yt.bodyCenterY,0),g.add(I);let L=d([.17,.16,.05],oe.cream);L.position.set(0,.3,yt.bodyRadii[2]-.035),g.add(L);let G=new V(0,yt.headCenterY,0),w=d([yt.headRadius,yt.headRadius,yt.headRadius],oe.cream,!0);w.position.copy(G),v.add(w);for(let X of[-1,1]){let S=d(yt.earRadii,oe.cream,!0);S.position.copy(G).add(Sl(yt.earOffset).multiply(new V(X,1,1))),v.add(S);let _=d(yt.innerEarRadii,oe.pink);_.position.copy(G).add(Sl(yt.innerEarOffset).multiply(new V(X,1,1))),v.add(_)}T.position.copy(G).add(new V(0,yt.headRadius-.01,0)),v.add(T);let M=f(.1,.012,oe.leaf,!1);M.position.set(0,.05,0),T.add(M);for(let X of[-1,1]){let S=d([.075,.032,.045],oe.leaf);S.position.set(X*.06,.105,0),S.rotation.z=X*.45,T.add(S)}function z(X,S,_,Y=.004){let it=yt.headRadius,P=Math.sqrt(Math.max(1e-4,it*it-S*S-_*_)),N=new V(S,_,P).normalize();X.position.copy(G).addScaledVector(N,it+Y),X.quaternion.copy(Ha(Wa,N))}let tt=[],Q=[],lt=[];for(let X of[-1,1]){let S=h(),_=d(yt.eyeRadii,oe.ink,!1,.35);S.add(_);let Y=h(),it=d([.02,.02,.006],oe.white,!1,.3);it.position.set(.02,.036,yt.eyeRadii[2]*.9);let P=d([.01,.01,.004],oe.white,!1,.3);P.position.set(-.018,-.034,yt.eyeRadii[2]*.85),Y.add(it),Y.add(P),S.add(Y),v.add(S),tt.push({pivot:S,ball:_,highlights:Y,x:X*yt.eyeX});let N=h();z(N,X*yt.eyeX,yt.browY);let C=f(.075,.0085,oe.ink,!1);C.rotation.z=Math.PI/2;let D=h();D.add(C),N.add(D),v.add(N),Q.push({holder:D,side:X});let H=d([.065,.04,.012],oe.pink);z(H,X*yt.cheekX,yt.cheekY,0),v.add(H),lt.push(H)}let dt=h();z(dt,0,yt.mouthY),v.add(dt);let ht=h(),mt=h(),ct=[];for(let[X,S]of[[ht,-1],[mt,1]]){let _=f(yt.mouthHalfWidth,.008,oe.mouth,!1);ct.push(_),_.rotation.z=Math.PI/2,_.position.set(S*(yt.mouthHalfWidth*.5-.004),0,.012),X.add(_),dt.add(X)}let _t=d([.045,.004,.01],oe.mouth);_t.position.set(0,0,.004),dt.add(_t);let vt=d([.026,.012,.006],oe.pink);dt.add(vt);let wt=new Mr(.07,.07,.035,2,.006);function Nt(X){let S=d([yt.limbRadius*1.15,yt.limbRadius*1.15,yt.limbRadius*1.15],oe.blue),_=f(yt.upperLength,yt.limbRadius,oe.blue),Y=d([yt.limbRadius,yt.limbRadius,yt.limbRadius],oe.blue),it=f(yt.forearmLength,yt.limbRadius*.92,oe.blue),P=h(),N=h(),C=h();[S,_,Y,it,P,C].forEach(nt=>y.add(nt));let D=d([yt.palmRadius,yt.palmRadius,yt.palmRadius*.85],oe.cream,!0);D.position.set(0,-yt.palmRadius*.6,0),P.add(D);let H=-X,E=h(),A=d([.05,.035,.04],oe.cream,!0);A.position.set(0,-yt.palmRadius*1.25,0);let U=d([.024,.03,.024],oe.cream,!0);U.position.set(H*.055,-.025,.02),E.add(A),E.add(U);let W=h(),k=f(.08,.014,oe.cream);k.position.set(0,-yt.palmRadius-.045,0),W.add(k);let F=h();for(let nt of[-1,1]){let ot=f(.08,.014,oe.cream);ot.position.set(nt*.022,-yt.palmRadius-.042,0),ot.rotation.z=-nt*.22,F.add(ot)}let j=h(),st=f(.07,.016,oe.cream);st.position.set(0,.06,.01),N.add(st),j.add(N);let et={open:E,fist:h(),point:W,peace:F,thumbsUp:j,heart:h()},R={};for(let nt in et)P.add(et[nt]),R[nt]=nt==="open"?1:0,et[nt].scale.setScalar(R[nt]),et[nt].visible=R[nt]>.01;let K=.07,O=new ye(wt,o(oe.heart,.5));O.rotation.z=Math.PI/4,C.add(O);let $=K/(2*Math.SQRT2);for(let nt of[-1,1]){let ot=d([K/2,K/2,.02],oe.heart,!1,.5);ot.position.set(nt*$,$,0),C.add(ot)}return C.scale.setScalar(0),C.visible=!1,{outward:X,shoulderBall:S,upper:_,elbowBall:Y,forearm:it,hand:P,thumbUpFrame:N,heart:C,shapes:et,weights:R,elbowDepth:new xi(.02,420,41),handDepth:new xi(.02,420,41),tx:new xi(Math.sin(yt.restArmAngle),150,21),ty:new xi(Math.cos(yt.restArmAngle),150,21)}}let Wt={left:Nt(-1),right:Nt(1)};function ut(X,S,_,Y){let it=0,P=[[Y,[yt.headRadius,yt.headRadius,yt.headRadius],S]];_!=null&&P.push([new V(0,yt.bodyCenterY,0),yt.bodyRadii,_]);for(let[N,C,D]of P){let H=C[0]+D,E=C[1]+D,A=C[2]+D,U=((X[0]-N.x)/H)**2+((X[1]-N.y)/E)**2;U<1&&(it=Math.max(it,N.z+A*Math.sqrt(1-U)+yt.clearance))}return it}let pt=yt.limbRadius,bt=[[.25,pt,null],[.5,pt,null],[.75,pt,0],[1,pt,pt]],gt=[];for(let X=0;X<=.875+1e-6;X+=.125)gt.push([X,pt,pt]);gt.push([1,yt.palmRadius,yt.palmRadius]);function Rt(X,S,_,Y,it,P,N){for(let C=0;C<2;C++)for(let[D,H,E]of it){let A=[X[0]+(S[0]-X[0])*D,X[1]+(S[1]-X[1])*D],U=ut(A,H,E,N);_+(Y-_)*D>=U||(P||D>=.5?Y=Math.max(Y,(U-(1-D)*_)/Math.max(D,.05)):_=Math.max(_,(U-D*Y)/(1-D)))}return[_,Y]}function Ot(X,S,_,Y){let it=_.clone().sub(S),P=it.length();X.position.copy(S).add(_).multiplyScalar(.5),X.quaternion.copy(Ha(Ga,P>1e-4?it.divideScalar(P):Ga.clone())),X.scale.set(1,Math.max(P/Y,.01),1)}function Bt(X,S,_,Y,it,P){let N=X.outward,C=new V(N*yt.shoulderX,yt.shoulderY+Y,.02);X.tx.t=S[0],X.ty.t=S[1],P>0?(X.tx.step(P),X.ty.step(P)):(X.tx.reset(S[0]),X.ty.reset(S[1]));let D=yt.upperLength,H=yt.forearmLength,E=D+H,A=C.x+N*X.tx.x*E,U=C.y-X.ty.x*E,W=A-C.x,k=U-C.y,F=Math.hypot(W,k),j=E-1e-4,st=Math.abs(D-H)+.01;F>j&&(A=C.x+W/F*j,U=C.y+k/F*j,F=j),F<st&&(F=st);let et=Math.atan2(U-C.y,A-C.x),R=Math.acos(ti((D*D+F*F-H*H)/(2*D*F),-1,1)),K=null;for(let ce of[1,-1]){let ue=et+ce*R,ne=C.x+Math.cos(ue)*D,te=C.y+Math.sin(ue)*D,be=ne*N-te*.9;(!K||be>K.score)&&(K={score:be,ex:ne,ey:te})}let O=[K.ex,K.ey],$=[A,U],nt=[C.x,C.y],ot=Rt(nt,O,C.z,C.z,bt,!0,it),ft=Rt(O,$,ot[1],ot[1],gt,!1,it);X.elbowDepth.t=ft[0],X.handDepth.t=ft[1],P>0?(X.elbowDepth.step(P),X.handDepth.step(P)):(X.elbowDepth.reset(ft[0]),X.handDepth.reset(ft[1]));let Mt=new V(O[0],O[1],X.elbowDepth.x),Ct=new V($[0],$[1],X.handDepth.x);X.shoulderBall.position.copy(C),Ot(X.upper,C,Mt,D),X.elbowBall.position.copy(Mt),Ot(X.forearm,Mt,Ct,H);let Ut=Ct.clone().sub(Mt),Yt=Ha(bl,Ut.length()>1e-4?Ut.normalize():bl.clone());X.hand.position.copy(Ct),X.hand.quaternion.copy(Yt),X.thumbUpFrame.quaternion.copy(Yt.clone().invert());let Et=P>0?Math.min(1,P/yt.handShapeFade):1;for(let ce in X.shapes){let ue=X.weights[ce]+((ce===_?1:0)-X.weights[ce])*Et;X.weights[ce]=ue,X.shapes[ce].scale.setScalar(Math.max(ue,1e-4)),X.shapes[ce].visible=ue>.01}let re=X.weights.heart;X.heart.position.copy(Ct).add(new V(0,.15,.06)),X.heart.scale.setScalar(Math.max(re,1e-4)),X.heart.visible=re>.01}let Gt=new Le(16777215,2.6);Gt.position.set(-2,3,5);let kt=new Le(He(1,.95,.92),1.1);kt.position.set(3,1,4);let jt=new Le(He(.9,.95,1),.8);jt.position.set(0,3,-4);let q=new Sn(He(1,.98,.96),He(.62,.6,.66),1.45);n.add(Gt,kt,jt,q);let Se=(t.yTop+t.yBot)/2,Xt=(t.yTop-t.yBot)/2,zt=5.4,Tt=new we(2*Math.atan(Xt/zt)*180/Math.PI,1,.1,50);Tt.position.set(0,Se+.06,zt),Tt.lookAt(0,Se,0);function Kt(X,S){let _=Math.sin(yt.restArmAngle),Y=Math.cos(yt.restArmAngle);p.position.set(X.hipShift||0,(X.rise||0)*yt.bodyRiseFollow+(X.bounce||0)*yt.bounceHeight,0);let it=new Me().setFromEuler(new qe(0,X.chestYaw||0,0)).multiply(new Me().setFromEuler(new qe(0,0,X.chestRoll||0)));y.quaternion.copy(it);let P=1+(X.breath||0)*yt.breathAmount;g.scale.set(1,P,1);let N=(P-1)*yt.neckY,C=new Me().setFromAxisAngle(Ga,X.headYaw||0).multiply(new Me().setFromAxisAngle(new V(1,0,0),-(X.headPitch||0))).multiply(new Me().setFromAxisAngle(Wa,-(X.headRoll||0))),D=it.clone().invert().multiply(C);v.quaternion.copy(D);let H=Math.max(Math.cos(X.chestRoll||0),.5),E=((X.lean||0)-(X.hipShift||0)+yt.neckY*Math.sin(X.chestRoll||0))/H;m.position.set(E,yt.neckY+N+(X.rise||0)*(1-yt.bodyRiseFollow),0);let A=-(X.headRoll||0),U=S>0?ti(((X.lean||0)-B)/S,-1.5,1.5):0;B=X.lean||0,x.t=A+U*.25,S>0?x.step(S):x.reset(A),T.rotation.z=ti(x.x-A,-.6,.6);let W=(X.gazeX||0)*yt.gazeTravelX,k=(X.gazeY||0)*yt.gazeTravelY;tt.forEach((ft,Mt)=>{let Ct=ti(Mt===0?X.blinkL||0:X.blinkR||0,0,1);z(ft.pivot,ft.x+W,yt.eyeY+k,0);let Ut=1-Ct*(1-yt.shutEyeScale);ft.ball.scale.set(yt.eyeRadii[0]*(1+Ct*.12),yt.eyeRadii[1]*Ut,yt.eyeRadii[2]),ft.highlights.visible=Ct<.45}),Q.forEach((ft,Mt)=>{let Ct=Mt===0?X.browL||0:X.browR||0;ft.holder.position.set(0,Ct*yt.browTravel,.006),ft.holder.rotation.z=-ft.side*Ct*yt.browTilt});let F=ti(X.smile||0,-1,1),j=Math.max(0,F),st=ti(X.open||0,0,1);lt.forEach(ft=>ft.scale.set(.065*(1+j*.3),.04*(1+j*.3),.012*(1+j*.3)));let et=1-yt.openSmileFlatten*Ym(st/.4),R=F*yt.smileTilt*et;ht.rotation.z=-R,mt.rotation.z=R;let K=.004+yt.mouthDrop*st;_t.scale.set(.045+.015*st+yt.smileWiden*j,K,.01),_t.position.set(0,.004-K,.004),_t.visible=st>.03;let O=ti((st-.03)/(yt.mouthLineGoneAt-.03),0,1),$=1-O*O*(3-2*O);for(let ft of ct)ft.scale.set(Math.max($,1e-4),1,Math.max($,1e-4)),ft.visible=$>.25;vt.position.set(0,.004-K*1.45,.009);let nt=Math.max(1e-4,Math.min(1,st*1.6));vt.scale.set(.026*nt,.012*nt,.006*nt),vt.visible=st>.25;let ot=m.position.clone().add(new V(0,yt.headCenterY,0).applyQuaternion(D));Bt(Wt.left,X.L||[_,Y],X.Lshape||"open",N,ot,S),Bt(Wt.right,X.R||[_,Y],X.Rshape||"open",N,ot,S)}return{setSize(X,S,_){e.setPixelRatio(Math.min(_||1,2)),e.setSize(X,S,!1),Tt.aspect=X/S,Tt.updateProjectionMatrix()},apply:Kt,render(){e.render(n,Tt)},dispose(){s.dispose(),wt.dispose(),l.forEach(X=>X.dispose()),r.forEach(X=>X.dispose()),a.dispose(),e.dispose(),e.forceContextLoss()}}}var ji={bodyCenterY:.38,bodyRadii:[.55,.44,.45],neckY:.58,headCenterY:.4,headRadii:[.56,.46,.48],headGain:1.25,maxHeadAngle:.75,earBase:[.32,.31,.03],earRadius:.15,earHeight:.25,earDepth:.55,earLean:.36,innerEarRadius:.092,innerEarHeight:.17,innerEarDepth:.22,innerEarLift:[0,.025,.066],innerEarTilt:-.3,earPerk:.3,earFlatten:.85,earFlattenBack:.45,eyeX:.185,eyeY:-.005,eyeRadii:[.066,.08,.03],gazeTravelX:.035,gazeTravelY:.03,shutEyeScale:.1,eyeSurprise:.28,eyeAngerSquint:.35,eyeAngerSlant:.55,happyEyeFrom:.35,happyEyeTo:.7,happyEyeRadius:.052,happyEyeTube:.012,happyEyeSweep:2.5,cheekX:.31,cheekY:-.1,cheekGrow:.7,puffX:.062,puffY:-.165,puffRadii:[.082,.064,.045],noseY:-.112,noseRadii:[.034,.022,.02],noseLift:.032,mouthY:-.152,mouthLift:.046,mouthArcRadius:.028,mouthTube:.0085,mouthArcSweep:2.6,smileTilt:.55,mouthDrop:.05,mouthLineGoneAt:.18,philtrumLength:.032,philtrumOpenLength:.04,mouthWiden:.022,openSmileFlatten:.6,smileWiden:.014,whiskerX:.13,whiskerY:-.16,whiskerLength:.2,whiskerFan:.17,shoulderX:.34,shoulderY:.5,shoulderZ:.3,upperLength:.11,forearmLength:.11,limbRadius:.078,pawRadius:.088,restArmAngle:.35,clearance:.012,tailBase:[.4,.1,-.1],tailSegments:6,tailSegmentLength:.08,tailRadius:.064,tailHeading:-.05,tailCurl:.24,tailCurlGrowth:2,tailWag:.14,tailWagRate:1.6,breathAmount:.02,hopStretch:.07,surpriseStretch:.05,bounceHeight:.09,heartFade:.06},he={fur:[1,.7,.56],furDark:[.93,.46,.4],white:[1,.98,.96],cream:[1,.95,.91],pink:[1,.54,.66],nose:[.95,.47,.58],ink:[.24,.15,.16],mouth:[.5,.17,.22],whisker:[.66,.44,.42],heart:[1,.42,.55],shadow:[.36,.18,.16],shine:[1,1,1]},wl=.62;function Al(i){let t=P=>new i.Color().setRGB(P[0],P[1],P[2],i.SRGBColorSpace),e=new Map;function n(P,N=wl){let C=P.join(",")+N;return e.has(C)||e.set(C,new i.MeshStandardMaterial({color:t(P),roughness:N,metalness:0})),e.get(C)}let s=new i.SphereGeometry(1,48,32),r=new i.CylinderGeometry(1,1,1,32,1,!0),o=P=>new i.Vector3(P[0],P[1],P[2]),a=(P,N)=>new i.Quaternion().setFromAxisAngle(o(N).normalize(),P);function l(P,N,C=wl){let D=new i.Mesh(s,n(N,C));return D.scale.set(P[0],P[1],P[2]),D}function u(P,N,C){let D=new i.CapsuleGeometry(N,Math.max(1e-4,P-2*N),8,20);return new i.Mesh(D,n(C))}function c(P){return new i.Mesh(r,n(P))}function d(P,N,C){let E=[],A=[];for(let F=0;F<=10;F++){let j=F/10,st=P*Math.pow(1-j,.85)*(1-.15*j*j);for(let et=0;et<32;et++){let R=et/32*Math.PI*2;E.push(Math.cos(R)*st,N*j,Math.sin(R)*st*C)}}let U=E.length/3;E.push(0,N,0);let W=E.length/3;E.push(0,0,0);for(let F=0;F<10;F++)for(let j=0;j<32;j++){let st=F*32+j,et=F*32+(j+1)%32,R=st+32,K=et+32;A.push(st,R,et,et,R,K)}for(let F=0;F<32;F++)A.push(10*32+F,U,10*32+(F+1)%32),A.push(W,F,(F+1)%32);let k=new i.BufferGeometry;return k.setAttribute("position",new i.Float32BufferAttribute(E,3)),k.setIndex(A),k.computeVertexNormals(),k}function f(P,N,C){let E=[],A=[],U=-Math.PI/2-C/2;for(let k=0;k<=24;k++){let F=U+C*k/24;for(let j=0;j<10;j++){let st=j/10*Math.PI*2,et=P+Math.cos(st)*N;E.push(Math.cos(F)*et,Math.sin(F)*et,Math.sin(st)*N)}}for(let k=0;k<24;k++)for(let F=0;F<10;F++){let j=k*10+F,st=k*10+(F+1)%10,et=j+10,R=st+10;A.push(j,et,st,st,et,R)}for(let[k,F]of[[0,-1],[24,1]]){let j=U+C*k/24,st=E.length/3,et=[-Math.sin(j)*F,Math.cos(j)*F];E.push(Math.cos(j)*P+et[0]*N*.6,Math.sin(j)*P+et[1]*N*.6,0);for(let R=0;R<10;R++){let K=k*10+R,O=k*10+(R+1)%10;F>0?A.push(O,K,st):A.push(K,O,st)}}let W=new i.BufferGeometry;return W.setAttribute("position",new i.Float32BufferAttribute(E,3)),W.setIndex(A),W.computeVertexNormals(),W}let h=ji,p=new i.Object3D,y=new i.Object3D,g=new i.Object3D,m=new i.Object3D,v=new i.Object3D;p.add(y),y.add(g),y.add(m),m.add(v),m.position.set(0,h.neckY,0);function T(P,N,C=.004){let[D,H,E]=h.headRadii,A=Math.max(1e-4,1-(P/D)**2-(N/H)**2),U=E*Math.sqrt(A),W=new i.Vector3(P/(D*D),N/(H*H),U/(E*E)).normalize();return{p:new i.Vector3(P,h.headCenterY+N,U).addScaledVector(W,C),q:new i.Quaternion().setFromUnitVectors(new i.Vector3(0,0,1),W)}}function x(P,N,C,D=.004){let{p:H,q:E}=T(N,C,D);P.position.copy(H),P.quaternion.copy(E)}let B=new i.MeshBasicMaterial({color:t(he.shadow),transparent:!0,opacity:.16,depthWrite:!1}),I=new i.Mesh(s,B);I.scale.set(.62,.004,.46),p.add(I);for(let P of[-1,1]){let N=l([.1,.06,.1],he.fur);N.position.set(P*.21,.035,.27),p.add(N)}let L=l(h.bodyRadii,he.fur);L.position.set(0,h.bodyCenterY,0),g.add(L);let G=l([.27,.22,.07],he.cream);G.position.set(0,.28,h.bodyRadii[2]-.045),g.add(G);let w=new i.Object3D;w.position.set(...h.tailBase),y.add(w);let M=[],z=[];for(let P=0;P<=h.tailSegments;P++){let N=l(Array(3).fill(h.tailRadius),he.fur);if(w.add(N),z.push(N),P<h.tailSegments){let C=c(he.fur);w.add(C),M.push(C)}}let tt=l(h.headRadii,he.fur);tt.position.set(0,h.headCenterY,0),v.add(tt);let Q=[],lt=d(h.earRadius,h.earHeight,h.earDepth),dt=d(h.innerEarRadius,h.innerEarHeight,h.innerEarDepth);for(let P of[-1,1]){let N=new i.Object3D;N.position.set(P*h.earBase[0],h.headCenterY+h.earBase[1],h.earBase[2]),v.add(N),N.add(new i.Mesh(lt,n(he.fur)));let C=new i.Mesh(dt,n(he.pink));C.position.set(...h.innerEarLift),C.quaternion.copy(a(h.innerEarTilt,[1,0,0])),N.add(C),Q.push({pivot:N,side:P})}for(let[P,N,C,D]of[[-.085,.265,.075,-.22],[0,.285,.105,0],[.085,.265,.075,.22]]){let H=new i.Object3D;x(H,P,N,-.004);let E=u(C,.019,he.furDark);E.scale.set(1,1,.45),E.quaternion.copy(a(D,[0,0,1])),H.add(E),v.add(H)}let ht=[],mt=[],ct=[],_t=f(h.happyEyeRadius,h.happyEyeTube,h.happyEyeSweep);for(let P of[-1,1]){let N=new i.Object3D,C=new i.Object3D;N.add(C);let D=l(h.eyeRadii,he.ink,.35);C.add(D);let H=new i.Object3D,E=l([.021,.021,.006],he.shine,.3);E.position.set(.019,.032,h.eyeRadii[2]*.9);let A=l([.01,.01,.004],he.shine,.3);A.position.set(-.018,-.032,h.eyeRadii[2]*.85),H.add(E,A),C.add(H);let U=new i.Mesh(_t,n(he.ink,.35));U.quaternion.copy(a(Math.PI,[0,0,1])),U.position.set(0,-h.happyEyeRadius*.55,.012),C.add(U),v.add(N),ht.push({pivot:N,shape:C,ball:D,highlights:H,happy:U,side:P,x:P*h.eyeX});let W=l([.068,.04,.012],he.pink);x(W,P*h.cheekX,h.cheekY,0),v.add(W),mt.push(W);let k=l(h.puffRadii,he.white);x(k,P*h.puffX,h.puffY,0),v.add(k);let F=new i.Object3D;x(F,P*h.whiskerX,h.whiskerY,.022),v.add(F);let j=new i.Object3D;F.add(j);for(let st of[-1,0,1]){let et=new i.Object3D,R=u(h.whiskerLength,.0042,he.whisker);R.quaternion.copy(a(Math.PI/2,[0,0,1])),R.position.set(P*h.whiskerLength/2,0,0),et.add(R),et.position.set(0,st*.014,0),et.quaternion.copy(a(P*st*h.whiskerFan,[0,0,1])),j.add(et)}ct.push({holder:j,side:P})}let vt=l(h.noseRadii,he.nose,.5);x(vt,0,h.noseY,h.noseLift),v.add(vt);let wt=new i.Object3D;x(wt,0,h.mouthY,h.mouthLift),v.add(wt);let Nt=u(h.philtrumLength,.0075,he.mouth);Nt.position.set(0,.03-h.philtrumLength/2,.002),wt.add(Nt);let Wt=[],ut=[],pt=f(h.mouthArcRadius,h.mouthTube,h.mouthArcSweep);for(let P of[-1,1]){let N=new i.Object3D,C=new i.Mesh(pt,n(he.mouth));C.position.set(P*h.mouthArcRadius,0,0),N.add(C),ut.push(C),wt.add(N),Wt.push({pivot:N,side:P})}let bt=l([.04,.004,.01],he.mouth);wt.add(bt);let gt=l([.024,.012,.006],he.pink);wt.add(gt);function Rt(P){let N=l(Array(3).fill(h.limbRadius),he.fur),C=c(he.fur),D=l(Array(3).fill(h.pawRadius),he.fur),H=new i.Object3D;for(let W of[N,C,D,H])y.add(W);let E=.07,A=new i.Mesh(new i.BoxGeometry(E,E,.035),n(he.heart,.5));A.quaternion.copy(a(Math.PI/4,[0,0,1])),H.add(A);let U=E/(2*Math.SQRT2);for(let W of[-1,1]){let k=l([E/2,E/2,.02],he.heart,.5);k.position.set(W*U,U,0),H.add(k)}return H.scale.setScalar(0),H.visible=!1,{outward:P,shoulderBall:N,stub:C,paw:D,heart:H,heartWeight:0,pawDepth:{v:0,vel:0}}}let Ot=Rt(-1),Bt=Rt(1),Gt=(P,N,C)=>Math.min(Math.max(P,N),C),kt=P=>{let N=Gt(P,0,1);return N*N*(3-2*N)};function jt(P,N,C,D,H){if(C<=0){P.v=N,P.vel=0;return}let E=Math.min(Math.max(C,1/240),1/30);P.vel+=((N-P.v)*D-P.vel*H)*E,P.v+=P.vel*E}function q(P,N,C,D){let H=0,E=[[D,h.headRadii]];C&&E.push([[0,h.bodyCenterY,0],h.bodyRadii]);for(let[A,U]of E){let W=U[0]+N,k=U[1]+N,F=U[2]+N,j=((P[0]-A[0])/W)**2+((P[1]-A[1])/k)**2;j<1&&(H=Math.max(H,A[2]+F*Math.sqrt(1-j)+h.clearance))}return H}let Se=[[.25,h.limbRadius,!1],[.5,h.limbRadius,!1],[.625,h.limbRadius,!0],[.75,h.limbRadius,!0],[.875,h.limbRadius,!0],[1,h.pawRadius,!0]];function Xt(P,N,C,D){let H=new i.Vector3().subVectors(C,N),E=H.length();P.position.copy(N).add(C).multiplyScalar(.5),P.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),E>1e-4?H.clone().divideScalar(E):new i.Vector3(0,1,0)),P.scale.set(D,Math.max(E,1e-4),D)}function zt(P,N,C,D,H,E){var Ut;let A=N.outward,U=new i.Vector3(A*h.shoulderX*D,h.shoulderY+C,h.shoulderZ),W=Gt((Ut=P.reach)!=null?Ut:1,.5,1),k=P.upper,F=P.upper+P.forearm,j=A*Math.sin(k)*h.upperLength,st=-Math.cos(k)*h.upperLength,et=j+A*Math.sin(F)*h.forearmLength,R=st-Math.cos(F)*h.forearmLength,K=Math.hypot(et,R),O=h.upperLength+h.forearmLength,$=K>1e-4?[et/K,R/K]:[A*Math.sin(h.restArmAngle),-Math.cos(h.restArmAngle)],nt=O*W,ot=[U.x+$[0]*nt,U.y+$[1]*nt],ft=U.z+O*Math.sqrt(Math.max(0,1-W*W));for(let Yt=0;Yt<2;Yt++)for(let[Et,re,ce]of Se){let ue=[U.x+(ot[0]-U.x)*Et,U.y+(ot[1]-U.y)*Et],ne=q(ue,re,ce,H);U.z+(ft-U.z)*Et<ne&&(ft=Math.max(ft,(ne-(1-Et)*U.z)/Math.max(Et,.05)))}jt(N.pawDepth,ft,E,420,41);let Mt=new i.Vector3(ot[0],ot[1],N.pawDepth.v);N.shoulderBall.position.copy(U),Xt(N.stub,U,Mt,h.limbRadius),N.paw.position.copy(Mt);let Ct=E>0?Math.min(1,E/h.heartFade):1;N.heartWeight+=((P.handShape==="heart"?1:0)-N.heartWeight)*Ct,N.heart.position.copy(Mt).add(new i.Vector3(0,.18,.1)),N.heart.scale.setScalar(N.heartWeight),N.heart.visible=N.heartWeight>.01}function Tt(P,N){let C=N>0?6.3:8.9,D=(P+(N>0?1.7:4.1))%C;return D>.45?0:Math.sin(D/.45*Math.PI*3)*Math.exp(-D*6)*.22}let Kt={v:0,vel:0},X=0;function S(P,N){let C=Math.max(0,(P.browLeft+P.browRight)/2),D=1+P.breath*h.breathAmount+P.bounce*h.hopStretch+C*h.surpriseStretch,H=1/Math.sqrt(D),E=P.bounce*h.bounceHeight;p.position.set(P.hipShift,P.rise+E,0),p.scale.setScalar(P.depthScale),I.position.set(0,.002-(P.rise+E),.02);let A=1-Gt(E/.2,0,.4);I.scale.set(.62*A,.004,.46*A);let U=a(P.chestRoll,[0,0,1]);y.quaternion.copy(U),g.scale.set(H,D,H);let W=(D-1)*h.neckY;m.position.set(0,h.neckY+W,0);let k=h.headGain,F=h.maxHeadAngle,j=Gt(P.headYaw*k,-F,F),st=Gt(P.headPitch*k,-F,F),et=Gt(P.headRoll*k,-F,F),R=a(j,[0,1,0]).multiply(a(-st,[1,0,0])).multiply(a(-et,[0,0,1])),K=U.clone().invert().multiply(R);v.quaternion.copy(K),_(P),Y(P,N),it(P);let O=m.position.clone().add(new i.Vector3(0,h.headCenterY,0).applyQuaternion(K)),$=(D-1)*h.shoulderY;zt(P.screenLeftArm,Ot,$,H,[O.x,O.y,O.z],N),zt(P.screenRightArm,Bt,$,H,[O.x,O.y,O.z],N)}function _(P){for(let[N,C]of Q.entries()){let D=N===0?P.browLeft:P.browRight,H=Math.max(0,D),E=Math.max(0,-D),A=h.earLean-H*h.earPerk+E*h.earFlatten+Tt(P.time,C.side),U=-E*h.earFlattenBack+H*.12;C.pivot.quaternion.copy(a(-C.side*A,[0,0,1]).multiply(a(U,[1,0,0])))}}function Y(P,N){let C=N>0?Gt((P.lean-X)/N,-1.5,1.5):0;X=P.lean,jt(Kt,-C*.35,N,60,6);let D=Math.max(0,P.smile),H=Math.sin(P.time*h.tailWagRate*(1+D))*h.tailWag*(1+D)+Kt.v,E=h.tailCurl*(1+.35*P.smile),A=h.tailHeading+H*.4-Math.max(0,-P.smile)*.25,U=new i.Vector3,W=h.tailSegments;for(let k=0;k<W;k++){let F=k/(W-1);z[k].position.copy(U);let j=U.clone().add(new i.Vector3(Math.cos(A),Math.sin(A),0).multiplyScalar(h.tailSegmentLength));Xt(M[k],U,j,h.tailRadius),U=j,A+=E*(1+(h.tailCurlGrowth-1)*F)+H*F*.8}z[W].position.copy(U)}function it(P){let N=P.gazeX*h.gazeTravelX,C=P.gazeY*h.gazeTravelY,D=Math.max(0,P.smile),H=Math.max(0,-P.smile),E=kt((P.smile-h.happyEyeFrom)/(h.happyEyeTo-h.happyEyeFrom)),A=kt(E/.5),U=kt((E-.5)/.5);for(let[K,O]of ht.entries()){let $=K===0?P.blinkLeft:P.blinkRight,nt=K===0?P.browLeft:P.browRight,ot=Math.max(0,nt),ft=Math.max(0,-nt);x(O.pivot,O.x+N,h.eyeY+C,0),O.shape.quaternion.copy(a(O.side*ft*h.eyeAngerSlant,[0,0,1]));let Mt=1+ot*h.eyeSurprise,Ct=(1-$*(1-h.shutEyeScale))*(1-ft*h.eyeAngerSquint)*(1-U*.9);O.ball.scale.set(h.eyeRadii[0]*Mt*(1+$*.12),h.eyeRadii[1]*Mt*Ct,h.eyeRadii[2]),O.ball.visible=U<.98,O.highlights.scale.setScalar(Mt),O.highlights.visible=$<.45&&E<.3&&ft<.6,O.happy.scale.setScalar(Math.max(1e-4,A)),O.happy.visible=A>.01}for(let K of mt){let O=1+D*h.cheekGrow;K.scale.set(.068*O,.04*O,.012)}let W=P.mouthOpen,k=1-h.openSmileFlatten*kt(W/.4),F=P.smile*h.smileTilt*k;for(let K of Wt)K.pivot.quaternion.copy(a(K.side*F,[0,0,1]));let j=.004+h.mouthDrop*W;bt.scale.set(.034+h.mouthWiden*W+h.smileWiden*D,j,.01),bt.position.set(0,-.01-j,-.006),bt.visible=W>.03;let st=Zm(W,h.mouthLineGoneAt);for(let K of ut)K.scale.setScalar(Math.max(st,1e-4)),K.visible=st>.25;let et=h.philtrumLength+(h.philtrumOpenLength-h.philtrumLength)*(1-st);Nt.scale.set(1,et/h.philtrumLength,1),Nt.position.set(0,.03-et/2,.002),gt.position.set(0,-.01-j*1.45,-.001);let R=Math.min(1,W*1.6);gt.scale.set(.024*R*1.3,.012*R*1.3,.006),gt.visible=W>.25;for(let K of ct)K.holder.quaternion.copy(a(K.side*(D*.22-H*.2),[0,0,1]))}return{root:p,apply:S,Shape:ji}}function Zm(i,t){let e=Math.min(1,Math.max(0,(i-.03)/(t-.03)));return 1-e*e*(3-2*e)}function Tl(){let i={upper:ji.restArmAngle,forearm:0,reach:1,handShape:"open"};return{headYaw:0,headPitch:0,headRoll:0,lean:0,rise:0,depthScale:1,hipShift:0,chestRoll:0,chestYaw:0,breath:0,bounce:0,gazeX:0,gazeY:0,blinkLeft:0,blinkRight:0,mouthOpen:0,smile:0,browLeft:0,browRight:0,screenLeftArm:{...i},screenRightArm:{...i},time:0,idle:1}}var Jm={Object3D:Ae,Mesh:ye,SphereGeometry:vn,CylinderGeometry:Qn,CapsuleGeometry:jn,BoxGeometry:Ze,BufferGeometry:Be,Float32BufferAttribute:_e,MeshStandardMaterial:Mn,MeshBasicMaterial:tn,Vector3:V,Quaternion:Me,Color:Vt,SRGBColorSpace:le},Sr=(i,t,e)=>new Vt().setRGB(i,t,e,le),yi=(i,t,e)=>Math.min(e,Math.max(t,i));function Qi(i,t,e){this.x=i,this.v=0,this.t=i,this.k=t,this.c=e}Qi.prototype.step=function(i){for(;i>1e-6;){let t=Math.min(i,.008333333333333333),e=(this.t-this.x)*this.k-this.v*this.c;this.v+=e*t,this.x+=this.v*t,i-=t}};Qi.prototype.reset=function(i){this.x=this.t=i,this.v=0};function $m(i,t){let e=new xn({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});e.setClearColor(0,0),e.outputColorSpace=le,e.toneMapping=Oe;let n=new yn,s=Al(Jm);n.add(s.root);let r=new Le(16777215,3.2);r.position.set(-2,3,5);let o=new Le(Sr(1,.95,.92),1.4);o.position.set(3,1,4);let a=new Le(Sr(.9,.95,1),.8);a.position.set(0,3,-4);let l=new Sn(Sr(1,.98,.96),Sr(.62,.6,.66),1.9);n.add(r,o,a,l);let u=(t.yTop+t.yBot)/2,c=(t.yTop-t.yBot)/2,d=5.4,f=new we(2*Math.atan(c/d)*180/Math.PI,1,.1,50);f.position.set(0,u+.06,d),f.lookAt(0,u,0);let h=[Math.sin(ji.restArmAngle),Math.cos(ji.restArmAngle)],p={L:[new Qi(h[0],150,21),new Qi(h[1],150,21)],R:[new Qi(h[0],150,21),new Qi(h[1],150,21)]};function y(v,T,x,B){let I=T||h;v[0].t=I[0],v[1].t=I[1],B>0?(v[0].step(B),v[1].step(B)):(v[0].reset(I[0]),v[1].reset(I[1]));let L=v[0].x,G=v[1].x;return{upper:Math.atan2(L,G),forearm:0,reach:yi(Math.hypot(L,G),.5,1),handShape:x==="heart"?"heart":"open"}}let g=0;function m(v,T){g+=Math.max(0,T);let x=Tl();x.time=g,x.idle=1,x.headYaw=v.headYaw||0,x.headPitch=v.headPitch||0,x.headRoll=v.headRoll||0,x.lean=v.lean||0,x.hipShift=v.hipShift||0,x.chestRoll=v.chestRoll||0,x.breath=v.breath||0,x.bounce=v.bounce||0,x.gazeX=v.gazeX||0,x.gazeY=v.gazeY||0,x.blinkLeft=yi(v.blinkL||0,0,1),x.blinkRight=yi(v.blinkR||0,0,1),x.mouthOpen=yi(v.open||0,0,1),x.smile=yi(v.smile||0,-1,1),x.browLeft=yi(v.browL||0,-1,1),x.browRight=yi(v.browR||0,-1,1),x.screenLeftArm=y(p.L,v.L,v.Lshape,T),x.screenRightArm=y(p.R,v.R,v.Rshape,T),s.apply(x,T)}return{setSize(v,T,x){e.setPixelRatio(Math.min(x||1,2)),e.setSize(v,T,!1),f.aspect=v/T,f.updateProjectionMatrix()},apply:m,render(){e.render(n,f)},dispose(){let v=new Set,T=new Set;s.root.traverse(x=>{x.geometry&&v.add(x.geometry),x.material&&T.add(x.material)}),v.forEach(x=>x.dispose()),T.forEach(x=>x.dispose()),e.dispose(),e.forceContextLoss()}}}var Ce={tee:[[.235,.232],[.262,.244],[.33,.236],[.42,.242],[.5,.25],[.555,.246],[.605,.214],[.64,.16],[.662,.098]],teeDepth:.78,bodyCenterY:.42,bodyRadii:[.255,.25,.2],neckY:.66,collarRadius:.088,collarTube:.016,collarDepth:.86,hipY:.215,hipRadii:[.232,.1,.185],legX:.105,legTop:.19,legBottom:.08,legRadius:.078,shoeRadii:[.088,.052,.118],shoeY:.048,shoeZ:.03,headCenterY:.4,headRadii:[.46,.44,.42],headGain:1.2,maxHeadAngle:.6,hairColumns:96,hairCapRows:26,hairCurtainRows:14,hairThickness:.04,hairPuff:.035,hairCapEnd:1.5708,hairDrop:.45,hairFaceEnd:1.95,hairFlare:.03,hairFlick:.055,hairCurtainThickness:.035,hairFaceInner:.52,hairFaceOuter:.98,hairSkirtFrom:.98,hairEdgeThin:.25,hairEdgeTaper:.22,hairSkirtTop:1.1,hairSkirtInset:.02,hairSkirtClumpIn:.4,hairSkirtTuckBlend:.15,hairCapBlend:.3,hairCapLip:.004,hairSkirtEdge:.3,hairSkirtEdgeThin:.35,hairSkirtColumns:72,hairSkirtCapRows:8,hairHang:.45,hairMaxSwing:.27,hairLeanKick:.18,hairline:.86,hairlineCurve:.4,partNotch:.1,partWidth:.03,partDepth:.032,hairClumps:16,hairClumpDepth:.2,hairWave:.03,hairWaves:7,headOccluderRadii:[.55,.47,.45],headOccluderOffsetY:.03,bobOccluderInner:.46,bobOccluderOuter:.62,clipPhi:-.5,clipTheta:.72,clipPearls:4,clipPearlRadius:.025,clipSpacing:.05,clipTilt:-.75,eyeX:.168,eyeY:-.045,scleraRadii:[.078,.088,.01],irisRadii:[.06,.072,.006],pupilRadii:[.028,.036,.004],gazeTravelX:.017,gazeTravelY:.013,shutEyeScale:.08,eyeCloseLine:-.15,lashArcRadius:.086,lashSweep:1.95,lashTube:.0105,lashRise:.006,flickLength:.034,flickAngle:.75,closedArcRadius:.07,closedSweep:1.7,eyeSurprise:.22,eyeAngerSquint:.3,happyEyeFrom:.45,happyEyeTo:.8,browY:.115,browArcRadius:.11,browSweep:.85,browTube:.0095,browTravel:.032,browTilt:.32,sadBrow:.45,cheekX:.25,cheekY:-.15,cheekRadii:[.07,.043,.012],cheekGrow:.45,noseY:-.115,noseRadii:[.021,.015,.014],mouthY:-.215,mouthHalfWidth:.052,mouthLine:.0075,smileTilt:.5,mouthDrop:.085,mouthLineGoneAt:.18,mouthWiden:.026,openSmileFlatten:.6,smileWiden:.012,lipRadii:[.034,.015,.011],lowerLipTuck:.004,shoulderX:.235,shoulderY:.545,shoulderZ:0,upperLength:.17,forearmLength:.16,limbRadius:.041,sleeveRadius:.06,sleeveLength:.55,palmRadius:.056,restArmAngle:.42,clearance:.012,breathAmount:.012,bounceHeight:.06,handShapeFade:.06},Jt={skin:[1,.89,.84],skinShade:[.97,.8,.76],hair:[.25,.165,.145],tee:[.17,.16,.19],denim:[.22,.23,.29],shoe:[.97,.96,.95],sole:[.86,.84,.84],sclera:[1,1,1],iris:[.42,.26,.19],pupil:[.16,.09,.08],lash:[.16,.1,.1],brow:[.36,.25,.21],blush:[1,.58,.64],nose:[1,.76,.74],mouth:[.55,.16,.22],lip:[.96,.5,.56],teeth:[1,.99,.97],tongue:[1,.56,.62],pearl:[.98,.97,.95],heart:[1,.42,.55],shadow:[.3,.2,.22],shine:[1,1,1]},Xa=.7,El=.42;function Km(i,t,e=48){let n=[],s=[];for(let[u,c]of i)for(let d=0;d<e;d++){let f=d/e*Math.PI*2;n.push(Math.sin(f)*c,u,Math.cos(f)*c*t)}let r=i.length;for(let u=0;u<r-1;u++)for(let c=0;c<e;c++){let d=u*e+c,f=u*e+(c+1)%e,h=d+e,p=f+e;s.push(d,f,h,f,p,h)}let o=n.length/3;n.push(0,i[0][0],0);let a=n.length/3;n.push(0,i[r-1][0],0);let l=(r-1)*e;for(let u=0;u<e;u++)s.push(o,(u+1)%e,u),s.push(a,l+u,l+(u+1)%e);return{positions:n,indices:s}}function jm(i,t,e,n=48,s=12){let r=[],o=[];for(let a=0;a<n;a++){let l=a/n*Math.PI*2,u=[Math.sin(l)*i,0,Math.cos(l)*i*e],c=Math.hypot(Math.sin(l),Math.cos(l)*e),d=[Math.sin(l)/c*1,0,Math.cos(l)*e/c];for(let f=0;f<s;f++){let h=f/s*Math.PI*2;r.push(u[0]+d[0]*Math.cos(h)*t,Math.sin(h)*t,u[2]+d[2]*Math.cos(h)*t)}}for(let a=0;a<n;a++)for(let l=0;l<s;l++){let u=a*s+l,c=a*s+(l+1)%s,d=(a+1)%n*s+l,f=(a+1)%n*s+(l+1)%s;o.push(u,d,c,c,d,f)}return{positions:r,indices:o}}function Ya(i,t,e,n=24,s=10){let r=[],o=[],a=-Math.PI/2-e/2;for(let l=0;l<=n;l++){let u=a+e*l/n;for(let c=0;c<s;c++){let d=c/s*Math.PI*2,f=i+Math.cos(d)*t;r.push(Math.cos(u)*f,Math.sin(u)*f,Math.sin(d)*t)}}for(let l=0;l<n;l++)for(let u=0;u<s;u++){let c=l*s+u,d=l*s+(u+1)%s,f=c+s,h=d+s;o.push(c,f,d,d,f,h)}for(let[l,u]of[[0,-1],[n,1]]){let c=a+e*l/n,d=r.length/3,f=[-Math.sin(c)*u,Math.cos(c)*u];r.push(Math.cos(c)*i+f[0]*t*.6,Math.sin(c)*i+f[1]*t*.6,0);for(let h=0;h<s;h++){let p=l*s+h,y=l*s+(h+1)%s;u>0?o.push(y,p,d):o.push(p,y,d)}}return{positions:r,indices:o}}var dn=i=>{let t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function Cl(i){let t=Ce,e=Math.abs(i),n=t.hairline+t.hairlineCurve*(e/t.hairFaceInner)**2-t.partNotch*Math.exp(-((i/.07)**2)),s=dn((e-t.hairFaceInner)/(t.hairFaceOuter-t.hairFaceInner));return Math.min(n+(t.hairFaceEnd-n)*s,t.hairFaceEnd)}function Pl(i){return Math.abs(i)>=Ce.hairSkirtFrom}function Qm(i){let t=Ce;return t.hairDrop+t.hairWave*Math.sin(i*t.hairWaves)}function t0(i,t){let e=Ce,[n,,s]=e.headRadii,r=Math.sin(t),o=(e.hairThickness+e.hairPuff*r*r)*(1+e.hairClumpDepth*Math.cos(i*e.hairClumps)*dn(t/1.2)),a=r*Math.sin(i)*n,l=r*Math.cos(i)*s;return o-=e.partDepth*Math.exp(-((a/e.partWidth)**2))*dn(l/.12),o}function Il(i,t,e,n){let s=Ce,r=t0(i,t);if(n){let l=dn((t-(s.hairCapEnd-s.hairCapBlend))/s.hairCapBlend),u=Ms(i,t,0)-s.hairSkirtInset+s.hairCapLip;return Math.max(r+(u-r)*l,.004)}let o=dn((Math.abs(i)-(s.hairSkirtFrom-.2))/.2),a=s.hairEdgeThin+(1-s.hairEdgeThin)*dn((e-t)/s.hairEdgeTaper);return Math.max(r*(a+(1-a)*o),.004)}function bs(i,t,e){let[n,s,r]=Ce.headRadii,o=Math.sin(t),a=Math.cos(t),l=[o*Math.sin(i),a,o*Math.cos(i)],u=e,c=.012;return[[l[0]*(n+u),l[1]*(s+u),l[2]*(r+u)],[l[0]*(n-c),l[1]*(s-c),l[2]*(r-c)]]}function Rl(i,t,e){let n=Ce,s=Math.sin(i),r=Math.cos(i),o=Math.abs(i)-n.hairSkirtFrom,a=n.hairCurtainThickness*(n.hairSkirtEdgeThin+(1-n.hairSkirtEdgeThin)*dn(o/n.hairSkirtEdge));if(e<=0){let h=Ms(i,t,0)-n.hairSkirtInset;return[bs(i,t,h)[0],bs(i,t,h-a)[0]]}let l=bs(i,n.hairCapEnd,Ms(i,n.hairCapEnd,0)-n.hairSkirtInset)[0],u=e/n.hairDrop,d=Ms(i,n.hairCapEnd,u)-Ms(i,n.hairCapEnd,0)+n.hairFlare*u+n.hairFlick*dn((u-.7)/.3),f=[l[0]+s*d,l[1]-e,l[2]+r*d];return[f,[f[0]-s*a,f[1],f[2]-r*a]]}function Ms(i,t,e){let n=Ce,s=Math.sin(t),r=n.hairThickness+n.hairPuff*s*s,o=dn((t-(n.hairCapEnd-n.hairSkirtTuckBlend))/n.hairSkirtTuckBlend),a=dn(e/n.hairSkirtClumpIn);return r*(1-n.hairClumpDepth*(1-o)+n.hairClumpDepth*Math.cos(i*n.hairClumps)*a)}function Ss(i,t,e,n,s,r){let o=i.length/3;for(let a of[e,n,s,r])i.push(...a);t.push(o,o+1,o+2,o,o+2,o+3)}function e0(){let i=Ce,t=i.hairColumns,e=i.hairCapRows,n=e+1,s=[],r=[];for(let c=0;c<t;c++){let d=-Math.PI+(c+.5)/t*Math.PI*2,f=Pl(d),h=f?i.hairCapEnd:Cl(d);for(let p=0;p<=e;p++){let y=h*p/e,[g,m]=bs(d,y,Il(d,y,h,f));s.push(g),r.push(m)}}let o=[],a=[];for(let c of s)o.push(...c);let l=o.length/3;for(let c of r)o.push(...c);let u=(c,d)=>c%t*n+d;for(let c=0;c<t;c++)for(let d=0;d<e;d++){let f=u(c,d),h=u(c+1,d),p=u(c,d+1),y=u(c+1,d+1);a.push(f,p,h,h,p,y),a.push(l+f,l+h,l+p,l+h,l+y,l+p)}for(let c=0;c<t;c++)Ss(o,a,s[u(c,e)],r[u(c,e)],r[u(c+1,e)],s[u(c+1,e)]);return{positions:o,indices:a}}function n0(){let i=Ce,t=i.hairSkirtColumns,e=i.hairSkirtCapRows,n=i.hairCurtainRows,s=e+n,r=s+1,o=[],a=[],l=2*Math.PI-2*i.hairSkirtFrom;for(let h=0;h<=t;h++){let p=i.hairSkirtFrom+h/t*l;p>Math.PI&&(p-=2*Math.PI);let y=Qm(p);for(let g=0;g<=s;g++){let[m,v]=g<=e?Rl(p,i.hairSkirtTop+(i.hairCapEnd-i.hairSkirtTop)*g/e,0):Rl(p,i.hairCapEnd,y*(g-e)/n);o.push(m),a.push(v)}}let u=[],c=[];for(let h of o)u.push(...h);let d=u.length/3;for(let h of a)u.push(...h);let f=(h,p)=>h*r+p;for(let h=0;h<t;h++)for(let p=0;p<s;p++){let y=f(h,p),g=f(h+1,p),m=f(h,p+1),v=f(h+1,p+1);c.push(y,m,g,g,m,v),c.push(d+y,d+g,d+m,d+g,d+v,d+m)}for(let h=0;h<t;h++)Ss(u,c,o[f(h,s)],a[f(h,s)],a[f(h+1,s)],o[f(h+1,s)]),Ss(u,c,o[f(h,0)],o[f(h+1,0)],a[f(h+1,0)],a[f(h,0)]);for(let h=0;h<s;h++)Ss(u,c,a[f(0,h)],a[f(0,h+1)],o[f(0,h+1)],o[f(0,h)]),Ss(u,c,a[f(t,h)],o[f(t,h)],o[f(t,h+1)],a[f(t,h+1)]);return{positions:u,indices:c}}function i0(i,t){let e=Pl(i),n=e?Ce.hairCapEnd:Cl(i);return bs(i,t,Il(i,t,n,e))}function Ll(i){let t=E=>new i.Color().setRGB(E[0],E[1],E[2],i.SRGBColorSpace),e=new Map;function n(E,A=Xa){let U=E.join(",")+A;return e.has(U)||e.set(U,new i.MeshStandardMaterial({color:t(E),roughness:A,metalness:0})),e.get(U)}let s=new i.SphereGeometry(1,48,32),r=E=>new i.Vector3(E[0],E[1],E[2]),o=(E,A)=>new i.Quaternion().setFromAxisAngle(r(A).normalize(),E);function a(E){let A=new i.BufferGeometry;return A.setAttribute("position",new i.Float32BufferAttribute(E.positions,3)),A.setIndex(E.indices),A.computeVertexNormals(),A}function l(E,A,U=Xa){let W=new i.Mesh(s,n(A,U));return W.scale.set(E[0],E[1],E[2]),W}function u(E,A,U,W=Xa){let k=new i.CapsuleGeometry(A,Math.max(1e-4,E-2*A),8,20);return new i.Mesh(k,n(U,W))}let c=Ce,d=new i.Object3D,f=new i.Object3D,h=new i.Object3D,p=new i.Object3D,y=new i.Object3D;d.add(f),f.add(h),f.add(p),p.add(y),p.position.set(0,c.neckY,0);let g=[0,c.headCenterY,0];function m(E,A,U=.004){let[W,k,F]=c.headRadii,j=Math.max(1e-4,1-(E/W)**2-(A/k)**2),st=F*Math.sqrt(j),et=new i.Vector3(E/(W*W),A/(k*k),st/(F*F)).normalize();return{p:new i.Vector3(E,c.headCenterY+A,st).addScaledVector(et,U),q:new i.Quaternion().setFromUnitVectors(new i.Vector3(0,0,1),et)}}function v(E,A,U,W=.004){let{p:k,q:F}=m(A,U,W);E.position.copy(k),E.quaternion.copy(F)}let T=new i.MeshBasicMaterial({color:t(Jt.shadow),transparent:!0,opacity:.16,depthWrite:!1}),x=new i.Mesh(s,T);x.scale.set(.42,.004,.3),d.add(x);for(let E of[-1,1]){let A=u(c.legTop-c.legBottom+2*c.legRadius,c.legRadius,Jt.denim,.85);A.position.set(E*c.legX,(c.legTop+c.legBottom)/2,0),d.add(A);let U=l(c.shoeRadii,Jt.shoe,.55);U.position.set(E*c.legX,c.shoeY,c.shoeZ),d.add(U);let W=l([c.shoeRadii[0]*1.04,.016,c.shoeRadii[2]*1.03],Jt.sole,.6);W.position.set(E*c.legX,.014,c.shoeZ),d.add(W)}let B=l(c.hipRadii,Jt.denim,.85);B.position.set(0,c.hipY,0),f.add(B);let I=new i.Mesh(a(Km(c.tee,c.teeDepth)),n(Jt.tee,.8));h.add(I);let L=new i.Mesh(a(jm(c.collarRadius,c.collarTube,c.collarDepth)),n(Jt.tee,.8));L.position.set(0,c.neckY-.004,0),h.add(L);let G=u(.2,.068,Jt.skinShade);G.position.set(0,.06,0),p.add(G);let w=l(c.headRadii,Jt.skin);w.position.set(...g),y.add(w);let M=!!globalThis.DEBUG_HAIR,z=M?new i.MeshStandardMaterial({color:3186768,roughness:.6}):n(Jt.hair,El),tt=new i.Mesh(a(e0()),z);tt.position.set(...g),y.add(tt);let Q=new i.Object3D;Q.position.set(...g),y.add(Q);let lt=a(n0()),dt=M?new i.MeshStandardMaterial({color:4219104,roughness:.6}):n(Jt.hair,El);Q.add(new i.Mesh(lt,dt));let ht={v:0,vel:0},mt={v:0,vel:0},ct=0,_t=new i.Object3D;{let[E]=i0(c.clipPhi,c.clipTheta),A=new i.Vector3(E[0]/c.headRadii[0]**2,E[1]/c.headRadii[1]**2,E[2]/c.headRadii[2]**2).normalize();_t.position.set(E[0]+g[0],E[1]+g[1],E[2]+g[2]).addScaledVector(A,c.clipPearlRadius*.55),_t.quaternion.copy(new i.Quaternion().setFromUnitVectors(new i.Vector3(0,0,1),A)).multiply(o(c.clipTilt,[0,0,1]));for(let U=0;U<c.clipPearls;U++){let W=l(Array(3).fill(c.clipPearlRadius),Jt.pearl,.22);W.position.set((U-(c.clipPearls-1)/2)*c.clipSpacing,0,0),_t.add(W)}y.add(_t)}let vt=a(Ya(c.lashArcRadius,c.lashTube,c.lashSweep)),wt=a(Ya(c.closedArcRadius,c.lashTube*.9,c.closedSweep)),Nt=a(Ya(c.browArcRadius,c.browTube,c.browSweep)),Wt=[],ut=[],pt=[];for(let E of[-1,1]){let A=new i.Object3D;y.add(A);let U=l(c.scleraRadii,Jt.sclera,.4),W=l(c.irisRadii,Jt.iris,.35),k=l(c.pupilRadii,Jt.pupil,.35),F=l([.02,.02,.004],Jt.shine,.3),j=l([.01,.01,.003],Jt.shine,.3),st=new i.Object3D,et=new i.Mesh(vt,n(Jt.lash,.5));et.quaternion.copy(o(Math.PI,[0,0,1])),st.add(et);let R=u(c.flickLength,c.lashTube*.9,Jt.lash,.5),K=Math.PI/2-c.lashSweep/2,O=[E*Math.cos(K)*c.lashArcRadius,Math.sin(K)*c.lashArcRadius];R.position.set(O[0]+E*Math.cos(c.flickAngle)*c.flickLength*.45,O[1]+Math.sin(c.flickAngle)*c.flickLength*.45,0),R.quaternion.copy(o(-E*(Math.PI/2-c.flickAngle),[0,0,1])),st.add(R);let $=new i.Mesh(wt,n(Jt.lash,.5));for(let Ct of[U,W,k,F,j,st,$])A.add(Ct);Wt.push({pivot:A,sclera:U,iris:W,pupil:k,big:F,small:j,lash:st,closed:$,side:E,x:E*c.eyeX});let nt=new i.Object3D;v(nt,E*c.eyeX,c.browY,.004);let ot=new i.Object3D,ft=new i.Mesh(Nt,n(Jt.brow,.6));ft.quaternion.copy(o(Math.PI,[0,0,1])),ft.position.set(0,-c.browArcRadius*.92,0),ot.add(ft),nt.add(ot),y.add(nt),ut.push({bar:ot,side:E});let Mt=l(c.cheekRadii,Jt.blush,.8);v(Mt,E*c.cheekX,c.cheekY,0),y.add(Mt),pt.push(Mt)}let bt=l(c.noseRadii,Jt.nose,.6);v(bt,0,c.noseY,.004),y.add(bt);let gt=new i.Object3D;v(gt,0,c.mouthY,.002),y.add(gt);let Rt=[],Ot=[];for(let E of[-1,1]){let A=new i.Object3D,U=u(c.mouthHalfWidth,c.mouthLine,Jt.mouth,.5);Ot.push(U),U.quaternion.copy(o(Math.PI/2,[0,0,1])),U.position.set(E*(c.mouthHalfWidth*.5-.004),0,.01),A.add(U),gt.add(A),Rt.push({pivot:A,side:E})}let Bt=l([.04,.004,.01],Jt.mouth,.6);gt.add(Bt);let Gt=l([.03,.009,.006],Jt.teeth,.4);gt.add(Gt);let kt=l([.024,.012,.006],Jt.tongue,.6);gt.add(kt);let jt=l(c.lipRadii,Jt.lip,.45);gt.add(jt);function q(E){let A=l(Array(3).fill(c.sleeveRadius*1.04),Jt.tee,.8),U=u(c.upperLength*c.sleeveLength,c.sleeveRadius,Jt.tee,.8),W=u(c.upperLength,c.limbRadius,Jt.skin),k=l(Array(3).fill(c.limbRadius),Jt.skin),F=u(c.forearmLength,c.limbRadius*.93,Jt.skin),j=new i.Object3D,st=new i.Object3D,et=new i.Object3D;for(let ne of[A,U,W,k,F,j,et])f.add(ne);let R=l([c.palmRadius,c.palmRadius,c.palmRadius*.8],Jt.skin);R.position.set(0,-c.palmRadius*.6,0),j.add(R);let K=-E,O=new i.Object3D,$=l([.046,.034,.036],Jt.skin);$.position.set(0,-c.palmRadius*1.25,0);let nt=l([.022,.028,.022],Jt.skin);nt.position.set(K*.05,-.022,.018),O.add($,nt);let ot=new i.Object3D,ft=u(.075,.013,Jt.skin);ft.position.set(0,-c.palmRadius-.042,0),ot.add(ft);let Mt=new i.Object3D;for(let ne of[-1,1]){let te=u(.075,.013,Jt.skin);te.position.set(ne*.02,-c.palmRadius-.04,0),te.quaternion.copy(o(-ne*.22,[0,0,1])),Mt.add(te)}let Ct=new i.Object3D,Ut=u(.065,.015,Jt.skin);Ut.position.set(0,.056,.01),st.add(Ut),Ct.add(st);let Yt={open:O,fist:new i.Object3D,point:ot,peace:Mt,thumbsUp:Ct,heart:new i.Object3D},Et={};for(let[ne,te]of Object.entries(Yt))j.add(te),Et[ne]=ne==="open"?1:0,te.scale.setScalar(Et[ne]),te.visible=Et[ne]>.01;let re=.07,ce=new i.Mesh(new i.BoxGeometry(re,re,.035),n(Jt.heart,.5));ce.quaternion.copy(o(Math.PI/4,[0,0,1])),et.add(ce);let ue=re/(2*Math.SQRT2);for(let ne of[-1,1]){let te=l([re/2,re/2,.02],Jt.heart,.5);te.position.set(ne*ue,ue,0),et.add(te)}return et.scale.setScalar(0),et.visible=!1,{outward:E,cap:A,sleeve:U,upper:W,elbow:k,fore:F,hand:j,thumbUpFrame:st,heart:et,shapes:Yt,weights:Et,elbowDepth:{v:0,vel:0},handDepth:{v:0,vel:0}}}let Se=q(-1),Xt=q(1),zt=(E,A,U)=>Math.min(Math.max(E,A),U),Tt=dn;function Kt(E,A,U,W,k){if(U<=0){E.v=A,E.vel=0;return}let F=Math.min(Math.max(U,1/240),1/30);E.vel+=((A-E.v)*W-E.vel*k)*F,E.v+=E.vel*F}function X(E,A,U,W,k,F,j){let st=0,et=[[[W[0],W[1]+c.headOccluderOffsetY,W[2]],c.headOccluderRadii,A]];U!==null&&et.push([[0,c.bodyCenterY,0],c.bodyRadii,U]);for(let[R,K,O]of et){let $=K[0]+O,nt=K[1]+O,ot=K[2]+O,ft=((E[0]-R[0])/$)**2+((E[1]-R[1])/nt)**2;ft<1&&(st=Math.max(st,R[2]+ot*Math.sqrt(1-ft)+c.clearance))}return Math.max(st,S(E,A,W,k,F,j))}function S(E,A,U,W,k,F){let j=Math.cos(k),st=Math.sin(k),et=E[0]-U[0],R=E[1]-U[1],K=-et*st+R*j;if(K>A||K<-(c.hairDrop+c.hairWave)-2*A)return 0;let O=et*j+R*st,$=O>=0?1:-1,nt=Math.abs(O),ot=Math.max(c.hairSkirtFrom+$*W,.05),ft=c.bobOccluderOuter+A,Mt=Math.max(c.bobOccluderInner-A,0);if(nt>=ft)return 0;let Ct=Math.min(Math.sqrt(ft*ft-nt*nt),nt/Math.tan(ot)+A/Math.sin(ot)),Ut=nt<Mt?Math.sqrt(Mt*Mt-nt*nt):0;return Ct<Ut||F-U[2]<Ut?0:U[2]+Ct+c.clearance}let _=[[.25,c.limbRadius,null],[.5,c.limbRadius,null],[.75,c.limbRadius,0],[1,c.limbRadius,c.limbRadius]],Y=[0,.125,.25,.375,.5,.625,.75,.875].map(E=>[E,c.limbRadius,c.limbRadius]).concat([[1,c.palmRadius,c.palmRadius]]);function it(E,A,U,W,k,F,j,st,et){let R=U,K=W;for(let O=0;O<2;O++)for(let[$,nt,ot]of k){let ft=[E[0]+(A[0]-E[0])*$,E[1]+(A[1]-E[1])*$],Mt=R+(K-R)*$,Ct=X(ft,nt,ot,j,st,et,Mt);Mt>=Ct||(F||$>=.5?K=Math.max(K,(Ct-(1-$)*R)/Math.max($,.05)):R=Math.max(R,(Ct-$*K)/(1-$)))}return[R,K]}function P(E,A,U,W){let k=new i.Vector3().subVectors(U,A),F=k.length();E.position.copy(A).add(U).multiplyScalar(.5),E.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),F>1e-4?k.clone().divideScalar(F):new i.Vector3(0,1,0)),E.scale.set(1,Math.max(F/W,.01),1)}function N(E,A,U,W,k,F,j){var fn,On;let st=A.outward,et=new i.Vector3(st*c.shoulderX,c.shoulderY+U,c.shoulderZ),R=zt((fn=E.reach)!=null?fn:1,.5,1),K=c.upperLength*R,O=c.forearmLength*R,$=E.upper,nt=E.upper+E.forearm,ot=[et.x+st*Math.sin($)*K,et.y-Math.cos($)*K],ft=[ot[0]+st*Math.sin(nt)*O,ot[1]-Math.cos(nt)*O],Mt=Math.sqrt(Math.max(0,1-R*R)),Ct=[et.x,et.y],Ut=it(Ct,ot,et.z,et.z+c.upperLength*Mt,_,!0,W,k,F),Yt=it(ot,ft,Ut[1],Ut[1]+c.forearmLength*Mt,Y,!1,W,k,F);Kt(A.elbowDepth,Yt[0],j,420,41),Kt(A.handDepth,Yt[1],j,420,41);let Et=new i.Vector3(ot[0],ot[1],A.elbowDepth.v),re=new i.Vector3(ft[0],ft[1],A.handDepth.v);A.cap.position.copy(et),P(A.upper,et,Et,c.upperLength);let ce=et.clone().lerp(Et,c.sleeveLength);P(A.sleeve,et,ce,c.upperLength*c.sleeveLength),A.elbow.position.copy(Et),P(A.fore,Et,re,c.forearmLength);let ue=new i.Vector3().subVectors(re,Et),ne=new i.Quaternion().setFromUnitVectors(new i.Vector3(0,-1,0),ue.length()>1e-4?ue.clone().normalize():new i.Vector3(0,-1,0));A.hand.position.copy(re),A.hand.quaternion.copy(ne),A.thumbUpFrame.quaternion.copy(ne.clone().invert());let te=j>0?Math.min(1,j/c.handShapeFade):1;for(let[Pe,Bn]of Object.entries(A.shapes)){let Je=Pe===((On=E.handShape)!=null?On:"open")?1:0;A.weights[Pe]+=(Je-A.weights[Pe])*te,Bn.scale.setScalar(A.weights[Pe]),Bn.visible=A.weights[Pe]>.01}let be=A.weights.heart;A.heart.position.copy(re).add(new i.Vector3(0,.15,.06)),A.heart.scale.setScalar(be),A.heart.visible=be>.01}function C(E,A){let U=E.bounce*c.bounceHeight;d.position.set(E.hipShift,E.rise+U,0),d.scale.setScalar(E.depthScale),x.position.set(0,.002-(E.rise+U),.02);let W=1-zt(U/.2,0,.4);x.scale.set(.42*W,.004,.3*W);let k=o(E.chestYaw,[0,1,0]).multiply(o(E.chestRoll,[0,0,1]));f.quaternion.copy(k);let F=1+E.breath*c.breathAmount;h.scale.set(1,F,1);let j=(F-1)*c.neckY;p.position.set(0,c.neckY+j,0);let st=c.headGain,et=c.maxHeadAngle,R=zt(E.headYaw*st,-et,et),K=zt(E.headPitch*st,-et,et),O=zt(E.headRoll*st,-et,et),$=o(R,[0,1,0]).multiply(o(-K,[1,0,0])).multiply(o(-O,[0,0,1])),nt=k.clone().invert().multiply($);y.quaternion.copy(nt),D(E,K,O,A),H(E);let ot=p.position.clone().add(new i.Vector3(0,c.headCenterY,0).applyQuaternion(nt)),ft=R-E.chestYaw,Mt=-O+ht.v;N(E.screenLeftArm,Se,j,[ot.x,ot.y,ot.z],ft,Mt,A),N(E.screenRightArm,Xt,j,[ot.x,ot.y,ot.z],ft,Mt,A)}function D(E,A,U,W){let k=W>0?zt((E.lean-ct)/W,-1.5,1.5):0;ct=E.lean,Kt(ht,zt(U*c.hairHang+k*c.hairLeanKick,-c.hairMaxSwing,c.hairMaxSwing),W,90,8),Kt(mt,zt(A*c.hairHang,-c.hairMaxSwing,c.hairMaxSwing),W,90,8),Q.quaternion.copy(o(ht.v,[0,0,1]).multiply(o(mt.v,[1,0,0])))}function H(E){let A=E.gazeX*c.gazeTravelX,U=E.gazeY*c.gazeTravelY,W=Math.max(0,E.smile),k=Math.max(0,-E.smile),F=Tt((E.smile-c.happyEyeFrom)/(c.happyEyeTo-c.happyEyeFrom));for(let[Yt,Et]of Wt.entries()){let re=Yt===0?E.blinkLeft:E.blinkRight,ce=Yt===0?E.browLeft:E.browRight,ue=Math.max(0,ce),ne=Math.max(0,-ce);v(Et.pivot,Et.x,c.eyeY,0);let te=1+ue*c.eyeSurprise,be=(1-re*(1-c.shutEyeScale))*(1-ne*c.eyeAngerSquint)*(1-F*(1-c.shutEyeScale)),[fn,On,Pe]=c.scleraRadii,Bn=On*te*be,Je=c.eyeCloseLine*On*(1-be);Et.sclera.scale.set(fn*te,Bn,Pe),Et.sclera.position.set(0,Je-0,0);let Si=U*be;Et.iris.scale.set(c.irisRadii[0]*te,c.irisRadii[1]*te*be,c.irisRadii[2]),Et.iris.position.set(A*te,Je+Si,Pe),Et.pupil.scale.set(c.pupilRadii[0]*te,c.pupilRadii[1]*te*be,c.pupilRadii[2]),Et.pupil.position.set(A*te,Je+Si-.006*be,Pe+c.irisRadii[2]);let wr=re<.45&&F<.3&&ne<.7;Et.big.position.set(A*te+.02,Je+Si+.026*be,Pe+.012),Et.small.position.set(A*te-.018,Je+Si-.03*be,Pe+.011),Et.big.visible=Et.small.visible=wr;for(let rt of[Et.sclera,Et.iris,Et.pupil])rt.visible=be>.12;let Ar=Je+Bn+c.lashRise;Et.lash.position.set(0,Ar-c.lashArcRadius,Pe+.004),Et.lash.quaternion.copy(o(Et.side*ne*.25,[0,0,1]));let b=Tt((re-.6)/.2)*(1-F),Z=Tt((re-.8)/.15)*(1-F);Et.lash.scale.setScalar(Math.max(1e-4,1-Z)),Et.lash.visible=Z<.99,Et.closed.scale.setScalar(Math.max(1e-4,b)),Et.closed.position.set(0,Je+c.closedArcRadius-.006,Pe+.004),Et.closed.visible=b>.01}for(let[Yt,Et]of ut.entries()){let re=Yt===0?E.browLeft:E.browRight;Et.bar.position.set(0,re*c.browTravel,.006),Et.bar.quaternion.copy(o(-Et.side*(re*c.browTilt+k*c.sadBrow),[0,0,1]))}for(let Yt of pt){let Et=1+W*c.cheekGrow;Yt.scale.set(c.cheekRadii[0]*Et,c.cheekRadii[1]*Et,c.cheekRadii[2])}let j=E.mouthOpen,st=1-c.openSmileFlatten*Tt(j/.4),et=E.smile*c.smileTilt*st;for(let Yt of Rt)Yt.pivot.quaternion.copy(o(Yt.side*et,[0,0,1]));let R=.004+c.mouthDrop*j,K=.04+c.mouthWiden*j+c.smileWiden*W;Bt.scale.set(K,R,.01),Bt.position.set(0,.004-R,.004),Bt.visible=j>.03;let O=s0(j,c.mouthLineGoneAt);for(let Yt of Ot)Yt.scale.set(Math.max(O,1e-4),1,Math.max(O,1e-4)),Yt.visible=O>.25;let $=.004-R,nt=Math.min(.009*Tt((j-.12)/.2),.3*R),ot=$+.88*R-nt,ft=(ot-$)/R,Mt=K*Math.sqrt(Math.max(0,1-ft*ft));Gt.scale.set(Math.max(1e-4,Math.min(K*.72,Mt*.8)),Math.max(1e-4,nt),.006),Gt.position.set(0,ot,.009),Gt.visible=j>.12,kt.position.set(0,.004-R*1.45,.009);let Ct=Math.min(1,j*1.6);kt.scale.set(.024*Ct,.012*Ct,.006),kt.visible=j>.25,jt.position.set(0,.004-2*R-c.lipRadii[1]+c.lowerLipTuck,.006);let Ut=Math.max(O,1e-4);jt.scale.set(c.lipRadii[0]*(1+.2*W)*Ut,c.lipRadii[1]*Ut,c.lipRadii[2]),jt.visible=O>.25}return{root:d,apply:C,Shape:Ce}}function s0(i,t){let e=Math.min(1,Math.max(0,(i-.03)/(t-.03)));return 1-e*e*(3-2*e)}function Dl(){let i={upper:Ce.restArmAngle,forearm:0,reach:1,handShape:"open"};return{headYaw:0,headPitch:0,headRoll:0,lean:0,rise:0,depthScale:1,hipShift:0,chestRoll:0,chestYaw:0,breath:0,bounce:0,gazeX:0,gazeY:0,blinkLeft:0,blinkRight:0,mouthOpen:0,smile:0,browLeft:0,browRight:0,screenLeftArm:{...i},screenRightArm:{...i},time:0}}var r0={Object3D:Ae,Mesh:ye,SphereGeometry:vn,CylinderGeometry:Qn,CapsuleGeometry:jn,BoxGeometry:Ze,BufferGeometry:Be,Float32BufferAttribute:_e,MeshStandardMaterial:Mn,MeshBasicMaterial:tn,Vector3:V,Quaternion:Me,Color:Vt,SRGBColorSpace:le},Ul=(i,t,e)=>new Vt().setRGB(i,t,e,le),vi=(i,t,e)=>Math.min(e,Math.max(t,i)),o0=i=>Math.atan2(Math.sin(i),Math.cos(i));function ts(i,t,e){this.x=i,this.v=0,this.t=i,this.k=t,this.c=e}ts.prototype.step=function(i){for(;i>1e-6;){let t=Math.min(i,.008333333333333333),e=(this.t-this.x)*this.k-this.v*this.c;this.v+=e*t,this.x+=this.v*t,i-=t}};ts.prototype.reset=function(i){this.x=this.t=i,this.v=0};function a0(i,t){let e=new xn({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});e.setClearColor(0,0),e.outputColorSpace=le,e.toneMapping=Oe;let n=new yn,s=Ll(r0);n.add(s.root);let r=new Le(16777215,2.4);r.position.set(-2,3,5);let o=new Le(Ul(1,.95,.92),1.1);o.position.set(3,1,4);let a=new Le(Ul(.9,.95,1),.9);a.position.set(0,3,-4);let l=new Sn(16777215,14207172,.75);n.add(r,o,a,l);let u=(t.yTop+t.yBot)/2,c=(t.yTop-t.yBot)/2,d=5.4,f=new we(2*Math.atan(c/d)*180/Math.PI,1,.1,50);f.position.set(0,u+.06,d),f.lookAt(0,u,0);let h=Ce.upperLength,p=Ce.forearmLength,y=h+p,g=[Math.sin(Ce.restArmAngle),Math.cos(Ce.restArmAngle)],m={L:[new ts(g[0],150,21),new ts(g[1],150,21)],R:[new ts(g[0],150,21),new ts(g[1],150,21)]};function v(B,I,L,G){let w=I||g;B[0].t=w[0],B[1].t=w[1],G>0?(B[0].step(G),B[1].step(G)):(B[0].reset(w[0]),B[1].reset(w[1]));let M=B[0].x*y,z=-B[1].x*y,tt=Math.hypot(M,z),Q=y-1e-4,lt=Math.abs(h-p)+.01;if(tt>Q&&(M*=Q/tt,z*=Q/tt,tt=Q),tt<lt){let Nt=tt>1e-6?lt/tt:0;M=Nt?M*Nt:0,z=Nt?z*Nt:-lt,tt=lt}let dt=Math.atan2(z,M),ht=Math.acos(vi((h*h+tt*tt-p*p)/(2*h*tt),-1,1)),mt=0,ct=0,_t=-1/0;for(let Nt of[1,-1]){let Wt=dt+Nt*ht,ut=Math.cos(Wt)*h,pt=Math.sin(Wt)*h,bt=ut-pt*.9;bt>_t&&(_t=bt,mt=ut,ct=pt)}let vt=Math.atan2(mt,-ct),wt=Math.atan2(M-mt,-(z-ct));return{upper:vt,forearm:o0(wt-vt),reach:1,handShape:L||"open"}}let T=0;function x(B,I){T+=Math.max(0,I);let L=Dl();L.time=T,L.headYaw=B.headYaw||0,L.headPitch=B.headPitch||0,L.headRoll=B.headRoll||0,L.lean=B.lean||0,L.hipShift=B.hipShift||0,L.chestRoll=B.chestRoll||0,L.breath=B.breath||0,L.bounce=B.bounce||0,L.gazeX=B.gazeX||0,L.gazeY=B.gazeY||0,L.blinkLeft=vi(B.blinkL||0,0,1),L.blinkRight=vi(B.blinkR||0,0,1),L.mouthOpen=vi(B.open||0,0,1),L.smile=vi(B.smile||0,-1,1),L.browLeft=vi(B.browL||0,-1,1),L.browRight=vi(B.browR||0,-1,1),L.screenLeftArm=v(m.L,B.L,B.Lshape,I),L.screenRightArm=v(m.R,B.R,B.Rshape,I),s.apply(L,I)}return{setSize(B,I,L){e.setPixelRatio(Math.min(L||1,2)),e.setSize(B,I,!1),f.aspect=B/I,f.updateProjectionMatrix()},apply:x,render(){e.render(n,f)},dispose(){let B=new Set,I=new Set;s.root.traverse(L=>{L.geometry&&B.add(L.geometry),L.material&&I.add(L.material)}),B.forEach(L=>L.dispose()),I.forEach(L=>L.dispose()),e.dispose(),e.forceContextLoss()}}}var ze={bodyCenterY:.38,bodyRadii:[.52,.43,.45],neckY:.58,headCenterY:.42,headRadii:[.6,.5,.5],headGain:1.25,maxHeadAngle:.75,maxHeadDown:.4,earBase:[.3,.251,-.001],earRoot:.1,earRadius:.2,earHeight:.26,earDepth:.36,earLean:.72,earForward:.42,innerEarRadius:.135,innerEarHeight:.19,innerEarDepth:.16,innerEarLift:[0,.02,.052],innerEarTilt:-.1,earPerk:.38,earFlop:.2,earFlopForward:.5,earBounce:.55,earBounceLimit:.2,bowAt:[-.06,.18,.052],bowTilt:.25,bowLoopX:.075,bowLoopRadii:[.085,.058,.034],bowLoopAngle:.32,bowKnotRadius:.036,eyeX:.25,eyeY:.05,eyeRadii:[.046,.056,.026],gazeTravelX:.03,gazeTravelY:.026,shutEyeScale:.12,eyeSurprise:.3,eyeAngerSquint:.35,eyeAngerSlant:.55,happyEyeFrom:.35,happyEyeTo:.7,happyEyeRadius:.042,happyEyeTube:.0115,happyEyeSweep:2.5,cheekX:.385,cheekY:-.115,cheekRadii:[.08,.05,.012],cheekGrow:.6,snoutY:-.05,snoutRadii:[.15,.108,.075],snoutOut:.03,nostrilX:.052,nostrilY:.004,nostrilRadii:[.021,.033,.012],snoutSmileLift:.012,snoutTalkLift:.018,sniffLift:.012,nostrilFlare:.45,mouthY:-.22,mouthLift:.004,mouthArcRadius:.036,mouthTube:.0095,mouthHalfSweep:1,mouthRestTilt:.12,smileTilt:.7,openSmileFlatten:.6,mouthDrop:.046,mouthWiden:.02,smileWiden:.012,mouthLineGoneAt:.18,shoulderX:.33,shoulderY:.5,shoulderZ:.3,upperLength:.11,forearmLength:.11,limbRadius:.078,pawRadius:.088,restArmAngle:.35,clearance:.012,tailBase:[.3,.26,-.34],tailTurns:2,tailLength:.22,tailCoil:.06,tailTube:.03,tailTaper:.55,tailAim:[.7,.15,-.8],tailWag:.16,tailWagRate:1.3,tailBoing:.9,tailSwingLimit:.42,breathAmount:.02,hopStretch:.07,surpriseStretch:.05,bounceHeight:.09,heartFade:.06},fe={skin:[.99,.84,.81],belly:[1,.89,.86],innerEar:[.97,.62,.62],snout:[.98,.67,.67],nostril:[.5,.22,.25],blush:[1,.56,.6],bow:[.95,.4,.44],bowKnot:[.86,.3,.36],ink:[.22,.14,.14],mouth:[.5,.17,.22],tongue:[1,.5,.58],heart:[1,.42,.55],shadow:[.4,.2,.2],shine:[1,1,1]},Nl=.6;function Bl(i){let t=C=>new i.Color().setRGB(C[0],C[1],C[2],i.SRGBColorSpace),e=new Map;function n(C,D=Nl){let H=C.join(",")+D;return e.has(H)||e.set(H,new i.MeshStandardMaterial({color:t(C),roughness:D,metalness:0})),e.get(H)}let s=new i.SphereGeometry(1,48,32),r=new i.CylinderGeometry(1,1,1,32,1,!0),o=C=>new i.Vector3(C[0],C[1],C[2]),a=(C,D)=>new i.Quaternion().setFromAxisAngle(o(D).normalize(),C);function l(C,D,H=Nl){let E=new i.Mesh(s,n(D,H));return E.scale.set(C[0],C[1],C[2]),E}function u(C){return new i.Mesh(r,n(C))}function c(C,D){let H=new i.BufferGeometry;return H.setAttribute("position",new i.Float32BufferAttribute(C,3)),H.setIndex(D),H.computeVertexNormals(),H}function d(C,D,H,E=0){let U=E>0?[[-E,C]]:[];for(let et=0;et<=12;et++)U.push([D*et/12,l0(C,et/12)]);let W=U.length-1,k=[],F=[];for(let[et,R]of U)for(let K=0;K<32;K++){let O=K/32*Math.PI*2;k.push(Math.cos(O)*R,et,Math.sin(O)*R*H)}let j=k.length/3;k.push(0,D,0);let st=k.length/3;k.push(0,U[0][0],0);for(let et=0;et<W;et++)for(let R=0;R<32;R++){let K=et*32+R,O=et*32+(R+1)%32,$=K+32,nt=O+32;F.push(K,$,O,O,$,nt)}for(let et=0;et<32;et++)F.push(W*32+et,j,W*32+(et+1)%32),F.push(st,et,(et+1)%32);return c(k,F)}function f(C,D,H,E){let W=[],k=[];for(let F=0;F<=20;F++){let j=H+E*F/20;for(let st=0;st<10;st++){let et=st/10*Math.PI*2,R=C+Math.cos(et)*D;W.push(Math.cos(j)*R,Math.sin(j)*R,Math.sin(et)*D)}}for(let F=0;F<20;F++)for(let j=0;j<10;j++){let st=F*10+j,et=F*10+(j+1)%10,R=st+10,K=et+10;k.push(st,R,et,et,R,K)}for(let[F,j]of[[0,-1],[20,1]]){let st=H+E*F/20,et=W.length/3,R=[-Math.sin(st)*j,Math.cos(st)*j];W.push(Math.cos(st)*C+R[0]*D*.6,Math.sin(st)*C+R[1]*D*.6,0);for(let K=0;K<10;K++){let O=F*10+K,$=F*10+(K+1)%10;j>0?k.push($,O,et):k.push(O,$,et)}}return c(W,k)}function h(){let H=[],E=[];for(let A=0;A<=96;A++){let U=A/96,W=Ol(U),k=2*Math.PI*ze.tailTurns*U,F=2*Math.PI*ze.tailTurns*ze.tailCoil*zl(U),j=Fl([ze.tailLength,-F*Math.sin(k),F*Math.cos(k)]),st=[0,-Math.cos(k),-Math.sin(k)],et=c0(j,st),R=ze.tailTube*(1-(1-ze.tailTaper)*U);for(let K=0;K<12;K++){let O=K/12*Math.PI*2,$=Math.cos(O),nt=Math.sin(O);H.push(W[0]+(st[0]*$+et[0]*nt)*R,W[1]+(st[1]*$+et[1]*nt)*R,W[2]+(st[2]*$+et[2]*nt)*R)}}for(let A=0;A<96;A++)for(let U=0;U<12;U++){let W=A*12+U,k=A*12+(U+1)%12,F=W+12,j=k+12;E.push(W,k,F,k,j,F)}return c(H,E)}let p=ze,y=new i.Object3D,g=new i.Object3D,m=new i.Object3D,v=new i.Object3D,T=new i.Object3D;y.add(g),g.add(m),g.add(v),v.add(T),v.position.set(0,p.neckY,0);function x(C,D,H=.004){let[E,A,U]=p.headRadii,W=Math.max(1e-4,1-(C/E)**2-(D/A)**2),k=U*Math.sqrt(W),F=new i.Vector3(C/(E*E),D/(A*A),k/(U*U)).normalize();return{p:new i.Vector3(C,p.headCenterY+D,k).addScaledVector(F,H),q:new i.Quaternion().setFromUnitVectors(new i.Vector3(0,0,1),F)}}function B(C,D,H,E=.004){let{p:A,q:U}=x(D,H,E);C.position.copy(A),C.quaternion.copy(U)}function I(C,D,H){let[E,A,U]=p.snoutRadii,W=Math.max(1e-4,1-(C/E)**2-(D/A)**2),k=U*Math.sqrt(W),F=Fl([C/(E*E),D/(A*A),k/(U*U)]);return{p:[C+F[0]*H,D+F[1]*H,p.snoutOut+k+F[2]*H],n:F}}let L=new i.MeshBasicMaterial({color:t(fe.shadow),transparent:!0,opacity:.16,depthWrite:!1}),G=new i.Mesh(s,L);G.scale.set(.6,.004,.46),y.add(G);for(let C of[-1,1]){let D=l([.105,.065,.11],fe.skin);D.position.set(C*.21,.04,.27),y.add(D)}let w=l(p.bodyRadii,fe.skin);w.position.set(0,p.bodyCenterY,0),m.add(w);let M=l([.23,.19,.07],fe.belly);M.position.set(0,.29,p.bodyRadii[2]-.043),m.add(M);let z=new i.Object3D;z.position.set(...p.tailBase),g.add(z);let tt=new i.Object3D;z.add(tt);let Q=new i.Mesh(h(),n(fe.skin));tt.add(Q);let lt=l(Array(3).fill(p.tailTube*p.tailTaper),fe.skin);tt.add(lt),z.quaternion.copy(new i.Quaternion().setFromUnitVectors(new i.Vector3(1,0,0),o(p.tailAim).normalize()));let dt=l(p.headRadii,fe.skin);dt.position.set(0,p.headCenterY,0),T.add(dt);let ht=[],mt=d(p.earRadius,p.earHeight,p.earDepth,p.earRoot),ct=d(p.innerEarRadius,p.innerEarHeight,p.innerEarDepth);for(let C of[-1,1]){let D=new i.Object3D;D.position.set(C*p.earBase[0],p.headCenterY+p.earBase[1],p.earBase[2]),T.add(D);let H=new i.Object3D;H.position.set(0,p.earRoot,0),D.add(H),H.add(new i.Mesh(mt,n(fe.skin)));let E=new i.Mesh(ct,n(fe.innerEar));E.position.set(...p.innerEarLift),E.quaternion.copy(a(p.innerEarTilt,[1,0,0])),H.add(E),C>0&&H.add(_t()),ht.push({pivot:D,side:C})}function _t(){let C=new i.Object3D;C.position.set(...p.bowAt),C.quaternion.copy(a(p.bowTilt,[0,0,1]));for(let H of[-1,1]){let E=l(p.bowLoopRadii,fe.bow,.5);E.position.set(H*p.bowLoopX,0,0),E.quaternion.copy(a(-H*p.bowLoopAngle,[0,0,1])),C.add(E)}let D=l([p.bowKnotRadius,p.bowKnotRadius*1.1,p.bowKnotRadius*.9],fe.bowKnot,.5);return D.position.set(0,0,.012),C.add(D),C}let vt=[],wt=[],Nt=f(p.happyEyeRadius,p.happyEyeTube,-Math.PI/2-p.happyEyeSweep/2,p.happyEyeSweep);for(let C of[-1,1]){let D=new i.Object3D,H=new i.Object3D;D.add(H);let E=l(p.eyeRadii,fe.ink,.35);H.add(E);let A=new i.Object3D,U=l([.016,.016,.005],fe.shine,.3);U.position.set(.014,.022,p.eyeRadii[2]*.9);let W=l([.007,.007,.004],fe.shine,.3);W.position.set(-.013,-.022,p.eyeRadii[2]*.85),A.add(U,W),H.add(A);let k=new i.Mesh(Nt,n(fe.ink,.35));k.quaternion.copy(a(Math.PI,[0,0,1])),k.position.set(0,-p.happyEyeRadius*.55,.01),H.add(k),T.add(D),vt.push({pivot:D,shape:H,ball:E,highlights:A,happy:k,side:C,x:C*p.eyeX});let F=l(p.cheekRadii,fe.blush);B(F,C*p.cheekX,p.cheekY,0),T.add(F),wt.push(F)}let Wt=new i.Object3D;B(Wt,0,p.snoutY,0),T.add(Wt);let ut=new i.Object3D;Wt.add(ut);let pt=l(p.snoutRadii,fe.snout,.5);pt.position.set(0,0,p.snoutOut),ut.add(pt);let bt=[];for(let C of[-1,1]){let D=l(p.nostrilRadii,fe.nostril,.6),H=I(C*p.nostrilX,p.nostrilY,-.003);D.position.set(...H.p),D.quaternion.copy(new i.Quaternion().setFromUnitVectors(new i.Vector3(0,0,1),o(H.n))),ut.add(D),bt.push(D)}let gt=new i.Object3D;B(gt,0,p.mouthY,p.mouthLift),T.add(gt);let Rt=[],Ot=[];for(let C of[-1,1]){let D=new i.Object3D,H=C>0?-Math.PI/2:-Math.PI/2-p.mouthHalfSweep,E=new i.Mesh(f(p.mouthArcRadius,p.mouthTube,H,p.mouthHalfSweep),n(fe.mouth));E.position.set(0,p.mouthArcRadius,0),D.add(E),Ot.push(E),gt.add(D),Rt.push({pivot:D,side:C})}let Bt=l([.03,.004,.01],fe.mouth);gt.add(Bt);let Gt=l([.022,.012,.006],fe.tongue);gt.add(Gt);function kt(C){let D=l(Array(3).fill(p.limbRadius),fe.skin),H=u(fe.skin),E=l(Array(3).fill(p.pawRadius),fe.skin),A=new i.Object3D;for(let F of[D,H,E,A])g.add(F);let U=.07,W=new i.Mesh(new i.BoxGeometry(U,U,.035),n(fe.heart,.5));W.quaternion.copy(a(Math.PI/4,[0,0,1])),A.add(W);let k=U/(2*Math.SQRT2);for(let F of[-1,1]){let j=l([U/2,U/2,.02],fe.heart,.5);j.position.set(F*k,k,0),A.add(j)}return A.scale.setScalar(0),A.visible=!1,{outward:C,shoulderBall:D,stub:H,paw:E,heart:A,heartWeight:0,pawDepth:{v:0,vel:0}}}let jt=kt(-1),q=kt(1);function Se(C,D,H,E){let A=0,U=[[E,p.headRadii]];H&&U.push([[0,p.bodyCenterY,0],p.bodyRadii]);for(let[W,k]of U){let F=k[0]+D,j=k[1]+D,st=k[2]+D,et=((C[0]-W[0])/F)**2+((C[1]-W[1])/j)**2;et<1&&(A=Math.max(A,W[2]+st*Math.sqrt(1-et)+p.clearance))}return A}let Xt=[[.25,p.limbRadius,!1],[.5,p.limbRadius,!1],[.625,p.limbRadius,!0],[.75,p.limbRadius,!0],[.875,p.limbRadius,!0],[1,p.pawRadius,!0]];function zt(C,D,H,E){let A=new i.Vector3().subVectors(H,D),U=A.length();C.position.copy(D).add(H).multiplyScalar(.5),C.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),U>1e-4?A.clone().divideScalar(U):new i.Vector3(0,1,0)),C.scale.set(E,Math.max(U,1e-4),E)}function Tt(C,D,H,E,A,U){var Et;let W=D.outward,k=new i.Vector3(W*p.shoulderX*E,p.shoulderY+H,p.shoulderZ),F=sn((Et=C.reach)!=null?Et:1,.5,1),j=C.upper,st=C.upper+C.forearm,et=W*Math.sin(j)*p.upperLength,R=-Math.cos(j)*p.upperLength,K=et+W*Math.sin(st)*p.forearmLength,O=R-Math.cos(st)*p.forearmLength,$=Math.hypot(K,O),nt=p.upperLength+p.forearmLength,ot=$>1e-4?[K/$,O/$]:[W*Math.sin(p.restArmAngle),-Math.cos(p.restArmAngle)],ft=nt*F,Mt=[k.x+ot[0]*ft,k.y+ot[1]*ft],Ct=k.z+nt*Math.sqrt(Math.max(0,1-F*F));for(let re=0;re<2;re++)for(let[ce,ue,ne]of Xt){let te=[k.x+(Mt[0]-k.x)*ce,k.y+(Mt[1]-k.y)*ce],be=Se(te,ue,ne,A);k.z+(Ct-k.z)*ce<be&&(Ct=Math.max(Ct,(be-(1-ce)*k.z)/Math.max(ce,.05)))}qa(D.pawDepth,Ct,U,420,41);let Ut=new i.Vector3(Mt[0],Mt[1],D.pawDepth.v);D.shoulderBall.position.copy(k),zt(D.stub,k,Ut,p.limbRadius),D.paw.position.copy(Ut);let Yt=U>0?Math.min(1,U/p.heartFade):1;D.heartWeight+=((C.handShape==="heart"?1:0)-D.heartWeight)*Yt,D.heart.position.copy(Ut).add(new i.Vector3(0,.18,.1)),D.heart.scale.setScalar(D.heartWeight),D.heart.visible=D.heartWeight>.01}let Kt={v:0,vel:0},X={v:0,vel:0},S=0,_=0;function Y(C,D){let H=Math.max(0,(C.browLeft+C.browRight)/2),E=1+C.breath*p.breathAmount+C.bounce*p.hopStretch+H*p.surpriseStretch,A=1/Math.sqrt(E),U=C.bounce*p.bounceHeight;y.position.set(C.hipShift,C.rise+U,0),y.scale.setScalar(C.depthScale),G.position.set(0,.002-(C.rise+U),.02);let W=1-sn(U/.2,0,.4);G.scale.set(.6*W,.004,.46*W);let k=a(C.chestRoll,[0,0,1]);g.quaternion.copy(k),m.scale.set(A,E,A);let F=(E-1)*p.neckY;v.position.set(0,p.neckY+F,0);let j=p.headGain,st=p.maxHeadAngle,et=sn(C.headYaw*j,-st,st),R=sn(C.headPitch*j,-p.maxHeadDown,st),K=sn(C.headRoll*j,-st,st),O=a(et,[0,1,0]).multiply(a(-R,[1,0,0])).multiply(a(-K,[0,0,1])),$=k.clone().invert().multiply(O);T.quaternion.copy($);let nt=C.rise+U,ot=D>0?sn((nt-_)/D,-2,2):0;_=nt;let ft=D>0?sn((C.lean-S)/D,-1.5,1.5):0;S=C.lean,it(C,ot,D),P(C,ot,ft,D),N(C);let Mt=v.position.clone().add(new i.Vector3(0,p.headCenterY,0).applyQuaternion($)),Ct=(E-1)*p.shoulderY;Tt(C.screenLeftArm,jt,Ct,A,[Mt.x,Mt.y,Mt.z],D),Tt(C.screenRightArm,q,Ct,A,[Mt.x,Mt.y,Mt.z],D)}function it(C,D,H){qa(Kt,sn(D*p.earBounce,-p.earBounceLimit,p.earBounceLimit),H,140,7);for(let[E,A]of ht.entries()){let U=E===0?C.browLeft:C.browRight,W=Math.max(0,U),k=Math.max(0,-U),F=p.earLean-W*p.earPerk+k*p.earFlop+u0(C.time,A.side),j=p.earForward-W*.18+k*p.earFlopForward+Kt.v;A.pivot.quaternion.copy(a(-A.side*F,[0,0,1]).multiply(a(j,[1,0,0])))}}function P(C,D,H,E){qa(X,sn(-D*p.tailBoing,-.5,.5)-H*.3,E,90,5);let A=Math.max(0,C.smile),U=Math.sin(C.time*p.tailWagRate*(1+A))*p.tailWag*(1+.6*A),W=sn(U+X.v*.35,-p.tailSwingLimit,p.tailSwingLimit);tt.quaternion.copy(a(W,[0,0,1]).multiply(a(U*.5,[0,1,0])));let k=sn(1+X.v*.5+.15*A-.15*Math.max(0,-C.smile),.8,1.5);Q.scale.set(k,1,1);let F=Ol(1);lt.position.set(F[0]*k,F[1],F[2])}function N(C){let D=C.gazeX*p.gazeTravelX,H=C.gazeY*p.gazeTravelY,E=Math.max(0,C.smile),A=br((C.smile-p.happyEyeFrom)/(p.happyEyeTo-p.happyEyeFrom)),U=br(A/.5),W=br((A-.5)/.5);for(let[nt,ot]of vt.entries()){let ft=nt===0?C.blinkLeft:C.blinkRight,Mt=nt===0?C.browLeft:C.browRight,Ct=Math.max(0,Mt),Ut=Math.max(0,-Mt);B(ot.pivot,ot.x+D,p.eyeY+H,0),ot.shape.quaternion.copy(a(ot.side*Ut*p.eyeAngerSlant,[0,0,1]));let Yt=1+Ct*p.eyeSurprise,Et=(1-ft*(1-p.shutEyeScale))*(1-Ut*p.eyeAngerSquint)*(1-W*.9);ot.ball.scale.set(p.eyeRadii[0]*Yt*(1+ft*.12),p.eyeRadii[1]*Yt*Et,p.eyeRadii[2]),ot.ball.visible=W<.98,ot.highlights.scale.setScalar(Yt),ot.highlights.visible=ft<.45&&A<.3&&Ut<.6,ot.happy.scale.setScalar(Math.max(1e-4,U)),ot.happy.visible=U>.01}for(let nt of wt){let ot=1+E*p.cheekGrow;nt.scale.set(p.cheekRadii[0]*ot,p.cheekRadii[1]*ot,p.cheekRadii[2])}let k=C.mouthOpen,F=Math.max(0,-(C.browLeft+C.browRight)/2),j=h0(C.time);ut.position.set(0,E*p.snoutSmileLift+k*p.snoutTalkLift+j*p.sniffLift,0),ut.quaternion.copy(a(-j*.08,[1,0,0]));let st=1+p.nostrilFlare*Math.max(k*.6,F,Math.abs(j));for(let nt of bt)nt.scale.set(p.nostrilRadii[0]*st,p.nostrilRadii[1]*(1+(st-1)*.4),p.nostrilRadii[2]);let et=1-p.openSmileFlatten*br(k/.4),R=(p.mouthRestTilt+C.smile*p.smileTilt)*et;for(let nt of Rt)nt.pivot.quaternion.copy(a(nt.side*R,[0,0,1]));let K=.004+p.mouthDrop*k;Bt.scale.set(.028+p.mouthWiden*k+p.smileWiden*E,K,.01),Bt.position.set(0,.006-K,-.004),Bt.visible=k>.03;let O=d0(k,p.mouthLineGoneAt);for(let nt of Ot)nt.scale.setScalar(Math.max(O,1e-4)),nt.visible=O>.25;Gt.position.set(0,.006-K*1.55,-.001);let $=Math.min(1,k*1.6);Gt.scale.set(.022*$*1.3,.012*$*1.3,.006),Gt.visible=k>.25}return{root:y,apply:Y,Shape:ze}}var sn=(i,t,e)=>Math.min(Math.max(i,t),e),br=i=>{let t=sn(i,0,1);return t*t*(3-2*t)},Fl=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},c0=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]];function qa(i,t,e,n,s){if(e<=0){i.v=t,i.vel=0;return}let r=Math.min(Math.max(e,1/240),1/30);i.vel+=((t-i.v)*n-i.vel*s)*r,i.v+=i.vel*r}function l0(i,t){return i*Math.sqrt(Math.max(0,1-t*t))*(1+.18*t)*(1-.35*t)}function zl(i){return .3+.7*Math.min(1,i*2.5)}function Ol(i){let t=2*Math.PI*ze.tailTurns*i,e=ze.tailCoil*zl(i);return[ze.tailLength*i,e*Math.cos(t)-ze.tailCoil*.3,e*Math.sin(t)]}function h0(i){let e=((i+2.3)%4.7+4.7)%4.7;return e>.6?0:Math.sin(e/.6*Math.PI*3)*Math.sin(e/.6*Math.PI)}function u0(i,t){let e=t>0?7.1:9.7,n=(i+(t>0?1.1:5.3))%e;return n>.45?0:Math.sin(n/.45*Math.PI*3)*Math.exp(-n*6)*.16}function d0(i,t){let e=Math.min(1,Math.max(0,(i-.03)/(t-.03)));return 1-e*e*(3-2*e)}function kl(){let i={upper:ze.restArmAngle,forearm:0,reach:1,handShape:"open"};return{headYaw:0,headPitch:0,headRoll:0,lean:0,rise:0,depthScale:1,hipShift:0,chestRoll:0,chestYaw:0,breath:0,bounce:0,gazeX:0,gazeY:0,blinkLeft:0,blinkRight:0,mouthOpen:0,smile:0,browLeft:0,browRight:0,screenLeftArm:{...i},screenRightArm:{...i},time:0,idle:1}}var f0={Object3D:Ae,Mesh:ye,SphereGeometry:vn,CylinderGeometry:Qn,BoxGeometry:Ze,BufferGeometry:Be,Float32BufferAttribute:_e,MeshStandardMaterial:Mn,MeshBasicMaterial:tn,Vector3:V,Quaternion:Me,Color:Vt,SRGBColorSpace:le},Vl=(i,t,e)=>new Vt().setRGB(i,t,e,le),Mi=(i,t,e)=>Math.min(e,Math.max(t,i));function es(i,t,e){this.x=i,this.v=0,this.t=i,this.k=t,this.c=e}es.prototype.step=function(i){for(;i>1e-6;){let t=Math.min(i,.008333333333333333),e=(this.t-this.x)*this.k-this.v*this.c;this.v+=e*t,this.x+=this.v*t,i-=t}};es.prototype.reset=function(i){this.x=this.t=i,this.v=0};function p0(i,t){let e=new xn({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});e.setClearColor(0,0),e.outputColorSpace=le,e.toneMapping=Oe;let n=new yn,s=Bl(f0);n.add(s.root);let r=new Le(16777215,2.4);r.position.set(-2,3,5);let o=new Le(Vl(1,.95,.92),1.1);o.position.set(3,1,4);let a=new Le(Vl(.9,.95,1),.9);a.position.set(0,3,-4);let l=new Sn(16777215,14207172,.75);n.add(r,o,a,l);let u=(t.yTop+t.yBot)/2,c=(t.yTop-t.yBot)/2,d=5.4,f=new we(2*Math.atan(c/d)*180/Math.PI,1,.1,50);f.position.set(0,u+.06,d),f.lookAt(0,u,0);let h=[Math.sin(ze.restArmAngle),Math.cos(ze.restArmAngle)],p={L:[new es(h[0],150,21),new es(h[1],150,21)],R:[new es(h[0],150,21),new es(h[1],150,21)]};function y(v,T,x,B){let I=T||h;v[0].t=I[0],v[1].t=I[1],B>0?(v[0].step(B),v[1].step(B)):(v[0].reset(I[0]),v[1].reset(I[1]));let L=v[0].x,G=v[1].x;return{upper:Math.atan2(L,G),forearm:0,reach:Mi(Math.hypot(L,G),.5,1),handShape:x==="heart"?"heart":"open"}}let g=0;function m(v,T){g+=Math.max(0,T);let x=kl();x.time=g,x.idle=1,x.headYaw=v.headYaw||0,x.headPitch=v.headPitch||0,x.headRoll=v.headRoll||0,x.lean=v.lean||0,x.hipShift=v.hipShift||0,x.chestRoll=v.chestRoll||0,x.breath=v.breath||0,x.bounce=v.bounce||0,x.gazeX=v.gazeX||0,x.gazeY=v.gazeY||0,x.blinkLeft=Mi(v.blinkL||0,0,1),x.blinkRight=Mi(v.blinkR||0,0,1),x.mouthOpen=Mi(v.open||0,0,1),x.smile=Mi(v.smile||0,-1,1),x.browLeft=Mi(v.browL||0,-1,1),x.browRight=Mi(v.browR||0,-1,1),x.screenLeftArm=y(p.L,v.L,v.Lshape,T),x.screenRightArm=y(p.R,v.R,v.Rshape,T),s.apply(x,T)}return{setSize(v,T,x){e.setPixelRatio(Math.min(x||1,2)),e.setSize(v,T,!1),f.aspect=v/T,f.updateProjectionMatrix()},apply:m,render(){e.render(n,f)},dispose(){let v=new Set,T=new Set;s.root.traverse(x=>{x.geometry&&v.add(x.geometry),x.material&&T.add(x.material)}),v.forEach(x=>x.dispose()),T.forEach(x=>x.dispose()),e.dispose(),e.forceContextLoss()}}}export{a0 as createMieMie3D,qm as createMochi,$m as createTaro3D,p0 as createZhuzhu3D};
