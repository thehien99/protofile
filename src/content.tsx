import './content.css'
import chuky from './asset/signature (4).png'
const Content = () => {
  return (
    <div className="xl:w-[43%] w-full flex justify-center items-center lg:mt-[0.5rem] me-8 mt-[3rem] ms-8">
      <div className="w-[40%]">
        <div className="teaching_assistant h-full mb-[50px] text-center">
          <div className="flex justify-end mb-2">
            <h3 className="text-[#fff] text-xl font-bold font-serif lg:flex lg:flex-col me-4 xl:flex xl:flex-col flex flex-col">
              GreenAcademy
              <i className="lg:flex lg:justify-center lg:items-center xl:flex">(11/2022 - 1/2023)</i>
            </h3>
            <i className="fa-solid fa-left-long" style={{ color: "#dd085d", fontSize: "2rem" }}></i>
          </div>
          <div className="flex flex-col items-center mt-2 text-xl">
            <span className="italic text-[#ccc] opacity-50 text-center">
              Fullstack Course Teaching Assistant
              (ReactJs, NodeJS)
            </span>
          </div>
        </div>

        <div className="greenacademy h-full mb-[50px] text-center">
          <div className="flex justify-end mb-2">
            <h3 className="text-[#fff] text-xl font-bold font-serif lg:flex lg:flex-col me-4  flex flex-col">
              GreenAcademy
              <i className="lg:flex lg:justify-center lg:items-center">(11/2021 - 11/2022)</i>
            </h3>
            <i className="fa-solid fa-left-long" style={{ color: "#dd085d", fontSize: "2rem" }}></i>
          </div>
          <div className="flex flex-col items-center mt-2 text-xl">
            <span className="italic text-[#ccc] opacity-50 text-center flex flex-col items-start">Learn about FullStack.
              <span> FrontEnd: ReactJs</span>
              <span>BackEnd: NodeJs</span>
            </span>
          </div>
        </div>

        <div className="college text-center">
          <div className="flex justify-end mb-2">
            <h3 className="text-[#fff] text-xl font-bold font-serif lg:flex lg:flex-col lg:me-4 me-2  flex flex-col ">
              Thu Duc College
              <i className="flex justify-center items-center">(10/2018 - 3/2020)</i>
            </h3>
            <i className="fa-solid fa-left-long" style={{ color: "#dd085d", fontSize: "2rem" }}></i>
          </div>
          <span className="italic text-[#ccc] opacity-50 text-center text-xl">Majoring in Information Technology</span>
        </div>
      </div >

      <div className="w-[57%] border-l-4 lg:no-border">
        <div className="h-full mb-[50px] text-center">
          <div className="flex justify-start mb-2">
            <i className="fa-solid fa-right-long" style={{ color: "#dd085d", fontSize: "2rem" }}></i>
            <h3 className="text-[#fff] text-xl font-bold font-serif lg:flex flex lg:flex-col ms-4 flex-col">
              Olli Technology Company
              <i className="flex justify-center items-center">(2/2023 - 3/2024)</i>
            </h3>
          </div>
          <div className="mt-2 text-xl ms-14 w-[72%] text-justify">
            <span className="italic text-[#ccc] opacity-50">
              Take on a position assigned by the company as a FrontEnd intern with thinking and coding skills, assisting other teams in product development. Some of the projects I've done:
              <ul className="flex items-start flex-col mt-4 ">
                <li className="mt-3">
                  -The main website of the Company,
                </li>
                <li className="mt-3">
                  -Maika App,
                </li>
                <li className="mt-3">
                  -Maika Extension,
                </li>
                <li className="mt-3">
                  -Online room management
                </li>
              </ul>
            </span>
          </div>
        </div>
        <img src={chuky} alt="" className='w-[50%] mt-[5rem] ms-[10rem] ' />
      </div>
    </div >
  )
}

export default Content
