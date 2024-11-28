'use client';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import React, { useEffect } from 'react';
import TypingAnimation from '@/components/ui/typing-animation';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { FaWhatsapp } from 'react-icons/fa';
const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 3000, // Animation duration (optional)
			once: true, // Animation happens only once (optional)
		});
	}, []);
	return (
		<>
			<div className='flex justify-center gap-28'>
				<div className='w-[30vw] mt-24'>
					<TypingAnimation
						className='text-3xl font-medium text-black dark:text-white text-left h-20'
						text='Shape Your Medical Future with First Choice University'
					/>
					<h1 className='mt-4'>
						Study MBBS Abroad at World-Renowned Universities
					</h1>
					<h1 className='italic'>
						Affordable Fees | Global Recognition | Seamless Admission Process
					</h1>

					<ul
						data-aos='fade-right'
						className='flex flex-col ml-8 gap-4 mt-6 w-[26vw]'
					>
						<li className='flex text-sm gap-2 text-left'>
							<IoMdCheckmarkCircleOutline
								className='text-green-500 '
								size={25}
							/>
							<h1>100% guaranteed entry in top medical universities abroad</h1>
						</li>
						<li className='flex text-sm gap-2 text-left'>
							<IoMdCheckmarkCircleOutline
								className='text-green-500 '
								size={25}
							/>
							<h1>
								Medicine & Dentistry courses recognised by Medical Councils
							</h1>
						</li>
						<li className='flex text-sm gap-2 text-left'>
							<IoMdCheckmarkCircleOutline
								className='text-green-500 '
								size={25}
							/>
							<h1>100+ hand-picked medical universities to choose from</h1>
						</li>
						<li className='flex text-sm gap-2 text-left'>
							<IoMdCheckmarkCircleOutline
								className='text-green-500 '
								size={25}
							/>
							<h1>Full ongoing support by doctors and students overseas</h1>
						</li>
					</ul>

					<a
						type='button'
						className='flex mt-7 ml-8 gap-5 items-center justify-center rounded-xl text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2'
						href='https://wa.me/919999999999'
					>
						<FaWhatsapp size={20} />
						Connect With Whatsapp
					</a>
				</div>
				<div className='w-[30vw] mt-20'>
					<img
						className='h-[65vh]'
						src='images/heroimage.jpg'
						alt='heroimage'
					/>
				</div>
			</div>
			<div className='mt-20'>
				<VelocityScroll
					text='First Choice University'
					default_velocity={5}
					className='font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]'
				/>
			</div>
		</>
	);
};

export default Hero;
