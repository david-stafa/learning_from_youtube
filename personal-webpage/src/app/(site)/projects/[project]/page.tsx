import Image from "next/image";
import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: {project: string}
}

export default async function Project({ params }: Props){

    const slug = params.project;
    const project = await getProject(slug)

    return(
        <div className="">
            <header className="flex justify-between items-center">
                <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent text-6xl font-extrabold drop-shadow">{project.name}</h1>

                <a 
                href={project.url ? project.url : '#'} 
                title="View Project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-400 hover:text-black transition"
                > 
                View Project
                </a>
            </header>

            {/*  */}
            <Image
                src={project.image}
                alt={project.name}
                width={1920}
                height={1080}
                className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
            />

            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content} />
            </div> 
            

        </div>

    )
}