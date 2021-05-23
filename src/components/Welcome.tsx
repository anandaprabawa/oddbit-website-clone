import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from 'src/constants/brand.constant'

const Welcome = (): JSX.Element => {
  return (
    <section className="overflow-hidden relative min-h-screen flex -mt-85 lg:-mt-80">
      <div className="container px-6 lg:px-8 mx-auto flex flex-col-reverse lg:flex-row justify-center py-85 lg:py-0">
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h1 className="text-xl leading-normal lg:leading-tight text-center lg:text-left lg:text-4xl font-semibold text-gray-800 mb-2 lg:mb-4">
            Looking for software developer team?
          </h1>
          <p className="lg:text-xl text-gray-700 leading-relaxed text-center lg:text-left">
            We are here to translate and realize your business needs into a
            technical solution.
          </p>
          <div className="flex justify-center lg:self-start">
            <Link href="#our-services">
              <button className="bg-primary py-2 px-4 rounded text-gray-800 capitalize font-medium tracking-wide mt-8 shadow-md focus:outline-none hover:bg-secondary hover:text-white">
                Let me show you
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex-1 flex items-center my-8 lg:my-0">
          <Image
            src="/images/in-sync.svg"
            alt={BRAND.name}
            width="768"
            height="768"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute right-0 left-0 bottom-0 lg:-mb-80 -z-1">
        <Image
          src="/images/wave.svg"
          alt="Wave"
          layout="responsive"
          width="300"
          height="67"
        />
      </div>
    </section>
  )
}

export default Welcome
