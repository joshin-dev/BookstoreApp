import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center p-4'>
                <div className="w-full max-w-3xl">
                    <div className=" rounded-lg p-8">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <h3 className="font-bold text-4xl text-center mb-6">Contact Us</h3>

                            {/* Name */}
                            <div className='mt-4'>
                                <label className='block text-sm font-medium text-gray-700'>Name</label>
                                <input 
                                    type="text" 
                                    placeholder='Enter Your Full Name' 
                                    className='w-full px-4 py-2 border rounded-md outline-none mt-2'
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Email */}
                            <div className='mt-4'>
                                <label className='block text-sm font-medium text-gray-700'>Email</label>
                                <input 
                                    type="email" 
                                    placeholder='Email Address' 
                                    className='w-full px-4 py-2 border rounded-md outline-none mt-2'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Message */}
                            <div className='mt-4'>
                                <label className='block text-sm font-medium text-gray-700'>Message</label>
                                <textarea 
                                    className="textarea textarea-bordered w-full px-4 py-2 border rounded-md outline-none h-36 mt-2" 
                                    placeholder="Your message" 
                                    {...register("message", { required: true })}
                                ></textarea>
                                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Button */}
                            <div className='flex justify-center mt-6'>
                                <button className='bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 transition-colors duration-300'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
