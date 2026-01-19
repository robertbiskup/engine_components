var vg=Object.defineProperty;var bg=(s,e,t)=>e in s?vg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var de=(s,e,t)=>(bg(s,typeof e!="symbol"?e+"":e,t),t);import{d as at,e as Xt,p as At,V as L,C as me,G as Gi,ag as Mc,x as Ee,r as xa,g as Me,P as Dt,L as Bt,j as Ve,ah as Oc,O as Ca,ai as Ro,u as zt,aj as Uo,af as ks,S as Xi,M as hn,ak as yg,al as Ch,am as _g,W as tt,Y as Ue,an as ar,w as ju,b as oe,m as Ds,D as Si,ao as wg,ap as xg,F as Zi,z as Hu,n as Cg,o as Sg,l as kc,k as Qo,aq as Eg,v as Kt,a0 as As,a1 as Dc,ar as zc,t as Ye,as as Tg,at as Vu,au as ft,av as mn,aw as Ag,ax as Sh,q as Pg,ae as Ic,ay as Mg,az as Ll,aA as an,aB as Og,i as kg,c as Dg,B as dt,aC as Wu,aD as zg,aE as Zt,aF as Ig,aG as Eh,aH as Lg,aI as Kr,aJ as jn,aK as $g,aL as Ng,aM as Th,H as gn,N as gi,A as Bg,E as Jr,Z as eo,I as Ah,K as Ph,Q as Rg,T as Ug,X as Fg,_ as jg,$ as vn,y as qu,R as Ko,ac as Mh,ad as bi,a2 as Hg,a3 as Vg,a4 as Wg,a5 as qg,a6 as Yg,a7 as Gg,a8 as Xg,a9 as Zg,aa as Qg,ab as Kg,aN as Jg,h as ev,a as tv,U as Yu,f as $l}from"./index-NQd5NlAY.js";import{R as Lc,E as Jo,j as iv,c as Gu,h as sv,F as Ft,W as Sa,S as $c,O as Xu,k as nv,d as Zu,l as Ea,m as Ta,n as rv,T as Ii,C as ov,i as av,o as lv}from"./graphic-vertex-picker-EcW201oD.js";import{b as Qu,a as cv,L as hv}from"./LineSegments2-DzMmV1eI.js";class dv{constructor(e){de(this,"alignments",[]);de(this,"enabled",!0);de(this,"world",null);de(this,"_raycastable",[]);de(this,"_components");this._components=e}update(){this.dispose();for(const e of this.alignments)for(const t of e.children){const i=t;i.updateWorldMatrix(!0,!0);for(const n of i.children){const r=n;if(r.isLine2&&r.userData.points){const o=new at,a=new Xt;a.geometry.setIndex(r.geometry.index);const l=new Float32Array(r.userData.points),c=new At(l,3);o.setAttribute("position",c),a.geometry=o,a.userData.curve=r,a.applyMatrix4(r.matrixWorld),a.updateMatrixWorld(),this._raycastable.push(a)}}}}dispose(){for(const e of this._raycastable)e.geometry.dispose(),e.geometry=void 0;this._raycastable=[]}castRay(){if(!this.enabled||!this.world)return null;const i=this._components.get(Lc).get(this.world).castRayToObjects(this._raycastable);if(!i)return null;const n=i.object,r=n.geometry,o=i.index,a=r.attributes.position.array[o*3],l=r.attributes.position.array[o*3+1],c=r.attributes.position.array[o*3+2],h=r.attributes.position.array[o*3+3],d=r.attributes.position.array[o*3+4],u=r.attributes.position.array[o*3+5],p=new L(h-a,d-l,u-c).normalize();return{point:i.point,normal:p,curve:n.userData.curve,alignment:n.userData.curve.parent}}}class qi{static alignmentPercentageToPoint(e,t){const i=new L,n=new L,r=this.alignmentLength(e),o=t*r;let a=0;if(e.updateWorldMatrix(!0,!0),t===1)for(let l=e.children.length-1;l>=0;l--){const c=e.children[l],h=c.userData.points;if(!h)continue;const d=new L(h[h.length-3],h[h.length-2],h[h.length-1]);return d.applyMatrix4(c.matrixWorld),{normal:new L,point:d,curve:c,alignment:e}}for(const l of e.children){const c=l.userData.points;if(c)for(let h=0;h<c.length-3;h+=3){const d=i.set(c[h],c[h+1],c[h+2]),u=n.set(c[h+3],c[h+4],c[h+5]),p=d.distanceTo(u);if(a+p>=o){const g=o-a,m=u.clone().sub(d).normalize(),v=m.clone().multiplyScalar(g);return d.add(v),d.applyMatrix4(l.matrixWorld),{normal:m,point:d,curve:l,alignment:e}}a+=p}}return null}static curvePercentageToPoint(e,t,i){const n=new L,r=new L,o=this.curveLength(t),a=i*o;let l=0;const c=t.userData.points;if(!c)throw new Error("No points found in curve");for(let h=0;h<c.length-3;h+=3){const d=n.set(c[h],c[h+1],c[h+2]),u=r.set(c[h+3],c[h+4],c[h+5]),p=d.distanceTo(u);if(l+p>=a){const g=a-l,m=u.clone().sub(d).normalize(),v=m.clone().multiplyScalar(g);return d.add(v),{normal:m,point:d,curve:t,alignment:e}}l+=p}return null}static alignmentLength(e){let t=0;if(e.userData.length!==void 0)return e.userData.length;for(const i of e.children)"isLine2"in i&&(t+=this.curveLength(i));return e.userData.length=t,t}static curveLength(e){let t=0;if(e.userData.length!==void 0)return e.userData.length;const i=new L,n=new L,r=e.userData.points;if(!r)throw new Error("No points found in curve");for(let o=0;o<r.length-2-3;o+=3){const a=i.set(r[o],r[o+1],r[o+2]),l=n.set(r[o+3],r[o+4],r[o+5]);t+=a.distanceTo(l)}return e.userData.length=t,t}static curvePointToAlignmentPercentage(e,t,i){const n=new L,r=new L,o=this.alignmentLength(e);let a=0;e.updateWorldMatrix(!0,!0);for(const l of e.children){const c=l.userData.points;if(c)for(let h=0;h<c.length-3;h+=3){const d=n.set(c[h],c[h+1],c[h+2]),u=r.set(c[h+3],c[h+4],c[h+5]);d.applyMatrix4(l.matrixWorld),u.applyMatrix4(l.matrixWorld);const p=d.distanceTo(u),g=d.distanceTo(t)<.001,m=u.distanceTo(t)<.001,v=this.isPointbetweenTwoOthers(d,u,t);if(l===i&&(g||m||v)){const f=d.distanceTo(t);return(a+f)/o}a+=p}}return null}static isPointbetweenTwoOthers(e,t,i){const n=new L;n.subVectors(t,e).normalize();const r=new L;r.subVectors(i,e).normalize();const o=new L;o.subVectors(i,t).normalize();const l=1-.0016;return n.dot(r)>l&&n.dot(o)<-l}}class uv{constructor(e,t){de(this,"onDisposed",new Jo);de(this,"alignments",[]);de(this,"components");de(this,"onMarkerChange",new Jo);de(this,"enabled",!0);de(this,"highlightMaterial");de(this,"increments",20);de(this,"screenDistanceLimit",.1);de(this,"fadeInTime",500);de(this,"_mouseMarkers");de(this,"_highlighted",new Set);de(this,"_stationPoints",new Map);de(this,"_originalHighlightMaterialId","originalHighlightMaterial");de(this,"_world",null);de(this,"_raycaster");de(this,"_stationLabelColor",new me(16777215));de(this,"_stationLabelBackgroundColor",new me(8014801));de(this,"_stationPointerColor",new me(16777215));de(this,"_stationPointerBackgroundColor",new me(4803766));de(this,"_pointerDown",performance.now());de(this,"_pointerDownTime",150);de(this,"onPointerDown",()=>{this._pointerDown=performance.now()});de(this,"onPointerUp",()=>{if(performance.now()-this._pointerDown>this._pointerDownTime)return;const e=this.setMarkerToMouse("select");e&&this.onMarkerChange.trigger(e)});de(this,"onMouseMove",()=>{this.setMarkerToMouse("hover")});this.components=e,this.highlightMaterial=t,this._raycaster=new dv(e),this._raycaster.alignments=this.alignments}get world(){return this._world}set world(e){var n,r,o,a;if(e===this._world||(this._world&&this.setupEvents(!1),this._world=e,(n=this._mouseMarkers)==null||n.hover.removeFromParent(),(r=this._mouseMarkers)==null||r.select.removeFromParent(),(o=this._mouseMarkers)==null||o.hover.element.remove(),(a=this._mouseMarkers)==null||a.select.element.remove(),!e))return;this._raycaster.world=e;const t=this.newCivilLabel(0,"stationPointer");e.scene.three.add(t),t.visible=!1,t.element.style.transition="";const i=this.newCivilLabel(0,"stationPointer");i.element.style.transition="",i.element.style.opacity="0.5",e.scene.three.add(i),i.visible=!1,this._mouseMarkers={select:t,hover:i},this.setupEvents(!0)}get stationLabelColor(){return this._stationLabelColor}set stationLabelColor(e){this._stationLabelColor=e;const t=`#${e.getHexString()}`;for(const[,{labels:i}]of this._stationPoints){const n=[...i.children];for(const r of n){const o=this.getLabel(r);o.style.color=t;const a=this.getPoint(r);a.style.backgroundColor=t}}}get stationLabelBackgroundColor(){return this._stationLabelBackgroundColor}set stationLabelBackgroundColor(e){this._stationLabelBackgroundColor=e;const t=`#${e.getHexString()}`;for(const[,{labels:i}]of this._stationPoints){const n=[...i.children];for(const r of n){const o=this.getLabel(r);o.style.backgroundColor=t;const a=this.getPoint(r);a.style.border=`2px solid ${t}`}}}get stationPointerColor(){return this._stationPointerColor}set stationPointerColor(e){this._stationPointerColor=e;const t=`#${e.getHexString()}`;if(this._mouseMarkers){const i=this._mouseMarkers.select,n=this.getLabel(i);n.style.color=t;const r=this.getPoint(i);r.style.backgroundColor=t}}get stationPointerBackgroundColor(){return this._stationPointerBackgroundColor}set stationPointerBackgroundColor(e){this._stationPointerBackgroundColor=e;const t=`#${e.getHexString()}`;if(this._mouseMarkers){const i=this._mouseMarkers.select,n=this.getLabel(i);n.style.backgroundColor=t;const r=this.getPoint(i);r.style.border=`2px solid ${t}`}}dispose(){var e,t,i,n;this.clearHighlight(),this.clearStations(),this.alignments=[],(e=this._mouseMarkers)==null||e.hover.removeFromParent(),(t=this._mouseMarkers)==null||t.select.removeFromParent(),(i=this._mouseMarkers)==null||i.hover.element.remove(),(n=this._mouseMarkers)==null||n.select.element.remove(),this._raycaster.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}updateAlignments(){this._raycaster.update()}setMarkerAtPoint(e,t){if(!this._mouseMarkers)throw new Error("No mouse markers found! Initialize the world before using this.");this.updateMarkerValue(e,t),this._mouseMarkers[t].visible=!0,this._mouseMarkers[t].position.copy(e.point)}highlight(e,t=!0){t&&this.clearHighlight(this._highlighted);for(const i of e.children)"isLineSegments2"in i&&"material"in i&&(i.userData[this._originalHighlightMaterialId]=i.material,i.material=this.highlightMaterial);this._highlighted.add(e)}clearHighlight(e=this._highlighted){for(const t of e)for(const i of t.children)"isLineSegments2"in i&&"material"in i&&(i.material=i.userData[this._originalHighlightMaterialId],delete i.userData[this._originalHighlightMaterialId]);this._highlighted.clear()}createStations(e){if(!this.world||this._stationPoints.has(e.uuid))return;const t=new Gi;this.world.scene.three.add(t),this._stationPoints.set(e.uuid,{alignment:e,labels:t})}clearStations(e=this._stationPoints.keys()){for(const t of e){const i=this._stationPoints.get(t);i&&(this.clearLabels(i.labels),this._stationPoints.delete(t))}}updateStations(){if(!this.world)throw new Error("No world found!");if(!this.world.renderer)throw new Error("No renderer found!");const e=this.world.camera.three,t=this.world.renderer.three,i=new Mc,n=t.clippingPlanes,r=new L,o=new L;let a=!0;const l=new L;for(const[,{alignment:c,labels:h}]of this._stationPoints){this.clearLabels(h),c.updateWorldMatrix(!0,!0);const d=c.userData.initialStation;let u=d||0;const p=u%this.increments;let g=d+this.increments-p;for(const m of c.children){if(!("isLine2"in m))continue;const v=m;if(v.geometry.boundingBox||v.geometry.computeBoundingBox(),i.setFromProjectionMatrix(new Ee().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),!i.intersectsBox(v.geometry.boundingBox)){const O=qi.curveLength(m);u+=O;const _=u%this.increments;g=u+this.increments-_;continue}const f=m.userData.points,b=f[0],y=f[1],w=f[2];if(l.set(b,y,w),l.applyMatrix4(m.matrixWorld),!this.isLabelClipped(n,l)){if(a){a=!1,r.set(l.x,l.y,l.z),r.project(e),r.z=0;const O=this.newCivilLabel(u,"stationLabel");O.position.set(l.x,l.y,l.z),h.children.push(O)}else if(o.set(l.x,l.y,l.z),o.project(e),o.z=0,r.distanceTo(o)>this.screenDistanceLimit){const _=this.newCivilLabel(u,"stationLabel");_.position.set(l.x,l.y,l.z),h.children.push(_),r.copy(o)}}const T=new L,P=new L;for(let O=0;O<f.length-3;O+=3){T.set(f[O],f[O+1],f[O+2]),P.set(f[O+3],f[O+4],f[O+5]);const _=T.distanceTo(P),$=u+_,X=P.clone().sub(T).normalize();for(;$>g;){const V=g-u,J=X.clone();J.multiplyScalar(V);const{x:W,y:ne,z:U}=T.clone().add(J);if(l.set(W,ne,U),l.applyMatrix4(m.matrixWorld),!this.isLabelClipped(n,l)&&i.containsPoint(l)&&(o.set(l.x,l.y,l.z),o.project(e),o.z=0,r.distanceTo(o)>this.screenDistanceLimit)){const ie=this.newCivilLabel(g,"stationLabel");ie.position.set(l.x,l.y,l.z),h.children.push(ie),r.copy(o)}g+=this.increments}u+=_}const D=f[f.length-3],M=f[f.length-2],I=f[f.length-1];if(l.set(D,M,I),l.applyMatrix4(m.matrixWorld),this.isLabelClipped(n,l)||!i.containsPoint(l))continue;if(o.set(l.x,l.y,l.z),o.project(e),o.z=0,r.distanceTo(o)>this.screenDistanceLimit){const O=this.newCivilLabel(u,"stationLabel");O.position.set(l.x,l.y,l.z),h.children.push(O),r.copy(o)}}}}getCursorValue(){if(!this._mouseMarkers)throw new Error("No mouse markers found! Initialize the world before using this.");return this._mouseMarkers.select.element.children[0].children[0].innerText}setCursorValue(e,t){if(!this._mouseMarkers)throw new Error("No mouse markers found! Initialize the world before using this.");const n=this._mouseMarkers[t].element.children[0].children[0];n.innerText=e}isLabelClipped(e,t){for(const i of e)if(!(i.distanceToPoint(t)>0))return!0;return!1}clearLabels(e){const t=[...e.children];for(const i of t)i.element.style.opacity="0";setTimeout(()=>{for(const i of t)i.removeFromParent(),i.element.remove(),i.visible=!1},this.fadeInTime)}newCivilLabel(e,t){const i=document.createElement("div"),n=t==="stationLabel"?this.stationLabelColor:this.stationPointerColor,r=t==="stationLabel"?this.stationLabelBackgroundColor:this.stationPointerBackgroundColor,o=document.createElement("div");o.style.width="4px",o.style.height="4px",o.style.borderRadius="50%",o.style.backgroundColor=`#${n.getHexString()}`,o.style.border=`2px solid #${r.getHexString()}`,o.style.display="flex",o.style.justifyContent="center";const a=this.getFormattedStation(e),l=document.createElement("div");l.innerText=a,l.style.backgroundColor=`#${r.getHexString()}`,l.style.color=`#${n.getHexString()}`,l.style.padding="0.3rem",l.style.position="absolute",l.style.bottom="1rem",l.style.borderRadius="6px",l.style.boxShadow="rgba(0, 0, 0, 0.6) 0px 4px 6px",o.appendChild(l);const c=new iv(i);return i.appendChild(o),t==="stationLabel"&&(i.style.transition=`opacity ${this.fadeInTime}ms ease-in-out`,i.style.opacity="0",setTimeout(()=>{i.style.opacity="1"})),c}setupEvents(e){if(!this.world)throw new Error("No world found!");if(this.world.isDisposing||!this.world.renderer)return;const t=this.world.renderer.three.domElement,n=this.components.get(Lc).get(this.world);n.three.params.Line||(n.three.params.Line={threshold:10}),t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointermove",this.onMouseMove),e&&(t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointermove",this.onMouseMove))}setMarkerToMouse(e){if(!this.enabled||!this._mouseMarkers)return null;if(!this.world)throw new Error("No world found!");const t=this._raycaster.castRay();if(!t)return this._mouseMarkers[e].visible=!1,null;this._mouseMarkers[e].visible=!0;const i=t.point;return this._mouseMarkers[e].position.copy(i),this.updateMarkerValue(t,e),t}updateMarkerValue(e,t){if(!this._mouseMarkers)return;const{alignment:i,curve:n,point:r}=e,o=qi.curvePointToAlignmentPercentage(i,r,n);if(o===null)throw new Error("Point is not on the curve");const l=o*qi.alignmentLength(i)+i.userData.initialStation,c=this.getFormattedStation(l);this.setCursorValue(c,t)}getFormattedStation(e){const t=Math.floor(e/1e3),i=Math.round(e-t*1e3);return`${t}+${i}`}getLabel(e){return e.element.children[0].children[0]}getPoint(e){return e.element.children[0]}}const _a=class _a extends Gu{constructor(t){super(t);de(this,"onDisposed",new Jo);de(this,"list",new Map);de(this,"enabled",!0);de(this,"highlightMaterial",new Qu({color:8014801,linewidth:5,depthTest:!1}));de(this,"_increments",20);de(this,"_screenDistanceLimit",.1);de(this,"_fadeInTime",500);de(this,"_stationLabelColor",new me(16777215));de(this,"_stationLabelBackgroundColor",new me(8014801));de(this,"_stationPointerColor",new me(16777215));de(this,"_stationPointerBackgroundColor",new me(4803766));this.components.add(_a.uuid,this)}get increments(){return this._increments}set increments(t){this._increments=t;for(const[,i]of this.list)i.increments=t}get screenDistanceLimit(){return this._screenDistanceLimit}set screenDistanceLimit(t){this._screenDistanceLimit=t;for(const[,i]of this.list)i.screenDistanceLimit=t}get fadeInTime(){return this._fadeInTime}set fadeInTime(t){this._fadeInTime=t;for(const[,i]of this.list)i.fadeInTime=t}get stationLabelColor(){return this._stationLabelColor}set stationLabelColor(t){this._stationLabelColor=t;for(const[,i]of this.list)i.stationLabelColor=t}get stationLabelBackgroundColor(){return this._stationLabelBackgroundColor}set stationLabelBackgroundColor(t){this._stationLabelBackgroundColor=t;for(const[,i]of this.list)i.stationLabelBackgroundColor=t}get stationPointerColor(){return this._stationPointerColor}set stationPointerColor(t){this._stationPointerColor=t;for(const[,i]of this.list)i.stationPointerColor=t}get stationPointerBackgroundColor(){return this._stationPointerBackgroundColor}set stationPointerBackgroundColor(t){this._stationPointerBackgroundColor=t;for(const[,i]of this.list)i.stationPointerBackgroundColor=t}create(t){const i=new uv(this.components,this.highlightMaterial);return this.list.set(t,i),i}delete(t){const i=this.list.get(t);i&&(i.dispose(),this.list.delete(t))}dispose(){for(const[,t]of this.list)t.dispose();this.onDisposed.trigger(),this.onDisposed.reset()}updateAlignments(){for(const[,t]of this.list)t.updateAlignments()}};de(_a,"uuid","0a59c09e-2b49-474a-9320-99f51f40f182");let Nl=_a;const wa=class wa extends Gu{constructor(t){super(t);de(this,"enabled",!0);de(this,"onDisposed",new Jo);de(this,"_world",null);de(this,"_flip",!1);de(this,"_plane");de(this,"_point",new L);de(this,"_edgeMeshes",[]);de(this,"_sectionVisible",!1);de(this,"_sectionOffset",.1);de(this,"edgeMaterial",new Qu({color:0,linewidth:5,depthTest:!1}));this.components.add(wa.uuid,this)}get plane(){if(!this._plane)throw new Error("Plane is not set. You must give a world.");return this._plane}set plane(t){this._plane=t}get sectionVisible(){return this._sectionVisible}set sectionVisible(t){this._sectionVisible=t;for(const i of this._edgeMeshes)i.visible=t}get world(){return this._world}set world(t){var r;if(this._world=t,(r=this._plane)==null||r.dispose(),!t)return;const i=this.components.get(sv),n=i.createFromNormalAndCoplanarPoint(t,new L(1,0,0),new L);this.plane=i.list.get(n),this.plane.visible=!1,this.plane.enabled=!1}get flip(){return this._flip}set flip(t){var n;if(t===this._flip)return;this._flip=t;const i=(n=this.plane)==null?void 0:n.normal.clone().multiplyScalar(-1);for(const r of this._edgeMeshes)r.position.add(i.clone().multiplyScalar(this._sectionOffset));this.plane.setFromNormalAndCoplanarPoint(i,this._point),this.plane.update()}dispose(){var t;this.clearMeshes(),(t=this.plane)==null||t.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}async set(t,i){this.flip&&i.multiplyScalar(-1),this.plane.setFromNormalAndCoplanarPoint(i,t),this._point.copy(t)}async update(){this.clearMeshes();const t=this.components.get(Ft);this.plane.update();const i=[];for(const[,n]of t.list)i.push(this.generateModelSection(n));await Promise.all(i)}async generateModelSection(t){if(!this.world)return;const i=this.plane.three.clone();i.constant-=.01;const{buffer:n}=await t.getSection(i),r=new at,o=new At(n,3,!1);r.setAttribute("position",o);const a=new xa(r),l=new cv;l.fromLineSegments(a);const c=new hv(l,this.edgeMaterial);c.frustumCulled=!1,this.world.scene.three.add(c),this._edgeMeshes.push(c),c.renderOrder=3,a.geometry.dispose()}clearMeshes(){for(const t of this._edgeMeshes)t.removeFromParent(),t.geometry.dispose(),t.material=void 0;this._edgeMeshes=[]}};de(wa,"uuid","96b2c87e-d90b-4639-8257-8f01136fe324");let Bl=wa;var pv=Object.defineProperty,fv=(s,e,t)=>e in s?pv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,E=(s,e,t)=>(fv(s,typeof e!="symbol"?e+"":e,t),t),mv=Object.defineProperty,gv=(s,e,t)=>e in s?mv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,C=(s,e,t)=>(gv(s,typeof e!="symbol"?e+"":e,t),t);let K=class{constructor(){C(this,"enabled",!0),C(this,"trigger",e=>{if(!this.enabled)return;const t=this.handlers.slice(0);for(const i of t)i(e)}),C(this,"handlers",[])}add(e){this.handlers.push(e)}remove(e){this.handlers=this.handlers.filter(t=>t!==e)}reset(){this.handlers.length=0}},Nc=class{constructor(e){C(this,"isDisposeable",()=>"dispose"in this&&"onDisposed"in this),C(this,"isResizeable",()=>"resize"in this&&"getSize"in this),C(this,"isUpdateable",()=>"onAfterUpdate"in this&&"onBeforeUpdate"in this&&"update"in this),C(this,"isHideable",()=>"visible"in this),C(this,"isConfigurable",()=>"setup"in this&&"config"in this&&"onSetup"in this),C(this,"isSerializable",()=>"import"in this&&"export"in this),this.components=e}},Oe=class extends Nc{},Ku=class extends Nc{constructor(e){super(e),C(this,"worlds",new Ue),C(this,"onWorldChanged",new K),C(this,"_currentWorld",null),this.onWorldChanged.add(({world:t,action:i})=>{i==="removed"&&this.worlds.delete(t.uuid)})}set currentWorld(e){this._currentWorld=e}get currentWorld(){return this._currentWorld}},vv=class extends Ku{constructor(){super(...arguments),C(this,"hasCameraControls",()=>"controls"in this)}},bv=class extends Ku{constructor(){super(...arguments),C(this,"onAfterUpdate",new K),C(this,"onBeforeUpdate",new K),C(this,"onDisposed",new K),C(this,"onResize",new K),C(this,"onClippingPlanesUpdated",new K),C(this,"clippingPlanes",[])}updateClippingPlanes(){this.onClippingPlanesUpdated.trigger()}setPlane(e,t,i){t.isLocal=i;const n=this.clippingPlanes.indexOf(t);e&&n===-1?this.clippingPlanes.push(t):!e&&n>-1&&this.clippingPlanes.splice(n,1),this.three.clippingPlanes=this.clippingPlanes.filter(r=>!r.isLocal)}};const Ju=class Rl extends Oe{constructor(e){super(e),C(this,"_disposedComponents",new Set),C(this,"enabled",!0),e.add(Rl.uuid,this)}get(){return this._disposedComponents}destroy(e,t=!0,i=!0){e.removeFromParent();const n=e;n.dispose&&n.dispose(),this.disposeGeometryAndMaterials(e,t),i&&n.children&&n.children.length&&this.disposeChildren(n),e.children.length=0}disposeGeometry(e){e.boundsTree&&e.disposeBoundsTree&&e.disposeBoundsTree(),e.dispose()}disposeGeometryAndMaterials(e,t){const i=e;i.geometry&&this.disposeGeometry(i.geometry),t&&i.material&&Rl.disposeMaterial(i),i.material=[],i.geometry=null}disposeChildren(e){for(const t of e.children)this.destroy(t)}static disposeMaterial(e){if(e.material)if(Array.isArray(e.material))for(const t of e.material)t.dispose();else e.material.dispose()}};C(Ju,"uuid","76e9cd8e-ad8f-4753-9ef6-cbc60f7247fe");let ui=Ju,Qa=class extends Set{constructor(e){super(e),C(this,"onItemAdded",new K),C(this,"onItemDeleted",new K),C(this,"onCleared",new K),C(this,"guard",()=>!0)}clear(){super.clear(),this.onCleared.trigger()}add(...e){for(const t of e)this.has(t)||!this.guard(t)||(super.add(t),this.onItemAdded||(this.onItemAdded=new K),this.onItemAdded.trigger(t));return this}delete(e){const t=super.delete(e);return t&&this.onItemDeleted.trigger(),t}dispose(){this.clear(),this.onItemAdded.reset(),this.onItemDeleted.reset(),this.onCleared.reset()}};const Bc=class Je{static create(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return`${Je._lut[e&255]+Je._lut[e>>8&255]+Je._lut[e>>16&255]+Je._lut[e>>24&255]}-${Je._lut[t&255]}${Je._lut[t>>8&255]}-${Je._lut[t>>16&15|64]}${Je._lut[t>>24&255]}-${Je._lut[i&63|128]}${Je._lut[i>>8&255]}-${Je._lut[i>>16&255]}${Je._lut[i>>24&255]}${Je._lut[n&255]}${Je._lut[n>>8&255]}${Je._lut[n>>16&255]}${Je._lut[n>>24&255]}`.toLowerCase()}static validate(e){if(!Je._pattern.test(e))throw new Error(`${e} is not a valid UUID v4.

- If you're the tool creator, you can take one from https://www.uuidgenerator.net/.

- If you're using a platform tool, verify the uuid isn't misspelled or contact the tool creator.`)}};C(Bc,"_pattern",/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/);C(Bc,"_lut",["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"]);let ot=Bc;var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ep={},Aa={};(function(s){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",t=e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",i="["+e+"]["+t+"]*",n=new RegExp("^"+i+"$"),r=function(a,l){const c=[];let h=l.exec(a);for(;h;){const d=[];d.startIndex=l.lastIndex-h[0].length;const u=h.length;for(let p=0;p<u;p++)d.push(h[p]);c.push(d),h=l.exec(a)}return c},o=function(a){const l=n.exec(a);return!(l===null||typeof l>"u")};s.isExist=function(a){return typeof a<"u"},s.isEmptyObject=function(a){return Object.keys(a).length===0},s.merge=function(a,l,c){if(l){const h=Object.keys(l),d=h.length;for(let u=0;u<d;u++)c==="strict"?a[h[u]]=[l[h[u]]]:a[h[u]]=l[h[u]]}},s.getValue=function(a){return s.isExist(a)?a:""},s.isName=o,s.getAllMatches=r,s.nameRegexp=i})(Aa);const Rc=Aa,_v={allowBooleanAttributes:!1,unpairedTags:[]};ep.validate=function(s,e){e=Object.assign({},_v,e);const t=[];let i=!1,n=!1;s[0]==="\uFEFF"&&(s=s.substr(1));for(let r=0;r<s.length;r++)if(s[r]==="<"&&s[r+1]==="?"){if(r+=2,r=kh(s,r),r.err)return r}else if(s[r]==="<"){let o=r;if(r++,s[r]==="!"){r=Dh(s,r);continue}else{let a=!1;s[r]==="/"&&(a=!0,r++);let l="";for(;r<s.length&&s[r]!==">"&&s[r]!==" "&&s[r]!=="	"&&s[r]!==`
`&&s[r]!=="\r";r++)l+=s[r];if(l=l.trim(),l[l.length-1]==="/"&&(l=l.substring(0,l.length-1),r--),!Pv(l)){let d;return l.trim().length===0?d="Invalid space after '<'.":d="Tag '"+l+"' is an invalid name.",je("InvalidTag",d,mt(s,r))}const c=Cv(s,r);if(c===!1)return je("InvalidAttr","Attributes for '"+l+"' have open quote.",mt(s,r));let h=c.value;if(r=c.index,h[h.length-1]==="/"){const d=r-h.length;h=h.substring(0,h.length-1);const u=zh(h,e);if(u===!0)i=!0;else return je(u.err.code,u.err.msg,mt(s,d+u.err.line))}else if(a)if(c.tagClosed){if(h.trim().length>0)return je("InvalidTag","Closing tag '"+l+"' can't have attributes or invalid starting.",mt(s,o));if(t.length===0)return je("InvalidTag","Closing tag '"+l+"' has not been opened.",mt(s,o));{const d=t.pop();if(l!==d.tagName){let u=mt(s,d.tagStartPos);return je("InvalidTag","Expected closing tag '"+d.tagName+"' (opened in line "+u.line+", col "+u.col+") instead of closing tag '"+l+"'.",mt(s,o))}t.length==0&&(n=!0)}}else return je("InvalidTag","Closing tag '"+l+"' doesn't have proper closing.",mt(s,r));else{const d=zh(h,e);if(d!==!0)return je(d.err.code,d.err.msg,mt(s,r-h.length+d.err.line));if(n===!0)return je("InvalidXml","Multiple possible root nodes found.",mt(s,r));e.unpairedTags.indexOf(l)!==-1||t.push({tagName:l,tagStartPos:o}),i=!0}for(r++;r<s.length;r++)if(s[r]==="<")if(s[r+1]==="!"){r++,r=Dh(s,r);continue}else if(s[r+1]==="?"){if(r=kh(s,++r),r.err)return r}else break;else if(s[r]==="&"){const d=Tv(s,r);if(d==-1)return je("InvalidChar","char '&' is not expected.",mt(s,r));r=d}else if(n===!0&&!Oh(s[r]))return je("InvalidXml","Extra text at the end",mt(s,r));s[r]==="<"&&r--}}else{if(Oh(s[r]))continue;return je("InvalidChar","char '"+s[r]+"' is not expected.",mt(s,r))}if(i){if(t.length==1)return je("InvalidTag","Unclosed tag '"+t[0].tagName+"'.",mt(s,t[0].tagStartPos));if(t.length>0)return je("InvalidXml","Invalid '"+JSON.stringify(t.map(r=>r.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return je("InvalidXml","Start tag expected.",1);return!0};function Oh(s){return s===" "||s==="	"||s===`
`||s==="\r"}function kh(s,e){const t=e;for(;e<s.length;e++)if(s[e]=="?"||s[e]==" "){const i=s.substr(t,e-t);if(e>5&&i==="xml")return je("InvalidXml","XML declaration allowed only at the start of the document.",mt(s,e));if(s[e]=="?"&&s[e+1]==">"){e++;break}else continue}return e}function Dh(s,e){if(s.length>e+5&&s[e+1]==="-"&&s[e+2]==="-"){for(e+=3;e<s.length;e++)if(s[e]==="-"&&s[e+1]==="-"&&s[e+2]===">"){e+=2;break}}else if(s.length>e+8&&s[e+1]==="D"&&s[e+2]==="O"&&s[e+3]==="C"&&s[e+4]==="T"&&s[e+5]==="Y"&&s[e+6]==="P"&&s[e+7]==="E"){let t=1;for(e+=8;e<s.length;e++)if(s[e]==="<")t++;else if(s[e]===">"&&(t--,t===0))break}else if(s.length>e+9&&s[e+1]==="["&&s[e+2]==="C"&&s[e+3]==="D"&&s[e+4]==="A"&&s[e+5]==="T"&&s[e+6]==="A"&&s[e+7]==="["){for(e+=8;e<s.length;e++)if(s[e]==="]"&&s[e+1]==="]"&&s[e+2]===">"){e+=2;break}}return e}const wv='"',xv="'";function Cv(s,e){let t="",i="",n=!1;for(;e<s.length;e++){if(s[e]===wv||s[e]===xv)i===""?i=s[e]:i!==s[e]||(i="");else if(s[e]===">"&&i===""){n=!0;break}t+=s[e]}return i!==""?!1:{value:t,index:e,tagClosed:n}}const Sv=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function zh(s,e){const t=Rc.getAllMatches(s,Sv),i={};for(let n=0;n<t.length;n++){if(t[n][1].length===0)return je("InvalidAttr","Attribute '"+t[n][2]+"' has no space in starting.",Hn(t[n]));if(t[n][3]!==void 0&&t[n][4]===void 0)return je("InvalidAttr","Attribute '"+t[n][2]+"' is without value.",Hn(t[n]));if(t[n][3]===void 0&&!e.allowBooleanAttributes)return je("InvalidAttr","boolean attribute '"+t[n][2]+"' is not allowed.",Hn(t[n]));const r=t[n][2];if(!Av(r))return je("InvalidAttr","Attribute '"+r+"' is an invalid name.",Hn(t[n]));if(!i.hasOwnProperty(r))i[r]=1;else return je("InvalidAttr","Attribute '"+r+"' is repeated.",Hn(t[n]))}return!0}function Ev(s,e){let t=/\d/;for(s[e]==="x"&&(e++,t=/[\da-fA-F]/);e<s.length;e++){if(s[e]===";")return e;if(!s[e].match(t))break}return-1}function Tv(s,e){if(e++,s[e]===";")return-1;if(s[e]==="#")return e++,Ev(s,e);let t=0;for(;e<s.length;e++,t++)if(!(s[e].match(/\w/)&&t<20)){if(s[e]===";")break;return-1}return e}function je(s,e,t){return{err:{code:s,msg:e,line:t.line||t,col:t.col}}}function Av(s){return Rc.isName(s)}function Pv(s){return Rc.isName(s)}function mt(s,e){const t=s.substring(0,e).split(/\r?\n/);return{line:t.length,col:t[t.length-1].length+1}}function Hn(s){return s.startIndex+s[1].length}var Uc={};const tp={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(s,e){return e},attributeValueProcessor:function(s,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(s,e,t){return s}},Mv=function(s){return Object.assign({},tp,s)};Uc.buildOptions=Mv;Uc.defaultOptions=tp;let Ov=class{constructor(e){this.tagname=e,this.child=[],this[":@"]={}}add(e,t){e==="__proto__"&&(e="#__proto__"),this.child.push({[e]:t})}addChild(e){e.tagname==="__proto__"&&(e.tagname="#__proto__"),e[":@"]&&Object.keys(e[":@"]).length>0?this.child.push({[e.tagname]:e.child,":@":e[":@"]}):this.child.push({[e.tagname]:e.child})}};var kv=Ov;const Dv=Aa;function zv(s,e){const t={};if(s[e+3]==="O"&&s[e+4]==="C"&&s[e+5]==="T"&&s[e+6]==="Y"&&s[e+7]==="P"&&s[e+8]==="E"){e=e+9;let i=1,n=!1,r=!1,o="";for(;e<s.length;e++)if(s[e]==="<"&&!r){if(n&&$v(s,e))e+=7,[entityName,val,e]=Iv(s,e+1),val.indexOf("&")===-1&&(t[Uv(entityName)]={regx:RegExp(`&${entityName};`,"g"),val});else if(n&&Nv(s,e))e+=8;else if(n&&Bv(s,e))e+=8;else if(n&&Rv(s,e))e+=9;else if(Lv)r=!0;else throw new Error("Invalid DOCTYPE");i++,o=""}else if(s[e]===">"){if(r?s[e-1]==="-"&&s[e-2]==="-"&&(r=!1,i--):i--,i===0)break}else s[e]==="["?n=!0:o+=s[e];if(i!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:t,i:e}}function Iv(s,e){let t="";for(;e<s.length&&s[e]!=="'"&&s[e]!=='"';e++)t+=s[e];if(t=t.trim(),t.indexOf(" ")!==-1)throw new Error("External entites are not supported");const i=s[e++];let n="";for(;e<s.length&&s[e]!==i;e++)n+=s[e];return[t,n,e]}function Lv(s,e){return s[e+1]==="!"&&s[e+2]==="-"&&s[e+3]==="-"}function $v(s,e){return s[e+1]==="!"&&s[e+2]==="E"&&s[e+3]==="N"&&s[e+4]==="T"&&s[e+5]==="I"&&s[e+6]==="T"&&s[e+7]==="Y"}function Nv(s,e){return s[e+1]==="!"&&s[e+2]==="E"&&s[e+3]==="L"&&s[e+4]==="E"&&s[e+5]==="M"&&s[e+6]==="E"&&s[e+7]==="N"&&s[e+8]==="T"}function Bv(s,e){return s[e+1]==="!"&&s[e+2]==="A"&&s[e+3]==="T"&&s[e+4]==="T"&&s[e+5]==="L"&&s[e+6]==="I"&&s[e+7]==="S"&&s[e+8]==="T"}function Rv(s,e){return s[e+1]==="!"&&s[e+2]==="N"&&s[e+3]==="O"&&s[e+4]==="T"&&s[e+5]==="A"&&s[e+6]==="T"&&s[e+7]==="I"&&s[e+8]==="O"&&s[e+9]==="N"}function Uv(s){if(Dv.isName(s))return s;throw new Error(`Invalid entity name ${s}`)}var Fv=zv;const jv=/^[-+]?0x[a-fA-F0-9]+$/,Hv=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,Vv={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function Wv(s,e={}){if(e=Object.assign({},Vv,e),!s||typeof s!="string")return s;let t=s.trim();if(e.skipLike!==void 0&&e.skipLike.test(t))return s;if(s==="0")return 0;if(e.hex&&jv.test(t))return Yv(t,16);if(t.search(/[eE]/)!==-1){const i=t.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);if(i){if(e.leadingZeros)t=(i[1]||"")+i[3];else if(!(i[2]==="0"&&i[3][0]==="."))return s;return e.eNotation?Number(t):s}else return s}else{const i=Hv.exec(t);if(i){const n=i[1],r=i[2];let o=qv(i[3]);if(!e.leadingZeros&&r.length>0&&n&&t[2]!=="."||!e.leadingZeros&&r.length>0&&!n&&t[1]!==".")return s;if(e.leadingZeros&&r===s)return 0;{const a=Number(t),l=""+a;return l.search(/[eE]/)!==-1?e.eNotation?a:s:t.indexOf(".")!==-1?l==="0"&&o===""||l===o||n&&l==="-"+o?a:s:r?o===l||n+o===l?a:s:t===l||t===n+l?a:s}}else return s}}function qv(s){return s&&s.indexOf(".")!==-1&&(s=s.replace(/0+$/,""),s==="."?s="0":s[0]==="."?s="0"+s:s[s.length-1]==="."&&(s=s.substr(0,s.length-1))),s}function Yv(s,e){if(parseInt)return parseInt(s,e);if(Number.parseInt)return Number.parseInt(s,e);if(window&&window.parseInt)return window.parseInt(s,e);throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")}var Gv=Wv;const ip=Aa,Vn=kv,Xv=Fv,Zv=Gv;let Qv=class{constructor(e){this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"¢"},pound:{regex:/&(pound|#163);/g,val:"£"},yen:{regex:/&(yen|#165);/g,val:"¥"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"©"},reg:{regex:/&(reg|#174);/g,val:"®"},inr:{regex:/&(inr|#8377);/g,val:"₹"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(t,i)=>String.fromCharCode(Number.parseInt(i,10))},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(t,i)=>String.fromCharCode(Number.parseInt(i,16))}},this.addExternalEntities=Kv,this.parseXml=sb,this.parseTextData=Jv,this.resolveNameSpace=eb,this.buildAttributesMap=ib,this.isItStopNode=ab,this.replaceEntitiesValue=rb,this.readStopNodeData=cb,this.saveTextToParentTag=ob,this.addChild=nb}};function Kv(s){const e=Object.keys(s);for(let t=0;t<e.length;t++){const i=e[t];this.lastEntities[i]={regex:new RegExp("&"+i+";","g"),val:s[i]}}}function Jv(s,e,t,i,n,r,o){if(s!==void 0&&(this.options.trimValues&&!i&&(s=s.trim()),s.length>0)){o||(s=this.replaceEntitiesValue(s));const a=this.options.tagValueProcessor(e,s,t,n,r);return a==null?s:typeof a!=typeof s||a!==s?a:this.options.trimValues?Fl(s,this.options.parseTagValue,this.options.numberParseOptions):s.trim()===s?Fl(s,this.options.parseTagValue,this.options.numberParseOptions):s}}function eb(s){if(this.options.removeNSPrefix){const e=s.split(":"),t=s.charAt(0)==="/"?"/":"";if(e[0]==="xmlns")return"";e.length===2&&(s=t+e[1])}return s}const tb=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function ib(s,e,t){if(!this.options.ignoreAttributes&&typeof s=="string"){const i=ip.getAllMatches(s,tb),n=i.length,r={};for(let o=0;o<n;o++){const a=this.resolveNameSpace(i[o][1]);let l=i[o][4],c=this.options.attributeNamePrefix+a;if(a.length)if(this.options.transformAttributeName&&(c=this.options.transformAttributeName(c)),c==="__proto__"&&(c="#__proto__"),l!==void 0){this.options.trimValues&&(l=l.trim()),l=this.replaceEntitiesValue(l);const h=this.options.attributeValueProcessor(a,l,e);h==null?r[c]=l:typeof h!=typeof l||h!==l?r[c]=h:r[c]=Fl(l,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(r[c]=!0)}if(!Object.keys(r).length)return;if(this.options.attributesGroupName){const o={};return o[this.options.attributesGroupName]=r,o}return r}}const sb=function(s){s=s.replace(/\r\n?/g,`
`);const e=new Vn("!xml");let t=e,i="",n="";for(let r=0;r<s.length;r++)if(s[r]==="<")if(s[r+1]==="/"){const o=ys(s,">",r,"Closing Tag is not closed.");let a=s.substring(r+2,o).trim();if(this.options.removeNSPrefix){const h=a.indexOf(":");h!==-1&&(a=a.substr(h+1))}this.options.transformTagName&&(a=this.options.transformTagName(a)),t&&(i=this.saveTextToParentTag(i,t,n));const l=n.substring(n.lastIndexOf(".")+1);if(a&&this.options.unpairedTags.indexOf(a)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${a}>`);let c=0;l&&this.options.unpairedTags.indexOf(l)!==-1?(c=n.lastIndexOf(".",n.lastIndexOf(".")-1),this.tagsNodeStack.pop()):c=n.lastIndexOf("."),n=n.substring(0,c),t=this.tagsNodeStack.pop(),i="",r=o}else if(s[r+1]==="?"){let o=Ul(s,r,!1,"?>");if(!o)throw new Error("Pi Tag is not closed.");if(i=this.saveTextToParentTag(i,t,n),!(this.options.ignoreDeclaration&&o.tagName==="?xml"||this.options.ignorePiTags)){const a=new Vn(o.tagName);a.add(this.options.textNodeName,""),o.tagName!==o.tagExp&&o.attrExpPresent&&(a[":@"]=this.buildAttributesMap(o.tagExp,n,o.tagName)),this.addChild(t,a,n)}r=o.closeIndex+1}else if(s.substr(r+1,3)==="!--"){const o=ys(s,"-->",r+4,"Comment is not closed.");if(this.options.commentPropName){const a=s.substring(r+4,o-2);i=this.saveTextToParentTag(i,t,n),t.add(this.options.commentPropName,[{[this.options.textNodeName]:a}])}r=o}else if(s.substr(r+1,2)==="!D"){const o=Xv(s,r);this.docTypeEntities=o.entities,r=o.i}else if(s.substr(r+1,2)==="!["){const o=ys(s,"]]>",r,"CDATA is not closed.")-2,a=s.substring(r+9,o);i=this.saveTextToParentTag(i,t,n);let l=this.parseTextData(a,t.tagname,n,!0,!1,!0,!0);l==null&&(l=""),this.options.cdataPropName?t.add(this.options.cdataPropName,[{[this.options.textNodeName]:a}]):t.add(this.options.textNodeName,l),r=o+2}else{let o=Ul(s,r,this.options.removeNSPrefix),a=o.tagName;const l=o.rawTagName;let c=o.tagExp,h=o.attrExpPresent,d=o.closeIndex;this.options.transformTagName&&(a=this.options.transformTagName(a)),t&&i&&t.tagname!=="!xml"&&(i=this.saveTextToParentTag(i,t,n,!1));const u=t;if(u&&this.options.unpairedTags.indexOf(u.tagname)!==-1&&(t=this.tagsNodeStack.pop(),n=n.substring(0,n.lastIndexOf("."))),a!==e.tagname&&(n+=n?"."+a:a),this.isItStopNode(this.options.stopNodes,n,a)){let p="";if(c.length>0&&c.lastIndexOf("/")===c.length-1)a[a.length-1]==="/"?(a=a.substr(0,a.length-1),n=n.substr(0,n.length-1),c=a):c=c.substr(0,c.length-1),r=o.closeIndex;else if(this.options.unpairedTags.indexOf(a)!==-1)r=o.closeIndex;else{const m=this.readStopNodeData(s,l,d+1);if(!m)throw new Error(`Unexpected end of ${l}`);r=m.i,p=m.tagContent}const g=new Vn(a);a!==c&&h&&(g[":@"]=this.buildAttributesMap(c,n,a)),p&&(p=this.parseTextData(p,a,n,!0,h,!0,!0)),n=n.substr(0,n.lastIndexOf(".")),g.add(this.options.textNodeName,p),this.addChild(t,g,n)}else{if(c.length>0&&c.lastIndexOf("/")===c.length-1){a[a.length-1]==="/"?(a=a.substr(0,a.length-1),n=n.substr(0,n.length-1),c=a):c=c.substr(0,c.length-1),this.options.transformTagName&&(a=this.options.transformTagName(a));const p=new Vn(a);a!==c&&h&&(p[":@"]=this.buildAttributesMap(c,n,a)),this.addChild(t,p,n),n=n.substr(0,n.lastIndexOf("."))}else{const p=new Vn(a);this.tagsNodeStack.push(t),a!==c&&h&&(p[":@"]=this.buildAttributesMap(c,n,a)),this.addChild(t,p,n),t=p}i="",r=d}}else i+=s[r];return e.child};function nb(s,e,t){const i=this.options.updateTag(e.tagname,t,e[":@"]);i===!1||(typeof i=="string"&&(e.tagname=i),s.addChild(e))}const rb=function(s){if(this.options.processEntities){for(let e in this.docTypeEntities){const t=this.docTypeEntities[e];s=s.replace(t.regx,t.val)}for(let e in this.lastEntities){const t=this.lastEntities[e];s=s.replace(t.regex,t.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){const t=this.htmlEntities[e];s=s.replace(t.regex,t.val)}s=s.replace(this.ampEntity.regex,this.ampEntity.val)}return s};function ob(s,e,t,i){return s&&(i===void 0&&(i=Object.keys(e.child).length===0),s=this.parseTextData(s,e.tagname,t,!1,e[":@"]?Object.keys(e[":@"]).length!==0:!1,i),s!==void 0&&s!==""&&e.add(this.options.textNodeName,s),s=""),s}function ab(s,e,t){const i="*."+t;for(const n in s){const r=s[n];if(i===r||e===r)return!0}return!1}function lb(s,e,t=">"){let i,n="";for(let r=e;r<s.length;r++){let o=s[r];if(i)o===i&&(i="");else if(o==='"'||o==="'")i=o;else if(o===t[0])if(t[1]){if(s[r+1]===t[1])return{data:n,index:r}}else return{data:n,index:r};else o==="	"&&(o=" ");n+=o}}function ys(s,e,t,i){const n=s.indexOf(e,t);if(n===-1)throw new Error(i);return n+e.length-1}function Ul(s,e,t,i=">"){const n=lb(s,e+1,i);if(!n)return;let r=n.data;const o=n.index,a=r.search(/\s/);let l=r,c=!0;a!==-1&&(l=r.substring(0,a),r=r.substring(a+1).trimStart());const h=l;if(t){const d=l.indexOf(":");d!==-1&&(l=l.substr(d+1),c=l!==n.data.substr(d+1))}return{tagName:l,tagExp:r,closeIndex:o,attrExpPresent:c,rawTagName:h}}function cb(s,e,t){const i=t;let n=1;for(;t<s.length;t++)if(s[t]==="<")if(s[t+1]==="/"){const r=ys(s,">",t,`${e} is not closed`);if(s.substring(t+2,r).trim()===e&&(n--,n===0))return{tagContent:s.substring(i,t),i:r};t=r}else if(s[t+1]==="?")t=ys(s,"?>",t+1,"StopNode is not closed.");else if(s.substr(t+1,3)==="!--")t=ys(s,"-->",t+3,"StopNode is not closed.");else if(s.substr(t+1,2)==="![")t=ys(s,"]]>",t,"StopNode is not closed.")-2;else{const r=Ul(s,t,">");r&&((r&&r.tagName)===e&&r.tagExp[r.tagExp.length-1]!=="/"&&n++,t=r.closeIndex)}}function Fl(s,e,t){if(e&&typeof s=="string"){const i=s.trim();return i==="true"?!0:i==="false"?!1:Zv(s,t)}else return ip.isExist(s)?s:""}var hb=Qv,sp={};function db(s,e){return np(s,e)}function np(s,e,t){let i;const n={};for(let r=0;r<s.length;r++){const o=s[r],a=ub(o);let l="";if(t===void 0?l=a:l=t+"."+a,a===e.textNodeName)i===void 0?i=o[a]:i+=""+o[a];else{if(a===void 0)continue;if(o[a]){let c=np(o[a],e,l);const h=fb(c,e);o[":@"]?pb(c,o[":@"],l,e):Object.keys(c).length===1&&c[e.textNodeName]!==void 0&&!e.alwaysCreateTextNode?c=c[e.textNodeName]:Object.keys(c).length===0&&(e.alwaysCreateTextNode?c[e.textNodeName]="":c=""),n[a]!==void 0&&n.hasOwnProperty(a)?(Array.isArray(n[a])||(n[a]=[n[a]]),n[a].push(c)):e.isArray(a,l,h)?n[a]=[c]:n[a]=c}}}return typeof i=="string"?i.length>0&&(n[e.textNodeName]=i):i!==void 0&&(n[e.textNodeName]=i),n}function ub(s){const e=Object.keys(s);for(let t=0;t<e.length;t++){const i=e[t];if(i!==":@")return i}}function pb(s,e,t,i){if(e){const n=Object.keys(e),r=n.length;for(let o=0;o<r;o++){const a=n[o];i.isArray(a,t+"."+a,!0,!0)?s[a]=[e[a]]:s[a]=e[a]}}}function fb(s,e){const{textNodeName:t}=e,i=Object.keys(s).length;return!!(i===0||i===1&&(s[t]||typeof s[t]=="boolean"||s[t]===0))}sp.prettify=db;const{buildOptions:mb}=Uc,gb=hb,{prettify:vb}=sp,bb=ep;let yb=class{constructor(e){this.externalEntities={},this.options=mb(e)}parse(e,t){if(typeof e!="string")if(e.toString)e=e.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(t){t===!0&&(t={});const r=bb.validate(e,t);if(r!==!0)throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)}const i=new gb(this.options);i.addExternalEntities(this.externalEntities);const n=i.parseXml(e);return this.options.preserveOrder||n===void 0?n:vb(n,this.options)}addEntity(e,t){if(t.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(e.indexOf("&")!==-1||e.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(t==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[e]=t}};var _b=yb;const wb=`
`;function xb(s,e){let t="";return e.format&&e.indentBy.length>0&&(t=wb),rp(s,e,"",t)}function rp(s,e,t,i){let n="",r=!1;for(let o=0;o<s.length;o++){const a=s[o],l=Cb(a);if(l===void 0)continue;let c="";if(t.length===0?c=l:c=`${t}.${l}`,l===e.textNodeName){let g=a[l];Sb(c,e)||(g=e.tagValueProcessor(l,g),g=op(g,e)),r&&(n+=i),n+=g,r=!1;continue}else if(l===e.cdataPropName){r&&(n+=i),n+=`<![CDATA[${a[l][0][e.textNodeName]}]]>`,r=!1;continue}else if(l===e.commentPropName){n+=i+`<!--${a[l][0][e.textNodeName]}-->`,r=!0;continue}else if(l[0]==="?"){const g=Ih(a[":@"],e),m=l==="?xml"?"":i;let v=a[l][0][e.textNodeName];v=v.length!==0?" "+v:"",n+=m+`<${l}${v}${g}?>`,r=!0;continue}let h=i;h!==""&&(h+=e.indentBy);const d=Ih(a[":@"],e),u=i+`<${l}${d}`,p=rp(a[l],e,c,h);e.unpairedTags.indexOf(l)!==-1?e.suppressUnpairedNode?n+=u+">":n+=u+"/>":(!p||p.length===0)&&e.suppressEmptyNode?n+=u+"/>":p&&p.endsWith(">")?n+=u+`>${p}${i}</${l}>`:(n+=u+">",p&&i!==""&&(p.includes("/>")||p.includes("</"))?n+=i+e.indentBy+p+i:n+=p,n+=`</${l}>`),r=!0}return n}function Cb(s){const e=Object.keys(s);for(let t=0;t<e.length;t++){const i=e[t];if(s.hasOwnProperty(i)&&i!==":@")return i}}function Ih(s,e){let t="";if(s&&!e.ignoreAttributes)for(let i in s){if(!s.hasOwnProperty(i))continue;let n=e.attributeValueProcessor(i,s[i]);n=op(n,e),n===!0&&e.suppressBooleanAttributes?t+=` ${i.substr(e.attributeNamePrefix.length)}`:t+=` ${i.substr(e.attributeNamePrefix.length)}="${n}"`}return t}function Sb(s,e){s=s.substr(0,s.length-e.textNodeName.length-1);let t=s.substr(s.lastIndexOf(".")+1);for(let i in e.stopNodes)if(e.stopNodes[i]===s||e.stopNodes[i]==="*."+t)return!0;return!1}function op(s,e){if(s&&s.length>0&&e.processEntities)for(let t=0;t<e.entities.length;t++){const i=e.entities[t];s=s.replace(i.regex,i.val)}return s}var Eb=xb;const Tb=Eb,Ab={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(s,e){return e},attributeValueProcessor:function(s,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function is(s){this.options=Object.assign({},Ab,s),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Ob),this.processTextOrObjNode=Pb,this.options.format?(this.indentate=Mb,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}is.prototype.build=function(s){return this.options.preserveOrder?Tb(s,this.options):(Array.isArray(s)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(s={[this.options.arrayNodeName]:s}),this.j2x(s,0).val)};is.prototype.j2x=function(s,e){let t="",i="";for(let n in s)if(Object.prototype.hasOwnProperty.call(s,n))if(typeof s[n]>"u")this.isAttribute(n)&&(i+="");else if(s[n]===null)this.isAttribute(n)?i+="":n[0]==="?"?i+=this.indentate(e)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+n+"/"+this.tagEndChar;else if(s[n]instanceof Date)i+=this.buildTextValNode(s[n],n,"",e);else if(typeof s[n]!="object"){const r=this.isAttribute(n);if(r)t+=this.buildAttrPairStr(r,""+s[n]);else if(n===this.options.textNodeName){let o=this.options.tagValueProcessor(n,""+s[n]);i+=this.replaceEntitiesValue(o)}else i+=this.buildTextValNode(s[n],n,"",e)}else if(Array.isArray(s[n])){const r=s[n].length;let o="",a="";for(let l=0;l<r;l++){const c=s[n][l];if(!(typeof c>"u"))if(c===null)n[0]==="?"?i+=this.indentate(e)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+n+"/"+this.tagEndChar;else if(typeof c=="object")if(this.options.oneListGroup){const h=this.j2x(c,e+1);o+=h.val,this.options.attributesGroupName&&c.hasOwnProperty(this.options.attributesGroupName)&&(a+=h.attrStr)}else o+=this.processTextOrObjNode(c,n,e);else if(this.options.oneListGroup){let h=this.options.tagValueProcessor(n,c);h=this.replaceEntitiesValue(h),o+=h}else o+=this.buildTextValNode(c,n,"",e)}this.options.oneListGroup&&(o=this.buildObjectNode(o,n,a,e)),i+=o}else if(this.options.attributesGroupName&&n===this.options.attributesGroupName){const r=Object.keys(s[n]),o=r.length;for(let a=0;a<o;a++)t+=this.buildAttrPairStr(r[a],""+s[n][r[a]])}else i+=this.processTextOrObjNode(s[n],n,e);return{attrStr:t,val:i}};is.prototype.buildAttrPairStr=function(s,e){return e=this.options.attributeValueProcessor(s,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&e==="true"?" "+s:" "+s+'="'+e+'"'};function Pb(s,e,t){const i=this.j2x(s,t+1);return s[this.options.textNodeName]!==void 0&&Object.keys(s).length===1?this.buildTextValNode(s[this.options.textNodeName],e,i.attrStr,t):this.buildObjectNode(i.val,e,i.attrStr,t)}is.prototype.buildObjectNode=function(s,e,t,i){if(s==="")return e[0]==="?"?this.indentate(i)+"<"+e+t+"?"+this.tagEndChar:this.indentate(i)+"<"+e+t+this.closeTag(e)+this.tagEndChar;{let n="</"+e+this.tagEndChar,r="";return e[0]==="?"&&(r="?",n=""),(t||t==="")&&s.indexOf("<")===-1?this.indentate(i)+"<"+e+t+r+">"+s+n:this.options.commentPropName!==!1&&e===this.options.commentPropName&&r.length===0?this.indentate(i)+`<!--${s}-->`+this.newLine:this.indentate(i)+"<"+e+t+r+this.tagEndChar+s+this.indentate(i)+n}};is.prototype.closeTag=function(s){let e="";return this.options.unpairedTags.indexOf(s)!==-1?this.options.suppressUnpairedNode||(e="/"):this.options.suppressEmptyNode?e="/":e=`></${s}`,e};is.prototype.buildTextValNode=function(s,e,t,i){if(this.options.cdataPropName!==!1&&e===this.options.cdataPropName)return this.indentate(i)+`<![CDATA[${s}]]>`+this.newLine;if(this.options.commentPropName!==!1&&e===this.options.commentPropName)return this.indentate(i)+`<!--${s}-->`+this.newLine;if(e[0]==="?")return this.indentate(i)+"<"+e+t+"?"+this.tagEndChar;{let n=this.options.tagValueProcessor(e,s);return n=this.replaceEntitiesValue(n),n===""?this.indentate(i)+"<"+e+t+this.closeTag(e)+this.tagEndChar:this.indentate(i)+"<"+e+t+">"+n+"</"+e+this.tagEndChar}};is.prototype.replaceEntitiesValue=function(s){if(s&&s.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const t=this.options.entities[e];s=s.replace(t.regex,t.val)}return s};function Mb(s){return this.options.indentBy.repeat(s)}function Ob(s){return s.startsWith(this.options.attributeNamePrefix)&&s!==this.options.textNodeName?s.substr(this.attrPrefixLen):!1}var kb=is;const Db=_b,zb=kb;var Pa={XMLParser:Db,XMLBuilder:zb};let Ma=class{};C(Ma,"parser",new Pa.XMLParser({allowBooleanAttributes:!0,attributeNamePrefix:"",ignoreAttributes:!1,ignoreDeclaration:!0,ignorePiTags:!0,numberParseOptions:{leadingZeros:!0,hex:!0},parseAttributeValue:!0,preserveOrder:!1,processEntities:!1,removeNSPrefix:!0,trimValues:!0}));C(Ma,"builder",new Pa.XMLBuilder({attributeNamePrefix:"$",ignoreAttributes:!1,suppressBooleanAttributes:!1}));let Pe=class Fo{static join(e){const t={};for(const i of e)for(const n in i)if(!t[n])t[n]=new Set(i[n]);else for(const r of i[n])t[n].add(r);return t}static intersect(e){if(e.length===0)return{};let t=Fo.clone(e[0]);for(let i=1;i<e.length;i++){const n=e[i],r={};for(const o in t)if(n[o]){const a=new Set;for(const l of t[o])n[o].has(l)&&a.add(l);a.size>0&&(r[o]=a)}t=r}return t}static clone(e){const t={};for(const i in e)t[i]=new Set(e[i]);return t}static remove(e,t,i=!1){i&&(e=Fo.clone(e));for(const n in t)if(e[n]){for(const r of t[n])e[n].delete(r);e[n].size===0&&delete e[n]}}static add(e,t,i=!1){i&&(e=Fo.clone(e));for(const n in t)if(!e[n])e[n]=new Set(t[n]);else for(const r of t[n])e[n].add(r)}static append(e,t,...i){let n=e[t];n||(n=new Set,e[t]=n);for(const r of i)n.add(r)}static isEqual(e,t){const i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(const r of i){if(!t[r]||e[r].size!==t[r].size)return!1;for(const o of e[r])if(!t[r].has(o))return!1}return!0}static isEmpty(e){return Object.values(e).reduce((t,i)=>t+i.size,0)===0}static toRaw(e){const t={};for(const i in e)t[i]=Array.from(e[i]);return t}static fromRaw(e){const t={};for(const i in e)t[i]=new Set(e[i]);return t}},bn=class extends Map{constructor(e){super(e),C(this,"onItemSet",new K),C(this,"onItemUpdated",new K),C(this,"onItemDeleted",new K),C(this,"onCleared",new K),C(this,"guard",()=>!0)}clear(){super.clear(),this.onCleared.trigger()}set(e,t){const i=this.has(e);if(!(this.guard??(()=>!0))(e,t))return this;const n=super.set(e,t);return i?(this.onItemUpdated||(this.onItemUpdated=new K),this.onItemUpdated.trigger({key:e,value:t})):(this.onItemSet||(this.onItemSet=new K),this.onItemSet.trigger({key:e,value:t})),n}add(e){const t=ot.create();return this.set(t,e),t}delete(e){const t=super.delete(e);return t&&this.onItemDeleted.trigger(e),t}dispose(){this.clear(),this.onItemSet.reset(),this.onItemDeleted.reset(),this.onCleared.reset()}},Ka=class{static isEntry(e){return new Set(["Boolean","Color","Text","Number","Select","Vector3","TextSet","None"]).has(e.type)}static copySchema(e,t={}){for(const i in e){const n=e[i];this.isEntry(n)?t[i]=this.copyEntry(n):(t[i]={},this.copySchema(n,t[i]))}return t}static copyEntry(e){if(e.type==="Boolean"){const t=e;return{type:t.type,value:t.value}}if(e.type==="Color"){const t=e;return{type:t.type,value:t.value.clone()}}if(e.type==="Text"){const t=e;return{type:t.type,value:t.value}}if(e.type==="Number"){const t=e;return{type:t.type,value:t.value,min:t.min,max:t.max,interpolable:t.interpolable}}if(e.type==="Select"){const t=e;return{type:t.type,value:t.value,multiple:t.multiple,options:new Set(t.options)}}if(e.type==="Vector3"){const t=e;return{type:t.type,value:t.value.clone()}}if(e.type==="TextSet"){const t=e;return{type:t.type,value:new Set(t.value)}}if(e.type==="None"){const t=e;return{type:t.type,value:t.value}}throw new Error("Invalid entry!")}};class Ib{constructor(){C(this,"list",new Set)}add(e){for(const t of e)this.list.add(t)}remove(e){for(const t of e)this.list.delete(t)}set(e){for(const t of this.list)t.enabled=e}reset(){for(const e of this.list)e.reset()}}let Oa=class{constructor(e,t,i,n){C(this,"_component"),C(this,"name"),C(this,"uuid"),this._component=e,this.name=i,this.uuid=n??ot.create(),t.get(Fc).list.set(this.uuid,this)}get controls(){return Ka.copySchema(this._config)}set(e){for(const t in e)if(t in this){const i=t;this[i]=e[t].value}}export(e=this._config,t={}){for(const i in e){const n=e[i];if(Ka.isEntry(n))if(n.type==="Color"){const{r,g:o,b:a}=n.value;t[i]={...n,value:{r,g:o,b:a}}}else if(n.type==="Vector3"){const{x:r,y:o,z:a}=n.value;t[i]={...n,value:{x:r,y:o,z:a}}}else if(n.type==="TextSet"){const r=Array.from(n.value);t[i]={...n,value:r}}else if(n.type==="Select"){const r=Array.from(n.options);t[i]={...n,options:r}}else t[i]={...n};else t[i]={},this.export(n,t[i])}return t}import(e,t={},i=!0){for(const n in e){const r=e[n];if(Ka.isEntry(r))if(r.type==="Color"){const{r:o,g:a,b:l}=r.value;t[n]={...r,value:new me(o,a,l)}}else if(r.type==="Vector3"){const{x:o,y:a,z:l}=r.value;t[n]={...r,value:new L(o,a,l)}}else r.type==="TextSet"?t[n]={...r,value:new Set(r.value)}:r.type==="Select"?t[n]={...r,options:new Set(r.options)}:t[n]={...r};else t[n]={},this.import(r,t[n],!1)}i&&this.set(t)}};const ap=class lp extends Oe{constructor(e){super(e),C(this,"list",new bn),C(this,"enabled",!0),e.add(lp.uuid,this)}};C(ap,"uuid","b8c764e0-6b24-4e77-9a32-35fa728ee5b4");let Fc=ap,cp=class{constructor(e){C(this,"_event"),C(this,"_position",new Me),C(this,"onDisposed",new K),C(this,"updateMouseInfo",t=>{this._event=t}),this.dom=e,this.setupEvents(!0)}get position(){return this.updatePosition(!1),this._position.clone()}get rawPosition(){return this.updatePosition(!0),this._position.clone()}dispose(){this.setupEvents(!1),this.onDisposed.trigger(),this.onDisposed.reset()}updatePosition(e){if(this._event){const t=this.dom.getBoundingClientRect();this._position.x=this.getPositionX(t,this._event,e),this._position.y=this.getPositionY(t,this._event,e)}}getPositionY(e,t,i){const n=this.getDataObject(t);return i?n.clientY:-((n.clientY-e.top)/(e.bottom-e.top))*2+1}getPositionX(e,t,i){const n=this.getDataObject(t);return i?n.clientX:(n.clientX-e.left)/(e.right-e.left)*2-1}getDataObject(e){return e instanceof MouseEvent?e:e.touches[0]}setupEvents(e){e?(this.dom.addEventListener("pointermove",this.updateMouseInfo),this.dom.addEventListener("touchstart",this.updateMouseInfo)):(this.dom.removeEventListener("pointermove",this.updateMouseInfo),this.dom.removeEventListener("touchstart",this.updateMouseInfo))}};const hp=class dp extends Oe{constructor(e){super(e),C(this,"onDisposed",new K),C(this,"onBeforeDispose",new K),C(this,"onFragmentsLoaded",new K),C(this,"baseCoordinationModel",""),C(this,"baseCoordinationMatrix",new Ee),C(this,"enabled",!0),C(this,"_core"),this.components.add(dp.uuid,this)}get initialized(){return!!this._core}get list(){return this.core.models.list}get core(){if(!this._core)throw new Error("FragmentsManager not initialized. Call init() first.");return this._core}get _hasCoordinationModel(){return this.baseCoordinationModel!==""}dispose(){this.onBeforeDispose.trigger(),this._core&&(this.core.dispose(),this._core=void 0),this.baseCoordinationModel="",this.onFragmentsLoaded.reset(),this.onDisposed.trigger(),this.onDisposed.reset()}init(e){this._core=new yg(e),this.core.onModelLoaded.add(async()=>{if(this._hasCoordinationModel)return;const t=[...this.list.values()][0];t&&(this.baseCoordinationModel=t.modelId,this.baseCoordinationMatrix=await t.getCoordinationMatrix())}),this.list.onItemDeleted.add(()=>{this.list.size>0||(this.baseCoordinationModel="",this.baseCoordinationMatrix=new Ee)})}async raycast(e){const t=[];for(const r of this.core.models.list.values())if(e.snappingClasses&&e.snappingClasses.length>0){const o=await r.raycastWithSnapping(e);if(o&&o.length>0)t.push(o[0]);else{const a=await r.raycast(e);a&&t.push(a)}}else{const o=await r.raycast(e);o&&t.push(o)}if(await Promise.all(t),t.length===0)return;let i=t[0],n=i.distance;for(let r=1;r<t.length;r++)t[r].distance<n&&(n=t[r].distance,i=t[r]);return i}async getPositions(e){const t=[],i=async(r,o)=>{const a=await r.getPositions(o);for(const l of a)t.push(l)},n=[];for(const r in e){const o=this.core.models.list.get(r);o&&n.push(i(o,Array.from(e[r])))}return await Promise.all(n),t}async getBBoxes(e){const t=[],i=async(r,o)=>{const a=await r.getBoxes(o);if(a)for(const l of a)t.push(l)},n=[];for(const r in e){const o=this.core.models.list.get(r);o&&n.push(i(o,Array.from(e[r])))}return await Promise.all(n),t}async highlight(e,t){await this.forEachModel(t,"highlight",e)}async getData(e,t){const i={};for(const[n,r]of Object.entries(e)){const o=this.list.get(n);if(!o)continue;if(r.size===0){i[n]=[];continue}const a=await o.getItemsData([...r],t);i[n]=a}return i}async resetHighlight(e){await this.forEachModel(e,"resetHighlight")}async forEachModel(e,t,...i){const n={};if(e)for(const o in e){const a=e[o];n[o]=Array.from(a)}else for(const o of this.core.models.list.keys())n[o]=void 0;const r=[];for(const o in n){const a=this.core.models.list.get(o);if(a){const l=n[o],c=a[t](l,...i);r.push(c)}}await Promise.all(r)}async guidsToModelIdMap(e){const t={};for(const[i,n]of this.list){const r=(await n.getLocalIdsByGuids([...e])).filter(o=>o!==null);t[i]=new Set(r)}return t}async modelIdMapToGuids(e){const t=[];for(const[i,n]of Object.entries(e)){const r=this.list.get(i);if(!r)continue;const o=(await r.getGuidsByLocalIds([...n])).filter(a=>a!==null);t.push(...o)}return t}applyBaseCoordinateSystem(e,t){const i=new Ee;return t&&i.copy(t.clone()).invert(),i.multiply(this.baseCoordinationMatrix),e.applyMatrix4(i),i}};C(hp,"uuid","fef46874-46a3-461b-8c44-2922ab77c806");let ue=hp;class Lb{constructor(){C(this,"wasm",{path:"",absolute:!1,logLevel:Eg.LOG_LEVEL_OFF}),C(this,"webIfc",{COORDINATE_TO_ORIGIN:!0}),C(this,"autoSetWasm",!0),C(this,"customLocateFileHandler",null)}}const $b=class jl extends Oe{constructor(e){super(e),C(this,"onDisposed",new K),C(this,"onIfcStartedLoading",new K),C(this,"onIfcImporterInitialized",new K),C(this,"onSetup",new K),C(this,"settings",new Lb),C(this,"webIfc",new Ch),C(this,"enabled",!0),this.components.add(jl.uuid,this)}dispose(){this.webIfc=null,this.onDisposed.trigger(jl.uuid),this.onDisposed.reset()}async setup(e){this.settings={...this.settings,...e},this.settings.autoSetWasm&&await this.autoSetWasm(),this.onSetup.trigger()}async load(e,t,i,n){const r=this.components.get(ue);if(!r.initialized)throw new Error("You need to initialize fragments first.");this.settings.autoSetWasm&&await this.autoSetWasm(),r.core.settings.autoCoordinate=t;const o=new _g;o.wasm.path=this.settings.wasm.path,o.wasm.absolute=this.settings.wasm.absolute,o.webIfcSettings=this.settings.webIfc,this.onIfcImporterInitialized.trigger(o),n!=null&&n.instanceCallback&&n.instanceCallback(o);const a=await o.process({...n==null?void 0:n.processData,bytes:e});return await r.core.load(a,{modelId:i,userData:n==null?void 0:n.userData})}async readIfcFile(e){const{path:t,absolute:i,logLevel:n}=this.settings.wasm;return this.webIfc.SetWasmPath(t,i),await this.webIfc.Init(this.settings.customLocateFileHandler||void 0),n&&this.webIfc.SetLogLevel(n),this.webIfc.OpenModel(e,this.settings.webIfc)}cleanUp(){try{this.webIfc.Dispose()}catch{console.log("Web-ifc wasn't disposed.")}this.webIfc=null,this.webIfc=new Ch}async autoSetWasm(){const e=await fetch(`https://unpkg.com/@thatopen/components@${$p.release}/package.json`);if(!e.ok){console.warn("Couldn't get openbim-components package.json. Set wasm settings manually.");return}const t=await e.json();if(!("web-ifc"in t.peerDependencies))console.warn("Couldn't get web-ifc from peer dependencies in openbim-components. Set wasm settings manually.");else{const i=t.peerDependencies["web-ifc"];this.settings.wasm.path=`https://unpkg.com/web-ifc@${i}/`,this.settings.wasm.absolute=!0}}};C($b,"uuid","a659add7-1418-4771-a0d6-7d4d438e4624");const up=class pp extends Oe{constructor(e){super(e),C(this,"enabled",!0),this.components.add(pp.uuid,this)}async set(e,t){const i=this.components.get(ue),n=[];if(t)for(const[r,o]of Object.entries(t)){const a=i.list.get(r);a&&n.push(a.setVisible([...o],e))}else for(const r of i.list.values())n.push(r.setVisible(void 0,e));await Promise.all(n),await i.core.update(!0)}async isolate(e){await Promise.all([this.set(!1),this.set(!0,e)])}async toggle(e){const t=[],i=this.components.get(ue);for(const[n,r]of Object.entries(e)){const o=i.list.get(n);o&&t.push(o.toggleVisible([...r]))}await Promise.all(t),await i.core.update(!0)}async getVisibilityMap(e,t){const i=[],n=[],r=this.components.get(ue);if(t)for(const l of t){const c=r.list.get(l);c&&(i.push(c.modelId),n.push(c.getItemsByVisibility(e)))}else for(const l of r.list.values())i.push(l.modelId),n.push(l.getItemsByVisibility(e));const o=await Promise.all(n),a={};for(const[l,c]of i.entries())a[c]=o[l];return a}};C(up,"uuid","dd9ccf2d-8a21-4821-b7f6-2949add16a29");let Nb=up;const fp=class Hl extends Oe{constructor(e){super(e),C(this,"enabled",!0),C(this,"onDisposed",new K),C(this,"list",new tt),this.components.add(Hl.uuid,this)}dispose(e=!0){this.list.clear(),this.onDisposed.trigger(Hl.uuid),e&&(this.onDisposed.reset(),this.list.eventsEnabled=!1,this.list.dispose())}get(){const e=new Ve;for(const t of this.list)e.union(t);return e}async addFromModelIdMap(e){const t=this.components.get(ue),i=new Ve;for(const[n,r]of Object.entries(e)){const o=t.list.get(n);if(!o)continue;const a=await o.getMergedBox([...r]);i.union(a)}this.list.add(i)}addFromModels(e){const t=this.components.get(ue);for(const[i,n]of t.list)e&&!e.some(r=>r.test(i))||this.list.add(n.box)}async getCenter(e){this.list.clear(),await this.addFromModelIdMap(e);const t=this.get();this.list.clear();const i=new L;return t.getCenter(i),i}async getCameraOrientation(e,t=1){const i=this.components.get(ue);this.list.clear();for(const[c,h]of i.list)this.list.add(h.box);const n=this.get();this.list.clear();const r=new L;n.getCenter(r);const o=new L;n.getSize(o);const a=Math.max(o.x,o.y,o.z)*t,l=new L;switch(e){case"front":l.set(r.x,r.y,r.z+a);break;case"back":l.set(r.x,r.y,r.z-a);break;case"left":l.set(r.x-a,r.y,r.z);break;case"right":l.set(r.x+a,r.y,r.z);break;case"top":l.set(r.x,r.y+a,r.z);break;case"bottom":l.set(r.x,r.y-a,r.z);break;default:l.set(r.x,r.y,r.z+a)}return{position:l,target:r}}};C(fp,"uuid","d1444724-dba6-4cdd-a0c7-68ee1450d166");let ea=fp;class Bb{constructor(e,t){C(this,"customData",{}),C(this,"_components"),C(this,"_queries",[]),C(this,"_aggregation","exclusive"),C(this,"result",null),C(this,"cache",!0),C(this,"serializeQueryParameters",i=>{var n;return{categories:(n=i.categories)==null?void 0:n.map(r=>r.source),attributes:i.attributes?{aggregation:i.attributes.aggregation,queries:i.attributes.queries.map(this.serializeAttributeQuery)}:void 0,relation:i.relation?{name:i.relation.name,query:i.relation.query?this.serializeQueryParameters(i.relation.query):void 0}:void 0}}),C(this,"deserializeQueryParameters",i=>{var n;return{categories:(n=i.categories)==null?void 0:n.map(r=>new RegExp(r)),attributes:i.attributes?{aggregation:i.attributes.aggregation,queries:i.attributes.queries.map(this.deserializeAttributeQuery)}:void 0,relation:i.relation?{name:i.relation.name,query:i.relation.query?this.deserializeQueryParameters(i.relation.query):void 0}:void 0}}),this._components=e,this.queries=t}set queries(e){this._queries=e,this.clearCache()}get queries(){return this._queries}set aggregation(e){e!==this._aggregation&&this.clearCache(),this._aggregation=e}get aggregation(){return this._aggregation}async test(e){const{modelIds:t,force:i}={force:!1,...e};if(this.result&&!i)return this.result;const n=await this._components.get(ur).getItems(this.queries,{modelIds:t,aggregation:this.aggregation});return this.cache&&(this.result=n),n}clearCache(){this.result=null}serializeAttributeQuery(e){let t;return Array.isArray(e.value)?t=e.value.map(i=>i.source):e.value instanceof RegExp?t=e.value.source:t=e.value,{name:e.name.source,value:t,type:e.type instanceof RegExp?e.type.source:e.type,negate:e.negate,itemIds:e.itemIds}}toJSON(){return{name:this._components.get(ur).list.getKey(this)??"Finder Query",customData:this.customData,queries:this.queries.map(this.serializeQueryParameters),aggregation:this.aggregation,cache:this.cache}}deserializeAttributeQuery(e){let t;return Array.isArray(e.value)?t=e.value.map(i=>new RegExp(i)):typeof e.value=="string"?t=new RegExp(e.value):t=e.value,{name:new RegExp(e.name),value:t,type:e.type?new RegExp(e.type):void 0,negate:e.negate,itemIds:e.itemIds}}fromJSON(e){return this.customData=e.customData,this.aggregation=e.aggregation,this.cache=e.cache,this.queries=e.queries.map(this.deserializeQueryParameters),this}}const mp=class gp extends Oe{constructor(e){super(e),C(this,"enabled",!0),C(this,"list",new Ue),e.add(gp.uuid,this)}async getItems(e,t){const{modelIds:i}=t??{},n=(t==null?void 0:t.aggregation)??"exclusive",r=this.components.get(ue),o=await Promise.all(e.map(async a=>{const l={};return await Promise.all(Array.from(r.list).map(async([c,h])=>{if(i&&!i.some(u=>u.test(c)))return;const d=await h.getItemsByQuery(a);l[c]=new Set(d)})),l}));return n==="inclusive"?Pe.join(o):Pe.intersect(o)}create(e,t){const i=new Bb(this.components,t);return this.list.set(e,i),i}async addFromCategories(e){const t=new Set,i=this.components.get(ue);for(const[n,r]of i.list){if(e&&!e.some(l=>l.test(n)))continue;const o=(await r.getItemsWithGeometryCategories()).filter(l=>l!==null),a=new Set(o);for(const l of a)this.list.has(l)||(this.create(l,[{categories:[new RegExp(`^${l}$`)]}]),t.add(l))}return[...t]}import(e){const{data:t}=e,i=[];if(!t)return i;for(const n of t){const{name:r,customData:o,queries:a,aggregation:l,cache:c}=n,h=this.create(r,[]);h.fromJSON({customData:o,queries:a,aggregation:l,cache:c}),i.push(h)}return i}export(){const e=[];for(const[t,i]of this.list.entries()){const n={...i.toJSON(),name:t};e.push(n)}return{data:e}}};C(mp,"uuid","0da7ad77-f734-42ca-942f-a074adfd1e3a");let ur=mp;const vp=class bp extends Oe{constructor(e){super(e),C(this,"enabled",!0),C(this,"onDisposed",new K),C(this,"list",new Ue),C(this,"defaultSaveFunction",t=>"value"in t.Name?t.Name.value:null),C(this,"onBeforeFragmentsDispose",async t=>{const{key:i,value:n}=t,r=await n.getLocalIds(),o={[i]:new Set(r)};this.removeItems(o)}),e.add(bp.uuid,this),this.setupEvents(),e.get(ue).list.onBeforeDelete.add(this.onBeforeFragmentsDispose)}setupEvents(){this.list.onBeforeDelete.add(({value:e})=>e.dispose())}getClassificationGroups(e){let t=this.list.get(e);return t||(t=new Ue,this.list.set(e,t)),t}getModelItems(e,t,i){const{map:n}=this.getGroupData(e,t);let r=n[i];return r||(r=new Set,n[i]=r),r}getGroupData(e,t){const i=this.components.get(ur),n=this.getClassificationGroups(e);let r=n.get(t);return r||(r={map:{},get(){return new Promise(o=>{if(!r){o({});return}if(r.query){const{name:a,config:l}=r.query,c=i.list.get(a);if(!c)throw new Error("Classifier: the query name associated with the group doesn't exist in the ItemsFinder component");c.test(l).then(h=>{if(!r){o({});return}const d=Pe.join([h,r.map]);o(d)})}else o(r.map)})}},n.set(t,r)),r}async aggregateItems(e,t,i){const n=(i==null?void 0:i.data)??void 0,r=(i==null?void 0:i.aggregationCallback)??this.defaultSaveFunction,o=this.components.get(ue),a=await this.components.get(ur).getItems([t],{modelIds:i==null?void 0:i.modelIds});for(const[l,c]of Object.entries(a)){const h=o.list.get(l);if(!h)continue;const d=(p,...g)=>{const m=this.getModelItems(e,p,l);for(const v of g)m.add(v)},u=await h.getItemsData([...c],n);for(const p of u)r(p,d)}}addGroupItems(e,t,i){const{map:n}=this.getGroupData(e,t);Pe.add(n,i)}setGroupQuery(e,t,i){const n=this.getGroupData(e,t);n.query=i}async find(e){const t=[];for(const[i,n]of Object.entries(e)){const r=[],o=this.list.get(i);if(!o)continue;for(const l of n){const c=o.get(l);if(!c)continue;const h=await c.get();r.push(h)}const a=Pe.join(r);t.push(a)}return Pe.intersect(t)}async aggregateItemRelations(e,t,i,n){const r=(n==null?void 0:n.attribute)??"Name",o={relations:{[i]:{attributes:!0,relations:!1}}};await this.aggregateItems(e,t,{modelIds:n==null?void 0:n.modelIds,data:o,aggregationCallback:(a,l)=>{if(!(a!=null&&a[r]))return;const c=a[r];if(!("value"in c))return;const h=a[i];if(Array.isArray(h))for(const d of h)"value"in d._localId&&l(c.value,d._localId.value)}})}async byIfcBuildingStorey(e){await this.aggregateItemRelations((e==null?void 0:e.classificationName)??"Storeys",{categories:[/BUILDINGSTOREY/]},"ContainsElements",{modelIds:e==null?void 0:e.modelIds})}async byCategory(e){const t=await this.components.get(ur).addFromCategories(e==null?void 0:e.modelIds);for(const i of t)this.setGroupQuery((e==null?void 0:e.classificationName)??"Categories",i,{name:i})}dispose(){this.list.clear(),this.components.get(ue).list.onBeforeDelete.remove(this.onBeforeFragmentsDispose),this.onDisposed.trigger()}removeItems(e,t){if(t&&t.classificationName){const i=this.list.get(t.classificationName);if(!i||t.groupName&&!i.get(t.groupName))return;for(const[,n]of i)Pe.remove(n.map,e);return}for(const[,i]of this.list.entries())for(const[,n]of i)Pe.remove(n.map,e)}async byModel(e){const t=this.components.get(ue),i=(e==null?void 0:e.classificationName)??"Models";for(const[n,r]of t.list){if(e&&e.modelIds&&!e.modelIds.some(l=>l.test(n)))continue;const o=await r.getItemsIdsWithGeometry(),a={[n]:new Set(o)};this.getGroupData(i,n),this.addGroupItems(i,n,a)}}};C(vp,"uuid","e25a7f3c-46c4-4a14-9d3d-5115f24ebeb7");let Rb=vp;class Ub{constructor(e,t){C(this,"enabled",!0),C(this,"components"),C(this,"onDisposed",new K),C(this,"mouse"),C(this,"world"),C(this,"debugMode",!1),C(this,"colorToModelId",new Map),C(this,"modelIdToColor",new Map),C(this,"renderTarget"),C(this,"renderTargetSize",new Me),C(this,"debugCanvas"),C(this,"debugContainer"),C(this,"colorMaterials",new Map),C(this,"originalMaterials",new Map),C(this,"originalLodColors",new Map),C(this,"colorsNeedUpdate",!0);const i=t.renderer;if(!i)throw new Error("A renderer is needed for the FastModelPicker to work!");this.world=t,this.mouse=new cp(i.three.domElement),this.components=e,this.setupRenderTarget(),this.setupFragmentListeners()}setupFragmentListeners(){const e=this.components.get(ue);e.list.onItemSet.add(()=>{this.colorsNeedUpdate=!0}),e.list.onItemDeleted.add(()=>{this.colorsNeedUpdate=!0})}setupRenderTarget(){const e=this.world.renderer.three.getSize(new Me);this.renderTargetSize.copy(e),this.renderTarget=new Kt(e.x,e.y),this.renderTarget.texture.format=As,this.renderTarget.texture.type=Dc,this.debugMode&&this.setupDebugCanvas(),this.world.renderer.onResize.add(t=>{this.renderTargetSize.copy(t),this.renderTarget.setSize(t.x,t.y),this.debugCanvas&&(this.debugCanvas.width=t.x,this.debugCanvas.height=t.y)})}setupDebugCanvas(){if(this.debugCanvas)return;const e=this.world.renderer.three.getSize(new Me);this.debugContainer=document.createElement("div"),this.debugContainer.style.position="fixed",this.debugContainer.style.top="10px",this.debugContainer.style.right="10px",this.debugContainer.style.width="300px",this.debugContainer.style.height="300px",this.debugContainer.style.border="2px solid #fff",this.debugContainer.style.backgroundColor="#000",this.debugContainer.style.zIndex="10000",this.debugContainer.style.pointerEvents="none",this.debugCanvas=document.createElement("canvas"),this.debugCanvas.width=e.x,this.debugCanvas.height=e.y,this.debugCanvas.style.width="100%",this.debugCanvas.style.height="100%",this.debugCanvas.style.imageRendering="pixelated",this.debugContainer.appendChild(this.debugCanvas),document.body.appendChild(this.debugContainer)}generateColorForModel(e){let t=0;for(let a=0;a<e.length;a++)t=(t<<5)-t+e.charCodeAt(a),t&=t;let i=Math.abs(t)%16777215;i===0&&(i=1);const n=i>>16&255||1,r=i>>8&255||1,o=i&255||1;return new me(n/255,r/255,o/255)}colorToId(e){const t=Math.round(e.r*255),i=Math.round(e.g*255),n=Math.round(e.b*255);return t<<16|i<<8|n}assignColors(){const e=this.components.get(ue);if(e.initialized){if(!this.colorsNeedUpdate){const t=new Set(e.list.keys()),i=new Set(this.modelIdToColor.keys());(t.size!==i.size||[...t].some(n=>!i.has(n)))&&(this.colorsNeedUpdate=!0)}if(this.colorsNeedUpdate){this.colorToModelId.clear(),this.modelIdToColor.clear();for(const t of this.colorMaterials.values())t.dispose();this.colorMaterials.clear();for(const[t]of e.list){const i=this.generateColorForModel(t),n=this.colorToId(i);this.colorToModelId.set(n,t),this.modelIdToColor.set(t,i);const r=new Ds({color:i,depthTest:!0,depthWrite:!0});this.colorMaterials.set(t,r)}this.colorsNeedUpdate=!1}}}applyColorMaterials(){const e=this.components.get(ue);if(e.initialized)for(const[t,i]of e.list){const n=this.colorMaterials.get(t);n&&i.object.traverse(r=>{if(r instanceof oe){if("isLODGeometry"in r.geometry){const o=r.material[0].uniforms.lodColor;this.originalLodColors.has(o)||this.originalLodColors.set(o,o.value),o.value=n.color;return}this.originalMaterials.has(r)||this.originalMaterials.set(r,r.material),r.material=n}})}}restoreOriginalMaterials(){for(const[e,t]of this.originalMaterials)e.material=t;for(const[e,t]of this.originalLodColors)e.value=t;this.originalMaterials.clear()}renderColorCoded(){if(!this.renderTarget||!this.world.renderer)throw new Error("Render target not initialized!");const e=this.world.renderer.three,t=this.world.scene.three,i=this.world.camera.three,n=e.getRenderTarget(),r=e.autoClear,o=new me,a=e.getClearAlpha();e.getClearColor(o),this.applyColorMaterials(),e.setRenderTarget(this.renderTarget),e.autoClear=!0,e.setClearColor(0,1),e.clear(!0,!0,!1),e.render(t,i),e.setRenderTarget(n),e.autoClear=r,e.setClearColor(o,a),this.restoreOriginalMaterials(),this.debugMode&&this.debugCanvas&&this.updateDebugCanvas()}updateDebugCanvas(){if(!this.debugCanvas||!this.renderTarget||!this.world.renderer)return;const e=this.world.renderer.three,t=this.renderTargetSize,i=new Uint8Array(t.x*t.y*4);e.readRenderTargetPixels(this.renderTarget,0,0,t.x,t.y,i);const n=this.debugCanvas.getContext("2d");if(!n)return;const r=n.createImageData(t.x,t.y),o=t.x*4;for(let a=0;a<t.y;a++){const l=a,c=t.y-1-a,h=l*o,d=c*o;r.data.set(i.subarray(h,h+o),d)}n.putImageData(r,0,0)}async getModelAt(e){if(!this.renderTarget||!this.world.renderer)throw new Error("Render target not initialized!");const t=this.components.get(ue);if(!t.initialized||t.list.size===0)return null;this.assignColors(),this.renderColorCoded();const i=e||this.mouse.position,n=this.renderTargetSize,r=Math.floor((i.x+1)*.5*n.x),o=Math.floor((i.y+1)*.5*(n.y-1)),a=Math.max(0,Math.min(n.x-1,r)),l=Math.max(0,Math.min(n.y-1,o)),c=this.world.renderer.three,h=new Uint8Array(4);c.readRenderTargetPixels(this.renderTarget,a,l,1,1,h);const d=h[0],u=h[1],p=h[2],g=d<<16|u<<8|p;return this.colorToModelId.get(g)||null}setDebugMode(e){this.debugMode=e,e?this.setupDebugCanvas():this.removeDebugCanvas()}removeDebugCanvas(){this.debugContainer&&(this.debugContainer.remove(),this.debugContainer=void 0,this.debugCanvas=void 0)}dispose(){this.mouse.dispose(),this.removeDebugCanvas();for(const e of this.colorMaterials.values())e.dispose();this.colorMaterials.clear(),this.renderTarget&&this.renderTarget.dispose(),this.colorToModelId.clear(),this.modelIdToColor.clear(),this.originalMaterials.clear(),this.originalLodColors.clear(),this.onDisposed.trigger(),this.onDisposed.reset()}}const yp=class _p extends Oe{constructor(e){super(e),C(this,"enabled",!0),C(this,"list",new Map),C(this,"onDisposed",new K),e.add(_p.uuid,this)}get(e){if(this.list.has(e.uuid))return this.list.get(e.uuid);const t=new Ub(this.components,e);return this.list.set(e.uuid,t),e.onDisposed.add(()=>{this.delete(e)}),t}delete(e){const t=this.list.get(e.uuid);t&&t.dispose(),this.list.delete(e.uuid)}dispose(){for(const[e,t]of this.list)t.dispose();this.list.clear(),this.onDisposed.trigger()}};C(yp,"uuid","4a82430c-7ff2-49ea-9401-60807502dad6");let Fb=yp;class jb{constructor(e,t){C(this,"enabled",!0),C(this,"components"),C(this,"onDisposed",new K),C(this,"mouse"),C(this,"three",new Oc),C(this,"world"),C(this,"useFastModelPicking",!1);const i=t.renderer;if(!i)throw new Error("A renderer is needed for the raycaster to work!");this.world=t,this.mouse=new cp(i.three.domElement),this.components=e}dispose(){this.mouse.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}castRayToObjects(e=Array.from(this.world.meshes),t=this.mouse.position){if(!this.world)throw new Error("A world is needed to cast rays!");const i=this.world.camera.three;return this.three.setFromCamera(t,i),this.intersect(e)}async castRay(e){const t=e==null?void 0:e.snappingClasses,i=(e==null?void 0:e.items)??Array.from(this.world.meshes),n=(e==null?void 0:e.position)??this.mouse.position;if(!this.world)throw new Error("A world is needed to cast rays!");const r=this.world.camera.three,o=this.components.get(ue),a=this.world.renderer.three.domElement,l=this.mouse.rawPosition;let c=null;if(o.initialized){if(this.useFastModelPicking){const d=await this.components.get(Fb).get(this.world).getModelAt(n);if(d){const u=o.list.get(d);if(u)if(t&&t.length>0){const p=await u.raycastWithSnapping({camera:r,dom:a,mouse:l,snappingClasses:t});p&&p.length>0?c=p[0]:c=await u.raycast({camera:r,dom:a,mouse:l})}else c=await u.raycast({camera:r,dom:a,mouse:l})}}else c=await o.raycast({camera:r,dom:a,mouse:l,snappingClasses:t});if(i.length===0)return c}this.three.setFromCamera(n,r);const h=this.intersect(i);return c?h&&h.distance<c.distance?h:c:h}castRayFromVector(e,t,i=Array.from(this.world.meshes)){return this.three.set(e,t),this.intersect(i)}intersect(e=Array.from(this.world.meshes)){const t=this.three.intersectObjects(e),i=this.filterClippingPlanes(t);return i.length>0?i[0]:null}filterClippingPlanes(e){if(!this.world.renderer)throw new Error("Renderer not found!");const t=this.world.renderer.three;if(!t.clippingPlanes)return e;const i=t.clippingPlanes;return e.length<=0||!i||(i==null?void 0:i.length)<=0?e:e.filter(n=>i.every(r=>r.distanceToPoint(n.point)>0))}}const wp=class xp extends Oe{constructor(e){super(e),C(this,"enabled",!0),C(this,"list",new Map),C(this,"onDisposed",new K),e.add(xp.uuid,this)}get(e){if(this.list.has(e.uuid))return this.list.get(e.uuid);const t=new jb(this.components,e);return this.list.set(e.uuid,t),e.onDisposed.add(()=>{this.delete(e)}),t}delete(e){const t=this.list.get(e.uuid);t&&t.dispose(),this.list.delete(e.uuid)}dispose(){for(const[e,t]of this.list)t.dispose();this.list.clear(),this.onDisposed.trigger()}};C(wp,"uuid","d5d8bdf0-db25-4952-b951-b643af207ace");let yt=wp;class Hb extends Nc{constructor(){super(...arguments),C(this,"onCameraChanged",new K),C(this,"meshes",new Set),C(this,"onAfterUpdate",new K),C(this,"onBeforeUpdate",new K),C(this,"onDisposed",new K),C(this,"isDisposing",!1),C(this,"enabled",!0),C(this,"_dynamicAnchor",!1),C(this,"uuid",ot.create()),C(this,"name"),C(this,"_scene"),C(this,"_camera"),C(this,"_renderer",null),C(this,"onPointerDown",async e=>{if(!this.camera.hasCameraControls())throw new Error("World: can't set dynamic anchor if the camera doesn't have controls.");const t=await this.components.get(yt).get(this).castRay();t&&t.point&&e.button===0&&this.camera.controls.setOrbitPoint(t.point.x,t.point.y,t.point.z)}),C(this,"_defaultCamera")}set dynamicAnchor(e){var t;const i=(t=this.renderer)==null?void 0:t.three.domElement.parentElement;if(!i)throw new Error("World: the renderer must have a parentElement to set dynamic anchoring.");e?(this.camera.controls&&(this.camera.controls.minDistance=.01),i.addEventListener("pointerdown",this.onPointerDown)):i.removeEventListener("pointerdown",this.onPointerDown)}get dynamicAnchor(){return this._dynamicAnchor}get defaultCamera(){if(!this._defaultCamera)throw new Error("World: there is no default camera defined.");return this._defaultCamera}set defaultCamera(e){this._defaultCamera=e}get scene(){if(!this._scene)throw new Error("No scene initialized!");return this._scene}set scene(e){this._scene=e,e.worlds.set(this.uuid,this),e.currentWorld=this,e.onWorldChanged.trigger({world:this,action:"added"})}get camera(){if(!this._camera)throw new Error("No camera initialized!");return this._camera}set camera(e){this._camera||(this.defaultCamera=e),this._camera=e,e.currentWorld=this,this.onCameraChanged.trigger(e)}get renderer(){return this._renderer}set renderer(e){this._renderer=e,e&&(e.worlds.set(this.uuid,this),e.currentWorld=this,e.onWorldChanged.trigger({world:this,action:"added"}))}useDefaultCamera(){this.camera=this.defaultCamera}update(e){this.enabled&&(!this._scene||!this._camera||(this.scene.currentWorld=this,this.camera.currentWorld=this,this.renderer&&(this.renderer.currentWorld=this),this.onBeforeUpdate.trigger(),this.scene.isUpdateable()&&this.scene.update(e),this.camera.isUpdateable()&&this.camera.update(e),this.renderer&&this.renderer.update(e),this.onAfterUpdate.trigger()))}dispose(e=!0){if(this.enabled=!1,this.isDisposing=!0,this.scene.onWorldChanged.trigger({world:this,action:"removed"}),this.camera.onWorldChanged.trigger({world:this,action:"removed"}),this.renderer&&this.renderer.onWorldChanged.trigger({world:this,action:"removed"}),e){const t=this.components.get(ui);this.scene.dispose(),this.camera.isDisposeable()&&this.camera.dispose(),this.renderer&&this.renderer.dispose();for(const i of this.meshes)t.destroy(i);this.meshes.clear()}this._scene=null,this._camera=null,this._renderer=null,this.components.get(Ap).list.delete(this.uuid),this.onDisposed.trigger(),this.onDisposed.reset()}}var jo=(s=>(s[s.MANUAL=0]="MANUAL",s[s.AUTO=1]="AUTO",s))(jo||{});class Vb extends bv{constructor(e,t,i){super(e),C(this,"enabled",!0),C(this,"container"),C(this,"three"),C(this,"mode",1),C(this,"needsUpdate",!1),C(this,"_canvas"),C(this,"_parameters"),C(this,"_resizeObserver",null),C(this,"onContainerUpdated",new K),C(this,"_resizing",!1),C(this,"resize",o=>{if(this._resizing)return;this._resizing=!0,this.onContainerUpdated.trigger();const a=o?o.x:this.container.clientWidth,l=o?o.y:this.container.clientHeight;this.three.setSize(a,l),this.onResize.trigger(new Me(a,l)),this._resizing=!1}),C(this,"resizeEvent",()=>{this.resize()}),C(this,"onContextLost",o=>{o.preventDefault(),this.enabled=!1}),C(this,"onContextBack",()=>{this.three.setRenderTarget(null),this.three.dispose(),this.three=new Th({canvas:this._canvas,antialias:!0,alpha:!0,...this._parameters}),this.enabled=!0}),this.container=t,this._parameters=i,this.needsUpdate=!0,this.three=new Th({antialias:!0,alpha:!0,...i}),this.three.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.setupRenderer(),this.setupEvents(!0),this.resize(),this._canvas=this.three.domElement;const n=this.three.getContext(),{canvas:r}=n;r.addEventListener("webglcontextlost",this.onContextLost,!1),r.addEventListener("webglcontextrestored",this.onContextBack,!1)}update(){if(!this.needsUpdate||!this.enabled||!this.currentWorld||this.mode===0&&!this.needsUpdate)return;this.needsUpdate=!1,this.onBeforeUpdate.trigger(this);const e=this.currentWorld.scene.three,t=this.currentWorld.camera.three;this.three.render(e,t),this.onAfterUpdate.trigger(this)}dispose(){this.enabled=!1,this.setupEvents(!1),this.three.domElement.remove(),this.three.forceContextLoss(),this.three.dispose(),this.onResize.reset(),this.onAfterUpdate.reset(),this.onBeforeUpdate.reset(),this.onDisposed.trigger(),this.onDisposed.reset()}getSize(){return new Me(this.three.domElement.clientWidth,this.three.domElement.clientHeight)}setupEvents(e){const t=this.three.domElement.parentElement;if(!t)throw new Error("This renderer needs to have an HTML container!");this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),window.removeEventListener("resize",this.resizeEvent),e&&(this._resizeObserver=new ResizeObserver(this.resizeEvent),this._resizeObserver.observe(t),window.addEventListener("resize",this.resizeEvent))}setupRenderer(){this.three.localClippingEnabled=!0,this.container&&this.container.appendChild(this.three.domElement),this.onContainerUpdated.trigger()}}/*!
 * camera-controls
 * https://github.com/yomotsu/camera-controls
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */const Ne={LEFT:1,RIGHT:2,MIDDLE:4},j=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,SCREEN_PAN:4,OFFSET:8,DOLLY:16,ZOOM:32,TOUCH_ROTATE:64,TOUCH_TRUCK:128,TOUCH_SCREEN_PAN:256,TOUCH_OFFSET:512,TOUCH_DOLLY:1024,TOUCH_ZOOM:2048,TOUCH_DOLLY_TRUCK:4096,TOUCH_DOLLY_SCREEN_PAN:8192,TOUCH_DOLLY_OFFSET:16384,TOUCH_DOLLY_ROTATE:32768,TOUCH_ZOOM_TRUCK:65536,TOUCH_ZOOM_OFFSET:131072,TOUCH_ZOOM_SCREEN_PAN:262144,TOUCH_ZOOM_ROTATE:524288}),Us={NONE:0,IN:1,OUT:-1};function us(s){return s.isPerspectiveCamera}function Ni(s){return s.isOrthographicCamera}const Fs=Math.PI*2,Lh=Math.PI/2,Cp=1e-5,Wn=Math.PI/180;function Yt(s,e,t){return Math.max(e,Math.min(t,s))}function ze(s,e=Cp){return Math.abs(s)<e}function Se(s,e,t=Cp){return ze(s-e,t)}function $h(s,e){return Math.round(s/e)*e}function qn(s){return isFinite(s)?s:s<0?-Number.MAX_VALUE:Number.MAX_VALUE}function Yn(s){return Math.abs(s)<Number.MAX_VALUE?s:s*(1/0)}function io(s,e,t,i,n=1/0,r){i=Math.max(1e-4,i);const o=2/i,a=o*r,l=1/(1+a+.48*a*a+.235*a*a*a);let c=s-e;const h=e,d=n*i;c=Yt(c,-d,d),e=s-c;const u=(t.value+o*c)*r;t.value=(t.value-o*u)*l;let p=e+(c+u)*l;return h-s>0==p>h&&(p=h,t.value=(p-h)/r),p}function Nh(s,e,t,i,n=1/0,r,o){i=Math.max(1e-4,i);const a=2/i,l=a*r,c=1/(1+l+.48*l*l+.235*l*l*l);let h=e.x,d=e.y,u=e.z,p=s.x-h,g=s.y-d,m=s.z-u;const v=h,f=d,b=u,y=n*i,w=y*y,S=p*p+g*g+m*m;if(S>w){const $=Math.sqrt(S);p=p/$*y,g=g/$*y,m=m/$*y}h=s.x-p,d=s.y-g,u=s.z-m;const T=(t.x+a*p)*r,P=(t.y+a*g)*r,D=(t.z+a*m)*r;t.x=(t.x-a*T)*c,t.y=(t.y-a*P)*c,t.z=(t.z-a*D)*c,o.x=h+(p+T)*c,o.y=d+(g+P)*c,o.z=u+(m+D)*c;const M=v-s.x,I=f-s.y,R=b-s.z,A=o.x-v,O=o.y-f,_=o.z-b;return M*A+I*O+R*_>0&&(o.x=v,o.y=f,o.z=b,t.x=(o.x-v)/r,t.y=(o.y-f)/r,t.z=(o.z-b)/r),o}function Ja(s,e){e.set(0,0),s.forEach(t=>{e.x+=t.clientX,e.y+=t.clientY}),e.x/=s.length,e.y/=s.length}function el(s,e){return Ni(s)?(console.warn(`${e} is not supported in OrthographicCamera`),!0):!1}class Wb{constructor(){this._listeners={}}addEventListener(e,t){const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}removeAllEventListeners(e){if(!e){this._listeners={};return}Array.isArray(this._listeners[e])&&(this._listeners[e].length=0)}dispatchEvent(e){const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e)}}}var tl;const qb="2.10.1",so=1/8,Yb=/Mac/.test((tl=globalThis==null?void 0:globalThis.navigator)===null||tl===void 0?void 0:tl.platform);let ge,Bh,no,il,bt,ve,ye,js,Gn,ri,oi,ps,Rh,Uh,kt,Xn,Hs,Fh,sl,jh,nl,rl,ro,St=class Vl extends Wb{static install(e){ge=e.THREE,Bh=Object.freeze(new ge.Vector3(0,0,0)),no=Object.freeze(new ge.Vector3(0,1,0)),il=Object.freeze(new ge.Vector3(0,0,1)),bt=new ge.Vector2,ve=new ge.Vector3,ye=new ge.Vector3,js=new ge.Vector3,Gn=new ge.Vector3,ri=new ge.Vector3,oi=new ge.Vector3,ps=new ge.Vector3,Rh=new ge.Vector3,Uh=new ge.Vector3,kt=new ge.Spherical,Xn=new ge.Spherical,Hs=new ge.Box3,Fh=new ge.Box3,sl=new ge.Sphere,jh=new ge.Quaternion,nl=new ge.Quaternion,rl=new ge.Matrix4,ro=new ge.Raycaster}static get ACTION(){return j}set verticalDragToForward(e){console.warn("camera-controls: `verticalDragToForward` was removed. Use `mouseButtons.left = CameraControls.ACTION.SCREEN_PAN` instead.")}constructor(e,t){super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=Number.EPSILON,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.smoothTime=.25,this.draggingSmoothTime=.125,this.maxSpeed=1/0,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.dollyDragInverted=!1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=j.NONE,this._viewport=null,this._changedDolly=0,this._changedZoom=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._isDragging=!1,this._dragNeedsUpdate=!0,this._activePointers=[],this._lockedPointer=null,this._interactiveArea=new DOMRect(0,0,1,1),this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._isUserControllingOffset=!1,this._isUserControllingZoom=!1,this._lastDollyDirection=Us.NONE,this._thetaVelocity={value:0},this._phiVelocity={value:0},this._radiusVelocity={value:0},this._targetVelocity=new ge.Vector3,this._focalOffsetVelocity=new ge.Vector3,this._zoomVelocity={value:0},this._truckInternal=(f,b,y,w)=>{let S,T;if(us(this._camera)){const P=ve.copy(this._camera.position).sub(this._target),D=this._camera.getEffectiveFOV()*Wn,M=P.length()*Math.tan(D*.5);S=this.truckSpeed*f*M/this._elementRect.height,T=this.truckSpeed*b*M/this._elementRect.height}else if(Ni(this._camera)){const P=this._camera;S=this.truckSpeed*f*(P.right-P.left)/P.zoom/this._elementRect.width,T=this.truckSpeed*b*(P.top-P.bottom)/P.zoom/this._elementRect.height}else return;w?(y?this.setFocalOffset(this._focalOffsetEnd.x+S,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(S,0,!0),this.forward(-T,!0)):y?this.setFocalOffset(this._focalOffsetEnd.x+S,this._focalOffsetEnd.y+T,this._focalOffsetEnd.z,!0):this.truck(S,T,!0)},this._rotateInternal=(f,b)=>{const y=Fs*this.azimuthRotateSpeed*f/this._elementRect.height,w=Fs*this.polarRotateSpeed*b/this._elementRect.height;this.rotate(y,w,!0)},this._dollyInternal=(f,b,y)=>{const w=Math.pow(.95,-f*this.dollySpeed),S=this._sphericalEnd.radius,T=this._sphericalEnd.radius*w,P=Yt(T,this.minDistance,this.maxDistance),D=P-T;this.infinityDolly&&this.dollyToCursor?this._dollyToNoClamp(T,!0):this.infinityDolly&&!this.dollyToCursor?(this.dollyInFixed(D,!0),this._dollyToNoClamp(P,!0)):this._dollyToNoClamp(P,!0),this.dollyToCursor&&(this._changedDolly+=(this.infinityDolly?T:P)-S,this._dollyControlCoord.set(b,y)),this._lastDollyDirection=Math.sign(-f)},this._zoomInternal=(f,b,y)=>{const w=Math.pow(.95,f*this.dollySpeed),S=this._zoom,T=this._zoom*w;this.zoomTo(T,!0),this.dollyToCursor&&(this._changedZoom+=T-S,this._dollyControlCoord.set(b,y))},typeof ge>"u"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new ge.Quaternion().setFromUnitVectors(this._camera.up,no),this._yAxisUpSpaceInverse=this._yAxisUpSpace.clone().invert(),this._state=j.NONE,this._target=new ge.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new ge.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new ge.Spherical().setFromVector3(ve.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._lastDistance=this._spherical.radius,this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._lastZoom=this._zoom,this._nearPlaneCorners=[new ge.Vector3,new ge.Vector3,new ge.Vector3,new ge.Vector3],this._updateNearPlaneCorners(),this._boundary=new ge.Box3(new ge.Vector3(-1/0,-1/0,-1/0),new ge.Vector3(1/0,1/0,1/0)),this._cameraUp0=this._camera.up.clone(),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlCoord=new ge.Vector2,this.mouseButtons={left:j.ROTATE,middle:j.DOLLY,right:j.TRUCK,wheel:us(this._camera)?j.DOLLY:Ni(this._camera)?j.ZOOM:j.NONE},this.touches={one:j.TOUCH_ROTATE,two:us(this._camera)?j.TOUCH_DOLLY_TRUCK:Ni(this._camera)?j.TOUCH_ZOOM_TRUCK:j.NONE,three:j.TOUCH_TRUCK};const i=new ge.Vector2,n=new ge.Vector2,r=new ge.Vector2,o=f=>{if(!this._enabled||!this._domElement)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){const w=this._domElement.getBoundingClientRect(),S=f.clientX/w.width,T=f.clientY/w.height;if(S<this._interactiveArea.left||S>this._interactiveArea.right||T<this._interactiveArea.top||T>this._interactiveArea.bottom)return}const b=f.pointerType!=="mouse"?null:(f.buttons&Ne.LEFT)===Ne.LEFT?Ne.LEFT:(f.buttons&Ne.MIDDLE)===Ne.MIDDLE?Ne.MIDDLE:(f.buttons&Ne.RIGHT)===Ne.RIGHT?Ne.RIGHT:null;if(b!==null){const w=this._findPointerByMouseButton(b);w&&this._disposePointer(w)}if((f.buttons&Ne.LEFT)===Ne.LEFT&&this._lockedPointer)return;const y={pointerId:f.pointerId,clientX:f.clientX,clientY:f.clientY,deltaX:0,deltaY:0,mouseButton:b};this._activePointers.push(y),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.ownerDocument.addEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",l),this._isDragging=!0,u(f)},a=f=>{f.cancelable&&f.preventDefault();const b=f.pointerId,y=this._lockedPointer||this._findPointerById(b);if(y){if(y.clientX=f.clientX,y.clientY=f.clientY,y.deltaX=f.movementX,y.deltaY=f.movementY,this._state=0,f.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else(!this._isDragging&&this._lockedPointer||this._isDragging&&(f.buttons&Ne.LEFT)===Ne.LEFT)&&(this._state=this._state|this.mouseButtons.left),this._isDragging&&(f.buttons&Ne.MIDDLE)===Ne.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),this._isDragging&&(f.buttons&Ne.RIGHT)===Ne.RIGHT&&(this._state=this._state|this.mouseButtons.right);p()}},l=f=>{const b=this._findPointerById(f.pointerId);if(!(b&&b===this._lockedPointer)){if(b&&this._disposePointer(b),f.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=j.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=j.NONE;g()}};let c=-1;const h=f=>{if(!this._domElement||!this._enabled||this.mouseButtons.wheel===j.NONE)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){const T=this._domElement.getBoundingClientRect(),P=f.clientX/T.width,D=f.clientY/T.height;if(P<this._interactiveArea.left||P>this._interactiveArea.right||D<this._interactiveArea.top||D>this._interactiveArea.bottom)return}if(f.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===j.ROTATE||this.mouseButtons.wheel===j.TRUCK){const T=performance.now();c-T<1e3&&this._getClientRect(this._elementRect),c=T}const b=Yb?-1:-3,y=f.deltaMode===1||f.ctrlKey?f.deltaY/b:f.deltaY/(b*10),w=this.dollyToCursor?(f.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,S=this.dollyToCursor?(f.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case j.ROTATE:{this._rotateInternal(f.deltaX,f.deltaY),this._isUserControllingRotate=!0;break}case j.TRUCK:{this._truckInternal(f.deltaX,f.deltaY,!1,!1),this._isUserControllingTruck=!0;break}case j.SCREEN_PAN:{this._truckInternal(f.deltaX,f.deltaY,!1,!0),this._isUserControllingTruck=!0;break}case j.OFFSET:{this._truckInternal(f.deltaX,f.deltaY,!0,!1),this._isUserControllingOffset=!0;break}case j.DOLLY:{this._dollyInternal(-y,w,S),this._isUserControllingDolly=!0;break}case j.ZOOM:{this._zoomInternal(-y,w,S),this._isUserControllingZoom=!0;break}}this.dispatchEvent({type:"control"})},d=f=>{if(!(!this._domElement||!this._enabled)){if(this.mouseButtons.right===Vl.ACTION.NONE){const b=f instanceof PointerEvent?f.pointerId:0,y=this._findPointerById(b);y&&this._disposePointer(y),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l);return}f.preventDefault()}},u=f=>{if(this._enabled){if(Ja(this._activePointers,bt),this._getClientRect(this._elementRect),i.copy(bt),n.copy(bt),this._activePointers.length>=2){const b=bt.x-this._activePointers[1].clientX,y=bt.y-this._activePointers[1].clientY,w=Math.sqrt(b*b+y*y);r.set(0,w);const S=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,T=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;n.set(S,T)}if(this._state=0,!f)this._lockedPointer&&(this._state=this._state|this.mouseButtons.left);else if("pointerType"in f&&f.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else!this._lockedPointer&&(f.buttons&Ne.LEFT)===Ne.LEFT&&(this._state=this._state|this.mouseButtons.left),(f.buttons&Ne.MIDDLE)===Ne.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(f.buttons&Ne.RIGHT)===Ne.RIGHT&&(this._state=this._state|this.mouseButtons.right);((this._state&j.ROTATE)===j.ROTATE||(this._state&j.TOUCH_ROTATE)===j.TOUCH_ROTATE||(this._state&j.TOUCH_DOLLY_ROTATE)===j.TOUCH_DOLLY_ROTATE||(this._state&j.TOUCH_ZOOM_ROTATE)===j.TOUCH_ZOOM_ROTATE)&&(this._sphericalEnd.theta=this._spherical.theta,this._sphericalEnd.phi=this._spherical.phi,this._thetaVelocity.value=0,this._phiVelocity.value=0),((this._state&j.TRUCK)===j.TRUCK||(this._state&j.SCREEN_PAN)===j.SCREEN_PAN||(this._state&j.TOUCH_TRUCK)===j.TOUCH_TRUCK||(this._state&j.TOUCH_SCREEN_PAN)===j.TOUCH_SCREEN_PAN||(this._state&j.TOUCH_DOLLY_TRUCK)===j.TOUCH_DOLLY_TRUCK||(this._state&j.TOUCH_DOLLY_SCREEN_PAN)===j.TOUCH_DOLLY_SCREEN_PAN||(this._state&j.TOUCH_ZOOM_TRUCK)===j.TOUCH_ZOOM_TRUCK||(this._state&j.TOUCH_ZOOM_SCREEN_PAN)===j.TOUCH_DOLLY_SCREEN_PAN)&&(this._targetEnd.copy(this._target),this._targetVelocity.set(0,0,0)),((this._state&j.DOLLY)===j.DOLLY||(this._state&j.TOUCH_DOLLY)===j.TOUCH_DOLLY||(this._state&j.TOUCH_DOLLY_TRUCK)===j.TOUCH_DOLLY_TRUCK||(this._state&j.TOUCH_DOLLY_SCREEN_PAN)===j.TOUCH_DOLLY_SCREEN_PAN||(this._state&j.TOUCH_DOLLY_OFFSET)===j.TOUCH_DOLLY_OFFSET||(this._state&j.TOUCH_DOLLY_ROTATE)===j.TOUCH_DOLLY_ROTATE)&&(this._sphericalEnd.radius=this._spherical.radius,this._radiusVelocity.value=0),((this._state&j.ZOOM)===j.ZOOM||(this._state&j.TOUCH_ZOOM)===j.TOUCH_ZOOM||(this._state&j.TOUCH_ZOOM_TRUCK)===j.TOUCH_ZOOM_TRUCK||(this._state&j.TOUCH_ZOOM_SCREEN_PAN)===j.TOUCH_ZOOM_SCREEN_PAN||(this._state&j.TOUCH_ZOOM_OFFSET)===j.TOUCH_ZOOM_OFFSET||(this._state&j.TOUCH_ZOOM_ROTATE)===j.TOUCH_ZOOM_ROTATE)&&(this._zoomEnd=this._zoom,this._zoomVelocity.value=0),((this._state&j.OFFSET)===j.OFFSET||(this._state&j.TOUCH_OFFSET)===j.TOUCH_OFFSET||(this._state&j.TOUCH_DOLLY_OFFSET)===j.TOUCH_DOLLY_OFFSET||(this._state&j.TOUCH_ZOOM_OFFSET)===j.TOUCH_ZOOM_OFFSET)&&(this._focalOffsetEnd.copy(this._focalOffset),this._focalOffsetVelocity.set(0,0,0)),this.dispatchEvent({type:"controlstart"})}},p=()=>{if(!this._enabled||!this._dragNeedsUpdate)return;this._dragNeedsUpdate=!1,Ja(this._activePointers,bt);const f=this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement?this._lockedPointer||this._activePointers[0]:null,b=f?-f.deltaX:n.x-bt.x,y=f?-f.deltaY:n.y-bt.y;if(n.copy(bt),((this._state&j.ROTATE)===j.ROTATE||(this._state&j.TOUCH_ROTATE)===j.TOUCH_ROTATE||(this._state&j.TOUCH_DOLLY_ROTATE)===j.TOUCH_DOLLY_ROTATE||(this._state&j.TOUCH_ZOOM_ROTATE)===j.TOUCH_ZOOM_ROTATE)&&(this._rotateInternal(b,y),this._isUserControllingRotate=!0),(this._state&j.DOLLY)===j.DOLLY||(this._state&j.ZOOM)===j.ZOOM){const w=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,S=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0,T=this.dollyDragInverted?-1:1;(this._state&j.DOLLY)===j.DOLLY?(this._dollyInternal(T*y*so,w,S),this._isUserControllingDolly=!0):(this._zoomInternal(T*y*so,w,S),this._isUserControllingZoom=!0)}if((this._state&j.TOUCH_DOLLY)===j.TOUCH_DOLLY||(this._state&j.TOUCH_ZOOM)===j.TOUCH_ZOOM||(this._state&j.TOUCH_DOLLY_TRUCK)===j.TOUCH_DOLLY_TRUCK||(this._state&j.TOUCH_ZOOM_TRUCK)===j.TOUCH_ZOOM_TRUCK||(this._state&j.TOUCH_DOLLY_SCREEN_PAN)===j.TOUCH_DOLLY_SCREEN_PAN||(this._state&j.TOUCH_ZOOM_SCREEN_PAN)===j.TOUCH_ZOOM_SCREEN_PAN||(this._state&j.TOUCH_DOLLY_OFFSET)===j.TOUCH_DOLLY_OFFSET||(this._state&j.TOUCH_ZOOM_OFFSET)===j.TOUCH_ZOOM_OFFSET||(this._state&j.TOUCH_DOLLY_ROTATE)===j.TOUCH_DOLLY_ROTATE||(this._state&j.TOUCH_ZOOM_ROTATE)===j.TOUCH_ZOOM_ROTATE){const w=bt.x-this._activePointers[1].clientX,S=bt.y-this._activePointers[1].clientY,T=Math.sqrt(w*w+S*S),P=r.y-T;r.set(0,T);const D=this.dollyToCursor?(n.x-this._elementRect.x)/this._elementRect.width*2-1:0,M=this.dollyToCursor?(n.y-this._elementRect.y)/this._elementRect.height*-2+1:0;(this._state&j.TOUCH_DOLLY)===j.TOUCH_DOLLY||(this._state&j.TOUCH_DOLLY_ROTATE)===j.TOUCH_DOLLY_ROTATE||(this._state&j.TOUCH_DOLLY_TRUCK)===j.TOUCH_DOLLY_TRUCK||(this._state&j.TOUCH_DOLLY_SCREEN_PAN)===j.TOUCH_DOLLY_SCREEN_PAN||(this._state&j.TOUCH_DOLLY_OFFSET)===j.TOUCH_DOLLY_OFFSET?(this._dollyInternal(P*so,D,M),this._isUserControllingDolly=!0):(this._zoomInternal(P*so,D,M),this._isUserControllingZoom=!0)}((this._state&j.TRUCK)===j.TRUCK||(this._state&j.TOUCH_TRUCK)===j.TOUCH_TRUCK||(this._state&j.TOUCH_DOLLY_TRUCK)===j.TOUCH_DOLLY_TRUCK||(this._state&j.TOUCH_ZOOM_TRUCK)===j.TOUCH_ZOOM_TRUCK)&&(this._truckInternal(b,y,!1,!1),this._isUserControllingTruck=!0),((this._state&j.SCREEN_PAN)===j.SCREEN_PAN||(this._state&j.TOUCH_SCREEN_PAN)===j.TOUCH_SCREEN_PAN||(this._state&j.TOUCH_DOLLY_SCREEN_PAN)===j.TOUCH_DOLLY_SCREEN_PAN||(this._state&j.TOUCH_ZOOM_SCREEN_PAN)===j.TOUCH_ZOOM_SCREEN_PAN)&&(this._truckInternal(b,y,!1,!0),this._isUserControllingTruck=!0),((this._state&j.OFFSET)===j.OFFSET||(this._state&j.TOUCH_OFFSET)===j.TOUCH_OFFSET||(this._state&j.TOUCH_DOLLY_OFFSET)===j.TOUCH_DOLLY_OFFSET||(this._state&j.TOUCH_ZOOM_OFFSET)===j.TOUCH_ZOOM_OFFSET)&&(this._truckInternal(b,y,!0,!1),this._isUserControllingOffset=!0),this.dispatchEvent({type:"control"})},g=()=>{Ja(this._activePointers,bt),n.copy(bt),this._dragNeedsUpdate=!1,(this._activePointers.length===0||this._activePointers.length===1&&this._activePointers[0]===this._lockedPointer)&&(this._isDragging=!1),this._activePointers.length===0&&this._domElement&&(this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this.dispatchEvent({type:"controlend"}))};this.lockPointer=()=>{!this._enabled||!this._domElement||(this.cancel(),this._lockedPointer={pointerId:-1,clientX:0,clientY:0,deltaX:0,deltaY:0,mouseButton:null},this._activePointers.push(this._lockedPointer),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.requestPointerLock(),this._domElement.ownerDocument.addEventListener("pointerlockchange",m),this._domElement.ownerDocument.addEventListener("pointerlockerror",v),this._domElement.ownerDocument.addEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",l),u())},this.unlockPointer=()=>{var f,b,y;this._lockedPointer!==null&&(this._disposePointer(this._lockedPointer),this._lockedPointer=null),(f=this._domElement)===null||f===void 0||f.ownerDocument.exitPointerLock(),(b=this._domElement)===null||b===void 0||b.ownerDocument.removeEventListener("pointerlockchange",m),(y=this._domElement)===null||y===void 0||y.ownerDocument.removeEventListener("pointerlockerror",v),this.cancel()};const m=()=>{this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement||this.unlockPointer()},v=()=>{this.unlockPointer()};this._addAllEventListeners=f=>{this._domElement=f,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._domElement.addEventListener("pointerdown",o),this._domElement.addEventListener("pointercancel",l),this._domElement.addEventListener("wheel",h,{passive:!1}),this._domElement.addEventListener("contextmenu",d)},this._removeAllEventListeners=()=>{this._domElement&&(this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="",this._domElement.removeEventListener("pointerdown",o),this._domElement.removeEventListener("pointercancel",l),this._domElement.removeEventListener("wheel",h,{passive:!1}),this._domElement.removeEventListener("contextmenu",d),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.ownerDocument.removeEventListener("pointerlockchange",m),this._domElement.ownerDocument.removeEventListener("pointerlockerror",v))},this.cancel=()=>{this._state!==j.NONE&&(this._state=j.NONE,this._activePointers.length=0,g())},t&&this.connect(t),this.update(0)}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._domElement&&(e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect=""))}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}set interactiveArea(e){this._interactiveArea.width=Yt(e.width,0,1),this._interactiveArea.height=Yt(e.height,0,1),this._interactiveArea.x=Yt(e.x,0,1-this._interactiveArea.width),this._interactiveArea.y=Yt(e.y,0,1-this._interactiveArea.height)}addEventListener(e,t){super.addEventListener(e,t)}removeEventListener(e,t){super.removeEventListener(e,t)}rotate(e,t,i=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+t,i)}rotateAzimuthTo(e,t=!1){return this.rotateTo(e,this._sphericalEnd.phi,t)}rotatePolarTo(e,t=!1){return this.rotateTo(this._sphericalEnd.theta,e,t)}rotateTo(e,t,i=!1){this._isUserControllingRotate=!1;const n=Yt(e,this.minAzimuthAngle,this.maxAzimuthAngle),r=Yt(t,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=n,this._sphericalEnd.phi=r,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,i||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);const o=!i||Se(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&Se(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(o)}dolly(e,t=!1){return this.dollyTo(this._sphericalEnd.radius-e,t)}dollyTo(e,t=!1){return this._isUserControllingDolly=!1,this._lastDollyDirection=Us.NONE,this._changedDolly=0,this._dollyToNoClamp(Yt(e,this.minDistance,this.maxDistance),t)}_dollyToNoClamp(e,t=!1){const i=this._sphericalEnd.radius;if(this.colliderMeshes.length>=1){const r=this._collisionTest(),o=Se(r,this._spherical.radius);if(!(i>e)&&o)return Promise.resolve();this._sphericalEnd.radius=Math.min(e,r)}else this._sphericalEnd.radius=e;this._needsUpdate=!0,t||(this._spherical.radius=this._sphericalEnd.radius);const n=!t||Se(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(n)}dollyInFixed(e,t=!1){this._targetEnd.add(this._getCameraDirection(Gn).multiplyScalar(e)),t||this._target.copy(this._targetEnd);const i=!t||Se(this._target.x,this._targetEnd.x,this.restThreshold)&&Se(this._target.y,this._targetEnd.y,this.restThreshold)&&Se(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(i)}zoom(e,t=!1){return this.zoomTo(this._zoomEnd+e,t)}zoomTo(e,t=!1){this._isUserControllingZoom=!1,this._zoomEnd=Yt(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,t||(this._zoom=this._zoomEnd);const i=!t||Se(this._zoom,this._zoomEnd,this.restThreshold);return this._changedZoom=0,this._createOnRestPromise(i)}pan(e,t,i=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,t,i)}truck(e,t,i=!1){this._camera.updateMatrix(),ri.setFromMatrixColumn(this._camera.matrix,0),oi.setFromMatrixColumn(this._camera.matrix,1),ri.multiplyScalar(e),oi.multiplyScalar(-t);const n=ve.copy(ri).add(oi),r=ye.copy(this._targetEnd).add(n);return this.moveTo(r.x,r.y,r.z,i)}forward(e,t=!1){ve.setFromMatrixColumn(this._camera.matrix,0),ve.crossVectors(this._camera.up,ve),ve.multiplyScalar(e);const i=ye.copy(this._targetEnd).add(ve);return this.moveTo(i.x,i.y,i.z,t)}elevate(e,t=!1){return ve.copy(this._camera.up).multiplyScalar(e),this.moveTo(this._targetEnd.x+ve.x,this._targetEnd.y+ve.y,this._targetEnd.z+ve.z,t)}moveTo(e,t,i,n=!1){this._isUserControllingTruck=!1;const r=ve.set(e,t,i).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,r,this.boundaryFriction),this._needsUpdate=!0,n||this._target.copy(this._targetEnd);const o=!n||Se(this._target.x,this._targetEnd.x,this.restThreshold)&&Se(this._target.y,this._targetEnd.y,this.restThreshold)&&Se(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(o)}lookInDirectionOf(e,t,i,n=!1){const r=ve.set(e,t,i).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);return this.setPosition(r.x,r.y,r.z,n)}fitToBox(e,t,{cover:i=!1,paddingLeft:n=0,paddingRight:r=0,paddingBottom:o=0,paddingTop:a=0}={}){const l=[],c=e.isBox3?Hs.copy(e):Hs.setFromObject(e);c.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());const h=$h(this._sphericalEnd.theta,Lh),d=$h(this._sphericalEnd.phi,Lh);l.push(this.rotateTo(h,d,t));const u=ve.setFromSpherical(this._sphericalEnd).normalize(),p=jh.setFromUnitVectors(u,il),g=Se(Math.abs(u.y),1);g&&p.multiply(nl.setFromAxisAngle(no,h)),p.multiply(this._yAxisUpSpaceInverse);const m=Fh.makeEmpty();ye.copy(c.min).applyQuaternion(p),m.expandByPoint(ye),ye.copy(c.min).setX(c.max.x).applyQuaternion(p),m.expandByPoint(ye),ye.copy(c.min).setY(c.max.y).applyQuaternion(p),m.expandByPoint(ye),ye.copy(c.max).setZ(c.min.z).applyQuaternion(p),m.expandByPoint(ye),ye.copy(c.min).setZ(c.max.z).applyQuaternion(p),m.expandByPoint(ye),ye.copy(c.max).setY(c.min.y).applyQuaternion(p),m.expandByPoint(ye),ye.copy(c.max).setX(c.min.x).applyQuaternion(p),m.expandByPoint(ye),ye.copy(c.max).applyQuaternion(p),m.expandByPoint(ye),m.min.x-=n,m.min.y-=o,m.max.x+=r,m.max.y+=a,p.setFromUnitVectors(il,u),g&&p.premultiply(nl.invert()),p.premultiply(this._yAxisUpSpace);const v=m.getSize(ve),f=m.getCenter(ye).applyQuaternion(p);if(us(this._camera)){const b=this.getDistanceToFitBox(v.x,v.y,v.z,i);l.push(this.moveTo(f.x,f.y,f.z,t)),l.push(this.dollyTo(b,t)),l.push(this.setFocalOffset(0,0,0,t))}else if(Ni(this._camera)){const b=this._camera,y=b.right-b.left,w=b.top-b.bottom,S=i?Math.max(y/v.x,w/v.y):Math.min(y/v.x,w/v.y);l.push(this.moveTo(f.x,f.y,f.z,t)),l.push(this.zoomTo(S,t)),l.push(this.setFocalOffset(0,0,0,t))}return Promise.all(l)}fitToSphere(e,t){const i=[],n="isObject3D"in e?Vl.createBoundingSphere(e,sl):sl.copy(e);if(i.push(this.moveTo(n.center.x,n.center.y,n.center.z,t)),us(this._camera)){const r=this.getDistanceToFitSphere(n.radius);i.push(this.dollyTo(r,t))}else if(Ni(this._camera)){const r=this._camera.right-this._camera.left,o=this._camera.top-this._camera.bottom,a=2*n.radius,l=Math.min(r/a,o/a);i.push(this.zoomTo(l,t))}return i.push(this.setFocalOffset(0,0,0,t)),Promise.all(i)}setLookAt(e,t,i,n,r,o,a=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=Us.NONE,this._changedDolly=0;const l=ye.set(n,r,o),c=ve.set(e,t,i);this._targetEnd.copy(l),this._sphericalEnd.setFromVector3(c.sub(l).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,a||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));const h=!a||Se(this._target.x,this._targetEnd.x,this.restThreshold)&&Se(this._target.y,this._targetEnd.y,this.restThreshold)&&Se(this._target.z,this._targetEnd.z,this.restThreshold)&&Se(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&Se(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&Se(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(h)}lerpLookAt(e,t,i,n,r,o,a,l,c,h,d,u,p,g=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=Us.NONE,this._changedDolly=0;const m=ve.set(n,r,o),v=ye.set(e,t,i);kt.setFromVector3(v.sub(m).applyQuaternion(this._yAxisUpSpace));const f=js.set(h,d,u),b=ye.set(a,l,c);Xn.setFromVector3(b.sub(f).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(m.lerp(f,p));const y=Xn.theta-kt.theta,w=Xn.phi-kt.phi,S=Xn.radius-kt.radius;this._sphericalEnd.set(kt.radius+S*p,kt.phi+w*p,kt.theta+y*p),this.normalizeRotations(),this._needsUpdate=!0,g||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));const T=!g||Se(this._target.x,this._targetEnd.x,this.restThreshold)&&Se(this._target.y,this._targetEnd.y,this.restThreshold)&&Se(this._target.z,this._targetEnd.z,this.restThreshold)&&Se(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&Se(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&Se(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(T)}setPosition(e,t,i,n=!1){return this.setLookAt(e,t,i,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,n)}setTarget(e,t,i,n=!1){const r=this.getPosition(ve),o=this.setLookAt(r.x,r.y,r.z,e,t,i,n);return this._sphericalEnd.phi=Yt(this._sphericalEnd.phi,this.minPolarAngle,this.maxPolarAngle),o}setFocalOffset(e,t,i,n=!1){this._isUserControllingOffset=!1,this._focalOffsetEnd.set(e,t,i),this._needsUpdate=!0,n||this._focalOffset.copy(this._focalOffsetEnd);const r=!n||Se(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&Se(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&Se(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(r)}setOrbitPoint(e,t,i){this._camera.updateMatrixWorld(),ri.setFromMatrixColumn(this._camera.matrixWorldInverse,0),oi.setFromMatrixColumn(this._camera.matrixWorldInverse,1),ps.setFromMatrixColumn(this._camera.matrixWorldInverse,2);const n=ve.set(e,t,i),r=n.distanceTo(this._camera.position),o=n.sub(this._camera.position);ri.multiplyScalar(o.x),oi.multiplyScalar(o.y),ps.multiplyScalar(o.z),ve.copy(ri).add(oi).add(ps),ve.z=ve.z+r,this.dollyTo(r,!1),this.setFocalOffset(-ve.x,ve.y,-ve.z,!1),this.moveTo(e,t,i,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,t,i,n){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new ge.Vector4,typeof e=="number"?this._viewport.set(e,t,i,n):this._viewport.copy(e)}getDistanceToFitBox(e,t,i,n=!1){if(el(this._camera,"getDistanceToFitBox"))return this._spherical.radius;const r=e/t,o=this._camera.getEffectiveFOV()*Wn,a=this._camera.aspect;return((n?r>a:r<a)?t:e/a)*.5/Math.tan(o*.5)+i*.5}getDistanceToFitSphere(e){if(el(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;const t=this._camera.getEffectiveFOV()*Wn,i=Math.atan(Math.tan(t*.5)*this._camera.aspect)*2,n=1<this._camera.aspect?t:i;return e/Math.sin(n*.5)}getTarget(e,t=!0){return(e&&e.isVector3?e:new ge.Vector3).copy(t?this._targetEnd:this._target)}getPosition(e,t=!0){return(e&&e.isVector3?e:new ge.Vector3).setFromSpherical(t?this._sphericalEnd:this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t?this._targetEnd:this._target)}getSpherical(e,t=!0){return(e||new ge.Spherical).copy(t?this._sphericalEnd:this._spherical)}getFocalOffset(e,t=!0){return(e&&e.isVector3?e:new ge.Vector3).copy(t?this._focalOffsetEnd:this._focalOffset)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%Fs,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=Fs),this._spherical.theta+=Fs*Math.round((this._sphericalEnd.theta-this._spherical.theta)/Fs)}stop(){this._focalOffset.copy(this._focalOffsetEnd),this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd),this._zoom=this._zoomEnd}reset(e=!1){if(!Se(this._camera.up.x,this._cameraUp0.x)||!Se(this._camera.up.y,this._cameraUp0.y)||!Se(this._camera.up.z,this._cameraUp0.z)){this._camera.up.copy(this._cameraUp0);const i=this.getPosition(ve);this.updateCameraUp(),this.setPosition(i.x,i.y,i.z)}const t=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(t)}saveState(){this._cameraUp0.copy(this._camera.up),this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,no),this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert()}applyCameraUp(){const e=ve.subVectors(this._target,this._camera.position).normalize(),t=ye.crossVectors(e,this._camera.up);this._camera.up.crossVectors(t,e).normalize(),this._camera.updateMatrixWorld();const i=this.getPosition(ve);this.updateCameraUp(),this.setPosition(i.x,i.y,i.z)}update(e){const t=this._sphericalEnd.theta-this._spherical.theta,i=this._sphericalEnd.phi-this._spherical.phi,n=this._sphericalEnd.radius-this._spherical.radius,r=Rh.subVectors(this._targetEnd,this._target),o=Uh.subVectors(this._focalOffsetEnd,this._focalOffset),a=this._zoomEnd-this._zoom;if(ze(t))this._thetaVelocity.value=0,this._spherical.theta=this._sphericalEnd.theta;else{const h=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.theta=io(this._spherical.theta,this._sphericalEnd.theta,this._thetaVelocity,h,1/0,e),this._needsUpdate=!0}if(ze(i))this._phiVelocity.value=0,this._spherical.phi=this._sphericalEnd.phi;else{const h=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.phi=io(this._spherical.phi,this._sphericalEnd.phi,this._phiVelocity,h,1/0,e),this._needsUpdate=!0}if(ze(n))this._radiusVelocity.value=0,this._spherical.radius=this._sphericalEnd.radius;else{const h=this._isUserControllingDolly?this.draggingSmoothTime:this.smoothTime;this._spherical.radius=io(this._spherical.radius,this._sphericalEnd.radius,this._radiusVelocity,h,this.maxSpeed,e),this._needsUpdate=!0}if(ze(r.x)&&ze(r.y)&&ze(r.z))this._targetVelocity.set(0,0,0),this._target.copy(this._targetEnd);else{const h=this._isUserControllingTruck?this.draggingSmoothTime:this.smoothTime;Nh(this._target,this._targetEnd,this._targetVelocity,h,this.maxSpeed,e,this._target),this._needsUpdate=!0}if(ze(o.x)&&ze(o.y)&&ze(o.z))this._focalOffsetVelocity.set(0,0,0),this._focalOffset.copy(this._focalOffsetEnd);else{const h=this._isUserControllingOffset?this.draggingSmoothTime:this.smoothTime;Nh(this._focalOffset,this._focalOffsetEnd,this._focalOffsetVelocity,h,this.maxSpeed,e,this._focalOffset),this._needsUpdate=!0}if(ze(a))this._zoomVelocity.value=0,this._zoom=this._zoomEnd;else{const h=this._isUserControllingZoom?this.draggingSmoothTime:this.smoothTime;this._zoom=io(this._zoom,this._zoomEnd,this._zoomVelocity,h,1/0,e)}if(this.dollyToCursor){if(us(this._camera)&&this._changedDolly!==0){const h=this._spherical.radius-this._lastDistance,d=this._camera,u=this._getCameraDirection(Gn),p=ve.copy(u).cross(d.up).normalize();p.lengthSq()===0&&(p.x=1);const g=ye.crossVectors(p,u),m=this._sphericalEnd.radius*Math.tan(d.getEffectiveFOV()*Wn*.5),v=(this._sphericalEnd.radius-h-this._sphericalEnd.radius)/this._sphericalEnd.radius,f=js.copy(this._targetEnd).add(p.multiplyScalar(this._dollyControlCoord.x*m*d.aspect)).add(g.multiplyScalar(this._dollyControlCoord.y*m)),b=ve.copy(this._targetEnd).lerp(f,v),y=this._lastDollyDirection===Us.IN&&this._spherical.radius<=this.minDistance,w=this._lastDollyDirection===Us.OUT&&this.maxDistance<=this._spherical.radius;if(this.infinityDolly&&(y||w)){this._sphericalEnd.radius-=h,this._spherical.radius-=h;const T=ye.copy(u).multiplyScalar(-h);b.add(T)}this._boundary.clampPoint(b,b);const S=ye.subVectors(b,this._targetEnd);this._targetEnd.copy(b),this._target.add(S),this._changedDolly-=h,ze(this._changedDolly)&&(this._changedDolly=0)}else if(Ni(this._camera)&&this._changedZoom!==0){const h=this._zoom-this._lastZoom,d=this._camera,u=ve.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(d.near+d.far)/(d.near-d.far)).unproject(d),p=ye.set(0,0,-1).applyQuaternion(d.quaternion),g=js.copy(u).add(p.multiplyScalar(-u.dot(d.up))),m=-(this._zoom-h-this._zoom)/this._zoom,v=this._getCameraDirection(Gn),f=this._targetEnd.dot(v),b=ve.copy(this._targetEnd).lerp(g,m),y=b.dot(v),w=v.multiplyScalar(y-f);b.sub(w),this._boundary.clampPoint(b,b);const S=ye.subVectors(b,this._targetEnd);this._targetEnd.copy(b),this._target.add(S),this._changedZoom-=h,ze(this._changedZoom)&&(this._changedZoom=0)}}this._camera.zoom!==this._zoom&&(this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0),this._dragNeedsUpdate=!0;const l=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,l),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!ze(this._focalOffset.x)||!ze(this._focalOffset.y)||!ze(this._focalOffset.z))&&(ri.setFromMatrixColumn(this._camera.matrix,0),oi.setFromMatrixColumn(this._camera.matrix,1),ps.setFromMatrixColumn(this._camera.matrix,2),ri.multiplyScalar(this._focalOffset.x),oi.multiplyScalar(-this._focalOffset.y),ps.multiplyScalar(this._focalOffset.z),ve.copy(ri).add(oi).add(ps),this._camera.position.add(ve),this._camera.updateMatrixWorld()),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),ve.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);const c=this._needsUpdate;return c&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):c?(this.dispatchEvent({type:"update"}),ze(t,this.restThreshold)&&ze(i,this.restThreshold)&&ze(n,this.restThreshold)&&ze(r.x,this.restThreshold)&&ze(r.y,this.restThreshold)&&ze(r.z,this.restThreshold)&&ze(o.x,this.restThreshold)&&ze(o.y,this.restThreshold)&&ze(o.z,this.restThreshold)&&ze(a,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!c&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._lastDistance=this._spherical.radius,this._lastZoom=this._zoom,this._updatedLastTime=c,this._needsUpdate=!1,c}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:qn(this.maxDistance),minZoom:this.minZoom,maxZoom:qn(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:qn(this.maxPolarAngle),minAzimuthAngle:qn(this.minAzimuthAngle),maxAzimuthAngle:qn(this.maxAzimuthAngle),smoothTime:this.smoothTime,draggingSmoothTime:this.draggingSmoothTime,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,target:this._targetEnd.toArray(),position:ve.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,t=!1){const i=JSON.parse(e);this.enabled=i.enabled,this.minDistance=i.minDistance,this.maxDistance=Yn(i.maxDistance),this.minZoom=i.minZoom,this.maxZoom=Yn(i.maxZoom),this.minPolarAngle=i.minPolarAngle,this.maxPolarAngle=Yn(i.maxPolarAngle),this.minAzimuthAngle=Yn(i.minAzimuthAngle),this.maxAzimuthAngle=Yn(i.maxAzimuthAngle),this.smoothTime=i.smoothTime,this.draggingSmoothTime=i.draggingSmoothTime,this.dollySpeed=i.dollySpeed,this.truckSpeed=i.truckSpeed,this.dollyToCursor=i.dollyToCursor,this._target0.fromArray(i.target0),this._position0.fromArray(i.position0),this._zoom0=i.zoom0,this._focalOffset0.fromArray(i.focalOffset0),this.moveTo(i.target[0],i.target[1],i.target[2],t),kt.setFromVector3(ve.fromArray(i.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(kt.theta,kt.phi,t),this.dollyTo(kt.radius,t),this.zoomTo(i.zoom,t),this.setFocalOffset(i.focalOffset[0],i.focalOffset[1],i.focalOffset[2],t),this._needsUpdate=!0}connect(e){if(this._domElement){console.warn("camera-controls is already connected.");return}e.setAttribute("data-camera-controls-version",qb),this._addAllEventListeners(e),this._getClientRect(this._elementRect)}disconnect(){this.cancel(),this._removeAllEventListeners(),this._domElement&&(this._domElement.removeAttribute("data-camera-controls-version"),this._domElement=void 0)}dispose(){this.removeAllEventListeners(),this.disconnect()}_getTargetDirection(e){return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse)}_getCameraDirection(e){return this._getTargetDirection(e).negate()}_findPointerById(e){return this._activePointers.find(t=>t.pointerId===e)}_findPointerByMouseButton(e){return this._activePointers.find(t=>t.mouseButton===e)}_disposePointer(e){this._activePointers.splice(this._activePointers.indexOf(e),1)}_encloseToBoundary(e,t,i){const n=t.lengthSq();if(n===0)return e;const r=ye.copy(t).add(e),o=this._boundary.clampPoint(r,js).sub(r),a=o.lengthSq();if(a===0)return e.add(t);if(a===n)return e;if(i===0)return e.add(t).add(o);{const l=1+i*a/t.dot(o);return e.add(ye.copy(t).multiplyScalar(l)).add(o.multiplyScalar(1-i))}}_updateNearPlaneCorners(){if(us(this._camera)){const e=this._camera,t=e.near,i=e.getEffectiveFOV()*Wn,n=Math.tan(i*.5)*t,r=n*e.aspect;this._nearPlaneCorners[0].set(-r,-n,0),this._nearPlaneCorners[1].set(r,-n,0),this._nearPlaneCorners[2].set(r,n,0),this._nearPlaneCorners[3].set(-r,n,0)}else if(Ni(this._camera)){const e=this._camera,t=1/e.zoom,i=e.left*t,n=e.right*t,r=e.top*t,o=e.bottom*t;this._nearPlaneCorners[0].set(i,r,0),this._nearPlaneCorners[1].set(n,r,0),this._nearPlaneCorners[2].set(n,o,0),this._nearPlaneCorners[3].set(i,o,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||el(this._camera,"_collisionTest"))return e;const t=this._getTargetDirection(Gn);rl.lookAt(Bh,t,this._camera.up);for(let i=0;i<4;i++){const n=ye.copy(this._nearPlaneCorners[i]);n.applyMatrix4(rl);const r=js.addVectors(this._target,n);ro.set(r,t),ro.far=this._spherical.radius+1;const o=ro.intersectObjects(this.colliderMeshes);o.length!==0&&o[0].distance<e&&(e=o[0].distance)}return e}_getClientRect(e){if(!this._domElement)return;const t=this._domElement.getBoundingClientRect();return e.x=t.left,e.y=t.top,this._viewport?(e.x+=this._viewport.x,e.y+=t.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=t.width,e.height=t.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(t=>{const i=()=>{this.removeEventListener("rest",i),t()};this.addEventListener("rest",i)}))}_addAllEventListeners(e){}_removeAllEventListeners(){}get dampingFactor(){return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."),0}set dampingFactor(e){console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.")}get draggingDampingFactor(){return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."),0}set draggingDampingFactor(e){console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.")}static createBoundingSphere(e,t=new ge.Sphere){const i=t,n=i.center;Hs.makeEmpty(),e.traverseVisible(o=>{o.isMesh&&Hs.expandByObject(o)}),Hs.getCenter(n);let r=0;return e.traverseVisible(o=>{if(!o.isMesh)return;const a=o;if(!a.geometry)return;const l=a.geometry.clone();l.applyMatrix4(a.matrixWorld);const c=l.attributes.position;for(let h=0,d=c.count;h<d;h++)ve.fromBufferAttribute(c,h),r=Math.max(r,n.distanceToSquared(ve))}),i.radius=Math.sqrt(r),i}},Wl=class Sp extends vv{constructor(e){super(e),C(this,"onBeforeUpdate",new K),C(this,"onAfterUpdate",new K),C(this,"onAspectUpdated",new K),C(this,"onDisposed",new K),C(this,"three"),C(this,"_allControls",new Map),C(this,"updateAspect",()=>{var t;if(!(!this.currentWorld||!this.currentWorld.renderer)){if(this.three instanceof Ca){this.onAspectUpdated.trigger();return}if((t=this.currentWorld.renderer)!=null&&t.isResizeable()){const i=this.currentWorld.renderer.getSize();this.three.aspect=i.width/i.height,this.three.updateProjectionMatrix(),this.onAspectUpdated.trigger()}}}),this.three=this.setupCamera(),this.setupEvents(!0),this.worlds.onItemSet.add(({value:t})=>{const i=this.newCameraControls();this._allControls.set(t.uuid,i)}),this.worlds.onBeforeDelete.add(({value:t})=>{const i=this._allControls.get(t.uuid);i&&(i.dispose(),this._allControls.delete(t.uuid))})}get controls(){if(!this.currentWorld)throw new Error("This camera needs a world to work!");const e=this._allControls.get(this.currentWorld.uuid);if(!e)throw new Error("Controls not found!");return e}get enabled(){return this.currentWorld===null?!1:this.controls.enabled}set enabled(e){this.currentWorld!==null&&(this.controls.enabled=e)}set currentWorld(e){super.currentWorld=e,e&&(this.worlds.get(e.uuid)||this.worlds.set(e.uuid,e))}get currentWorld(){return this._currentWorld}dispose(){this.setupEvents(!1),this.onAspectUpdated.reset(),this.onBeforeUpdate.reset(),this.onAfterUpdate.reset(),this.three.removeFromParent(),this.onDisposed.trigger(),this.onDisposed.reset();for(const[e,t]of this._allControls)t.dispose();this.worlds.clear()}async fitToItems(e){const t=await this.getItemsBounding(e);await this.controls.fitToSphere(t,!0)}async setOrbitToItems(e){const t=await this.getItemsBounding(e);this.controls.setOrbitPoint(t.center.x,t.center.y,t.center.z)}update(e){this.enabled&&(this.onBeforeUpdate.trigger(this),this.controls.update(e),this.onAfterUpdate.trigger(this))}async getItemsBounding(e){const t=this.components.get(ue),i=this.components.get(ea);i.list.clear();const n=new Xi;if(e)await i.addFromModelIdMap(e);else for(const[,r]of t.list)i.list.add(r.box);return i.get().getBoundingSphere(n),i.list.clear(),n}setupCamera(){const e=window.innerWidth/window.innerHeight,t=new Vu(60,e,1,1e3);return t.position.set(50,50,50),t.lookAt(new L(0,0,0)),t}newCameraControls(){if(!this.currentWorld)throw new Error("This camera needs a world to work!");if(!this.currentWorld.renderer)throw new Error("This camera needs a renderer to work!");St.install({THREE:Sp.getSubsetOfThree()});const{domElement:e}=this.currentWorld.renderer.three,t=new St(this.three,e);return t.smoothTime=.2,t.dollyToCursor=!0,t.infinityDolly=!0,t.minDistance=6,t}setupEvents(e){e?window.addEventListener("resize",this.updateAspect):window.removeEventListener("resize",this.updateAspect)}static getSubsetOfThree(){return{MOUSE:Ig,Vector2:Me,Vector3:L,Vector4:ks,Quaternion:Zt,Matrix4:Ee,Spherical:zg,Box3:Ve,Sphere:Xi,Raycaster:Oc,MathUtils:Wu}}};const Ep=class Tp extends Oe{constructor(e){super(e),C(this,"onAfterUpdate",new K),C(this,"onBeforeUpdate",new K),C(this,"onDisposed",new K),C(this,"list",new bn),C(this,"enabled",!0),e.add(Tp.uuid,this)}create(){const e=new Hb(this.components),t=e.uuid;if(this.list.has(t))throw new Error("There is already a world with this name!");return this.list.set(t,e),e}delete(e){if(!this.list.has(e.uuid))throw new Error("The provided world is not found in the list!");this.list.delete(e.uuid),e.dispose()}dispose(){this.enabled=!1;for(const[e,t]of this.list)t.dispose();this.list.clear(),this.onDisposed.trigger()}update(e){if(this.enabled)for(const[t,i]of this.list)i.update(e)}};C(Ep,"uuid","fdb61dc4-2ec1-4966-b83d-54ea795fad4a");let Ap=Ep;class Gb extends Oa{constructor(){super(...arguments),C(this,"_config",{visible:{value:!0,type:"Boolean"},color:{value:new me,type:"Color"},primarySize:{type:"Number",interpolable:!0,value:1,min:0,max:1e3},secondarySize:{type:"Number",interpolable:!0,value:10,min:0,max:1e3},distance:{type:"Number",interpolable:!0,value:500,min:0,max:500}})}get visible(){return this._config.visible.value}set visible(e){this._config.visible.value=e,this._component.visible=e}get color(){return this._config.color.value}set color(e){this._config.color.value=e,this._component.material.uniforms.uColor.value=e,this._component.material.uniformsNeedUpdate=!0}get primarySize(){return this._config.primarySize.value}set primarySize(e){this._config.primarySize.value=e,this._component.material.uniforms.uSize1.value=e,this._component.material.uniformsNeedUpdate=!0}get secondarySize(){return this._config.secondarySize.value}set secondarySize(e){this._config.secondarySize.value=e,this._component.material.uniforms.uSize2.value=e,this._component.material.uniformsNeedUpdate=!0}get distance(){return this._config.distance.value}set distance(e){this._config.distance.value=e,this._component.material.uniforms.uDistance.value=e,this._component.material.uniformsNeedUpdate=!0}}class Xb{constructor(e,t){C(this,"onDisposed",new K),C(this,"onSetup",new K),C(this,"isSetup",!1),C(this,"world"),C(this,"components"),C(this,"config"),C(this,"_defaultConfig",{visible:!0,color:new me(12303291),primarySize:1,secondarySize:10,distance:500}),C(this,"three"),C(this,"_fade",3),C(this,"updateZoom",()=>{this.world.camera instanceof Wl&&(this.material.uniforms.uZoom.value=this.world.camera.three.zoom)}),this.world=t;const{color:i,primarySize:n,secondarySize:r,distance:o}=this._defaultConfig;this.components=e,this.config=new Gb(this,this.components,"Grid");const a=new zc(2,2,1,1),l=new Ye({side:Si,uniforms:{uSize1:{value:n},uSize2:{value:r},uColor:{value:i},uDistance:{value:o},uFade:{value:this._fade},uZoom:{value:1}},transparent:!0,vertexShader:`
            
            varying vec3 worldPosition;
            
            uniform float uDistance;
            
            void main() {
            
                    vec3 pos = position.xzy * uDistance;
                    pos.xz += cameraPosition.xz;
                    
                    worldPosition = pos;
                    
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            
            }
            `,fragmentShader:`
            
            varying vec3 worldPosition;
            
            uniform float uZoom;
            uniform float uFade;
            uniform float uSize1;
            uniform float uSize2;
            uniform vec3 uColor;
            uniform float uDistance;
                
                
                
                float getGrid(float size) {
                
                    vec2 r = worldPosition.xz / size;
                    
                    
                    vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
                    float line = min(grid.x, grid.y);
                    
                
                    return 1.0 - min(line, 1.0);
                }
                
            void main() {
            
                    
                    float d = 1.0 - min(distance(cameraPosition.xz, worldPosition.xz) / uDistance, 1.0);
                    
                    float g1 = getGrid(uSize1);
                    float g2 = getGrid(uSize2);
                    
                    // Ortho camera fades the grid away when zooming out
                    float minZoom = step(0.2, uZoom);
                    float zoomFactor = pow(min(uZoom, 1.), 2.) * minZoom;
                    
                    gl_FragColor = vec4(uColor.rgb, mix(g2, g1, g1) * pow(d, uFade));
                    gl_FragColor.a = mix(0.5 * gl_FragColor.a, gl_FragColor.a, g2) * zoomFactor;
                    
                    if ( gl_FragColor.a <= 0.0 ) discard;
                    
            
            }
            
            `,extensions:{derivatives:!0}});this.three=new oe(a,l),this.three.frustumCulled=!1,t.scene.three.add(this.three),this.setupEvents(!0)}get visible(){return this.three.visible}set visible(e){this.three.visible=e,e?this.world.scene.three.add(this.three):this.three.removeFromParent()}get material(){return this.three.material}get fade(){return this._fade===3}set fade(e){this._fade=e?3:0,this.material.uniforms.uFade.value=this._fade}setup(e){const t={...this._defaultConfig,...e};this.config.visible=!0,this.config.color=t.color,this.config.primarySize=t.primarySize,this.config.secondarySize=t.secondarySize,this.config.distance=t.distance,this.isSetup=!0,this.onSetup.trigger()}dispose(){this.setupEvents(!1),this.components.get(Fc).list.delete(this.config.uuid),this.components.get(ui).destroy(this.three),this.onDisposed.trigger(),this.onDisposed.reset(),this.world=null,this.components=null}setupEvents(e){if(this.world.isDisposing||!(this.world.camera instanceof Wl))return;const t=this.world.camera.controls;e?t.addEventListener("update",this.updateZoom):t.removeEventListener("update",this.updateZoom)}}const Zb=class Pp extends Oe{constructor(e){super(e),C(this,"list",new Map),C(this,"onDisposed",new K),C(this,"enabled",!0),e.add(Pp.uuid,this)}create(e){if(this.list.has(e.uuid))throw new Error("This world already has a grid!");const t=new Xb(this.components,e);return this.list.set(e.uuid,t),e.onDisposed.add(()=>{this.delete(e)}),t}delete(e){const t=this.list.get(e.uuid);t&&t.dispose(),this.list.delete(e.uuid)}dispose(){for(const[e,t]of this.list)t.dispose();this.list.clear(),this.onDisposed.trigger(),this.onDisposed.reset()}};C(Zb,"uuid","d1e814d5-b81c-4452-87a2-f039375e0489");const Mp=0,Qb=1,Kb=2,Hh=2,ol=1.25,Vh=1,Ho=6*4+4+4,ka=65535,Jb=Math.pow(2,-24),al=Symbol("SKIP_GENERATION");function ey(s){return s.index?s.index.count:s.attributes.position.count}function Mn(s){return ey(s)/3}function ty(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function iy(s,e){if(!s.index){const t=s.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=ty(t,i);s.setIndex(new At(n,1));for(let r=0;r<t;r++)n[r]=r}}function Op(s){const e=Mn(s),t=s.drawRange,i=t.start/3,n=(t.start+t.count)/3,r=Math.max(0,i),o=Math.min(e,n)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function kp(s){if(!s.groups||!s.groups.length)return Op(s);const e=[],t=new Set,i=s.drawRange,n=i.start/3,r=(i.start+i.count)/3;for(const a of s.groups){const l=a.start/3,c=(a.start+a.count)/3;t.add(Math.max(n,l)),t.add(Math.min(r,c))}const o=Array.from(t.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){const l=o[a],c=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function sy(s){if(s.groups.length===0)return!1;const e=Mn(s),t=kp(s).sort((r,o)=>r.offset-o.offset),i=t[t.length-1];i.count=Math.min(e-i.offset,i.count);let n=0;return t.forEach(({count:r})=>n+=r),e!==n}function Be(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function ny(s){s[0]=s[1]=s[2]=1/0,s[3]=s[4]=s[5]=-1/0}function Wh(s){let e=-1,t=-1/0;for(let i=0;i<3;i++){const n=s[i+3]-s[i];n>t&&(t=n,e=i)}return e}function qh(s,e){e.set(s)}function Yh(s,e,t){let i,n;for(let r=0;r<3;r++){const o=r+3;i=s[r],n=e[r],t[r]=i<n?i:n,i=s[o],n=e[o],t[o]=i>n?i:n}}function oo(s,e,t){for(let i=0;i<3;i++){const n=e[s+2*i],r=e[s+2*i+1],o=n-r,a=n+r;o<t[i]&&(t[i]=o),a>t[i+3]&&(t[i+3]=a)}}function Zn(s){const e=s[3]-s[0],t=s[4]-s[1],i=s[5]-s[2];return 2*(e*t+t*i+i*e)}function ll(s,e,t,i,n=null){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,d=1/0,u=1/0,p=1/0,g=-1/0,m=-1/0,v=-1/0;const f=n!==null;for(let b=e*6,y=(e+t)*6;b<y;b+=6){const w=s[b+0],S=s[b+1],T=w-S,P=w+S;T<r&&(r=T),P>l&&(l=P),f&&w<d&&(d=w),f&&w>g&&(g=w);const D=s[b+2],M=s[b+3],I=D-M,R=D+M;I<o&&(o=I),R>c&&(c=R),f&&D<u&&(u=D),f&&D>m&&(m=D);const A=s[b+4],O=s[b+5],_=A-O,$=A+O;_<a&&(a=_),$>h&&(h=$),f&&A<p&&(p=A),f&&A>v&&(v=A)}i[0]=r,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=h,f&&(n[0]=d,n[1]=u,n[2]=p,n[3]=g,n[4]=m,n[5]=v)}function ry(s,e,t,i){let n=1/0,r=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let h=e*6,d=(e+t)*6;h<d;h+=6){const u=s[h+0];u<n&&(n=u),u>a&&(a=u);const p=s[h+2];p<r&&(r=p),p>l&&(l=p);const g=s[h+4];g<o&&(o=g),g>c&&(c=g)}i[0]=n,i[1]=r,i[2]=o,i[3]=a,i[4]=l,i[5]=c}function oy(s,e){ny(e);const t=s.attributes.position,i=s.index?s.index.array:null,n=Mn(s),r=new Float32Array(n*6),o=t.normalized,a=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const h=["getX","getY","getZ"];for(let d=0;d<n;d++){const u=d*3,p=d*6;let g=u+0,m=u+1,v=u+2;i&&(g=i[g],m=i[m],v=i[v]),o||(g=g*c+l,m=m*c+l,v=v*c+l);for(let f=0;f<3;f++){let b,y,w;o?(b=t[h[f]](g),y=t[h[f]](m),w=t[h[f]](v)):(b=a[g+f],y=a[m+f],w=a[v+f]);let S=b;y<S&&(S=y),w<S&&(S=w);let T=b;y>T&&(T=y),w>T&&(T=w);const P=(T-S)/2,D=f*2;r[p+D+0]=S+P,r[p+D+1]=P+(Math.abs(S)+P)*Jb,S<e[f]&&(e[f]=S),T>e[f+3]&&(e[f+3]=T)}}return r}const vi=32,ay=(s,e)=>s.candidate-e.candidate,Li=new Array(vi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ao=new Float32Array(6);function ly(s,e,t,i,n,r){let o=-1,a=0;if(r===Mp)o=Wh(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===Qb)o=Wh(s),o!==-1&&(a=cy(t,i,n,o));else if(r===Kb){const l=Zn(s);let c=ol*n;const h=i*6,d=(i+n)*6;for(let u=0;u<3;u++){const p=e[u],g=(e[u+3]-p)/vi;if(n<vi/4){const m=[...Li];m.length=n;let v=0;for(let b=h;b<d;b+=6,v++){const y=m[v];y.candidate=t[b+2*u],y.count=0;const{bounds:w,leftCacheBounds:S,rightCacheBounds:T}=y;for(let P=0;P<3;P++)T[P]=1/0,T[P+3]=-1/0,S[P]=1/0,S[P+3]=-1/0,w[P]=1/0,w[P+3]=-1/0;oo(b,t,w)}m.sort(ay);let f=n;for(let b=0;b<f;b++){const y=m[b];for(;b+1<f&&m[b+1].candidate===y.candidate;)m.splice(b+1,1),f--}for(let b=h;b<d;b+=6){const y=t[b+2*u];for(let w=0;w<f;w++){const S=m[w];y>=S.candidate?oo(b,t,S.rightCacheBounds):(oo(b,t,S.leftCacheBounds),S.count++)}}for(let b=0;b<f;b++){const y=m[b],w=y.count,S=n-y.count,T=y.leftCacheBounds,P=y.rightCacheBounds;let D=0;w!==0&&(D=Zn(T)/l);let M=0;S!==0&&(M=Zn(P)/l);const I=Vh+ol*(D*w+M*S);I<c&&(o=u,c=I,a=y.candidate)}}else{for(let f=0;f<vi;f++){const b=Li[f];b.count=0,b.candidate=p+g+f*g;const y=b.bounds;for(let w=0;w<3;w++)y[w]=1/0,y[w+3]=-1/0}for(let f=h;f<d;f+=6){let b=~~((t[f+2*u]-p)/g);b>=vi&&(b=vi-1);const y=Li[b];y.count++,oo(f,t,y.bounds)}const m=Li[vi-1];qh(m.bounds,m.rightCacheBounds);for(let f=vi-2;f>=0;f--){const b=Li[f],y=Li[f+1];Yh(b.bounds,y.rightCacheBounds,b.rightCacheBounds)}let v=0;for(let f=0;f<vi-1;f++){const b=Li[f],y=b.count,w=b.bounds,S=Li[f+1].rightCacheBounds;y!==0&&(v===0?qh(w,ao):Yh(w,ao,ao)),v+=y;let T=0,P=0;v!==0&&(T=Zn(ao)/l);const D=n-v;D!==0&&(P=Zn(S)/l);const M=Vh+ol*(T*v+P*D);M<c&&(o=u,c=M,a=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function cy(s,e,t,i){let n=0;for(let r=e,o=e+t;r<o;r++)n+=s[r*6+i*2];return n/t}let lo=class{constructor(){}};function hy(s,e,t,i,n,r){let o=i,a=i+n-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){for(let h=0;h<3;h++){let d=e[o*3+h];e[o*3+h]=e[a*3+h],e[a*3+h]=d}for(let h=0;h<6;h++){let d=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=d}o++,a--}else return o}}function dy(s,e,t,i,n,r){let o=i,a=i+n-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){let h=s[o];s[o]=s[a],s[a]=h;for(let d=0;d<6;d++){let u=t[o*6+d];t[o*6+d]=t[a*6+d],t[a*6+d]=u}o++,a--}else return o}}function uy(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,i=t>2**16,n=i?4:2,r=e?new SharedArrayBuffer(t*n):new ArrayBuffer(t*n),o=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function py(s,e){const t=s.geometry,i=t.index?t.index.array:null,n=e.maxDepth,r=e.verbose,o=e.maxLeafTris,a=e.strategy,l=e.onProgress,c=Mn(t),h=s._indirectBuffer;let d=!1;const u=new Float32Array(6),p=new Float32Array(6),g=oy(t,u),m=e.indirect?dy:hy,v=[],f=e.indirect?Op(t):kp(t);if(f.length===1){const w=f[0],S=new lo;S.boundingData=u,ry(g,w.offset,w.count,p),y(S,w.offset,w.count,p),v.push(S)}else for(let w of f){const S=new lo;S.boundingData=new Float32Array(6),ll(g,w.offset,w.count,S.boundingData,p),y(S,w.offset,w.count,p),v.push(S)}return v;function b(w){l&&l(w/c)}function y(w,S,T,P=null,D=0){if(!d&&D>=n&&(d=!0,r&&(console.warn(`MeshBVH: Max depth of ${n} reached when generating BVH. Consider increasing maxDepth.`),console.warn(t))),T<=o||D>=n)return b(S+T),w.offset=S,w.count=T,w;const M=ly(w.boundingData,P,g,S,T,a);if(M.axis===-1)return b(S+T),w.offset=S,w.count=T,w;const I=m(h,i,g,S,T,M);if(I===S||I===S+T)b(S+T),w.offset=S,w.count=T;else{w.splitAxis=M.axis;const R=new lo,A=S,O=I-S;w.left=R,R.boundingData=new Float32Array(6),ll(g,A,O,R.boundingData,p),y(R,A,O,p,D+1);const _=new lo,$=I,X=T-O;w.right=_,_.boundingData=new Float32Array(6),ll(g,$,X,_.boundingData,p),y(_,$,X,p,D+1)}return w}}function fy(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=uy(t,e.useSharedArrayBuffer),sy(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||iy(t,e);const i=py(s,e);let n,r,o;const a=[],l=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let d=0;d<i.length;d++){const u=i[d];let p=c(u);const g=new l(Ho*p);n=new Float32Array(g),r=new Uint32Array(g),o=new Uint16Array(g),h(0,u),a.push(g)}s._roots=a;return;function c(d){return d.count?1:1+c(d.left)+c(d.right)}function h(d,u){const p=d/4,g=d/2,m=!!u.count,v=u.boundingData;for(let f=0;f<6;f++)n[p+f]=v[f];if(m){const f=u.offset,b=u.count;return r[p+6]=f,o[g+14]=b,o[g+15]=ka,d+Ho}else{const f=u.left,b=u.right,y=u.splitAxis;let w;if(w=h(d+Ho,f),w/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return r[p+6]=w/4,w=h(w,b),r[p+7]=y,w}}}let Ei=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r][t];i=a<i?a:i,n=a>n?a:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let r=0,o=t.length;r<o;r++){const a=t[r],l=e.dot(a);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}};Ei.prototype.setFromBox=function(){const s=new L;return function(e,t){const i=t.min,n=t.max;let r=1/0,o=-1/0;for(let a=0;a<=1;a++)for(let l=0;l<=1;l++)for(let c=0;c<=1;c++){s.x=i.x*a+n.x*(1-a),s.y=i.y*l+n.y*(1-l),s.z=i.z*c+n.z*(1-c);const h=e.dot(s);r=Math.min(h,r),o=Math.max(h,o)}this.min=r,this.max=o}}();const my=function(){const s=new L,e=new L,t=new L;return function(i,n,r){const o=i.start,a=s,l=n.start,c=e;t.subVectors(o,l),s.subVectors(i.end,i.start),e.subVectors(n.end,n.start);const h=t.dot(c),d=c.dot(a),u=c.dot(c),p=t.dot(a),g=a.dot(a)*u-d*d;let m,v;g!==0?m=(h*d-p*u)/g:m=0,v=(h+m*d)/u,r.x=m,r.y=v}}(),jc=function(){const s=new Me,e=new L,t=new L;return function(i,n,r,o){my(i,n,s);let a=s.x,l=s.y;if(a>=0&&a<=1&&l>=0&&l<=1){i.at(a,r),n.at(l,o);return}else if(a>=0&&a<=1){l<0?n.at(0,o):n.at(1,o),i.closestPointToPoint(o,!0,r);return}else if(l>=0&&l<=1){a<0?i.at(0,r):i.at(1,r),n.closestPointToPoint(r,!0,o);return}else{let c;a<0?c=i.start:c=i.end;let h;l<0?h=n.start:h=n.end;const d=e,u=t;if(i.closestPointToPoint(h,!0,e),n.closestPointToPoint(c,!0,t),d.distanceToSquared(h)<=u.distanceToSquared(c)){r.copy(d),o.copy(h);return}else{r.copy(c),o.copy(u);return}}}}(),gy=function(){const s=new L,e=new L,t=new Dt,i=new Bt;return function(n,r){const{radius:o,center:a}=n,{a:l,b:c,c:h}=r;if(i.start=l,i.end=c,i.closestPointToPoint(a,!0,s).distanceTo(a)<=o||(i.start=l,i.end=h,i.closestPointToPoint(a,!0,s).distanceTo(a)<=o)||(i.start=c,i.end=h,i.closestPointToPoint(a,!0,s).distanceTo(a)<=o))return!0;const d=r.getPlane(t);if(Math.abs(d.distanceToPoint(a))<=o){const u=d.projectPoint(a,e);if(r.containsPoint(u))return!0}return!1}}(),vy=1e-15;function cl(s){return Math.abs(s)<vy}let Jt=class extends ar{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Ei),this.points=[this.a,this.b,this.c],this.sphere=new Xi,this.plane=new Dt,this.needsUpdate=!0}intersectsSphere(e){return gy(e,this)}update(){const e=this.a,t=this.b,i=this.c,n=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,n);const c=r[1],h=o[1];c.subVectors(e,t),h.setFromPoints(c,n);const d=r[2],u=o[2];d.subVectors(t,i),u.setFromPoints(d,n);const p=r[3],g=o[3];p.subVectors(i,e),g.setFromPoints(p,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};Jt.prototype.closestPointToSegment=function(){const s=new L,e=new L,t=new Bt;return function(i,n=null,r=null){const{start:o,end:a}=i,l=this.points;let c,h=1/0;for(let d=0;d<3;d++){const u=(d+1)%3;t.start.copy(l[d]),t.end.copy(l[u]),jc(t,i,s,e),c=s.distanceToSquared(e),c<h&&(h=c,n&&n.copy(s),r&&r.copy(e))}return this.closestPointToPoint(o,s),c=o.distanceToSquared(s),c<h&&(h=c,n&&n.copy(s),r&&r.copy(o)),this.closestPointToPoint(a,s),c=a.distanceToSquared(s),c<h&&(h=c,n&&n.copy(s),r&&r.copy(a)),Math.sqrt(h)}}();Jt.prototype.intersectsTriangle=function(){const s=new Jt,e=new Array(3),t=new Array(3),i=new Ei,n=new Ei,r=new L,o=new L,a=new L,l=new L,c=new L,h=new Bt,d=new Bt,u=new Bt,p=new L;function g(m,v,f){const b=m.points;let y=0,w=-1;for(let S=0;S<3;S++){const{start:T,end:P}=h;T.copy(b[S]),P.copy(b[(S+1)%3]),h.delta(o);const D=cl(v.distanceToPoint(T));if(cl(v.normal.dot(o))&&D){f.copy(h),y=2;break}const M=v.intersectLine(h,p);if(!M&&D&&p.copy(T),(M||D)&&!cl(p.distanceTo(P))){if(y<=1)(y===1?f.start:f.end).copy(p),D&&(w=y);else if(y>=2){(w===1?f.start:f.end).copy(p),y=2;break}if(y++,y===2&&w===-1)break}}return y}return function(m,v=null,f=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(s.copy(m),s.update(),m=s);const b=this.plane,y=m.plane;if(Math.abs(b.normal.dot(y.normal))>1-1e-10){const w=this.satBounds,S=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let D=0;D<4;D++){const M=w[D],I=S[D];if(i.setFromPoints(I,t),M.isSeparated(i))return!1}const T=m.satBounds,P=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let D=0;D<4;D++){const M=T[D],I=P[D];if(i.setFromPoints(I,e),M.isSeparated(i))return!1}for(let D=0;D<4;D++){const M=S[D];for(let I=0;I<4;I++){const R=P[I];if(r.crossVectors(M,R),i.setFromPoints(r,e),n.setFromPoints(r,t),i.isSeparated(n))return!1}}return v&&(f||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}else{const w=g(this,y,d);if(w===1&&m.containsPoint(d.end))return v&&(v.start.copy(d.end),v.end.copy(d.end)),!0;if(w!==2)return!1;const S=g(m,b,u);if(S===1&&this.containsPoint(u.end))return v&&(v.start.copy(u.end),v.end.copy(u.end)),!0;if(S!==2)return!1;if(d.delta(a),u.delta(l),a.dot(l)<0){let A=u.start;u.start=u.end,u.end=A}const T=d.start.dot(a),P=d.end.dot(a),D=u.start.dot(a),M=u.end.dot(a),I=P<D,R=T<M;return T!==M&&D!==P&&I===R?!1:(v&&(c.subVectors(d.start,u.start),c.dot(a)>0?v.start.copy(d.start):v.start.copy(u.start),c.subVectors(d.end,u.end),c.dot(a)<0?v.end.copy(d.end):v.end.copy(u.end)),!0)}}}();Jt.prototype.distanceToPoint=function(){const s=new L;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}}();Jt.prototype.distanceToTriangle=function(){const s=new L,e=new L,t=["a","b","c"],i=new Bt,n=new Bt;return function(r,o=null,a=null){const l=o||a?i:null;if(this.intersectsTriangle(r,l))return(o||a)&&(o&&l.getCenter(o),a&&l.getCenter(a)),0;let c=1/0;for(let h=0;h<3;h++){let d;const u=t[h],p=r[u];this.closestPointToPoint(p,s),d=p.distanceToSquared(s),d<c&&(c=d,o&&o.copy(s),a&&a.copy(p));const g=this[u];r.closestPointToPoint(g,s),d=g.distanceToSquared(s),d<c&&(c=d,o&&o.copy(g),a&&a.copy(s))}for(let h=0;h<3;h++){const d=t[h],u=t[(h+1)%3];i.set(this[d],this[u]);for(let p=0;p<3;p++){const g=t[p],m=t[(p+1)%3];n.set(r[g],r[m]),jc(i,n,s,e);const v=s.distanceToSquared(e);v<c&&(c=v,o&&o.copy(s),a&&a.copy(e))}}return Math.sqrt(c)}}();let vt=class{constructor(e,t,i){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Ee,this.invMatrix=new Ee,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Ei),this.alignedSatBounds=new Array(3).fill().map(()=>new Ei),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};vt.prototype.update=function(){return function(){const s=this.matrix,e=this.min,t=this.max,i=this.points;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){const d=1*l|2*c|4*h,u=i[d];u.x=l?t.x:e.x,u.y=c?t.y:e.y,u.z=h?t.z:e.z,u.applyMatrix4(s)}const n=this.satBounds,r=this.satAxes,o=i[0];for(let l=0;l<3;l++){const c=r[l],h=n[l],d=1<<l,u=i[d];c.subVectors(o,u),h.setFromPoints(c,i)}const a=this.alignedSatBounds;a[0].setFromPointsField(i,"x"),a[1].setFromPointsField(i,"y"),a[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();vt.prototype.intersectsBox=function(){const s=new Ei;return function(e){this.needsUpdate&&this.update();const t=e.min,i=e.max,n=this.satBounds,r=this.satAxes,o=this.alignedSatBounds;if(s.min=t.x,s.max=i.x,o[0].isSeparated(s)||(s.min=t.y,s.max=i.y,o[1].isSeparated(s))||(s.min=t.z,s.max=i.z,o[2].isSeparated(s)))return!1;for(let a=0;a<3;a++){const l=r[a],c=n[a];if(s.setFromBox(l,e),c.isSeparated(s))return!1}return!0}}();vt.prototype.intersectsTriangle=function(){const s=new Jt,e=new Array(3),t=new Ei,i=new Ei,n=new L;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(s.copy(r),s.update(),r=s);const o=this.satBounds,a=this.satAxes;e[0]=r.a,e[1]=r.b,e[2]=r.c;for(let d=0;d<3;d++){const u=o[d],p=a[d];if(t.setFromPoints(p,e),u.isSeparated(t))return!1}const l=r.satBounds,c=r.satAxes,h=this.points;for(let d=0;d<3;d++){const u=l[d],p=c[d];if(t.setFromPoints(p,h),u.isSeparated(t))return!1}for(let d=0;d<3;d++){const u=a[d];for(let p=0;p<4;p++){const g=c[p];if(n.crossVectors(u,g),t.setFromPoints(n,e),i.setFromPoints(n,h),t.isSeparated(i))return!1}}return!0}}();vt.prototype.closestPointToPoint=function(){return function(s,e){return this.needsUpdate&&this.update(),e.copy(s).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();vt.prototype.distanceToPoint=function(){const s=new L;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}}();vt.prototype.distanceToBox=function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new Bt),t=new Array(12).fill().map(()=>new Bt),i=new L,n=new L;return function(r,o=0,a=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(a||l)&&(r.getCenter(n),this.closestPointToPoint(n,i),r.closestPointToPoint(i,n),a&&a.copy(i),l&&l.copy(n)),0;const c=o*o,h=r.min,d=r.max,u=this.points;let p=1/0;for(let m=0;m<8;m++){const v=u[m];n.copy(v).clamp(h,d);const f=v.distanceToSquared(n);if(f<p&&(p=f,a&&a.copy(v),l&&l.copy(n),f<c))return Math.sqrt(f)}let g=0;for(let m=0;m<3;m++)for(let v=0;v<=1;v++)for(let f=0;f<=1;f++){const b=(m+1)%3,y=(m+2)%3,w=v<<b|f<<y,S=1<<m|v<<b|f<<y,T=u[w],P=u[S];e[g].set(T,P);const D=s[m],M=s[b],I=s[y],R=t[g],A=R.start,O=R.end;A[D]=h[D],A[M]=v?h[M]:d[M],A[I]=f?h[I]:d[M],O[D]=d[D],O[M]=v?h[M]:d[M],O[I]=f?h[I]:d[M],g++}for(let m=0;m<=1;m++)for(let v=0;v<=1;v++)for(let f=0;f<=1;f++){n.x=m?d.x:h.x,n.y=v?d.y:h.y,n.z=f?d.z:h.z,this.closestPointToPoint(n,i);const b=n.distanceToSquared(i);if(b<p&&(p=b,a&&a.copy(i),l&&l.copy(n),b<c))return Math.sqrt(b)}for(let m=0;m<12;m++){const v=e[m];for(let f=0;f<12;f++){const b=t[f];jc(v,b,i,n);const y=i.distanceToSquared(n);if(y<p&&(p=y,a&&a.copy(i),l&&l.copy(n),y<c))return Math.sqrt(y)}}return Math.sqrt(p)}}();let Hc=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};class by extends Hc{constructor(){super(()=>new Jt)}}const It=new by;function Et(s,e){return e[s+15]===65535}function Tt(s,e){return e[s+6]}function Lt(s,e){return e[s+14]}function $t(s){return s+8}function Nt(s,e){return e[s+6]}function Dp(s,e){return e[s+7]}class yy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Ie=new yy;let Wi,ln;const Vs=[],co=new Hc(()=>new Ve);function _y(s,e,t,i,n,r){Wi=co.getPrimitive(),ln=co.getPrimitive(),Vs.push(Wi,ln),Ie.setBuffer(s._roots[e]);const o=ql(0,s.geometry,t,i,n,r);Ie.clearBuffer(),co.releasePrimitive(Wi),co.releasePrimitive(ln),Vs.pop(),Vs.pop();const a=Vs.length;return a>0&&(ln=Vs[a-1],Wi=Vs[a-2]),o}function ql(s,e,t,i,n=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=Ie;let h=s*2;if(Et(h,l)){const d=Tt(s,c),u=Lt(h,l);return Be(s,a,Wi),i(d,u,!1,o,r+s,Wi)}else{let d=function(R){const{uint16Array:A,uint32Array:O}=Ie;let _=R*2;for(;!Et(_,A);)R=$t(R),_=R*2;return Tt(R,O)},u=function(R){const{uint16Array:A,uint32Array:O}=Ie;let _=R*2;for(;!Et(_,A);)R=Nt(R,O),_=R*2;return Tt(R,O)+Lt(_,A)};const p=$t(s),g=Nt(s,c);let m=p,v=g,f,b,y,w;if(n&&(y=Wi,w=ln,Be(m,a,y),Be(v,a,w),f=n(y),b=n(w),b<f)){m=g,v=p;const R=f;f=b,b=R,y=w}y||(y=Wi,Be(m,a,y));const S=Et(m*2,l),T=t(y,S,f,o+1,r+m);let P;if(T===Hh){const R=d(m),A=u(m)-R;P=i(R,A,!0,o+1,r+m,y)}else P=T&&ql(m,e,t,i,n,r,o+1);if(P)return!0;w=ln,Be(v,a,w);const D=Et(v*2,l),M=t(w,D,b,o+1,r+v);let I;if(M===Hh){const R=d(v),A=u(v)-R;I=i(R,A,!0,o+1,r+v,w)}else I=M&&ql(v,e,t,i,n,r,o+1);return!!I}}const Qn=new L,hl=new L;function wy(s,e,t={},i=0,n=1/0){const r=i*i,o=n*n;let a=1/0,l=null;if(s.shapecast({boundsTraverseOrder:h=>(Qn.copy(e).clamp(h.min,h.max),Qn.distanceToSquared(e)),intersectsBounds:(h,d,u)=>u<a&&u<o,intersectsTriangle:(h,d)=>{h.closestPointToPoint(e,Qn);const u=e.distanceToSquared(Qn);return u<a&&(hl.copy(Qn),a=u,l=d),u<r}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(hl):t.point=hl.clone(),t.distance=c,t.faceIndex=l,t}const Ws=new L,qs=new L,Ys=new L,ho=new Me,uo=new Me,po=new Me,Gh=new L,Xh=new L,Zh=new L,fo=new L;function xy(s,e,t,i,n,r){let o;return r===Jg?o=s.intersectTriangle(i,t,e,!0,n):o=s.intersectTriangle(e,t,i,r!==Si,n),o===null?null:{distance:s.origin.distanceTo(n),point:n.clone()}}function Cy(s,e,t,i,n,r,o,a,l){Ws.fromBufferAttribute(e,r),qs.fromBufferAttribute(e,o),Ys.fromBufferAttribute(e,a);const c=xy(s,Ws,qs,Ys,fo,l);if(c){i&&(ho.fromBufferAttribute(i,r),uo.fromBufferAttribute(i,o),po.fromBufferAttribute(i,a),c.uv=ar.getInterpolation(fo,Ws,qs,Ys,ho,uo,po,new Me)),n&&(ho.fromBufferAttribute(n,r),uo.fromBufferAttribute(n,o),po.fromBufferAttribute(n,a),c.uv1=ar.getInterpolation(fo,Ws,qs,Ys,ho,uo,po,new Me)),t&&(Gh.fromBufferAttribute(t,r),Xh.fromBufferAttribute(t,o),Zh.fromBufferAttribute(t,a),c.normal=ar.getInterpolation(fo,Ws,qs,Ys,Gh,Xh,Zh,new L),c.normal.dot(s.direction)>0&&c.normal.multiplyScalar(-1));const h={a:r,b:o,c:a,normal:new L,materialIndex:0};ar.getNormal(Ws,qs,Ys,h.normal),c.face=h,c.faceIndex=r}return c}function Da(s,e,t,i,n){const r=i*3;let o=r+0,a=r+1,l=r+2;const c=s.index;s.index&&(o=c.getX(o),a=c.getX(a),l=c.getX(l));const{position:h,normal:d,uv:u,uv1:p}=s.attributes,g=Cy(t,h,d,u,p,o,a,l,e);return g?(g.faceIndex=i,n&&n.push(g),g):null}function Ge(s,e,t,i){const n=s.a,r=s.b,o=s.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),r.x=i.getX(l),r.y=i.getY(l),r.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function Sy(s,e,t,i,n,r){const{geometry:o,_indirectBuffer:a}=s;for(let l=i,c=i+n;l<c;l++)Da(o,e,t,l,r)}function Ey(s,e,t,i,n){const{geometry:r,_indirectBuffer:o}=s;let a=1/0,l=null;for(let c=i,h=i+n;c<h;c++){let d;d=Da(r,e,t,c),d&&d.distance<a&&(l=d,a=d.distance)}return l}function Ty(s,e,t,i,n,r,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=s,d=e+s;h<d;h++){let u;if(u=h,Ge(o,u*3,l,c),o.needsUpdate=!0,i(o,u,n,r))return!0}return!1}function Ay(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,i=t.index?t.index.array:null,n=t.attributes.position;let r,o,a,l,c=0;const h=s._roots;for(let u=0,p=h.length;u<p;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,c),c+=r.byteLength;function d(u,p,g=!1){const m=u*2;if(a[m+15]===ka){const v=o[u+6],f=a[m+14];let b=1/0,y=1/0,w=1/0,S=-1/0,T=-1/0,P=-1/0;for(let D=3*v,M=3*(v+f);D<M;D++){let I=i[D];const R=n.getX(I),A=n.getY(I),O=n.getZ(I);R<b&&(b=R),R>S&&(S=R),A<y&&(y=A),A>T&&(T=A),O<w&&(w=O),O>P&&(P=O)}return l[u+0]!==b||l[u+1]!==y||l[u+2]!==w||l[u+3]!==S||l[u+4]!==T||l[u+5]!==P?(l[u+0]=b,l[u+1]=y,l[u+2]=w,l[u+3]=S,l[u+4]=T,l[u+5]=P,!0):!1}else{const v=u+8,f=o[u+6],b=v+p,y=f+p;let w=g,S=!1,T=!1;e?w||(S=e.has(b),T=e.has(y),w=!S&&!T):(S=!0,T=!0);const P=w||S,D=w||T;let M=!1;P&&(M=d(v,p,w));let I=!1;D&&(I=d(f,p,w));const R=M||I;if(R)for(let A=0;A<3;A++){const O=v+A,_=f+A,$=l[O],X=l[O+3],V=l[_],J=l[_+3];l[u+A]=$<V?$:V,l[u+A+3]=X>J?X:J}return R}}}const Qh=new Ve;function Qi(s,e,t,i){return Be(s,e,Qh),t.intersectBox(Qh,i)}function Py(s,e,t,i,n,r){const{geometry:o,_indirectBuffer:a}=s;for(let l=i,c=i+n;l<c;l++){let h=a?a[l]:l;Da(o,e,t,h,r)}}function My(s,e,t,i,n){const{geometry:r,_indirectBuffer:o}=s;let a=1/0,l=null;for(let c=i,h=i+n;c<h;c++){let d;d=Da(r,e,t,o?o[c]:c),d&&d.distance<a&&(l=d,a=d.distance)}return l}function Oy(s,e,t,i,n,r,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=s,d=e+s;h<d;h++){let u;if(u=t.resolveTriangleIndex(h),Ge(o,u*3,l,c),o.needsUpdate=!0,i(o,u,n,r))return!0}return!1}const Kh=new L;function ky(s,e,t,i,n){Ie.setBuffer(s._roots[e]),Yl(0,s,t,i,n),Ie.clearBuffer()}function Yl(s,e,t,i,n){const{float32Array:r,uint16Array:o,uint32Array:a}=Ie,l=s*2;if(Et(l,o)){const c=Tt(s,a),h=Lt(l,o);Sy(e,t,i,c,h,n)}else{const c=$t(s);Qi(c,r,i,Kh)&&Yl(c,e,t,i,n);const h=Nt(s,a);Qi(h,r,i,Kh)&&Yl(h,e,t,i,n)}}const Jh=new L,Dy=["x","y","z"];function zy(s,e,t,i){Ie.setBuffer(s._roots[e]);const n=Gl(0,s,t,i);return Ie.clearBuffer(),n}function Gl(s,e,t,i){const{float32Array:n,uint16Array:r,uint32Array:o}=Ie;let a=s*2;if(Et(a,r)){const l=Tt(s,o),c=Lt(a,r);return Ey(e,t,i,l,c)}else{const l=Dp(s,o),c=Dy[l],h=i.direction[c]>=0;let d,u;h?(d=$t(s),u=Nt(s,o)):(d=Nt(s,o),u=$t(s));const p=Qi(d,n,i,Jh)?Gl(d,e,t,i):null;if(p){const m=p.point[c];if(h?m<=n[u+l]:m>=n[u+l+3])return p}const g=Qi(u,n,i,Jh)?Gl(u,e,t,i):null;return p&&g?p.distance<=g.distance?p:g:p||g||null}}const mo=new Ve,Gs=new Jt,Xs=new Jt,Kn=new Ee,ed=new vt,go=new vt;function Iy(s,e,t,i){Ie.setBuffer(s._roots[e]);const n=Xl(0,s,t,i);return Ie.clearBuffer(),n}function Xl(s,e,t,i,n=null){const{float32Array:r,uint16Array:o,uint32Array:a}=Ie;let l=s*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),ed.set(t.boundingBox.min,t.boundingBox.max,i),n=ed),Et(l,o)){const c=e.geometry,h=c.index,d=c.attributes.position,u=t.index,p=t.attributes.position,g=Tt(s,a),m=Lt(l,o);if(Kn.copy(i).invert(),t.boundsTree)return Be(s,r,go),go.matrix.copy(Kn),go.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>go.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let f=g*3,b=(m+g)*3;f<b;f+=3)if(Ge(Xs,f,h,d),Xs.needsUpdate=!0,v.intersectsTriangle(Xs))return!0;return!1}});for(let v=g*3,f=(m+g)*3;v<f;v+=3){Ge(Gs,v,h,d),Gs.a.applyMatrix4(Kn),Gs.b.applyMatrix4(Kn),Gs.c.applyMatrix4(Kn),Gs.needsUpdate=!0;for(let b=0,y=u.count;b<y;b+=3)if(Ge(Xs,b,u,p),Xs.needsUpdate=!0,Gs.intersectsTriangle(Xs))return!0}}else{const c=s+8,h=a[s+6];return Be(c,r,mo),!!(n.intersectsBox(mo)&&Xl(c,e,t,i,n)||(Be(h,r,mo),n.intersectsBox(mo)&&Xl(h,e,t,i,n)))}}const vo=new Ee,dl=new vt,Jn=new vt,Ly=new L,$y=new L,Ny=new L,By=new L;function Ry(s,e,t,i={},n={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),dl.set(e.boundingBox.min,e.boundingBox.max,t),dl.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,d=e.index,u=It.getPrimitive(),p=It.getPrimitive();let g=Ly,m=$y,v=null,f=null;n&&(v=Ny,f=By);let b=1/0,y=null,w=null;return vo.copy(t).invert(),Jn.matrix.copy(vo),s.shapecast({boundsTraverseOrder:S=>dl.distanceToBox(S),intersectsBounds:(S,T,P)=>P<b&&P<o?(T&&(Jn.min.copy(S.min),Jn.max.copy(S.max),Jn.needsUpdate=!0),!0):!1,intersectsRange:(S,T)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:P=>Jn.distanceToBox(P),intersectsBounds:(P,D,M)=>M<b&&M<o,intersectsRange:(P,D)=>{for(let M=P,I=P+D;M<I;M++){Ge(p,3*M,d,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let R=S,A=S+T;R<A;R++){Ge(u,3*R,c,l),u.needsUpdate=!0;const O=u.distanceToTriangle(p,g,v);if(O<b&&(m.copy(g),f&&f.copy(v),b=O,y=R,w=M),O<r)return!0}}}});{const P=Mn(e);for(let D=0,M=P;D<M;D++){Ge(p,3*D,d,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let I=S,R=S+T;I<R;I++){Ge(u,3*I,c,l),u.needsUpdate=!0;const A=u.distanceToTriangle(p,g,v);if(A<b&&(m.copy(g),f&&f.copy(v),b=A,y=I,w=D),A<r)return!0}}}}}),It.releasePrimitive(u),It.releasePrimitive(p),b===1/0?null:(i.point?i.point.copy(m):i.point=m.clone(),i.distance=b,i.faceIndex=y,n&&(n.point?n.point.copy(f):n.point=f.clone(),n.point.applyMatrix4(vo),m.applyMatrix4(vo),n.distance=m.sub(n.point).length(),n.faceIndex=w),i)}function Uy(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,i=t.index?t.index.array:null,n=t.attributes.position;let r,o,a,l,c=0;const h=s._roots;for(let u=0,p=h.length;u<p;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,c),c+=r.byteLength;function d(u,p,g=!1){const m=u*2;if(a[m+15]===ka){const v=o[u+6],f=a[m+14];let b=1/0,y=1/0,w=1/0,S=-1/0,T=-1/0,P=-1/0;for(let D=v,M=v+f;D<M;D++){const I=3*s.resolveTriangleIndex(D);for(let R=0;R<3;R++){let A=I+R;A=i?i[A]:A;const O=n.getX(A),_=n.getY(A),$=n.getZ(A);O<b&&(b=O),O>S&&(S=O),_<y&&(y=_),_>T&&(T=_),$<w&&(w=$),$>P&&(P=$)}}return l[u+0]!==b||l[u+1]!==y||l[u+2]!==w||l[u+3]!==S||l[u+4]!==T||l[u+5]!==P?(l[u+0]=b,l[u+1]=y,l[u+2]=w,l[u+3]=S,l[u+4]=T,l[u+5]=P,!0):!1}else{const v=u+8,f=o[u+6],b=v+p,y=f+p;let w=g,S=!1,T=!1;e?w||(S=e.has(b),T=e.has(y),w=!S&&!T):(S=!0,T=!0);const P=w||S,D=w||T;let M=!1;P&&(M=d(v,p,w));let I=!1;D&&(I=d(f,p,w));const R=M||I;if(R)for(let A=0;A<3;A++){const O=v+A,_=f+A,$=l[O],X=l[O+3],V=l[_],J=l[_+3];l[u+A]=$<V?$:V,l[u+A+3]=X>J?X:J}return R}}}const td=new L;function Fy(s,e,t,i,n){Ie.setBuffer(s._roots[e]),Zl(0,s,t,i,n),Ie.clearBuffer()}function Zl(s,e,t,i,n){const{float32Array:r,uint16Array:o,uint32Array:a}=Ie,l=s*2;if(Et(l,o)){const c=Tt(s,a),h=Lt(l,o);Py(e,t,i,c,h,n)}else{const c=$t(s);Qi(c,r,i,td)&&Zl(c,e,t,i,n);const h=Nt(s,a);Qi(h,r,i,td)&&Zl(h,e,t,i,n)}}const id=new L,jy=["x","y","z"];function Hy(s,e,t,i){Ie.setBuffer(s._roots[e]);const n=Ql(0,s,t,i);return Ie.clearBuffer(),n}function Ql(s,e,t,i){const{float32Array:n,uint16Array:r,uint32Array:o}=Ie;let a=s*2;if(Et(a,r)){const l=Tt(s,o),c=Lt(a,r);return My(e,t,i,l,c)}else{const l=Dp(s,o),c=jy[l],h=i.direction[c]>=0;let d,u;h?(d=$t(s),u=Nt(s,o)):(d=Nt(s,o),u=$t(s));const p=Qi(d,n,i,id)?Ql(d,e,t,i):null;if(p){const m=p.point[c];if(h?m<=n[u+l]:m>=n[u+l+3])return p}const g=Qi(u,n,i,id)?Ql(u,e,t,i):null;return p&&g?p.distance<=g.distance?p:g:p||g||null}}const bo=new Ve,Zs=new Jt,Qs=new Jt,er=new Ee,sd=new vt,yo=new vt;function Vy(s,e,t,i){Ie.setBuffer(s._roots[e]);const n=Kl(0,s,t,i);return Ie.clearBuffer(),n}function Kl(s,e,t,i,n=null){const{float32Array:r,uint16Array:o,uint32Array:a}=Ie;let l=s*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),sd.set(t.boundingBox.min,t.boundingBox.max,i),n=sd),Et(l,o)){const c=e.geometry,h=c.index,d=c.attributes.position,u=t.index,p=t.attributes.position,g=Tt(s,a),m=Lt(l,o);if(er.copy(i).invert(),t.boundsTree)return Be(s,r,yo),yo.matrix.copy(er),yo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>yo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let f=g,b=m+g;f<b;f++)if(Ge(Qs,3*e.resolveTriangleIndex(f),h,d),Qs.needsUpdate=!0,v.intersectsTriangle(Qs))return!0;return!1}});for(let v=g,f=m+g;v<f;v++){const b=e.resolveTriangleIndex(v);Ge(Zs,3*b,h,d),Zs.a.applyMatrix4(er),Zs.b.applyMatrix4(er),Zs.c.applyMatrix4(er),Zs.needsUpdate=!0;for(let y=0,w=u.count;y<w;y+=3)if(Ge(Qs,y,u,p),Qs.needsUpdate=!0,Zs.intersectsTriangle(Qs))return!0}}else{const c=s+8,h=a[s+6];return Be(c,r,bo),!!(n.intersectsBox(bo)&&Kl(c,e,t,i,n)||(Be(h,r,bo),n.intersectsBox(bo)&&Kl(h,e,t,i,n)))}}const _o=new Ee,ul=new vt,tr=new vt,Wy=new L,qy=new L,Yy=new L,Gy=new L;function Xy(s,e,t,i={},n={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),ul.set(e.boundingBox.min,e.boundingBox.max,t),ul.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,d=e.index,u=It.getPrimitive(),p=It.getPrimitive();let g=Wy,m=qy,v=null,f=null;n&&(v=Yy,f=Gy);let b=1/0,y=null,w=null;return _o.copy(t).invert(),tr.matrix.copy(_o),s.shapecast({boundsTraverseOrder:S=>ul.distanceToBox(S),intersectsBounds:(S,T,P)=>P<b&&P<o?(T&&(tr.min.copy(S.min),tr.max.copy(S.max),tr.needsUpdate=!0),!0):!1,intersectsRange:(S,T)=>{if(e.boundsTree){const P=e.boundsTree;return P.shapecast({boundsTraverseOrder:D=>tr.distanceToBox(D),intersectsBounds:(D,M,I)=>I<b&&I<o,intersectsRange:(D,M)=>{for(let I=D,R=D+M;I<R;I++){const A=P.resolveTriangleIndex(I);Ge(p,3*A,d,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let O=S,_=S+T;O<_;O++){const $=s.resolveTriangleIndex(O);Ge(u,3*$,c,l),u.needsUpdate=!0;const X=u.distanceToTriangle(p,g,v);if(X<b&&(m.copy(g),f&&f.copy(v),b=X,y=O,w=I),X<r)return!0}}}})}else{const P=Mn(e);for(let D=0,M=P;D<M;D++){Ge(p,3*D,d,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let I=S,R=S+T;I<R;I++){const A=s.resolveTriangleIndex(I);Ge(u,3*A,c,l),u.needsUpdate=!0;const O=u.distanceToTriangle(p,g,v);if(O<b&&(m.copy(g),f&&f.copy(v),b=O,y=I,w=D),O<r)return!0}}}}}),It.releasePrimitive(u),It.releasePrimitive(p),b===1/0?null:(i.point?i.point.copy(m):i.point=m.clone(),i.distance=b,i.faceIndex=y,n&&(n.point?n.point.copy(f):n.point=f.clone(),n.point.applyMatrix4(_o),m.applyMatrix4(_o),n.distance=m.sub(n.point).length(),n.faceIndex=w),i)}function Zy(){return typeof SharedArrayBuffer<"u"}const pr=new Ie.constructor,ta=new Ie.constructor,Ui=new Hc(()=>new Ve),Ks=new Ve,Js=new Ve,pl=new Ve,fl=new Ve;let ml=!1;function Qy(s,e,t,i){if(ml)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ml=!0;const n=s._roots,r=e._roots;let o,a=0,l=0;const c=new Ee().copy(t).invert();for(let h=0,d=n.length;h<d;h++){pr.setBuffer(n[h]),l=0;const u=Ui.getPrimitive();Be(0,pr.float32Array,u),u.applyMatrix4(c);for(let p=0,g=r.length;p<g&&(ta.setBuffer(r[h]),o=Gt(0,0,t,c,i,a,l,0,0,u),ta.clearBuffer(),l+=r[p].length,!o);p++);if(Ui.releasePrimitive(u),pr.clearBuffer(),a+=n[h].length,o)break}return ml=!1,o}function Gt(s,e,t,i,n,r=0,o=0,a=0,l=0,c=null,h=!1){let d,u;h?(d=ta,u=pr):(d=pr,u=ta);const p=d.float32Array,g=d.uint32Array,m=d.uint16Array,v=u.float32Array,f=u.uint32Array,b=u.uint16Array,y=s*2,w=e*2,S=Et(y,m),T=Et(w,b);let P=!1;if(T&&S)h?P=n(Tt(e,f),Lt(e*2,b),Tt(s,g),Lt(s*2,m),l,o+e,a,r+s):P=n(Tt(s,g),Lt(s*2,m),Tt(e,f),Lt(e*2,b),a,r+s,l,o+e);else if(T){const D=Ui.getPrimitive();Be(e,v,D),D.applyMatrix4(t);const M=$t(s),I=Nt(s,g);Be(M,p,Ks),Be(I,p,Js);const R=D.intersectsBox(Ks),A=D.intersectsBox(Js);P=R&&Gt(e,M,i,t,n,o,r,l,a+1,D,!h)||A&&Gt(e,I,i,t,n,o,r,l,a+1,D,!h),Ui.releasePrimitive(D)}else{const D=$t(e),M=Nt(e,f);Be(D,v,pl),Be(M,v,fl);const I=c.intersectsBox(pl),R=c.intersectsBox(fl);if(I&&R)P=Gt(s,D,t,i,n,r,o,a,l+1,c,h)||Gt(s,M,t,i,n,r,o,a,l+1,c,h);else if(I)if(S)P=Gt(s,D,t,i,n,r,o,a,l+1,c,h);else{const A=Ui.getPrimitive();A.copy(pl).applyMatrix4(t);const O=$t(s),_=Nt(s,g);Be(O,p,Ks),Be(_,p,Js);const $=A.intersectsBox(Ks),X=A.intersectsBox(Js);P=$&&Gt(D,O,i,t,n,o,r,l,a+1,A,!h)||X&&Gt(D,_,i,t,n,o,r,l,a+1,A,!h),Ui.releasePrimitive(A)}else if(R)if(S)P=Gt(s,M,t,i,n,r,o,a,l+1,c,h);else{const A=Ui.getPrimitive();A.copy(fl).applyMatrix4(t);const O=$t(s),_=Nt(s,g);Be(O,p,Ks),Be(_,p,Js);const $=A.intersectsBox(Ks),X=A.intersectsBox(Js);P=$&&Gt(M,O,i,t,n,o,r,l,a+1,A,!h)||X&&Gt(M,_,i,t,n,o,r,l,a+1,A,!h),Ui.releasePrimitive(A)}}return P}const wo=new vt,nd=new Ve;let Ky=class zp{static serialize(e,t={}){t={cloneBuffers:!0,...t};const i=e.geometry,n=e._roots,r=e._indirectBuffer,o=i.getIndex();let a;return t.cloneBuffers?a={roots:n.map(l=>l.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:a={roots:n,index:o.array,indirectBuffer:r},a}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:n,roots:r,indirectBuffer:o}=e,a=new zp(t,{...i,[al]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){const l=t.getIndex();if(l===null){const c=new At(e.index,1,!1);t.setIndex(c)}else l.array!==n&&(l.array.set(n),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:Mp,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,[al]:!1},t),t.useSharedArrayBuffer&&!Zy())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[al]||(fy(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ve)));const{_indirectBuffer:i}=this;this.resolveTriangleIndex=t.indirect?n=>i[n]:n=>n}refit(e=null){return(this.indirect?Uy:Ay)(this,e)}traverse(e,t=0){const i=this._roots[t],n=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,h=r[c+15]===ka;if(h){const d=n[a+6],u=r[c+14];e(l,h,new Float32Array(i,a*4,6),d,u)}else{const d=a+Ho/4,u=n[a+6],p=n[a+7];e(l,h,new Float32Array(i,a*4,6),p)||(o(d,l+1),o(u,l+1))}}}raycast(e,t=Eh){const i=this._roots,n=this.geometry,r=[],o=t.isMaterial,a=Array.isArray(t),l=n.groups,c=o?t.side:t,h=this.indirect?Fy:ky;for(let d=0,u=i.length;d<u;d++){const p=a?t[l[d].materialIndex].side:c,g=r.length;if(h(this,d,p,e,r),a){const m=l[d].materialIndex;for(let v=g,f=r.length;v<f;v++)r[v].face.materialIndex=m}}return r}raycastFirst(e,t=Eh){const i=this._roots,n=this.geometry,r=t.isMaterial,o=Array.isArray(t);let a=null;const l=n.groups,c=r?t.side:t,h=this.indirect?Hy:zy;for(let d=0,u=i.length;d<u;d++){const p=o?t[l[d].materialIndex].side:c,g=h(this,d,p,e);g!=null&&(a==null||g.distance<a.distance)&&(a=g,o&&(g.face.materialIndex=l[d].materialIndex))}return a}intersectsGeometry(e,t){let i=!1;const n=this._roots,r=this.indirect?Vy:Iy;for(let o=0,a=n.length;o<a&&(i=r(this,o,e,t),!i);o++);return i}shapecast(e){const t=It.getPrimitive(),i=this.indirect?Oy:Ty;let{boundsTraverseOrder:n,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const d=o;o=(u,p,g,m,v)=>d(u,p,g,m,v)?!0:i(u,p,this,a,g,m,t)}else o||(a?o=(d,u,p,g)=>i(d,u,this,a,p,g,t):o=(d,u,p)=>p);let l=!1,c=0;const h=this._roots;for(let d=0,u=h.length;d<u;d++){const p=h[d];if(l=_y(this,d,r,o,n,c),l)break;c+=p.byteLength}return It.releasePrimitive(t),l}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:r}=i;const o=It.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const m=this.resolveTriangleIndex(g);Ge(o,m*3,a,l)}:g=>{Ge(o,g*3,a,l)},h=It.getPrimitive(),d=e.geometry.index,u=e.geometry.attributes.position,p=e.indirect?g=>{const m=e.resolveTriangleIndex(g);Ge(h,m*3,d,u)}:g=>{Ge(h,g*3,d,u)};if(r){const g=(m,v,f,b,y,w,S,T)=>{for(let P=f,D=f+b;P<D;P++){p(P),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=m,I=m+v;M<I;M++)if(c(M),o.needsUpdate=!0,r(o,h,M,P,y,w,S,T))return!0}return!1};if(n){const m=n;n=function(v,f,b,y,w,S,T,P){return m(v,f,b,y,w,S,T,P)?!0:g(v,f,b,y,w,S,T,P)}}else n=g}return Qy(this,e,t,n)}intersectsBox(e,t){return wo.set(e.min,e.max,t),wo.needsUpdate=!0,this.shapecast({intersectsBounds:i=>wo.intersectsBox(i),intersectsTriangle:i=>wo.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},r=0,o=1/0){return(this.indirect?Xy:Ry)(this,e,t,i,n,r,o)}closestPointToPoint(e,t={},i=0,n=1/0){return wy(this,e,t,i,n)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{Be(0,new Float32Array(t),nd),e.union(nd)}),e}};function rd(s,e,t){return s===null||(s.point.applyMatrix4(e.matrixWorld),s.distance=s.point.distanceTo(t.ray.origin),s.object=e,s.distance<t.near||s.distance>t.far)?null:s}const gl=new Tg,od=new Ee,Jy=oe.prototype.raycast;function e0(s,e){if(this.geometry.boundsTree){if(this.material===void 0)return;od.copy(this.matrixWorld).invert(),gl.copy(s.ray).applyMatrix4(od);const t=this.geometry.boundsTree;if(s.firstHitOnly===!0){const i=rd(t.raycastFirst(gl,this.material),this,s);i&&e.push(i)}else{const i=t.raycast(gl,this.material);for(let n=0,r=i.length;n<r;n++){const o=rd(i[n],this,s);o&&e.push(o)}}}else Jy.call(this,s,e)}function t0(s){return this.boundsTree=new Ky(this,s),this.boundsTree}function i0(){this.boundsTree=null}const Ip=class Lp{constructor(){C(this,"onDisposed",new K),C(this,"list",new Ue),C(this,"enabled",!1),C(this,"_clock"),C(this,"onInit",new K),C(this,"update",()=>{if(!this.enabled)return;const e=this._clock.getDelta();for(const[t,i]of this.list)i.enabled&&i.isUpdateable()&&i.update(e);requestAnimationFrame(this.update)}),this._clock=new ju,Lp.setupBVH()}add(e,t){if(this.list.has(e))throw new Error("You're trying to add a component that already exists in the components instance. Use Components.get() instead.");ot.validate(e),this.list.set(e,t)}get(e){const t=e.uuid;if(!this.list.has(t)){const i=new e(this);return i.isDisposeable()&&i.onDisposed.add(()=>this.list.delete(t)),this.list.has(t)||this.add(t,i),i}return this.list.get(t)}init(){this.enabled=!0;for(const[e,t]of this.list.entries())t.enabled=!0;this._clock.start(),this.update(),this.onInit.trigger()}dispose(){this.enabled=!1;let e;for(const[t,i]of this.list){if(i.enabled=!1,t===ue.uuid){e=i;continue}i.isDisposeable()&&i.dispose()}e==null||e.dispose(),this._clock.stop(),this.onDisposed.trigger()}static setupBVH(){at.prototype.computeBoundsTree=t0,at.prototype.disposeBoundsTree=i0,oe.prototype.raycast=e0}};C(Ip,"release","2.4.3");let $p=Ip,s0=class{constructor(e){C(this,"enabled",!1),C(this,"id","FirstPerson"),this.camera=e}set(e){if(this.enabled=e,e){if(this.camera.projection.current!=="Perspective"){this.camera.set("Orbit");return}this.setupFirstPersonCamera()}}setupFirstPersonCamera(){const e=this.camera.controls,t=new L;e.distance--,e.getPosition(t),e.minDistance=1,e.maxDistance=1,e.distance=1,e.moveTo(t.x,t.y,t.z),e.truckSpeed=50,e.mouseButtons.wheel=St.ACTION.DOLLY,e.touches.two=St.ACTION.TOUCH_ZOOM_TRUCK}},n0=class{constructor(e){C(this,"enabled",!0),C(this,"id","Orbit"),this.camera=e,this.activateOrbitControls()}set(e){this.enabled=e,e&&this.activateOrbitControls()}activateOrbitControls(){const e=this.camera.controls;e.minDistance=1,e.maxDistance=300;const t=new L;e.getPosition(t);const i=t.length();e.distance=i,e.truckSpeed=2;const{rotation:n}=this.camera.three,r=new L(0,0,-1).applyEuler(n),o=t.addScaledVector(r,i);e.moveTo(o.x,o.y,o.z)}},r0=class{constructor(e){C(this,"enabled",!1),C(this,"id","Plan"),C(this,"mouseAction1"),C(this,"mouseAction2"),C(this,"mouseInitialized",!1),C(this,"defaultAzimuthSpeed"),C(this,"defaultPolarSpeed"),this.camera=e,this.defaultAzimuthSpeed=e.controls.azimuthRotateSpeed,this.defaultPolarSpeed=e.controls.polarRotateSpeed}set(e){this.enabled=e;const t=this.camera.controls;t.azimuthRotateSpeed=e?0:this.defaultAzimuthSpeed,t.polarRotateSpeed=e?0:this.defaultPolarSpeed,this.mouseInitialized||(this.mouseAction1=t.touches.one,this.mouseAction2=t.touches.two,this.mouseInitialized=!0),e?(t.mouseButtons.left=St.ACTION.TRUCK,t.touches.one=St.ACTION.TOUCH_TRUCK,t.touches.two=St.ACTION.TOUCH_ZOOM):(t.mouseButtons.left=St.ACTION.ROTATE,t.touches.one=this.mouseAction1,t.touches.two=this.mouseAction2)}},o0=class{constructor(e){C(this,"onChanged",new K),C(this,"current","Perspective"),C(this,"camera"),C(this,"matchOrthoDistanceEnabled",!1),C(this,"_component"),C(this,"_previousDistance",-1),this._component=e,this.camera=e.three}async set(e){this.current!==e&&(e==="Orthographic"?this.setOrthoCamera():await this.setPerspectiveCamera(),this.onChanged.trigger(this.camera))}async toggle(){const e=this.current==="Perspective"?"Orthographic":"Perspective";await this.set(e)}setOrthoCamera(){if(this._component.mode===null||this._component.mode.id==="FirstPerson")return;this._previousDistance=this._component.controls.distance,this._component.controls.distance=200;const e=this.getPerspectiveDims();if(!e)return;const{width:t,height:i}=e;this.setupOrthoCamera(i,t),this.camera=this._component.threeOrtho,this.current="Orthographic"}getPerspectiveDims(){const e=this._component.currentWorld;if(!e||!e.renderer)return null;const t=new L;this._component.threePersp.getWorldDirection(t);const i=new L;this._component.controls.getTarget(i);const n=i.clone().sub(this._component.threePersp.position).dot(t),r=e.renderer.getSize(),o=r.x/r.y,a=this._component.threePersp,l=n*2*Math.atan(a.fov*(Math.PI/180)/2);return{width:l*o,height:l}}setupOrthoCamera(e,t){this._component.controls.mouseButtons.wheel=St.ACTION.ZOOM,this._component.controls.mouseButtons.middle=St.ACTION.ZOOM;const i=this._component.threePersp,n=this._component.threeOrtho;n.zoom=1,n.left=t/-2,n.right=t/2,n.top=e/2,n.bottom=e/-2,n.updateProjectionMatrix(),n.position.copy(i.position),n.quaternion.copy(i.quaternion),this._component.controls.camera=n}getDistance(){const e=this._component.threePersp,t=this._component.threeOrtho;return(t.top-t.bottom)/t.zoom/(2*Math.atan(e.fov*(Math.PI/180)/2))}async setPerspectiveCamera(){this._component.controls.mouseButtons.wheel=St.ACTION.DOLLY,this._component.controls.mouseButtons.middle=St.ACTION.DOLLY;const e=this._component.threePersp,t=this._component.threeOrtho;e.position.copy(t.position),e.quaternion.copy(t.quaternion),this._component.controls.mouseButtons.wheel=St.ACTION.DOLLY,this.matchOrthoDistanceEnabled?this._component.controls.distance=this.getDistance():this._component.controls.distance=this._previousDistance,await this._component.controls.zoomTo(1),e.updateProjectionMatrix(),this._component.controls.camera=e,this.camera=e,this.current="Perspective"}},Np=class extends Wl{constructor(e){super(e),C(this,"projection"),C(this,"threeOrtho"),C(this,"threePersp"),C(this,"_userInputButtons",{}),C(this,"_frustumSize",50),C(this,"_navigationModes",new Map),C(this,"_mode",null),C(this,"previousSize",null),this.threePersp=this.three,this.threeOrtho=this.newOrthoCamera(),this.projection=new o0(this),this.onAspectUpdated.add(()=>{this.setOrthoPerspCameraAspect()}),this.projection.onChanged.add(t=>{this.three=t,this.updateAspect()}),this.worlds.onItemSet.add(()=>{this._navigationModes.clear(),this._navigationModes.set("Orbit",new n0(this)),this._navigationModes.set("FirstPerson",new s0(this)),this._navigationModes.set("Plan",new r0(this)),this._mode=this._navigationModes.get("Orbit"),this.mode.set(!0,{preventTargetAdjustment:!0}),this.currentWorld&&this.currentWorld.renderer&&(this.previousSize=this.currentWorld.renderer.getSize().clone())}),this.worlds.onItemDeleted.add(()=>{this._navigationModes.clear()})}get mode(){if(!this._mode)throw new Error("Mode not found, camera not initialized");return this._mode}dispose(){super.dispose(),this.threeOrtho.removeFromParent()}set(e){if(this.mode!==null&&this.mode.id!==e){if(this.mode.set(!1),!this._navigationModes.has(e))throw new Error("The specified mode does not exist!");this._mode=this._navigationModes.get(e),this.mode.set(!0)}}async fit(e,t=1.5){if(!this.enabled)return;const i=Number.MAX_VALUE,n=Number.MIN_VALUE,r=new L(i,i,i),o=new L(n,n,n);for(const p of e){const g=new Ve().setFromObject(p);g.min.x<r.x&&(r.x=g.min.x),g.min.y<r.y&&(r.y=g.min.y),g.min.z<r.z&&(r.z=g.min.z),g.max.x>o.x&&(o.x=g.max.x),g.max.y>o.y&&(o.y=g.max.y),g.max.z>o.z&&(o.z=g.max.z)}const a=new Ve(r,o),l=this.components.get(ue);if(l.initialized)for(const[,p]of l.list){const g=p.box;g.min.x<r.x&&(r.x=g.min.x),g.min.y<r.y&&(r.y=g.min.y),g.min.z<r.z&&(r.z=g.min.z),g.max.x>o.x&&(o.x=g.max.x),g.max.y>o.y&&(o.y=g.max.y),g.max.z>o.z&&(o.z=g.max.z)}const c=new L;a.getSize(c);const h=new L;a.getCenter(h);const d=Math.max(c.x,c.y,c.z)*t,u=new Xi(h,d);await this.controls.fitToSphere(u,!0)}setUserInput(e){e?this.enableUserInput():this.disableUserInput()}addCustomNavigationMode(e){this._navigationModes.set(e.id,e)}disableUserInput(){this._userInputButtons.left=this.controls.mouseButtons.left,this._userInputButtons.right=this.controls.mouseButtons.right,this._userInputButtons.middle=this.controls.mouseButtons.middle,this._userInputButtons.wheel=this.controls.mouseButtons.wheel,this.controls.mouseButtons.left=0,this.controls.mouseButtons.right=0,this.controls.mouseButtons.middle=0,this.controls.mouseButtons.wheel=0}enableUserInput(){Object.keys(this._userInputButtons).length!==0&&(this.controls.mouseButtons.left=this._userInputButtons.left,this.controls.mouseButtons.right=this._userInputButtons.right,this.controls.mouseButtons.middle=this._userInputButtons.middle,this.controls.mouseButtons.wheel=this._userInputButtons.wheel)}newOrthoCamera(){const e=window.innerWidth/window.innerHeight;return new Ca(this._frustumSize*e/-2,this._frustumSize*e/2,this._frustumSize/2,this._frustumSize/-2,.1,1e3)}setOrthoPerspCameraAspect(){if(!this.currentWorld||!this.currentWorld.renderer||!this.previousSize)return;const e=this.currentWorld.renderer.getSize(),t=this.threeOrtho.top,i=this.threeOrtho.right,n=e.y/this.previousSize.y,r=e.x/this.previousSize.x,o=t*n,a=i*r;this.threeOrtho.left=-a,this.threeOrtho.right=a,this.threeOrtho.top=o,this.threeOrtho.bottom=-o,this.threeOrtho.updateProjectionMatrix(),this.previousSize.copy(e)}};function xo(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Bp={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,e){(function(t){s.exports=t()})(function(){return function t(i,n,r){function o(c,h){if(!n[c]){if(!i[c]){var d=typeof xo=="function"&&xo;if(!h&&d)return d(c,!0);if(a)return a(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[c]={exports:{}};i[c][0].call(p.exports,function(g){var m=i[c][1][g];return o(m||g)},p,p.exports,t,i,n,r)}return n[c].exports}for(var a=typeof xo=="function"&&xo,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,i,n){var r=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(l){for(var c,h,d,u,p,g,m,v=[],f=0,b=l.length,y=b,w=r.getTypeOf(l)!=="string";f<l.length;)y=b-f,d=w?(c=l[f++],h=f<b?l[f++]:0,f<b?l[f++]:0):(c=l.charCodeAt(f++),h=f<b?l.charCodeAt(f++):0,f<b?l.charCodeAt(f++):0),u=c>>2,p=(3&c)<<4|h>>4,g=1<y?(15&h)<<2|d>>6:64,m=2<y?63&d:64,v.push(a.charAt(u)+a.charAt(p)+a.charAt(g)+a.charAt(m));return v.join("")},n.decode=function(l){var c,h,d,u,p,g,m=0,v=0,f="data:";if(l.substr(0,f.length)===f)throw new Error("Invalid base64 input, it looks like a data url.");var b,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&y--,l.charAt(l.length-2)===a.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=o.uint8array?new Uint8Array(0|y):new Array(0|y);m<l.length;)c=a.indexOf(l.charAt(m++))<<2|(u=a.indexOf(l.charAt(m++)))>>4,h=(15&u)<<4|(p=a.indexOf(l.charAt(m++)))>>2,d=(3&p)<<6|(g=a.indexOf(l.charAt(m++))),b[v++]=c,p!==64&&(b[v++]=h),g!==64&&(b[v++]=d);return b}},{"./support":30,"./utils":32}],2:[function(t,i,n){var r=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(h,d,u,p,g){this.compressedSize=h,this.uncompressedSize=d,this.crc32=u,this.compression=p,this.compressedContent=g}c.prototype={getContentWorker:function(){var h=new o(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return h.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),h},getCompressedWorker:function(){return new o(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(h,d,u){return h.pipe(new a).pipe(new l("uncompressedSize")).pipe(d.compressWorker(u)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,n){var r=t("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},n.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,n){var r=t("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var h=0;h<8;h++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();i.exports=function(a,l){return a!==void 0&&a.length?r.getTypeOf(a)!=="string"?function(c,h,d,u){var p=o,g=u+d;c^=-1;for(var m=u;m<g;m++)c=c>>>8^p[255&(c^h[m])];return-1^c}(0|l,a,a.length,0):function(c,h,d,u){var p=o,g=u+d;c^=-1;for(var m=u;m<g;m++)c=c>>>8^p[255&(c^h.charCodeAt(m))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(t,i,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(t,i,n){var r=null;r=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:r}},{lie:37}],7:[function(t,i,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),l=t("./stream/GenericWorker"),c=r?"uint8array":"array";function h(d,u){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=u,this.meta={}}n.magic="\b\0",a.inherits(h,l),h.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,d.data),!1)},h.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(u){d.push({data:u,meta:d.meta})}},n.compressWorker=function(d){return new h("Deflate",d)},n.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,n){function r(p,g){var m,v="";for(m=0;m<g;m++)v+=String.fromCharCode(255&p),p>>>=8;return v}function o(p,g,m,v,f,b){var y,w,S=p.file,T=p.compression,P=b!==c.utf8encode,D=a.transformTo("string",b(S.name)),M=a.transformTo("string",c.utf8encode(S.name)),I=S.comment,R=a.transformTo("string",b(I)),A=a.transformTo("string",c.utf8encode(I)),O=M.length!==S.name.length,_=A.length!==I.length,$="",X="",V="",J=S.dir,W=S.date,ne={crc32:0,compressedSize:0,uncompressedSize:0};g&&!m||(ne.crc32=p.crc32,ne.compressedSize=p.compressedSize,ne.uncompressedSize=p.uncompressedSize);var U=0;g&&(U|=8),P||!O&&!_||(U|=2048);var B=0,re=0;J&&(B|=16),f==="UNIX"?(re=798,B|=function(ee,he){var pe=ee;return ee||(pe=he?16893:33204),(65535&pe)<<16}(S.unixPermissions,J)):(re=20,B|=function(ee){return 63&(ee||0)}(S.dosPermissions)),y=W.getUTCHours(),y<<=6,y|=W.getUTCMinutes(),y<<=5,y|=W.getUTCSeconds()/2,w=W.getUTCFullYear()-1980,w<<=4,w|=W.getUTCMonth()+1,w<<=5,w|=W.getUTCDate(),O&&(X=r(1,1)+r(h(D),4)+M,$+="up"+r(X.length,2)+X),_&&(V=r(1,1)+r(h(R),4)+A,$+="uc"+r(V.length,2)+V);var ie="";return ie+=`
\0`,ie+=r(U,2),ie+=T.magic,ie+=r(y,2),ie+=r(w,2),ie+=r(ne.crc32,4),ie+=r(ne.compressedSize,4),ie+=r(ne.uncompressedSize,4),ie+=r(D.length,2),ie+=r($.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ie+D+$,dirRecord:d.CENTRAL_FILE_HEADER+r(re,2)+ie+r(R.length,2)+"\0\0\0\0"+r(B,4)+r(v,4)+D+$+R}}var a=t("../utils"),l=t("../stream/GenericWorker"),c=t("../utf8"),h=t("../crc32"),d=t("../signature");function u(p,g,m,v){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=m,this.encodeFileName=v,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,l),u.prototype.push=function(p){var g=p.meta.percent||0,m=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:m?(g+100*(m-v-1))/m:100}}))},u.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var g=this.streamFiles&&!p.file.dir;if(g){var m=o(p,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(p){this.accumulate=!1;var g=this.streamFiles&&!p.file.dir,m=o(p,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),g)this.push({data:function(v){return d.DATA_DESCRIPTOR+r(v.crc32,4)+r(v.compressedSize,4)+r(v.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var p=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var m=this.bytesWritten-p,v=function(f,b,y,w,S){var T=a.transformTo("string",S(w));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(f,2)+r(f,2)+r(b,4)+r(y,4)+r(T.length,2)+T}(this.dirRecords.length,m,p,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(p){this._sources.push(p);var g=this;return p.on("data",function(m){g.processChunk(m)}),p.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),p.on("error",function(m){g.error(m)}),this},u.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(p){var g=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var m=0;m<g.length;m++)try{g[m].error(p)}catch{}return!0},u.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,g=0;g<p.length;g++)p[g].lock()},i.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,n){var r=t("../compressions"),o=t("./ZipFileWorker");n.generateWorker=function(a,l,c){var h=new o(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{a.forEach(function(u,p){d++;var g=function(b,y){var w=b||y,S=r[w];if(!S)throw new Error(w+" is not a valid compression method !");return S}(p.options.compression,l.compression),m=p.options.compressionOptions||l.compressionOptions||{},v=p.dir,f=p.date;p._compressWorker(g,m).withStreamInfo("file",{name:u,dir:v,date:f,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(h)}),h.entriesCount=d}catch(u){h.error(u)}return h}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new r;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(o,a){return new r().loadAsync(o,a)},r.external=t("./external"),i.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,n){var r=t("./utils"),o=t("./external"),a=t("./utf8"),l=t("./zipEntries"),c=t("./stream/Crc32Probe"),h=t("./nodejsUtils");function d(u){return new o.Promise(function(p,g){var m=u.decompressed.getContentWorker().pipe(new c);m.on("error",function(v){g(v)}).on("end",function(){m.streamInfo.crc32!==u.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(u,p){var g=this;return p=r.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),h.isNode&&h.isStream(u)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",u,!0,p.optimizedBinaryString,p.base64).then(function(m){var v=new l(p);return v.load(m),v}).then(function(m){var v=[o.Promise.resolve(m)],f=m.files;if(p.checkCRC32)for(var b=0;b<f.length;b++)v.push(d(f[b]));return o.Promise.all(v)}).then(function(m){for(var v=m.shift(),f=v.files,b=0;b<f.length;b++){var y=f[b],w=y.fileNameStr,S=r.resolve(y.fileNameStr);g.file(S,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:p.createFolders}),y.dir||(g.file(S).unsafeOriginalName=w)}return v.zipComment.length&&(g.comment=v.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,n){var r=t("../utils"),o=t("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}r.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(h){c.push({data:h,meta:{percent:0}})}).on("error",function(h){c.isPaused?this.generatedError=h:c.error(h)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,n){var r=t("readable-stream").Readable;function o(a,l,c){r.call(this,l),this._helper=a;var h=this;a.on("data",function(d,u){h.push(d)||h._helper.pause(),c&&c(u)}).on("error",function(d){h.emit("error",d)}).on("end",function(){h.push(null)})}t("../utils").inherits(o,r),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,i,n){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,o);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,o)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var o=new Buffer(r);return o.fill(0),o},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,i,n){function r(S,T,P){var D,M=a.getTypeOf(T),I=a.extend(P||{},h);I.date=I.date||new Date,I.compression!==null&&(I.compression=I.compression.toUpperCase()),typeof I.unixPermissions=="string"&&(I.unixPermissions=parseInt(I.unixPermissions,8)),I.unixPermissions&&16384&I.unixPermissions&&(I.dir=!0),I.dosPermissions&&16&I.dosPermissions&&(I.dir=!0),I.dir&&(S=f(S)),I.createFolders&&(D=v(S))&&b.call(this,D,!0);var R=M==="string"&&I.binary===!1&&I.base64===!1;P&&P.binary!==void 0||(I.binary=!R),(T instanceof d&&T.uncompressedSize===0||I.dir||!T||T.length===0)&&(I.base64=!1,I.binary=!0,T="",I.compression="STORE",M="string");var A=null;A=T instanceof d||T instanceof l?T:g.isNode&&g.isStream(T)?new m(S,T):a.prepareContent(S,T,I.binary,I.optimizedBinaryString,I.base64);var O=new u(S,A,I);this.files[S]=O}var o=t("./utf8"),a=t("./utils"),l=t("./stream/GenericWorker"),c=t("./stream/StreamHelper"),h=t("./defaults"),d=t("./compressedObject"),u=t("./zipObject"),p=t("./generate"),g=t("./nodejsUtils"),m=t("./nodejs/NodejsStreamInputAdapter"),v=function(S){S.slice(-1)==="/"&&(S=S.substring(0,S.length-1));var T=S.lastIndexOf("/");return 0<T?S.substring(0,T):""},f=function(S){return S.slice(-1)!=="/"&&(S+="/"),S},b=function(S,T){return T=T!==void 0?T:h.createFolders,S=f(S),this.files[S]||r.call(this,S,null,{dir:!0,createFolders:T}),this.files[S]};function y(S){return Object.prototype.toString.call(S)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(S){var T,P,D;for(T in this.files)D=this.files[T],(P=T.slice(this.root.length,T.length))&&T.slice(0,this.root.length)===this.root&&S(P,D)},filter:function(S){var T=[];return this.forEach(function(P,D){S(P,D)&&T.push(D)}),T},file:function(S,T,P){if(arguments.length!==1)return S=this.root+S,r.call(this,S,T,P),this;if(y(S)){var D=S;return this.filter(function(I,R){return!R.dir&&D.test(I)})}var M=this.files[this.root+S];return M&&!M.dir?M:null},folder:function(S){if(!S)return this;if(y(S))return this.filter(function(M,I){return I.dir&&S.test(M)});var T=this.root+S,P=b.call(this,T),D=this.clone();return D.root=P.name,D},remove:function(S){S=this.root+S;var T=this.files[S];if(T||(S.slice(-1)!=="/"&&(S+="/"),T=this.files[S]),T&&!T.dir)delete this.files[S];else for(var P=this.filter(function(M,I){return I.name.slice(0,S.length)===S}),D=0;D<P.length;D++)delete this.files[P[D].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(S){var T,P={};try{if((P=a.extend(S||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");a.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var D=P.comment||this.comment||"";T=p.generateWorker(this,P,D)}catch(M){(T=new l("error")).error(M)}return new c(T,P.type||"string",P.mimeType)},generateAsync:function(S,T){return this.generateInternalStream(S).accumulate(T)},generateNodeStream:function(S,T){return(S=S||{}).type||(S.type="nodebuffer"),this.generateInternalStream(S).toNodejsStream(T)}};i.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,n){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,n){var r=t("./DataReader");function o(a){r.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}t("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),h=a.charCodeAt(2),d=a.charCodeAt(3),u=this.length-4;0<=u;--u)if(this.data[u]===l&&this.data[u+1]===c&&this.data[u+2]===h&&this.data[u+3]===d)return u-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),h=a.charCodeAt(2),d=a.charCodeAt(3),u=this.readData(4);return l===u[0]&&c===u[1]&&h===u[2]&&d===u[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,i,n){var r=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return r.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(t,i,n){var r=t("./Uint8ArrayReader");function o(a){r.call(this,a)}t("../utils").inherits(o,r),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,n){var r=t("./DataReader");function o(a){r.call(this,a)}t("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,i,n){var r=t("./ArrayReader");function o(a){r.call(this,a)}t("../utils").inherits(o,r),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,n){var r=t("../utils"),o=t("../support"),a=t("./ArrayReader"),l=t("./StringReader"),c=t("./NodeBufferReader"),h=t("./Uint8ArrayReader");i.exports=function(d){var u=r.getTypeOf(d);return r.checkSupport(u),u!=="string"||o.uint8array?u==="nodebuffer"?new c(d):o.uint8array?new h(r.transformTo("uint8array",d)):new a(r.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,n){var r=t("./GenericWorker"),o=t("../utils");function a(l){r.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,r),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,n){var r=t("./GenericWorker"),o=t("../crc32");function a(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,r),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,n){var r=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}r.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,n){var r=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(h){c.dataIsReady=!0,c.data=h,c.max=h&&h.length||0,c.type=r.getTypeOf(h),c.isPaused||c._tickAndRepeat()},function(h){c.error(h)})}r.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,n){function r(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=r},{}],29:[function(t,i,n){var r=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),l=t("../base64"),c=t("../support"),h=t("../external"),d=null;if(c.nodestream)try{d=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function u(g,m){return new h.Promise(function(v,f){var b=[],y=g._internalType,w=g._outputType,S=g._mimeType;g.on("data",function(T,P){b.push(T),m&&m(P)}).on("error",function(T){b=[],f(T)}).on("end",function(){try{var T=function(P,D,M){switch(P){case"blob":return r.newBlob(r.transformTo("arraybuffer",D),M);case"base64":return l.encode(D);default:return r.transformTo(P,D)}}(w,function(P,D){var M,I=0,R=null,A=0;for(M=0;M<D.length;M++)A+=D[M].length;switch(P){case"string":return D.join("");case"array":return Array.prototype.concat.apply([],D);case"uint8array":for(R=new Uint8Array(A),M=0;M<D.length;M++)R.set(D[M],I),I+=D[M].length;return R;case"nodebuffer":return Buffer.concat(D);default:throw new Error("concat : unsupported type '"+P+"'")}}(y,b),S);v(T)}catch(P){f(P)}b=[]}).resume()})}function p(g,m,v){var f=m;switch(m){case"blob":case"arraybuffer":f="uint8array";break;case"base64":f="string"}try{this._internalType=f,this._outputType=m,this._mimeType=v,r.checkSupport(f),this._worker=g.pipe(new o(f)),g.lock()}catch(b){this._worker=new a("error"),this._worker.error(b)}}p.prototype={accumulate:function(g){return u(this,g)},on:function(g,m){var v=this;return g==="data"?this._worker.on(g,function(f){m.call(v,f.data,f.meta)}):this._worker.on(g,function(){r.delay(m,arguments,v)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},g)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(r),n.blob=o.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!t("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,n){for(var r=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),l=t("./stream/GenericWorker"),c=new Array(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function u(){l.call(this,"utf-8 encode")}n.utf8encode=function(p){return o.nodebuffer?a.newBufferFrom(p,"utf-8"):function(g){var m,v,f,b,y,w=g.length,S=0;for(b=0;b<w;b++)(64512&(v=g.charCodeAt(b)))==55296&&b+1<w&&(64512&(f=g.charCodeAt(b+1)))==56320&&(v=65536+(v-55296<<10)+(f-56320),b++),S+=v<128?1:v<2048?2:v<65536?3:4;for(m=o.uint8array?new Uint8Array(S):new Array(S),b=y=0;y<S;b++)(64512&(v=g.charCodeAt(b)))==55296&&b+1<w&&(64512&(f=g.charCodeAt(b+1)))==56320&&(v=65536+(v-55296<<10)+(f-56320),b++),v<128?m[y++]=v:(v<2048?m[y++]=192|v>>>6:(v<65536?m[y++]=224|v>>>12:(m[y++]=240|v>>>18,m[y++]=128|v>>>12&63),m[y++]=128|v>>>6&63),m[y++]=128|63&v);return m}(p)},n.utf8decode=function(p){return o.nodebuffer?r.transformTo("nodebuffer",p).toString("utf-8"):function(g){var m,v,f,b,y=g.length,w=new Array(2*y);for(m=v=0;m<y;)if((f=g[m++])<128)w[v++]=f;else if(4<(b=c[f]))w[v++]=65533,m+=b-1;else{for(f&=b===2?31:b===3?15:7;1<b&&m<y;)f=f<<6|63&g[m++],b--;1<b?w[v++]=65533:f<65536?w[v++]=f:(f-=65536,w[v++]=55296|f>>10&1023,w[v++]=56320|1023&f)}return w.length!==v&&(w.subarray?w=w.subarray(0,v):w.length=v),r.applyFromCharCode(w)}(p=r.transformTo(o.uint8array?"uint8array":"array",p))},r.inherits(d,l),d.prototype.processChunk=function(p){var g=r.transformTo(o.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var m=g;(g=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),g.set(m,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var v=function(b,y){var w;for((y=y||b.length)>b.length&&(y=b.length),w=y-1;0<=w&&(192&b[w])==128;)w--;return w<0||w===0?y:w+c[b[w]]>y?w:y}(g),f=g;v!==g.length&&(o.uint8array?(f=g.subarray(0,v),this.leftOver=g.subarray(v,g.length)):(f=g.slice(0,v),this.leftOver=g.slice(v,g.length))),this.push({data:n.utf8decode(f),meta:p.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=d,r.inherits(u,l),u.prototype.processChunk=function(p){this.push({data:n.utf8encode(p.data),meta:p.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,n){var r=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),l=t("./external");function c(m){return m}function h(m,v){for(var f=0;f<m.length;++f)v[f]=255&m.charCodeAt(f);return v}t("setimmediate"),n.newBlob=function(m,v){n.checkSupport("blob");try{return new Blob([m],{type:v})}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return f.append(m),f.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(m,v,f){var b=[],y=0,w=m.length;if(w<=f)return String.fromCharCode.apply(null,m);for(;y<w;)v==="array"||v==="nodebuffer"?b.push(String.fromCharCode.apply(null,m.slice(y,Math.min(y+f,w)))):b.push(String.fromCharCode.apply(null,m.subarray(y,Math.min(y+f,w)))),y+=f;return b.join("")},stringifyByChar:function(m){for(var v="",f=0;f<m.length;f++)v+=String.fromCharCode(m[f]);return v},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(m){var v=65536,f=n.getTypeOf(m),b=!0;if(f==="uint8array"?b=d.applyCanBeUsed.uint8array:f==="nodebuffer"&&(b=d.applyCanBeUsed.nodebuffer),b)for(;1<v;)try{return d.stringifyByChunk(m,f,v)}catch{v=Math.floor(v/2)}return d.stringifyByChar(m)}function p(m,v){for(var f=0;f<m.length;f++)v[f]=m[f];return v}n.applyFromCharCode=u;var g={};g.string={string:c,array:function(m){return h(m,new Array(m.length))},arraybuffer:function(m){return g.string.uint8array(m).buffer},uint8array:function(m){return h(m,new Uint8Array(m.length))},nodebuffer:function(m){return h(m,a.allocBuffer(m.length))}},g.array={string:u,array:c,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return a.newBufferFrom(m)}},g.arraybuffer={string:function(m){return u(new Uint8Array(m))},array:function(m){return p(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:c,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return a.newBufferFrom(new Uint8Array(m))}},g.uint8array={string:u,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:c,nodebuffer:function(m){return a.newBufferFrom(m)}},g.nodebuffer={string:u,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return g.nodebuffer.uint8array(m).buffer},uint8array:function(m){return p(m,new Uint8Array(m.length))},nodebuffer:c},n.transformTo=function(m,v){if(v=v||"",!m)return v;n.checkSupport(m);var f=n.getTypeOf(v);return g[f][m](v)},n.resolve=function(m){for(var v=m.split("/"),f=[],b=0;b<v.length;b++){var y=v[b];y==="."||y===""&&b!==0&&b!==v.length-1||(y===".."?f.pop():f.push(y))}return f.join("/")},n.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":r.nodebuffer&&a.isBuffer(m)?"nodebuffer":r.uint8array&&m instanceof Uint8Array?"uint8array":r.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(m){if(!r[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(m){var v,f,b="";for(f=0;f<(m||"").length;f++)b+="\\x"+((v=m.charCodeAt(f))<16?"0":"")+v.toString(16).toUpperCase();return b},n.delay=function(m,v,f){setImmediate(function(){m.apply(f||null,v||[])})},n.inherits=function(m,v){function f(){}f.prototype=v.prototype,m.prototype=new f},n.extend=function(){var m,v,f={};for(m=0;m<arguments.length;m++)for(v in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],v)&&f[v]===void 0&&(f[v]=arguments[m][v]);return f},n.prepareContent=function(m,v,f,b,y){return l.Promise.resolve(v).then(function(w){return r.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new l.Promise(function(S,T){var P=new FileReader;P.onload=function(D){S(D.target.result)},P.onerror=function(D){T(D.target.error)},P.readAsArrayBuffer(w)}):w}).then(function(w){var S=n.getTypeOf(w);return S?(S==="arraybuffer"?w=n.transformTo("uint8array",w):S==="string"&&(y?w=o.decode(w):f&&b!==!0&&(w=function(T){return h(T,r.uint8array?new Uint8Array(T.length):new Array(T.length))}(w))),w):l.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,n){var r=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),l=t("./zipEntry"),c=t("./support");function h(d){this.files=[],this.loadOptions=d}h.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var u=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(u)+", expected "+o.pretty(d)+")")}},isSignature:function(d,u){var p=this.reader.index;this.reader.setIndex(d);var g=this.reader.readString(4)===u;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),u=c.uint8array?"uint8array":"array",p=o.transformTo(u,d);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,u,p,g=this.zip64EndOfCentralSize-44;0<g;)d=this.reader.readInt(2),u=this.reader.readInt(4),p=this.reader.readData(u),this.zip64ExtensibleData[d]={id:d,length:u,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,u;for(d=0;d<this.files.length;d++)u=this.files[d],this.reader.setIndex(u.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),u.readLocalPart(this.reader),u.handleUTF8(),u.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var u=d;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var g=u-p;if(0<g)this.isSignature(u,a.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(d){this.reader=r(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,n){var r=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),l=t("./crc32"),c=t("./utf8"),h=t("./compressions"),d=t("./support");function u(p,g){this.options=p,this.loadOptions=g}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var g,m;if(p.skip(22),this.fileNameLength=p.readInt(2),m=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=function(v){for(var f in h)if(Object.prototype.hasOwnProperty.call(h,f)&&h[f].magic===v)return h[f];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,g,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var g=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(g),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=r(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var g,m,v,f=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<f;)g=p.readInt(2),m=p.readInt(2),v=p.readData(m),this.extraFields[g]={id:g,length:m,value:v};p.setIndex(f)},handleUTF8:function(){var p=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var m=o.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var f=o.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(f)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var g=r(p.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var g=r(p.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null}},i.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,n){function r(g,m,v){this.name=g,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=m,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),l=t("./utf8"),c=t("./compressedObject"),h=t("./stream/GenericWorker");r.prototype={internalStream:function(g){var m=null,v="string";try{if(!g)throw new Error("No output type specified.");var f=(v=g.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),m=this._decompressWorker();var b=!this._dataBinary;b&&!f&&(m=m.pipe(new l.Utf8EncodeWorker)),!b&&f&&(m=m.pipe(new l.Utf8DecodeWorker))}catch(y){(m=new h("error")).error(y)}return new o(m,v,"")},async:function(g,m){return this.internalStream(g).accumulate(m)},nodeStream:function(g,m){return this.internalStream(g||"nodebuffer").toNodejsStream(m)},_compressWorker:function(g,m){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(v,g,m)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof h?this._data:new a(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],u=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<d.length;p++)r.prototype[d[p]]=u;i.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,n){(function(r){var o,a,l=r.MutationObserver||r.WebKitMutationObserver;if(l){var c=0,h=new l(g),d=r.document.createTextNode("");h.observe(d,{characterData:!0}),o=function(){d.data=c=++c%2}}else if(r.setImmediate||r.MessageChannel===void 0)o="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var m=r.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},r.document.documentElement.appendChild(m)}:function(){setTimeout(g,0)};else{var u=new r.MessageChannel;u.port1.onmessage=g,o=function(){u.port2.postMessage(0)}}var p=[];function g(){var m,v;a=!0;for(var f=p.length;f;){for(v=p,p=[],m=-1;++m<f;)v[m]();f=p.length}a=!1}i.exports=function(m){p.push(m)!==1||a||o()}}).call(this,typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,n){var r=t("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],h=["PENDING"];function d(f){if(typeof f!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,f!==o&&m(this,f)}function u(f,b,y){this.promise=f,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function p(f,b,y){r(function(){var w;try{w=b(y)}catch(S){return a.reject(f,S)}w===f?a.reject(f,new TypeError("Cannot resolve promise with itself")):a.resolve(f,w)})}function g(f){var b=f&&f.then;if(f&&(typeof f=="object"||typeof f=="function")&&typeof b=="function")return function(){b.apply(f,arguments)}}function m(f,b){var y=!1;function w(P){y||(y=!0,a.reject(f,P))}function S(P){y||(y=!0,a.resolve(f,P))}var T=v(function(){b(S,w)});T.status==="error"&&w(T.value)}function v(f,b){var y={};try{y.value=f(b),y.status="success"}catch(w){y.status="error",y.value=w}return y}(i.exports=d).prototype.finally=function(f){if(typeof f!="function")return this;var b=this.constructor;return this.then(function(y){return b.resolve(f()).then(function(){return y})},function(y){return b.resolve(f()).then(function(){throw y})})},d.prototype.catch=function(f){return this.then(null,f)},d.prototype.then=function(f,b){if(typeof f!="function"&&this.state===c||typeof b!="function"&&this.state===l)return this;var y=new this.constructor(o);return this.state!==h?p(y,this.state===c?f:b,this.outcome):this.queue.push(new u(y,f,b)),y},u.prototype.callFulfilled=function(f){a.resolve(this.promise,f)},u.prototype.otherCallFulfilled=function(f){p(this.promise,this.onFulfilled,f)},u.prototype.callRejected=function(f){a.reject(this.promise,f)},u.prototype.otherCallRejected=function(f){p(this.promise,this.onRejected,f)},a.resolve=function(f,b){var y=v(g,b);if(y.status==="error")return a.reject(f,y.value);var w=y.value;if(w)m(f,w);else{f.state=c,f.outcome=b;for(var S=-1,T=f.queue.length;++S<T;)f.queue[S].callFulfilled(b)}return f},a.reject=function(f,b){f.state=l,f.outcome=b;for(var y=-1,w=f.queue.length;++y<w;)f.queue[y].callRejected(b);return f},d.resolve=function(f){return f instanceof this?f:a.resolve(new this(o),f)},d.reject=function(f){var b=new this(o);return a.reject(b,f)},d.all=function(f){var b=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=f.length,w=!1;if(!y)return this.resolve([]);for(var S=new Array(y),T=0,P=-1,D=new this(o);++P<y;)M(f[P],P);return D;function M(I,R){b.resolve(I).then(function(A){S[R]=A,++T!==y||w||(w=!0,a.resolve(D,S))},function(A){w||(w=!0,a.reject(D,A))})}},d.race=function(f){var b=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=f.length,w=!1;if(!y)return this.resolve([]);for(var S=-1,T=new this(o);++S<y;)P=f[S],b.resolve(P).then(function(D){w||(w=!0,a.resolve(T,D))},function(D){w||(w=!0,a.reject(T,D))});var P;return T}},{immediate:36}],38:[function(t,i,n){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,n){var r=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/messages"),c=t("./zlib/zstream"),h=Object.prototype.toString,d=0,u=-1,p=0,g=8;function m(f){if(!(this instanceof m))return new m(f);this.options=o.assign({level:u,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},f||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=r.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(y!==d)throw new Error(l[y]);if(b.header&&r.deflateSetHeader(this.strm,b.header),b.dictionary){var w;if(w=typeof b.dictionary=="string"?a.string2buf(b.dictionary):h.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(y=r.deflateSetDictionary(this.strm,w))!==d)throw new Error(l[y]);this._dict_set=!0}}function v(f,b){var y=new m(b);if(y.push(f,!0),y.err)throw y.msg||l[y.err];return y.result}m.prototype.push=function(f,b){var y,w,S=this.strm,T=this.options.chunkSize;if(this.ended)return!1;w=b===~~b?b:b===!0?4:0,typeof f=="string"?S.input=a.string2buf(f):h.call(f)==="[object ArrayBuffer]"?S.input=new Uint8Array(f):S.input=f,S.next_in=0,S.avail_in=S.input.length;do{if(S.avail_out===0&&(S.output=new o.Buf8(T),S.next_out=0,S.avail_out=T),(y=r.deflate(S,w))!==1&&y!==d)return this.onEnd(y),!(this.ended=!0);S.avail_out!==0&&(S.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(S.output,S.next_out))):this.onData(o.shrinkBuf(S.output,S.next_out)))}while((0<S.avail_in||S.avail_out===0)&&y!==1);return w===4?(y=r.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===d):w!==2||(this.onEnd(d),!(S.avail_out=0))},m.prototype.onData=function(f){this.chunks.push(f)},m.prototype.onEnd=function(f){f===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},n.Deflate=m,n.deflate=v,n.deflateRaw=function(f,b){return(b=b||{}).raw=!0,v(f,b)},n.gzip=function(f,b){return(b=b||{}).gzip=!0,v(f,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,n){var r=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/constants"),c=t("./zlib/messages"),h=t("./zlib/zstream"),d=t("./zlib/gzheader"),u=Object.prototype.toString;function p(m){if(!(this instanceof p))return new p(m);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},m||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||m&&m.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&!(15&v.windowBits)&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var f=r.inflateInit2(this.strm,v.windowBits);if(f!==l.Z_OK)throw new Error(c[f]);this.header=new d,r.inflateGetHeader(this.strm,this.header)}function g(m,v){var f=new p(v);if(f.push(m,!0),f.err)throw f.msg||c[f.err];return f.result}p.prototype.push=function(m,v){var f,b,y,w,S,T,P=this.strm,D=this.options.chunkSize,M=this.options.dictionary,I=!1;if(this.ended)return!1;b=v===~~v?v:v===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof m=="string"?P.input=a.binstring2buf(m):u.call(m)==="[object ArrayBuffer]"?P.input=new Uint8Array(m):P.input=m,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new o.Buf8(D),P.next_out=0,P.avail_out=D),(f=r.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&M&&(T=typeof M=="string"?a.string2buf(M):u.call(M)==="[object ArrayBuffer]"?new Uint8Array(M):M,f=r.inflateSetDictionary(this.strm,T)),f===l.Z_BUF_ERROR&&I===!0&&(f=l.Z_OK,I=!1),f!==l.Z_STREAM_END&&f!==l.Z_OK)return this.onEnd(f),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&f!==l.Z_STREAM_END&&(P.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=a.utf8border(P.output,P.next_out),w=P.next_out-y,S=a.buf2string(P.output,y),P.next_out=w,P.avail_out=D-w,w&&o.arraySet(P.output,P.output,y,w,0),this.onData(S)):this.onData(o.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(I=!0)}while((0<P.avail_in||P.avail_out===0)&&f!==l.Z_STREAM_END);return f===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(f=r.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,f===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},p.prototype.onData=function(m){this.chunks.push(m)},p.prototype.onEnd=function(m){m===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},n.Inflate=p,n.inflate=g,n.inflateRaw=function(m,v){return(v=v||{}).raw=!0,g(m,v)},n.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var h=c.shift();if(h){if(typeof h!="object")throw new TypeError(h+"must be non-object");for(var d in h)h.hasOwnProperty(d)&&(l[d]=h[d])}}return l},n.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,h,d,u){if(c.subarray&&l.subarray)l.set(c.subarray(h,h+d),u);else for(var p=0;p<d;p++)l[u+p]=c[h+p]},flattenChunks:function(l){var c,h,d,u,p,g;for(c=d=0,h=l.length;c<h;c++)d+=l[c].length;for(g=new Uint8Array(d),c=u=0,h=l.length;c<h;c++)p=l[c],g.set(p,u),u+=p.length;return g}},a={arraySet:function(l,c,h,d,u){for(var p=0;p<d;p++)l[u+p]=c[h+p]},flattenChunks:function(l){return[].concat.apply([],l)}};n.setTyped=function(l){l?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,o)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(t,i,n){var r=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new r.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function h(d,u){if(u<65537&&(d.subarray&&a||!d.subarray&&o))return String.fromCharCode.apply(null,r.shrinkBuf(d,u));for(var p="",g=0;g<u;g++)p+=String.fromCharCode(d[g]);return p}l[254]=l[254]=1,n.string2buf=function(d){var u,p,g,m,v,f=d.length,b=0;for(m=0;m<f;m++)(64512&(p=d.charCodeAt(m)))==55296&&m+1<f&&(64512&(g=d.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),m++),b+=p<128?1:p<2048?2:p<65536?3:4;for(u=new r.Buf8(b),m=v=0;v<b;m++)(64512&(p=d.charCodeAt(m)))==55296&&m+1<f&&(64512&(g=d.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),m++),p<128?u[v++]=p:(p<2048?u[v++]=192|p>>>6:(p<65536?u[v++]=224|p>>>12:(u[v++]=240|p>>>18,u[v++]=128|p>>>12&63),u[v++]=128|p>>>6&63),u[v++]=128|63&p);return u},n.buf2binstring=function(d){return h(d,d.length)},n.binstring2buf=function(d){for(var u=new r.Buf8(d.length),p=0,g=u.length;p<g;p++)u[p]=d.charCodeAt(p);return u},n.buf2string=function(d,u){var p,g,m,v,f=u||d.length,b=new Array(2*f);for(p=g=0;p<f;)if((m=d[p++])<128)b[g++]=m;else if(4<(v=l[m]))b[g++]=65533,p+=v-1;else{for(m&=v===2?31:v===3?15:7;1<v&&p<f;)m=m<<6|63&d[p++],v--;1<v?b[g++]=65533:m<65536?b[g++]=m:(m-=65536,b[g++]=55296|m>>10&1023,b[g++]=56320|1023&m)}return h(b,g)},n.utf8border=function(d,u){var p;for((u=u||d.length)>d.length&&(u=d.length),p=u-1;0<=p&&(192&d[p])==128;)p--;return p<0||p===0?u:p+l[d[p]]>u?p:u}},{"./common":41}],43:[function(t,i,n){i.exports=function(r,o,a,l){for(var c=65535&r|0,h=r>>>16&65535|0,d=0;a!==0;){for(a-=d=2e3<a?2e3:a;h=h+(c=c+o[l++]|0)|0,--d;);c%=65521,h%=65521}return c|h<<16|0}},{}],44:[function(t,i,n){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,n){var r=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();i.exports=function(o,a,l,c){var h=r,d=c+l;o^=-1;for(var u=c;u<d;u++)o=o>>>8^h[255&(o^a[u])];return-1^o}},{}],46:[function(t,i,n){var r,o=t("../utils/common"),a=t("./trees"),l=t("./adler32"),c=t("./crc32"),h=t("./messages"),d=0,u=4,p=0,g=-2,m=-1,v=4,f=2,b=8,y=9,w=286,S=30,T=19,P=2*w+1,D=15,M=3,I=258,R=I+M+1,A=42,O=113,_=1,$=2,X=3,V=4;function J(x,G){return x.msg=h[G],G}function W(x){return(x<<1)-(4<x?9:0)}function ne(x){for(var G=x.length;0<=--G;)x[G]=0}function U(x){var G=x.state,q=G.pending;q>x.avail_out&&(q=x.avail_out),q!==0&&(o.arraySet(x.output,G.pending_buf,G.pending_out,q,x.next_out),x.next_out+=q,G.pending_out+=q,x.total_out+=q,x.avail_out-=q,G.pending-=q,G.pending===0&&(G.pending_out=0))}function B(x,G){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,G),x.block_start=x.strstart,U(x.strm)}function re(x,G){x.pending_buf[x.pending++]=G}function ie(x,G){x.pending_buf[x.pending++]=G>>>8&255,x.pending_buf[x.pending++]=255&G}function ee(x,G){var q,z,k=x.max_chain_length,N=x.strstart,Z=x.prev_length,Q=x.nice_match,F=x.strstart>x.w_size-R?x.strstart-(x.w_size-R):0,te=x.window,ae=x.w_mask,se=x.prev,ce=x.strstart+I,Ce=te[N+Z-1],be=te[N+Z];x.prev_length>=x.good_match&&(k>>=2),Q>x.lookahead&&(Q=x.lookahead);do if(te[(q=G)+Z]===be&&te[q+Z-1]===Ce&&te[q]===te[N]&&te[++q]===te[N+1]){N+=2,q++;do;while(te[++N]===te[++q]&&te[++N]===te[++q]&&te[++N]===te[++q]&&te[++N]===te[++q]&&te[++N]===te[++q]&&te[++N]===te[++q]&&te[++N]===te[++q]&&te[++N]===te[++q]&&N<ce);if(z=I-(ce-N),N=ce-I,Z<z){if(x.match_start=G,Q<=(Z=z))break;Ce=te[N+Z-1],be=te[N+Z]}}while((G=se[G&ae])>F&&--k!=0);return Z<=x.lookahead?Z:x.lookahead}function he(x){var G,q,z,k,N,Z,Q,F,te,ae,se=x.w_size;do{if(k=x.window_size-x.lookahead-x.strstart,x.strstart>=se+(se-R)){for(o.arraySet(x.window,x.window,se,se,0),x.match_start-=se,x.strstart-=se,x.block_start-=se,G=q=x.hash_size;z=x.head[--G],x.head[G]=se<=z?z-se:0,--q;);for(G=q=se;z=x.prev[--G],x.prev[G]=se<=z?z-se:0,--q;);k+=se}if(x.strm.avail_in===0)break;if(Z=x.strm,Q=x.window,F=x.strstart+x.lookahead,te=k,ae=void 0,ae=Z.avail_in,te<ae&&(ae=te),q=ae===0?0:(Z.avail_in-=ae,o.arraySet(Q,Z.input,Z.next_in,ae,F),Z.state.wrap===1?Z.adler=l(Z.adler,Q,ae,F):Z.state.wrap===2&&(Z.adler=c(Z.adler,Q,ae,F)),Z.next_in+=ae,Z.total_in+=ae,ae),x.lookahead+=q,x.lookahead+x.insert>=M)for(N=x.strstart-x.insert,x.ins_h=x.window[N],x.ins_h=(x.ins_h<<x.hash_shift^x.window[N+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[N+M-1])&x.hash_mask,x.prev[N&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=N,N++,x.insert--,!(x.lookahead+x.insert<M)););}while(x.lookahead<R&&x.strm.avail_in!==0)}function pe(x,G){for(var q,z;;){if(x.lookahead<R){if(he(x),x.lookahead<R&&G===d)return _;if(x.lookahead===0)break}if(q=0,x.lookahead>=M&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+M-1])&x.hash_mask,q=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),q!==0&&x.strstart-q<=x.w_size-R&&(x.match_length=ee(x,q)),x.match_length>=M)if(z=a._tr_tally(x,x.strstart-x.match_start,x.match_length-M),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=M){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+M-1])&x.hash_mask,q=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else z=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(z&&(B(x,!1),x.strm.avail_out===0))return _}return x.insert=x.strstart<M-1?x.strstart:M-1,G===u?(B(x,!0),x.strm.avail_out===0?X:V):x.last_lit&&(B(x,!1),x.strm.avail_out===0)?_:$}function le(x,G){for(var q,z,k;;){if(x.lookahead<R){if(he(x),x.lookahead<R&&G===d)return _;if(x.lookahead===0)break}if(q=0,x.lookahead>=M&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+M-1])&x.hash_mask,q=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=M-1,q!==0&&x.prev_length<x.max_lazy_match&&x.strstart-q<=x.w_size-R&&(x.match_length=ee(x,q),x.match_length<=5&&(x.strategy===1||x.match_length===M&&4096<x.strstart-x.match_start)&&(x.match_length=M-1)),x.prev_length>=M&&x.match_length<=x.prev_length){for(k=x.strstart+x.lookahead-M,z=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-M),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=k&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+M-1])&x.hash_mask,q=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=M-1,x.strstart++,z&&(B(x,!1),x.strm.avail_out===0))return _}else if(x.match_available){if((z=a._tr_tally(x,0,x.window[x.strstart-1]))&&B(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return _}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(z=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<M-1?x.strstart:M-1,G===u?(B(x,!0),x.strm.avail_out===0?X:V):x.last_lit&&(B(x,!1),x.strm.avail_out===0)?_:$}function fe(x,G,q,z,k){this.good_length=x,this.max_lazy=G,this.nice_length=q,this.max_chain=z,this.func=k}function we(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*P),this.dyn_dtree=new o.Buf16(2*(2*S+1)),this.bl_tree=new o.Buf16(2*(2*T+1)),ne(this.dyn_ltree),ne(this.dyn_dtree),ne(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(D+1),this.heap=new o.Buf16(2*w+1),ne(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*w+1),ne(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Te(x){var G;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=f,(G=x.state).pending=0,G.pending_out=0,G.wrap<0&&(G.wrap=-G.wrap),G.status=G.wrap?A:O,x.adler=G.wrap===2?0:1,G.last_flush=d,a._tr_init(G),p):J(x,g)}function Xe(x){var G=Te(x);return G===p&&function(q){q.window_size=2*q.w_size,ne(q.head),q.max_lazy_match=r[q.level].max_lazy,q.good_match=r[q.level].good_length,q.nice_match=r[q.level].nice_length,q.max_chain_length=r[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=M-1,q.match_available=0,q.ins_h=0}(x.state),G}function Fe(x,G,q,z,k,N){if(!x)return g;var Z=1;if(G===m&&(G=6),z<0?(Z=0,z=-z):15<z&&(Z=2,z-=16),k<1||y<k||q!==b||z<8||15<z||G<0||9<G||N<0||v<N)return J(x,g);z===8&&(z=9);var Q=new we;return(x.state=Q).strm=x,Q.wrap=Z,Q.gzhead=null,Q.w_bits=z,Q.w_size=1<<Q.w_bits,Q.w_mask=Q.w_size-1,Q.hash_bits=k+7,Q.hash_size=1<<Q.hash_bits,Q.hash_mask=Q.hash_size-1,Q.hash_shift=~~((Q.hash_bits+M-1)/M),Q.window=new o.Buf8(2*Q.w_size),Q.head=new o.Buf16(Q.hash_size),Q.prev=new o.Buf16(Q.w_size),Q.lit_bufsize=1<<k+6,Q.pending_buf_size=4*Q.lit_bufsize,Q.pending_buf=new o.Buf8(Q.pending_buf_size),Q.d_buf=1*Q.lit_bufsize,Q.l_buf=3*Q.lit_bufsize,Q.level=G,Q.strategy=N,Q.method=q,Xe(x)}r=[new fe(0,0,0,0,function(x,G){var q=65535;for(q>x.pending_buf_size-5&&(q=x.pending_buf_size-5);;){if(x.lookahead<=1){if(he(x),x.lookahead===0&&G===d)return _;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var z=x.block_start+q;if((x.strstart===0||x.strstart>=z)&&(x.lookahead=x.strstart-z,x.strstart=z,B(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-R&&(B(x,!1),x.strm.avail_out===0))return _}return x.insert=0,G===u?(B(x,!0),x.strm.avail_out===0?X:V):(x.strstart>x.block_start&&(B(x,!1),x.strm.avail_out),_)}),new fe(4,4,8,4,pe),new fe(4,5,16,8,pe),new fe(4,6,32,32,pe),new fe(4,4,16,16,le),new fe(8,16,32,32,le),new fe(8,16,128,128,le),new fe(8,32,128,256,le),new fe(32,128,258,1024,le),new fe(32,258,258,4096,le)],n.deflateInit=function(x,G){return Fe(x,G,b,15,8,0)},n.deflateInit2=Fe,n.deflateReset=Xe,n.deflateResetKeep=Te,n.deflateSetHeader=function(x,G){return x&&x.state?x.state.wrap!==2?g:(x.state.gzhead=G,p):g},n.deflate=function(x,G){var q,z,k,N;if(!x||!x.state||5<G||G<0)return x?J(x,g):g;if(z=x.state,!x.output||!x.input&&x.avail_in!==0||z.status===666&&G!==u)return J(x,x.avail_out===0?-5:g);if(z.strm=x,q=z.last_flush,z.last_flush=G,z.status===A)if(z.wrap===2)x.adler=0,re(z,31),re(z,139),re(z,8),z.gzhead?(re(z,(z.gzhead.text?1:0)+(z.gzhead.hcrc?2:0)+(z.gzhead.extra?4:0)+(z.gzhead.name?8:0)+(z.gzhead.comment?16:0)),re(z,255&z.gzhead.time),re(z,z.gzhead.time>>8&255),re(z,z.gzhead.time>>16&255),re(z,z.gzhead.time>>24&255),re(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),re(z,255&z.gzhead.os),z.gzhead.extra&&z.gzhead.extra.length&&(re(z,255&z.gzhead.extra.length),re(z,z.gzhead.extra.length>>8&255)),z.gzhead.hcrc&&(x.adler=c(x.adler,z.pending_buf,z.pending,0)),z.gzindex=0,z.status=69):(re(z,0),re(z,0),re(z,0),re(z,0),re(z,0),re(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),re(z,3),z.status=O);else{var Z=b+(z.w_bits-8<<4)<<8;Z|=(2<=z.strategy||z.level<2?0:z.level<6?1:z.level===6?2:3)<<6,z.strstart!==0&&(Z|=32),Z+=31-Z%31,z.status=O,ie(z,Z),z.strstart!==0&&(ie(z,x.adler>>>16),ie(z,65535&x.adler)),x.adler=1}if(z.status===69)if(z.gzhead.extra){for(k=z.pending;z.gzindex<(65535&z.gzhead.extra.length)&&(z.pending!==z.pending_buf_size||(z.gzhead.hcrc&&z.pending>k&&(x.adler=c(x.adler,z.pending_buf,z.pending-k,k)),U(x),k=z.pending,z.pending!==z.pending_buf_size));)re(z,255&z.gzhead.extra[z.gzindex]),z.gzindex++;z.gzhead.hcrc&&z.pending>k&&(x.adler=c(x.adler,z.pending_buf,z.pending-k,k)),z.gzindex===z.gzhead.extra.length&&(z.gzindex=0,z.status=73)}else z.status=73;if(z.status===73)if(z.gzhead.name){k=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>k&&(x.adler=c(x.adler,z.pending_buf,z.pending-k,k)),U(x),k=z.pending,z.pending===z.pending_buf_size)){N=1;break}N=z.gzindex<z.gzhead.name.length?255&z.gzhead.name.charCodeAt(z.gzindex++):0,re(z,N)}while(N!==0);z.gzhead.hcrc&&z.pending>k&&(x.adler=c(x.adler,z.pending_buf,z.pending-k,k)),N===0&&(z.gzindex=0,z.status=91)}else z.status=91;if(z.status===91)if(z.gzhead.comment){k=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>k&&(x.adler=c(x.adler,z.pending_buf,z.pending-k,k)),U(x),k=z.pending,z.pending===z.pending_buf_size)){N=1;break}N=z.gzindex<z.gzhead.comment.length?255&z.gzhead.comment.charCodeAt(z.gzindex++):0,re(z,N)}while(N!==0);z.gzhead.hcrc&&z.pending>k&&(x.adler=c(x.adler,z.pending_buf,z.pending-k,k)),N===0&&(z.status=103)}else z.status=103;if(z.status===103&&(z.gzhead.hcrc?(z.pending+2>z.pending_buf_size&&U(x),z.pending+2<=z.pending_buf_size&&(re(z,255&x.adler),re(z,x.adler>>8&255),x.adler=0,z.status=O)):z.status=O),z.pending!==0){if(U(x),x.avail_out===0)return z.last_flush=-1,p}else if(x.avail_in===0&&W(G)<=W(q)&&G!==u)return J(x,-5);if(z.status===666&&x.avail_in!==0)return J(x,-5);if(x.avail_in!==0||z.lookahead!==0||G!==d&&z.status!==666){var Q=z.strategy===2?function(F,te){for(var ae;;){if(F.lookahead===0&&(he(F),F.lookahead===0)){if(te===d)return _;break}if(F.match_length=0,ae=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,ae&&(B(F,!1),F.strm.avail_out===0))return _}return F.insert=0,te===u?(B(F,!0),F.strm.avail_out===0?X:V):F.last_lit&&(B(F,!1),F.strm.avail_out===0)?_:$}(z,G):z.strategy===3?function(F,te){for(var ae,se,ce,Ce,be=F.window;;){if(F.lookahead<=I){if(he(F),F.lookahead<=I&&te===d)return _;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=M&&0<F.strstart&&(se=be[ce=F.strstart-1])===be[++ce]&&se===be[++ce]&&se===be[++ce]){Ce=F.strstart+I;do;while(se===be[++ce]&&se===be[++ce]&&se===be[++ce]&&se===be[++ce]&&se===be[++ce]&&se===be[++ce]&&se===be[++ce]&&se===be[++ce]&&ce<Ce);F.match_length=I-(Ce-ce),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=M?(ae=a._tr_tally(F,1,F.match_length-M),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(ae=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),ae&&(B(F,!1),F.strm.avail_out===0))return _}return F.insert=0,te===u?(B(F,!0),F.strm.avail_out===0?X:V):F.last_lit&&(B(F,!1),F.strm.avail_out===0)?_:$}(z,G):r[z.level].func(z,G);if(Q!==X&&Q!==V||(z.status=666),Q===_||Q===X)return x.avail_out===0&&(z.last_flush=-1),p;if(Q===$&&(G===1?a._tr_align(z):G!==5&&(a._tr_stored_block(z,0,0,!1),G===3&&(ne(z.head),z.lookahead===0&&(z.strstart=0,z.block_start=0,z.insert=0))),U(x),x.avail_out===0))return z.last_flush=-1,p}return G!==u?p:z.wrap<=0?1:(z.wrap===2?(re(z,255&x.adler),re(z,x.adler>>8&255),re(z,x.adler>>16&255),re(z,x.adler>>24&255),re(z,255&x.total_in),re(z,x.total_in>>8&255),re(z,x.total_in>>16&255),re(z,x.total_in>>24&255)):(ie(z,x.adler>>>16),ie(z,65535&x.adler)),U(x),0<z.wrap&&(z.wrap=-z.wrap),z.pending!==0?p:1)},n.deflateEnd=function(x){var G;return x&&x.state?(G=x.state.status)!==A&&G!==69&&G!==73&&G!==91&&G!==103&&G!==O&&G!==666?J(x,g):(x.state=null,G===O?J(x,-3):p):g},n.deflateSetDictionary=function(x,G){var q,z,k,N,Z,Q,F,te,ae=G.length;if(!x||!x.state||(N=(q=x.state).wrap)===2||N===1&&q.status!==A||q.lookahead)return g;for(N===1&&(x.adler=l(x.adler,G,ae,0)),q.wrap=0,ae>=q.w_size&&(N===0&&(ne(q.head),q.strstart=0,q.block_start=0,q.insert=0),te=new o.Buf8(q.w_size),o.arraySet(te,G,ae-q.w_size,q.w_size,0),G=te,ae=q.w_size),Z=x.avail_in,Q=x.next_in,F=x.input,x.avail_in=ae,x.next_in=0,x.input=G,he(q);q.lookahead>=M;){for(z=q.strstart,k=q.lookahead-(M-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[z+M-1])&q.hash_mask,q.prev[z&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=z,z++,--k;);q.strstart=z,q.lookahead=M-1,he(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=M-1,q.match_available=0,x.next_in=Q,x.input=F,x.avail_in=Z,q.wrap=N,p},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,n){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,n){i.exports=function(r,o){var a,l,c,h,d,u,p,g,m,v,f,b,y,w,S,T,P,D,M,I,R,A,O,_,$;a=r.state,l=r.next_in,_=r.input,c=l+(r.avail_in-5),h=r.next_out,$=r.output,d=h-(o-r.avail_out),u=h+(r.avail_out-257),p=a.dmax,g=a.wsize,m=a.whave,v=a.wnext,f=a.window,b=a.hold,y=a.bits,w=a.lencode,S=a.distcode,T=(1<<a.lenbits)-1,P=(1<<a.distbits)-1;e:do{y<15&&(b+=_[l++]<<y,y+=8,b+=_[l++]<<y,y+=8),D=w[b&T];t:for(;;){if(b>>>=M=D>>>24,y-=M,(M=D>>>16&255)===0)$[h++]=65535&D;else{if(!(16&M)){if(!(64&M)){D=w[(65535&D)+(b&(1<<M)-1)];continue t}if(32&M){a.mode=12;break e}r.msg="invalid literal/length code",a.mode=30;break e}I=65535&D,(M&=15)&&(y<M&&(b+=_[l++]<<y,y+=8),I+=b&(1<<M)-1,b>>>=M,y-=M),y<15&&(b+=_[l++]<<y,y+=8,b+=_[l++]<<y,y+=8),D=S[b&P];i:for(;;){if(b>>>=M=D>>>24,y-=M,!(16&(M=D>>>16&255))){if(!(64&M)){D=S[(65535&D)+(b&(1<<M)-1)];continue i}r.msg="invalid distance code",a.mode=30;break e}if(R=65535&D,y<(M&=15)&&(b+=_[l++]<<y,(y+=8)<M&&(b+=_[l++]<<y,y+=8)),p<(R+=b&(1<<M)-1)){r.msg="invalid distance too far back",a.mode=30;break e}if(b>>>=M,y-=M,(M=h-d)<R){if(m<(M=R-M)&&a.sane){r.msg="invalid distance too far back",a.mode=30;break e}if(O=f,(A=0)===v){if(A+=g-M,M<I){for(I-=M;$[h++]=f[A++],--M;);A=h-R,O=$}}else if(v<M){if(A+=g+v-M,(M-=v)<I){for(I-=M;$[h++]=f[A++],--M;);if(A=0,v<I){for(I-=M=v;$[h++]=f[A++],--M;);A=h-R,O=$}}}else if(A+=v-M,M<I){for(I-=M;$[h++]=f[A++],--M;);A=h-R,O=$}for(;2<I;)$[h++]=O[A++],$[h++]=O[A++],$[h++]=O[A++],I-=3;I&&($[h++]=O[A++],1<I&&($[h++]=O[A++]))}else{for(A=h-R;$[h++]=$[A++],$[h++]=$[A++],$[h++]=$[A++],2<(I-=3););I&&($[h++]=$[A++],1<I&&($[h++]=$[A++]))}break}}break}}while(l<c&&h<u);l-=I=y>>3,b&=(1<<(y-=I<<3))-1,r.next_in=l,r.next_out=h,r.avail_in=l<c?c-l+5:5-(l-c),r.avail_out=h<u?u-h+257:257-(h-u),a.hold=b,a.bits=y}},{}],49:[function(t,i,n){var r=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),l=t("./inffast"),c=t("./inftrees"),h=1,d=2,u=0,p=-2,g=1,m=852,v=592;function f(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(A){var O;return A&&A.state?(O=A.state,A.total_in=A.total_out=O.total=0,A.msg="",O.wrap&&(A.adler=1&O.wrap),O.mode=g,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new r.Buf32(m),O.distcode=O.distdyn=new r.Buf32(v),O.sane=1,O.back=-1,u):p}function w(A){var O;return A&&A.state?((O=A.state).wsize=0,O.whave=0,O.wnext=0,y(A)):p}function S(A,O){var _,$;return A&&A.state?($=A.state,O<0?(_=0,O=-O):(_=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?p:($.window!==null&&$.wbits!==O&&($.window=null),$.wrap=_,$.wbits=O,w(A))):p}function T(A,O){var _,$;return A?($=new b,(A.state=$).window=null,(_=S(A,O))!==u&&(A.state=null),_):p}var P,D,M=!0;function I(A){if(M){var O;for(P=new r.Buf32(512),D=new r.Buf32(32),O=0;O<144;)A.lens[O++]=8;for(;O<256;)A.lens[O++]=9;for(;O<280;)A.lens[O++]=7;for(;O<288;)A.lens[O++]=8;for(c(h,A.lens,0,288,P,0,A.work,{bits:9}),O=0;O<32;)A.lens[O++]=5;c(d,A.lens,0,32,D,0,A.work,{bits:5}),M=!1}A.lencode=P,A.lenbits=9,A.distcode=D,A.distbits=5}function R(A,O,_,$){var X,V=A.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new r.Buf8(V.wsize)),$>=V.wsize?(r.arraySet(V.window,O,_-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):($<(X=V.wsize-V.wnext)&&(X=$),r.arraySet(V.window,O,_-$,X,V.wnext),($-=X)?(r.arraySet(V.window,O,_-$,$,0),V.wnext=$,V.whave=V.wsize):(V.wnext+=X,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=X))),0}n.inflateReset=w,n.inflateReset2=S,n.inflateResetKeep=y,n.inflateInit=function(A){return T(A,15)},n.inflateInit2=T,n.inflate=function(A,O){var _,$,X,V,J,W,ne,U,B,re,ie,ee,he,pe,le,fe,we,Te,Xe,Fe,x,G,q,z,k=0,N=new r.Buf8(4),Z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&A.avail_in!==0)return p;(_=A.state).mode===12&&(_.mode=13),J=A.next_out,X=A.output,ne=A.avail_out,V=A.next_in,$=A.input,W=A.avail_in,U=_.hold,B=_.bits,re=W,ie=ne,G=u;e:for(;;)switch(_.mode){case g:if(_.wrap===0){_.mode=13;break}for(;B<16;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(2&_.wrap&&U===35615){N[_.check=0]=255&U,N[1]=U>>>8&255,_.check=a(_.check,N,2,0),B=U=0,_.mode=2;break}if(_.flags=0,_.head&&(_.head.done=!1),!(1&_.wrap)||(((255&U)<<8)+(U>>8))%31){A.msg="incorrect header check",_.mode=30;break}if((15&U)!=8){A.msg="unknown compression method",_.mode=30;break}if(B-=4,x=8+(15&(U>>>=4)),_.wbits===0)_.wbits=x;else if(x>_.wbits){A.msg="invalid window size",_.mode=30;break}_.dmax=1<<x,A.adler=_.check=1,_.mode=512&U?10:12,B=U=0;break;case 2:for(;B<16;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(_.flags=U,(255&_.flags)!=8){A.msg="unknown compression method",_.mode=30;break}if(57344&_.flags){A.msg="unknown header flags set",_.mode=30;break}_.head&&(_.head.text=U>>8&1),512&_.flags&&(N[0]=255&U,N[1]=U>>>8&255,_.check=a(_.check,N,2,0)),B=U=0,_.mode=3;case 3:for(;B<32;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}_.head&&(_.head.time=U),512&_.flags&&(N[0]=255&U,N[1]=U>>>8&255,N[2]=U>>>16&255,N[3]=U>>>24&255,_.check=a(_.check,N,4,0)),B=U=0,_.mode=4;case 4:for(;B<16;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}_.head&&(_.head.xflags=255&U,_.head.os=U>>8),512&_.flags&&(N[0]=255&U,N[1]=U>>>8&255,_.check=a(_.check,N,2,0)),B=U=0,_.mode=5;case 5:if(1024&_.flags){for(;B<16;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}_.length=U,_.head&&(_.head.extra_len=U),512&_.flags&&(N[0]=255&U,N[1]=U>>>8&255,_.check=a(_.check,N,2,0)),B=U=0}else _.head&&(_.head.extra=null);_.mode=6;case 6:if(1024&_.flags&&(W<(ee=_.length)&&(ee=W),ee&&(_.head&&(x=_.head.extra_len-_.length,_.head.extra||(_.head.extra=new Array(_.head.extra_len)),r.arraySet(_.head.extra,$,V,ee,x)),512&_.flags&&(_.check=a(_.check,$,ee,V)),W-=ee,V+=ee,_.length-=ee),_.length))break e;_.length=0,_.mode=7;case 7:if(2048&_.flags){if(W===0)break e;for(ee=0;x=$[V+ee++],_.head&&x&&_.length<65536&&(_.head.name+=String.fromCharCode(x)),x&&ee<W;);if(512&_.flags&&(_.check=a(_.check,$,ee,V)),W-=ee,V+=ee,x)break e}else _.head&&(_.head.name=null);_.length=0,_.mode=8;case 8:if(4096&_.flags){if(W===0)break e;for(ee=0;x=$[V+ee++],_.head&&x&&_.length<65536&&(_.head.comment+=String.fromCharCode(x)),x&&ee<W;);if(512&_.flags&&(_.check=a(_.check,$,ee,V)),W-=ee,V+=ee,x)break e}else _.head&&(_.head.comment=null);_.mode=9;case 9:if(512&_.flags){for(;B<16;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(U!==(65535&_.check)){A.msg="header crc mismatch",_.mode=30;break}B=U=0}_.head&&(_.head.hcrc=_.flags>>9&1,_.head.done=!0),A.adler=_.check=0,_.mode=12;break;case 10:for(;B<32;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}A.adler=_.check=f(U),B=U=0,_.mode=11;case 11:if(_.havedict===0)return A.next_out=J,A.avail_out=ne,A.next_in=V,A.avail_in=W,_.hold=U,_.bits=B,2;A.adler=_.check=1,_.mode=12;case 12:if(O===5||O===6)break e;case 13:if(_.last){U>>>=7&B,B-=7&B,_.mode=27;break}for(;B<3;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}switch(_.last=1&U,B-=1,3&(U>>>=1)){case 0:_.mode=14;break;case 1:if(I(_),_.mode=20,O!==6)break;U>>>=2,B-=2;break e;case 2:_.mode=17;break;case 3:A.msg="invalid block type",_.mode=30}U>>>=2,B-=2;break;case 14:for(U>>>=7&B,B-=7&B;B<32;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if((65535&U)!=(U>>>16^65535)){A.msg="invalid stored block lengths",_.mode=30;break}if(_.length=65535&U,B=U=0,_.mode=15,O===6)break e;case 15:_.mode=16;case 16:if(ee=_.length){if(W<ee&&(ee=W),ne<ee&&(ee=ne),ee===0)break e;r.arraySet(X,$,V,ee,J),W-=ee,V+=ee,ne-=ee,J+=ee,_.length-=ee;break}_.mode=12;break;case 17:for(;B<14;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(_.nlen=257+(31&U),U>>>=5,B-=5,_.ndist=1+(31&U),U>>>=5,B-=5,_.ncode=4+(15&U),U>>>=4,B-=4,286<_.nlen||30<_.ndist){A.msg="too many length or distance symbols",_.mode=30;break}_.have=0,_.mode=18;case 18:for(;_.have<_.ncode;){for(;B<3;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}_.lens[Z[_.have++]]=7&U,U>>>=3,B-=3}for(;_.have<19;)_.lens[Z[_.have++]]=0;if(_.lencode=_.lendyn,_.lenbits=7,q={bits:_.lenbits},G=c(0,_.lens,0,19,_.lencode,0,_.work,q),_.lenbits=q.bits,G){A.msg="invalid code lengths set",_.mode=30;break}_.have=0,_.mode=19;case 19:for(;_.have<_.nlen+_.ndist;){for(;fe=(k=_.lencode[U&(1<<_.lenbits)-1])>>>16&255,we=65535&k,!((le=k>>>24)<=B);){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(we<16)U>>>=le,B-=le,_.lens[_.have++]=we;else{if(we===16){for(z=le+2;B<z;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(U>>>=le,B-=le,_.have===0){A.msg="invalid bit length repeat",_.mode=30;break}x=_.lens[_.have-1],ee=3+(3&U),U>>>=2,B-=2}else if(we===17){for(z=le+3;B<z;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}B-=le,x=0,ee=3+(7&(U>>>=le)),U>>>=3,B-=3}else{for(z=le+7;B<z;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}B-=le,x=0,ee=11+(127&(U>>>=le)),U>>>=7,B-=7}if(_.have+ee>_.nlen+_.ndist){A.msg="invalid bit length repeat",_.mode=30;break}for(;ee--;)_.lens[_.have++]=x}}if(_.mode===30)break;if(_.lens[256]===0){A.msg="invalid code -- missing end-of-block",_.mode=30;break}if(_.lenbits=9,q={bits:_.lenbits},G=c(h,_.lens,0,_.nlen,_.lencode,0,_.work,q),_.lenbits=q.bits,G){A.msg="invalid literal/lengths set",_.mode=30;break}if(_.distbits=6,_.distcode=_.distdyn,q={bits:_.distbits},G=c(d,_.lens,_.nlen,_.ndist,_.distcode,0,_.work,q),_.distbits=q.bits,G){A.msg="invalid distances set",_.mode=30;break}if(_.mode=20,O===6)break e;case 20:_.mode=21;case 21:if(6<=W&&258<=ne){A.next_out=J,A.avail_out=ne,A.next_in=V,A.avail_in=W,_.hold=U,_.bits=B,l(A,ie),J=A.next_out,X=A.output,ne=A.avail_out,V=A.next_in,$=A.input,W=A.avail_in,U=_.hold,B=_.bits,_.mode===12&&(_.back=-1);break}for(_.back=0;fe=(k=_.lencode[U&(1<<_.lenbits)-1])>>>16&255,we=65535&k,!((le=k>>>24)<=B);){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(fe&&!(240&fe)){for(Te=le,Xe=fe,Fe=we;fe=(k=_.lencode[Fe+((U&(1<<Te+Xe)-1)>>Te)])>>>16&255,we=65535&k,!(Te+(le=k>>>24)<=B);){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}U>>>=Te,B-=Te,_.back+=Te}if(U>>>=le,B-=le,_.back+=le,_.length=we,fe===0){_.mode=26;break}if(32&fe){_.back=-1,_.mode=12;break}if(64&fe){A.msg="invalid literal/length code",_.mode=30;break}_.extra=15&fe,_.mode=22;case 22:if(_.extra){for(z=_.extra;B<z;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}_.length+=U&(1<<_.extra)-1,U>>>=_.extra,B-=_.extra,_.back+=_.extra}_.was=_.length,_.mode=23;case 23:for(;fe=(k=_.distcode[U&(1<<_.distbits)-1])>>>16&255,we=65535&k,!((le=k>>>24)<=B);){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(!(240&fe)){for(Te=le,Xe=fe,Fe=we;fe=(k=_.distcode[Fe+((U&(1<<Te+Xe)-1)>>Te)])>>>16&255,we=65535&k,!(Te+(le=k>>>24)<=B);){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}U>>>=Te,B-=Te,_.back+=Te}if(U>>>=le,B-=le,_.back+=le,64&fe){A.msg="invalid distance code",_.mode=30;break}_.offset=we,_.extra=15&fe,_.mode=24;case 24:if(_.extra){for(z=_.extra;B<z;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}_.offset+=U&(1<<_.extra)-1,U>>>=_.extra,B-=_.extra,_.back+=_.extra}if(_.offset>_.dmax){A.msg="invalid distance too far back",_.mode=30;break}_.mode=25;case 25:if(ne===0)break e;if(ee=ie-ne,_.offset>ee){if((ee=_.offset-ee)>_.whave&&_.sane){A.msg="invalid distance too far back",_.mode=30;break}he=ee>_.wnext?(ee-=_.wnext,_.wsize-ee):_.wnext-ee,ee>_.length&&(ee=_.length),pe=_.window}else pe=X,he=J-_.offset,ee=_.length;for(ne<ee&&(ee=ne),ne-=ee,_.length-=ee;X[J++]=pe[he++],--ee;);_.length===0&&(_.mode=21);break;case 26:if(ne===0)break e;X[J++]=_.length,ne--,_.mode=21;break;case 27:if(_.wrap){for(;B<32;){if(W===0)break e;W--,U|=$[V++]<<B,B+=8}if(ie-=ne,A.total_out+=ie,_.total+=ie,ie&&(A.adler=_.check=_.flags?a(_.check,X,ie,J-ie):o(_.check,X,ie,J-ie)),ie=ne,(_.flags?U:f(U))!==_.check){A.msg="incorrect data check",_.mode=30;break}B=U=0}_.mode=28;case 28:if(_.wrap&&_.flags){for(;B<32;){if(W===0)break e;W--,U+=$[V++]<<B,B+=8}if(U!==(4294967295&_.total)){A.msg="incorrect length check",_.mode=30;break}B=U=0}_.mode=29;case 29:G=1;break e;case 30:G=-3;break e;case 31:return-4;case 32:default:return p}return A.next_out=J,A.avail_out=ne,A.next_in=V,A.avail_in=W,_.hold=U,_.bits=B,(_.wsize||ie!==A.avail_out&&_.mode<30&&(_.mode<27||O!==4))&&R(A,A.output,A.next_out,ie-A.avail_out)?(_.mode=31,-4):(re-=A.avail_in,ie-=A.avail_out,A.total_in+=re,A.total_out+=ie,_.total+=ie,_.wrap&&ie&&(A.adler=_.check=_.flags?a(_.check,X,ie,A.next_out-ie):o(_.check,X,ie,A.next_out-ie)),A.data_type=_.bits+(_.last?64:0)+(_.mode===12?128:0)+(_.mode===20||_.mode===15?256:0),(re==0&&ie===0||O===4)&&G===u&&(G=-5),G)},n.inflateEnd=function(A){if(!A||!A.state)return p;var O=A.state;return O.window&&(O.window=null),A.state=null,u},n.inflateGetHeader=function(A,O){var _;return A&&A.state&&2&(_=A.state).wrap?((_.head=O).done=!1,u):p},n.inflateSetDictionary=function(A,O){var _,$=O.length;return A&&A.state?(_=A.state).wrap!==0&&_.mode!==11?p:_.mode===11&&o(1,O,$,0)!==_.check?-3:R(A,O,$,$)?(_.mode=31,-4):(_.havedict=1,u):p},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,n){var r=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(h,d,u,p,g,m,v,f){var b,y,w,S,T,P,D,M,I,R=f.bits,A=0,O=0,_=0,$=0,X=0,V=0,J=0,W=0,ne=0,U=0,B=null,re=0,ie=new r.Buf16(16),ee=new r.Buf16(16),he=null,pe=0;for(A=0;A<=15;A++)ie[A]=0;for(O=0;O<p;O++)ie[d[u+O]]++;for(X=R,$=15;1<=$&&ie[$]===0;$--);if($<X&&(X=$),$===0)return g[m++]=20971520,g[m++]=20971520,f.bits=1,0;for(_=1;_<$&&ie[_]===0;_++);for(X<_&&(X=_),A=W=1;A<=15;A++)if(W<<=1,(W-=ie[A])<0)return-1;if(0<W&&(h===0||$!==1))return-1;for(ee[1]=0,A=1;A<15;A++)ee[A+1]=ee[A]+ie[A];for(O=0;O<p;O++)d[u+O]!==0&&(v[ee[d[u+O]]++]=O);if(P=h===0?(B=he=v,19):h===1?(B=o,re-=257,he=a,pe-=257,256):(B=l,he=c,-1),A=_,T=m,J=O=U=0,w=-1,S=(ne=1<<(V=X))-1,h===1&&852<ne||h===2&&592<ne)return 1;for(;;){for(D=A-J,I=v[O]<P?(M=0,v[O]):v[O]>P?(M=he[pe+v[O]],B[re+v[O]]):(M=96,0),b=1<<A-J,_=y=1<<V;g[T+(U>>J)+(y-=b)]=D<<24|M<<16|I|0,y!==0;);for(b=1<<A-1;U&b;)b>>=1;if(b!==0?(U&=b-1,U+=b):U=0,O++,--ie[A]==0){if(A===$)break;A=d[u+v[O]]}if(X<A&&(U&S)!==w){for(J===0&&(J=X),T+=_,W=1<<(V=A-J);V+J<$&&!((W-=ie[V+J])<=0);)V++,W<<=1;if(ne+=1<<V,h===1&&852<ne||h===2&&592<ne)return 1;g[w=U&S]=X<<24|V<<16|T-m|0}}return U!==0&&(g[T+U]=A-J<<24|64<<16|0),f.bits=X,0}},{"../utils/common":41}],51:[function(t,i,n){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,n){var r=t("../utils/common"),o=0,a=1;function l(k){for(var N=k.length;0<=--N;)k[N]=0}var c=0,h=29,d=256,u=d+1+h,p=30,g=19,m=2*u+1,v=15,f=16,b=7,y=256,w=16,S=17,T=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],D=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],M=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],R=new Array(2*(u+2));l(R);var A=new Array(2*p);l(A);var O=new Array(512);l(O);var _=new Array(256);l(_);var $=new Array(h);l($);var X,V,J,W=new Array(p);function ne(k,N,Z,Q,F){this.static_tree=k,this.extra_bits=N,this.extra_base=Z,this.elems=Q,this.max_length=F,this.has_stree=k&&k.length}function U(k,N){this.dyn_tree=k,this.max_code=0,this.stat_desc=N}function B(k){return k<256?O[k]:O[256+(k>>>7)]}function re(k,N){k.pending_buf[k.pending++]=255&N,k.pending_buf[k.pending++]=N>>>8&255}function ie(k,N,Z){k.bi_valid>f-Z?(k.bi_buf|=N<<k.bi_valid&65535,re(k,k.bi_buf),k.bi_buf=N>>f-k.bi_valid,k.bi_valid+=Z-f):(k.bi_buf|=N<<k.bi_valid&65535,k.bi_valid+=Z)}function ee(k,N,Z){ie(k,Z[2*N],Z[2*N+1])}function he(k,N){for(var Z=0;Z|=1&k,k>>>=1,Z<<=1,0<--N;);return Z>>>1}function pe(k,N,Z){var Q,F,te=new Array(v+1),ae=0;for(Q=1;Q<=v;Q++)te[Q]=ae=ae+Z[Q-1]<<1;for(F=0;F<=N;F++){var se=k[2*F+1];se!==0&&(k[2*F]=he(te[se]++,se))}}function le(k){var N;for(N=0;N<u;N++)k.dyn_ltree[2*N]=0;for(N=0;N<p;N++)k.dyn_dtree[2*N]=0;for(N=0;N<g;N++)k.bl_tree[2*N]=0;k.dyn_ltree[2*y]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function fe(k){8<k.bi_valid?re(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function we(k,N,Z,Q){var F=2*N,te=2*Z;return k[F]<k[te]||k[F]===k[te]&&Q[N]<=Q[Z]}function Te(k,N,Z){for(var Q=k.heap[Z],F=Z<<1;F<=k.heap_len&&(F<k.heap_len&&we(N,k.heap[F+1],k.heap[F],k.depth)&&F++,!we(N,Q,k.heap[F],k.depth));)k.heap[Z]=k.heap[F],Z=F,F<<=1;k.heap[Z]=Q}function Xe(k,N,Z){var Q,F,te,ae,se=0;if(k.last_lit!==0)for(;Q=k.pending_buf[k.d_buf+2*se]<<8|k.pending_buf[k.d_buf+2*se+1],F=k.pending_buf[k.l_buf+se],se++,Q===0?ee(k,F,N):(ee(k,(te=_[F])+d+1,N),(ae=P[te])!==0&&ie(k,F-=$[te],ae),ee(k,te=B(--Q),Z),(ae=D[te])!==0&&ie(k,Q-=W[te],ae)),se<k.last_lit;);ee(k,y,N)}function Fe(k,N){var Z,Q,F,te=N.dyn_tree,ae=N.stat_desc.static_tree,se=N.stat_desc.has_stree,ce=N.stat_desc.elems,Ce=-1;for(k.heap_len=0,k.heap_max=m,Z=0;Z<ce;Z++)te[2*Z]!==0?(k.heap[++k.heap_len]=Ce=Z,k.depth[Z]=0):te[2*Z+1]=0;for(;k.heap_len<2;)te[2*(F=k.heap[++k.heap_len]=Ce<2?++Ce:0)]=1,k.depth[F]=0,k.opt_len--,se&&(k.static_len-=ae[2*F+1]);for(N.max_code=Ce,Z=k.heap_len>>1;1<=Z;Z--)Te(k,te,Z);for(F=ce;Z=k.heap[1],k.heap[1]=k.heap[k.heap_len--],Te(k,te,1),Q=k.heap[1],k.heap[--k.heap_max]=Z,k.heap[--k.heap_max]=Q,te[2*F]=te[2*Z]+te[2*Q],k.depth[F]=(k.depth[Z]>=k.depth[Q]?k.depth[Z]:k.depth[Q])+1,te[2*Z+1]=te[2*Q+1]=F,k.heap[1]=F++,Te(k,te,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],function(be,Ke){var Wt,lt,ls,$e,Rs,Un,qt=Ke.dyn_tree,Di=Ke.max_code,cs=Ke.stat_desc.static_tree,hs=Ke.stat_desc.has_stree,ds=Ke.stat_desc.extra_bits,zi=Ke.stat_desc.extra_base,Fn=Ke.stat_desc.max_length,Qr=0;for($e=0;$e<=v;$e++)be.bl_count[$e]=0;for(qt[2*be.heap[be.heap_max]+1]=0,Wt=be.heap_max+1;Wt<m;Wt++)Fn<($e=qt[2*qt[2*(lt=be.heap[Wt])+1]+1]+1)&&($e=Fn,Qr++),qt[2*lt+1]=$e,Di<lt||(be.bl_count[$e]++,Rs=0,zi<=lt&&(Rs=ds[lt-zi]),Un=qt[2*lt],be.opt_len+=Un*($e+Rs),hs&&(be.static_len+=Un*(cs[2*lt+1]+Rs)));if(Qr!==0){do{for($e=Fn-1;be.bl_count[$e]===0;)$e--;be.bl_count[$e]--,be.bl_count[$e+1]+=2,be.bl_count[Fn]--,Qr-=2}while(0<Qr);for($e=Fn;$e!==0;$e--)for(lt=be.bl_count[$e];lt!==0;)Di<(ls=be.heap[--Wt])||(qt[2*ls+1]!==$e&&(be.opt_len+=($e-qt[2*ls+1])*qt[2*ls],qt[2*ls+1]=$e),lt--)}}(k,N),pe(te,Ce,k.bl_count)}function x(k,N,Z){var Q,F,te=-1,ae=N[1],se=0,ce=7,Ce=4;for(ae===0&&(ce=138,Ce=3),N[2*(Z+1)+1]=65535,Q=0;Q<=Z;Q++)F=ae,ae=N[2*(Q+1)+1],++se<ce&&F===ae||(se<Ce?k.bl_tree[2*F]+=se:F!==0?(F!==te&&k.bl_tree[2*F]++,k.bl_tree[2*w]++):se<=10?k.bl_tree[2*S]++:k.bl_tree[2*T]++,te=F,Ce=(se=0)===ae?(ce=138,3):F===ae?(ce=6,3):(ce=7,4))}function G(k,N,Z){var Q,F,te=-1,ae=N[1],se=0,ce=7,Ce=4;for(ae===0&&(ce=138,Ce=3),Q=0;Q<=Z;Q++)if(F=ae,ae=N[2*(Q+1)+1],!(++se<ce&&F===ae)){if(se<Ce)for(;ee(k,F,k.bl_tree),--se!=0;);else F!==0?(F!==te&&(ee(k,F,k.bl_tree),se--),ee(k,w,k.bl_tree),ie(k,se-3,2)):se<=10?(ee(k,S,k.bl_tree),ie(k,se-3,3)):(ee(k,T,k.bl_tree),ie(k,se-11,7));te=F,Ce=(se=0)===ae?(ce=138,3):F===ae?(ce=6,3):(ce=7,4)}}l(W);var q=!1;function z(k,N,Z,Q){ie(k,(c<<1)+(Q?1:0),3),function(F,te,ae,se){fe(F),re(F,ae),re(F,~ae),r.arraySet(F.pending_buf,F.window,te,ae,F.pending),F.pending+=ae}(k,N,Z)}n._tr_init=function(k){q||(function(){var N,Z,Q,F,te,ae=new Array(v+1);for(F=Q=0;F<h-1;F++)for($[F]=Q,N=0;N<1<<P[F];N++)_[Q++]=F;for(_[Q-1]=F,F=te=0;F<16;F++)for(W[F]=te,N=0;N<1<<D[F];N++)O[te++]=F;for(te>>=7;F<p;F++)for(W[F]=te<<7,N=0;N<1<<D[F]-7;N++)O[256+te++]=F;for(Z=0;Z<=v;Z++)ae[Z]=0;for(N=0;N<=143;)R[2*N+1]=8,N++,ae[8]++;for(;N<=255;)R[2*N+1]=9,N++,ae[9]++;for(;N<=279;)R[2*N+1]=7,N++,ae[7]++;for(;N<=287;)R[2*N+1]=8,N++,ae[8]++;for(pe(R,u+1,ae),N=0;N<p;N++)A[2*N+1]=5,A[2*N]=he(N,5);X=new ne(R,P,d+1,u,v),V=new ne(A,D,0,p,v),J=new ne(new Array(0),M,0,g,b)}(),q=!0),k.l_desc=new U(k.dyn_ltree,X),k.d_desc=new U(k.dyn_dtree,V),k.bl_desc=new U(k.bl_tree,J),k.bi_buf=0,k.bi_valid=0,le(k)},n._tr_stored_block=z,n._tr_flush_block=function(k,N,Z,Q){var F,te,ae=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=function(se){var ce,Ce=4093624447;for(ce=0;ce<=31;ce++,Ce>>>=1)if(1&Ce&&se.dyn_ltree[2*ce]!==0)return o;if(se.dyn_ltree[18]!==0||se.dyn_ltree[20]!==0||se.dyn_ltree[26]!==0)return a;for(ce=32;ce<d;ce++)if(se.dyn_ltree[2*ce]!==0)return a;return o}(k)),Fe(k,k.l_desc),Fe(k,k.d_desc),ae=function(se){var ce;for(x(se,se.dyn_ltree,se.l_desc.max_code),x(se,se.dyn_dtree,se.d_desc.max_code),Fe(se,se.bl_desc),ce=g-1;3<=ce&&se.bl_tree[2*I[ce]+1]===0;ce--);return se.opt_len+=3*(ce+1)+5+5+4,ce}(k),F=k.opt_len+3+7>>>3,(te=k.static_len+3+7>>>3)<=F&&(F=te)):F=te=Z+5,Z+4<=F&&N!==-1?z(k,N,Z,Q):k.strategy===4||te===F?(ie(k,2+(Q?1:0),3),Xe(k,R,A)):(ie(k,4+(Q?1:0),3),function(se,ce,Ce,be){var Ke;for(ie(se,ce-257,5),ie(se,Ce-1,5),ie(se,be-4,4),Ke=0;Ke<be;Ke++)ie(se,se.bl_tree[2*I[Ke]+1],3);G(se,se.dyn_ltree,ce-1),G(se,se.dyn_dtree,Ce-1)}(k,k.l_desc.max_code+1,k.d_desc.max_code+1,ae+1),Xe(k,k.dyn_ltree,k.dyn_dtree)),le(k),Q&&fe(k)},n._tr_tally=function(k,N,Z){return k.pending_buf[k.d_buf+2*k.last_lit]=N>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&N,k.pending_buf[k.l_buf+k.last_lit]=255&Z,k.last_lit++,N===0?k.dyn_ltree[2*Z]++:(k.matches++,N--,k.dyn_ltree[2*(_[Z]+d+1)]++,k.dyn_dtree[2*B(N)]++),k.last_lit===k.lit_bufsize-1},n._tr_align=function(k){ie(k,2,3),ee(k,y,R),function(N){N.bi_valid===16?(re(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)}(k)}},{"../utils/common":41}],53:[function(t,i,n){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,n){(function(r){(function(o,a){if(!o.setImmediate){var l,c,h,d,u=1,p={},g=!1,m=o.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(o);v=v&&v.setTimeout?v:o,l={}.toString.call(o.process)==="[object process]"?function(w){process.nextTick(function(){b(w)})}:function(){if(o.postMessage&&!o.importScripts){var w=!0,S=o.onmessage;return o.onmessage=function(){w=!1},o.postMessage("","*"),o.onmessage=S,w}}()?(d="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",y,!1):o.attachEvent("onmessage",y),function(w){o.postMessage(d+w,"*")}):o.MessageChannel?((h=new MessageChannel).port1.onmessage=function(w){b(w.data)},function(w){h.port2.postMessage(w)}):m&&"onreadystatechange"in m.createElement("script")?(c=m.documentElement,function(w){var S=m.createElement("script");S.onreadystatechange=function(){b(w),S.onreadystatechange=null,c.removeChild(S),S=null},c.appendChild(S)}):function(w){setTimeout(b,0,w)},v.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var S=new Array(arguments.length-1),T=0;T<S.length;T++)S[T]=arguments[T+1];var P={callback:w,args:S};return p[u]=P,l(u),u++},v.clearImmediate=f}function f(w){delete p[w]}function b(w){if(g)setTimeout(b,0,w);else{var S=p[w];if(S){g=!0;try{(function(T){var P=T.callback,D=T.args;switch(D.length){case 0:P();break;case 1:P(D[0]);break;case 2:P(D[0],D[1]);break;case 3:P(D[0],D[1],D[2]);break;default:P.apply(a,D)}})(S)}finally{f(w),g=!1}}}}function y(w){w.source===o&&typeof w.data=="string"&&w.data.indexOf(d)===0&&b(+w.data.slice(d.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Bp);var a0=Bp.exports;const ad=yv(a0);let Jl=class{constructor(e,t){C(this,"date",new Date),C(this,"author"),C(this,"guid",ot.create()),C(this,"viewpoint"),C(this,"modifiedAuthor"),C(this,"modifiedDate"),C(this,"topic"),C(this,"_components"),C(this,"_comment",""),this._components=e,this._comment=t;const i=this._components.get(et);this.author=i.config.author}set comment(e){var t;const i=this._components.get(et);this._comment=e,this.modifiedDate=new Date,this.modifiedAuthor=i.config.author,(t=this.topic)==null||t.comments.set(this.guid,this)}get comment(){return this._comment}toJSON(){var e,t;const i={guid:this.guid,date:this.date.toISOString(),author:this.author,comment:this.comment,topic_guid:(e=this.topic)==null?void 0:e.guid,viewpoint_guid:this.viewpoint,modified_date:(t=this.modifiedDate)==null?void 0:t.toISOString(),modified_author:this.modifiedAuthor};for(const[n,r]of Object.entries(i))r===void 0&&delete i[n];return i}};const Rp=class Bi{constructor(e){C(this,"guid",ot.create()),C(this,"title",Bi.default.title),C(this,"creationDate",new Date),C(this,"creationAuthor",""),C(this,"viewpoints",new Qa),C(this,"relatedTopics",new Qa),C(this,"comments",new bn),C(this,"documentReferences",new Qa),C(this,"customData",{}),C(this,"description"),C(this,"serverAssignedId"),C(this,"dueDate"),C(this,"modifiedAuthor"),C(this,"modifiedDate"),C(this,"index"),C(this,"_type",Bi.default.type),C(this,"_status",Bi.default.status),C(this,"_priority",Bi.default.priority),C(this,"_stage",Bi.default.stage),C(this,"_assignedTo",Bi.default.assignedTo),C(this,"_labels",Bi.default.labels??new Set),C(this,"_components"),this._components=e;const t=e.get(et);this.creationAuthor=t.config.author,this.relatedTopics.guard=i=>i!==this.guid}set type(e){const t=this._components.get(et),{strict:i,types:n}=t.config;(!i||n.has(e))&&(this._type=e)}get type(){return this._type}set status(e){const t=this._components.get(et),{strict:i,statuses:n}=t.config;(!i||n.has(e))&&(this._status=e)}get status(){return this._status}set priority(e){const t=this._components.get(et);if(e){const{strict:i,priorities:n}=t.config;if(!(!i||n.has(e)))return;this._priority=e}else this._priority=e}get priority(){return this._priority}set stage(e){const t=this._components.get(et);if(e){const{strict:i,stages:n}=t.config;if(!(!i||n.has(e)))return;this._stage=e}else this._stage=e}get stage(){return this._stage}set assignedTo(e){const t=this._components.get(et);if(e){const{strict:i,users:n}=t.config;if(!(!i||n.has(e)))return;this._assignedTo=e}else this._assignedTo=e}get assignedTo(){return this._assignedTo}set labels(e){const t=this._components.get(et),{strict:i,labels:n}=t.config;if(i){const r=new Set;for(const o of e)(!i||n.has(o))&&r.add(o);this._labels=r}else this._labels=e}get labels(){return this._labels}get _managerVersion(){return this._components.get(et).config.version}set(e){const t=e,i=this;for(const n in e){if(n==="guid")continue;const r=t[n];n in this&&(i[n]=r)}return this._components.get(et).list.set(this.guid,this),this}createComment(e,t){const i=new Jl(this._components,e);return i.viewpoint=t,i.topic=this,this.comments.set(i.guid,i),i}createLabelTags(){const e=[...this.labels];if(this._components.get(et).config.exportCustomDataAsLabels)for(const t in this.customData){const i=this.customData[t];typeof i=="string"&&e.push(i)}return e}createCommentTags(){return[...this.comments.values()].map(e=>{var t;return{$Guid:e.guid,Date:e.date.toISOString(),Author:e.author,Comment:e.comment,ModifiedAuthor:e.modifiedAuthor,ModifiedDate:(t=e.modifiedDate)==null?void 0:t.toISOString(),Viewpoint:e.viewpoint?{$Guid:e.viewpoint}:void 0}})}createViewpointTags(){const e=this._components.get(yi);return[...this.viewpoints].map(t=>e.list.get(t)).filter(t=>t).map(t=>{const i={$Guid:t.guid,Viewpoint:`${t.title??t.guid}.bcfv`};if(e.snapshots.get(t.snapshot)){const n=e.getSnapshotExtension(t.snapshot);i.Snapshot=`${t.snapshot}.${n}`}return i})}createRelatedTopicTags(){return[...this.relatedTopics].map(e=>({$Guid:e}))}createDocumentReferencesTag(e=this._managerVersion){const t=[];if(!(e==="3"||e==="2.1"))return t;const i=this._components.get(et);for(const n of this.documentReferences){const r=i.documents.get(n);if(!r)continue;let o={$Guid:ot.create(),Description:r.description};e==="2.1"&&(o={...o,$isExternal:r.type==="external"?!0:void 0,ReferencedDocument:r.type==="external"?r.url:`../${r.fileName}`}),e==="3"&&(o={...o,DocumentGuid:r.type==="internal"?n:void 0,Url:r.type==="external"?r.url:void 0}),Object.keys(o).length>0&&t.push(o)}return t}toJSON(){var e,t;const i={guid:this.guid,server_assigned_id:this.serverAssignedId,topic_type:this.type,topic_status:this.status,title:this.title,priority:this.priority,index:this.index,labels:[...this.labels],creation_date:this.creationDate.toISOString(),creation_author:this.creationAuthor,modified_date:(e=this.modifiedDate)==null?void 0:e.toISOString(),modified_author:this.modifiedAuthor,assigned_to:this.assignedTo,stage:this.stage,description:this.description,due_date:(t=this.dueDate)==null?void 0:t.toISOString(),comments:[...this.comments].map(([o,a])=>a.toJSON()),relatedTopics:[...this.relatedTopics].map(o=>({related_topic_guid:o}))},n=this._components.get(yi);for(const o of this.viewpoints){const a=n.list.get(o);a&&(i.viewpoints||(i.viewpoints=[]),i.viewpoints.push(a.toJSON()))}const r=this._components.get(et);for(const o of this.documentReferences){const a=r.documents.get(o);a&&(i.document_references||(i.document_references=[]),a.type==="external"?i.document_references.push({guid:ot.create(),description:a.description,url:a.url}):i.document_references.push({guid:ot.create(),description:a.description,document_guid:o}))}for(const[o,a]of Object.entries(i))(a===void 0||Array.isArray(a)&&a.length===0)&&delete i[o];return i}serialize(){var e,t;const i=this._managerVersion,n={$Guid:this.guid,$TopicType:this.type,$TopicStatus:this.status,$ServerAssignedId:this.serverAssignedId,Title:this.title,CreationAuthor:this.creationAuthor,CreationDate:this.creationDate.toISOString(),Priority:this.priority,Index:i==="2.1"?this.index:void 0,ModifiedDate:(e=this.modifiedDate)==null?void 0:e.toISOString(),ModifiedAuthor:this.modifiedAuthor,DueDate:(t=this.dueDate)==null?void 0:t.toISOString(),AssignedTo:this.assignedTo,Description:this.description,Stage:this.stage,DocumentReferences:i==="3"?{DocumentReference:this.createDocumentReferencesTag(i)}:void 0,RelatedTopics:i==="3"?{RelatedTopic:this.createRelatedTopicTags()}:void 0,RelatedTopic:i==="2.1"?this.createRelatedTopicTags():void 0,Labels:i==="3"?{Label:this.createLabelTags()}:void 0,Viewpoints:i==="3"?{ViewPoint:this.createViewpointTags()}:void 0,Comments:i==="3"?{Comment:this.createCommentTags()}:void 0};i==="2.1"&&(n.Labels=this.createLabelTags(),n.DocumentReference=this.createDocumentReferencesTag(i));const r={Markup:{Topic:n}};return i==="2.1"&&(r.Markup.Viewpoints=this.createViewpointTags(),r.Markup.Comment=this.createCommentTags()),`<?xml version="1.0" encoding="UTF-8"?>
    ${Ma.builder.build(r)}`}};C(Rp,"default",{title:"BCF Topic",type:"Issue",status:"Active"});let ld=Rp;const l0=(s,e)=>{if(e.trim()==="")return;const t=et.xmlParser.parse(e).Extensions;if(!t)return;const{Priorities:i,TopicStatuses:n,TopicTypes:r,Users:o}=t;if(i&&i.Priority){const a=Array.isArray(i.Priority)?i.Priority:[i.Priority];for(const l of a)s.config.priorities.add(l)}if(n&&n.TopicStatus){const a=Array.isArray(n.TopicStatus)?n.TopicStatus:[n.TopicStatus];for(const l of a)s.config.statuses.add(l)}if(r&&r.TopicType){const a=Array.isArray(r.TopicType)?r.TopicType:[r.TopicType];for(const l of a)s.config.types.add(l)}if(o&&o.User){const a=Array.isArray(o.User)?o.User:[o.User];for(const l of a)s.config.users.add(l)}};let c0=class extends Oa{constructor(){super(...arguments),C(this,"_config",{version:{type:"Select",options:new Set(["2.1","3"]),multiple:!1,value:""},author:{type:"Text",value:""},types:{type:"TextSet",value:new Set},statuses:{type:"TextSet",value:new Set},priorities:{type:"TextSet",value:new Set},labels:{type:"TextSet",value:new Set},stages:{type:"TextSet",value:new Set},users:{type:"TextSet",value:new Set},includeSelectionTag:{type:"Boolean",value:!1},updateExtensionsOnImport:{type:"Boolean",value:!1},strict:{type:"Boolean",value:!1},includeAllExtensionsOnExport:{type:"Boolean",value:!1},fallbackVersionOnImport:{type:"Select",multiple:!1,options:new Set(["2.1","3"]),value:""},ignoreIncompleteTopicsOnImport:{type:"Boolean",value:!1},exportCustomDataAsLabels:{type:"Boolean",value:!1}})}get version(){return this._config.version.value}set version(e){this._config.version.value=e}get author(){return this._config.author.value}set author(e){this._config.author.value=e}get types(){return this._config.types.value}set types(e){this._config.types.value=e}get statuses(){return this._config.statuses.value}set statuses(e){this._config.statuses.value=e}get priorities(){return this._config.priorities.value}set priorities(e){this._config.priorities.value=e}get labels(){return this._config.labels.value}set labels(e){this._config.labels.value=e}get stages(){return this._config.stages.value}set stages(e){this._config.stages.value=e}get users(){return this._config.users.value}set users(e){this._config.users.value=e}get includeSelectionTag(){return this._config.includeSelectionTag.value}set includeSelectionTag(e){this._config.includeSelectionTag.value=e}get updateExtensionsOnImport(){return this._config.updateExtensionsOnImport.value}set updateExtensionsOnImport(e){this._config.updateExtensionsOnImport.value=e}get strict(){return this._config.strict.value}set strict(e){this._config.strict.value=e}get includeAllExtensionsOnExport(){return this._config.includeAllExtensionsOnExport.value}set includeAllExtensionsOnExport(e){this._config.includeAllExtensionsOnExport.value=e}get fallbackVersionOnImport(){return this._config.fallbackVersionOnImport.value}set fallbackVersionOnImport(e){this._config.fallbackVersionOnImport.value=e}get ignoreIncompleteTopicsOnImport(){return this._config.ignoreIncompleteTopicsOnImport.value}set ignoreIncompleteTopicsOnImport(e){this._config.ignoreIncompleteTopicsOnImport.value=e}get exportCustomDataAsLabels(){return this._config.exportCustomDataAsLabels.value}set exportCustomDataAsLabels(e){this._config.exportCustomDataAsLabels.value=e}};const Vc=class lr extends Oe{constructor(){super(...arguments),C(this,"enabled",!1),C(this,"_defaultConfig",{author:"jhon.doe@example.com",version:"2.1",types:new Set(["Clash","Failure","Fault","Inquiry","Issue","Remark","Request"]),statuses:new Set(["Active","In Progress","Done","In Review","Closed"]),priorities:new Set(["On hold","Minor","Normal","Major","Critical"]),labels:new Set,stages:new Set,users:new Set,includeSelectionTag:!1,updateExtensionsOnImport:!0,strict:!1,includeAllExtensionsOnExport:!0,fallbackVersionOnImport:"2.1",ignoreIncompleteTopicsOnImport:!1,exportCustomDataAsLabels:!1}),C(this,"config",new c0(this,this.components,"BCF Topics",lr.uuid)),C(this,"list",new bn),C(this,"documents",new bn),C(this,"onSetup",new K),C(this,"isSetup",!1),C(this,"onBCFImported",new K),C(this,"onDisposed",new K)}setup(e){if(this.isSetup)return;const t={...this._defaultConfig,...e};this.config.version=t.version,this.config.author=t.author,this.config.types=t.types,this.config.statuses=t.statuses,this.config.priorities=t.priorities,this.config.labels=t.labels,this.config.stages=t.stages,this.config.users=t.users,this.config.includeSelectionTag=t.includeSelectionTag,this.config.updateExtensionsOnImport=t.updateExtensionsOnImport,this.config.strict=t.strict,this.config.includeAllExtensionsOnExport=t.includeAllExtensionsOnExport,this.config.fallbackVersionOnImport=t.fallbackVersionOnImport||"",this.config.ignoreIncompleteTopicsOnImport=t.ignoreIncompleteTopicsOnImport,this.isSetup=!0,this.enabled=!0,this.onSetup.trigger()}create(e){const t=new ld(this.components);return e?(t.guid=e.guid??t.guid,t.set(e)):this.list.set(t.guid,t),t}dispose(){this.list.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}get usedTypes(){const e=[...this.list].map(([t,i])=>i.type);return new Set(e)}get usedStatuses(){const e=[...this.list].map(([t,i])=>i.status);return new Set(e)}get usedPriorities(){const e=[...this.list].map(([t,i])=>i.priority).filter(t=>t);return new Set(e)}get usedStages(){const e=[...this.list].map(([t,i])=>i.stage).filter(t=>t);return new Set(e)}get usedUsers(){const e=[];for(const[t,i]of this.list){e.push(i.creationAuthor),i.assignedTo&&e.push(i.assignedTo),i.modifiedAuthor&&e.push(i.modifiedAuthor);for(const[n,r]of i.comments)e.push(r.author),r.modifiedAuthor&&e.push(r.modifiedAuthor)}return new Set(e)}get usedLabels(){const e=[];for(const[t,i]of this.list)e.push(...i.labels);return new Set(e)}updateExtensions(){for(const[e,t]of this.list){for(const i of t.labels)this.config.labels.add(i);this.config.types.add(t.type),t.priority&&this.config.priorities.add(t.priority),t.stage&&this.config.stages.add(t.stage),this.config.statuses.add(t.status),this.config.users.add(t.creationAuthor),t.assignedTo&&this.config.users.add(t.assignedTo),t.modifiedAuthor&&this.config.users.add(t.modifiedAuthor);for(const[i,n]of t.comments)this.config.users.add(n.author),n.modifiedAuthor&&this.config.users.add(n.modifiedAuthor)}}updateViewpointReferences(){const e=this.components.get(yi);for(const[t,i]of this.list)for(const n of i.viewpoints)e.list.has(n)||i.viewpoints.delete(n)}async export(e=this.list.values()){const t=new ad;t.file("bcf.version",`<?xml version="1.0" encoding="UTF-8"?>
    <Version VersionId="${this.config.version}" xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/buildingSMART/BCF-XML/release_3_0/Schemas/version.xsd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    </Version>`);for(const[n,r]of this.documents.entries())r.type!=="external"&&t.file(this.config.version==="2.1"?r.fileName:`documents/${n}`,r.data);if(this.config.version==="3"){const n=[];for(const[r,o]of this.documents.entries()){const{type:a,description:l}=o;a!=="external"&&n.push(`<Document Guid="${r}">
        <Filename>${o.fileName}</Filename>
        ${l?`<Description>${l}</Description>`:""}
      </Document>`)}n.length>0&&t.file("documents.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <DocumentInfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="documents.xsd">
    <Documents>
      ${n.join(`
`)}
    </Documents>
  </DocumentInfo>`)}t.file("bcf.extensions",this.serializeExtensions());const i=this.components.get(yi);for(const n of e){const r=t.folder(n.guid);r.file("markup.bcf",n.serialize());for(const o of n.viewpoints){const a=i.list.get(o);if(!a)continue;const l=a.title??a.guid;r.file(`${l}.bcfv`,await a.serialize());const c=i.snapshots.get(a.snapshot);if(!c)continue;const h=c?a.snapshot:a.guid,d=i.getSnapshotExtension(a.snapshot);r.file(`${h}.${d}`,c,{binary:!0})}}return await t.generateAsync({type:"blob"})}serializeExtensions(){const e=[...this.config.types].map(a=>`<TopicType>${a}</TopicType>`).join(`
`),t=[...this.config.statuses].map(a=>`<TopicStatus>${a}</TopicStatus>`).join(`
`),i=[...this.config.priorities].map(a=>`<Priority>${a}</Priority>`).join(`
`),n=[...this.config.labels].map(a=>`<TopicLabel>${a}</TopicLabel>`).join(`
`),r=[...this.config.stages].map(a=>`<Stage>${a}</Stage>`).join(`
`),o=[...this.config.users].map(a=>`<User>${a}</User>`).join(`
`);return`
      <?xml version="1.0" encoding="UTF-8"?>
      <Extensions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="your-schema-location.xsd">
        ${e.length!==0?`<TopicTypes>
${e}
</TopicTypes>`:""}
        ${t.length!==0?`<TopicStatuses>
${t}
</TopicStatuses>`:""}
        ${i.length!==0?`<Priorities>
${i}
</Priorities>`:""}
        ${n.length!==0?`<TopicLabels>
${n}
</TopicLabels>`:""}
        ${r.length!==0?`<Stages>
${r}
</Stages>`:""}
        ${o.length!==0?`<Users>
${o}
</Users>`:""}
      </Extensions>
    `}processMarkupComment(e){const{Guid:t,Date:i,Author:n,Comment:r,Viewpoint:o}=e;if(!(t&&i&&n&&(Jl||o)))return null;const a=new Jl(this.components,r??"");return a.guid=t,a.date=new Date(i),a.author=n,a.viewpoint=o==null?void 0:o.Guid,a.modifiedAuthor=e.ModifiedAuthor,a.modifiedDate=e.ModifiedDate?new Date(e.ModifiedDate):void 0,a}getMarkupComments(e,t){var i;let n;if(t==="2.1"&&(n=e.Comment),t==="3"&&(n=(i=e.Topic.Comments)==null?void 0:i.Comment),!n)return[];n=Array.isArray(n)?n:[n];const r=n.map(o=>this.processMarkupComment(o)).filter(o=>o);return Array.isArray(r)?r:[r]}getMarkupLabels(e,t){var i;let n;return t==="2.1"&&(n=e.Topic.Labels),t==="3"&&(n=(i=e.Topic.Labels)==null?void 0:i.Label),n?Array.isArray(n)?n:[n]:[]}getMarkupViewpoints(e,t){var i;let n;return t==="2.1"&&(n=e.Viewpoints),t==="3"&&(n=(i=e.Topic.Viewpoints)==null?void 0:i.ViewPoint),n?(n=Array.isArray(n)?n:[n],n):[]}getMarkupRelatedTopics(e,t){var i;let n;return t==="2.1"&&(n=e.Topic.RelatedTopic),t==="3"&&(n=(i=e.Topic.RelatedTopics)==null?void 0:i.RelatedTopic),n?(Array.isArray(n)?n:[n]).map(r=>r.Guid):[]}getMarkupDocumentReferences(e,t){var i;let n;return t==="2.1"&&(n=e.Topic.DocumentReference),t==="3"&&(n=(i=e.Topic.DocumentReferences)==null?void 0:i.DocumentReference),n?Array.isArray(n)?n:[n]:[]}async load(e){var t,i,n;const{fallbackVersionOnImport:r,ignoreIncompleteTopicsOnImport:o,updateExtensionsOnImport:a}=this.config,l=new ad;await l.loadAsync(e);const c=Object.values(l.files);let h=r;const d=c.find(y=>y.name.endsWith(".version"));if(d){const y=await d.async("string"),w=lr.xmlParser.parse(y).Version.VersionId;h=String(w)}if(!(h&&(h==="2.1"||h==="3")))throw new Error(`BCFTopics: ${h} is not supported.`);const u=c.find(y=>y.name.endsWith(".extensions"));if(a&&u){const y=await u.async("string");l0(this,y)}const p=[],g=this.components.get(yi),m=c.filter(y=>y.name.endsWith(".bcfv"));for(const y of m){const w=await y.async("string"),S=lr.xmlParser.parse(w).VisualizationInfo;if(!S){console.warn("Missing VisualizationInfo in Viewpoint");continue}const T={},{Guid:P,ClippingPlanes:D,Components:M,OrthogonalCamera:I,PerspectiveCamera:R}=S;if(P&&(T.guid=P),M){const O={selection:[],coloring:[],visibility:{default_visibility:!1,exceptions:[],view_setup_hints:{spaces_visible:!1,space_boundaries_visible:!1,openings_visible:!1}}};T.components=O;const{Selection:_,Visibility:$}=M;if(_&&_.Component){const J=Array.isArray(_.Component)?_.Component:[_.Component];O.selection=J.map(W=>W.IfcGuid?{ifc_guid:W.IfcGuid}:null).filter(W=>W!==null)}if($&&"DefaultVisibility"in $&&(O.visibility.default_visibility=$.DefaultVisibility),$&&$.Exceptions&&"Component"in $.Exceptions){const{Component:J}=$.Exceptions,W=Array.isArray(J)?J:[J];O.visibility.exceptions=W.map(ne=>ne.IfcGuid?{ifc_guid:ne.IfcGuid}:null).filter(ne=>ne!==null)}let X;h==="2.1"&&(X=M.ViewSetupHints),h==="3"&&(X=(t=M.Visibility)==null?void 0:t.ViewSetupHints),X&&("OpeningsVisible"in X&&(O.visibility.view_setup_hints.openings_visible=X.OpeningsVisible),"SpacesVisible"in X&&(O.visibility.view_setup_hints.spaces_visible=X.SpacesVisible),"SpaceBoundariesVisible"in X&&(O.visibility.view_setup_hints.space_boundaries_visible=X.SpaceBoundariesVisible));const{Coloring:V}=M;if(V&&V.Color){const J=Array.isArray(V.Color)?V.Color:[V.Color];for(const W of J){const{Color:ne,Component:U}=W;if(!(ne.length===6||ne.length===8))continue;const B=ne.length===6?ne:ne.slice(2),re=(Array.isArray(U)?U:[U]).map(ie=>ie.IfcGuid?{ifc_guid:ie.IfcGuid}:null).filter(ie=>ie!==null);O.coloring.push({color:B,components:re})}}}if(I||R){const O=S.PerspectiveCamera??S.OrthogonalCamera,{CameraViewPoint:_,CameraDirection:$}=O,X=new L(Number(_.X),Number(_.Z),Number(-_.Y)),V=new L(Number($.X),Number($.Z),Number(-$.Y)),J={camera_view_point:{x:X.x,y:X.y,z:X.z},camera_direction:{x:V.x,y:V.y,z:V.z},aspect_ratio:"AspectRatio"in O?O.AspectRatio:1,camera_up_vector:{x:0,y:0,z:0}};"ViewToWorldScale"in O&&(T.orthogonal_camera={...J,view_to_world_scale:O.ViewToWorldScale}),"FieldOfView"in O&&(T.perspective_camera={...J,field_of_view:O.FieldOfView})}if(D){const O=(Array.isArray(D.ClippingPlane)?D.ClippingPlane:[D.ClippingPlane]).map(({Location:_,Direction:$})=>({location:{x:_.x,y:_.y,z:_.z},direction:{x:$.x,y:$.y,z:$.z}}));T.clipping_planes=O}const A=new jp(this.components,T);p.push(A)}const v={},f=[],b=c.filter(y=>y.name.endsWith(".bcf"));for(const y of b){const w=await y.async("string"),S=lr.xmlParser.parse(w).Markup,T=S.Topic,{Guid:P,TopicType:D,TopicStatus:M,Title:I,CreationDate:R,CreationAuthor:A}=T;if(o&&!(P&&D&&M&&I&&R&&A))continue;const O=new ld(this.components);O.guid=P??O.guid;const _=this.getMarkupRelatedTopics(S,h);v[O.guid]=new Set(_),O.type=D??O.type,O.status=M??O.status,O.title=I??O.title,O.creationDate=R?new Date(R):O.creationDate,O.creationAuthor=A??O.creationAuthor,O.serverAssignedId=T.ServerAssignedId,O.priority=T.Priority,O.index=T.Index,O.modifiedDate=T.ModifiedDate?new Date(T.ModifiedDate):void 0,O.modifiedAuthor=T.ModifiedAuthor,O.dueDate=T.DueDate?new Date(T.DueDate):void 0,O.assignedTo=T.AssignedTo,O.description=T.Description,O.stage=T.Stage;const $=this.getMarkupLabels(S,h);for(const B of $)O.labels.add(B);const X=this.getMarkupComments(S,h);for(const B of X)O.comments.set(B.guid,B);const V=this.getMarkupViewpoints(S,h);for(const B of V){if(!(B&&B.Guid))continue;const re=g.list.get(B.Guid);if(!re)continue;O.viewpoints.add(re.guid);const ie=`${O.guid}/${B.Snapshot}`,ee=c.find(({name:he})=>he===ie);if(ee){const he=await ee.async("arraybuffer"),pe=new Uint8Array(he);g.snapshots.set(re.guid,pe),re.snapshot=re.guid??null}}const J=this.getMarkupDocumentReferences(S,h),W=c.find(B=>B.name==="documents.xml");let ne=[];const U=await(W==null?void 0:W.async("string"));if(U){const B=(n=(i=Ma.parser.parse(U).DocumentInfo)==null?void 0:i.Documents)==null?void 0:n.Document;ne=Array.isArray(B)?B:[B]}for(const B of J){const{Description:re,DocumentGuid:ie,Url:ee,isExternal:he,ReferencedDocument:pe}=B;if(ie&&ne.length>0){const le=ne.find(({Guid:Fe})=>Fe===ie),fe=c.find(Fe=>Fe.name.endsWith(ie)),we=await(fe==null?void 0:fe.async("uint8array"));if(!(le&&we))continue;const{Description:Te,Filename:Xe}=le;this.documents.set(ie,{type:"internal",fileName:Xe,description:Te,data:we}),O.documentReferences.add(ie)}if(ee){const le=this.documents.add({type:"external",url:ee,description:re});O.documentReferences.add(le)}if(pe){let le=null;if(he)le=this.documents.add({type:"external",url:pe,description:re});else{const fe=pe.split("/"),we=fe[fe.length-1],Te=c.find(Fe=>Fe.name.endsWith(we)),Xe=await(Te==null?void 0:Te.async("uint8array"));if(!Xe)continue;le=this.documents.add({type:"internal",fileName:we,data:Xe,description:re})}O.documentReferences.add(le)}}this.list.set(O.guid,O),f.push(O)}for(const y in v){const w=this.list.get(y);if(!w)continue;const S=v[y];for(const T of S)w.relatedTopics.add(T)}return this.onBCFImported.trigger(f),{viewpoints:p,topics:f}}};C(Vc,"uuid","de977976-e4f6-4e4f-a01a-204727839802");C(Vc,"xmlParser",new Pa.XMLParser({allowBooleanAttributes:!0,attributeNamePrefix:"",ignoreAttributes:!1,ignoreDeclaration:!0,ignorePiTags:!0,numberParseOptions:{leadingZeros:!0,hex:!0},parseAttributeValue:!0,preserveOrder:!1,processEntities:!1,removeNSPrefix:!0,trimValues:!0}));let et=Vc;const fs=new Oc,ut=new L,$i=new L,Le=new Zt,cd={X:new L(1,0,0),Y:new L(0,1,0),Z:new L(0,0,1)},vl={type:"change"},hd={type:"mouseDown",mode:null},dd={type:"mouseUp",mode:null},ud={type:"objectChange"};let h0=class extends Lg{constructor(e,t=null){super(void 0,t);const i=new g0(this);this._root=i;const n=new v0;this._gizmo=n,i.add(n);const r=new b0;this._plane=r,i.add(r);const o=this;function a(y,w){let S=w;Object.defineProperty(o,y,{get:function(){return S!==void 0?S:w},set:function(T){S!==T&&(S=T,r[y]=T,n[y]=T,o.dispatchEvent({type:y+"-changed",value:T}),o.dispatchEvent(vl))}}),o[y]=w,r[y]=w,n[y]=w}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new L,c=new L,h=new Zt,d=new Zt,u=new L,p=new Zt,g=new L,m=new L,v=new L,f=0,b=new L;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",d),a("cameraPosition",u),a("cameraQuaternion",p),a("pointStart",g),a("pointEnd",m),a("rotationAxis",v),a("rotationAngle",f),a("eye",b),this._offset=new L,this._startNorm=new L,this._endNorm=new L,this._cameraScale=new L,this._parentPosition=new L,this._parentQuaternion=new Zt,this._parentQuaternionInv=new Zt,this._parentScale=new L,this._worldScaleStart=new L,this._worldQuaternionInv=new Zt,this._worldScale=new L,this._positionStart=new L,this._quaternionStart=new Zt,this._scaleStart=new L,this._getPointer=d0.bind(this),this._onPointerDown=p0.bind(this),this._onPointerHover=u0.bind(this),this._onPointerMove=f0.bind(this),this._onPointerUp=m0.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&fs.setFromCamera(e,this.camera);const t=bl(this._gizmo.picker[this.mode],fs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&fs.setFromCamera(e,this.camera);const t=bl(this._plane,fs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,hd.mode=this.mode,this.dispatchEvent(hd)}}pointerMove(e){const t=this.axis,i=this.mode,n=this.object;let r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),n===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&fs.setFromCamera(e,this.camera);const o=bl(this._plane,fs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),n.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(n.position.applyQuaternion(Le.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.position.applyQuaternion(this._quaternionStart)),r==="world"&&(n.parent&&n.position.add(ut.setFromMatrixPosition(n.parent.matrixWorld)),t.search("X")!==-1&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.parent&&n.position.sub(ut.setFromMatrixPosition(n.parent.matrixWorld)))),n.position.x=Math.max(this.minX,Math.min(this.maxX,n.position.x)),n.position.y=Math.max(this.minY,Math.min(this.maxY,n.position.y)),n.position.z=Math.max(this.minZ,Math.min(this.maxZ,n.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),$i.set(a,a,a)}else ut.copy(this.pointStart),$i.copy(this.pointEnd),ut.applyQuaternion(this._worldQuaternionInv),$i.applyQuaternion(this._worldQuaternionInv),$i.divide(ut),t.search("X")===-1&&($i.x=1),t.search("Y")===-1&&($i.y=1),t.search("Z")===-1&&($i.z=1);n.scale.copy(this._scaleStart).multiply($i),this.scaleSnap&&(t.search("X")!==-1&&(n.scale.x=Math.round(n.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(n.scale.y=Math.round(n.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(n.scale.z=Math.round(n.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(ut.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(ut.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(cd[t]),ut.copy(cd[t]),r==="local"&&ut.applyQuaternion(this.worldQuaternion),ut.cross(this.eye),ut.length()===0?l=!0:this.rotationAngle=this._offset.dot(ut.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(n.quaternion.copy(this._quaternionStart),n.quaternion.multiply(Le.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),n.quaternion.copy(Le.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),n.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(vl),this.dispatchEvent(ud)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(dd.mode=this.mode,this.dispatchEvent(dd)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(vl),this.dispatchEvent(ud),this.pointStart.copy(this.pointEnd))}getRaycaster(){return fs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}};function d0(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function u0(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function p0(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function f0(s){this.enabled&&this.pointerMove(this._getPointer(s))}function m0(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function bl(s,e,t){const i=e.intersectObject(s,!0);for(let n=0;n<i.length;n++)if(i[n].object.visible||t)return i[n];return!1}const Co=new Ng,ke=new L(0,1,0),pd=new L(0,0,0),fd=new Ee,So=new Zt,Vo=new Zt,ai=new L,md=new Ee,cr=new L(1,0,0),bs=new L(0,1,0),hr=new L(0,0,1),Eo=new L,ir=new L,sr=new L;let g0=class extends mn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},v0=class extends mn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Ds({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new kc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const n=t.clone();n.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const d=e.clone();d.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25,e.clone().color.setHex(16776960);const p=e.clone();p.color.setHex(7895160);const g=new ft(0,.04,.1,12);g.translate(0,.05,0);const m=new dt(.08,.08,.08);m.translate(0,.04,0);const v=new at;v.setAttribute("position",new Zi([0,0,0,1,0,0],3));const f=new ft(.0075,.0075,.5,3);f.translate(0,.25,0);function b(_,$){const X=new jn(_,.0075,3,64,$*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function y(){const _=new at;return _.setAttribute("position",new Zi([0,0,0,1,1,1],3)),_}const w={X:[[new oe(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new oe(g,r),[-.5,0,0],[0,0,Math.PI/2]],[new oe(f,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new oe(g,o),[0,.5,0]],[new oe(g,o),[0,-.5,0],[Math.PI,0,0]],[new oe(f,o)]],Z:[[new oe(g,a),[0,0,.5],[Math.PI/2,0,0]],[new oe(g,a),[0,0,-.5],[-Math.PI/2,0,0]],[new oe(f,a),null,[Math.PI/2,0,0]]],XYZ:[[new oe(new Kr(.1,0),d.clone()),[0,0,0]]],XY:[[new oe(new dt(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new oe(new dt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new dt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new oe(new ft(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new oe(new ft(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new oe(new ft(.2,0,.6,4),i),[0,.3,0]],[new oe(new ft(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new oe(new ft(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new oe(new ft(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new oe(new Kr(.2,0),i)]],XY:[[new oe(new dt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new oe(new dt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new dt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new oe(new Kr(.01,2),n),null,null,null,"helper"]],END:[[new oe(new Kr(.01,2),n),null,null,null,"helper"]],DELTA:[[new Xt(y(),n),null,null,null,"helper"]],X:[[new Xt(v,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xt(v,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xt(v,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},P={XYZE:[[new oe(b(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new oe(b(.5,.5),r)]],Y:[[new oe(b(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new oe(b(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new oe(b(.75,1),u),null,[0,Math.PI/2,0]]]},D={AXIS:[[new Xt(v,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new oe(new $g(.25,10,8),i)]],X:[[new oe(new jn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new oe(new jn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new oe(new jn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new oe(new jn(.75,.1,2,24),i)]]},I={X:[[new oe(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new oe(f,r),[0,0,0],[0,0,-Math.PI/2]],[new oe(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new oe(m,o),[0,.5,0]],[new oe(f,o)],[new oe(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new oe(m,a),[0,0,.5],[Math.PI/2,0,0]],[new oe(f,a),[0,0,0],[Math.PI/2,0,0]],[new oe(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new oe(new dt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new oe(new dt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new dt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new oe(new dt(.1,.1,.1),d.clone())]]},R={X:[[new oe(new ft(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new oe(new ft(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new oe(new ft(.2,0,.6,4),i),[0,.3,0]],[new oe(new ft(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new oe(new ft(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new oe(new ft(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new oe(new dt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new oe(new dt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new dt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new oe(new dt(.2,.2,.2),i),[0,0,0]]]},A={X:[[new Xt(v,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xt(v,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xt(v,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(_){const $=new mn;for(const X in _)for(let V=_[X].length;V--;){const J=_[X][V][0].clone(),W=_[X][V][1],ne=_[X][V][2],U=_[X][V][3],B=_[X][V][4];J.name=X,J.tag=B,W&&J.position.set(W[0],W[1],W[2]),ne&&J.rotation.set(ne[0],ne[1],ne[2]),U&&J.scale.set(U[0],U[1],U[2]),J.updateMatrix();const re=J.geometry.clone();re.applyMatrix4(J.matrix),J.geometry=re,J.renderOrder=1/0,J.position.set(0,0,0),J.rotation.set(0,0,0),J.scale.set(1,1,1),$.add(J)}return $}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(w)),this.add(this.gizmo.rotate=O(P)),this.add(this.gizmo.scale=O(I)),this.add(this.picker.translate=O(S)),this.add(this.picker.rotate=O(M)),this.add(this.picker.scale=O(R)),this.add(this.helper.translate=O(T)),this.add(this.helper.rotate=O(D)),this.add(this.helper.scale=O(A)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const t=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Vo;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let n=0;n<i.length;n++){const r=i[n];r.visible=!0,r.rotation.set(0,0,0),r.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),r.scale.set(1,1,1).multiplyScalar(o*this.size/4),r.tag==="helper"){r.visible=!1,r.name==="AXIS"?(r.visible=!!this.axis,this.axis==="X"&&(Le.setFromEuler(Co.set(0,0,0)),r.quaternion.copy(t).multiply(Le),Math.abs(ke.copy(cr).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Y"&&(Le.setFromEuler(Co.set(0,0,Math.PI/2)),r.quaternion.copy(t).multiply(Le),Math.abs(ke.copy(bs).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Z"&&(Le.setFromEuler(Co.set(0,Math.PI/2,0)),r.quaternion.copy(t).multiply(Le),Math.abs(ke.copy(hr).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="XYZE"&&(Le.setFromEuler(Co.set(0,Math.PI/2,0)),ke.copy(this.rotationAxis),r.quaternion.setFromRotationMatrix(fd.lookAt(pd,ke,bs)),r.quaternion.multiply(Le),r.visible=this.dragging),this.axis==="E"&&(r.visible=!1)):r.name==="START"?(r.position.copy(this.worldPositionStart),r.visible=this.dragging):r.name==="END"?(r.position.copy(this.worldPosition),r.visible=this.dragging):r.name==="DELTA"?(r.position.copy(this.worldPositionStart),r.quaternion.copy(this.worldQuaternionStart),ut.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),ut.applyQuaternion(this.worldQuaternionStart.clone().invert()),r.scale.copy(ut),r.visible=this.dragging):(r.quaternion.copy(t),this.dragging?r.position.copy(this.worldPositionStart):r.position.copy(this.worldPosition),this.axis&&(r.visible=this.axis.search(r.name)!==-1));continue}r.quaternion.copy(t),this.mode==="translate"||this.mode==="scale"?(r.name==="X"&&Math.abs(ke.copy(cr).applyQuaternion(t).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Y"&&Math.abs(ke.copy(bs).applyQuaternion(t).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Z"&&Math.abs(ke.copy(hr).applyQuaternion(t).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XY"&&Math.abs(ke.copy(hr).applyQuaternion(t).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="YZ"&&Math.abs(ke.copy(cr).applyQuaternion(t).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XZ"&&Math.abs(ke.copy(bs).applyQuaternion(t).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1)):this.mode==="rotate"&&(So.copy(t),ke.copy(this.eye).applyQuaternion(Le.copy(t).invert()),r.name.search("E")!==-1&&r.quaternion.setFromRotationMatrix(fd.lookAt(this.eye,pd,bs)),r.name==="X"&&(Le.setFromAxisAngle(cr,Math.atan2(-ke.y,ke.z)),Le.multiplyQuaternions(So,Le),r.quaternion.copy(Le)),r.name==="Y"&&(Le.setFromAxisAngle(bs,Math.atan2(ke.x,ke.z)),Le.multiplyQuaternions(So,Le),r.quaternion.copy(Le)),r.name==="Z"&&(Le.setFromAxisAngle(hr,Math.atan2(ke.y,ke.x)),Le.multiplyQuaternions(So,Le),r.quaternion.copy(Le))),r.visible=r.visible&&(r.name.indexOf("X")===-1||this.showX),r.visible=r.visible&&(r.name.indexOf("Y")===-1||this.showY),r.visible=r.visible&&(r.name.indexOf("Z")===-1||this.showZ),r.visible=r.visible&&(r.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),r.material._color=r.material._color||r.material.color.clone(),r.material._opacity=r.material._opacity||r.material.opacity,r.material.color.copy(r.material._color),r.material.opacity=r.material._opacity,this.enabled&&this.axis&&(r.name===this.axis||this.axis.split("").some(function(a){return r.name===a}))&&(r.material.color.setHex(16776960),r.material.opacity=1)}super.updateMatrixWorld(e)}},b0=class extends oe{constructor(){super(new zc(1e5,1e5,2,2),new Ds({visible:!1,wireframe:!0,side:Si,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Eo.copy(cr).applyQuaternion(t==="local"?this.worldQuaternion:Vo),ir.copy(bs).applyQuaternion(t==="local"?this.worldQuaternion:Vo),sr.copy(hr).applyQuaternion(t==="local"?this.worldQuaternion:Vo),ke.copy(ir),this.mode){case"translate":case"scale":switch(this.axis){case"X":ke.copy(this.eye).cross(Eo),ai.copy(Eo).cross(ke);break;case"Y":ke.copy(this.eye).cross(ir),ai.copy(ir).cross(ke);break;case"Z":ke.copy(this.eye).cross(sr),ai.copy(sr).cross(ke);break;case"XY":ai.copy(sr);break;case"YZ":ai.copy(Eo);break;case"XZ":ke.copy(sr),ai.copy(ir);break;case"XYZ":case"E":ai.set(0,0,0);break}break;case"rotate":default:ai.set(0,0,0)}ai.length()===0?this.quaternion.copy(this.cameraQuaternion):(md.lookAt(ut.set(0,0,0),ai,ke),this.quaternion.setFromRotationMatrix(md)),super.updateMatrixWorld(e)}},y0=class Up{constructor(e,t,i,n,r,o=5,a=!0){if(C(this,"onDraggingStarted",new K),C(this,"onDraggingEnded",new K),C(this,"onDisposed",new K),C(this,"normal"),C(this,"origin"),C(this,"three",new Dt),C(this,"components"),C(this,"world"),C(this,"type","default"),C(this,"_title","Clipping Plane"),C(this,"_helper"),C(this,"_visible",!0),C(this,"_enabled",!0),C(this,"_controlsActive",!1),C(this,"_arrowBoundBox",new oe),C(this,"_planeMesh"),C(this,"_controls"),C(this,"_hiddenMaterial",new Ds({visible:!1})),C(this,"_visibilityBeforeDisabled",!0),C(this,"notifyManager",()=>{const l=this.components.get(Fi),c=l.list.getKey(this);c&&l.list.set(c,this)}),C(this,"update",()=>{this._enabled&&this.three.setFromNormalAndCoplanarPoint(this.normal,this._helper.position)}),C(this,"changeDrag",l=>{this._visible=!l.value,this.preventCameraMovement(),this.notifyDraggingChanged(l)}),this.components=e,this.world=t,!t.renderer)throw new Error("The given world must have a renderer!");this.normal=n,this.origin=i,t.renderer.setPlane(!0,this.three),this._planeMesh=Up.newPlaneMesh(o,r),this._helper=this.newHelper(),this._controls=this.newTransformControls(),this.three.setFromNormalAndCoplanarPoint(n,i),a&&this.toggleControls(!0)}set title(e){this._title=e,this.notifyManager()}get title(){return this._title}get enabled(){return this._enabled}set enabled(e){if(!this.world.isDisposing){if(!this.world.renderer)throw new Error("No renderer found for clipping plane!");this._enabled=e,e?this.visible=this._visibilityBeforeDisabled:(this._visibilityBeforeDisabled=this.visible,this.visible=!1),this.world.renderer.setPlane(e,this.three),this.notifyManager()}}get visible(){return this._visible}set visible(e){this._visible=e,this._controls.getHelper().visible=e,this._helper.visible=e,this.toggleControls(e),this.notifyManager()}get meshes(){return[this._planeMesh,this._arrowBoundBox]}get planeMaterial(){return this._planeMesh.material}set planeMaterial(e){this._planeMesh.material=e}get size(){return this._planeMesh.scale.x}set size(e){this._planeMesh.scale.set(e,e,e)}get helper(){return this._helper}get controls(){return this._controls}setFromNormalAndCoplanarPoint(e,t){this.reset(),this.normal.equals(e)||(this.normal.copy(e),this._helper.lookAt(e)),this.origin.copy(t),this._helper.position.copy(t),this._helper.updateMatrix(),this.update()}dispose(){this._enabled=!1,this.onDraggingStarted.reset(),this.onDraggingEnded.reset(),this._helper.removeFromParent(),this.world.renderer&&this.world.renderer.setPlane(!1,this.three),this._arrowBoundBox.removeFromParent(),this._arrowBoundBox.geometry.dispose(),this._planeMesh.geometry.dispose(),this._controls.getHelper().removeFromParent(),this._controls.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}reset(){const e=new L(1,0,0),t=new L;this.normal.equals(e)||(this.normal.copy(e),this._helper.lookAt(e)),this.origin.copy(t),this._helper.position.copy(t),this._helper.updateMatrix()}toggleControls(e){if(e){if(this._controlsActive)return;this._controls.addEventListener("change",this.update),this._controls.addEventListener("dragging-changed",this.changeDrag)}else this._controls.removeEventListener("change",this.update),this._controls.removeEventListener("dragging-changed",this.changeDrag);this._controlsActive=e}newTransformControls(){if(!this.world.renderer)throw new Error("No renderer found for clipping plane!");const e=this.world.camera.three,t=this.world.renderer.three.domElement,i=new h0(e,t);return this.initializeControls(i),this.world.scene.three.add(i.getHelper()),i}initializeControls(e){e.attach(this._helper),e.showX=!1,e.showY=!1,e.setSpace("local"),this.createArrowBoundingBox(),e.getHelper().children[0].children[0].add(this._arrowBoundBox)}createArrowBoundingBox(){this._arrowBoundBox.geometry=new ft(.18,.18,1.2),this._arrowBoundBox.material=this._hiddenMaterial,this._arrowBoundBox.rotateX(Math.PI/2),this._arrowBoundBox.updateMatrix(),this._arrowBoundBox.geometry.applyMatrix4(this._arrowBoundBox.matrix)}notifyDraggingChanged(e){e.value?this.onDraggingStarted.trigger():this.onDraggingEnded.trigger()}preventCameraMovement(){this.world.camera.enabled=this._visible}newHelper(){const e=new mn;return e.lookAt(this.normal),e.position.copy(this.origin),this._planeMesh.position.z+=.01,e.add(this._planeMesh),this.world.scene.three.add(e),e}static newPlaneMesh(e,t){const i=new zc(1),n=new oe(i,t);return n.scale.set(e,e,e),n}},_0=class extends Oa{constructor(){super(...arguments),C(this,"_config",{enabled:{value:!0,type:"Boolean"},visible:{value:!0,type:"Boolean"},color:{value:new me,type:"Color"},opacity:{type:"Number",interpolable:!0,value:1,min:0,max:1},size:{type:"Number",interpolable:!0,value:2,min:0,max:100}})}get enabled(){return this._config.enabled.value}set enabled(e){this._config.enabled.value=e,this._component.enabled=e}get visible(){return this._config.visible.value}set visible(e){this._config.visible.value=e,this._component.visible=e}get color(){return this._config.color.value}set color(e){this._config.color.value=e,this._component.material.color.copy(e)}get opacity(){return this._config.opacity.value}set opacity(e){this._config.opacity.value=e,this._component.material.opacity=e}get size(){return this._config.size.value}set size(e){this._config.size.value=e,this._component.size=e}};const Fp=class Wo extends Oe{constructor(e){super(e),C(this,"onSetup",new K),C(this,"onBeforeDrag",new K),C(this,"onAfterDrag",new K),C(this,"onBeforeCreate",new K),C(this,"onBeforeCancel",new K),C(this,"onAfterCancel",new K),C(this,"onBeforeDelete",new K),C(this,"onAfterCreate",new K),C(this,"onAfterDelete",new K),C(this,"onDisposed",new K),C(this,"isSetup",!1),C(this,"orthogonalY",!1),C(this,"toleranceOrthogonalY",.7),C(this,"Type",y0),C(this,"list",new Ue),C(this,"config",new _0(this,this.components,"Clipper",Wo.uuid)),C(this,"_defaultConfig",{color:new me(12255487),opacity:.2,size:2}),C(this,"_material",new Ds({color:12255487,side:Si,transparent:!0,opacity:.2})),C(this,"_size",5),C(this,"_enabled",!1),C(this,"_visible",!0),C(this,"_onStartDragging",()=>{this.onBeforeDrag.trigger()}),C(this,"_onEndDragging",()=>{this.onAfterDrag.trigger()}),this.components.add(Wo.uuid,this),this.setEvents()}get enabled(){return this._enabled}set enabled(e){this._enabled=e}get visible(){return this._visible}set visible(e){this._visible=e;for(const[t,i]of this.list)i.visible=e}get material(){return this._material}set material(e){this._material=e;for(const[t,i]of this.list)i.planeMaterial=e}get size(){return this._size}set size(e){this._size=e;for(const[t,i]of this.list)i.size=e}setEvents(){this.list.onBeforeDelete.add(({value:e})=>{if(!e.world.renderer)throw new Error("Renderer not found for this plane's world!");e.world.renderer.setPlane(!1,e.three),e.dispose(),this.updateMaterialsAndPlanes(),this.onAfterDelete.trigger(e)})}dispose(){this._enabled=!1,this.components.get(Fc).list.delete(this.config.uuid),this.list.clear(),this._material.dispose(),this.onBeforeCreate.reset(),this.onBeforeCancel.reset(),this.onBeforeDelete.reset(),this.onBeforeDrag.reset(),this.onAfterCreate.reset(),this.onAfterCancel.reset(),this.onAfterDelete.reset(),this.onAfterDrag.reset(),this.onDisposed.trigger(Wo.uuid),this.onDisposed.reset()}async create(e){const t=await this.components.get(yt).get(e).castRay();return t?this.createPlaneFromIntersection(e,t):null}createFromNormalAndCoplanarPoint(e,t,i){const n=this.newPlane(e,i,t);return this.updateMaterialsAndPlanes(),n}async delete(e,t){if(!t){const i=await this.pickPlane(e);if(!i)return;t=this.list.getKey(i)}t&&this.list.delete(t)}deleteAll(e){for(const[t,i]of this.list)(!e||e.has(i.type))&&this.list.delete(t)}setup(e){const t={...this._defaultConfig,...e};this.config.color=t.color,this.config.opacity=t.opacity,this.config.size=t.size,this.isSetup=!0,this.onSetup.trigger()}async pickPlane(e){const t=this.components.get(yt).get(e),i=this.getAllPlaneMeshes(),n=await t.castRay({items:i});if(n){const r=n.object;return[...this.list.values()].find(o=>o.meshes.includes(r))}}getAllPlaneMeshes(){const e=[];for(const[t,i]of this.list)e.push(...i.meshes);return e}createPlaneFromIntersection(e,t){var i;if(!e.renderer)throw new Error("The given world must have a renderer!");const n=t.point.distanceTo(new L(0,0,0)),r=t.normal||((i=t.face)==null?void 0:i.normal);if(!n||!r)return null;const o=this.getWorldNormal(t,r),a=this.newPlane(e,t.point,o.negate()),l=this.list.get(a);return l.visible=this._visible,l.size=this._size,e.renderer.setPlane(!0,l.three),this.updateMaterialsAndPlanes(),l}getWorldNormal(e,t){const i=e.object;let n=e.object.matrixWorld.clone();if(i instanceof wg&&e.instanceId!==void 0){const a=new Ee;i.getMatrixAt(e.instanceId,a),n=a.multiply(n)}const r=new xg().getNormalMatrix(n),o=t.clone().applyMatrix3(r).normalize();return this.normalizePlaneDirectionY(o),o}normalizePlaneDirectionY(e){this.orthogonalY&&(e.y>this.toleranceOrthogonalY&&(e.x=0,e.y=1,e.z=0),e.y<-this.toleranceOrthogonalY&&(e.x=0,e.y=-1,e.z=0))}newPlane(e,t,i){const n=new this.Type(this.components,e,t,i,this._material);n.onDraggingStarted.add(this._onStartDragging),n.onDraggingEnded.add(this._onEndDragging);const r=ot.create();return this.list.set(r,n),this.onAfterCreate.trigger(n),r}updateMaterialsAndPlanes(){const e=this.components.get(Ap);for(const[t,i]of e.list){if(!i.renderer)continue;i.renderer.updateClippingPlanes();const{clippingPlanes:n}=i.renderer;for(const r of i.meshes)if(r.material)if(Array.isArray(r.material))for(const o of r.material)o.clippingPlanes=n;else r.material.clippingPlanes=n}}};C(Fp,"uuid","66290bc5-18c4-4cd1-9379-2e17a0617611");let Fi=Fp,jp=class{constructor(e,t){C(this,"title"),C(this,"guid",ot.create()),C(this,"clippingPlanes",new tt),C(this,"camera",{aspect_ratio:1,field_of_view:60,camera_direction:{x:0,y:0,z:0},camera_view_point:{x:0,y:0,z:0},camera_up_vector:{x:0,y:1,z:0}}),C(this,"exceptionComponents",new tt),C(this,"selectionComponents",new tt),C(this,"componentColors",new Ue),C(this,"spacesVisible",!1),C(this,"spaceBoundariesVisible",!1),C(this,"openingsVisible",!1),C(this,"defaultVisibility",!0),C(this,"snapshot",this.guid),C(this,"_components"),C(this,"_world",null),C(this,"notifyUpdate",()=>{this._components.get(yi).list.set(this.guid,this)}),this._components=e,t&&(this.guid=t.guid??this.guid,this.set(t)),this.setEvents()}async getSelectionMap(){return await this._components.get(ue).guidsToModelIdMap([...this.selectionComponents])}async getExceptionMap(){return await this._components.get(ue).guidsToModelIdMap([...this.exceptionComponents])}get projection(){return"field_of_view"in this.camera?"Perspective":"Orthographic"}get position(){const e=this._components.get(ue),{camera_view_point:t}=this.camera,{x:i,y:n,z:r}=t,o=new L(i,n,r);return e.applyBaseCoordinateSystem(o,new Ee),o}set position(e){const t=e.clone(),i=this._components.get(ue);e.clone().applyMatrix4(i.baseCoordinationMatrix.clone().invert()),this.camera.camera_view_point={x:t.x,y:t.y,z:t.z}}get direction(){const{camera_direction:e}=this.camera,{x:t,y:i,z:n}=e;return new L(t,i,n)}set world(e){this._world=e}get world(){return this._world}get _managerVersion(){return this._components.get(et).config.version}get topics(){return[...this._components.get(et).list.values()].filter(e=>e.viewpoints.has(this.guid))}setEvents(){this.selectionComponents.onUpdated.add(this.notifyUpdate),this.exceptionComponents.onUpdated.add(this.notifyUpdate),this.clippingPlanes.onUpdated.add(this.notifyUpdate),this.componentColors.onItemSet.add(this.notifyUpdate),this.componentColors.onItemDeleted.add(this.notifyUpdate),this.componentColors.onItemUpdated.add(this.notifyUpdate),this.componentColors.onCleared.add(this.notifyUpdate)}set(e){this.title=e.title;const{components:t,perspective_camera:i,orthogonal_camera:n,clipping_planes:r}=e;if(t){const{selection:o,visibility:a,coloring:l}=t;if(o){this.selectionComponents.clear();for(const{ifc_guid:c}of o)c&&this.selectionComponents.add(c)}if(a){const{default_visibility:c,exceptions:h,view_setup_hints:d}=a;if(c!==void 0&&(this.defaultVisibility=c),h){this.exceptionComponents.clear();for(const{ifc_guid:u}of h)u&&this.exceptionComponents.add(u)}if(d){const{spaces_visible:u,space_boundaries_visible:p,openings_visible:g}=d;u!==void 0&&(this.spacesVisible=u),p!==void 0&&(this.spaceBoundariesVisible=p),g!==void 0&&(this.openingsVisible=g)}}if(l){this.componentColors.clear();for(const c of l){const{color:h,components:d}=c,u=d.map(p=>p.ifc_guid).filter(p=>p!==null);this.componentColors.set(h,u)}}}if((i||n)&&(this.camera=i??n),r&&this.world){const o=this._components.get(Fi);for(const a of r){const{location:l,direction:c}=a,h=new L(l.x,l.z,-l.y),d=new L(c.x,c.z,-c.y),u=o.createFromNormalAndCoplanarPoint(this.world,d,h);this.clippingPlanes.add(u),o.list.get(u).enabled=!1,o.list.get(u).visible=!1}}this.notifyUpdate()}async go(e){if(!this.world)return;const{camera:t}=this.world;if(!(t instanceof Np))throw new Error("Viewpoint: the world's camera component must be of type OrthoPerspectiveCamera to switch between perspective and orthographic projections.");const{transition:i,applyClippings:n,applyVisibility:r,clippingsVisibility:o}={transition:!0,applyClippings:!0,applyVisibility:!0,clippingsVisibility:!0,...e};t.projection.set(this.projection);const a=new L(this.camera.camera_view_point.x,this.camera.camera_view_point.y,this.camera.camera_view_point.z),l=new L(this.camera.camera_direction.x,this.camera.camera_direction.y,this.camera.camera_direction.z);if(a.equals(new L)&&l.equals(new L))return;const c=this.position,h=this.direction,d=80,u={x:c.x+h.x*d,y:c.y+h.y*d,z:c.z+h.z*d},p=[];n&&this.setClippingState(!0),r&&p.push(this.applyVisibility()),this.setClippingVisibility(o),p.push(t.controls.setLookAt(c.x,c.y,c.z,u.x,u.y,u.z,i)),await Promise.all(p)}async updateCamera(e=!0){return new Promise(t=>{if(!this.world){t(!1);return}const{camera:i,renderer:n}=this.world;if(!n)throw new Error("Viewpoint: the world needs to have a renderer!");if(!i.hasCameraControls())throw new Error("Viewpoint: world's camera need camera controls!");const r=new L;i.controls.getPosition(r);const o=i.three,a=new L(0,0,-1).applyEuler(o.rotation),{width:l,height:c}=n.getSize();let h=l/c;Number.isNaN(h)&&(h=1);const d=this._components.get(ue);r.applyMatrix4(d.baseCoordinationMatrix.clone().invert());const u={aspect_ratio:h,camera_view_point:{x:r.x,y:r.y,z:r.z},camera_direction:{x:a.x,y:a.y,z:a.z},camera_up_vector:{x:0,y:1,z:0}};if(o instanceof Vu?this.camera={...u,field_of_view:o.fov}:o instanceof Ca&&(this.camera={...u,view_to_world_scale:o.top-o.bottom}),e){const p=this._components.get(yi),g=n.three.domElement;n.three.render(this.world.scene.three,i.three),g.toBlob(async m=>{if(m){const v=await m.arrayBuffer(),f=new Uint8Array(v);p.snapshots.set(this.guid,f)}this.notifyUpdate(),t(!0)})}else this.notifyUpdate(),t(!0)})}takeSnapshot(){return new Promise(e=>{if(!this.world){e(!1);return}const{camera:t,renderer:i}=this.world;if(!i)throw new Error("Viewpoint: the world needs to have a renderer!");const n=this._components.get(yi),r=i.three.domElement;i.three.render(this.world.scene.three,t.three),r.toBlob(async o=>{if(o){const a=await o.arrayBuffer(),l=new Uint8Array(a);n.snapshots.set(this.guid,l)}this.notifyUpdate(),e(!0)})})}updateClippingPlanes(){this.clippingPlanes.clear();const e=this._components.get(Fi);for(const[t,i]of e.list)i.enabled&&this.clippingPlanes.add(t)}async applyVisibility(){const e=this._components.get(Nb);e.set(this.defaultVisibility);const t=await this.getExceptionMap();e.set(!this.defaultVisibility,t);const i=await this.getSelectionMap();e.set(!0,i)}async setColorizationState(e){const t=this._components.get(ue),i=[];if(e)for(const[n,r]of this.componentColors){const o=`#${n}`,a=await t.guidsToModelIdMap(r);for(const[l,c]of Object.entries(a)){const h=t.list.get(l);h&&i.push(h.highlight([...c],{customId:o,color:new me(o),renderedFaces:Hu.ONE,opacity:1,transparent:!1}))}}else for(const[n,r]of this.componentColors){const o=await t.guidsToModelIdMap(r);for(const[a,l]of Object.entries(o)){const c=t.list.get(a);c&&i.push(c.resetHighlight([...l]))}}i.push(t.core.update(!0)),await Promise.all(i)}setClippingState(e){const t=this._components.get(Fi);for(const[i,n]of t.list)n.enabled=e&&this.clippingPlanes.has(i)}setClippingVisibility(e){const t=this._components.get(Fi);for(const i of this.clippingPlanes){const n=t.list.get(i);n&&(n.visible=e)}}async createComponentTags(e){var t;const i=this._components.get(ue),n=this._components.get(et);let r="";if(n.config.includeSelectionTag){const o=e==="selection"?await this.getSelectionMap():await this.getExceptionMap();for(const a in o){const l=i.list.get(a);if(!l)continue;const c=o[a];for(const h of c){const d=l.getItem(h),u=await d.getGuid();if(!u)continue;const p=(t=await d.getAttributes())==null?void 0:t.getValue("Tag");let g=null;p&&(g=`AuthoringToolId="${p}"`),r+=`
<Component IfcGuid="${u}" ${g??""} />`}}}else r=[...this.selectionComponents].map(o=>`<Component IfcGuid="${o}" />`).join(`
`);return r}createColorTags(){let e="";for(const[t,i]of this.componentColors.entries()){const n=i.map(r=>`
<Component IfcGuid="${r}" />`).join(`
`);e+=`<Color Color="${t}">
${n}
</Color>`}return e.length!==0?`<Coloring>
${e}
</Coloring>`:"<Coloring />"}toJSON(){const e=this._components.get(Fi),t={guid:this.guid,components:{selection:[...this.selectionComponents].map(r=>({ifc_guid:r,authoring_tool_id:null})),coloring:[...this.componentColors].map(([r,o])=>({color:r,components:o.map(a=>({ifc_guid:a,authoring_tool_id:null}))})),visibility:{default_visibility:this.defaultVisibility,exceptions:[...this.exceptionComponents].map(r=>({ifc_guid:r,authoring_tool_id:null})),view_setup_hints:{spaces_visible:this.spacesVisible,space_boundaries_visible:this.spaceBoundariesVisible,openings_visible:this.openingsVisible}}},clipping_planes:[...this.clippingPlanes].map(r=>{const o=e.list.get(r);if(!o)return null;const a=o._controls.worldPosition??o.origin,{normal:l}=o;return{location:{x:a.x,y:-a.z,z:a.y},direction:{x:l.x,y:-l.z,z:l.y}}}).filter(r=>r!==null)};"field_of_view"in this.camera?t.perspective_camera=this.camera:t.orthogonal_camera=this.camera;const i=this._components.get(yi),n=i.snapshots.get(this.snapshot);if(n){const r=n.toString(),o=btoa(r),a=i.getSnapshotExtension(this.snapshot);t.snapshot={snapshot_type:a,snapshot_data:o}}return t}async serialize(e=this._managerVersion){const t=this._components.get(ue),i=this.position;i.applyMatrix4(t.baseCoordinationMatrix.clone().invert());const n=this.direction;n.normalize();const r=new Ee().makeRotationX(Math.PI/2),o=n.clone().applyMatrix4(r);o.normalize();const a=`<CameraViewPoint>
      <X>${i.x}</X>
      <Y>${-i.z}</Y>
      <Z>${i.y}</Z>
    </CameraViewPoint>`,l=`<CameraDirection>
      <X>${n.x}</X>
      <Y>${-n.z}</Y>
      <Z>${n.y}</Z>
    </CameraDirection>`,c=`<CameraUpVector>
      <X>${o.x}</X>
      <Y>${-o.z}</Y>
      <Z>${o.y}</Z>
    </CameraUpVector>`,h=`<AspectRatio>${this.camera.aspect_ratio}</AspectRatio>`;let d="";"view_to_world_scale"in this.camera?d=`<OrthogonalCamera>
        ${a}
        ${l}
        ${c}
        ${h}
        <ViewToWorldScale>${this.camera.view_to_world_scale}</ViewToWorldScale>
      </OrthogonalCamera>`:"field_of_view"in this.camera&&(d=`<PerspectiveCamera>
        ${a}
        ${l}
        ${c}
        ${h}
        <FieldOfView>${this.camera.field_of_view}</FieldOfView>
      </PerspectiveCamera>`);const u=`<ViewSetupHints SpacesVisible="${this.spacesVisible??!1}" SpaceBoundariesVisible="${this.spaceBoundariesVisible??!1}" OpeningsVisible="${this.openingsVisible??!1}" />`,p=(await this.createComponentTags("selection")).trim(),g=(await this.createComponentTags("exception")).trim(),m=this.createColorTags();return`<?xml version="1.0" encoding="UTF-8"?>
    <VisualizationInfo Guid="${this.guid}">
      <Components>
        ${e==="2.1"?u:""}
        ${p.length!==0?`<Selection>${p}</Selection>`:""}
        <Visibility DefaultVisibility="${this.defaultVisibility}">
          ${e==="3"?u:""}
          ${g.length!==0?`<Exceptions>${g}</Exceptions>`:""}
        </Visibility>
        ${m}
      </Components>
      ${d}
    </VisualizationInfo>`}},w0=class extends Oa{constructor(){super(...arguments),C(this,"_config",{overwriteColors:{value:!1,type:"Boolean"}})}get overwriteColors(){return this._config.overwriteColors.value}set overwriteColors(e){this._config.overwriteColors.value=e}};const Hp=class ec extends Oe{constructor(e){super(e),C(this,"enabled",!0),C(this,"world",null),C(this,"list",new Ue),C(this,"snapshots",new Ue),C(this,"isSetup",!1),C(this,"onSetup",new K),C(this,"config",new w0(this,this.components,"Viewpoints",ec.uuid)),C(this,"onDisposed",new K),e.add(ec.uuid,this)}create(e){const t=new jp(this.components,e);return t.world=this.world,e||this.list.set(t.guid,t),t}getSnapshotExtension(e){let t="jpeg";const i=this.snapshots.get(e);if(!i)return t;const n=i.subarray(0,4);let r="";for(let o=0;o<n.length;o++)r+=n[o].toString(16);return r.startsWith("89504e47")&&(t="png"),r.startsWith("ffd8ffe")&&(t="jpeg"),t}setup(){}dispose(){this.list.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}};C(Hp,"uuid","ee867824-a796-408d-8aa0-4e5962a83c66");let yi=Hp,gd=class{constructor(e,t){C(this,"_components"),C(this,"_cameraOffset",10),C(this,"_planeHelper"),C(this,"_farPlaneHelper"),C(this,"_cameraHelper"),C(this,"onStateChanged",new K),C(this,"onUpdated",new K),C(this,"onDisposed",new K),C(this,"camera"),C(this,"plane",new Dt),C(this,"farPlane",new Dt),C(this,"id",ot.create()),C(this,"_open",!1),C(this,"_range",x0.defaultRange),C(this,"_world",null),C(this,"_helpersVisible",!1),C(this,"_planesEnabled",!1),this._components=e,this.camera=new Np(this._components);const{threeOrtho:i}=this.camera;if(t!=null&&t.id&&(this.id=t.id),t!=null&&t.normal&&t!=null&&t.point){const{normal:n,point:r}=t;this.plane.setFromNormalAndCoplanarPoint(n,r)}this._cameraHelper=new Ag(i),this._planeHelper=new Sh(this.plane,50),this._farPlaneHelper=new Sh(this.farPlane,50),this.farPlaneHelperColor=new me("blue"),this.update()}get _planeNormalOpposite(){return this.plane.normal.clone().negate()}get _planePosition(){return this.plane.normal.clone().multiplyScalar(-this.plane.constant)}get _cameraPosition(){return this._planePosition.addScaledVector(this._planeNormalOpposite,this._cameraOffset)}set open(e){this._open=e,this.onStateChanged.trigger(["open"])}get open(){return this._open}set planeHelperColor(e){!Array.isArray(this._planeHelper.material)&&"color"in this._planeHelper.material&&this._planeHelper.material.color instanceof me&&(this._planeHelper.material.color=e)}set farPlaneHelperColor(e){!Array.isArray(this._farPlaneHelper.material)&&"color"in this._farPlaneHelper.material&&this._farPlaneHelper.material.color instanceof me&&(this._farPlaneHelper.material.color=e)}set range(e){this._range=e,this.update()}get range(){return this._range}set distance(e){this.plane.constant=e,this.update()}get distance(){return this.plane.constant}set world(e){this._world=e,this.camera.currentWorld=e,e&&(this.camera.projection.set("Orthographic"),this.camera.set("Plan"),this.camera.controls.dollySpeed=6,this.camera.controls.restThreshold=.005,this.update())}get world(){return this._world}set helpersVisible(e){if(!e){this._helpersVisible=e,this._planeHelper.removeFromParent(),this._farPlaneHelper.removeFromParent(),this._cameraHelper.removeFromParent();return}this.world&&(this._helpersVisible=e,this.world.scene.three.add(this._planeHelper,this._farPlaneHelper))}get helpersVisible(){return this._helpersVisible}set planesEnabled(e){const{world:t}=this;if(!t)return;const{renderer:i}=t;i&&(i.setPlane(e,this.plane),i.setPlane(e,this.farPlane),this._planesEnabled=e)}get planesEnabled(){return this._planesEnabled}dispose(){this.helpersVisible=!1;const e=this._components.get(ui);e.destroy(this._planeHelper),e.destroy(this._farPlaneHelper),e.destroy(this._cameraHelper),this.camera.dispose(),this.onDisposed.trigger()}update(){if(this.world){const e=this._cameraPosition,t=this._planePosition;this.camera.controls.setLookAt(e.x,e.y,e.z,t.x,t.y,t.z,!1)}this.farPlane.normal.copy(this._planeNormalOpposite),this.farPlane.constant=this.range-this.plane.constant,this.onUpdated.trigger()}flip(){this.plane.normal.negate(),this.update()}};const Wc=class Vp extends Oe{constructor(e){super(e),C(this,"list",new Ue),C(this,"enabled",!0),C(this,"world",null),C(this,"_fragmentsUpdateEvent",()=>{this.components.get(ue).core.update(!0)}),e.add(Vp.uuid,this),this.setupEvents()}get hasOpenViews(){return[...this.list.values()].some(e=>e.open)}setupEvents(){this.list.onBeforeDelete.add(({key:e,value:t})=>{t.open&&this.close(e),t.dispose()})}create(e,t,i){const n=new gd(this.components,{id:i==null?void 0:i.id,normal:e,point:t});return n.world=(i==null?void 0:i.world)??this.world,this.list.set(n.id,n),n}createFromPlane(e,t){const i=new gd(this.components,{id:t==null?void 0:t.id});return i.plane.copy(e),i.update(),i.world=(t==null?void 0:t.world)??this.world,this.list.set(i.id,i),i}async createFromIfcStoreys(e){const t=[],i=this.components.get(ue),n=(e==null?void 0:e.offset)===void 0?.25:e.offset;for(const[r,o]of i.list){if(e&&e.modelIds&&!e.modelIds.some(d=>d.test(r)))continue;const a=Object.values(await o.getItemsOfCategories([/BUILDINGSTOREY/])).flat();if(a.length===0)continue;const l=await o.getItemsData(a),[,c]=await o.getCoordinates(),h=new L(0,-1,0);for(const d of l){if(!("value"in d.Name&&"value"in d.Elevation))continue;const{value:u}=d.Name;if(e!=null&&e.storeyNames&&!e.storeyNames.some(v=>v.test(u)))continue;const p=d.Elevation.value+c+n,g=new Dt(h,p),m=this.createFromPlane(g,{id:u,world:e==null?void 0:e.world});t.push(m)}}return t}createElevations(e){const t=[],i=this.components.get(ue),n=(e==null?void 0:e.combine)===void 0?!1:e.combine,r=(e==null?void 0:e.namingCallback)??(a=>({front:`${n?"Front":`${a}: Front`}`,back:`${n?"Back":`${a}: Back`}`,left:`${n?"Left":`${a}: Left`}`,right:`${n?"Right":`${a}: Right`}`}));let o=[];for(const[a,l]of i.list)e&&e.modelIds&&!e.modelIds.some(c=>c.test(a))||o.push({id:a,box:l.box});if(n){const a=this.components.get(ea);a.list.clear(),a.list.add(...o.map(l=>l.box)),o=[{id:"combined",box:a.get()}]}for(const{id:a,box:l}of o){const{min:c,max:h}=l,d=Math.abs(h.x-c.x),u=Math.abs(h.z-c.z),p=new L;l.getCenter(p);const g=new Dt(new L(0,0,-1),h.z),m=new Dt(new L(0,0,1),-c.z),v=new Dt(new L(-1,0,0),h.x),f=new Dt(new L(1,0,0),-c.x),{front:b,back:y,left:w,right:S}=r(a),T=this.createFromPlane(g,{id:b,world:e==null?void 0:e.world});T.range=u;const P=this.createFromPlane(m,{id:y,world:e==null?void 0:e.world});P.range=u;const D=this.createFromPlane(v,{id:w,world:e==null?void 0:e.world});D.range=d;const M=this.createFromPlane(f,{id:S,world:e==null?void 0:e.world});M.range=d,t.push(T,P,D,M)}return t}open(e){const t=this.list.get(e);if(!t)throw new Error(`Views: the view with id ${e} doesn't exist.`);if(t.open)return;const{world:i}=t;if(!i)throw new Error(`Views: no world found for view with id ${e}.`);const{renderer:n}=i;if(!n)throw new Error(`Views: no renderer found for world with id ${i.uuid}.`);for(const[,r]of this.list)r.world===i&&this.close(r.id);n.setPlane(!0,t.plane),n.setPlane(!0,t.farPlane),t.camera.controls.addEventListener("rest",this._fragmentsUpdateEvent),i.camera=t.camera,t.open=!0}close(e){let t;if(e?t=this.list.get(e):t=[...this.list.values()].find(r=>r.open),e&&!t)throw new Error(`Views: the view with id ${e} doesn't exist.`);if(!t||!t.open)return;const{world:i}=t;if(!i)throw new Error(`Views: no world found for view with id ${e}.`);const{renderer:n}=i;if(!n)throw new Error(`Views: no renderer found for world with id ${i.uuid}.`);n.setPlane(!1,t.plane),n.setPlane(!1,t.farPlane),t.camera.controls.removeEventListener("rest",this._fragmentsUpdateEvent),i.useDefaultCamera(),t.open=!1}};C(Wc,"uuid","fb22f1f5-6598-4664-a11d-de8963ae420f");C(Wc,"defaultRange",15);let x0=Wc,On=class{constructor(e){C(this,"cardinality","required"),C(this,"instructions"),C(this,"evalRequirement",(t,i,n,r)=>{const o={parameter:n,currentValue:t,requiredValue:i,pass:!1};r&&this.addCheckResult(o,r);let a=!1;if(i.type==="simple"&&(a=t===i.parameter),i.type==="enumeration"&&(a=i.parameter.includes(t)),i.type==="pattern"&&(a=new RegExp(i.parameter).test(String(t))),i.type==="length"){const{min:l,length:c,max:h}=i.parameter;c!==void 0&&(a=String(t).length===c),l!==void 0&&(a=String(t).length>=l),h!==void 0&&(a=String(t).length<=h)}if(i.type==="bounds"&&typeof t=="number"){const{min:l,minInclusive:c,max:h,maxInclusive:d}=i.parameter;let u=!0,p=!0;l!==void 0&&(u=c?t>=l:t>l),h!==void 0&&(p=d?t<=h:t<h),a=u&&p}return this.cardinality==="prohibited"&&(a=!a),this.cardinality==="optional"&&(a=!0),o.pass=a,o.pass}),this._components=e}addCheckResult(e,t){const i=t.findIndex(({parameter:n})=>n===e.parameter);i!==-1?t[i]=e:t.push(e)}getItemChecks(e,t,i,n){if(!("value"in i._localId&&typeof i._localId.value=="number"))return null;let r=e.get(t);r||(r=new Ue,e.set(t,r));let o=r.get(i._localId.value);if(o&&n&&!o.pass)return null;if(!o){const c=[];o={guid:Array.isArray(i._guid)?void 0:i._guid.value,pass:!1,checks:c},Object.defineProperty(o,"pass",{get:()=>c.every(({pass:h})=>h)}),r.set(i._localId.value,o)}const a=[],l={facetType:this.facetType,cardinality:this.cardinality,checks:a,pass:!1};return Object.defineProperty(l,"pass",{get:()=>a.every(({pass:c})=>c)}),o.checks.push(l),l.checks}};const di=(s,e)=>{let t="";if(!e)return t;if(e.type==="simple"&&(t=`<simpleValue>${e.parameter}</simpleValue>`),e.type==="enumeration"&&(t=`<xs:restriction base="xs:string">
    ${e.parameter.map(i=>`<xs:enumeration value="${i}" />`).join(`
`)}
    </xs:restriction>`),e.type==="pattern"&&(t=`<xs:restriction base="xs:string">
      <xs:pattern value="${e.parameter}" />
    </xs:restriction>`),e.type==="bounds"){const{min:i,minInclusive:n,max:r,maxInclusive:o}=e.parameter;let a="";i!==void 0&&(a=`<xs:min${n?"Inclusive":"Exclusive"} value="${i}">`);let l="";r!==void 0&&(l=`<xs:max${o?"Inclusive":"Exclusive"} value="${r}">`),t=`<xs:restriction base="xs:double">
      ${a}
      ${l}
    </xs:restriction>`}if(e.type==="length"){const{length:i,min:n,max:r}=e.parameter;let o="";i!==void 0&&n===void 0&&r===void 0&&(o=`<xs:length value="${i}" />`);let a="";n!==void 0&&i===void 0&&(a=`<xs:minLength value="${n}" />`);let l="";r!==void 0&&i===void 0&&(l=`<xs:maxLength value="${r}" />`),t=`<xs:restriction base="xs:string">
      ${o}
      ${a}
      ${l}
    </xs:restriction>`}return`<${s[0].toLowerCase()+s.slice(1)}>
    ${t}
  </${s[0].toLowerCase()+s.slice(1)}>`};let C0=class extends On{constructor(e,t){super(e),C(this,"facetType","Attribute"),C(this,"name"),C(this,"value"),this.name=t}serialize(e){const t=di("Name",this.name),i=di("Value",this.value);let n="";return e==="requirement"&&(n+=`cardinality="${this.cardinality}"`,n+=this.instructions?`instructions="${this.instructions}"`:""),`<attribute ${n}>
  ${t}
  ${i}
</attribute>`}async getEntities(){}async test(e,t,i={skipIfFails:!0}){const n=this._components.get(ue);for(const[r,o]of Object.entries(e)){const a=n.list.get(r);if(!a)continue;const l=await a.getItemsData([...o]);for(const c of l){const h=this.getItemChecks(t,r,c,i.skipIfFails);if(!h)continue;const d=Object.keys(c).filter(p=>{const g=this.evalRequirement(p,this.name,"Name");if(!g)return!1;const m=c[p];return Array.isArray(m)?!0:m===null||m.value===null?this.cardinality==="optional"||this.cardinality==="prohibited":Array.isArray(m.value)&&m.value.length===0||typeof m.value=="string"&&m.value.trim()===""?!1:g}),u=d.length>0;if(h.push({parameter:"Name",currentValue:u?d[0]:null,requiredValue:this.name,pass:this.cardinality==="prohibited"?!u:u}),this.value)if(d[0]){const p=c[d[0]];Array.isArray(p)?h.push({parameter:"Value",currentValue:null,requiredValue:this.value,pass:this.cardinality==="prohibited"}):Array.isArray(p.value)?h.push({parameter:"Value",currentValue:null,requiredValue:this.value,pass:this.cardinality==="prohibited"}):this.evalRequirement(p.value,this.value,"Value",h)}else h.push({parameter:"Value",currentValue:null,requiredValue:this.value,pass:this.cardinality==="prohibited"})}}}},S0=class extends On{constructor(e,t){super(e),C(this,"facetType","Classification"),C(this,"system"),C(this,"value"),C(this,"uri"),this.system=t}serialize(e){const t=di("System",this.system),i=di("Value",this.value);let n="";return e==="requirement"&&(n+=`cardinality="${this.cardinality}"`,n+=this.uri?`uri=${this.uri}`:"",n+=this.instructions?`instructions="${this.instructions}"`:""),`<classification ${n}>
  ${t}
  ${i}
</classification>`}async getEntities(e,t){}async test(e,t){}},tc=class extends On{constructor(e,t){super(e),C(this,"facetType","Entity"),C(this,"name"),C(this,"predefinedType"),this.name=t}serialize(e){const t=di("Name",this.name),i=di("Name",this.predefinedType);let n="";return e==="requirement"&&(n+=`cardinality="${this.cardinality}"`,n+=this.instructions?`instructions="${this.instructions}"`:""),`<entity ${n}>
  ${t}
  ${i}
</entity>`}async getEntities(e,t){const i=this._components.get(ue),n=new Map;for(const[o,a]of i.list){if(!e.find(c=>c.test(o)))continue;const l=await a.getCategories();for(const c of l){if(!await this.evalName(c))continue;let h=n.get(o);h||(h=[],n.set(o,h)),h.push(c)}}const r={};if(await Promise.all(Array.from(n.entries()).map(async([o,a])=>{const l=i.list.get(o);if(!l)return;const c=a.map(u=>new RegExp(`^${u}$`)),h=await l.getItemsOfCategories(c),d=Object.values(h).flat();r[o]=new Set(d)})),!this.predefinedType){Pe.add(t,r);return}for(const[o,a]of Object.entries(r)){const l=i.list.get(o);if(!l)continue;const c=await l.getItemsData([...a]);for(const h of c)"value"in h._localId&&await this.evalPredefinedType(o,h)&&Pe.append(t,o,h._localId.value)}}async test(e,t,i){const n=this._components.get(ue);for(const[r,o]of Object.entries(e)){const a=n.list.get(r);if(!a)continue;const l=await a.getItemsData([...o]);for(const c of l){if(!("value"in c._category))continue;const h=this.getItemChecks(t,r,c,i.skipIfFails);h&&(await this.evalName(c._category.value,h),await this.evalPredefinedType(r,c,h))}}}async evalName(e,t){return this.evalRequirement(e,this.name,"Name",t)}async evalPredefinedType(e,t,i){if(!this.predefinedType||!("value"in t.PredefinedType))return null;const n=typeof this.predefinedType.parameter=="string"&&this.predefinedType.parameter==="USERDEFINED";let r=t.PredefinedType.value;if(r==="USERDEFINED"&&!n){const o=Object.keys(t).find(a=>/^((?!Predefined).)*Type$/.test(a));if(o){const a=t[o];"value"in a&&(r=a.value)}else r="USERDEFINED"}if(!r){const o=this._components.get(ue).list.get(e);if(o&&"value"in t._localId){const[a]=await o.getItemsData([t._localId.value],{relations:{IsTypedBy:{attributes:!0,relations:!1}}});if(Array.isArray(a.IsTypedBy)){const l=a.IsTypedBy[0];if(l&&"value"in l.PredefinedType&&(r=l.PredefinedType.value,r==="USERDEFINED"&&!n)){const c=Object.keys(l).find(h=>/^((?!Predefined).)*Type$/.test(h));if(c){const h=l[c];"value"in h&&(r=h.value)}else r="USERDEFINED"}}}}return this.evalRequirement(r,this.predefinedType,"PredefinedType",i)}},E0=class extends On{constructor(e,t,i){super(e),C(this,"facetType","Property"),C(this,"propertySet"),C(this,"baseName"),C(this,"value"),C(this,"dataType"),C(this,"uri"),C(this,"_unsupportedTypes",["IFCCOMPLEXPROPERTY","IFCPHYSICALCOMPLEXQUANTITY"]),this.propertySet=t,this.baseName=i}serialize(e){const t=di("PropertySet",this.propertySet),i=di("BaseName",this.baseName),n=di("Value",this.value),r=this.dataType?`dataType=${this.dataType}`:"";let o="";return e==="requirement"&&(o+=`cardinality="${this.cardinality}"`,o+=this.uri?`uri=${this.uri}`:"",o+=this.instructions?`instructions="${this.instructions}"`:""),`<property ${r} ${o}>
  ${t}
  ${i}
  ${n}
</property>`}async getEntities(e,t){const i=this._components.get(ue);for(const[n,r]of i.list){if(!e.find(c=>c.test(n)))continue;const o=await r.getItemsOfCategories([/PROPERTYSET/,/ELEMENTQUANTITY/]),a=Object.values(o).flat();if(a.length===0)continue;const l=await r.getItemsData(a,{relations:{HasProperties:{attributes:!0,relations:!1},DefinesOcurrence:{attributes:!0,relations:!1}}});for(const c of l){if(!("value"in c._localId&&"value"in c._category&&"value"in c.Name&&Array.isArray(c.DefinesOcurrence))||!this.evalRequirement(c.Name.value,this.propertySet,"PropertySet"))continue;let h;if(c._category.value==="IFCPROPERTYSET"&&(h="HasProperties"),c._category.value==="IFCELEMENTQUANTITY"&&(h="Quantities"),!h)continue;const d=c[h];if(Array.isArray(d))for(const u of d){const p=Object.keys(u),g=p.find(f=>/Name/.test(f));if(!(g&&"value"in u[g]))continue;const m=u[g];if(!("value"in m)||!this.evalRequirement(m.value,this.baseName,"BaseName"))continue;if(this.value){const f=p.find(y=>/Value/.test(y));if(!f)continue;const b=u[f];if(!("value"in b)||!this.evalRequirement(b.value,this.value,"Value"))continue}const v=c.DefinesOcurrence.map(f=>"value"in f._localId&&typeof f._localId.value=="number"?f._localId.value:null).filter(f=>f!==null);Pe.append(t,n,...v)}}}}async test(e,t,i={skipIfFails:!0}){const n=this._components.get(ue);for(const[r,o]of Object.entries(e)){const a=n.list.get(r);if(!a)continue;const l=await a.getItemsData([...o],{relations:{IsDefinedBy:{attributes:!0,relations:!0},IsTypedBy:{attributes:!0,relations:!1},HasPropertySets:{attributes:!0,relations:!0},DefinesOcurrence:{attributes:!1,relations:!1}}});for(const c of l){const h=this.getItemChecks(t,r,c,i.skipIfFails);if(!h)continue;const d=(await this.getPsets(c)).filter(u=>!("value"in u.Name)||!this.evalRequirement(u.Name.value,this.propertySet,"PropertySet")?!1:(h.push({currentValue:u.Name.value,parameter:"PropertySet",pass:!0,requiredValue:this.propertySet}),!0));if(d.length===0){h.push({currentValue:null,parameter:"PropertySet",pass:!1,requiredValue:this.propertySet});continue}for(const u of d){const p=this.getPropertyListName(u);if(!p)continue;const g=u[p];if(!Array.isArray(g)){h.push({currentValue:null,parameter:"BaseName",pass:!1,requiredValue:this.baseName});continue}const m=g.filter(v=>!("value"in v._category&&"value"in v.Name)||this._unsupportedTypes.includes(v._category.value)||!this.evalRequirement(v.Name.value,this.baseName,"BaseName")?!1:(h.push({currentValue:v.Name.value,parameter:"BaseName",pass:!0,requiredValue:this.baseName}),!0));if(m.length===0){h.push({currentValue:null,parameter:"BaseName",pass:!1,requiredValue:this.baseName});continue}for(const v of m)this.evalValue(v,h),this.evalDataType(v,h),this.evalURI()}}}}getPropertyListName(e){let t;return"value"in e._category&&(e._category.value==="IFCPROPERTYSET"&&(t="HasProperties"),e._category.value==="IFCELEMENTQUANTITY"&&(t="Quantities")),t}getValueKey(e){return Object.keys(e).find(t=>/Value/.test(t)||/Values/.test(t))}getTypePsets(e){if(!Array.isArray(e.IsTypedBy))return[];const[t]=e.IsTypedBy;return t&&Array.isArray(t.HasPropertySets)?t.HasPropertySets:[]}async getPsets(e){const t=this.getTypePsets(e);if(!Array.isArray(e.IsDefinedBy))return t;const i=[];for(const n of e.IsDefinedBy){if(!("value"in n.Name))continue;const r=n.Name.value,o=this.getPropertyListName(n);if(!(r&&o))continue;const a=t.find(l=>"value"in l.Name?l.Name.value===r:!1);if(a&&Array.isArray(a.HasProperties)&&Array.isArray(n.HasProperties))for(const l of a.HasProperties){if(!("value"in l.Name))continue;const c=l.Name.value;n.HasProperties.find(h=>"value"in h.Name?h.Name.value===c:!1)||n.HasProperties.push(l)}i.push(n)}return i}evalValue(e,t){const i=this.getValueKey(e),n=e[i];if(!("value"in n))return!1;if(this.value){if(!i)return t==null||t.push({parameter:"Value",currentValue:null,pass:!1,requiredValue:this.value}),!1;const r=structuredClone(this.value);return n.type==="IFCLABEL"&&r.type==="simple"&&(r.parameter=String(r.parameter)),this.evalRequirement(n.value,r,"Value",t)}return i&&typeof n.value=="string"&&n.value.trim()===""?(t==null||t.push({parameter:"Value",currentValue:"",pass:!1,requiredValue:this.value}),!1):!0}evalDataType(e,t){if(!this.dataType)return!0;const i=this.getValueKey(e);if(!(i&&"value"in e[i]))return t==null||t.push({parameter:"DataType",currentValue:null,pass:!1,requiredValue:this.dataType}),!1;const n=e[i];return this.evalRequirement(n.type??null,{type:"simple",parameter:this.dataType},"DataType",t)}evalURI(){return!0}},T0=class extends On{constructor(){super(...arguments),C(this,"_ifcMaterialEntities",[/^IFCMATERIALLAYERSETUSAGE$/,/^IFCMATERIALCONSTITUENTSET$/,/^IFCMATERIAL$/,/^IFCMATERIALLIST$/]),C(this,"facetType","Material"),C(this,"value"),C(this,"uri")}serialize(e){if(!(this.value&&this.uri))return"<material />";const t=di("Value",this.value);let i="";return e==="requirement"&&(i+=`cardinality="${this.cardinality}"`,i+=this.uri?`uri=${this.uri}`:"",i+=this.instructions?`instructions="${this.instructions}"`:""),`<material ${i}>
  ${t}
</material>`}async getEntities(e,t){const i=this._components.get(ue);for(const[n,r]of i.list){if(!e.find(c=>c.test(n)))continue;const o=await r.getItemsOfCategories(this._ifcMaterialEntities),a=Object.values(o).flat();if(a.length===0)continue;const l=await r.getItemsData(a,{relations:{AssociatedTo:{attributes:!0,relations:!1},MaterialConstituents:{attributes:!0,relations:!0},ForLayerSet:{attributes:!0,relations:!0},MaterialLayers:{attributes:!0,relations:!0},Materials:{attributes:!0,relations:!1}}});for(const c of l){if(!("value"in c._localId&&"value"in c._category&&Array.isArray(c.AssociatedTo))||!this.hasValidMaterial(c))continue;const h=c.AssociatedTo.map(d=>"value"in d._localId&&d._localId.value?d._localId.value:null).filter(d=>d!==null);Pe.append(t,n,...h)}}}async test(e,t,i={skipIfFails:!0}){const n=this._components.get(ue);for(const[r,o]of Object.entries(e)){const a=n.list.get(r);if(!a)continue;const l=await a.getItemsData([[...o][0]],{relations:{AssociatedTo:{attributes:!1,relations:!1},HasAssociations:{attributes:!0,relations:!0},MaterialConstituents:{attributes:!0,relations:!0},ForLayerSet:{attributes:!0,relations:!0},MaterialLayers:{attributes:!0,relations:!0},Materials:{attributes:!0,relations:!1}}});for(const c of l){const h=this.getItemChecks(t,r,c,i.skipIfFails);if(h){if(!Array.isArray(c.HasAssociations)){h.push({parameter:null,currentValue:null,requiredValue:this.value,pass:!1});continue}for(const d of c.HasAssociations)if(this._ifcMaterialEntities.some(u=>"value"in d._category?u.test(d._category.value):!1)&&this.hasValidMaterial(d,h))break}}}}hasValidMaterial(e,t){let i=!1;if("value"in e._category&&e._category.value==="IFCMATERIAL")this.evalValue(e,t)&&(i=!0);else for(const[n,r]of Object.entries(e))if(["ForLayerSet","MaterialLayers","Material","MaterialConstituents","Materials"].includes(n)&&Array.isArray(r)){for(const o of r)if("value"in o._category&&o._category.value==="IFCMATERIAL"){if(this.evalValue(o,t)){i=!0;break}}else if(this.hasValidMaterial(o)){i=!0;break}}return i}evalValue(e,t){if(!this.value)return t==null||t.push({parameter:null,currentValue:e.Name&&"value"in e.Name?e.Name.value:null,pass:!0}),!0;if(!("value"in e._category&&e._category.value==="IFCMATERIAL"))return null;let i=!1;return e.Name&&"value"in e.Name&&(i=this.evalRequirement(e.Name.value,this.value,"Value",t)),i||(e.Category&&"value"in e.Category&&(i=this.evalRequirement(e.Category.value,this.value,"Value",t)),i)}},A0=class extends On{constructor(e,t){super(e),C(this,"facetType","PartOf"),C(this,"_entityFacet"),C(this,"_entity"),C(this,"relation"),C(this,"cardinality","required"),this._entity=t,this._entityFacet=new tc(e,t.name),this._entityFacet.predefinedType=t.predefinedType}set entity(e){this._entity=e;const{name:t,predefinedType:i}=e;this._entityFacet=new tc(this._components,t),this._entityFacet.predefinedType=i}get entity(){return this._entity}serialize(){return""}async getEntities(e,t){}async test(e){}},P0=class{constructor(e,t,i){C(this,"name"),C(this,"ifcVersion",new Set),C(this,"identifier",ot.create()),C(this,"description"),C(this,"instructions"),C(this,"requirementsDescription"),C(this,"applicability",new tt),C(this,"requirements",new tt),C(this,"components"),this.components=e,this.name=t;for(const n of i)this.ifcVersion.add(n)}set(e){const t=e,i=this;for(const n in e){if(n==="identifier")continue;const r=t[n];n in this&&(i[n]=r)}return this.components.get(M0).list.set(this.identifier,this),this}async test(e,t={skipIfFails:!0}){const i=new Ue;if(this.requirements.size===0)return i;const n={},r=[];for(const a of this.applicability)r.push(a.getEntities(e,n));await Promise.all(r);const o=[];for(const a of this.requirements)o.push(a.test(n,i,t));return await Promise.all(o),i}serialize(){const e=`name="${this.name}"`,t=this.identifier?`identifier="${this.identifier}"`:"",i=this.description?`description="${this.description}"`:"",n=this.instructions?`instructions="${this.instructions}"`:"";return`<specification ifcVersion="${[...this.ifcVersion].join(" ")}" ${e} ${t} ${i} ${n}>
      <applicability minOccurs="1" maxOccurs="unbounded">
        ${[...this.applicability].map(r=>r.serialize("applicability")).join(`
`)}
      </applicability>
      <requirements>
        ${[...this.requirements].map(r=>r.serialize("requirement")).join(`
`)}
      </requirements>
    </specification>`}};const Rt=s=>{if(!s)return;const e={};if("simpleValue"in s&&(e.type="simple",e.parameter=s.simpleValue),"restriction"in s){const t=s.restriction,i=Object.keys(t);if("pattern"in t&&(e.type="pattern",e.parameter=t.pattern.value),"enumeration"in t){e.type="enumeration";const n=t.enumeration.map(({value:r})=>t.base.includes("string")?String(r):t.base.includes("integer")||t.base.includes("double")?Number(r):r);e.parameter=n}if(i.some(n=>["minInclusive","minExclusive","maxInclusive","maxExclusive"].includes(n))){e.type="bounds";const n={},r=i.find(a=>a.includes("min")),o=i.find(a=>a.includes("max"));r&&(n.minInclusive=r==="minInclusive",n.min=t[r].value),o&&(n.maxInclusive=o==="maxInclusive",n.max=t[o].value),e.parameter=n}if(i.some(n=>["minLength","length","maxLength"].includes(n))){e.type="length";const n={};t.length!==void 0&&(n.length=t.length.value),t.minLength!==void 0&&(n.min=t.minLength.value),t.maxLength!==void 0&&(n.max=t.maxLength.value),e.parameter=n}}if(e.parameter!==void 0)return e},vd=(s,e)=>{const t=[];for(const i of e){const n=i.name,r=Rt(n);if(!r)continue;const o=new tc(s,r);i.cardinality&&(o.cardinality=i.cardinality),o.predefinedType=Rt(i.predefinedType),o.instructions=i.instructions,t.push(o)}return t},bd=(s,e)=>{const t=[];for(const i of e){const n=i.name,r=Rt(n);if(!r)continue;const o=new C0(s,r);i.cardinality&&(o.cardinality=i.cardinality),o.value=Rt(i.value),o.instructions=i.instructions,t.push(o)}return t},yd=(s,e)=>{const t=[];for(const i of e){const n=new T0(s);i.cardinality&&(n.cardinality=i.cardinality);const r=Rt(i.value);(r==null?void 0:r.type)==="enumeration"&&Array.isArray(r.parameter)&&(r.parameter=r.parameter.map(String)),n.value=r,n.uri=i.uri,n.instructions=i.instructions,t.push(n)}return t},_d=(s,e)=>{const t=[];for(const i of e){const n=i.propertySet,r=i.baseName,o=Rt(n),a=Rt(r);if(!(a&&o))continue;const l=new E0(s,o,a);i.cardinality&&(l.cardinality=i.cardinality);const c=Rt(i.value);l.value=c,l.dataType=i.dataType,l.uri=i.uri,l.instructions=i.instructions,t.push(l)}return t},wd=(s,e)=>{const t=[];for(const i of e){const n=i.system,r=Rt(n);if(!r)continue;const o=new S0(s,r);i.cardinality&&(o.cardinality=i.cardinality);const a=Rt(i.value);(a==null?void 0:a.type)==="simple"&&(a.parameter=String(a.parameter)),(a==null?void 0:a.type)==="enumeration"&&Array.isArray(a.parameter)&&(a.parameter=a.parameter.map(String)),o.value=a,o.uri=i.uri,o.instructions=i.instructions,t.push(o)}return t},xd=(s,e)=>{const t=[];for(const i of e){const n=Rt(i.entity.name);if(!n)continue;const r=Rt(i.entity.predefinedType),o=new A0(s,{name:n,predefinedType:r});o.relation=i.relation,i.cardinality&&(o.cardinality=i.cardinality),o.instructions=i.instructions,t.push(o)}return t},qc=class ic extends Oe{constructor(e){super(e),C(this,"enabled",!0),C(this,"IDSInfo"),C(this,"list",new bn),e.add(ic.uuid,this)}getModelIdMap(e){const t={},i={};for(const[n,r]of e){const o=[...r].filter(([,l])=>l.pass).map(([l])=>l);Pe.append(t,n,...o);const a=[...r].filter(([,l])=>!l.pass).map(([l])=>l);Pe.append(i,n,...a)}return{pass:t,fail:i}}create(e,t,i){const n=new P0(this.components,e,t);return i&&(n.identifier=i),this.list.set(n.identifier,n),n}load(e){const t=[],i=ic.xmlParser.parse(e).ids,{specifications:n,info:r}=i;if(this.IDSInfo={...r},n&&n.specification){const o=Array.isArray(n.specification)?n.specification:[n.specification];for(const a of o){const{name:l,ifcVersion:c,description:h,instructions:d,identifier:u}=a;if(!(l&&c))continue;const p=[],g=[],{applicability:m,requirements:v}=a;if(m){const{maxOccurs:y,...w}=m,S=Array.isArray(w)?w:[w];for(const T of S)for(const P in T){const D=Array.isArray(T[P])?T[P]:[T[P]];if(P==="entity"){const M=vd(this.components,D);p.push(...M)}if(P==="attribute"){const M=bd(this.components,D);p.push(...M)}if(P==="material"){const M=yd(this.components,D);p.push(...M)}if(P==="classification"){const M=wd(this.components,D);p.push(...M)}if(P==="property"){const M=_d(this.components,D);p.push(...M)}if(P==="partOf"){const M=xd(this.components,D);p.push(...M)}}}let f;if(v){const{maxOccurs:y,...w}=v;f=v.description;const S=Array.isArray(w)?w:[w];for(const T of S)for(const P in T){const D=Array.isArray(T[P])?T[P]:[T[P]];if(P==="entity"){const M=vd(this.components,D);g.push(...M)}if(P==="attribute"){const M=bd(this.components,D);g.push(...M)}if(P==="material"){const M=yd(this.components,D);g.push(...M)}if(P==="classification"){const M=wd(this.components,D);g.push(...M)}if(P==="property"){const M=_d(this.components,D);g.push(...M)}if(P==="partOf"){const M=xd(this.components,D);g.push(...M)}}}const b=this.create(l,c.split(/\s+/),u);b.description=h,b.instructions=d,b.requirementsDescription=f,b.applicability.add(...p),b.requirements.add(...g),t.push(b)}}return t}export(e,t=this.list.values()){const i=t??this.list;return`<ids xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://standards.buildingsmart.org/IDS http://standards.buildingsmart.org/IDS/1.0/ids.xsd" xmlns:ids="http://standards.buildingsmart.org/IDS">
  <!-- Made with That Open Engine ${$p.release} (https://github.com/thatopen/engine_components) -->
  <info>
    <title>${e.title}</title>
    ${e.copyright?`<copyright>${e.copyright}</copyright>`:""}
    ${e.version?`<version>${e.version}</version>`:""}
    ${e.description?`<description>${e.description}</description>`:""}
    ${e.author?`<author>${e.author}</author>`:""}
    ${e.date?`<date>${e.date.toISOString().split("T")[0]}</date>`:""}
    ${e.purpose?`<purpose>${e.purpose}</purpose>`:""}
    ${e.milestone?`<milestone>${e.milestone}</milestone>`:""}
  </info>
  <specifications>
    ${[...i].map(n=>n.serialize()).join(`
`)}
  </specifications>
</ids>`}};C(qc,"uuid","9f0b9f78-9b2e-481a-b766-2fbfd01f342c");C(qc,"xmlParser",new Pa.XMLParser({allowBooleanAttributes:!0,attributeNamePrefix:"",ignoreAttributes:!1,ignoreDeclaration:!0,ignorePiTags:!0,numberParseOptions:{leadingZeros:!0,hex:!0},parseAttributeValue:!0,preserveOrder:!1,processEntities:!1,removeNSPrefix:!0,trimValues:!0}));let M0=qc;const Wp=class qp extends Oe{constructor(e){super(e),C(this,"enabled",!0),e.add(qp.uuid,this)}static distanceFromPointToLine(e,t,i,n=!1){const r=new Bt,o=new L;return r.set(t,i),r.closestPointToPoint(e,n,o),o.distanceTo(e)}round(e){e.x=Math.trunc(e.x*1e3)/1e3,e.y=Math.trunc(e.y*1e3)/1e3,e.z=Math.trunc(e.z*1e3)/1e3}async getVolumeFromFragments(e){return console.warn("getVolumeFromFragments is deprecated. Use getItemsVolume instead."),this.getItemsVolume(e)}async getItemsVolume(e){let t=0;const i=this.components.get(ue);for(const[n,r]of Object.entries(e)){const o=i.list.get(n);o&&(t+=await o.getItemsVolume([...r]))}return t}static convertUnits(e,t,i,n=2){const r={m:1,cm:.01,mm:.001,km:1e3,m2:1,cm2:1e-4,mm2:1e-6,km2:1e6,m3:1,cm3:1e-6,mm3:1e-9,km3:1e9};if(!r[t]||!r[i])throw new Error("Invalid units provided for conversion.");if(!Number.isInteger(n)||n<0||n>5)throw new Error("Precision must be an integer between 0 and 5.");let o=r[t]/r[i];const a=e*o,l=10**n;return Math.round(a*l)/l}};C(Wp,"uuid","267ca032-672f-4cb0-afa9-d24e904f39d6");let yn=Wp;const O0=class Yp extends Oe{constructor(e){super(e),E(this,"enabled",!0),E(this,"inputs",["OBC","BUI"]),E(this,"_requestEventID","thatOpenCompanyComponentRequested"),E(this,"_createEventID","thatOpenCompanyComponentCreated"),e.add(Yp.uuid,this)}async import(e){return new Promise(t=>{const i=document.createElement("script"),n=`
        function main() {
          const { ${this.inputs} } = window.ThatOpenCompany;
        
          ${e}
        
          const onComponentRequested = () => {
            window.removeEventListener("${this._requestEventID}", onComponentRequested);
            const event = new CustomEvent("${this._createEventID}", { detail: main });
            window.dispatchEvent(event);
          };
          
          window.addEventListener("${this._requestEventID}", onComponentRequested);
        }
        
        main();
      `,r=o=>{window.removeEventListener(this._createEventID,r);const a=o.detail,l=this.components.get(a);i.remove(),t(l)};i.addEventListener("load",()=>{window.addEventListener(this._createEventID,r),window.dispatchEvent(new Event(this._requestEventID))}),i.src=URL.createObjectURL(new File([n],"temp.js")),document.head.appendChild(i)})}};E(O0,"uuid","74c0c370-1af8-4ca9-900a-4a4196c0f2f5");let Gp=class extends mn{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Me(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}};const en=new L,Cd=new Ee,Sd=new Ee,Ed=new L,Td=new L;let k0=class{constructor(e={}){const t=this;let i,n,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:n}},this.render=function(g,m){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),Cd.copy(m.matrixWorldInverse),Sd.multiplyMatrices(m.projectionMatrix,Cd),h(g,g,m),p(g)},this.setSize=function(g,m){i=g,n=m,r=i/2,o=n/2,l.style.width=g+"px",l.style.height=m+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let m=0,v=g.children.length;m<v;m++)c(g.children[m])}function h(g,m,v){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){en.setFromMatrixPosition(g.matrixWorld),en.applyMatrix4(Sd);const f=en.z>=-1&&en.z<=1&&g.layers.test(v.layers)===!0,b=g.element;b.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(t,m,v),b.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(en.x*r+r)+"px,"+(-en.y*o+o)+"px)",b.parentNode!==l&&l.appendChild(b),g.onAfterRender(t,m,v));const y={distanceToCameraSquared:d(v,g)};a.objects.set(g,y)}for(let f=0,b=g.children.length;f<b;f++)h(g.children[f],m,v)}function d(g,m){return Ed.setFromMatrixPosition(g.matrixWorld),Td.setFromMatrixPosition(m.matrixWorld),Ed.distanceToSquared(Td)}function u(g){const m=[];return g.traverseVisible(function(v){v.isCSS2DObject&&m.push(v)}),m}function p(g){const m=u(g).sort(function(f,b){if(f.renderOrder!==b.renderOrder)return b.renderOrder-f.renderOrder;const y=a.objects.get(f).distanceToCameraSquared,w=a.objects.get(b).distanceToCameraSquared;return y-w}),v=m.length;for(let f=0,b=m.length;f<b;f++)m[f].element.style.zIndex=v-f}}},Cs=class{constructor(e,t,i){E(this,"three"),E(this,"world"),E(this,"wasVisible",!0),E(this,"onDisposed",new K),this.world=e;let n;if(t)n=t;else{n=document.createElement("div");const r="6px";n.style.color="white",n.style.height=r,n.style.width=r,n.style.borderRadius="50%",n.style.border="2px solid rgb(122, 75, 209)",n.style.zIndex="-20"}this.three=new Gp(n),(i||e.scene.three).add(this.three),this.visible=!0}set visible(e){this.three.visible=e,this.wasVisible=e}get visible(){return this.three.visible}toggleVisibility(){this.visible=!this.visible}notDisplay(){this.visible=!1}dispose(){this.three.removeFromParent(),this.three.element.remove(),this.onDisposed.trigger(),this.onDisposed.reset()}},Xp=class extends Vb{constructor(e,t,i){super(e,t,i),E(this,"three2D",new k0),this.onAfterUpdate.add(()=>{if(this.onBeforeUpdate.trigger(this),!this.enabled||!this.currentWorld)return;const n=this.currentWorld.scene.three,r=this.currentWorld.camera.three;n instanceof Ic&&this.three2D.render(n,r)}),this.onDisposed.add(()=>{this.three2D.domElement.remove()}),this.onResize.add(({x:n,y:r})=>{this.three2D.setSize(n,r)}),this.setupHtmlRenderer(),this.resize()}setupHtmlRenderer(){this.three2D.domElement.style.position="absolute",this.three2D.domElement.style.top="0px",this.three2D.domElement.style.pointerEvents="none",this.container&&(this.container.appendChild(this.three2D.domElement),this.container.style.position="relative")}};const Ad=class sc extends Oe{constructor(e){super(e),E(this,"onDisposed",new K),E(this,"enabled",!0),E(this,"threshold",50),E(this,"autoCluster",!0),E(this,"clusterElementStyles",{...sc.DEFAULT_CLUSTER_STYLES}),E(this,"list",new Map),E(this,"clusterLabels",new Set),E(this,"currentKeys",new Set),E(this,"_color","white"),E(this,"_markerKey",0),E(this,"_clusterKey",0),E(this,"_worldEvents",new Map),E(this,"_setupWorlds",new Set),E(this,"clusterElementFactory",()=>{const t=document.createElement("div");return t.style.color="#000000",t.style.background="#FFFFFF",t.style.fontSize="1.2rem",t.style.fontWeight="500",t.style.borderRadius="50%",t.style.padding="5px 11px",t.style.textAlign="center",t.addEventListener("pointerover",()=>{t.style.background=this.clusterElementStyles.hoverBackgroundColor||"#BCF124"}),t.addEventListener("pointerout",()=>{t.style.background=this.clusterElementStyles.backgroundColor||"#FFFFFF"}),t}),e.add(sc.uuid,this)}get color(){return this._color}set color(e){this._color=e;for(const[t,i]of this.list)for(const[n,r]of i)r.label.three.element.style.color=e}create(e,t,i,n=!1){this.setupEvents(e,!0);const r=this._markerKey.toString(),o=this.getWorldMarkerList(e);if(o.has(r))return null;const a=document.createElement("span");a.append(t);const l=new Cs(e,a);return l.three.position.copy(i),o.set(r,{key:r,label:l,merged:!1,static:n}),this._markerKey++,r}delete(e){for(const[t,i]of this.list){const n=i.get(e);n&&n.label.dispose(),i.delete(e)}}getWorldMarkerList(e){return this.list.has(e.uuid)||this.list.set(e.uuid,new Map),this.list.get(e.uuid)}dispose(e){for(const[t,i]of this.list){const n=[...i.keys()];for(const r of n){const o=i.get(r);e&&o.type!==e||(o.label.dispose(),i.delete(r))}}if(!e){this.list.clear(),this._markerKey=0;for(const t of this.clusterLabels)t.label.dispose();this.clusterLabels.clear(),this._clusterKey=0,this.currentKeys.clear()}this.onDisposed.trigger()}setupEvents(e,t){if(t&&this._setupWorlds.has(e.uuid)||!e.camera.hasCameraControls())return;const i=this.getWorldEvent(e);e.camera.controls.removeEventListener("sleep",i),e.camera.controls.removeEventListener("rest",i),t&&(e.camera.controls.addEventListener("sleep",i),e.camera.controls.addEventListener("rest",i))}cluster(e){if(!this.autoCluster)return;this.resetMarkers();const t=this.list.get(e.uuid);if(t){for(const[i,n]of t)if(!n.merged&&!n.static){this.currentKeys.clear();for(const[r,o]of t)o.static||n.key!==o.key&&!o.merged&&this.distance(n.label,o.label)<this.threshold&&(this.currentKeys.add(o.key),o.merged=!0);if(this.currentKeys.size>0){this.currentKeys.add(n.key),n.merged=!0;const r=Array.from(this.currentKeys),o=this.getAveragePositionFromLabels(r),a=new Cs(n.label.world,this.createClusterElement(this._clusterKey.toString())),{element:l}=a.three;l.firstChild.textContent=r.length.toString(),a.three.position.copy(o),this.clusterLabels.add({key:this._clusterKey.toString(),markerKeys:r,label:a}),this._clusterKey++}}this.removeMergeMarkers(e)}}getWorldEvent(e){if(!this._worldEvents.has(e.uuid)){const t=()=>{this.cluster(e)};this._worldEvents.set(e.uuid,t)}return this._worldEvents.get(e.uuid)}resetMarkers(){for(const[e,t]of this.list)for(const[i,n]of t)n.merged=!1;for(const e of this.clusterLabels)e.label.dispose();this.clusterLabels.clear(),this._clusterKey=0}removeMergeMarkers(e){const t=this.list.get(e.uuid);if(t){for(const[i,n]of t)n.merged?n.label.dispose():n.label.world.scene.three.add(n.label.three);for(const i of this.clusterLabels)if(i.markerKeys.length===1){for(const[n,r]of this.list){const o=r.get(i.markerKeys[0]);o&&(o.label.world.scene.three.add(o.label.three),o.merged=!1)}i.label.dispose(),this.clusterLabels.delete(i)}}}getAveragePositionFromLabels(e){const t=e.map(i=>{for(const[n,r]of this.list){const o=r.get(i);if(o)return o.label.three.position}return new L});return t.reduce((i,n)=>i.add(n),new L).divideScalar(t.length)}createClusterElement(e){const t=this.clusterElementFactory();t.textContent=e;const i=document.createElement("span");return i.append(t),i.style.pointerEvents="auto",i.style.cursor="pointer",i.addEventListener("pointerdown",()=>{this.navigateToCluster(e)}),i}getScreenPosition(e){const t=new L;if(!e.world.renderer)throw new Error("Renderer not found!");const i=e.three.position.clone();i.project(e.world.camera.three);const n=e.world.renderer.getSize();return t.x=i.x*n.x/2+n.x/2,t.y=-(i.y*n.y/2)+n.y/2,t}distance(e,t){const i=this.getScreenPosition(e),n=this.getScreenPosition(t),r=i.x-n.x,o=i.y-n.y,a=Math.sqrt(r*r+o*o)*.5;return a===0?this.threshold+1:a}navigateToCluster(e){const t=[],i=Array.from(this.clusterLabels).find(c=>c.key===e);if(!i)return;const n=i.label.world.camera;if(!n.hasCameraControls()){console.warn("Zoom to clusters only supported with Camera Controls!");return}for(const c of i.markerKeys)for(const[h,d]of this.list){const u=d.get(c);if(u){const{x:p,y:g,z:m}=u.label.three.position;t.push(p,g,m)}}i.label.dispose(),this.clusterLabels.delete(i);const r=new at,o=new Float32Array(t),a=new At(o,3);r.setAttribute("position",a);const l=new oe(r);l.geometry.computeBoundingSphere(),l.geometry.boundingSphere&&n.controls.fitToSphere(l,!0),r.dispose(),l.clear(),t.length=0}};E(Ad,"uuid","4079eb91-79b0-4ede-bcf2-15b837129236"),E(Ad,"DEFAULT_CLUSTER_STYLES",{backgroundColor:"#FFFFFF",textColor:"#000000",fontSize:"1.2rem",fontWeight:"500",borderRadius:"50%",padding:"5px 11px",textAlign:"center",cursor:"pointer",hoverBackgroundColor:"#BCF124",transition:void 0});const qo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};let ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}};const D0=new Ca(-1,1,1,-1,0,1);let z0=class extends at{constructor(){super(),this.setAttribute("position",new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zi([0,2,0,0,2,0],2))}};const I0=new z0;let Ti=class{constructor(e){this._mesh=new oe(I0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},L0=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ye?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zt.clone(e.uniforms),this.material=new Ye({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ti(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Pd=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},$0=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},N0=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Me);this._width=i.width,this._height=i.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new L0(qo),this.copyPass.material.blending=gi,this.clock=new ju}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pd!==void 0&&(o instanceof Pd?i=!0:o instanceof $0&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};const To={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ee},cameraProjectionMatrixInverse:{value:new Ee},cameraWorldMatrix:{value:new Ee},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ao={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},yl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function B0(s=5){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=R0(e),i=t.length,n=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=t[o],l=2*Math.PI*a/i,c=new L(Math.cos(l),Math.sin(l),0).normalize();n[o*4]=(c.x*.5+.5)*255,n[o*4+1]=(c.y*.5+.5)*255,n[o*4+2]=127,n[o*4+3]=255}const r=new qu(n,e,e);return r.wrapS=Ko,r.wrapT=Ko,r.needsUpdate=!0,r}function R0(s){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,i=Array(t).fill(0);let n=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(n===-1&&r===e?(r=e-2,n=0):(r===e&&(r=0),n<0&&(n=e-1)),i[n*e+r]!==0){r-=2,n++;continue}else i[n*e+r]=o++;r++,n--}return i}const Po={defines:{SAMPLES:16,SAMPLE_VECTORS:Zp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraProjectionMatrixInverse:{value:new Ee},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Zp(s,e,t){const i=U0(s,e,t);let n="vec3[SAMPLES](";for(let r=0;r<s;r++){const o=i[r];n+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return n}function U0(s,e,t){const i=[];for(let n=0;n<s;n++){const r=2*Math.PI*e*n/s,o=Math.pow(n/(s-1),t);i.push(new L(Math.cos(r),Math.sin(r),o))}return i}let F0=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,n,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,p=c-d,g=e-u,m=t-p;let v,f;g>m?(v=1,f=0):(v=0,f=1);const b=g-v+h,y=m-f+h,w=g-1+2*h,S=m-1+2*h,T=l&255,P=c&255,D=this.perm[T+this.perm[P]]%12,M=this.perm[T+v+this.perm[P+f]]%12,I=this.perm[T+1+this.perm[P+1]]%12;let R=.5-g*g-m*m;R<0?i=0:(R*=R,i=R*R*this._dot(this.grad3[D],g,m));let A=.5-b*b-y*y;A<0?n=0:(A*=A,n=A*A*this._dot(this.grad3[M],b,y));let O=.5-w*w-S*S;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[I],w,S)),70*(i+n+r)}noise3d(e,t,i){let n,r,o,a;const l=(e+t+i)*.3333333333333333,c=Math.floor(e+l),h=Math.floor(t+l),d=Math.floor(i+l),u=1/6,p=(c+h+d)*u,g=c-p,m=h-p,v=d-p,f=e-g,b=t-m,y=i-v;let w,S,T,P,D,M;f>=b?b>=y?(w=1,S=0,T=0,P=1,D=1,M=0):f>=y?(w=1,S=0,T=0,P=1,D=0,M=1):(w=0,S=0,T=1,P=1,D=0,M=1):b<y?(w=0,S=0,T=1,P=0,D=1,M=1):f<y?(w=0,S=1,T=0,P=0,D=1,M=1):(w=0,S=1,T=0,P=1,D=1,M=0);const I=f-w+u,R=b-S+u,A=y-T+u,O=f-P+2*u,_=b-D+2*u,$=y-M+2*u,X=f-1+3*u,V=b-1+3*u,J=y-1+3*u,W=c&255,ne=h&255,U=d&255,B=this.perm[W+this.perm[ne+this.perm[U]]]%12,re=this.perm[W+w+this.perm[ne+S+this.perm[U+T]]]%12,ie=this.perm[W+P+this.perm[ne+D+this.perm[U+M]]]%12,ee=this.perm[W+1+this.perm[ne+1+this.perm[U+1]]]%12;let he=.6-f*f-b*b-y*y;he<0?n=0:(he*=he,n=he*he*this._dot3(this.grad3[B],f,b,y));let pe=.6-I*I-R*R-A*A;pe<0?r=0:(pe*=pe,r=pe*pe*this._dot3(this.grad3[re],I,R,A));let le=.6-O*O-_*_-$*$;le<0?o=0:(le*=le,o=le*le*this._dot3(this.grad3[ie],O,_,$));let fe=.6-X*X-V*V-J*J;return fe<0?a=0:(fe*=fe,a=fe*fe*this._dot3(this.grad3[ee],X,V,J)),32*(n+r+o+a)}noise4d(e,t,i,n){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,u,p,g;const m=(e+t+i+n)*l,v=Math.floor(e+m),f=Math.floor(t+m),b=Math.floor(i+m),y=Math.floor(n+m),w=(v+f+b+y)*c,S=v-w,T=f-w,P=b-w,D=y-w,M=e-S,I=t-T,R=i-P,A=n-D,O=M>I?32:0,_=M>R?16:0,$=I>R?8:0,X=M>A?4:0,V=I>A?2:0,J=R>A?1:0,W=O+_+$+X+V+J,ne=o[W][0]>=3?1:0,U=o[W][1]>=3?1:0,B=o[W][2]>=3?1:0,re=o[W][3]>=3?1:0,ie=o[W][0]>=2?1:0,ee=o[W][1]>=2?1:0,he=o[W][2]>=2?1:0,pe=o[W][3]>=2?1:0,le=o[W][0]>=1?1:0,fe=o[W][1]>=1?1:0,we=o[W][2]>=1?1:0,Te=o[W][3]>=1?1:0,Xe=M-ne+c,Fe=I-U+c,x=R-B+c,G=A-re+c,q=M-ie+2*c,z=I-ee+2*c,k=R-he+2*c,N=A-pe+2*c,Z=M-le+3*c,Q=I-fe+3*c,F=R-we+3*c,te=A-Te+3*c,ae=M-1+4*c,se=I-1+4*c,ce=R-1+4*c,Ce=A-1+4*c,be=v&255,Ke=f&255,Wt=b&255,lt=y&255,ls=a[be+a[Ke+a[Wt+a[lt]]]]%32,$e=a[be+ne+a[Ke+U+a[Wt+B+a[lt+re]]]]%32,Rs=a[be+ie+a[Ke+ee+a[Wt+he+a[lt+pe]]]]%32,Un=a[be+le+a[Ke+fe+a[Wt+we+a[lt+Te]]]]%32,qt=a[be+1+a[Ke+1+a[Wt+1+a[lt+1]]]]%32;let Di=.6-M*M-I*I-R*R-A*A;Di<0?h=0:(Di*=Di,h=Di*Di*this._dot4(r[ls],M,I,R,A));let cs=.6-Xe*Xe-Fe*Fe-x*x-G*G;cs<0?d=0:(cs*=cs,d=cs*cs*this._dot4(r[$e],Xe,Fe,x,G));let hs=.6-q*q-z*z-k*k-N*N;hs<0?u=0:(hs*=hs,u=hs*hs*this._dot4(r[Rs],q,z,k,N));let ds=.6-Z*Z-Q*Q-F*F-te*te;ds<0?p=0:(ds*=ds,p=ds*ds*this._dot4(r[Un],Z,Q,F,te));let zi=.6-ae*ae-se*se-ce*ce-Ce*Ce;return zi<0?g=0:(zi*=zi,g=zi*zi*this._dot4(r[qt],ae,se,ce,Ce)),27*(h+d+u+p+g)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,n){return e[0]*t+e[1]*i+e[2]*n}_dot4(e,t,i,n,r){return e[0]*t+e[1]*i+e[2]*n+e[3]*r}},tn=class Ri extends ei{constructor(e,t,i=512,n=512,r,o,a){super(),this.width=i,this.height=n,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=B0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Kt(this.width,this.height,{type:gn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ye({defines:Object.assign({},To.defines),uniforms:zt.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,blending:gi,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Bg,this.normalMaterial.blending=gi,this.pdMaterial=new Ye({defines:Object.assign({},Po.defines),uniforms:zt.clone(Po.uniforms),vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ye({defines:Object.assign({},Ao.defines),uniforms:zt.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:gi}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ye({uniforms:zt.clone(qo.uniforms),vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ph,blendDst:eo,blendEquation:Jr,blendSrcAlpha:Ah,blendDstAlpha:eo,blendEquationAlpha:Jr}),this.blendMaterial=new Ye({uniforms:zt.clone(yl.uniforms),vertexShader:yl.vertexShader,fragmentShader:yl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Rg,blendSrc:Ph,blendDst:eo,blendEquation:Jr,blendSrcAlpha:Ah,blendDstAlpha:eo,blendEquationAlpha:Jr}),this._fsQuad=new Ti(null),this._originalClearColor=new me,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ug,this.depthTexture.format=Fg,this.depthTexture.type=jg,this.normalRenderTarget=new Kt(this.width,this.height,{minFilter:vn,magFilter:vn,type:gn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,n=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=n,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=n,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Zp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Ri.OUTPUT.Off:break;case Ri.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=gi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=gi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=gi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=gi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=gi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,n,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,i,n,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,r=t.clearAlpha||r,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}_restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const n=t.get(i);i.visible=n}),t.clear()}_generateNoise(e=64){const t=new F0,i=e*e*4,n=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;n[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,n[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,n[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,n[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new qu(n,e,e,As,Dc);return r.wrapS=Ko,r.wrapT=Ko,r.needsUpdate=!0,r}};tn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Mo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};let j0=class extends ei{constructor(){super(),this.uniforms=zt.clone(Mo.uniforms),this.material=new Hg({name:Mo.name,uniforms:this.uniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader}),this._fsQuad=new Ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Vg.getTransfer(this._outputColorSpace)===Wg&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qg?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xg?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qg?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Kg&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};const Oo={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Me(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ko={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Me(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},_l={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Me(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};let H0=class extends ei{constructor(){super(),this._edgesRT=new Kt(1,1,{depthBuffer:!1,type:gn}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Kt(1,1,{depthBuffer:!1,type:gn}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Mh,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=bi,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Mh,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=vn,this._searchTexture.minFilter=vn,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=zt.clone(Oo.uniforms),this._materialEdges=new Ye({defines:Object.assign({},Oo.defines),uniforms:this._uniformsEdges,vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader}),this._uniformsWeights=zt.clone(ko.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Ye({defines:Object.assign({},ko.defines),uniforms:this._uniformsWeights,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader}),this._uniformsBlend=zt.clone(_l.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Ye({uniforms:this._uniformsBlend,vertexShader:_l.vertexShader,fragmentShader:_l.fragmentShader}),this._fsQuad=new Ti(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}},V0=class extends ei{constructor(e,t,i=1){super(),E(this,"_edgeMaterial"),E(this,"_combineMaterial"),E(this,"_fsQuad"),E(this,"_edgeRenderTarget"),E(this,"_vertexColorRenderTarget"),E(this,"_fragments"),E(this,"_renderer"),E(this,"_overrideMaterial"),E(this,"_depthBiasStrength",.001),E(this,"_mode",0),this._renderer=e,this._fragments=t,this._overrideMaterial=new Ye({clipping:!0,vertexColors:!0,side:Si,uniforms:{depthBiasStrength:{value:this._depthBiasStrength}},vertexShader:`
        #include <common>
        #include <color_pars_vertex>
        #include <clipping_planes_pars_vertex>
        
        uniform float depthBiasStrength;
        
        void main() {
          #include <color_vertex>
          vColor = color;
          
          #include <begin_vertex>
          #include <project_vertex>
          
          // Compute priority from vertex color (using luminance)
          // Higher values = higher priority = render on top
          float priority = dot(color, vec3(0.299, 0.587, 0.114)); // Luminance
          
          // Apply depth bias: subtract from z to bring higher priority faces closer
          // In clip space, smaller z values are closer to camera
          gl_Position.z -= priority * depthBiasStrength;

          #include <clipping_planes_vertex>
        }
      `,fragmentShader:`
        varying vec3 vColor;
        #include <clipping_planes_pars_fragment>
        
        void main() {
          #include <clipping_planes_fragment>
          gl_FragColor = vec4(vColor, 1.0);
        }
      `}),this._edgeMaterial=new Ye({uniforms:{tDiffuse:{value:null},width:{value:i}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float width;
        varying vec2 vUv;

        void main() {
          vec2 texel = vec2(1.0 / float(textureSize(tDiffuse, 0).x), 1.0 / float(textureSize(tDiffuse, 0).y));
          vec2 offset = texel * width;
          
          vec4 center = texture2D(tDiffuse, vUv);
          vec4 right = texture2D(tDiffuse, vUv + vec2(offset.x, 0.0));
          vec4 up = texture2D(tDiffuse, vUv + vec2(0.0, offset.y));
          
          float diff = 0.0;
          diff += distance(center.rgb, right.rgb);
          diff += distance(center.rgb, up.rgb);
          gl_FragColor = vec4(vec3(step(0.0001, diff)), 1.0);
        }
      `}),this._combineMaterial=new Ye({uniforms:{tDiffuse:{value:null},tEdges:{value:null},edgeColor:{value:new me(8947848)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tEdges;
        uniform vec3 edgeColor;
        varying vec2 vUv;

        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          vec4 edges = texture2D(tEdges, vUv);
          
          // Combine color with edges (edges are black, so we multiply)
          gl_FragColor = mix(color, vec4(edgeColor, 1.0), edges.r);
        }
      `}),this._fsQuad=new Ti(this._edgeMaterial),this._edgeRenderTarget=new Kt(1,1,{minFilter:bi,magFilter:bi,format:As}),this._vertexColorRenderTarget=new Kt(1,1,{minFilter:bi,magFilter:bi,format:As})}get mode(){return this._mode}set mode(e){this._mode=e,this.setMaterialToMesh(!1)}get width(){return this._edgeMaterial.uniforms.width.value}set width(e){this._edgeMaterial.uniforms.width.value=e}get color(){return this._combineMaterial.uniforms.edgeColor.value}set color(e){this._combineMaterial.uniforms.edgeColor.value=e}get depthBiasStrength(){return this._depthBiasStrength}set depthBiasStrength(e){this._depthBiasStrength=e,this._overrideMaterial&&(this._overrideMaterial.uniforms.depthBiasStrength.value=e)}setSize(e,t){this._edgeRenderTarget.setSize(e,t),this._vertexColorRenderTarget.setSize(e,t)}setWidth(e){this._edgeMaterial.uniforms.width.value=e}render(e,t,i){const n=this._renderer.currentWorld,r=n.scene.three,o=n.scene.three,a=o.fog,l=o.background;if(o.fog=null,o.background=null,this._mode===0)this.setMaterialToMesh(!0),e.setRenderTarget(this._vertexColorRenderTarget),e.render(r,n.camera.three),this.setMaterialToMesh(!1);else if(this._mode===1){const c=r.overrideMaterial;r.overrideMaterial=this._overrideMaterial,e.setRenderTarget(this._vertexColorRenderTarget),e.render(r,n.camera.three),r.overrideMaterial=c}o.fog=a,o.background=l,this._edgeMaterial.uniforms.tDiffuse.value=this._vertexColorRenderTarget.texture,this._fsQuad.material=this._edgeMaterial,e.setRenderTarget(this._edgeRenderTarget),this._fsQuad.render(e),this._combineMaterial.uniforms.tDiffuse.value=i.texture,this._combineMaterial.uniforms.tEdges.value=this._edgeRenderTarget.texture,this._fsQuad.material=this._combineMaterial,this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(t),this._fsQuad.render(e)}dispose(){this._edgeMaterial.dispose(),this._combineMaterial.dispose(),this._overrideMaterial.dispose(),this._fsQuad.dispose(),this._edgeRenderTarget.dispose(),this._vertexColorRenderTarget.dispose()}setMaterialToMesh(e){for(const[,t]of this._fragments.core.models.list)for(const[,i]of t.tiles)"isLODGeometry"in i.geometry||(e?(i.userData.edgePassPreviousMaterial=i.material,i.material=[this._overrideMaterial]):"edgePassPreviousMaterial"in i.userData&&(i.material=i.userData.edgePassPreviousMaterial))}},W0=class extends ei{constructor(e,t,i){super(),E(this,"outlineColor",new me(16762880)),E(this,"thickness",2),E(this,"fillColor",new me(16776960)),E(this,"fillOpacity",.3),E(this,"debugShowMask",!1),E(this,"scene",new Ic),E(this,"_maskTarget"),E(this,"_fsQuad"),E(this,"_world"),E(this,"_debugQuad",null),this._world=i,this.scene.background=new me(0),this._maskTarget=new Kt(e,t,{minFilter:bi,magFilter:bi,format:As,type:Dc}),this._fsQuad=new Ti(new Ye({uniforms:{tDiffuse:{value:null},tMask:{value:null},outlineColor:{value:new me(65280)},thickness:{value:2},resolution:{value:new Me(e,t)},fillColor:{value:new me(16776960)},fillOpacity:{value:.3}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D tDiffuse;
          uniform sampler2D tMask;
          uniform vec3 outlineColor;
          uniform float thickness;
          uniform vec2 resolution;
          uniform vec3 fillColor;
          uniform float fillOpacity;
          varying vec2 vUv;

          void main() {
            float mask = texture2D(tMask, vUv).r;
            float outline = 0.0;
            float t = thickness;
            vec2 texel = 1.0 / resolution;
            for (float x = -t; x <= t; x++) {
              for (float y = -t; y <= t; y++) {
                vec2 offset = vec2(x, y) * texel;
                float neighbor = texture2D(tMask, vUv + offset).r;
                if (neighbor > 0.5) outline = 1.0;
              }
            }
            vec4 sceneColor = texture2D(tDiffuse, vUv);
            // Fill inside
            if (mask > 0.5) {
              sceneColor.rgb = mix(sceneColor.rgb, fillColor, fillOpacity);
            }
            // Only draw outline where mask is not set but neighbor is
            if (outline > 0.5 && mask < 0.5) {
              gl_FragColor = vec4(outlineColor, 1.0);
            } else {
              gl_FragColor = sceneColor;
            }
          }
        `})),this._debugQuad=new Ti(new Ye({uniforms:{tMask:{value:null}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D tMask;
          varying vec2 vUv;
          void main() {
            float mask = texture2D(tMask, vUv).r;
            gl_FragColor = vec4(vec3(mask), 1.0);
          }
        `}))}setSize(e,t){this._maskTarget.setSize(e,t),this._fsQuad.material.uniforms.resolution.value.set(e,t)}render(e,t,i){const n=this._world.camera.three,r=e.getClearColor(new me),o=e.getClearAlpha();if(e.setClearColor(0,0),e.setRenderTarget(this._maskTarget),e.clear(),e.render(this.scene,n),e.setClearColor(r,o),this.debugShowMask){const l=this._debugQuad.material;l.uniforms.tMask.value=this._maskTarget.texture,this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(t),this._debugQuad.render(e);return}const a=this._fsQuad.material;a.uniforms.tDiffuse.value=i.texture,a.uniforms.tMask.value=this._maskTarget.texture,a.uniforms.outlineColor.value.copy(this.outlineColor),a.uniforms.thickness.value=this.thickness,a.uniforms.fillColor.value.copy(this.fillColor),a.uniforms.fillOpacity.value=this.fillOpacity,this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(t),this._fsQuad.render(e)}dispose(){this._maskTarget.dispose(),this._fsQuad.dispose();const e=[...this.scene.children];for(const t of e)t.removeFromParent()}},q0=class extends ei{constructor(e,t){super(),E(this,"materialToExclude",new Ds({color:0})),E(this,"_excludedMaterials",new Set),E(this,"_originalMaterials",new Map),E(this,"_renderer"),E(this,"_world"),E(this,"_fsQuad"),E(this,"_combineMaterial"),E(this,"_excludedRenderTarget"),this._renderer=e,this._world=t,this._excludedRenderTarget=new Kt(1,1,{minFilter:bi,magFilter:bi,format:As}),this._combineMaterial=new Ye({uniforms:{tDiffuse:{value:null},tExcluded:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tExcluded;
        varying vec2 vUv;

        void main() {
          vec4 inputColor = texture2D(tDiffuse, vUv);
          vec4 excludedColor = texture2D(tExcluded, vUv);
          
          // If excluded pixel is black (or very dark), use input color
          // Otherwise, use excluded color
          float excludedLuminance = (excludedColor.r + excludedColor.g + excludedColor.b) / 3.0;
          float threshold = 0.01; // Adjust this threshold as needed
          
          if (excludedLuminance < threshold) {
            gl_FragColor = inputColor;
          } else {
            gl_FragColor = excludedColor;
          }
        }
      `}),this._fsQuad=new Ti(this._combineMaterial)}addExcludedMaterial(e){this._excludedMaterials.add(e)}removeExcludedMaterial(e){this._excludedMaterials.delete(e)}clearExcludedMaterials(){this._excludedMaterials.clear()}get excludedMaterials(){return Array.from(this._excludedMaterials)}setSize(e,t){this._excludedRenderTarget.setSize(e,t)}render(e,t,i){const n=this._world.scene.three,r=this._world.camera.three,o=e.getClearColor(new me),a=e.getClearAlpha();e.setClearColor(0,0),this._substituteMaterials(n),e.setRenderTarget(this._excludedRenderTarget),e.render(n,r),this._restoreMaterials(),this._combineMaterial.uniforms.tDiffuse.value=i.texture,this._combineMaterial.uniforms.tExcluded.value=this._excludedRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(t),this._fsQuad.render(e),e.setClearColor(o,a)}_substituteMaterials(e){if(e instanceof oe){const t=e.material;if(Array.isArray(t)){for(const i of t)if("isLodMaterial"in i)return}else if("isLodMaterial"in t)return;this._excludedMaterials.has(t)||(this._originalMaterials.set(e,t),e.material=this.materialToExclude)}for(const t of e.children)this._substituteMaterials(t)}_restoreMaterials(){for(const[e,t]of this._originalMaterials)e.material=t;this._originalMaterials.clear()}dispose(){this.materialToExclude.dispose(),this._combineMaterial.dispose(),this._fsQuad.dispose(),this._excludedRenderTarget.dispose(),this._excludedMaterials.clear(),this._originalMaterials.clear()}},Y0=class extends ei{constructor(e,t,i=null,n=null,r=null){super(),E(this,"scene"),E(this,"camera"),E(this,"overrideMaterial"),E(this,"clearColor"),E(this,"clearAlpha"),E(this,"clearDepth"),E(this,"needsSwap"),E(this,"isolatedMaterials",[]),E(this,"_oldClearColor"),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,i){for(const a of this.isolatedMaterials)a.userData.wasVisibleBasePass!==void 0&&(a.visible=a.userData.wasVisibleBasePass);const n=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth===!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n;for(const a of this.isolatedMaterials)a.userData.wasVisibleBasePass=a.visible,a.visible=!1}};function G0(){return new Ye({clipping:!0,uniforms:{glossExponent:{value:10},fresnelExponent:{value:6},glossFactor:{value:.2},fresnelFactor:{value:1}},vertexShader:`
    varying vec3 vCameraPosition;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    #include <clipping_planes_pars_vertex>
  
    void main() {
       #include <begin_vertex>
       
       vec4 absPosition = vec4(position, 1.0);
       vNormal = normal;
       
       #ifdef USE_INSTANCING
          absPosition = instanceMatrix * absPosition;
          vNormal = (instanceMatrix * vec4(normal, 0.)).xyz;
       #endif
       
       absPosition = modelMatrix * absPosition;
       vNormal = (normalize(modelMatrix * vec4(vNormal, 0.))).xyz;
       
       gl_Position = projectionMatrix * viewMatrix * absPosition;
       
       vCameraPosition = cameraPosition;
       vPosition = absPosition.xyz;
       
       #include <project_vertex>
       #include <clipping_planes_vertex>
    }
    `,fragmentShader:`
    uniform float glossExponent;
    uniform float glossFactor;
    uniform float fresnelExponent;
    uniform float fresnelFactor;

    varying vec3 vCameraPosition;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    #include <clipping_planes_pars_fragment>
  
    void main() {
      #include <clipping_planes_fragment>
      vec3 cameraPixelVec = normalize(vCameraPosition - vPosition);
      float dotProduct = dot(vNormal, cameraPixelVec);

      // Use abs() for both gloss and fresnel to handle DoubleSide materials
      // On back faces, dotProduct is negative, which breaks the fresnel calculation

      float absDotProduct = abs(dotProduct);
      float gloss = absDotProduct;

      // Use absDotProduct instead of dotProduct to prevent values > 1.0
      
      float fresnel = pow(1.0 - absDotProduct, fresnelExponent) * fresnelFactor;

      gloss = pow(gloss, glossExponent) * glossFactor;

      float result = gloss + fresnel;

      gl_FragColor = vec4(result, result, result, 1.);
    }
    `})}let X0=class extends ei{constructor(e,t){super(),E(this,"resolution"),E(this,"renderScene"),E(this,"renderCamera"),E(this,"fsQuad"),E(this,"glossOverrideMaterial"),E(this,"glossBuffer"),E(this,"_glossEnabled",!0),this.renderScene=t.scene.three,this.renderCamera=t.camera.three,this.resolution=new Me(e.x,e.y),this.fsQuad=new Ti,this.fsQuad.material=this.createGlossMaterial(),this.glossBuffer=this.newRenderTarget();const i=G0();this.glossOverrideMaterial=i}get glossEnabled(){return this._glossEnabled}set glossEnabled(e){this._glossEnabled=e;const t=this.fsQuad.material;t.uniforms.glossEnabled.value=e?1:0}get minGloss(){return this.fsQuad.material.uniforms.minGloss.value}set minGloss(e){const t=this.fsQuad.material;t.uniforms.minGloss.value=e}get maxGloss(){return this.fsQuad.material.uniforms.maxGloss.value}set maxGloss(e){const t=this.fsQuad.material;t.uniforms.maxGloss.value=e}get glossExponent(){return this.glossOverrideMaterial.uniforms.glossExponent.value}set glossExponent(e){this.glossOverrideMaterial.uniforms.glossExponent.value=e}get fresnelExponent(){return this.glossOverrideMaterial.uniforms.fresnelExponent.value}set fresnelExponent(e){this.glossOverrideMaterial.uniforms.fresnelExponent.value=e}get glossFactor(){return this.glossOverrideMaterial.uniforms.glossFactor.value}set glossFactor(e){this.glossOverrideMaterial.uniforms.glossFactor.value=e}get fresnelFactor(){return this.glossOverrideMaterial.uniforms.fresnelFactor.value}set fresnelFactor(e){this.glossOverrideMaterial.uniforms.fresnelFactor.value=e}dispose(){this.glossBuffer.dispose(),this.glossOverrideMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.glossBuffer.setSize(e,t),this.resolution.set(e,t),this.fsQuad.material.uniforms.screenSize.value.set(this.resolution.x,this.resolution.y,1/this.resolution.x,1/this.resolution.y)}render(e,t,i){const n=t.depthBuffer;t.depthBuffer=!1;const r=this.renderScene.overrideMaterial,o=this.renderScene.background;this.renderScene.background=null,e.setRenderTarget(this.glossBuffer),this.renderScene.overrideMaterial=this.glossOverrideMaterial,e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=r,this.renderScene.background=o;const a=this.fsQuad.material;a.uniforms.glossBuffer.value=this.glossBuffer.texture,a.uniforms.sceneColorBuffer.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.fsQuad.render(e)),t.depthBuffer=n}get vertexShader(){return`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `}get fragmentShader(){return`
      uniform sampler2D sceneColorBuffer;
      uniform sampler2D glossBuffer;
      uniform vec4 screenSize;
      uniform float glossEnabled;
      uniform float minGloss;
      uniform float maxGloss;


      varying vec2 vUv;

      vec4 getValue(sampler2D buffer, int x, int y) {
        return texture2D(buffer, vUv + screenSize.zw * vec2(x, y));
      }

      void main() {
        vec4 sceneColor = getValue(sceneColorBuffer, 0, 0);
        
        // Apply gloss effect
        vec3 gloss = getValue(glossBuffer, 0, 0).xyz;
        // Prevent the gloss from being zero, which would break normalize() later
        gloss = max(gloss, vec3(0.001));
        
        vec3 glossEffect = gloss * glossEnabled;

        // Map glossEffect to range [minGloss, maxGloss]
        // All dimensions of the glossEffect are the same, so we can use the x dimension.
        float mappedGloss = minGloss + (maxGloss - minGloss) * glossEffect.x;


        glossEffect = normalize(glossEffect) * mappedGloss;

        vec4 glossedColor = sceneColor + vec4(glossEffect, 0.0);

        // Prevent the glossed color from being darker than zero
        glossedColor = max(glossedColor, vec4(0.0, 0.0, 0.0, sceneColor.a));
        
        gl_FragColor = glossedColor;
      }
    `}createGlossMaterial(){return new Ye({uniforms:{sceneColorBuffer:{value:null},glossBuffer:{value:null},glossEnabled:{value:this._glossEnabled?1:0},minGloss:{value:-.12},maxGloss:{value:.8},screenSize:{value:new ks(this.resolution.x,this.resolution.y,1/this.resolution.x,1/this.resolution.y)}},vertexShader:this.vertexShader,fragmentShader:this.fragmentShader})}newRenderTarget(){const e=new Kt(this.resolution.x,this.resolution.y);return e.texture.colorSpace="srgb-linear",e.texture.format=As,e.texture.type=gn,e.texture.minFilter=vn,e.texture.magFilter=vn,e.texture.generateMipmaps=!1,e.stencilBuffer=!1,e}};var nc=(s=>(s[s.COLOR=0]="COLOR",s[s.PEN=1]="PEN",s[s.PEN_SHADOWS=2]="PEN_SHADOWS",s[s.COLOR_PEN=3]="COLOR_PEN",s[s.COLOR_SHADOWS=4]="COLOR_SHADOWS",s[s.COLOR_PEN_SHADOWS=5]="COLOR_PEN_SHADOWS",s))(nc||{});let Z0=class{constructor(e,t){E(this,"invisibleMaterials",new Set),E(this,"composer"),E(this,"onStyleChanged",new K),E(this,"_enabled",!1),E(this,"_initialized",!1),E(this,"_basePass"),E(this,"_aoPass"),E(this,"_outputPass"),E(this,"_edgeDetectionPass"),E(this,"_smaaPass"),E(this,"_simpleOutlinePass"),E(this,"_excludedObjectsPass"),E(this,"_glossPass"),E(this,"_style",0),E(this,"_outlinesEnabled",!1),E(this,"_glossEnabled",!1),E(this,"_smaaEnabled",!1),E(this,"_excludedObjectsEnabled",!1),E(this,"_components"),E(this,"_renderer"),E(this,"_needsUpdate",!0),E(this,"defaultAoParameters",{radius:.25,distanceExponent:5.7,thickness:10,scale:2,samples:16,distanceFallOff:1,screenSpaceRadius:!0}),this._components=e,this._renderer=t}get basePass(){if(!this._basePass)throw new Error("Base pass not initialized");return this._basePass}get enabled(){return this._enabled}set enabled(e){if(this._enabled=e,e&&!this._initialized&&this.initialize(),!e)for(const t of this.basePass.isolatedMaterials)t.visible=!0}get needsUpdate(){return this._needsUpdate}set needsUpdate(e){this._needsUpdate=e}get aoPass(){if(!this._aoPass)throw new Error("AO pass not initialized");return this._aoPass}get outlinePass(){if(!this._simpleOutlinePass)throw new Error("Outline pass not initialized");return this._simpleOutlinePass}get edgesPass(){if(!this._edgeDetectionPass)throw new Error("Edge detection pass not initialized");return this._edgeDetectionPass}get excludedObjectsPass(){if(!this._excludedObjectsPass)throw new Error("Excluded objects pass not initialized");return this._excludedObjectsPass}get glossPass(){if(!this._glossPass)throw new Error("Gloss pass not initialized");return this._glossPass}get outlinesEnabled(){return this._outlinesEnabled}set outlinesEnabled(e){this._outlinesEnabled=e,this.style=this._style}get excludedObjectsEnabled(){return this._excludedObjectsEnabled}set excludedObjectsEnabled(e){this._excludedObjectsEnabled=e,this.style=this._style}get glossEnabled(){return this._glossEnabled}set glossEnabled(e){this._glossEnabled=e,this.style=this._style}get smaaEnabled(){return this._smaaEnabled}set smaaEnabled(e){this._smaaEnabled=e,this.style=this._style}get style(){return this._style}set style(e){this.composer&&(!this.composer||!this._basePass||!this._smaaPass||!this._outputPass||!this._aoPass||!this._edgeDetectionPass||!this._simpleOutlinePass||!this._excludedObjectsPass||!this._glossPass||(this._style===2&&this._aoPass.updateGtaoMaterial(this.defaultAoParameters),this._style=e,this.clear(),e===0&&(this.composer.addPass(this._basePass),this._glossEnabled&&this.composer.addPass(this._glossPass),this._outlinesEnabled&&this.composer.addPass(this._simpleOutlinePass),this._excludedObjectsEnabled&&this.composer.addPass(this._excludedObjectsPass),this._smaaEnabled&&this.composer.addPass(this._smaaPass),this.composer.addPass(this._outputPass)),e===1&&(this.composer.addPass(this._edgeDetectionPass),this._outlinesEnabled&&this.composer.addPass(this._simpleOutlinePass),this._excludedObjectsEnabled&&this.composer.addPass(this._excludedObjectsPass),this._smaaEnabled&&this.composer.addPass(this._smaaPass)),e===2&&(this.composer.addPass(this._basePass),this.composer.addPass(this._aoPass),this._aoPass.output=tn.OUTPUT.AO,this.composer.addPass(this._edgeDetectionPass),this._outlinesEnabled&&this.composer.addPass(this._simpleOutlinePass),this._excludedObjectsEnabled&&this.composer.addPass(this._excludedObjectsPass),this._smaaEnabled&&this.composer.addPass(this._smaaPass),this.composer.addPass(this._outputPass)),e===3&&(this.composer.addPass(this._basePass),this._glossEnabled&&this.composer.addPass(this._glossPass),this.composer.addPass(this._edgeDetectionPass),this._outlinesEnabled&&this.composer.addPass(this._simpleOutlinePass),this._excludedObjectsEnabled&&this.composer.addPass(this._excludedObjectsPass),this._smaaEnabled&&this.composer.addPass(this._smaaPass),this.composer.addPass(this._outputPass)),e===4&&(this.composer.addPass(this._basePass),this._glossEnabled&&this.composer.addPass(this._glossPass),this.composer.addPass(this._aoPass),this._aoPass.output=tn.OUTPUT.Default,this._outlinesEnabled&&this.composer.addPass(this._simpleOutlinePass),this._excludedObjectsEnabled&&this.composer.addPass(this._excludedObjectsPass),this._smaaEnabled&&this.composer.addPass(this._smaaPass),this.composer.addPass(this._outputPass)),e===5&&(this.composer.addPass(this._basePass),this._glossEnabled&&this.composer.addPass(this._glossPass),this.composer.addPass(this._aoPass),this._aoPass.output=tn.OUTPUT.Default,this.composer.addPass(this._edgeDetectionPass),this._outlinesEnabled&&this.composer.addPass(this._simpleOutlinePass),this._excludedObjectsEnabled&&this.composer.addPass(this._excludedObjectsPass),this._smaaEnabled&&this.composer.addPass(this._smaaPass),this.composer.addPass(this._outputPass)),this.onStyleChanged.trigger(e)))}update(){if(this._needsUpdate&&this.composer){for(const e of this.invisibleMaterials)e.userData.wasVisibleForPostproduction=e.visible,e.visible=!1;this.composer.render();for(const e of this.invisibleMaterials)e.visible=e.userData.wasVisibleForPostproduction;this._needsUpdate=!1}}dispose(){var e,t,i,n,r,o,a,l;(e=this.composer)==null||e.dispose(),(t=this._aoPass)==null||t.dispose(),(i=this._outputPass)==null||i.dispose(),(n=this._edgeDetectionPass)==null||n.dispose(),(r=this._smaaPass)==null||r.dispose(),(o=this._simpleOutlinePass)==null||o.dispose(),(a=this._excludedObjectsPass)==null||a.dispose(),(l=this._glossPass)==null||l.dispose()}setSize(e,t){e===0||t===0||(this.composer&&this.composer.setSize(e,t),this._simpleOutlinePass&&this._simpleOutlinePass.setSize(e,t),this._excludedObjectsPass&&this._excludedObjectsPass.setSize(e,t),this._glossPass&&this._glossPass.setSize(e,t),this._needsUpdate=!0)}updateCamera(){const e=this._renderer.currentWorld.camera.three;this._basePass&&(this._basePass.camera=e),this._aoPass&&(this._aoPass.camera=e),this._needsUpdate=!0}clear(){if(!this.composer)return;const e=[...this.composer.passes];for(const t of e)this.composer.removePass(t);this._renderer.three.setClearColor(0,0),this._renderer.three.setRenderTarget(this.composer.renderTarget1),this._renderer.three.clear(),this._renderer.three.setRenderTarget(this.composer.renderTarget2),this._renderer.three.clear(),this._renderer.three.setRenderTarget(null),this._needsUpdate=!0}initialize(){this._initialized=!0;const e=this._renderer.currentWorld.scene.three,t=this._renderer.currentWorld.camera.three;this._renderer.three.setClearColor(0,0),this.composer=new N0(this._renderer.three);const i=new Y0(e,t);this._basePass=i,this._smaaPass=new H0,this._aoPass=new tn(e,t,this._renderer.three.domElement.width,this._renderer.three.domElement.height),this._aoPass.output=tn.OUTPUT.Default;const n=this._components.get(ue);this._edgeDetectionPass=new V0(this._renderer,n),this._outputPass=new j0,this._simpleOutlinePass=new W0(this._renderer.three.domElement.width,this._renderer.three.domElement.height,this._renderer.currentWorld),this._excludedObjectsPass=new q0(this._renderer,this._renderer.currentWorld),this._glossPass=new X0(new Me(this._renderer.three.domElement.width,this._renderer.three.domElement.height),this._renderer.currentWorld),this.style=0,this._needsUpdate=!0}},Q0=class extends Xp{constructor(e,t,i){super(e,t,i),E(this,"manualDefaultStyle",nc.COLOR),E(this,"turnOffOnManualMode",!0),E(this,"manualModeDelay",50),E(this,"_postproduction"),E(this,"_timeout"),E(this,"_previousStyle",nc.COLOR),E(this,"_previousEnabled",!1),this.onResize.add(n=>{this.setPostproductionSize(n)}),this.onWorldChanged.add(()=>{this.currentWorld&&(this._postproduction&&this._postproduction.dispose(),this._postproduction=new Z0(e,this),this._postproduction.onStyleChanged.add(n=>{this._previousStyle=n}),this.setPostproductionSize())})}get postproduction(){if(!this._postproduction)throw new Error("Renderer not initialized yet with a world!");return this._postproduction}update(){if(!this.enabled||!this.currentWorld||this.mode===jo.MANUAL&&!this.needsUpdate)return;this.needsUpdate=!1,this.onBeforeUpdate.trigger();const e=this.currentWorld.scene.three,t=this.currentWorld.camera.three;this.mode===jo.MANUAL&&(this.turnOffOnManualMode&&this.postproduction.enabled&&(this._previousEnabled=this.postproduction.enabled,this.postproduction.enabled=!1),this.manualDefaultStyle!==this.postproduction.style&&this.setStyleWithoutEvent(this.manualDefaultStyle)),this.postproduction.enabled?this.postproduction.update():this.three.render(e,t),e instanceof Ic&&this.three2D.render(e,t),this.mode===jo.MANUAL&&(this._timeout&&clearTimeout(this._timeout),this._timeout=setTimeout(()=>{this.turnOffOnManualMode&&(this.postproduction.enabled=this._previousEnabled),this.setStyleWithoutEvent(this._previousStyle),this.postproduction.update()},this.manualModeDelay)),this.onAfterUpdate.trigger()}dispose(){super.dispose(),this.postproduction.dispose()}setStyleWithoutEvent(e){this.postproduction.onStyleChanged.enabled=!1,this.postproduction.style=e,this.postproduction.onStyleChanged.enabled=!0}setPostproductionSize(e){if(e&&(e.x===0||e.y===0)||!this.container||!this._postproduction)return;const t=Math.min(window.devicePixelRatio,2),i=(e==null?void 0:e.x)??this.container.clientWidth*t,n=(e==null?void 0:e.y)??this.container.clientHeight*t;i===0||n===0||this.postproduction.setSize(i,n)}};const Md=new Ve,Do=new L;let Yc=class extends Mg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Zi(e,3)),this.setAttribute("uv",new Zi(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Ll(t,6,1);return this.setAttribute("instanceStart",new an(i,3,0)),this.setAttribute("instanceEnd",new an(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Ll(t,6,1);return this.setAttribute("instanceColorStart",new an(i,3,0)),this.setAttribute("instanceColorEnd",new an(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Og(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ve);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Md.setFromBufferAttribute(t),this.boundingBox.union(Md))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Do.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Do)),Do.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Do));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ro.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Uo.line={uniforms:zt.merge([Ro.common,Ro.fog,Ro.line]),vertexShader:`
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
		`};let Gc=class extends Ye{constructor(e){super({type:"LineMaterial",uniforms:zt.clone(Uo.line.uniforms),vertexShader:Uo.line.vertexShader,fragmentShader:Uo.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};const wl=new ks,Od=new L,kd=new L,st=new ks,nt=new ks,li=new ks,xl=new L,Cl=new Ee,rt=new Bt,Dd=new L,zo=new Ve,Io=new Xi,ci=new ks;let hi,Ss;function zd(s,e,t){return ci.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),ci.multiplyScalar(1/ci.w),ci.x=Ss/t.width,ci.y=Ss/t.height,ci.applyMatrix4(s.projectionMatrixInverse),ci.multiplyScalar(1/ci.w),Math.abs(Math.max(ci.x,ci.y))}function K0(s,e){const t=s.matrixWorld,i=s.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,n.count);for(let a=0,l=o;a<l;a++){rt.start.fromBufferAttribute(n,a),rt.end.fromBufferAttribute(r,a),rt.applyMatrix4(t);const c=new L,h=new L;hi.distanceSqToSegment(rt.start,rt.end,h,c),h.distanceTo(c)<Ss*.5&&e.push({point:h,pointOnLine:c,distance:hi.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function J0(s,e,t){const i=e.projectionMatrix,n=s.material.resolution,r=s.matrixWorld,o=s.geometry,a=o.attributes.instanceStart,l=o.attributes.instanceEnd,c=Math.min(o.instanceCount,a.count),h=-e.near;hi.at(1,li),li.w=1,li.applyMatrix4(e.matrixWorldInverse),li.applyMatrix4(i),li.multiplyScalar(1/li.w),li.x*=n.x/2,li.y*=n.y/2,li.z=0,xl.copy(li),Cl.multiplyMatrices(e.matrixWorldInverse,r);for(let d=0,u=c;d<u;d++){if(st.fromBufferAttribute(a,d),nt.fromBufferAttribute(l,d),st.w=1,nt.w=1,st.applyMatrix4(Cl),nt.applyMatrix4(Cl),st.z>h&&nt.z>h)continue;if(st.z>h){const f=st.z-nt.z,b=(st.z-h)/f;st.lerp(nt,b)}else if(nt.z>h){const f=nt.z-st.z,b=(nt.z-h)/f;nt.lerp(st,b)}st.applyMatrix4(i),nt.applyMatrix4(i),st.multiplyScalar(1/st.w),nt.multiplyScalar(1/nt.w),st.x*=n.x/2,st.y*=n.y/2,nt.x*=n.x/2,nt.y*=n.y/2,rt.start.copy(st),rt.start.z=0,rt.end.copy(nt),rt.end.z=0;const p=rt.closestPointToPointParameter(xl,!0);rt.at(p,Dd);const g=Wu.lerp(st.z,nt.z,p),m=g>=-1&&g<=1,v=xl.distanceTo(Dd)<Ss*.5;if(m&&v){rt.start.fromBufferAttribute(a,d),rt.end.fromBufferAttribute(l,d),rt.start.applyMatrix4(r),rt.end.applyMatrix4(r);const f=new L,b=new L;hi.distanceSqToSegment(rt.start,rt.end,b,f),t.push({point:b,pointOnLine:f,distance:hi.origin.distanceTo(b),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}}let Qp=class extends oe{constructor(e=new Yc,t=new Gc({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Od.fromBufferAttribute(t,o),kd.fromBufferAttribute(i,o),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Od.distanceTo(kd);const r=new Ll(n,2,1);return e.setAttribute("instanceDistanceStart",new an(r,1,0)),e.setAttribute("instanceDistanceEnd",new an(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;hi=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Ss=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Io.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Ss*.5;else{const d=Math.max(n.near,Io.distanceToPoint(hi.origin));c=zd(n,d,l.resolution)}if(Io.radius+=c,hi.intersectsSphere(Io)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),zo.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=Ss*.5;else{const d=Math.max(n.near,zo.distanceToPoint(hi.origin));h=zd(n,d,l.resolution)}zo.expandByScalar(h),hi.intersectsBox(zo)!==!1&&(i?K0(this,t):J0(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(wl),this.material.uniforms.resolution.value.set(wl.z,wl.w))}};class e_{constructor(e,t){E(this,"_components"),E(this,"_modelStyleGeometries",new Ue),E(this,"onDisposed",new K),E(this,"three",new Gi),E(this,"plane"),E(this,"items",new Ue),E(this,"world",null),E(this,"_visible",!1),this._components=e,this.plane=t,this.setupEvents()}set visible(e){e?this.world&&(this.world.scene.three.add(this.three),this._visible=!0):(this.three.removeFromParent(),this._visible=!1)}get visible(){return this._visible}setupEvents(){const e=this._components.get(Sl);this.items.guard=(t,{style:i})=>!!e.styles.get(i),this.items.onItemSet.add(({value:t})=>{const{style:i,data:n}=t;this.create(i,n)})}async getStyleMeshes(e,t){const i=this._components.get(Sl).styles.get(t);if(!i)throw new Error(`ClipStyler: "${t}" style not found.`);const n=this._components.get(ue),r=n.list.get(e);if(!r)throw new Error(`ClipEdges: model with id "${e}" not found.`);const{linesMaterial:o,fillsMaterial:a}=i;let l=this._modelStyleGeometries.get(e);l||(l=new Ue,this._modelStyleGeometries.set(e,l));let c=l.get(t);if(!c){let h;o&&(h=new Qp(new Yc,o),h.frustumCulled=!1,r&&n.applyBaseCoordinateSystem(h,await r.getCoordinationMatrix()),this.three.add(h));let d;a&&(d=new oe(new at,a),r&&n.applyBaseCoordinateSystem(d,await r.getCoordinationMatrix()),this.three.add(d)),c={edges:h,fills:d},l.set(t,c)}return c}async updateMeshes(e,t,i){const n=this._components.get(ue),r=n.list.get(e);if(!r)return;const o=this._components.get(ui),a=this.plane.clone(),l=(await r.getCoordinationMatrix()).clone().multiply(n.baseCoordinationMatrix.clone().invert());a.applyMatrix4(l),a.constant-=.01;const c=await r.getSection(a,i),{buffer:h,index:d,fillsIndices:u}=c,p=await this.getStyleMeshes(e,t),{edges:g,fills:m}=p,v=new At(h,3,!1);if(g){v.setUsage(Pg);const f=new at;f.setAttribute("position",v),f.setDrawRange(0,d);const b=new xa(f);g.geometry.fromLineSegments(b),o.destroy(b)}m&&(m.geometry.attributes.position=v,m.geometry.setIndex(u))}async create(e,t){if(!this._components.get(Sl).styles.get(e))throw new Error(`ClipEdges: "${e}" style not found.`);const i=this._components.get(Rb);let n=null;t&&(n=await i.find(t));const r=this._components.get(ue);if(n)for(const[o,a]of Object.entries(n))r.list.get(o)&&this.updateMeshes(o,e,[...a]);else for(const[o]of r.list)this.updateMeshes(o,e)}async update(e){for(const[t,{data:i,style:n}]of this.items)e&&!e.includes(t)||this.create(n,i)}dispose(){this._components.get(ui).destroy(this.three,!0,!0),this._modelStyleGeometries.clear()}}const Kp=class rc extends Oe{constructor(e){super(e),E(this,"onDisposed",new K),E(this,"enabled",!0),E(this,"world",null),E(this,"styles",new Ue),E(this,"list",new Ue),E(this,"_visible",!0),this.components.list.set(rc.uuid,this),this.setEvents()}get visible(){return this._visible}set visible(e){this._visible=e;for(const[,t]of this.list)t.visible=e}setEvents(){this.list.onBeforeDelete.add(({value:e})=>e.dispose())}setEdgesConfig(e,t){if(e.world=(t==null?void 0:t.world)??this.world,t!=null&&t.items)for(const[n,r]of Object.entries(t.items))e.items.set(n,r);const i=(t==null?void 0:t.id)??ot.create();this.list.set(i,e)}create(e,t){const i=new e_(this.components,e);return t&&this.setEdgesConfig(i,t),i}createFromView(e,t){const i=this.create(e.plane,t);return((t==null?void 0:t.link)===void 0||t.link)&&(e.onDisposed.add(()=>i.dispose()),e.onUpdated.add(()=>i.update()),e.onStateChanged.add(()=>i.visible=e.open)),i}createFromClipping(e,t){const i=this.components.get(Fi).list.get(e);if(!i)throw new Error(`ClipStyler: Clipping plane with ID ${e} not found.`);const n=this.create(i.three,t);return n.visible=!0,((t==null?void 0:t.link)===void 0||t.link)&&(i.onDraggingEnded.add(()=>n.update()),i.onDisposed.add(()=>n.dispose())),n}dispose(){this.styles.clear(),this.list.clear(),this.onDisposed.trigger(rc.uuid)}};E(Kp,"uuid","24dfc306-a3c4-410f-8071-babc4afa5e4d");let Sl=Kp;const Jp=class oc extends Oe{constructor(e){super(e),E(this,"onDisposed",new K),E(this,"onBeforeUpdate",new K),E(this,"onAfterUpdate",new K),E(this,"onSetup",new K),E(this,"isSetup",!1),E(this,"enabled",!0),E(this,"events",{}),E(this,"multiple","ctrlKey"),E(this,"zoomFactor",1.5),E(this,"zoomToSelection",!1),E(this,"backupColor",null),E(this,"selection",{}),E(this,"config",{selectName:"select",selectionColor:null,autoHighlightOnClick:!0,world:null,selectEnabled:!0,autoUpdateFragments:!0,selectMaterialDefinition:{color:new me("#BCF124"),renderedFaces:Hu.ONE,opacity:1,transparent:!1}}),E(this,"styles",new Ue),E(this,"autoToggle",new Set),E(this,"mouseDownPosition",{x:0,y:0}),E(this,"mouseMoveThreshold",5),E(this,"selectable",{}),E(this,"eventManager",new Ib),E(this,"_mouseState",{down:!1,moved:!1}),E(this,"_fromHighlight",!1),E(this,"restorePreviousColors",(t=this.selection.select)=>{for(const[i,n]of Object.entries(this.selection))if(!(i===this.config.selectName||!this.styles.get(i)))for(const[r,o]of Object.entries(t)){const a=n[r];if(!a)continue;const l=[...o].filter(c=>a.has(c));l.length!==0&&new Set(l)}}),E(this,"onMouseDown",t=>{this.enabled&&(this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.mouseDownPosition={x:t.clientX,y:t.clientY},this._mouseState.down=!0)}),E(this,"debounceTimeout",null),E(this,"onMouseUp",async t=>{if(!this.enabled)return;const{world:i,autoHighlightOnClick:n,selectEnabled:r}=this.config;if(!i)throw new Error("No world found!");if(!i.renderer)throw new Error("This world doesn't have a renderer!");if(t.target===i.renderer.three.domElement){if(this._mouseState.down=!1,this._mouseState.moved||t.button!==0){this._mouseState.moved=!1;return}if(this._mouseState.moved=!1,n&&r){const o=this.multiple==="none"?!0:!t[this.multiple];await this.highlight(this.config.selectName,o,this.zoomToSelection)}}}),E(this,"onMouseMove",async t=>{if(!this.enabled)return;const i=t.clientX-this.mouseDownPosition.x,n=t.clientY-this.mouseDownPosition.y,r=Math.sqrt(i*i+n*n);this._mouseState.moved||r>this.mouseMoveThreshold&&(this._mouseState.moved=this._mouseState.down)}),this.components.add(oc.uuid,this),this.eventManager.list.add(this.onSetup),this.eventManager.list.add(this.onDisposed),this.setStyleEvents()}setStyleEvents(){this.styles.onBeforeDelete.add(async({key:e})=>{if(await this.clear(e),delete this.selection[e],!(e in this.events))return;const{onClear:t,onHighlight:i,onBeforeHighlight:n}=this.events[e];this.eventManager.list.delete(t),this.eventManager.list.delete(i),this.eventManager.list.delete(n),delete this.events[e]}),this.styles.onItemSet.add(({key:e})=>{this.selection[e]={};const t=new K,i=new K,n=new K;this.events[e]={onHighlight:t,onClear:n,onBeforeHighlight:i},this.eventManager.add([n,t,i])})}async dispose(){this.setupEvents(!1),this.onBeforeUpdate.reset(),this.onAfterUpdate.reset(),this.selection={},this.styles.clear(),this.onDisposed.trigger(oc.uuid),this.eventManager.reset(),this.isSetup=!1}add(e){if(console.warn("highlighter.add() is deprecated, use highlighter.styles.set() instead"),typeof e=="string")this.styles.set(e,null);else{const{customId:t}=e;this.styles.set(t,e)}}async remove(e){console.warn("highlighter.remove() is deprecated, use highlighter.styles.delete() instead"),this.styles.delete(e)}async highlight(e,t=!0,i=this.zoomToSelection,n=null){if(!this.enabled)return;if(!this.config.world)throw new Error("No world found in config!");const r=this.config.world;if(!this.selection[e])throw new Error(`Selection ${e} does not exist.`);const o=await this.components.get(yt).get(r).castRay();if(!o||o.localId===void 0||o.localId===null){t&&this.clear(e);return}let a=o.fragments.modelId;const{localId:l}=o;o.fragments.isDeltaModel&&(a=o.fragments.parentModelId);const c={[a]:new Set([l])};await this.highlightByID(e,c,t,i,n,!0)}async highlightByID(e,t,i=!0,n=this.zoomToSelection,r=null,o=!1){var a;if(!this.enabled)return;this._fromHighlight=!0,this.events[e].onBeforeHighlight.trigger(this.selection[e]),i&&await this.clear(e);let l=Pe.clone(t);const c=this.components.get(ue);for(const[d,u]of Object.entries(t)){const p=c.list.get(d);p!=null&&p.isDeltaModel&&p.parentModelId&&Pe.add(l,{[p.parentModelId]:u})}const h=(a=this.selectable)==null?void 0:a[e];if(h){const d=Pe.clone(h);l=Pe.intersect([l,d])}if(r){const d=Pe.clone(r);for(const[u,p]of Object.entries(d)){const g=c.list.get(u);g!=null&&g.deltaModelId&&Pe.add(d,{[g.deltaModelId]:p})}Pe.remove(l,r)}if(o&&this.autoToggle.has(e)){const d={};let u=!1;for(const p in l){const g=this.selection[e][p];if(!g)continue;const m=l[p];for(const v of m)if(g.has(v)){g.delete(v);let f=d[p];f||(f=new Set,d[p]=f),f.add(v),u=!0}else g.add(v);l[p]=g}u&&(this.events[e].onClear.trigger(d),e===this.config.selectName&&this.restorePreviousColors(d))}this.updateStyleMap(e,l),this.events[e].onHighlight.trigger(this.selection[e]),this._fromHighlight=!1,await this.updateColors(),n&&await this.zoomSelection(l)}async updateColors(){const e=this.components.get(ue),t=[e.resetHighlight()];for(const[i,n]of Object.entries(this.selection)){const r=this.styles.get(i);if(!r)continue;const o=i==="select"||!this.styles.get(this.config.selectName)?n:this.getMapWithoutSelection(i);if(o){for(const[a,l]of Object.entries(o)){const c=e.list.get(a);c!=null&&c.deltaModelId&&Pe.add(o,{[c.deltaModelId]:l})}t.push(e.highlight({...r,customId:i},o))}}this.config.autoUpdateFragments&&t.push(e.core.update(!0)),await Promise.allSettled(t)}updateStyleMap(e,t){const i=this.selection[e];for(const n in t){let r=i[n];r||(r=new Set,i[n]=r);const o=t[n];for(const a of o)r.add(a)}if(e!==this.config.selectName)for(const[n,r]of Object.entries(this.selection)){if(n===this.config.selectName||n===e)continue;const o=r;for(const[a,l]of Object.entries(i)){const c=o[a];if(c)for(const h of l)c.delete(h)}}}getMapWithoutSelection(e,t){const i=this.selection[e];if(!i)throw new Error(`Style ${e} does not exist.`);const n=this.selection[this.config.selectName]??{},r={};for(const o in i){const a=i[o],l=e===this.config.selectName?new Set:n[o]??new Set,c=Array.from(a).filter(h=>{var d;return!l.has(h)&&(!t||((d=t[o])==null?void 0:d.has(h)))});c.length>0&&(r[o]=new Set(c))}return Object.keys(r).length>0?r:null}async clear(e,t){const i=e?[e]:Object.keys(this.selection),n=t??void 0;for(const r of i){const o=this.selection[r]??{},a=n??o;r===this.config.selectName&&this.restorePreviousColors();const l={};for(const[c,h]of Object.entries(a)){const d=o[c];if(d)for(const u of h){if(!d.delete(u))continue;let p=l[c];p||(p=new Set,l[c]=p),p.add(u)}}Object.keys(l).length>0&&this.events[r].onClear.trigger(l),this.selection[r]={}}this._fromHighlight||await this.updateColors()}setup(e){if(this.isSetup)return;this.config={...this.config,...e};const{selectName:t,selectionColor:i,selectMaterialDefinition:n}=this.config;this.config.world&&this.components.get(yt).get(this.config.world),n?(i&&(console.warn("highlighter.config.selectionColor is deprecated, use selectMaterialDefinition instead"),n.color=i),this.styles.set(t,n)):this.styles.set(t,null),this.autoToggle.add(this.config.selectName),this.setupEvents(!0),this.enabled=!0,this.isSetup=!0,this.onSetup.trigger(this)}async zoomSelection(e){if(!this.config.world)throw new Error("No world found in config!");const t=this.config.world;let i=!1;for(const m in e)if(e[m].size>0){i=!0;break}if(!i||!t.camera.hasCameraControls())return;const n=await this.components.get(ue).getBBoxes(e),r=new Xi,o=new Ve;for(const m of n)o.union(m);o.getBoundingSphere(r);const a=1/0,l=-1/0,{x:c,y:h,z:d}=r.center,u=r.radius===a||c===a||h===a||d===a,p=r.radius===l||c===l||h===l||d===l,g=r.radius===0;u||p||g||(r.radius*=this.zoomFactor,await t.camera.controls.fitToSphere(r,!0))}setupEvents(e){if(!this.config.world){console.log("No world found while setting up events!");return}if(this.config.world.isDisposing)return;if(!this.config.world.renderer)throw new Error("The given world doesn't have a renderer!");const t=this.config.world.renderer.three.domElement;t.removeEventListener("mousedown",this.onMouseDown),t.removeEventListener("mouseup",this.onMouseUp),t.removeEventListener("pointermove",this.onMouseMove),e&&(t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("pointermove",this.onMouseMove))}};E(Jp,"uuid","cb8a76f2-654a-4b50-80c6-66fd83cafd77");let fr=Jp;const ef=class tf extends Oe{constructor(){super(...arguments),E(this,"enabled",!0),E(this,"geometries",new Ue),E(this,"onDisposed",new K)}async get(e,t){const{material:i,applyTransformation:n}={applyTransformation:!0,...t},r=this.components.get(ue),o=new Ue;for(const[a,l]of Object.entries(e)){const c=r.list.get(a);if(!c)continue;const h=this.getModelMeshes(a);for(const d of l){let u=o.get(a);u||(u=new Ue,o.set(a,u));let p=h.get(d);if(p&&p.length>0){const v=[];for(const[f,{geometry:b,transform:y}]of p.entries()){const w=await this.createMesh(c,b,y,{material:i,applyTransformation:n});v.push(w)}u.set(d,v);continue}else p=[],h.set(d,p);const[g]=await c.getItemsGeometry([d]);if(!g)continue;const m=[];for(const v of g){const f=this.createGeometry(v);if(!f)continue;const{geometry:b,transform:y}=f;p.push(f);const w=await this.createMesh(c,b,y,{material:i,applyTransformation:n});m.push(w)}u.set(d,m)}}return o}getModelMeshes(e){let t=this.geometries.get(e);return t||(t=new Ue,this.geometries.set(e,t)),t}remove(e=[...this.geometries.keys()]){for(const t of e){const i=this.geometries.get(t);if(i){for(const[n,r]of i)for(const{geometry:o}of r)o.dispose();this.geometries.delete(t)}}}dispose(e=!0){this.remove(),e&&this.geometries.dispose(),this.onDisposed.trigger(tf.uuid)}getMeshesFromResult(e){const t=[];for(const i of e.values())for(const n of i.values())t.push(...n);return t}createGeometry(e){const{positions:t,indices:i,normals:n,transform:r}=e;if(!(t&&i&&n))return null;const o=new at;return o.setAttribute("position",new At(t,3)),o.setAttribute("normal",new At(n,3,!0)),o.setIndex(new At(i,1)),{geometry:o,transform:r}}async createMesh(e,t,i,n){const{material:r,applyTransformation:o}={applyTransformation:!0,...n},a=new oe(t,r);return a.applyMatrix4(i),a.applyMatrix4(e.object.matrixWorld),o||(a.position.set(0,0,0),a.rotation.set(0,0,0)),a}};E(ef,"uuid","ab45d0a7-feea-4afc-927c-80832dae76dd");let ia=ef;const t_=class ac extends Oe{constructor(e){super(e),E(this,"_world"),E(this,"styles",new tt),E(this,"outlinePositions",!1),E(this,"_mesh",null),E(this,"onDisposed",new K),E(this,"_meshes",[]),E(this,"_map",{}),E(this,"_activeStyles",new Set),E(this,"_styleCallbacks",{}),e.add(ac.uuid,this),this.setupEvents()}set world(e){this._world=e,e&&this.getRenderer().postproduction.excludedObjectsPass.addExcludedMaterial(this._points.material)}get world(){return this._world}get _points(){return this._mesh||(this._mesh=new Cg(new at,new Sg({size:10,sizeAttenuation:!1,depthTest:!1}))),this._mesh}get enabled(){return!this.world||this.world.isDisposing?!1:this.getRenderer().postproduction.outlinesEnabled}set enabled(e){if(!this.world||this.world.isDisposing)return;const t=this.getRenderer();t.postproduction.outlinesEnabled=e,this.outlinePositions&&(this._points.material.color=this.color,this.world.scene.three.add(this._points))}get color(){return this.getRenderer().postproduction.outlinePass.outlineColor}set color(e){this.getRenderer().postproduction.outlinePass.outlineColor.copy(e),this._points.material.color.copy(e)}get thickness(){return this.getRenderer().postproduction.outlinePass.thickness}set thickness(e){this.getRenderer().postproduction.outlinePass.thickness=e}get fillColor(){return this.getRenderer().postproduction.outlinePass.fillColor}set fillColor(e){this.getRenderer().postproduction.outlinePass.fillColor.copy(e)}get fillOpacity(){return this.getRenderer().postproduction.outlinePass.fillOpacity}set fillOpacity(e){const t=this.getRenderer().postproduction;t.outlinePass.fillOpacity=e}setupEvents(){const e=this.components.get(fr);this.styles.guard=t=>e.styles.has(t),this.styles.onItemAdded.add(t=>{const i=this.components.get(fr),n=()=>{this._activeStyles.add(t),this.updateFromStyles()},r=()=>{this._activeStyles.delete(t),this.updateFromStyles()};this._styleCallbacks[t]={onHighlight:n,onClear:r},i.events[t].onHighlight.add(n),i.events[t].onClear.add(r)}),this.styles.onBeforeDelete.add(t=>{const{onHighlight:i,onClear:n}=this._styleCallbacks[t];e.events[t].onHighlight.remove(i),e.events[t].onClear.remove(n),this._activeStyles.delete(t),delete this._styleCallbacks[t]}),e.styles.onItemDeleted.add(t=>this.styles.delete(t))}async updateFromStyles(){const e=this.components.get(fr),t=[];for(const n of this._activeStyles){const r=e.selection[n];r&&t.push(r)}const i=Pe.join(t);this._map=i,await this.update()}async update(e=this._map){if(e===this._map&&this.cleanMeshes(),this.outlinePositions&&this.updatePoints(),Object.keys(e).length===0)return;const t=this.components.get(ue),i=this.getRenderer().postproduction.outlinePass,n=await this.components.get(ia).get(e);for(const r of Object.keys(e))if(t.list.get(r))for(const[o,a]of n.entries()){const l=[...a.values()].flat();for(const c of l)this._meshes.push(c),i.scene.add(c)}}async addItems(e){Pe.add(this._map,e),await this.update(e)}async removeItems(e){Pe.remove(this._map,e),await this.update()}clean(){this._map={},this._activeStyles.clear(),this.cleanMeshes(),this._mesh&&this.components.get(ui).destroy(this._mesh,!0,!0),this._mesh=null}dispose(){this.styles.clear(),this.clean(),this.onDisposed.trigger(ac.uuid)}cleanMeshes(){for(const e of this._meshes)e.removeFromParent();this._meshes=[]}async updatePoints(){let e=0;for(const[i,n]of Object.entries(this._map))e+=n.size;this._points.geometry.setAttribute("position",new Zi(new Float32Array(e*3),3));const t=await this.components.get(ue).getPositions(this._map);for(let i=0;i<t.length;i++){const{x:n,y:r,z:o}=t[i];this._points.geometry.attributes.position.array[i*3]=n,this._points.geometry.attributes.position.array[i*3+1]=r,this._points.geometry.attributes.position.array[i*3+2]=o}this._points.geometry.attributes.position.needsUpdate=!0}getRenderer(){if(!this.world)throw new Error("You must set a world to use the outliner!");const e=this.world.renderer;if(!e.postproduction)throw new Error("The world given to the outliner must use the postproduction renderer.");return e}};E(t_,"uuid","2fd3bcc5-b3b6-4ded-9f64-f47a02854a10");const sf=class nf extends Oe{constructor(e){super(e),E(this,"onHoverStarted",new K),E(this,"onHoverEnded",new K),E(this,"HOVERER_OPACITY_KEY","_maxHoverOpacity"),E(this,"_hoverTimeout",null),E(this,"_meshes",new tt),E(this,"_localId",null),E(this,"_postproductionRenderer",null),E(this,"_fadeAnimation",null),E(this,"_world",null),E(this,"_enabled",!1),E(this,"_material",new Ds({color:16777215,transparent:!0,opacity:.5,depthTest:!1,userData:{[this.HOVERER_OPACITY_KEY]:.5}})),E(this,"onDisposed",new K),E(this,"duration",200),E(this,"animation",!0),E(this,"mouseStopTimeout",null),E(this,"onMouseMove",()=>{this.mouseStopTimeout!==null&&clearTimeout(this.mouseStopTimeout),this.mouseStopTimeout=window.setTimeout(()=>this.hover(),50)}),E(this,"onMouseLeave",()=>{this._meshes.clear(),this._postproductionRenderer&&(this._postproductionRenderer.postproduction.needsUpdate=!0)}),E(this,"animate",async()=>{if(!(this._fadeAnimation&&this.animation&&this.material.transparent))return;const{startTime:t,duration:i,fadeIn:n}=this._fadeAnimation,r=Date.now()-t,o=Math.min(r/i,1),a=n?o:1-o,l=this.material.userData[this.HOVERER_OPACITY_KEY],c=a*(l!==void 0?l:1);this.material.opacity=c,o<1?requestAnimationFrame(this.animate):(n||this._meshes.clear(),this._fadeAnimation=null,this.onHoverEnded.trigger(this)),this._postproductionRenderer&&(this._postproductionRenderer.postproduction.needsUpdate=!0)}),e.add(nf.uuid,this),this._meshes.onBeforeDelete.add(t=>{t.removeFromParent(),t.geometry.dispose(),this._postproductionRenderer&&(this._postproductionRenderer.postproduction.needsUpdate=!0)}),this._meshes.onItemAdded.add(t=>{this.world&&(this.world.scene.three.add(t),this._postproductionRenderer&&(this._postproductionRenderer.postproduction.needsUpdate=!0))}),this._meshes.onCleared.add(()=>{this._localId=null,this._hoverTimeout&&(clearTimeout(this._hoverTimeout),this._hoverTimeout=null),this._postproductionRenderer&&(this._postproductionRenderer.postproduction.needsUpdate=!0)})}set world(e){if(e){this.components.get(yt).get(e),this._world=e,this.setupEvents(!0);for(const t of this._meshes)e.scene.three.add(t);this.isWorldWithPost(this._world)&&this._world.renderer&&(this._postproductionRenderer=this._world.renderer)}else{this.setupEvents(!1),this._world=null;for(const t of this._meshes)t.removeFromParent()}}get world(){return this._world}set enabled(e){this.setupEvents(e),this._enabled=e}get enabled(){return this._enabled}set material(e){e.userData[this.HOVERER_OPACITY_KEY]=e.opacity;for(const t of this._meshes)t.material=e;this._material.dispose(),this._material=e}get material(){return this._material}setupEvents(e){if(!this.world||this.world.isDisposing)return;if(!this.world.renderer)throw new Error("The given world doesn't have a renderer!");const t=this.world.renderer.three.domElement;t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("mouseleave",this.onMouseLeave),e&&(t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave))}isWorldWithPost(e){return!!e&&e.renderer instanceof Q0}async hover(){if(!this.enabled||!this.world)return;const e=await this.components.get(yt).get(this.world).castRay();if(!e){this._meshes.clear(),this._postproductionRenderer&&(this._postproductionRenderer.postproduction.needsUpdate=!0);return}const{fragments:t,localId:i}=e;this._localId!==i&&(this._meshes.clear(),this._localId=i,this._hoverTimeout=window.setTimeout(async()=>{const n={[t.modelId]:new Set([i])},r=await this.components.get(ia).get(n);for(const[o,a]of r.entries()){const l=[...a.values()].flat();for(const c of l)c.material=this.material,this._meshes.add(c)}this._fadeAnimation={startTime:Date.now(),duration:this.duration,fadeIn:!0},this.onHoverStarted.trigger(this),this.animate(),this._postproductionRenderer&&(this._postproductionRenderer.postproduction.needsUpdate=!0)},100))}clear(){this._meshes.clear(),this._postproductionRenderer&&(this._postproductionRenderer.postproduction.needsUpdate=!0)}dispose(){this._enabled=!1,this._meshes.clear(),this._fadeAnimation=null,this._hoverTimeout=null,this.onHoverStarted.reset(),this._hoverTimeout=null,this.onDisposed.trigger()}};E(sf,"uuid","26fbd870-b1b2-4b71-b747-4063d484de1b");let i_=sf,s_=class{constructor(e){E(this,"alignments",[]),E(this,"enabled",!0),E(this,"world",null),E(this,"_raycastable",[]),E(this,"_components"),this._components=e}update(){this.dispose();for(const e of this.alignments)for(const t of e.children){const i=t;i.updateWorldMatrix(!0,!0);for(const n of i.children){const r=n;if(r.isLine2&&r.userData.points){const o=new at,a=new Xt;a.geometry.setIndex(r.geometry.index);const l=new Float32Array(r.userData.points),c=new At(l,3);o.setAttribute("position",c),a.geometry=o,a.userData.curve=r,a.applyMatrix4(r.matrixWorld),a.updateMatrixWorld(),this._raycastable.push(a)}}}}dispose(){for(const e of this._raycastable)e.geometry.dispose(),e.geometry=void 0;this._raycastable=[]}castRay(){if(!this.enabled||!this.world)return null;const e=this._components.get(yt).get(this.world).castRayToObjects(this._raycastable);if(!e)return null;const t=e.object,i=t.geometry,n=e.index,r=i.attributes.position.array[n*3],o=i.attributes.position.array[n*3+1],a=i.attributes.position.array[n*3+2],l=i.attributes.position.array[n*3+3],c=i.attributes.position.array[n*3+4],h=i.attributes.position.array[n*3+5],d=new L(l-r,c-o,h-a).normalize();return{point:e.point,normal:d,curve:t.userData.curve,alignment:t.userData.curve.parent}}},El=class{static alignmentPercentageToPoint(e,t){const i=new L,n=new L,r=this.alignmentLength(e),o=t*r;let a=0;if(e.updateWorldMatrix(!0,!0),t===1)for(let l=e.children.length-1;l>=0;l--){const c=e.children[l],h=c.userData.points;if(!h)continue;const d=new L(h[h.length-3],h[h.length-2],h[h.length-1]);return d.applyMatrix4(c.matrixWorld),{normal:new L,point:d,curve:c,alignment:e}}for(const l of e.children){const c=l.userData.points;if(c)for(let h=0;h<c.length-3;h+=3){const d=i.set(c[h],c[h+1],c[h+2]),u=n.set(c[h+3],c[h+4],c[h+5]),p=d.distanceTo(u);if(a+p>=o){const g=o-a,m=u.clone().sub(d).normalize(),v=m.clone().multiplyScalar(g);return d.add(v),d.applyMatrix4(l.matrixWorld),{normal:m,point:d,curve:l,alignment:e}}a+=p}}return null}static curvePercentageToPoint(e,t,i){const n=new L,r=new L,o=this.curveLength(t),a=i*o;let l=0;const c=t.userData.points;if(!c)throw new Error("No points found in curve");for(let h=0;h<c.length-3;h+=3){const d=n.set(c[h],c[h+1],c[h+2]),u=r.set(c[h+3],c[h+4],c[h+5]),p=d.distanceTo(u);if(l+p>=a){const g=a-l,m=u.clone().sub(d).normalize(),v=m.clone().multiplyScalar(g);return d.add(v),{normal:m,point:d,curve:t,alignment:e}}l+=p}return null}static alignmentLength(e){let t=0;if(e.userData.length!==void 0)return e.userData.length;for(const i of e.children)"isLine2"in i&&(t+=this.curveLength(i));return e.userData.length=t,t}static curveLength(e){let t=0;if(e.userData.length!==void 0)return e.userData.length;const i=new L,n=new L,r=e.userData.points;if(!r)throw new Error("No points found in curve");for(let o=0;o<r.length-2-3;o+=3){const a=i.set(r[o],r[o+1],r[o+2]),l=n.set(r[o+3],r[o+4],r[o+5]);t+=a.distanceTo(l)}return e.userData.length=t,t}static curvePointToAlignmentPercentage(e,t,i){const n=new L,r=new L,o=this.alignmentLength(e);let a=0;e.updateWorldMatrix(!0,!0);for(const l of e.children){const c=l.userData.points;if(c)for(let h=0;h<c.length-3;h+=3){const d=n.set(c[h],c[h+1],c[h+2]),u=r.set(c[h+3],c[h+4],c[h+5]);d.applyMatrix4(l.matrixWorld),u.applyMatrix4(l.matrixWorld);const p=d.distanceTo(u),g=d.distanceTo(t)<.001,m=u.distanceTo(t)<.001,v=this.isPointbetweenTwoOthers(d,u,t);if(l===i&&(g||m||v)){const f=d.distanceTo(t);return(a+f)/o}a+=p}}return null}static isPointbetweenTwoOthers(e,t,i){const n=new L;n.subVectors(t,e).normalize();const r=new L;r.subVectors(i,e).normalize();const o=new L;o.subVectors(i,t).normalize();const a=1-.0016;return n.dot(r)>a&&n.dot(o)<-a}},n_=class{constructor(e,t){E(this,"onDisposed",new K),E(this,"alignments",[]),E(this,"components"),E(this,"onMarkerChange",new K),E(this,"enabled",!0),E(this,"highlightMaterial"),E(this,"increments",20),E(this,"screenDistanceLimit",.1),E(this,"fadeInTime",500),E(this,"_mouseMarkers"),E(this,"_highlighted",new Set),E(this,"_stationPoints",new Map),E(this,"_originalHighlightMaterialId","originalHighlightMaterial"),E(this,"_world",null),E(this,"_raycaster"),E(this,"_stationLabelColor",new me(16777215)),E(this,"_stationLabelBackgroundColor",new me(8014801)),E(this,"_stationPointerColor",new me(16777215)),E(this,"_stationPointerBackgroundColor",new me(4803766)),E(this,"_pointerDown",performance.now()),E(this,"_pointerDownTime",150),E(this,"onPointerDown",()=>{this._pointerDown=performance.now()}),E(this,"onPointerUp",()=>{if(performance.now()-this._pointerDown>this._pointerDownTime)return;const i=this.setMarkerToMouse("select");i&&this.onMarkerChange.trigger(i)}),E(this,"onMouseMove",()=>{this.setMarkerToMouse("hover")}),this.components=e,this.highlightMaterial=t,this._raycaster=new s_(e),this._raycaster.alignments=this.alignments}get world(){return this._world}set world(e){var t,i,n,r;if(e===this._world||(this._world&&this.setupEvents(!1),this._world=e,(t=this._mouseMarkers)==null||t.hover.removeFromParent(),(i=this._mouseMarkers)==null||i.select.removeFromParent(),(n=this._mouseMarkers)==null||n.hover.element.remove(),(r=this._mouseMarkers)==null||r.select.element.remove(),!e))return;this._raycaster.world=e;const o=this.newCivilLabel(0,"stationPointer");e.scene.three.add(o),o.visible=!1,o.element.style.transition="";const a=this.newCivilLabel(0,"stationPointer");a.element.style.transition="",a.element.style.opacity="0.5",e.scene.three.add(a),a.visible=!1,this._mouseMarkers={select:o,hover:a},this.setupEvents(!0)}get stationLabelColor(){return this._stationLabelColor}set stationLabelColor(e){this._stationLabelColor=e;const t=`#${e.getHexString()}`;for(const[,{labels:i}]of this._stationPoints){const n=[...i.children];for(const r of n){const o=this.getLabel(r);o.style.color=t;const a=this.getPoint(r);a.style.backgroundColor=t}}}get stationLabelBackgroundColor(){return this._stationLabelBackgroundColor}set stationLabelBackgroundColor(e){this._stationLabelBackgroundColor=e;const t=`#${e.getHexString()}`;for(const[,{labels:i}]of this._stationPoints){const n=[...i.children];for(const r of n){const o=this.getLabel(r);o.style.backgroundColor=t;const a=this.getPoint(r);a.style.border=`2px solid ${t}`}}}get stationPointerColor(){return this._stationPointerColor}set stationPointerColor(e){this._stationPointerColor=e;const t=`#${e.getHexString()}`;if(this._mouseMarkers){const i=this._mouseMarkers.select,n=this.getLabel(i);n.style.color=t;const r=this.getPoint(i);r.style.backgroundColor=t}}get stationPointerBackgroundColor(){return this._stationPointerBackgroundColor}set stationPointerBackgroundColor(e){this._stationPointerBackgroundColor=e;const t=`#${e.getHexString()}`;if(this._mouseMarkers){const i=this._mouseMarkers.select,n=this.getLabel(i);n.style.backgroundColor=t;const r=this.getPoint(i);r.style.border=`2px solid ${t}`}}dispose(){var e,t,i,n;this.clearHighlight(),this.clearStations(),this.alignments=[],(e=this._mouseMarkers)==null||e.hover.removeFromParent(),(t=this._mouseMarkers)==null||t.select.removeFromParent(),(i=this._mouseMarkers)==null||i.hover.element.remove(),(n=this._mouseMarkers)==null||n.select.element.remove(),this._raycaster.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}updateAlignments(){this._raycaster.update()}setMarkerAtPoint(e,t){if(!this._mouseMarkers)throw new Error("No mouse markers found! Initialize the world before using this.");this.updateMarkerValue(e,t),this._mouseMarkers[t].visible=!0,this._mouseMarkers[t].position.copy(e.point)}highlight(e,t=!0){t&&this.clearHighlight(this._highlighted);for(const i of e.children)"isLineSegments2"in i&&"material"in i&&(i.userData[this._originalHighlightMaterialId]=i.material,i.material=this.highlightMaterial);this._highlighted.add(e)}clearHighlight(e=this._highlighted){for(const t of e)for(const i of t.children)"isLineSegments2"in i&&"material"in i&&(i.material=i.userData[this._originalHighlightMaterialId],delete i.userData[this._originalHighlightMaterialId]);this._highlighted.clear()}createStations(e){if(!this.world||this._stationPoints.has(e.uuid))return;const t=new Gi;this.world.scene.three.add(t),this._stationPoints.set(e.uuid,{alignment:e,labels:t})}clearStations(e=this._stationPoints.keys()){for(const t of e){const i=this._stationPoints.get(t);i&&(this.clearLabels(i.labels),this._stationPoints.delete(t))}}updateStations(){if(!this.world)throw new Error("No world found!");if(!this.world.renderer)throw new Error("No renderer found!");const e=this.world.camera.three,t=this.world.renderer.three,i=new Mc,n=t.clippingPlanes,r=new L,o=new L;let a=!0;const l=new L;for(const[,{alignment:c,labels:h}]of this._stationPoints){this.clearLabels(h),c.updateWorldMatrix(!0,!0);const d=c.userData.initialStation;let u=d||0;const p=u%this.increments;let g=d+this.increments-p;for(const m of c.children){if(!("isLine2"in m))continue;const v=m;if(v.geometry.boundingBox||v.geometry.computeBoundingBox(),i.setFromProjectionMatrix(new Ee().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),!i.intersectsBox(v.geometry.boundingBox)){const I=El.curveLength(m);u+=I;const R=u%this.increments;g=u+this.increments-R;continue}const f=m.userData.points,b=f[0],y=f[1],w=f[2];if(l.set(b,y,w),l.applyMatrix4(m.matrixWorld),!this.isLabelClipped(n,l)){if(a){a=!1,r.set(l.x,l.y,l.z),r.project(e),r.z=0;const I=this.newCivilLabel(u,"stationLabel");I.position.set(l.x,l.y,l.z),h.children.push(I)}else if(o.set(l.x,l.y,l.z),o.project(e),o.z=0,r.distanceTo(o)>this.screenDistanceLimit){const I=this.newCivilLabel(u,"stationLabel");I.position.set(l.x,l.y,l.z),h.children.push(I),r.copy(o)}}const S=new L,T=new L;for(let I=0;I<f.length-3;I+=3){S.set(f[I],f[I+1],f[I+2]),T.set(f[I+3],f[I+4],f[I+5]);const R=S.distanceTo(T),A=u+R,O=T.clone().sub(S).normalize();for(;A>g;){const _=g-u,$=O.clone();$.multiplyScalar(_);const{x:X,y:V,z:J}=S.clone().add($);if(l.set(X,V,J),l.applyMatrix4(m.matrixWorld),!this.isLabelClipped(n,l)&&i.containsPoint(l)&&(o.set(l.x,l.y,l.z),o.project(e),o.z=0,r.distanceTo(o)>this.screenDistanceLimit)){const W=this.newCivilLabel(g,"stationLabel");W.position.set(l.x,l.y,l.z),h.children.push(W),r.copy(o)}g+=this.increments}u+=R}const P=f[f.length-3],D=f[f.length-2],M=f[f.length-1];if(l.set(P,D,M),l.applyMatrix4(m.matrixWorld),!(this.isLabelClipped(n,l)||!i.containsPoint(l))&&(o.set(l.x,l.y,l.z),o.project(e),o.z=0,r.distanceTo(o)>this.screenDistanceLimit)){const I=this.newCivilLabel(u,"stationLabel");I.position.set(l.x,l.y,l.z),h.children.push(I),r.copy(o)}}}}getCursorValue(){if(!this._mouseMarkers)throw new Error("No mouse markers found! Initialize the world before using this.");return this._mouseMarkers.select.element.children[0].children[0].innerText}setCursorValue(e,t){if(!this._mouseMarkers)throw new Error("No mouse markers found! Initialize the world before using this.");const i=this._mouseMarkers[t].element.children[0].children[0];i.innerText=e}isLabelClipped(e,t){for(const i of e)if(!(i.distanceToPoint(t)>0))return!0;return!1}clearLabels(e){const t=[...e.children];for(const i of t)i.element.style.opacity="0";setTimeout(()=>{for(const i of t)i.removeFromParent(),i.element.remove(),i.visible=!1},this.fadeInTime)}newCivilLabel(e,t){const i=document.createElement("div"),n=t==="stationLabel"?this.stationLabelColor:this.stationPointerColor,r=t==="stationLabel"?this.stationLabelBackgroundColor:this.stationPointerBackgroundColor,o=document.createElement("div");o.style.width="4px",o.style.height="4px",o.style.borderRadius="50%",o.style.backgroundColor=`#${n.getHexString()}`,o.style.border=`2px solid #${r.getHexString()}`,o.style.display="flex",o.style.justifyContent="center";const a=this.getFormattedStation(e),l=document.createElement("div");l.innerText=a,l.style.backgroundColor=`#${r.getHexString()}`,l.style.color=`#${n.getHexString()}`,l.style.padding="0.3rem",l.style.position="absolute",l.style.bottom="1rem",l.style.borderRadius="6px",l.style.boxShadow="rgba(0, 0, 0, 0.6) 0px 4px 6px",o.appendChild(l);const c=new Gp(i);return i.appendChild(o),t==="stationLabel"&&(i.style.transition=`opacity ${this.fadeInTime}ms ease-in-out`,i.style.opacity="0",setTimeout(()=>{i.style.opacity="1"})),c}setupEvents(e){if(!this.world)throw new Error("No world found!");if(this.world.isDisposing||!this.world.renderer)return;const t=this.world.renderer.three.domElement,i=this.components.get(yt).get(this.world);i.three.params.Line||(i.three.params.Line={threshold:10}),t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointermove",this.onMouseMove),e&&(t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointermove",this.onMouseMove))}setMarkerToMouse(e){if(!this.enabled||!this._mouseMarkers)return null;if(!this.world)throw new Error("No world found!");const t=this._raycaster.castRay();if(!t)return this._mouseMarkers[e].visible=!1,null;this._mouseMarkers[e].visible=!0;const i=t.point;return this._mouseMarkers[e].position.copy(i),this.updateMarkerValue(t,e),t}updateMarkerValue(e,t){if(!this._mouseMarkers)return;const{alignment:i,curve:n,point:r}=e,o=El.curvePointToAlignmentPercentage(i,r,n);if(o===null)throw new Error("Point is not on the curve");const a=o*El.alignmentLength(i)+i.userData.initialStation,l=this.getFormattedStation(a);this.setCursorValue(l,t)}getFormattedStation(e){const t=Math.floor(e/1e3),i=Math.round(e-t*1e3);return`${t}+${i}`}getLabel(e){return e.element.children[0].children[0]}getPoint(e){return e.element.children[0]}};const r_=class rf extends Oe{constructor(e){super(e),E(this,"onDisposed",new K),E(this,"list",new Map),E(this,"enabled",!0),E(this,"highlightMaterial",new Gc({color:8014801,linewidth:5,depthTest:!1})),E(this,"_increments",20),E(this,"_screenDistanceLimit",.1),E(this,"_fadeInTime",500),E(this,"_stationLabelColor",new me(16777215)),E(this,"_stationLabelBackgroundColor",new me(8014801)),E(this,"_stationPointerColor",new me(16777215)),E(this,"_stationPointerBackgroundColor",new me(4803766)),this.components.add(rf.uuid,this)}get increments(){return this._increments}set increments(e){this._increments=e;for(const[,t]of this.list)t.increments=e}get screenDistanceLimit(){return this._screenDistanceLimit}set screenDistanceLimit(e){this._screenDistanceLimit=e;for(const[,t]of this.list)t.screenDistanceLimit=e}get fadeInTime(){return this._fadeInTime}set fadeInTime(e){this._fadeInTime=e;for(const[,t]of this.list)t.fadeInTime=e}get stationLabelColor(){return this._stationLabelColor}set stationLabelColor(e){this._stationLabelColor=e;for(const[,t]of this.list)t.stationLabelColor=e}get stationLabelBackgroundColor(){return this._stationLabelBackgroundColor}set stationLabelBackgroundColor(e){this._stationLabelBackgroundColor=e;for(const[,t]of this.list)t.stationLabelBackgroundColor=e}get stationPointerColor(){return this._stationPointerColor}set stationPointerColor(e){this._stationPointerColor=e;for(const[,t]of this.list)t.stationPointerColor=e}get stationPointerBackgroundColor(){return this._stationPointerBackgroundColor}set stationPointerBackgroundColor(e){this._stationPointerBackgroundColor=e;for(const[,t]of this.list)t.stationPointerBackgroundColor=e}create(e){const t=new n_(this.components,this.highlightMaterial);return this.list.set(e,t),t}delete(e){const t=this.list.get(e);t&&(t.dispose(),this.list.delete(e))}dispose(){for(const[,e]of this.list)e.dispose();this.onDisposed.trigger(),this.onDisposed.reset()}updateAlignments(){for(const[,e]of this.list)e.updateAlignments()}};E(r_,"uuid","0a59c09e-2b49-474a-9320-99f51f40f182");const o_=class of extends Oe{constructor(e){super(e),E(this,"enabled",!0),E(this,"onDisposed",new K),E(this,"_world",null),E(this,"_flip",!1),E(this,"_plane"),E(this,"_point",new L),E(this,"_edgeMeshes",[]),E(this,"_sectionVisible",!1),E(this,"_sectionOffset",.1),E(this,"edgeMaterial",new Gc({color:0,linewidth:5,depthTest:!1})),this.components.add(of.uuid,this)}get plane(){if(!this._plane)throw new Error("Plane is not set. You must give a world.");return this._plane}set plane(e){this._plane=e}get sectionVisible(){return this._sectionVisible}set sectionVisible(e){this._sectionVisible=e;for(const t of this._edgeMeshes)t.visible=e}get world(){return this._world}set world(e){var t;if(this._world=e,(t=this._plane)==null||t.dispose(),!e)return;const i=this.components.get(Fi),n=i.createFromNormalAndCoplanarPoint(e,new L(1,0,0),new L);this.plane=i.list.get(n),this.plane.visible=!1,this.plane.enabled=!1}get flip(){return this._flip}set flip(e){var t;if(e===this._flip)return;this._flip=e;const i=(t=this.plane)==null?void 0:t.normal.clone().multiplyScalar(-1);for(const n of this._edgeMeshes)n.position.add(i.clone().multiplyScalar(this._sectionOffset));this.plane.setFromNormalAndCoplanarPoint(i,this._point),this.plane.update()}dispose(){var e;this.clearMeshes(),(e=this.plane)==null||e.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}async set(e,t){this.flip&&t.multiplyScalar(-1),this.plane.setFromNormalAndCoplanarPoint(t,e),this._point.copy(e)}async update(){this.clearMeshes();const e=this.components.get(ue);this.plane.update();const t=[];for(const[,i]of e.list)t.push(this.generateModelSection(i));await Promise.all(t)}async generateModelSection(e){if(!this.world)return;const t=this.plane.three.clone();t.constant-=.01;const{buffer:i}=await e.getSection(t),n=new at,r=new At(i,3,!1);n.setAttribute("position",r);const o=new xa(n),a=new Yc;a.fromLineSegments(o);const l=new Qp(a,this.edgeMaterial);l.frustumCulled=!1,this.world.scene.three.add(l),this._edgeMeshes.push(l),l.renderOrder=3,o.geometry.dispose()}clearMeshes(){for(const e of this._edgeMeshes)e.removeFromParent(),e.geometry.dispose(),e.material=void 0;this._edgeMeshes=[]}};E(o_,"uuid","96b2c87e-d90b-4639-8257-8f01136fe324");const sn=class nn{constructor(e){E(this,"onDisposed",new K),E(this,"marker",null),E(this,"world",null),E(this,"_enabled",!1),E(this,"_components"),E(this,"_preview",document.createElement("div")),E(this,"_pointerVisible",!1),E(this,"_intersectionFound",!1),this._components=e;for(const t in nn.baseSnappingStyle){const i=nn.baseSnappingStyle[t];this._preview.style[t]=i}this._preview.style.zIndex="999",this._preview.style.pointerEvents="none",this._preview.style.position="fixed",this._preview.style.top="0",this._preview.style.left="0"}set enabled(e){this._enabled=e,this.marker&&(this.marker.visible=e),e&&this.get()}get enabled(){return this._enabled}dispose(){this.marker&&this.marker.dispose()}async get(e){const t=(e==null?void 0:e.world)??this.world;if(!t)throw new Error("GraphicVertexPicker: a world is need to get a casting result.");const i=await this._components.get(yt).get(t).castRay({snappingClasses:e==null?void 0:e.snappingClasses});if(this._intersectionFound=!!i,i){const{point:n}=i;if(!this.marker){const r=document.createElement("div");this.marker=new Cs(t,r)}if(this.marker.world!==t&&(this.marker.world=t,this.marker.three.removeFromParent(),t.scene.three.add(this.marker.three)),this.hidePointer(),this.marker.visible=!0,this.marker.three.position.copy(n),"snappingClass"in i&&typeof i.snappingClass=="number"&&(i.snappingClass===0||i.snappingClass===1||i.snappingClass===2)){const r=nn.snappingStyles[i.snappingClass]??nn.baseSnappingStyle;Object.assign(this.marker.three.element.style,r)}else Object.assign(this.marker.three.element.style,nn.baseSnappingStyle)}else this.marker&&(this.marker.visible=!1);return i}updatePointer(){if(!this.world||!this.marker)return;if(!this._intersectionFound){this.hidePointer();return}this.showPointer(),this.marker.visible&&(this.marker.visible=!1);const e=this._components.get(yt).get(this.world).mouse.rawPosition;this._preview.style.transform=`translate(-50%, -50%) translate(${e.x}px, ${e.y}px)`}showPointer(){var e;!this.world||this._pointerVisible||(this._pointerVisible=!0,(e=this.world.renderer.three.domElement.parentElement)==null||e.appendChild(this._preview))}hidePointer(){var e;!this.world||!this._pointerVisible||(this._pointerVisible=!1,(e=this.world.renderer.three.domElement.parentElement)==null||e.removeChild(this._preview))}};E(sn,"baseSnappingStyle",{height:"6px",width:"6px",borderRadius:"100%",borderWidth:"2px",borderColor:"rgb(122, 75, 209)",borderStyle:"solid",zIndex:"-20"}),E(sn,"snappingStyles",{[hn.FACE]:{...sn.baseSnappingStyle},[hn.POINT]:{...sn.baseSnappingStyle,borderColor:"#e25959",borderRadius:"0"},[hn.LINE]:{...sn.baseSnappingStyle,borderColor:"#2d2d2d",borderRadius:"0"}});let a_=sn;function af(){const s=document.createElement("div");return s.style.backgroundColor="blue",s.style.color="white",s.style.padding="6px",s.style.borderRadius="6px",s.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)",s.style.zIndex="-10",s}function l_(s={}){const{color:e="white",size:t="4px",border:i="2px solid blue",background:n="white"}=s,r=document.createElement("div");return r.style.backgroundColor=n,r.style.color=e,r.style.height=t,r.style.width=t,r.style.borderRadius="50%",r.style.border=i,r.style.zIndex="-20",r}let Yi=class extends Bt{constructor(){super(...arguments),E(this,"id",ot.create()),E(this,"_units","m"),E(this,"_rounding",2)}set units(e){this._units=e}get units(){return this._units}set rounding(e){this._rounding=e}get rounding(){return this._rounding}get value(){const e=this.distance();return yn.convertUnits(e,"m",this.units,this.rounding)}};class sa{constructor(e,t,i,n=2,r="m"){E(this,"label"),E(this,"boundingBox",new oe),E(this,"world"),E(this,"_components"),E(this,"_units","m"),E(this,"_rounding",2),E(this,"startNormal",null),E(this,"line"),E(this,"rectangleComponentLines",[]),E(this,"projectionComponentLines",[]),E(this,"_visible",!0),E(this,"_root",new Gi),E(this,"_endpoints",new tt),E(this,"lineElement"),E(this,"rectangleDimensions",new tt),E(this,"projectionDimensions",new tt),E(this,"isSelected",!1),E(this,"_latestRectangularInversion",!1),E(this,"_endpointElement",l_()),E(this,"_material"),E(this,"_componentsMaterial",new Dg({depthTest:!1,gapSize:.2,dashSize:.2,transparent:!0,opacity:.5,color:3026478})),E(this,"valueFormatter",null),this._components=e,this.world=t,this._material=i.lineMaterial,this._rounding=n,this._units=r,this.line=i.line,this.startNormal=i.startNormal??null,this.rectangleComponentLines=[new Yi,new Yi],this.updateRectangleComponents(),this.updateProjectionComponents(),this.lineElement=this.createLine(i),this._endpoints.onItemAdded.add(o=>{this._root.add(o.three);const a=this._endpoints.size===1?this.line.start:this.line.end;o.three.position.copy(a)}),this._endpoints.onBeforeDelete.add(o=>o.dispose()),this.createEndpoints();for(const o of this._endpoints)o.three.element.style.borderColor=`#${i.lineMaterial.color.getHexString()}`;this.label=this.newText(),this.label.three.element.style.backgroundColor=`#${i.lineMaterial.color.getHexString()}`,this.label.three.renderOrder=1,this._root.renderOrder=2,this.world.scene.three.add(this._root),this.setupEvents()}set units(e){for(const t of this.rectangleDimensions)t.units=e;for(const t of this.projectionDimensions)t.units=e;this._units=e,this.updateLabel()}get units(){return this._units}set rounding(e){for(const t of this.rectangleDimensions)t.rounding=e;for(const t of this.projectionDimensions)t.rounding=e;this._rounding=e,this.updateLabel()}get rounding(){return this._rounding}get visible(){return this._visible}set visible(e){for(const a of this.rectangleDimensions)a.visible=e;for(const a of this.projectionDimensions)a.visible=e;this._visible=e,this.label.visible=e;for(const a of this._endpoints)a.visible=e;const[t,i]=this._endpoints,n=t.three,r=i.three,o=this.label.three;e?(this.world.scene.three.add(this._root),this._root.add(o,n,r)):(o.removeFromParent(),n.removeFromParent(),r.removeFromParent(),this._root.removeFromParent())}set end(e){this.line.end=e;const t=this.lineElement.geometry.attributes.position;t.setXYZ(1,e.x,e.y,e.z),t.needsUpdate=!0,this.update()}set start(e){this.line.start=e;const t=this.lineElement.geometry.attributes.position;t.setXYZ(0,e.x,e.y,e.z),t.needsUpdate=!0,this.update()}setupEvents(){this.rectangleDimensions.onBeforeDelete.add(e=>e.dispose()),this.projectionDimensions.onBeforeDelete.add(e=>e.dispose())}dispose(){this.visible=!1;const e=this._components.get(ui);e.destroy(this._root),e.destroy(this.lineElement),this._endpoints.clear(),this.label.dispose(),this.boundingBox&&e.destroy(this.boundingBox),this.rectangleDimensions.clear(),this.projectionDimensions.clear(),this._components=null}applyPlanesVisibility(e){for(const t of this._endpoints){if(!t.wasVisible)continue;let i=!1;for(const n of e)if(n.distanceToPoint(t.three.position)<0){i=!0;break}t.three.visible=!i}if(this.label.wasVisible){let t=!1;const i=this.label.three.position;for(const n of e)if(n.distanceToPoint(i)<0){t=!0;break}this.label.three.visible=!t}for(const t of this.rectangleDimensions)t.applyPlanesVisibility(e);for(const t of this.projectionDimensions)t.applyPlanesVisibility(e)}createBoundingBox(){const e=new L;this.line.getCenter(e);const t=this.line.distance();this.boundingBox.geometry=new dt(1,1,t),this.boundingBox.position.copy(e),this.boundingBox.lookAt(this.line.end),this.boundingBox.visible=!1,this._root.add(this.boundingBox)}invertRectangularDimensions(){this.rectangleDimensions.size!==0&&(this.rectangleDimensions.clear(),this._latestRectangularInversion=!this._latestRectangularInversion,this.updateRectangleComponents(this._latestRectangularInversion),this.displayRectangularDimensions())}displayRectangularDimensions(){this.rectangleDimensions.clear();for(const e of this.rectangleComponentLines){const t=new sa(this._components,this.world,{line:e,lineMaterial:this._componentsMaterial,endpointElement:this.endpointElement});t.lineElement.computeLineDistances(),this.rectangleDimensions.add(t)}}displayProjectionDimensions(){this.projectionDimensions.clear();for(const e of this.projectionComponentLines){const t=new sa(this._components,this.world,{line:e,lineMaterial:this._componentsMaterial,endpointElement:this.endpointElement});t.lineElement.computeLineDistances(),this.projectionDimensions.add(t)}}set endpointElement(e){for(const t of this.rectangleDimensions)t.endpointElement=e;for(const t of this.projectionDimensions)t.endpointElement=e;this._endpointElement=e,this.createEndpoints()}get endpointElement(){return this._endpointElement}createEndpoints(){this._endpoints.clear();const e=new Cs(this.world,this._endpointElement),t=new Cs(this.world,this._endpointElement.cloneNode(!0));this._endpoints.add(e,t)}updateProjectionComponents(){if(!this.startNormal)return;const e=new Dt().setFromNormalAndCoplanarPoint(this.startNormal,this.line.start),t=new L;e.projectPoint(this.line.end,t);let[i]=this.projectionComponentLines;i||(i=new Yi,this.projectionComponentLines.push(i)),i.set(this.line.end,t),i.distance()<.01&&this.projectionComponentLines.shift();for(const n of this.projectionDimensions)n&&n.update()}updateRectangleComponents(e=!1){const t=e?this.line.end:this.line.start,i=e?this.line.start:this.line.end,n=new L;n.subVectors(i,t),Math.abs(i.y-t.y)>=.1?n.y=0:n.x=0;const r=t.clone().add(n),[o,a]=this.rectangleComponentLines;o.set(r,t),a.set(r,i);for(const l of this.rectangleDimensions)l.update()}updateLabel(){this.label.three.element.textContent=this.getTextContent();const e=new L;this.line.getCenter(e),this.label.three.position.copy(e)}updateGeometry(){this.updateRectangleComponents(),this.updateProjectionComponents(),[...this._endpoints][0].three.position.copy(this.line.start),[...this._endpoints][1].three.position.copy(this.line.end),this.lineElement.geometry.computeBoundingSphere()}update(){this.updateGeometry(),this.updateLabel()}set material(e){this._material.dispose(),this._material=e,this.lineElement.material=e}get material(){return this._material}createLine(e){const t=new at;t.setFromPoints([e.line.start,e.line.end]);const i=new Xt(t,e.lineMaterial);return this._root.add(i),i}newText(){const e=af();e.textContent=this.getTextContent();const t=new Cs(this.world,e),i=new L;return this.line.getCenter(i),t.three.position.copy(i),this._root.add(t.three),t}getTextContent(e=this.line.distance()){const t=yn.convertUnits(e,"m",this._units,this.rounding);return`${Ki.valueFormatter?Ki.valueFormatter(t):t.toFixed(this.rounding)} ${this._units}`}set color(e){const t=`#${e.getHexString()}`;this.label.three.element.style.backgroundColor=t;for(const i of this._endpoints)i.three.element.style.borderColor=t;this._material.color.set(e)}}let Xc=class lf{constructor(e){E(this,"id",ot.create()),E(this,"points",new tt),E(this,"tolerance",.005),E(this,"_plane",null),E(this,"_rounding",2),E(this,"_units","m2"),this.points.guard=t=>{const i=[...this.points].some(r=>r.equals(t)),n=this.isPointInPlane(t);return!i&&n},this.points.onItemAdded.add(t=>{if(this.plane){const i=new L;this.plane.projectPoint(t,i),t.copy(i)}this.points.size<3||this.points.size===3&&this.computePlane()}),this.points.onItemDeleted.add(()=>{this.points.size>=3||(this._plane=null)}),this.points.onCleared.add(()=>{this._plane=null}),e&&this.points.add(...e)}get plane(){return this._plane}get _coordinateSystem(){if(!this.plane)return null;const e=this.plane.normal,t=new L,i=new L;return Math.abs(e.x)>Math.abs(e.z)?t.set(-e.y,e.x,0).normalize():t.set(0,-e.z,e.y).normalize(),i.crossVectors(e,t).normalize(),{normal:e.clone(),x:t.clone(),y:i.clone()}}get points2D(){if(!this.plane)if(this.points.size>=3)this.computePlane();else return null;return[...this.points].map(e=>this.convertPointTo2D(e)).filter(e=>e!==null)}get center(){if(!this.plane||this.points.size<3)return null;const e=this.points2D;if(!e||e.length===0)return null;const t=e.reduce((i,n)=>i.add(n),new Me).divideScalar(e.length);return this.convertPointTo3D(t)}get value(){return yn.convertUnits(this.rawValue,"m2",this.units,this.rounding)}get rawValue(){const e=this.points2D;return e?Math.abs(kg.area(e)):0}get boundingBox(){if(this.points.size===0)return null;const e=new Ve;for(const t of this.points)e.expandByPoint(t);return e}get perimeter(){const e=this.points2D;if(!e||e.length<2)return 0;let t=0;for(let i=0;i<e.length;i++){const n=e[i],r=e[(i+1)%e.length];t+=n.distanceTo(r)}return t}set rounding(e){this._rounding=e}get rounding(){return this._rounding}set units(e){this._units=e}get units(){return this._units}isPointInPlane(e){if(!this.plane)return!0;const t=this.plane.distanceToPoint(e);return Math.abs(t)<this.tolerance}clone(){const e=new lf([...this.points]);return e.units=this.units,e.rounding=this.rounding,e.tolerance=this.tolerance,e}computePlane(){const[e,t,i]=this.points;if(!(e&&t&&i))return null;const n=new L().subVectors(t,e),r=new L().subVectors(i,e),o=new L().crossVectors(n,r).normalize();return this._plane=new Dt().setFromNormalAndCoplanarPoint(o,e),this.plane}convertPointTo2D(e){if(!this.isPointInPlane(e)||!this.plane)return null;const t=this._coordinateSystem;if(!t)return null;const i=new L;this.plane.projectPoint(e,i);const n=i.dot(t.x),r=i.dot(t.y);return new Me(n,r)}convertPointTo3D(e){if(!this.plane)return null;const t=this._coordinateSystem;if(!t)return null;const{x:i,y:n,normal:r}=t;return new L().addScaledVector(i,e.x).addScaledVector(n,e.y).addScaledVector(r,-this.plane.constant)}},cf=class hf{constructor(e){E(this,"_components"),E(this,"id",ot.create()),E(this,"onItemsChanged",new K),E(this,"_items",{}),E(this,"_units","m3"),E(this,"_rounding",2),this._components=e}set items(e){this._items=e,this.onItemsChanged.trigger()}get items(){return this._items}set units(e){this._units=e}get units(){return this._units}set rounding(e){this._rounding=e}get rounding(){return this._rounding}async getRawValue(){return await this._components.get(yn).getItemsVolume(this.items)}async getValue(){const e=await this.getRawValue();return yn.convertUnits(e,"m3",this.units,this.rounding)}async getCenter(){return await this._components.get(ea).getCenter(this.items)}async getBox(){const e=this._components.get(ea);e.list.clear(),await e.addFromModelIdMap(this.items);const t=e.get();return e.list.clear(),t}clone(){const e=new hf(this._components);return e.items=Pe.clone(this.items),e}};function c_(s,e,t=2){const i=s.length;let n=h_(s,0,i,t,!0);const r=[];if(!n||n.next===n.prev)return r;let o,a,l;if(s.length>80*t){o=1/0,a=1/0;let c=-1/0,h=-1/0;for(let d=t;d<i;d+=t){const u=s[d],p=s[d+1];u<o&&(o=u),p<a&&(a=p),u>c&&(c=u),p>h&&(h=p)}l=Math.max(c-o,h-a),l=l!==0?32767/l:0}return Sr(n,r,t,o,a,l,0),r}function h_(s,e,t,i,n){let r;if(n===x_(s,e,t,i)>0)for(let o=e;o<t;o+=i)r=Id(o/i|0,s[o],s[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Id(o/i|0,s[o],s[o+1],r);return r&&za(r,r.next)&&(Er(r),r=r.next),r}function Cr(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(za(t,t.next)||He(t.prev,t,t.next)===0)){if(Er(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Sr(s,e,t,i,n,r,o){if(!s)return;!o&&r&&m_(s,i,n,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?u_(s,i,n,r):d_(s)){e.push(l.i,s.i,c.i),Er(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=p_(Cr(s),e),Sr(s,e,t,i,n,r,2)):o===2&&f_(s,e,t,i,n,r):Sr(Cr(s),e,t,i,n,r,1);break}}}function d_(s){const e=s.prev,t=s,i=s.next;if(He(e,t,i)>=0)return!1;const n=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(n,r,o),d=Math.min(a,l,c),u=Math.max(n,r,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&dr(n,a,r,l,o,c,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function u_(s,e,t,i){const n=s.prev,r=s,o=s.next;if(He(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,h=n.y,d=r.y,u=o.y,p=Math.min(a,l,c),g=Math.min(h,d,u),m=Math.max(a,l,c),v=Math.max(h,d,u),f=lc(p,g,e,t,i),b=lc(m,v,e,t,i);let y=s.prevZ,w=s.nextZ;for(;y&&y.z>=f&&w&&w.z<=b;){if(y.x>=p&&y.x<=m&&y.y>=g&&y.y<=v&&y!==n&&y!==o&&dr(a,h,l,d,c,u,y.x,y.y)&&He(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=p&&w.x<=m&&w.y>=g&&w.y<=v&&w!==n&&w!==o&&dr(a,h,l,d,c,u,w.x,w.y)&&He(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=m&&y.y>=g&&y.y<=v&&y!==n&&y!==o&&dr(a,h,l,d,c,u,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=b;){if(w.x>=p&&w.x<=m&&w.y>=g&&w.y<=v&&w!==n&&w!==o&&dr(a,h,l,d,c,u,w.x,w.y)&&He(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function p_(s,e){let t=s;do{const i=t.prev,n=t.next.next;!za(i,n)&&df(i,t,t.next,n)&&na(i,n)&&na(n,i)&&(e.push(i.i,t.i,n.i),Er(t),Er(t.next),t=s=n),t=t.next}while(t!==s);return Cr(t)}function f_(s,e,t,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&b_(o,a)){let l=w_(o,a);o=Cr(o,o.next),l=Cr(l,l.next),Sr(o,e,t,i,n,r,0),Sr(l,e,t,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function m_(s,e,t,i){let n=s;do n.z===0&&(n.z=lc(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,g_(n)}function g_(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,t*=2}while(e>1);return s}function lc(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function v_(s,e,t,i,n,r,o,a){return(n-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(n-o)*(i-a)}function dr(s,e,t,i,n,r,o,a){return!(s===o&&e===a)&&v_(s,e,t,i,n,r,o,a)}function b_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!y_(s,e)&&(na(s,e)&&na(e,s)&&__(s,e)&&(He(s.prev,s,e.prev)||He(s,e.prev,e))||za(s,e)&&He(s.prev,s,s.next)>0&&He(e.prev,e,e.next)>0)}function He(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function za(s,e){return s.x===e.x&&s.y===e.y}function df(s,e,t,i){const n=$o(He(s,e,t)),r=$o(He(s,e,i)),o=$o(He(t,i,s)),a=$o(He(t,i,e));return!!(n!==r&&o!==a||n===0&&Lo(s,t,e)||r===0&&Lo(s,i,e)||o===0&&Lo(t,s,i)||a===0&&Lo(t,e,i))}function Lo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function $o(s){return s>0?1:s<0?-1:0}function y_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&df(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function na(s,e){return He(s.prev,s,s.next)<0?He(s,e,s.next)>=0&&He(s,s.prev,e)>=0:He(s,e,s.prev)<0||He(s,s.next,e)<0}function __(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function w_(s,e){const t=cc(s.i,s.x,s.y),i=cc(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Id(s,e,t,i){const n=cc(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Er(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function x_(s,e,t,i){let n=0;for(let r=e,o=t-i;r<t;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}let uf=class extends Cs{constructor(e){const t=document.createElement("div");t.style.backgroundColor="blue",t.style.color="white",t.style.padding="6px",t.style.borderRadius="6px",t.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)",t.style.zIndex="-10",super(e,t),E(this,"_value",0),E(this,"_units","m2"),E(this,"_worldUnits","m2"),E(this,"_color",new me),E(this,"_textColor",new me),E(this,"_rounding",2),this.three.renderOrder=1,t.textContent=this.formattedValue}set value(e){this._value=e,this.three.element.textContent=this.formattedValue}get value(){return this._value}set units(e){this._units=e,this.three.element.textContent=this.formattedValue}get units(){return this._units}set worldUnits(e){this._worldUnits=e,this.three.element.textContent=this.formattedValue}get worldUnits(){return this._worldUnits}set color(e){this._color=e;const t=`#${e.getHexString()}`;this.three.element.style.backgroundColor=t}get color(){return this._color}set textColor(e){this._textColor=e;const t=`#${e.getHexString()}`;this.three.element.style.color=t}get textColor(){return this._textColor}set rounding(e){this._rounding=e,this.three.element.textContent=this.formattedValue}get rounding(){return this._rounding}get formattedValue(){const e=yn.convertUnits(this.value,this.worldUnits,this.units,this.rounding);return`${Ki.valueFormatter?Ki.valueFormatter(e):e.toFixed(this.rounding)} ${this.units}`}},C_=class{constructor(e,t,i=new Xc){E(this,"_root",new Gi),E(this,"_components"),E(this,"_material",new Qo({color:"red",transparent:!0,opacity:.5,side:Si,depthTest:!1})),E(this,"_visible",!0),E(this,"_color",new me),E(this,"label"),E(this,"three",new oe),E(this,"world"),E(this,"area"),E(this,"_triggerUpdate",()=>this.update()),this._components=e,this.world=t,this.area=i,this.world.scene.three.add(this.three),this.label=new uf(t),this._root.renderOrder=2,this.visible=!0,this.update(),i.points.onItemAdded.add(this._triggerUpdate),i.points.onItemDeleted.add(this._triggerUpdate),i.points.onCleared.add(this._triggerUpdate)}set material(e){this._material.dispose(),this._material=e,this.three.material=e}get material(){return this._material}set visible(e){this._visible=e,this.label.visible=e;const t=this.label.three;e?(this._root.add(t,this.three),this.world.scene.three.add(this._root)):(t.removeFromParent(),this._root.removeFromParent())}get visible(){return this._visible}set rounding(e){this.label.rounding=e}get rounding(){return this.label.rounding}set units(e){this.label.units=e}get units(){return this.label.units}set color(e){this._color=e,this.label.color=e,this._material.color.set(e)}get color(){return this._color}applyPlanesVisibility(e){if(!this.label.wasVisible)return;let t=!1;const i=this.area.center;if(i){for(const n of e)if(n.distanceToPoint(i)<0){t=!0;break}}this.label.three.visible=!t}updateMesh(){if(this.area.points.size<3)return;const e=this.area.points2D;if(!e||e.length<3)return;const t=e.flatMap(o=>[o.x,o.y]),i=c_(t),n=[];for(const o of e){const a=this.area.convertPointTo3D(o);a&&n.push(a.x,a.y,a.z)}this.three.geometry&&this.three.geometry.dispose();const r=new at;r.setAttribute("position",new Zi(n,3)),r.setIndex(i),this.three.geometry=r,this.three.material=this.material}update(){if(this.updateMesh(),this.area.rawValue===0)this.label.visible=!1;else{this.label.value=this.area.rawValue,this.label.visible=!0;const e=this.area.center;e&&this.label.three.position.copy(e)}}dispose(){this.label.dispose(),this._components.get(ui).destroy(this._root,!0,!0),this.area.points.clear()}};const S_={length:"m",area:"m2",volume:"m3"};let pf=class{constructor(e,t,i=new cf(e)){E(this,"_root",new Gi),E(this,"_components"),E(this,"_material",new Qo({color:"red",transparent:!0,opacity:.75,side:Si,depthTest:!1})),E(this,"_visible",!0),E(this,"_color",new me),E(this,"label"),E(this,"world"),E(this,"volume"),E(this,"meshes",[]),this._components=e,this.world=t,this.volume=i,this.label=new uf(t),this._root.renderOrder=2,this.visible=!0,this.update(),this.volume.onItemsChanged.add(()=>this.update())}set material(e){this._material.dispose(),this._material=e;for(const t of this.meshes)t.material=e}get material(){return this._material}set visible(e){this._visible=e,this.label.visible=e;for(const t of this.meshes)e?this.world.scene.three.add(t):t.removeFromParent()}get visible(){return this._visible}set rounding(e){this.label.rounding=e}get rounding(){return this.label.rounding}set units(e){this.label.units=e}get units(){return this.label.units}set color(e){this._color=e,this.label.color=e,this._material.color.set(e)}get color(){return this._color}applyPlanesVisibility(e){if(!this.label.wasVisible)return;let t=!1;for(const i of this.meshes){for(const n of e)if(n.distanceToPoint(i.position)<0){t=!0;break}this.label.three.visible=!t}}async updateMesh(){this.cleanMeshes();const e=this._components.get(ia),t=await e.get(this.volume.items,{material:this.material});this.meshes=e.getMeshesFromResult(t);for(const i of this.meshes)this.world.scene.three.add(i)}async update(){this.updateMesh();const e=await this.volume.getRawValue();this.label.visible=e!==0,this.label.value=e;const t=await this.volume.getCenter();t&&this.label.three.position.copy(t)}cleanMeshes(){const e=this._components.get(ui);for(const t of this.meshes)e.destroy(t,!0,!0);this._components.get(ia).remove(),this.meshes=[]}dispose(){this.label.dispose(),this.cleanMeshes(),this.volume.items={}}},Ki=class extends Oe{constructor(e,t){super(e),E(this,"list",new tt),E(this,"onDisposed",new K),E(this,"snappings",[hn.LINE,hn.POINT,hn.FACE]),E(this,"lines",new tt),E(this,"fills",new tt),E(this,"labels",new tt),E(this,"volumes",new tt),E(this,"delay",300),E(this,"_world",null),E(this,"measureType"),E(this,"onPointerStop",new K),E(this,"onPointerMove",new K),E(this,"onStateChanged",new K),E(this,"pointerStopTimeout",null),E(this,"onMove",()=>{this.enabled&&(this._vertexPicker.updatePointer(),this.pointerStopTimeout!==null&&clearTimeout(this.pointerStopTimeout),this.pointerStopTimeout=window.setTimeout(()=>{this.onPointerStop.trigger()},this.delay),this.onPointerMove.trigger())}),E(this,"onKeydown",i=>{this.enabled&&i.key==="Escape"&&this.cancelCreation()}),E(this,"onEnabledChange",new K),E(this,"_enabled",!1),E(this,"onVisibilityChange",new K),E(this,"_visible",!0),E(this,"_units"),E(this,"_rounding",2),E(this,"_linesEndpointElement",af()),E(this,"_linesMaterial",new kc({color:"#0000FF",depthTest:!1})),E(this,"_fillsMaterial",new Qo({color:2392594,side:Si,transparent:!0,opacity:.3,depthTest:!1})),E(this,"_volumesMaterial",new Qo({color:2392594,side:Si,transparent:!0,opacity:.3,depthTest:!1})),E(this,"_color",new me),E(this,"_vertexPicker",new a_(this.components)),E(this,"create",i=>{}),E(this,"endCreation",i=>{}),E(this,"cancelCreation",()=>{}),E(this,"delete",i=>{}),this.measureType=t,this._units=S_[this.measureType],this.lines.onBeforeDelete.add(i=>i.dispose()),this.fills.onBeforeDelete.add(i=>i.dispose()),this.labels.onBeforeDelete.add(i=>i.dispose()),this.volumes.onBeforeDelete.add(i=>i.dispose()),this.list.onCleared.add(()=>{this.lines.clear(),this.fills.clear(),this.labels.clear(),this.volumes.clear()})}set world(e){this._world=e,this._vertexPicker.world=e}get world(){return this._world}get unitsList(){let e=[];return this.measureType==="length"?e=["mm","cm","m","km"]:this.measureType==="area"?e=["mm2","cm2","m2","km2"]:e=["mm3","cm3","m3","km3"],e}applyPlanesVisibility(e){for(const t of this.lines)t.applyPlanesVisibility(e);for(const t of this.fills)t.applyPlanesVisibility(e);for(const t of this.volumes)t.applyPlanesVisibility(e)}setEvents(e){if(!this.world)throw new Error("Measurement: you must specify a world first!");if(this.world.isDisposing)return;if(!this.world.renderer)throw new Error("Measurement: the world needs a renderer!");const t=this.world.renderer.three.domElement.parentElement;t&&(t.removeEventListener("pointermove",this.onMove),window.removeEventListener("keydown",this.onKeydown),e&&(t.addEventListener("pointermove",this.onMove),window.addEventListener("keydown",this.onKeydown)))}set enabled(e){this._enabled=e,this._vertexPicker.enabled=e,this.setEvents(e),this.cancelCreation(),this.onEnabledChange.trigger(e),this.onStateChanged.trigger(["enabled"])}get enabled(){return this._enabled}set visible(e){this._visible=e;for(const t of this.lines)t.visible=e;for(const t of this.fills)t.visible=e;for(const t of this.volumes)t.visible=e;this.onVisibilityChange.trigger(e),this.onStateChanged.trigger(["visibility"])}get visible(){return this._visible}set units(e){this._units=e;let t;e.endsWith("2")?t="area":e.endsWith("3")?t="volume":t="length";for(const i of this.list)(i instanceof Yi||i instanceof Xc||i instanceof cf)&&(i.units=e);if(t==="length")for(const i of this.lines)i.units=e;else if(t==="area")for(const i of this.fills)i.units=e;else if(t==="volume")for(const i of this.volumes)i.units=e;this.onStateChanged.trigger(["units"])}get units(){return this._units}set rounding(e){this._rounding=e;for(const t of this.list)"rounding"in t&&typeof t.rounding=="number"&&(t.rounding=e);for(const t of this.lines)t.rounding=e;for(const t of this.fills)t.rounding=e;for(const t of this.volumes)t.rounding=e;this.onStateChanged.trigger(["rounding"])}get rounding(){return this._rounding}set linesEndpointElement(e){this._linesEndpointElement=e;for(const t of this.lines)t.endpointElement=e}get linesEndpointElement(){return this._linesEndpointElement}set linesMaterial(e){this._linesMaterial.dispose(),this._linesMaterial=e;for(const t of this.lines)t.material=e}get linesMaterial(){return this._linesMaterial}set fillsMaterial(e){this._fillsMaterial.dispose(),this._fillsMaterial=e;for(const t of this.fills)t.material=e}get fillsMaterial(){return this._fillsMaterial}set volumesMaterial(e){this._volumesMaterial.dispose(),this._volumesMaterial=e;for(const t of this.volumes)t.material=e}get volumesMaterial(){return this._volumesMaterial}set color(e){this._color=e,this._linesMaterial.color.set(e),this._fillsMaterial.color.set(e),this._volumesMaterial.color.set(e);for(const t of this.lines)t.color=e;for(const t of this.fills)t.color=e;for(const t of this.volumes)t.color=e;this.onStateChanged.trigger(["color"])}get color(){return this._color}dispose(){this._vertexPicker.dispose(),this.list.clear(),this.linesMaterial.dispose(),this.fillsMaterial.dispose(),this.volumesMaterial.dispose(),this.onDisposed.trigger()}createLineElement(e,t=null){if(!this.world)throw new Error("Measurement: world is need!");return new sa(this.components,this.world,{line:e,startNormal:t??void 0,lineMaterial:this.linesMaterial,endpointElement:this.linesEndpointElement},this.rounding,this.units)}createFillElement(e){if(!this.world)throw new Error("Measurement: world is need!");const t=new C_(this.components,this.world,e);return t.rounding=this.rounding,(this.units.endsWith("2")?"area":void 0)==="area"&&(t.units=this.units),t}createVolumeElement(e){if(!this.world)throw new Error("Measurement: world is need!");const t=new pf(this.components,this.world,e);return t.rounding=this.rounding,(this.units.endsWith("3")?"volume":void 0)==="volume"&&(t.units=this.units),t}addLineElementsFromPoints(e){for(let t=0;t<e.length;t++){const i=e[t],n=e[(t+1)%e.length],r=new Yi(i,n),o=this.createLineElement(r);o.label.visible=!1,this.lines.add(o)}}getLineBoxes(){const e=[];for(const t of this.lines)e.push(t.boundingBox);return e}getFillBoxes(){const e=[];for(const t of this.fills)e.push(t.three);return e}async getVolumeBoxes(){const e=[];for(const t of this.volumes)e.push(t.meshes);return e}};E(Ki,"valueFormatter",null);const E_=class ff extends Ki{constructor(e){super(e,"area"),E(this,"pickTolerance",.1),E(this,"tolerance",.005),E(this,"modes",["free","square","face"]),E(this,"_mode","free"),E(this,"_temp",{isDragging:!1,area:new Xc,lines:new tt,point:new L}),E(this,"_lineToAreaMap",new WeakMap),E(this,"computeLineElements",()=>{this._temp.lines.clear();const t=[...this._temp.area.points];if(this._temp.area.isPointInPlane(this._temp.point)&&t.push(this._temp.point),!(t.length<2||!this.world))for(let i=0;i<t.length;i++){const n=t[i],r=t[(i+1)%t.length],o=new Yi(n,r),a=this.createLineElement(o);this._temp.lines.add(a)}}),E(this,"create",async()=>{if(!this.enabled)return;if(!this.world)throw new Error("Area Measurement: world is not defined!");const t=await this._vertexPicker.get({snappingClasses:this.snappings});if(!(t&&t.point))return;if(this.mode==="face"){const r=t.facePoints;if(!r)return;const o=[];for(let a=0;a<r.length-2;a+=3){const l=r[a],c=r[a+1],h=r[a+2];o.push(new L(l,c,h))}this._temp.area.points.add(...o),this.endCreation();return}const{area:i,point:n}=this._temp;if(this._temp.isDragging||(i.tolerance=this.tolerance,i.points.clear(),this._temp.isDragging=!0),i.points.size===0&&n.copy(t.point),i.points.add(n.clone()),this.mode==="square"&&i.points.size===2&&t.normal){const[r,o]=i.points,a=new L().subVectors(o,r),l=a.clone(),c=a.clone().negate();Math.abs(a.y)>=.1?(l.y=0,c.y=0):(l.x=0,c.x=0);const h=r.clone().add(l),d=o.clone().add(c);i.points.clear(),i.points.add(r,h,o,d),this.endCreation()}}),E(this,"endCreation",()=>{this.enabled&&(this._temp.isDragging=!1,this._temp.area.points.size>=3&&this.list.add(this._temp.area.clone()),this._temp.area.points.clear(),this._temp.lines.clear())}),E(this,"cancelCreation",()=>{this.enabled&&(this._temp.isDragging=!1,this._temp.area.points.clear(),this._temp.lines.clear())}),E(this,"delete",()=>{if(!this.enabled||this.list.size===0||!this.world)return;const t=this.getFillBoxes(),i=this.components.get(yt).get(this.world).castRayToObjects(t);if(!i)return;const n=[...this.fills].find(o=>o.three===i.object);if(!n)return;const r=n.area;this.fills.delete(n),this.list.delete(r),this.components.get(ui).destroy(i.object)}),e.add(ff.uuid,this),this.initHandlers(),this.color=new me("#6528d7")}get mode(){return this._mode}set mode(e){this._mode=e,this.cancelCreation(),this.onStateChanged.trigger(["mode"])}initHandlers(){this.onVisibilityChange.add(()=>{for(const e of this.lines)e.label.visible=!1}),this.list.onItemAdded.add(e=>{if(!this.world)return;const t=this.createFillElement(e);t.color=this.color,this.fills.add(t),this.addLineElementsFromPointsForArea([...e.points],e)}),this.list.onBeforeDelete.add(e=>{const t=[...this.fills].find(n=>n.area===e);t&&this.fills.delete(t);const i=[];for(const n of this.lines)this._lineToAreaMap.get(n)===e&&i.push(n);for(const n of i)this.lines.delete(n),this._lineToAreaMap.delete(n)}),this.onPointerStop.add(()=>this.updatePreview()),this._temp.lines.onItemAdded.add(e=>e.label.visible=!1),this._temp.lines.onBeforeDelete.add(e=>e.dispose()),this._temp.area.points.onItemAdded.add(()=>{this.computeLineElements()}),this._temp.area.points.onItemDeleted.add(()=>{this._temp.lines.clear()}),this.onStateChanged.add(e=>{e.includes("rounding")&&(this._temp.area.rounding=this.rounding),e.includes("units")&&(this._temp.area.units=this.units)})}async updatePreview(){if(!this.enabled||!this.world)throw new Error("Measurement is not enabled or world is not defined!");const e=await this._vertexPicker.get({snappingClasses:this.snappings});if(!(e&&e.point&&this._temp.isDragging))return;const t=e.point.clone(),{plane:i}=this._temp.area;if(i){const n=i.distanceToPoint(t);if(Math.abs(n)<.1){const r=new L;i.projectPoint(t,r),t.copy(r)}}this._temp.point.copy(t),this.computeLineElements()}addLineElementsFromPointsForArea(e,t){for(let i=0;i<e.length;i++){const n=e[i],r=e[(i+1)%e.length],o=new Yi(n,r),a=this.createLineElement(o);a.label.visible=!1,this.lines.add(a),this._lineToAreaMap.set(a,t)}}};E(E_,"uuid","09b78c1f-0ff1-4630-a818-ceda3d878c75");const T_=class mf extends Ki{constructor(e){super(e,"length"),E(this,"_temp",{isDragging:!1,line:new Yi}),E(this,"modes",["free","edge"]),E(this,"_mode","free"),E(this,"create",async()=>{if(this.enabled){if(!this._temp.isDragging){await this.initPreview();return}this.endCreation()}}),E(this,"endCreation",()=>{this.enabled&&this._temp.dimension&&(this.list.add(this._temp.line.clone()),this.mode==="free"&&(this._temp.dimension.dispose(),this._temp.dimension=void 0,this._temp.isDragging=!1,this._temp.startNormal=void 0))}),E(this,"cancelCreation",()=>{var t;this.enabled&&(this._temp.isDragging=!1,this._temp.dimension&&((t=this._temp.dimension)==null||t.dispose(),this._temp.dimension=void 0))}),E(this,"delete",()=>{if(!this.enabled||this.list.size===0||!this.world)return;const t=this.getLineBoxes(),i=this.components.get(yt).get(this.world).castRayToObjects(t);if(!i)return;const n=[...this.lines].find(r=>r.boundingBox===i.object);n&&this.list.delete(n.line)}),e.add(mf.uuid,this),this.initHandlers()}get mode(){return this._mode}set mode(e){this._mode=e,this.cancelCreation(),e==="edge"&&this.initPreview(),this.onStateChanged.trigger(["mode"])}get isDragging(){return this._temp.isDragging}initHandlers(){this.list.onItemAdded.add(e=>{const t=this.createLineElement(e,this._temp.startNormal);t.createBoundingBox(),this.lines.add(t)}),this.list.onBeforeDelete.add(e=>{const t=[...this.lines].find(i=>i.line===e);t&&this.lines.delete(t)}),this.onPointerStop.add(()=>this.updatePreviewLine()),this.onEnabledChange.add(e=>{e&&this.mode==="edge"&&this.initPreview()})}async initPreview(){if(!this.world)throw new Error("Measurement: world is need!");const e=await this._vertexPicker.get({snappingClasses:this.snappings});if(this.mode==="free"){if(!(e!=null&&e.point))return;const t=e.point;this._temp.line.set(t,t.clone()),this._temp.isDragging=!0,this._temp.dimension=this.createLineElement(this._temp.line),this._temp.startNormal=e.normal??void 0}else if(this.mode==="edge"){const t=e==null?void 0:e.snappedEdgeP1,i=e==null?void 0:e.snappedEdgeP2,n=t||new L,r=n||i;this._temp.line.set(n,r),this._temp.isDragging=!0,this._temp.dimension=this.createLineElement(this._temp.line),this._temp.dimension.visible=!!(t&&i)}}async updatePreviewLine(){if(!this.world)throw new Error("Measurement: world is need!");const e=await this._vertexPicker.get({snappingClasses:this.snappings});if(this.mode==="free"){if(!(e!=null&&e.point)||(this._temp.line.end.copy(e.point),!this._temp.dimension))return;this._temp.dimension.end=this._temp.line.end}else if(this.mode==="edge"){const t=e==null?void 0:e.snappedEdgeP1,i=e==null?void 0:e.snappedEdgeP2;if(this._temp.dimension&&(this._temp.dimension.visible=!!(t&&i)),!(t&&i)||(this._temp.line.start.copy(t),this._temp.line.end.copy(i),!this._temp.dimension))return;this._temp.dimension.start=this._temp.line.start,this._temp.dimension.end=this._temp.line.end}}};E(T_,"uuid","2f9bcacf-18a9-4be6-a293-e898eae64ea1");const A_=class gf extends Ki{constructor(e){super(e,"volume"),E(this,"_temp",{}),E(this,"modes",["free"]),E(this,"_mode","free"),E(this,"_previousHovererState",!1),E(this,"create",async()=>{if(!this.enabled)return;const t=await this._vertexPicker.get();t&&(this._temp.preview||await this.initPreview(),this._temp.preview.volume.items=Pe.join([this._temp.preview.volume.items,{[t.fragments.modelId]:new Set([t.localId])}]))}),E(this,"endCreation",()=>{if(!this._temp.preview||Pe.isEmpty(this._temp.preview.volume.items))return;const t=this._temp.preview.volume.clone();this.list.add(t),this._temp.preview.dispose(),delete this._temp.preview}),E(this,"cancelCreation",()=>{var t;(t=this._temp.preview)==null||t.dispose(),delete this._temp.preview}),E(this,"delete",async()=>{if(this.list.size===0||!this.world)return;const t=await this.getVolumeBoxes(),i=this.components.get(yt).get(this.world);for(const n of t){const r=i.castRayToObjects(n);if(!r)continue;const o=[...this.volumes].find(a=>a.meshes.some(l=>l===r.object));if(!o)return;this.list.delete(o.volume)}}),e.add(gf.uuid,this),this.initHandlers()}get mode(){return this._mode}set mode(e){this._mode=e,this.cancelCreation(),this.onStateChanged.trigger(["mode"])}initHandlers(){this.list.onItemAdded.add(e=>{const t=this.createVolumeElement(e);t.color=this.color,t.rounding=this.rounding,t.units=this.units,this.volumes.add(t)}),this.list.onBeforeDelete.add(e=>{const t=[...this.volumes].find(i=>i.volume===e);t&&this.volumes.delete(t)}),this.onStateChanged.add(e=>{if(e.includes("color")){if(!this._temp.preview)return;this._temp.preview.color=this.color}if(e.includes("units")){if(!this._temp.preview)return;this._temp.preview.units=this.units}if(e.includes("rounding")){if(!this._temp.preview)return;this._temp.preview.rounding=this.rounding}if(e.includes("enabled")){const t=this.components.get(i_);t.world=this.world,this.enabled?(this._previousHovererState=t.enabled,t.enabled=!0):(t.clear(),t.enabled=this._previousHovererState),t.hover()}})}async initPreview(){if(this.enabled){if(!this.world)throw new Error("Measurement: world is need!");this._temp.preview=new pf(this.components,this.world),this._temp.preview.color=this.color,this._temp.preview.rounding=this.rounding,this._temp.preview.units=this.units}}};E(A_,"uuid","01f885ab-ec4e-4e6c-a853-9dfc0d6766ed");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yo=globalThis,Zc=Yo.ShadowRoot&&(Yo.ShadyCSS===void 0||Yo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qc=Symbol(),Ld=new WeakMap;let vf=class{constructor(s,e,t){if(this._$cssResult$=!0,t!==Qc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o;const e=this.t;if(Zc&&s===void 0){const t=e!==void 0&&e.length===1;t&&(s=Ld.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),t&&Ld.set(e,s))}return s}toString(){return this.cssText}};const P_=s=>new vf(typeof s=="string"?s:s+"",void 0,Qc),Kc=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new vf(t,s,Qc)},M_=(s,e)=>{if(Zc)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=Yo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},$d=Zc?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return P_(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:O_,defineProperty:k_,getOwnPropertyDescriptor:D_,getOwnPropertyNames:z_,getOwnPropertySymbols:I_,getPrototypeOf:L_}=Object,_n=globalThis,Nd=_n.trustedTypes,$_=Nd?Nd.emptyScript:"",Bd=_n.reactiveElementPolyfillSupport,mr=(s,e)=>s,ra={toAttribute(s,e){switch(e){case Boolean:s=s?$_:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Jc=(s,e)=>!O_(s,e),Rd={attribute:!0,type:String,converter:ra,reflect:!1,useDefault:!1,hasChanged:Jc};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_n.litPropertyMetadata??(_n.litPropertyMetadata=new WeakMap);let rn=class extends HTMLElement{static addInitializer(s){this._$Ei(),(this.l??(this.l=[])).push(s)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(s,e=Rd){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(s)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(s,e),!e.noAccessor){const t=Symbol(),i=this.getPropertyDescriptor(s,t,e);i!==void 0&&k_(this.prototype,s,i)}}static getPropertyDescriptor(s,e,t){const{get:i,set:n}=D_(this.prototype,s)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){const o=i==null?void 0:i.call(this);n==null||n.call(this,r),this.requestUpdate(s,o,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(s){return this.elementProperties.get(s)??Rd}static _$Ei(){if(this.hasOwnProperty(mr("elementProperties")))return;const s=L_(this);s.finalize(),s.l!==void 0&&(this.l=[...s.l]),this.elementProperties=new Map(s.elementProperties)}static finalize(){if(this.hasOwnProperty(mr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mr("properties"))){const e=this.properties,t=[...z_(e),...I_(e)];for(const i of t)this.createProperty(i,e[i])}const s=this[Symbol.metadata];if(s!==null){const e=litPropertyMetadata.get(s);if(e!==void 0)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const e=[];if(Array.isArray(s)){const t=new Set(s.flat(1/0).reverse());for(const i of t)e.unshift($d(i))}else s!==void 0&&e.push($d(s));return e}static _$Eu(s,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof s=="string"?s.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var s;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(s=this.constructor.l)==null||s.forEach(e=>e(this))}addController(s){var e;(this._$EO??(this._$EO=new Set)).add(s),this.renderRoot!==void 0&&this.isConnected&&((e=s.hostConnected)==null||e.call(s))}removeController(s){var e;(e=this._$EO)==null||e.delete(s)}_$E_(){const s=new Map,e=this.constructor.elementProperties;for(const t of e.keys())this.hasOwnProperty(t)&&(s.set(t,this[t]),delete this[t]);s.size>0&&(this._$Ep=s)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return M_(s,this.constructor.elementStyles),s}connectedCallback(){var s;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(s=this._$EO)==null||s.forEach(e=>{var t;return(t=e.hostConnected)==null?void 0:t.call(e)})}enableUpdating(s){}disconnectedCallback(){var s;(s=this._$EO)==null||s.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(s,e,t){this._$AK(s,t)}_$ET(s,e){var t;const i=this.constructor.elementProperties.get(s),n=this.constructor._$Eu(s,i);if(n!==void 0&&i.reflect===!0){const r=(((t=i.converter)==null?void 0:t.toAttribute)!==void 0?i.converter:ra).toAttribute(e,i.type);this._$Em=s,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(s,e){var t,i;const n=this.constructor,r=n._$Eh.get(s);if(r!==void 0&&this._$Em!==r){const o=n.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((t=o.converter)==null?void 0:t.fromAttribute)!==void 0?o.converter:ra;this._$Em=r;const l=a.fromAttribute(e,o.type);this[r]=l??((i=this._$Ej)==null?void 0:i.get(r))??l,this._$Em=null}}requestUpdate(s,e,t,i=!1,n){var r;if(s!==void 0){const o=this.constructor;if(i===!1&&(n=this[s]),t??(t=o.getPropertyOptions(s)),!((t.hasChanged??Jc)(n,e)||t.useDefault&&t.reflect&&n===((r=this._$Ej)==null?void 0:r.get(s))&&!this.hasAttribute(o._$Eu(s,t))))return;this.C(s,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(s,e,{useDefault:t,reflect:i,wrapped:n},r){t&&!(this._$Ej??(this._$Ej=new Map)).has(s)&&(this._$Ej.set(s,r??e??this[s]),n!==!0||r!==void 0)||(this._$AL.has(s)||(this.hasUpdated||t||(e=void 0),this._$AL.set(s,e)),i===!0&&this._$Em!==s&&(this._$Eq??(this._$Eq=new Set)).add(s))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const s=this.scheduleUpdate();return s!=null&&await s,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i){const{wrapped:o}=r,a=this[n];o!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(s){}_$AE(s){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostUpdated)==null?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(s)),this.updated(s)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(s){return!0}update(s){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(s){}firstUpdated(s){}};rn.elementStyles=[],rn.shadowRootOptions={mode:"open"},rn[mr("elementProperties")]=new Map,rn[mr("finalized")]=new Map,Bd==null||Bd({ReactiveElement:rn}),(_n.reactiveElementVersions??(_n.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oa=globalThis,Ud=s=>s,aa=oa.trustedTypes,Fd=aa?aa.createPolicy("lit-html",{createHTML:s=>s}):void 0,bf="$lit$",ji=`lit$${Math.random().toFixed(9).slice(2)}$`,yf="?"+ji,N_=`<${yf}>`,Ps=document,Tr=()=>Ps.createComment(""),Ar=s=>s===null||typeof s!="object"&&typeof s!="function",eh=Array.isArray,B_=s=>eh(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Tl=`[ 	
\f\r]`,nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jd=/-->/g,Hd=/>/g,ms=RegExp(`>|${Tl}(?:([^\\s"'>=/]+)(${Tl}*=${Tl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vd=/'/g,Wd=/"/g,_f=/^(?:script|style|textarea|title)$/i,R_=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),th=R_(1),wn=Symbol.for("lit-noChange"),qe=Symbol.for("lit-nothing"),qd=new WeakMap,_s=Ps.createTreeWalker(Ps,129);function wf(s,e){if(!eh(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fd!==void 0?Fd.createHTML(e):e}const U_=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",o=nr;for(let a=0;a<t;a++){const l=s[a];let c,h,d=-1,u=0;for(;u<l.length&&(o.lastIndex=u,h=o.exec(l),h!==null);)u=o.lastIndex,o===nr?h[1]==="!--"?o=jd:h[1]!==void 0?o=Hd:h[2]!==void 0?(_f.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=ms):h[3]!==void 0&&(o=ms):o===ms?h[0]===">"?(o=n??nr,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?ms:h[3]==='"'?Wd:Vd):o===Wd||o===Vd?o=ms:o===jd||o===Hd?o=nr:(o=ms,n=void 0);const p=o===ms&&s[a+1].startsWith("/>")?" ":"";r+=o===nr?l+N_:d>=0?(i.push(c),l.slice(0,d)+bf+l.slice(d)+ji+p):l+ji+(d===-2?a:p)}return[wf(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let hc=class xf{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,h]=U_(e,t);if(this.el=xf.createElement(c,i),_s.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=_s.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(bf)){const u=h[o++],p=n.getAttribute(d).split(ji),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:g[2],strings:p,ctor:g[1]==="."?j_:g[1]==="?"?H_:g[1]==="@"?V_:Ia}),n.removeAttribute(d)}else d.startsWith(ji)&&(l.push({type:6,index:r}),n.removeAttribute(d));if(_f.test(n.tagName)){const d=n.textContent.split(ji),u=d.length-1;if(u>0){n.textContent=aa?aa.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],Tr()),_s.nextNode(),l.push({type:2,index:++r});n.append(d[u],Tr())}}}else if(n.nodeType===8)if(n.data===yf)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(ji,d+1))!==-1;)l.push({type:7,index:r}),d+=ji.length-1}r++}}static createElement(e,t){const i=Ps.createElement("template");return i.innerHTML=e,i}};function xn(s,e,t=s,i){var n,r;if(e===wn)return e;let o=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const a=Ar(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((r=o==null?void 0:o._$AO)==null||r.call(o,!1),a===void 0?o=void 0:(o=new a(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=xn(s,o._$AS(s,e.values),o,i)),e}let F_=class{constructor(s,e){this._$AV=[],this._$AN=void 0,this._$AD=s,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(s){const{el:{content:e},parts:t}=this._$AD,i=((s==null?void 0:s.creationScope)??Ps).importNode(e,!0);_s.currentNode=i;let n=_s.nextNode(),r=0,o=0,a=t[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new Br(n,n.nextSibling,this,s):a.type===1?l=new a.ctor(n,a.name,a.strings,this,s):a.type===6&&(l=new W_(n,this,s)),this._$AV.push(l),a=t[++o]}r!==(a==null?void 0:a.index)&&(n=_s.nextNode(),r++)}return _s.currentNode=Ps,i}p(s){let e=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(s,t,e),e+=t.strings.length-2):t._$AI(s[e])),e++}};class Br{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=qe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=xn(this,e,t),Ar(e)?e===qe||e==null||e===""?(this._$AH!==qe&&this._$AR(),this._$AH=qe):e!==this._$AH&&e!==wn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):B_(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==qe&&Ar(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ps.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=hc.createElement(wf(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)==null?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new F_(r,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=qd.get(e.strings);return t===void 0&&qd.set(e.strings,t=new hc(e)),t}k(e){eh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new Br(this.O(Tr()),this.O(Tr()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const n=Ud(e).nextSibling;Ud(e).remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}let Ia=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(s,e,t,i,n){this.type=1,this._$AH=qe,this._$AN=void 0,this.element=s,this.name=e,this._$AM=i,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=qe}_$AI(s,e=this,t,i){const n=this.strings;let r=!1;if(n===void 0)s=xn(this,s,e,0),r=!Ar(s)||s!==this._$AH&&s!==wn,r&&(this._$AH=s);else{const o=s;let a,l;for(s=n[0],a=0;a<n.length-1;a++)l=xn(this,o[t+a],e,a),l===wn&&(l=this._$AH[a]),r||(r=!Ar(l)||l!==this._$AH[a]),l===qe?s=qe:s!==qe&&(s+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!i&&this.j(s)}j(s){s===qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,s??"")}},j_=class extends Ia{constructor(){super(...arguments),this.type=3}j(s){this.element[this.name]=s===qe?void 0:s}};class H_ extends Ia{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==qe)}}let V_=class extends Ia{constructor(s,e,t,i,n){super(s,e,t,i,n),this.type=5}_$AI(s,e=this){if((s=xn(this,s,e,0)??qe)===wn)return;const t=this._$AH,i=s===qe&&t!==qe||s.capture!==t.capture||s.once!==t.once||s.passive!==t.passive,n=s!==qe&&(t===qe||i);i&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,s),this._$AH=s}handleEvent(s){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,s):this._$AH.handleEvent(s)}},W_=class{constructor(s,e,t){this.element=s,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(s){xn(this,s)}};const Yd=oa.litHtmlPolyfillSupport;Yd==null||Yd(hc,Br),(oa.litHtmlVersions??(oa.litHtmlVersions=[])).push("3.3.2");const q_=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new Br(e.insertBefore(Tr(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=globalThis;let Es=class extends rn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(s){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=q_(e,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return wn}};var Gd;Es._$litElement$=!0,Es.finalized=!0,(Gd=Pr.litElementHydrateSupport)==null||Gd.call(Pr,{LitElement:Es});const Xd=Pr.litElementPolyfillSupport;Xd==null||Xd({LitElement:Es});(Pr.litElementVersions??(Pr.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y_={attribute:!0,type:String,converter:ra,reflect:!1,hasChanged:Jc},G_=(s=Y_,e,t)=>{const{kind:i,metadata:n}=t;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,s,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,s,a),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function _t(s){return(e,t)=>typeof t=="object"?G_(s,e,t):((i,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(n,r):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X_(s){return _t({...s,state:!0,attribute:!1})}class Z_ extends mn{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Me(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}new L;new Ee;new Ee;new L;new L;class Q_{constructor(e,t){this._group=new Gi,this._frustum=new Mc,this._frustumMat=new Ee,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new kc({color:"#2e3338"}),this.numbers=new Gi,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=e,this._container=t;const i=this.newGrid(-1),n=this.newGrid(-2);this.grids={main:i,secondary:n},this._group.add(n,i,this.numbers)}set scaleX(e){this._scaleX=e,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(e){this._scaleY=e,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(e){this._offsetX=e,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(e){this._offsetY=e,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:e,secondary:t}=this.grids;e.removeFromParent(),t.removeFromParent(),e.geometry.dispose(),e.material.dispose(),t.geometry.dispose(),t.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const e=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(e);const{planes:t}=this._frustum,i=t[0].constant*-t[0].normal.x,n=t[1].constant*-t[1].normal.x,r=t[2].constant*-t[2].normal.y,o=t[3].constant*-t[3].normal.y,a=Math.abs(i-n),l=Math.abs(o-r),{clientWidth:c,clientHeight:h}=this._container,d=Math.max(c,h),u=Math.max(a,l)/d,p=Math.ceil(Math.log10(a/this.scaleX)),g=Math.ceil(Math.log10(l/this.scaleY)),m=10**(p-2)*this.scaleX,v=10**(g-2)*this.scaleY,f=m*this.gridsFactor,b=v*this.gridsFactor,y=Math.ceil(l/b),w=Math.ceil(a/f),S=Math.ceil(l/v),T=Math.ceil(a/m),P=m*Math.ceil(n/m),D=v*Math.ceil(r/v),M=f*Math.ceil(n/f),I=b*Math.ceil(r/b),R=[...this.numbers.children];for(const he of R)he.removeFromParent();this.numbers.children=[];const A=[],O=9*u,_=1e4,$=M+this._offsetX,X=Math.round(Math.abs($/this.scaleX)*_)/_,V=(w-1)*f,J=Math.round(Math.abs(($+V)/this.scaleX)*_)/_,W=Math.max(X,J).toString().length*O;let ne=Math.ceil(W/f)*f;for(let he=0;he<w;he++){let pe=M+he*f;A.push(pe,o,0,pe,r,0),pe=Math.round(pe*_)/_,ne=Math.round(ne*_)/_;const le=pe%ne;if(!(f<1||b<1)&&Math.abs(le)>.01)continue;const fe=this.newNumber((pe+this._offsetX)/this.scaleX),we=12*u;fe.position.set(pe,r+we,0)}for(let he=0;he<y;he++){const pe=I+he*b;A.push(n,pe,0,i,pe,0);const le=this.newNumber(pe/this.scaleY);let fe=12;le.element.textContent&&(fe+=4*le.element.textContent.length);const we=fe*u;le.position.set(n+we,pe,0)}const U=[];for(let he=0;he<T;he++){const pe=P+he*m;U.push(pe,o,0,pe,r,0)}for(let he=0;he<S;he++){const pe=D+he*v;U.push(n,pe,0,i,pe,0)}const B=new At(new Float32Array(A),3),re=new At(new Float32Array(U),3),{main:ie,secondary:ee}=this.grids;ie.geometry.setAttribute("position",B),ee.geometry.setAttribute("position",re)}newNumber(e){const t=document.createElement("bim-label");t.textContent=String(Math.round(e*100)/100);const i=new Z_(t);return this.numbers.add(i),i}newGrid(e){const t=new at,i=new xa(t,this.material);return i.frustumCulled=!1,i.renderOrder=e,i}isGridReady(){const e=this._camera.projectionMatrix.elements;for(let t=0;t<e.length;t++){const i=e[t];if(Number.isNaN(i))return!1}return!0}}var K_=Object.defineProperty,J_=Object.getOwnPropertyDescriptor,Rr=(s,e,t,i)=>{for(var n=J_(e,t),r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&K_(e,t,n),n};const Cf=class extends Es{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(e){if(this._gridColor=e,!(e&&this._grid))return;const t=Number(e.replace("#","0x"));Number.isNaN(t)||this._grid.material.color.setHex(t)}get gridColor(){return this._gridColor}set gridScaleX(e){this._gridScaleX=e,e&&this._grid&&(this._grid.scaleX=e)}get gridScaleX(){return this._gridScaleX}set gridScaleY(e){this._gridScaleY=e,e&&this._grid&&(this._grid.scaleY=e)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var e;return((e=this._grid)==null?void 0:e.offsetX)||0}set gridOffsetX(e){this._grid&&(this._grid.offsetX=e)}get gridOffsetY(){var e;return((e=this._grid)==null?void 0:e.offsetY)||0}set gridOffsetY(e){this._grid&&(this._grid.offsetY=e)}set components(e){this.dispose();const t=e.get(Sa).create();this._world=t,t.scene=new $c(e),t.scene.setup(),t.renderer=new Xp(e,this);const i=new Xu(e);t.camera=i;const n=new Q_(i.threeOrtho,this);this._grid=n,t.scene.three.add(n.get()),i.controls.addEventListener("update",()=>n.regenerate()),setTimeout(async()=>{t.camera.updateAspect(),i.set("Plan"),await i.controls.setLookAt(0,0,100,0,0,0),await i.projection.set("Orthographic"),i.controls.dollySpeed=3,i.controls.draggingSmoothTime=.085,i.controls.maxZoom=1e3,i.controls.zoom(4)})}get world(){return this._world}dispose(){var e;(e=this.world)==null||e.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return th`<slot></slot>`}};Cf.styles=Kc`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let kn=Cf;Rr([_t({type:String,attribute:"grid-color",reflect:!0})],kn.prototype,"gridColor");Rr([_t({type:Number,attribute:"grid-scale-x",reflect:!0})],kn.prototype,"gridScaleX");Rr([_t({type:Number,attribute:"grid-scale-y",reflect:!0})],kn.prototype,"gridScaleY");Rr([_t({type:Number,attribute:"grid-offset-x",reflect:!0})],kn.prototype,"gridOffsetX");Rr([_t({type:Number,attribute:"grid-offset-y",reflect:!0})],kn.prototype,"gridOffsetY");var ew=Object.defineProperty,ss=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&ew(e,t,n),n};const Sf=class extends Es{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new Ee,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=e=>Math.abs(e)<1e-10?0:e}set camera(e){this._camera=e,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:e}=this._matrix;this._cssMatrix3D=`matrix3d(
      ${this._epsilon(e[0])},
      ${this._epsilon(-e[1])},
      ${this._epsilon(e[2])},
      ${this._epsilon(e[3])},
      ${this._epsilon(e[4])},
      ${this._epsilon(-e[5])},
      ${this._epsilon(e[6])},
      ${this._epsilon(e[7])},
      ${this._epsilon(e[8])},
      ${this._epsilon(-e[9])},
      ${this._epsilon(e[10])},
      ${this._epsilon(e[11])},
      ${this._epsilon(e[12])},
      ${this._epsilon(-e[13])},
      ${this._epsilon(e[14])},
      ${this._epsilon(e[15])})
    `}render(){const e=this.size??this._defaults.size;return th`
      <style>
        .face,
        .cube {
          width: ${e}px;
          height: ${e}px;
          transform: translateZ(-300px) ${this._cssMatrix3D};
        }

        .face-right {
          translate: ${e/2}px 0 0;
        }

        .face-left {
          translate: ${-e/2}px 0 0;
        }

        .face-top {
          translate: 0 ${e/2}px 0;
        }

        .face-bottom {
          translate: 0 ${-e/2}px 0;
        }

        .face-front {
          translate: 0 0 ${e/2}px;
        }

        .face-back {
          translate: 0 0 ${-e/2}px;
        }
      </style>
      <div class="parent">
        <div class="cube">
          <div
            class="face x-direction face-right"
            @click=${()=>this.dispatchEvent(this._onRightClick)}
          >
            ${this.rightText}
          </div>
          <div
            class="face x-direction face-left"
            @click=${()=>this.dispatchEvent(this._onLeftClick)}
          >
            ${this.leftText}
          </div>
          <div
            class="face y-direction face-top"
            @click=${()=>this.dispatchEvent(this._onTopClick)}
          >
            ${this.topText}
          </div>
          <div
            class="face y-direction face-bottom"
            @click=${()=>this.dispatchEvent(this._onBottomClick)}
          >
            ${this.bottomText}
          </div>
          <div
            class="face z-direction face-front"
            @click=${()=>this.dispatchEvent(this._onFrontClick)}
          >
            ${this.frontText}
          </div>
          <div
            class="face z-direction face-back"
            @click=${()=>this.dispatchEvent(this._onBackClick)}
          >
            ${this.backText}
          </div>
        </div>
      </div>
    `}};Sf.styles=Kc`
    :host {
      position: absolute;
      z-index: 999;
      bottom: 1rem;
      right: 1rem;
    }

    .parent {
      perspective: 400px;
    }

    .cube {
      position: relative;
      transform-style: preserve-3d;
    }

    .face {
      position: absolute;
      display: flex;
      justify-content: center;
      user-select: none;
      align-items: center;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s;
      color: var(--bim-view-cube--c, white);
      font-size: var(--bim-view-cube--fz, --bim-ui_size-2xl);
    }

    .x-direction {
      // background-color: var(--bim-view-cube_x--bgc, #c93830DD);
      background-color: var(--bim-view-cube_x--bgc, #01a6bcde);
    }

    .x-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .y-direction {
      // background-color: var(--bim-view-cube_y--bgc, #54ff19DD);
      background-color: var(--bim-view-cube_y--bgc, #8d0ec8de);
    }

    .y-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .z-direction {
      // background-color: var(--bim-view-cube_z--bgc, #3041c9DD);
      background-color: var(--bim-view-cube_z--bgc, #2718afde);
    }

    .z-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .face-front {
      transform: rotateX(180deg);
    }

    .face-back {
      transform: rotateZ(180deg);
    }

    .face-top {
      transform: rotateX(90deg);
    }

    .face-bottom {
      transform: rotateX(270deg);
    }

    .face-right {
      transform: rotateY(-270deg) rotateX(180deg);
    }

    .face-left {
      transform: rotateY(-90deg) rotateX(180deg);
    }
  `;let ki=Sf;ss([_t({type:Number,reflect:!0})],ki.prototype,"size");ss([_t({type:String,attribute:"right-text",reflect:!0})],ki.prototype,"rightText");ss([_t({type:String,attribute:"left-text",reflect:!0})],ki.prototype,"leftText");ss([_t({type:String,attribute:"top-text",reflect:!0})],ki.prototype,"topText");ss([_t({type:String,attribute:"bottom-text",reflect:!0})],ki.prototype,"bottomText");ss([_t({type:String,attribute:"front-text",reflect:!0})],ki.prototype,"frontText");ss([_t({type:String,attribute:"back-text",reflect:!0})],ki.prototype,"backText");ss([X_()],ki.prototype,"_cssMatrix3D");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tw=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const iw={CHILD:2},sw=s=>(...e)=>({_$litDirective$:s,values:e});class nw{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=(s,e)=>{var t;const i=s._$AN;if(i===void 0)return!1;for(const n of i)(t=n._$AO)==null||t.call(n,e,!1),gr(n,e);return!0},la=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Ef=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),aw(e)}};function rw(s){this._$AN!==void 0?(la(this),this._$AM=s,Ef(this)):this._$AM=s}function ow(s,e=!1,t=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)gr(i[r],!1),la(i[r]);else i!=null&&(gr(i,!1),la(i));else gr(this,s)}const aw=s=>{s.type==iw.CHILD&&(s._$AP??(s._$AP=ow),s._$AQ??(s._$AQ=rw))};let lw=class extends nw{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,t){super._$AT(s,e,t),Ef(this),this.isConnected=s._$AU}_$AO(s,e=!0){var t,i;s!==this.isConnected&&(this.isConnected=s,s?(t=this.reconnected)==null||t.call(this):(i=this.disconnected)==null||i.call(this)),e&&(gr(this,s),la(this))}setValue(s){if(tw(this._$Ct))this._$Ct._$AI(s,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dc=()=>new cw;class cw{}const Al=new WeakMap,hw=sw(class extends lw{render(s){return qe}update(s,[e]){var t;const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=(t=s.options)==null?void 0:t.host,this.rt(this.ct=s.element)),qe}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=Al.get(e);t===void 0&&(t=new WeakMap,Al.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){var s,e;return typeof this.G=="function"?(s=Al.get(this.ht??globalThis))==null?void 0:s.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var dw=Object.defineProperty,uw=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&dw(e,t,n),n};const Tf=class extends Es{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=dc()}set components(e){var t;if(this._components=e,this.components){const i=this.components.get(Sa);this.world=i.create(),this.world.name=this.name}else(t=this.world)==null||t.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:e}=this._viewport;if(!(this.components&&e&&this.world))return;const t=new $c(this.components);this.world.scene=t,t.setup(),t.three.background=null;const i=new nv(this.components,e);this.world.renderer=i;const n=new Xu(this.components);this.world.camera=n;const r=this.components.get(Zu).create(this.world);r.material.uniforms.uColor.value=new me(4342338),r.material.uniforms.uSize1.value=2,r.material.uniforms.uSize2.value=8}onSlotChange(){const e=new Event("slotchange");this.dispatchEvent(e)}render(){return th` <bim-viewport ${hw(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};Tf.styles=Kc``;let Af=Tf;uw([_t({type:String,reflect:!0})],Af.prototype,"name");var pw=Object.defineProperty,fw=(s,e,t)=>e in s?pw(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,gs=(s,e,t)=>(fw(s,typeof e!="symbol"?e+"":e,t),t);const Cn=Math.min,wi=Math.max,ca=Math.round,Ji=s=>({x:s,y:s}),mw={left:"right",right:"left",bottom:"top",top:"bottom"},gw={start:"end",end:"start"};function Zd(s,e,t){return wi(s,Cn(e,t))}function Ur(s,e){return typeof s=="function"?s(e):s}function Ai(s){return s.split("-")[0]}function La(s){return s.split("-")[1]}function Pf(s){return s==="x"?"y":"x"}function Mf(s){return s==="y"?"height":"width"}const vw=new Set(["top","bottom"]);function _i(s){return vw.has(Ai(s))?"y":"x"}function Of(s){return Pf(_i(s))}function bw(s,e,t){t===void 0&&(t=!1);const i=La(s),n=Of(s),r=Mf(n);let o=n==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(o=ha(o)),[o,ha(o)]}function yw(s){const e=ha(s);return[uc(s),e,uc(e)]}function uc(s){return s.replace(/start|end/g,e=>gw[e])}const Qd=["left","right"],Kd=["right","left"],_w=["top","bottom"],ww=["bottom","top"];function xw(s,e,t){switch(s){case"top":case"bottom":return t?e?Kd:Qd:e?Qd:Kd;case"left":case"right":return e?_w:ww;default:return[]}}function Cw(s,e,t,i){const n=La(s);let r=xw(Ai(s),t==="start",i);return n&&(r=r.map(o=>o+"-"+n),e&&(r=r.concat(r.map(uc)))),r}function ha(s){return s.replace(/left|right|bottom|top/g,e=>mw[e])}function Sw(s){return{top:0,right:0,bottom:0,left:0,...s}}function kf(s){return typeof s!="number"?Sw(s):{top:s,right:s,bottom:s,left:s}}function Sn(s){const{x:e,y:t,width:i,height:n}=s;return{width:i,height:n,top:t,left:e,right:e+i,bottom:t+n,x:e,y:t}}function Jd(s,e,t){let{reference:i,floating:n}=s;const r=_i(e),o=Of(e),a=Mf(o),l=Ai(e),c=r==="y",h=i.x+i.width/2-n.width/2,d=i.y+i.height/2-n.height/2,u=i[a]/2-n[a]/2;let p;switch(l){case"top":p={x:h,y:i.y-n.height};break;case"bottom":p={x:h,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-n.width,y:d};break;default:p={x:i.x,y:i.y}}switch(La(e)){case"start":p[o]-=u*(t&&c?-1:1);break;case"end":p[o]+=u*(t&&c?-1:1);break}return p}const Ew=async(s,e,t)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:o}=t,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:s,floating:e,strategy:n}),{x:h,y:d}=Jd(c,i,l),u=i,p={},g=0;for(let m=0;m<a.length;m++){const{name:v,fn:f}=a[m],{x:b,y,data:w,reset:S}=await f({x:h,y:d,initialPlacement:i,placement:u,strategy:n,middlewareData:p,rects:c,platform:o,elements:{reference:s,floating:e}});h=b??h,d=y??d,p={...p,[v]:{...p[v],...w}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(u=S.placement),S.rects&&(c=S.rects===!0?await o.getElementRects({reference:s,floating:e,strategy:n}):S.rects),{x:h,y:d}=Jd(c,u,l)),m=-1)}return{x:h,y:d,placement:u,strategy:n,middlewareData:p}};async function Df(s,e){var t;e===void 0&&(e={});const{x:i,y:n,platform:r,rects:o,elements:a,strategy:l}=s,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=Ur(e,s),g=kf(p),m=a[u?d==="floating"?"reference":"floating":d],v=Sn(await r.getClippingRect({element:(t=await(r.isElement==null?void 0:r.isElement(m)))==null||t?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),f=d==="floating"?{x:i,y:n,width:o.floating.width,height:o.floating.height}:o.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),y=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},w=Sn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:f,offsetParent:b,strategy:l}):f);return{top:(v.top-w.top+g.top)/y.y,bottom:(w.bottom-v.bottom+g.bottom)/y.y,left:(v.left-w.left+g.left)/y.x,right:(w.right-v.right+g.right)/y.x}}const Tw=function(s){return s===void 0&&(s={}),{name:"flip",options:s,async fn(e){var t,i;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...v}=Ur(s,e);if((t=r.arrow)!=null&&t.alignmentOffset)return{};const f=Ai(n),b=_i(a),y=Ai(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),S=u||(y||!m?[ha(a)]:yw(a)),T=g!=="none";!u&&T&&S.push(...Cw(a,m,g,w));const P=[a,...S],D=await Df(e,v),M=[];let I=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&M.push(D[f]),d){const _=bw(n,o,w);M.push(D[_[0]],D[_[1]])}if(I=[...I,{placement:n,overflows:M}],!M.every(_=>_<=0)){var R,A;const _=(((R=r.flip)==null?void 0:R.index)||0)+1,$=P[_];if($&&(!(d==="alignment"&&b!==_i($))||I.every(V=>_i(V.placement)===b?V.overflows[0]>0:!0)))return{data:{index:_,overflows:I},reset:{placement:$}};let X=(A=I.filter(V=>V.overflows[0]<=0).sort((V,J)=>V.overflows[1]-J.overflows[1])[0])==null?void 0:A.placement;if(!X)switch(p){case"bestFit":{var O;const V=(O=I.filter(J=>{if(T){const W=_i(J.placement);return W===b||W==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(W=>W>0).reduce((W,ne)=>W+ne,0)]).sort((J,W)=>J[1]-W[1])[0])==null?void 0:O[0];V&&(X=V);break}case"initialPlacement":X=a;break}if(n!==X)return{reset:{placement:X}}}return{}}}};function zf(s){const e=Cn(...s.map(r=>r.left)),t=Cn(...s.map(r=>r.top)),i=wi(...s.map(r=>r.right)),n=wi(...s.map(r=>r.bottom));return{x:e,y:t,width:i-e,height:n-t}}function Aw(s){const e=s.slice().sort((n,r)=>n.y-r.y),t=[];let i=null;for(let n=0;n<e.length;n++){const r=e[n];!i||r.y-i.y>i.height/2?t.push([r]):t[t.length-1].push(r),i=r}return t.map(n=>Sn(zf(n)))}const Pw=function(s){return s===void 0&&(s={}),{name:"inline",options:s,async fn(e){const{placement:t,elements:i,rects:n,platform:r,strategy:o}=e,{padding:a=2,x:l,y:c}=Ur(s,e),h=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(i.reference))||[]),d=Aw(h),u=Sn(zf(h)),p=kf(a);function g(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(v=>l>v.left-p.left&&l<v.right+p.right&&c>v.top-p.top&&c<v.bottom+p.bottom)||u;if(d.length>=2){if(_i(t)==="y"){const I=d[0],R=d[d.length-1],A=Ai(t)==="top",O=I.top,_=R.bottom,$=A?I.left:R.left,X=A?I.right:R.right,V=X-$,J=_-O;return{top:O,bottom:_,left:$,right:X,width:V,height:J,x:$,y:O}}const v=Ai(t)==="left",f=wi(...d.map(I=>I.right)),b=Cn(...d.map(I=>I.left)),y=d.filter(I=>v?I.left===b:I.right===f),w=y[0].top,S=y[y.length-1].bottom,T=b,P=f,D=P-T,M=S-w;return{top:w,bottom:S,left:T,right:P,width:D,height:M,x:T,y:w}}return u}const m=await r.getElementRects({reference:{getBoundingClientRect:g},floating:i.floating,strategy:o});return n.reference.x!==m.reference.x||n.reference.y!==m.reference.y||n.reference.width!==m.reference.width||n.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}},Mw=new Set(["left","top"]);async function Ow(s,e){const{placement:t,platform:i,elements:n}=s,r=await(i.isRTL==null?void 0:i.isRTL(n.floating)),o=Ai(t),a=La(t),l=_i(t)==="y",c=Mw.has(o)?-1:1,h=r&&l?-1:1,d=Ur(e,s);let{mainAxis:u,crossAxis:p,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*h,y:u*c}:{x:u*c,y:p*h}}const ih=function(s){return{name:"offset",options:s,async fn(e){var t,i;const{x:n,y:r,placement:o,middlewareData:a}=e,l=await Ow(e,s);return o===((t=a.offset)==null?void 0:t.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:o}}}}},kw=function(s){return s===void 0&&(s={}),{name:"shift",options:s,async fn(e){const{x:t,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:v=>{let{x:f,y:b}=v;return{x:f,y:b}}},...l}=Ur(s,e),c={x:t,y:i},h=await Df(e,l),d=_i(Ai(n)),u=Pf(d);let p=c[u],g=c[d];if(r){const v=u==="y"?"top":"left",f=u==="y"?"bottom":"right",b=p+h[v],y=p-h[f];p=Zd(b,p,y)}if(o){const v=d==="y"?"top":"left",f=d==="y"?"bottom":"right",b=g+h[v],y=g-h[f];g=Zd(b,g,y)}const m=a.fn({...e,[u]:p,[d]:g});return{...m,data:{x:m.x-t,y:m.y-i,enabled:{[u]:r,[d]:o}}}}}};function $a(){return typeof window<"u"}function es(s){return If(s)?(s.nodeName||"").toLowerCase():"#document"}function Pt(s){var e;return(s==null||(e=s.ownerDocument)==null?void 0:e.defaultView)||window}function ns(s){var e;return(e=(If(s)?s.ownerDocument:s.document)||window.document)==null?void 0:e.documentElement}function If(s){return $a()?s instanceof Node||s instanceof Pt(s).Node:!1}function pi(s){return $a()?s instanceof Element||s instanceof Pt(s).Element:!1}function fi(s){return $a()?s instanceof HTMLElement||s instanceof Pt(s).HTMLElement:!1}function eu(s){return!$a()||typeof ShadowRoot>"u"?!1:s instanceof ShadowRoot||s instanceof Pt(s).ShadowRoot}const Dw=new Set(["inline","contents"]);function Fr(s){const{overflow:e,overflowX:t,overflowY:i,display:n}=Ut(s);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!Dw.has(n)}const zw=new Set(["table","td","th"]);function Iw(s){return zw.has(es(s))}const Lw=[":popover-open",":modal"];function $w(s){return Lw.some(e=>{try{return s.matches(e)}catch{return!1}})}const Nw=["transform","translate","scale","rotate","perspective"],Bw=["transform","translate","scale","rotate","perspective","filter"],Rw=["paint","layout","strict","content"];function sh(s){const e=nh(),t=pi(s)?Ut(s):s;return Nw.some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||Bw.some(i=>(t.willChange||"").includes(i))||Rw.some(i=>(t.contain||"").includes(i))}function Uw(s){let e=En(s);for(;fi(e)&&!Na(e);){if(sh(e))return e;if($w(e))return null;e=En(e)}return null}function nh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Fw=new Set(["html","body","#document"]);function Na(s){return Fw.has(es(s))}function Ut(s){return Pt(s).getComputedStyle(s)}function Ba(s){return pi(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:{scrollLeft:s.scrollX,scrollTop:s.scrollY}}function En(s){if(es(s)==="html")return s;const e=s.assignedSlot||s.parentNode||eu(s)&&s.host||ns(s);return eu(e)?e.host:e}function Lf(s){const e=En(s);return Na(e)?s.ownerDocument?s.ownerDocument.body:s.body:fi(e)&&Fr(e)?e:Lf(e)}function $f(s,e,t){var i;e===void 0&&(e=[]);const n=Lf(s),r=n===((i=s.ownerDocument)==null?void 0:i.body),o=Pt(n);return r?(jw(o),e.concat(o,o.visualViewport||[],Fr(n)?n:[],[])):e.concat(n,$f(n,[]))}function jw(s){return s.parent&&Object.getPrototypeOf(s.parent)?s.frameElement:null}function Nf(s){const e=Ut(s);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=fi(s),r=n?s.offsetWidth:t,o=n?s.offsetHeight:i,a=ca(t)!==r||ca(i)!==o;return a&&(t=r,i=o),{width:t,height:i,$:a}}function Bf(s){return pi(s)?s:s.contextElement}function dn(s){const e=Bf(s);if(!fi(e))return Ji(1);const t=e.getBoundingClientRect(),{width:i,height:n,$:r}=Nf(e);let o=(r?ca(t.width):t.width)/i,a=(r?ca(t.height):t.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Hw=Ji(0);function Rf(s){const e=Pt(s);return!nh()||!e.visualViewport?Hw:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Vw(s,e,t){return e===void 0&&(e=!1),!t||e&&t!==Pt(s)?!1:e}function Mr(s,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const n=s.getBoundingClientRect(),r=Bf(s);let o=Ji(1);e&&(i?pi(i)&&(o=dn(i)):o=dn(s));const a=Vw(r,t,i)?Rf(r):Ji(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,h=n.width/o.x,d=n.height/o.y;if(r){const u=Pt(r),p=i&&pi(i)?Pt(i):i;let g=u,m=g.frameElement;for(;m&&i&&p!==g;){const v=dn(m),f=m.getBoundingClientRect(),b=Ut(m),y=f.left+(m.clientLeft+parseFloat(b.paddingLeft))*v.x,w=f.top+(m.clientTop+parseFloat(b.paddingTop))*v.y;l*=v.x,c*=v.y,h*=v.x,d*=v.y,l+=y,c+=w,g=Pt(m),m=g.frameElement}}return Sn({width:h,height:d,x:l,y:c})}const Ww=[":popover-open",":modal"];function Uf(s){return Ww.some(e=>{try{return s.matches(e)}catch{return!1}})}function qw(s){let{elements:e,rect:t,offsetParent:i,strategy:n}=s;const r=n==="fixed",o=ns(i),a=e?Uf(e.floating):!1;if(i===o||a&&r)return t;let l={scrollLeft:0,scrollTop:0},c=Ji(1);const h=Ji(0),d=fi(i);if((d||!d&&!r)&&((es(i)!=="body"||Fr(o))&&(l=Ba(i)),fi(i))){const u=Mr(i);c=dn(i),h.x=u.x+i.clientLeft,h.y=u.y+i.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+h.x,y:t.y*c.y-l.scrollTop*c.y+h.y}}function Yw(s){return Array.from(s.getClientRects())}function Ff(s){return Mr(ns(s)).left+Ba(s).scrollLeft}function Gw(s){const e=ns(s),t=Ba(s),i=s.ownerDocument.body,n=wi(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=wi(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-t.scrollLeft+Ff(s);const a=-t.scrollTop;return Ut(i).direction==="rtl"&&(o+=wi(e.clientWidth,i.clientWidth)-n),{width:n,height:r,x:o,y:a}}function Xw(s,e){const t=Pt(s),i=ns(s),n=t.visualViewport;let r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const c=nh();(!c||c&&e==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:o,x:a,y:l}}function Zw(s,e){const t=Mr(s,!0,e==="fixed"),i=t.top+s.clientTop,n=t.left+s.clientLeft,r=fi(s)?dn(s):Ji(1),o=s.clientWidth*r.x,a=s.clientHeight*r.y,l=n*r.x,c=i*r.y;return{width:o,height:a,x:l,y:c}}function tu(s,e,t){let i;if(e==="viewport")i=Xw(s,t);else if(e==="document")i=Gw(ns(s));else if(pi(e))i=Zw(e,t);else{const n=Rf(s);i={...e,x:e.x-n.x,y:e.y-n.y}}return Sn(i)}function jf(s,e){const t=En(s);return t===e||!pi(t)||Na(t)?!1:Ut(t).position==="fixed"||jf(t,e)}function Qw(s,e){const t=e.get(s);if(t)return t;let i=$f(s,[]).filter(a=>pi(a)&&es(a)!=="body"),n=null;const r=Ut(s).position==="fixed";let o=r?En(s):s;for(;pi(o)&&!Na(o);){const a=Ut(o),l=sh(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&n&&["absolute","fixed"].includes(n.position)||Fr(o)&&!l&&jf(s,o))?i=i.filter(c=>c!==o):n=a,o=En(o)}return e.set(s,i),i}function Kw(s){let{element:e,boundary:t,rootBoundary:i,strategy:n}=s;const r=[...t==="clippingAncestors"?Qw(e,this._c):[].concat(t),i],o=r[0],a=r.reduce((l,c)=>{const h=tu(e,c,n);return l.top=wi(h.top,l.top),l.right=Cn(h.right,l.right),l.bottom=Cn(h.bottom,l.bottom),l.left=wi(h.left,l.left),l},tu(e,o,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Jw(s){const{width:e,height:t}=Nf(s);return{width:e,height:t}}function e1(s,e,t){const i=fi(e),n=ns(e),r=t==="fixed",o=Mr(s,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=Ji(0);if(i||!i&&!r)if((es(e)!=="body"||Fr(n))&&(a=Ba(e)),i){const d=Mr(e,!0,r,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else n&&(l.x=Ff(n));const c=o.left+a.scrollLeft-l.x,h=o.top+a.scrollTop-l.y;return{x:c,y:h,width:o.width,height:o.height}}function iu(s,e){return!fi(s)||Ut(s).position==="fixed"?null:e?e(s):s.offsetParent}function Hf(s,e){const t=Pt(s);if(!fi(s)||Uf(s))return t;let i=iu(s,e);for(;i&&Iw(i)&&Ut(i).position==="static";)i=iu(i,e);return i&&(es(i)==="html"||es(i)==="body"&&Ut(i).position==="static"&&!sh(i))?t:i||Uw(s)||t}const t1=async function(s){const e=this.getOffsetParent||Hf,t=this.getDimensions;return{reference:e1(s.reference,await e(s.floating),s.strategy),floating:{x:0,y:0,...await t(s.floating)}}};function i1(s){return Ut(s).direction==="rtl"}const s1={convertOffsetParentRelativeRectToViewportRelativeRect:qw,getDocumentElement:ns,getClippingRect:Kw,getOffsetParent:Hf,getElementRects:t1,getClientRects:Yw,getDimensions:Jw,getScale:dn,isElement:pi,isRTL:i1},rh=kw,oh=Tw,ah=Pw,lh=(s,e,t)=>{const i=new Map,n={platform:s1,...t},r={...n.platform,_c:i};return Ew(s,e,{...n,platform:r})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Go=globalThis,ch=Go.ShadowRoot&&(Go.ShadyCSS===void 0||Go.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hh=Symbol(),su=new WeakMap;let Vf=class{constructor(s,e,t){if(this._$cssResult$=!0,t!==hh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o;const e=this.t;if(ch&&s===void 0){const t=e!==void 0&&e.length===1;t&&(s=su.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),t&&su.set(e,s))}return s}toString(){return this.cssText}};const n1=s=>new Vf(typeof s=="string"?s:s+"",void 0,hh),Ae=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new Vf(t,s,hh)},r1=(s,e)=>{if(ch)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=Go.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},nu=ch?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return n1(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:o1,defineProperty:a1,getOwnPropertyDescriptor:l1,getOwnPropertyNames:c1,getOwnPropertySymbols:h1,getPrototypeOf:d1}=Object,Tn=globalThis,ru=Tn.trustedTypes,u1=ru?ru.emptyScript:"",ou=Tn.reactiveElementPolyfillSupport,vr=(s,e)=>s,da={toAttribute(s,e){switch(e){case Boolean:s=s?u1:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},dh=(s,e)=>!o1(s,e),au={attribute:!0,type:String,converter:da,reflect:!1,useDefault:!1,hasChanged:dh};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Tn.litPropertyMetadata??(Tn.litPropertyMetadata=new WeakMap);let on=class extends HTMLElement{static addInitializer(s){this._$Ei(),(this.l??(this.l=[])).push(s)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(s,e=au){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(s)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(s,e),!e.noAccessor){const t=Symbol(),i=this.getPropertyDescriptor(s,t,e);i!==void 0&&a1(this.prototype,s,i)}}static getPropertyDescriptor(s,e,t){const{get:i,set:n}=l1(this.prototype,s)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){const o=i==null?void 0:i.call(this);n==null||n.call(this,r),this.requestUpdate(s,o,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(s){return this.elementProperties.get(s)??au}static _$Ei(){if(this.hasOwnProperty(vr("elementProperties")))return;const s=d1(this);s.finalize(),s.l!==void 0&&(this.l=[...s.l]),this.elementProperties=new Map(s.elementProperties)}static finalize(){if(this.hasOwnProperty(vr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vr("properties"))){const e=this.properties,t=[...c1(e),...h1(e)];for(const i of t)this.createProperty(i,e[i])}const s=this[Symbol.metadata];if(s!==null){const e=litPropertyMetadata.get(s);if(e!==void 0)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const e=[];if(Array.isArray(s)){const t=new Set(s.flat(1/0).reverse());for(const i of t)e.unshift(nu(i))}else s!==void 0&&e.push(nu(s));return e}static _$Eu(s,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof s=="string"?s.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var s;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(s=this.constructor.l)==null||s.forEach(e=>e(this))}addController(s){var e;(this._$EO??(this._$EO=new Set)).add(s),this.renderRoot!==void 0&&this.isConnected&&((e=s.hostConnected)==null||e.call(s))}removeController(s){var e;(e=this._$EO)==null||e.delete(s)}_$E_(){const s=new Map,e=this.constructor.elementProperties;for(const t of e.keys())this.hasOwnProperty(t)&&(s.set(t,this[t]),delete this[t]);s.size>0&&(this._$Ep=s)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r1(s,this.constructor.elementStyles),s}connectedCallback(){var s;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(s=this._$EO)==null||s.forEach(e=>{var t;return(t=e.hostConnected)==null?void 0:t.call(e)})}enableUpdating(s){}disconnectedCallback(){var s;(s=this._$EO)==null||s.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(s,e,t){this._$AK(s,t)}_$ET(s,e){var t;const i=this.constructor.elementProperties.get(s),n=this.constructor._$Eu(s,i);if(n!==void 0&&i.reflect===!0){const r=(((t=i.converter)==null?void 0:t.toAttribute)!==void 0?i.converter:da).toAttribute(e,i.type);this._$Em=s,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(s,e){var t,i;const n=this.constructor,r=n._$Eh.get(s);if(r!==void 0&&this._$Em!==r){const o=n.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((t=o.converter)==null?void 0:t.fromAttribute)!==void 0?o.converter:da;this._$Em=r;const l=a.fromAttribute(e,o.type);this[r]=l??((i=this._$Ej)==null?void 0:i.get(r))??l,this._$Em=null}}requestUpdate(s,e,t,i=!1,n){var r;if(s!==void 0){const o=this.constructor;if(i===!1&&(n=this[s]),t??(t=o.getPropertyOptions(s)),!((t.hasChanged??dh)(n,e)||t.useDefault&&t.reflect&&n===((r=this._$Ej)==null?void 0:r.get(s))&&!this.hasAttribute(o._$Eu(s,t))))return;this.C(s,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(s,e,{useDefault:t,reflect:i,wrapped:n},r){t&&!(this._$Ej??(this._$Ej=new Map)).has(s)&&(this._$Ej.set(s,r??e??this[s]),n!==!0||r!==void 0)||(this._$AL.has(s)||(this.hasUpdated||t||(e=void 0),this._$AL.set(s,e)),i===!0&&this._$Em!==s&&(this._$Eq??(this._$Eq=new Set)).add(s))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const s=this.scheduleUpdate();return s!=null&&await s,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i){const{wrapped:o}=r,a=this[n];o!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(s){}_$AE(s){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostUpdated)==null?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(s)),this.updated(s)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(s){return!0}update(s){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(s){}firstUpdated(s){}};on.elementStyles=[],on.shadowRootOptions={mode:"open"},on[vr("elementProperties")]=new Map,on[vr("finalized")]=new Map,ou==null||ou({ReactiveElement:on}),(Tn.reactiveElementVersions??(Tn.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ua=globalThis,lu=s=>s,pa=ua.trustedTypes,cu=pa?pa.createPolicy("lit-html",{createHTML:s=>s}):void 0,Wf="$lit$",Hi=`lit$${Math.random().toFixed(9).slice(2)}$`,qf="?"+Hi,p1=`<${qf}>`,Ms=document,Or=()=>Ms.createComment(""),kr=s=>s===null||typeof s!="object"&&typeof s!="function",uh=Array.isArray,f1=s=>uh(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Pl=`[ 	
\f\r]`,rr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hu=/-->/g,du=/>/g,vs=RegExp(`>|${Pl}(?:([^\\s"'>=/]+)(${Pl}*=${Pl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uu=/'/g,pu=/"/g,Yf=/^(?:script|style|textarea|title)$/i,m1=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),H=m1(1),Os=Symbol.for("lit-noChange"),De=Symbol.for("lit-nothing"),fu=new WeakMap,ws=Ms.createTreeWalker(Ms,129);function Gf(s,e){if(!uh(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return cu!==void 0?cu.createHTML(e):e}const g1=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",o=rr;for(let a=0;a<t;a++){const l=s[a];let c,h,d=-1,u=0;for(;u<l.length&&(o.lastIndex=u,h=o.exec(l),h!==null);)u=o.lastIndex,o===rr?h[1]==="!--"?o=hu:h[1]!==void 0?o=du:h[2]!==void 0?(Yf.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=vs):h[3]!==void 0&&(o=vs):o===vs?h[0]===">"?(o=n??rr,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?vs:h[3]==='"'?pu:uu):o===pu||o===uu?o=vs:o===hu||o===du?o=rr:(o=vs,n=void 0);const p=o===vs&&s[a+1].startsWith("/>")?" ":"";r+=o===rr?l+p1:d>=0?(i.push(c),l.slice(0,d)+Wf+l.slice(d)+Hi+p):l+Hi+(d===-2?a:p)}return[Gf(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Dr{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,h]=g1(e,t);if(this.el=Dr.createElement(c,i),ws.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=ws.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Wf)){const u=h[o++],p=n.getAttribute(d).split(Hi),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:g[2],strings:p,ctor:g[1]==="."?b1:g[1]==="?"?y1:g[1]==="@"?_1:Ra}),n.removeAttribute(d)}else d.startsWith(Hi)&&(l.push({type:6,index:r}),n.removeAttribute(d));if(Yf.test(n.tagName)){const d=n.textContent.split(Hi),u=d.length-1;if(u>0){n.textContent=pa?pa.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],Or()),ws.nextNode(),l.push({type:2,index:++r});n.append(d[u],Or())}}}else if(n.nodeType===8)if(n.data===qf)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(Hi,d+1))!==-1;)l.push({type:7,index:r}),d+=Hi.length-1}r++}}static createElement(e,t){const i=Ms.createElement("template");return i.innerHTML=e,i}}function An(s,e,t=s,i){var n,r;if(e===Os)return e;let o=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const a=kr(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((r=o==null?void 0:o._$AO)==null||r.call(o,!1),a===void 0?o=void 0:(o=new a(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=An(s,o._$AS(s,e.values),o,i)),e}class v1{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??Ms).importNode(t,!0);ws.currentNode=n;let r=ws.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new jr(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new w1(r,this,e)),this._$AV.push(c),l=i[++a]}o!==(l==null?void 0:l.index)&&(r=ws.nextNode(),o++)}return ws.currentNode=Ms,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class jr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=De,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=An(this,e,t),kr(e)?e===De||e==null||e===""?(this._$AH!==De&&this._$AR(),this._$AH=De):e!==this._$AH&&e!==Os&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):f1(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==De&&kr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ms.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Dr.createElement(Gf(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)==null?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new v1(r,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=fu.get(e.strings);return t===void 0&&fu.set(e.strings,t=new Dr(e)),t}k(e){uh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new jr(this.O(Or()),this.O(Or()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const n=lu(e).nextSibling;lu(e).remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ra{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=De,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=De}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=An(this,e,t,0),o=!kr(e)||e!==this._$AH&&e!==Os,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=An(this,a[i+l],t,l),c===Os&&(c=this._$AH[l]),o||(o=!kr(c)||c!==this._$AH[l]),c===De?e=De:e!==De&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!n&&this.j(e)}j(e){e===De?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class b1 extends Ra{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===De?void 0:e}}class y1 extends Ra{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==De)}}class _1 extends Ra{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=An(this,e,t,0)??De)===Os)return;const i=this._$AH,n=e===De&&i!==De||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==De&&(i===De||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class w1{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){An(this,e)}}const mu=ua.litHtmlPolyfillSupport;mu==null||mu(Dr,jr),(ua.litHtmlVersions??(ua.litHtmlVersions=[])).push("3.3.2");const pc=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new jr(e.insertBefore(Or(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=globalThis;let xe=class extends on{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(s){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=pc(e,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return Os}};var gu;xe._$litElement$=!0,xe.finalized=!0,(gu=zr.litElementHydrateSupport)==null||gu.call(zr,{LitElement:xe});const vu=zr.litElementPolyfillSupport;vu==null||vu({LitElement:xe});(zr.litElementVersions??(zr.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x1={attribute:!0,type:String,converter:da,reflect:!1,hasChanged:dh},C1=(s=x1,e,t)=>{const{kind:i,metadata:n}=t;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,s,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,s,a),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function Y(s){return(e,t)=>typeof t=="object"?C1(s,e,t):((i,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(n,r):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zs(s){return Y({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S1=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xf={ATTRIBUTE:1,CHILD:2},Zf=s=>(...e)=>({_$litDirective$:s,values:e});let Qf=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,e,t){this._$Ct=s,this._$AM=e,this._$Ci=t}_$AS(s,e){return this.update(s,e)}update(s,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const br=(s,e)=>{var t;const i=s._$AN;if(i===void 0)return!1;for(const n of i)(t=n._$AO)==null||t.call(n,e,!1),br(n,e);return!0},fa=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Kf=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),A1(e)}};function E1(s){this._$AN!==void 0?(fa(this),this._$AM=s,Kf(this)):this._$AM=s}function T1(s,e=!1,t=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)br(i[r],!1),fa(i[r]);else i!=null&&(br(i,!1),fa(i));else br(this,s)}const A1=s=>{s.type==Xf.CHILD&&(s._$AP??(s._$AP=T1),s._$AQ??(s._$AQ=E1))};class P1 extends Qf{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Kf(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),t&&(br(this,e),fa(this))}setValue(e){if(S1(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=()=>new M1;class M1{}const Ml=new WeakMap,Ze=Zf(class extends P1{render(s){return De}update(s,[e]){var t;const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=(t=s.options)==null?void 0:t.host,this.rt(this.ct=s.element)),De}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=Ml.get(e);t===void 0&&(t=new WeakMap,Ml.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){var s,e;return typeof this.G=="function"?(s=Ml.get(this.ht??globalThis))==null?void 0:s.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Jf=Object.freeze({left:0,top:0,width:16,height:16}),ma=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Hr=Object.freeze({...Jf,...ma}),fc=Object.freeze({...Hr,body:"",hidden:!1}),O1=Object.freeze({width:null,height:null}),em=Object.freeze({...O1,...ma});function k1(s,e=0){const t=s.replace(/^-?[0-9.]*/,"");function i(n){for(;n<0;)n+=4;return n%4}if(t===""){const n=parseInt(s);return isNaN(n)?0:i(n)}else if(t!==s){let n=0;switch(t){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(s.slice(0,s.length-t.length));return isNaN(r)?0:(r=r/n,r%1===0?i(r):0)}}return e}const D1=/[\s,]+/;function z1(s,e){e.split(D1).forEach(t=>{switch(t.trim()){case"horizontal":s.hFlip=!0;break;case"vertical":s.vFlip=!0;break}})}const tm={...em,preserveAspectRatio:""};function bu(s){const e={...tm},t=(i,n)=>s.getAttribute(i)||n;return e.width=t("width",null),e.height=t("height",null),e.rotate=k1(t("rotate","")),z1(e,t("flip","")),e.preserveAspectRatio=t("preserveAspectRatio",t("preserveaspectratio","")),e}function I1(s,e){for(const t in tm)if(s[t]!==e[t])return!0;return!1}const yr=/^[a-z0-9]+(-[a-z0-9]+)*$/,Vr=(s,e,t,i="")=>{const n=s.split(":");if(s.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;i=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:i,prefix:l,name:a};return e&&!Xo(c)?null:c}const r=n[0],o=r.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!Xo(a)?null:a}if(t&&i===""){const a={provider:i,prefix:"",name:r};return e&&!Xo(a,t)?null:a}return null},Xo=(s,e)=>s?!!((s.provider===""||s.provider.match(yr))&&(e&&s.prefix===""||s.prefix.match(yr))&&s.name.match(yr)):!1;function L1(s,e){const t={};!s.hFlip!=!e.hFlip&&(t.hFlip=!0),!s.vFlip!=!e.vFlip&&(t.vFlip=!0);const i=((s.rotate||0)+(e.rotate||0))%4;return i&&(t.rotate=i),t}function yu(s,e){const t=L1(s,e);for(const i in fc)i in ma?i in s&&!(i in t)&&(t[i]=ma[i]):i in e?t[i]=e[i]:i in s&&(t[i]=s[i]);return t}function $1(s,e){const t=s.icons,i=s.aliases||Object.create(null),n=Object.create(null);function r(o){if(t[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=i[o]&&i[o].parent,l=a&&r(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(t).concat(Object.keys(i)).forEach(r),n}function N1(s,e,t){const i=s.icons,n=s.aliases||Object.create(null);let r={};function o(a){r=yu(i[a]||n[a],r)}return o(e),t.forEach(o),yu(s,r)}function im(s,e){const t=[];if(typeof s!="object"||typeof s.icons!="object")return t;s.not_found instanceof Array&&s.not_found.forEach(n=>{e(n,null),t.push(n)});const i=$1(s);for(const n in i){const r=i[n];r&&(e(n,N1(s,n,r)),t.push(n))}return t}const B1={provider:"",aliases:{},not_found:{},...Jf};function Ol(s,e){for(const t in e)if(t in s&&typeof s[t]!=typeof e[t])return!1;return!0}function sm(s){if(typeof s!="object"||s===null)return null;const e=s;if(typeof e.prefix!="string"||!s.icons||typeof s.icons!="object"||!Ol(s,B1))return null;const t=e.icons;for(const n in t){const r=t[n];if(!n.match(yr)||typeof r.body!="string"||!Ol(r,fc))return null}const i=e.aliases||Object.create(null);for(const n in i){const r=i[n],o=r.parent;if(!n.match(yr)||typeof o!="string"||!t[o]&&!i[o]||!Ol(r,fc))return null}return e}const ga=Object.create(null);function R1(s,e){return{provider:s,prefix:e,icons:Object.create(null),missing:new Set}}function ts(s,e){const t=ga[s]||(ga[s]=Object.create(null));return t[e]||(t[e]=R1(s,e))}function ph(s,e){return sm(e)?im(e,(t,i)=>{i?s.icons[t]=i:s.missing.add(t)}):[]}function U1(s,e,t){try{if(typeof t.body=="string")return s.icons[e]={...t},!0}catch{}return!1}function F1(s,e){let t=[];return(typeof s=="string"?[s]:Object.keys(ga)).forEach(i=>{(typeof i=="string"&&typeof e=="string"?[e]:Object.keys(ga[i]||{})).forEach(n=>{const r=ts(i,n);t=t.concat(Object.keys(r.icons).map(o=>(i!==""?"@"+i+":":"")+n+":"+o))})}),t}let Ir=!1;function nm(s){return typeof s=="boolean"&&(Ir=s),Ir}function Lr(s){const e=typeof s=="string"?Vr(s,!0,Ir):s;if(e){const t=ts(e.provider,e.prefix),i=e.name;return t.icons[i]||(t.missing.has(i)?null:void 0)}}function rm(s,e){const t=Vr(s,!0,Ir);if(!t)return!1;const i=ts(t.provider,t.prefix);return U1(i,t.name,e)}function _u(s,e){if(typeof s!="object")return!1;if(typeof e!="string"&&(e=s.provider||""),Ir&&!e&&!s.prefix){let n=!1;return sm(s)&&(s.prefix="",im(s,(r,o)=>{o&&rm(r,o)&&(n=!0)})),n}const t=s.prefix;if(!Xo({provider:e,prefix:t,name:"a"}))return!1;const i=ts(e,t);return!!ph(i,s)}function wu(s){return!!Lr(s)}function j1(s){const e=Lr(s);return e?{...Hr,...e}:null}function H1(s){const e={loaded:[],missing:[],pending:[]},t=Object.create(null);s.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return s.forEach(n=>{if(i.name===n.name&&i.prefix===n.prefix&&i.provider===n.provider)return;i=n;const r=n.provider,o=n.prefix,a=n.name,l=t[r]||(t[r]=Object.create(null)),c=l[o]||(l[o]=ts(r,o));let h;a in c.icons?h=e.loaded:o===""||c.missing.has(a)?h=e.missing:h=e.pending;const d={provider:r,prefix:o,name:a};h.push(d)}),e}function om(s,e){s.forEach(t=>{const i=t.loaderCallbacks;i&&(t.loaderCallbacks=i.filter(n=>n.id!==e))})}function V1(s){s.pendingCallbacksFlag||(s.pendingCallbacksFlag=!0,setTimeout(()=>{s.pendingCallbacksFlag=!1;const e=s.loaderCallbacks?s.loaderCallbacks.slice(0):[];if(!e.length)return;let t=!1;const i=s.provider,n=s.prefix;e.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(s.icons[c])o.loaded.push({provider:i,prefix:n,name:c});else if(s.missing.has(c))o.missing.push({provider:i,prefix:n,name:c});else return t=!0,!0;return!1}),o.pending.length!==a&&(t||om([s],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let W1=0;function q1(s,e,t){const i=W1++,n=om.bind(null,t,i);if(!e.pending.length)return n;const r={id:i,icons:e,callback:s,abort:n};return t.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),n}const mc=Object.create(null);function xu(s,e){mc[s]=e}function gc(s){return mc[s]||mc[""]}function Y1(s,e=!0,t=!1){const i=[];return s.forEach(n=>{const r=typeof n=="string"?Vr(n,e,t):n;r&&i.push(r)}),i}var G1={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function X1(s,e,t,i){const n=s.resources.length,r=s.random?Math.floor(Math.random()*n):s.index;let o;if(s.random){let T=s.resources.slice(0);for(o=[];T.length>1;){const P=Math.floor(Math.random()*T.length);o.push(T[P]),T=T.slice(0,P).concat(T.slice(P+1))}o=o.concat(T)}else o=s.resources.slice(r).concat(s.resources.slice(0,r));const a=Date.now();let l="pending",c=0,h,d=null,u=[],p=[];typeof i=="function"&&p.push(i);function g(){d&&(clearTimeout(d),d=null)}function m(){l==="pending"&&(l="aborted"),g(),u.forEach(T=>{T.status==="pending"&&(T.status="aborted")}),u=[]}function v(T,P){P&&(p=[]),typeof T=="function"&&p.push(T)}function f(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:u.length,subscribe:v,abort:m}}function b(){l="failed",p.forEach(T=>{T(void 0,h)})}function y(){u.forEach(T=>{T.status==="pending"&&(T.status="aborted")}),u=[]}function w(T,P,D){const M=P!=="success";switch(u=u.filter(I=>I!==T),l){case"pending":break;case"failed":if(M||!s.dataAfterTimeout)return;break;default:return}if(P==="abort"){h=D,b();return}if(M){h=D,u.length||(o.length?S():b());return}if(g(),y(),!s.random){const I=s.resources.indexOf(T.resource);I!==-1&&I!==s.index&&(s.index=I)}l="completed",p.forEach(I=>{I(D)})}function S(){if(l!=="pending")return;g();const T=o.shift();if(T===void 0){if(u.length){d=setTimeout(()=>{g(),l==="pending"&&(y(),b())},s.timeout);return}b();return}const P={status:"pending",resource:T,callback:(D,M)=>{w(P,D,M)}};u.push(P),c++,d=setTimeout(S,s.rotate),t(T,e,P.callback)}return setTimeout(S),f}function am(s){const e={...G1,...s};let t=[];function i(){t=t.filter(o=>o().status==="pending")}function n(o,a,l){const c=X1(e,o,a,(h,d)=>{i(),l&&l(h,d)});return t.push(c),c}function r(o){return t.find(a=>o(a))||null}return{query:n,find:r,setIndex:o=>{e.index=o},getIndex:()=>e.index,cleanup:i}}function fh(s){let e;if(typeof s.resources=="string")e=[s.resources];else if(e=s.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:s.path||"/",maxURL:s.maxURL||500,rotate:s.rotate||750,timeout:s.timeout||5e3,random:s.random===!0,index:s.index||0,dataAfterTimeout:s.dataAfterTimeout!==!1}}const Ua=Object.create(null),No=["https://api.simplesvg.com","https://api.unisvg.com"],vc=[];for(;No.length>0;)No.length===1||Math.random()>.5?vc.push(No.shift()):vc.push(No.pop());Ua[""]=fh({resources:["https://api.iconify.design"].concat(vc)});function Cu(s,e){const t=fh(e);return t===null?!1:(Ua[s]=t,!0)}function Fa(s){return Ua[s]}function Z1(){return Object.keys(Ua)}function Su(){}const kl=Object.create(null);function Q1(s){if(!kl[s]){const e=Fa(s);if(!e)return;const t=am(e),i={config:e,redundancy:t};kl[s]=i}return kl[s]}function lm(s,e,t){let i,n;if(typeof s=="string"){const r=gc(s);if(!r)return t(void 0,424),Su;n=r.send;const o=Q1(s);o&&(i=o.redundancy)}else{const r=fh(s);if(r){i=am(r);const o=s.resources?s.resources[0]:"",a=gc(o);a&&(n=a.send)}}return!i||!n?(t(void 0,424),Su):i.query(e,n,t)().abort}const Eu="iconify2",$r="iconify",cm=$r+"-count",Tu=$r+"-version",hm=36e5,K1=168,J1=50;function bc(s,e){try{return s.getItem(e)}catch{}}function mh(s,e,t){try{return s.setItem(e,t),!0}catch{}}function Au(s,e){try{s.removeItem(e)}catch{}}function yc(s,e){return mh(s,cm,e.toString())}function _c(s){return parseInt(bc(s,cm))||0}const Ts={local:!0,session:!0},dm={local:new Set,session:new Set};let gh=!1;function ex(s){gh=s}let Bo=typeof window>"u"?{}:window;function um(s){const e=s+"Storage";try{if(Bo&&Bo[e]&&typeof Bo[e].length=="number")return Bo[e]}catch{}Ts[s]=!1}function pm(s,e){const t=um(s);if(!t)return;const i=bc(t,Tu);if(i!==Eu){if(i){const a=_c(t);for(let l=0;l<a;l++)Au(t,$r+l.toString())}mh(t,Tu,Eu),yc(t,0);return}const n=Math.floor(Date.now()/hm)-K1,r=a=>{const l=$r+a.toString(),c=bc(t,l);if(typeof c=="string"){try{const h=JSON.parse(c);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>n&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&e(h,a))return!0}catch{}Au(t,l)}};let o=_c(t);for(let a=o-1;a>=0;a--)r(a)||(a===o-1?(o--,yc(t,o)):dm[s].add(a))}function fm(){if(!gh){ex(!0);for(const s in Ts)pm(s,e=>{const t=e.data,i=e.provider,n=t.prefix,r=ts(i,n);if(!ph(r,t).length)return!1;const o=t.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function tx(s,e){const t=s.lastModifiedCached;if(t&&t>=e)return t===e;if(s.lastModifiedCached=e,t)for(const i in Ts)pm(i,n=>{const r=n.data;return n.provider!==s.provider||r.prefix!==s.prefix||r.lastModified===e});return!0}function ix(s,e){gh||fm();function t(i){let n;if(!Ts[i]||!(n=um(i)))return;const r=dm[i];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=_c(n),o>=J1||!yc(n,o+1))return;const a={cached:Math.floor(Date.now()/hm),provider:s.provider,data:e};return mh(n,$r+o.toString(),JSON.stringify(a))}e.lastModified&&!tx(s,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),t("local")||t("session"))}function Pu(){}function sx(s){s.iconsLoaderFlag||(s.iconsLoaderFlag=!0,setTimeout(()=>{s.iconsLoaderFlag=!1,V1(s)}))}function nx(s,e){s.iconsToLoad?s.iconsToLoad=s.iconsToLoad.concat(e).sort():s.iconsToLoad=e,s.iconsQueueFlag||(s.iconsQueueFlag=!0,setTimeout(()=>{s.iconsQueueFlag=!1;const{provider:t,prefix:i}=s,n=s.iconsToLoad;delete s.iconsToLoad;let r;!n||!(r=gc(t))||r.prepare(t,i,n).forEach(o=>{lm(t,o,a=>{if(typeof a!="object")o.icons.forEach(l=>{s.missing.add(l)});else try{const l=ph(s,a);if(!l.length)return;const c=s.pendingIcons;c&&l.forEach(h=>{c.delete(h)}),ix(s,a)}catch(l){console.error(l)}sx(s)})})}))}const vh=(s,e)=>{const t=Y1(s,!0,nm()),i=H1(t);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,Pu)}),()=>{l=!1}}const n=Object.create(null),r=[];let o,a;return i.pending.forEach(l=>{const{provider:c,prefix:h}=l;if(h===a&&c===o)return;o=c,a=h,r.push(ts(c,h));const d=n[c]||(n[c]=Object.create(null));d[h]||(d[h]=[])}),i.pending.forEach(l=>{const{provider:c,prefix:h,name:d}=l,u=ts(c,h),p=u.pendingIcons||(u.pendingIcons=new Set);p.has(d)||(p.add(d),n[c][h].push(d))}),r.forEach(l=>{const{provider:c,prefix:h}=l;n[c][h].length&&nx(l,n[c][h])}),e?q1(e,i,r):Pu},rx=s=>new Promise((e,t)=>{const i=typeof s=="string"?Vr(s,!0):s;if(!i){t(s);return}vh([i||s],n=>{if(n.length&&i){const r=Lr(i);if(r){e({...Hr,...r});return}}t(s)})});function ox(s){try{const e=typeof s=="string"?JSON.parse(s):s;if(typeof e.body=="string")return{...e}}catch{}}function ax(s,e){const t=typeof s=="string"?Vr(s,!0,!0):null;if(!t){const r=ox(s);return{value:s,data:r}}const i=Lr(t);if(i!==void 0||!t.prefix)return{value:s,name:t,data:i};const n=vh([t],()=>e(s,t,Lr(t)));return{value:s,name:t,loading:n}}function Dl(s){return s.hasAttribute("inline")}let mm=!1;try{mm=navigator.vendor.indexOf("Apple")===0}catch{}function lx(s,e){switch(e){case"svg":case"bg":case"mask":return e}return e!=="style"&&(mm||s.indexOf("<a")===-1)?"svg":s.indexOf("currentColor")===-1?"bg":"mask"}const cx=/(-?[0-9.]*[0-9]+[0-9.]*)/g,hx=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function wc(s,e,t){if(e===1)return s;if(t=t||100,typeof s=="number")return Math.ceil(s*e*t)/t;if(typeof s!="string")return s;const i=s.split(cx);if(i===null||!i.length)return s;const n=[];let r=i.shift(),o=hx.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?n.push(r):n.push(Math.ceil(a*e*t)/t)}else n.push(r);if(r=i.shift(),r===void 0)return n.join("");o=!o}}function dx(s,e="defs"){let t="";const i=s.indexOf("<"+e);for(;i>=0;){const n=s.indexOf(">",i),r=s.indexOf("</"+e);if(n===-1||r===-1)break;const o=s.indexOf(">",r);if(o===-1)break;t+=s.slice(n+1,r).trim(),s=s.slice(0,i).trim()+s.slice(o+1)}return{defs:t,content:s}}function ux(s,e){return s?"<defs>"+s+"</defs>"+e:e}function px(s,e,t){const i=dx(s);return ux(i.defs,e+i.content+t)}const fx=s=>s==="unset"||s==="undefined"||s==="none";function gm(s,e){const t={...Hr,...s},i={...em,...e},n={left:t.left,top:t.top,width:t.width,height:t.height};let r=t.body;[t,i].forEach(m=>{const v=[],f=m.hFlip,b=m.vFlip;let y=m.rotate;f?b?y+=2:(v.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),v.push("scale(-1 1)"),n.top=n.left=0):b&&(v.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),v.push("scale(1 -1)"),n.top=n.left=0);let w;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:w=n.height/2+n.top,v.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:v.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:w=n.width/2+n.left,v.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}y%2===1&&(n.left!==n.top&&(w=n.left,n.left=n.top,n.top=w),n.width!==n.height&&(w=n.width,n.width=n.height,n.height=w)),v.length&&(r=px(r,'<g transform="'+v.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=n.width,c=n.height;let h,d;o===null?(d=a===null?"1em":a==="auto"?c:a,h=wc(d,l/c)):(h=o==="auto"?l:o,d=a===null?wc(h,c/l):a==="auto"?c:a);const u={},p=(m,v)=>{fx(v)||(u[m]=v.toString())};p("width",h),p("height",d);const g=[n.left,n.top,l,c];return u.viewBox=g.join(" "),{attributes:u,viewBox:g,body:r}}function bh(s,e){let t=s.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)t+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+s+"</svg>"}function mx(s){return s.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function gx(s){return"data:image/svg+xml,"+mx(s)}function vm(s){return'url("'+gx(s)+'")'}const vx=()=>{let s;try{if(s=fetch,typeof s=="function")return s}catch{}};let va=vx();function bx(s){va=s}function yx(){return va}function _x(s,e){const t=Fa(s);if(!t)return 0;let i;if(!t.maxURL)i=0;else{let n=0;t.resources.forEach(o=>{n=Math.max(n,o.length)});const r=e+".json?icons=";i=t.maxURL-n-t.path.length-r.length}return i}function wx(s){return s===404}const xx=(s,e,t)=>{const i=[],n=_x(s,e),r="icons";let o={type:r,provider:s,prefix:e,icons:[]},a=0;return t.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(i.push(o),o={type:r,provider:s,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function Cx(s){if(typeof s=="string"){const e=Fa(s);if(e)return e.path}return"/"}const Sx=(s,e,t)=>{if(!va){t("abort",424);return}let i=Cx(e.provider);switch(e.type){case"icons":{const r=e.prefix,o=e.icons.join(","),a=new URLSearchParams({icons:o});i+=r+".json?"+a.toString();break}case"custom":{const r=e.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:t("abort",400);return}let n=503;va(s+i).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{t(wx(o)?"abort":"next",o)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?t("abort",r):t("next",n)});return}setTimeout(()=>{t("success",r)})}).catch(()=>{t("next",n)})},Ex={prepare:xx,send:Sx};function Mu(s,e){switch(s){case"local":case"session":Ts[s]=e;break;case"all":for(const t in Ts)Ts[t]=e;break}}const zl="data-style";let bm="";function Tx(s){bm=s}function Ou(s,e){let t=Array.from(s.childNodes).find(i=>i.hasAttribute&&i.hasAttribute(zl));t||(t=document.createElement("style"),t.setAttribute(zl,zl),s.appendChild(t)),t.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+bm}function ym(){xu("",Ex),nm(!0);let s;try{s=window}catch{}if(s){if(fm(),s.IconifyPreload!==void 0){const e=s.IconifyPreload,t="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!_u(i))&&console.error(t)}catch{console.error(t)}})}if(s.IconifyProviders!==void 0){const e=s.IconifyProviders;if(typeof e=="object"&&e!==null)for(const t in e){const i="IconifyProviders["+t+"] is invalid.";try{const n=e[t];if(typeof n!="object"||!n||n.resources===void 0)continue;Cu(t,n)||console.error(i)}catch{console.error(i)}}}}return{enableCache:e=>Mu(e,!0),disableCache:e=>Mu(e,!1),iconLoaded:wu,iconExists:wu,getIcon:j1,listIcons:F1,addIcon:rm,addCollection:_u,calculateSize:wc,buildIcon:gm,iconToHTML:bh,svgToURL:vm,loadIcons:vh,loadIcon:rx,addAPIProvider:Cu,appendCustomStyle:Tx,_api:{getAPIConfig:Fa,setAPIModule:xu,sendAPIQuery:lm,setFetch:bx,getFetch:yx,listAPIProviders:Z1}}}const xc={"background-color":"currentColor"},_m={"background-color":"transparent"},ku={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Du={"-webkit-mask":xc,mask:xc,background:_m};for(const s in Du){const e=Du[s];for(const t in ku)e[s+"-"+t]=ku[t]}function zu(s){return s?s+(s.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Ax(s,e,t){const i=document.createElement("span");let n=s.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=s.attributes,o=bh(n,{...r,width:e.width+"",height:e.height+""}),a=vm(o),l=i.style,c={"--svg":a,width:zu(r.width),height:zu(r.height),...t?xc:_m};for(const h in c)l.setProperty(h,c[h]);return i}let _r;function Px(){try{_r=window.trustedTypes.createPolicy("iconify",{createHTML:s=>s})}catch{_r=null}}function Mx(s){return _r===void 0&&Px(),_r?_r.createHTML(s):s}function Ox(s){const e=document.createElement("span"),t=s.attributes;let i="";t.width||(i="width: inherit;"),t.height||(i+="height: inherit;"),i&&(t.style=i);const n=bh(s.body,t);return e.innerHTML=Mx(n),e.firstChild}function Cc(s){return Array.from(s.childNodes).find(e=>{const t=e.tagName&&e.tagName.toUpperCase();return t==="SPAN"||t==="SVG"})}function Iu(s,e){const t=e.icon.data,i=e.customisations,n=gm(t,i);i.preserveAspectRatio&&(n.attributes.preserveAspectRatio=i.preserveAspectRatio);const r=e.renderedMode;let o;switch(r){case"svg":o=Ox(n);break;default:o=Ax(n,{...Hr,...t},r==="mask")}const a=Cc(s);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):s.replaceChild(o,a):s.appendChild(o)}function Lu(s,e,t){const i=t&&(t.rendered?t:t.lastRender);return{rendered:!1,inline:e,icon:s,lastRender:i}}function kx(s="iconify-icon"){let e,t;try{e=window.customElements,t=window.HTMLElement}catch{return}if(!e||!t)return;const i=e.get(s);if(i)return i;const n=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends t{constructor(){super(),gs(this,"_shadowRoot"),gs(this,"_initialised",!1),gs(this,"_state"),gs(this,"_checkQueued",!1),gs(this,"_connected",!1),gs(this,"_observer",null),gs(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=Dl(this);Ou(a,l),this._state=Lu({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=Dl(this),c=this._state;l!==c.inline&&(c.inline=l,Ou(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Dl(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}Iu(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const c=this.getAttribute("mode"),h=bu(this);(a.attrMode!==c||I1(a.customisations,h)||!Cc(this._shadowRoot))&&this._renderIcon(a.icon,h,c)}_iconChanged(a){const l=ax(a,(c,h,d)=>{const u=this._state;if(u.rendered||this.getAttribute("icon")!==c)return;const p={value:c,name:h,data:d};p.data?this._gotIconData(p):u.icon=p});l.data?this._gotIconData(l):this._state=Lu(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=Cc(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,bu(this),this.getAttribute("mode"))}_renderIcon(a,l,c){const h=lx(a.data.body,c),d=this._state.inline;Iu(this._shadowRoot,this._state={rendered:!0,icon:a,inline:d,customisations:l,attrMode:c,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(c=>c.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in r.prototype||Object.defineProperty(r.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=ym();for(const a in o)r[a]=r.prototype[a]=o[a];return e.define(s,r),r}const Dx=kx()||ym(),{enableCache:eE,disableCache:tE,iconLoaded:iE,iconExists:sE,getIcon:nE,listIcons:rE,addIcon:oE,addCollection:zx,calculateSize:aE,buildIcon:lE,iconToHTML:cE,svgToURL:hE,loadIcons:Ix,loadIcon:dE,addAPIProvider:uE,_api:pE}=Dx,Lx=Ae`
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
`,$x=Ae`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-3: hsl(210 10% 30%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-5: hsl(210 10% 50%);
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
`,rs={scrollbar:Lx,globalStyles:$x},wm=class _e{static set config(e){this._config={..._e._config,...e}}static get config(){return _e._config}static addGlobalStyles(){let e=document.querySelector("style[id='bim-ui']");if(e)return;e=document.createElement("style"),e.id="bim-ui",e.textContent=rs.globalStyles.cssText;const t=document.head.firstChild;t?document.head.insertBefore(e,t):document.head.append(e)}static preloadIcons(e,t=!1){Ix(e,(i,n,r)=>{t&&(console.log("Icons loaded:",i),n.length&&console.warn("Icons missing:",n),r.length&&console.info("Icons pending:",r))})}static addIconsCollection(e,t){zx({prefix:(t==null?void 0:t.prefix)??"bim",icons:e,width:24,height:24})}static defineCustomElement(e,t){customElements.get(e)||customElements.define(e,t)}static registerComponents(){_e.init()}static init(e="",t=!0){_e.addGlobalStyles(),_e.defineCustomElement("bim-button",jx),_e.defineCustomElement("bim-checkbox",Dn),_e.defineCustomElement("bim-color-input",os),_e.defineCustomElement("bim-context-menu",wr),_e.defineCustomElement("bim-dropdown",ii),_e.defineCustomElement("bim-grid",_h),_e.defineCustomElement("bim-icon",Zx),_e.defineCustomElement("bim-input",qr),_e.defineCustomElement("bim-label",zn),_e.defineCustomElement("bim-number-input",Mt),_e.defineCustomElement("bim-option",We),_e.defineCustomElement("bim-panel",Ls),_e.defineCustomElement("bim-panel-section",In),_e.defineCustomElement("bim-selector",Ln),_e.defineCustomElement("bim-table",Ot),_e.defineCustomElement("bim-tabs",Pi),_e.defineCustomElement("bim-tab",xt),_e.defineCustomElement("bim-table-cell",$m),_e.defineCustomElement("bim-table-children",c2),_e.defineCustomElement("bim-table-group",Um),_e.defineCustomElement("bim-table-row",$s),_e.defineCustomElement("bim-text-input",wt),_e.defineCustomElement("bim-toolbar",Ya),_e.defineCustomElement("bim-toolbar-group",Wa),_e.defineCustomElement("bim-toolbar-section",Bn),_e.defineCustomElement("bim-viewport",Qm),_e.defineCustomElement("bim-tooltip",k2),t&&this.animateOnLoad(e)}static newRandomId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let i=0;i<10;i++){const n=Math.floor(Math.random()*e.length);t+=e.charAt(n)}return t}static animateOnLoad(e=""){const t=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,i=[];function n(r,o=document,a=new Set){const l=[];return Array.from(o.querySelectorAll(r)).forEach(c=>{a.has(c)||(a.add(c),l.push(c))}),Array.from(o.querySelectorAll("*")).filter(c=>c.shadowRoot).forEach(c=>{a.has(c)||(a.add(c),l.push(...n(r,c.shadowRoot,a)))}),l}requestAnimationFrame(()=>{n(e||t).forEach(o=>{const a=o;let l="auto";l=window.getComputedStyle(a).getPropertyValue("transition"),a.style.setProperty("opacity","0"),a.style.setProperty("transition","none"),requestAnimationFrame(()=>{a.style.setProperty("transition",l)}),i.push(a)});const r=()=>{i.forEach(o=>{const a=o,l=(a.getBoundingClientRect().x+a.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),c=window.getComputedStyle(a).getPropertyValue("transform"),h=400,d=200+l*1e3;a.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:h,easing:"ease-in-out",delay:d}),setTimeout(()=>{a.style.removeProperty("opacity"),c!=="none"?a.style.setProperty("transform",c):a.style.removeProperty("transform")},d+h)})};document.readyState==="complete"?r():window.addEventListener("load",r)})}static toggleTheme(e=!0){const t=document.querySelector("html");if(!t)return;const i=()=>{t.classList.contains("bim-ui-dark")?t.classList.replace("bim-ui-dark","bim-ui-light"):t.classList.contains("bim-ui-light")?t.classList.replace("bim-ui-light","bim-ui-dark"):t.classList.add("bim-ui-light")};if(e){const n=document.createElement("div");n.classList.add("theme-transition-overlay");const r=document.createElement("div");n.appendChild(r),r.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(n),n.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),r.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{i()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(o=>{document.body.removeChild(o)})},1e3)}else i()}};wm._config={sectionLabelOnVerticalToolbar:!1};let pt=wm;class Qe extends xe{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=e=>{if(!this.useObserver)return;for(const i of e)this.elements.add(i);const t=e.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const i of t)i.remove();this.observeLastElement()}}set visibleElements(e){this._visibleElements=this.useObserver?e:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const e=new IntersectionObserver(t=>{const i=t[0];if(!i.isIntersecting)return;const n=i.target;e.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],e.observe(o))},{threshold:.5});return e}observeLastElement(){const e=this.getLazyObserver();if(!e)return;const t=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,i=[...this.elements][t];i&&e.observe(i)}resetVisibleElements(){const e=this.getLazyObserver();if(e){for(const t of this.elements)e.unobserve(t);this.visibleElements=[],this.observeLastElement()}}static create(e,t){const i=document.createDocumentFragment();if(e.length===0)return pc(e(),i),i.firstElementChild;if(!t)throw new Error("UIComponent: Initial state is required for statefull components.");let n=t;const r=e,o=l=>(n={...n,...l},pc(r(n,o),i),n);o(t);const a=()=>n;return[i.firstElementChild,o,a]}}const Nr=(s,e={},t=!0)=>{let i={};for(const n of s.children){const r=n,o=r.getAttribute("name")||r.getAttribute("label"),a=o?e[o]:void 0;if(o){if("value"in r&&typeof r.value<"u"&&r.value!==null){const l=r.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;i[o]=a?a(r.value):r.value}else if(t){const l=Nr(r,e);if(Object.keys(l).length===0)continue;i[o]=a?a(l):l}}else t&&(i={...i,...Nr(r,e)})}return i},ja=s=>s==="true"||s==="false"?s==="true":s&&!isNaN(Number(s))&&s.trim()!==""?Number(s):s,Nx=[">=","<=","=",">","<","?","/","#"];function $u(s){const e=Nx.find(o=>s.split(o).length===2),t=s.split(e).map(o=>o.trim()),[i,n]=t,r=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):ja(n);return{key:i,condition:e,value:r}}const Sc=s=>{try{const e=[],t=s.split(/&(?![^()]*\))/).map(i=>i.trim());for(const i of t){const n=!i.startsWith("(")&&!i.endsWith(")"),r=i.startsWith("(")&&i.endsWith(")");if(n){const o=$u(i);e.push(o)}if(r){const o={operator:"&",queries:i.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const c=$u(a);return l>0&&(c.operator="&"),c})};e.push(o)}}return e}catch{return null}},Nu=(s,e,t)=>{let i=!1;switch(e){case"=":i=s===t;break;case"?":i=String(s).includes(String(t));break;case"<":(typeof s=="number"||typeof t=="number")&&(i=s<t);break;case"<=":(typeof s=="number"||typeof t=="number")&&(i=s<=t);break;case">":(typeof s=="number"||typeof t=="number")&&(i=s>t);break;case">=":(typeof s=="number"||typeof t=="number")&&(i=s>=t);break;case"/":i=String(s).startsWith(String(t));break}return i};var Bx=Object.defineProperty,Rx=Object.getOwnPropertyDescriptor,xm=(s,e,t,i)=>{for(var n=Rx(e,t),r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&Bx(e,t,n),n},ct;const yh=(ct=class extends xe{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(s){this._placement=s,this.updatePosition()}static removeMenus(){for(const s of[...ct.dialog.children])s instanceof ct&&(s.remove(),s.visible=!1);setTimeout(()=>{ct.dialog.close(),ct.dialog.remove()},310)}get visible(){return this._visible}set visible(s){this._visible=s,s?(ct.dialog.parentElement||document.body.append(ct.dialog),this._previousContainer=this.parentElement,ct.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),ct.dialog.append(this),ct.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var e;(e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},310)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const s=this.placement??"right",e=await lh(this._previousContainer,this,{placement:s,middleware:[ih(10),ah(),oh(),rh({padding:5})]}),{x:t,y:i}=e;this.style.left=`${t}px`,this.style.top=`${i}px`}connectedCallback(){super.connectedCallback(),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("display","none"),this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return H` <slot></slot> `}},ct.styles=[rs.scrollbar,Ae`
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
    `],ct.dialog=Qe.create(()=>H` <dialog
      @click=${s=>{s.target===ct.dialog&&ct.removeMenus()}}
      @cancel=${()=>ct.removeMenus()}
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
    ></dialog>`),ct);xm([Y({type:String,reflect:!0})],yh.prototype,"placement");xm([Y({type:Boolean,reflect:!0})],yh.prototype,"visible");let wr=yh;var Ux=Object.defineProperty,Fx=Object.getOwnPropertyDescriptor,ti=(s,e,t,i)=>{for(var n=i>1?void 0:i?Fx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Ux(e,t,n),n},or;const jt=(or=class extends xe{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=Pn(),this._tooltip=Pn(),this._mouseLeave=!1,this.onClick=s=>{s.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{let s=this._contextMenu;if(this.contextMenuTemplate&&(s=Qe.create(()=>{const e=Qe.create(this.contextMenuTemplate);return e instanceof wr?H`${e}`:H`
          <bim-context-menu>${e}</bim-context-menu>
        `}),this.append(s),s.addEventListener("hidden",()=>{s==null||s.remove()})),s){const e=this.getAttribute("data-context-group");e&&s.setAttribute("data-context-group",e),this.closeNestedContexts();const t=pt.newRandomId();for(const i of s.children)i instanceof or&&i.setAttribute("data-context-group",t);s.visible=!0}},this.mouseLeave=!0}set loading(s){if(this._loading=s,s)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=s,this.icon="eos-icons:loading";else{const{disabled:e,icon:t}=this._stateBeforeLoading;this.disabled=e,this.icon=t}}get loading(){return this._loading}set mouseLeave(s){this._mouseLeave=s,s&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:s}=this._parent,{value:e}=this._tooltip;s&&e&&lh(s,e,{placement:"bottom",middleware:[ih(10),ah(),oh(),rh({padding:5})]}).then(t=>{const{x:i,y:n}=t;Object.assign(e.style,{left:`${i}px`,top:`${n}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const s=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},s)}closeNestedContexts(){const s=this.getAttribute("data-context-group");if(s)for(const e of wr.dialog.children){const t=e.getAttribute("data-context-group");if(e instanceof wr&&t===s){e.visible=!1,e.removeAttribute("data-context-group");for(const i of e.children)i instanceof or&&(i.closeNestedContexts(),i.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const s=H`
      <div ${Ze(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?H`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?H`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `;let e=H`${this.label}`;if((this._contextMenu||this.contextMenuTemplate)&&this.label){const t=H`<svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.125rem"
        viewBox="0 0 24 24"
        width="1.125rem"
        style="fill: var(--bim-label--c)"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>`;e=H`
        <div style="display: flex; align-items: center;">
          ${this.label}
          ${t}
        </div>
      `}return H`
      <div ${Ze(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?H`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${e}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?s:null}
      </div>
      <slot></slot>
    `}},or.styles=Ae`
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
  `,or);ti([Y({type:String,reflect:!0})],jt.prototype,"label",2);ti([Y({type:Boolean,attribute:"label-hidden",reflect:!0})],jt.prototype,"labelHidden",2);ti([Y({type:Boolean,reflect:!0})],jt.prototype,"active",2);ti([Y({type:Boolean,reflect:!0,attribute:"disabled"})],jt.prototype,"disabled",2);ti([Y({type:String,reflect:!0})],jt.prototype,"icon",2);ti([Y({type:Boolean,reflect:!0})],jt.prototype,"vertical",2);ti([Y({type:Number,attribute:"tooltip-time",reflect:!0})],jt.prototype,"tooltipTime",2);ti([Y({type:Boolean,attribute:"tooltip-visible",reflect:!0})],jt.prototype,"tooltipVisible",2);ti([Y({type:String,attribute:"tooltip-title",reflect:!0})],jt.prototype,"tooltipTitle",2);ti([Y({type:String,attribute:"tooltip-text",reflect:!0})],jt.prototype,"tooltipText",2);ti([Y({type:Boolean,reflect:!0})],jt.prototype,"loading",1);let jx=jt;var Hx=Object.defineProperty,Wr=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&Hx(e,t,n),n};const Cm=class extends xe{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(s){s.stopPropagation(),this.checked=s.target.checked,this.dispatchEvent(this.onValueChange)}render(){const s=H`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;return H`
      <div class="parent">
        <label class="parent-label">
          ${this.label?H`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
          <div class="input-container">
            <input
              type="checkbox"
              aria-label=${this.label||this.name||"Checkbox Input"}
              @change="${this.onChange}"
              .checked="${this.checked}"
            />
            ${s}
          </div>
        </label>
      </div>
    `}};Cm.styles=Ae`
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
  `;let Dn=Cm;Wr([Y({type:String,reflect:!0})],Dn.prototype,"icon");Wr([Y({type:String,reflect:!0})],Dn.prototype,"name");Wr([Y({type:String,reflect:!0})],Dn.prototype,"label");Wr([Y({type:Boolean,reflect:!0})],Dn.prototype,"checked");Wr([Y({type:Boolean,reflect:!0})],Dn.prototype,"inverted");var Vx=Object.defineProperty,Is=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&Vx(e,t,n),n};const Sm=class extends xe{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this.disabled=!1,this._colorInput=Pn(),this._textInput=Pn(),this.onValueChange=new Event("input"),this.onOpacityInput=s=>{const e=s.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(s){const{color:e,opacity:t}=s;this.color=e,t&&(this.opacity=t)}get value(){const s={color:this.color};return this.opacity&&(s.opacity=this.opacity),s}onColorInput(s){s.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(s){s.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:t}=e;let i=t.replace(/[^a-fA-F0-9]/g,"");i.startsWith("#")||(i=`#${i}`),e.value=i.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:s}=this._colorInput;s&&s.click()}render(){return H`
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
                ${Ze(this._colorInput)}
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
                ${Ze(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
                ?disabled=${this.disabled}
              />
            </div>
            ${this.opacity!==void 0?H`<bim-number-input
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
    `}};Sm.styles=Ae`
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
  `;let os=Sm;Is([Y({type:String,reflect:!0})],os.prototype,"name");Is([Y({type:String,reflect:!0})],os.prototype,"label");Is([Y({type:String,reflect:!0})],os.prototype,"icon");Is([Y({type:Boolean,reflect:!0})],os.prototype,"vertical");Is([Y({type:Number,reflect:!0})],os.prototype,"opacity");Is([Y({type:String,reflect:!0})],os.prototype,"color");Is([Y({type:Boolean,reflect:!0})],os.prototype,"disabled");var Wx=Object.defineProperty,qx=Object.getOwnPropertyDescriptor,as=(s,e,t,i)=>{for(var n=i>1?void 0:i?qx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Wx(e,t,n),n};const Em=class extends xe{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?ja(this.label):this.label}set value(s){this._value=s}render(){return H`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?H` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?H`<bim-checkbox
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
        ${!this.checkbox&&!this.noMark&&this.checked?H`<svg
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
    `}};Em.styles=Ae`
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
  `;let We=Em;as([Y({type:String,reflect:!0})],We.prototype,"img",2);as([Y({type:String,reflect:!0})],We.prototype,"label",2);as([Y({type:String,reflect:!0})],We.prototype,"icon",2);as([Y({type:Boolean,reflect:!0})],We.prototype,"checked",2);as([Y({type:Boolean,reflect:!0})],We.prototype,"checkbox",2);as([Y({type:Boolean,attribute:"no-mark",reflect:!0})],We.prototype,"noMark",2);as([Y({converter:{fromAttribute(s){return s&&ja(s)}}})],We.prototype,"value",1);as([Y({type:Boolean,reflect:!0})],We.prototype,"vertical",2);var Yx=Object.defineProperty,Gx=Object.getOwnPropertyDescriptor,mi=(s,e,t,i)=>{for(var n=i>1?void 0:i?Gx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Yx(e,t,n),n};const Tm=class extends Qe{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=Pn(),this.onOptionClick=s=>{const e=s.target,t=this._value.has(e);if(!this.multiple&&!this.required&&!t)this._value=new Set([e]);else if(!this.multiple&&!this.required&&t)this._value=new Set([]);else if(!this.multiple&&this.required&&!t)this._value=new Set([e]);else if(this.multiple&&!this.required&&!t)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&t){const i=[...this._value].filter(n=>n!==e);this._value=new Set(i)}else if(this.multiple&&this.required&&!t)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&t){const i=[...this._value].filter(r=>r!==e),n=new Set(i);n.size!==0&&(this._value=n)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.onSearch=({target:s})=>{const e=s.value.toLowerCase();for(const t of this._options)t instanceof We&&((t.label||t.value||"").toLowerCase().includes(e)?t.style.display="":t.style.display="none")},this.useObserver=!0}set visible(s){var e;if(s){const{value:t}=this._contextMenu;if(!t)return;for(const i of this.elements)t.append(i);this._visible=!0}else{for(const i of this.elements)this.append(i);this._visible=!1,this.resetVisibleElements();for(const i of this._options)i instanceof We&&(i.style.display="");const t=(e=this._contextMenu.value)==null?void 0:e.querySelector("bim-text-input");t&&(t.value="")}}get visible(){return this._visible}set value(s){if(this.required&&Object.keys(s).length===0)return;const e=new Set;for(const t of s){const i=this.findOption(t);if(i&&(e.add(i),!this.multiple&&Object.keys(s).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(s=>s instanceof We&&s.checked).map(s=>s.value)}get _options(){const s=new Set([...this.elements]);for(const e of this.children)e instanceof We&&s.add(e);return[...s]}onSlotChange(s){const e=s.target.assignedElements();this.observe(e);const t=new Set;for(const i of this.elements){if(!(i instanceof We)){i.remove();continue}i.checked&&t.add(i),i.removeEventListener("click",this.onOptionClick),i.addEventListener("click",this.onOptionClick)}this._value=t}updateOptionsState(){for(const s of this._options)s instanceof We&&(s.checked=this._value.has(s))}findOption(s){return this._options.find(e=>e instanceof We?e.label===s||e.value===s:!1)}render(){let s,e,t;if(this._value.size===0)s=this.placeholder??"Select an option...";else if(this._value.size===1){const i=[...this._value][0];s=(i==null?void 0:i.label)||(i==null?void 0:i.value),e=i==null?void 0:i.img,t=i==null?void 0:i.icon}else s=`Multiple (${this._value.size})`;return H`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${e}
            .icon=${t}
            style="overflow: hidden;"
            >${s}</bim-label
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
            ${Ze(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            ${this.searchBox?H`<bim-text-input @input=${this.onSearch} placeholder="Search..." debounce=200 style="--bim-input--bgc: var(--bim-ui_bg-contrast-30)"></bim-text-input>`:De}
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};Tm.styles=[rs.scrollbar,Ae`
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
    `];let ii=Tm;mi([Y({type:String,reflect:!0})],ii.prototype,"name",2);mi([Y({type:String,reflect:!0})],ii.prototype,"icon",2);mi([Y({type:String,reflect:!0})],ii.prototype,"label",2);mi([Y({type:Boolean,reflect:!0})],ii.prototype,"multiple",2);mi([Y({type:Boolean,reflect:!0})],ii.prototype,"required",2);mi([Y({type:Boolean,reflect:!0})],ii.prototype,"vertical",2);mi([Y({type:String,reflect:!0})],ii.prototype,"placeholder",2);mi([Y({type:Boolean,reflect:!0,attribute:"search-box"})],ii.prototype,"searchBox",2);mi([Y({type:Boolean,reflect:!0})],ii.prototype,"visible",1);mi([zs()],ii.prototype,"_value",2);var Xx=Object.defineProperty,Am=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&Xx(e,t,n),n};const Pm=class extends xe{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._elements={},this._templateIds=new Map,this._updateFunctions={},this._slotNames={notAllowed:"not-allowed",notFound:"not-found",emptyLayout:"empty-layout"},this.updateComponent={},this.emitLayoutChange=()=>{this.dispatchEvent(new Event("layoutchange"))}}set layouts(s){this._layouts=s,this._templateIds.clear()}get layouts(){return this._layouts}set elements(s){this._elements=s,this.setUpdateFunctions()}get elements(){return this._elements}getLayoutAreas(s){const{template:e}=s,t=e.split(`
`).map(i=>i.trim()).map(i=>i.split('"')[1]).filter(i=>i!==void 0).flatMap(i=>i.split(/\s+/));return[...new Set(t)].filter(i=>i!=="")}setUpdateFunctions(){const s={};for(const[e,t]of Object.entries(this.elements))"template"in t&&(s[e]=i=>{var n,r;(r=(n=this._updateFunctions)[e])==null||r.call(n,i)});this.updateComponent=s}disconnectedCallback(){super.disconnectedCallback(),this._templateIds.clear(),this._updateFunctions={},this.updateComponent={}}getTemplateId(s){let e=this._templateIds.get(s);return e||(e=pt.newRandomId(),this._templateIds.set(s,e)),e}cleanUpdateFunctions(){if(!this.layout){this._updateFunctions={};return}const s=this.layouts[this.layout],e=this.getLayoutAreas(s);for(const t in this.elements)e.includes(t)||delete this._updateFunctions[t]}clean(){this.style.gridTemplate="";for(const s of[...this.children])Object.values(this._slotNames).some(e=>s.getAttribute("slot")===e)||s.remove();this.cleanUpdateFunctions()}emitElementCreation(s){this.dispatchEvent(new CustomEvent("elementcreated",{detail:s}))}render(){if(this.layout){const s=this.layouts[this.layout];if(s){if(!(s.guard??(()=>!0))())return this.clean(),H`<slot name=${this._slotNames.notAllowed}></slot>`;const e=this.getLayoutAreas(s).map(t=>{var i;const n=((i=s.elements)==null?void 0:i[t])||this.elements[t];if(!n)return null;if(n instanceof HTMLElement)return n.style.gridArea=t,n;if("template"in n){const{template:l,initialState:c}=n,h=this.getTemplateId(l),d=this.querySelector(`[data-grid-template-id="${h}"]`);if(d)return d;const[u,p]=Qe.create(l,c);return this.emitElementCreation({name:t,element:u}),u.setAttribute("data-grid-template-id",h),u.style.gridArea=t,this._updateFunctions[t]=p,u}const r=this.getTemplateId(n),o=this.querySelector(`[data-grid-template-id="${r}"]`);if(o)return o;const a=Qe.create(n);return this.emitElementCreation({name:t,element:a}),a.setAttribute("data-grid-template-id",this.getTemplateId(n)),a.style.gridArea=t,a}).filter(t=>t!==null);this.clean(),this.style.gridTemplate=s.template,this.append(...e),this.emitLayoutChange()}else return this.clean(),H`<slot name=${this._slotNames.notFound}></slot>`}else return this.clean(),this.emitLayoutChange(),H`<slot name=${this._slotNames.emptyLayout}></slot>`;return H`${H`<slot></slot>`}`}};Pm.styles=Ae`
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
  `;let _h=Pm;Am([Y({type:Boolean,reflect:!0})],_h.prototype,"floating");Am([Y({type:String,reflect:!0})],_h.prototype,"layout");const Ec=class extends xe{render(){return H`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};Ec.styles=Ae`
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
  `,Ec.properties={icon:{type:String}};let Zx=Ec;var Qx=Object.defineProperty,Ha=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&Qx(e,t,n),n};const Mm=class extends xe{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const s={};for(const e of this.children){const t=e;"value"in t?s[t.name||t.label]=t.value:"checked"in t&&(s[t.name||t.label]=t.checked)}return s}set value(s){const e=[...this.children];for(const t in s){const i=e.find(o=>{const a=o;return a.name===t||a.label===t});if(!i)continue;const n=i,r=s[t];typeof r=="boolean"?n.checked=r:n.value=r}}render(){return H`
      <div class="parent">
        ${this.label||this.icon?H`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};Mm.styles=Ae`
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
  `;let qr=Mm;Ha([Y({type:String,reflect:!0})],qr.prototype,"name");Ha([Y({type:String,reflect:!0})],qr.prototype,"label");Ha([Y({type:String,reflect:!0})],qr.prototype,"icon");Ha([Y({type:Boolean,reflect:!0})],qr.prototype,"vertical");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function un(s,e,t){return s?e(s):t==null?void 0:t(s)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tc=s=>s??De;var Kx=Object.defineProperty,Yr=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&Kx(e,t,n),n};const Om=class extends xe{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1,this._imgTemplate=()=>H`<img src=${Tc(this.img)} .alt=${this.textContent||""} />`,this._iconTemplate=()=>H`<bim-icon .icon=${this.icon}></bim-icon>`}get value(){return this.textContent?ja(this.textContent):this.textContent}render(){return H`
      <div class="parent" title=${this.textContent}>
        ${un(this.img,this._imgTemplate,()=>De)}
        ${un(!this.iconHidden&&this.icon,this._iconTemplate,()=>De)}
        <p><slot></slot></p>
      </div>
    `}};Om.styles=Ae`
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
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
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
  `;let zn=Om;Yr([Y({type:String,reflect:!0})],zn.prototype,"img");Yr([Y({type:Boolean,attribute:"label-hidden",reflect:!0})],zn.prototype,"labelHidden");Yr([Y({type:String,reflect:!0})],zn.prototype,"icon");Yr([Y({type:Boolean,attribute:"icon-hidden",reflect:!0})],zn.prototype,"iconHidden");Yr([Y({type:Boolean,reflect:!0})],zn.prototype,"vertical");var Jx=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,Ht=(s,e,t,i)=>{for(var n=i>1?void 0:i?e2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Jx(e,t,n),n};const km=class extends xe{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Pn(),this.onValueChange=new Event("change")}set value(s){this.setValue(s.toString())}get value(){return this._value}onChange(s){s.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(s){const{value:e}=this._input;let t=s;if(t=t.replace(/[^0-9.-]/g,""),t=t.replace(/(\..*)\./g,"$1"),t.endsWith(".")||(t.lastIndexOf("-")>0&&(t=t[0]+t.substring(1).replace(/-/g,"")),t==="-"||t==="-0"))return;let i=Number(t);Number.isNaN(i)||(i=this.min!==void 0?Math.max(i,this.min):i,i=this.max!==void 0?Math.min(i,this.max):i,this.value!==i&&(this._value=i,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:s}=this._input;s&&Number.isNaN(Number(s.value))&&(s.value=this.value.toString())}onSliderMouseDown(s){document.body.style.cursor="w-resize";const{clientX:e}=s,t=this.value;let i=!1;const n=a=>{var l;i=!0;const{clientX:c}=a,h=this.step??1,d=((l=h.toString().split(".")[1])==null?void 0:l.length)||0,u=1/(this.sensitivity??1),p=(c-e)/u;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const g=t+p*h;this.setValue(g.toFixed(d))},r=()=>{this.slider=!0,this.removeEventListener("blur",r)},o=()=>{document.removeEventListener("mousemove",n),document.body.style.cursor="default",i?i=!1:(this.addEventListener("blur",r),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)}onFocus(s){s.stopPropagation();const e=t=>{t.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:s}=this._input;s&&s.focus()}render(){const s=H`
      ${this.pref||this.icon?H`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${Ze(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${o=>o.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?H`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,t=this.max??1/0,i=100*(this.value-e)/(t-e),n=H`
      <style>
        .slider-indicator {
          width: ${`${i}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?H`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?H`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,r=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return H`
      <bim-input
        title=${r}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?n:s}
      </bim-input>
    `}};km.styles=Ae`
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
  `;let Mt=km;Ht([Y({type:String,reflect:!0})],Mt.prototype,"name",2);Ht([Y({type:String,reflect:!0})],Mt.prototype,"icon",2);Ht([Y({type:String,reflect:!0})],Mt.prototype,"label",2);Ht([Y({type:String,reflect:!0})],Mt.prototype,"pref",2);Ht([Y({type:Number,reflect:!0})],Mt.prototype,"min",2);Ht([Y({type:Number,reflect:!0})],Mt.prototype,"value",1);Ht([Y({type:Number,reflect:!0})],Mt.prototype,"step",2);Ht([Y({type:Number,reflect:!0})],Mt.prototype,"sensitivity",2);Ht([Y({type:Number,reflect:!0})],Mt.prototype,"max",2);Ht([Y({type:String,reflect:!0})],Mt.prototype,"suffix",2);Ht([Y({type:Boolean,reflect:!0})],Mt.prototype,"vertical",2);Ht([Y({type:Boolean,reflect:!0})],Mt.prototype,"slider",2);var t2=Object.defineProperty,i2=Object.getOwnPropertyDescriptor,Gr=(s,e,t,i)=>{for(var n=i>1?void 0:i?i2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&t2(e,t,n),n};const Dm=class extends xe{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(s){this._hidden=s,this.activationButton.active=!s,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return Nr(this,this.valueTransform)}set value(s){const e=[...this.children];for(const t in s){const i=e.find(r=>{const o=r;return o.name===t||o.label===t});if(!i)continue;const n=i;n.value=s[t]}}animatePanles(){const s=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];this.animate(s,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanles()}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const s=this.querySelectorAll("bim-panel-section");for(const e of s)e.collapsed=!0}expandSections(){const s=this.querySelectorAll("bim-panel-section");for(const e of s)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,H`
      <div class="parent">
        ${this.label||this.name||this.icon?H`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};Dm.styles=[rs.scrollbar,Ae`
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
    `];let Ls=Dm;Gr([Y({type:String,reflect:!0})],Ls.prototype,"icon",2);Gr([Y({type:String,reflect:!0})],Ls.prototype,"name",2);Gr([Y({type:String,reflect:!0})],Ls.prototype,"label",2);Gr([Y({type:Boolean,reflect:!0})],Ls.prototype,"hidden",1);Gr([Y({type:Boolean,attribute:"header-hidden",reflect:!0})],Ls.prototype,"headerHidden",2);var s2=Object.defineProperty,Xr=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&s2(e,t,n),n};const zm=class extends xe{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}get value(){const s=this.parentElement;let e;return s instanceof Ls&&(e=s.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),Nr(this,e)}set value(s){const e=[...this.children];for(const t in s){const i=e.find(r=>{const o=r;return o.name===t||o.label===t});if(!i)continue;const n=i;n.value=s[t]}}setFlexAfterTransition(){var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector(".components");e&&setTimeout(()=>{this.collapsed?e.style.removeProperty("flex"):e.style.setProperty("flex","1")},150)}animateHeader(){var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=e.clientHeight:(e.style.setProperty("transition","none"),e.style.setProperty("height","auto"),e.style.setProperty("padding","0.125rem 1rem 1rem"),this.componentHeight=e.clientHeight,requestAnimationFrame(()=>{e.style.setProperty("height","0px"),e.style.setProperty("padding","0 1rem 0"),e.style.setProperty("transition","height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)")}))),this.collapsed?(e.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{e.style.setProperty("height","0px"),e.style.setProperty("padding","0 1rem 0")})):(e.style.setProperty("height","0px"),e.style.setProperty("padding","0 1rem 0"),requestAnimationFrame(()=>{e.style.setProperty("height",`${this.componentHeight}px`),e.style.setProperty("padding","0.125rem 1rem 1rem")})),this.setFlexAfterTransition()}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(s){s.target.assignedElements({flatten:!0}).forEach((e,t)=>{const i=t*.05;e.style.setProperty("transition-delay",`${i}s`)})}handlePointerEnter(){const s=this.renderRoot.querySelector(".expand-icon");this.collapsed?s==null||s.style.setProperty("animation","collapseAnim 0.5s"):s==null||s.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const s=this.renderRoot.querySelector(".expand-icon");s==null||s.style.setProperty("animation","none")}render(){const s=this.label||this.icon||this.name||this.fixed,e=H`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,t=H`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?H`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:e}
      </div>
    `;return H`
      <div class="parent">
        ${s?t:null}
        <div class="components" style="flex: 1;">
          <div>
            <slot @slotchange=${this.handelSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};zm.styles=[rs.scrollbar,Ae`
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
    `];let In=zm;Xr([Y({type:String,reflect:!0})],In.prototype,"icon");Xr([Y({type:String,reflect:!0})],In.prototype,"label");Xr([Y({type:String,reflect:!0})],In.prototype,"name");Xr([Y({type:Boolean,reflect:!0})],In.prototype,"fixed");Xr([Y({type:Boolean,reflect:!0})],In.prototype,"collapsed");var n2=Object.defineProperty,Zr=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&n2(e,t,n),n};const Im=class extends xe{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=s=>{this._value=s.target,this.setAnimatedBackgound(),this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof We&&(e.checked=e===s.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(s){const e=this.findOption(s);if(e){for(const t of this._options)t.checked=t===e;this._value=e,this.setAnimatedBackgound(),this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(s){const e=s.target.assignedElements();for(const t of e)t instanceof We&&(t.noMark=!0,t.removeEventListener("click",this.onOptionClick),t.addEventListener("click",this.onOptionClick))}findOption(s){return this._options.find(e=>e instanceof We?e.label===s||e.value===s:!1)}doubleRequestAnimationFrames(s){requestAnimationFrame(()=>requestAnimationFrame(s))}setAnimatedBackgound(s=!1){const e=this.renderRoot.querySelector(".animated-background"),t=this._value;requestAnimationFrame(()=>{var i,n,r,o;const a=(o=(r=(n=(i=t==null?void 0:t.parentElement)==null?void 0:i.shadowRoot)==null?void 0:n.querySelector("bim-input"))==null?void 0:r.shadowRoot)==null?void 0:o.querySelector(".input"),l={width:t==null?void 0:t.clientWidth,height:t==null?void 0:t.clientHeight,top:((t==null?void 0:t.offsetTop)??0)-((a==null?void 0:a.offsetTop)??0),left:((t==null?void 0:t.offsetLeft)??0)-((a==null?void 0:a.offsetLeft)??0)};e==null||e.style.setProperty("width",`${l.width}px`),e==null||e.style.setProperty("height",`${l.height}px`),e==null||e.style.setProperty("top",`${l.top}px`),e==null||e.style.setProperty("left",`${l.left}px`)}),s&&this.doubleRequestAnimationFrames(()=>{const i="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${i}, height ${.3}s ${i}, top ${.3}s ${i}, left ${.3}s ${i}`)})}firstUpdated(){const s=[...this.children].find(e=>e instanceof We&&e.checked);s&&(this._value=s),window.addEventListener("load",()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return H`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};Im.styles=Ae`
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
  `;let Ln=Im;Zr([Y({type:String,reflect:!0})],Ln.prototype,"name");Zr([Y({type:String,reflect:!0})],Ln.prototype,"icon");Zr([Y({type:String,reflect:!0})],Ln.prototype,"label");Zr([Y({type:Boolean,reflect:!0})],Ln.prototype,"vertical");Zr([zs()],Ln.prototype,"_value");const r2=()=>H`
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
  `,o2=()=>H`
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
  `;var a2=Object.defineProperty,l2=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&a2(e,t,n),n};const Lm=class extends xe{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.table=null,this.group=null,this.row=null,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}get dataTransform(){var s,e,t,i;const n=(e=(s=this.row)==null?void 0:s.dataTransform)==null?void 0:e[this.column],r=(t=this.table)==null?void 0:t.dataTransform[this.column],o=(i=this.table)==null?void 0:i.defaultContentTemplate;return n||r||o}get templateValue(){const{data:s,rowData:e,group:t}=this,i=this.dataTransform;if(i&&s!=null&&t){const n=i(s,e,t);return typeof n=="string"||typeof n=="boolean"||typeof n=="number"?H`<bim-label>${n}</bim-label>`:n}return s!=null?H`<bim-label>${s}</bim-label>`:De}connectedCallback(){super.connectedCallback(),this.style.gridArea=this.column.toString()}render(){return H`${this.templateValue}`}};Lm.styles=Ae`
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
  `;let $m=Lm;l2([Y({type:String,reflect:!0})],$m.prototype,"column");const Nm=class extends xe{constructor(){super(...arguments),this._groups=[],this.group=this.closest("bim-table-group"),this._data=[],this.table=this.closest("bim-table")}get data(){var s;return((s=this.group)==null?void 0:s.data.children)??this._data}set data(s){this._data=s}clean(){for(const s of this._groups)s.remove();this._groups=[]}render(){return this.clean(),H`
      <slot></slot>
      ${this.data.map(s=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=s,e})}
    `}};Nm.styles=Ae`
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
  `;let c2=Nm;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bm="important",h2=" !"+Bm,xi=Zf(class extends Qf{constructor(s){var e;if(super(s),s.type!==Xf.ATTRIBUTE||s.name!=="style"||((e=s.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{const i=s[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[e]){const{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(const i in e){const n=e[i];if(n!=null){this.ft.add(i);const r=typeof n=="string"&&n.endsWith(h2);i.includes("-")||r?t.setProperty(i,r?n.slice(0,-11):n,r?Bm:""):t[i]=n}}return Os}});var d2=Object.defineProperty,u2=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&d2(e,t,n),n};const Rm=class extends xe{constructor(){super(...arguments),this.childrenHidden=!0,this.table=null,this.data={data:{}}}get rowElement(){const s=this.shadowRoot;return s?s.querySelector("bim-table-row"):null}get childrenElement(){const s=this.shadowRoot;return s?s.querySelector("bim-table-children"):null}get _isChildrenEmpty(){return!(this.data.children&&this.data.children.length!==0)}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}disconnectedCallback(){super.disconnectedCallback(),this.data={data:{}}}toggleChildren(s){this.childrenHidden=typeof s>"u"?!this.childrenHidden:!s,this.animateTableChildren(!0)}animateTableChildren(s=!0){if(!s){requestAnimationFrame(()=>{var r;const o=this.renderRoot.querySelector(".caret"),a=this.renderRoot.querySelector(".branch-vertical"),l=(r=this.renderRoot.querySelector("bim-table-children"))==null?void 0:r.querySelector(".branch-vertical");o.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),a.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),l==null||l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const e=500,t=0,i=200,n=350;requestAnimationFrame(()=>{var r;const o=this.renderRoot.querySelector("bim-table-children"),a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),c=(r=this.renderRoot.querySelector("bim-table-children"))==null?void 0:r.querySelector(".branch-vertical"),h=()=>{var m;const v=(m=o==null?void 0:o.renderRoot)==null?void 0:m.querySelectorAll("bim-table-group");v==null||v.forEach((f,b)=>{f.style.setProperty("opacity","0"),f.style.setProperty("left","-30px");const y=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];f.animate(y,{duration:e/2,delay:50+b*t,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},d=()=>{const m=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];a==null||a.animate(m,{duration:n,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},u=()=>{const m=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];l==null||l.animate(m,{duration:i,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:t,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},p=()=>{var m;const v=(m=this.renderRoot.querySelector("bim-table-row"))==null?void 0:m.querySelector(".branch-horizontal");if(v){v.style.setProperty("transform-origin","center right");const f=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];v.animate(f,{duration:i,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},g=()=>{const m=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];c==null||c.animate(m,{duration:i*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(t+i)*.7})};h(),d(),u(),p(),g()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(s=>{var e,t,i;if(!this.childrenHidden){s.style.setProperty("transform","translateY(-50%) rotate(90deg)");const n=(e=s.parentElement)==null?void 0:e.querySelector(".branch-horizontal");n&&n.style.setProperty("transform","scaleX(0)");const r=(i=(t=s.parentElement)==null?void 0:t.parentElement)==null?void 0:i.querySelectorAll(".branch-vertical");r==null||r.forEach(o=>{o.style.setProperty("transform","scaleY(1)")})}})}render(){if(!this.table)return H`${De}`;const s=this.table.getGroupIndentation(this.data)??0;let e;if(!this.table.noIndentation){const r={left:`${s-1+(this.table.selectableRows?2.05:.5625)}rem`};e=H`<div style=${xi(r)} class="branch branch-horizontal"></div>`}const t=H`
      ${this.table.noIndentation?null:H`
            <style>
              .branch-vertical {
                left: ${s+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `;let i;if(!this.table.noIndentation){const r=document.createElementNS("http://www.w3.org/2000/svg","svg");if(r.setAttribute("height","9.9"),r.setAttribute("width","7.5"),r.setAttribute("viewBox","0 0 4.6666672 7.7"),this.table.noCarets){const a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx","2.3333336"),a.setAttribute("cy","3.85"),a.setAttribute("r","2.5"),r.append(a)}else{const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),r.append(a)}const o={left:`${(this.table.selectableRows?1.5:.125)+s}rem`,cursor:`${this.table.noCarets?"unset":"pointer"}`};i=H`<div @click=${a=>{var l;(l=this.table)!=null&&l.noCarets||(a.stopPropagation(),this.toggleChildren())}} style=${xi(o)} class="caret">${r}</div>`}let n;return!this._isChildrenEmpty&&!this.childrenHidden&&(n=H`
        <bim-table-children ${Ze(r=>{if(!r)return;const o=r;o.table=this.table,o.group=this})}>${t}</bim-table-children>
      `),H`
      <div class="parent">
        <bim-table-row ${Ze(r=>{var o;if(!r)return;const a=r;a.table=this.table,a.group=this,(o=this.table)==null||o.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:a}}))})}>
          ${un(!this._isChildrenEmpty,()=>t)}
          ${un(s!==0,()=>e)}
          ${un(!this.table.noIndentation&&!this._isChildrenEmpty,()=>i)}
        </bim-table-row>
        ${n}
      </div>
    `}};Rm.styles=Ae`
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
  `;let Um=Rm;u2([Y({type:Boolean,attribute:"children-hidden",reflect:!0})],Um.prototype,"childrenHidden");var p2=Object.defineProperty,$n=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&p2(e,t,n),n};const Fm=class extends xe{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.group=null,this._data={},this.isHeader=!1,this.table=null,this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._intersecting=!1,this._timeOutDelay=250,this._observer=new IntersectionObserver(s=>{window.clearTimeout(this._intersectTimeout),this._intersectTimeout=void 0,s[0].isIntersecting?this._intersectTimeout=window.setTimeout(()=>{this._intersecting=!0},this._timeOutDelay):this._intersecting=!1},{rootMargin:"36px"}),this.dataTransform=null,this._interval=null,this.clearDataTransform=()=>{this.dataTransform=null,this._interval!==null&&(clearInterval(this._interval),this._interval=null)},this._cache={}}get groupData(){var s;return(s=this.group)==null?void 0:s.data}get data(){var s;return((s=this.group)==null?void 0:s.data.data)??this._data}set data(s){this._data=s}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}get _isSelected(){var s;return(s=this.table)==null?void 0:s.selection.has(this.data)}onSelectionChange(s){if(!this.table)return;const e=s.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}firstUpdated(s){super.firstUpdated(s),this._observer.observe(this)}connectedCallback(){super.connectedCallback(),this.toggleAttribute("selected",this._isSelected),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`)}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.columns=[],this.hiddenColumns=[],this.toggleAttribute("selected",!1),this.data={},this.table&&(this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.table=null),this.clean()}applyAdaptativeDataTransform(s){this.addEventListener("pointerenter",()=>{this.dataTransform=s,this._interval=window.setInterval(()=>{this.matches(":hover")||this.clearDataTransform()},50)})}clean(){clearTimeout(this._intersectTimeout),this._intersectTimeout=void 0,this._timeOutDelay=250;for(const[,s]of Object.entries(this._cache))s.remove();this._cache={}}render(){if(!(this.table&&this._intersecting))return H`${De}`;const s=this.table.getRowIndentation(this.data)??0,e=[];for(const t in this.data){if(this.hiddenColumns.includes(t))continue;const i=document.createElement("bim-table-cell");i.group=this.group,i.table=this.table,i.row=this,i.column=t,this._columnNames.indexOf(t)===0&&(i.style.marginLeft=`${this.table.noIndentation?0:s+.75}rem`);const n=this._columnNames.indexOf(t);i.setAttribute("data-column-index",String(n)),i.toggleAttribute("data-no-indentation",n===0&&this.table.noIndentation),i.toggleAttribute("data-cell-header",this.isHeader),i.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:i}})),e.push(i)}return this._timeOutDelay=0,H`
      ${!this.isHeader&&this.table.selectableRows?H`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected??!1}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${e}
      <slot></slot>
    `}};Fm.styles=Ae`
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
        var(--bim-ui_accent-base) 10%
      );
    }
  `;let $s=Fm;$n([Y({type:Boolean,reflect:!0})],$s.prototype,"selected");$n([Y({attribute:!1})],$s.prototype,"columns");$n([Y({attribute:!1})],$s.prototype,"hiddenColumns");$n([Y({type:Boolean,attribute:"is-header",reflect:!0})],$s.prototype,"isHeader");$n([zs()],$s.prototype,"_intersecting");$n([zs()],$s.prototype,"dataTransform");var f2=Object.defineProperty,m2=Object.getOwnPropertyDescriptor,Vt=(s,e,t,i)=>{for(var n=i>1?void 0:i?m2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&f2(e,t,n),n};const jm=class extends xe{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.noCarets=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this.defaultContentTemplate=s=>H`<bim-label style="white-space: normal;">${s}</bim-label>`,this._stringFilterFunction=(s,e)=>Object.values(e.data).some(t=>String(t).toLowerCase().includes(s.toLowerCase())),this._queryFilterFunction=(s,e)=>{let t=!1;const i=Sc(s)??[];for(const n of i){if("queries"in n){t=!1;break}const{condition:r,value:o}=n;let{key:a}=n;if(a.startsWith("[")&&a.endsWith("]")){const l=a.replace("[","").replace("]","");a=l,t=Object.keys(e.data).filter(c=>c.includes(l)).map(c=>Nu(e.data[c],r,o)).some(c=>c)}else t=Nu(e.data[a],r,o);if(!t)break}return t}}set columns(s){const e=[];for(const t of s){const i=typeof t=="string"?{name:t,width:`minmax(${this.minColWidth}, 1fr)`}:t;e.push(i)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const s={};for(const e of this.columns){const{name:t}=e;s[t]=String(t)}return s}get value(){return this._filteredData}set queryString(s){this.toggleAttribute("data-processing",!0),this._queryString=s&&s.trim()!==""?s.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(s){this._data=s,this.updateFilteredData(),this.computeMissingColumns(s)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(s=>{setTimeout(()=>{s(this.data)})})}set hiddenColumns(s){this._hiddenColumns=s,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(Sc(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(s){let e=!1;for(const t of s){const{children:i,data:n}=t;for(const r in n)this._columns.map(o=>typeof o=="string"?o:o.name).includes(r)||(this._columns.push({name:r,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(i){const r=this.computeMissingColumns(i);r&&!e&&(e=r)}}return e}generateText(s="comma",e=this.value,t="",i=!0){const n=this._textDelimiters[s];let r="";const o=this.columns.map(a=>a.name);if(i){this.indentationInText&&(r+=`Indentation${n}`);const a=`${o.join(n)}
`;r+=a}for(const[a,l]of e.entries()){const{data:c,children:h}=l,d=this.indentationInText?`${t}${a+1}${n}`:"",u=o.map(g=>c[g]??""),p=`${d}${u.join(n)}
`;r+=p,h&&(r+=this.generateText(s,l.children,`${t}${a+1}.`,!1))}return r}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(s){const e={};if(!s)return e;const{data:t}=s.data;for(const n of Object.keys(this.dataTransform)){const r=this.columns.find(o=>o.name===n);r&&r.forceDataTransform&&(n in t||(t[n]=""))}const i=t;for(const n in i){const r=this.dataTransform[n];r?e[n]=r(i[n],t,s):e[n]=t[n]}return e}downloadData(s="BIM Table Data",e="json"){let t=null;if(e==="json"&&(t=new File([JSON.stringify(this.value,void 0,2)],`${s}.json`)),e==="csv"&&(t=new File([this.csv],`${s}.csv`)),e==="tsv"&&(t=new File([this.tsv],`${s}.tsv`)),!t)return;const i=document.createElement("a");i.href=URL.createObjectURL(t),i.download=t.name,i.click(),URL.revokeObjectURL(i.href)}getRowIndentation(s,e=this.value,t=0){for(const i of e){if(i.data===s)return t;if(i.children){const n=this.getRowIndentation(s,i.children,t+1);if(n!==null)return n}}return null}getGroupIndentation(s,e=this.value,t=0){for(const i of e){if(i===s)return t;if(i.children){const n=this.getGroupIndentation(s,i.children,t+1);if(n!==null)return n}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(s=!1){if(this._filteredData.length!==0&&!s||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){if(this.loading=!1,this._filteredData.length!==0)return!1;const t=this.querySelector("[slot='error-loading']"),i=t==null?void 0:t.querySelector("[data-table-element='error-message']");return e instanceof Error&&i&&e.message.trim()!==""&&(i.textContent=e.message),this._errorLoading=!0,!1}}filter(s,e=this.filterFunction??this._stringFilterFunction,t=this.data){const i=[];for(const n of t)if(e(s,n)){if(this.preserveStructureOnFilter){const r={data:n.data};if(n.children){const o=this.filter(s,e,n.children);o.length&&(r.children=o)}i.push(r)}else if(i.push({data:n.data}),n.children){const r=this.filter(s,e,n.children);i.push(...r)}}else if(n.children){const r=this.filter(s,e,n.children);this.preserveStructureOnFilter&&r.length?i.push({data:n.data,children:r}):i.push(...r)}return i}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return r2();if(this._errorLoading)return H`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return H`<slot name="missing-data"></slot>`;const s=t=>{if(!t)return;const i=t;i.table=this,i.data=this._headerRowData},e=t=>{if(!t)return;const i=t;i.table=this,i.data=this.value,i.requestUpdate()};return H`
      <div class="parent">
        ${o2()}
        ${un(!this.headersHidden,()=>H`<bim-table-row is-header style="grid-area: Header; position: sticky; top: 0; z-index: 5" ${Ze(s)}></bim-table-row>`)} 
        <div style="overflow-x: hidden; grid-area: Body">
          <bim-table-children ${Ze(e)} style="grid-area: Body; background-color: transparent"></bim-table-children>
        </div>
      </div>
    `}};jm.styles=[rs.scrollbar,Ae`
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
    `];let Ot=jm;Vt([zs()],Ot.prototype,"_filteredData",2);Vt([Y({type:Boolean,attribute:"headers-hidden",reflect:!0})],Ot.prototype,"headersHidden",2);Vt([Y({type:String,attribute:"min-col-width",reflect:!0})],Ot.prototype,"minColWidth",2);Vt([Y({type:Array,attribute:!1})],Ot.prototype,"columns",1);Vt([Y({type:Array,attribute:!1})],Ot.prototype,"data",1);Vt([Y({type:Boolean,reflect:!0})],Ot.prototype,"expanded",2);Vt([Y({type:Boolean,reflect:!0,attribute:"selectable-rows"})],Ot.prototype,"selectableRows",2);Vt([Y({attribute:!1})],Ot.prototype,"selection",2);Vt([Y({type:Boolean,attribute:"no-indentation",reflect:!0})],Ot.prototype,"noIndentation",2);Vt([Y({type:Boolean,attribute:"no-carets",reflect:!0})],Ot.prototype,"noCarets",2);Vt([Y({type:Boolean,reflect:!0})],Ot.prototype,"loading",2);Vt([zs()],Ot.prototype,"_errorLoading",2);var g2=Object.defineProperty,v2=Object.getOwnPropertyDescriptor,Nn=(s,e,t,i)=>{for(var n=i>1?void 0:i?v2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&g2(e,t,n),n};const Hm=class extends xe{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=s=>{const e=s.target;e instanceof xt&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(s){this._tab=s;const e=[...this.children],t=e.find(i=>i instanceof xt&&i.name===s);for(const i of e){if(!(i instanceof xt))continue;i.hidden=t!==i;const n=this.getTabSwitcher(i.name);n&&n.toggleAttribute("data-active",!i.hidden)}t||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(s){return this._switchers.find(e=>e.getAttribute("data-name")===s)}createSwitchers(){this._switchers=[];for(const s of this.children){if(!(s instanceof xt))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===s.name?this.toggleAttribute("tab",!1):this.tab=s.name,this.setAnimatedBackgound()}),e.setAttribute("data-name",s.name),e.className="switcher";const t=document.createElement("bim-label");t.textContent=s.label??null,t.icon=s.icon,e.append(t),this._switchers.push(e)}}updateSwitchers(){for(const s of this.children){if(!(s instanceof xt))continue;const e=this._switchers.find(i=>i.getAttribute("data-name")===s.name);if(!e)continue;const t=e.querySelector("bim-label");t&&(t.textContent=s.label??null,t.icon=s.icon)}}onSlotChange(s){this.createSwitchers();const e=s.target.assignedElements(),t=e.find(i=>i instanceof xt?this.tab?i.name===this.tab:!i.hidden:!1);t&&t instanceof xt&&(this.tab=t.name);for(const i of e){if(!(i instanceof xt)){i.remove();continue}i.removeEventListener("hiddenchange",this.onTabHiddenChange),t!==i&&(i.hidden=!0),i.addEventListener("hiddenchange",this.onTabHiddenChange)}}doubleRequestAnimationFrames(s){requestAnimationFrame(()=>requestAnimationFrame(s))}setAnimatedBackgound(s=!1){var e;const t=this.renderRoot.querySelector(".animated-background"),i=[...((e=this.renderRoot.querySelector(".switchers"))==null?void 0:e.querySelectorAll(".switcher"))||[]].filter(n=>n.hasAttribute("data-active"))[0];requestAnimationFrame(()=>{var n,r,o,a;const l=(a=(o=(r=(n=i==null?void 0:i.parentElement)==null?void 0:n.shadowRoot)==null?void 0:r.querySelector("bim-input"))==null?void 0:o.shadowRoot)==null?void 0:a.querySelector(".input"),c={width:i==null?void 0:i.clientWidth,height:i==null?void 0:i.clientHeight,top:((i==null?void 0:i.offsetTop)??0)-((l==null?void 0:l.offsetTop)??0),left:((i==null?void 0:i.offsetLeft)??0)-((l==null?void 0:l.offsetLeft)??0)};i?(t==null||t.style.setProperty("width",`${c.width}px`),t==null||t.style.setProperty("height",`${c.height}px`),t==null||t.style.setProperty("left",`${c.left}px`)):t==null||t.style.setProperty("width","0"),this.bottom?(t==null||t.style.setProperty("top","100%"),t==null||t.style.setProperty("transform","translateY(-100%)")):t==null||t.style.setProperty("top",`${c.top}px`)}),s&&this.doubleRequestAnimationFrames(()=>{const n="ease";t==null||t.style.setProperty("transition",`width ${.3}s ${n}, height ${.3}s ${n}, top ${.3}s ${n}, left ${.3}s ${n}`)})}firstUpdated(){requestAnimationFrame(()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return H`
      <div class="parent">
        <div class="switchers">
          <div class="animated-background"></div>
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Hm.styles=[rs.scrollbar,Ae`
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
    `];let Pi=Hm;Nn([zs()],Pi.prototype,"_switchers",2);Nn([Y({type:Boolean,reflect:!0})],Pi.prototype,"bottom",2);Nn([Y({type:Boolean,attribute:"switchers-hidden",reflect:!0})],Pi.prototype,"switchersHidden",2);Nn([Y({type:Boolean,reflect:!0})],Pi.prototype,"floating",2);Nn([Y({type:String,reflect:!0})],Pi.prototype,"tab",1);Nn([Y({type:Boolean,attribute:"switchers-full",reflect:!0})],Pi.prototype,"switchersFull",2);var b2=Object.defineProperty,y2=Object.getOwnPropertyDescriptor,Va=(s,e,t,i)=>{for(var n=i>1?void 0:i?y2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&b2(e,t,n),n};const Vm=class extends xe{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(s){this._label=s;const e=this.parentElement;e instanceof Pi&&e.updateSwitchers()}get label(){return this._label}set icon(s){this._icon=s;const e=this.parentElement;e instanceof Pi&&e.updateSwitchers()}get icon(){return this._icon}set hidden(s){this._hidden=s,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:s}=this;if(s&&this.name===this._defaultName){const e=[...s.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return H` <slot></slot> `}};Vm.styles=Ae`
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
  `;let xt=Vm;Va([Y({type:String,reflect:!0})],xt.prototype,"name",2);Va([Y({type:String,reflect:!0})],xt.prototype,"label",1);Va([Y({type:String,reflect:!0})],xt.prototype,"icon",1);Va([Y({type:Boolean,reflect:!0})],xt.prototype,"hidden",1);var _2=Object.defineProperty,w2=Object.getOwnPropertyDescriptor,si=(s,e,t,i)=>{for(var n=i>1?void 0:i?w2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&_2(e,t,n),n};const Wm=class extends xe{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this.disabled=!1,this.resize="vertical",this._type="text",this.onValueChange=new Event("input")}set type(s){this._inputTypes.includes(s)&&(this._type=s)}get type(){return this._type}get query(){return Sc(this.value)}onInputChange(s){s.stopPropagation();const e=s.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("input");e==null||e.focus()})}render(){return H`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?H` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              ?disabled=${this.disabled}
              placeholder=${Tc(this.placeholder)}
              @input=${this.onInputChange}
              style="resize: ${this.resize};"
            ></textarea>`:H` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              ?disabled=${this.disabled}
              placeholder=${Tc(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};Wm.styles=[rs.scrollbar,Ae`
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
    `];let wt=Wm;si([Y({type:String,reflect:!0})],wt.prototype,"icon",2);si([Y({type:String,reflect:!0})],wt.prototype,"label",2);si([Y({type:String,reflect:!0})],wt.prototype,"name",2);si([Y({type:String,reflect:!0})],wt.prototype,"placeholder",2);si([Y({type:String,reflect:!0})],wt.prototype,"value",2);si([Y({type:Boolean,reflect:!0})],wt.prototype,"vertical",2);si([Y({type:Number,reflect:!0})],wt.prototype,"debounce",2);si([Y({type:Number,reflect:!0})],wt.prototype,"rows",2);si([Y({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);si([Y({type:String,reflect:!0})],wt.prototype,"resize",2);si([Y({type:String,reflect:!0})],wt.prototype,"type",1);var x2=Object.defineProperty,C2=Object.getOwnPropertyDescriptor,qm=(s,e,t,i)=>{for(var n=i>1?void 0:i?C2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&x2(e,t,n),n};const Ym=class extends xe{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(s){this._vertical=s,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const s=this.children;for(const e of s)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return H`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Ym.styles=Ae`
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
  `;let Wa=Ym;qm([Y({type:Number,reflect:!0})],Wa.prototype,"rows",2);qm([Y({type:Boolean,reflect:!0})],Wa.prototype,"vertical",1);var S2=Object.defineProperty,E2=Object.getOwnPropertyDescriptor,qa=(s,e,t,i)=>{for(var n=i>1?void 0:i?E2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&S2(e,t,n),n};const Gm=class extends xe{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(s){this._vertical=s,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(s){this._labelHidden=s,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const s=this.children;for(const e of s)e instanceof Wa&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return H`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?H`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Gm.styles=Ae`
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
  `;let Bn=Gm;qa([Y({type:String,reflect:!0})],Bn.prototype,"label",2);qa([Y({type:String,reflect:!0})],Bn.prototype,"icon",2);qa([Y({type:Boolean,reflect:!0})],Bn.prototype,"vertical",1);qa([Y({type:Boolean,attribute:"label-hidden",reflect:!0})],Bn.prototype,"labelHidden",1);var T2=Object.defineProperty,A2=Object.getOwnPropertyDescriptor,wh=(s,e,t,i)=>{for(var n=i>1?void 0:i?A2(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&T2(e,t,n),n};const Xm=class extends xe{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(s){this._vertical=s,this.updateSections()}get vertical(){return this._vertical}set hidden(s){this._hidden=s,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const s=this.children;for(const e of s)e instanceof Bn&&(e.labelHidden=this.vertical&&!pt.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return H`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Xm.styles=Ae`
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
  `;let Ya=Xm;wh([Y({type:String,reflect:!0})],Ya.prototype,"icon",2);wh([Y({type:Boolean,attribute:"labels-hidden",reflect:!0})],Ya.prototype,"labelsHidden",2);wh([Y({type:Boolean,reflect:!0})],Ya.prototype,"vertical",1);var P2=Object.defineProperty,M2=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&P2(e,t,n),n};const Zm=class extends xe{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return H`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Zm.styles=Ae`
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
  `;let Qm=Zm;M2([Y({type:String,reflect:!0})],Qm.prototype,"name");var O2=Object.defineProperty,xh=(s,e,t,i)=>{for(var n=void 0,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(e,t,n)||n);return n&&O2(e,t,n),n},ht;const Ga=(ht=class extends xe{constructor(){super(...arguments),this.visible=!1,this._previousContainer=null,this._showToolTip=async()=>{this.timeoutId=setTimeout(async()=>{if(this.visible=!0,!ht.container.parentElement){const s=document.querySelector("[data-context-dialog]");s?s.append(ht.container):document.body.append(ht.container)}this._previousContainer=this.parentElement,ht.container.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,ht.container.append(this),await this.computePosition()},this.timeout===void 0?800:this.timeout)},this._hideToolTip=()=>{clearTimeout(this.timeoutId),this.visible=!1,this._previousContainer&&(this._previousContainer.append(this),this._previousContainer=null),ht.container.children.length===0&&ht.container.parentElement&&ht.container.remove()}}static get container(){return ht._container||(ht._container=document.createElement("div"),ht._container.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        overflow: visible;
        pointer-events: none;
        z-index: 9999;
      `),ht._container}async computePosition(){const s=this._previousContainer||this.parentElement;if(!s)return;const e=this.style.display;this.style.display="block",this.style.visibility="hidden",await new Promise(requestAnimationFrame);const{x:t,y:i}=await lh(s,this,{placement:this.placement,middleware:[ih(10),oh(),rh({padding:8}),ah()]});Object.assign(this.style,{left:`${t}px`,top:`${i}px`,display:e,visibility:""})}connectedCallback(){super.connectedCallback();const s=this.parentElement;s&&(s.addEventListener("mouseenter",this._showToolTip),s.addEventListener("mouseleave",this._hideToolTip))}disconnectedCallback(){super.disconnectedCallback();const s=this.parentElement;s&&(s.removeEventListener("mouseenter",this._showToolTip),s.removeEventListener("mouseleave",this._hideToolTip))}render(){return H`<div><slot></slot></div>`}},ht.styles=Ae`
    :host {
      position: absolute;
      background: var(--bim-ui_bg-contrast-20, #fff);
      color: var(--bim-ui_bg-contrast-100, #000);
      border-radius: var(--bim-ui_size-4xs, 4px);
      box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
      padding: 0.75rem;
      font-size: var(--bim-ui_size-xs, 0.875rem);
      display: none;
    }
    :host([visible]) {
      display: flex;
    }
  `,ht._container=null,ht);xh([Y({type:Boolean,reflect:!0})],Ga.prototype,"visible");xh([Y({type:Number,reflect:!0})],Ga.prototype,"timeout");xh([Y({type:String,reflect:!0})],Ga.prototype,"placement");let k2=Ga;class D2{static init(){pt.defineCustomElement("bim-view-cube",ki),pt.defineCustomElement("bim-world-2d",kn),pt.defineCustomElement("bim-world",Af)}}const pn=(s,e)=>{const t=e[s],i=(t==null?void 0:t.name)??s,n=i.trim().split(/\s+/);let r,o;return n[0]&&n[0][0]&&(r=n[0][0].toUpperCase(),n[0][1]&&(o=n[0][1].toUpperCase())),n[1]&&n[1][0]&&(o=n[1][0].toUpperCase()),H`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(t!=null&&t.picture)&&(r||o)?H`
        <bim-label
          style=${xi({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${r}${o}</bim-label>
        `:null}
      <bim-label .img=${t==null?void 0:t.picture}>${i}</bim-label>
    </div>
  `},Ct={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},fn={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"},z2={dueDate:s=>{if(typeof s=="string"&&s.trim()!=="")return new Date(s)},status:s=>{if(Array.isArray(s)&&s.length!==0)return s[0]},type:s=>{if(Array.isArray(s)&&s.length!==0)return s[0]},priority:s=>{if(Array.isArray(s)&&s.length!==0)return s[0]},stage:s=>{if(Array.isArray(s)&&s.length!==0)return s[0]},assignedTo:s=>{if(Array.isArray(s)&&s.length!==0)return s[0]},labels:s=>{if(Array.isArray(s))return new Set(s)}},Km=s=>{const{components:e,topic:t,value:i,onCancel:n,onSubmit:r,styles:o}=s,a=r??(()=>{}),l=e.get(Ea),c=(i==null?void 0:i.title)??(t==null?void 0:t.title)??Ii.default.title,h=(i==null?void 0:i.status)??(t==null?void 0:t.status)??Ii.default.status,d=(i==null?void 0:i.type)??(t==null?void 0:t.type)??Ii.default.type,u=(i==null?void 0:i.priority)??(t==null?void 0:t.priority)??Ii.default.priority,p=(i==null?void 0:i.assignedTo)??(t==null?void 0:t.assignedTo)??Ii.default.assignedTo,g=(i==null?void 0:i.labels)??(t==null?void 0:t.labels)??Ii.default.labels,m=(i==null?void 0:i.stage)??(t==null?void 0:t.stage)??Ii.default.stage,v=(i==null?void 0:i.description)??(t==null?void 0:t.description)??Ii.default.description,f=t!=null&&t.dueDate?t.dueDate.toISOString().split("T")[0]:null,b=new Set([...l.config.statuses]);h&&b.add(h);const y=new Set([...l.config.types]);d&&y.add(d);const w=new Set([...l.config.priorities]);u&&w.add(u);const S=new Set([...l.config.users]);p&&S.add(p);const T=new Set([...l.config.labels]);if(g)for(const _ of g)T.add(_);const P=new Set([...l.config.stages]);m&&P.add(m);const D=dc(),M=async()=>{const{value:_}=D;if(!_)return;const $=Nr(_,z2);if(t)t.set($),await a(t);else{const X=l.create($);await a(X)}},I=dc(),R=_=>{const{value:$}=I;if(!$)return;const X=_.target;$.disabled=X.value.trim()===""},A=`btn-${pt.newRandomId()}`,O=`btn-${pt.newRandomId()}`;return H`
    <div ${Ze(D)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${R} vertical label="Title" name="title" .value=${c}></bim-text-input>
        ${t?H`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[...b].map(_=>H`<bim-option label=${_} .checked=${h===_}></bim-option>`)}
            </bim-dropdown>`:H``}
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[...y].map(_=>H`<bim-option label=${_} .checked=${d===_}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...w].map(_=>H`<bim-option label=${_} .checked=${u===_}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...T].map(_=>H`<bim-option label=${_} .checked=${g?[...g].includes(_):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...S].map(_=>{const $=o!=null&&o.users?o.users[_]:null,X=$?$.name:_,V=$==null?void 0:$.picture;return H`<bim-option label=${X} value=${_} .img=${V} .checked=${p===_}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${f}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...P].map(_=>H`<bim-option label=${_} .checked=${m===_}></bim-option>`)}
        </bim-dropdown>
      </div>
      <bim-text-input vertical label="Description" name="description" type="area" .value=${v??null}></bim-text-input>
      <div style="justify-content: right; display: flex; gap: 0.375rem">
        <style>
          #${O} {
            background-color: transparent;
          }

          #${O}:hover {
            --bim-label--c: #FF5252;
          }

          #${A}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${O} style="flex: 0" @click=${n} label="Cancel"></bim-button>
        <bim-button id=${A} style="flex: 0" @click=${M} ${Ze(I)} label=${t?"Update Topic":"Add Topic"} icon=${t?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},I2=s=>{const{components:e,modelUserData:t,worldName:i}=s;return H`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{if(!(e&&i))return;const n=[...e.get(Sa).list.values()].find(o=>"name"in o&&o.name===i);if(!n)return;const r=document.createElement("input");r.type="file",r.accept=".ifc",r.onchange=async()=>{if(r.files===null||r.files.length===0)return;const o=r.files[0],a=await o.arrayBuffer(),l=new Uint8Array(a),c=o.name.replace(".ifc",""),h=e.get(Ft),d=e.get(rv);d.settings.autoSetWasm=!1,d.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.72/",absolute:!1};const u=await d.load(l,!0,c,{userData:t});n.scene.three.add(u.object),u.useCamera(n.camera.three),h.core.update(!0)},r.click()}}
    ></bim-button>
  `},L2=s=>Qe.create(I2,s),$2=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:L2},Symbol.toStringTag,{value:"Module"})),N2=s=>{const{components:e,world:t}=s;return H`
    <bim-button @click=${()=>{const i=document.createElement("input");i.type="file",i.accept=".frag",i.onchange=async()=>{if(i.files===null||i.files.length===0)return;const n=i.files[0],r=await n.arrayBuffer(),o=new Uint8Array(r),a=n.name.replace(".frag",""),l=e.get(Ft),c=await l.core.load(o,{modelId:a});t&&(t.scene.three.add(c.object),c.useCamera(t.camera.three),l.core.update(!0))},i.click()}}></bim-button>
  `},B2=s=>{const e=Qe.create(N2,s),[t]=e;return t.label="Load FRAG",t.icon="mage:box-3d-fill",e},R2=Object.freeze(Object.defineProperty({__proto__:null,loadFrag:B2},Symbol.toStringTag,{value:"Module"}));({...$2,...R2});const Ac=async(s,e)=>{const{localId:t,category:i,children:n}=e;if(i&&n){const r={data:{Name:i,modelId:s.modelId,children:JSON.stringify(n.map(o=>o.localId))}};for(const o of n){const a=await Ac(s,o);a&&(r.children||(r.children=[]),r.children.push(a))}return r}if(t!==null){const r=await s.getItem(t).getAttributes();if(!r)return null;const o={data:{Name:String(r.getValue("Name")),modelId:s.modelId,localId:t}};for(const a of n??[]){const l=await Ac(s,a);l&&(o.children||(o.children=[]),o.children.push(l))}return o}return null},U2=async s=>{const e=[];for(const t of s){const i=await t.getSpatialStructure(),n=await Ac(t,i);if(!n)continue;const r={data:{Name:t.modelId,modelId:t.modelId},children:[n]};e.push(r)}return e},Jm=s=>{const{components:e,models:t}=s,i=s.selectHighlighterName??"select";return H`
    <bim-table @rowcreated=${n=>{n.stopImmediatePropagation();const{row:r}=n.detail,o=e.get(fr),a=e.get(Ft);r.onclick=async()=>{if(!i)return;const{data:{modelId:l,localId:c,children:h}}=r;if(!(l&&(c!==void 0||h)))return;const d=a.list.get(l);if(d){if(c!==void 0){const u=await d.getItemsChildren([c]),p={[l]:u.length!==0?new Set(u):new Set([c])};o.highlightByID(i,p,!0,!0)}else if(h){const u=JSON.parse(h),p=await d.getItemsChildren(u),g={[l]:p.length!==0?p:u};o.highlightByID(i,g,!0,!0)}}}}} @cellcreated=${({detail:n})=>{const{cell:r}=n;r.column==="Name"&&!r.rowData.Name&&(r.style.gridColumn="1 / -1")}} ${Ze(async n=>{if(!n)return;const r=n;r.loadFunction=async()=>new Promise(o=>{setTimeout(()=>{o(U2(t))})}),r.loadData(!0)})} headers-hidden>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models available to display the spatial structure!
      </bim-label>
    </bim-table>
  `},F2=(s,e=!0)=>{const t=Qe.create(Jm,s),[i,n]=t;if(i.hiddenColumns=["modelId","localId","children"],i.columns=["Name"],i.headersHidden=!0,e){const{components:r}=s,o=r.get(Ft);o.list.onItemSet.add(()=>n({models:o.list.values()})),o.list.onItemDeleted.add(()=>n())}return t},j2=Object.freeze(Object.defineProperty({__proto__:null,spatialTree:F2,spatialTreeTemplate:Jm},Symbol.toStringTag,{value:"Module"}));let xs={};const Bu={_category:"Category",_localId:"LocalId",_guid:"Guid"},H2=(s,e,t,i,n,r)=>{const o={data:{type:"attribute",modelId:i,localId:n,Name:e in Bu?Bu[e]:e,Value:t,dataType:r}};s.children||(s.children=[]),s.children.push(o)},eg=(s,e,t)=>{var i;s in xs||(xs[s]=new Map);const n=xs[s],r=e._localId.value;if(n.has(r))return n.get(r);const o=(i=e[t.defaultItemNameKey])==null?void 0:i.value,a=e._category.value,l={data:{modelId:s,localId:r,type:"item",Name:(o==null?void 0:o.toString().length)>0?o.toString():a??String(r)}};n.set(r,l);for(const c in e){const h=e[c];if(!Array.isArray(h))H2(l,c,h.value,s,r,h.type);else{const d={data:{Name:c,type:"relation"}};l.children||(l.children=[]),l.children.push(d);for(const u of h){const p=eg(s,u,t);d.children||(d.children=[]),d.children.push(p)}}}return l},V2=async(s,e,t)=>{const i=s.get(Ft);Object.keys(e).length===0&&(xs={});const n=[];for(const r in e){const o=i.list.get(r);if(!o)continue;r in xs||(xs[r]=new Map);const a=xs[r],l=e[r];for(const c of l){let h=a.get(c);if(h){n.push(h);continue}const[d]=await o.getItemsData([c],t.itemsDataConfig);h=eg(r,d,t),n.push(h)}}return n},tg=s=>{const e={defaultItemNameKey:"Name",itemsDataConfig:{attributesDefault:!0,relationsDefault:{attributes:!1,relations:!1},relations:{IsDefinedBy:{attributes:!0,relations:!0},DefinesOcurrence:{attributes:!1,relations:!1},ContainedInStructure:{attributes:!0,relations:!0},ContainsElements:{attributes:!1,relations:!1},Decomposes:{attributes:!1,relations:!1}}},...s},{components:t,modelIdMap:i,emptySelectionWarning:n}=s,r=Object.keys(i).reduce((o,a)=>(a.includes("DELTA")||(o[a]=i[a]),o),{});return H`
    <bim-table @cellcreated=${({detail:o})=>{const{cell:a}=o,{Name:l,Value:c}=a.rowData;l&&c===void 0&&setTimeout(()=>{a.style.gridColumn="1 / -1"})}} ${Ze(async o=>{if(!o)return;const a=o;a.loadFunction=async()=>V2(t,r,e),await a.loadData(!0)&&a.dispatchEvent(new Event("datacomputed"))})}>
      ${n?H`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},W2=new Map,q2={METRE:"m",SQUARE_METRE:"m²",CUBIC_METRE:"m³"},Y2=async(s,e)=>{const t=s.get(Ft).list.get(e);if(!t)throw new Error(`ItemsDataUI: model ${e} not found.`);let i=W2.get(t.modelId);if(!i){const[n]=Object.values(await t.getItemsOfCategories([/UNITASSIGNMENT/])).flat(),[r]=await t.getItemsData([n],{relations:{Units:{relations:!1,attributes:!0}}});if(!Array.isArray(r.Units))return[];i=r.Units}return i},G2=(s,e)=>{const{components:t}=s;e.columns=[{name:"Name",width:"12rem"}],e.hiddenColumns=["modelId","localId","Actions","type","dataType"],e.headersHidden=!0,e.dataTransform={Value:(i,n)=>{const{dataType:r,modelId:o}=n;return r?H`<bim-label ${Ze(async a=>{if(!(a&&o))return;const l=await Y2(t,o),c=r.replace("IFC","").replace("MEASURE","UNIT"),h=l.find(u=>u.UnitType&&"value"in u.UnitType?u.UnitType.value===c:!1);if(!h||!(h.Name&&"value"in h.Name))return i;const d=`${i.toFixed(2)} ${q2[h.Name.value]??h.Name.value}`;a.textContent=d})}></bim-label>`:i}}},X2=s=>{const e=Qe.create(tg,s),[t]=e;return G2(s,t),e},Z2=Object.freeze(Object.defineProperty({__proto__:null,itemsData:X2,itemsDataTemplate:tg},Symbol.toStringTag,{value:"Module"})),ig=s=>{const{components:e}=s,t=s.missingDataMessage??"No models has been loaded yet",i=e.get(Ft),n=({detail:r})=>{const{cell:o}=r;o.style.padding="0.25rem 0"};return H`
    <bim-table ${Ze(async r=>{if(!r)return;const o=r,a=[];if(i.initialized)for(const[,l]of i.list){if(!l)continue;const c=await l.getMetadata(),h={data:{Name:l.modelId,modelId:l.modelId,metadata:JSON.stringify(c)}};a.push(h)}o.data=a})} @cellcreated=${n}>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        ${t}
      </bim-label>
    </bim-table>
  `},Q2=(s,e)=>{const{components:t,actions:i,metaDataTags:n}=s,r=t.get(Ft),o=(i==null?void 0:i.dispose)??!0,a=(i==null?void 0:i.download)??!0,l=(i==null?void 0:i.visibility)??!0,c=n??[];e.hiddenColumns=["modelId","metadata"],e.headersHidden=!0,e.noIndentation=!0,e.dataTransform={Name:(h,d)=>{if(!r.initialized)return h;const{modelId:u,metadata:p}=d;if(!u)return h;const g=r.list.get(u);if(!g)return u;const m=[];if(p){const y=JSON.parse(p);for(const w of c){const S=y[w];if(!(typeof S=="string"||typeof S=="boolean"||typeof S=="number"))continue;const T=H`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${S}</bim-label>
            `;m.push(T)}}let v;o&&(v=H`<bim-button @click=${()=>r.core.disposeModel(g.modelId)} icon="mdi:delete"></bim-button>`);let f;l&&(f=H`<bim-button @click=${async({target:y})=>{y.loading=!0,await g.setVisible(void 0,y.hasAttribute("data-model-hidden")),await r.core.update(!0),y.toggleAttribute("data-model-hidden"),y.icon=y.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye",y.loading=!1}} icon="mdi:eye"></bim-button>`);let b;return a&&(b=H`<bim-button @click=${async()=>{const y=await g.getBuffer(!1),w=new File([y],`${g.modelId}.frag`),S=document.createElement("a");S.href=URL.createObjectURL(w),S.download=w.name,S.click(),URL.revokeObjectURL(S.href)}} icon="flowbite:download-solid"></bim-button>`),H`
       <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
          <div style="min-height: 1.75rem; overflow: auto; display: flex;">
            <bim-label style="white-space: normal;">${h}</bim-label>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
            ${m}
          </div>
        </div>
        <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
          ${b}
          ${f}
          ${v}
        </div>
       </div>
      `}}},K2=(s,e=!0)=>{const t=Qe.create(ig,s),[i,n]=t;if(Q2(s,i),e){const{components:r}=s,o=r.get(Ft),a=()=>setTimeout(()=>n());o.list.onItemSet.add(a),o.list.onItemDeleted.add(a)}return t},J2=Object.freeze(Object.defineProperty({__proto__:null,modelsList:K2,modelsListTemplate:ig},Symbol.toStringTag,{value:"Module"})),sg=s=>{var e;const{components:t}=s,i=s.missingDataMessage??"No viewpoints to display",n=t.get(Ta),r=((e=s.topic)==null?void 0:e.viewpoints)??n.list.keys(),o=[];for(const c of r){const h=n.list.get(c);h&&o.push(h)}const a=c=>{if(!c)return;const h=c;h.data=o.map((d,u)=>({data:{Guid:d.guid,Title:d.title??`Viewpoint ${s.topic?u+1:""}`,Actions:""}}))},l=({detail:c})=>{const{cell:h}=c;h.style.padding="0.25rem"};return H`
    <bim-table ${Ze(a)} @cellcreated=${l}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${i}</bim-label>
    </bim-table>
  `},eC=(s,e)=>{const{components:t,topic:i}=s;e.noIndentation=!0,e.headersHidden=!0,e.hiddenColumns=["Guid"],e.columns=["Title",{name:"Actions",width:"auto"}];const n={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!i,...s.actions},r=t.get(Ta);e.dataTransform={Actions:(o,a)=>{const{Guid:l}=a;if(!(l&&typeof l=="string"))return o;const c=r.list.get(l);if(!c)return o;const h=async({target:b})=>{b.loading=!0,await c.go(),b.loading=!1};let d;n.selectComponents&&(d=H`
          <bim-button label="Select Components" @click=${async({target:b})=>{const y=t.get(Ft),w=t.get(fr);if(!w.isSetup)return;b.loading=!0;const S=await y.guidsToModelIdMap([...c.selectionComponents]);await w.highlightByID("select",S),b.loading=!1}}></bim-button>
        `);let u;n.colorizeComponent&&(u=H`
          <bim-button label="Colorize Components" @click=${async({target:b})=>{b.loading=!0,await c.setColorizationState(!0),b.loading=!1}}></bim-button>
        `);let p;n.resetColors&&(p=H`
          <bim-button label="Reset Colors" @click=${async({target:b})=>{b.loading=!0,await c.setColorizationState(!1),b.loading=!1}}></bim-button>
        `);let g;n.updateCamera&&(g=H`
          <bim-button label="Update Camera" @click=${()=>c.updateCamera()}></bim-button>
        `);let m;n.unlink&&(m=H`
          <bim-button label="Unlink" @click=${()=>i==null?void 0:i.viewpoints.delete(c.guid)}></bim-button>
        `);let v;n.delete&&(v=H`
          <bim-button label="Delete" @click=${()=>{r.list.delete(c.guid),wr.removeMenus()}}></bim-button>
        `);let f;return Object.values(n).includes(!0)&&(f=H`
          <bim-button icon="prime:ellipsis-v">
            <bim-context-menu>
              ${d}
              ${u}
              ${p}
              ${g}
              ${m}
              ${v}
            </bim-context-menu>
          </bim-button>
        `),H`
        <bim-button icon="ph:eye-fill" @click=${h}></bim-button>
        ${f}
      `}}},ng=(s,e=!0)=>{const t=Qe.create(sg,s),[i,n]=t;if(eC(s,i),e){const{components:r,topic:o}=s,a=r.get(Ta);a.list.onItemUpdated.add(()=>n()),a.list.onItemDeleted.add(()=>n()),a.list.onCleared.add(()=>n()),o?(o.viewpoints.onItemAdded.add(()=>n()),o.viewpoints.onItemDeleted.add(()=>n()),o.viewpoints.onCleared.add(()=>n())):a.list.onItemSet.add(()=>n())}return t},tC=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ng,viewpointsListTemplate:sg},Symbol.toStringTag,{value:"Module"})),rg=s=>{const{components:e}=s,t=s.missingDataMessage??"No topics to display",i=e.get(Ea),n=s.topics??i.list.values();return H`
    <bim-table no-indentation ${Ze(r=>{if(!r)return;const o=r;o.data=[...n].map(a=>{var l;return{data:{Guid:a.guid,Title:a.title,Status:a.status,Description:a.description??"",Author:a.creationAuthor,Assignee:a.assignedTo??"",Date:a.creationDate.toDateString(),DueDate:((l=a.dueDate)==null?void 0:l.toDateString())??"",Type:a.type,Priority:a.priority??"",Actions:""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${t}</bim-label>
    </bim-table>
  `},iC=(s,e)=>{const{dataStyles:t}=s;e.hiddenColumns.length===0&&(e.hiddenColumns=["Guid","Actions"]),e.columns=["Title"],e.dataTransform={Priority:i=>{if(typeof i!="string")return i;const n=((t==null?void 0:t.priorities)??Ct.priorities)[i];return H`
            <bim-label
              .icon=${n==null?void 0:n.icon}
              style=${xi({...fn,...n==null?void 0:n.style})}
            >${i}
            </bim-label>
          `},Status:i=>{if(typeof i!="string")return i;const n=((t==null?void 0:t.statuses)??Ct.statuses)[i];return H`
            <bim-label
              .icon=${n==null?void 0:n.icon}
              style=${xi({...fn,...n==null?void 0:n.style})}
            >${i}
            </bim-label>
          `},Type:i=>{if(typeof i!="string")return i;const n=((t==null?void 0:t.types)??Ct.types)[i];return H`
            <bim-label
              .icon=${n==null?void 0:n.icon}
              style=${xi({...fn,...n==null?void 0:n.style})}
            >${i}
            </bim-label>
          `},Author:i=>typeof i!="string"?i:pn(i,(t==null?void 0:t.users)??Ct.users),Assignee:i=>typeof i!="string"?i:pn(i,(t==null?void 0:t.users)??Ct.users)}},og=(s,e=!0)=>{const t=Qe.create(rg,s),[i,n]=t;if(iC(s,i),e){const{components:r,topics:o}=s,a=r.get(Ea),l=()=>n();if(a.list.onItemUpdated.add(l),a.list.onItemDeleted.add(l),o)for(const c of o)c.relatedTopics.onItemAdded.add(l),c.relatedTopics.onItemDeleted.add(l),c.relatedTopics.onCleared.add(l);else a.list.onItemSet.add(l)}return t},sC=Object.freeze(Object.defineProperty({__proto__:null,topicsList:og,topicsListTemplate:rg},Symbol.toStringTag,{value:"Module"})),ag=s=>{const{topic:e,styles:t,viewpoint:i}=s,n=s.missingDataMessage??"The topic has no comments";return H`
    <bim-table no-indentation ${Ze(r=>{if(!r)return;const o=r;let a=e.comments.values();i&&(a=[...e.comments.values()].filter(l=>l.viewpoint===i.guid)),o.data=[...a].map(l=>({data:{guid:l.guid,Comment:l.comment,author:(()=>{const c=t;if(!c)return l.author;const h=c[l.author];return(h==null?void 0:h.name)??l.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${n}</bim-label>
    </bim-table>
  `},nC=(s,e)=>{const{topic:t,styles:i}=s,n={delete:!0,...s.actions};e.headersHidden=!0,e.hiddenColumns=["guid","author"],e.dataTransform={Comment:(r,o)=>{const{guid:a}=o;if(typeof a!="string")return r;const l=t.comments.get(a);if(!l)return r;const c=()=>{t.comments.delete(a)};let h;if(n.delete){const d=`btn-${pt.newRandomId()}`;h=H`
          <div>
            <style>
              #${d} {
                background-color: transparent;
                --bim-label--c: var(--bim-ui_bg-contrast-60)
              }
  
              #${d}:hover {
                --bim-label--c: #FF5252;
              }
            </style>
            <bim-button @click=${c} id=${d} icon="majesticons:delete-bin"></bim-button>
          </div>
        `}return H`
        <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
          <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; gap: 0.375rem;">
              ${pn(l.author,i??Ct.users)}
              <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${l.date.toDateString()}</bim-label>
            </div>
            ${h}
          </div>
          <bim-label style="margin-left: 1.7rem; white-space: normal">${l.comment}</bim-label>
        </div>
      `}}},lg=(s,e=!0)=>{const t=Qe.create(ag,s),[i,n]=t;if(nC(s,i),e){const{topic:r}=s,o=()=>n();r.comments.onItemSet.add(o),r.comments.onItemUpdated.add(o),r.comments.onItemDeleted.add(o),r.comments.onCleared.add(o)}return t},rC=Object.freeze(Object.defineProperty({__proto__:null,commentsList:lg,commentsListTemplate:ag},Symbol.toStringTag,{value:"Module"}));({...j2,...Z2,...J2,...tC,...sC,...rC});const cg=(s,e)=>{const{showInput:t,topic:i,styles:n}=s,r={add:!0,delete:!0,...s.actions},o=`input-${pt.newRandomId()}`,a=`btn-${pt.newRandomId()}`,l=`btn-${pt.newRandomId()}`,c=()=>document.getElementById(a),h=()=>document.getElementById(o),d=()=>{const y=h();return y?y.value.trim().length>0:!1},u=()=>{e({showInput:!0})},p=()=>{const y=h(),w=d();y&&w&&(i.createComment(y.value),e({showInput:!1}))},g=()=>{e({showInput:!1})},m=()=>{const y=c();if(y){if(!h()){y.disabled=!0;return}y.disabled=!d()}},v=H`
    ${r.add?H`<bim-button @click=${u} label="Add Comment" icon="majesticons:comment-line"></bim-button>`:null}
  `,f=H`
    <bim-text-input id=${o} @input=${m} @keypress=${y=>{y.code==="Enter"&&y.ctrlKey&&p()}} type="area"></bim-text-input>

    <div style="justify-content: right; display: flex; gap: 0.375rem">
      <style>
        #${a} {
          background-color: #329936;
        }  

        #${l} {
          background-color: transparent;
        }

        #${l}:hover {
          --bim-label--c: #FF5252;
        }
      </style>

      <bim-button style="flex: 0" id=${l} @click=${g} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${a} @click=${p} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `,[b]=lg({topic:i,actions:r,styles:n??Ct.users});return H`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${b}
      ${t?f:v}
    </div>
  `},oC=s=>Qe.create(cg,s),aC=Object.freeze(Object.defineProperty({__proto__:null,topicComments:oC,topicCommentsSectionTemplate:cg},Symbol.toStringTag,{value:"Module"})),hg=(s,e)=>{const{components:t,editing:i,topic:n,styles:r}=s,o={update:!0,...s.actions},a=(r==null?void 0:r.priorities)??Ct.priorities,l=(r==null?void 0:r.statuses)??Ct.statuses,c=(r==null?void 0:r.types)??Ct.types;let h;n!=null&&n.priority&&(h=a[n.priority]);let d;n!=null&&n.type&&(d=c[n.type]);let u;n!=null&&n.type&&(u=l[n.status]);let p,g;return i?p=Km({components:t,topic:n,styles:r,onSubmit:()=>{e({editing:!1})},onCancel:()=>{e({editing:!1})}}):g=H`
      <div>
        <bim-label>Title</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.title}</bim-label>
      </div>

      ${n.description?H`
            <div>
              <bim-label>Description</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${n.description}</bim-label>
            </div>
          `:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Status</bim-label>
        <bim-label .icon=${u==null?void 0:u.icon} style=${xi({...fn,...u==null?void 0:u.style})}
        >${n.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${d==null?void 0:d.icon} style=${xi({...fn,...d==null?void 0:d.style})}
        >${n.type}
        </bim-label>
      </div>

      ${n.priority?H`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${h==null?void 0:h.icon} style=${xi({...fn,...h==null?void 0:h.style})}
              >${n.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${pn(n.creationAuthor,(r==null?void 0:r.users)??Ct.users)}
      </div>

      ${n.assignedTo?H`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${pn(n.assignedTo,(r==null?void 0:r.users)??Ct.users)}
          </div>`:null}

      ${n.dueDate?H`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${n.modifiedAuthor?H`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${pn(n.modifiedAuthor,(r==null?void 0:r.users)??Ct.users)}
          </div>`:null}

      ${n.modifiedDate?H`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Modified Date</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${n.modifiedDate.toDateString()}</bim-label>
            </div>`:null}

      ${n.labels.size!==0?H`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Labels</bim-label>
            <bim-label style="white-space: normal; --bim-label--c: var(--bim-ui_bg-contrast-100)">${[...n.labels].join(", ")}</bim-label>
          </div>`:null}

      ${o.update?H`
              <bim-button @click=${()=>e({editing:!0})} label="Update Information" icon="tabler:refresh"></bim-button> 
            `:null}
    `,H`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${i?p:g}
    </div>
  `},lC=s=>Qe.create(hg,s),cC=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:lC,topicInformationSectionTemplate:hg},Symbol.toStringTag,{value:"Module"})),dg=(s,e)=>{const{components:t,topic:i,linking:n}=s,r=t.get(Ea),o={link:!0,...s.actions},[a,l]=og({components:t,topics:[...i.relatedTopics].map(u=>r.list.get(u)).map(u=>u)});a.headersHidden=!0,a.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const c=()=>H`
      <bim-text-input placeholder="Search..." debounce="100" @input=${u=>{const p=u.target;p instanceof wt&&(a.queryString=p.value)}}></bim-text-input> 
    `;let h,d;if(n){a.selectableRows=!0,l({topics:void 0});const u=a.data.filter(f=>{const{Guid:b}=f.data;return typeof b!="string"?!1:i.relatedTopics.has(b)}).map(f=>f.data);a.selection=new Set(u);const p=()=>{const f=[...a.selection].map(({Guid:b})=>typeof b!="string"?null:r.list.has(b)?b:null).map(b=>b);i.relatedTopics.clear(),i.relatedTopics.add(...f),e({linking:!1})},g=()=>{e({linking:!1})},m=`btn-${pt.newRandomId()}`,v=`btn-${pt.newRandomId()}`;h=H`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${m}:hover {
            background-color: #329936;
          }  

          #${v} {
            background-color: transparent;
          }

          #${v}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${c()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${v} @click=${g} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${m} @click=${p} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{a.selectableRows=!1;const u=()=>{e({linking:!0})};d=H`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${c()}
        ${o.link?H`<bim-button style="flex: 0" @click=${u} icon="tabler:link"></bim-button>`:null}
      </div> 
    `}return H`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${d}
      ${h}
      ${a}
    </div> 
  `},hC=s=>Qe.create(dg,s),dC=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:hC,topicRelationsSectionTemplate:dg},Symbol.toStringTag,{value:"Module"})),ug=(s,e)=>{const{components:t,topic:i,world:n,linking:r}=s,o={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...s.actions},a=t.get(Ta),[l,c]=ng({components:t,topic:i,actions:o}),h=()=>H`
      <bim-text-input placeholder="Search..." debounce="100" @input=${p=>{const g=p.target;g instanceof wt&&(l.queryString=g.value)}}></bim-text-input> 
    `;let d,u;if(r){l.selectableRows=!0,c({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const p=l.data.filter(b=>{const{Guid:y}=b.data;return typeof y!="string"?!1:i.viewpoints.has(y)}).map(b=>b.data);l.selection=new Set(p);const g=()=>{const b=[...l.selection].map(({Guid:y})=>typeof y!="string"?null:a.list.has(y)?y:null).map(y=>y);i.viewpoints.clear(),i.viewpoints.add(...b),e({linking:!1})},m=()=>{e({linking:!1})},v=`btn-${pt.newRandomId()}`,f=`btn-${pt.newRandomId()}`;d=H`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${v}:hover {
            background-color: #329936;
          }  

          #${f} {
            background-color: transparent;
          }

          #${f}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${h()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${f} @click=${m} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${v} @click=${g} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{l.selectableRows=!1,c({topic:i,actions:o});const p=()=>{if(!(i&&o.add&&!r))return;const f=a.create();n&&(f.world=n),i.viewpoints.add(f.guid)},g=()=>{e({linking:!0})},m=H`<bim-button style="flex: 0" @click=${p} .disabled=${!n} icon="mi:add"></bim-button>`,v=H`<bim-button style="flex: 0" @click=${g} icon="tabler:link"></bim-button>`;u=H`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${h()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          ${o.add?m:null}
          ${o.link?v:null}
        </div>
      </div> 
    `}return H`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${u}
      ${d}
      ${l}
    </div> 
  `},uC=s=>Qe.create(ug,s),pC=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:uC,topicViewpointsSectionTemplate:ug},Symbol.toStringTag,{value:"Module"}));({...aC,...cC,...dC,...pC});const fC=s=>H`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${Km(s)}
    </bim-panel-section>
  `,mC=s=>Qe.create(fC,s),gC=Object.freeze(Object.defineProperty({__proto__:null,topic:mC},Symbol.toStringTag,{value:"Module"}));({...gC});const pg=document.getElementById("container"),ni=new ov,vC=ni.get(Sa),Re=vC.create();Re.scene=new $c(ni);Re.renderer=new av(ni,pg);Re.camera=new lv(ni);ni.init();ev.init();D2.init();Re.scene.setup();Re.camera.controls.setLookAt(5,5,5,0,0,0);pg.appendChild(Re.renderer.three2D.domElement);const bC=ni.get(Zu);bC.create(Re);Re.camera.three.far=1e4;Re.camera.three.updateProjectionMatrix();Re.scene.three.background=null;const Xa=ni.get(Ft);Xa.init("https://thatopen.github.io/engine_fragment/resources/worker.mjs");const fg="https://thatopen.github.io/engine_components/resources/frags/small_road.frag",yC=await fetch(fg),_C=await yC.arrayBuffer(),wC=new Uint8Array(_C),Za=await Xa.core.load(wC,{modelId:fg,camera:Re.camera.three});Re.scene.three.add(Za.object);await Xa.core.update(!0);Re.camera.controls.addEventListener("control",()=>Xa.core.update());Za.getClippingPlanesEvent=()=>Array.from(Re.renderer.three.clippingPlanes)||[];const Mi=await Za.getAlignments();Re.scene.three.add(Mi);const gt=ni.get(Nl),it=gt.create("absolute");it.world=Re;for(const s of Mi.children)s.userData.initialStation=1925;it.alignments.push(Mi);it.updateAlignments();console.log(Mi);const ba=new Xi(void 0,20);it.onMarkerChange.add(({point:s})=>{ba.center.copy(s),Re.camera.controls.fitToSphere(ba,!0)});const Qt=ni.get(Bl);Qt.world=Re;const xC=document.getElementById("horizontal-menu"),Ns=document.createElement("bim-world-2d");Ns.components=ni;if(!Ns.world)throw new Error("World not found!");xC.appendChild(Ns);const Oi=gt.create("horizontal");Oi.world=Ns.world;const Bs=await Za.getHorizontalAlignments();for(const s of Bs.children)s.rotation.x=Math.PI/2,s.rotation.y=Math.PI/2;Oi.alignments.push(Bs);Oi.updateAlignments();const mg=Ns.world.scene.three;mg.background=null;mg.add(Bs);for(const s of Bs.children)s.userData.initialStation=1925;it.onMarkerChange.add(s=>{console.log(s);const e=qi.curvePointToAlignmentPercentage(s.alignment,s.point,s.curve);if(e===null)return;const t=qi.alignmentPercentageToPoint(Bs.children[0],e);t!==null&&(Oi.setMarkerAtPoint(t,"select"),Oi.setCursorValue(it.getCursorValue(),"select"))});const CC=ni.get(Lc),SC=CC.get(Ns.world);SC.three.params.Line.threshold=10;await Ns.world.camera.controls.setLookAt(0,0,1e4,0,0,0,!1);const Rn=new tv;Rn.showPanel(2);document.body.append(Rn.dom);Rn.dom.style.left="0px";Rn.dom.style.zIndex="unset";Re.renderer.onBeforeUpdate.add(()=>Rn.begin());Re.renderer.onAfterUpdate.add(()=>Rn.end());let Ci=0,Il=null,Ru=0,Zo=!0,cn=!1;function Pc(){const s=Mi.children[Ci],e=Bs.children[Ci];Zo?(it.highlight(s),Oi.highlight(e)):(it.clearHighlight(),Oi.clearHighlight())}Pc();let Uu=-1;function Vi(){Uu!==Ci&&it.clearStations(),Uu=Ci;const s=Mi.children[Ci];cn?(it.createStations(s),it.updateStations()):it.clearStations()}function Fu(s){const e=qi.alignmentPercentageToPoint(Mi.children[Ci],s);e&&(ba.center.copy(e.point),Re.camera.controls.fitToSphere(ba,!0),it.setMarkerAtPoint(e,"select"),Qt.set(e.point,e.normal),Il&&clearTimeout(Il),Qt.sectionVisible=!1,Il=setTimeout(()=>{Qt.plane.enabled&&Qt.update()},1e3),cn&&Qt.plane.enabled&&Vi());const t=qi.alignmentPercentageToPoint(Bs.children[Ci],s);t&&(Oi.setMarkerAtPoint(t,"select"),Oi.setCursorValue(it.getCursorValue(),"select"))}const gg=1e3;let ya=0;Re.camera.controls.addEventListener("update",()=>{const s=Date.now();s-ya>gg&&(Vi(),ya=s)});Re.camera.controls.addEventListener("update",()=>{const s=Date.now();s-ya>gg&&(Vi(),ya=s)});const xr=Yu.create(()=>$l`
  <bim-panel active label="Civil 3D Navigator Tutorial" class="options-menu">

      <bim-panel-section label="Alignments">

         <bim-dropdown required label="Selected alignment"
             @change="${({target:s})=>{Ci=s.value[0],Zo&&Pc(),cn&&Vi()}}">

          ${Mi.children.map(()=>$l`
              <bim-option ?checked=${Ru===0} label="${Ru++}"></bim-option>
            `)}
        </bim-dropdown>
        
        <bim-number-input
          slider step="1" label="Highlight width" value="${it.highlightMaterial.linewidth}" min="1" max="10"
          @change="${({target:s})=>{gt.highlightMaterial.linewidth=s.value}}">
        </bim-number-input>

        <bim-color-input 
          label="Highlight Color" color="#${gt.highlightMaterial.color.getHexString()}" 
          @input="${({target:s})=>{gt.highlightMaterial.color=new me(s.color)}}">
        </bim-color-input>

        
        <bim-color-input 
          label="Station Label Color" color="#${gt.stationLabelColor.getHexString()}" 
          @input="${({target:s})=>{gt.stationLabelColor=new me(s.color)}}">
        </bim-color-input>

        
        <bim-color-input 
          label="Station Label Background Color" color="#${gt.stationLabelBackgroundColor.getHexString()}" 
          @input="${({target:s})=>{gt.stationLabelBackgroundColor=new me(s.color)}}">
        </bim-color-input>

        <bim-color-input 
          label="Station Pointer Color" color="#${gt.stationPointerColor.getHexString()}" 
          @input="${({target:s})=>{gt.stationPointerColor=new me(s.color)}}">
        </bim-color-input>

        <bim-color-input 
          label="Station Pointer Background Color" color="#${gt.stationPointerBackgroundColor.getHexString()}" 
          @input="${({target:s})=>{gt.stationPointerBackgroundColor=new me(s.color)}}">
        </bim-color-input>

        <bim-number-input
          slider step="0.05" label="Screen distance limit" value="${gt.screenDistanceLimit}" min="0" max="1"
          @change="${({target:s})=>{gt.screenDistanceLimit=s.value,it.updateStations()}}">
        </bim-number-input>

        <bim-checkbox
          label="Highlight selected" checked="${Zo}"
          @change="${({target:s})=>{Zo=s.checked,Pc()}}">
        </bim-checkbox>

        <bim-checkbox
          label="Show kps"
          @change="${({target:s})=>{cn=s.checked,Vi()}}">
        </bim-checkbox>

        
        <bim-checkbox
          label="Clip"
          @change="${({target:s})=>{Qt.plane.enabled=s.checked,Qt.sectionVisible=s.checked,s.checked&&(Qt.update(),Qt.plane.update()),cn&&Vi()}}">
        </bim-checkbox>

        
      <bim-checkbox
        label="Flip"
        @change="${({target:s})=>{Qt.flip=s.checked,cn&&Vi()}}">
      </bim-checkbox>

      <bim-number-input
      slider step="10" label="Increments" value="${it.increments}" min="10" max="100"
      @change="${({target:s})=>{it.increments=s.value,Vi()}}">
    </bim-number-input>

    <bim-number-input
      slider step="0.01" label="Alignment navigation" value="0.5" min="0" max="1"
      @change="${({target:s})=>{Fu(s.value)}}">
    </bim-number-input>

    <bim-number-input
      slider step="10" label="Move to KP" value="2000" min="1925" max="3000"
      @change="${({target:s})=>{const e=Mi.children[Ci],t=qi.alignmentLength(e),n=(s.value-e.userData.initialStation)/t,r=Math.min(Math.max(n,0),1);Fu(r)}}">
    </bim-number-input>

    </bim-panel-section>

    </bim-panel>
    `);xr.style.zIndex="9999";document.body.append(xr);const EC=Yu.create(()=>$l`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{xr.classList.contains("options-menu-visible")?xr.classList.remove("options-menu-visible"):xr.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(EC);
