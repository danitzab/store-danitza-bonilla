import React from 'react';
import { Banner } from './Banner';
import { Filter } from './Filter';
import { User } from './User';

export const Header = () => {
  return (
    <div>
      <div>
        <User />
        {/* <Banner /> */}
      </div>
      <Filter/>
    </div>
  );
};
