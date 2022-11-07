import React from 'react'
import { useState } from 'react';
import Stepname from '../Steps/Stepname/Stepname';
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
const steps = {
  1: Stepname,
  2: StepAvatar,
};

const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1)
  }

  return <div className='cardWrapper'>
    <Step onNext={onNext}/>
  </div>

}

export default Activate