import { Tab } from '@grace-website/components';


const Projects = ({ title }: { title: string }) => {
  

  return (
    <div className="h-full flex justify-center py-16 fixed">
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
