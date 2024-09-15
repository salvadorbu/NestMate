import { notFound } from 'next/navigation';
import { getUser as getPropelUser } from '@propelauth/nextjs/server/app-router';
import { getUser as fetchUserFromDB } from '@/actions/user.actions';
import Navbar from '@/components/shared/Navbar';
import { Background } from '@/once-ui/components';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function UserProfilePage({ params }: PageProps) {
  const { id } = params;

  const user = await getPropelUser();

  if (!user) notFound();

  const loggedIn = user != null;
  const email = user?.email ?? '';
  const userId = user?.userId ?? '';

  console.log("ID: " + id);

  const userData = await fetchUserFromDB({ userId: id });

  if (!userData) notFound();

  return (
    <>
      <Navbar loggedIn={loggedIn} email={email} userId={userId} onboarded={true} />
      <Background dots={false} />

      <div
        className="profile-container"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '2rem',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          flexDirection: 'column',
        }}
      >
        <h1>User Information</h1>
        <div className="profile-info" style={{ marginTop: '1rem' }}>
          <h2>Name: {userData.name || 'N/A'}</h2>
          <p>Age: {userData.age || 'N/A'}</p>
          <p>Bio: {userData.bio || 'N/A'}</p>
          <p>Email: {userData.email || 'N/A'}</p>
          <p>Smoker: {userData.smoker ? 'Yes' : 'No'}</p>
          <p>Sleep Type: {userData.sleepType || 'N/A'}</p>
          <p>Cleanliness: {userData.cleanliness || 'N/A'}</p>
          <p>Rent Preference: ${userData.rentMin} - ${userData.rentMax}</p>
        </div>
      </div>
    </>
  );
}
