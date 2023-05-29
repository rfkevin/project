import Image from 'next/image'
import styles from './basic-card.module.css'
import React from 'react'

type BasicCardProps = {
    title: string,
    note: 0 | 1 | 2 | 3 | 4 | 5,
    subtitle: string,
    raters: number
}


export const BasicCard = ({title, subtitle, note, raters}: BasicCardProps): JSX.Element => {

    const notes: boolean[] = []

    for(let i = 1; i <= 5; i++) notes.push(i <= note)
    return (
        <>
            <div className={styles.card}>
                <div style={{width: '300px', display: "flex", justifyContent: 'center', alignItems: 'center', height: '300px', background: '#eee', borderRadius: '10px'}}>
                    <Image width="250" height="250" src="/kitdistribution.png" alt="img" />
                    <button className={styles['heart-button']} style={{position: 'absolute', marginBottom: '225px', marginLeft: '225px'}}>
                    </button>
                </div>
                <div className={styles.description}>
                    <div>
                        <strong>{title}</strong>
                    </div>
                    <div>
                        <small style={{fontWeight: 600, color: '#888'}}>
                            {subtitle}
                        </small>
                    </div>
                    <div>
                        <small style={{color: '#229933'}}>
                            {notes.map((n, key) => <i key={key} className={`fa-${n ? 'solid' : 'regular'} fa-star`}></i>)}
                            &nbsp;
                            ({raters})
                        </small>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <button className={styles.button}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}