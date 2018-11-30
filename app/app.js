import React from 'react';
import ReactDom from 'react-dom';
import HotLoader from './components/hotLoader'
import Data  from '../data/bio';
import RootApp from './components/AppRoot';

const render = (Component) => {
    ReactDom.render(
        <Component heading={Data.heading} content={Data.bioText} />,
        document.getElementById('react-root')
    )
}

if (process.env.NODE_ENV === "development") {
    render(HotLoader);
} else {
    render(RootApp);
}
