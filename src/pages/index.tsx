import React from 'react'
import Culture from 'src/components/Culture'
import OurClients from 'src/components/OurClients'
import OurServices from 'src/components/OurServices'
import OurTeam from 'src/components/OurTeam'
import TechStacks from 'src/components/TechStacks'
import Welcome from 'src/components/Welcome'

const Home: NextPage = () => (
  <>
    <Welcome></Welcome>
    <OurServices></OurServices>
    <OurClients></OurClients>
    <TechStacks></TechStacks>
    <OurTeam></OurTeam>
    <Culture></Culture>
  </>
)

export default Home
