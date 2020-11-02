import Link from 'next/link';
import { Container } from './../styles/pages/404';

const Custom404 = () => {
  return(
    <Container>
      <h1>404 - Caminho para Eldorado não encontrado :(</h1>
      <h3>Voltar para o <Link href='/'><a>início</a></Link></h3>
    </Container>
  );
};

export default Custom404;
