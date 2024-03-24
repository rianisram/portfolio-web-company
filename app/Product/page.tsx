import Footers from "../components/Footers";
import Navbar1 from "../components/Navbar";


const Service = () => {
    return (
      <>
      <Navbar1/>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-4xl">Product Collection</h2>
      
            <p className="mx-auto mt-4 max-w-md text-blue-900">
              We are proud to continue to make domestic products. <br />We are proud to continue to make domestic products. And continues to be committed to making quality products and a professional workforce.
            </p>
          </header>
      
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/03/komatsu-HD785-1.png"
                  alt="tomatsu1"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
      
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>
      
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
      
                    <span className="tracking-wider text-gray-900"> £24.0000 GBP </span>
                  </p>
                </div>
              </a>
            </li>
      
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/03/Bulldozer.png"
                  alt="tomatsu2"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
      
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>
      
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
      
                    <span className="tracking-wider text-gray-900"> £24.0000 GBP </span>
                  </p>
                </div>
              </a>
            </li>
      
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/03/komatsu-GD535-5-1.png"
                  alt="gambar3"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
      
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>
      
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
      
                    <span className="tracking-wider text-gray-900"> £24.0000 GBP </span>
                  </p>
                </div>
              </a>
            </li>
      
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/03/komatsu-PC210-1.png"
                  alt="gambar4"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
      
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>
      
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
      
                    <span className="tracking-wider text-gray-900"> £24.00000 GBP </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <Footers />
      </>
      );
    }
export default Service;