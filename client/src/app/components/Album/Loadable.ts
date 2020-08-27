/**
 *
 * Asynchronously loads the component for Album
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Album = lazyLoad(
  () => import('./index'),
  module => module.Album,
);
