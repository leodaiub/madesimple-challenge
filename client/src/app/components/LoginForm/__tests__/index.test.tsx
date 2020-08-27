import React from 'react';
import { render } from '@testing-library/react';

import { AuthForm } from '..';

describe('<AuthForm  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AuthForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
