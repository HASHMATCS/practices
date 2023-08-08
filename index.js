// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Category } from './schemas/category.schema';
// import mongoose from 'mongoose';

// @Injectable()
// export class CategoryService {
//   constructor(
//     @InjectModel(Category.name)
//     private CategoryModel: mongoose.Model<Category>,
//   ) {}

//   async createCategory(category: Category): Promise<Category> {
//     const data = await this.CategoryModel.create(category);
//     return data;
//   }

//   async getAllCategory(): Promise<Category[]> {
//     const data = await this.CategoryModel.find();
//     return data;
//   }
//   async getOne(id: string): Promise<Category> {
//     const data = await this.CategoryModel.findById(id);
//     return data;
//   }
//   async updateOne(id: string, updatedBody: string): Promise<Category> {
//     const data = await this.CategoryModel.findById(id);
//     Object.assign(data, updatedBody);
//     await data.save();
//     return data;
//   }
//   async deleteOne(id: string): Promise<string> {
//     const data = await this.CategoryModel.findById(id);
//     if (!data) {
//       throw new NotFoundException('No document found with that Id');
//     }
//     return 'data successfully deleted';
//   }
// }
