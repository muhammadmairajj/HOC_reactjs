// A Higher-Order Component (HOC) that checks for user authentication:

const withAuth = (WrapperComponent: any) => {
    return (props: any) => {
        let isAuthenticated = true;  // here you can used to token, userId, etc 

        if(!isAuthenticated) {
            return <h1>Login First</h1> // here, we can navigate in Login Page
        } 
        return <WrapperComponent { ...props } />
    }
}

export default withAuth;