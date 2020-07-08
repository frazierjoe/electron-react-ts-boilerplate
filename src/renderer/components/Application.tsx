import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';

const Application = () => (
    <HashRouter>
        <div>Hello World</div>
    </HashRouter>
);

export default hot(Application);
