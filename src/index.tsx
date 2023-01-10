import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from './components/ErrorPage'
import Main from './components/Main'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import {RecoilRoot} from "recoil";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
          <BrowserRouter basename="/photosbyengineerit">
              <Routes>
                  <Route path='/' errorElement={<ErrorPage/>} element={<App/>}>
                      <Route path='main' element={<Main/>}/>
                      <Route path='about' element={<About/>}/>
                      <Route path='pricing' element={<Pricing/>}/>
                      <Route path='contact' element={<Contact/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </RecoilRoot>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
reportWebVitals();
