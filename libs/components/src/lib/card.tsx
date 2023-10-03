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
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:underline font-2xl"
        >
          <img
            className="object-cover h-full w-full"
            src={image}
            alt="team collaborating"
          />
        </a>
      </AspectRatio.Root>
      <div className=" bg-opacity-70 bg-cyan-900 lg:rounded-l-none lg:rounded-xl p-2 flex flex-col justify-between leading-normal drop-shadow-xl">
        <div className="h-32 md:h-24 lg:h-32 lg:p-4">
          <p className="text-sm font-bold text-black flex items-center bg-white bg-opacity-20">
            Medium
          </p>
          <div className="text-white font-bold md:text-xl">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline font-2xl"
            >
              {title}
            </a>
          </div>
          <p
            className={`text-white text-base font-2xl ${
              description ? 'hidden md:block' : ''
            }`}
          >
            {description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-md pl-4">
            <p
              className={`text-gray-900 leading-none font-bold  ${
                name ? 'hidden md:block' : ''
              }`}
            >
              {name}
            </p>
            <p className={`text-white ${date ? 'hidden md:block' : ''}`}>
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
