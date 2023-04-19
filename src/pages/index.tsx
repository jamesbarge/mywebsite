import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

const Index = () => {
  return (
    <>
      <Head>
        <title>James Barge - Product Manager</title>
        <meta name="description" content="James Barge's personal website, a product manager based in London" />
        <meta name="keywords" content="James Barge, Product Manager, London, Personal Website" />
        <meta name="author" content="James Barge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
      </Head>
      <header className="bg-white p-8">
        <main className="max-w-xl mx-auto">
          <h1 className="text-3xl font-semibold mb-4 text-black">James Barge</h1>
          <p className="text-xl font-normal mb-4 text-black">
            Product Manager based in London
          </p>
          <p className="text-xl font-normal mb-4 text-black">
            Currently at{' '}
            <a
              className="text-blue-500 underline"
              href="https://www.keebo.com/"
            >
              Keebo
            </a>
          </p>
          <p className="text-xl font-normal mb-8 text-black">
            Previously at{' '}
            <a className="text-blue-500 underline" href="#">
              Herd
            </a>
            ,{' '}
            <a className="text-blue-500 underline" href="#">
              Public Health England
            </a>
            , and{' '}
            <a className="text-blue-500 underline" href="#">
              LoveHomeSwap
            </a>
          </p>
          <div className="flex space-x-4 text-xl">
            <a
              className="text-black hover:text-blue-500 underline"
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="text-black hover:text-blue-500 underline"
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="text-black hover:text-blue-500 underline"
              href="mailto:your@email.com"
            >
              Email
            </a>
          </div>
        </main>
      </header>
    </>
  );
};

export default Index;
