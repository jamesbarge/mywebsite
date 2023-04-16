import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Hi, I&apos;m James Barge
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        I&apos;m a software developer based in San Francisco, CA. I specialize in
        building web applications using JavaScript and React.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://twitter.com/jamesbarge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M437.9 151.9c.3 4.6.3 9.2.3 13.8 0 140.7-107.1 302.7-302.7 302.7-60.2 0-116.1-17.4-163.3-47.4 8.4 1 16.8 1.6 25.3 1.6 49 0 94.1-16.7 130-44.8-46.1-.8-84.9-31.2-98.2-72.8 6.4 1 12.8 1.6 19.5 1.6 9.5 0 18.9-1.3 27.9-3.7-48.5-9.7-84.9-52.5-84.9-103.8v-1.3c14.2 7.9 30.3 12.7 47.4 13.3-28.2-18.8-46.8-50.8-46.8-87.1 0-19.1 5.1-36.8 14-52.2 50.8 62.4 127.1 103.4 213.3 107.6-1.6-7.4-2.6-15-2.6-22.7 0-54.8 44.4-99.2 99.2-99.2 28.5 0 54.2 12 72.1 31.2 22.7-4.3 44.1-12.8 63.3-24.3-7.4 23.1-23.1 42.5-43.8 54.8 20.2-2.6 39.5-7.9 57.6-15.6-13.3 19.5-29.5 36.2-48.5 49.6z" />
          </svg>
        </a>
        <a
          href="https://github.com/jamesbarge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                     d="M256 32C132.3 32 32 132.3 32 256c0 110.5 71.4 204.4 170.4 237.7 12.5 2.3 17.1-5.4 17.1-12.1v-42.1c-69.2 15-83.7-34.8-89.1-66.7-3-17.8-10.8-56.7 23.2-70.8-8-22.4-4-53.1 16.4-68.2-14.3-4.1-29.3-6.8-44.3-8-19.1-1.3-61.7 9.1-61.7 76.8 0 17.2 5.4 33.1 16.1 47-14.9 1.9-30.3 2.5-45.5 1.2 13.5 41.7 47.5 68.7 90.9 73.5-21.1 18.5-48.3 27.5-75.5 27.5-6 0-12 .4-17.9 1.1 26.9 17.7 58.8 27.7 92.9 27.7 34.3 0 66.3-10.1 93.7-27.8-6.7-.9-13.7-1.4-20.7-1.4-28.4 0-56.4-9.4-79.9-26.9 24.4-4.7 47.3-13.7 68-26.3 18.9 11.9 41 19.1 64.9 19.1 9.9 0 19.7-.9 29.4-2.6-11.4-24-28.2-45-50-61.8 19.7-2.3 38.3-7.3 55.7-14.9-13.1-25.1-29.7-47.2-49.2-65.3z"
                   />
            </svg>
            </a>
            <a
                   href="https://linkedin.com/in/jamesbarge"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-600 hover:text-gray-800"
                 >
            <svg
                     className="h-6 w-6 fill-current"
                     viewBox="0 0 512 512"
                     xmlns="http://www.w3.org/2000/svg"
                   >
            <path
            d="M437.9 32H74.1C52.3 32 32 52.3 32 74.1v363.8C32 459.7 52.3 480 74.1 480h363.8c21.8 0 39.4-17.7 39.4-39.4V74.1c0-21.8-17.7-39.4-39.4-39.4zM168.5 416h-64.6V202h64.6v214zm-32.3-246.9c-19 0-34.4-15.4-34.4-34.4 0-19 15.4-34.4 34.4-34.4 19 0 34.4 15.4 34.4 34.4 0 19-15.4 34.4-34.4 34.4h-.1zm281.5 246.9h-64.6v-98.5c0-23.5-.4-53.7-32.6-53.7-32.6 0-37.6 25.4-37.6 51.6v100.6h-64.5V202h64.5v27.4c15.3-23.4 41.8-28.7 63.3-28.7 57.9 0 103.1 37.9 103.1 109.5v103.8z"
            />
            </svg>
            </a>
            </div>
            </div>
            );
            };
            
            export default Home;
