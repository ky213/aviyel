import { Provider } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import { store } from 'apps/frontend/src/store';
import MainLayout from '../components/Layout';
import { CreateInvoice, Home, ViewInvoice } from '../pages';

export function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/invoice/create" component={CreateInvoice} />
          <Route path="/invoice/:id" component={ViewInvoice} />
        </Switch>
      </MainLayout>
    </Provider>
  );
}

export default App;
