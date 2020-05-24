import logo from '~/assets/Imgs/logo.png';
import logo2 from '~/assets/Imgs/logo2.png';

export const redeok = {
  body: '#F0F0F0',
  article: '#f0f0f5',
  box_shadow: '0 0 100px rgba(0,0,0,0.1)',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  svg: '#e02041',
  input: 'transparent',
  inputText: '#363537',
  border: '1px solid #000',
  span: 'rgba(255, 255, 255, 0.5)',
  over: 'rgba(0, 0, 0, 0.1)',
  formContainer: 'rgba(255,255,255)',
  hr: '0.1px solid rgba(0, 0, 0, 0.2)',
  logo,
  menuMain: {
    title: 'Consulta',
    image: require('~/assets/Imgs/search.png'),
    imageBackgroundHeader: require('~/assets/Imgs/Header.png'),
    imageBanner: require('~/assets/Banner/Logo_checkok.png'),
    imageBannerBackground: require('~/assets/Banner/banner.png'),
    itens: [
      {
        title: 'Cheques',
        router: 'cheques',
        icon: require('~/assets/Imgs/icon_cheque 1icon.png'),
      },
      {
        title: 'Crédito',
        router: 'credito',
        icon: require('~/assets/Imgs/lupa.png'),
      },
      {
        title: 'Comportamento',
        router: 'credito',
        icon: require('~/assets/Imgs/lupa.png'),
      },
      {
        title: 'Cadastro',
        router: 'credito',
        icon: require('~/assets/Imgs/lupa.png'),
      },
      {
        title: 'Veículo',
        router: 'credito',
        icon: require('~/assets/Imgs/lupa.png'),
      },
    ],
  },

  menuCheck: [
    {
      title: 'Ok Mix Total Top',
      router: 'm1',
      icon: 'icon1',
    },
    {
      title: 'Ok Credito Total',
      router: 'm1',
      icon: 'icon1',
    },
    {
      title: 'Ok Check',
      router: 'm1',
      icon: 'icon1',
    },
  ],
  menuCredit: [
    {
      title: 'Ok Empresarial Top',
      router: '/credito/empresatialtop',
      icon: '~/assets/Imgs/lupa.png',
    },
    {
      title: 'Ok Pessoal Top',
      router: '/credito/pessoaltop',
      icon: '~/assets/Imgs/lupa.png',
    },
    {
      title: 'Ok Mix Top',
      router: '/credito/mixto',
      icon: '~/assets/Imgs/lupa.png',
    },
    {
      title: 'Ok Crédito Top',
      router: '/credito/creditotop',
      icon: '~/assets/Imgs/lupa.png',
    },
    {
      title: 'Ok Crédito Light',
      router: '/credito/oklight',
      icon: '~/assets/Imgs/lupa.png',
    },
    {
      title: 'Ok BC',
      router: '/credito/bc',
      icon: '~/assets/Imgs/lupa.png',
    },
  ],
  menuBehavior: [
    {
      title: 'Ok Comport',
      router: '/comportamento/comport',
      icon: '',
    },
    {
      title: 'Ok Perfil Top',
      router: '/comportamento/perfiltop',
      icon: '',
    },
  ],
  menuRegister: [
    {
      title: 'Ok Localiza',
      router: '/cadastro/localiza',
      icon: '{ cadastro }',
    },
    {
      title: 'Ok Localiza + ',
      router: '/cadastro/localizaMais',
      icon: '{ cadastro }',
    },
    {
      title: 'Ok Confirma Pf',
      router: '/cadastro/confirmapf',
      icon: '{ cadastro }',
    },
    {
      title: 'Ok Confirma Pj',
      router: '/cadastro/confirmapj',
      icon: '{ cadastro }',
    },
  ],
  menuVehicles: [
    {
      title: 'OK Veículo Total',
      router: '/veiculo/veiculototal',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Veículo Essencial',
      router: '/veiculo/veiculoessencial',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Base Estadual',
      router: '/veiculo/veiculoestadual',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Base Nacional',
      router: '/veiculo/veiculonacional',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Roubo e Furto',
      router: '/veiculo/veiculorouboefurto',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Proprietários',
      router: '/veiculo/veiculoproprietarios',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Leilão',
      router: '/veiculo/leilao',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Gravame',
      router: '/veiculo/gravame',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Perda Total',
      router: '/veiculo/perdatotal',
      icon: '{ veiculo }',
    },
    {
      title: 'Ok Agregados',
      router: '/veiculo/agregados',
      icon: '{ veiculo }',
    },
  ],
};

export const darkTheme = {
  body: '#363537',
  article: '#2c2b2b',
  box_shadow: '0 0 60px rgba(255,255,255,0.1)',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  svg: '#ffff',
  input: 'transparent',
  inputText: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  span: '#fff',
  over: 'rgba(0, 0, 0, 0.5)',
  formContainer: 'rgba(0, 0, 0, 0.5)',
  hr: '0.1px solid rgba(255, 255, 255, 0.2)',
  logo: logo2,
};
