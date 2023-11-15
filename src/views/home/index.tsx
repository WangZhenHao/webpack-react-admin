import Hearder from './component/hearder'
import Siderbar from './component/siderbar'
import Tags from './component/tags'

export default function App() {
    return <>
        <Hearder />
        
        <div className='flex'>
         <Siderbar />
         <div className='fl flex-auto'>
            <Tags />
            <div>
              content
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