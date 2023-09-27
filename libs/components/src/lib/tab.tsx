import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import tabs from '../lib/projects.json';
import { useState } from 'react';

const active =
  'bg-amber-800 bg-opacity-5 shadow-sm text-cyan-700 px-4 py-3 flex items-center space-x-4 rounded-md font-bold';
const inactive =
  'relative px-4 py-3 flex items-center space-x-4 text-gray-600 group rounded-md hover:bg-teal-500 hover:bg-opacity-10';

export const Tab = () => {
  const [currentValue, setCurrentValue] = useState('tab1');

  const website = tabs.map((tab) => {
    return tab.websiteInfo != null && tab.value === currentValue ? (
      <div key={tab.id} className="m-4 flex justify-center space-x-4">
        <li

          className="m-4 flex justify-center list-none w-1/3 rounded border-2 border-cyan-900 text-opacity-90 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-cyan-900 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-stone-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          <a
            href={tab.websiteInfo[0].link}
            className="text-cyan-900 text-opacity-90"
          >
            {tab.websiteInfo[0].description}
            {' '} - {' '}
            (Render's free tier is slow!) 
          </a>
        </li>
      </div>
    ) : null;
  });

  const video = tabs.map((tab) => {
    return tab.video !== null && tab.value === currentValue ? (
      <div key={tab.id} className="md:aspect-w-16 md:aspect-h-9 flex justify-center">
        <div className="w-1/2 h-1/2 ">
          <iframe
            className="m-5"
            width="100%"
            height="100%"
            src={tab.video}
            title="video player"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ) : null;
  });

  return (
    <div className="container mx-auto px-4">
      <Root defaultValue="tab1" onValueChange={setCurrentValue}>
        <div className="p-6 flex justify-center">
          <div className="z-20 relative text-cyan-900 bg-stone-100 bg-opacity-50 rounded-sm text-lg sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
            <List
              className="p-8 flex justify-center"
              aria-label="Manage your account"
            >
              {tabs.map((tab) => (
                <Trigger
                  key={tab.id}
                  className={`px-4 ${
                    tab.value === currentValue ? active : inactive
                  }`}
                  value={tab.value}
                >
                  {tab.title}
                </Trigger>
              ))}
            </List>
            {tabs.map((tab) => (
              <Content
                className="px-4 text-center"
                value={tab.value}
                key={tab.id}
              >
                <p className="italic text-amber-800 text-opacity-70 flex justify-center text-lg p-4">
                  {tab.description}
                </p>
                <div className="w-full text-center">
                  <ul className="text-base list-inside lg:px-20">
                    {tab.bullets.map((bullet) => (
                      <li key={bullet} className="p-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {video}
                  {website}
                  <div className="m-4 flex justify-center space-x-4">
                    {tab.github.map((link) => (
                      <li
                        key={link.description}
                        className="m-4 flex justify-center list-none w-1/3 rounded border-2 border-cyan-900 text-opacity-90 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-cyan-900 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-stone-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      >
                        <a
                          href={link.link}
                          className="text-cyan-900 text-opacity-90"
                        >
                          {link.description}
                        </a>
                      </li>
                    ))}
                  </div>
                
                </div>
              </Content>
            ))}
          </div>
        </div>
      </Root>
    </div>
  );
};

export default Tab;
