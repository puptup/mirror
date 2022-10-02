import { Grid } from '@mui/material';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { IProduct } from 'types';

interface ProductListProps {
  products: IProduct[];
}

class ProductList extends React.PureComponent<ProductListProps> {
  render() {
    const { products } = this.props;
    return (
      <Grid
        sx={{ pt: 10 }}
        container
        spacing={{ xs: 4, md: 2, sm: 3, lg: 3 }}
        columns={{ xs: 1, sm: 2, md: 12, lg: 16 }}
      >
        {products.length ? (
          products.map((product) => (
            <Grid item xs={2} sm={4} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Grid item xs={2} sm={4} md={4}>
            No matches with any product
          </Grid>
        )}
      </Grid>
    );
  }
}

export default ProductList;
