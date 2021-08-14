import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Customer, Product } from 'libs/interfaces/invoice';

@Schema()
export class InvoiceDef {
  @Prop({ unique: true })
  invoiceNumber: number;

  @Prop({
    type: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
    },
  })
  customer: Customer;

  @Prop({
    type: [
      {
        productName: String,
        cost: Number,
        quantity: Number,
      },
    ],
    required: true,
  })
  products: Product[];
}

export const InvoiceSchema = SchemaFactory.createForClass(InvoiceDef);
export const InvoiceModel = MongooseModule.forFeature([
  { name: 'Invoice', schema: InvoiceSchema },
]);
