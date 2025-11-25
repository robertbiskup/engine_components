var x=Object.defineProperty;var $=(i,t,e)=>t in i?x(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var d=(i,t,e)=>($(i,typeof t!="symbol"?t+"":t,e),e);import{b as f,W as E,C as y,S as L,u as S,V as C,f as g,a as B}from"./index-Dnoh0VRS.js";import{R as M,D as A,C as I,W as V,S as j,O as q,F as z}from"./graphic-vertex-picker-Dkfug0og.js";import{P as F}from"./index-BKjTN4qh.js";import{M as T,A as R,L as U}from"./index-Chj0D9Sb.js";import"./index-CNfkRmkL.js";const _=class _ extends T{constructor(e){super(e,"area");d(this,"pickTolerance",.1);d(this,"tolerance",.005);d(this,"modes",["free","square","face"]);d(this,"_mode","free");d(this,"_temp",{isDragging:!1,area:new R,lines:new E,point:new f});d(this,"computeLineElements",()=>{this._temp.lines.clear();const e=[...this._temp.area.points];if(this._temp.area.isPointInPlane(this._temp.point)&&e.push(this._temp.point),!(e.length<2||!this.world))for(let n=0;n<e.length;n++){const a=e[n],o=e[(n+1)%e.length],l=new U(a,o),c=this.createLineElement(l);this._temp.lines.add(c)}});d(this,"create",async()=>{if(!this.enabled)return;if(!this.world)throw new Error("Area Measurement: world is not defined!");const e=await this._vertexPicker.get({snappingClasses:this.snappings});if(!(e&&e.point))return;if(this.mode==="face"){const o=e.facePoints;if(!o)return;const l=[];for(let c=0;c<o.length-2;c+=3){const m=o[c],p=o[c+1],v=o[c+2];l.push(new f(m,p,v))}this._temp.area.points.add(...l),this.endCreation();return}const{area:n,point:a}=this._temp;if(this._temp.isDragging||(n.tolerance=this.tolerance,n.points.clear(),this._temp.isDragging=!0),n.points.size===0&&a.copy(e.point),n.points.add(a.clone()),this.mode==="square"&&n.points.size===2&&e.normal){const[o,l]=n.points,c=new f().subVectors(l,o),m=c.clone(),p=c.clone().negate();Math.abs(c.y)>=.1?(m.y=0,p.y=0):(m.x=0,p.x=0);const v=o.clone().add(m),P=l.clone().add(p);n.points.clear(),n.points.add(o,v,l,P),this.endCreation()}});d(this,"endCreation",()=>{this.enabled&&(this._temp.isDragging=!1,this._temp.area.points.size>=3&&this.list.add(this._temp.area.clone()),this._temp.area.points.clear(),this._temp.lines.clear())});d(this,"cancelCreation",()=>{this.enabled&&(this._temp.isDragging=!1,this._temp.area.points.clear(),this._temp.lines.clear())});d(this,"delete",()=>{if(!this.enabled||this.list.size===0||!this.world)return;const e=this.getFillBoxes(),o=this.components.get(M).get(this.world).castRayToObjects(e),l=this.components.get(A);for(const p of e)l.destroy(p);if(!o)return;const m=[...this.fills].find(p=>p.three===o.object);m&&(this.list.delete(m.area),this.lines.clear())});e.add(_.uuid,this),this.initHandlers(),this.color=new y("#6528d7")}get mode(){return this._mode}set mode(e){this._mode=e,this.cancelCreation(),this.onStateChanged.trigger(["mode"])}initHandlers(){this.onVisibilityChange.add(()=>{for(const e of this.lines)e.label.visible=!1}),this.list.onItemAdded.add(e=>{if(!this.world)return;const n=this.createFillElement(e);n.color=this.color,this.fills.add(n),this.addLineElementsFromPoints([...e.points])}),this.list.onBeforeDelete.add(e=>{const n=[...this.fills].find(a=>a.area===e);n&&this.fills.delete(n)}),this.onPointerStop.add(()=>this.updatePreview()),this._temp.lines.onItemAdded.add(e=>e.label.visible=!1),this._temp.lines.onBeforeDelete.add(e=>e.dispose()),this._temp.area.points.onItemAdded.add(()=>{this.computeLineElements()}),this._temp.area.points.onItemDeleted.add(()=>{this._temp.lines.clear()}),this.onStateChanged.add(e=>{e.includes("rounding")&&(this._temp.area.rounding=this.rounding),e.includes("units")&&(this._temp.area.units=this.units)})}async updatePreview(){if(!this.enabled||!this.world)throw new Error("Measurement is not enabled or world is not defined!");const e=await this._vertexPicker.get({snappingClasses:this.snappings});if(!(e&&e.point&&this._temp.isDragging))return;const n=e.point.clone(),{plane:a}=this._temp.area;if(a){const o=a.distanceToPoint(n);if(Math.abs(o)<.1){const l=new f;a.projectPoint(n,l),n.copy(l)}}this._temp.point.copy(n),this.computeLineElements()}};d(_,"uuid","09b78c1f-0ff1-4630-a818-ceda3d878c75");let k=_;const u=new I,W=u.get(V),r=W.create();r.scene=new j(u);r.scene.setup();r.scene.three.background=null;const D=document.getElementById("container");r.renderer=new F(u,D);r.camera=new q(u);await r.camera.controls.setLookAt(68,23,-8.5,21.5,-5.5,23);u.init();const H="https://thatopen.github.io/engine_fragment/resources/worker.mjs",h=u.get(z);h.init(H);r.camera.controls.addEventListener("rest",()=>h.core.update(!0));r.onCameraChanged.add(i=>{for(const[,t]of h.list)t.useCamera(i.three);h.core.update(!0)});h.list.onItemSet.add(({value:i})=>{i.useCamera(r.camera.three),r.scene.three.add(i.object),h.core.update(!0)});const O=["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];await Promise.all(O.map(async i=>{var a;const t=(a=i.split("/").pop())==null?void 0:a.split(".").shift();if(!t)return null;const n=await(await fetch(i)).arrayBuffer();return h.core.load(n,{modelId:t})}));const s=u.get(k);s.world=r;s.color=new y("#494cb6");s.enabled=!0;D.ondblclick=()=>s.create();window.addEventListener("keydown",i=>{(i.code==="Enter"||i.code==="NumpadEnter")&&s.endCreation()});const N=()=>{s.list.clear()},G=()=>{const i=[];for(const t of s.list)i.push(t.value);return i};window.onkeydown=i=>{(i.code==="Delete"||i.code==="Backspace")&&s.delete()};s.list.onItemAdded.add(i=>{if(!i.boundingBox)return;const t=new L;i.boundingBox.getBoundingSphere(t),r.camera.controls.fitToSphere(t,!0)});S.init();const w=C.create(()=>{const i=()=>{const t=G();console.log(t)};return g`
    <bim-panel active label="Area Measurement Tutorial" class="options-menu">
      <bim-panel-section label="Controls">
          <bim-label>Create dimension: Double click</bim-label>  
          <bim-label>Delete dimension: Delete</bim-label>  
      </bim-panel-section>
      
      <bim-panel-section label="Measurer">
        <bim-checkbox checked label="Enabled" 
          @change="${({target:t})=>{s.enabled=t.value}}">  
        </bim-checkbox>       
        <bim-checkbox checked label="Measurements Visible" 
          @change="${({target:t})=>{s.visible=t.value}}">  
        </bim-checkbox>  
        
        <bim-color-input 
          label="Color" color=#${s.linesMaterial.color.getHexString()}
          @input="${({target:t})=>{s.color=new y(t.color)}}">
        </bim-color-input>
        
        <bim-dropdown 
          label="Measure Mode" required
          @change="${({target:t})=>{const[e]=t.value;s.mode=e}}"> ${s.modes.map(t=>g`<bim-option label=${t} value=${t} ?checked=${t===s.mode}></bim-option>`)}
        </bim-dropdown>

        <bim-dropdown 
          label="Units" required
          @change="${({target:t})=>{const[e]=t.value;s.units=e}}">
          ${s.unitsList.map(t=>g`<bim-option label=${t} value=${t} ?checked=${t===s.units}></bim-option>`)}
        </bim-dropdown>

        <bim-dropdown 
          label="Pricision" required
          @change="${({target:t})=>{const[e]=t.value;s.rounding=e}}">
          <bim-option label="0" value=0></bim-option>
          <bim-option label="1" value=1></bim-option>
          <bim-option label="2" value=2 checked></bim-option>
          <bim-option label="3" value=3></bim-option>
          <bim-option label="4" value=4></bim-option>
          <bim-option label="5" value=5></bim-option>
        </bim-dropdown>

        <bim-button label="Delete all" @click=${()=>N()}></bim-button>
        
        <bim-button label="Log Values" @click=${i}></bim-button>
      </bim-panel-section>
    </bim-panel>
  `});document.body.append(w);const J=C.create(()=>g`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{w.classList.contains("options-menu-visible")?w.classList.remove("options-menu-visible"):w.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(J);const b=new B;b.showPanel(2);document.body.append(b.dom);b.dom.style.left="0px";b.dom.style.zIndex="unset";r.renderer.onBeforeUpdate.add(()=>b.begin());r.renderer.onAfterUpdate.add(()=>b.end());
