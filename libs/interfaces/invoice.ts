export interface Customer {
  fullName: string;
  address: string;
  email: string;
  phone: string;
}

export interface Product {
  name: string;
  cost: number;
  quantity: number;
}

export interface Invoice {
  invoiceNumber: string;
  customer: Customer;
  products: Product[];
}

export interface InvoiceDocument extends Invoice, Document {}
