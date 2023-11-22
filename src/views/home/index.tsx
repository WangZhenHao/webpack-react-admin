import Hearder from './component/hearder'
import Siderbar from './component/siderbar'
import Tags from './component/tags'
import { Outlet } from "react-router-dom";
import style from "./component/component.module.scss";

export default function App() {
    return <>
        <Hearder />
        
        <div className='flex'>
         <Siderbar />
         <div className={`flex-1 min-w-0 ${style.contentWrap}`}>
            <Tags />
            <div className={style.Content}>
              <Outlet />
            </div>
         </div>
          
        </div>
        {/* <Spin
        size="large"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      /> */}
    </>
}