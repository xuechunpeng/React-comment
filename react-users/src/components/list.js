import React,{Component} from 'react'
import axios from 'axios'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstView:true,
            loading:false,
            users:[],
            errorMsg:null
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            firstView:false,
            loading:true
        })
        const {searchName} = nextProps
        console.log('已经得到' +searchName);
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response =>{
                const items = response.data.items
                const users = items.map(item =>{
                    return {html_url:item.html_url,avatar_url:item.avatar_url,login:item.login}
                })
                this.setState({
                    loading:false,
                    users
                } )
            })
            .catch(e =>{
                console.log('cccc');
                this.setState({
                    loading:false,
                    errorMsg:e.message
                })
            })
    }

    render(){
        console.log(this.props.searchName)
        const {firstView,loading,users,errorMsg} = this.state
        if(firstView){
            return<h2>Enter name to search</h2>
        }else if(loading) {
            return <h2>Loading result...</h2>
        } else if(errorMsg) {
            return <h2>{errorMsg}</h2>
        }else {
              const userList = users.map((user,index)=>(
                <div className="card" key={index}>
                    <a href={user.html_url} target="_blank">
                        <img src={user.avatar_url} style={{width:'100px'}}/>
                    </a>
                    <p className="card-text">{user.login}</p>
                </div>
            ))
            return (
                <div className="row">{userList}</div>
            )
        }
    }
}

export default List





