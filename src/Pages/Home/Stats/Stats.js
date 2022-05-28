import React from 'react';

const Stats = () => {
    return (
        <div className='py-10 my-10 bg-cover min-h-60' style={{ backgroundImage: `url(https://i.ibb.co/zJL3PJZ/hero-area.jpg)` }}>
            <div className='container mx-auto grid grid-cols-3 lg:grid-cols-5 justify-between text-neutral-content'>
                <div>
                    <div className="stat">
                        <div>Company Revinue</div>
                        <div className="stat-value">50 billion+</div>
                    </div>
                </div>
                <div>
                    <div className="stat">
                        <div>Our total Staff</div>
                        <div className="stat-value">20000+</div>
                    </div>
                </div>
                <div>
                    <div className="stat">
                        <div>Countries we have factory in the world.</div>
                        <div className="stat-value">100+</div>
                    </div>
                </div>
                <div>
                    <div className="stat">
                        <div>Succesfully working years.</div>
                        <div className="stat-value">30+</div>
                    </div>
                </div>
                <div>
                    <div className="stat">
                        <div>Satisfied Customers.</div>
                        <div className="stat-value">2 million+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;