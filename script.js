var tasklist = document.getElementById('tasklist');

document.getElementById('btn').addEventListener('click', addTask);

function addTask() {
    // checking for empty value
    if (document.getElementById('tname').value == "") {
        alert("Taskname is needed");
    } else {
        // element div
        var div = document.createElement('div');
        div.classList = 'todo';

        // element checkbox
        var inputc = document.createElement('input');
        inputc.type = 'checkbox';
        // event listener on click
        inputc.addEventListener('click', update);
        div.appendChild(inputc);

        // text node
        var name = document.createTextNode(document.getElementById('tname').value);
        // para element
        var para = document.createElement('p');
        para.appendChild(name);
        div.appendChild(para);

        // buton element
        var delbtn = document.createElement('button');
        delbtn.textContent = 'Remove';

        // event listener onclick
        delbtn.addEventListener('click', deleteT);


        div.appendChild(delbtn);
        // on top adding
        tasklist.prepend(div);
    }


}


function update(e) {
    // update according to checkbox check/uncheck
    if (e.target.checked == true) {
        // add line to texts
        e.target.parentNode.style.textDecoration = 'line-through';
        tasklist.appendChild(e.target.parentNode);
    } else {

        // remove text decorations
        e.target.parentNode.style.textDecoration = 'none';
        tasklist.prepend(e.target.parentNode);
    }
}

function deleteT(e) {
    // remove child form list
    tasklist.removeChild(e.target.parentNode);
}

// geolocation api
navigator.geolocation.getCurrentPosition((pos) => {
	longitude = pos.coords.longitude;
	latitude = pos.coords.latitude;
	// google maps ai
	document.getElementById('mapvalue').textContent= "Lat : "+latitude+", Lng = "+longitude;
	// adding map
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {
        lat: latitude,
        lng: longitude
    }
});
// adding marker on maps
var newmarker = new google.maps.Marker({
    position: {
        lat: latitude,
        lng: longitude
    },
    map,
    title: 'Current Location'
  });

});


