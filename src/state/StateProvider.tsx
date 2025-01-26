import React from 'react';
import { createConfigStore } from './configStore';
import { StateContext } from '@/state/state';
import { SmartViewsProps } from '@/types';

export interface ProviderProps {
  props: SmartViewsProps;
  children: JSX.Element | JSX.Element[];
}

export const StateProvider = React.memo(
  ({ props, children }: ProviderProps) => {
    const {
      size,
    } = props;
    const configStore = React.useMemo(
      () => createConfigStore(props),
      [
        size
      ],
    );

    const stateValue = React.useMemo(
      () => ({
        configStore,
      }),
      [
        configStore,
      ],
    );

    return (
      <StateContext.Provider value={stateValue}>
        {children}
      </StateContext.Provider>
    );
  },
);
