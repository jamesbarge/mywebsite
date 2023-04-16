import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-start bg-white p-8">
      <main className="max-w-xl">
        <h1 className="text-3xl font-semibold mb-4">James Barge</h1>
        <p className="text-xl font-normal mb-4">
          Product Manager based in London
        </p>
        <p className="text-xl font-normal mb-4">
          Currently at <a className="text-blue-500" href="https://www.keebo.com/">Keebo</a>
        </p>
        <p className="text-xl font-normal mb-8">
          Previously at <a className="text-blue-500" href="#">Herd</a>, <a className="text-blue-500" href="#">Public Health England</a>, and <a className="text-blue-500" href="#">LoveHomeSwap</a>
        </p>
        <div className="flex space-x-4 text-xl">
          <a className="text-black hover:text-blue-500" href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a className="text-black hover:text-blue-500" href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="text-black hover:text-blue-500" href="mailto:your@email.com">Email</a>
        </div>
      </main>
    </div>
  );
};

export default Index;
