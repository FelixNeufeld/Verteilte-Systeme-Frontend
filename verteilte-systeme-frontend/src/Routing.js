import React from 'react';
import { Route, Link, Routes  } from 'react-router-dom';
import App from './App.js';
import ChatScreen from './ChatScreen.js';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/chat" element={<ChatScreen />} />
            </Routes>
        </div>
    );
};

export default Routing;
