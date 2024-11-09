import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return(
        <div className="Main">
            <h1>
           Ooops!
            </h1>
            <h3>This page doesn't exist.</h3>
        </div>
    )
}

export default ErrorPage