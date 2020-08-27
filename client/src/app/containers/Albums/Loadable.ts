/**
 *
 * Asynchronously loads the component for Navers
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Albums = lazyLoad(
  () => import('./index'),
  module => module.Albums,
);
