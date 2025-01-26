import React from 'react';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa6';
import { Button } from '../common/Button';
import s from './style.module.less';

export const HorizontalViewBar = React.memo(() => {

  const handleNavLeft = React.useCallback(() => {

  }, []);

  const handleNavRight = React.useCallback(() => {

  }, []);

  return (
    <div
      id="sv-horizontal-view-bar"
      className={s.horizontalViewBar}
    >
      <Button
        id="sv-nav-left"
        onClick={handleNavLeft}
        height={26}
        width={26}
      >
        <FaCaretLeft />
      </Button>
      <div className={s.horizontalViewList}>
        {/*  
      map list to butttons
      */}
      </div>
      <Button
        id="sv-nav-right"
        onClick={handleNavRight}
        height={26}
        width={26}
      >
        <FaCaretRight />
      </Button>
    </div>
  );
});
