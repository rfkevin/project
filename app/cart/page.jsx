"use client"
import { Navbar } from '../components/Navbar/Navbar'
import { BasicCard } from '../components/Cards/BasicCard/BasicCard'
import styles from '../cart/page.module.css'

export default function Cart() {
  return (
    <main>
        <Navbar/>
        <div style={{padding:'20px', paddingTop: '90px',display: 'flex', alignItems: 'center',marginLeft: '100px'}}>
        <h1>Your Orders</h1>
       </div>
        <div style={{padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
            isOnCart={true}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
            isOnCart={true}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
            isOnCart={true}
          />
          <BasicCard title='Kit distribution Blablabla'
            subtitle='Pièces peugeot, 3008'
            note={3}
            raters={263}
            isOnCart={true}
          />
        </div>
        <div style={{padding:'20px', paddingTop: '90px',display: 'flex', alignItems: 'center',marginLeft: '100px'}}>
        <button className={styles.button}>
                            Passer au commande
                        </button>
        </div>
    </main>
  )
}