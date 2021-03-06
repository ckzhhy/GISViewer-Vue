<template>
  <div id="divMap">
    <map-container-arcgis-three-d
      ref="containerArcgis3D"
      v-if="this.platform === 'arcgis3d'"
      :map-config="this.mapConfig"
      @map-loaded="mapLoaded"
      @marker-click="showGisDeviceInfo"
    />
    <map-container-arcgis-two-d
      ref="containerArcgis2D"
      v-if="this.platform === 'arcgis2d'"
      :map-config="this.mapConfig"
      @map-loaded="mapLoaded"
      @marker-click="showGisDeviceInfo"
    />
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Ref, Emit} from 'vue-property-decorator';
import MapContainerArcgisThreeD from '@/plugin/gis-viewer/MapContainerArcgis3D.vue';
import MapContainerArcgisTwoD from '@/plugin/gis-viewer/MapContainerArcgis2D.vue';
import {
  Platforms,
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
  components: {
    MapContainerArcgisThreeD,
    MapContainerArcgisTwoD
  }
})
export default class MapContainer extends Vue implements IMapContainer {
  //平台类型 高德/百度/arcgis
  @Prop({default: Platforms.ArcGIS2D, type: String})
  readonly platform!: string;

  //地图配置
  @Prop({type: Object}) readonly mapConfig!: Object;

  @Ref() readonly containerArcgis3D!: MapContainerArcgisThreeD;
  @Ref() readonly containerArcgis2D!: MapContainerArcgisTwoD;

  //当前的地图容器
  get mapContainer(): IMapContainer {
    switch (this.platform) {
      case Platforms.ArcGIS2D:
        return this.containerArcgis2D;
      case Platforms.ArcGIS3D:
        return this.containerArcgis3D;
      default:
        return this.containerArcgis2D;
    }
  }

  @Emit('map-loaded')
  private mapLoaded() {}

  @Emit('marker-click')
  private showGisDeviceInfo(type: string, id: string) {}
  @Emit('marker-mouse')
  public mouseGisDeviceInfo(
    event: any,
    type: string,
    id: string,
    detail: any
  ) {}

  public async addOverlays(params: IOverlayParameter): Promise<IResult> {
    return await this.mapContainer.addOverlays(params);
  }
  public addOverlaysCluster(params: IOverlayClusterParameter) {
    this.mapContainer.addOverlaysCluster(params);
  }
  public addHeatMap(params: IHeatParameter) {
    this.mapContainer.addHeatMap(params);
  }
  public deleteOverlays(params: IOverlayDelete) {
    this.mapContainer.deleteOverlays(params);
  }
  public deleteOverlaysCluster(params: IOverlayDelete) {
    this.mapContainer.deleteOverlaysCluster(params);
  }
  public deleteAllOverlays() {
    this.mapContainer.deleteAllOverlays();
  }
  public deleteAllOverlaysCluster() {
    this.mapContainer.deleteAllOverlaysCluster();
  }
  public deleteHeatMap() {
    this.mapContainer.deleteHeatMap();
  }
  public showLayer(params: ILayerConfig) {
    this.mapContainer.showLayer(params);
  }
  public hideLayer(params: ILayerConfig) {
    this.mapContainer.hideLayer(params);
  }
  public setMapCenter(params: IPointGeometry) {
    this.mapContainer.setMapCenter(params);
  }
  public setMapCenterAndLevel(params: ICenterLevel) {
    this.mapContainer.setMapCenterAndLevel(params);
  }
  public showJurisdiction() {
    this.mapContainer.showJurisdiction();
  }
  public hideJurisdiction() {
    this.mapContainer.hideJurisdiction();
  }
  public showDistrictMask(params: IDistrictParameter) {
    this.mapContainer.showDistrictMask(params);
  }
  public hideDistrictMask() {
    this.mapContainer.hideDistrictMask();
  }
  public findFeature(params: IFindParameter) :Promise<IResult>{
    return this.mapContainer.findFeature(params)
  }
  public findLayerFeature(params: IFindParameter) {
    this.mapContainer.findLayerFeature(params);
  }
  public showRoad(param: {ids: string[]}) {
    this.mapContainer.showRoad(param);
  }
  public hideRoad() {
    this.mapContainer.hideRoad();
  }
  public showStreet() {
    this.mapContainer.showStreet();
  }
  public hideStreet() {
    this.mapContainer.hideStreet();
  }
  public locateStreet(param: IStreetParameter) {
    this.mapContainer.locateStreet(param);
  }
  public showToolTip(param: string){
    this.mapContainer.showToolTip(param);
  }
  public async startDrawOverlays(param: IDrawOverlayParameter):Promise<IResult>{
    return this.mapContainer.startDrawOverlays(param)
  }
  public async startTrackPlayback(params: ITrackPlaybackParameter):Promise<IResult>{
    return await this.mapContainer.startTrackPlayback(params);
  }
  public async startRealTrackPlayback(params: ITrackPlaybackParameter):Promise<IResult>{
    return await this.mapContainer.startRealTrackPlayback(params);
  }
  public pausePlayback(){
    this.mapContainer.pausePlayback();
  }
  public goOnPlayback(){
    this.mapContainer.goOnPlayback();
  }
}
</script>

<style scoped>
#divMap {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
