import React,{Component} from 'react'
import axios from 'axios'
import {Card} from 'antd'
import {Link} from 'react-router'


class NewsBlock extends Component {
    constructor(props){
        super(props)
        this.state={
            newsArr:[]
        }
    }
    componentWillMount(){
        const {type,count} = this.props
        const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`
        axios.get(url)
            .then(response => {
                const newsArr = response.data.map(news =>{
                    return {
                        title: news.title,
                        newsId: news.uniquekey
                    }
                })
                this.setState({newsArr})
            })
    }
    render(){
        const {newsArr} = this.state
        const newsList = newsArr.length
        ?(
            newsArr.map((news,index) => (
                <li key={index}>
                    {/*<Link to={'/news_detail/' + news.newsId}>{news.title}</Link>*/}
                    <Link to={`/news_detail/${news.newsId}`}>{news.title}</Link>
                </li>
            ))
        )
        :('没有加载到任何数据')

        return(
            <Card className="topNewsList">
                <ul>
                    {newsList}
                </ul>
            </Card>
        )

    }
}

export default NewsBlock