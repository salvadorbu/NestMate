import React from 'react';
import Navbar from '@/components/shared/Navbar';

import { Heading, Text, Flex, Button, Logo, Background, LetterFx } from '@/once-ui/components';
import { getUser } from '@propelauth/nextjs/server/app-router';

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
								<Logo size="xl" icon={false} style={{zIndex: '1'}}/>
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
								<Button
									href="https://once-ui.com/docs"
									suffixIcon="chevronRight"
									variant="secondary">
									Read docs
								</Button>
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
