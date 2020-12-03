import { render, screen } from 'utils/test-utils';
import Header from './Header';

test('shows header', () => {
  const header = render(<Header />);
  expect(screen.getByText(/newsfeed/i)).toBeInTheDocument();
})
