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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Home from '../../containers/Home/Home';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

const Header: Function = (): React$Element<any> => (
  <div className={s.root}>
    <div className={s.container}>
      {/* TODO: remove this div begin */}
      <div style={{ color: '#0Ef2f4' }}>
        COMBIEN DE PHOTOS
        <Home />
      </div>
      {/* TODO: remove this div end */}

      <Navigation />
      <Link className={s.brand} to="/">
        <img
          src={logoUrl}
          srcSet={`${logoUrl2x} 2x`}
          width="38"
          height="38"
          alt="React"
        />
        <span className={s.brandTxt}>Your Company</span>
      </Link>
      <div className={s.banner}>
        <h1 className={s.bannerTitle}>React</h1>
        <p className={s.bannerDesc}>Complex web apps made easy</p>
      </div>
    </div>
  </div>
);

export default withStyles(s)(Header);
