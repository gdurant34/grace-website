const ResumePage = ({ title }: { title: string }) => {
  return (
    <div className="h-full flex justify-center py-16">
      <img
        src="/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg"
        alt=""
        className="w-full h-full object-cover fixed mix-blend-overlay opacity-40"
      />
      <div className="p-10 max-w-6xl">
        <div className="inline-block my-6px	ml-55px w-full h-fit p-4">
          <br />
          <h1 className="font-bold text-6xl	text-amber-800 text-opacity-70">
            Grace Durant
          </h1>
          <div className="font-semibold text-lg relative z-10">
            Seattle, WA |
            <a href="tel:9403123425" className="text-cyan-900 text-opacity-90">
              {' '}
              940-312-3425
            </a>{' '}
            |
            <a
              href="mailto:gdurant34@gmail.com"
              className="text-cyan-900 text-opacity-90 "
            >
              {' '}
              gdurant34@gmail.com
            </a>{' '}
            |
            <a
              href="https://www.linkedin.com/in/gracedurant/"
              className="text-cyan-900 text-opacity-90 "
            >
              {' '}
              LinkedIn
            </a>{' '}
            |
            <a
              href="https://github.com/gdurant34"
              className="text-cyan-900 text-opacity-90"
            >
              {' '}
              Github
            </a>{' '}
            |
            <a
              href="https://medium.com/@gdurant34"
              className="text-cyan-900 text-opacity-90"
            >
              {' '}
              Blog
            </a>{' '}
            {/* |
            <a
              href="https://github.com/gdurant34/Portfolio"
              className="text-cyan-900 text-opacity-90"
            >
              {' '}
              Portfolio
            </a> */}
          </div>
          <br/>
          <p>
            Software Engineer delighted to craft seamless web experiences. My career has spanned accounting/payroll and software sales. I’ve honed my ability to communicate technical requirements, understanding user needs and work seamlessly alongside diverse teams and individuals.
          </p>
          <br />
          <p className="">
            <span className="h-5 w-full z-1  font-bold">TECHNOLOGY: </span>
            React | JavaScript | Typescript | PostgreSQL | Ruby | Ruby on Rails | HTML5 &
            CSS3
          </p>
          <p>
            <span className="h-5 w-full z-1 font-bold">SKILLS: </span>
            Tailwind | Recoil | Git | Node | ActiveRecord | Object-Oriented
            Programming | Functional Programming
          </p>
          <p>
            <span className="h-5 w-full z-1 font-bold">CERTIFICATIONS: </span>
            AWS Certified Cloud Practitioner, Flatiron’s Software Engineering
            Live
          </p>
          <br />
          <h4 className="h-5 w-full z-1 pt-4 font-bold">EXPERIENCE</h4>
          <br />
          <div className="relative z-10">
            <p className="py-2">
              <strong>
              <a
                href="https://stlswing.dance/"
                className="font-bold text-amber-900 text-opacity-90"
              >
                STL Swing {' '}
              </a>
                - Junior Software Engineer</strong>
              , Remote{' '}
              <span className="float-right">01/2023 - Present</span>
            </p>
            <ul>
              <li className="list-disc list-inside px-4">
                Created admin forms in React with steppers to guide the workflow, and validations for data accuracy
              </li>
              <li className="list-disc list-inside px-4">
                Work independently applying Agile practices to complete tasks
              </li>
              <li className="list-disc list-inside px-4">
                Leverage Tailwind to streamline the styling process
              </li>
            </ul>
            <p className="py-2">
              <strong>
              <a
                href="https://www.softwareadvice.com/"
                className="font-bold text-amber-900 text-opacity-90"
              >
                Flatiron School -{' '}
              </a>
                Student
                </strong>
              , Remote <span className="float-right">09/2022 - 01/2023</span>
            </p>
            <ul>
              <li className="list-disc list-inside px-4">
                Programmed single-page web applications with React Router for seamless navigation and a better user experience
              </li>
              <li className="list-disc list-inside px-4">
                Built back-end with CRUD capabilities and validations in Ruby on Rails, increasing data integrity throughout the app
              </li>
              <li className="list-disc list-inside px-4">
                Leveraged Chrome/React Devtools and strategic console statements to monitor app state and methodically debug errors
              </li>
              <li className="list-disc list-inside px-4">
                Implemented Semantic-UI React, providing quick solutions for consistent design to expedite development time
              </li>
              <li className="list-disc list-inside px-4">
                Gained full-stack experience in programming fundamentals, web frameworks, and multiple languages in app development
              </li>
            </ul>
            <p className="py-2">
              <strong>
              <a
                href="https://www.softwareadvice.com/"
                className="font-bold text-amber-900 text-opacity-90"
              >
                Software Advice - {' '}
              </a>
                Software Advisor
                </strong> 
              , Austin, Texas{' '}
              <span className="float-right">06/2019 - 09/2022</span>
            </p>
            <ul>
              <li className="list-disc list-inside px-4">
              Regularly achieved top-five ranks for quality B2B communication; outperformed ERP team by 50% in revenue and volume; gathered technical requirements to ensure high-quality recommendations.
              </li>
            </ul>
            <p className="py-2">
              <strong>
              <a
                href="https://improving.com/"
                className="font-bold text-amber-900 text-opacity-90 pl-1"
              >
                Improving - {' '}
              </a>
                Accountant
                </strong>
              , Dallas, Texas{' '}
              <span className="float-right">04/2016 - 12/2018</span>
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
                Collaborated with vendors for full A/P cycle, and sales staff, clients, and consultants for full A/R cycle 
              </li>
              <li>
                Coordinated meetings with engineers to learn about software development practices
              </li>
              <li>
                Applied scrum principles to manage the Columbus, Ohio entity's accounting operations remotely
              </li>
            </ul>
          </div>
          <h4 className="h-5 w-full z-1 py-4 font-bold">TECHNICAL PROJECTS</h4>
          <div className="relative z-10">
          <p className="pt-4">
              <span className="font-semibold">Portfolio/Website</span> -
              <a
                href="https://github.com/gdurant34/grace-website"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Github
              </a>{' '}
              
            <span className="italic">
            - My personal website.
            </span>
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
                Built a scalable codebase utilizing a monorepo setup in order to modularize functionality via library design
              </li>
              <li>
                Created an efficient developer experience by extending best-in-class tooling, component libraries, and frameworks
              </li>
              <li>
                Achieved rapid and continuous deployment with a fully integrated CI/CD workflow to ensure consistent code standards and high software quality
              </li>
            </ul>
          <p className="pt-4">
              <span className="font-semibold">Friends of Grace</span> -
              <a
                href="https://github.com/gdurant34/grace-friends"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Github
              </a>{' '}
              |
              <a
                href="https://www.loom.com/share/127378af496242d9911aee70ad63b9f4?sid=a18bbb1f-f139-4825-b724-7b9c0e0137ae"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Demo
              </a>{' '}
              |
              <a
                href="https://friends-kgrn.onrender.com/users/sign_up"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Web App
                {' '}
              </a>
            <span className="italic">
            - A CRM tool to help a user keep track of friends, and contact information.
            </span>
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
              Implemented user authentication, registration, and session management utilizing the Devise Gem

              </li>
              <li>
              Executed deployment through Render with PostgreSQL configuration

              </li>
              <li>
              Created a full-stack Ruby/Ruby on Rails app with robust CRUD scaffolding, partials, and associations

              </li>
            </ul>
            <p className="pt-4">
              <span className="font-semibold">Financial Goals</span> -
              <a
                href="https://github.com/gdurant34/financial_goals_phase_2_project"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Github
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=SM_UWHfj3_8&t=3s"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Demo
                {' '}
              </a>
            <span className="italic">
            - An app for informed financial decisions: manage balances, track transactions, and set goals.
            </span>
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
              Developed a lightweight interactive interface for React to visualize goal progress bar

              </li>
              <li>
              Researched solutions and implemented a 3rd party library to achieve accurate floating-point calculations 

              </li>
            </ul>
           
            <p className="pt-4">
              <span className="font-semibold">Movie Social</span> -
              <a
                href="https://github.com/gdurant34/project-movie-social"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Github Front-end
              </a>{' '}
              |
              <a
                href="https://github.com/gdurant34/phase-3-movie-social"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Github Back-end
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=LZ0wNL8z3N4&t=1s"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Demo
                {' '}
              </a>
            <span className="italic">
            - A movie library app with search, save, rate, and review films. 
{' '}
            </span>
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
              Incorporated an extensive RESTful API, enabling efficient partial title searches for a vast movie and TV show database

              </li>
              <li>
              Incorporated full CRUD capabilities in Sinatra back-end to handle data requests resulting in seamless data management 

              </li>
            </ul>
            <p className="pt-4">
              <span className="font-semibold">It’s a Date</span> -
              <a
                href="https://github.com/gdurant34/phase-5-project-its-a-date"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Github
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=SZPFzpYK7As&t=1s"
                className="text-amber-900 text-opacity-90"
              >
                {' '}
                Demo
                {' '}
              </a>
            <span className="italic">
            - An app for users to create and store fun activities to turn into date nights.{' '}
            </span>
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
              Boosted React app's stability and scalability by optimizing with Recoil, reducing component dependencies

              </li>
              <li>
              Employed Bcrypt hashing on the back-end and authentication routes on the front-end to ensure user privacy 

              </li>
            </ul>
          </div>
          <h4 className="h-5 w-full z-1 py-4 font-bold">EDUCATION</h4>
          <p className="pt-4 relative z-10">
            <a
              href="https://www.unt.edu/"
              className="font-bold text-amber-900 text-opacity-90 pl-1"
            >
              The University of North Texas
            </a>
            , Denton, Texas 
          </p>
          <ul className="list-disc list-inside px-4">
            <li>
              Integrated Accounting Program: Bachelor of Science, Masters of
              Science in Accounting/Taxation
            </li>
          </ul>
        </div>
        {/* <div className="h-full w-2 bg-blue-200 float-right inherit"></div> */}
        {/* <div className="h-10 w-full p-1 bg-red-700 bg-opacity-60 rounded-md relative clear-both font-mono">
          <div className="font-mono float-right mr-5">Grace</div>
        </div> */}
      </div>
    </div>
  );
};

export default ResumePage;
