import React from 'react';
import Home from './index';
import { render } from '@testing-library/react';

describe('home', () => {
  describe('render to page', () => {
    it('should render a list of vulnerabilities bt severity', () => {
      const { getByText } = render(<Home />)
    });
    it('should render the vulnerability name', () => {

    });
    it('should render the vulnerability category', () => {

    })
    it('should render the vulnerability description', () => {

    });
  });
  describe('navigation', () => {
    it('should navigate to the vulnerability page when clicked on expand', () => {
    });
  });
});
