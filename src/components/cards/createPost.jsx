import { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import { createPostSchema } from '../../../modules/post/post.schema'

import H4 from '../tipografia/H4'
import ControlledTextArea from '../inputs/controlledTextArea'
import Button from '../inputs/button'
import { trace } from 'joi'

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 20px 40px;
`
const Title = styled.div`
  font-weight: bold;
  text-align: center;
`

const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`
const BottonContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 5px;
  }
`
const BottonText = styled.p`
  flex: 1;
`

function CreatePost() {
  return (
    <PostContainer>
      <TextH2>Entre em Contato</TextH2>
        <TextH3>Digite seu Nome:</TextH3>
        <Input placeholder="Nome" type="text" />
        <TextH3>Digite seu email:</TextH3>
        <Input placeholder="email" type="email" />
        <TextH3>Deixe sua mensagem:</TextH3>
        <Textarea placeholder="mensagem" type="text" />
        <Button />
    </PostContainer>
  )
}

export default CreatePost
