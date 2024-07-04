// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import Tabs from './components/Tabs';
import QuestionBoard from './components/QuestionBoard';
import TrafficLight from './components/TrafficLight';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <nav className="w-1/4 bg-blue-500 p-4">
          <ul>
            <li className="mb-2">
              <NavLink
                to="/contact-form"
                className="text-white hover:text-gray-200"
                activeClassName="font-bold"
              >
                Contact Form
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/tabs"
                className="text-white hover:text-gray-200"
                activeClassName="font-bold"
              >
                Tabs
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/traffic-light"
                className="text-white hover:text-gray-200"
                activeClassName="font-bold"
              >
                Traffic Light
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/question-board"
                className="text-white hover:text-gray-200"
                activeClassName="font-bold"
              >
                Question Board
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/tabs" element={<Tabs />} />
            <Route path="/traffic-light" element={<TrafficLight />} />
            <Route path="/question-board" element={<QuestionBoard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
