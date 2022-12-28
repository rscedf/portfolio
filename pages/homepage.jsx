import ImageWhthSpace from '../src/components/layout/imageWithSpace'
import ImageIcon from '../src/components/layout/imageIcon'
import ImageProject from '../src/components/layout/imageProject'
import TextH1 from '../src/components/tipografia/h1'
import TextH3 from '../src/components/tipografia/h3'
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

      <TextH3>Meus Projetos</TextH3>
      <ImageProject>
        <Icon
          iconName="socialDevImage"
          sizeWhidt="200px"
          sizeHeight="150px"
          link="https://social-dev-seven.vercel.app/login"
        />
        <Icon
          iconName="jogoVelha"
          sizeWhidt="200px"
          sizeHeight="150px"
          link="https://react-jogo-da-velha-rho.vercel.app/"
        />
      </ImageProject>
    </>
  )
}

export default HomePage
