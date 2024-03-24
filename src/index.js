import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import App from './PostsreduxThunk/components/App';
import "./index.css"
import { Provider } from 'react-redux';
import { store } from './PostsreduxThunk/features/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <App />
    </Provider>
  
);

