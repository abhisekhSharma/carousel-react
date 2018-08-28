/* This component have react router and this the main Parent component of this App */
import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';
import SliderCarousel from './SliderCarousel';


export default function app(props) {
    const { payload, pokemon } = props;

    return (
        <div>
            Your react Node app is setup!
            <Switch>
                <Route path="/" exact render={() => (<Redirect to ="/getPicture"/>)} />
                <Route path="/getPicture"  exact render={(location)=> (<SliderCarousel payload = {payload.list} location={location}/>)} />
            </Switch>
        </div>
    )
};
