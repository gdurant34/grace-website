import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import tabs from '../lib/projects.json';
import { useState } from 'react';

const active =
  'bg-amber-800 bg-opacity-5 text-cyan-700 px-4 py-3 flex items-center space-x-4 rounded-md font-bold';
const inactive =
  'relative px-4 py-3 flex items-center space-x-4 text-gray-600 group rounded-md hover:bg-teal-500 hover:bg-opacity-10';

export const Tab = () => {
  const [currentValue, setCurrentValue] = useState('tab1');

  return (
    <Root defaultValue="tab1" onValueChange={setCurrentValue}>
      <div className="flex justify-center p-6 ">
        <div className="z-20 relative text-center bo text-cyan-900 bg-stone-100 bg-opacity-50 rounded-sm">
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
            <Content className="px-4" value={tab.value} key={tab.id}>
              <p className="italic text-amber-800 text-opacity-70 flex justify-center">
                {tab.description}
              </p>
              <div className="w-full">
                <ul className="text-sm w-full p-4 justify-start">
                  {tab.bullets.map((bullet) => (
                    <li key={bullet} className="p-4 w-full">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="aspect-w-16 aspect-h-9 flex justify-center">
                  <iframe
                    className="m-5"
                    width="560"
                    height="315"
                    src={tab.youtube}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="m-4 flex justify-center">
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
  );
};

export default Tab;