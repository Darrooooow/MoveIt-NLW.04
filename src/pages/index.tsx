import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

import { CompletedChanges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChanges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}

// JSX = A sintaxe de usar HTML dentro do JavaScript | JSX - JS=JAVASCRIPT - X=XML

/* function App() { // Isso é um componente que retorna JSX
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
} */

// Colocar a / no final em toda tag que não tem conteúdo

// Componentes são formas da gente conseguir isolar um pedaço de código, a fim de deixar um código mais legível e, também uma forma de reaproveitar código
// No React, não se pode ter vários componentes um de baixo do outro sem ter um elemento por volta; como por exemplo, uma div, que pode resolver o problema.
// Propriedades funcionam como atributos do HTML
// Toda vez que é passado algo dentro de um componente, o que tá dentro dele é 'children'; O 'children' também é uma propriedade
// Sempre se deve importar arquivo de estilização dentro do JavaScript, e não no HTML


// Toda vez que se usa chaves no meio desse código HTML, significa que ali está presente um código JavaScript
// No React, a estilização é passada na forma de um objeto no JavaScript; Um objeto também usa chaves, por isso, vai ficar duas chaves dentro

// No React, usamos className ao invés do class padrão do HTML, porque class é uma palavra reservada do JavaScript, porque definimos classes no JS com essa palavra, então só coloca um Name depois

/* Explicação de Estado no React
"Imagina que você queria armazenar uma informação dentro do Botão; uma informação que vai mudar ao longo do tempo da sua aplicação, por exemplo, algo que vá mudar de acordo com um clique de um usuário ou algo que eu vou buscar da API e vai demorar para retornar pra mim uma lista de produtos, lista de usuários ou qualquer coisa assim. Nesses casos, a gente vai utilizar o Estado, então imagina que dentro do botão, cada vez que eu clique nesse botão, imagina que tenha dentro dele" */

// React usa por baixos dos panos um conceito chamado Imutabilidade. A Imutabilidade é muito utilizada na programação funcional a fim de a gente conseguir comparar dois valores de uma variável de uma forma mais simples para conseguir entender o que mudou naquela variável para então o React conseguir exibir o novo valor dessa variável de uma forma mais simples

/* Context API (API de contextos do React)
  Contextos são formas da gente fazer comunicação entre vários componentes da aplicação;
  Um componente pode se comunicar com o outro (repassar informações para esse outro componente)
  Dessa explicação, na aplicação, será criada um contexto de desafios; Quando ter esse contexto de desafios, todos os componentes da aplicação vão poder criar um novo desafio, pegar um desafio que já tá ativo, saber quantos desafios a pessoa já completou. 
  Dentro desse contexto, é possível salvar as informações do level também ou também criar um contexto próprio para ele.
*/