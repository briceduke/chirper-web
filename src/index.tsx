import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import reportWebVitals from './util/global/reportWebVitals';
import * as serviceWorker from './util/global/serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();

reportWebVitals();
