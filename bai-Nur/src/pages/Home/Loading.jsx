import React from 'react';
import { Space, Spin } from "antd";
import BaiNur from './images/nurbai-transformed 2.png'
import "./Loader.css"

const Loading = () => {
  return (
    <div>
        <div className='spinner'>
        <Space style={{fontSize:"30"}} size="middle" className="spinn">
          <Spin size="large" style={{ color: "red" }} />
        </Space>
            <img className='logo-baiNur' src={BaiNur} alt="" />
        </div>
        
        </div>
  )
}

export default Loading