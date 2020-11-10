import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../styles/components/Header';

const EldHeader = () => {
  return (
    <Header>
      <div className='header-container'>
        <div className='logo-social-box'>
          <Link href='/'>
            <a>
              <Image src='/images/logos/eldorado.svg' alt='Eldorado Logo' draggable={false} width={82} height={100} />
            </a>
          </Link>
          <div className='social'>
            <ul>
              <li>
                <a href='https://www.twitter.com/eldorado_gg' target='_blank'>
                  <Image src='/images/social/twitter.svg' alt='Twitter' draggable={false} width={29} height={24} />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/eldorado_gg' target='_blank'>
                  <Image src='/images/social/instagram.svg' alt='Instagram' draggable={false} width={24} height={25} />
                </a>
              </li>
              <li>
                <a href='https://discord.gg/ty2tRsRHVD' target='_blank'>
                  <Image src='/images/social/discord.svg' alt='Discord' draggable={false} width={22} height={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link href='/'>
                <a>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/sobre'>
                <a>
                  Sobre
                </a>
              </Link>
            </li>
            <li>
              <Link href='/times'>
                <a>
                  Times
                </a>
              </Link>
            </li>
            <li>
              <Link href='/participar'>
                <a>
                  Participar
                </a>
              </Link>
            </li>
            <li>
              <Link href='/clube'>
                <a>
                  Clube
                </a>
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </Header>
  );
};

export default EldHeader;
