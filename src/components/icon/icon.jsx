function Icon({ iconName, size, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={`/${iconName}.jpg`} width={size} />
    </a>
  )
}

Icon.defaultProps = {
  size: '30px'
}

export default Icon
