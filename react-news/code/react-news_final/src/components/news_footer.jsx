import  React from 'react'
import {Row,Col} from 'antd'

export default function Footer() {
    return(
        <footer>
            <Row>
                <Col span={24} className='footer'>
                    &copy;&nbsp;2016 ReactNews. All Rights Reserved.
                </Col>>
            </Row>
        </footer>
    )
}