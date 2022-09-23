import React from 'react'
import { Link } from "react-router-dom";
import landingImage from '../res/landing-image.svg'

const CreateLink = () => (
    <Link to="/create" className='flex items-center justify-center rounded-lg gradient text-center w-[187px] h-[50px] md:w-[320px] md:h-[55px]'>
        <span className='text-white font-bold text-[16px] md:text-[20px] leading-[16px] md:leading-[23px]'>
            🎉 Create my event
        </span>
    </Link>
)

const Landing = () => {
    return (
        <div className='pt-[94px] md:pt-[60px] lg:pt-[0] px-[27px] min-h-screen flex flex-col items-center lg:flex-row-reverse lg:items-center lg:justify-end lg:px-[150px]'>
            <div className='flex-col lg:justify-end lg:flex-1'>
                <h1 className='text-primaryPurpleDark font-bold text-center lg:text-right text-[36px] leading-[36px] md:text-[64px] md:leading-[64px]'>
                    Imagine if
                    <div className='text-transparent text-gradient leading-[41.4px] md:leading-[73.59px]'>
                        Snapchat
                    </div>
                    had events
                </h1>
                <p className='mt-[16px] font-light font-size[16px] leading-[18px] text-center lg:text-right text-neutral-700 max-w-[321px] md:text-[24px] md:leading-[27.6px] md:max-w-[521px]'>
                    Easily host and share events with your friends across any social media.
                </p>
                <div className=' mt-[68px] hidden lg:flex lg:justify-end'>
                    <CreateLink />
                </div>
            </div>
            <div className='mt-[36px] flex items-center flex-col lg:flex-1'>
                <img src={landingImage} className="w-[165px] h-[292px] md:w-[311px] md:h-[548.27px] lg:max-w-[440px] lg:h-[100%]" alt="Landing" />
                <div className='mt-[34px] md:mt-[52.73px] lg:hidden'>
                    <CreateLink />
                </div>
            </div>
        </div>
    )
}

export default Landing