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
        <Icon iconName="gitImage" link="https://github.com/rscedf" />
        <Icon iconName="likedinImage" link="https://github.com/rscedf" />
        <Icon iconName="whattsImage" link="https://wa.me/5554981206328" />
        <Icon iconName="emailImage" link="https://mail.google.com/mail/u/0/#inbox?compose=new" />
        <Icon iconName="curriculoImage" link="https://github.com/rscedf" />
      </ImageIcon>

      <TextH3>Meus Projetos</TextH3>
      <ImageProject>
        <Icon
          iconName="socialDevImage"
          size="300px"
          link="https://social-dev-seven.vercel.app/login"
        />
        <Icon
          iconName="jogoVelha"
          size="150px"
          link="https://react-jogo-da-velha-rho.vercel.app/"
        />
        <Icon iconName="whattsImage" link="https://github.com/rscedf" />
      </ImageProject>
    </>
  )
}

export default HomePage
