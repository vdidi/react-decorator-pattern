import React from "react";

type withAuthProps = {
    isAuthenticated: boolean
}

const withAuth = (WrappedComponent: any) => {
    return function({ isAuthenticated, ...props }: withAuthProps) {
        if(!isAuthenticated) return <div>User is not authenticated</div>
        return <WrappedComponent {...props} />
    }
}

export default withAuth;