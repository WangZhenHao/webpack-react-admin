import { useEffect, useRef, useState } from "react";
import { Select } from "antd";
import { jsonp } from "@/assets/js/axios";
import { debounce } from "@/assets/js/utils";

// 参考案例： https://lbs.qq.com/demoList/glAPI#%E4%B8%AA%E6%80%A7%E5%8C%96%E5%9C%B0%E5%9B%BE
// https://lbs.qq.com/webDemoCenter/glAPI/glEditor/toolDraw
const AreaCreate = () => {
    var map: any;
    useEffect(() => {
        function initMap() {
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
