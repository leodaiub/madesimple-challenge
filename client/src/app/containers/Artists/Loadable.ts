/**
 *
 * Asynchronously loads the component for Artists
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Artists = lazyLoad(
  () => import('./index'),
  module => module.Artists,
);
