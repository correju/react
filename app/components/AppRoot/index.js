import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../Routes';
import "../../styles/nav.sass";

export default class extends React.Component {
    render() {
        return (
            <Router>
                <Routes />
            </Router>
        );
    }
}
