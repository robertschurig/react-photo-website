import { Switch, Route } from 'react-router-dom';

import { Header } from 'core';
import { Contact, Home, Portraits, Sports } from 'pages';

export const Routes = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portraits" component={Portraits} />
        <Route exact path="/sports" component={Sports} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </main>
  </>
);
