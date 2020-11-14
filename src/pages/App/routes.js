import { Switch, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Header } from 'components/Header';
import { Contact } from 'pages/Contact';
import { Portraits } from 'pages/Portraits';
import { Sports } from 'pages/Sports';

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
