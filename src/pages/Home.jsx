import React from 'react'
import '../global.css'
import { HomeHeader } from '../components/HomeHeader'
import { SocialsBar } from '../components/SocialsBar'
import { HomeProjects } from '../components/HomeProjects'
import { SkillsBar } from '../components/SkillsBar'
import { HomeAbout } from '../components/HomeAbout'

export const Home = () => {
  return (
    <div className='base'>
      <HomeHeader />
      <SocialsBar />
      <HomeProjects />
      <HomeAbout />
    </div>
  )
}
