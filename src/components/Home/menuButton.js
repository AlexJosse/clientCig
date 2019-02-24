import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import green from "@material-ui/core/colors/green";
import {fade} from "@material-ui/core/styles/colorManipulator";
import PropTypes from "prop-types";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const styles = theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    root: {
        display: 'flex',
    },
    accessoire:{
       color: green.A700,
    },
});

class MenuApp extends React.Component {
    state = {
        anchorEl: null
    };


    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const Wrapper = this.props.iconType;
        const listItems = this.props.items.map((link) =>
            <MenuItem onClick={this.handleClose} >{link}</MenuItem>
        );

        return (
            <div>
                <IconButton
                    aria-owns={open ? 'header' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="contrast"
                >
                    <Wrapper />
                </IconButton>
                <Menu
                    id="header"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    {listItems}


                </Menu>
            </div>
        );
    }

}
class AppButton extends React.Component {
    state = {
        anchorEl: null
    };


    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const Wrapper = this.props.nameButton;
        const listItems = this.props.items.map((link) =>
            <MenuItem onClick={this.handleClose} >{link}</MenuItem>
        );

        return (
            <div>
                <Button color="primary"
                    aria-owns={open ? 'header-button' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                >
                    <Typography className={classes.accessoire} variant="h6" color="inherit" noWrap>
                        {Wrapper}
                    </Typography>
                </Button>
                <Menu
                    id="header-button"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    {listItems}
                </Menu>
            </div>
        );
    }

}

class MenuListComposition extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        const  nameMenu  = this.props.nameMenu;
        const listItems = this.props.items.map((link) =>
            <MenuItem onClick={this.handleClose} >{link}</MenuItem>
        );

        return (
            <div className={classes.root}>
                <div>
                    <Button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        { nameMenu }
                    </Button>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            { listItems }
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}

AppButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

const AppButtonComponent = withStyles(styles)(AppButton);
const MenuComponent = withStyles(styles)(MenuApp);
const MenuListCompositionComponent =  withStyles(styles)(MenuListComposition);
export {AppButtonComponent, MenuComponent, MenuListCompositionComponent};
