import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { Invoice, Pagiantion } from 'libs/interfaces/invoice';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('/all')
  async getAllInvoices(@Query() pagination: Pagiantion) {
    try {
      const invoiceList = await this.invoiceService.geAll(pagination);
      const totalNumberOfRecords = await this.invoiceService.count();
      return { invoiceList, totalNumberOfRecords, pagination };
    } catch (error) {
      return error;
    }
  }

  @Get('/search')
  searchInvoice(@Query('q') query: string) {
    return 'q invoice ' + query;
  }

  @Get('/:id')
  async getInvoiceById(@Param('id') id: string) {
    try {
      return await this.invoiceService.getById(id);
    } catch (error) {
      return error;
    }
  }

  @Get('/last')
  async getLastInvoice() {
    try {
      return await this.invoiceService.getLastOne();
    } catch (error) {
      return error;
    }
  }

  @Post('/create-invoice')
  async createInvoice(@Body() invoice: Invoice) {
    try {
      return await this.invoiceService.createInvoice(invoice);
    } catch (error) {
      return error;
    }
  }
}
