import React from 'react';
import UsersList from '../features/Users'
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom'
import { routesConst } from '../constants';

const Wrapper: React.FC = styled.div<ContentProps>`
    margin: 30px 25px 0 100px;
`;

export interface ContentProps {
}

const Content: React.FC<ContentProps> = () => {
    return (
        <Wrapper>
            <Switch>
                <Route path={routesConst.PATH_USERS} component={UsersList} exact/>
                <Route path="*" component={() => <div>Not found</div>} exact/>
            </Switch>
        </Wrapper>
    );
}

export default Content;