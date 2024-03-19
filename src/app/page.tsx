import { LoginButton } from '@/components/auth/loggin-button';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center gap-3">
      <h1 className="text-xl font-bold">Auth js</h1>
      <p className="font-normal">A simple authentication service</p>

      <LoginButton>
        <Button size={'lg'} variant={'default'}>
          Sign in
        </Button>
      </LoginButton>
    </div>
  );
}
