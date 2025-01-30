var b=Object.defineProperty;var x=(r,s,e)=>s in r?b(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var t=(r,s,e)=>(x(r,typeof s!="symbol"?s+"":s,e),e);import{C as d,V as L,z as E,D as C,A as _,W as c,h as u,N as D,au as P,Q as S,a as y}from"./web-ifc-api-ub-SNF9_.js";import{d as m,E as o,D as f,S as p,e as F}from"./index-Q8Rypv8A.js";class U extends m{constructor(){super(...arguments);t(this,"onAfterUpdate",new o);t(this,"onBeforeUpdate",new o);t(this,"onDisposed",new o);t(this,"onResize",new o);t(this,"onClippingPlanesUpdated",new o);t(this,"clippingPlanes",[])}updateClippingPlanes(){this.onClippingPlanesUpdated.trigger()}setPlane(e,i,n){i.isLocal=n;const a=this.clippingPlanes.indexOf(i);e&&a===-1?this.clippingPlanes.push(i):!e&&a>-1&&this.clippingPlanes.splice(a,1),this.three.clippingPlanes=this.clippingPlanes.filter(h=>!h.isLocal)}}class R extends m{constructor(e){super(e);t(this,"onDisposed",new o);t(this,"directionalLights",new Map);t(this,"ambientLights",new Map)}dispose(){const e=this.components.get(f);for(const i of this.three.children){const n=i;n.geometry&&e.destroy(n)}for(const[,i]of this.directionalLights)i.removeFromParent(),i.target.removeFromParent(),i.dispose();for(const[,i]of this.ambientLights)i.removeFromParent(),i.dispose();this.three.children=[],this.onDisposed.trigger(),this.onDisposed.reset()}}class W extends R{constructor(e){super(e);t(this,"isSetup",!1);t(this,"three");t(this,"onSetup",new o);t(this,"config",{directionalLight:{color:new d("white"),intensity:1.5,position:new L(5,10,3)},ambientLight:{color:new d("white"),intensity:1}});this.three=new E,this.three.background=new d(2107698)}setup(e){this.config={...this.config,...e};const i=new C(this.config.directionalLight.color,this.config.directionalLight.intensity);i.position.copy(this.config.directionalLight.position);const n=new _(this.config.ambientLight.color,this.config.ambientLight.intensity);this.three.add(i,n),this.directionalLights.set(i.uuid,i),this.ambientLights.set(n.uuid,n),this.isSetup=!0,this.onSetup.trigger(this)}}class A extends U{constructor(e,i,n){super(e);t(this,"enabled",!0);t(this,"container");t(this,"needsUpdate");t(this,"three");t(this,"_canvas");t(this,"_parameters");t(this,"_resizeObserver",null);t(this,"onContainerUpdated",new o);t(this,"_resizing",!1);t(this,"resize",e=>{if(this._resizing)return;this._resizing=!0,this.onContainerUpdated.trigger();const i=e?e.x:this.container.clientWidth,n=e?e.y:this.container.clientHeight;this.three.setSize(i,n),this.onResize.trigger(new u(i,n)),this._resizing=!1});t(this,"resizeEvent",()=>{this.resize()});t(this,"onContextLost",e=>{e.preventDefault(),this.enabled=!1});t(this,"onContextBack",()=>{this.three.setRenderTarget(null),this.three.dispose(),this.three=new c({canvas:this._canvas,antialias:!0,alpha:!0,...this._parameters}),this.enabled=!0});this.container=i,this._parameters=n,this.three=new c({antialias:!0,alpha:!0,...n}),this.three.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.setupRenderer(),this.setupEvents(!0),this.resize(),this._canvas=this.three.domElement;const a=this.three.getContext(),{canvas:h}=a;h.addEventListener("webglcontextlost",this.onContextLost,!1),h.addEventListener("webglcontextrestored",this.onContextBack,!1),this.needsUpdate=!0}update(){if(!this.enabled||!this.currentWorld)return;this.onBeforeUpdate.trigger(this);const e=this.currentWorld.scene.three,i=this.currentWorld.camera.three;this.three.render(e,i),this.onAfterUpdate.trigger(this)}dispose(){this.enabled=!1,this.setupEvents(!1),this.three.domElement.remove(),this.three.forceContextLoss(),this.three.dispose(),this.onResize.reset(),this.onAfterUpdate.reset(),this.onBeforeUpdate.reset(),this.onDisposed.trigger(),this.onDisposed.reset()}getSize(){return new u(this.three.domElement.clientWidth,this.three.domElement.clientHeight)}setupEvents(e){const i=this.three.domElement.parentElement;if(!i)throw new Error("This renderer needs to have an HTML container!");this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),window.removeEventListener("resize",this.resizeEvent),e&&(this._resizeObserver=new ResizeObserver(this.resizeEvent),this._resizeObserver.observe(i),window.addEventListener("resize",this.resizeEvent))}setupRenderer(){this.three.localClippingEnabled=!0,this.container&&this.container.appendChild(this.three.domElement),this.onContainerUpdated.trigger()}}class Z{constructor(s,e,i){t(this,"onDisposed",new o);t(this,"world");t(this,"components");t(this,"three");t(this,"_fade",3);t(this,"updateZoom",()=>{this.world.camera instanceof p&&(this.material.uniforms.uZoom.value=this.world.camera.three.zoom)});this.world=e;const{color:n,size1:a,size2:h,distance:v}=i;this.components=s;const w=new D(2,2,1,1),z=new P({side:S,uniforms:{uSize1:{value:a},uSize2:{value:h},uColor:{value:n},uDistance:{value:v},uFade:{value:this._fade},uZoom:{value:1}},transparent:!0,vertexShader:`
            
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
            
            `,extensions:{derivatives:!0}});this.three=new y(w,z),this.three.frustumCulled=!1,e.scene.three.add(this.three),this.setupEvents(!0)}get visible(){return this.three.visible}set visible(s){s?this.world.scene.three.add(this.three):this.three.removeFromParent()}get material(){return this.three.material}get fade(){return this._fade===3}set fade(s){this._fade=s?3:0,this.material.uniforms.uFade.value=this._fade}dispose(){this.setupEvents(!1),this.components.get(f).destroy(this.three),this.onDisposed.trigger(),this.onDisposed.reset(),this.world=null,this.components=null}setupEvents(s){if(this.world.isDisposing||!(this.world.camera instanceof p))return;const e=this.world.camera.controls;s?e.addEventListener("update",this.updateZoom):e.removeEventListener("update",this.updateZoom)}}const l=class l extends F{constructor(e){super(e);t(this,"list",new Map);t(this,"config",{color:new d(12303291),size1:1,size2:10,distance:500});t(this,"onDisposed",new o);t(this,"enabled",!0);e.add(l.uuid,this)}create(e){if(this.list.has(e.uuid))throw new Error("This world already has a grid!");const i=new Z(this.components,e,this.config);return this.list.set(e.uuid,i),e.onDisposed.add(()=>{this.delete(e)}),i}delete(e){const i=this.list.get(e.uuid);i&&i.dispose(),this.list.delete(e.uuid)}dispose(){for(const[e,i]of this.list)i.dispose();this.list.clear(),this.onDisposed.trigger(),this.onDisposed.reset()}};t(l,"uuid","d1e814d5-b81c-4452-87a2-f039375e0489");let g=l;export{g as G,W as S,A as a};
