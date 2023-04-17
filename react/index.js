import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setupSazaStorageItems } from '../src';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// setup counter storage
setupSazaStorageItems(
    ['storageCounter'], // storageCounter will save on browser storage
)
