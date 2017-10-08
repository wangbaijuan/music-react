// var react = require('react');
// es 6
// import React from 'react'
// import './index.less'

// console.log(react.version);

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hello from './components/hello'

// hello 组件添加 root 中
render(
    <AppContainer>
        <Hello/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    console.log('yes');
    module.hot.accept('./components/hello', () => {
        const NewHello = require('./components/hello').default;
        render(
            <AppContainer>
                <NewHello/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
else {
    console.log('no');
}