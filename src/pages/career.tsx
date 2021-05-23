import Image from 'next/image'

const Career: NextPage = () => {
  return (
    <>
      <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center py-16">
        <h1 className="font-bold text-3xl lg:text-4xl text-gray-800 uppercase">
          Career
        </h1>
        <div className="flex flex-col my-4 w-full">
          <div className="flex flex-col-reverse lg:flex-row my-8 lg:my-24 lg:items-center">
            <div className="flex-1">
              <div className="max-w-md flex flex-col">
                <h2 className="font-medium text-2xl">Web Developer</h2>

                <h3 className="text-gray-700 font-semibold mt-4">
                  Requirements:
                </h3>
                <ul className="text-gray-700 requirement-list">
                  <li>
                    Good knowledge with one or more framework such as Vue, React
                    or Angular
                  </li>
                  <li>
                    Previous experience with another language except for
                    Javascript/Typescript
                  </li>
                  <li>Good knowledge of NodeJS</li>
                  <li>
                    Ability to translate a visual design into HTML and styling
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="mailto:contact@oddbit.id?subject=[Career] Web Developer"
                    target="_blank"
                    className="bg-primary py-2 px-4 rounded text-gray-800 font-medium tracking-wide shadow-md focus:outline-none hover:bg-secondary hover:text-white"
                    rel="noreferrer"
                  >
                    Apply as Web Developer
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 mb-8 lg:mb-0">
              <span className="w-full">
                <Image
                  src="/images/web-developer.svg"
                  alt="Web developer career"
                  width="600"
                  height="426"
                  className="object-contain"
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse my-8 lg:my-24 lg:items-center">
            <div className="flex-1">
              <div className="max-w-md ml-auto">
                <h2 className="font-medium text-2xl">Mobile Developer</h2>
                <h3 className="text-gray-700 font-semibold mt-4">
                  Requirements:
                </h3>
                <ul className="text-gray-700 requirement-list">
                  <li>Good knowledge with at least one of iOS or Android</li>
                  <li>For iOS developers: good knowledge of Swift</li>
                  <li>For Android developers: experience with Kotlin</li>
                  <li>
                    Previous experience with a cross-platform framework such as
                    React Native or Flutter
                  </li>
                  <li>
                    Ability to translate a visual design into mobile layouts on
                    respective platform
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="mailto:contact@oddbit.id?subject=[Career] Mobile Developer"
                    target="_blank"
                    className="bg-primary py-2 px-4 rounded text-gray-800 font-medium tracking-wide shadow-md focus:outline-none hover:bg-secondary hover:text-white"
                    rel="noreferrer"
                  >
                    Apply as Mobile Developer
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 mb-8 lg:mb-0">
              <span className="w-full">
                <Image
                  src="/images/develop-app.svg"
                  alt="Mobile developer career"
                  width="600"
                  height="426"
                  className="object-contain"
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row my-8 lg:my-24 lg:items-center">
            <div className="flex-1">
              <div className="max-w-md">
                <h2 className="font-medium text-2xl">Internship/Part Time</h2>
                <p className="text-gray-700 leading-relaxed my-2">
                  Internships is temporary jobs that provide real-time work
                  experience, often for college students. provide other values
                  such as certificates, job recommendations, mentoring and
                  networking.
                </p>
                <p className="text-gray-700 leading-relaxed my-2">
                  Part Time is a job that has half of normal or full time
                  working hours. Part time jobs are temporary for certain
                  periods determined by the company.
                </p>
                <h3 className="text-gray-700 font-semibold mt-4">
                  Requirements: Depends on position you apply (Web or Mobile)
                </h3>
                <div className="mt-6 flex flex-col lg:flex-row">
                  <a
                    href="mailto:contact@oddbit.id?subject=[Career] Part Time Developer"
                    target="_blank"
                    className="bg-primary py-2 px-4 rounded text-gray-800 font-medium tracking-wide shadow-md focus:outline-none hover:bg-secondary hover:text-white lg:mr-2 mb-2 lg:mb-0"
                    rel="noreferrer"
                  >
                    Apply as Part Time
                  </a>
                  <a
                    href="mailto:contact@oddbit.id?subject=[Career] Internship"
                    target="_blank"
                    className="bg-primary py-2 px-4 rounded text-gray-800 font-medium tracking-wide shadow-md focus:outline-none hover:bg-secondary hover:text-white"
                    rel="noreferrer"
                  >
                    Apply Internship
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 mb-8 lg:mb-0">
              <span className="w-full">
                <Image
                  src="/images/work-time.svg"
                  alt="Web developer career"
                  width="600"
                  height="426"
                  className="object-contain"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .requirement-list li {
          margin: 4px 0;
        }

        .requirement-list li::before {
          content: '-';
          margin-right: 8px;
          margin-left: 8px;
        }
      `}</style>
    </>
  )
}

Career.pageTitle = 'Career'

export default Career
