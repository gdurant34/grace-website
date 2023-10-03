import { Tab } from '@grace-website/components';

const Projects = ({ title }: { title: string }) => {
  return (
    <div className="h-full flex justify-center pt-10">
      <img
        src="/assets/images/pawel-czerwinski-dgJT71cXlC4-unsplash-copy.jpg"
        alt=""
        className="w-full h-full z-0 object-cover mix-blend-overlay opacity-90 fixed"
      />
      {/* <div className="w-full h-full z-0 object-cover mix-blend-overlay opacity-90 fixed"></div> */}
      <Tab />
    </div>
  );
};

export default Projects;
