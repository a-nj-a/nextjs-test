import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarDiv}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/who-we-are" className={styles.link}>
          Who we are{" "}
          <Image
            className={styles.stroke}
            src="/stroke.png"
            alt="stroke"
            width={10}
            height={6}
          />
        </Link>
        <Link href="/what-we-do" className={styles.link}>
          What we do{" "}
          <Image
            className={styles.stroke}
            src="/stroke.png"
            alt="stroke"
            width={10}
            height={6}
          />
        </Link>
        <Image src="/../public/Logo.png" alt="logo" width={105} height={30} />
        <Link href="/careers" className={styles.link}>
          Careers
        </Link>
        <Link href="/resources" className={styles.link}>
          Resources
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
