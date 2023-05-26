import react from "react"
import "tailwindcss"
import styles from "./foot.module.css"


 function Footer() {


  return (

    <>
      <div style={{ padding: '20px', display: 'flex' }}>
        <div className={`flex-1 ${styles.row}`}>
          <div className="w-1/3">
            <h3>À propos de nous</h3>
            <p>Nous sommes une Boutique spécialisée dans la vente de pièces automobiles de qualité.</p>
              <p> Nous sommes fiers de fournir des produits de qualité supérieure et un service client exceptionnel à tous nos clients.</p>
          </div>
          <div className={`${styles.ft}`}>
            <h3>Contactez-nous</h3>
            <p><i className="fas fa-phone"></i> 01 23 45 67 89</p>
            <p><i className="fas fa-envelope"></i> detachezvous@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 74bis avenue Maurice Thorez
              94200 Ivry-sur-Seine</p>
          </div>
          <div className="col-md-4">
            <h3>Suivez-nous</h3>
           
            <ul className="social-media">
              <li><a href="#" className={styles.socialMediaLink}><img src="/facebook.svg" alt="fb"></img></a></li>
              <li><a href="#" className={styles.socialMediaLink}><img src="/twitter.svg" alt="twit"></img></a></li>
              <li><a href="#" className={styles.socialMediaLink}><img src="/instagram.svg" alt='insta'></img></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

  export default Footer;
  
   