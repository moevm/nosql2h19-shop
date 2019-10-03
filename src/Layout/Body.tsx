import React from 'react';
import UsersList from '../features/Users'
import styled from "styled-components";

const Wrapper: React.FC = styled.div<BodyProps>`
    margin-left: 75px;
`;

export interface BodyProps {
}

const Body: React.FC<BodyProps> = () => {
    return (
        <Wrapper>
            <UsersList />
        </Wrapper>
    );
}

export default Body;