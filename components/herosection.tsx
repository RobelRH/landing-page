import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center" style={{ height: '80vh' }}>
      <div className="flex h-screen">
        {/* Left Column */}
        <div className="w-1/6 flex justify-center items-center">
          <Image src="/illustrate.png" alt="Left Logo" width={500} height={500} />
        </div>

        {/* Middle Column */}
        <div className="w-4/6 flex justify-center items-center">
          <div className="w-4/5">
            {/* Your content goes here */}
            <h1 className="font-bold text-5xl text-black text-center px-12">
              2 shots with 1 stone. Earn and let them earn.
            </h1>
            <p className='text-gray-500 py-5 text-center px-36'>
              Refer a friend and earn 1000 tokens for each referral. we know a favor demands a favor; that's why your friends are also awarded 100 tokens
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/6 flex justify-center items-center">
          <Image src="/illustrate2.png" alt="Left Logo" width={500} height={500} />
        </div>
      </div>

    </div>
  )
}

export default HeroSection