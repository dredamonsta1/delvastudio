import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./navBar";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <a href="#home"><h1>Delva Studio</h1></a> */}
      <a href="#home">
        <h1 className="styles.title"> Delva Studio</h1>
      </a>
        <NavBar />
      <main className={styles.main}>
        
        

        
          
      </main>
      <footer className={styles.footer}>
        <a
          href="https://andrewilkinson.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          site created by Andrefullstack
        </a>
      </footer>
    </div>
  );
}
