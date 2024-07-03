import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);

    const search = useCallback(async () => {
        if (searchKey !== "") {
            try {
                const response = await axios(
                    `https://jsonplaceholder.typicode.com/posts?title_like=${searchKey}`
                );
                setResults(response.data);
            } catch (error) {
                console.error("Error during search:", error);
            }
        }
    }, [searchKey]);

    useEffect(() => {
        const timerId = setTimeout(() => search(), 500); // simulasi biar delay 500ms

        return () => clearTimeout(timerId);
    }, [search]);

    return (
        <div>
            <input
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Type to search..."
            />
            <h3>result</h3>
            {(results.length > 0 && (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result?.title}</li>
                    ))}
                </ul>
            )) || <h4>--- no result ---</h4>}
        </div>
    );
}
