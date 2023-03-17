import { Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import Header from "@components/Header";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />

        <main>
          <Routes>
            {routesConfig.map(({ element, path }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
