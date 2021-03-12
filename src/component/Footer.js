import React from 'react'
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footerhomew}>
              <footer className={styles.footer}>
          <section>
            <h2>
              <i className='fab fa-twitter'></i> Follow Me  
            </h2>
            <ul>
             
             
              <li>
                <a
                  href='https://twitter.com/iamEddynics'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @iamEddynics
                </a>
              </li>
             
            </ul>
          </section>
          <section>
            <h2>
              <i className='fab fa-twitter'></i> Contact  Me  
            </h2>
            <ul>
             
             
              <li>
                <a
                  href='https://gmail.com/osareniyeosazee'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  osareniyeosazee@gmail.com
                </a>
              </li>
              
              
            </ul>
          </section>
          </footer>
          </div>

    )
}
