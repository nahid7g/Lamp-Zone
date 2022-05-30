import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <div>
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        <span>dashboard</span>
                    </label>
                </div>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/add-review">Add Review</Link></li>
                    <li><Link to="/dashboard/my-profile">My Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;