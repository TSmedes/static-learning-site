import React from 'react';

const Intro = () => {
    return (
        <div className="relative h-screen bg-cover bg-center bg-intro-img">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">The Adult Learning Process</h1>
            </div>
        </div>
    );
};

export default Intro;