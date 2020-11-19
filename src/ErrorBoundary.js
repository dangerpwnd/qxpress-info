import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error){
        // Update state so next render uses fallback UI
        return {hasError:true};
    }

    render(error){
        if(this.state.hasError){
            return(
                <div role="alert">
                    <p>Scream at Eric. He broke it.</p>
                    <pre>{error}</pre>
                </div>
            ) 
        }
        return this.props.children;
    }
}

export default ErrorBoundary;