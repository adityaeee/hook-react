import { useMemo } from "react";
import { useState } from "react";

// menentukan nilai prima
import React from "react";

const isPrime = (num) => {
    console.log("Calculating prime...", num);
    if (num < 2) return false;
    for (let i = 0; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const PrimeChecker = () => {
    const [number, setNumber] = useState(0);
    const [otherState, setOtherState] = useState(false);

    // untuk memoize hasil perhitungan angka prima
    const isNumberPrime = useMemo(() => {
        return isPrime(number);
    });

    console.log("Component rendered");

    return (
        <div>
            <h2>Prime Checker</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <p>
                {number} is{" "}
                {isNumberPrime ? "a prime number" : "not a prime number"}
            </p>
        </div>
    );
};

export default PrimeChecker;
