import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Expense Tracker heading', () => {
  render(<App />);
  const heading = screen.getByText(/expense tracker/i);
  expect(heading).toBeInTheDocument();
});

test('renders input fields for text and amount', () => {
  render(<App />);
  const textInput = screen.getByPlaceholderText(/enter text/i);
  const amountInput = screen.getByPlaceholderText(/enter amount/i);
  expect(textInput).toBeInTheDocument();
  expect(amountInput).toBeInTheDocument();
});

test('renders Add transaction button', () => {
  render(<App />);
  const addButton = screen.getByText(/add transaction/i);
  expect(addButton).toBeInTheDocument();
});
