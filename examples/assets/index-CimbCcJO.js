var Fr=Object.defineProperty,Nr=(e,t,i)=>t in e?Fr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ft=(e,t,i)=>(Nr(e,typeof t!="symbol"?t+"":t,i),i);const Ct=Math.min,K=Math.max,ye=Math.round,st=e=>({x:e,y:e}),qr={left:"right",right:"left",bottom:"top",top:"bottom"},Dr={start:"end",end:"start"};function Ci(e,t,i){return K(e,Ct(t,i))}function ne(e,t){return typeof e=="function"?e(t):e}function tt(e){return e.split("-")[0]}function Pe(e){return e.split("-")[1]}function fn(e){return e==="x"?"y":"x"}function mn(e){return e==="y"?"height":"width"}const Ur=new Set(["top","bottom"]);function Z(e){return Ur.has(tt(e))?"y":"x"}function bn(e){return fn(Z(e))}function Vr(e,t,i){i===void 0&&(i=!1);const n=Pe(e),r=bn(e),o=mn(r);let s=r==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=_e(s)),[s,_e(s)]}function Wr(e){const t=_e(e);return[Qe(e),t,Qe(t)]}function Qe(e){return e.replace(/start|end/g,t=>Dr[t])}const Ai=["left","right"],ki=["right","left"],Yr=["top","bottom"],Gr=["bottom","top"];function Qr(e,t,i){switch(e){case"top":case"bottom":return i?t?ki:Ai:t?Ai:ki;case"left":case"right":return t?Yr:Gr;default:return[]}}function Jr(e,t,i,n){const r=Pe(e);let o=Qr(tt(e),i==="start",n);return r&&(o=o.map(s=>s+"-"+r),t&&(o=o.concat(o.map(Qe)))),o}function _e(e){return e.replace(/left|right|bottom|top/g,t=>qr[t])}function Xr(e){return{top:0,right:0,bottom:0,left:0,...e}}function gn(e){return typeof e!="number"?Xr(e):{top:e,right:e,bottom:e,left:e}}function At(e){const{x:t,y:i,width:n,height:r}=e;return{width:n,height:r,top:i,left:t,right:t+n,bottom:i+r,x:t,y:i}}function Si(e,t,i){let{reference:n,floating:r}=e;const o=Z(t),s=bn(t),a=mn(s),l=tt(t),c=o==="y",u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,f=n[a]/2-r[a]/2;let p;switch(l){case"top":p={x:u,y:n.y-r.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-r.width,y:d};break;default:p={x:n.x,y:n.y}}switch(Pe(t)){case"start":p[s]-=f*(i&&c?-1:1);break;case"end":p[s]+=f*(i&&c?-1:1);break}return p}const Zr=async(e,t,i)=>{const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:s}=i,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=Si(c,n,l),f=n,p={},g=0;for(let v=0;v<a.length;v++){const{name:b,fn:$}=a[v],{x:y,y:_,data:C,reset:T}=await $({x:u,y:d,initialPlacement:n,placement:f,strategy:r,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});u=y??u,d=_??d,p={...p,[b]:{...p[b],...C}},T&&g<=50&&(g++,typeof T=="object"&&(T.placement&&(f=T.placement),T.rects&&(c=T.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):T.rects),{x:u,y:d}=Si(c,f,l)),v=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}};async function vn(e,t){var i;t===void 0&&(t={});const{x:n,y:r,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=ne(t,e),g=gn(p),v=a[f?d==="floating"?"reference":"floating":d],b=At(await o.getClippingRect({element:(i=await(o.isElement==null?void 0:o.isElement(v)))==null||i?v:v.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),$=d==="floating"?{x:n,y:r,width:s.floating.width,height:s.floating.height}:s.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),_=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},C=At(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:$,offsetParent:y,strategy:l}):$);return{top:(b.top-C.top+g.top)/_.y,bottom:(C.bottom-b.bottom+g.bottom)/_.y,left:(b.left-C.left+g.left)/_.x,right:(C.right-b.right+g.right)/_.x}}const Kr=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:r,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...b}=ne(e,t);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const $=tt(r),y=Z(a),_=tt(a)===a,C=await(l.isRTL==null?void 0:l.isRTL(c.floating)),T=f||(_||!v?[_e(a)]:Wr(a)),x=g!=="none";!f&&x&&T.push(...Jr(a,v,g,C));const z=[a,...T],q=await vn(t,b),D=[];let k=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&D.push(q[$]),d){const Y=Vr(r,s,C);D.push(q[Y[0]],q[Y[1]])}if(k=[...k,{placement:r,overflows:D}],!D.every(Y=>Y<=0)){var xt,qt;const Y=(((xt=o.flip)==null?void 0:xt.index)||0)+1,pt=z[Y];if(pt&&(!(d==="alignment"&&y!==Z(pt))||k.every(U=>U.overflows[0]>0&&Z(U.placement)===y)))return{data:{index:Y,overflows:k},reset:{placement:pt}};let nt=(qt=k.filter(U=>U.overflows[0]<=0).sort((U,G)=>U.overflows[1]-G.overflows[1])[0])==null?void 0:qt.placement;if(!nt)switch(p){case"bestFit":{var wt;const U=(wt=k.filter(G=>{if(x){const rt=Z(G.placement);return rt===y||rt==="y"}return!0}).map(G=>[G.placement,G.overflows.filter(rt=>rt>0).reduce((rt,Ir)=>rt+Ir,0)]).sort((G,rt)=>G[1]-rt[1])[0])==null?void 0:wt[0];U&&(nt=U);break}case"initialPlacement":nt=a;break}if(r!==nt)return{reset:{placement:nt}}}return{}}}};function yn(e){const t=Ct(...e.map(o=>o.left)),i=Ct(...e.map(o=>o.top)),n=K(...e.map(o=>o.right)),r=K(...e.map(o=>o.bottom));return{x:t,y:i,width:n-t,height:r-i}}function to(e){const t=e.slice().sort((r,o)=>r.y-o.y),i=[];let n=null;for(let r=0;r<t.length;r++){const o=t[r];!n||o.y-n.y>n.height/2?i.push([o]):i[i.length-1].push(o),n=o}return i.map(r=>At(yn(r)))}const eo=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:n,rects:r,platform:o,strategy:s}=t,{padding:a=2,x:l,y:c}=ne(e,t),u=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(n.reference))||[]),d=to(u),f=At(yn(u)),p=gn(a);function g(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(b=>l>b.left-p.left&&l<b.right+p.right&&c>b.top-p.top&&c<b.bottom+p.bottom)||f;if(d.length>=2){if(Z(i)==="y"){const k=d[0],xt=d[d.length-1],qt=tt(i)==="top",wt=k.top,Y=xt.bottom,pt=qt?k.left:xt.left,nt=qt?k.right:xt.right,U=nt-pt,G=Y-wt;return{top:wt,bottom:Y,left:pt,right:nt,width:U,height:G,x:pt,y:wt}}const b=tt(i)==="left",$=K(...d.map(k=>k.right)),y=Ct(...d.map(k=>k.left)),_=d.filter(k=>b?k.left===y:k.right===$),C=_[0].top,T=_[_.length-1].bottom,x=y,z=$,q=z-x,D=T-C;return{top:C,bottom:T,left:x,right:z,width:q,height:D,x,y:C}}return f}const v=await o.getElementRects({reference:{getBoundingClientRect:g},floating:n.floating,strategy:s});return r.reference.x!==v.reference.x||r.reference.y!==v.reference.y||r.reference.width!==v.reference.width||r.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}},io=new Set(["left","top"]);async function no(e,t){const{placement:i,platform:n,elements:r}=e,o=await(n.isRTL==null?void 0:n.isRTL(r.floating)),s=tt(i),a=Pe(i),l=Z(i)==="y",c=io.has(s)?-1:1,u=o&&l?-1:1,d=ne(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}const _n=function(e){return{name:"offset",options:e,async fn(t){var i,n;const{x:r,y:o,placement:s,middlewareData:a}=t,l=await no(t,e);return s===((i=a.offset)==null?void 0:i.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:s}}}}},ro=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:r}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:b=>{let{x:$,y}=b;return{x:$,y}}},...l}=ne(e,t),c={x:i,y:n},u=await vn(t,l),d=Z(tt(r)),f=fn(d);let p=c[f],g=c[d];if(o){const b=f==="y"?"top":"left",$=f==="y"?"bottom":"right",y=p+u[b],_=p-u[$];p=Ci(y,p,_)}if(s){const b=d==="y"?"top":"left",$=d==="y"?"bottom":"right",y=g+u[b],_=g-u[$];g=Ci(y,g,_)}const v=a.fn({...t,[f]:p,[d]:g});return{...v,data:{x:v.x-i,y:v.y-n,enabled:{[f]:o,[d]:s}}}}}};function Te(){return typeof window<"u"}function at(e){return xn(e)?(e.nodeName||"").toLowerCase():"#document"}function R(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ct(e){var t;return(t=(xn(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function xn(e){return Te()?e instanceof Node||e instanceof R(e).Node:!1}function Q(e){return Te()?e instanceof Element||e instanceof R(e).Element:!1}function J(e){return Te()?e instanceof HTMLElement||e instanceof R(e).HTMLElement:!1}function Oi(e){return!Te()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof R(e).ShadowRoot}const oo=new Set(["inline","contents"]);function re(e){const{overflow:t,overflowX:i,overflowY:n,display:r}=M(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!oo.has(r)}const so=new Set(["table","td","th"]);function ao(e){return so.has(at(e))}const lo=[":popover-open",":modal"];function co(e){return lo.some(t=>{try{return e.matches(t)}catch{return!1}})}const uo=["transform","translate","scale","rotate","perspective"],ho=["transform","translate","scale","rotate","perspective","filter"],po=["paint","layout","strict","content"];function ci(e){const t=ui(),i=Q(e)?M(e):e;return uo.some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||ho.some(n=>(i.willChange||"").includes(n))||po.some(n=>(i.contain||"").includes(n))}function fo(e){let t=kt(e);for(;J(t)&&!ze(t);){if(ci(t))return t;if(co(t))return null;t=kt(t)}return null}function ui(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const mo=new Set(["html","body","#document"]);function ze(e){return mo.has(at(e))}function M(e){return R(e).getComputedStyle(e)}function Le(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function kt(e){if(at(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Oi(e)&&e.host||ct(e);return Oi(t)?t.host:t}function wn(e){const t=kt(e);return ze(t)?e.ownerDocument?e.ownerDocument.body:e.body:J(t)&&re(t)?t:wn(t)}function $n(e,t,i){var n;t===void 0&&(t=[]);const r=wn(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),s=R(r);return o?(bo(s),t.concat(s,s.visualViewport||[],re(r)?r:[],[])):t.concat(r,$n(r,[]))}function bo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function En(e){const t=M(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=J(e),o=r?e.offsetWidth:i,s=r?e.offsetHeight:n,a=ye(i)!==o||ye(n)!==s;return a&&(i=o,n=s),{width:i,height:n,$:a}}function Cn(e){return Q(e)?e:e.contextElement}function Et(e){const t=Cn(e);if(!J(t))return st(1);const i=t.getBoundingClientRect(),{width:n,height:r,$:o}=En(t);let s=(o?ye(i.width):i.width)/n,a=(o?ye(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const go=st(0);function An(e){const t=R(e);return!ui()||!t.visualViewport?go:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function vo(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==R(e)?!1:t}function Qt(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const r=e.getBoundingClientRect(),o=Cn(e);let s=st(1);t&&(n?Q(n)&&(s=Et(n)):s=Et(e));const a=vo(o,i,n)?An(o):st(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(o){const f=R(o),p=n&&Q(n)?R(n):n;let g=f,v=g.frameElement;for(;v&&n&&p!==g;){const b=Et(v),$=v.getBoundingClientRect(),y=M(v),_=$.left+(v.clientLeft+parseFloat(y.paddingLeft))*b.x,C=$.top+(v.clientTop+parseFloat(y.paddingTop))*b.y;l*=b.x,c*=b.y,u*=b.x,d*=b.y,l+=_,c+=C,g=R(v),v=g.frameElement}}return At({width:u,height:d,x:l,y:c})}const yo=[":popover-open",":modal"];function kn(e){return yo.some(t=>{try{return e.matches(t)}catch{return!1}})}function _o(e){let{elements:t,rect:i,offsetParent:n,strategy:r}=e;const o=r==="fixed",s=ct(n),a=t?kn(t.floating):!1;if(n===s||a&&o)return i;let l={scrollLeft:0,scrollTop:0},c=st(1);const u=st(0),d=J(n);if((d||!d&&!o)&&((at(n)!=="body"||re(s))&&(l=Le(n)),J(n))){const f=Qt(n);c=Et(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x,y:i.y*c.y-l.scrollTop*c.y+u.y}}function xo(e){return Array.from(e.getClientRects())}function Sn(e){return Qt(ct(e)).left+Le(e).scrollLeft}function wo(e){const t=ct(e),i=Le(e),n=e.ownerDocument.body,r=K(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=K(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-i.scrollLeft+Sn(e);const a=-i.scrollTop;return M(n).direction==="rtl"&&(s+=K(t.clientWidth,n.clientWidth)-r),{width:r,height:o,x:s,y:a}}function $o(e,t){const i=R(e),n=ct(e),r=i.visualViewport;let o=n.clientWidth,s=n.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;const c=ui();(!c||c&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a,y:l}}function Eo(e,t){const i=Qt(e,!0,t==="fixed"),n=i.top+e.clientTop,r=i.left+e.clientLeft,o=J(e)?Et(e):st(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=r*o.x,c=n*o.y;return{width:s,height:a,x:l,y:c}}function Pi(e,t,i){let n;if(t==="viewport")n=$o(e,i);else if(t==="document")n=wo(ct(e));else if(Q(t))n=Eo(t,i);else{const r=An(e);n={...t,x:t.x-r.x,y:t.y-r.y}}return At(n)}function On(e,t){const i=kt(e);return i===t||!Q(i)||ze(i)?!1:M(i).position==="fixed"||On(i,t)}function Co(e,t){const i=t.get(e);if(i)return i;let n=$n(e,[]).filter(a=>Q(a)&&at(a)!=="body"),r=null;const o=M(e).position==="fixed";let s=o?kt(e):e;for(;Q(s)&&!ze(s);){const a=M(s),l=ci(s);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&r&&["absolute","fixed"].includes(r.position)||re(s)&&!l&&On(e,s))?n=n.filter(c=>c!==s):r=a,s=kt(s)}return t.set(e,n),n}function Ao(e){let{element:t,boundary:i,rootBoundary:n,strategy:r}=e;const o=[...i==="clippingAncestors"?Co(t,this._c):[].concat(i),n],s=o[0],a=o.reduce((l,c)=>{const u=Pi(t,c,r);return l.top=K(u.top,l.top),l.right=Ct(u.right,l.right),l.bottom=Ct(u.bottom,l.bottom),l.left=K(u.left,l.left),l},Pi(t,s,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ko(e){const{width:t,height:i}=En(e);return{width:t,height:i}}function So(e,t,i){const n=J(t),r=ct(t),o=i==="fixed",s=Qt(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=st(0);if(n||!n&&!o)if((at(t)!=="body"||re(r))&&(a=Le(t)),n){const d=Qt(t,!0,o,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else r&&(l.x=Sn(r));const c=s.left+a.scrollLeft-l.x,u=s.top+a.scrollTop-l.y;return{x:c,y:u,width:s.width,height:s.height}}function Ti(e,t){return!J(e)||M(e).position==="fixed"?null:t?t(e):e.offsetParent}function Pn(e,t){const i=R(e);if(!J(e)||kn(e))return i;let n=Ti(e,t);for(;n&&ao(n)&&M(n).position==="static";)n=Ti(n,t);return n&&(at(n)==="html"||at(n)==="body"&&M(n).position==="static"&&!ci(n))?i:n||fo(e)||i}const Oo=async function(e){const t=this.getOffsetParent||Pn,i=this.getDimensions;return{reference:So(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function Po(e){return M(e).direction==="rtl"}const To={convertOffsetParentRelativeRectToViewportRelativeRect:_o,getDocumentElement:ct,getClippingRect:Ao,getOffsetParent:Pn,getElementRects:Oo,getClientRects:xo,getDimensions:ko,getScale:Et,isElement:Q,isRTL:Po},Tn=ro,zn=Kr,Ln=eo,Rn=(e,t,i)=>{const n=new Map,r={platform:To,...i},o={...r.platform,_c:n};return Zr(e,t,{...r,platform:o})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=globalThis,hi=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,di=Symbol(),zi=new WeakMap;let jn=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==di)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(hi&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=zi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&zi.set(t,e))}return e}toString(){return this.cssText}};const zo=e=>new jn(typeof e=="string"?e:e+"",void 0,di),A=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new jn(i,e,di)},Lo=(e,t)=>{if(hi)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),r=ge.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=i.cssText,e.appendChild(n)}},Li=hi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return zo(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ro,defineProperty:jo,getOwnPropertyDescriptor:Ho,getOwnPropertyNames:Mo,getOwnPropertySymbols:Bo,getPrototypeOf:Io}=Object,St=globalThis,Ri=St.trustedTypes,Fo=Ri?Ri.emptyScript:"",ji=St.reactiveElementPolyfillSupport,Vt=(e,t)=>e,xe={toAttribute(e,t){switch(t){case Boolean:e=e?Fo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},pi=(e,t)=>!Ro(e,t),Hi={attribute:!0,type:String,converter:xe,reflect:!1,useDefault:!1,hasChanged:pi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),St.litPropertyMetadata??(St.litPropertyMetadata=new WeakMap);let $t=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Hi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&jo(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=Ho(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){const s=n==null?void 0:n.call(this);r==null||r.call(this,o),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Hi}static _$Ei(){if(this.hasOwnProperty(Vt("elementProperties")))return;const e=Io(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vt("properties"))){const t=this.properties,i=[...Mo(t),...Bo(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Li(n))}else e!==void 0&&t.push(Li(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var i;const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:xe).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var i,n;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:xe;this._$Em=o,this[o]=a.fromAttribute(t,s.type)??((n=this._$Ej)==null?void 0:n.get(o))??null,this._$Em=null}}requestUpdate(e,t,i){var n;if(e!==void 0){const r=this.constructor,o=this[e];if(i??(i=r.getPropertyOptions(e)),!((i.hasChanged??pi)(o,t)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n){const{wrapped:s}=o,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(i)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};$t.elementStyles=[],$t.shadowRootOptions={mode:"open"},$t[Vt("elementProperties")]=new Map,$t[Vt("finalized")]=new Map,ji==null||ji({ReactiveElement:$t}),(St.reactiveElementVersions??(St.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=globalThis,$e=we.trustedTypes,Mi=$e?$e.createPolicy("lit-html",{createHTML:e=>e}):void 0,Hn="$lit$",ot=`lit$${Math.random().toFixed(9).slice(2)}$`,Mn="?"+ot,No=`<${Mn}>`,vt=document,Jt=()=>vt.createComment(""),Xt=e=>e===null||typeof e!="object"&&typeof e!="function",fi=Array.isArray,qo=e=>fi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",De=`[ 	
\f\r]`,Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bi=/-->/g,Ii=/>/g,mt=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fi=/'/g,Ni=/"/g,Bn=/^(?:script|style|textarea|title)$/i,Do=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),m=Do(1),Ot=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),qi=new WeakMap,bt=vt.createTreeWalker(vt,129);function In(e,t){if(!fi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mi!==void 0?Mi.createHTML(t):t}const Uo=(e,t)=>{const i=e.length-1,n=[];let r,o=t===2?"<svg>":t===3?"<math>":"",s=Dt;for(let a=0;a<i;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Dt?u[1]==="!--"?s=Bi:u[1]!==void 0?s=Ii:u[2]!==void 0?(Bn.test(u[2])&&(r=RegExp("</"+u[2],"g")),s=mt):u[3]!==void 0&&(s=mt):s===mt?u[0]===">"?(s=r??Dt,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?mt:u[3]==='"'?Ni:Fi):s===Ni||s===Fi?s=mt:s===Bi||s===Ii?s=Dt:(s=mt,r=void 0);const p=s===mt&&e[a+1].startsWith("/>")?" ":"";o+=s===Dt?l+No:d>=0?(n.push(c),l.slice(0,d)+Hn+l.slice(d)+ot+p):l+ot+(d===-2?a:p)}return[In(e,o+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Zt{constructor({strings:t,_$litType$:i},n){let r;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,u]=Uo(t,i);if(this.el=Zt.createElement(c,n),bt.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=bt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Hn)){const f=u[s++],p=r.getAttribute(d).split(ot),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:g[2],strings:p,ctor:g[1]==="."?Wo:g[1]==="?"?Yo:g[1]==="@"?Go:Re}),r.removeAttribute(d)}else d.startsWith(ot)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(Bn.test(r.tagName)){const d=r.textContent.split(ot),f=d.length-1;if(f>0){r.textContent=$e?$e.emptyScript:"";for(let p=0;p<f;p++)r.append(d[p],Jt()),bt.nextNode(),l.push({type:2,index:++o});r.append(d[f],Jt())}}}else if(r.nodeType===8)if(r.data===Mn)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(ot,d+1))!==-1;)l.push({type:7,index:o}),d+=ot.length-1}o++}}static createElement(t,i){const n=vt.createElement("template");return n.innerHTML=t,n}}function Pt(e,t,i=e,n){var r,o;if(t===Ot)return t;let s=n!==void 0?(r=i._$Co)==null?void 0:r[n]:i._$Cl;const a=Xt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),a===void 0?s=void 0:(s=new a(e),s._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=s:i._$Cl=s),s!==void 0&&(t=Pt(e,s._$AS(e,t.values),s,n)),t}class Vo{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,r=((t==null?void 0:t.creationScope)??vt).importNode(i,!0);bt.currentNode=r;let o=bt.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new oe(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Qo(o,this,t)),this._$AV.push(c),l=n[++a]}s!==(l==null?void 0:l.index)&&(o=bt.nextNode(),s++)}return bt.currentNode=vt,r}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class oe{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Pt(this,t,i),Xt(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==Ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):qo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&Xt(this._$AH)?this._$AA.nextSibling.data=t:this.T(vt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Zt.createElement(In(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const s=new Vo(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let i=qi.get(t.strings);return i===void 0&&qi.set(t.strings,i=new Zt(t)),i}k(t){fi(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,r=0;for(const o of t)r===i.length?i.push(n=new oe(this.O(Jt()),this.O(Jt()),this,this.options)):n=i[r],n._$AI(o),r++;r<i.length&&(this._$AR(n&&n._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,r,o){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(t,i=this,n,r){const o=this.strings;let s=!1;if(o===void 0)t=Pt(this,t,i,0),s=!Xt(t)||t!==this._$AH&&t!==Ot,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Pt(this,a[n+l],i,l),c===Ot&&(c=this._$AH[l]),s||(s=!Xt(c)||c!==this._$AH[l]),c===S?t=S:t!==S&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Wo extends Re{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class Yo extends Re{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class Go extends Re{constructor(t,i,n,r,o){super(t,i,n,r,o),this.type=5}_$AI(t,i=this){if((t=Pt(this,t,i,0)??S)===Ot)return;const n=this._$AH,r=t===S&&n!==S||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==S&&(n===S||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Qo{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Pt(this,t)}}const Di=we.litHtmlPolyfillSupport;Di==null||Di(Zt,oe),(we.litHtmlVersions??(we.litHtmlVersions=[])).push("3.3.0");const Tt=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let r=n._$litPart$;if(r===void 0){const o=(i==null?void 0:i.renderBefore)??null;n._$litPart$=r=new oe(t.insertBefore(Jt(),o),o,void 0,i??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=globalThis;let E=class extends $t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Tt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ot}};var Ui;E._$litElement$=!0,E.finalized=!0,(Ui=Kt.litElementHydrateSupport)==null||Ui.call(Kt,{LitElement:E});const Vi=Kt.litElementPolyfillSupport;Vi==null||Vi({LitElement:E});(Kt.litElementVersions??(Kt.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:pi},Xo=(e=Jo,t,i)=>{const{kind:n,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),n==="accessor"){const{name:s}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=i;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function h(e){return(t,i)=>typeof i=="object"?Xo(e,t,i):((n,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(r,o):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt(e){return h({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko={CHILD:2},ts=e=>(...t)=>({_$litDirective$:e,values:t});let es=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const r of n)(i=r._$AO)==null||i.call(r,t,!1),Wt(r,t);return!0},Ee=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Fn=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),rs(t)}};function is(e){this._$AN!==void 0?(Ee(this),this._$AM=e,Fn(this)):this._$AM=e}function ns(e,t=!1,i=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(n))for(let o=i;o<n.length;o++)Wt(n[o],!1),Ee(n[o]);else n!=null&&(Wt(n,!1),Ee(n));else Wt(this,e)}const rs=e=>{e.type==Ko.CHILD&&(e._$AP??(e._$AP=ns),e._$AQ??(e._$AQ=is))};class os extends es{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),Fn(this),this.isConnected=t._$AU}_$AO(t,i=!0){var n,r;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),i&&(Wt(this,t),Ee(this))}setValue(t){if(Zo(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=()=>new ss;class ss{}const Ue=new WeakMap,Lt=ts(class extends os{render(e){return S}update(e,[t]){var i;const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),S}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Ue.get(t);i===void 0&&(i=new WeakMap,Ue.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=Ue.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Nn=Object.freeze({left:0,top:0,width:16,height:16}),Ce=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),se=Object.freeze({...Nn,...Ce}),Je=Object.freeze({...se,body:"",hidden:!1}),as=Object.freeze({width:null,height:null}),qn=Object.freeze({...as,...Ce});function ls(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function n(r){for(;r<0;)r+=4;return r%4}if(i===""){const r=parseInt(e);return isNaN(r)?0:n(r)}else if(i!==e){let r=0;switch(i){case"%":r=25;break;case"deg":r=90}if(r){let o=parseFloat(e.slice(0,e.length-i.length));return isNaN(o)?0:(o=o/r,o%1===0?n(o):0)}}return t}const cs=/[\s,]+/;function us(e,t){t.split(cs).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Dn={...qn,preserveAspectRatio:""};function Wi(e){const t={...Dn},i=(n,r)=>e.getAttribute(n)||r;return t.width=i("width",null),t.height=i("height",null),t.rotate=ls(i("rotate","")),us(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function hs(e,t){for(const i in Dn)if(e[i]!==t[i])return!0;return!1}const Yt=/^[a-z0-9]+(-[a-z0-9]+)*$/,ae=(e,t,i,n="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;n=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:n,prefix:l,name:a};return t&&!ve(c)?null:c}const o=r[0],s=o.split("-");if(s.length>1){const a={provider:n,prefix:s.shift(),name:s.join("-")};return t&&!ve(a)?null:a}if(i&&n===""){const a={provider:n,prefix:"",name:o};return t&&!ve(a,i)?null:a}return null},ve=(e,t)=>e?!!((e.provider===""||e.provider.match(Yt))&&(t&&e.prefix===""||e.prefix.match(Yt))&&e.name.match(Yt)):!1;function ds(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const n=((e.rotate||0)+(t.rotate||0))%4;return n&&(i.rotate=n),i}function Yi(e,t){const i=ds(e,t);for(const n in Je)n in Ce?n in e&&!(n in i)&&(i[n]=Ce[n]):n in t?i[n]=t[n]:n in e&&(i[n]=e[n]);return i}function ps(e,t){const i=e.icons,n=e.aliases||Object.create(null),r=Object.create(null);function o(s){if(i[s])return r[s]=[];if(!(s in r)){r[s]=null;const a=n[s]&&n[s].parent,l=a&&o(a);l&&(r[s]=[a].concat(l))}return r[s]}return Object.keys(i).concat(Object.keys(n)).forEach(o),r}function fs(e,t,i){const n=e.icons,r=e.aliases||Object.create(null);let o={};function s(a){o=Yi(n[a]||r[a],o)}return s(t),i.forEach(s),Yi(e,o)}function Un(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),i.push(r)});const n=ps(e);for(const r in n){const o=n[r];o&&(t(r,fs(e,r,o)),i.push(r))}return i}const ms={provider:"",aliases:{},not_found:{},...Nn};function Ve(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function Vn(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Ve(e,ms))return null;const i=t.icons;for(const r in i){const o=i[r];if(!r.match(Yt)||typeof o.body!="string"||!Ve(o,Je))return null}const n=t.aliases||Object.create(null);for(const r in n){const o=n[r],s=o.parent;if(!r.match(Yt)||typeof s!="string"||!i[s]&&!n[s]||!Ve(o,Je))return null}return t}const Ae=Object.create(null);function bs(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function lt(e,t){const i=Ae[e]||(Ae[e]=Object.create(null));return i[t]||(i[t]=bs(e,t))}function mi(e,t){return Vn(t)?Un(t,(i,n)=>{n?e.icons[i]=n:e.missing.add(i)}):[]}function gs(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function vs(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(Ae)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Ae[n]||{})).forEach(r=>{const o=lt(n,r);i=i.concat(Object.keys(o.icons).map(s=>(n!==""?"@"+n+":":"")+r+":"+s))})}),i}let te=!1;function Wn(e){return typeof e=="boolean"&&(te=e),te}function ee(e){const t=typeof e=="string"?ae(e,!0,te):e;if(t){const i=lt(t.provider,t.prefix),n=t.name;return i.icons[n]||(i.missing.has(n)?null:void 0)}}function Yn(e,t){const i=ae(e,!0,te);if(!i)return!1;const n=lt(i.provider,i.prefix);return gs(n,i.name,t)}function Gi(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),te&&!t&&!e.prefix){let r=!1;return Vn(e)&&(e.prefix="",Un(e,(o,s)=>{s&&Yn(o,s)&&(r=!0)})),r}const i=e.prefix;if(!ve({provider:t,prefix:i,name:"a"}))return!1;const n=lt(t,i);return!!mi(n,e)}function Qi(e){return!!ee(e)}function ys(e){const t=ee(e);return t?{...se,...t}:null}function _s(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((r,o)=>r.provider!==o.provider?r.provider.localeCompare(o.provider):r.prefix!==o.prefix?r.prefix.localeCompare(o.prefix):r.name.localeCompare(o.name));let n={provider:"",prefix:"",name:""};return e.forEach(r=>{if(n.name===r.name&&n.prefix===r.prefix&&n.provider===r.provider)return;n=r;const o=r.provider,s=r.prefix,a=r.name,l=i[o]||(i[o]=Object.create(null)),c=l[s]||(l[s]=lt(o,s));let u;a in c.icons?u=t.loaded:s===""||c.missing.has(a)?u=t.missing:u=t.pending;const d={provider:o,prefix:s,name:a};u.push(d)}),t}function Gn(e,t){e.forEach(i=>{const n=i.loaderCallbacks;n&&(i.loaderCallbacks=n.filter(r=>r.id!==t))})}function xs(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const n=e.provider,r=e.prefix;t.forEach(o=>{const s=o.icons,a=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(e.icons[c])s.loaded.push({provider:n,prefix:r,name:c});else if(e.missing.has(c))s.missing.push({provider:n,prefix:r,name:c});else return i=!0,!0;return!1}),s.pending.length!==a&&(i||Gn([e],o.id),o.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),o.abort))})}))}let ws=0;function $s(e,t,i){const n=ws++,r=Gn.bind(null,i,n);if(!t.pending.length)return r;const o={id:n,icons:t,callback:e,abort:r};return i.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(o)}),r}const Xe=Object.create(null);function Ji(e,t){Xe[e]=t}function Ze(e){return Xe[e]||Xe[""]}function Es(e,t=!0,i=!1){const n=[];return e.forEach(r=>{const o=typeof r=="string"?ae(r,t,i):r;o&&n.push(o)}),n}var Cs={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function As(e,t,i,n){const r=e.resources.length,o=e.random?Math.floor(Math.random()*r):e.index;let s;if(e.random){let x=e.resources.slice(0);for(s=[];x.length>1;){const z=Math.floor(Math.random()*x.length);s.push(x[z]),x=x.slice(0,z).concat(x.slice(z+1))}s=s.concat(x)}else s=e.resources.slice(o).concat(e.resources.slice(0,o));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof n=="function"&&p.push(n);function g(){d&&(clearTimeout(d),d=null)}function v(){l==="pending"&&(l="aborted"),g(),f.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),f=[]}function b(x,z){z&&(p=[]),typeof x=="function"&&p.push(x)}function $(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:f.length,subscribe:b,abort:v}}function y(){l="failed",p.forEach(x=>{x(void 0,u)})}function _(){f.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),f=[]}function C(x,z,q){const D=z!=="success";switch(f=f.filter(k=>k!==x),l){case"pending":break;case"failed":if(D||!e.dataAfterTimeout)return;break;default:return}if(z==="abort"){u=q,y();return}if(D){u=q,f.length||(s.length?T():y());return}if(g(),_(),!e.random){const k=e.resources.indexOf(x.resource);k!==-1&&k!==e.index&&(e.index=k)}l="completed",p.forEach(k=>{k(q)})}function T(){if(l!=="pending")return;g();const x=s.shift();if(x===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(_(),y())},e.timeout);return}y();return}const z={status:"pending",resource:x,callback:(q,D)=>{C(z,q,D)}};f.push(z),c++,d=setTimeout(T,e.rotate),i(x,t,z.callback)}return setTimeout(T),$}function Qn(e){const t={...Cs,...e};let i=[];function n(){i=i.filter(s=>s().status==="pending")}function r(s,a,l){const c=As(t,s,a,(u,d)=>{n(),l&&l(u,d)});return i.push(c),c}function o(s){return i.find(a=>s(a))||null}return{query:r,find:o,setIndex:s=>{t.index=s},getIndex:()=>t.index,cleanup:n}}function bi(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const je=Object.create(null),me=["https://api.simplesvg.com","https://api.unisvg.com"],Ke=[];for(;me.length>0;)me.length===1||Math.random()>.5?Ke.push(me.shift()):Ke.push(me.pop());je[""]=bi({resources:["https://api.iconify.design"].concat(Ke)});function Xi(e,t){const i=bi(t);return i===null?!1:(je[e]=i,!0)}function He(e){return je[e]}function ks(){return Object.keys(je)}function Zi(){}const We=Object.create(null);function Ss(e){if(!We[e]){const t=He(e);if(!t)return;const i=Qn(t),n={config:t,redundancy:i};We[e]=n}return We[e]}function Jn(e,t,i){let n,r;if(typeof e=="string"){const o=Ze(e);if(!o)return i(void 0,424),Zi;r=o.send;const s=Ss(e);s&&(n=s.redundancy)}else{const o=bi(e);if(o){n=Qn(o);const s=e.resources?e.resources[0]:"",a=Ze(s);a&&(r=a.send)}}return!n||!r?(i(void 0,424),Zi):n.query(t,r,i)().abort}const Ki="iconify2",ie="iconify",Xn=ie+"-count",tn=ie+"-version",Zn=36e5,Os=168,Ps=50;function ti(e,t){try{return e.getItem(t)}catch{}}function gi(e,t,i){try{return e.setItem(t,i),!0}catch{}}function en(e,t){try{e.removeItem(t)}catch{}}function ei(e,t){return gi(e,Xn,t.toString())}function ii(e){return parseInt(ti(e,Xn))||0}const gt={local:!0,session:!0},Kn={local:new Set,session:new Set};let vi=!1;function Ts(e){vi=e}let be=typeof window>"u"?{}:window;function tr(e){const t=e+"Storage";try{if(be&&be[t]&&typeof be[t].length=="number")return be[t]}catch{}gt[e]=!1}function er(e,t){const i=tr(e);if(!i)return;const n=ti(i,tn);if(n!==Ki){if(n){const a=ii(i);for(let l=0;l<a;l++)en(i,ie+l.toString())}gi(i,tn,Ki),ei(i,0);return}const r=Math.floor(Date.now()/Zn)-Os,o=a=>{const l=ie+a.toString(),c=ti(i,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}en(i,l)}};let s=ii(i);for(let a=s-1;a>=0;a--)o(a)||(a===s-1?(s--,ei(i,s)):Kn[e].add(a))}function ir(){if(!vi){Ts(!0);for(const e in gt)er(e,t=>{const i=t.data,n=t.provider,r=i.prefix,o=lt(n,r);if(!mi(o,i).length)return!1;const s=i.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,s):s,!0})}}function zs(e,t){const i=e.lastModifiedCached;if(i&&i>=t)return i===t;if(e.lastModifiedCached=t,i)for(const n in gt)er(n,r=>{const o=r.data;return r.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t});return!0}function Ls(e,t){vi||ir();function i(n){let r;if(!gt[n]||!(r=tr(n)))return;const o=Kn[n];let s;if(o.size)o.delete(s=Array.from(o).shift());else if(s=ii(r),s>=Ps||!ei(r,s+1))return;const a={cached:Math.floor(Date.now()/Zn),provider:e.provider,data:t};return gi(r,ie+s.toString(),JSON.stringify(a))}t.lastModified&&!zs(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),i("local")||i("session"))}function nn(){}function Rs(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,xs(e)}))}function js(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:n}=e,r=e.iconsToLoad;delete e.iconsToLoad;let o;!r||!(o=Ze(i))||o.prepare(i,n,r).forEach(s=>{Jn(i,s,a=>{if(typeof a!="object")s.icons.forEach(l=>{e.missing.add(l)});else try{const l=mi(e,a);if(!l.length)return;const c=e.pendingIcons;c&&l.forEach(u=>{c.delete(u)}),Ls(e,a)}catch(l){console.error(l)}Rs(e)})})}))}const yi=(e,t)=>{const i=Es(e,!0,Wn()),n=_s(i);if(!n.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(n.loaded,n.missing,n.pending,nn)}),()=>{l=!1}}const r=Object.create(null),o=[];let s,a;return n.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===s)return;s=c,a=u,o.push(lt(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),n.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=lt(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),r[c][u].push(d))}),o.forEach(l=>{const{provider:c,prefix:u}=l;r[c][u].length&&js(l,r[c][u])}),t?$s(t,n,o):nn},Hs=e=>new Promise((t,i)=>{const n=typeof e=="string"?ae(e,!0):e;if(!n){i(e);return}yi([n||e],r=>{if(r.length&&n){const o=ee(n);if(o){t({...se,...o});return}}i(e)})});function Ms(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function Bs(e,t){const i=typeof e=="string"?ae(e,!0,!0):null;if(!i){const o=Ms(e);return{value:e,data:o}}const n=ee(i);if(n!==void 0||!i.prefix)return{value:e,name:i,data:n};const r=yi([i],()=>t(e,i,ee(i)));return{value:e,name:i,loading:r}}function Ye(e){return e.hasAttribute("inline")}let nr=!1;try{nr=navigator.vendor.indexOf("Apple")===0}catch{}function Is(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(nr||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const Fs=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ns=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ni(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const n=e.split(Fs);if(n===null||!n.length)return e;const r=[];let o=n.shift(),s=Ns.test(o);for(;;){if(s){const a=parseFloat(o);isNaN(a)?r.push(o):r.push(Math.ceil(a*t*i)/i)}else r.push(o);if(o=n.shift(),o===void 0)return r.join("");s=!s}}function qs(e,t="defs"){let i="";const n=e.indexOf("<"+t);for(;n>=0;){const r=e.indexOf(">",n),o=e.indexOf("</"+t);if(r===-1||o===-1)break;const s=e.indexOf(">",o);if(s===-1)break;i+=e.slice(r+1,o).trim(),e=e.slice(0,n).trim()+e.slice(s+1)}return{defs:i,content:e}}function Ds(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Us(e,t,i){const n=qs(e);return Ds(n.defs,t+n.content+i)}const Vs=e=>e==="unset"||e==="undefined"||e==="none";function rr(e,t){const i={...se,...e},n={...qn,...t},r={left:i.left,top:i.top,width:i.width,height:i.height};let o=i.body;[i,n].forEach(v=>{const b=[],$=v.hFlip,y=v.vFlip;let _=v.rotate;$?y?_+=2:(b.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),b.push("scale(-1 1)"),r.top=r.left=0):y&&(b.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),b.push("scale(1 -1)"),r.top=r.left=0);let C;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:C=r.height/2+r.top,b.unshift("rotate(90 "+C.toString()+" "+C.toString()+")");break;case 2:b.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:C=r.width/2+r.left,b.unshift("rotate(-90 "+C.toString()+" "+C.toString()+")");break}_%2===1&&(r.left!==r.top&&(C=r.left,r.left=r.top,r.top=C),r.width!==r.height&&(C=r.width,r.width=r.height,r.height=C)),b.length&&(o=Us(o,'<g transform="'+b.join(" ")+'">',"</g>"))});const s=n.width,a=n.height,l=r.width,c=r.height;let u,d;s===null?(d=a===null?"1em":a==="auto"?c:a,u=ni(d,l/c)):(u=s==="auto"?l:s,d=a===null?ni(u,c/l):a==="auto"?c:a);const f={},p=(v,b)=>{Vs(b)||(f[v]=b.toString())};p("width",u),p("height",d);const g=[r.left,r.top,l,c];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:o}}function _i(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)i+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function Ws(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ys(e){return"data:image/svg+xml,"+Ws(e)}function or(e){return'url("'+Ys(e)+'")'}const Gs=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ke=Gs();function Qs(e){ke=e}function Js(){return ke}function Xs(e,t){const i=He(e);if(!i)return 0;let n;if(!i.maxURL)n=0;else{let r=0;i.resources.forEach(s=>{r=Math.max(r,s.length)});const o=t+".json?icons=";n=i.maxURL-r-i.path.length-o.length}return n}function Zs(e){return e===404}const Ks=(e,t,i)=>{const n=[],r=Xs(e,t),o="icons";let s={type:o,provider:e,prefix:t,icons:[]},a=0;return i.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(n.push(s),s={type:o,provider:e,prefix:t,icons:[]},a=l.length),s.icons.push(l)}),n.push(s),n};function ta(e){if(typeof e=="string"){const t=He(e);if(t)return t.path}return"/"}const ea=(e,t,i)=>{if(!ke){i("abort",424);return}let n=ta(t.provider);switch(t.type){case"icons":{const o=t.prefix,s=t.icons.join(","),a=new URLSearchParams({icons:s});n+=o+".json?"+a.toString();break}case"custom":{const o=t.uri;n+=o.slice(0,1)==="/"?o.slice(1):o;break}default:i("abort",400);return}let r=503;ke(e+n).then(o=>{const s=o.status;if(s!==200){setTimeout(()=>{i(Zs(s)?"abort":"next",s)});return}return r=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?i("abort",o):i("next",r)});return}setTimeout(()=>{i("success",o)})}).catch(()=>{i("next",r)})},ia={prepare:Ks,send:ea};function rn(e,t){switch(e){case"local":case"session":gt[e]=t;break;case"all":for(const i in gt)gt[i]=t;break}}const Ge="data-style";let sr="";function na(e){sr=e}function on(e,t){let i=Array.from(e.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(Ge));i||(i=document.createElement("style"),i.setAttribute(Ge,Ge),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+sr}function ar(){Ji("",ia),Wn(!0);let e;try{e=window}catch{}if(e){if(ir(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Gi(n))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const n="IconifyProviders["+i+"] is invalid.";try{const r=t[i];if(typeof r!="object"||!r||r.resources===void 0)continue;Xi(i,r)||console.error(n)}catch{console.error(n)}}}}return{enableCache:t=>rn(t,!0),disableCache:t=>rn(t,!1),iconLoaded:Qi,iconExists:Qi,getIcon:ys,listIcons:vs,addIcon:Yn,addCollection:Gi,calculateSize:ni,buildIcon:rr,iconToHTML:_i,svgToURL:or,loadIcons:yi,loadIcon:Hs,addAPIProvider:Xi,appendCustomStyle:na,_api:{getAPIConfig:He,setAPIModule:Ji,sendAPIQuery:Jn,setFetch:Qs,getFetch:Js,listAPIProviders:ks}}}const ri={"background-color":"currentColor"},lr={"background-color":"transparent"},sn={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},an={"-webkit-mask":ri,mask:ri,background:lr};for(const e in an){const t=an[e];for(const i in sn)t[e+"-"+i]=sn[i]}function ln(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function ra(e,t,i){const n=document.createElement("span");let r=e.body;r.indexOf("<a")!==-1&&(r+="<!-- "+Date.now()+" -->");const o=e.attributes,s=_i(r,{...o,width:t.width+"",height:t.height+""}),a=or(s),l=n.style,c={"--svg":a,width:ln(o.width),height:ln(o.height),...i?ri:lr};for(const u in c)l.setProperty(u,c[u]);return n}let Gt;function oa(){try{Gt=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{Gt=null}}function sa(e){return Gt===void 0&&oa(),Gt?Gt.createHTML(e):e}function aa(e){const t=document.createElement("span"),i=e.attributes;let n="";i.width||(n="width: inherit;"),i.height||(n+="height: inherit;"),n&&(i.style=n);const r=_i(e.body,i);return t.innerHTML=sa(r),t.firstChild}function oi(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function cn(e,t){const i=t.icon.data,n=t.customisations,r=rr(i,n);n.preserveAspectRatio&&(r.attributes.preserveAspectRatio=n.preserveAspectRatio);const o=t.renderedMode;let s;switch(o){case"svg":s=aa(r);break;default:s=ra(r,{...se,...i},o==="mask")}const a=oi(e);a?s.tagName==="SPAN"&&a.tagName===s.tagName?a.setAttribute("style",s.getAttribute("style")):e.replaceChild(s,a):e.appendChild(s)}function un(e,t,i){const n=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:n}}function la(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const n=t.get(e);if(n)return n;const r=["icon","mode","inline","observe","width","height","rotate","flip"],o=class extends i{constructor(){super(),ft(this,"_shadowRoot"),ft(this,"_initialised",!1),ft(this,"_state"),ft(this,"_checkQueued",!1),ft(this,"_connected",!1),ft(this,"_observer",null),ft(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=Ye(this);on(a,l),this._state=un({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return r.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=Ye(this),c=this._state;l!==c.inline&&(c.inline=l,on(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Ye(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}cn(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const c=this.getAttribute("mode"),u=Wi(this);(a.attrMode!==c||hs(a.customisations,u)||!oi(this._shadowRoot))&&this._renderIcon(a.icon,u,c)}_iconChanged(a){const l=Bs(a,(c,u,d)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==c)return;const p={value:c,name:u,data:d};p.data?this._gotIconData(p):f.icon=p});l.data?this._gotIconData(l):this._state=un(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=oi(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Wi(this),this.getAttribute("mode"))}_renderIcon(a,l,c){const u=Is(a.data.body,c),d=this._state.inline;cn(this._shadowRoot,this._state={rendered:!0,icon:a,inline:d,customisations:l,attrMode:c,renderedMode:u})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(c=>c.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};r.forEach(a=>{a in o.prototype||Object.defineProperty(o.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const s=ar();for(const a in s)o[a]=o.prototype[a]=s[a];return t.define(e,o),o}const ca=la()||ar(),{enableCache:rl,disableCache:ol,iconLoaded:sl,iconExists:al,getIcon:ll,listIcons:cl,addIcon:ul,addCollection:hl,calculateSize:dl,buildIcon:pl,iconToHTML:fl,svgToURL:ml,loadIcons:bl,loadIcon:gl,addAPIProvider:vl,_api:yl}=ca,ua=A`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`,ha=A`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-3: hsl(210 10% 30%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
    --bim-ui_gray-7: hsl(210 10% 70%);
    --bim-ui_gray-8: hsl(210 10% 80%);
    --bim-ui_gray-9: hsl(210 10% 90%);
    --bim-ui_gray-10: hsl(210 10% 95%);

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
    --bim-ui_size-8xl: 2.125rem;
    --bim-ui_size-9xl: 2.25rem;
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  .theme-transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: drop-shadow(0 0 10px var(--bim-ui_bg-base));
    z-index: 9999;
  }

  .theme-transition-overlay > div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bim-ui_bg-base);
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  @keyframes toggleOverlay {
    0%,
    99% {
      display: block;
    }

    100% {
      display: none;
    }
  }

  @keyframes toggleThemeAnimation {
    0% {
      clip-path: circle(0% at center top);
    }
    45%,
    55% {
      clip-path: circle(150% at center center);
    }
    100% {
      clip-path: circle(0% at center bottom);
    }
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,ut={scrollbar:ua,globalStyles:ha},cr=class w{static set config(t){this._config={...w._config,...t}}static get config(){return w._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=ut.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){w.init()}static init(t="",i=!0){w.addGlobalStyles(),w.defineCustomElement("bim-button",ga),w.defineCustomElement("bim-checkbox",jt),w.defineCustomElement("bim-color-input",ht),w.defineCustomElement("bim-context-menu",ai),w.defineCustomElement("bim-dropdown",X),w.defineCustomElement("bim-grid",$i),w.defineCustomElement("bim-icon",Ca),w.defineCustomElement("bim-input",ce),w.defineCustomElement("bim-label",Ht),w.defineCustomElement("bim-number-input",j),w.defineCustomElement("bim-option",P),w.defineCustomElement("bim-panel",_t),w.defineCustomElement("bim-panel-section",Mt),w.defineCustomElement("bim-selector",Bt),w.defineCustomElement("bim-table",H),w.defineCustomElement("bim-tabs",et),w.defineCustomElement("bim-tab",L),w.defineCustomElement("bim-table-cell",Er),w.defineCustomElement("bim-table-children",Ba),w.defineCustomElement("bim-table-group",kr),w.defineCustomElement("bim-table-row",It),w.defineCustomElement("bim-text-input",N),w.defineCustomElement("bim-toolbar",qe),w.defineCustomElement("bim-toolbar-group",Fe),w.defineCustomElement("bim-toolbar-section",Nt),w.defineCustomElement("bim-viewport",Br),i&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<10;n++){const r=Math.floor(Math.random()*t.length);i+=t.charAt(r)}return i}static animateOnLoad(t=""){const i=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,n=[];function r(o,s=document,a=new Set){const l=[];return Array.from(s.querySelectorAll(o)).forEach(c=>{a.has(c)||(a.add(c),l.push(c))}),Array.from(s.querySelectorAll("*")).filter(c=>c.shadowRoot).forEach(c=>{a.has(c)||(a.add(c),l.push(...r(o,c.shadowRoot,a)))}),l}requestAnimationFrame(()=>{r(t||i).forEach(s=>{const a=s;let l="auto";l=window.getComputedStyle(a).getPropertyValue("transition"),a.style.setProperty("opacity","0"),a.style.setProperty("transition","none"),requestAnimationFrame(()=>{a.style.setProperty("transition",l)}),n.push(a)});const o=()=>{n.forEach(s=>{const a=s,l=(a.getBoundingClientRect().x+a.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),c=window.getComputedStyle(a).getPropertyValue("transform"),u=400,d=200+l*1e3;a.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:u,easing:"ease-in-out",delay:d}),setTimeout(()=>{a.style.removeProperty("opacity"),c!=="none"?a.style.setProperty("transform",c):a.style.removeProperty("transform")},d+u)})};document.readyState==="complete"?o():window.addEventListener("load",o)})}static toggleTheme(t=!0){const i=document.querySelector("html");if(!i)return;const n=()=>{i.classList.contains("bim-ui-dark")?i.classList.replace("bim-ui-dark","bim-ui-light"):i.classList.contains("bim-ui-light")?i.classList.replace("bim-ui-light","bim-ui-dark"):i.classList.add("bim-ui-light")};if(t){const r=document.createElement("div");r.classList.add("theme-transition-overlay");const o=document.createElement("div");r.appendChild(o),o.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(r),r.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),o.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{n()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(s=>{document.body.removeChild(s)})},1e3)}else n()}};cr._config={sectionLabelOnVerticalToolbar:!1};let xi=cr;class Se extends E{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const n of t)this.elements.add(n);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const n of i)n.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const n=i[0];if(!n.isIntersecting)return;const r=n.target;t.unobserve(r);const o=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,s=[...this.elements][o];s&&(this.visibleElements=[...this.visibleElements,s],t.observe(s))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,n=[...this.elements][i];n&&t.observe(n)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const n=document.createDocumentFragment();if(t.length===0)return Tt(t(),n),n.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let r=i;const o=t,s=l=>(r={...r,...l},Tt(o(r,s),n),r);s(i);const a=()=>r;return[n.firstElementChild,s,a]}}const Oe=(e,t={},i=!0)=>{let n={};for(const r of e.children){const o=r,s=o.getAttribute("name")||o.getAttribute("label"),a=s?t[s]:void 0;if(s){if("value"in o&&typeof o.value<"u"&&o.value!==null){const l=o.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;n[s]=a?a(o.value):o.value}else if(i){const l=Oe(o,t);if(Object.keys(l).length===0)continue;n[s]=a?a(l):l}}else i&&(n={...n,...Oe(o,t)})}return n},Me=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e,da=[">=","<=","=",">","<","?","/","#"];function hn(e){const t=da.find(s=>e.split(s).length===2),i=e.split(t).map(s=>s.trim()),[n,r]=i,o=r.startsWith("'")&&r.endsWith("'")?r.replace(/'/g,""):Me(r);return{key:n,condition:t,value:o}}const si=e=>{try{const t=[],i=e.split(/&(?![^()]*\))/).map(n=>n.trim());for(const n of i){const r=!n.startsWith("(")&&!n.endsWith(")"),o=n.startsWith("(")&&n.endsWith(")");if(r){const s=hn(n);t.push(s)}if(o){const s={operator:"&",queries:n.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const c=hn(a);return l>0&&(c.operator="&"),c})};t.push(s)}}return t}catch{return null}},dn=(e,t,i)=>{let n=!1;switch(t){case"=":n=e===i;break;case"?":n=String(e).includes(String(i));break;case"<":(typeof e=="number"||typeof i=="number")&&(n=e<i);break;case"<=":(typeof e=="number"||typeof i=="number")&&(n=e<=i);break;case">":(typeof e=="number"||typeof i=="number")&&(n=e>i);break;case">=":(typeof e=="number"||typeof i=="number")&&(n=e>=i);break;case"/":n=String(e).startsWith(String(i));break}return n};var pa=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,ur=(e,t,i,n)=>{for(var r=fa(t,i),o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&pa(t,i,r),r},O;const wi=(O=class extends E{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(e){this._placement=e,this.updatePosition()}static removeMenus(){for(const e of O.menus)e instanceof O&&(e.visible=!1);setTimeout(()=>{O.dialog.close(),O.dialog.remove()},310)}get visible(){return this._visible}set visible(e){this._visible=e,e?(O.dialog.parentElement||document.body.append(O.dialog),this._previousContainer=this.parentElement,O.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),O.dialog.append(this),O.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var t;(t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},310)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const e=this.placement??"right",t=await Rn(this._previousContainer,this,{placement:e,middleware:[_n(10),Ln(),zn(),Tn({padding:5})]}),{x:i,y:n}=t;this.style.left=`${i}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),O.menus.push(this),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("display","none"),this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return m` <slot></slot> `}},O.styles=[ut.scrollbar,A`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        transform-origin: top left;
        transform: scale(1);
        clip-path: circle(150% at top left);
        background-color: var(--bim-ui_bg-contrast-20);
        transition:
          clip-path 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93),
          transform 0.3s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      :host(:not([visible])) {
        transform: scale(0.8);
        clip-path: circle(0 at top left);
      }
    `],O.dialog=Se.create(()=>m` <dialog
      @click=${e=>{e.target===O.dialog&&O.removeMenus()}}
      @cancel=${()=>O.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`),O.menus=[],O);ur([h({type:String,reflect:!0})],wi.prototype,"placement");ur([h({type:Boolean,reflect:!0})],wi.prototype,"visible");let ai=wi;var ma=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,V=(e,t,i,n)=>{for(var r=n>1?void 0:n?ba(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&ma(t,i,r),r},Ut;const B=(Ut=class extends E{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=zt(),this._tooltip=zt(),this._mouseLeave=!1,this.onClick=e=>{e.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const e=this._contextMenu;if(e){const t=this.getAttribute("data-context-group");t&&e.setAttribute("data-context-group",t),this.closeNestedContexts();const i=xi.newRandomId();for(const n of e.children)n instanceof Ut&&n.setAttribute("data-context-group",i);e.visible=!0}},this.mouseLeave=!0}set loading(e){if(this._loading=e,e)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=e,this.icon="eos-icons:loading";else{const{disabled:t,icon:i}=this._stateBeforeLoading;this.disabled=t,this.icon=i}}get loading(){return this._loading}set mouseLeave(e){this._mouseLeave=e,e&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:e}=this._parent,{value:t}=this._tooltip;e&&t&&Rn(e,t,{placement:"bottom",middleware:[_n(10),Ln(),zn(),Tn({padding:5})]}).then(i=>{const{x:n,y:r}=i;Object.assign(t.style,{left:`${n}px`,top:`${r}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const e=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},e)}closeNestedContexts(){const e=this.getAttribute("data-context-group");if(e)for(const t of ai.dialog.children){const i=t.getAttribute("data-context-group");if(t instanceof ai&&i===e){t.visible=!1,t.removeAttribute("data-context-group");for(const n of t.children)n instanceof Ut&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const e=m`
      <div ${Lt(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?m`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?m`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,t=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return m`
      <div ${Lt(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?m`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?t:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?e:null}
      </div>
      <slot></slot>
    `}},Ut.styles=A`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      position: relative;
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:not([disabled]))::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--bim-ui_main-base);
      clip-path: circle(0 at center center);
      box-sizing: border-box;
      transition:
        clip-path 0.3s cubic-bezier(0.65, 0.05, 0.36, 1),
        transform 0.15s;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-icon--c: var(--bim-label--c);
      position: relative;
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    .children {
      padding: 0 0.375rem;
      position: absolute;
      height: 100%;
      right: 0;
    }

    :host(:not([label-hidden])[icon][vertical]) .parent {
      min-height: 2.5rem;
    }

    .button {
      flex-grow: 1;
      transition: transform 0.15s;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover)::before {
      clip-path: circle(120% at center center);
    }

    :host(:hover) {
      --bim-label--c: var(--bim-ui_main-contrast);
      z-index: 2;
    }

    :host([active]) {
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([disabled]):active) {
      background: transparent;
    }

    :host(:not([disabled]):active) .button,
    :host(:not([disabled]):active)::before {
      transform: scale(0.98);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80) !important;
      background-color: gray !important;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
      animation: openTooltips 0.15s ease-out forwards;
      transition: visibility 0.2s;
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      animation: closeTooltips 0.15s ease-in forwards;
      visibility: hidden;
      display: none;
    }

    @keyframes closeTooltips {
      0% {
        display: flex;
        padding: 0.75rem;
        transform: translateY(0);
        opacity: 1;
      }
      90% {
        padding: 0.75rem;
      }
      100% {
        display: none;
        padding: 0;
        transform: translateY(-10px);
        opacity: 0;
      }
    }

    @keyframes openTooltips {
      0% {
        display: flex;
        transform: translateY(-10px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,Ut);V([h({type:String,reflect:!0})],B.prototype,"label",2);V([h({type:Boolean,attribute:"label-hidden",reflect:!0})],B.prototype,"labelHidden",2);V([h({type:Boolean,reflect:!0})],B.prototype,"active",2);V([h({type:Boolean,reflect:!0,attribute:"disabled"})],B.prototype,"disabled",2);V([h({type:String,reflect:!0})],B.prototype,"icon",2);V([h({type:Boolean,reflect:!0})],B.prototype,"vertical",2);V([h({type:Number,attribute:"tooltip-time",reflect:!0})],B.prototype,"tooltipTime",2);V([h({type:Boolean,attribute:"tooltip-visible",reflect:!0})],B.prototype,"tooltipVisible",2);V([h({type:String,attribute:"tooltip-title",reflect:!0})],B.prototype,"tooltipTitle",2);V([h({type:String,attribute:"tooltip-text",reflect:!0})],B.prototype,"tooltipText",2);V([h({type:Boolean,reflect:!0})],B.prototype,"loading",1);let ga=B;var va=Object.defineProperty,le=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&va(t,i,r),r};const hr=class extends E{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){const t=m`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;return m`
      <div class="parent">
        <label class="parent-label">
          ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
          <div class="input-container">
            <input
              type="checkbox"
              aria-label=${this.label||this.name||"Checkbox Input"}
              @change="${this.onChange}"
              .checked="${this.checked}"
            />
            ${t}
          </div>
        </label>
      </div>
    `}};hr.styles=A`
    :host {
      display: block;
    }

    .parent-label {
      --background: #fff;
      --border: #dfdfe6;
      --stroke: #fff;
      --border-hover: var(--bim-ui_main-base);
      --border-active: var(--bim-ui_main-base);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 1.75rem;
      column-gap: 0.25rem;
      position: relative;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    :host([inverted]) .parent-label {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input,
    svg {
      width: 1rem;
      height: 1rem;
      display: block;
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 4px;
      transition: box-shadow 0.3s;
      box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
    }

    svg {
      pointer-events: none;
      fill: none;
      stroke-width: 2.2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: var(--stroke, var(--border-active));
      transform: translateY(-100%) scale(0);
      position: absolute;
      width: 1rem;
      height: 1rem;
    }

    input:hover {
      --s: 2px;
      --b: var(--border-hover);
    }

    input:checked {
      --b: var(--border-active);
      --s: 11px;
    }

    input:checked + svg {
      -webkit-animation: bounce 0.4s linear forwards 0.2s;
      animation: bounce 0.4s linear forwards 0.2s;
    }

    @keyframes bounce {
      0% {
        transform: translateY(-100%) scale(0);
      }
      50% {
        transform: translateY(-100%) scale(1.2);
      }
      75% {
        transform: translateY(-100%) scale(0.9);
      }
      100% {
        transform: translateY(-100%) scale(1);
      }
    }
  `;let jt=hr;le([h({type:String,reflect:!0})],jt.prototype,"icon");le([h({type:String,reflect:!0})],jt.prototype,"name");le([h({type:String,reflect:!0})],jt.prototype,"label");le([h({type:Boolean,reflect:!0})],jt.prototype,"checked");le([h({type:Boolean,reflect:!0})],jt.prototype,"inverted");var ya=Object.defineProperty,yt=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&ya(t,i,r),r};const dr=class extends E{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this.disabled=!1,this._colorInput=zt(),this._textInput=zt(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const i=t.target;this.opacity=i.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:i,opacity:n}=t;this.color=i,n&&(this.opacity=n)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:i}=this._colorInput;i&&(this.color=i.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:i}=this._textInput;if(!i)return;const{value:n}=i;let r=n.replace(/[^a-fA-F0-9]/g,"");r.startsWith("#")||(r=`#${r}`),i.value=r.slice(0,7),i.value.length===7&&(this.color=i.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return m`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1; padding: 0 0.5rem;"
            >
              <input
                ${Lt(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
                ?disabled=${this.disabled}
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${Lt(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
                ?disabled=${this.disabled}
              />
            </div>
            ${this.opacity!==void 0?m`<bim-number-input
                  @change=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};dr.styles=A`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    .parent {
      display: flex;
      gap: 0.375rem;
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 3.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([disabled]) .color-container input[type="text"] {
      color: var(--bim-ui_bg-contrast-60);
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let ht=dr;yt([h({type:String,reflect:!0})],ht.prototype,"name");yt([h({type:String,reflect:!0})],ht.prototype,"label");yt([h({type:String,reflect:!0})],ht.prototype,"icon");yt([h({type:Boolean,reflect:!0})],ht.prototype,"vertical");yt([h({type:Number,reflect:!0})],ht.prototype,"opacity");yt([h({type:String,reflect:!0})],ht.prototype,"color");yt([h({type:Boolean,reflect:!0})],ht.prototype,"disabled");var _a=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,dt=(e,t,i,n)=>{for(var r=n>1?void 0:n?xa(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&_a(t,i,r),r};const pr=class extends E{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Me(this.label):this.label}set value(t){this._value=t}render(){return m`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?m` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?m`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`:null}
        ${!this.checkbox&&!this.noMark&&this.checked?m`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
        <slot></slot>
      </div>
    `}};pr.styles=A`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:hover) {
      cursor: pointer;
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
      z-index: 1;
    }
  `;let P=pr;dt([h({type:String,reflect:!0})],P.prototype,"img",2);dt([h({type:String,reflect:!0})],P.prototype,"label",2);dt([h({type:String,reflect:!0})],P.prototype,"icon",2);dt([h({type:Boolean,reflect:!0})],P.prototype,"checked",2);dt([h({type:Boolean,reflect:!0})],P.prototype,"checkbox",2);dt([h({type:Boolean,attribute:"no-mark",reflect:!0})],P.prototype,"noMark",2);dt([h({converter:{fromAttribute(e){return e&&Me(e)}}})],P.prototype,"value",1);dt([h({type:Boolean,reflect:!0})],P.prototype,"vertical",2);var wa=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,it=(e,t,i,n)=>{for(var r=n>1?void 0:n?$a(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&wa(t,i,r),r};const fr=class extends Se{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=zt(),this.onOptionClick=t=>{const i=t.target,n=this._value.has(i);if(!this.multiple&&!this.required&&!n)this._value=new Set([i]);else if(!this.multiple&&!this.required&&n)this._value=new Set([]);else if(!this.multiple&&this.required&&!n)this._value=new Set([i]);else if(this.multiple&&!this.required&&!n)this._value=new Set([...this._value,i]);else if(this.multiple&&!this.required&&n){const r=[...this._value].filter(o=>o!==i);this._value=new Set(r)}else if(this.multiple&&this.required&&!n)this._value=new Set([...this._value,i]);else if(this.multiple&&this.required&&n){const r=[...this._value].filter(s=>s!==i),o=new Set(r);o.size!==0&&(this._value=o)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:i}=this._contextMenu;if(!i)return;for(const n of this.elements)i.append(n);this._visible=!0}else{for(const i of this.elements)this.append(i);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const i=new Set;for(const n of t){const r=this.findOption(n);if(r&&(i.add(r),!this.multiple&&Object.keys(t).length===1))break}this._value=i,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(t=>t instanceof P&&t.checked).map(t=>t.value)}get _options(){const t=new Set([...this.elements]);for(const i of this.children)i instanceof P&&t.add(i);return[...t]}onSlotChange(t){const i=t.target.assignedElements();this.observe(i);const n=new Set;for(const r of this.elements){if(!(r instanceof P)){r.remove();continue}r.checked&&n.add(r),r.removeEventListener("click",this.onOptionClick),r.addEventListener("click",this.onOptionClick)}this._value=n}updateOptionsState(){for(const t of this._options)t instanceof P&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(i=>i instanceof P?i.label===t||i.value===t:!1)}render(){let t,i,n;if(this._value.size===0)t=this.placeholder??"Select an option...";else if(this._value.size===1){const r=[...this._value][0];t=(r==null?void 0:r.label)||(r==null?void 0:r.value),i=r==null?void 0:r.img,n=r==null?void 0:r.icon}else t=`Multiple (${this._value.size})`;return m`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${i}
            .icon=${n}
            style="overflow: hidden;"
            >${t}</bim-label
          >
          <svg
            style="flex-shrink: 0; fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100))"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
          <bim-context-menu
            ${Lt(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};fr.styles=[ut.scrollbar,A`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `];let X=fr;it([h({type:String,reflect:!0})],X.prototype,"name",2);it([h({type:String,reflect:!0})],X.prototype,"icon",2);it([h({type:String,reflect:!0})],X.prototype,"label",2);it([h({type:Boolean,reflect:!0})],X.prototype,"multiple",2);it([h({type:Boolean,reflect:!0})],X.prototype,"required",2);it([h({type:Boolean,reflect:!0})],X.prototype,"vertical",2);it([h({type:String,reflect:!0})],X.prototype,"placeholder",2);it([h({type:Boolean,reflect:!0})],X.prototype,"visible",1);it([Rt()],X.prototype,"_value",2);var Ea=Object.defineProperty,mr=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Ea(t,i,r),r};const br=class extends E{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._elements={},this._templateIds=new Map,this._updateFunctions={},this.updateComponent={}}set layouts(t){this._layouts=t,this._templateIds.clear()}get layouts(){return this._layouts}set elements(t){this._elements=t;const i={};for(const[n,r]of Object.entries(this.elements))"template"in r&&(i[n]=o=>{const s=this._updateFunctions[n];s&&s(o)});this.updateComponent=i}get elements(){return this._elements}getLayoutAreas(t){const{template:i}=t,n=i.split(`
`).map(r=>r.trim()).map(r=>r.split('"')[1]).filter(r=>r!==void 0).flatMap(r=>r.split(/\s+/));return[...new Set(n)].filter(r=>r!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}getTemplateId(t){let i=this._templateIds.get(t);return i||(i=xi.newRandomId(),this._templateIds.set(t,i)),i}cleanUpdateFunctions(){if(!this.layout){this._updateFunctions={};return}const t=this.layouts[this.layout],i=this.getLayoutAreas(t);for(const n in this.elements)i.includes(n)||delete this._updateFunctions[n]}emitElementCreation(t){this.dispatchEvent(new CustomEvent("elementcreated",{detail:t}))}render(){if(this.layout){if(this.layouts[this.layout]){const t=this.layouts[this.layout],i=this.getLayoutAreas(t).map(n=>{var r;const o=((r=t.elements)==null?void 0:r[n])||this.elements[n];if(!o)return null;if(o instanceof HTMLElement)return o.style.gridArea=n,o;if("template"in o){const{template:c,initialState:u}=o,d=this.getTemplateId(c),f=this.querySelector(`[data-grid-template-id="${d}"]`);if(f)return f;const[p,g]=Se.create(c,u);return this.emitElementCreation({name:n,element:p}),p.setAttribute("data-grid-template-id",d),p.style.gridArea=n,this._updateFunctions[n]=g,p}const s=this.getTemplateId(o),a=this.querySelector(`[data-grid-template-id="${s}"]`);if(a)return a;const l=Se.create(o);return this.emitElementCreation({name:n,element:l}),l.setAttribute("data-grid-template-id",this.getTemplateId(o)),l.style.gridArea=n,l}).filter(n=>n!==null);this.innerHTML="",this.style.gridTemplate=t.template,this.append(...i),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return this.cleanUpdateFunctions(),m`<slot></slot>`}};br.styles=A`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;let $i=br;mr([h({type:Boolean,reflect:!0})],$i.prototype,"floating");mr([h({type:String,reflect:!0})],$i.prototype,"layout");const li=class extends E{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};li.styles=A`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
      display: flex;
    }
  `,li.properties={icon:{type:String}};let Ca=li;var Aa=Object.defineProperty,Be=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Aa(t,i,r),r};const gr=class extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const i of this.children){const n=i;"value"in n?t[n.name||n.label]=n.value:"checked"in n&&(t[n.name||n.label]=n.checked)}return t}set value(t){const i=[...this.children];for(const n in t){const r=i.find(a=>{const l=a;return l.name===n||l.label===n});if(!r)continue;const o=r,s=t[n];typeof s=="boolean"?o.checked=s:o.value=s}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};gr.styles=A`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      border: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
      transition: all 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let ce=gr;Be([h({type:String,reflect:!0})],ce.prototype,"name");Be([h({type:String,reflect:!0})],ce.prototype,"label");Be([h({type:String,reflect:!0})],ce.prototype,"icon");Be([h({type:Boolean,reflect:!0})],ce.prototype,"vertical");var ka=Object.defineProperty,ue=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&ka(t,i,r),r};const vr=class extends E{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Me(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};vr.styles=A`
    :host {
      --bim-icon--c: var(--bim-label--ic);
      overflow: auto;
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      display: block;
      white-space: nowrap;
      transition: all 0.15s;
    }

    :host([icon]) {
      line-height: 1.1rem;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: none;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      display: flex;
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      align-items: center;
      gap: 0.125rem;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let Ht=vr;ue([h({type:String,reflect:!0})],Ht.prototype,"img");ue([h({type:Boolean,attribute:"label-hidden",reflect:!0})],Ht.prototype,"labelHidden");ue([h({type:String,reflect:!0})],Ht.prototype,"icon");ue([h({type:Boolean,attribute:"icon-hidden",reflect:!0})],Ht.prototype,"iconHidden");ue([h({type:Boolean,reflect:!0})],Ht.prototype,"vertical");var Sa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,I=(e,t,i,n)=>{for(var r=n>1?void 0:n?Oa(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Sa(t,i,r),r};const yr=class extends E{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=zt(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:i}=this._input;i&&this.setValue(i.value)}setValue(t){const{value:i}=this._input;let n=t;if(n=n.replace(/[^0-9.-]/g,""),n=n.replace(/(\..*)\./g,"$1"),n.endsWith(".")||(n.lastIndexOf("-")>0&&(n=n[0]+n.substring(1).replace(/-/g,"")),n==="-"||n==="-0"))return;let r=Number(n);Number.isNaN(r)||(r=this.min!==void 0?Math.max(r,this.min):r,r=this.max!==void 0?Math.min(r,this.max):r,this.value!==r&&(this._value=r,i&&(i.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:i}=t,n=this.value;let r=!1;const o=l=>{var c;r=!0;const{clientX:u}=l,d=this.step??1,f=((c=d.toString().split(".")[1])==null?void 0:c.length)||0,p=1/(this.sensitivity??1),g=(u-i)/p;if(Math.floor(Math.abs(g))!==Math.abs(g))return;const v=n+g*d;this.setValue(v.toFixed(f))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},a=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",r?r=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const i=n=>{n.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",i))};window.addEventListener("keydown",i)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=m`
      ${this.pref||this.icon?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${Lt(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,i=this.min??-1/0,n=this.max??1/0,r=100*(this.value-i)/(n-i),o=m`
      <style>
        .slider-indicator {
          width: ${`${r}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?m`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?m`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,s=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return m`
      <bim-input
        title=${s}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?o:t}
      </bim-input>
    `}};yr.styles=A`
    :host {
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_accent-base)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let j=yr;I([h({type:String,reflect:!0})],j.prototype,"name",2);I([h({type:String,reflect:!0})],j.prototype,"icon",2);I([h({type:String,reflect:!0})],j.prototype,"label",2);I([h({type:String,reflect:!0})],j.prototype,"pref",2);I([h({type:Number,reflect:!0})],j.prototype,"min",2);I([h({type:Number,reflect:!0})],j.prototype,"value",1);I([h({type:Number,reflect:!0})],j.prototype,"step",2);I([h({type:Number,reflect:!0})],j.prototype,"sensitivity",2);I([h({type:Number,reflect:!0})],j.prototype,"max",2);I([h({type:String,reflect:!0})],j.prototype,"suffix",2);I([h({type:Boolean,reflect:!0})],j.prototype,"vertical",2);I([h({type:Boolean,reflect:!0})],j.prototype,"slider",2);var Pa=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,he=(e,t,i,n)=>{for(var r=n>1?void 0:n?Ta(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Pa(t,i,r),r};const _r=class extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return Oe(this,this.valueTransform)}set value(t){const i=[...this.children];for(const n in t){const r=i.find(s=>{const a=s;return a.name===n||a.label===n});if(!r)continue;const o=r;o.value=t[n]}}animatePanles(){const t=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];this.animate(t,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanles()}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const i of t)i.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const i of t)i.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};_r.styles=[ut.scrollbar,A`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        max-height: 0;
        max-width: 0;
        opacity: 0;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        overflow: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([header-hidden]) .parent bim-label {
        display: none;
      }

      .sections {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex: 1;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let _t=_r;he([h({type:String,reflect:!0})],_t.prototype,"icon",2);he([h({type:String,reflect:!0})],_t.prototype,"name",2);he([h({type:String,reflect:!0})],_t.prototype,"label",2);he([h({type:Boolean,reflect:!0})],_t.prototype,"hidden",1);he([h({type:Boolean,attribute:"header-hidden",reflect:!0})],_t.prototype,"headerHidden",2);var za=Object.defineProperty,de=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&za(t,i,r),r};const xr=class extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}get value(){const t=this.parentElement;let i;return t instanceof _t&&(i=t.valueTransform),Object.values(this.valueTransform).length!==0&&(i=this.valueTransform),Oe(this,i)}set value(t){const i=[...this.children];for(const n in t){const r=i.find(s=>{const a=s;return a.name===n||a.label===n});if(!r)continue;const o=r;o.value=t[n]}}setFlexAfterTransition(){var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".components");i&&setTimeout(()=>{this.collapsed?i.style.removeProperty("flex"):i.style.setProperty("flex","1")},150)}animateHeader(){var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=i.clientHeight:(i.style.setProperty("transition","none"),i.style.setProperty("height","auto"),i.style.setProperty("padding","0.125rem 1rem 1rem"),this.componentHeight=i.clientHeight,requestAnimationFrame(()=>{i.style.setProperty("height","0px"),i.style.setProperty("padding","0 1rem 0"),i.style.setProperty("transition","height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)")}))),this.collapsed?(i.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{i.style.setProperty("height","0px"),i.style.setProperty("padding","0 1rem 0")})):(i.style.setProperty("height","0px"),i.style.setProperty("padding","0 1rem 0"),requestAnimationFrame(()=>{i.style.setProperty("height",`${this.componentHeight}px`),i.style.setProperty("padding","0.125rem 1rem 1rem")})),this.setFlexAfterTransition()}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(t){t.target.assignedElements({flatten:!0}).forEach((i,n)=>{const r=n*.05;i.style.setProperty("transition-delay",`${r}s`)})}handlePointerEnter(){const t=this.renderRoot.querySelector(".expand-icon");this.collapsed?t==null||t.style.setProperty("animation","collapseAnim 0.5s"):t==null||t.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const t=this.renderRoot.querySelector(".expand-icon");t==null||t.style.setProperty("animation","none")}render(){const t=this.label||this.icon||this.name||this.fixed,i=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,n=m`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:i}
      </div>
    `;return m`
      <div class="parent">
        ${t?n:null}
        <div class="components" style="flex: 1;">
          <div>
            <slot @slotchange=${this.handelSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};xr.styles=[ut.scrollbar,A`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host .parent {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover .expand-icon {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(
          --bim-panel-section_hc,
          var(--bim-ui_bg-contrast-80)
        );
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .expand-icon {
        fill: var(--bim-ui_bg-contrast-80);
        transition: transform 0.2s;
      }

      :host([collapsed]) .expand-icon {
        transform: rotateZ(-180deg);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        row-gap: 0.75rem;
        padding: 0 1rem 1rem;
        box-sizing: border-box;
        transition:
          height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
      }

      .components > div {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex: 1;
        overflow: auto;
      }

      :host(:not([icon]):not([label])) .components {
        padding: 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        padding: 0 1rem 0;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }

      ::slotted(*) {
        transition:
          transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          opacity 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
      }

      :host(:not([fixed])[collapsed]) ::slotted(*) {
        transform: translateX(-20%);
        opacity: 0;
      }

      @keyframes expandAnim {
        0%,
        100% {
          transform: translateY(0%);
        }
        25% {
          transform: translateY(-30%);
        }
        50% {
          transform: translateY(10%);
        }
        75% {
          transform: translateY(-30%);
        }
      }

      @keyframes collapseAnim {
        0%,
        100% {
          transform: translateY(0%) rotateZ(-180deg);
        }
        25% {
          transform: translateY(30%) rotateZ(-180deg);
        }
        50% {
          transform: translateY(-10%) rotateZ(-180deg);
        }
        75% {
          transform: translateY(30%) rotateZ(-180deg);
        }
      }
    `];let Mt=xr;de([h({type:String,reflect:!0})],Mt.prototype,"icon");de([h({type:String,reflect:!0})],Mt.prototype,"label");de([h({type:String,reflect:!0})],Mt.prototype,"name");de([h({type:Boolean,reflect:!0})],Mt.prototype,"fixed");de([h({type:Boolean,reflect:!0})],Mt.prototype,"collapsed");var La=Object.defineProperty,pe=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&La(t,i,r),r};const wr=class extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.setAnimatedBackgound(),this.dispatchEvent(this.onValueChange);for(const i of this.children)i instanceof P&&(i.checked=i===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const i=this.findOption(t);if(i){for(const n of this._options)n.checked=n===i;this._value=i,this.setAnimatedBackgound(),this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const i=t.target.assignedElements();for(const n of i)n instanceof P&&(n.noMark=!0,n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(i=>i instanceof P?i.label===t||i.value===t:!1)}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){const i=this.renderRoot.querySelector(".animated-background"),n=this._value;requestAnimationFrame(()=>{var r,o,s,a;const l=(a=(s=(o=(r=n==null?void 0:n.parentElement)==null?void 0:r.shadowRoot)==null?void 0:o.querySelector("bim-input"))==null?void 0:s.shadowRoot)==null?void 0:a.querySelector(".input"),c={width:n==null?void 0:n.clientWidth,height:n==null?void 0:n.clientHeight,top:((n==null?void 0:n.offsetTop)??0)-((l==null?void 0:l.offsetTop)??0),left:((n==null?void 0:n.offsetLeft)??0)-((l==null?void 0:l.offsetLeft)??0)};i==null||i.style.setProperty("width",`${c.width}px`),i==null||i.style.setProperty("height",`${c.height}px`),i==null||i.style.setProperty("top",`${c.top}px`),i==null||i.style.setProperty("left",`${c.left}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const r="ease";i==null||i.style.setProperty("transition",`width ${.3}s ${r}, height ${.3}s ${r}, top ${.3}s ${r}, left ${.3}s ${r}`)})}firstUpdated(){const t=[...this.children].find(i=>i instanceof P&&i.checked);t&&(this._value=t),window.addEventListener("load",()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};wr.styles=A`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      position: relative;
      border-radius: 0;
      overflow: hidden;
      min-width: min-content;
      min-height: min-content;
      transition: background-color 0.2s;
    }

    .animated-background {
      position: absolute;
      background: var(--bim-ui_main-base);
      width: 0;
      height: 0;
      top: 0;
      left: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
    }

    ::slotted(bim-option:not([checked]):hover) {
      background-color: #0003;
    }
  `;let Bt=wr;pe([h({type:String,reflect:!0})],Bt.prototype,"name");pe([h({type:String,reflect:!0})],Bt.prototype,"icon");pe([h({type:String,reflect:!0})],Bt.prototype,"label");pe([h({type:Boolean,reflect:!0})],Bt.prototype,"vertical");pe([Rt()],Bt.prototype,"_value");const Ra=()=>m`
    <style>
      div {
        display: flex;
        gap: 0.375rem;
        border-radius: 0.25rem;
        min-height: 1.25rem;
      }

      [data-type="row"] {
        background-color: var(--bim-ui_bg-contrast-10);
        animation: row-loading 1s linear infinite alternate;
        padding: 0.5rem;
      }

      [data-type="cell"] {
        background-color: var(--bim-ui_bg-contrast-20);
        flex: 0.25;
      }

      @keyframes row-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div style="display: flex; flex-direction: column;">
      <div data-type="row" style="gap: 2rem">
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 2"></div>
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 0.5"></div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.7s5"></div>
        </div>
      </div>
    </div>
  `,ja=()=>m`
    <style>
      .loader {
        grid-area: Processing;
        position: relative;
        padding: 0.125rem;
      }
      .loader:before {
        content: "";
        position: absolute;
      }
      .loader .loaderBar {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: var(--bim-ui_main-base);
        /* width: 25%; */
        width: 0;
        animation: borealisBar 2s linear infinite;
      }

      @keyframes borealisBar {
        0% {
          left: 0%;
          right: 100%;
          width: 0%;
        }
        10% {
          left: 0%;
          right: 75%;
          width: 25%;
        }
        90% {
          right: 0%;
          left: 75%;
          width: 25%;
        }
        100% {
          left: 100%;
          right: 0%;
          width: 0%;
        }
      }
    </style>
    <div class="loader">
      <div class="loaderBar"></div>
    </div>
  `;var Ha=Object.defineProperty,Ma=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Ha(t,i,r),r};const $r=class extends E{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};$r.styles=A`
    :host {
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;let Er=$r;Ma([h({type:String,reflect:!0})],Er.prototype,"column");const Cr=class extends E{constructor(){super(...arguments),this._groups=[],this.group=this.closest("bim-table-group"),this._data=[],this.table=this.closest("bim-table")}get data(){var t;return((t=this.group)==null?void 0:t.data.children)??this._data}set data(t){this._data=t}render(){return this._groups=[],m`
      <slot></slot>
      ${this.data.map(t=>{const i=document.createElement("bim-table-group");return this._groups.push(i),i.table=this.table,i.data=t,i})}
    `}};Cr.styles=A`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      display: block;
      overflow: hidden;
      grid-area: Children;
    }

    :host([hidden]) {
      height: 0;
      opacity: 0;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let Ba=Cr;var Ia=Object.defineProperty,Fa=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Ia(t,i,r),r};const Ar=class extends E{constructor(){super(...arguments),this.childrenHidden=!0,this.table=this.closest("bim-table"),this.data={data:{}}}get rowElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-row"):null}get childrenElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-children"):null}get _isChildrenEmpty(){return!(this.data.children&&this.data.children.length!==0)}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t){this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,this.animateTableChildren(!0)}animateTableChildren(t=!0){if(!t){requestAnimationFrame(()=>{var s;const a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),c=(s=this.renderRoot.querySelector("bim-table-children"))==null?void 0:s.querySelector(".branch-vertical");a.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),c==null||c.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const i=500,n=0,r=200,o=350;requestAnimationFrame(()=>{var s;const a=this.renderRoot.querySelector("bim-table-children"),l=this.renderRoot.querySelector(".caret"),c=this.renderRoot.querySelector(".branch-vertical"),u=(s=this.renderRoot.querySelector("bim-table-children"))==null?void 0:s.querySelector(".branch-vertical"),d=()=>{const b=a==null?void 0:a.renderRoot.querySelectorAll("bim-table-group");b==null||b.forEach(($,y)=>{$.style.setProperty("opacity","0"),$.style.setProperty("left","-30px");const _=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];$.animate(_,{duration:i/2,delay:50+y*n,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},f=()=>{const b=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];l==null||l.animate(b,{duration:o,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},p=()=>{const b=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];c==null||c.animate(b,{duration:r,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:n,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},g=()=>{var b;const $=(b=this.renderRoot.querySelector("bim-table-row"))==null?void 0:b.querySelector(".branch-horizontal");if($){$.style.setProperty("transform-origin","center right");const y=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];$.animate(y,{duration:r,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},v=()=>{const b=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];u==null||u.animate(b,{duration:r*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(n+r)*.7})};d(),f(),p(),g(),v()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(t=>{var i,n,r;if(!this.childrenHidden){t.style.setProperty("transform","translateY(-50%) rotate(90deg)");const o=(i=t.parentElement)==null?void 0:i.querySelector(".branch-horizontal");o&&o.style.setProperty("transform","scaleX(0)");const s=(r=(n=t.parentElement)==null?void 0:n.parentElement)==null?void 0:r.querySelectorAll(".branch-vertical");s==null||s.forEach(a=>{a.style.setProperty("transform","scaleY(1)")})}})}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const t=this.table.getGroupIndentation(this.data)??0,i=m`
      ${this.table.noIndentation?null:m`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `;let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${t-1+(this.table.selectableRows?2.05:.5625)}rem`);let r=null;if(!this.table.noIndentation){r=document.createElement("div");const a=document.createElementNS("http://www.w3.org/2000/svg","svg");if(a.setAttribute("height","9.9"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.7"),this.table.noCarets){const l=document.createElementNS("http://www.w3.org/2000/svg","circle");l.setAttribute("cx","2.3333336"),l.setAttribute("cy","3.85"),l.setAttribute("r","2.5"),a.append(l)}else{const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(l),r.style.cursor="pointer",r.addEventListener("click",c=>{c.stopPropagation(),this.toggleChildren()})}r.classList.add("caret"),r.style.left=`${(this.table.selectableRows?1.5:.125)+t}rem`,r.append(a)}const o=document.createElement("bim-table-row");if(!this._isChildrenEmpty){const a=document.createDocumentFragment();Tt(i,a),o.append(a)}o.table=this.table,o.group=this,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:o}})),r&&!this._isChildrenEmpty&&o.append(r),t!==0&&n&&o.append(n);let s;if(!this._isChildrenEmpty&&!this.childrenHidden){s=document.createElement("bim-table-children"),s.table=this.table,s.group=this;const a=document.createDocumentFragment();Tt(i,a),s.append(a),this.animateTableChildren()}return m`<div class="parent">${o} ${s}</div>`}};Ar.styles=A`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
      transform-origin: top center;
      transform: scaleY(0);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      transform-origin: center left;
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let kr=Ar;Fa([h({type:Boolean,attribute:"children-hidden",reflect:!0})],kr.prototype,"childrenHidden");var Na=Object.defineProperty,fe=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Na(t,i,r),r};const Sr=class extends E{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.group=this.closest("bim-table-group"),this._data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get groupData(){var t;return(t=this.group)==null?void 0:t.data}get data(){var t;return((t=this.group)==null?void 0:t.data.data)??this._data}set data(t){this._data=t}get _columnNames(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.name)}get _columnWidths(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const i=t.target;this.selected=i.value,i.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const t=this.table.getRowIndentation(this.data)??0,i=this.isHeader?this.data:this.table.applyDataTransform(this.group)??this.data,n=[];for(const r in i){if(this.hiddenColumns.includes(r))continue;const o=i[r];let s;if(typeof o=="string"||typeof o=="boolean"||typeof o=="number"?(s=document.createElement("bim-label"),s.textContent=String(o)):Array.isArray(o)?(s=document.createElement("bim-label"),s.textContent=o.join(", ")):o instanceof HTMLElement?s=o:(s=document.createDocumentFragment(),Tt(o,s)),!s)continue;const a=document.createElement("bim-table-cell");a.append(s),a.column=r,this._columnNames.indexOf(r)===0&&(a.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`);const l=this._columnNames.indexOf(r);a.setAttribute("data-column-index",String(l)),a.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),a.toggleAttribute("data-cell-header",this.isHeader),a.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:a}})),n.push(a)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,m`
      ${!this.isHeader&&this.table.selectableRows?m`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${n}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};Sr.styles=A`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      );
    }
  `;let It=Sr;fe([h({type:Boolean,reflect:!0})],It.prototype,"selected");fe([h({attribute:!1})],It.prototype,"columns");fe([h({attribute:!1})],It.prototype,"hiddenColumns");fe([h({type:Boolean,attribute:"is-header",reflect:!0})],It.prototype,"isHeader");fe([Rt()],It.prototype,"_intersecting");var qa=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,F=(e,t,i,n)=>{for(var r=n>1?void 0:n?Da(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&qa(t,i,r),r};const Or=class extends E{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.noCarets=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(t,i)=>Object.values(i.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,i)=>{let n=!1;const r=si(t)??[];for(const o of r){if("queries"in o){n=!1;break}const{condition:s,value:a}=o;let{key:l}=o;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,n=Object.keys(i.data).filter(u=>u.includes(c)).map(u=>dn(i.data[u],s,a)).some(u=>u)}else n=dn(i.data[l],s,a);if(!n)break}return n}}set columns(t){const i=[];for(const n of t){const r=typeof n=="string"?{name:n,width:`minmax(${this.minColWidth}, 1fr)`}:n;i.push(r)}this._columns=i,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const t={};for(const i of this.columns){const{name:n}=i;t[n]=String(n)}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(si(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let i=!1;for(const n of t){const{children:r,data:o}=n;for(const s in o)this._columns.map(a=>typeof a=="string"?a:a.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),i=!0);if(r){const s=this.computeMissingColumns(r);s&&!i&&(i=s)}}return i}generateText(t="comma",i=this.value,n="",r=!0){const o=this._textDelimiters[t];let s="";const a=this.columns.map(l=>l.name);if(r){this.indentationInText&&(s+=`Indentation${o}`);const l=`${a.join(o)}
`;s+=l}for(const[l,c]of i.entries()){const{data:u,children:d}=c,f=this.indentationInText?`${n}${l+1}${o}`:"",p=a.map(v=>u[v]??""),g=`${f}${p.join(o)}
`;s+=g,d&&(s+=this.generateText(t,c.children,`${n}${l+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const i={};if(!t)return i;const{data:n}=t.data;for(const o of Object.keys(this.dataTransform)){const s=this.columns.find(a=>a.name===o);s&&s.forceDataTransform&&(o in n||(n[o]=""))}const r=n;for(const o in r){const s=this.dataTransform[o];s?i[o]=s(r[o],n,t):i[o]=n[o]}return i}downloadData(t="BIM Table Data",i="json"){let n=null;if(i==="json"&&(n=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),i==="csv"&&(n=new File([this.csv],`${t}.csv`)),i==="tsv"&&(n=new File([this.tsv],`${t}.tsv`)),!n)return;const r=document.createElement("a");r.href=URL.createObjectURL(n),r.download=n.name,r.click(),URL.revokeObjectURL(r.href)}getRowIndentation(t,i=this.value,n=0){for(const r of i){if(r.data===t)return n;if(r.children){const o=this.getRowIndentation(t,r.children,n+1);if(o!==null)return o}}return null}getGroupIndentation(t,i=this.value,n=0){for(const r of i){if(r===t)return n;if(r.children){const o=this.getGroupIndentation(t,r.children,n+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const i=await this.loadFunction();return this.data=i,this.loading=!1,this._errorLoading=!1,!0}catch(i){if(this.loading=!1,this._filteredData.length!==0)return!1;const n=this.querySelector("[slot='error-loading']"),r=n==null?void 0:n.querySelector("[data-table-element='error-message']");return i instanceof Error&&r&&i.message.trim()!==""&&(r.textContent=i.message),this._errorLoading=!0,!1}}filter(t,i=this.filterFunction??this._stringFilterFunction,n=this.data){const r=[];for(const o of n)if(i(t,o)){if(this.preserveStructureOnFilter){const s={data:o.data};if(o.children){const a=this.filter(t,i,o.children);a.length&&(s.children=a)}r.push(s)}else if(r.push({data:o.data}),o.children){const s=this.filter(t,i,o.children);r.push(...s)}}else if(o.children){const s=this.filter(t,i,o.children);this.preserveStructureOnFilter&&s.length?r.push({data:o.data,children:s}):r.push(...s)}return r}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return Ra();if(this._errorLoading)return m`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return m`<slot name="missing-data"></slot>`;const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const i=document.createElement("bim-table-children");return i.table=this,i.data=this.value,i.style.gridArea="Body",i.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:t} ${ja()}
        <div style="overflow-x: hidden; grid-area: Body">${i}</div>
      </div>
    `}};Or.styles=[ut.scrollbar,A`
      :host {
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      :host(:not([data-processing])) .loader {
        display: none;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Processing" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `];let H=Or;F([Rt()],H.prototype,"_filteredData",2);F([h({type:Boolean,attribute:"headers-hidden",reflect:!0})],H.prototype,"headersHidden",2);F([h({type:String,attribute:"min-col-width",reflect:!0})],H.prototype,"minColWidth",2);F([h({type:Array,attribute:!1})],H.prototype,"columns",1);F([h({type:Array,attribute:!1})],H.prototype,"data",1);F([h({type:Boolean,reflect:!0})],H.prototype,"expanded",2);F([h({type:Boolean,reflect:!0,attribute:"selectable-rows"})],H.prototype,"selectableRows",2);F([h({attribute:!1})],H.prototype,"selection",2);F([h({type:Boolean,attribute:"no-indentation",reflect:!0})],H.prototype,"noIndentation",2);F([h({type:Boolean,attribute:"no-carets",reflect:!0})],H.prototype,"noCarets",2);F([h({type:Boolean,reflect:!0})],H.prototype,"loading",2);F([Rt()],H.prototype,"_errorLoading",2);var Ua=Object.defineProperty,Va=Object.getOwnPropertyDescriptor,Ft=(e,t,i,n)=>{for(var r=n>1?void 0:n?Va(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Ua(t,i,r),r};const Pr=class extends E{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const i=t.target;i instanceof L&&!i.hidden&&(i.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=i.name,i.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const i=[...this.children],n=i.find(r=>r instanceof L&&r.name===t);for(const r of i){if(!(r instanceof L))continue;r.hidden=n!==r;const o=this.getTabSwitcher(r.name);o&&o.toggleAttribute("data-active",!r.hidden)}n||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(i=>i.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof L))continue;const i=document.createElement("div");i.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name,this.setAnimatedBackgound()}),i.setAttribute("data-name",t.name),i.className="switcher";const n=document.createElement("bim-label");n.textContent=t.label??null,n.icon=t.icon,i.append(n),this._switchers.push(i)}}updateSwitchers(){for(const t of this.children){if(!(t instanceof L))continue;const i=this._switchers.find(r=>r.getAttribute("data-name")===t.name);if(!i)continue;const n=i.querySelector("bim-label");n&&(n.textContent=t.label??null,n.icon=t.icon)}}onSlotChange(t){this.createSwitchers();const i=t.target.assignedElements(),n=i.find(r=>r instanceof L?this.tab?r.name===this.tab:!r.hidden:!1);n&&n instanceof L&&(this.tab=n.name);for(const r of i){if(!(r instanceof L)){r.remove();continue}r.removeEventListener("hiddenchange",this.onTabHiddenChange),n!==r&&(r.hidden=!0),r.addEventListener("hiddenchange",this.onTabHiddenChange)}}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){var i;const n=this.renderRoot.querySelector(".animated-background"),r=[...((i=this.renderRoot.querySelector(".switchers"))==null?void 0:i.querySelectorAll(".switcher"))||[]].filter(o=>o.hasAttribute("data-active"))[0];requestAnimationFrame(()=>{var o,s,a,l;const c=(l=(a=(s=(o=r==null?void 0:r.parentElement)==null?void 0:o.shadowRoot)==null?void 0:s.querySelector("bim-input"))==null?void 0:a.shadowRoot)==null?void 0:l.querySelector(".input"),u={width:r==null?void 0:r.clientWidth,height:r==null?void 0:r.clientHeight,top:((r==null?void 0:r.offsetTop)??0)-((c==null?void 0:c.offsetTop)??0),left:((r==null?void 0:r.offsetLeft)??0)-((c==null?void 0:c.offsetLeft)??0)};r?(n==null||n.style.setProperty("width",`${u.width}px`),n==null||n.style.setProperty("height",`${u.height}px`),n==null||n.style.setProperty("left",`${u.left}px`)):n==null||n.style.setProperty("width","0"),this.bottom?(n==null||n.style.setProperty("top","100%"),n==null||n.style.setProperty("transform","translateY(-100%)")):n==null||n.style.setProperty("top",`${u.top}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const o="ease";n==null||n.style.setProperty("transition",`width ${.3}s ${o}, height ${.3}s ${o}, top ${.3}s ${o}, left ${.3}s ${o}`)})}firstUpdated(){requestAnimationFrame(()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return m`
      <div class="parent">
        <div class="switchers">
          <div class="animated-background"></div>
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Pr.styles=[ut.scrollbar,A`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        overflow: hidden;
        position: relative;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        position: relative;
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: transparent;
        position: relative;
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        z-index: 2;
        transition: all 0.15s;
      }

      .switcher:not([data-active]):hover {
        filter: brightness(150%);
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-area: content;
        max-height: 100vh;
        overflow: auto;
        transition: max-height 0.2s;
      }

      :host([tab="hidden"]) .content {
        max-height: 0;
      }

      .animated-background {
        position: absolute;
        background: var(--bim-ui_main-base);
        width: 0;
        height: 0;
        top: 0;
        left: 0;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: hidden;
        background-color: var(--bim-ui_bg-base);
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][tab="hidden"]) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom][tab="hidden"]) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let et=Pr;Ft([Rt()],et.prototype,"_switchers",2);Ft([h({type:Boolean,reflect:!0})],et.prototype,"bottom",2);Ft([h({type:Boolean,attribute:"switchers-hidden",reflect:!0})],et.prototype,"switchersHidden",2);Ft([h({type:Boolean,reflect:!0})],et.prototype,"floating",2);Ft([h({type:String,reflect:!0})],et.prototype,"tab",1);Ft([h({type:Boolean,attribute:"switchers-full",reflect:!0})],et.prototype,"switchersFull",2);var Wa=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,Ie=(e,t,i,n)=>{for(var r=n>1?void 0:n?Ya(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Wa(t,i,r),r};const Tr=class extends E{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(t){this._label=t;const i=this.parentElement;i instanceof et&&i.updateSwitchers()}get label(){return this._label}set icon(t){this._icon=t;const i=this.parentElement;i instanceof et&&i.updateSwitchers()}get icon(){return this._icon}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const i=[...t.children].indexOf(this);this.name=`${this._defaultName}${i}`}}render(){return m` <slot></slot> `}};Tr.styles=A`
    :host {
      display: block;
      height: 100%;
      grid-row-start: 1;
      grid-column-start: 1;
      animation: openAnim 3s forwards;
      transform: translateY(0);
      max-height: 100vh;
      transition:
        opacity 0.3s ease,
        max-height 0.6s ease,
        transform 0.3s ease;
    }

    :host([hidden]) {
      transform: translateY(-20px);
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      visibility: hidden;
    }
  `;let L=Tr;Ie([h({type:String,reflect:!0})],L.prototype,"name",2);Ie([h({type:String,reflect:!0})],L.prototype,"label",1);Ie([h({type:String,reflect:!0})],L.prototype,"icon",1);Ie([h({type:Boolean,reflect:!0})],L.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn=e=>e??S;var Ga=Object.defineProperty,Qa=Object.getOwnPropertyDescriptor,W=(e,t,i,n)=>{for(var r=n>1?void 0:n?Qa(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Ga(t,i,r),r};const zr=class extends E{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this.disabled=!1,this.resize="vertical",this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return si(this.value)}onInputChange(t){t.stopPropagation();const i=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=i.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("input");i==null||i.focus()})}render(){return m`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?m` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              ?disabled=${this.disabled}
              placeholder=${pn(this.placeholder)}
              @input=${this.onInputChange}
              style="resize: ${this.resize};"
            ></textarea>`:m` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              ?disabled=${this.disabled}
              placeholder=${pn(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};zr.styles=[ut.scrollbar,A`
      :host {
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        flex: 1;
        display: block;
      }

      input,
      textarea {
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: var(--bim-ui_size-3xs);
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        height: 100%;
        padding: 0 var(--bim-ui_size-3xs); /* Override padding */
        border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      }

      :host([disabled]) input,
      :host([disabled]) textarea {
        color: var(--bim-ui_bg-contrast-60);
      }

      textarea {
        line-height: 1.1rem;
        outline: none;
      }

      :host(:focus) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
    `];let N=zr;W([h({type:String,reflect:!0})],N.prototype,"icon",2);W([h({type:String,reflect:!0})],N.prototype,"label",2);W([h({type:String,reflect:!0})],N.prototype,"name",2);W([h({type:String,reflect:!0})],N.prototype,"placeholder",2);W([h({type:String,reflect:!0})],N.prototype,"value",2);W([h({type:Boolean,reflect:!0})],N.prototype,"vertical",2);W([h({type:Number,reflect:!0})],N.prototype,"debounce",2);W([h({type:Number,reflect:!0})],N.prototype,"rows",2);W([h({type:Boolean,reflect:!0})],N.prototype,"disabled",2);W([h({type:String,reflect:!0})],N.prototype,"resize",2);W([h({type:String,reflect:!0})],N.prototype,"type",1);var Ja=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,Lr=(e,t,i,n)=>{for(var r=n>1?void 0:n?Xa(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Ja(t,i,r),r};const Rr=class extends E{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const i of t)this.vertical?i.setAttribute("label-hidden",""):i.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Rr.styles=A`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }
  `;let Fe=Rr;Lr([h({type:Number,reflect:!0})],Fe.prototype,"rows",2);Lr([h({type:Boolean,reflect:!0})],Fe.prototype,"vertical",1);var Za=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,Ne=(e,t,i,n)=>{for(var r=n>1?void 0:n?Ka(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Za(t,i,r),r};const jr=class extends E{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const i of t)i instanceof Fe&&(i.vertical=this.vertical),i.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};jr.styles=A`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let Nt=jr;Ne([h({type:String,reflect:!0})],Nt.prototype,"label",2);Ne([h({type:String,reflect:!0})],Nt.prototype,"icon",2);Ne([h({type:Boolean,reflect:!0})],Nt.prototype,"vertical",1);Ne([h({type:Boolean,attribute:"label-hidden",reflect:!0})],Nt.prototype,"labelHidden",1);var tl=Object.defineProperty,el=Object.getOwnPropertyDescriptor,Ei=(e,t,i,n)=>{for(var r=n>1?void 0:n?el(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&tl(t,i,r),r};const Hr=class extends E{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const i of t)i instanceof Nt&&(i.labelHidden=this.vertical&&!xi.config.sectionLabelOnVerticalToolbar,i.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Hr.styles=A`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: max-content;
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;let qe=Hr;Ei([h({type:String,reflect:!0})],qe.prototype,"icon",2);Ei([h({type:Boolean,attribute:"labels-hidden",reflect:!0})],qe.prototype,"labelsHidden",2);Ei([h({type:Boolean,reflect:!0})],qe.prototype,"vertical",1);var il=Object.defineProperty,nl=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&il(t,i,r),r};const Mr=class extends E{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Mr.styles=A`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let Br=Mr;nl([h({type:String,reflect:!0})],Br.prototype,"name");export{Se as L,Lt as N,xi as l,m};
