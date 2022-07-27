export interface Product {
    id?: string;
    title: string;
    description?: string;
    images?: string;
    variant?: {
      title: string;
      price: string;
    };
  }
  