import Head from 'next/head';
import Image from 'next/image';

import { Container } from './../styles/pages/Home';
import { Header } from './../styles/components/Header';
import { Footer } from './../styles/components/Footer';
import { Wrapper, FlexWrapper } from './../styles/components/Wrapper';

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Eldorado Gaming | Home</title>
      </Head>
      <Header>
        <FlexWrapper>
          <Image
            src="/images/logos/eldorado_colorful.svg"
            width={200}
            height={112}
            draggable={false}
          />
          <ul className="Menu">
            <li className="MenuOption">
              <a href="#">Home</a>
            </li>
            <li className="MenuOption">
              <a href="#">Sobre</a>
            </li>
            <li className="MenuOption">
              <a href="#">Times</a>
            </li>
            <li className="MenuOption">
              <a href="#">Participar</a>
            </li>
            <li className="MenuOption">
              <a href="#">Clube</a>
            </li>
            <li className="MenuOption Social">
              <a href="#">
                <img src="/images/social/twitter.png" />
              </a>
              <a href="#">
                <img src="/images/social/instagram.png" />
              </a>
              <a href="#">
                <img src="/images/social/discord.png" />
              </a>
            </li>
          </ul>
        </FlexWrapper>
      </Header>
      <main>
        {/* Section 1 */}
        <section className="Banners">
          <img src="/images/banners/main.png" alt="CSGO Eldorado Team" />
        </section>
        {/* Section 2 */}
        <section className="Sponsors">
          <div className="Sponsor">
            <img src="/images/sponsors/infostore.png" alt="Info Store" />
          </div>
          <div className="Sponsor">
            <img src="/images/sponsors/saraiva.jpg" alt="Saraiva" />
          </div>
          <div className="Sponsor">
            <img src="/images/sponsors/ge.png" alt="GloboEsporte" />
          </div>
        </section>
        <hr className="SectionSeparator"></hr>
        <section className="Blog">
          <div className="Left">
            <span className="Title">Campeonatos Previstos</span>
            <div className="Image">
              <a href="#"></a>
            </div>
          </div>
          <div className="Right">
            <span className="Title">Últimas Notícias</span>
            <div className="Image">
              <a href="#"></a>
            </div>
          </div>
        </section>
      </main>
      <Footer>
        <FlexWrapper>
          <div className="Left">
            <Image
              src="/images/logos/eldorado_bw_no_text.png"
              width={74}
              height={74}
              draggable={false}
            />
            <div className="Address">
              <span>Eldorado Gaming ME - CNPJ 24.394.107/0001-20</span>
              <span>R. Maria Soares Leitão, n.112, Parque Campolim</span>
              <span>CEP: 18047-690 Sorocaba/SP</span>
            </div>
          </div>
          <div className="Center"></div>
          <div className="Right"></div>
        </FlexWrapper>
      </Footer>
    </Container>
  );
};

export default Home;
