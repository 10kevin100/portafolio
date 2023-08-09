import React from 'react'

function About() {
  return (
    <div name="sobre mi" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl fnt-bold inline border-b-4 border-gray-500'>Sobre mi</p>
        </div>
        <p className='text-xl mt-20'>
        Hola Soy Kevin Moran, un desarrollador web de 22 años. Mi amor por la tecnología me ha llevado a explorar y dominar tecnologías como HTML, CSS, JavaScript y frameworks como React. Mi enfoque se centra en transformar ideas en aplicaciones web prácticas mediante el uso del framework Django buscando que estas sean atractivas visualmente, brindando experiencias excepcionales a los usuarios. Valorando la colaboración y la comunicación. 
        </p>
 
        <p className='text-xl mt-20'>
        Actualmente soy un estudiante de cuarto año de Ingeniería de Sistemas informáticos de la universidad de El Salvador, aunque me gusta demasiado aprender por mi propia cuenta tecnologias nuevas que se implementen en el mundo laboral
       
        </p>
        </div>
          


    </div>
  )
}

export default About
