import {Header} from "@/app/components/header";
import {Properties} from "@/app/components/properties";
import {API_TENEMENT_SEARCH, DEFAULT_FILTERS} from "@/app/utils/consts";

export default async function Home() {
    // New method for ssr request in Next.js 15
    const res = await fetch(API_TENEMENT_SEARCH, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DEFAULT_FILTERS)
    })
    const data = await res.json()

    return (
        <>
            <Header/>
            <Properties properties={data?.res}/>
        </>
    );
}
