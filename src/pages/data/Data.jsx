import { Typography } from '@mui/material'
import React from 'react'
import DataTable from '../../components/data/DataTable'

const Data = () => {
  return (
    <>
        <Typography variant="h2" sx={{textAlign: 'center', mt: 4, mb: 4}}>Data</Typography>
        <DataTable />
    </>
    
  )
}

export default Data