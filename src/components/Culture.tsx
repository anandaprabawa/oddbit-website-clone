import Image from 'next/image'
import { CULTURES } from 'src/constants/cultures.constant'

const Culture = (): JSX.Element => {
  return (
    <section className="lg:py-12">
      <div className="container mx-auto px-6 lg:px-8 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          <span className="italic font-light">Awesome</span> Culture
        </h2>
        <span className="w-10 border-b-2 border-gray-800 my-2"></span>
        <p className="max-w-lg text-center text-gray-700 leading-relaxed">
          We have extraordinary cultures to support us, make a better workflows
          and to be productive while working.
        </p>
        <div className="flex flex-wrap mt-16 lg:-mx-10">
          {CULTURES.map((culture) => (
            <div
              key={culture.name}
              className="flex flex-col lg:flex-row w-full lg:w-1/2 lg:px-10 box-border my-10 items-center"
            >
              <span className="w-40 mb-4 lg:mb-0">
                <Image
                  src={culture.image}
                  alt={culture.name}
                  width="256"
                  height="256"
                />
              </span>
              <div className="flex flex-col flex-1 lg:ml-6">
                <h4 className="font-semibold text-lg mb-1 capitalize text-center lg:text-left">
                  {culture.name}
                </h4>
                <p className="text-gray-700 leading-relaxed text-center lg:text-left">
                  {culture.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Culture
