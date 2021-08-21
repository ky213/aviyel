import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { InvoiceDocument } from 'libs/interfaces/invoice';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('Invoice') private invoiceModel: Model<InvoiceDocument>
  ) {}

  async geAll(): Promise<InvoiceDocument[]> {
    return this.invoiceModel.find().exec();
  }

  async getById(id: string): Promise<InvoiceDocument> {
    return this.invoiceModel.findById(id).exec();
  }

  async getLastOne(): Promise<InvoiceDocument> {
    return this.invoiceModel.findOne().sort({ created_at: -1 }).exec();
  }

  async createInvoice(invoice): Promise<InvoiceDocument> {
    return this.invoiceModel.create(invoice);
  }
}
