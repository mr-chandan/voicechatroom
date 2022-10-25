import React, { useState } from "react";
import Styles from "../StepOtp/StepOtp.module.css";
import { Button } from "../../../components/shared/Button/Button";
import { Card } from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/Textinput/Textinput";

function StepOtp() {
  const [otp, setOtp] = useState("");
  function next() {
  }
  return (
    <>
      <div className={Styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={Styles.actionButtonWrap}>
            <Button onClick={next} text="Next" />
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
