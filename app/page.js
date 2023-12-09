// import Image from "next/image";
import ScholarshipBlock from "@/components/ScholarshipBlock";
import Hero from "../components/Hero";
import axios from "axios";
import JsonTest from "../components/JsonTest";
import { fetchDataStrapi, processScholarship } from "@/utils/strapi.utils";

export default async function Home() {
    // const data = await fetchDataStrapi("scholarships"); // this is SCHOLARSHIPS route
    // const processedData = processScholarship(data);
    

    return (
        <div>
            <Hero />
            <article className="flex flex-col items-center justify-between p-4">
                <h1 className="text-3xl font-bold text-center">Wow, this is a cool page!</h1>
            </article>
            {/* <ScholarshipBlock data={processedData} /> */}
            <ScholarshipBlock >
                
            </ScholarshipBlock>
            {/* <JsonTest /> */}
        </div>
    );
}
