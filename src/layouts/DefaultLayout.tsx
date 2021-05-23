import { FC } from 'react'
import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'

const DefaultLayout: FC = ({ children }): JSX.Element => (
  <>
    <Navbar></Navbar>
    {children}
    <Footer></Footer>
  </>
)

export default DefaultLayout
