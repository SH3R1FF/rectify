import React from 'react'

export default function About(props) {
  return (
    <>
    <div className="txtcontainer">
        <h1 className='h-one'>{props.heading}</h1>
        <div className='aboutarea'>
          RECTIFY is React based website for manipulating the Text using various Utilities.
        </div>
    </div>
    </>
  )
}
