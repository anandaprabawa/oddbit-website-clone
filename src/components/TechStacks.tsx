import Image from 'next/image'
import { TECH_STACKS } from 'src/constants/tech-stacks.constant'

const TechStacks = (): JSX.Element => {
  return (
    <section className="bg-gray-200 lg:py-12">
      <div className="container px-6 lg:px-8 mx-auto py-12 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Tech Stacks
        </h2>
        <p className="text-lg max-w-xl text-center mt-4 leading-relaxed text-gray-700">
          We strive to stay on the frontline of new standards and leading
          technologies. We will always adopt and evaluate new opportunities for
          your business needs.
        </p>
        <div className="flex justify-center flex-wrap -mx-4 mt-6 lg:mt-12">
          {TECH_STACKS.map((tech) => (
            <span key={tech.name} className="logo mx-5 lg:mx-10 my-8">
              <Image
                src={tech.logo}
                alt={tech.name}
                width="56"
                height="56"
                className="object-contain"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStacks
