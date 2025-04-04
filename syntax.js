function handleBash(block=""){
    let data = block.split("\n");
    let out = ""
    for(var i = 0;i<data.length;i++){
        switch(data[i][0]){
            case "+":
                out += "<green>"+data[i]+"</green>\n";
                break;
            case "-":
                out += "<red>"+data[i]+"</red>\n";
                break;
            case "?":
                out += "<yellow>"+data[i]+"</yellow>\n";
                break;
            default:
                out += data[i]+"\n";
        }
    }
    return out;
}

document.querySelectorAll("block").forEach(block=>{
    if(!block.id)
        return;

    console.log("language block "+block.id);

    if(block.id=="diff")
        block.innerHTML = handleBash(block.textContent);
    
})