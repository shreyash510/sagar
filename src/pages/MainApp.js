import React from 'react'
import Navbar from '../component/Navbar'
import CircularImage from '../component/CircularImage'
import MediaImage from '../component/mediaImage'
import '../layout/styling/circularImage.css'


const MainApp = () => {
    return (
        <>
            <Navbar />
            <MediaImage />
            <div className='d-flex px-3 overflow-auto circularImageMedia'>
                {
                    Array(10).fill(0).map((value, index) => {
                        return <div className='px-3'>
                            <CircularImage
                                key={`value${index}`}
                                unique={index}
                            />
                        </div>

                    })
                }

            </div>
        </>
    )
}

export default MainApp