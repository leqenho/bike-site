import React from 'react';

import About from './pages/about';
import Bikes from './pages/bikes';
import Depositions from './pages/depositions';
import Shop from './pages/shop';
import Contact from './pages/contact';

const Main = () => (
    <main className="app-main">
        <About />
        <Bikes />
        <Depositions />
        <Shop />
        <Contact />
    </main>
);

export default Main;
