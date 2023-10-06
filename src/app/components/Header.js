import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image
            src="/Color logo - no background.png"
            alt="logo"
            width={150}
            height={55}
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;