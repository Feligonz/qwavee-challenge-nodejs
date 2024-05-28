import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductsQueryDto } from './dto/get-product-query.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(query: GetProductsQueryDto): Promise<{
        data: import("./entities/product.entity").Product[];
        total: number;
        page: number;
        lastPage: number;
    }>;
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("./entities/product.entity").Product>;
    remove(id: string): Promise<void>;
}
