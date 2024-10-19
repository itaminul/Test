import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { InventoryService } from "apps/inventory/src/inventory.service";

@Injectable()
export class EcommerceService {
  private products = [];
  @MessagePattern("createdProduct")
  handlerProductCreation(@Payload() product: any) {
    this.products.push(product);
    console.log("Product creatd", product);
    return { status: "success", product };
  }
  getHello(): string {
    return "Hello World!";
  }
}
