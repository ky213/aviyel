import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

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

  @Post()
  async createInvoice(@Body() invoice) {
    try {
      return await this.invoiceService.createInvoice(invoice);
    } catch (error) {
      return error;
    }
  }
}
