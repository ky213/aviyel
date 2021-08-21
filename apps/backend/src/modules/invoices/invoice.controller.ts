import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { Invoice } from 'libs/interfaces/invoice';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('/all')
  async getAllInvoices() {
    try {
      return await this.invoiceService.geAll();
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

  @Post('/create-invoice')
  async createInvoice(@Body() invoice: Invoice) {
    try {
      return await this.invoiceService.createInvoice(invoice);
    } catch (error) {
      return error;
    }
  }
}
