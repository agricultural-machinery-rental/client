import { Button, DesignType } from '@/components/UI/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Button label='Баттон' $designType={DesignType.Primary} />

      <div className={styles.grid}>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Тракторы <span>-&gt;</span>
          </h2>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Комбаины <span>-&gt;</span>
          </h2>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Сеялки <span>-&gt;</span>
          </h2>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Опрыскиватели <span>-&gt;</span>
          </h2>
        </a>
      </div>
    </main>
  );
}
