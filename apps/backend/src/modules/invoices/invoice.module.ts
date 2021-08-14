import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceModel } from './invoice.model';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [InvoiceModel],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
