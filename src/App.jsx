import { useState } from "react";
import React from "react";
import "./App.css";
import PrimeChecker from "./customHook/PrimeChecker";
import Search from "./customHook/Search";
import Content from "./customHook/Content";

export const AppsContext = React.createContext({});
function App() {
    const [apps] = useState({
        username: "adityae",
        description: "Enigma campppppppppp",
        contact: [
            {
                label: "Twitter",
                url: "https://twitter.com/",
            },
            {
                label: "Github",
                url: "https://github.com/adityaeee",
            },
            {
                label: "Instagram",
                url: "https://instagram.com/@adityaeeeee",
            },
        ],
    });

    return (
        <>
            <AppsContext.Provider value={{ apps }}>
                <div>
                    <h1 className="text-center">USE CONTEXT</h1>
                    <Content />
                </div>
                <div>
                    <h1 className="text-center">USE MEMO</h1>
                    <PrimeChecker />
                </div>
                <div>
                    <h1 className="text-center">USE CALLBACK</h1>
                    <Search />
                </div>
            </AppsContext.Provider>
        </>
    );
}

export default App;
