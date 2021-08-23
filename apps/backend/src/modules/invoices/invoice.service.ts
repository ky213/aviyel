import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { InvoiceDocument, Pagiantion } from 'libs/interfaces/invoice';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('Invoice') private invoiceModel: Model<InvoiceDocument>
  ) {}

  async geAll({
    page,
    itemsPerPage,
    order,
  }: Pagiantion): Promise<InvoiceDocument[]> {
    return this.invoiceModel
      .find()
      .limit(+itemsPerPage)
      .skip(+itemsPerPage * +page)
      .sort({ created_at: +order || -1 })
      .exec();
  }

  async count(): Promise<number> {
    return this.invoiceModel.count().exec();
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

  async searchInvoice(query: string): Promise<InvoiceDocument[]> {
    return this.invoiceModel.find({
      $text: {
        $search: query,
      },
    });
  }
}
