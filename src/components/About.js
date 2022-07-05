import React from 'react'

export default function About(props) {
  return (
    <div>
        <h4 className='container text-center my-4' style={{color:props.theme==="light"? "black":"white"}}>Text editing app</h4>
        <ul>
          <li>About page content</li>
        </ul>
    </div>
  )
}
