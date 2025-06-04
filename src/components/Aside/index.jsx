import styles from './Aside.module.css';
import logo from './logo.png';
import Image from 'next/image';

export const Aside = () => {
    return(
        <aside className={styles.aside}>
            <Image src={logo} alt="Logo do Code Connect" />
        </aside>
    )
}