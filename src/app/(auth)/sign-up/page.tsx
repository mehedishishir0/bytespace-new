import React from 'react';
import SharedBackground from '@/components/shared/SharedBackground';
import AuthForm from '@/components/auth/AuthForm';
import AuthLeftContent from '@/components/auth/AuthLeftContent';

const page = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <SharedBackground />
      <div className="relative z-10 w-full container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:py-12 py-36">
        <AuthLeftContent type="sign-up" />
        <AuthForm type="sign-up" />
      </div>
    </div>
  );
}

export default page;