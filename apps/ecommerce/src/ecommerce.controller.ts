import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { EcommerceService } from "./ecommerce.service";
import { ClientProxy } from "@nestjs/microservices";

@Controller("ecommerce")
export class EcommerceController {
  constructor(
    private readonly ecommerceService: EcommerceService,
    @Inject("EcommerceService") private client: ClientProxy
  ) {}

  @Post("products")
  async createProduct(@Body() product: any) {
    console.log("dasfa");
  }

  @Get()
  getHello(): string {
    return this.ecommerceService.getHello();
  }
}
