import * as React from 'react'
import { Route, Switch, Router } from 'react-router'
import { createBrowserHistory } from 'history'

import Navigation from '../Navigation/Navigation'
import Dashboard from '../pages/Dashboard/Dashboard'
import ArticlePage from '../pages/ArticlePage/ArticlePage'
import ArticleEditPage from '../pages/ArticleEditPage/ArticleEditPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import ASide from '../ASide/ASide'

const history = createBrowserHistory()

export const RouteApp = () => (
    <Router history={history}>
      <div>
        <Navigation/>
        <ASide/>
          <div className='container'>
            <Switch>
              <Route exact={true} path='/' component={Dashboard} />
              <Route path='/articles' component={ArticlePage} />
              <Route path='/article-edit' component={ArticleEditPage} />
              <Route component={ErrorPage}/>               
            </Switch>
          </div>          
      </div>
    </Router>
)
