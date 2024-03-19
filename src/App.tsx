import Content from "./content"
import Profile from "./profile"

function App() {
  return (
    <div className="homepage w-full h-full">
      <div className="navbar w-full h-[50px] lg:flex lg:justify-center items-center border-b-2 border-[#E1DBD1] md:hidden " >
        <span>
          <i className="fa-solid fa-envelope text-center " style={{ color: "#FF4979" }}></i>
          <i className="text-[#FF4979] ms-2 font-bold">thehien9299@gmail.com</i>
        </span>
        <span className="ms-14">
          <i className="fa-solid fa-phone" style={{ color: "#FF4979" }}></i>
          <i className="text-[#FF4979] ms-2 font-bold">0587605845</i>
        </span>
        <span className="ms-14">
          <i className="fa-brands fa-facebook" style={{ color: "#FF4979" }}></i>
          <a href="https://www.facebook.com/hien.the.56808995" target='_blank'>
            <i className="text-[#FF4979] ms-2 font-bold">https://www.facebook.com/hien.the</i>
          </a>
        </span>
      </div>
      <div className="profile  w-full h-full lg:flex">
        <Profile />
        <Content />
      </div>
    </div>
  )
}



export default App
