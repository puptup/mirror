import { IProduct } from 'types';

export class ProductService {
  private API_BASE = 'https://dummyjson.com/';

  async getData(url: string) {
    const result = await fetch(`${this.API_BASE}${url}`).then((res) => res.json());
    return result;
  }

  async getProducts(): Promise<IProduct[]> {
    const data = await this.getData('products');
    return data.products;
  }
}
