import Image from 'next/image'
import Link from 'next/link'

const OurTeam = (): JSX.Element => {
  return (
    <section className="bg-gray-100 lg:py-12">
      <div className="container mx-auto px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row">
        <div className="flex-1 lg:pr-24">
          <h4 className="uppercase lg:mb-2 font-semibold tracking-widest text-red-500">
            We&apos;re hiring!
          </h4>
          <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
          <span className="border-b-2 border-gray-700 flex w-16 my-8"></span>
          <p className="text-gray-700 leading-relaxed">
            We are putting a lot of focus on individual&apos;s growth and team
            happiness. Our team is characterized by community building and
            supportive environment towards each other.
          </p>
          <Link href="/team">
            <button className="bg-primary py-2 px-4 rounded text-gray-800 capitalize font-medium tracking-wide mt-8 shadow-md focus:outline-none hover:bg-secondary hover:text-white mr-2">
              See our team
            </button>
          </Link>
          <Link href="/career">
            <button className="bg-primary py-2 px-4 rounded text-gray-800 capitalize font-medium tracking-wide mt-8 shadow-md focus:outline-none hover:bg-secondary hover:text-white">
              Join with us
            </button>
          </Link>
        </div>
        <div className="flex-1 mb-8 lg:mb-0">
          <div className="relative flex">
            <span className="flex rounded-lg overflow-hidden z-10 shadow-xl">
              <Image
                src="/images/team-oddbit.jpg"
                alt="Oddbit team"
                width="560"
                height="520"
                className="object-cover"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
