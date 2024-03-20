import avatar from './asset/KWUE3236 (1).png'
import tailwind from './asset/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg'
import sveltekit from './asset/Svelte_Logo.svg'
import typescript from './asset/Typescript_logo_2020.svg'
import './profile.css'
const Profile = () => (
  <div className='lg:w-[50%] xl:w-[50%] '>
    <h1 className='text-4xl font-bold font-mono ms-20 mt-5 italic'>Hien Dang</h1>
    <h2 className='text-2xl italic font-bold ms-12 mt-5'>FrontEnd Developer</h2>
    <div className='relative mt-[32px]'>
      <img src={avatar} alt="" className='object-contain lg:w-[400px] xl:w-[523px] xl:mt-[32px] xl:ms-[-26px] h-full' />
      <div className='sm:w-[30px] ms-[40px] lg:w-[300px] absolute lg:left-0 xl:top-[198px] xl:left-[22rem] lg:hidden xl:block '>
        <i className='bg-#000 text-[#fff] font-normal font-sans '>"As a person who likes to innovate,
          can withstand work pressure and
          assigned job responsibilities. Always
          learning to bring the best product
          results for you."
        </i>
      </div>
      <div className='absolute flex xl:bottom-[60px] xl:left-[26rem] '>
        <i className="fa-brands fa-html5 ms-5" style={{ color: "#e66401", fontSize: '3rem' }}></i>
        <i className="fa-brands fa-css3-alt ms-5" style={{ color: "#078aed", fontSize: '3rem' }}></i>
        <i className="fa-brands fa-js ms-5" style={{ color: "#FFD43B", fontSize: '3rem' }}></i>
        <div className='absolute lg:left-[11rem] lg:mt-1 xl:left-[11rem] w-[2.6rem] ms-[20px] xl:mt-1'>
          <img src={typescript} alt="" />
        </div>
        <div className='absolute flex w-[2.4rem] xl:top-[53px] xl:left-[20px] lg:top-[4rem] lg:left-6'>
          <img src={tailwind} alt="" />
          <i className="fa-brands fa-react mx-[0.70rem] " style={{ color: "#0e8ff1", fontSize: '2.5rem' }}></i>
          <img src={sveltekit} alt="" className='ms-4' />
        </div>
      </div>

    </div>

  </div >
)

export default Profile