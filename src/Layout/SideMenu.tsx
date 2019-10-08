import React from "react";
import clsx from "clsx";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { ChevronRight, ChevronLeft, PeopleAlt, InsertChart } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';
import { routesConst } from '../constants';
import styled from "styled-components";

const NavLinkWithActive = styled(NavLink)`
    border-bottom: 1px solid #ccc;
    &:last-child {
        border-bottom: none;
    }
    &.active {
        background-color: #efefef;
        display: block;
    }
`;

interface NavigationItem {
    name: string,
    icon: JSX.Element,
    title: string,
    route: string
}

const navigation: Array<NavigationItem> = [
    {
        name: 'users',
        icon: <PeopleAlt />,
        title: 'Пользователи',
        route: routesConst.PATH_USERS
    },
    {
        name: 'statistic',
        icon: <InsertChart />,
        title: 'Статистика',
        route: routesConst.PATH_STATISTIC
    }
]

interface SideMenuProps {
  open: boolean;
  classes: any;
  theme: any;
  handleDrawerClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  open,
  classes,
  handleDrawerClose,
  theme
}) => {
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRight />
          ) : (
            <ChevronLeft />
          )}
        </IconButton>
      </div>
      <Divider />
      <List disablePadding>
        {navigation.map(({ name, icon, title, route }: NavigationItem, index) => (
            <NavLinkWithActive to={route} key={name}>
                <ListItem button>
                    <ListItemIcon>
                        { icon }
                    </ListItemIcon>
                    <ListItemText primary={title} />
                </ListItem>
            </NavLinkWithActive>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
