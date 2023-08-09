import React from 'react';

const Contacto = () => {
  return(
          <div name='Contacto' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
              <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contactame</p>
                <p className='py-6'>Contactame por medio del siguiente formulario:.</p>
              </div>
              
              <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/18d5aade-4762-4d3a-8276-49df67b583ce" method= "POST" className='flex flex-col w-full md:w-1/2'>
                  <input type="text" name='name' placeholder='Nombre' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                  <input type="text" name='emai' placeholder='Email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                  <textarea name="message" placeholder='Mensaje' rows="10" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                  <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Contactame.</button>
                </form>
              </div>
              </div>
            </div>
  )
};

export default Contacto