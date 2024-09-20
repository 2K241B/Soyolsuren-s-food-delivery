'use client'

import { instance } from "@lib/axiosInstance";
import { useEffect, useState } from "react";

export const useCategories = () => {
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await instance('category');
                setResponse(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetch()
    }, [])
    return { response, loading, error }
}