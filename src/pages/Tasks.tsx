import React, { useContext, useEffect } from 'react'
import '../css/mystyles/tasks.css';
import HeaderPlatform from '../partials/HeaderPlatform';
import Footer from '../partials/Footer';
import { AppContext } from '../contexts';
import { useNavigate } from 'react-router-dom';
import BtnLogout from '../partials/BtnLogout';

const Tasks = () => {

  return (
    <>
    <HeaderPlatform />
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mt-6 pb-12 md:pb-16">
            <div className="font-architects-daughter text-xl text-purple-600 mb-2">Learnigo</div>
            <h1 className="h2 mb-4">Welcome to Learnigo, are you ready?</h1>
            <p className="text-xl text-gray-400">Let’s get started by choosing something to learn today, which one will you choose?</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="card">
              <a className="card1" href="#">
                <p className='py-2'>English Dictionary</p>
                <p className="small">Elevate your language skills with our comprehensive English dictionary.</p>
                <div className="go-corner">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

            {/* 2nd item */}
            <div className="card">
              <a className="card1" href="#">
                <p className='py-2'>Pro Tips for Mastering English</p>
                <p className="small">Unlock the secrets to fluent English with our expert tips and tricks.</p>
                <div className="go-corner">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

            {/* 3rd item */}
            <div className="card">
              <a className="card1" href="#">
                <p className='py-2'>Learning Channels</p>
                <p className="small">Explore podcasts, videos, and blogs covering various topics.</p>
                <div className="go-corner">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

            {/* 4th item */}
            <div className="card">
              <a className="card1" href="#">
                <p className='py-2'>Practice Exercises</p>
                <p className="small">Enhance your language proficiency through interactive practice exercises.</p>
                <div className="go-corner">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

            {/* 5th item */}
            <div className="card">
              <a className="card1" href="#">
                <p className='py-2'>Interactive Quizzes</p>
                <p className="small">Put your learning to the test with our fun and challenging quizzes.</p>
                <div className="go-corner">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

            {/* 6th item */}
            <div className="card">
              <a className="card1" href="#">
                <p className='py-2'>Unlock Fluent English with Our Exclusive eBook</p>
                <p className="small">Accelerate your learning with our eBook, "Mastering English Essentials." Practical insights for confident communication.</p>
                <div className="go-corner color">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
    <Footer />
    <BtnLogout />
    </>
  )
}

export default Tasks;