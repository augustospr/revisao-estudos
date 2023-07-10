import { Button } from "@mui/material";

export default function Paginacao() {

	return (
		<div className="paginacao">
			<Button variant="contained" color="success" sx={{ width: 250 }}>
				Página anterior
			</Button>
			<div>1 / 50</div>
			<Button variant="contained" color="success" sx={{ width: 250 }}>
				Próxima página
			</Button>
		</div>
	)
}