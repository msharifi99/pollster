import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const welcomeText = getByTestId('welcome-text');
  expect(welcomeText).toBeInTheDocument();
});
