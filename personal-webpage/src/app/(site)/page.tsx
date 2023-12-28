import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";
import Image from 'next/image'

export default async function Home() {
  
  const projects = await getProjects();
  console.log(projects)

  return (
    <div className="">
      
      <h1 className="text-7xl font-extrabold">Hello, I&apos;m{' '}
       <span className="bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent" >David</span>
      !</h1>
      <p className="mt-3 text-xl text-gray-600">Thanks for vissiting my webpage. Its nice to have you here. Feel free to check out my <span className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent">projects</span>.</p>
      
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-orange-500 transition">
            {project.image && (
              <Image 
              src={project.image}
              alt={project.name}
              height={300}
              width={750}
              className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
          ))
        }
      </div>
    </div>
  )
}
