import React from "react";
import {UsersDataState} from "../reducer";
import {createStyles, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import {RouteComponentProps} from "react-router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            flexGrow: 1,
            overflowX: "auto",
            marginTop: "20px"
        }
    })
);

export interface UserPropsInterface {
    id: string,
    user: UsersDataState
}

const User: React.FC<UserPropsInterface & RouteComponentProps<any>> = ({ user }) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h5">{user.name}</Typography>
            <Paper className={classes.root} elevation={0}>

            </Paper>
        </>
    );
};

export default User;