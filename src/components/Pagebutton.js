import React from 'react';
import { Divider,Button } from 'antd'
export default class Pagebutton extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <Divider orientation="left">按钮类型</Divider>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button type="default">default</Button>
                    <Button type="dashed">dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
            </div>
        )
    }
}