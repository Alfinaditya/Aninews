import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
		{/* <ReactQueryDevtools initialIsOpen={true} /> */}
	</QueryClientProvider>,
	document.getElementById('root')
);
