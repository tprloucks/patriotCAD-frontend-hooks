import React from 'react'
import{
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,

} from "react-router-dom"
const NotFound = React.lazy(()=> import ("./components/NotFound/NotFound"))
const Dashboard = React.lazy(()=> import ("./components/Dashboard/Dashboard"))
const Auth = React.lazy(()=> import("./components/Auth/Auth"))
const Accept = React.lazy(()=> import("./components/Accept/Accept"))

function MainRouter() {
    return (
        <div>
            <Switch>
                <Route exact path="/sign-up" component={Auth}/>
                <Route exact path="/login" component={Auth}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/" component={Accept}/>
            </Switch>
            
        </div>
    )
}

export default MainRouter
