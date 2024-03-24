
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Footers from "../components/Footers";
import Navbar1 from "../components/Navbar";

const About = () => {
  return (
    <>
    <Navbar1/>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-5 text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</h1>
                <p className="text-2xl font-semibold leading-7 text-indigo-600">Learn more about who we are.</p>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                We were born out of necessity. We didn’t hire people to build machines. We built machines so that we could hire people. Harnessing our collective expertise to go further, at Komatsu we stay true to our brand promise: Creating value together.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/images/gambar1.jpg"
              alt="Tomatsu"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-indigo-600">Past, present and future – it’s all about community.</h2>
                <p className='text-1xl text-gray-700'>
                In 1921, Meitaro Takeuchi founded our company in the town that shares our name. He did so to provide work for the local community after the closure of a nearby copper mine.
                For more than a century, our connection to the communities where we operate has stayed at the core of our brand. It guides everything we do, from the ways we think about innovation, 
                to how we hire and train new employees around the world, and how we build relationships with our customers.
                </p>
                <br />
                <p>We explore and help advance the boundaries of technology, developing smart construction equipment and autonomous mining trucks, creating underwater electric bulldozers and even conceptualizing an excavator capable of operating on the moon. Our products and solutions directly support industries essential to the ongoing development of modern societies and everyday life.</p>
                <br />
                <p>For our core customers in forestry, construction and mining, we make big machines that take on even bigger challenges, gentle giants answering the needs of society.</p>
                <br />
                <p>We believe that when people are united by a common goal, the truly remarkable happens. In communities across the globe, we find purpose in creating value through manufacturing and technology innovation to empower a sustainable future where people, business, and our planet thrive together.</p>
                <br />
                <p>Harnessing our collective expertise to go further, we stay true to our brand promise:<span style={{ fontWeight: 'bold' }}>Creating value together.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  )
}

export default About;
