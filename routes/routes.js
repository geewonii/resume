import { Route } from 'react-router-dom';

export default (args) => {
  const { render, ...rest } = args;
  return <Route
    {...rest}
    render={props =>
      <div>
        <div>PrivateRoute (routes/routes.js)</div>
        {
          render(props)
        }
      </div>
    }
  />;
}