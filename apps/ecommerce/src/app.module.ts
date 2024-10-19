import { forwardRef, Module } from '@nestjs/common';
import { EcommerceService } from './ecommerce.service';
import { InventoryService } from 'apps/inventory/src/inventory.service';

@Module({
  imports: [
    forwardRef(() => EcommerceService),
    forwardRef(() => InventoryService),
    ],
})
export class AppModule {}
