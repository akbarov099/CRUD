import { HydratedDocument } from "mongoose";
export type BlogDocument = HydratedDocument<Blog>;
export declare class Blog {
    title: string;
    excerpt: string;
    description: string;
}
export declare const BlogSchema: any;
