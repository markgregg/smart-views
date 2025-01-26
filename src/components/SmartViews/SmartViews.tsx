import React from 'react';
import { ViewBar } from '../ViewBar';
import { StateProvider } from '../../state/StateProvider';
import { SmartViewsProps } from '@/types';

export const SmartViews = React.memo((props: SmartViewsProps) => (
  <StateProvider props={props}>
    <ViewBar />
  </StateProvider>
));
