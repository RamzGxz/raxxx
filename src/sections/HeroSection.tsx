import { Play } from '@phosphor-icons/react'

const HeroSection = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center py-32 pt-36 relative -z-10' id='hero'>
      <div className=' absolute -z-10 -left-[20%] -top-[0%]' style={{
        width: 594,
        height: 594,
        background: 'radial-gradient(41.49% 41.49% at 50% 50%, rgba(102, 27, 122, 0.62) 0%, rgba(101, 26, 117, 0) 100%)',

      }}></div>
      
      <div className="w-full flex justify-between gap-10">
        <div className="lg:w-1/2 w-full flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-[42px] font-bold leading-[50.4px]">Explore Our High Ticket Mining Server, Best ROI, Autopilot Income</h1>
            <p className="text-textAccent text-[28px] leading-[33.6px]">An excellent marketplace for achieving significant ROI</p>
          </div>
          <div className="flex items-center gap-5 w-full">
            <button className="rounded-md w-[174px] h-[50px] text-lg font-semibold btn">Login</button>
            <button className="w-[174px] h-[50px] text-lg font-semibold rounded-md text-[#912EE0] border border-[#912EE0] hover:bg-[#BC17B1] hover:text-white hover:border-0">
              Register
            </button>
          </div>

          <div className='w-full'>
            <button className='mt-5 flex gap-5 items-center'>
              <div className='w-[24px] h-[24px] bg-secondary flex justify-center items-center rounded-full'>
                <Play size={11} color="#FFFFFF" weight="fill" />
              </div>
              <p className='text-secondary font-bold'>Learn more about us</p>
            </button>
          </div>
        </div>
        <div className="w-1/2 lg:flex hidden justify-center items-center">
          <img src="assets/img/Image-Hero.png" alt="" width={481} height={543} />
        </div>
      </div>

      <div className=' absolute -z-10 -right-[9%] -top-[0%]' style={{
        width: 594,
        height: 594,
        background: 'radial-gradient(41.49% 41.49% at 50% 50%, rgba(102, 27, 122, 0.62) 0%, rgba(101, 26, 117, 0) 100%)'
      }}></div>
      <div className=' absolute -z-10 -right-[9%] top-[70%]' style={{
        width: 594,
        height: 594,
        background: 'radial-gradient(41.49% 41.49% at 50% 50%, rgba(102, 27, 122, 0.62) 0%, rgba(101, 26, 117, 0) 100%)'
      }}></div>
    </div>
  );
};

export default HeroSection;