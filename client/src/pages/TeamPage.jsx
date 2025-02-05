import React, { useEffect } from 'react'
import Layout from '../component/layout/Layout'
import Team from '../component/team/Team'
import TeamStore from '../store/TeamStore'

const TeamPage = () => {
    const {teamListRequest} = TeamStore()

    useEffect(()=>{
        (async()=>{
            await teamListRequest()
        })()
    },[])
  return (
    <Layout>
        <Team/>
    </Layout>
  )
}

export default TeamPage