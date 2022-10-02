import React from 'react';
import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material';
import { IProduct } from 'types';

export interface ProductCardProps {
  product: IProduct;
}

class ProductCard extends React.PureComponent<ProductCardProps> {
  render() {
    const { product } = this.props;
    return (
      <Card elevation={24}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <Stack spacing={0.5}>
            <img
              src={`${product.images[0]}`}
              alt={product.title}
              style={{ maxWidth: '100%', margin: '0 auto', height: 200 }}
            />
            <Typography fontWeight={700} textAlign="center" sx={{ pb: 3 }}>
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              fontWeight={800}
              fontSize={16}
              sx={{ color: 'green' }}
            >
              {product.price}$
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ px: 2, py: 2 }}>
          <Button variant="contained" color="inherit">
            Add to cart
          </Button>
        </Stack>
      </Card>
    );
  }
}

export default ProductCard;
