import Image from 'next/image'
import { SERVICES } from 'src/constants/services.constant'

const OurServices = (): JSX.Element => {
  return (
    <section id="our-services" className="lg:py-12 bg-gray-100">
      <div className="container px-6 lg:px-8 mx-auto py-12 flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
          <span className="border-b-2 lg:border-b-0 lg:border-r-2 border-gray-800 lg:mx-12 my-6 lg:my-0 w-16 lg:w-auto"></span>
          <p className="max-w-screen-md text-gray-700 leading-relaxed">
            Our team are experts in building solutions with Firebase. We help
            you to build your product fast and scalable. For other platforms and
            solutions, we can also be tailor make for your need to help you to
            find the right fit for your project.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row -mx-4 mt-12 lg:mt-24">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white mx-4 rounded-lg shadow-lg p-6 lg:p-10 flex flex-1 flex-col lg:flex-row mb-8 lg:mb-0 items-center"
            >
              <span className="w-40 lg:mr-10 mb-8 lg:mb-0 mt-6 lg:mt-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  width="512"
                  height="512"
                />
              </span>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-800 mb-2 text-center lg:text-left">
                  {service.title}
                </h4>
                <p className="leading-relaxed text-gray-700 text-center lg:text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
