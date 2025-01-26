import { StoreApi, UseBoundStore } from 'zustand';
import { ConfigState } from './config';

export interface State {
  configStore: UseBoundStore<StoreApi<ConfigState>>;
}
