import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import Tabs from './components/Tabs';
import QuestionBoard from './components/QuestionBoard';
import TrafficLight from './components/TrafficLight';
import './index.css';
import HTMLContent from './components/Tabs/Html';
import CSSContent from './components/Tabs/Css';
import JSContent from './components/Tabs/Js';
import { dataQuestions } from './mocks/data';
import { dataSubmissions } from './mocks/dataSubmissions';
import Accordion from './components/Accordion';
import ColorBox from './components/ColorBox';
import JobBoard from './components/JobBoard';
import AutoComplete from './components/AutoComplete';

const App = () => {
  return (
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
          <li className="mb-2">
            <NavLink
              to="/accordion"
              className="text-white hover:text-gray-200"
              activeClassName="font-bold"
            >
              Accordion
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/color-box"
              className="text-white hover:text-gray-200"
              activeClassName="font-bold"
            >
              Color Box
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/jobboard"
              className="text-white hover:text-gray-200"
              activeClassName="font-bold"
            >
              Job Board
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/autocomplete"
              className="text-white hover:text-gray-200"
              activeClassName="font-bold"
            >
              Auto Complete
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/tabs" element={<Tabs />}>
            <Route path="/tabs/html" element={<HTMLContent />} />
            <Route path="/tabs/css" element={<CSSContent />} />
            <Route path="/tabs/js" element={<JSContent />} />
          </Route>
          <Route path="/traffic-light" element={<TrafficLight />} />
          <Route path="/question-board" element={<QuestionBoard questions={dataQuestions} submissions={dataSubmissions} />}/>        
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/color-box" element={<ColorBox />} />
          <Route path="/jobboard" element={<JobBoard />} />
          <Route path="/autocomplete" element={<AutoComplete />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
