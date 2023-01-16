import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/" legacyBehavior>
        Home
      </Link>
      <Link href="/about" legacyBehavior>
        About
      </Link>
      <Link href="/contact" legacyBehavior>
        Contact
      </Link>
    </nav>
  );
};

export default SidebarLayout;
