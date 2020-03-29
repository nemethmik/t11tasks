import React from 'react';
import { render } from '@testing-library/react';
import {Game} from './App';

test('game start text search', () => {
  const { getByText } = render(<Game />);
  const linkElement = getByText(/game start/i);
  expect(linkElement).toBeInTheDocument();
});
test("Local Storage Test 1",()=>{
  localStorage.setItem("Database","SBODemoUS")
  const dbName = localStorage.getItem("Database")
  console.log("dbName",dbName)
  expect(dbName).toEqual("SBODemoUS")
})
