import React from 'react';

const types = [
    { name: 'Concept', content: 'A theory, notion, or generalized idea' },
    { name: 'Principle', content: 'A fundamental truth, rule, or guideline' },
    { name: 'Processe', content: 'A surface level series of actions carried out' },
    { name: 'Procedures', content: 'Specific steps to complete a process' },
    { name: 'Fact', content: 'A provable repeatable truth' },
    { name: 'Structure', content: 'Any picture, diagram, drawing, or physical mode' }
];

const Model = () => {
    return (
        <div className="p-6 bg-[#eeeedc] py-4 sm:py-8 md:p-16 text-[#333333]">
            <div className='mx-4 md:mx-[10vw] lg:mx-[20vw]'>
                <div className="mb-8">
                    <h1 className="text-4xl font-light mb-2 md:mb-10 text-center">The Learning Model</h1>
                    
                    <p className="mb-4 md:mb-12 font-thin">
                        &emsp;Dr. Robert Horn researched how the human brain learns. Actually, his research was researching other people's work on how people learn. As a result, he concluded there was six kinds of information. He developed a methodology for how to organize information to allow the human brain to learn based on how the human brain works.

                        <br/><br/>&emsp;Dr. Horn developed a process to help people organize information based on how the human brain works, called "Information Mapping". Out of his research other people like Dr. Ruth Clark developed a process for developing lessons for how to best learn each type of information.
                    </p>
                    <h2 className="text-2xl font-extralight mb-4 md:mb-10 text-center">The Information Types</h2>
                    {/* <ul className="list-disc list-inside font-extralight pl-4">
                        <li>Concepts</li>
                        <li>Principles</li>
                        <li>Processes</li>
                        <li>Procedures</li>
                        <li>Facts</li>
                        <li>Structures</li>
                    </ul> */}
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8 md:mb-12">
                    {types.map((type, index) => (
                        <div key={index} className="p-4 border rounded">
                            <h3 className="text-2xl mb-4 text-center font-light">{type.name}</h3>
                            <p className="text-center font-thin">{type.content}</p>
                        </div>
                    ))}
                </div>

                <p className="mb-4 font-thin">
                        &emsp;Identifying which information types learners need helps guide the teacher to stay foused on what is being learned.
                </p>

            </div>
        </div>
    );
};

export default Model;