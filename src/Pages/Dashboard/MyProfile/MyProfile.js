import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [updateUser, setUpdateUser] = useState({});
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`https://lamp-zone1.herokuapp.com/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUpdateUser(data))
    }, [user])
    const onSubmit = data => {
        const updatedProfile = {
            email: user?.email,
            name: user?.displayName,
            education: data.education,
            city: data.city,
            phone: data.phone,
            linkedin: data.linkedin
        }
        fetch("https://lamp-zone1.herokuapp.com/users", {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProfile),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast("Submited!")
    };
    return (
        <div className='bg-base-200 py-5 my-2 px-2'>
            <h2 className='text-2xl font-bold'>My Profile</h2>
            <div className="divider"></div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user?.photoURL} alt={user?.displayName} className="mask mask-circle max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">Name: {user?.displayName}</h1>
                        <p>Email: {user?.email}</p>
                        <p>Varification status: {user?.emailVerified ? "Verified" : "Non Verified"}</p>
                    </div>
                </div>
            </div>
            <h2 className='text-2xl font-bold'>Update Profile</h2>
            <div className="divider"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Education</span>
                    </label>
                    <input type="text" defaultValue={updateUser?.education} className="input input-bordered input-primary w-full max-w-xs" {...register("education")} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your City</span>
                    </label>
                    <input type="text" defaultValue={updateUser?.city} className="input input-bordered input-primary w-full max-w-xs" {...register("city")} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Phone</span>
                    </label>
                    <input type="text" defaultValue={updateUser?.phone} className="input input-bordered input-primary w-full max-w-xs" {...register("phone")} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Linkedin Profile</span>
                    </label>
                    <input type="text" defaultValue={updateUser?.linkedin} className="input input-bordered input-primary w-full max-w-xs" {...register("linkedin")} />
                </div>
                <button type="submit" className='btn btn-primary my-2'>Update Profile</button>
            </form>

        </div>
    );
};

export default MyProfile;