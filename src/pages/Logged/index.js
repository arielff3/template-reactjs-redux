import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

// Components
import NavBar from '~/components/NavBar';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import Functionalities from '~/components/Functionalities';
import BackToTop from '~/components/BackToTop';

import { redeok } from '~/theme/theme';
import CreateMenu from '~/components/CreateMenu';

export default function Logged() {
  const {
    user: { apelido, genero },
  } = useSelector(state => state.auth);
  const sexo = genero === 'M' ? 'DO' : 'DA';
  const welcome = genero === 'M' ? 'bem vindo!' : 'bem vinda';

  return (
    <>
      <Helmet title="Área Logada da Ale" />
      <BackToTop />
      <NavBar />
      <Header
        bg={redeok.menuMain.imageBackgroundHeader}
        title={`Área  ${sexo} ${apelido}`}
        smallText={`Seja ${welcome}`}
      />
      <CreateMenu container={redeok.menuMain} />
      <Functionalities />
      <Banner
        img={redeok.menuMain.imageBanner}
        bg={redeok.menuMain.imageBannerBackground}
        alt="Banner RedeOK"
      />
      <Footer />
    </>
  );
}
