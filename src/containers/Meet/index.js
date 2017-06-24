import React from 'react';
// import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchUsers } from '../Filter/ducks/users';

export class Meet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    render() {
        const fakeFilter = {
            location: 'bordeaux',
            language: ['python']
        }
        if (this.props.users.loading === true) return <div>FAKE LOADER...</div>
        if (this.props.users.empty === true) {
            return (
                <div>
                    <div>FAKE WELCOME</div>
                    <button onClick={() => this.props.searchUsers(fakeFilter)}>FAKE ACTION</button>
                </div>
            );
        }
        return (
            <div>
                FAKE LIST
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {this.props.users.users.map(user => <span>{JSON.stringify(user)}</span>)}
                </div>
            </div>
        );
    }
}

Meet.defaultProps = {
};

Meet.propTypes = {
};

export default connect(
    ({users}) => ({users}),
    dispatch => bindActionCreators({searchUsers}, dispatch)
)(Meet);
