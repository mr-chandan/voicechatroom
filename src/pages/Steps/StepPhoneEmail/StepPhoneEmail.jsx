import React, { useState } from 'react'
import Phone from '../../Phone/Phone'
import Email from '../../Email/Email'
import Styles from '../StepPhoneEmail/StepPhoneEmail.module.css'

const phoneEmailMap = {
  Phone: Phone,
  Email: Email,
};

const StepPhoneEmail = (props) => {
  const [type, settype] = useState('Phone');
  const Component = phoneEmailMap[type];
  return (
    <>
      <div className={Styles.cardwrapper}>
        <div>
          <div className={Styles.buttonWrap}>
            <button className={`${Styles.tabbutton} ${type === 'Phone' ? Styles.active : ''}`}
              onClick={() => { settype('Phone') }}>
              <img src='/images/phone-white.png' alt='phone' />
            </button>
            <button className={`${Styles.tabbutton} ${type === 'Email' ? Styles.active : ''}`}
              onClick={() => { settype('Email') }}>
              <img src='/images/email-white.png' alt='phone' />
            </button>
          </div>
          <Component onNext={props.onNext} />
        </div>
      </div>
    </>
  )
}

export default StepPhoneEmail;