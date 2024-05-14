import styles from './contact.module.css'
import Image from 'next/image';
const Contact  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
          <Image 
          src="/contact.png"
          alt=""
          fill
          className={styles.img}
          
          
          />

            </div>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form}>
                        <input type="text" placeholder='Name and surname' />
                        <input type="text" placeholder='Email address' />
                        <input type="text" placeholder='Phone number' />
                        <textarea name="" id="" rows="10" cols="30">Message</textarea>
                        <button>Send</button>
                        
                    </form>


              

            </div>
        </div>
      );
}
 
export default Contact ;