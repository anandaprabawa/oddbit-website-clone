import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BRAND } from 'src/constants/brand.constant'
import { NAVIGATION } from 'src/constants/navigation.constant'

const Navbar = (): JSX.Element => {
  const router = useRouter()

  const isActiveLink = (path: string) => {
    return router.pathname === path
  }

  return (
    <header className="container px-6 lg:px-8 mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center py-2 lg:py-4 sticky z-10 border-b border-gray-400 lg:border-b-0">
      <Link href="/">
        <a className="flex items-center my-1 lg:my-0">
          <span className="mr-2 w-8 lg:w-12">
            <Image
              src="/images/oddbit.svg"
              alt={BRAND.name}
              layout="responsive"
              width="256"
              height="256"
            />
          </span>
          <span className="text-primary text-lg lg:text-2xl font-bold uppercase">
            {BRAND.name}
          </span>
        </a>
      </Link>

      <nav className="nav lg:block self-center lg:self-center mt-1 lg:mt-0 -mx-2 flex flex-wrap justify-center">
        {NAVIGATION.items.map((item) => (
          <Link href={item.path} key={item.path}>
            <a
              className={`text-md tracking-wide text-gray-800 hover:text-primary font-medium mx-2 lg:mx-4 lg:first:ml-0 lg:last:mr-0 capitalize lg:uppercase ${
                isActiveLink(item.path) && 'text-primary'
              }`.trim()}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
