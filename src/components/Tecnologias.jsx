import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import graphql from '../assets/graphql.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import Java from '../assets/Java.png';
import springboot from '../assets/springboot.png';
import django from '../assets/Django.png';
import mariadb from '../assets/mariaDB.png';
import php from '../assets/PHP.png'

const Tecnologias = () => {
    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: graphql,
            title: 'GraphQL',
            style: 'shadow-pink-400'
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            src: Java,
            title: 'Java',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src: springboot,
            title: 'SpringBoot',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: django,
            title: 'Django',
            style: 'shadow-green-600'
        },
        {
            id: 11,
            src: php,
            title: 'PHP',
            style: 'shadow-blue-300'
        },
        {
            id: 12,
            src: mariadb,
            title: 'MariaDB',
            style: 'shadow-gray-500'
        },
    ]
  return (
    <div name='Tecnologias' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div> 
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-1 inline'>Tecnologías</p>
            <p className='py-6'>Algunas de las tecnologias con las que he trabajado.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0'>

            {
                tech.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
          
        </div>
        </div>
    </div>
    

  );
  
};

export default Tecnologias