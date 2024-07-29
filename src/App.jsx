import { useState } from "react";
import { Main, Content } from "./ui";
import { Sidebar, Header, PersonProfile,Team, ComingEvent } from "./components";
import Stat from "./components/stat/Stat";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(true);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toogleSideBar = () => {
    setIsSideOpen(!isSideOpen);
  };

  return (
    <div className={`font-quicksand ${darkMode ? 'dark' : ''}`}>
      <Header toogleDarkMode={toogleDarkMode} darkMode={darkMode} toogleSideBar={toogleSideBar} />
        <Sidebar isSideOpen={isSideOpen} />
        <Main >
          <Content>
              <Stat darkMode={darkMode}/>
              <div className="flex flex-col gap-3 lg:flex-row">
                      <Team darkMode={darkMode}/>
                      <ComingEvent/>
              </div>
          </Content>
          <PersonProfile darkMode={darkMode}/>
        </Main>
    </div>
  );
}
