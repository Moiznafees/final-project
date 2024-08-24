import { Link } from "react-router-dom"
import { IoLogIn } from "react-icons/io5";

const Navbar=()=>{
    return(
        <div>
        <header className="text-black-600 body-font font-bold">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link to={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link className="mr-5 hover:text-gray-900">Contact Us</Link>
      <Link className="mr-5 hover:text-gray-900">Services</Link>
      <Link className="hover:text-gray-900">Info</Link>
    </nav>
    <Link className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <img src="/img/logo2.jpg"className="w-20"></img>
      <span className="ml-3 text-xl font-bold"><span className="text-red-700">E</span>commerce</span>
    </Link>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
     <Link to={"/login"}> <button>
      <IoLogIn className=" w-10 h-10"/>
      </button></Link>
    </div>
  </div>
</header>

        </div>
    )
}

export default Navbar