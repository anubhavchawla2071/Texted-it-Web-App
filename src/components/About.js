import React from 'react'

export default function About(props) {
  return (
    <div>
        <h4 className='container text-center my-4' style={{color:props.theme==="light"? "black":"white"}}>Text editing app</h4>
        <ul style={{color:props.theme==="light"? "black":"white"}}>
          <li className='my-3'>Analyze your text :- Texted(it) gives you a way to analyse your text quickly and efficiently be it word count or character count</li>
          <li>Browser compatible :- This word counter software works in any web browser such as Chrome, Firefox, Safari. It suits to count characters in facebook, blogs, books, essays etc.</li>
        </ul>
    </div>
  )
}
