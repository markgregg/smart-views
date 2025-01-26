import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.less';
import { SmartViewApp } from './components/SmartViewApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<SmartViewApp />} />
        <Route path="/smartViews" element={<SmartViewApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
