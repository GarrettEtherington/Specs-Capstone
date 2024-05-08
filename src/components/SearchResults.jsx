import { useLocation } from "react-router";

const Results = () => {
    const location = useLocation()
    const data = location.state

    return (
        <p>Name: {data.name}</p>
    )
}

export default Results