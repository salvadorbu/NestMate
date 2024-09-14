"use client";

import { useRedirectFunctions } from "@propelauth/nextjs/client";
import { Flex, UserMenu, SmartLink } from '@/once-ui/components';
import ProfilePicture from '../../assets/default.jpg';
import {useLogoutFunction} from "@propelauth/nextjs/client";
import { useRouter } from 'next/navigation';

interface NavbarProps {
  email: string;
  userId: string;
  loggedIn: boolean;
}

const Navbar = ({ loggedIn, email, userId }: NavbarProps) => {
  const { redirectToSignupPage, redirectToLoginPage } = useRedirectFunctions();
  const logoutFn = useLogoutFunction();
  const router = useRouter();

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
              { label: 'Profile', value: 'profile',  },
              { label: 'Log out', value: 'logout' },
            ]}
            dropdownProps={{
              onOptionSelect: (option) => {
                console.log('Selected option:', option);
                if (option.value === 'profile') {
                  router.push(`/profile/${userId}`);
                } else if (option.value === 'logout') {
                  logoutFn();
                }
              }
            }}
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
