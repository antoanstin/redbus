import React from 'react'
import BusNav from './BusNav/BusNav'
// import BusRoute from './BusRoute/BusRoute'
import Bus from './AllBus/Bus'


const Buses = () => {
  return (
    <div>
        <BusNav/>
        {/* <BusRoute/> */}
        <Bus/>
    </div>
  )
}

export default Buses