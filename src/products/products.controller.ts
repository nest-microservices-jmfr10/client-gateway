import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'createProduct';
  }

  @Get()
  findAllProducts() {
    return 'findAllProducts';
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return 'findOne' + id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'delete' + id;
  }

  @Patch(':id')
  patchProduct(@Param('id') id: string, @Body() body: any) {
    return 'patch' + id;
  }
}
