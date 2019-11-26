import React from 'react';
import { UsersList, User } from '../features/Users'
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom'
import { routesConst } from '../constants';
import { UserStat } from "../features/Statistic";

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
                <Route path={`${routesConst.PATH_USERS}/:id`} exact
                       render={(props) => (
                           <User id={props.match.params.id} {...props} />
                       )}
                />
                <Route path={`${routesConst.PATH_STATISTIC}/:id`} exact
                       render={(props) => (
                           <UserStat id={props.match.params.id} {...props} />
                       )}
                />
                <Route path="*" component={() => <div>Not found</div>} exact/>
            </Switch>
        </Wrapper>
    );
}

export default Content;