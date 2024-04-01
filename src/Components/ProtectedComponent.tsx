import withAuth from "./withAuth"
import React from "react";

const ProtectedComponent = () => {
    return (
        <div>Protected Component</div>
    )
}

export default withAuth(ProtectedComponent);