import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', function() {
  render(<NewTodoForm />);
});

it('matches snapshot', function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

// it('should run the createTodo function on submit', function() {
//   try {
//     const { getByText, getByLabelText } = render(<NewTodoForm />);
//     const input = getByLabelText('Task:');
//     const btn = getByText('Add todo');

//     fireEvent.change(input, { target: { value: 'Buy milk' } });
//     fireEvent.click(btn);
//     expect(queryByText('Buy milk')).toBeInTheDocument;
//   } catch (error) {
//     console.log(error);
//   }
// });

it('runs the create function on form submit', function() {
  const createMock = jest.fn();
  const { getByText, getByLabelText } = render(
    <NewTodoForm createTodo={createMock} />
  );
  const input = getByLabelText('Task:');
  const createButton = getByText('Add todo');
  fireEvent.change(input, { target: { value: 'Buy milk' } });
  fireEvent.click(createButton);
  expect(createMock).toHaveBeenCalled();
});
