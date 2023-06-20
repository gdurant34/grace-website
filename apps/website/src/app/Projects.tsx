import { Tab } from '@grace-website/components';

const Projects = ({ title }: { title: string }) => {
    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen">
      <img
        src="/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg"
        alt=""
        className="w-full h-full z-0 object-cover absolute mix-blend-overlay opacity-90"
      />
      <Tab />
        </div>
    );
};

export default Projects;