import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./Component/utils/Redux/store/store.js"
import { Provider } from 'react-redux';
import {NextUIProvider} from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <NextUIProvider>
    <App />
    </NextUIProvider>
  </Provider>
);

