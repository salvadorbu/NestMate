import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import testProperty from '../../assets/testProperty.png';


import {
    Heading,
    Text,
    Flex,
    Button,
    Background,
    RevealFx,
    AvatarGroup,
    Grid,
} from '@/once-ui/components';
import {getUserOrRedirect} from "@propelauth/nextjs/server/app-router";

const PropertyCard = () => (
  <Flex
    direction="column"
    background="neutral-weak"
    style={{ borderRadius: 'var(--radius-xl)', height: '400px', width: '100%' }}
    overflow="hidden"
  >
    <div style={{ 
      borderTopLeftRadius: 'var(--radius-xl)', 
      borderTopRightRadius: 'var(--radius-xl)', 
      overflow: 'hidden',
      height: '75%'
    }}>
      <Image 
        src={testProperty.src}
        alt="Property 1" 
        width={400} 
        height={300} 
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
    <Flex 
      direction="column" 
      padding="s" 
      gap="xs" 
      flex={1} 
      background="neutral-strong"
      style={{ 
        borderBottomLeftRadius: 'var(--radius-xl)', 
        borderBottomRightRadius: 'var(--radius-xl)' 
      }}
    >
      <Text variant="body-strong-m">$1,500/month</Text>
      <Text variant="body-default-s">2 beds • 1 bath • Pets allowed</Text>
      <Text variant="body-default-s">123 Main St, Anytown, USA</Text>
    </Flex>
  </Flex>
);

export default async function PropertySearch() {
    const user = await getUserOrRedirect();

    const loggedIn = user != null;
    const email = user?.email ?? '';
    const userId = user?.userId ?? '';

    return (
        <>
            <Navbar loggedIn={loggedIn} email={email} userId={userId} />
            <Flex
                fillWidth
                paddingTop="l"
                paddingX="l"
                direction="column"
                alignItems="center"
                flex={1}
            >
                <Background dots={false} />
                <Flex
                    position="relative"
                    as="section"
                    overflow="hidden"
                    fillWidth
                    minHeight="0"
                    maxWidth={68}
                    direction="column"
                    alignItems="center"
                    flex={1}
                >
                    <Flex
                        as="main"
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        fillWidth
                        fillHeight
                        padding="l"
                        gap="l"
                    >
                    </Flex>
                </Flex>
                
                <Grid
                    columns="repeat(3, 1fr)"
                    gap="24"
                    padding="24"
                    position="relative"
                    zIndex={1}
                    marginY="l"
                    style={{ maxWidth: '1200px', width: '100%' }}
                >
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </Grid>
                
                <Flex
                    as="footer"
                    position="relative"
                    fillWidth
                    paddingX="l"
                    paddingY="m"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        © 2024 NestMates
                    </Text>
                    <Button
                        href="https://github.com/salvadorbu/NestMate"
                        prefixIcon="github"
                        size="s"
                        variant="tertiary"
                    >
                        GitHub
                    </Button>
                </Flex>
            </Flex>
        </>
    );
}
