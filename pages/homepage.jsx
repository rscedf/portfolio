import ImageWhthSpace from '../src/components/layout/imageWithSpace'
import ImageIcon from '../src/components/layout/imageIcon'
import ImageProject from '../src/components/layout/imageProject'
import MyData from '../src/components/layout/myData'
import Container from '../src/components/layout/container'
import ContainerColumn from '../src/components/layout/containerColumn'
import TextH1 from '../src/components/tipografia/h1'
import TextH2 from '../src/components/tipografia/h1'
import TextH3 from '../src/components/tipografia/h3'
import Paragrafo from '../src/components/tipografia/paragrafo'
import Icon from '../src/components/icon/icon'

function HomePage() {
  return (
    <>
      <ImageWhthSpace>
        <TextH1>Rafael Silva Cardoso</TextH1>
      </ImageWhthSpace>
      <ImageIcon>
        <Icon
          iconName="gitImage"
          sizeWhidt="30px"
          sizeHeight="25px"
          link="https://github.com/rscedf"
        />
        <Icon
          iconName="likedinImage"
          sizeWhidt="30px"
          sizeHeight="25px"
          link="https://github.com/rscedf"
        />
        <Icon
          iconName="whattsImage"
          sizeWhidt="30px"
          sizeHeight="25px"
          link="https://wa.me/5554981206328"
        />
        <Icon
          iconName="emailImage"
          sizeWhidt="30px"
          sizeHeight="25px"
          link="https://mail.google.com/mail/u/0/#inbox?compose=new"
        />
        <Icon
          iconName="curriculoImage"
          sizeWhidt="30px"
          sizeHeight="25px"
          link="https://github.com/rscedf"
        />
      </ImageIcon>
      <Container>
        <TextH2>Meus Projetos</TextH2>
        <TextH2>Meus Dados</TextH2>
      </Container>

      <Container>
        <ImageProject>
          <ContainerColumn>
            <Icon
              iconName="socialDevImage"
              sizeWhidt="200px"
              sizeHeight="150px"
              link="https://social-dev-seven.vercel.app/login"
            />
            <Paragrafo>social dev é uma rede social criada duranteo curso</Paragrafo>
          </ContainerColumn>
          <ContainerColumn>
            <Icon
              iconName="jogoVelha"
              sizeWhidt="200px"
              sizeHeight="150px"
              link="https://react-jogo-da-velha-rho.vercel.app/"
            />
            <Paragrafo>jogo da velha foi criado duranteo curso</Paragrafo>
          </ContainerColumn>
        </ImageProject>

        <MyData>
          <ContainerColumn>
            <TextH3>Nome: Rafael Silva Cardoso</TextH3>
            <TextH3>Nome: Rafael Silva Cardoso</TextH3>
            <TextH3>Nome: Rafael Silva Cardoso</TextH3>
          </ContainerColumn>
        </MyData>
      </Container>
    </>
  )
}

export default HomePage
