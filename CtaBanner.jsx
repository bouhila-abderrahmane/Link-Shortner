import "./App"


import Button from "@mui/material/Button"


export default function CtaBanner(){
    return(
        <div className="bannerContainer">
            <h2>Boost your links today</h2>
            <Button className="getStartedButton"  variant="contained" >Get started</Button>
        </div>
    )
}