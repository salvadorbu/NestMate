import React from 'react';
import Navbar from '@/components/shared/Navbar';

import img1 from '../../assets/1549136301632.jpg';
import img2 from '../../assets/1643672846416.jpg';
import img3 from '../../assets/1686842745185.jpg';
import img4 from '../../assets/1707330614025.jpg';

import {
    Heading,
    Text,
    Flex,
    Button,
    Background,
    RevealFx,
    AvatarGroup,
} from '@/once-ui/components';
import { getUser } from '@propelauth/nextjs/server/app-router';

export default async function About() {
    const user = await getUser();

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
                        <Flex
                            position="relative"
                            direction="column"
                            alignItems="center"
                            gap="24"
                            marginBottom="104"
                        >
                            <Heading wrap="balance" variant="display-strong-s">
                                <span className="font-code">
                                    <RevealFx speed="medium" delay={0} translateY={0} >About NestMates</RevealFx>
                                </span>
                            </Heading>
                            <Text variant="body-default-s" align="center">
                                NestMates is a platform dedicated to helping you find your ideal
                                roommate and the perfect apartment. Our mission is to simplify
                                the process of searching for a living space and connecting with
                                compatible roommates.
                            </Text>
                            <Text variant="body-default-s" align="center">
                                Whether you're new to the city or looking for a change,
                                NestMates offers a seamless experience to make your housing
                                search stress-free and efficient.
                            </Text>
                            <Button
                                href="/"
                                suffixIcon="chevronLeft"
                                variant="secondary"
                            >
                                Back to Home
                            </Button>
                        </Flex>
                        <Heading variant="display-strong-s" marginTop="48">
                            Our Team
                        </Heading>
                        <AvatarGroup
                            avatars={[
                                {
                                    src: img1.src,
                                },
                                {
                                    src: img2.src,
                                },
                                {
                                    src: img3.src,
                                },
                                {
                                    src: img4.src
                                }
                            ]}
                            size="xl"
                        />
                    </Flex>
                </Flex>
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
