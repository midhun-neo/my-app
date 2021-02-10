import React from "react"
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '50ch'
                
            },
            flexGrow: 1,
        },
        heading: {
            padding: theme.spacing(6),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    })
)


function ContactUs() {
    const classes = useStyles()
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container >
                <Typography className={classes.heading} variant="h6" color="inherit" noWrap>
                    Contact Us
                </Typography>
                <br />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField required id="standard-basic" label="Full Name" />                    
                    <br />
                    <TextField required id="standard-basic" label="Email" />
                                     
                    <br />
                    <br />
                    <TextField
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline
                        rows={6}
                        cols={200}
                    defaultValue="Hello Team,"
                    variant="outlined"
                    />
                    <br/>
                    <Button variant="contained" color="primary">
                       Submit
                    </Button>
                </form>
            </Grid>
        </Container>
      );
  }

  export default ContactUs