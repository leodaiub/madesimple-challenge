import React from 'react';
import { render } from '@testing-library/react';

import { DeleteDialog } from '..';

describe('<DeleteDialog  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<DeleteDialog />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
