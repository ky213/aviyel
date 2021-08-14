import { Controller, Get, Param, Post, Query } from '@nestjs/common';

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
  getInvoiceById(@Param('id') id: string) {
    return 'hello invoice ' + id;
  }

  @Post()
  createInvoice() {
    return 'create invoice';
  }
}
