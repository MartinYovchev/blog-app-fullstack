import { SignIn } from '@clerk/nextjs';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
}
