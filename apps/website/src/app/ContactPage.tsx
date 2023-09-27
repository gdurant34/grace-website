const Contact = ({ title }: { title: string }) => {
  return (
    <div className="h-full flex justify-center py-16">
        <img
          src="/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg"
          alt=""
          className="w-full h-full z-0 object-cover fixed mix-blend-overlay opacity-90"
        />
        <div className="text-center ">
          {/* <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"> */}
          <div className="">
            <div className="relative z-10">
              <h1 className="mb-4 p-2 text-5xl font-semibold text-amber-900 text-opacity-70">
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
                className="rounded border-2 border-cyan-900 text-opacity-90 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-cyan-900 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-stone-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <a
                  href="mailto:gdurant34@gmail.com"
                  className="text-cyan-900 text-opacity-90 "
                >
                  {' '}
                  Email me
                </a>
              </button>
            </div>
          <div className="relative z-10 p-5 min-w-[420px]">
            <iframe
              title="calendly"
              src="https://calendly.com/gdurant34/30min"
              width="100%"
              height="800px"
              className="p-5 overflow-auto"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
