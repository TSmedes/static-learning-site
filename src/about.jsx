import React from 'react';

const About = () => {
    return (
        <div className=" mt-4 p-6 w-screen mx-auto bg-[#eeeedc] text-[#333333] md:my-16">
            <div className="mx-4 md:mx-[10vw] lg:mx-[20vw]">
                <h1 className="text-4xl font-light my-4 sm:mb-8 md:mb-12 text-center">What is the Learning Model?</h1>
                <h2 className="text-2xl font-extralight mb-4 md:mb-8">The Primary Focus of the Learning Model</h2>
                <p className="text-lg mb-4 font-thin">
                    &emsp;The primary focus is to understand the types of information individuals learn, identify the barriers that prevent learning, and continuously solve problems that arise along the way. We delve into the models that people use for both learning and teaching, and place a strong emphasis on applying these models to improve educational experiences. By addressing these core areas, the aim is to create a dynamic and effective approach to learning that adapts to the needs of each learner.
                </p>
                <h2 className="text-2xl font-extralight mb-4 md:mb-8">About the Model</h2>
                <p className="text-lg mb-4 font-thin">
                    &emsp;The core principle that guides the model is that "Learning takes place when the behavior changes, and the problem is solved." 
                    <br/>&emsp;This means that true learning is not just about acquiring knowledge but about applying that knowledge in ways that lead to real-world problem-solving and behavioral change. This approach is centered on fostering the ability to adapt, think critically, and overcome challenges, thereby equipping learners with the skills they need for long-term success.
                </p>
            </div>
            
        </div>
    );
};

export default About;