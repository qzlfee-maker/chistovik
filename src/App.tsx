import React from 'react';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Hero } from './components/sections/Hero/Hero';
import { Services } from './components/sections/Services/Services';
import { Works } from './components/sections/Works/Works';
import { Prices } from './components/sections/Prices/Prices';
import { Reviews } from './components/sections/Reviews/Reviews';
import { HowToOrder } from './components/sections/HowToOrder/HowToOrder';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Prices />
        <Reviews />
        <HowToOrder />
      </main>
      <Footer />
    </>
  );
};

export default App;
