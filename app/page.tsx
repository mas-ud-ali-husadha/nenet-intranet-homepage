import Main from '@/components/layout/Main/MainLeft';
import MainRight from '@/components/layout/Main/MainRight';
import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-sidebar z-20 custom-shadow w-full md:min-w-[60%]">
        <Main />
      </div>
      <MainRight />
    </div>
  );
}
