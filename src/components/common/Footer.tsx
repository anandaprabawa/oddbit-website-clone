import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from 'src/constants/brand.constant'
import { NAVIGATION } from 'src/constants/navigation.constant'
import { SOCIAL_MEDIA } from 'src/constants/social-media.constant'
import Icon from './Icon'

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-900 pt-16 py-4">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center">
        <Link href="/">
          <a className="flex flex-col items-center">
            <span className="w-16">
              <Image
                src="/images/oddbit.svg"
                alt={BRAND.name}
                layout="responsive"
                width="256"
                height="256"
              />
            </span>
            <span className="font-bold text-primary uppercase text-xl">
              {BRAND.name}
            </span>
          </a>
        </Link>
        <nav className="my-4 flex flex-row flex-wrap justify-center">
          {NAVIGATION.items.map((item) => (
            <Link href={item.path} key={item.path}>
              <a className="text-sm tracking-widest text-white font-medium mx-2 lg:mx-4 first:ml-0 last:mr-0 uppercase my-1 lg:my-0">
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col text-white lg:items-center my-2 font-light">
          <a
            href="https://g.page/kembalihub?share"
            target="_blank"
            className="flex mb-2"
            rel="noreferrer"
          >
            <span className="flex-shrink-0">
              <Icon name="address"></Icon>
            </span>
            <span className="ml-2">{BRAND.address}</span>
          </a>
          <a
            href={`mailto:${BRAND.contactEmail}`}
            target="_blank"
            className="flex"
            rel="noreferrer"
          >
            <span className="flex-shrink-0">
              <Icon name="email"></Icon>
            </span>
            <span className="ml-2">{BRAND.contactEmail}</span>
          </a>
        </div>
        <div className="text-white flex flex-wrap justify-center socmed mt-4 -mx-4">
          {SOCIAL_MEDIA.items.map((item) => (
            <a
              href={item.url}
              key={item.icon}
              target="_blank"
              className="mx-4 my-1 lg:my-0"
              rel="noreferrer"
            >
              <Icon name={item.icon} width={32} height={32}></Icon>
            </a>
          ))}
        </div>
        <span className="border-b w-10 my-6"></span>
        <span className="text-white font-light">
          &copy; {BRAND.name}. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
