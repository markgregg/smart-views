import { StoreApi, UseBoundStore, create } from 'zustand';
import { ConfigState } from '@/types/State';
import { SmartViewsProps } from '@/types';

export const createConfigStore = ({
  size,
}: SmartViewsProps): UseBoundStore<StoreApi<ConfigState>> => {
  return create<ConfigState>(() => ({
    size: size ?? 'normal',
  }));
};
