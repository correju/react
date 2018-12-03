import React from 'react';
import ReactDom from 'react-dom';
import HotLoader from './components/hotLoader'
import Data  from '../data/bio';
import AppRoot from './components/AppRoot';

const render = (Component) => {
    ReactDom.hydrate(
        <Component />,
        document.getElementById('react-root')
    )
}

if (process.env.NODE_ENV === "development") {
    render(HotLoader);
} else {
    render(AppRoot);
}
