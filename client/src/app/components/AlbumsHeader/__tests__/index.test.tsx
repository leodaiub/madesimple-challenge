import React from 'react';
import { render } from '@testing-library/react';

import { NaversHeader } from '..';

describe('<NaversHeader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<NaversHeader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
