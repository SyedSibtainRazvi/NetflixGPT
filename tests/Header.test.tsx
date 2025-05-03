import { Provider } from 'react-redux';
import appStore from '../src/utils/appStore';
import Header from '../src/components/Header';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders the logo', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByAltText(/netflix/i)).toBeInTheDocument();
  });
});
