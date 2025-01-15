import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
 
const Hero = () => {
  return (
    <section className='max-padd-container bg-hero max-[500px]:bg-heromd bg-cover bg-center bg-no-repeat h-[744px] w-full' id="home">
            <div className='relative top-24 xs:top-72'>
                <h4 className='uppercase medium-18 tracking-wider'>
                FRESH FROM THE FARM
                </h4>
                <h1 className='h1 capitalize max-w-[40rem]'>
                Harvest the Best Produce <span className='text-secondary'>with Every Click. </span>Shop Directly from Farmers!
                </h1>
                <p className='my-5 max-w-[33rem]'>Enjoy fresh, organic, and locally sourced farm products delivered straight to your doorstep. Support your local farmers and experience the taste of quality.</p>
                {/* buttons */}
                <div className='flex items-center gap-x-4'>
                    <Link to={''} className='inline-flex items-center justify-center gap-4 p-3 bg-white rounded-xl'>
                        <div className='regular-14 leading-tight pl-4'>
                            <h5 className='uppercase font-bold'>New Harvest</h5>
                            <p className='regular-14 mt-1'>10% off</p>
                        </div>
                        <div className='bg-primary h-10 w-10 p-1 rounded-full flexCenter'>
                            <FaArrowRight />
                        </div>
                    </Link>
                    <Link to={''} className='inline-flex items-center justify-center gap-4 p-3 bg-tertiary text-white rounded-xl'>
                        <div className='regular-14 leading-tight pl-4'>
                            <h5 className='uppercase font-bold'>Farmer's Pick</h5>
                            <p className='regular-14 mt-1'>50% off</p>
                        </div>
                        <div className='bg-primary h-10 w-10 p-1 rounded-full flexCenter text-tertiary'>
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
    </section>
  )
}

export default Hero