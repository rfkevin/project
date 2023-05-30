import Image from "next/image"
import styles from './logo.module.css'
import React from "react"

export const Logo = (): JSX.Element => {
    return (
        <>
            <a href="/" className={`${styles.a}`} >
                <Image className={`${styles.gear} ${styles.img}`} alt="logo" src="/gear.png" width={50} height={50} />
                <Image className={`${styles.img} ${styles.piston}`} alt="logo" src="/piston.png" width={50} height={50} />
                <h5>Detachezvous</h5>
            </a>
        </>
    )
}