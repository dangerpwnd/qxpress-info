import React, {Component} from 'react';

class ErrorBoundary extends Component {

    state = {
        error: '',
        errorInfo: '',
        hasError: false,
    };

    static getDerivedStateFromError(error){
        // Update state so next render uses fallback UI
        return {hasError:true, error};
    }

    componentDidCatch(error, errorInfo){
        console.log({error, errorInfo});
        this.setState({errorInfo});
    }

    render(){
        const ErrorComponent = () => {
            return(
                <div role="alert">
                    <p>Scream at Eric. He broke it. Or you did. Only the logs will tell.</p>
                </div>
            ) 
        }
        const { hasError} = this.state;
        const { children } = this.props;

        return hasError ? <ErrorComponent /> : children;
    }
}

export default ErrorBoundary;