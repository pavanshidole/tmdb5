
const row=document.querySelector("#row");



let result="";
for(let i=0; i<movieArray.length; i++){
	result+=`
	            <div class="col-md-4 mb-4">
				    <div class="card">
					    <figure class="movCard">
						    <img  class="w-100" src="https://image.tmdb.org/t/p/w500${movieArray[i].poster_path}" alt="${movieArray[i].title}" title="${movieArray[i].title}">
							<figcaption>
							    <div class="movTitle">
								    <div class="row">
								        <div class="col-10">
										    <h3 data-toggle="tooltip" data-placement="top" title="${movieArray[i].title}" class="mb-0 p-2">${movieArray[i].title}</h3>
										</div>
									    <div class="col-2 align-self-center">
										    <span class="${setMovieRating(movieArray[i].vote_average)} p-2">${movieArray[i].vote_average}</span>
										</div>
								    </div>
								</div>
								<div class="movOverview">
								    <h4 class="mb-0">${movieArray[i].title}</h4>
									<em>overview</em>
									<p class="mb-0">
									   ${movieArray[i].overview}
									</p>
								</div>
							</figcaption>
						</figure>	
					</div>
				</div>
	
	
	`
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function setMovieRating(rating){
	if(rating>7.5){
		return "bg-success";
	}else if(rating<=7.5 && rating>5){
		return "bg-warning";
	}else{
		return "bg-danger";
	}
}

row.innerHTML=result;