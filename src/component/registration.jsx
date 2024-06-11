import React, { useState } from 'react';
import img from '../Assets/register.png';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
        email: '',
        dob: '',
        gender: '',
        mobile:'',
        Address:'',
        country:'',
        state:'',
        city:''
    });
    const [errors, setErrors] = useState({
        password: '',
        confirmPassword: '',
        email: '',
        mobile:'',
    });

     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
        const emailRegex = /\S+@\S+\.\S+/;
        const mobileRegex = /^[0-9]{10}$/;

        const newErrors = {};
        console.log('Form data on submit:', formData);
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Password should be at least 8 characters long and contain at least one number, one alphabet, and one special character.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match! Please try again.';
        }

        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email is not valid.';
        }

        if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number is not valid.';
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
            // Logic to handle form submission
        }
    };

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="container mx-auto">
                    <div className="main-container pt-5 pb-5 flex justify-center">
                        <div className="text-center py-3">
                            <h1 className="text-3xl font-bold">Register</h1>
                        </div>
                        <div className="flex justify-center mt-4">
                            <div className="hidden md:block">
                                <img className='register_img' src={img} alt="Register" width="80%" />
                            </div>
                            <div className="bg-white shadow-lg p-6 mb-5 rounded w-full md:w-3/4 xl:w-2/5">
                                <form onSubmit={handleSubmit}>
                                                <div className="space-y-4">
                                                    <p className="font-semibold">Create your account*</p>
                                                    <div className="flex flex-col md:flex-row gap-4">
                                                        <div className="flex-1">
                                                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                                                            <input
                                                                type="text"
                                                                id="firstname"
                                                                name="firstname"
                                                                value={formData.firstname}
                                                                onChange={handleChange}
                                                                required
                                                                className="form-input mt-1 block w-full shadow-sm p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                            />
                                                        </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                                            <input
                                                                type="text"
                                                                id="lastname"
                                                                name="lastname"
                                                                value={formData.lastname}
                                                                onChange={handleChange}
                                                                required
                                                                className="form-input mt-1 block w-full shadow-sm p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row gap-4">
                                                        <div className="flex-1">
                                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password <span className="text-red-500">*</span></label>
                                                            <input
                                                                type="password"
                                                                id="password"
                                                                name="password"
                                                                value={formData.password}
                                                                onChange={handleChange}
                                                                required
                                                                className="form-input mt-1 block w-full shadow-sm p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                            />
                                                            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                                                        </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password <span className="text-red-500">*</span></label>
                                                            <input
                                                                type="password"
                                                                id="confirmPassword"
                                                                name="confirmPassword"
                                                                value={formData.confirmPassword}
                                                                onChange={handleChange}
                                                                required
                                                                className="form-input mt-1 block w-full shadow-sm p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                            />
                                                            {errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>}
                                                        </div>
                                                    {/* </div> */}
                                                    {/* </div>{error && <div className="text-red-500 text-sm mt-1">{error}</div>} */}
                                                    <div className="flex flex-col md:flex-row gap-4">
                                                        <div className="flex-1">
                                                            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Upload your Profile Picture</label>
                                                            <input
                                                                type="file"
                                                                id="profilePicture"
                                                                className="form-input mt-1 block w-full shadow-sm p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                                aria-label="file example"
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Rest of the form */}

                                                    
                                                    <p>Tell us about yourself*</p>
                                                    <div className="flex flex-wrap">
                                                    <div className="w-full md:w-1/2">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Choose your country from the list</label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        value={formData.country}
                                                        onChange={handleChange}
                                                        className="form-select mt-1 block w-full shadow-sm p-2 mb-4 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                    >
                                                        <option value="" selected>Select</option>
                                                        <option>India</option>
                                                        <option>China</option>
                                                        <option>America</option>
                                                        <option>London</option>
                                                    </select>
                                                </div>
                                                
                                                <div className="w-full md:w-1/2">
                                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">Choose your state from the list</label>
                                                    <select
                                                        id="state"
                                                        name="state"
                                                        value={formData.state}
                                                        onChange={handleChange}
                                                        className="form-select mt-1 block w-full shadow-sm p-2 mb-4 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                    >
                                                        <option value="" selected>Select</option>
                                                        <option>Madhya Pradesh</option>
                                                        <option>Uttar Pradesh</option>
                                                        <option>Andhra Pradesh</option>
                                                        <option>Gujarat</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/2">
                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Choose your city from the list</label>
                                                    <select
                                                        id="city"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        className="form-select mt-1 block w-full shadow-sm p-2 mb-4 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                    >
                                                        <option value="" selected>Select</option>
                                                        <option>Nagpur</option>
                                                        <option>Jabalpur</option>
                                                        <option>Mumbai</option>
                                                    </select>
                                                </div>
                                                
                                                <div className="w-full md:w-1/2">
                                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Enter Address</label>
                                                    <input
                                                        type="text"
                                                        id="Address"
                                                        name="Address"
                                                        value={formData.Address}
                                                        onChange={handleChange}
                                                        className="form-input mt-1 block w-full shadow-sm p-2 mb-4 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                        aria-label="Address"
                                                    />
                                                
                                                                                        
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/2">
                                                    <label htmlFor="gender" required className="block text-sm font-medium text-gray-700">Gender
                                                    <span className="text-red-500">*</span></label>
                                                    <select
                                                        id="gender"
                                                        name="gender"
                                                        value={formData.gender}
                                                        onChange={handleChange}
                                                        className="form-select mt-1 block w-full shadow-sm p-2 mb-4 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                        aria-label="gender">     
                                                        <option value="" selected>Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                    
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/2">
                                                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Enter Date of Birth</label>
                                                    <input
                                                        type="date"
                                                        id="dob"
                                                        name="dob"
                                                        value={formData.dob}
                                                        onChange={handleChange}
                                                        className="form-input mt-1 block w-full shadow-sm p-2 mb-4 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                        aria-label="dob"
                                                    />
                                                </div>
                                            {/* </div> */}

                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/2">
                                                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number
                                                    <span className="text-red-500">*</span></label>
                                                    <input
                                                        type="tel"
                                                        id="mobile"
                                                        name="mobile"
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                        className="form-input mt-1 block w-full shadow-sm p-2 mb-4 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                        aria-label="mobile"
                                                    />
                                                    {errors.mobile && <div className="text-red-500 text-sm mt-1">{errors.mobile}</div>}
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/2">
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address
                                                    <span className="text-red-500">*</span></label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="form-input mt-1 block w-full shadow-sm p-2 mb-4 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                        aria-label="email"
                                                    />
                                                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                                </div>
                                                  <div className="flex justify-center pt-4 mb-3">
                                                        <button type="submit" className="btn bg-red-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-red-600">Submit</button>
                                                    </div>
                                                     </form>
                                                </div>
                                            </div>

                                                  
                                                </div>
                            
                                {/* <p className="text-center text-sm mt-4">Already Registered?<a href="#" className="text-blue-500 px-1">Log in</a></p> */}
                          
                           
                        </div>
                    </div>
    </>
 );
};

export default Register;
