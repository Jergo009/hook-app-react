import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import {CounterWithCustomHook} from '../src/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';


import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Memorize />
  // </React.StrictMode>,
)
