import { PortableTextBlock } from "sanity";

export type Page = {
    _id: string;
    _createdAy: Date;
    title: string;
    slug: string
    content: PortableTextBlock[]
}