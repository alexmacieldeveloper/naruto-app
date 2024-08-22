import Typography from '@mui/material/Typography'
import { Layout } from '../../components/Layout'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { api } from '../../services/api'




export const AkatsukiPage = () => {
    const [ akatsukiPersons, setAkatsukiPersons ] = useState([])

    useEffect(() => {
        api
            .get('akatsuki').then((response) => {
                if (response.status === 200) {
                    setAkatsukiPersons(response.data.akatsuki)
                }
        });
      }, []);

    
    return (
        <Layout>
            <Box sx={{ display: 'grid', padding: '12px'}}>
                <Typography variant="h3" color="text.primary">AKATSUKI</Typography>
                <Box sx={{ display: { xs: 'block', sm: 'grid', md: 'grid'}, gridAutoColumns: 'auto auto auto auto', gap: '16px', gridTemplateColumns: '248px 248px 248px 248px 248px' }}
                >
                    {akatsukiPersons.map(((node: any) => {
                        return (
                            <Card sx={{ maxWidth: 250, margin: '12px 0'}}>
                                <CardMedia
                                    sx={{ height: 190 }}
                                    image={node.images[0]}
                                    title={node.name}
                                />
                                <CardContent sx={{ padding: '12px'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {node.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    }))}
                </Box>
            </Box>
        </Layout>
    )
}