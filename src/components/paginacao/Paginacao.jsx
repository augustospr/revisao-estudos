import { Button } from "@mui/material";

export default function Paginacao({nextPage , previousPage, paginaAtual, maxNumberOfPages}) {

	return (
		<div className="paginacao">
			<Button variant="contained" onClick={previousPage} color="success" sx={{ width: 250 }}>
				Página anterior
			</Button>
			<div>{paginaAtual} / {maxNumberOfPages}</div>
			<Button variant="contained" onClick={nextPage} color="success" sx={{ width: 250 }}>
				Próxima página
			</Button>
		</div>
	)
}