import Link from "next/link";
import styles from  "./navbar.module.css"
const Navbar =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                logo
            </div>
            <div>
              <Link href ="/">Homepage</Link>
              <Link href ="/about">About</Link>
              <Link href ="/contact">Contact</Link>
              
            </div>
        </div>
    )
}
export default Navbar;
