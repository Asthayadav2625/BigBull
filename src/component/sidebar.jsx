import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SideBar = ({ checked, setChecked }) => {
    const navigate = useNavigate();
    return (
        <>
            {checked && <div className="backdrop" />}
            <div
                className={`wrapper ${checked ? 'active' : ''} z-40 fixed right-0 bg-white text-black h-full `}
            >   
                <div className='h-full flex justify-center items-center '>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                        <li><Link to="/">SignIn</Link></li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default SideBar;
