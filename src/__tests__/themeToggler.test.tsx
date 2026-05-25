import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import ThemeToggler from '../components/themeToggler/themeToggler';
import { ThemeProvider } from '../context/themeProvider';

test('should switch theme', async () => {
  const user = userEvent.setup();

  render(
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );

  const button = screen.getByRole('button', {
    name: /Switch to Light Mode/i,
  });
  await user.click(button);

  expect(
    screen.getByRole('button', { name: /Switch to Dark Mode/i })
  ).toBeInTheDocument();
});
