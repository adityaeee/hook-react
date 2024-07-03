import React, { useContext } from "react";
import { AppsContext } from "../App";

export default function Content() {
    const { apps } = useContext(AppsContext);

    return (
        <div>
            <h3>Description</h3>
            <p>{apps.description}</p>
            <h4>{apps.username}</h4>
            <div>
                <ul>
                    {apps.contact.map((list, key) => {
                        return (
                            <li key={key}>
                                <a href={list.url} target="blank">
                                    {list.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
