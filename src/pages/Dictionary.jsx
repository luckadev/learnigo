import React from 'react'
import SearchBar from '../partials/SearchBar'
import Card from '../partials/Card';

const Dictionary = () => {

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 py-8'>
      <SearchBar />
      <Card />
    </div>
  )
}

export default Dictionary;