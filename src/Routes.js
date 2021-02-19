
import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Content = React.lazy(() => import("./components/Content"));


const Routes = () => {
  return (
    <Suspense fallback={<p>Loader...</p>}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Content} />
       


      </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
export default Routes;
