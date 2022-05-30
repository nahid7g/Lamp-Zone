import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/qJxpPBb/big-lamp2.jpg" alt='Lamp' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Who we are?</h1>
                    <p className="py-6">We are on of the most popular Lamp Parts manufacturer. We are working since 1992. Right now we have 50+ factory in the world and we have more than 30000+ employees all over the world. </p>
                </div>
            </div>
        </div>
    );
};

export default About;