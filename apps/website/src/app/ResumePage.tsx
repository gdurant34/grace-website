const ResumePage = ({ title }: { title: string }) => {
  return (
    <div className="h-full flex justify-left">
      <img
        src="/assets/images/pawel-czerwinski-dgJT71cXlC4-unsplash-copy-2.jpg"
        alt=""
        className="w-full h-full object-cover fixed mix-blend-overlay opacity-50"
      />
      {/* <div className="w-full h-full object-cover fixed mix-blend-overlay opacity-40 m-10 bg-slate-100 z-0" /> */}
      <div className="pt-12 mb-6 pl-10 max-w-6xl z-10 ">
        <div className="inline-block my-6px	ml-55px w-full h-fit pt-10 ">
          <br />
          <h1 className="font-bold text-6xl	text-cyan-950 opacity-90">
            Grace Durant
          </h1>
          <div className="font-semibold text-lg relative z-10">
            Seattle, WA 
            {/* | */}
            {/* <a href="tel:9403123425" className="text-cyan-900 opacity-90">
              {' '}
              940-312-3425
            </a>{' '}
            |
            <a
              href="mailto:gdurant34@gmail.com"
              className="text-cyan-900 text-opacity-90 underline"
            >
              {' '}
              gdurant34@gmail.com
            </a>{' '}
            |
            <a
              href="https://www.linkedin.com/in/gracedurant/"
              target="_blank" // Add this line
              rel="noopener noreferrer" // Also add this line for security reasons
              className="text-cyan-900 text-opacity-90 underline"
            >
              {' '}
              LinkedIn
            </a>{' '} */}
            {/* | */}
            {/* <a
              href="https://github.com/gdurant34"
              target="_blank" // Add this line
              rel="noopener noreferrer" // Also add this line for security reasons
              className="text-cyan-900 text-opacity-90 underline"
            >
              {' '}
              Github
            </a>{' '}
            | */}
            {/* <a
              href="https://medium.com/@gdurant34"
              target="_blank" // Add this line
              rel="noopener noreferrer" // Also add this line for security reasons
              className="text-cyan-900 text-opacity-90 underline"
            >
              {' '}
              Blog
            </a>{' '}
            | */}
            {/* <a
              href="https://www.docdroid.net/OjrImXX/grace-durant-se-resume-pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-900 text-opacity-90 underline"
            >
              {' '}
              Open Resume in PDF
            </a> */}
          </div>
          <br />
          <p text-white>
            Dedicated and innovative Fullstack Engineer & Developer passionate
            about crafting seamless and responsive web applications. Commitment
            to writing clean, efficient code is complemented by a keen eye for
            design, ensuring user-friendly and visually appealing applications.
            Eager to contribute skills and enthusiasm to a dynamic team,
            fostering continuous learning and growth.
          </p>
          <br />
          <p className="">
            <span className="h-5 w-full z-1 text-cyan-900 text-opacity-90 font-bold">TECHNOLOGY: </span>
            React | JavaScript | Typescript | PostgreSQL | Ruby | Ruby on Rails
            | HTML5 & CSS3
          </p>
          <p>
            <span className="h-5 w-full z-1 text-cyan-900 text-opacity-90 font-bold">COMPETENCIES: </span>
            Tailwind | WordPress | Git | Node | ActiveRecord | Object-Oriented
            Programming | Functional Programming | Recoil
          </p>
          <br />
          <h4 className="h-5 w-full z-1 text-cyan-900 text-opacity-90 pt-4 font-bold">
            PROFESSIONAL EXPERIENCE
          </h4>
          <br />
          <div className="relative z-10">
            <p className="py-2">
              <strong>
                Junior Software Engineer -{' '}
                <a
                  href="https://stlswing.dance/"
                  target="_blank" // Add this line
                  rel="noopener noreferrer" // Also add this line for security reasons
                  className="font-bold text-cyan-900 text-opacity-90 underline"
                >
                  STL Swing
                </a>
              </strong>
              , Remote <span className="">- (01/2023 - Present)</span>
            </p>
            <ul>
              <li className="list-disc list-inside px-4">
                Develop admin forms within React by incorporating steppers to
                guide workflow progression and implementing robust data
                validations to ensure accuracy and reliability.
              </li>
              <li className="list-disc list-inside px-4">
                Apply Agile practices to execute tasks via demonstrating
                self-driven approach to project completion and a commitment to
                iterative development methodologies.
              </li>
              <li className="list-disc list-inside px-4">
                Utilize Tailwind to streamline styling processes enhancing
                efficiency and ensuring a cohesive visual experience across
                applications.
              </li>
            </ul>
            <p className="py-2">
              <strong>
                Student -{' '}
                <a
                  href="https://flatironschool.com/"
                  target="_blank" // Add this line
                  rel="noopener noreferrer" // Also add this line for security reasons
                  className="font-bold text-cyan-900 text-opacity-90 underline"
                >
                  Flatiron School
                </a>
              </strong>
              , Remote <span className="">- (09/2022 - 01/2023)</span>
            </p>
            <ul>
              <li className="list-disc list-inside px-4">
                Acquired extensive full-stack experience in programming
                fundamentals, web frameworks, and multiple languages through
                hands-on application development.
              </li>
              <li className="list-disc list-inside px-4">
                Engineered single-page web applications using React Router,
                ensuring seamless navigation and an optimized user experience.
              </li>
              <li className="list-disc list-inside px-4">
                Employed Chrome/React Devtools and strategic console statements
                to vigilantly monitor application state, systematically
                identifying and resolving 30% of errors during the development
                process.
              </li>
              <li className="list-disc list-inside px-4">
                Implemented Semantic-UI React to achieve consistent and visually
                appealing design solutions, expediting development time and
                fostering a cohesive user interface.
              </li>
              <li className="list-disc list-inside px-4">
                Constructed a robust back-end with CRUD capabilities and
                validations using Ruby on Rails, significantly enhancing data
                integrity and overall functionality throughout application.
              </li>
            </ul>
            <p className="py-2">
              <strong>
                Software Advisor -{' '}
                <a
                  href="https://www.softwareadvice.com/"
                  target="_blank" // Add this line
                  rel="noopener noreferrer" // Also add this line for security reasons
                  className="font-bold text-cyan-900 text-opacity-90 underline"
                >
                  Software Advice
                </a>
              </strong>
              , Austin, Texas <span className="">- (06/2019 - 09/2022)</span>
            </p>
            <ul>
              <li className="list-disc list-inside px-4">
                Facilitated seamless transitions by effectively communicating
                buyer needs to clients, fostering a smoother and more efficient
                collaboration process.
              </li>
              <li className="list-disc list-inside px-4">
                Conducted in-depth assessments of buyers' technical requirements
                ensuring the delivery of optimal recommendations that align with
                their specific needs and preferences.
              </li>
              <li className="list-disc list-inside px-4">
                Outperformed ERP team by resulting in 50% increase in revenue
                generated and number of buyers assisted, contributing
                significantly to the overall project success.
              </li>
              <li className="list-disc list-inside px-4">
                Attained top-five rankings from internal QA via maintaining high
                standards in B2B communication quality, reflecting commitment to
                excellence in professional interactions.
              </li>
            </ul>
            <p className="py-2">
              <strong>
                Accountant -{' '}
                <a
                  href="https://improving.com/"
                  target="_blank" // Add this line
                  rel="noopener noreferrer" // Also add this line for security reasons
                  className="font-bold text-cyan-900 text-opacity-90 underline pl-1"
                >
                  Improving
                </a>
              </strong>
              , Dallas, Texas <span className="">- (04/2016 - 12/2018)</span>
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
                Engaged with vendors to oversee complete Accounts Payable cycle
                and collaborated with sales staff, clients, and consultants for
                a comprehensive management of Accounts Receivable cycle.
              </li>
              <li>
                Facilitated knowledge transfer by coordinating meetings with
                engineers, gaining insights into software development practices,
                and ensuring alignment between financial operations and
                technical aspects.
              </li>
              <li>
                Facilitated knowledge transfer by coordinating meetings with
                engineers, gaining insights into software development practices,
                and ensuring alignment between financial operations and
                technical aspects.
              </li>
              <li>
                Partnered with leadership to lead monthly and yearly financial
                close processes, and crafted presentations detailing entities'
                performance, contributing to comprehensive and insightful
                reporting initiatives.
              </li>
            </ul>
          </div>
          <h4 className="h-5 w-full z-1 py-4 text-cyan-900 text-opacity-90 font-bold">TECHNICAL PROJECTS</h4>
          <div className="relative z-10">
            <p className="pt-4">
              <span className="font-semibold">Portfolio/Website</span> -
              <a
                href="https://github.com/gdurant34/grace-website"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Github
              </a>{' '}
            </p>
            <ul className="list-inside px-4">
              <li>
                Created a scalable React/Typescript codebase utilizing Nx
                monorepo with modularize functionality for an efficient
                developer experience by extending best-in-class tooling,
                component libraries, frameworks, to achieve rapid and continuous
                deployment with a fully integrated CI/CD workflow to ensure
                consistent code standards and high software quality.
              </li>
            </ul>
            <p className="pt-4">
              <span className="font-semibold">Friends of Grace</span> -
              <a
                href="https://github.com/gdurant34/grace-friends"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Github
              </a>{' '}
              |
              <a
                href="https://www.loom.com/share/127378af496242d9911aee70ad63b9f4?sid=a18bbb1f-f139-4825-b724-7b9c0e0137ae"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Demo
              </a>{' '}
              |
              <a
                href="https://friends-kgrn.onrender.com/users/sign_up"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Web App{' '}
              </a>
            </p>
            <ul className="list-inside px-4">
              <li>
                Developed a user-friendly CRM tool using Ruby on Rails,
                incorporating features such as user authentication with Devise
                Gem, Bootstrap for enhanced styling, and comprehensive CRUD
                scaffolding for management of friend and contact information.
              </li>
            </ul>
            <p className="pt-4">
              <span className="font-semibold">Financial Goals</span> -
              <a
                href="https://github.com/gdurant34/financial_goals_phase_2_project"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Github
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=SM_UWHfj3_8&t=3s"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Demo{' '}
              </a>
            </p>
            <ul className="list-inside px-4">
              <li>
                Crafted a financial decision-making app featuring balance
                management, transaction tracking, and goal-setting, with
                highlights including the development of a lightweight
                interactive interface in React for visualizing goal progress
                bars and the implementation of a third-party library to ensure
                precision in floating-point calculations.
              </li>
            </ul>

            <p className="pt-4">
              <span className="font-semibold">Movie Social</span> -
              <a
                href="https://github.com/gdurant34/project-movie-social"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Github Front-end
              </a>{' '}
              |
              <a
                href="https://github.com/gdurant34/phase-3-movie-social"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Github Back-end
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=LZ0wNL8z3N4&t=1s"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Demo{' '}
              </a>
            </p>
            <ul className="list-inside px-4">
              <li>
                Designed and implemented a movie library app with comprehensive
                search functionality, allowing users to save, rate, and review
                films, featuring an efficient RESTful API for partial title
                searches in a vast movie and TV show database, and full CRUD
                capabilities in the Sinatra back-end for seamless data
                management.
              </li>
            </ul>
            <p className="pt-4">
              <span className="font-semibold">It’s a Date</span> -
              <a
                href="https://github.com/gdurant34/phase-5-project-its-a-date"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Github
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=SZPFzpYK7As&t=1s"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Also add this line for security reasons
                className="text-cyan-900 text-opacity-90 font-bold underline"
              >
                {' '}
                Demo{' '}
              </a>
            </p>
            <ul className="list-inside px-4">
              <li>
                Enhanced a date night planning app by optimizing its React
                stability and scalability through Recoil, minimizing component
                dependencies, and prioritizing user privacy by implementing
                Bcrypt hashing on the back end and incorporating authentication
                routes on the front end.
              </li>
            </ul>
          </div>
          <h4 className="h-5 w-full z-1 py-4 text-cyan-900 text-opacity-90 font-bold">
            EDUCATION & CERTIFICATIONS
          </h4>
          <p className="pt-4 relative z-10">
            <ul className="list-inside px-4">
              <li>
                <span className='font-bold'>AWS Certified Cloud Practitioner, </span>
                Flatiron's Software Engineering Live, 2023
              </li>
              <li  className='font-bold'>
                Bachelor of Science, Masters of Science in Accounting &
                Taxation,
                <a
                  href="https://www.unt.edu/"
                  target="_blank" // Add this line
                  rel="noopener noreferrer" // Also add this line for security reasons
                  className=" text-cyan-900 text-opacity-90 pl-1 underline"
                >
                  The University of North Texas
                </a>
                , 2016
              </li>
            </ul>
          </p>
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
