const endpoint_url='http://srv4.pweb201.local/api';

function getJokesList() {
  fetch(endpoint_url + "/jokes/listjokes")
    .then(status)
    .then(json)
    .then(function(data) {
      var list_jokes = "";
      data.listjokes.forEach(function(daftar) {
        list_jokes += `

            <div class="col-lg-4">
              <img src = "${daftar.gambar}" class "img rounded-circle" width= "200" height= "200" alt ".." >
              <h2>${daftar.nama}</h2>
              <p><a class="btn btn-secondary" href="detailjokes.html?id=${daftar.kode}" role="button">Click Me</a></p>
            </div>
            ` ;
        });
          document.getElementById("daftar_jokes").innerHTML = list_jokes;
        })
    .catch(error);
}

function getJokes(id){
  fetch(endpoint_url+ "/jokes/jokesdetail/id/" + id)
  .then(status)
  .then(json)
  .then(function(data){
    var detailjokesHTML="";
    data.jokesDetail.forEach(function(jokes){
      detailjokesHTML += `
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">${jokes.nama}</h2>
          <p class="lead">${jokes.isi}</p>
        </div>
        <div class="col-md-5">
        <img src="img/${jokes.image}" style="width:500px; height:500px;"/>


        </div>
      </div>

      
        `;

    });
        document.getElementById("detailjokes").innerHTML = detailjokesHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}
