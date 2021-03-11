import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main'
import Register from './pages/Register'

const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/register-new" exact component={Register} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;