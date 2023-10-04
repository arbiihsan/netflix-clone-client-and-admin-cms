import { useEffect, useState } from "react";

const useFetch = (url = "") => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw await Response.text()
            }

            const resJSON = await res.json()

            setData(resJSON)
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    return {
        data,
        loading,
        refetch: fetchData
    }
}

export default useFetch