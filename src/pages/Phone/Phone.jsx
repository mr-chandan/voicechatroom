import React, { useState } from 'react'
import { Card } from '../../components/shared/Card/Card'
import { Button } from '../../components/shared/Button/Button'
import Textinput from '../../components/shared/Textinput/Textinput'
import Styles from '../../pages/Steps/StepPhoneEmail/StepPhoneEmail.module.css'
import { sendOtp } from '../../http/index'
import { useDispatch } from 'react-redux'
import { setOtp } from '../../store/authSlice'

function Phone(props) {
  const [phoneNumber, setphoneNumber] = useState('');
  const dispatch = useDispatch();

  async function submit() {
    const {data} = await sendOtp({ phone: phoneNumber });
    console.log(data);
    dispatch(setOtp({phone:data.phone,hash:data.hash}))
    props.onNext();
  }

  return (
    <Card title="Enter Your Phone Number" icon="phone">
      <Textinput value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
      <div>
        <div className={Styles.actionbtn}>
          <Button text="Next" icon="arrow-forward" onClick={submit} />
        </div>
        <p className={Styles.btmp}>
          By entering your number ,you are agreeing to our Terms of Services and Privacy Policy  Thanks!
        </p>
      </div>
    </Card>
  )
}

export default Phone