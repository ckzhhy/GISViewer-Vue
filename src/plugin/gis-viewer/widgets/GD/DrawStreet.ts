import '@amap/amap-jsapi-types';
import axios from 'axios';

export class DrawSteet {
  private static instance: DrawSteet;
  private view!: AMap.Map;
  private overlayGroup: AMap.OverlayGroup = new AMap.OverlayGroup();
  private streets: any;
  private colors = ['#6DC647', '#FFCD05', '#DE0404'];
  private streeData: any = [
    {
      geometry: {
        path: [
          [121.413573, 31.186739],
          [121.413626, 31.186408],
          [121.413658, 31.186161],
          [121.41368, 31.185803],
          [121.413766, 31.185527],
          [121.413819, 31.185243],
          [121.413819, 31.184967],
          [121.413884, 31.184499],
          [121.413948, 31.184095],
          [121.414055, 31.183334],
          [121.41412, 31.18281],
          [121.414184, 31.182462],
          [121.414216, 31.18215],
          [121.41427, 31.181663],
          [121.414366, 31.181094],
          [121.414399, 31.1808],
          [121.414541, 31.179841],
          [121.414637, 31.179198],
          [121.414702, 31.178822],
          [121.41483, 31.178436],
          [121.415131, 31.177656],
          [121.415292, 31.177197],
          [121.415581, 31.176426],
          [121.4157, 31.176114],
          [121.415818, 31.175802],
          [121.415925, 31.175499],
          [121.416011, 31.175279],
          [121.416161, 31.174847],
          [121.416225, 31.174572],
          [121.416322, 31.174333],
          [121.416322, 31.174333],
          [121.416418, 31.174048]
        ]
      },
      geotype: 'polyline',
      id: 1
    },
    {
      geometry: {
        path: [
          [121.413468, 31.186743],
          [121.413554, 31.186247],
          [121.413618, 31.185779],
          [121.413704, 31.185357],
          [121.413725, 31.185054],
          [121.413779, 31.184604],
          [121.413854, 31.183999],
          [121.413972, 31.18331],
          [121.414004, 31.182759],
          [121.414112, 31.18219],
          [121.414176, 31.181777],
          [121.41424, 31.180951],
          [121.414283, 31.180694],
          [121.414401, 31.179905],
          [121.414552, 31.178959],
          [121.414734, 31.178409],
          [121.415103, 31.177399],
          [121.415425, 31.176536],
          [121.415628, 31.175949],
          [121.415843, 31.175389],
          [121.415993, 31.175021],
          [121.416165, 31.17448],
          [121.416283, 31.174149]
        ]
      },
      geotype: 'polyline',
      id: 1
    },
    {
      geometry: {
        path: [
          [121.410173, 31.180148],
          [121.410366, 31.179652],
          [121.41057, 31.179019],
          [121.410709, 31.178578],
          [121.410945, 31.177963],
          [121.411214, 31.177091],
          [121.411353, 31.176706],
          [121.411696, 31.17565],
          [121.411868, 31.175081],
          [121.412061, 31.174475],
          [121.412319, 31.173686]
        ]
      },
      geotype: 'polyline',
      id: 1
    },
    {
      geometry: {
        path: [
          [121.415097, 31.177394],
          [121.414679, 31.177293],
          [121.413971, 31.177183],
          [121.413134, 31.177036],
          [121.41204, 31.176834],
          [121.411171, 31.176678],
          [121.40999, 31.176458],
          [121.408918, 31.176256],
          [121.407922, 31.176084],
          [121.406927, 31.175894],
          [121.405932, 31.175712],
          [121.404905, 31.17554]
        ]
      },
      geotype: 'polyline',
      id: 1
    },
    {
      geometry: {
        path: [
          [121.40807, 31.17957],
          [121.408274, 31.179092],
          [121.408435, 31.178698],
          [121.408574, 31.17789],
          [121.408682, 31.177238],
          [121.408832, 31.17644],
          [121.409003, 31.175604],
          [121.409143, 31.174916],
          [121.409239, 31.174402],
          [121.409508, 31.173034]
        ]
      },
      geotype: 'polyline',
      id: 1
    },
    {
      geometry: {
        path: [
          [121.40557, 31.172309],
          [121.406772, 31.172538],
          [121.407115, 31.172621],
          [121.407748, 31.172805],
          [121.408413, 31.172942],
          [121.409078, 31.173098],
          [121.409529, 31.173172],
          [121.40969, 31.173163],
          [121.411256, 31.173475],
          [121.411932, 31.173603],
          [121.412351, 31.173695],
          [121.413016, 31.173796],
          [121.413542, 31.173915],
          [121.414175, 31.174016],
          [121.414958, 31.174172],
          [121.416181, 31.174439]
        ]
      },
      geotype: 'polyline',
      id: 1
    },
    {
      geometry: {
        path: [
          [121.416213, 31.174301],
          [121.415752, 31.1742],
          [121.415376, 31.174145],
          [121.414926, 31.174053],
          [121.413853, 31.173842],
          [121.412898, 31.173677],
          [121.412372, 31.173585],
          [121.411643, 31.173438],
          [121.41116, 31.173365],
          [121.410634, 31.173291],
          [121.410151, 31.17319],
          [121.409593, 31.17308],
          [121.409486, 31.173034],
          [121.40896, 31.172896],
          [121.408177, 31.17275],
          [121.407694, 31.17263],
          [121.407115, 31.172447],
          [121.40616, 31.172281],
          [121.405581, 31.172153]
        ]
      },
      geotype: 'polyline',
      id: 1
    },
    {
      geometry: {
        path: [
          [121.404251, 31.178496],
          [121.405554, 31.178858],
          [121.40623, 31.17907],
          [121.407351, 31.179372],
          [121.408054, 31.17957],
          [121.408472, 31.179694],
          [121.408649, 31.179753],
          [121.409234, 31.179919],
          [121.409738, 31.180052],
          [121.410853, 31.180395],
          [121.41141, 31.180539],
          [121.411967, 31.180655],
          [121.412543, 31.180717],
          [121.413119, 31.18075],
          [121.413695, 31.180729],
          [121.414271, 31.180699]
        ]
      },
      geotype: 'polyline',
      id: 1
    },
    {
      geometry: {
        path: [
          [121.440552, 31.194434],
          [121.440659, 31.194232],
          [121.440745, 31.194021],
          [121.44083, 31.193874],
          [121.441013, 31.193571],
          [121.441206, 31.193296],
          [121.441367, 31.193039],
          [121.441539, 31.192791],
          [121.44171, 31.192479],
          [121.441775, 31.192304],
          [121.441872, 31.19213],
          [121.441979, 31.191928],
          [121.442118, 31.191598],
          [121.442194, 31.191405],
          [121.442247, 31.191194],
          [121.442215, 31.190937],
          [121.442226, 31.19079],
          [121.442194, 31.190515],
          [121.442129, 31.190166],
          [121.442108, 31.189826]
        ]
      },
      geotype: 'polyline',
      id: 2
    },
    {
      geometry: {
        path: [
          [121.444854, 31.196948],
          [121.444897, 31.196811],
          [121.445026, 31.196554],
          [121.445112, 31.196343],
          [121.44524, 31.196095],
          [121.445316, 31.195911],
          [121.445455, 31.195581],
          [121.44554, 31.195397],
          [121.44569, 31.195122],
          [121.445809, 31.194736],
          [121.44598, 31.19436],
          [121.446142, 31.194048],
          [121.44626, 31.193782],
          [121.446389, 31.193507],
          [121.446496, 31.193213],
          [121.446614, 31.192938],
          [121.446775, 31.192571],
          [121.446903, 31.192304],
          [121.446989, 31.192066],
          [121.44714, 31.191745],
          [121.447182, 31.191634]
        ]
      },
      geotype: 'polyline',
      id: 2
    },
    {
      geometry: {
        path: [
          [121.441898, 31.192153],
          [121.44207, 31.192236],
          [121.442242, 31.192327],
          [121.442746, 31.192575],
          [121.442896, 31.192649],
          [121.44341, 31.192933],
          [121.443755, 31.193126],
          [121.443969, 31.193282],
          [121.444366, 31.193475],
          [121.44459, 31.193594],
          [121.444892, 31.193787],
          [121.445106, 31.193897],
          [121.445342, 31.194025],
          [121.44562, 31.194172],
          [121.445954, 31.194392]
        ]
      },
      geotype: 'polyline',
      id: 2
    },
    {
      geometry: {
        path: [
          [121.441898, 31.192135],
          [121.44236, 31.192346],
          [121.442682, 31.192493],
          [121.443, 31.192713],
          [121.443368, 31.19286],
          [121.443905, 31.193153],
          [121.444248, 31.193364],
          [121.444506, 31.193502],
          [121.44473, 31.193612],
          [121.444978, 31.193759],
          [121.445182, 31.193906],
          [121.445557, 31.194089],
          [121.445815, 31.194236],
          [121.445954, 31.194337]
        ]
      },
      geotype: 'polyline',
      id: 2
    }
  ];

