import React from 'react';
const getBundle = () => {
    import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        console.log(_.isArray([1,2,3,4]));
    });
};
export default () => (
    <div>
       <h1 className="main-title">Gallery</h1>
       <button onClick={getBundle}>Click me</button>
    </div>
);
