import ClipLoader from "react-spinners/ClipLoader";

const ReactSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loading">
                <div className="preloader">
                    <ClipLoader
                        color={'#d63636'}
                        size={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReactSpinner