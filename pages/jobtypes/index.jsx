import React from 'react';

import { StyledNav, StyledLink } from "../../src/styles";
import QxFormJobType from '../../src/Components/QxForm/QxFormJobType';
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
                <QxFormJobType />
            </ErrorBoundary>
        </>
    )
}

export default ByJobTypes;