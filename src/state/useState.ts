import React from 'react';
import { StoreApi, UseBoundStore, useStore } from 'zustand';
import { StateContext } from '@/state/state';
import {
  ConfigState,
  State,
} from '@/types/State';

const useState = <T, U>(
  storeSelector: (state: State) => UseBoundStore<StoreApi<T>>,
  selector: (state: T) => U,
) => {
  const store = storeSelector(React.useContext(StateContext));

  if (store === null) {
    throw new Error('useState must be used within StateProvider');
  }
  return useStore<UseBoundStore<StoreApi<T>>, U>(store, selector);
};

export const useConfig = <U>(selector: (state: ConfigState) => U) =>
  useState((s) => s.configStore, selector);
