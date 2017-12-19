/// <reference path="../../arcgis-js-api.d.ts" />

import esri = __esri;

import esriLoader from 'esri-loader';

import Environment from './env';

export default class MapUtil {
  private static _instance: MapUtil = null;
  static get instance(): MapUtil {
    if (!MapUtil._instance) {
      MapUtil._instance = new MapUtil();
    }
    return MapUtil._instance;
  }

  protected prepare() {

  }

  create(dom) {
    this.prepare();

    esriLoader.loadModules([
      'esri/views/MapView',
      'esri/WebMap'
    ], { url: Environment.getApiRoot() }).then(([
      MapView,
      WebMap
    ]) => {
      // then we load a web map
      var webmap: esri.WebMap = new WebMap({
        basemap: 'streets-night-vector',
      });
      // and we show that map in a container w/ div
      var view: esri.MapView = new MapView({
        map: webmap,
        container: dom,
      });
    });
  }
};