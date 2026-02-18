import { render, screen } from '@/lib/test-utils';

describe('Example Test', () => {
  it('should pass', () => {
    render(<div>Test</div>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
