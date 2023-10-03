import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import tabs from '../lib/projects.json';
import { useState } from 'react';

const active =
  'bg-slate-100 bg-opacity-50 shadow-sm text-cyan-900 px-4 py-3 flex items-center space-x-4 rounded-md font-bold';
const inactive =
  'relative px-4 py-3 flex items-center space-x-4 text-white group rounded-md hover:bg-cyan-500 hover:bg-opacity-20';

export const Tab = () => {
  const [currentValue, setCurrentValue] = useState('tab1');

  const website = tabs.map((tab) => {
    return tab.websiteInfo != null && tab.value === currentValue ? (
      <div key={tab.id} className="mt-4 flex flex-col items-center space-y-4 ">
        <li className="m-2 w-full text-center text-lg font-semibold list-none rounded border-2 border-cyan-900 px-7 pb-[8px] pt-[10px] uppercase leading-normal bg-slate-100 bg-opacity-60 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-stone-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
          <a
            href={tab.websiteInfo[0].link}
            target="_blank" // Add this line
            rel="noopener noreferrer" // Also add this line for security reasons
            className="text-cyan-900 text-opacity-90"
          >
            {tab.websiteInfo[0].description} - (Render's free tier is slow!)
          </a>
        </li>
      </div>
    ) : null;
  });

  const video = tabs.map((tab) => {
    return tab.video !== null && tab.value === currentValue ? (
      <div key={tab.id} className=" h-full w-full flex justify-center">
        {/* <div className=""> */}
        <iframe
          className="m-5"
          width="100%"
          height="100%"
          src={tab.video}
          title="video player"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* </div> */}
      </div>
    ) : null;
  });

  return (
    <div className="container mx-auto px-4">
      <Root defaultValue="tab1" onValueChange={setCurrentValue}>
        <div className="p-6 flex justify-center  sm:px-6 lg:px-8 bg-slate-700 bg-opacity-20">
          <div className="z-20 relative text-white rounded-sm text-lg sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
            <List
              className="p-8 flex flex-col md:flex-row justify-center text-xl underline" // Use flex-col for mobile and flex-row for desktop
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
                className="px-4 text-center flex text-4xl flex-col items-center" // Use flex-col for vertical alignment
                value={tab.value}
                key={tab.id}
              >
                {tab.video !== null ? (
                  <div className="w-full md:flex md:flex-row md:items-center">
                    <div className="w-full md:w-1/2">
                      <div className="flex-row">
                        <p className="italic text-cyan-900  text-3xl text-opacity-90 flex justify-center  p-4 font-bold ">
                          {tab.description}
                        </p>
                        <div className="w-full text-left justify-center flex-left">
                          <ul className="text-lg list-inside lg:px-20">
                            {tab.bullets.map((bullet) => (
                              <li key={bullet} className="p-2">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w-full flex items-center justify-center mt-4 md:mt-0">
                        {video}
                      </div>
                      <ul className="text-lg list-inside lg:px-20 text-left justify-center flex-left">
                        {tab.technologies.map((bullet) => (
                          <li key={bullet} className="p-2">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  // Center the bullets when there isn't a video
                  <div className="w-full">
                    <div className="flex-row">
                      <p className="italic text-cyan-900 flex justify-center text-4xl p-4 font-bold">
                        {tab.description}
                      </p>
                      <div className="w-full text-left justify-center flex-left">
                        <ul className="text-lg list-inside lg:px-20">
                          {tab.bullets.map((bullet) => (
                            <li key={bullet} className="p-2">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <div className="w-full flex items-center mt-4 md:mt-0 text-left justify-center flex-left">
                      <ul className="text-lg list-inside lg:px-20">
                        {tab.technologies.map((bullet) => (
                          <li key={bullet} className="p-2">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="w-full flex flex-col items-center ">
                  {website}
                </div>

                <div className=" flex flex-col items-center m-4 ">
                  {tab.github.map((link) => (
                    <li
                      key={link.description}
                      // className="m-2 w-full md:w-auto text-center list-none rounded border-2 border-cyan-900 text-opacity-90 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-cyan-900 whitespace-nowrap transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-stone-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"                  >
                      className="m-2 w-full text-center text-lg font-semibold bg-slate-100 bg-opacity-60 list-none rounded border-2 border-cyan-900 text-opacity-90 px-7 pb-[8px] pt-[10px] uppercase leading-normal text-cyan-900 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-stone-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      <a
                        href={link.link}
                        target="_blank" // Add this line
                        rel="noopener noreferrer" // Also add this line for security reasons
                        className="text-cyan-900 text-opacity-90 block text-center"
                      >
                        {link.description}
                      </a>
                    </li>
                  ))}
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
