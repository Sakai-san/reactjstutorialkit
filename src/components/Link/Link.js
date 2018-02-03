/**
 * @flow
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { compose, withHandlers } from 'recompose';
import history from '../../history';
import type { LinkProps } from './typings';

export type LinkInnerProps = LinkProps&{
  handleClick: Function,
};

const isLeftClickEvent: Function = (event: Event): boolean => {
  console.log('event', event);
  return event.button === 0;
};

const isModifiedEvent: Function = (event: Event): boolean => {
  console.log('ismodifiedEvent', event);
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/*
class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onClick: null,
  };

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    history.push(this.props.to);
  };

  render() {
    console.log('salut thomas', this.props);
    const { to, children, ...props } = this.props;
    return (
      <a href={to} {...props} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}
*/

const Link = ({
  to,
  children,
  onClick,
  handleClick,
  ...props,
}: LinkProps): React.Element<any> => {

  return (
    <a href={to} {props} onClick={handleClick}>
      {children}
    </a>
  );
};

export default compose(
  withHandlers({
    handleClick: (props: LinkProps) => (event: Event): void => {
      if (props.onClick) {
        props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      history.push(props.to);
    },
  }),
)(Link);
