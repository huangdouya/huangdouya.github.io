
import React from 'react';
import { Alert  } from 'antd'
class App extends React.Component {
    render() {
        return (
            <div className="">
                <Alert
                    message="welcom to my React-Admin"
                    description="本项目为笔者初学react + ant-design设计的。主要是react的一些基本用法，以及ant-design组件的应用。如有任何问题或者疑问，请联系 15521285778@163.com ，一起学习一起成长"
                    type="info" />
            </div>
        );
    }
}

export default App;
