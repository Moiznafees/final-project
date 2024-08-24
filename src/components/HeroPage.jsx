import { Link } from "react-router-dom"

const HeroPage=()=>{
    return(
        <div>
<section className="container text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="/img/nieuwe-apple-telefoons_large.jpg" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block" />readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Our mobile website delivers a seamless, user-friendly experience tailored for on-the-go access. Designed with a responsive layout, it adapts effortlessly to any screen size, ensuring that content is clear and accessible on smartphones and tablets alike. Navigation is intuitive and touch-optimized, with streamlined menus and fast loading times that keep you connected and engaged. Whether you're browsing products, reading articles, or interacting with features, our mobile site offers everything you need at your fingertips—convenient, efficient, and always available.</p>
      <div className="flex justify-center">
      <Link to={"/Product"}>  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button></Link>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default HeroPage