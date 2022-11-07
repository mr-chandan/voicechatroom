import React, { useState } from "react";
import Styles from "../StepOtp/StepOtp.module.css";
import { Button } from "../../../components/shared/Button/Button";
import { Card } from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/Textinput/Textinput";
import { verifyOtp } from '../../../http'
import { useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

function StepOtp() {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.authSlice.otp)
  async function submit() {
    try {
      const { data } = await verifyOtp({ otp, phone, hash })
      console.log(data)
      dispatch(setAuth(data))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className={Styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={Styles.actionButtonWrap}>
            <Button onClick={submit} text="Next" />
          </div>
          <p className={Styles.bottomParagraph}>
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  );
}

export default StepOtp;
