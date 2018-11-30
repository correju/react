import React from 'react';

import MarkDownData from '../../../data/post.md';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="profile">
                <img className="profile-image" src={require('../../img/asta.jpg')} alt="Asta" />
                <h1 className="main-title">{MarkDownData.title}</h1>
                <div className="info">
                    <p>{this.props.content}</p>
                    <p><b>Author:</b> {MarkDownData.author}</p>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html: MarkDownData.__content}}></div>

            </div>
        );
    }
}