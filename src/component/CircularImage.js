import React from 'react'
import '../layout/styling/circularImage.css'


const CircularImage = ({unique}) => {
    return (
        <>

            <div className='circularImage d-flex flex-column '>
                <img src={`https://picsum.photos/200/20${unique}`} className="rounded-circle" alt="Image" />
                <p className='labelImage py-2 text-center font-weight-light'>Title</p>
            </div>
        </>
    )
}

export default CircularImage