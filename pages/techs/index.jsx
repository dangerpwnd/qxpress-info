import React from 'react';

import { StyledNav, StyledLink } from "../../src/styles";
import QxFormTech from '../../src/Components/QxForm/QxFormTech';
import ErrorBoundary from '../../src/Components/ErrorBoundary';

const ByTechs = () => {
    return (
        <>
            <StyledNav>
                <StyledLink href="/jobtypes">By Job Types</StyledLink>
                <StyledLink href="/techs">By Techs</StyledLink>
            </StyledNav>
            <h1>Qxpress Job Reports By Techs</h1>
            <ErrorBoundary>
                <QxFormTech />
            </ErrorBoundary>
        </>
    )
}

export default ByTechs;