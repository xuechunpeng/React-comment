import React, {Component} from 'react'
import Header from './news_header'
import Footer from './news_footer'


class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
export default App