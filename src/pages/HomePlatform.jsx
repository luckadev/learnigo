import React, { useEffect, useState } from 'react'
import HeaderPlatform from '../partials/HeaderPlatform'
import HeroPlatform from '../partials/HeroPlatform'
import Loading from '../partials/Loading'

const HomePlatform = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);


  if(loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <HeaderPlatform />
      <HeroPlatform />
    </div>
  )
}

export default HomePlatform;