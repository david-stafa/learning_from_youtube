import { createClient, groq } from "next-sanity";
import { Project } from "../types/project";
import { Page } from "../types/page";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> { // to add typescript features to projects 
    return createClient(clientConfig).fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            alt,
            url,
            content
        }`
    )
}

export async function getProject(slug:string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            alt,
            url,
            content
        }`,
        { slug }
    )
}

export async function getPages(): Promise<Page[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type == 'page']{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`
    )
}

export async function getPage(slug: string): Promise <Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'page' && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        {slug}
    )
}