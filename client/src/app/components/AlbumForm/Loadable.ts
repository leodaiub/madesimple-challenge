/**
 *
 * Asynchronously loads the component for AlbumForm
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AlbumForm = lazyLoad(
  () => import('./index'),
  module => module.AlbumForm,
);
