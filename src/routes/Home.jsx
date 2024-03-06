import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

export const Home = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href=""
                  download
                >
                  Currículum
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Alejandro Paradiso
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Programador Full Stack.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            ¡Hola! Soy un apasionado desarrollador de software con experiencia en una variedad de lenguajes de programación y tecnologías. Mi objetivo es crear soluciones elegantes y eficientes que resuelvan problemas del mundo real. Constantemente me sumerjo en nuevos lenguajes y bibliotecas para mantenerme actualizado y mejorar mis habilidades.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/AlejandroPGz"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/alejandro-paradiso-498b3a2a1/"><AiFillLinkedin /></a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Sobre Mi</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <img src='/fron.png' className='h-40' />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              Frontend
              </h3>
              {/* <h4 className="py-4 text-teal-600">Front End</h4> */}
              <p className="text-gray-800 py-1">HTML, CSS y JavaScript.</p>
              <p className="text-gray-800 py-1">React JS.</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Bootstrap.</p>

              <h4 className="py-4 text-teal-600">Backend</h4>
              <p className="text-gray-800 py-1">Node JS, Next, Express, Moongose.</p>
              <p className="text-gray-800 py-1">Mongo DB, SQLite.</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <img src='/ser.png' className='h-40' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Backend
              </h3>
              <p className="text-gray-800 py-1">Node JS</p>
              <p className="text-gray-800 py-1">Next</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Moongose</p>
              <p className="text-gray-800 py-1">Mongo DB</p>
              <p className="text-gray-800 py-1">SQLite</p>

            </div>
            <div className="text-center flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src='/kn.png' className='h-40' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Educacion</h3>
              <h4 className="py-4 text-teal-600">Universidad Santa Maria</h4>
              <p className="text-gray-800 py-1">Actualmente cursando Ingeniería en sistemas.</p>
              <h4 className="py-4 text-teal-600">Neo Universidad EDTecnica</h4>
              <p className="text-gray-800 py-1">Certificado de programador Full Stack</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portafolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex flex-1 flex-col justify-center items-center gap-1">
              <img
                className="rounded-lg object-cover w-full md:w-80 h-48"
                src='/ferre.png'
              />
              <p className='text-xl underline decoration-dashed underline-offset-4 font-medium text-gray-800  dark:text-white'>E Commerce Ferreteria</p>
              <a className='text-lg font-medium text-gray-800 cursor-pointer dark:text-white' href="">Live Website</a>
              <a className='text-lg font-medium text-gray-800 cursor-pointer dark:text-white' href="">Github</a>

            </div>
            <div className="basis-1/3 flex flex-1 flex-col justify-center items-center gap-1">
              <img
                className="rounded-lg object-cover w-full md:w-80 h-48 bg-white"
                src='/api.svg'
              />
              <p className='text-xl underline decoration-dashed underline-offset-4 font-medium text-gray-800  dark:text-white'>Venezuela Wiki Api</p>
              <a className='text-lg font-medium text-gray-800 cursor-pointer dark:text-white' href="">Live Website</a>
              <a className='text-lg font-medium text-gray-800 cursor-pointer dark:text-white' href="">Github</a>
            </div>
            <div className="basis-1/3 flex flex-1 flex-col justify-center items-center gap-1">
              <img
                className="rounded-lg object-cover w-full md:w-80 h-48"
                src='/clima.svg'
              />
              <p className='text-xl underline decoration-dashed underline-offset-4 font-medium text-gray-800  dark:text-white'>Country App Guide</p>
              <a className='text-lg font-medium text-gray-800 cursor-pointer dark:text-white' href="">Live Website</a>
              <a className='text-lg font-medium text-gray-800 cursor-pointer dark:text-white' href="">Github</a>

            </div>

          </div>
        </section>
      </main>
    </div>
  );


  // return (
  //   <>
  //   <main className='bg-white px-10'>
  //   <section className='min-h-screen'>
  //   <nav className='py-10 mb-12 flex justify-between'>
  //     <h1 className='text-xl font-burtons'>DESARROLLADO POR ALEJANDRO PARADISO</h1>
  //     <ul className='flex items-center'>
  //       <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'></BsFillMoonStarsFill></li>
  //       <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8' href="">Currículum</a></li>
  //     </ul>
  //   </nav>

  //   <div className='text-center p-10'>
  //     <h2 className='text-5xl py-2 text-teal-600 font-medium'>Alejandro Paradiso</h2>
  //     <h3 className='text-2xl py-2'>Programador Full Stack</h3>
  //     <p className='text-md py-5 leading-8 text-gray-800'>¡Siempre desarrollando nuevos proyectos y aprendiendo cosas nuevas!</p>
  //   </div>
  //   <div className='text-4xl flex justify-center gap-16 text-gray-600'>
  //   <AiFillTwitterCircle></AiFillTwitterCircle>
  //   <AiFillLinkedin></AiFillLinkedin>
  //   <AiFillYoutube></AiFillYoutube>

  //   </div>
  //   </section>

  //   <section>
  //     <div>
  //       <h3 className='text-3xl py-1'>Conocimientos</h3>
  //     </div>

  //   <div>
  //     <div className='text-center flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10'>
  //       <img className='h-20 w-20' src="/design.png" />
  //       <h3 className='text-lg font-medium pt-8 pb-2'>Programación</h3>
  //       <h4 className='py-4 text-teal-600'>Tools:</h4>
  //       <p className='text-gray-800 py-1'>HTML, CSS, JavaScript</p>
  //       <p className='text-gray-800 py-1'>NodeJS, React Js</p>
  //       <p className='text-gray-800 py-1'>Tailwind CSS, Moongose</p>
  //       <p className='text-gray-800 py-1'>MongoDB, SQLite</p>

  //     </div>
  //     <div className='text-center flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10'>
  //       <img className='h-20 w-20' src="/design.png" />
  //       <h3 className='text-lg font-medium pt-8 pb-2'>Programación</h3>
  //       <h4 className='py-4 text-teal-600'>Tools:</h4>
  //       <p className='text-gray-800 py-1'>HTML, CSS, JavaScript</p>
  //       <p className='text-gray-800 py-1'>NodeJS, React Js</p>
  //       <p className='text-gray-800 py-1'>Tailwind CSS, Moongose</p>
  //       <p className='text-gray-800 py-1'>MongoDB, SQLite</p>

  //     </div>
  //     <div className='text-center flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10'>
  //       <img className='h-20 w-20' src="/design.png" />
  //       <h3 className='text-lg font-medium pt-8 pb-2'>Programación</h3>
  //       <h4 className='py-4 text-teal-600'>Tools:</h4>
  //       <p className='text-gray-800 py-1'>HTML, CSS, JavaScript</p>
  //       <p className='text-gray-800 py-1'>NodeJS, React Js</p>
  //       <p className='text-gray-800 py-1'>Tailwind CSS, Moongose</p>
  //       <p className='text-gray-800 py-1'>MongoDB, SQLite</p>

  //     </div>
  //   </div>

  //   </section>

  //   </main>
  //   </>
  // )
}
