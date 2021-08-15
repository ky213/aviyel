import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { store } from 'apps/frontend/src/store';
import styles from './app.module.css';
import MainLayout from '../components/Layout';

export function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <div className={styles.app}>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            )}
          />
          <Route
            path="/page-2"
            exact
            render={() => (
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            )}
          />
          {/* END: routes */}
        </div>
      </MainLayout>
    </Provider>
  );
}

export default App;
