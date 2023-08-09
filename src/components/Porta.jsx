import React from 'react';
import JackBlack from '../assets/portfolio/JackBlack.jpg';
import TekedaFash from '../assets/portfolio/TekedaFash.jpg';
import Escuela from '../assets/portfolio/Escuela.jpg';
import WorkComputer from '../assets/portfolio/WorkComputer.jpg';
const Porta = () => {
  const porta = [
    {
      id: 1,
      title: 'TekedaFash',
      src: TekedaFash,
      tech: ['Django','CSS','HTML','Ajax','MariaDB','JavaScript','Boostrap','Google Storage'],
      description: 'Tienda "Ecommerce" para un nuevo emprendimiento de la moda salvadoreño. Permitiendo a los usuarios ver el catálogo de productos, registrarse y realizar un pedido. Adicionalmente permite a los administradores realizar las gestiones correspondientes de usuarios, compras, ventas y reportes',
    },
    {
      id: 2,
      title: 'Escuela de manejo lopez',
      src: Escuela,
      tech: ['Django','CSS','HTML','Boostrap','JavaScript','HeidiSQL','HTML'],
      description: 'Escuela de manejo lopez" es un sistema de gestión integral diseñado para escuelas de manejo, Esta plataforma ofrece una solución completa para las operaciones y la administración de una escuela de manejo, optimizando la organización y facilitando el proceso de aprendizaje de los estudiantes.',
    },
    {
      id: 3,
      title: 'BlackJack',
      src: JackBlack,
      tech: ['JavaScript','HTML','CSS'],
      description: 'Esta aplicación ofrece una experiencia interactiva del famoso juego blackjack que destaca tanto el diseño de la interfaz como la funcionalidad del juego en sí, todo dentro de un entorno web accesible desde cualquier dispositivo con conexión a internet.',
    },
    {
      id: 4,
      title: 'Aplicacion en progreso',
      src: WorkComputer,
      tech: ['Django','CSS','HTML','Ajax','MariaDB','JavaScript','Boostrap','Google Storage'],
      description: 'Aplicacion en proceso de creacion',
    },
    {
      id: 5,
      title: 'Aplicacion en progreso',
      src: WorkComputer,
      tech: ['JavaScript' ,'HTML','Lavarel','PHP','CSS'],
      description: 'Aplicacion en proceso de creacion',
    },
    
  ]
  return <div name="proyectos" className='py-6 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Proyectos</p>
              <p className='py-6'>Algunos de los proyectos que he desarrollado usando diferentes tecnologias:</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
              porta.map(({id, src, tech, title,description}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <div className='py-0'>
                  <h1 className='p-1  text-center'>{title}</h1>
                  </div>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 p-0' />
                <div className='flex flex-wrap items-center justify-center'>
                {tech.map((tech,index) =>(
                    <span key={index} className='bg-gray-500 text-gray-100 px-1 py-0 m-1 rounded text-sm'>
                      {tech}
                    </span>
                  ))}
                <div >
                  <p className='text-gray100 px-1.5 py-0 text-sm text-justify'>{description}</p>
                </div>
                </div>
                <div  className='flex items-center justify-center'>
                <div className='flex items-center justify-center mt-2'>
                  <br/>
                  <button className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Probar</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Codigo</button>
                </div>
              </div>
            </div>
              ))
            }
            </div>
          </div>
    </div>
}
export default Porta