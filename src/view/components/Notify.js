import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { changeNotify } from '../../store/actions/notify.actions';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    success: {
        backgroundColor: green[500],
        color: (props) => props.color,
    },
    error: {
        backgroundColor: red[600],
        color: (props) => props.color,
    }
});


export default function Notify(props) {
    const dispatch = useDispatch();
    const notify = useSelector(state => state.notifyReducer)
    const classes = useStyles(props);

    return (
        <Snackbar
            anchorOrigin={{
                horizontal: notify.original,
                vertical: notify.vertical
            }}
            open={notify.open}
            autoHideDuration={notify.time}
            onClose={() => dispatch( changeNotify({open: false}))}
        >
            <SnackbarContent
                className={classes[notify.class] + 'd-flex justify-content-center'}
                message={
                    <span className="d-flex align-items-center">
                        {notify.msg}
                    </span>
                } 
            />
        </Snackbar>
    )
}
