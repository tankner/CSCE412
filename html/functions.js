const x = document.getElementsByClassName("link");

function button1()
{
    console.log("Button 1");
    // Get the current style from localStorage
    currentStyle = localStorage.getItem("page_stylesheet_name");

    // Toggle between styles
    if (currentStyle === "/html/styles.css") {
        localStorage.setItem("page_stylesheet_name", "/html/styles2.css");
    } else {
        localStorage.setItem("page_stylesheet_name", "/html/styles.css");
    }

    // Load the updated style
    load_style();
}

function load_style()
{
    pages_style = localStorage.getItem("page_stylesheet_name");
    if (pages_style === null)
    {
        pages_style = "/html/styles2.css";
    }
    console.log(document.getElementById("stylesheet"));
    document.getElementById("stylesheet").href = pages_style;
}

function mode1()
{
    localStorage.setItem("page_stylesheet_name", "/html/styles.css");
    load_style();
}

function mode2()
{
    localStorage.setItem("page_stylesheet_name", "/html/styles2.css");
    load_style();
}

load_style();
