async function showImage() {
    var img = document.getElementById('hidden');
    if (img.style.visibility === "visible"){
        img.style.visibility = "hidden";
    } else{
        img.style.height = "4.12px";
        img.style.width = "6.18px";
        let height = 4.12;
        let width = 6.18;
        img.style.visibility = "visible";
        for (let i=0; i<=18; i++){
            height *= 1.25;
            width *= 1.25;
            img.style.height = `${height}px`;
            img.style.width = `${width}px`;
            await new Promise(r => setTimeout(r, 30));
            console.log(height);
        }
    }
}

function loopImage(img, height, width){

}