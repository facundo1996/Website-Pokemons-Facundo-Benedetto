window.addEventListener('scroll', function(){
    if (document.body.scrollTop === 0){
        document.getElementById("headerjs").style.background = "rgb(234, 243, 237)"
        document.getElementById("headerjs").style.borderBottom="none"
    }
    else{
        document.getElementById("headerjs").style.background="#7bcbab"
        document.getElementById("headerjs").style.borderBottom="#1c7474 2px solid"
    }
})