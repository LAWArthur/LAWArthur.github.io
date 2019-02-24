 let audio = document.getElementById("cur");
 
 let p = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data/manifest.json");
        xhr.onreadystatechange = (ev) => {
        if(xhr.readyState == 4){
            if(xhr.status != 200 && xhr.status != 304)reject(`Unable to load the resource. Status: ${xhr.status}`);
            resolve(JSON.parse(xhr.response));
        }
    }
    xhr.send(null);
});
p
    .then((ms) => {
        console.log(ms);
        for(let i of ms["resource"]){
            let node = $("<li></li>");
            node.text(i["name"]);
            node.click(() => {
                audio.src = `data/${i["src"]}`;
                $("#name").text(i["name"]);
            })
            $("#musics").append(node);
        }
    })
    .catch(console.log);