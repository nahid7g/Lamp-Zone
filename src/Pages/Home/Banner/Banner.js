import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/RYQyHNY/banner.jpg)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Lampzone official site.</h1>
                    <p className="mb-5">We are one of the leading Lamp Manufacturer Company in the world. Our company working in this field since 1992 and we are perfectly satisfying our clients with our Products.</p>
                    <Link to="/about" className="btn btn-primary">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;