<template>
  <div id="divArcGISMap2D" />
</template>

<script lang="ts">
import {Vue, Component, Emit, Prop} from 'vue-property-decorator';
import MapApp from '@/plugin/gis-viewer/MapAppArcgis2D';
import {
    IMapContainer,
    IOverlayParameter,
    IHeatParameter,
    IOverlayClusterParameter,
    IOverlayDelete,
    ILayerConfig,
    IPointGeometry,
    ICenterLevel,
    IFindParameter,
    IResult,
    IDistrictParameter,
    IStreetParameter,
    IDrawOverlayParameter,
    ITrackPlaybackParameter
} from '@/types/map';
import TrackPlayback from "@/project/WuLuMuQi/TrackPlayback";

@Component({
  name: 'MapContainerArcgisTwoD'
})
export default class MapContainerArcgis extends Vue implements IMapContainer {
  private mapApp!: MapApp;

  //地图配置
  @Prop({type: Object}) readonly mapConfig!: Object;

  @Emit('map-loaded')
  async mounted() {
    this.mapApp = new MapApp();
    await this.mapApp.initialize(this.mapConfig, 'divArcGISMap2D');
    this.mapApp.showGisDeviceInfo = this.showGisDeviceInfo;
  }
  @Emit('marker-click')
  public showGisDeviceInfo(type: string, id: string, detail: any) {}
  @Emit('marker-mouse')
  public mouseGisDeviceInfo(
    event: any,
    type: string,
    id: string,
    detail: any
  ) {}

  public async addOverlays(params: IOverlayParameter): Promise<IResult> {
    return await this.mapApp.addOverlays(params);
  }
  public addHeatMap(params: IHeatParameter) {
    this.mapApp.addHeatMap(params);
  }
  public addOverlaysCluster(params: IOverlayClusterParameter) {}
  public deleteOverlays(params: IOverlayDelete) {
    this.mapApp.deleteOverlays(params);
  }
  public deleteOverlaysCluster(params: IOverlayDelete) {}
  public deleteAllOverlays() {
    this.mapApp.deleteAllOverlays();
  }
  public deleteAllOverlaysCluster() {}
  public deleteHeatMap() {
    this.mapApp.deleteHeatMap();
  }
  public showLayer(params: ILayerConfig) {
    this.mapApp.showLayer(params);
  }
  public hideLayer(params: ILayerConfig) {
    this.mapApp.hideLayer(params);
  }
  public setMapCenter(params: IPointGeometry) {
    this.mapApp.setMapCenter(params);
  }
  public setMapCenterAndLevel(params: ICenterLevel) {
    this.mapApp.setMapCenterAndLevel(params);
  }
  public showJurisdiction() {}
  public hideJurisdiction() {}
  public showDistrictMask(param: IDistrictParameter) {}
  public hideDistrictMask() {}
  public async findFeature(params: IFindParameter):Promise<IResult>{
    return await this.mapApp.findFeature(params);
  }
  public findLayerFeature(params: IFindParameter) {
    this.mapApp.findLayerFeature(params);
  }
  public showToolTip(params: string){
    this.mapApp.showToolTip(params);
  }
  public showRoad() {}
  public hideRoad() {}
  public showStreet() {}
  public hideStreet() {}
  public locateStreet(param: IStreetParameter) {}
  public async startDrawOverlays(params:IDrawOverlayParameter):Promise<IResult> {
    return await this.mapApp.startDrawOverlays(params);
  }
  public async startTrackPlayback(params: ITrackPlaybackParameter):Promise<IResult>{
        return await this.mapApp.startTrackPlayback(params);
  }
  public async startRealTrackPlayback(params: ITrackPlaybackParameter):Promise<IResult>{
    return await this.mapApp.startRealTrackPlayback(params);
  }
  public pausePlayback(){
    this.mapApp.pausePlayback();
  }
  public goOnPlayback(){
    this.mapApp.goOnPlayback();
  }
}
</script>

<style scoped>
#divArcGISMap2D {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
