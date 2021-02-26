import '../styles/global.css';

import { ChallengesContex } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider value={'teste'}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp

// O 'Provider' faz com que todos os elementos dentro do Provider vão ter acesso aos dados daquele contexto (todos os dados que forem armazenados dentro do contexto)
// Toda a aplicação pode ter acesso a esse arquivo intitulado de '_app.tsx', ele fica em volta de toda a aplicação, ou seja, toda a aplicação vai poder ter acesso aos dados dos meus contextos de challenges
// Todos os elementos dentro do Provider, vão ter acesso aos dados armazenados daquele contexto