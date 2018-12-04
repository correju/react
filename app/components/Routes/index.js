import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import universal from 'react-universal-component';

const UniversalComponent = universal(({page}) => import(`../${page}`));

export default () => (
    <div>
        <div className="nav">
            <Link to="/">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/article">Article</Link>
        </div>
        <Switch>
            <Route exact path="/">
                <UniversalComponent page="Gallery" />
            </Route>
            <Route path="/about">
                <UniversalComponent page="About" />
            </Route>
            <Route path="/article">
                <UniversalComponent page="Article" />
            </Route>
        </Switch>
    </div>
);
