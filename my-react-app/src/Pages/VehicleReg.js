import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

    /*
    This page's ui is modified using mui library.
    */
export default function VehicleReg() {
    const[plate,setPlate]=useState('')
    const[vehicleMake,setVehicleMake]=useState('')
    const[price,setPrice]=useState('')
    const[insuranceProvider,setInsuranceProvider]=useState('')

    const checkTextInput = (e) => {
        if (!plate.trim()) {
            alert('Please Enter Plate Number'); 
            window.location.href = '/VehicleReg'
        }else if (!vehicleMake.trim()) {
            alert('Please Enter Vehicle Make');
            window.location.href = '/VehicleReg'
        }else if (!price.trim()) {
            alert('Please Enter Price');
            window.location.href = '/VehicleReg'
        }else if (!insuranceProvider.trim()) {
            alert('Please Enter Insurance Provider');
            window.location.href = '/VehicleReg'
        }else{
            handleClick(e);
        }
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const vehicle={plate, vehicleMake, price, insuranceProvider}
        console.log(vehicle)
        fetch("http://localhost:8080/vehicle/addVehicle",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(vehicle)
        }).then(()=>{
            console.log("Vehicle added")
            window.location.href = '/MemberHome'
        })
    }



    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Vehicle Registration
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="plateNum"
                        name="plateNum"
                        label="Plate Number"
                        fullWidth
                        variant="standard"
                        value={plate}
                        onChange={(e)=>setPlate(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="vehicleMake"
                        name="vehicleMake"
                        label="Vehicle Make"
                        fullWidth
                        variant="standard"
                        value={vehicleMake}
                        onChange={(e)=>setVehicleMake(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="Price"
                        fullWidth
                        variant="standard"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="insuranceProvider"
                        name="insuranceProvider"
                        label="Insurance Provider"
                        fullWidth
                        variant="standard"
                        value={insuranceProvider}
                        onChange={(e)=>setInsuranceProvider(e.target.value)}
                    />
                </Grid>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                      onClick={checkTextInput}>
                    Submit Registration
                </Button>
            </Grid>
        </React.Fragment>
    );
}