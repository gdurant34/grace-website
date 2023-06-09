// import * as AspectRatio from '@radix-ui/react-aspect-ratio';

// export const Card = ({
//   name,
//   date,
//   title,
//   image,
//   description,
//   link,
// }: {
//   title: string;
//   name: string;
//   date: string;
//   image: string;
//   description: string;
//   link: string;
// }) => (
//   <div className='p-5 max-w-4xl'>
//     <div className="w-auto lg:max-w-full lg:flex h-60 overflow-hidden">
//       <AspectRatio.Root ratio={16 / 9}>
//         <img
//           className="object-cover h-full w-full lg:rounded-b-none lg:rounded-l"
//           src={image}
//           alt="team collaborating"
//         />
//       </AspectRatio.Root>
//       <div className="border-r bg-cyan-800 bg-opacity-70 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal drop-shadow-lg">
//         <div className="">
//           <p className="text-sm text-slate-100 flex items-center">Medium</p>
//           <div className="text-slate-100 font-bold text-xl">
//             <a
//               href={link}
//               target="_blank"
//               rel="noreferrer"
//               className="no-underline hover:underline"
//             >
//               {title}
//             </a>
//           </div>
//           <p className="text-slate-100 text-base">{description}</p>
//         </div>
//         <div className="flex items-center">
//           <div className="text-sm">
//             <p className="text-gray-900 leading-none">{name}</p>
//             <p className="text-slate-100">{date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Card;

import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export const Card = ({
  name,
  date,
  title,
  image,
  description,
  link,
}: {
  title: string;
  name: string;
  date: string;
  image: string;
  description: string;
  link: string;
}) => (
  <div className="p-5 max-w-4xl">
    <div className="w-auto lg:max-w-full lg:flex h-60 overflow-hidden">
      <AspectRatio.Root ratio={16 / 9}>
        <img
          className="object-cover h-full w-full lg:rounded-b-none lg:rounded-l"
          src={image}
          alt="team collaborating"
        />
      </AspectRatio.Root>
      <div className="bg-cyan-800 bg-opacity-70 lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal drop-shadow-lg">
        <div className="h-32 md:h-24 lg:h-32 lg:p-4">
          <p className="text-sm text-slate-100 flex items-center ">Medium</p>
          <div className="text-slate-100 font-bold md:text-xl">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {title}
            </a>
          </div>
          <p
            className={`text-slate-100 text-base ${
              description ? 'hidden md:block' : ''
            }`}
          >
            {description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p
              className={`text-gray-900 leading-none ${
                name ? 'hidden md:block' : ''
              }`}
            >
              {name}
            </p>
            <p className={`text-slate-100 ${date ? 'hidden md:block' : ''}`}>
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
