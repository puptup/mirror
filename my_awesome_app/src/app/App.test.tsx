import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import * as React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { routers } from '../routers';
import userEvent from '@testing-library/user-event';

interface IFakeStore {
  input?: string;
}

type TKeyInStore = keyof IFakeStore;

const fakeLocalStorage = (function () {
  let store: IFakeStore = {};

  return {
    getItem: function (key: string) {
      return store[key as TKeyInStore] || null;
    },
    setItem: function (key: string, value: string) {
      store[key as TKeyInStore] = value.toString();
    },
    removeItem: function (key: string) {
      delete store[key as TKeyInStore];
    },
    clear: function () {
      store = {};
    },
  };
})() as Storage;

beforeEach(() => {
  jest.clearAllMocks();
  global.localStorage = fakeLocalStorage;
});

describe('Routing tests', () => {
  it('Renders main page on / path', async () => {
    const router = createMemoryRouter(routers, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    await waitFor(() => expect(screen.getByTestId('home-page')).toBeInTheDocument());
  });

  it('Renders About us page on /about path', async () => {
    const router = createMemoryRouter(routers, {
      initialEntries: ['/about'],
    });
    render(<RouterProvider router={router} />);
    await waitFor(() => expect(screen.getByTestId('about-page')).toBeInTheDocument());
  });

  it('Rederecting on /404 page with bad route path', async () => {
    const router = createMemoryRouter(routers, {
      initialEntries: ['/bad/route/path'],
    });
    render(<RouterProvider router={router} />);
    await waitFor(() => expect(screen.getByTestId('not-found-page')).toBeInTheDocument());
  });

  it('Setting info from searchBar in localstorage after unmount component', () => {
    const router = createMemoryRouter(routers, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const commit = jest.fn(() => {
      localStorage.setItem('searchString', input.value);
    });

    let input = screen.getByTestId('search-bar').querySelector('input') as HTMLInputElement;
    const homeButton = screen.getByText('Home');
    const aboutButton = screen.getByText('About us');

    const text = 'some test string';

    userEvent.type(input, text);
    commit();

    userEvent.click(aboutButton);
    userEvent.click(homeButton);
    input = screen.getByTestId('search-bar').querySelector('input') as HTMLInputElement;

    expect(localStorage.getItem('searchString')).toBe(text);

    expect(screen.getByDisplayValue(text)).toBeInTheDocument();
  });
});
