import React from 'react';

const types = [
    { name: 'Concept', content: 'A theory, notion, or generalized idea' },
    { name: 'Principle', content: 'A fundamental truth, rule, or guideline' },
    { name: 'Processe', content: 'A surface level series of actions carried out' },
    { name: 'Procedures', content: 'Specific steps to complete a process' },
    { name: 'Fact', content: 'A provable repeatable truth' },
    { name: 'Structure', content: 'Any picture, diagram, drawing, or physical mode' }
];

const Coaching = () => {
    return (
        <div className="p-6 bg-[#eeeedc] py-4 sm:py-8 md:p-16 text-[#333333] flex justify-center">
            <div className="max-w-2xl">
                <h2 className="text-4xl font-light mb-2 md:mb-10 text-center">Coaching Model</h2>
                <div className="flex justify-center">
                    <div className="space-y-2 text-center mb-4 md:mb-10">
                        <p>I do ------------------------------ You watch</p>
                        <p>I do ------------------------------ You coach</p>
                        <p>You do ------------------------------- I coach</p>
                        <p>You do ----------------------------------- I ...</p>
                    </div>
                </div>
                <p className='font-thin'>
                    The coaching model is used anytime in the Adult Learning Cycle (ALC), where the instructor has to observe the learner verbally or physically performing a task. Typically it is used in the Lab/Practice part of the ALC. Each step is designed to test if the learner is being tasked to master too much before moving on. Each step may take more than one time to perform for the learner to master the task. Or the instructor may need to reduce the amount of what the learner is being asked to master before moving on. This helps reduce early failure when mastering a task.
                </p>
            </div>
        </div>
    );
};

export default Coaching;