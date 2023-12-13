// import Image from "next/image";
import Hero from "../components/Hero";
import { fetchDataStrapi, processScholarship } from "@/utils/strapi.utils";
import Carousel from "@/components/Carousel";
import ScholarshipPreviewBlock from "@/components/ScholarshipPreviewBlock";

export default async function Home() {
    // home page ---
    // INDEX ROUTE essentially / GET ALL
    const data = await fetchDataStrapi("scholarships-landing?populate=deep"); // this is SCHOLARSHIPS route
    const processedData = processScholarship(data);
    // console.log("processedData", processedData);

    return (
        <div>
            <Hero />
            <article className="flex flex-col items-center justify-between p-1">
                <h1 className="text-3xl font-bold text-center">Wow, this is a cool page!</h1>
            </article>
            {/* <Carousel /> */}
        </div>
    );
}
