import Image from 'next/image'
import { CLIENTS } from 'src/constants/clients.constant'

const OurClients = (): JSX.Element => {
  return (
    <>
      <section className="py-4 bg-white">
        <div className="container px-6 lg:px-8 mx-auto flex flex-col items-center">
          <h2 className="text-sm font-medium text-gray-500 uppercase my-4 tracking-wider">
            Our outstanding clients
          </h2>
          <div className="flex items-center -mx-4 flex-col sm:flex-row">
            {CLIENTS.map((client) => (
              <span key={client.name} className="logo mx-4">
                <Image
                  src={client.image}
                  alt={client.name}
                  layout="intrinsic"
                  width="80"
                  height="80"
                  className="object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .logo {
          max-width: 80px;
          max-height: 80px;
        }
      `}</style>
    </>
  )
}

export default OurClients
