import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router';
import { BottomBar, Header } from 'common';
import Error404 from 'error-404';
import List from 'list';
import New from 'new';

const HeaderComponent = Header.component;
const ListContainer = List.container;
const BottomBarComponent = BottomBar.component;

const App = ({ store }) => (
  <>
    <HeaderComponent />
    <div className="container flex-grow-1">
      <Switch>
        <Route path="/new" component={New.container} />
        <Route
          path="/list"
          render={() => {
            const { fetching, fetched } = store.getState().list;
            if (!fetching && !fetched) {
              store.dispatch(List.actions.fetchTodos());
            }
            return <ListContainer />;
          }}
        />
        <Route path="/404" component={Error404.component} />
        <Redirect exact from="/" to="/list" />
        <Redirect from="/*" to="/404" />
      </Switch>
    </div>
    <BottomBarComponent />
  </>
);

App.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
};

export default App;
