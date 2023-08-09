import React from 'react';
import HeroImage from '../assets/heroImage.png';
import {BiSolidRightArrow } from 'react-icons/bi';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="Inicio" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Desarrollador Web
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Soy un apasionado desarrollador web, dedicado a crear experiencias digitales atractivas y funcionales. Con un enfoque en la innovación tecnológica, mi objetivo es traducir conceptos en soluciones digitales que no solo cumplan, sino que superen las expectativas.
                </p>
                <div className='flex flex-col justify-center'>
                    <br/>
                <h2 className='p-3text-4xl fnt-bold inline border-b-4 border-gray-500 text-center'>Idiomas</h2>
                <br/>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex items-center mb-4 md:mb-0 md:mr-6'>
                        <p className='mr-2 p-2 border rounded-full'>ES</p>
                        <p>NATIVO</p>
                    </div>
                    <div className='flex items-center md:ml-6'>
                        <p className='mr-2 p-2 border rounded-full'>EN</p>
                        <p>AVANZADO</p>
                    </div>
                </div>

                <div>
                    <Link to='proyectos' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portafolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <BiSolidRightArrow size={20} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='p-5 w-56 md:w-full'  >
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-56 md:w-full' />
            </div>
        </div>
    </div>
  )
};
export default Home;
