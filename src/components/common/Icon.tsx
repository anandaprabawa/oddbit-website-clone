import { FC } from 'react'
import AddressIcon from '../icons/AddressIcon'
import EmailIcon from '../icons/EmailIcon'
import FacebookIcon from '../icons/FacebookIcon'
import GithubIcon from '../icons/GithubIcon'
import InstagramIcon from '../icons/InstagramIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import MediumIcon from '../icons/MediumIcon'
import TwitterIcon from '../icons/TwitterIcon'

export type IconName =
  | 'address'
  | 'email'
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'github'
  | 'medium'
  | 'linkedin'

export interface IconDefinitionProps {
  width?: number
  height?: number
}

interface IconProps extends IconDefinitionProps {
  name: IconName
}

const Icon: FC<IconProps> = ({ name, ...rest }) => {
  return (
    <>
      {name === 'address' && <AddressIcon {...rest}></AddressIcon>}
      {name === 'email' && <EmailIcon {...rest}></EmailIcon>}
      {name === 'facebook' && <FacebookIcon {...rest}></FacebookIcon>}
      {name === 'github' && <GithubIcon {...rest}></GithubIcon>}
      {name === 'instagram' && <InstagramIcon {...rest}></InstagramIcon>}
      {name === 'linkedin' && <LinkedinIcon {...rest}></LinkedinIcon>}
      {name === 'medium' && <MediumIcon {...rest}></MediumIcon>}
      {name === 'twitter' && <TwitterIcon {...rest}></TwitterIcon>}
    </>
  )
}

export default Icon
