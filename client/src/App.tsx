import React, { useState, createContext } from 'react';
import getPageRoutes from './pages/routes';
import { Routes, Route, Navigate } from 'react-router-dom';
export const VulnerabilityContext = createContext(undefined);

function App() {
  const routes = getPageRoutes();
  const redirectPaths = ['/'];
  const [selectedVulnerability, setSelectedVulnerability] = useState();

  return (
    <VulnerabilityContext.Provider value={[selectedVulnerability, setSelectedVulnerability]}>
      <Routes>
        <Route>
          <>
            {
              redirectPaths.map((redirectPath) => (
                <Route path={redirectPath} element={<Navigate to='/home' replace key='/home' />} />
              ))
            }
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.component()} />
            ))}
          </>
        </Route>
      </Routes>
    </VulnerabilityContext.Provider>
  );
}

export default App;
