import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import HTMLContent from './Tabs/Html';
import CSSContent from './Tabs/Css';
import JSContent from './Tabs/Js';

const Tabs = () => {
  return (
    <div>
      <div className="Tabs">
        <Link to="/tabs/html" className="tab">HTML</Link>
        <Link to="/tabs/css" className="tab">CSS</Link>
        <Link to="/tabs/js" className="tab">JS</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Tabs;
