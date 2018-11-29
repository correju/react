import React from 'react';
import ReactDom from 'react-dom';
import HotLoader from './components/hotLoader'

function render (Component) {
    ReactDom.render(
        <Component />,
        document.getElementById('react-root')
    )
}
render(HotLoader);
