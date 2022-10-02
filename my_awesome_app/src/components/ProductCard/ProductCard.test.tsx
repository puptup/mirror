import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductCard from './index';
import { IProduct } from 'types';

const product: IProduct = {
  brand: 'brand',
  category: 'category',
  description: 'description',
  discountPercentage: 5,
  id: 0,
  images: ['image'],
  price: 5,
  rating: 5,
  stock: 5,
  thimbnail: 'thimbnail',
  title: 'string',
};

describe('ProductCard test', () => {
  it('Header renders correctly', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(`${product.title}`)).toBeInTheDocument();
  });
});
