import Image from 'next/image'
import Link from 'next/link'
import { TEAM_MEMBERS } from 'src/constants/team-members.constant'

const Team: NextPage = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center my-16">
      <div className="my-6 flex flex-col items-center">
        <h1 className="uppercase text-4xl font-bold tracking-wider text-gray-800">
          Our team
        </h1>
        <span className="border-b-2 border-primary w-10 my-2"></span>
        <p className="text-gray-800 text-lg font-light text-center">
          Our team based in Bali with remote team in Jakarta
        </p>
      </div>

      <div className="flex flex-wrap lg:-mx-8 mt-10">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center py-6 md:px-6 lg:p-8 text-center"
          >
            <span className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-1">
              <Image
                src={member.picture}
                alt={member.name}
                width="128"
                height="128"
                className="object-cover"
              />
            </span>
            <h4 className="font-bold">{member.name}</h4>
            <h5 className="font-light">{member.position}</h5>
            <span className="border-b border-gray-500 w-10 my-2"></span>
            <p className="text-gray-700 font-light">{member.description}</p>
          </div>
        ))}

        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center py-6 md:px-6 lg:p-8 text-center">
          <span className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-1">
            <Image
              src="/images/no-avatar.jpg"
              alt="Oddbit next team"
              width="128"
              height="128"
            />
          </span>
          <h4 className="font-bold capitalize">Are you the next?</h4>
          <Link href="/career">
            <a className="font-light text-secondary">Yes, I am</a>
          </Link>
          <span className="border-b border-gray-500 w-10 my-2"></span>
          <p className="text-gray-700 font-light">
            Be a part of our team and grow together.
          </p>
        </div>
      </div>
    </div>
  )
}

Team.pageTitle = 'Team'

export default Team
