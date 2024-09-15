import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import { Heading, Text, Flex, Button, Background, LetterFx } from '@/once-ui/components';
import { getUser } from '@propelauth/nextjs/server/app-router';
import logoImg from '../assets/logo.png';

export default async function Home() {
	const user = await getUser();

	const loggedIn = user != null;
    const email = user?.email ?? '';
	const userId = user?.userId ?? '';
	
	return (
		<>
			<Navbar loggedIn={loggedIn} email={email} userId={userId} />
			<Flex
				fillWidth paddingTop="l" paddingX="l"
				direction="column" alignItems="center" flex={1}>
				<Background
					dots={false}/>
				<Flex
					position="relative"
					as="section" overflow="hidden"
					fillWidth minHeight="0" maxWidth={68}
					direction="column" alignItems="center" flex={1}>
					<Flex
						as="main"
						direction="column" justifyContent="center"
						fillWidth fillHeight padding="l" gap="l">
						<Flex
							mobileDirection="column"
							fillWidth gap="24">
							<Flex
								position="relative"
								flex={2} paddingTop="56" paddingX="xl">
								<Image src={logoImg} alt="Logo" width={350} height={110} style={{zIndex: '1'}}/>

							</Flex>
							<Flex
								position="relative"
								flex={4} gap="24" marginBottom="104"
								direction="column">
								
								<Heading
									wrap="balance"
									variant="display-strong-s">
									<span className="font-code">
										<LetterFx
										trigger="instant">
										Find your ideal roommate
										and perfect apartment
										</LetterFx>
									</span>
								</Heading>
								<Flex direction="row" gap="m">
									<Button
										href="/propertySearch"
										suffixIcon="chevronRight"
										variant="secondary">
										Find your nest
									</Button>
									<Button
										href="/about"
										suffixIcon="chevronRight"
										variant="secondary">
										Read more
									</Button>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					as="footer"
					position="relative"
					fillWidth paddingX="l" paddingY="m"
					justifyContent="space-between"
					alignItems="center">
					<Text
						variant="body-default-s" onBackground="neutral-weak">
						© 2024 NestMates
					</Text>
					<Button
						href="https://github.com/salvadorbu/NestMate"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
				</Flex>
			</Flex>
		</>
	);
}
