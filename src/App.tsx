import React from 'react';
import { Button } from 'antd'
import { userLoginIn } from '@api/login'

function App() {
  const getList = () => {
    userLoginIn({
      username: '1212',
      password: '12'
    })
  }
  return (
    <div >
     
       <h3 className='text-20px'>你好</h3>
       <Button onClick={getList}>获取数据</Button>
    </div>
    
  );
}

export default App;
