import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Image
          width={100}
          height={50}
          alt="qwe"
          src="https://yandex-images.clstorage.net/9GIx83k50/d12552Yj3k/gmPOxsJ-V-ErSl6Zd_8VrmosNEGAHPeuMx1IEQPaqxYKSbbvCRSI9KKOyYX8t5IONDqijZIgWkHYytp61yx0qMU3iJKHOUihKVgDlDv4HKp1ZykClV7uqjRERBA9tdpneCbIhSNj942919-Tv4z9FmgZvqKXbnoooImcHfQXa9aDT_7I93QP_TdqI5V65TijX1ccaIFR5tgWHTdsMaH0dmIj6YQQYcapscSYrpqqwWN1GoexpVlxJIWZuzr-FHTzl0zb7cBAKfwFdCOkR8cmn1pkDlCXVOrAKis6SQ2963JSH8WnL2DrsrzSh7eQt_dzdR2Ts7RaSSekiass9Dl0xJVM-cjGYjziDFUAuHfTN4RWWxNnpV_HyBQRJkY4peJTbC7upDhR7Iau2qGArLLVeEsPj5ywZnQ1ppG8De8XZvKBacPgw24c7jlAAJFh1CmaRkY1bJxkzP84ISBVMI7SZ14O85InXNuwqcWlqb6cwUFnHa-iq2V1A6WTnTrXO2LRm2vq0eFUE9glSj61edADqVdmDHWdfdn6DzI6SiOa_mN2GsGyLm_2p73ek6-jivJZeR-eibJ6TxqIi58jwwNx_axX7MLmaiDPIkwBh2PbPZFCdgNigkXRwRghG2UJgsJnQgP2myhr0pei_JyQuZ_jQ0Y9noqmcm4zmb--IeI6W82waPvJ9GA--A1gOJFR-DSxamwsSL1l7MQKNz9ZIYbZXk0d9JotbumliPuchbyky1JlOoWRtHJrOIa5vCz6PmPvgVXy4NRJFcMiaBaabNgLs2JEG3CGdPzgDDU-dyOs12JNPumyHWzysKH4l4OPp-tucj2jnJp8WxWLopYlwzhR5qF23OLkeBjqK2kKsFzrCL18YC5slmv32js7L3kRuNVodDrlnzhzyK-K5Z-MkLXTTEkLkrGWcE8SprebIO85c_GjbOzT1H0V2hx3J6N89CubR1IycqZrxNwQFy9kI6w"
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
