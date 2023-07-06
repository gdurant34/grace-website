import { Tab } from '@grace-website/components';


const Projects = ({ title }: { title: string }) => {
  

  return (
    <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-fill">
      <img
        src="/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg"
        alt=""
        className="w-full h-full z-0 object-cover mix-blend-overlay opacity-90 fixed"
      />
      <Tab />
    </div>
  );
};

export default Projects;
