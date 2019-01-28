const accessCode = Math.floor(Math.random() * 1000000);
($(()=>{
    let sel = $(".option");
    
    // ^_^
    $("#penwar").click(()=>{
        if(prompt("Access code") == accessCode)
        window.location.href = "\u0070\u0065\u006e\u0077\u0061\u0072\u002f\u0070\u0065\u006e\u0077\u0061\u0072\u002e\u0068\u0074\u006d\u006c";// ^_^
    });
    $("#alotools").click(()=>{
        window.location.href = "alotools/alotools.html";
    });
    $("#study").click(()=>{
        window.location.href = "study/study.html";
    });

    $("#memory").click(()=>{
        window.location.href = "memory/memory.html";
    });
}))();
