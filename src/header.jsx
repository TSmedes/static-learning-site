import React from 'react';

const Header = () => {
    return (
        <header className="bg-white border-b-2 border-[#eeeedc] shadow flex justify-between items-center">
            <h1 className="text-[#333333] text-3xl font-thin py-4 sm:py-6 pl-4 sm:pl-6 md:pl-10 lg:pl-16 pr-4">The Adult Learning Model</h1>
            <nav>
                <ul className="flex space-x-4 mt-2 mr-4 sm:mr-6 md:mr-10 lg:mr-16">
                    <li><a href="#about" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">What</a></li>
                    <li><a href="#audience" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">Who</a></li>
                    <li><a href="#model" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">The Model</a></li>
                    <li><a href="#cycle" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">The Learning Cycle</a></li>
                    <li><a href="#principles" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">Principles</a></li>
                    <li><a href="#contact" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;