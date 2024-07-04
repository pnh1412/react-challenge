import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HTMLContent from './Tabs/Html';
import CSSContent from './Tabs/Css';
import JSContent from './Tabs/Js';

const Tabs = () => {
  return (
    <div>
      <div className="Tabs">
        <Link to="/Tabs/html" className="Tab">HTML</Link>
        <Link to="/Tabs/css" className="Tab">CSS</Link>
        <Link to="/Tabs/js" className="Tab">JS</Link>
      </div>
      <Routes>
        <Route path="/Tabs/html" element={<HTMLContent />} />
        <Route path="/Tabs/css" element={<CSSContent />} />
        <Route path="/Tabs/js" element={<JSContent />} />
      </Routes>
    </div>
  );
};

export default Tabs;
