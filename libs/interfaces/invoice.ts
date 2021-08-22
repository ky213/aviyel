export interface Customer {
  fullName: string;
  address: string;
  email: string;
  phone: string;
}

export interface Product {
  productName: string;
  price: number | string;
  quantity: number | string;
}

export interface Invoice {
  _id?: string;
  invoiceNumber: string;
  customer: Customer;
  products: Product[];
  tax: number | string;
  discount: number | string;
  created_at: Date;
}

export interface InvoiceDocument extends Invoice, Document {}

export interface Pagiantion {
  page: number;
  itemsPerPage: number;
  order: Order;
}

enum Order {
  'asc' = 1,
  'desc' = -1,
}
