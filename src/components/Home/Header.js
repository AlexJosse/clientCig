import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SmokingRooms from '@material-ui/icons/SmokingRooms';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { MenuComponent } from "./menuButton";
import { MenuListCompositionComponent } from "./menuButton";
import green from '@material-ui/core/colors/green';
import Button from "@material-ui/core/Button";


const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    SmokingRooms: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    appBar: {
        backgroundColor : green.A400,
        position : 'relative'
        },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    button: {
        paddingLeft: theme.spacing.unit * 5,
        marginLeft: 10,
        paddingRight: theme.spacing.unit * 5,
    },
    about: {
        color: green.A700,

    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
});

function UserGreeting(props) {
    return <MenuComponent
            iconType={AccountCircle}
            items={["Profile", "User Management", "Logout"]}
            />;
}

function GuestGreeting(props) {
    return  <MenuComponent
        iconType={AccountCircle}
        items={["Sign in"]}
    />;
}

class Greeting extends React.Component {
    render() {
        const isLoginIn = this.props.isLoginIn;
        if (isLoginIn) {
            return <UserGreeting/>;
        }
        return <GuestGreeting/>;
    }
}

class Header extends React.Component {
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
        const { anchorEl  } = this.state;
        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton className={classes.SmokingRooms} color="inherit" aria-label="Open drawer">
                            <SmokingRooms/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Livraison de nuit
                        </Typography>
                        <MenuListCompositionComponent
                            nameMenu={"Accessoire"}
                            items={["Tubes", "Grilles", ""]}
                        />
                        <Button>
                            <Typography className={classes.about} variant="h6" color="inherit" noWrap>
                                CONTACT
                            </Typography>
                        </Button>
                        <Button>
                            <Typography className={classes.about} variant="h6" color="inherit" noWrap>
                                A PROPOS
                            </Typography>
                        </Button>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Chercher un produit ..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <MenuComponent
                                iconType={ShoppingCart}
                                items={["items1", "items2", "items3", "items4", "Afficher le panier"]}
                            />

                        </div>

                        <div className={classes.sectionDesktop}>
                            <Greeting isLoginIn={true}/>
                        </div>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

/* {renderMenu}
                {renderAccessoire}*/

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const HeaderComponent = withStyles(styles)(Header);
