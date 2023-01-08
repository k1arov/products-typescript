import React from "react";

interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p className="text-center text-red-700 font-bold">{error}</p>
    )
}