import { PortableText } from "@portabletext/react";
import { getPage } from "../../../../sanity/sanity-utils"

type Props = {
    params: {slug: string}
}

export default async function Page ({params}: Props){
    const page = await getPage(params.slug);
    console.log(page)

    return (
        <div>
         <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent text-6xl font-extrabold drop-shadow">
            {page.title}
        </h1>

        <div className="text-lg text-gray-700 mt-10">
            <PortableText value={page.content} />
        </div>
       </div>
    )

}