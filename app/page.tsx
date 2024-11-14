import {Header} from "@/app/components/header";
import {Properties} from "@/app/components/properties";
import {API_TENEMENT_SEARCH, OPTIONS} from "@/app/utils/api-config";

export default async function Home() {
    const res = await fetch(API_TENEMENT_SEARCH, OPTIONS)
    const data = await res.json()

    return (
        <>
            <Header/>
            <Properties properties={data?.res}/>
        </>
    );
}
