import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InventoryService } from 'apps/inventory/src/inventory.service';

@Injectable()
export class EcommerceService {
  constructor(
    @Inject(forwardRef(() => InventoryService))
    private commonService: InventoryService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
