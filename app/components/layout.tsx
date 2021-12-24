import React, { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './navbar';
import Footer from './footer';
import styled from 'styled-components';

const Container = styled.div`
    display flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    align-items: stretch
`;

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'beanbook' }: Props) => (
    <Container>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
         <NavBar />
        </header>
        <main>
            {children}
        </main>
        <Footer/>
    </Container>
)

export default Layout