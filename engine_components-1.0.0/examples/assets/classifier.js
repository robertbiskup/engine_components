import{ac as d,C as m}from"./web-ifc-api-ub-SNF9_.js";import{S as u}from"./stats.min-GTpOrGrX.js";import{d as b,R as a,m as c}from"./index-CqPyogbW.js";import{a as p,h as f,M as C,v as w,N as I,b as g,_ as y,d as A}from"./index-Yrq3EJXu.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E=document.getElementById("container"),s=new p,h=s.get(f),t=h.create();t.scene=new C(s);t.renderer=new w(s,E);t.camera=new I(s);s.init();t.camera.controls.setLookAt(12,6,8,0,0,-10);t.scene.setup();const L=s.get(g);L.create(t);t.scene.three.background=null;const R=new y(s),F=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),N=await F.arrayBuffer(),S=new Uint8Array(N),l=R.load(S);t.scene.three.add(l);const o=s.get(A);o.byEntity(l);o.byIfcRel(l,d,"storeys");o.byModel(l.uuid,l);const T=o.find({entities:["IFCWALLSTANDARDCASE"]}),v=o.find({entities:["IFCSLAB"]}),$=o.find({entities:["IFCMEMBER","IFCPLATE"]}),M=o.find({entities:["IFCFURNISHINGELEMENT"]}),U=o.find({entities:["IFCDOOR"]}),B=o.find({models:[l.uuid]}),i=new u;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";i.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>i.begin());t.renderer.onAfterUpdate.add(()=>i.end());b.init();const e=new m,r=a.create(()=>c`
    <bim-panel active label="Classifier Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
      
        <bim-color-input 
          label="Walls Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor(T,e)}}">
        </bim-color-input>
      
        <bim-color-input 
          label="Slabs Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor(v,e)}}">
        </bim-color-input>
      
        <bim-color-input 
          label="Curtain walls Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor($,e)}}">
        </bim-color-input>
      
        <bim-color-input 
          label="Furniture Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor(M,e)}}">
        </bim-color-input>
      
        <bim-color-input 
          label="Doors Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor(U,e)}}">
        </bim-color-input>
                  
        <bim-button 
          label="Reset walls color" 
          @click="${()=>{o.resetColor(B)}}">  
        </bim-button>  

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(r);const D=a.create(()=>c`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{r.classList.contains("options-menu-visible")?r.classList.remove("options-menu-visible"):r.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(D);
