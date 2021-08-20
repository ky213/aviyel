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
  invoiceNumber: string;
  customer: Customer;
  products: Product[];
  tax: number | string;
  discount: number | string;
}

export interface InvoiceDocument extends Invoice, Document {}
