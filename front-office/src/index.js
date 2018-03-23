import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
<ApolloProvider client={client}>
 <App/>
</ApolloProvider>,
document.getElementById('root'));

registerServiceWorker();

