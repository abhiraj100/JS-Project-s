let textBox = document.getElementById("textBox");

textBox.addEventListener('input', function(){
    var text = this.value;
    // console.log(text);
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    // console.log(words);
    let cleanList = words.filter(function(elm){
        return elm != "";
        console.log(cleanList);
    });
    document.getElementById("word").innerHTML = cleanList.length;
});