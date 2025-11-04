import{u as y,V as b,f as m,a as h,J as w}from"./index-BVinSk0X.js";import{C as L,W as C,S as v,a as I,O as k,F as S,H as f}from"./index-Cd9XZf6e.js";import{I as A}from"./index-BpMBWWSA.js";const a=new L,N=a.get(C),n=N.create();n.scene=new v(a);n.scene.setup();n.scene.three.background=null;const W=document.getElementById("container");n.renderer=new I(a,W);n.camera=new k(a);await n.camera.controls.setLookAt(78,20,-2.2,26,-4,25);a.init();const q="/node_modules/fragments-beta/dist/Worker/worker.mjs",r=a.get(S);r.init(q);n.camera.controls.addEventListener("rest",()=>r.core.update(!0));n.onCameraChanged.add(t=>{for(const[,e]of r.list)e.useCamera(t.three);r.core.update(!0)});r.list.onItemSet.add(({value:t})=>{t.useCamera(n.camera.three),n.scene.three.add(t.object),r.core.update(!0)});const F=["/resources/frags/school_arq.frag","/resources/frags/school_str.frag"];await Promise.all(F.map(async t=>{var l;const e=(l=t.split("/").pop())==null?void 0:l.split(".").shift();if(!e)return null;const o=await(await fetch(t)).arrayBuffer();return r.core.load(o,{modelId:e})}));const d=a.get(A);d.create("Walls & Slabs",[{categories:[/WALL/,/SLAB/]}]);d.create("Masonry Walls",[{categories:[/WALL/],attributes:{queries:[{name:/Name/,value:/Masonry/}]}}]);const R={categories:[/BUILDINGSTOREY/],attributes:{queries:[{name:/Name/,value:/Entry/}]}};d.create("First Level Columns",[{categories:[/COLUMN/],relation:{name:"ContainedInStructure",query:R}}]);const B=async t=>{const e=d.list.get(t);return e?await e.test():{}};y.init();const M=()=>m`
    <bim-table ${w(e=>{if(!e)return;const s=e;s.loadFunction=async()=>{const o=[];for(const[l]of d.list)o.push({data:{Name:l,Actions:""}});return o},s.loadData(!0)})}></bim-table>
  `,i=b.create(M);i.style.maxHeight="25rem";i.columns=["Name",{name:"Actions",width:"auto"}];i.noIndentation=!0;i.headersHidden=!0;i.dataTransform={Actions:(t,e)=>{const{Name:s}=e;if(!s)return t;const o=a.get(f);return m`<bim-button icon="solar:cursor-bold" @click=${async({target:p})=>{p.loading=!0;const g=await B(s);await o.isolate(g),p.loading=!1}}></bim-button>`}};const u=b.create(()=>m`
    <bim-panel active label="Items Finder Tutorial" class="options-menu">
      <bim-panel-section style="min-width: 14rem" label="General">
        <bim-button label="Reset Visibility" @click=${async({target:e})=>{e.loading=!0,await a.get(f).set(!0),e.loading=!1}}></bim-button>
      </bim-panel-section>
      <bim-panel-section label="Queries">
        ${i}
      </bim-panel-section>
    </bim-panel>
  `);document.body.append(u);const U=b.create(()=>m`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{u.classList.contains("options-menu-visible")?u.classList.remove("options-menu-visible"):u.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(U);const c=new h;c.showPanel(2);document.body.append(c.dom);c.dom.style.left="0px";c.dom.style.zIndex="unset";n.renderer.onBeforeUpdate.add(()=>c.begin());n.renderer.onAfterUpdate.add(()=>c.end());
