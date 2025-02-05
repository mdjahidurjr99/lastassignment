import React from 'react'
import Layout from '../component/layout/Layout'
import Service from './../component/service/Service';
import ServiceStore from './../store/ServiceStore';
import { useEffect } from 'react';

const ServicePage = () => {
  const {serviceListRequest} = ServiceStore();

  useEffect(()=>{
    (async () => {
      await serviceListRequest()
    })()
  }, [])
  return (
    <Layout>
        <Service/>
    </Layout>
  )
}

export default ServicePage