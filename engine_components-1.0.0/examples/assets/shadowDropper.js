import{B as p,M as u,a as b,C as h}from"./web-ifc-api-ub-SNF9_.js";import{a as w,h as f,M as g,N as x,b as v}from"./index-Yrq3EJXu.js";import{S}from"./stats.min-GTpOrGrX.js";import{d as y,R as c,m as d}from"./index-CqPyogbW.js";import{J as M,Z as $}from"./index-Bwkk81Gk.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l=document.getElementById("container"),o=new w,E=o.get(f),e=E.create();e.scene=new g(o);e.renderer=new M(o,l);e.camera=new x(o);e.scene.setup();o.init();e.camera.controls.setLookAt(5,5,5,0,0,0);l.appendChild(e.renderer.three2D.domElement);const m=o.get(v);m.config.color.setHex(14540253);m.create(e);const B=new p(3,3,3),C=new u({color:"#6528D7"}),n=new b(B,C);n.position.set(0,1.5,0);e.scene.three.add(n);e.meshes.add(n);e.scene.three.background=new h("white");const t=o.get($);t.shadowExtraScaleFactor=15;t.shadowOffset=.1;const a="example";t.create([n],a,e);const s=new S;s.showPanel(2);document.body.append(s.dom);s.dom.style.left="0px";s.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>s.begin());e.renderer.onAfterUpdate.add(()=>s.end());y.init();const i=c.create(()=>d`
  <bim-panel active label="Shadow dropper Tutorial" class="options-menu">
    <bim-panel-section collapsed label="Controls">
          
        <bim-number-input 
          slider label="Extra scale factor" step="1" 
          value="${t.shadowExtraScaleFactor}" min="0" max="20"
          @change="${({target:r})=>{t.shadowExtraScaleFactor=r.value,t.deleteShadow(a),t.create([n],a,e)}}">
        </bim-number-input> 
                  
        <bim-number-input 
          slider label="Amount" step="1" 
          value="${t.amount}" min="0" max="20"
          @change="${({target:r})=>{t.amount=r.value,t.deleteShadow(a),t.create([n],a,e)}}">
        </bim-number-input>    
                       
        <bim-number-input 
          slider label="Shadow offset" step="0.01" 
          value="${t.shadowOffset}" min="0" max="3"
          @change="${({target:r})=>{t.shadowOffset=r.value,t.deleteShadow(a),t.create([n],a,e)}}">
        </bim-number-input> 

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(i);const L=c.create(()=>d`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{i.classList.contains("options-menu-visible")?i.classList.remove("options-menu-visible"):i.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(L);
