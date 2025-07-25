'use client';
import React from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = React.useState('');

  React.useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning,');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon,');
    } else {
      setGreeting('Good evening,');
    }
  }, []);

  return (
    <h1 className="text-4xl font-semibold leading-11">
      {greeting}
      <br />
      <span className="text-foreground-2">Mas&apos;ud</span>
    </h1>
  );
};

export default Greeting;
