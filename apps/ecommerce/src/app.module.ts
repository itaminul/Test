import { Module, forwardRef } from '@nestjs/common';
import { EcommerceService } from './ecommerce.service';
import { InventoryService } from 'apps/inventory/src/inventory.service'; // Ensure this path is correct
import { EcommerceModule } from './ecommerce.module';

@Module({
  imports: [
    // EcommerceModule
    // If you have other modules, include them here
  ],
  providers: [
    EcommerceService,
    InventoryService,
  ],
  exports: [
    EcommerceService,
    InventoryService,
  ],
})
export class AppModule {}
