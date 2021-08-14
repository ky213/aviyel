import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvoiceDocument = Invoice & Document;
export type CustomerDocument = Customer & Document;
export type ProductDocument = Product & Document;

@Schema()
export class Customer {
  @Prop({ type: 'string' })
  firstName: string;

  @Prop({ type: 'string' })
  lastName: string;

  @Prop({ type: 'string' })
  email: string;

  @Prop({ type: 'string' })
  phone: string;
}

const customerSchema = SchemaFactory.createForClass(Customer);

@Schema()
export class Product {
  @Prop({ type: 'string' })
  name: string;

  @Prop({ type: 'number' })
  price: number;

  @Prop({ type: 'number' })
  quantity: number;
}

const productSchema = SchemaFactory.createForClass(Product);

@Schema()
export class Invoice {
  @Prop({ auto: 'number' })
  invoiceNumber: number;

  @Prop({ type: customerSchema })
  customer: CustomerDocument;

  @Prop({ type: [productSchema], required: true })
  products: ProductDocument[];
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
export const InvoiceModel = MongooseModule.forFeature([
  { name: 'Invoice', schema: InvoiceSchema },
]);
