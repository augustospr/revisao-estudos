import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardPokemon({ nome, imagem, tipos }) {

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image={imagem}
				title={nome}
			/>
			<CardContent>
				<Typography className='nomePokemon' gutterBottom variant="h5" component="div">
					{nome}
				</Typography>
			</CardContent>
			<CardActions>
				<Typography className='tipos' gutterBottom variant="h8" component="div">
					{`tipo 1 | tipo 2`}
				</Typography>
			</CardActions>
		</Card>
	);
}