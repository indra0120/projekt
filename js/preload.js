import {sleep} from './mylib.js';
import {fadein} from './mylib.js';

$(window).on("load",function(){
    var element = document.getElementById("kingdom");
    element.style.opacity = 0;
    sleep(3000).then(()=>{
        $(".loader").fadeOut("slow");
        fadein(element);
    });
});
