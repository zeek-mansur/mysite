"use strict";

window.addEventListener("resize", ResizeWindow);

function ResizeWindow() 
{

    var dataSpyList = [].slice.call(document.querySelectorAll('[data-spy = "scroll"]' ) );

    dataSpyList.foreach (function (dataSpyElement)
    {

        bootstrap.Scrollpy.getInstance (dataSpyElement). refresh (

        );
    }
    
    );
}