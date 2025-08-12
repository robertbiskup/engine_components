import{C as b,a as u}from"./index-DlY156jz.js";import{C as f,W as w,S as y,O as C,F as v,R as k,l as I,L as h,m as g,M as H}from"./graphic-vertex-picker-C7N_2gcn.js";import{P as L}from"./index-CBpXXm65.js";import{H as S}from"./index-DkcBiB7U.js";const l=new f,R=l.get(w),t=R.create();t.scene=new y(l);t.scene.setup();t.scene.three.background=null;const U=document.getElementById("container");t.renderer=new L(l,U);t.camera=new C(l);await t.camera.controls.setLookAt(68,23,-8.5,21.5,-5.5,23);l.init();const P="https://thatopen.github.io/engine_fragment/resources/worker.mjs",j=await fetch(P),F=await j.blob(),M=new File([F],"worker.mjs",{type:"text/javascript"}),B=URL.createObjectURL(M),a=l.get(v);a.init(B);t.camera.controls.addEventListener("rest",()=>a.core.update(!0));t.onCameraChanged.add(e=>{for(const[,s]of a.list)s.useCamera(e.three);a.core.update(!0)});a.list.onItemSet.add(({value:e})=>{e.useCamera(t.camera.three),t.scene.three.add(e.object),a.core.update(!0)});const $=["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];await Promise.all($.map(async e=>{var r;const s=(r=e.split("/").pop())==null?void 0:r.split(".").shift();if(!s)return null;const d=await(await fetch(e)).arrayBuffer();return a.core.load(d,{modelId:s})}));l.get(k).get(t);const o=l.get(S);o.setup({world:t,selectMaterialDefinition:{color:new b("#bcf124"),opacity:1,transparent:!1,renderedFaces:0}});o.events.select.onHighlight.add(async e=>{console.log("Something was selected");const s=[];for(const[d,r]of Object.entries(e)){const p=a.list.get(d);p&&s.push(p.getItemsData([...r]))}const m=(await Promise.all(s)).flat();console.log(m)});o.events.select.onClear.add(()=>{console.log("Selection was cleared")});const n="Red";o.styles.set(n,{color:new b("red"),opacity:1,transparent:!1,renderedFaces:0});o.events[n].onHighlight.add(e=>{console.log("Highligthed with red",e)});o.events[n].onClear.add(e=>{console.log("Red highlighter cleared",e)});const A=async()=>{if(!o.styles.has(n))return;const e=o.selection.select;H.isEmpty(e)||await o.highlightByID(n,e,!1)},O=async(e=!0)=>{if(!o.styles.has(n))return;const s=o.selection.select;await o.clear(n,e?s:void 0),await o.clear("select")};I.init();const c=h.create(()=>g`
    <bim-panel active label="Highlighter Tutorial" class="options-menu">
      <bim-panel-section label="Controls">
        <bim-label>Click: single-selection</bim-label>
        <bim-label>Ctrl + click: multi-selection</bim-label>
      </bim-panel-section>
      <bim-panel-section label="Actions">
        <bim-label style="white-space: normal; width: 14rem;">Select some items, click the apply button, and then deselect them again to see the color applied</bim-label>
        <bim-button @click=${A} label="Apply ${n}"></bim-button>
        <bim-label style="white-space: normal; width: 14rem;">Select some item colored with red and apply the button. Then, deselect it to </bim-label>
        <bim-button @click=${O} label="Reset ${n}"></bim-button>
      </bim-panel-section>
    </bim-panel>
  `);document.body.append(c);const x=h.create(()=>g`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{c.classList.contains("options-menu-visible")?c.classList.remove("options-menu-visible"):c.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(x);const i=new u;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";i.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>i.begin());t.renderer.onAfterUpdate.add(()=>i.end());
