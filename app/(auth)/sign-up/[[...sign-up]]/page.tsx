import { SignUp } from '@clerk/nextjs';
import React from 'react';

// Generate static params for the catch-all route
export async function generateStaticParams() {
  return []; // You can leave this empty if no specific params are needed
}

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <SignUp />
    </main>
  );
};

export default SignUpPage;
