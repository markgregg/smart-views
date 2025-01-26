import React from 'react';
import { useConfig } from '@/state/useState';
import { RiMenuFill } from "react-icons/ri";
import { Button } from '../common/Button';
import s from './style.module.less';
import { HorizontalViewBar } from '../HorizontalViewBar';

export const ViewBar = React.memo(() => {
  const {
    size = 'normal',
  } = useConfig((state) => state);

  const handleClick = React.useCallback(() => {

  }, []);

  return (
    <div
      id="sf-view-bar"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={[s.viewBar, s[size], s[`font-${size}`]].join(' ')}
    >
      <div className={s.viewBarInner}>
        <Button
          id="sf-view-bar-menu"
          onClick={handleClick}
          height={26}
          width={26}
        >
          <RiMenuFill />
        </Button>
        <HorizontalViewBar />
      </div>
    </div>
  );
});
