import"./web-ifc-api-ub-SNF9_.js";import{S as b}from"./stats.min-GTpOrGrX.js";import{d as w,R as f,m as u}from"./index-CqPyogbW.js";import{a as y,h as g,M as h,v as B,N as F,b as L,_ as v,j as x,x as R}from"./index-Yrq3EJXu.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S=document.getElementById("container"),n=new y,U=n.get(g),s=U.create();s.scene=new h(n);s.renderer=new B(n,S);s.camera=new F(n);n.init();s.camera.controls.setLookAt(12,6,8,0,0,-10);s.scene.setup();const k=n.get(L);k.create(s);s.scene.three.background=null;const I=new v(n),j=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),A=await j.arrayBuffer(),N=new Uint8Array(A),P=I.load(N);s.scene.three.add(P);function O(e,o){const t=new File([o],e),a=document.createElement("a"),p=URL.createObjectURL(t);a.href=p,a.download=t.name,a.click(),URL.revokeObjectURL(p)}async function _(e){for(const{name:o,bits:t}of e)O(o,t),await new Promise(a=>{setTimeout(a,100)})}const c=n.get(x);c.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.57/",absolute:!0};const r={types:{},ids:{},indexesFile:"small.ifc-processed-properties-indexes"};let l=0;const d=[];c.onPropertiesStreamed.add(async e=>{r.types[e.type]||(r.types[e.type]=[]),r.types[e.type].push(l);for(const a in e.data)r.ids[a]=l;const o=`small.ifc-processed-properties-${l}`,t=new Blob([JSON.stringify(e.data)]);d.push({bits:t,name:o}),l++});c.onProgress.add(async e=>{console.log(e)});c.onIndicesStreamed.add(async e=>{d.push({name:"small.ifc-processed-properties.json",bits:new Blob([JSON.stringify(r)])});const t=n.get(R).serializeRelations(e);d.push({name:"small.ifc-processed-properties-indexes",bits:new Blob([t])}),await _(d)});async function z(){const o=await(await fetch("https://thatopen.github.io/engine_components/resources/small.ifc")).arrayBuffer(),t=new Uint8Array(o);await c.streamFromBuffer(t)}const i=new b;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";i.dom.style.zIndex="unset";s.renderer.onBeforeUpdate.add(()=>i.begin());s.renderer.onAfterUpdate.add(()=>i.end());w.init();const m=f.create(()=>u`
  <bim-panel active label="Property Tiles Tutorial" class="options-menu">
   <bim-panel-section collapsed label="Controls">
      
      <bim-panel-section style="padding-top: 12px;">
      
        <bim-button label="Load IFC"
          @click="${()=>{z()}}">
        </bim-button>  
      
      </bim-panel-section>
      
    </bim-panel>
  `);document.body.append(m);const T=f.create(()=>u`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{m.classList.contains("options-menu-visible")?m.classList.remove("options-menu-visible"):m.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(T);
