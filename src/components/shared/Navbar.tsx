"use client";
import React from 'react';
import { Flex, UserMenu, SmartLink } from '@/once-ui/components';

interface NavbarProps {
  isLoggedIn: boolean;
  userName?: string;
  userRole?: string;
  avatarSrc?: string;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, userName, userRole, avatarSrc }) => {
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
        {isLoggedIn ? (
          <UserMenu
            name={userName || 'User'}
            subline={userRole || 'Member'}
            tagProps={{
              label: 'Pro',
              variant: 'brand'
            }}
            avatarProps={{
              empty: false,
              src: avatarSrc || '/images/default-avatar.png'
            }}
            dropdownOptions={[
              { label: 'Profile', value: 'profile' },
              { label: 'Settings', value: 'settings' },
              { dividerAfter: true, label: 'Ad manager', value: 'admanager' },
              { label: 'Log out', value: 'logout' }
            ]}
          />
        ) : (
          <>
            <SmartLink href="/sign-up" iconSize="xs">
              Sign Up
            </SmartLink>
            <span style={{ color: '#fff' }}>/</span>
            <SmartLink href="/sign-in" iconSize="xs">
              Sign In
            </SmartLink>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
