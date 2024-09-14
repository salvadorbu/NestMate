"use client";

import React from 'react';
import Navbar from '@/components/shared/Navbar'; // Import the Navbar component

import { Heading, Text, Flex, Button, Icon, InlineCode, Logo, Background, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Navbar isLoggedIn={false} userName="John Doe" userRole="Admin" avatarSrc="/images/john-doe-avatar.png" /> {/* Add the Navbar component */}
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
								<InlineCode
									className="shadow-m"
									style={{
										width: 'fit-content',
										padding: 'var(--static-space-8) var(--static-space-16)',
										backdropFilter: 'blur(var(--static-space-1))'}}>
									Start by editing <span className="brand-on-background-medium">app/page.tsx</span>
								</InlineCode>
								<Heading
									wrap="balance"
									variant="display-strong-s">
									<span className="font-code">
										<LetterFx
											trigger="instant">
											Helping designers code and developers design
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
					justifyContent="space-between">
					<Text
						variant="body-default-s" onBackground="neutral-weak">
						© 2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
					</Text>
					<Flex
						gap="12">
						<Button
							href="https://github.com/once-ui-system/nextjs-starter"
							prefixIcon="github" size="s" variant="tertiary">
							GitHub
						</Button>
						<Button
							href="https://discord.com/invite/5EyAQ4eNdS"
							prefixIcon="discord" size="s" variant="tertiary">
							Discord
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
