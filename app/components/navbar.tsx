import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from './button';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import { useMediaQuery } from "react-responsive";
import { stack as Menu } from 'react-burger-menu';
import { SettingFilled } from '@ant-design/icons';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 6fr 1fr 1fr .5fr 1fr;
  max-width: 100vw;
  
  a {
    font-family: Volkhov;
    text-decoration: none;
    color: #ded9d1;
  }

  .logo {
    font-size: 2em;
  }

  .right-nav {
    font-family: Inconsolata;
    justify-self: center;
    align-self: center;
    margin-right: 1em;
  }

  .right-nav:hover {
    font-weight: bold;
    transition: all ease-in-out .6s;
  }

  p.right-nav {
    margin-right: 0;
  }

  p.right-nav:hover {
    text-decoration: none;
  }

  icon {
    width: 20px
  }

  button {
    margin-left: .5rem;
  }
`;

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#252222'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '30px',
    width: '30px'
  },
  bmCross: {
    background: '#ded9d1',
    top: '15px',
    right: '15px',
    height: '25px',
    width: '5px'
  },
  bmMenuWrap: {
    position: 'fixed',
    width: '65%'
  },
  bmMenu: {
    background: '#252222',
    padding: '3em 1em 0',
    fontSize: '1.5em',
    width: '100%',
    overflow: 'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
    background: '#433f3c',
    marginBottom: '1em',
    padding: '0.5em',
    borderRadius: '0.5em',
  },
  bmOverlay: {
    background: 'rgba(	222, 217, 209, 0.3)',
  }
}

const NavBar: FunctionComponent = () => {
  const { signOut } = useAuth()

  const isMobile = useMediaQuery({ maxWidth: 600 });

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  }

  if (isMobile) 
    return (
        <Nav>
          <Link href="/home"  >
            <a className='logo' style={{ margin: '2rem 2rem' }}>beanbook</a>
          </Link>
          <Menu styles={styles} right>

            <a className='right-nav' href='/addbeans'>add bean</a>
        
            <a className='right-nav' href='/mybeans'>my beans</a>
        
            <a className='right-nav' href='/home'>settings</a>
        
            <a className='right-nav' onClick={handleSignOut} >logout</a>
          </Menu>
        </Nav>
    )

  return (
  <Nav style={{ margin: '2rem 2.5em' }} >
    <Link href="/home">
      <a className='logo'>beanbook</a>
    </Link>

    <Link href="/addbeans">
      <a className='right-nav'>add bean</a>
    </Link>

    <Link href="/mybeans">
      <a className='right-nav'>my beans</a>
    </Link>

    <Link href="/" >
      <a className='right-nav icon'><SettingFilled spin={true} style={{ fontSize: '20px' }}/></a>
    </Link>

    <Button 
      inverse='false'
      variant='primary' 
      onClick={handleSignOut} 
      whileHover={{ scale: 1.1 }}
    >
      <p className='right-nav'>logout</p>
    </Button>
  </Nav>
)}

export default NavBar;