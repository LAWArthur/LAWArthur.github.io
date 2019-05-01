let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState == 4){
        if ((xhr.status >= 200 && xhr.status < 300) || (xhr.status == 304) ) {
            console.log(xhr.response);
            $("#checklist").html(marked(xhr.response));
        }
    }
}
xhr.open("GET", "checklist.md");
xhr.send();