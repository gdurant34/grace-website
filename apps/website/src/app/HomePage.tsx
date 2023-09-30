// import images from '../assets/images/home-plant.jpg';

const HomePage = ({ title }: { title: string }) => {
  return (
    <div className="h-full flex  justify-center">
      <img 
      src='/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg'
      alt=''
      className='w-full h-full object-cover fixed mix-blend-overlay opacity-90'/>
      <div className="p-12 m-10 2xl:container h-screen center fixed overflow-auto">
        <div>
          {/* <div className="h-100 p-12 space-y-6 border border-gray-200 bg-slate-50 bg-opacity-100 rounded-lg"> */}
          <div className="h-100 p-12 space-y-6  bg-stone-100 bg-opacity-70 rounded-sm ">
              <h3 className="text-5xl font-bold text-cyan-950 text-opacity-90">About Me</h3>
              <p className='text-lg font-normal  text-black'>
                I am a career professional with 12 years of experience across
                multiple industries. After my experience working in software
                sales, I changed careers to Software Engineering because I
                wanted to build the software products I was recommending to
                others: tools and solutions that empower people to progress on
                their goals in everyday life and the workplace.
                <br />
                <br />I gained valuable skills and experience in the previous
                roles I’ve held. As an Accountant, I facilitated discussions
                with cross-functional teams and stakeholders to exchange
                information critical to business operations. As a Software
                Advisor working in lead generation, I sought to understand the
                problems of small, mid-market, and enterprise buyers to
                recommend software solutions tailored to their needs. That
                process required me to communicate succinctly and adapt to the
                stakeholder. I also gained experience communicating with
                non-technical buyers who expressed the need for additional
                support to understand what tech solutions would suit their
                needs. As a high-performing professional, I have excelled in my
                previous roles because I love continuous growth and helping
                others thrive.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
