import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
    const brandstyle ={
        color :'#fff',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'22px',
        display:'flex',
        alignItems:'center',
        gap:'10px'
    }
    return (
        <nav className={`${styles.navbar} container`}>
            <Link to='/' style={brandstyle}>
                <img src="/images/logo.png" alt='logo' />
                <span>CodersHouse</span>
            </Link>
        </nav>
    )
}
