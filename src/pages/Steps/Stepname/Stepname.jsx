import React, { useState } from 'react'
import { Card } from '../../../components/shared/Card/Card';
import { Button } from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/Textinput/Textinput';
import Styles from "../Stepname/Stepname.module.css";
import { useDispatch, useSelector  } from 'react-redux'
import { setname } from '../../../store/activateSlice';

function Stepname(props) {
  const { name } = useSelector((state) => state.activateSlice);
  const [fullname, setfullname] = useState(name);
  const dispatch = useDispatch();
  function nextStep() {
    if (!fullname) {
      return;
    }
    dispatch(setname(fullname))
    props.onNext();
  }
  return (
    <>
      <div className={Styles.cardWrapper}>
        <Card title="What is your full name ?" icon="goggle-emoji">
          <TextInput value={fullname} onChange={(e) => setfullname(e.target.value)} />
          <p className={Styles.Paragraph}>
            People use real names at codershouse
          </p>
          <div className={Styles.actionButtonWrap}>
            <Button onClick={nextStep} text="Next" />
          </div>
        </Card>
      </div>
    </>
  );
}


export default Stepname