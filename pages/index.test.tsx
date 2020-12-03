import { render, screen } from 'utils/test-utils';
import Index from './index';

test('renders', () => {
  const index = render(<Index />);
  expect(index).toMatchSnapshot();
})
