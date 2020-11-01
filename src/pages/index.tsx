import Head from 'next/head';
import Image from 'next/image';

import { Container } from './../styles/pages/Home';

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Eldorado Gaming | Home</title>
      </Head>
      <main>
        <Image src='/images/logo.svg' width={400} height={400} draggable={false} />
        <h1>
          Caminho Para Eldorado
        </h1>
      </main>
      <footer>
        Eldorado Gaming Footer
      </footer>
    </Container>
  );
};

export default Home;
