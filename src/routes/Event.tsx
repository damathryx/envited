import React from 'react'
import { useLocation } from 'react-router-dom';

const Event = () => {
	const {state} = useLocation();
    return (
        <div>
            <img className='w-full h-[375px]' src={state.photo} />
            <h1 className='text-primaryPurpleDark font-bold text-[28px] leading-[32px] md:text-[48px] md:leading-[55px]'>{state.eventName}</h1>
            <h3 className='text-neutral-600 text-[14px] leading-[16px] md:text-[18px] md:leading-[21px]'>Hosted by <b>{state.hostName}</b></h3>
            <h4>{state.startDate} {state.endDate}</h4>
            <h4>{state.location}</h4>
        </div>
    )
}

export default Event