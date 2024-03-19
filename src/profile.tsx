import avatar from './asset/KWUE3236 (1).png'
import tailwind from './asset/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg'
import sveltekit from './asset/Svelte_Logo.svg'
import typescript from './asset/Typescript_logo_2020.svg'
import './profile.css'
const Profile = () => (
  <div className='lg:w-[57%] '>
    <h1 className='text-4xl font-bold font-mono ms-20 mt-5 italic'>Hien Dang</h1>
    <h2 className='text-2xl italic font-bold ms-12 mt-5'>FrontEnd Developer</h2>
    <div className='relative mt-[32px]'>
      <img src={avatar} alt="" className='object-contain lg:w-[400px] xl:w-[630px] h-full' />
      <div className='w-[44rem] ms-[40px] lg:w-[300px] absolute lg:left-0 xl:top-[250px] xl:left-[30rem] '>
        <i className='bg-#000 text-[#fff] font-normal font-sans '>"As a person who likes to innovate,
          can withstand work pressure and
          assigned job responsibilities. Always
          learning to bring the best product
          results for you."
        </i>
      </div>
      <div className='absolute lg:top-[365px] xl:bottom-[1rem] xl:left-[33rem] mt-[30px] flex ms-[20px]'>
        <i className="fa-brands fa-html5 ms-5" style={{ color: "#e66401", fontSize: '3rem' }}></i>
        <i className="fa-brands fa-css3-alt ms-5" style={{ color: "#078aed", fontSize: '3rem' }}></i>
        <i className="fa-brands fa-js ms-5" style={{ color: "#FFD43B", fontSize: '3rem' }}></i>
        <div className='absolute lg:left-[22rem] lg:w-[2.5rem] xl:left-[11rem] xl:bottom-[2.6rem] xl:w-[2.7rem] w-[2.7rem] ms-[20px] xl:mt-3'>
          <img src={typescript} alt="" />
        </div>
        <div className='absolute lg:flex lg:ms-[12rem] lg:w-[2.8rem] lg:items-center flex w-[2.8rem] xl:ms-[1.1rem] xl:bottom-0 '>
          <img src={tailwind} alt="" />
          <i className="fa-brands fa-react mx-[0.70rem] " style={{ color: "#0e8ff1", fontSize: '2.5rem' }}></i>
          <img src={sveltekit} alt="" className='ms-4' />
        </div>
      </div>
    </div>
  </div >
)

export default Profile