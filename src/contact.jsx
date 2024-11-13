import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg drop-shadow-md overflow-hidden mt-10">
            <div className="px-6 py-4">
                <h1 className="text-xl font-light mb-6">More information or questions can be found at:</h1>
                <div className="text-xl mb-6">Greg Bellinger</div>
                <p className="font-light text-gray-700 text-base mb-4">
                    Email: <a href="mailto: rollout1.gb@gmail.com">rollout1.gb@gmail.com</a>
                </p>
                <p className="font-light text-gray-700 text-base mb-4">
                    Phone: (206)-371-8315
                </p>
            </div>
        </div>
    );
};

export default Contact;