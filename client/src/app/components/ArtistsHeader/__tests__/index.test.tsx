import React from 'react';
import { render } from '@testing-library/react';

import { AlbumsHeader } from '..';

describe('<AlbumsHeader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AlbumsHeader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
