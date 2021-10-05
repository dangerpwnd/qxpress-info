import React from 'react';

import { StyledNav, StyledLink } from "../../src/styles";
import QxForm from '../../src/Components/QxForm/QxForm';
import ErrorBoundary from '../../src/Components/ErrorBoundary';

const ByJobTypes = () => {
    return (
        <>
            <StyledNav>
                <StyledLink href="/jobtypes">By Job Types</StyledLink>
                <StyledLink href="/techs">By Techs</StyledLink>
            </StyledNav>
            <h1>Qxpress Job Reports By Job Types</h1>
            <ErrorBoundary>
                <QxForm />
            </ErrorBoundary>
        </>
    )
}

export default ByJobTypes;