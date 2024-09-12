import { useEffect, useRef, useState } from "react";
import { Select } from "antd";
import { jsonp } from "@/assets/js/axios";
import { debounce } from "@/assets/js/utils";

// 参考案例： https://lbs.qq.com/demoList/glAPI#%E4%B8%AA%E6%80%A7%E5%8C%96%E5%9C%B0%E5%9B%BE
// https://lbs.qq.com/webDemoCenter/glAPI/glEditor/toolDraw

function convertPath(arrMap: any[]) {
    const simplePath: any = []

    arrMap.forEach(item => {
        simplePath.push(
            new TMap.LatLng(item.lat, item.lng)
        )
    })

    return simplePath
}

const AreaCreate = () => {
    var map: any;
    useEffect(() => {
        function initMap() {
            const arrMap = [
                {
                    "lat": 39.987999355721286,
                    "lng": 116.30677365172414,
                    "height": 0
                },
                {
                    "lat": 39.984794332407844,
                    "lng": 116.30675220010926,
                    "height": 0
                },
                {
                    "lat": 39.98446560354934,
                    "lng": 116.31949434581838,
                    "height": 0
                },
                {
                    "lat": 39.989018356830364,
                    "lng": 116.3200735327082,
                    "height": 0
                },
                {
                    "lat": 39.98959359291806,
                    "lng": 116.30763170854334,
                    "height": 0
                }
            ]
            map = new TMap.Map("container", {
                zoom: 16, // 设置地图缩放级别
                center: new TMap.LatLng(39.984104, 116.307503), // 设置地图中心点坐标
                scrollable: false,
                doubleClickZoom: false
            });

            var polygon = new TMap.MultiPolygon({
                map: map,
            });

            var editor = new TMap.tools.GeometryEditor({
                map: map, // 编辑器绑定的地图对象
                overlayList: [
                    {
                        overlay: polygon,
                        id: "polyline",
                    },
                ],
                actionMode: TMap.tools.constants.EDITOR_ACTION.DRAW,
                activeOverlayId: "polyline", // 激活图层
                selectable: true, // 开启点选功能
				snappable: true // 开启吸附
            });

            editor.on("draw_complete", (geometry: any) => {
                console.log(geometry);
                editor.setActionMode(TMap.tools.constants.EDITOR_ACTION.INTERACT)
                editor.enable()
            });

            var simplePath = convertPath(arrMap)

            editor.addOverlay({
                id: 'p',
                name: '编辑点',
                overlay: new TMap.MultiPolygon({
                    map,
                    styles: {
                        highlight: new TMap.PolygonStyle({
                            color: 'rgba(255, 255, 0, 0.6)'
                        })
                    },
                    geometries: [
                        {
                            paths: simplePath
                        }
                    ]
                })
            })

            editor.setActionMode(TMap.tools.constants.EDITOR_ACTION.INTERACT)
            editor.enable()
        }
        initMap();
        return () => {
            map && map.destroy();
        };
    }, []);

    function SearchArea() {
        const [list, setList] = useState([])
        
        const onSearchHandle = debounce((query: string) => {
            // console.log(query);
            jsonp('https://apis.map.qq.com/ws/place/v1/suggestion', {
                keyword: query,
                key: '7LVBZ-LDH3S-PXSOG-6XRG5-APHYH-JVBIS',
                output: 'jsonp',
            }).then((res: any) => {
                if(res.status === 0) {
                    setList(res.data)
                }
            })
        }, 1000);
        const onSelectHandle = (id: string, option: any) => {
            const item: any = list.find((item: any) => item.id === id)
            const location = item.location;

            map.setCenter(location)

        }
        // const inputHandle: React.ChangeEventHandler<HTMLInputElement> = (
        //     value
        // ) => {
        //     console.log(value);
        // };
        return (
            <div
                className="absolute left-10px top-10px"
                style={{ width: 520, height: 42, zIndex: 2000 }}
            >
                {/* <Input onChange={inputHandle} placeholder="请输入地址提示" /> */}
                <Select
                    onSearch={onSearchHandle}
                    onSelect={onSelectHandle}
                    className="w-full"
                    showSearch
                    filterOption={() => true}
                >
                    {
                        list.map((item: any) => {
                            return <Select.Option key={item.id} value={item.id}>{ item.address }</Select.Option>
                        })
                    }
                    
                </Select>
            </div>
        );
    }
    return (
        <div className="h-full relative">
            <div id="container"></div>
            <SearchArea />
        </div>
    );
};

export default AreaCreate;
