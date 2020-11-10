import { Footer } from '../styles/components/Footer';
import Image from 'next/image';
import ArrowUp from '../assets/icons/arrow-up.svg';

const EldFooter = () => {
  return (
    <Footer>
      <div className='footer-container'>
        <div className='address'>
          <Image src='/images/logos/eldorado-bw.svg' height='74' width='74' />
        </div>
        <div className='contact'>
          <ul>
            <li>Atendimento</li>
            <li><a href='mailto:contato@eldoradogaming.com.br'>contato@eldoradogaming.com.br</a></li>
            <li>Segunda à Sexta das 08:00 às 19:00</li>
          </ul>
        </div>
        <div className='back-top'>
          <div className='circle'>
            <ArrowUp />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default EldFooter;
