import { getUser as getPropelUser } from '@propelauth/nextjs/server/app-router';
import OnboardingForm from '@/components/forms/OnboardingForm';

export default async function Onboarding() {
  const user = await getPropelUser();

  const email = user?.email || '';
  const userId = user?.userId || '';

  return <OnboardingForm email={email} userId={userId} />;
}
