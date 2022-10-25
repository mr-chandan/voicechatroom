import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from '../../components/shared/Card/Card'
import { Button } from '../../components/shared/Button/Button'


export const Home = () => {
    const signinlink = {
        color: "#0077ff",
        fontWeight: "bold",
        textDecoration: "none",
        marginLeft: "10px"
    }
    let navigate = useNavigate();
    function start() {
        navigate("/authenticate");
    }

    return <div className={styles.cardwrapper}>
        <Card title="Welcome to Codereshouse !!" icon="logo">
            <p className={styles.text}>
                We’re working hard to get Codershouse ready for everyone!
                While we wrap up the finishing youches, we’re adding people
                gradually to make sure nothing breaks
            </p>
            <div>
                <Button text="Lets Go" icon="arrow-forward" onClick={start} />
                <div className={styles.signin}>
                    <span className={styles.signintext}>Have an invite?</span>
                </div>
            </div>
        </Card>
    </div>
}

