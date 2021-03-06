import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Customer, Product } from 'libs/interfaces/invoice';

@Schema()
export class InvoiceDef {
  @Prop({ unique: true, type: String })
  invoiceNumber: string;

  @Prop({
    type: {
      fullName: String,
      email: String,
      phone: String,
    },
  })
  customer: Customer;

  @Prop({
    type: [
      {
        productName: String,
        price: Number,
        quantity: Number,
      },
    ],
    required: true,
  })
  products: Product[];

  @Prop({ type: Number })
  tax: number;

  @Prop({ type: Number })
  discount: number;

  @Prop({ type: Date, default: () => new Date() })
  created_at: Date;
}

export const InvoiceSchema = SchemaFactory.createForClass(InvoiceDef);
export const InvoiceModel = MongooseModule.forFeature([
  { name: 'Invoice', schema: InvoiceSchema },
]);

InvoiceSchema.index(
  {
    invoiceNumber: 'text',
    'customer.fullName': 'text',
  },
  { name: 'invoiceSearch' }
);
