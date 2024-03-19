import { auth } from '@/auth';

const SettingsPage = async () => {
  const session = auth();

  return <div className="">{JSON.stringify(session)}</div>;
};

export default SettingsPage;
