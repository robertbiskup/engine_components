import{C as w,u as C,V as b,f as c,a as h,z as y}from"./index-BVinSk0X.js";import{C as k,W as v,S as I,a as S,O as L,F as $,R as P}from"./index-DBG1qVuX.js";const s=new k,R=s.get(v),n=R.create();n.scene=new I(s);n.scene.setup();n.scene.three.background=null;const p=document.getElementById("container");n.renderer=new S(s,p);n.camera=new L(s);await n.camera.controls.setLookAt(68,23,-8.5,21.5,-5.5,23);s.init();const z="/node_modules/fragments-beta/dist/Worker/worker.mjs",a=s.get($);a.init(z);n.camera.controls.addEventListener("rest",()=>a.core.update(!0));n.onCameraChanged.add(e=>{for(const[,t]of a.list)t.useCamera(e.three);a.core.update(!0)});a.list.onItemSet.add(({value:e})=>{e.useCamera(n.camera.three),n.scene.three.add(e.object),a.core.update(!0)});const E=["/resources/frags/school_arq.frag"];await Promise.all(E.map(async e=>{var o;const t=(o=e.split("/").pop())==null?void 0:o.split(".").shift();if(!t)return null;const i=await(await fetch(e)).arrayBuffer();return a.core.load(i,{modelId:t})}));const O=s.get(P),_=O.get(n);let g=e=>{};p.addEventListener("dblclick",async()=>{const e=await _.castRay();if(!e)return;const t={[e.fragments.modelId]:new Set([e.localId])};g(t)});let f=()=>{},d;const u=new w("purple");g=async e=>{const t=Object.keys(e)[0];if(t&&a.list.get(t)){const l=a.list.get(t),[i]=await l.getItemsData([...e[t]]);d=i}await a.highlight({color:u,renderedFaces:y.ONE,opacity:1,transparent:!1},e),await a.core.update(!0),f()};C.init();const[m,j]=b.create(e=>{const t=({target:o})=>{u.set(o.color)};let l=c`<bim-label>There is no item name to display.</bim-label>`;d&&"value"in d.Name&&(l=c`<bim-label>${d.Name.value}</bim-label>`);const i=async({target:o})=>{o.loading=!0,await a.resetHighlight(),await a.core.update(!0),o.loading=!1};return c`
    <bim-panel active label="Raycasters Tutorial" class="options-menu">
      <bim-panel-section label="Controls">
        <bim-label>Double Click: Colorize element</bim-label>
        <bim-color-input @input=${t} color=#${u.getHexString()}></bim-color-input>
        <bim-button label="Clear Colors" @click=${i}></bim-button>
      </bim-panel-section>
      <bim-panel-section label="Item Data">
        ${l}
      </bim-panel-section>
    </bim-panel>
  `},{});f=()=>j();document.body.append(m);const x=b.create(()=>c`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{m.classList.contains("options-menu-visible")?m.classList.remove("options-menu-visible"):m.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(x);const r=new h;r.showPanel(2);document.body.append(r.dom);r.dom.style.left="0px";r.dom.style.zIndex="unset";n.renderer.onBeforeUpdate.add(()=>r.begin());n.renderer.onAfterUpdate.add(()=>r.end());
