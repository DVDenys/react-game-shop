import { Route, Routes } from 'react-router-dom';

import routesConfig from "@routes/routesConfig"

import styles from './App.module.css';

const App = () => {
  return (
    <> 
      <div className={styles.wrapper}>
        <Routes>
        {routesConfig.map(({ element, path }, index ) => (
            <Route 
              key={index} 
              path={path} 
              element={element} />
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App;