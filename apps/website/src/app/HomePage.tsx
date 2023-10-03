// import images from '../assets/images/home-plant.jpg';

const HomePage = ({ title }: { title: string }) => {
  return (
    <div className="h-full flex justify-center ">
      <img
        src="/assets/images/pawel-czerwinski-dgJT71cXlC4-unsplash.jpg"
        alt=""
        className="w-full h-full object-cover fixed mix-blend-overlay opacity-90"
      />
      <div className="pt-12 mt-10 2xl:container h-screen justify-center fixed overflow-auto">
        <div className="">
          {/* <div className="h-100 p-12 space-y-6 border border-gray-200 bg-slate-50 bg-opacity-100 rounded-lg"> */}
          <div className="h-full w-1/3 pt-48 pl-20">
            <h3 className="text-8xl font-bold text-cyan-950 text-opacity-90 md:items-center">
              <span>Grace</span>
              <br />
              <span>Durant</span>
            </h3>
          </div>
          <div className="h-100 p-20 flex justify-end md:items-center">
            <p className="text-xl font-bold w-7/12 text-justify text-white">
              Software Engineer delighted to craft seamless web experiences. My
              career has spanned accounting/payroll and software sales. I’ve
              honed my ability to communicate technical requirements,
              understanding user needs, and work seamlessly alongside diverse
              teams and individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
