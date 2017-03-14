// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Router, hashHistory, IndexRoute, Route} from 'react-router'
// import App from './components/app'
// import NewsContainer from './components/news_container'
// import NewsDetail from './components/news_detail.jsx'
// import UserCenter from './components/user_center'
//
// import './index.css'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './components/app'
import NewsContainer from './components/news_container'
import NewsDetail from './components/news_detail'
import NewsUserCenter from './components/news_userCenter'

import './index.css'

render(
  (
      <Router history={hashHistory}>
          <Route path='/' component={App}>
              <IndexRoute component={NewsContainer}></IndexRoute>
              <Route path="/news_detail/:news_id" component={NewsDetail}></Route>
              <Route path="/news_usercenter" component={NewsUserCenter}></Route>
          </Route>
      </Router>
  ),
  document.getElementById('root')
)
