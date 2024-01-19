const tune1 = new Audio("audio/bum1.mp3");
const tune2 = new Audio("audio/gh.mp3");
const tune3 = new Audio("audio/jk.mp3");
const tune4 = new Audio("audio/io.mp3");
const tune5 = new Audio("audio/we.mp3");
const tune6 = new Audio("audio/re.mp3");
const tune7 = new Audio("audio/op.mp3");
const tune8 = new Audio("audio/yu.mp3");
const tune9 = new Audio("audio/lo.mp3");
const tune10 = new Audio("audio/key10.mp3");
const tune11 = new Audio("audio/key11.mp3");
const tune12 = new Audio("audio/key12.mp3");
const tune13 = new Audio("audio/key13.mp3");
const tune14 = new Audio("audio/key14.mp3");
const tune15 = new Audio("audio/key15.mp3");
const tune16 = new Audio("audio/key16.mp3");



document.addEventListener('keydown',function(info)
{
    if(info.code == "Numpad1" || info.key == "a")
    {
        tune1.currentTime=0;
        tune1.play();
    }
    if(info.code == "Numpad2" || info.key == "s")
    {
        tune2.currentTime=0;
        tune2.play();
    }
    if(info.code == "Numpad3" || info.key == "d")
    {
        tune3.currentTime=0;
        tune3.play();
    }
    if(info.code == "Numpad4" || info.key == "f")
    {
        tune4.currentTime=0;
        tune4.play();
    }
    if(info.code == "Numpad5" || info.key == "q")
    {
        tune5.currentTime=0;
        tune5.play();
    }
    if(info.code == "Numpad6" || info.key == "w")
    {
        tune6.currentTime=0;
        tune6.play();
    }
    if(info.code == "Numpad7" || info.key == "e")
    {
        tune7.currentTime=0;
        tune7.play();
    }
    if(info.code == "Numpad8" || info.key == "j")
    {
        tune8.currentTime=0;
        tune8.play();
    }
    if(info.code == "Numpad9" || info.key == "u")
    {
        tune9.currentTime=0;
        tune9.play();
    }
    if(info.code == "Digit1" || info.key == "k")
    {
        tune10.currentTime=0;
        tune10.play();
    }
    if(info.code == "Digit2" || info.key == "i")
    {
        tune11.currentTime=0;
        tune11.play();
    }
    if(info.code == "Digit3" || info.key == "l")
    {
        tune12.currentTime=0;
        tune12.play();
    }
    if(info.code == "Digit4" || info.key == "o")
    {
        tune13.currentTime=0;
        tune13.play();
    }
    if(info.code == "Digit5" || info.key == "n")
    {
        tune14.currentTime=0;
        tune14.play();
    }
    if(info.code == "Digit6" || info.key == "m")
    {
        tune15.currentTime=0;
        tune15.play();
    }
    if(info.code == "Digit7" || info.key == "x")
    {
        tune16.currentTime=0;
        tune16.play();
    }
});

