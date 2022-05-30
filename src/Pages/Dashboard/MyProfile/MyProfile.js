import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <h2 >My Profile</h2>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={user?.photoURL} alt={user?.displayName} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {user?.displayName}</h2>
                        <p>Email: {user?.email}</p>
                        <p>User: {user?.emailVerified ? "Verified user" : "Not verified"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;