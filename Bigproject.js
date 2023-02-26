

function changeTheme()
{
    let checkTheme = document.getElementsByClassName("name")[0].id;
    console.log(checkTheme);
    if ( checkTheme == 1 )
    {
        document.documentElement.style.setProperty('--text-color','white');
        
        document.documentElement.style.setProperty('--background-color','black');
        document.documentElement.style.setProperty('--border-color','#EB17EF');
        document.documentElement.style.setProperty('--dark-theme','#EB17EF');
        document.documentElement.style.setProperty('--footer-color','#0C1731');
        document.documentElement.style.setProperty('--footer-color2','rgba(12,23,49,0.9)');
        document.documentElement.style.setProperty('--shadow','1px 4px 4px 4px rgba(255, 255, 255, 0.25)');
        document.documentElement.style.setProperty('--shadow-hover','2px 4px 10px 5px  rgba(255, 255, 255, 0.25)');
        
        document.getElementsByClassName("logo")[0].src="First-Project.github.io/iiitkottayam_logo_white.PNG"
        document.getElementsByClassName("name")[0].id = 0;
        document.getElementsByClassName("show")[0].src = "icon-arrow-right-white.png";
    }
    else {
        document.documentElement.style.setProperty('--text-color','black');
        
        document.documentElement.style.setProperty('--background-color','white');
        document.documentElement.style.setProperty('--border-color','white');
        document.documentElement.style.setProperty('--dark-theme','black');

        document.documentElement.style.setProperty('--footer-color','rgba(221, 221, 217, 1)');
        document.documentElement.style.setProperty('--footer-color2','rgba(221, 221, 217, .6)');
        document.documentElement.style.setProperty('--shadow','1px 4px 4px 2px rgba(0, 0, 0, 0.25)');
        document.documentElement.style.setProperty('--shadow-hover','2px 4px 10px 3px rgba(0, 0, 0, 0.25)');
        document.getElementsByClassName("logo")[0].src="https://www.iiitkottayam.ac.in/data/images/main/logo.jpg"
        document.getElementsByClassName("name")[0].id = 1;
        document.getElementsByClassName("show")[0].src = "C:\\users\\RaghavendraRQ\\Downloads\\expand_more_FILL0_wght400_GRAD0_opsz48.png";
    }
}
