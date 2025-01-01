import React from 'react';
import Header from './header';
import Intro from './intro';
import About from './about';
import Audience from './audience';
import Model from './model';
import Cycle from './cycle';
import Contact from './contact';
import Principles from './principles';
import Coaching from './coaching';
//this is 
const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="w-auto">
        <Intro />
        <div id="about"><About /></div>
        <div id="audience"><Audience /></div>
        <div id="cycle"><Cycle /></div>
        <div id="model"><Model /></div>
        <div id="coaching"><Coaching /></div>
        <div id="principles"><Principles /></div>
        
      </main>
      <div className='bg-[#eeeedc] pt-16'>
        <div id="contact" className='bg-[#eeeedc]'><Contact /></div>
        <footer className="bg-[#eeeedc] shadow mt-12">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-700">Copyright &copy; 2007 Greg Bellinger</p>
          </div>
        </footer>
      </div>
      
    </div>
  );
};

export default App;