import React from 'react';
import EventCard from '@components/eventcard/eventcard';
import LogoCard from '@components/logocard/logocard';

export const metadata = {
    title: 'ACES Homepage',
    description: 'Generated by Rahul A B',
}

const Home = () => (
    <section className='w-full flex-col'>
        <div className='maintext'>
            <h1 className='head_text text-center'>
                ACES Association
                <br />
                <span></span>
            </h1>
            <div className='flex-center'>
                <p className='desc text-center'>
                    Department Of Computer Science And Engineering <br />
                    Sahrdaya College Of Engineering & Technology, Kodakara
                </p>
            </div>
        </div>
        <div>
            <h2 className='mt-5 font-bold text-black text-2xl'> About: </h2>
            <div className='flex-center'>
                <p className='desc text-center'>
                    ACES is the official association of the Department of Computer Science and Engineering, Sahrdaya College of Engineering and Technology, Kodakara. The association aims to provide a platform for the students to showcase their talents and to develop their technical skills. ACES conducts various technical and non-technical events throughout the year. The association also conducts workshops, seminars and industrial visits to help students to gain knowledge about the latest technologies and trends in the industry. ACES also conducts various events to help students to improve their soft skills and to develop their personality. The association also conducts various social welfare activities to help the society.
                </p>
            </div>
        </div>
        <div>
            <h2 className='mt-5 font-bold text-black text-2xl'> Upcoming Events: </h2>
            <div className='flex-center'>
                <EventCard />
            </div>
        </div>
        <div>
            <h2 className='mt-5 font-bold text-black text-2xl'> Group: </h2>
            <div className='flex-center'>
                <LogoCard />
            </div>
        </div>
        <div className='mt-5'>
        </div>
    </section>
)

export default Home;