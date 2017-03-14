import React, {Component} from 'react'
import {
    Row,
    Col,
    BackTop
} from 'antd'
import axios from 'axios'

import NewsImageBlock from './news_image_block'
import NewsComments from './news_comments'

class NewsDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            news:''
        }
    }
    componentWillMount() {
        this.showDetail(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.showDetail(nextProps)
    }
    showDetail = (props) => {
        const uniquekey = this.props.params.news_id
        const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`
        axios.get(url)
            .then(response =>{
                const news = response.data
                this.setState({news})
            })
    }

    render(){
        const {news} = this.state
        return(
            <div>
                <Row>
                    <Col  span={1}></Col>
                    <Col  span={16}>
                        <div className="container">
                            <div dangerouslySetInnerHTML={{__html:news.pagecontent}}></div>
                            <hr/>
                            <NewsComments newsId={this.props.params.news_id}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <NewsImageBlock type="top" count={20} title="相关新闻" imageWidth='150px' width='100%'/>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <BackTop/>
            </div>
        )
    }
}


export default NewsDetail