  private constructor(view: any) {
    this.view = view;
    this.view.add(this.overlayGroup as any);
  }

  public static getInstance(view: AMap.Map) {
    if (!DrawSteet.instance) {
      DrawSteet.instance = new DrawSteet(view);
    }
    return DrawSteet.instance;
  }
  public static destroy() {
    (DrawSteet.instance as any) = null;
  }
  public async hideRoad() {
    this.overlayGroup.clearOverlays();
  }
  public async showRoad(param: {ids: string[]}) {
    this.overlayGroup.clearOverlays();
    let ids = (param && param.ids) || [];
    let _this = this;
    if (this.streets) {
      this.drawStreet(ids);
    } else {
      // axios.get('./config/street_xh.json').then((res: any) => {
      //   _this.streets = res.data;
      //   _this.drawStreet(ids);
      // });
      this.streets = this.streeData;
      this.drawStreet(ids);
    }
  }
  private drawStreet(ids: any[]) {
    let allLines: any[] = [];
    this.streets.forEach((road: any) => {
      if (ids.length == 0 || (ids.length > 0 && ids.indexOf(road.id) > -1)) {
        let paths = road.geometry.path;
        let newPaths = this.splitPath(paths);
        for (let i = 0; i < newPaths.length; i++) {
          let sPath = newPaths[i];
          let polyline = new AMap.Polyline({
            path: sPath,
            strokeColor: this.getColor(),
            strokeOpacity: 1,
            strokeWeight: 3,
            strokeStyle: 'solid'
          });
          this.overlayGroup.addOverlay(polyline);
          allLines.push(polyline);
        }
      }
    }, this);

    this.view.setFitView(allLines);
  }
  private splitPath(paths: []): any[][] {
    let newPaths = [];
    let currentIndex = 0;
    while (currentIndex < paths.length - 1) {
      let num = Math.round(Math.random() * 4) + 1; //1-5
      let nPath: any[] = [];
      for (let i = currentIndex; i <= currentIndex + num; i++) {
        if (i < paths.length) {
          nPath.push(paths[i]);
        }
      }
      newPaths.push(nPath);
      currentIndex = currentIndex + num;
    }
    return newPaths;
  }
  private getColor(): string {
    let num = Math.round(Math.random() * 100);
    let index = 0;
    if (num > 35 && num < 38) {
      index = 2;
    } else if (num > 18 && num <= 24) {
      index = 1;
    }
    return this.colors[index];
  }
}
