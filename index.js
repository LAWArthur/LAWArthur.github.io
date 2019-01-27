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
    
    setInterval(()=>{
        for(let i of sel){
            if(isOnScreen(i)){
                //Show
                i.style.animation = "showanim 3s ease-in 0s 1 normal";
            }else{
                //hide
                i.style.animation = "hideanim 3s ease-in 0s 1 normal";
            }
        }
    });
}))();

// var ON_SCREEN_HEIGHT = 0;
const ON_SCREEN_HEIGHT = Infinity;
// var ON_SCREEN_HEIGHT = Infinity;
// var ON_SCREEN_WIDTH = 0;
const ON_SCREEN_WIDTH = Infinity;
// var ON_SCREEN_WIDTH = Infinity;

function isOnScreen(element) {

    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    var elementHeight = element.offsetHeight;
    var elementWidth = element.offsetWidth;

    var onScreenHeight = ON_SCREEN_HEIGHT > elementHeight ? elementHeight : ON_SCREEN_HEIGHT;
    var onScreenWidth = ON_SCREEN_WIDTH > elementWidth ? elementWidth : ON_SCREEN_WIDTH;

    // 元素在屏幕上方
    var elementBottomToWindowTop = rect.top + elementHeight;
    var bottomBoundingOnScreen = elementBottomToWindowTop >= onScreenHeight;

    // 元素在屏幕下方
    var elementTopToWindowBottom = windowHeight - (rect.bottom - elementHeight);
    var topBoundingOnScreen = elementTopToWindowBottom >= onScreenHeight;

    // 元素在屏幕左侧
    var elementRightToWindowLeft = rect.left + elementWidth;
    var rightBoundingOnScreen = elementRightToWindowLeft >= onScreenWidth;

    // 元素在屏幕右侧
    var elementLeftToWindowRight = windowWidth - (rect.right - elementWidth);
    var leftBoundingOnScreen = elementLeftToWindowRight >= onScreenWidth;

    return bottomBoundingOnScreen && topBoundingOnScreen && rightBoundingOnScreen && leftBoundingOnScreen;
}
