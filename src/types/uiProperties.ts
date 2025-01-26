export type FilterBarSize = 'compact' | 'normal' | 'large';

interface Views {
  /* size of the filter bar */
  size?: FilterBarSize;
}


export interface UIProperties extends Views { }
