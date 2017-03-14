import React,{Component} from 'react'
import {
    Row,
    Col,
    Carousel,
    Tabs
} from 'antd'

const TabPane = Tabs.TabPane

import NewsImageBlock from './news_image_block'
import NewsBlock from './news_block'
import Products from './products'

import carousel1 from '../images/carousel_1.jpg'
import carousel2 from '../images/carousel_2.jpg'
import carousel3 from '../images/carousel_3.jpg'
import carousel4 from '../images/carousel_4.jpg'

class NewsContainer extends Component{
    render() {
        return (
           <Row>
               <Col span={1}></Col>
               <Col span={22}>
                   <div className="leftContainer">
                       <Carousel autoplay infinite>
                           <div><img src={carousel1} alt="1"/></div>
                           <div><img src={carousel2} alt="2"/></div>
                           <div><img src={carousel3} alt="3"/></div>
                           <div><img src={carousel4} alt="4"/></div>
                       </Carousel>
                       <NewsImageBlock title="国际头条" count={6} type='top' width='100%' imageWidth='110px'/>
                   </div>
                   <Tabs className="tabs_news">
                       <TabPane tab="体育新闻" key="1"><NewsBlock type='tiyu' count={20}/></TabPane>
                       <TabPane tab="科技新闻" key="2"><NewsBlock type='keji' count={20}/></TabPane>
                   </Tabs>

                   <Tabs className="tabs_news">
                       <TabPane tab="ReactNews产品" key="1">
                           <Products />
                       </TabPane>
                   </Tabs>

                   <div>
                       <NewsImageBlock title="国内新闻" count={16} type='guonei' width='100%' imageWidth='110px'/>
                       <NewsImageBlock title="娱乐新闻" count={16} type='yule' width='100%' imageWidth='110px'/>
                   </div>
               </Col>
               <Col span={1}></Col>

           </Row>
        )
    }
}

export default NewsContainer
