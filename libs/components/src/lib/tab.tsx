import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import tabs from '../lib/projects.json';

// const active =
// 'bg-amber-800 bg-opacity-10 text-cyan-700  px-4 py-3 flex items-center space-x-4 rounded-md font-bold';
// const inactive =
// 'relative px-4 py-3 flex items-center space-x-4 text-gray-600 group rounded-md';

export const Tab = () => (
  <Root defaultValue="tab1">
    <div className="flex items-center justify-center p-6">
      <div className="z-20 relative text-center text-cyan-900 bg-stone-100 rounded-sm">
        <List className="p-8" aria-label="Manage your account">
          {tabs.map((tab) => (
            <Trigger key={tab.id} className="px-2" value={tab.value}>
              {tab.title}
            </Trigger>
          ))}
        </List>
        {tabs.map((tab) => (
          <Content className="px-4" value={tab.value} key={tab.id}>
            <p className="italic">{tab.description}</p>
            <div className="object-center w-full">
              <ul className="text-sm w-full flex p-4">
                {tab.bullets.map((bullet) => (
                  <li key={bullet} className="p-4 w-full">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="aspect-w-16 aspect-h-9">
                {/* insert youtube here */}
              </div>
              <a
                href={tab.github}
                className="text-cyan-900 text-opacity-90 "
              >Github</a>
            </div>
          </Content>
        ))}
        {/* <Content className="px-4" value="tab1">
          <p className="">
            Financial Goals
          </p>
        </Content>
        <Content className="" value="tab2">
          <p className="italic">
            An app to empower users' financial decisions by providing a system
            to enter account balances, track transactions, and create financial
            goals.
          </p>
          <div className="object-center w-full">
            <ul className="text-sm w-full flex p-4">
              <li className="p-4 w-full">
                Programmed a single-page web application with streamlined
                navigation for a seamless user experience by applying
                fundamental React and React Router patterns
              </li>
              <li className="p-4 w-full">
                Developed a lightweight interactive interface to increase user
                motivation and engagement by employing intuitive data
                visualization techniques for goal progress representation
              </li>
              <li className="p-4 w-full">
                Researched solutions to ensure accurate floating-point
                calculations resulting in improved accuracy and reliability by
                implementing an external 3rd party library
              </li>
              <li className="p-4 w-full">
                Leveraged Chrome/React Devtools and strategic console statements
                to monitor app state and methodically debug errors, leading to
                improved stability
              </li>
            </ul>
          </div>
        </Content>
        <Content className="Tabsontent" value="tab3">
          <p className=""></p>

          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'flex-end',
            }}
          ></div>
        </Content>
        <Content className="Tabsontent" value="tab4">
          <p className=""></p>

          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'flex-end',
            }}
          ></div>
        </Content> */}
      </div>
    </div>
  </Root>
);

export default Tab;
