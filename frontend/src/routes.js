import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main'

const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Main} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;