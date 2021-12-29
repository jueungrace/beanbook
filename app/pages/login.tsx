import type { NextPage } from 'next';
import AuthLayout from './../components/authLayout';
import Head from 'next/head';
import LoginForm from '../components/loginform';
import styled from 'styled-components';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FixedAuthLayout = styled(AuthLayout)`
  height: 100vh;
`;

const Login: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get('token')) {
      router.push('/home')
    }
  })

  return (
    <FixedAuthLayout>
      <Head>
        <title>login</title>
      </Head>
      <LoginForm/>
    </FixedAuthLayout>
  )
}

export default Login;