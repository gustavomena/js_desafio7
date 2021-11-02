const htmlConstructor = (hero) => `
<h4 class="text-center">SuperHero Encontrado</h4>
<div class="card mb-3">
	<div class="row g-0">
		<div class="col-md-4">
			<img src="${
        hero.image.url
      }" class="img-fluid img-thumbnail h-100 w-100 rounded-start" alt="SuperHero ${
  hero.name
}">
		</div>
		<div class="col-md-8">
			<div class="card-body">
				<h5 class="card-title">Nombre: ${hero.name}</h5>
				<p class="card-text">Conexiones:${hero.connections["group-affiliation"]}</p>
				<ul class="list-group list-group-flush">
					<li class="list-group-item"><em>Publicado Por</em>: ${
            hero.biography.publisher
          }</li>
					<li class="list-group-item"><em>Ocupaci&oacute;n</em>: ${
            hero.work.occupation
          }</li>
					<li class="list-group-item"><em>Primera Aparici&oacute;n</em>: ${
            hero.biography["first-appearance"]
          }</li>
					<li class="list-group-item"><em>Altura</em>: ${hero.appearance.height}</li>
					<li class="list-group-item"><em>Peso</em>: ${hero.appearance.weight}</li>
					<li class="list-group-item"><em>Aliases</em>: ${hero.biography.aliases.join(
            ", "
          )}</li>
				</ul>
			</div>
		</div>
	</div>
</div>`;