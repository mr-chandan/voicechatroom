import React, { useState } from 'react'
// import styles from './Register.module.css'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'
import StepName from '../Steps/Stepname/Stepname'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
import StepUsername from '../Steps/StepUsername/StepUsername '
import { Button } from '../../components/shared/Button/Button'


const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername
};
export const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep((prev) => prev+1)
    }
    return (
        <div><Step />
            <Button onClick={onNext} /></div>
    )
}
