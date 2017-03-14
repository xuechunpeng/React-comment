import React from 'react'
import {Button } from 'antd'

class App extends React.Component{
    /*constructor(props){
        super(props)
        this.state = {
            date:new Date().toString(),
        }
    }

    handleChange = (date) => {
        message.info('您选择的日期是:' + date.toString())
        this.setState({date})
    }*/

    render(){
        return(
            <div className="App">
                <Button type="danger">Button</Button>
            </div>


        )
    }
}

export default App