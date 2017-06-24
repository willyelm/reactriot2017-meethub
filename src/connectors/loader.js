import { connect } from 'react-redux';

export default connect(
  ({users}, {children}) => ({
    loading: users.loading,
    children
  }),
  null,
  null,
  {
    areStatesEqual: (prev, next) => prev.loading === next.loading
  }
);
