import React, {useRef, useCallback} from 'react';

import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';

import * as Yup from 'yup';

import {useAuth} from '../../hooks/auth';
import {useToast} from '../../hooks/toast';


import getValidationErrors from '../../utils/getValidationErrors';

import {Container, Content, Background} from '../Signin/styles';

import Button from '../../components/button';
import Input from '../../components/input';

import logoImg from '../../assets/logo.svg';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const {signIn} = useAuth();
    const {addToast} = useToast();

    const handleSubmit = useCallback( async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            signIn({
                email: data.email,
                password: data.password
            });

        } catch(err) {
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
            }

            addToast({
                type: 'error',
                title: 'erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
            });

        }
    }, [signIn, addToast]);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarberLogo" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Login</h1>

                    <Input name= "email" icon={FiMail} placeholder="E-mail"/>

                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>

                <a href="login">
                    <FiLogIn />
                    Criar conta
                </a>

            </Content>

            <Background />
        </Container>
    );
}

export default SignIn;
