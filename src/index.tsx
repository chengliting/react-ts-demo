import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import AppRoutes from './ts/Route';
import App from './App';

const container = document.getElementById('root') as HTMLDivElement;

// Create a root.
const root = createRoot(container);
root.render(
    // <React.StrictMode>
               <AppRoutes />
    // </React.StrictMode>
);