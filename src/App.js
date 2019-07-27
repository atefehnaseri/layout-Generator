import React from 'react';
import './App.css';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import LayoutView from './components/LayoutView/index'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 150,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 150,
    },
}));

const layoutValues = [
    {
        value: 'XL',
        label: 'XL',
    },
    {
        value: '2XL',
        label: '2XL',
    },
    {
        value: '4L',
        label: '4L',
    },
    {
        value: 'XL/2L',
        label: 'XL/2L',
    },
    {
        value: 'XL/L/2SM',
        label: 'XL/L/2SM',
    },
];

export default function App() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        layout: '',
        layoutTypes: [],
        layoutCount: []
    });

    const handleChange = event => {
        parseLayoutTypes(event);
    };
    const parseLayoutTypes = (event) => {
        let layout = event.target.value;
        let layoutType = layout.split("/");
        let layoutTypes = layoutType.map(layout => {
            let firstChar = layout.charAt(0);
            return isNaN(parseInt(firstChar)) ? layout : layout.slice(1)
        });
        let layoutCounts = layoutType.map(layout => {
            let layoutCount = parseInt(layout);
            return isNaN(layoutCount) ? 1 : layoutCount
        });
        return setValues({layout: event.target.value, layoutTypes: layoutTypes, layoutCounts: layoutCounts});

    };

    return (
        <React.Fragment>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="layout-values"
                    select
                    label="Select a layout"
                    className={classes.textField}
                    value={values.layout}
                    onChange={handleChange}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                    {layoutValues.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </form>
            <LayoutView layoutTypes={values.layoutTypes}
                        layoutCounts={values.layoutCounts}/>
        </React.Fragment>
    )
}