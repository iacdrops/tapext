import { useRouter } from "next/router";
import React from "react";

export default () => {
    const router = useRouter()

    const { id } = router.query
    return (<h1>Note: {id}}</h1>)
}