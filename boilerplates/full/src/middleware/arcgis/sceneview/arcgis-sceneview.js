
import SceneView from 'esri/views/SceneView';
import WebScene from 'esri/WebScene';
import EsriMap from 'esri/Map';


import {
  INIT_MAP,
} from '../../../constants/action-types';

const ags = {};

function createMap(opts = {}) {
  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
  if (opts.getState && opts.dispatch) {
    return () => next => action => next(action);
  }

  return () => next => (action) => {
    switch (action.type) {
      case INIT_MAP: {
        const { payload } = action;
        const { container, webscene, basemap } = payload;

        // DOM container not defined
        if (!container) break;


        // if sceneview container is already initialized, just add it back to the DOM.
        if (ags.container) {
          container.appendChild(ags.container);
          break;
        }

        // Otherwise, create a new container element and a new scene view.
        ags.container = document.createElement('div');
        container.appendChild(ags.container);
        ags.view = new SceneView({ container: ags.container });


        // Initialize web scene
        let scene;
        if (webscene) {
          scene = new WebScene({ portalItem: { id: webscene } });
        } else if (basemap) {
          scene = new EsriMap({ basemap });
        }
        ags.view.map = scene;

        // When initialized...
        return scene.load()
          .then(() => {
            return ags.view.whenLayerView(scene.layers.getItemAt(0));
          })
          .then(() => {
            // Update the environment settings (either from the state or from the scene)

          });
      }
      default: {
        next(action);
        break;
      }
    }

    return Promise.resolve();
  };
}

export { createMap };
