import React from 'react';

const Portfolio = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div class="card w-2/3 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className='text-2xl text-center text-purple-400'>My Portfolio</h2>
                    <h2 class="card-title">
                        Name: Nahid Hasan
                    </h2>
                    <p>Email: nahidhasankiran2@gmail.com</p>
                    <p>Highest education: HSC</p>
                    <div>
                        <p className='text-xl font-bold'>Three live sites link:</p>
                        <a href="https://nahid-convention-space.netlify.app/" target="_blank" className="btn btn-link" rel="noreferrer noopener"> Convention Center</a>
                        <a href="https://fcg-academy.web.app/" className="btn btn-link" target="_blank" rel="noreferrer noopener">FCG Academy</a>
                        <a href="https://sports-end.web.app/" className="btn btn-link" target="_blank" rel="noreferrer noopener">Sports End</a>
                    </div>
                    <div className='flex'>
                        <p className='text-xl text-purple-400'>Skills:</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Javascript</div>
                            <div class="badge badge-outline">React</div>
                            <div class="badge badge-outline">Node</div>
                            <div class="badge badge-outline">Express</div>
                            <div class="badge badge-outline">Mongodb</div>
                            <div class="badge badge-outline">Firebase</div>
                            <div class="badge badge-outline">Tailwind</div>
                            <div class="badge badge-outline">Bootstrap</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;