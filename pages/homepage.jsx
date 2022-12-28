import ImageWhthSpace from '../src/components/layout/imageWithSpace'
import ImageIcon from '../src/components/layout/imageIcon'
import ImageProject from '../src/components/layout/imageProject'
import Title from '../src/components/title/title'
import SubTitle from '../src/components/title/subTitle'
import Icon from '../src/components/icon/icon'

function HomePage() {
  return (
    <>
      <ImageWhthSpace>
        <Title>Rafael Silva Cardoso</Title>
      </ImageWhthSpace>
      <ImageIcon>
        <Icon iconName="gitImage" link="https://github.com/rscedf" />
        <Icon iconName="likedinImage" link="https://github.com/rscedf" />
        <Icon iconName="whattsImage" link="https://wa.me/5554981206328" />
        <Icon iconName="emailImage" link="https://mail.google.com/mail/u/0/#inbox?compose=new" />
        <Icon iconName="curriculoImage" link="https://github.com/rscedf" />
      </ImageIcon>

      <SubTitle>Meus Projetos</SubTitle>
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
