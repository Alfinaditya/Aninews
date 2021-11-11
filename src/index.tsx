import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

ReactDOM.render(
	<HelmetProvider>
		<QueryClientProvider client={queryClient}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</QueryClientProvider>
	</HelmetProvider>,
	document.getElementById('root')
);
