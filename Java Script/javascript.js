let a=2
let b=3
let c=4
let d=5
let e=((b+a)*c)/(a*b*b)+(a-d);
// 3+2*4/2*3*3+2-5
console.log(e);

let x=6;
let y=5;
let hasil=x>y;
if(x>y){
    console.log("benar");
}else{
    console.log("salah");
}
let nilai=87;
let kkm=80;
if(nilai>kkm){
    console.log("lulus");
}else{
    console.log("tidak lulus");
}



let bulan=1;
let tanggal=20;
let zodiak="belum dibuat";
if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiak="Virgo";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="Sagitarius";
    }
}
if(bulan==2){
    if(tanggal>0 && tanggal<20){
        zodiak="Libra";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="Gemini";
    }
}
if(bulan==3){
    if(tanggal>0 && tanggal<20){
        zodiak="Aries";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="Taurus";
    }
}
if(bulan==4){
    if(tanggal>0 && tanggal<20){
        zodiak="Capricorn";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="leo";
    }
}
if(bulan==5){
    if(tanggal>0 && tanggal<20){
        zodiak="Pisces";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="Cancer";
    }
}
if(bulan==6){
    if(tanggal>0 && tanggal<20){
        zodiak="Scorpio";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="Aquarius";
    }
}
    console.log(zodiak);




