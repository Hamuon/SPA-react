import Layout from "./Components/Layout/Layout";
import {  Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return ( 
    
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </Layout>
   );
}
 
export default App;
