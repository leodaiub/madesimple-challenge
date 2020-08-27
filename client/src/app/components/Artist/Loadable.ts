/**
 *
 * Asynchronously loads the component for Artist
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Artist = lazyLoad(
  () => import('./index'),
  module => module.Artist,
);
