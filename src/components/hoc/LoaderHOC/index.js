import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Loader, Error} from '../../atoms/';

const loaderHoc = (Component) => {
  return class wrapper extends PureComponent {
    static propTypes = {
      isFetching: PropTypes.bool,
      data: PropTypes.any,
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    };
    render() {
      const {error, data, isFetching} = this.props;
      return error && error.message ? (
        <Error msg={error.message} />
      ) : isFetching || !data ? (
        <Loader />
      ) : (
        <Component {...this.props} />
      );
    }
  };
};

export default loaderHoc;
