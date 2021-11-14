import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
        fetch("https://immense-oasis-52476.herokuapp.com/addSReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));


        console.log(data);
    };
    return (
        <div>
            <div>
                <h1>Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        className="input-field form-control form-control-lg"
                        name="email"
                        value={user?.email}
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <br />
                    <textarea
                        className="input-field form-control form-control-lg"
                        name="comments"
                        
                        placeholder="Comments"
                        {...register("comments", { required: true })}
                    />
                    <input
                        className="input-field form-control form-control-lg"
                        name="rating"
                        
                        type="number"
                        {...register("rating", { required: true })}
                        placeholder="reviw out of 5"
                    />
                    <br />

                    <input
                        className="submit-btn btn btn-danger mt-3"
                        type="submit"
                        value="Register"
                    />
                </form>
            </div>
        </div>
    );
};

export default Review;