import {useRouteError} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Paper width='300'>
                <Typography variant='h1'>
                    Oops!
                </Typography>
                <Typography variant='h6'>
                    Sorry, an unexpected error has occurred.
                </Typography>
                <Typography>
                    {error.statusText || error.message}
                </Typography>
            </Paper>
        </div>
    );
}