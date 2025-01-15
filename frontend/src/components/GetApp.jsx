import React from 'react'
import appStore from "../assets/apple.svg"
import playStore from "../assets/android.svg"
import phones from "../assets/phones.png"

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col max-[500px]:hidden' id='app'>
        <div className='mx-auto max-w-[1440px] relative flex w-full flex-col justify-between gap-32 overflow-hidden px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl bg-primary'>
            <div className='flex w-full flex-1 flex-col items-start justify-center gap-4 xl:max-w-[555px]'>
                <h2 className='bold-40 lg:bold-64'>Get our app now!</h2>
                <h4 className='uppercase medium-16 text-secondary'>Available on iOS and Android</h4>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores beatae impedit nam porro blanditiis fugit culpa deserunt veritatis voluptatem optio, rem accusamus!</p>
                <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
                    <button className='flexCenter gap-x-3 btn-dark rounded-full !px-12 !py-3.5'>
                        <img src={appStore} alt="" />App Store
                    </button>
                    <button className='flexCenter gap-x-3 btn-secondary rounded-full !px-12 !py-3.5'>
                        <img src={playStore} alt="" />Play Store
                    </button>
                </div>
            </div>
            <div className='flex flex-1 items-center justify-end'>
                <img src={phones} alt="phoneImg" width={550} height={870} />
            </div>
        </div>
    </section>
  )
}

export default GetApp