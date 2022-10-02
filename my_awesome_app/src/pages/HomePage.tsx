import React, { PureComponent } from 'react';

import SearchBar from 'components/SearchBar';

import { ProductService } from 'api';
import { IProduct } from 'types';

import ProductList from 'components/ProductList';

interface HomePageState {
  products: IProduct[];
  searchString: string;
}

class HomePage extends PureComponent {
  state: HomePageState = {
    products: [],
    searchString: '',
  };

  componentDidMount(): void {
    const service = new ProductService();
    service.getProducts().then((data) => {
      this.setState({
        products: data,
      });
    });
  }

  handleSearchString = (value: string) => {
    this.setState({
      searchString: value,
    });
  };

  render() {
    const { products, searchString } = this.state;
    return (
      <>
        <h1 style={{ marginTop: 100 }} data-testid="home-page">
          Home page
        </h1>
        <SearchBar
          searchString={searchString}
          handleSearchString={this.handleSearchString}
        ></SearchBar>
        <ProductList
          products={products.filter((product) => {
            return product.title.toLowerCase().includes(searchString.toLowerCase());
          })}
        />
      </>
    );
  }
}

export default HomePage;
