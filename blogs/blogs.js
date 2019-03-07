let current = 2;

function load(){
    if(current == -1){
        current++;
        return;
    }
    let p = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `blogs/${current}.md`);
            xhr.onreadystatechange = (ev) => {
            if(xhr.readyState == 4){
                if((xhr.status < 200  || xhr.status >= 300) && xhr.status != 304)reject(`Unable to load the resource. Status: ${xhr.status}`);
                resolve(xhr.response);
            }
        }
        xhr.send(null);
    });

    p.then((v)=>{
        $("#p").html(marked(v));
    }).catch((e)=>{
        console.error(e);
        current--;
    })
}

$("#pre").click(()=>{
    current--;
    load();
});

$("#next").click(()=>{
    current++;
    load();
});

load();