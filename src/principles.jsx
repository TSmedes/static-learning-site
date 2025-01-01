import React from 'react';

const Principles = () => {
    return (
        <div className="container mx-auto p-4 md:py-16 text-[#333333] flex justify-center">
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
                            <li>- Labelling, chunking, colors</li>
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