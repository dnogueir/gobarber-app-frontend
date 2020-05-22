import React from 'react';

import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import {Container, Content, Background} from './styles';

import Button from '../../components/button';
import Input from '../../components/input';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarberLogo" />

            <form>
                <h1>Faça seu Login</h1>

                <Input name= "email" icon={FiMail} placeholder="E-mail"/>

                <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="login">
                <FiLogIn />
                Criar conta
            </a>

        </Content>

        <Background />
    </Container>
);

export default SignIn;
