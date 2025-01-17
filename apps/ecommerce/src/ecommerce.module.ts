import { Module } from '@nestjs/common';
import { EcommerceController } from './ecommerce.controller';
import { EcommerceService } from './ecommerce.service';

@Module({
  imports: [],
  controllers: [EcommerceController],
  providers: [EcommerceService],
  exports: [EcommerceService],  
})
export class EcommerceModule {}
