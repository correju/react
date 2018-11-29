import React from 'react';
import styles from '../../styles/index.css';
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    count() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div className={styles.counter} onClick={() => this.count()}>
                <h1 className="main-title">Counting: {this.state.counter}</h1>
            </div>
        );
    }
}