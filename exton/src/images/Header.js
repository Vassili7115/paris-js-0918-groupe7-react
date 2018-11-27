// Import de base
import React from 'react';

// Import du logo Exton depuis dossiers images
import logo from './logo_exton.png';

// Import Material
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


// Déclaration de la const pour le style
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    logo: {
        minWidth: 50,
        maxWidth: 340,
        padding: 30,
    },
});

// Déclaration de la fonction stateless HEADER
const Header = (props) => {
    const { classes } = props;
        return(
        <div className="Header">
            <div className={classes.root}>
                <Grid>
                    <img item xs={6} md={5} xl={12} className={classes.logo} src={logo} alt='logo Exton'/>
                </Grid>
            </div>
        </div>
        )
};


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
