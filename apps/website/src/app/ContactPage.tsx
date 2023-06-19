
const AboutMe = ({ title }: { title: string }) => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen">
      <img
        src="/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg"
        alt=""
        className="w-full h-full z-0 object-cover absolute mix-blend-overlay opacity-90"
      />
      <div className="p-12 text-center">
      {/* <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"> */}
        <div className="flex items-center justify-center">
          <div className="relative z-10">
            <h1 className="mb-4 text-5xl font-semibold text-amber-900 text-opacity-70">
              {' '}
              Contact
            </h1>
            <div className="mb-6">
              <a
                href="https://github.com/gdurant34"
                className="text-cyan-900 text-opacity-90 mb-6 text-xl font-semibold"
              >
                {' '}
                Github
              </a>
            </div>
            <div className="mb-6">
              <a
                href="https://www.linkedin.com/in/gracedurant/"
                className="text-cyan-900 text-opacity-90 mb-6 text-xl font-semibold"
              >
                {' '}
                LinkedIn
              </a>
            </div>
            <div className="mb-6">
              <a
                href="https://medium.com/@gdurant34"
                className="text-cyan-900 text-opacity-90 mb-6 text-xl font-semibold"
              >
                {' '}
                Medium
              </a>
            </div>
            <button
              type="button"
              className="rounded border-2 border-cyan-900 text-opacity-90 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-cyan-900 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-green-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Email me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
