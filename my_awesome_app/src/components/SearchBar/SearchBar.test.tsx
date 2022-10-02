import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar test', () => {
  it('', () => {});
  // it('renders correctly', () => {
  //   render(<SearchBar searchString="adf" handleSearchString={jest.fn()} />);
  //   expect(screen.getByDisplayValue('adf')).toBeInTheDocument();
  // });
  // it('localStorage tests', () => {
  //   jest.spyOn(Storage.prototype, 'setItem');
  //   jest.spyOn(Storage.prototype, 'getItem');
  //   const { unmount } = render(<SearchBar searchString="test" handleSearchString={jest.fn()} />);
  //   unmount();
  //   expect(localStorage.getItem).toHaveBeenCalled();
  //   expect(localStorage.setItem).toHaveBeenCalledWith('searchString', 'test');
  // });
  // it('set data from localstorage to input value', () => {
  //   Storage.prototype.getItem = jest.fn((v) => {
  //     console.log(12312312312);
  //     return v + 'searchString';
  //   });
  //   render(<SearchBar searchString="" handleSearchString={jest.fn()} />);
  //   expect(localStorage.getItem).toHaveBeenCalledWith('searchString');
  //   expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  // });
});
