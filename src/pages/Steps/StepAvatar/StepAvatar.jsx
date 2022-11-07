import React, { useState } from 'react'
import { Card } from '../../../components/shared/Card/Card';
import { Button } from '../../../components/shared/Button/Button';
import Styles from "../StepAvatar/StepAvatar.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setavatar } from '../../../store/activateSlice';
import { activate } from '../../../http';


function StepAvatar() {
  const [image, setimage] = useState('/images/monkey-avatar.png');
  const { name,avatar} = useSelector((state) => state.activateSlice)
  const dispatch = useDispatch();

  async function submit() { 
    try{
     const {data} = activate({name,avatar});
     console.log(data)
    }catch{
      console.log("error")
    }
  }

  function captureimg(e){
    console.log(e)
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(){
      setimage(reader.result);
      dispatch(setavatar(reader.result));
      console.log(reader.result)
    }
  }
  return (
    <>
      <div className={Styles.cardWrapper}>
        <Card title={`Okay , ${name}`} icon="monkey-emoji">
          <p className={Styles.subHeading}> How,s this photo?</p>
          <div className={Styles.avatarWrapper}>
            <img className={Styles.avatar} src={image} alt="avatar" />
          </div>
          <div>
            <input 
            onChange={captureimg} type="file" className={Styles.avatarinput} id="avatarinput" />
            <label htmlFor='avatarinput' className={Styles.avatarlaber}>Choose a different image</label>
          </div>
          <div className={Styles.actionButtonWrap}>
            <Button onClick={submit} text="Next" />
          </div>
        </Card>
      </div>
    </>
  )
}

export default StepAvatar