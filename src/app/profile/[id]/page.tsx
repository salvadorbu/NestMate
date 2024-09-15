import { notFound } from 'next/navigation';
import { getUser } from '@propelauth/nextjs/server/app-router';
import Navbar from '@/components/shared/Navbar';
import { Background

 } from '@/once-ui/components';
interface PageProps {
  params: {
    id: string;
  };
}

export default async function UserProfile({ params }: PageProps) {
  const { id } = params;

  const user = await getUser();

  if (!user) notFound();

  const loggedIn = user != null;
  const email = user?.email ?? '';
  const userId = user?.userId ?? '';


  return (
    <>
        <Navbar loggedIn={loggedIn} email={email} userId={userId} onboarded={true} />
        <Background dots={false}/>
    </>
  );
}