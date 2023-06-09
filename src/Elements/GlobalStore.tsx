import React, {useContext} from "react";
import useSWR from "swr";
import axios from "axios";

export const GlobalStoreContext = React.createContext({
    gridSize: 4,
    sharepointURL: "sharepointURL-default"
});


export function useGlobalStore() {
    const context = React.useContext(GlobalStoreContext);
    if (!context) {
        throw new Error("You forgot to wrap GlobalStoreProvider");
    }

    return context;
}

const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);

function SWRgetJSON(props:any){
    const context = useGlobalStore();

    const swr = useSWR(props.url.href, fetcher);

    if (swr.error) return (
        <p>🔴 Failed to fetch. (<a href={props.url.href}>{props.url.pathname.split('/').pop()})</a></p>);

    if (swr.isLoading) return (
        <p>🟡 Loading....(<a href={props.url.href}>{props.url.pathname.split('/').pop()})</a></p>);

    //console.log("Data", props.url.href)
    //console.log(swr.data)


    // @ts-ignore
    context[props.context_name] = swr.data.data
    //console.log(props.context_name)
    // @ts-ignore
    //console.log(context[props.context_name])

    return (<></>);
}


export function GlobalStoreProvider2(props: any) {
    const context = useGlobalStore();


    return (<div>
        <GlobalStoreContext.Provider value={context}>
                {props.children}
        </GlobalStoreContext.Provider>
    </div>)


}

