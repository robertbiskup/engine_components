/* MD
### 📐 Measuring faces
---

Space control is one of the most important elements of BIM applications. In this tutorial, you'll learn how to expose an face measurement tool to your end users.

We will import:

- `three` to create some 3D items.
- `@thatopen/components` to set up the barebone of our app.
- `@thatopen/components-front` to use some frontend-oriented components.
- `Stats.js` (optional) to measure the performance of our app.
*/

import Stats from "stats.js";
import * as THREE from "three";
import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";

/* MD
  ### 🌎 Setting up a simple scene
  ---

  We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial.
*/

const container = document.getElementById("container")!;

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create<
  OBC.SimpleScene,
  OBC.SimpleCamera,
  OBCF.PostproductionRenderer
>();

world.scene = new OBC.SimpleScene(components);
world.renderer = new OBCF.PostproductionRenderer(components, container);
world.camera = new OBC.SimpleCamera(components);

components.init();

world.camera.controls.setLookAt(5, 5, 5, 0, 0, 0);

world.scene.setup();

const grids = components.get(OBC.Grids);
grids.create(world);

/* MD

  We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!

*/

world.scene.three.background = null;

/* MD
  ### 🧳 Loading a BIM model
  ---

 We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file.

  :::tip Fragments?

    If you are not familiar with fragments, check out the IfcLoader tutorial!

  :::
*/

const fragments = new OBC.FragmentsManager(components);
const file = await fetch(
  "https://thatopen.github.io/engine_components/resources/small.frag",
);
const data = await file.arrayBuffer();
const buffer = new Uint8Array(data);
const model = fragments.load(buffer);
world.scene.three.add(model);

for (const child of model.children) {
  if (child instanceof THREE.Mesh) {
    world.meshes.add(child);
  }
}

/* MD 
  ### 🛠️ Getting the face measurements
  ---
  
  First, let's get an instance of the face measurement component and initialize it:
*/

const dimensions = components.get(OBCF.FaceMeasurement);
dimensions.world = world;
dimensions.enabled = true;

/* MD
  ### 🖱️ Setting up mouse events
  ---

  Now, we'll define how to create the edge dimensions. In this case, we'll keep it simple and use the double click event of the container HTML element.

*/

container.ondblclick = () => dimensions.create();

/* MD
  
  ### 🧹 Deleting the Dimensions
  ---

  Now that we know how to make multiple dimensions, we'll learn how to delete them when necessary. Dimensions can be removed using the `deleteAll()` method, which deletes all the created dimensions. You can also use the `delete()` method to just delete one dimension (the one under the mouse cursor). Let's set up some basic key events that allow us to delete, save and recover the dimensions:
*/

let saved: OBCF.SerializedAreaMeasure[];

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyO") {
    dimensions.delete();
  } else if (event.code === "KeyS") {
    saved = dimensions.get();
    dimensions.deleteAll();
  } else if (event.code === "KeyL") {
    if (saved) {
      dimensions.set(saved);
    }
  }
});

/* MD
  ### ⏱️ Measuring the performance (optional)
  ---

  We'll use the [Stats.js](https://github.com/mrdoob/stats.js) to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control.
*/

const stats = new Stats();
stats.showPanel(2);
document.body.append(stats.dom);
stats.dom.style.left = "0px";
stats.dom.style.zIndex = "unset";
world.renderer.onBeforeUpdate.add(() => stats.begin());
world.renderer.onAfterUpdate.add(() => stats.end());

/* MD
  ### 🎉 Wrap up
  ---

  That's it! You have created an app that can create and delete face dimensions on any 3D object. Congratulations!
*/
