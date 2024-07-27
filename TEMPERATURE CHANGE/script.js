let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener('input', function(){
    // (0°C × 9/5) + 32 = 32°F
    let c = this.value;
    let f = ((c * 9/5) + 32);
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value  = f;
});

fah.addEventListener('input', function(){
    // C = 5/9(F-32)
    let f = this.value;
    let c = (5/9 *(f-32));
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
});