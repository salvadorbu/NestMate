import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

export default function UserProfile({ params }: PageProps) {
  const { id } = params;

  // Fetch user data here
  // For example:
  // const userData = await fetchUserData(userId);
  
  // If user not found, you can render a 404 page
  // if (!userData) notFound();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}