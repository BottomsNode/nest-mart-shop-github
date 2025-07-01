import { SalesRepository } from './repository/sales.repository';
import { Mapper } from '@automapper/core';
import { SaleResponseDTO } from './dto/sales/response-sales.dto';
import { SaleDTO } from './dto/sales/main-sales.dto';
import { CreateSaleDTO } from './dto/sales/create-sales.dto';
import { IdParamDto } from 'src/common';
import { UpdateSaleDTO } from './dto/sales/update-sales.dto';
import { ProductRepository } from '../product/repository/product.repository';
export declare class SaleService {
    private readonly salesRepo;
    private readonly productRepo;
    private readonly mapper;
    constructor(salesRepo: SalesRepository, productRepo: ProductRepository, mapper: Mapper);
    create(dto: CreateSaleDTO): Promise<SaleResponseDTO>;
    getAllSales(): Promise<SaleDTO[]>;
    getSaleById(params: IdParamDto): Promise<SaleResponseDTO>;
    updateSale(params: {
        Id: number;
    }, dto: UpdateSaleDTO): Promise<SaleResponseDTO>;
    deleteSale(params: IdParamDto): Promise<void>;
}
