import React from 'react';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';

const data = {
  heading: 'Webhosting',
  description: 'Lorem ipsum dolor sit amet consectetur '
}

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Banner />
      <Section sub="lorem ipsum is" topic="Products" isLager/>
      <Section sub="lorem ipsum is" topic="Service" data={data}/>
      <Section sub="lorem ipsum is" topic="Portfolio/ Case Studies" isLager/>
      <Section sub="lorem ipsum is" topic="Developers On Demand" isLager/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
