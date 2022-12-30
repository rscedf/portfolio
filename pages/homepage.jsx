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
import Input from '../src/components/inputs/input'
import Textarea from '../src/components/inputs/textArea'

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
        <ImageProject>
          <ContainerColumn>
            <TextH2>Meus Projetos</TextH2>
            <TextH1></TextH1>
            <Icon
              iconName="socialDevImage"
              sizeWhidt="200px"
              sizeHeight="150px"
              link="https://social-dev-seven.vercel.app/login"
            />
            <Paragrafo>social dev é uma rede social criada duranteo curso</Paragrafo>
          </ContainerColumn>
          <ContainerColumn>
            <TextH1></TextH1>
            <TextH1></TextH1>
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
            <TextH2>Meus Dados</TextH2>
            <TextH3>Nome: Rafael Silva Cardoso</TextH3>
            <TextH3>Idade: 45 anos</TextH3>
            <TextH3>
              Formação: Superior de Tecnologia em Análise e Desenvolvimento de Sistemas.
            </TextH3>
            <TextH3>
              Objetivos: Trabalhar na área de desenvolvimento Front-end, Back-end e Full stack.
            </TextH3>
            <ImageIcon>
              <img src={'react.jpg'} alt="React" width={'30px'} height={'25px'} />
              <img src={'node.jpg'} alt="Node" width={'30px'} height={'25px'} />
              <img src={'javascript.jpg'} alt="Javascript" width={'30px'} height={'25px'} />
            </ImageIcon>
          </ContainerColumn>
        </MyData>
      </Container>

      <ContainerColumn>
        <TextH2>Entre em Contato</TextH2>
        <TextH3>Digite seu Nome:</TextH3>
        <Input placeholder="Nome" type="text" />
        <TextH3>Digite seu email:</TextH3>
        <Input placeholder="email" type="email" />
        <TextH3>Deixe sua mensagem:</TextH3>
        <Textarea placeholder="mensagem" type="text" />
      </ContainerColumn>
    </>
  )
}

export default HomePage
