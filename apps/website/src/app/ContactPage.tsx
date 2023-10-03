import React from 'react';

const Contact = ({ title }: { title: string }) => {
  return (
    <div className="h-fit flex flex-col md:flex-row justify-center pt-10">
      {/* Left side (Contact items) */}
      <div className="w-full h-full md:w-1/2 text-center md:text-left ">
        <img
          src="/assets/images/pawel-czerwinski-dgJT71cXlC4-unsplash-copy-3.jpg"
          alt=""
          className="w-full h-full z-0 object-cover fixed mix-blend-overlay opacity-90"
        />
        <div className="relative z-10 ">
          <div className="p-32 w-full md:w-1/2 justify-center">
            {/* <h1 className="mb-10 text-5xl font-semibold text-amber-900 text-opacity-70">
              Contact
            </h1> */}
            <div className="mb-4 mt-16 flex flex-col md:flex-row items-center justify-center space-x-2">
              <a
                href="https://github.com/gdurant34"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-white text-opacity-90 mb-4 text-3xl font-semibold flex items-center"
              >
                <span>Github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            {/* Repeat the same structure for LinkedIn and Medium */}
            <div className="mb-4 flex flex-col md:flex-row items-center justify-center space-x-2">
              <a
                href="https://www.linkedin.com/in/gracedurant/"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-white text-opacity-90 mb-4 text-3xl font-semibold flex items-center"
              >
                <span>LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
            <div className="mb-6 flex flex-col md:flex-row items-center justify-center space-x-2">
              <a
                href="https://medium.com/@gdurant34"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-white text-opacity-90 mb-4 text-3xl font-semibold flex items-center"
              >
                <span>Medium</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 6A7 7 0 107 20 7 7 0 107 6zM18 6.5A3 6.5 0 1018 19.5 3 6.5 0 1018 6.5zM23 8A1 5 0 1023 18 1 5 0 1023 8z"></path>
                </svg>
              </a>
            </div>
            
            <div className="mb-6 flex flex-col md:flex-row items-center justify-center  space-x-2">
              <button
                type="button"
                className="rounded bg-slate-100 bg-opacity-40  text-opacity-90 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-stone-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <a
                  href="mailto:gdurant34@gmail.com"
                  target="_blank" // Add this line
                  rel="noopener noreferrer" // Also add this line for security reasons
                  className="text-cyan-900 text-opacity-90 font-semibold text-4xl flex items-center"
                >
                  <span>Email me</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 ml-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M 4 1 L 8 4.5 L 12 1 Z M 14.441406 2.34375 L 13.5 3 C 13.535156 3 13.5625 3.011719 13.59375 3.019531 L 8 6.890625 L 2.40625 3.019531 C 2.4375 3.011719 2.464844 3 2.5 3 L 1.546875 2.351563 C 1.214844 2.628906 1 3.035156 1 3.5 L 1 11.5 C 1 12.328125 1.671875 13 2.5 13 L 13.5 13 C 14.328125 13 15 12.328125 15 11.5 L 15 3.5 C 15 3.03125 14.78125 2.617188 14.441406 2.34375 Z M 3 5.773438 L 8 9.234375 L 13 5.773438 L 13 12 L 3 12 Z"></path>
                  </svg>
                </a>
              </button>
            </div>
          </div>
          
        </div>
        <p className="text-white text-opacity-90 font-semibold flex items-center p-16 text-8xl">
          Let's chat!
        </p>
      </div>

      {/* Right side (Calendly) */}
      <div className="md:w-1/2 p-5 min-w-[420px]">
        <iframe
          title="calendly"
          src="https://calendly.com/gdurant34/30min"
          width="100%"
          height="800px"
          className="p-5 overflow-auto"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
