import styled from 'styled-components'
import { IoMenu } from "react-icons/io5";
import {NavLink} from 'react-router-dom';
import logo from './../../public/logo/logo.png'
import { SiOpenlayers } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import heroBackground from '../Assets/hero.mp4'
import courseFeatureBackground from '../Assets/courseFeatureBackground.jpg'
import SementicRightImage from '../Assets/SementicRightImage.png'
import coursePageCover from '../Assets/coursePageCover.webp'
import blogThumbnail from '../Assets/blogThumbnail.jpeg'
import courseThumbain from '../Assets/courseThumbnail.jpg'
import blanckBackground from '../Assets/blanckBackground.png'
import courseImage1 from '../Assets/courseImage1.webp'
import courseImage2 from '../Assets/courseImage2.webp'
import courseImage3 from '../Assets/courseImage3.webp'
import { useRef, useEffect } from 'react';

// const courseFeature = [
//     'https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// ];

const createObserver = (ref, className) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          entry.target.classList.remove(className);
        }
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return observer;
  };
  
  const closeObserver = (ref, observer) => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
const Home = () => {
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);

    useEffect(() => {
    const observer1 = createObserver(sectionRef1, 'feature-course-page');
    const observer2 = createObserver(sectionRef2, 'sementic');
  
      return () => {
        closeObserver(sectionRef1, observer1);
        closeObserver(sectionRef2, observer2);
      };
    }, []);
    return (
        <>
            <LandingPage>
                <div>
                    <header className='mt-5 absolute w-full'>
                        <nav className='flex justify-between px-5 w-full'>
                            <div className='w-32' >
                                <img src={logo} alt="Logo" width='100%' />
                            </div>
                            {/* Center nav bar */}
                            <div className='hidden'>
                                <div className='flex'>
                                    <div>
                                        <NavLink>Home</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Courses</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Blogs</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>About</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Contact</NavLink>
                                    </div>
                                </div>
                                {/* login logout */}
                                <div>
                                    <button>Get Started</button>
                                </div>
                            </div>
                            <div>
                                <IoMenu size={'3rem'} color='white'/>                            
                            </div>
                        </nav>
                    </header>    
                    {/* hero part */}
                    <div className='hero'>
                        <div className='h-screen' >
                            <video src={heroBackground} autoPlay loop muted className='h-full w-full object-cover'></video>
                            <div className='absolute top-0 text-white h-full flex flex-col justify-center w-4/5 px-5'>
                                <h1 className='font-semibold text-9xl	 leading-tight'>Master the Stock Market with Our Expert-Led Courses</h1>
                                <p className='text-5xl font-normal mt-10 leading-snug '>Learn the secrets of stock market investing from industry professionals.</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* feature Course Page */}
                <div  ref={sectionRef1} className="">
                <div className='my-10'>
                    <h1 className='text-8xl text-center my-10'>Our Course Feature</h1>
                    {/* container */}
                    <div className='feature-container p-8 py-24 flex justify-around flex-wrap'> 
                        {/* card */}
                        <div className='course-feature w-80 bg-white  rounded-lg '>
                            {/* image */}
                            <div className='h-96 rounded-lg  '></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                        <div className='course-feature w-80 bg-white  rounded-lg '>
                            {/* image */}
                            <div className='h-96 rounded-lg  '></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                        <div className='course-feature w-80 bg-white  rounded-lg '>
                            {/* image */}
                            <div className='h-96 rounded-lg  '></div>
                            {/* content */}  
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Sementic */}
                <div ref={sectionRef2} className='grid grid-cols-2 gap-10 px-5 py-20 my-10'> 
                    {/* left */}
                    <div className='flex flex-col sementic-left'>
                        <div className='self-center'>
                            <h2 className='text-7xl	mb-10 '>Schematic</h2>
                            <button className='text-xl border-2 rounded-3xl border-black py-2 px-7'>Brand Identity</button>    
                        </div>
                        {/* content */}
                        <div className='gap-y-14 mt-14 max-w-md self-end'>
                            <div className='flex gap-11 mb-12'> 
                                {/* numberr */}
                                <div className='text-7xl'>01</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl font-semibold'>Background</h3>
                                    <p className='text-2xl leading-10 mt-3'>Give a brief overview of your project here. 
                                        You may talk about the client brand and the main project challenge.</p>
                                </div>
                            </div>
                            <div className='flex gap-11'> 
                                {/* numberr */}
                                <div className='text-7xl'>02</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl font-semibold'>Solution</h3>
                                    <p className='text-2xl leading-10 mt-3'>Talk about your idea here. Expound a bit on how you solved the challenge and how your work helped your..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className='content-center sementic-right'>
                        <div className='p-10'>
                            <img src={SementicRightImage} alt="" width="100%" />
                        </div>
                    </div>
                </div>
                {/* Courses */}
                <div className='my-10 py-10'>
                    <h1 className='text-8xl text-center my-10'>Course</h1>
                    {/* container */}
                    <div className='p-8 flex flex-wrap gap-20 justify-center'> 
                        {/* card */}
                        <div className='course-card rounded-lg p-4 pt-2'>
                            {/* image */}
                            <div className='h-52 w-80'>
                                <img src={courseThumbain} alt="" className='h-full object-cover border-8  border-white rounded-2xl	'/>
                            </div>
                            {/* content */}
                            <div className=''>
                                <div className='max-w-80 py-2 px-3'>
                                    <button className='bg-[#2495D6] text-white py-1 px-3 rounded-md'>Begginer</button>
                                    <p className='text-[#2495D6]'>Programming Language</p>
                                    <p className='font-bold text-xl font-bold		'>Angular - The Complete Guide (2020 Edition)</p>
                                    <p className='text-base	 font-semibold '>From Setup to Deployment, this course it all! You’ll Learn all.</p>
                                </div>

                                <div className='flex bg-gray-900 text-white justify-between px-4 py-1'>
                                    <span>Instructor</span>
                                    <span>Name</span>
                                </div>
                                <div className='p-4 flex justify-between font-semibold py-1 px-2'>
                                    <div>
                                        <p className='mb-2'>Price Value</p>
                                        <FaRegStar fill='yellow'/>
                                    </div>
                                    <div className='text-center'>
                                        <p className='mb-2'>599 Rs.</p>
                                        <button className='text-white bg-red-600 py-1 px-3 rounded-xl '>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className='course-card rounded-lg p-4 pt-2'>
                            {/* image */}
                            <div className='h-52 w-80'>
                                <img src={courseThumbain} alt="" className='h-full object-cover border-8  border-white rounded-2xl	'/>
                            </div>
                            {/* content */}
                            <div className=''>
                                <div className='max-w-80 py-2 px-3'>
                                    <button className='bg-[#2495D6] text-white py-1 px-3 rounded-md'>Begginer</button>
                                    <p className='text-[#2495D6]'>Programming Language</p>
                                    <p className='font-bold text-xl font-bold		'>Angular - The Complete Guide (2020 Edition)</p>
                                    <p className='text-base	 font-semibold '>From Setup to Deployment, this course it all! You’ll Learn all.</p>
                                </div>

                                <div className='flex bg-gray-900 text-white justify-between px-4 py-1'>
                                    <span>Instructor</span>
                                    <span>Name</span>
                                </div>
                                <div className='p-4 flex justify-between font-semibold py-1 px-2'>
                                    <div>
                                        <p className='mb-2'>Price Value</p>
                                        <FaRegStar fill='yellow'/>
                                    </div>
                                    <div className='text-center'>
                                        <p className='mb-2'>599 Rs.</p>
                                        <button className='text-white bg-red-600 py-1 px-3 rounded-xl '>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className='course-card rounded-lg p-4 pt-2'>
                            {/* image */}
                            <div className='h-52 w-80'>
                                <img src={courseThumbain} alt="" className='h-full object-cover border-8  border-white rounded-2xl	'/>
                            </div>
                            {/* content */}
                            <div className=''>
                                <div className='max-w-80 py-2 px-3'>
                                    <button className='bg-[#2495D6] text-white py-1 px-3 rounded-md'>Begginer</button>
                                    <p className='text-[#2495D6]'>Programming Language</p>
                                    <p className='font-bold text-xl font-bold		'>Angular - The Complete Guide (2020 Edition)</p>
                                    <p className='text-base	 font-semibold '>From Setup to Deployment, this course it all! You’ll Learn all.</p>
                                </div>

                                <div className='flex bg-gray-900 text-white justify-between px-4 py-1'>
                                    <span>Instructor</span>
                                    <span>Name</span>
                                </div>
                                <div className='p-4 flex justify-between font-semibold py-1 px-2'>
                                    <div>
                                        <p className='mb-2'>Price Value</p>
                                        <FaRegStar fill='yellow'/>
                                    </div>
                                    <div className='text-center'>
                                        <p className='mb-2'>599 Rs.</p>
                                        <button className='text-white bg-red-600 py-1 px-3 rounded-xl '>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-3xl my-20'>
                        <button className='inline-flex	 gap-5 text-white bg-red-600 py-2 px-6 rounded-3xl'><SiOpenlayers />View All</button>
                    </div>
                </div>
                {/* Subscription */}
                <div className='text-center ng-white'>
                    <h1 className='text-6xl max-w-2xl my-6 m-auto leading-tight'>Choice your best <span className='font-semibold'>SUBSCRIPTION</span>Plan</h1>
                    <div className='p-8 flex justify-around flex-wrap py-20'> 
                        <div className='rounded-3xl subscription-card border-8'>
                        {/* card */}
                            <div className='p-6'>
                                <h2 className='text-5xl py-3 px-12 bg-red-600 rounded-full font-semibold'>Monthly</h2>
                                <div className='flex flex-col subcription-card'>
                                    <div className='font-semibold my-7'>
                                        <p className='text-5xl'>25 Rs</p>
                                        <p className='text-2xl'>Per Month</p>
                                    </div>
                                    <div className='self-center mb-5'>
                                        <ul className='text-2xl list-disc text-start'>
                                            <li>Data Analyst</li>
                                            <li>Up to 5 Member</li>
                                            <li>Get 5 GB Storage</li>
                                            <li>Monthly Report</li>
                                        </ul>
                                    </div>
                                    <button className='text-2xl text-white py-2.5 bg-red-600 rounded-full font-semibold'>Join</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                {/* Latest Blogs */}
                <div className='flex justify-center flex-col latest-blog'>
                    <h1 className='text-8xl text-center'>Latest Blogs</h1>
                    <div className='max-w-7xl m-auto'>
                        {/* images */}
                        <div className=' flex  gap-20 my-20 flex-wrap'>
                            <div className='w-96'>
                                <img src={courseThumbain} alt="" className='w-full h-full'/>
                            </div>
                            {/* content */}
                            <div className='max-w-2xl'> 	
                                <h2 className='text-5xl	mb-7 leading-10'>Start your journey now, level up your skill</h2>
                                <p className='text-lg leading-10'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius</p>
                            </div>
                        </div>
                        <div className=' flex m-auto gap-20 my-20 flex-wrap-reverse'>
                            {/* content */}
                            <div className='max-w-2xl'> 	
                                <h2 className='text-5xl	mb-7 leading-10'>Start your journey now, level up your skill</h2>
                                <p className='text-lg leading-10'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius</p>
                            </div>
                            <div className='w-96'>
                                <img src={courseThumbain} alt="" className='w-full h-full'/>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-3xl'>
                        <button className='inline-flex	 gap-5 text-white bg-red-600 py-2 px-6 rounded-3xl'><SiOpenlayers />View All</button>
                    </div>
                </div>
                    {/* Call to Actions */}
                <div className='px-32'>
                    <div className='mb-20'>
                        <h1 className='text-7xl	mb-10'>Call to Action</h1>
                        <p className='text-4xl	'>Join Now and Start Your Journey to Financial Mastery!</p>
                    </div>
                    <div>
                        <h1 className='text-7xl	mb-10'>What we do</h1>
                        <p className='text-4xl	'>Elevate your brand and make your mark in history.</p>
                    </div>
                    <div className='mt-20 ' >
                        <div className='flex justify-around mb-10 grid grid-cols-3 gap-10'>
                            <button className='text-xl py-6 px-24 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                            <button className='text-xl py-6 px-24 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                            <button className='text-xl py-6 px-24 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                        </div>
                        <div className='flex justify-around grid grid-cols-3 gap-10'>
                            <button className='text-xl py-6 px-24 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                            <button className='text-xl py-6 px-24 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                            <button className='text-xl py-6 px-24 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                        </div>
                    </div>
                    

                </div>
                {/* Course Details */}
         
            </LandingPage>            
        </>
    )       
}
export default Home;
const LandingPage = styled.div`
.hero h1{
    font-size: 6.2vw;
    /* line-height: 1.2px; */
}
.hero p {
    font-size: 4vw;
}
.feature-course-page {
  background-image: url(${courseFeatureBackground}); /* Placeholder URL */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.feature-course-page > div{
    background-image: url(${blanckBackground}); /* Placeholder URL */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 1000px;
    animation: slideGradient 15s forwards; 
}

@keyframes slideGradient {
    0% {
    background-position: 0px; 
  }
  100% {
    background-position: 15000px; 
  }
}
.feature-course-page .course-feature {
   padding: 15px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
   animation: 1.5s fadeInUp;
}  
@keyframes fadeInUp {
 0% {
   transform: translateY(40%);
   opacity: 0;
 }
 100% {
   transform: translateY(0%);
   opacity: 1;
 }
}

.sementic .sementic-left {
   animation: 1.5s fadeleft;
}  
@keyframes fadeleft {
 0% {
   transform: translateX(-40%);
   opacity: 0;
 }
 100% {
   transform: translateX(0%);
   opacity: 1;
 }
}
.sementic .sementic-right {
   animation: 1.5s faderight;
}  
@keyframes faderight {
 0% {
   transform: translateX(40%);
   opacity: 0;
 }
 100% {
   transform: translateX(0%);
   opacity: 1;
 }
}
 .feature-container > div > div:nth-child(1), .course-page{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
 }   
 .feature-container > div:nth-child(1) > div:nth-child(1){
    background-image: url(${courseImage1});
 }   
 .feature-container > div:nth-child(2) > div:nth-child(1){
    background-image: url(${courseImage2});
 }   
 .feature-container > div:nth-child(3) > div:nth-child(1) {
    background-image: url(${courseImage3});
 } 
 .course-card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 }
 .subcription-card li{
    margin-bottom: 16px;
 }
 .latest-blog h2{
    line-height: 3.5rem;
 }
 .course-page {
    background-image: url(${coursePageCover});  
    background-size: 100% 430px;
    background-position: top;
 }
.course-page-nav {
    display: flex;
    font-size: 18px;
}
.course-page-nav > span {
    display: flex;
    align-items: center;
}
.course-page-right-desc li {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
}
.subscription-card {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
`