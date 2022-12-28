function Icon({ iconName, sizeWhidt, sizeHeight, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={`/${iconName}.jpg`} width={sizeWhidt} height={sizeHeight} />
    </a>
  )
}

Icon.defaultProps = {
  size: '30px'
}

export default Icon
