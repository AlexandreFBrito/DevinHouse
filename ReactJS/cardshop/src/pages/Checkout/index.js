import React, { useState } from 'react';
import Input from '../../components/Input';
import Container from '../../components/Container';
import Textarea from '../../components/Textarea';
import { Form } from './style';
import Select from '../../components/Select';
import DatePicker from 'react-datepicker';


function Checkout() {
  const [color, setColor] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comentario, setComentario] = useState('');
  const [erros, setErrors] = useState({});


  function handleSubmit(event) {
    event.preventDefault()

    let currentErrors = {};

    if (!email) {
      currentErrors.email = 'Email é obrigatório';
    }

    if (!password) {
      currentErrors.senha = 'Senha é obrigatória';
    }

    setErrors(currentErrors);

  }

  return (

    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          label='Email'
          type={'text'}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          placeholder='Digite seu email'
          errorMessage={erros.email}


        />

        <Input
          label='Senha'
          type={'password'}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          placeholder='Digite sua senha'
          errorMessage={erros.senha}
        />

        <Textarea
          label='Comentário'
          type={'textarea'}
          value={comentario}
          onChange={(event) => {
            setComentario(event.target.value)
          }}
          errorMessage={erros.senha}
        />
        {color}
        <Select
          label="Qual sua cor favorita"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          description="Escolha sua cor favorita"
          options={
            [{
              label: 'Vermelho',
              vaule: 'red'
            },
            {
              label: 'Azul',
              vaule: 'blue'
            },
            {
              label: 'Branco',
              vaule: 'white'
            }]
          }
        />
        <DatePicker
          selected=''
          onSelect=''
          onChange=''
        />
        <button type='submit'>Salvar</button>
      </Form>
    </Container>

  );
}

export default Checkout;