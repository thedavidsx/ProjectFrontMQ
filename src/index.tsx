import React from 'react'
import ReactDOM from 'react-dom'
import Main from '../src/components/page/Main'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './redux/store'
import {Router,Route,Switch}  from 'react-router-dom'
import MainRouter  from './router/MainRouter'
import {createBrowserHistory} from 'history'

const hist = createBrowserHistory()
const Root = (
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                {MainRouter.map((prop: any, key: number) => { return <Route path={prop.path} component={prop.component} key={key} /> })}
            </Switch>
        </Router>
    </Provider>
)


ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
