import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {SazaProvider} from '../src';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SazaProvider store={store}>
        <App />
    </SazaProvider>
    
);