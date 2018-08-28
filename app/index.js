import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';
import './style/style.scss';

render((<Router>
            <App payload={window.__PRELOADED_STATE__}  />
        </Router>),
        document.getElementById('root')
);

