"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesItemRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("../../../common");
const nestjs_1 = require("@automapper/nestjs");
const sale_item_entity_1 = require("../entities/items/sale-item.entity");
let SalesItemRepository = class SalesItemRepository extends common_2.BaseRepository {
    salesItemRepo;
    mapper;
    constructor(salesItemRepo, mapper) {
        super(salesItemRepo);
        this.salesItemRepo = salesItemRepo;
        this.mapper = mapper;
    }
    async queryBuilder(query, params = []) {
        return await this.salesItemRepo.query(query, params);
    }
};
exports.SalesItemRepository = SalesItemRepository;
exports.SalesItemRepository = SalesItemRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sale_item_entity_1.SaleItemEntity)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], SalesItemRepository);
//# sourceMappingURL=salesItem.repository.js.map