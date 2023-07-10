import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardPokemon() {

	const imagem = (`https://33.media.tumblr.com/aa98ada485473e0205fe2d1be60f1e43/tumblr_nlztm5G3yH1tuhxweo1_400.gif`)
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image={imagem}
				title={`title da imagem`}
			/>
			<CardContent>
				<Typography className='nomePokemon' gutterBottom variant="h5" component="div">
					{`nome`}
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