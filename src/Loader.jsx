import CircularProgress from '@mui/material/CircularProgress';

function Loader(){
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            <CircularProgress sx={{color:"white"}}></CircularProgress>
        </div>
    )
}

export default Loader;