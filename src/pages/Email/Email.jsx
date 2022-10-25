import {React ,useState} from 'react'
import { Card } from '../../components/shared/Card/Card'
import { Button } from '../../components/shared/Button/Button'
import Textinput from '../../components/shared/Textinput/Textinput'
import Styles from '../../pages/Steps/StepPhoneEmail/StepPhoneEmail.module.css'


function Email(props) {
  const [EmailNumber, setEmailNumber] = useState('');
  return (
    <Card title="Enter Your Email" icon="email-white">
      <Textinput value={EmailNumber} onChange={(e) => setEmailNumber(e.target.value)} />
      <div>
        <div className={Styles.actionbtn}>
          <Button text="Next" icon="arrow-forward" onClick={props.onNext} />
        </div>
        <p className={Styles.btmp}>
          By entering your number ,you are agreeing to our Terms of Services and Privacy Policy  Thanks!
        </p>
      </div>
</Card>
  )
}

export default Email