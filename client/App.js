import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
// import useStyles from './styles';
// ? import the style for App

const App = () => {
    
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
//* <Route path="/auth" exact component={Auth} /> */
export default App;
// ? in pre-hook, to use redux we have to map state to props
// ? which is hard and complicate but now it will easy now with hook