import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'typeface-roboto'

import Root from './components/Root';
import './reset.scss';

injectTapEventPlugin();
const appContainer = document.getElementById('app');
ReactDOM.render(<Root />, appContainer);
