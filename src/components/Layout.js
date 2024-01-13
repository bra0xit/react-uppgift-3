import Header from './Header';
import Footer from './Footer';
import styles from '../app/page.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
                <div className={styles.description}>
                    {children}
                </div>
            <Footer className={styles.footerAdjustment} />
        </>
    );
}

export default Layout;