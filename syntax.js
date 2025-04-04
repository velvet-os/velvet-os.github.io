function handleBash(block=""){
    let data = block.split("\n");
    let out = ""
    for(var i = 0;i<data.length;i++){
        switch(data[i][0]){
            case "+":
                out += "<greenb>"+data[i]+"</greenb>\n";
                break;
            case "-":
                out += "<redb>"+data[i]+"</redb>\n";
                break;
            case "?":
                out += "<yellowb>"+data[i]+"</yellowb>\n";
                break;
            case "!":
                out += "<orangeb>"+data[i]+"</orangeb>\n";
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