import "./styles/globals.css"

import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import reportWebVitals from './util/global/reportWebVitals';
import * as serviceWorker from './util/global/serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();

reportWebVitals();
