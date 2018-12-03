import React from 'react';

import MarkDownData from '../../../data/post.md';

export default class extends React.Component {
    render() {
        return (
            <div className="profile">
                <img className="profile-image" src={require('../../img/asta.jpg')} alt="Asta" />
                <h1 className="main-title">{MarkDownData.title}</h1>
                <div className="info">
                    <p><b>Author:</b> {MarkDownData.author}</p>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html: MarkDownData.__content}}></div>

            </div>
        );
        // return(<h1></h1>)
    }
}