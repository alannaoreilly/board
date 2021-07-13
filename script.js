function pink(){
    var pinkheader = document.getElementsByClassName("postit-header")[0];
    pinkheader.style.backgroundColor = '#fd9cff';

    var pinkmain = document.getElementsByClassName("postit-main")[0];
    pinkmain.style.backgroundColor = '#fdc1ff';
}


function purple(){
    var purpleheader = document.getElementsByClassName("postit-header")[0];
    purpleheader.style.backgroundColor = '#b177ff';
    var purplemain = document.getElementsByClassName("postit-main")[0];
    purplemain.style.backgroundColor = '#c79cff';
}


function dropdown(){
        var menu = document.getElementsByClassName('child');
    
        if (menu.style.display == "none"){
            menu.style.display = "block";
        }
        else{
        menu.style.display = "none";
        }      
}