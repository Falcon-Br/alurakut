import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations';

function ProfileSidebar(propriedades){
  return(
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} styled={{ borderRadius: '8px'}} />
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`} >
          @{propriedades.githubUser}
        </a>
        <hr/>
      </p>

      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
const [comunidades, setComunidades] = React.useState([{
  id: '12378615684186',
  title: 'Eu odeio acordar cedo',
  image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
}]);

console.log('Nosso teste', comunidades)
const githubUser = 'Falcon-Br';
const pessoasFavoritas = [
  'gabrielfroes',
  'Lucasmontano',
  'Filipedeschamps',
  'DevMedia',
  'Alura', 
  'Marcobrunodev'
];

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser = {githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem vindo
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle" >O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e){
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              console.log(comunidadesAtualizadas)

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas);
              console.log(comunidades);
            }}>

              <div>
                  <input placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>

              <div>
                  <input placeholder="Coloque um URL para usarmos de Capa" 
                  name="image" 
                  aria-label="Coloque um URL para usarmos de Capa"
                  type="text"
                  />
              </div>

              <button>
                Criar comunidade
              </button>

            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <ul>
              {comunidades.map((itemAtual) => {
              return(
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
                )
              })}
          </ul>
        </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessas da Comunidades ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
              return(
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper> 

        </div>
      </MainGrid>
    </>
  )
}
