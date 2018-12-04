import React from 'react';
import { Route, Link } from 'react-router-dom';
import Article from '../Article';
import About from '../About';
import Gallery from '../Gallery';

export default () => (
    <div>
        <div className="nav">
            <Link to="/">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/article">Article</Link>
        </div>
        <Route exact path="/" component={Gallery}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/article" component={Article}></Route>
    </div>
);
