const accessCode = Math.floor(Math.random() * 100000000);
($(()=>{
    $("#win").click(()=>{
        if(prompt("Access code") == accessCode)
        window.location.href = "https://raw.githubusercontent.com/LAWArthur/PenWar/master/Releases/setup.exe";
    });
    $("#github").click(()=>{
        if(prompt("Access code") == accessCode)
        window.location.href = "https://github.com/LAWArthur/PenWar/";
    });
}))()