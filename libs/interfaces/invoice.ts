export interface Customer {
  fullName: string;
  address: string;
  email: string;
  phone: string;
}

export interface Product {
  productName: string;
  cost: number | string;
  quantity: number | string;
}

export interface Invoice {
  invoiceNumber: string;
  customer: Customer;
  products: Product[];
}

export interface InvoiceDocument extends Invoice, Document {}
