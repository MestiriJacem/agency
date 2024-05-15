import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const postCard =()=>{
return(
<div className={styles.container}>
    <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image  src="" alt='' fill  className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
    </div>
    <div className={styles.bottom}>
        <h1>Title</h1>
        <p>description </p>
        <Link href="/blog/post"> Read more</Link>
    </div>



</div>




)



}
export default postCard