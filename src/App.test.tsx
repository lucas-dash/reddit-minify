import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Navbar from './components/Navbar';

describe('Navbar', () => {
  it('Renders Popular', () => {
    // ARANGE
    render(<Navbar />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('listitem', {
        level: 1,
      })
    ).toHaveTextContent('Popular');
  });
});
