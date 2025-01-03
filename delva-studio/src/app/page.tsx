import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="styles.title"> Delva Studio</h1>
        
        

        
          
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
