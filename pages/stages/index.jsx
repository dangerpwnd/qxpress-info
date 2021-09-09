import React from 'react';

import { StyledNav, StyledLink } from "../../src/styles";
import QxForm from '../../src/Components/QxForm/QxForm';
import ErrorBoundary from '../../src/Components/ErrorBoundary';

const ByStages = () => {
    return (
        <>
            <StyledNav>
                <StyledLink href="/stages">By Stages</StyledLink>
                <StyledLink href="/techs">By Techs</StyledLink>
            </StyledNav>
            <h1>Qxpress Job Reports By Stages</h1>
            <ErrorBoundary>
                <QxForm />
            </ErrorBoundary>
        </>
    )
}

export default ByStages;