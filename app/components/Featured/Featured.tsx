/* eslint-disable @next/next/no-img-element */
import styles from './featured.module.css'
import React from "react"

export const Featured = ({title, children, image}): JSX.Element => {
    return (
        <>
            <div style={{width: '100%'}} className={`${styles.bg}`}>
            <div className={`${styles.features}`}>
                <div className={`${styles.wrapper}`}>
                    <div>
                        <div className={`${styles.title}`}>
                            <h1>{title}</h1>
                        </div>
                        <p style={{
                            color: '#aaa', 
                            maxWidth: "450px",
                            overflow: 'hidden',
                            display: '-webkit-box',
                            lineClamp: 6,
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: 'vertical',
                            textAlign: 'start'
                        }}>{children}</p>
                    </div>
                    <div>
                        <img src={image} alt="pneu" />
                    </div>
               
                </div>
            </div>
            </div>
        </>
    )
}