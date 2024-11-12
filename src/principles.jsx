import React from 'react';

const types = [
    { name: 'Concept', content: 'A theory, notion, or generalized idea' },
    { name: 'Principle', content: 'A fundamental truth, rule, or guideline' },
    { name: 'Processe', content: 'A surface level series of actions carried out' },
    { name: 'Procedures', content: 'Specific steps to complete a process' },
    { name: 'Fact', content: 'A provable repeatable truth' },
    { name: 'Structure', content: 'Any picture, diagram, drawing, or physical mode' }
];

const Principles = () => {
    return (
        <div className="p-6 bg-[#eeeedc] py-4 sm:py-8 md:p-16 text-[#333333] flex justify-center">
            <div className='mx-4 md:mx-[10vw] lg:mx-[20vw] text-left'>
                <div className="mb-8">
                    <h1 className="text-4xl font-light mb-2 md:mb-10 text-center">Learning Principles</h1>
                    
                    <div className="mb-4 md:mb-12 font-thin">
                        <strong>Instructor</strong>
                        <ul>
                            <li>- Don't trust your memory</li>
                            <li>- Too much, too fast</li>
                            <li>- More analogies, examples</li>
                            <li>- Reorient regularly</li>
                        </ul>
                        <hr className="my-4"/>
                    </div>

                    <div className="mb-4 md:mb-12 font-thin">
                        <strong>Information</strong>
                        <ul>
                            <li>- Near transfer/far transfer</li>
                            <li>- Content driven, not time driven</li>
                            <li>- Confused and lost</li>
                        </ul>
                        <hr className="my-4"/>
                    </div>

                    <div className="mb-4 md:mb-12 font-thin">
                        <strong>Tools</strong>
                        <ul>
                            <li>- Back-up notes</li>
                            <li>- Drawings vs photographs</li>
                            <li>- Labelling, chunking, labelling, colors</li>
                            <li>- Think, write, practice outloud</li>
                        </ul>
                        <hr className="my-4"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Principles;