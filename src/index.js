import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducer';
import Provider from "react-redux/es/components/Provider";

const store = createStore(
	reducers, // Reducers
	{}, // Estado inicial
);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
