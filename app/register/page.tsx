import { SignUp } from '@clerk/nextjs';

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <SignUp signInUrl="/login" />
    </div>
  );
}
