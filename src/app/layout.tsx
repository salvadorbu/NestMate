import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Flex } from '@/once-ui/components'
import classNames from 'classnames';
import { Source_Code_Pro } from 'next/font/google';

import { Raleway } from 'next/font/google';
import { Sora } from 'next/font/google';

import {AuthProvider} from "@propelauth/nextjs/client";

const primary = Raleway({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});

const secondary = Sora({
    variable: '--font-secondary',
    subsets: ['latin'],
    display: 'swap'
});

type FontConfig = {
    variable: string;
};

const tertiary: FontConfig | undefined = undefined;

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-theme="dark"
			data-brand="blue"
			data-accent="custom"
			data-neutral="gray"
			data-border="conservative"
			data-solid="contrast"
			data-solid-style="flat"
			data-surface="translucent"
			data-transition="all"
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : '',
				code.variable,
				'root')}>
			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
				<Flex
					flex={1} direction="column">
					{children}
				</Flex>
			</Flex>
		</Flex>
		</AuthProvider>
	);
}