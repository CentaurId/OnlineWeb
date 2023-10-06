import { useRouteError } from "react-router-dom"
const ErrorPage = ()=>{
    const error = useRouteError()
    return(
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">Ooops ..</h1>
            <p className="text-slate-500 text-medium text-center mb-2">Sorry, unexpected error has occured </p>
            <p className="text-slate-500 text-medium text-center">
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorPage