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

export type LinkInnerProps = LinkProps & {
  handleClick: Function,
};

const isLeftClickEvent: Function = (event: Object): boolean =>
  event.button === 0;

const isModifiedEvent: Function = (event: Object): boolean =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const Link: Function = ({
  to,
  children,
  handleClick,
  className,
}: LinkInnerProps): React$Element<any> => (
  <a href={to} className={className} onClick={handleClick}>
    {children}
  </a>
);

const withExtendedHandlers: Function = withHandlers({
  handleClick: (props: LinkInnerProps): Function => (event: Event): void => {
    if (props.onClick) {
      props.onClick(event);
    }

    if (
      event.defaultPrevented === false ||
      (!isModifiedEvent(event) || isLeftClickEvent(event))
    ) {
      event.preventDefault();
      history.push(props.to);
    }
  },
});

export default compose(withExtendedHandlers)(Link);
