import React from 'react'
import Styles from '../Textinput/Textinput.module.css'

const Textinput = (props) => {
  return (
    <div>
        <input className={Styles.input} type="text" {...props}/>
    </div>
  )
}

export default Textinput