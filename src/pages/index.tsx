import Head from 'next/head';
import Image from 'next/image';

import { Container } from './../styles/pages/Home';
import EldHeader from '../components/EldHeader';
import EldFooter from '../components/EldFooter';

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Eldorado Gaming | Home</title>
      </Head>
      <EldHeader />
      <main>
        <section>
          <Image className='banner' alt='Time CS:GO Eldorado Gaming' src='/images/banners/main.svg' quality={100} unsized />
          <Image className='banner-mobile' alt='Eldorado Gaming Logo'  src='/images/logos/eldorado.svg' quality={100} height={200} width={200} />
        </section>
        <section>
          <div className='bar-container'>
            <div className='bar'></div>
          </div>
        </section>
      </main>
      <EldFooter />
    </Container>
  );
};

export default Home;
