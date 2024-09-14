"use client";

import { useRedirectFunctions } from "@propelauth/nextjs/client";
import { Flex, UserMenu, SmartLink } from '@/once-ui/components';
import ProfilePicture from '../../assets/default.jpg';

interface NavbarProps {
  email: string;
  loggedIn: boolean;
}

const Navbar = ({ loggedIn, email }: NavbarProps) => {
  const { redirectToSignupPage, redirectToLoginPage } = useRedirectFunctions();

  return (
    <Flex
      gap="24"
      padding="24"
      marginTop="4"
      marginLeft="8"
      marginRight="8"
      justifyContent="space-between"
      alignItems="center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'transparent'
      }}
    >
      <div style={{ flex: 1 }} />

      <h1 style={{ fontSize: '24px', color: '#fff', textAlign: 'center', flex: 2 }}>NestMates</h1>

      <Flex gap="16" alignItems="center" justifyContent="flex-end" style={{ flex: 1 }}>
        {loggedIn ? (
          <UserMenu
            name={email}
            subline={'Member'}
            tagProps={{
              label: 'Pro',
              variant: 'brand'
            }}
            avatarProps={{
              empty: false,
              src: ProfilePicture.src,
            }}
            dropdownOptions={[
              { label: 'Profile', value: 'profile' },
              { label: 'Log out', value: 'logout' }
            ]}
          />
        ) : (
          <>
            <SmartLink href="/" onClick={() => redirectToLoginPage()} iconSize="xs">
              Sign Up
            </SmartLink>
            <span style={{ color: '#fff' }}>/</span>
            <SmartLink href="/" onClick={() => redirectToSignupPage()} iconSize="xs">
              Sign In
            </SmartLink>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
