const bgmusic = document.getElementById('bg-music');
document.addEventListener('click',function(){
    if(issoundon){
        bgmusic.play();
    }
},{once:true});
const compsound = document.getElementById('comp-sound');
const circlefill = document.getElementById('circle-fill');
const totalcircle=502;
let issoundon=true;
let timer = null;
let totalseconds = 0;
const slider = document.querySelector('input[type="range"]');
const display = document.getElementById('slider-value');

slider.addEventListener('input',function(){
    display.textContent = this.value + 'min';
});
const startbtn = document.querySelector('.start-button');
startbtn.addEventListener('click',function(){
    startbtn.disabled = true;
    slider.disabled=true;
    pausebtn.disabled=false;
    endbtn.disabled=false;
    totalseconds = slider.value*60;
    timer = setInterval(function(){
        if(totalseconds<=0){
            clearInterval(timer);
            compsound.play();
            slider.value= 25;
            display.textContent='25 min';
            startbtn.disabled=false;
            pausebtn.disabled=true;
            endbtn.disabled=true;
            pausebtn.textContent='Pause';
            circlefill.style.strokeDashoffset=0;
            return;
        }
        totalseconds--;
         let minutes = Math.floor(totalseconds/60);
         let seconds = totalseconds % 60;
        display.textContent = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
        circlefill.style.strokeDashoffset=totalcircle-(totalcircle * totalseconds/(slider.value*60));
    },1000);
});
const pausebtn = document.querySelector('.pause-button');
const endbtn = document.querySelector('.end-button');
pausebtn.disabled=true;
endbtn.disabled=true;

pausebtn.addEventListener('click',function(){
    if(pausebtn.textContent.trim()==='Pause'){
    clearInterval(timer);
    timer=null;
    pausebtn.textContent='Resume';
}else{
    clearInterval(timer);
    timer = setInterval(function(){
        if(totalseconds<=0){
            clearInterval(timer);
            compsound.play();
            slider.value= 25;
            display.textContent='25 min';
            slider.disabled=false;
            startbtn.disabled=false;
            pausebtn.disabled=true;
            endbtn.disabled=true;
            pausebtn.textContent='Pause';
            circlefill.style.strokeDashoffset=0;
            return;
        }
        totalseconds--;
         let minutes = Math.floor(totalseconds/60);
         let seconds = totalseconds % 60;
        display.textContent = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
        circlefill.style.strokeDashoffset=totalcircle-(totalcircle * totalseconds/(slider.value*60));
    },1000);
    pausebtn.textContent='Pause';
}
});

endbtn.addEventListener('click',function(){
    clearInterval(timer);
    timer=null;
    compsound.play();
    totalseconds=0;
    slider.value = 25;
    display.textContent = '25 min';
    startbtn.disabled = false;
    slider.disabled=false;
    pausebtn.disabled=true;
    endbtn.disabled=true;
    pausebtn.textContent='Pause';
    circlefill.style.strokeDashoffset=0;
});

const settingsbtn = document.querySelector('.settings-btn');
const dropdown = document.getElementById('settings-drpdwn');
settingsbtn.addEventListener('click',function(){
    dropdown.classList.toggle('active');
});
const soundtoggle = document.getElementById('sound-tgl');
const soundon = document.getElementById('sound-on');
const soundoff = document.getElementById('sound-off');

soundtoggle.addEventListener('change',function(){
    if(this.checked){
        issoundon=true;
        soundon.style.display = 'inline';
        soundoff.style.display = 'none';
        bgmusic.play();
    }else{
        issoundon=false;
        soundon.style.display = 'none';
        soundoff.style.display = 'inline';
        bgmusic.pause();
    }
});
const pastelbtn=document.getElementById('pastel');
const darkbtn=document.getElementById('dark');
const cloudbtn=document.getElementById('cloud');
const treebtn=document.getElementById('tree');

pastelbtn.addEventListener('click',function(){
    document.body.className='pastel';
});
darkbtn.addEventListener('click',function(){
    document.body.className='dark';
});
cloudbtn.addEventListener('click',function(){
    document.body.className='cloud';
});
treebtn.addEventListener('click',function(){
    document.body.className='tree';
});
tsParticles.load("particles",{
    particles: {
        number:{value:10},
        color: {value: ["#d39fdf", "#E0ABDB","#DE81BE"]},
        shape: { type: "star"},
        opacity:{
            value :0.8,
        animation:{
            enable:true,
            speed:1,
            minimumValue:0.1
        }
    },
        size:{value:4},
        move:{
            enable:true,
            speed:2,
            direction:"bottom",
            random:true
        }
    }
});
bgmusic.play();