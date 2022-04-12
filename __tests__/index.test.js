import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the h1 element', () => {
    const { container } = render(<Home />);

    const h1 = container.querySelector('h1');

    expect(h1).toBeTruthy();
  });

  it('renders four elements with the card class', () => {
    const { container } = render(<Home />);

    const cards = container.getElementsByClassName('card');

    expect(cards.length).toBe(4);
  });
});
