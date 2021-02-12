import React from "react"
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Products from './Products'
import Shop from './Shop'

function Home() {
    const [view, setView] = React.useState(<Products />);
    const handleChange = (event, nextView) => {
         nextView === 'module'? setView(<Shop />): setView(<Products />) 
    };
    return (
        <Container>
            <Grid container>
                <Grid item xs={10} />
                <Grid item xs={2} >
                    <ToggleButtonGroup  orientation="horizontal" value={view} exclusive onChange={handleChange}>
                        <ToggleButton  value="module" aria-label="module">
                            <ViewModuleIcon />
                        </ToggleButton>
                        <ToggleButton value="list" aria-label="list">
                            <ViewListIcon />
                        </ToggleButton>
                    </ToggleButtonGroup> 
                </Grid>
            </Grid>
            <Grid container >
                {view}
            </Grid>            
        </Container>            
    )
}
export default Home