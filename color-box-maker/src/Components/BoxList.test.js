import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoxList from './BoxList';

function addBox(boxList, height = '200', width = '200', color = 'peru') {
  const heightInput = boxList.getByLabelText('Height');
  const widthInput = boxList.getByLabelText('Width');
  const backgroundInput = boxList.getByLabelText('Background Color');
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText('Add a New Box');
  fireEvent.click(button);
}

it('renders without crashing', function() {
  render(<BoxList />);
});

it('matches snapshot', function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', function() {
  const boxList = render(<BoxList />);

  //check to ensure no boxes have rendered before submit
  expect(boxList.queryByText('Remove Box')).not.toBeInTheDocument;

  addBox(boxList);

  // expect to see a box with a remove button
  const removeButton = boxList.getByText('Remove Box');
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
      width: 200px;
      height: 200px;
      background-color: peru;
    `);
  // expect form to be empty
  expect(boxList.getAllByDisplayValue('')).toHaveLength(3);
});

it('can remove a box', function() {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeButton = boxList.getByText('Remove Box');

  // click the remove button and the box should be gone
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
