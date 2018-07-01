/**
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';

const Home: Function = ({ pictures }: Array<Object>): React.Element<any> => (
  <div>
    <div className="top-banner">
      <div className="counter">Uploaded : {pictures.length}</div>
      <br className="clear" />
    </div>
  </div>
);

// when state change, component ll be rerendered. Become component's own prop
const mapStateToProps: Function = (state: Object): Object => ({
  pictures: state.pictures,
});

export default connect(mapStateToProps)(Home);
