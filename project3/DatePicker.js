<<<<<<< HEAD
class DatePicker{
    constructor(id, callback){
        this.id=id;
        this.callback=callback;
        this.date={};
    }
    prevMonth(date){
        date.setMonth(date.getMonth()-1);
        this.render(date);
    }
    nextMonth(date){
        if(date.getMonth()===11){
            date.setMonth(0);
            date.setFullYear(date.getFullYear()+1);            
        }
        else{
            date.setMonth(date.getMonth()+1);
        }
        date.setDate(1);
        this.render(date);
    }
render(date){
    this.date.year=date.getFullYear()
    this.date.month=date.getMonth();
    this.date.day=date.getDate();

    let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    
    this.cont=document.getElementById(this.id);
    this.cont.innerHTML=`<div><span> < </span>${months[date.getMonth()]} ${date.getFullYear()}<span>  >  </span></div>`;
    let huuhed=this.cont.firstChild.firstChild;
    huuhed.addEventListener("click", ()=>this.prevMonth(date));
    //console.log(huuhed);
    let nex=this.cont.firstChild.lastChild;
    this.month(date);
    //console.log(nex);
    nex.addEventListener("click", ()=>this.nextMonth(date));
    this.callback(this.id, this.date);
}
month(date){
    let weekend=["SUN",
                "MON",
                "TUE",
                "WED",
                "THUR",
                "FRI",
                "SAT"];
    let old=new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let niw=new Date(date.getFullYear(), date.getMonth(), date.getDate());

    old.setMonth(date.getMonth()-1);

    
    
    let div=document.createElement("div");
    div.setAttribute("class", "neg");


    for(let i=0; i<weekend.length; i++){
        let g=document.createElement("div");
        g.appendChild(document.createTextNode(weekend[i]));
        div.appendChild(g);
    }

    let cont=document.getElementById(this.id);
    cont.appendChild(div);
    cont.firstChild.setAttribute("class", "tolgoi");
    let oldest=old.getMonth();
    let sar=date.getMonth();
    sar=sar+1;
    let honog=0;
    let oldhonog=0;

    if(sar===1||sar===3||sar===5||sar===7||sar===8||sar===10||sar===12)
    {
        honog=31;
    }
    else if(sar===4||sar===6||sar===9||sar===11)
    {
        honog=30;
    }
    else if(sar===2){
        if(date.getFullYear()%4===0)
        {
            honog=29;
        }
        else{
            honog=28;
        }
    }
    if(oldest===0||oldest===2||oldest===4||oldest===6||oldest===7||old===9||oldest===11)
    {
        oldhonog=31;
    }
    else if(oldest===3||oldest===5||oldest===8||oldest===10)
    {
        oldhonog=30;
    }
    else{
        if(old.getFullYear%4===0)
        {
            oldhonog=29;
        }
        else {
            oldhonog=28;
        }
    }
    old.setDate(oldhonog);

    let zaah=old.getDay();
    let daydiv=document.createElement("div");
    daydiv.setAttribute("class", "days");

    if(old.getDay()<6){
        for(let j=old.getDay(); j>=0; j--){
            let emp=document.createElement("div");
            emp.setAttribute("class", "old");
            emp.appendChild(document.createTextNode(oldhonog-j));
            daydiv.appendChild(emp);
        }
    }

    for(let i=0; i<honog; i++){
        let dz=document.createElement("div");
        dz.setAttribute("class", "bld");
       // dz.addEventListener("click", ()=>this.again(date, i));
       dz.appendChild(document.createTextNode(i+1));
       
       if(this.date.day===i+1){
           dz.setAttribute("class", "active");
       }
       daydiv.appendChild(dz);
    }
    niw.setDate(honog);
    var suul=niw.getDay();
    if(suul<=6){
        for(let a=1; a<=6-suul; a++)
        {
            let notemp=document.createElement("div");
            notemp.appendChild(document.createTextNode(a));
            notemp.setAttribute("class", "fut");
            daydiv.appendChild(notemp);
        }
       
    }
    else {

    }
    cont.appendChild(daydiv);
}
}
=======
class DatePicker{
    constructor(id, callback){
        this.id=id;
        this.callback=callback;
        this.date={};
    }
    prevMonth(date){
        date.setMonth(date.getMonth()-1);
        this.render(date);
    }
    nextMonth(date){
        if(date.getMonth()===11){
            date.setMonth(0);
            date.setFullYear(date.getFullYear()+1);            
        }
        else{
            date.setMonth(date.getMonth()+1);
        }
        date.setDate(1);
        this.render(date);
    }
render(date){
    this.date.year=date.getFullYear()
    this.date.month=date.getMonth();
    this.date.day=date.getDate();

    let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    
    this.cont=document.getElementById(this.id);
    this.cont.innerHTML=`<div><span> < </span>${months[date.getMonth()]} ${date.getFullYear()}<span>  >  </span></div>`;
    let huuhed=this.cont.firstChild.firstChild;
    huuhed.addEventListener("click", ()=>this.prevMonth(date));
    //console.log(huuhed);
    let nex=this.cont.firstChild.lastChild;
    this.month(date);
    //console.log(nex);
    nex.addEventListener("click", ()=>this.nextMonth(date));
    this.callback(this.id, this.date);
}
month(date){
    let weekend=["SUN",
                "MON",
                "TUE",
                "WED",
                "THUR",
                "FRI",
                "SAT"];
    let old=new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let niw=new Date(date.getFullYear(), date.getMonth(), date.getDate());

    old.setMonth(date.getMonth()-1);

    
    
    let div=document.createElement("div");
    div.setAttribute("class", "neg");


    for(let i=0; i<weekend.length; i++){
        let g=document.createElement("div");
        g.appendChild(document.createTextNode(weekend[i]));
        div.appendChild(g);
    }

    let cont=document.getElementById(this.id);
    cont.appendChild(div);
    cont.firstChild.setAttribute("class", "tolgoi");
    let oldest=old.getMonth();
    let sar=date.getMonth();
    sar=sar+1;
    let honog=0;
    let oldhonog=0;

    if(sar===1||sar===3||sar===5||sar===7||sar===8||sar===10||sar===12)
    {
        honog=31;
    }
    else if(sar===4||sar===6||sar===9||sar===11)
    {
        honog=30;
    }
    else if(sar===2){
        if(date.getFullYear()%4===0)
        {
            honog=29;
        }
        else{
            honog=28;
        }
    }
    if(oldest===0||oldest===2||oldest===4||oldest===6||oldest===7||old===9||oldest===11)
    {
        oldhonog=31;
    }
    else if(oldest===3||oldest===5||oldest===8||oldest===10)
    {
        oldhonog=30;
    }
    else{
        if(old.getFullYear%4===0)
        {
            oldhonog=29;
        }
        else {
            oldhonog=28;
        }
    }
    old.setDate(oldhonog);

    let zaah=old.getDay();
    let daydiv=document.createElement("div");
    daydiv.setAttribute("class", "days");

    if(old.getDay()<6){
        for(let j=old.getDay(); j>=0; j--){
            let emp=document.createElement("div");
            emp.setAttribute("class", "old");
            emp.appendChild(document.createTextNode(oldhonog-j));
            daydiv.appendChild(emp);
        }
    }

    for(let i=0; i<honog; i++){
        let dz=document.createElement("div");
        dz.setAttribute("class", "bld");
       // dz.addEventListener("click", ()=>this.again(date, i));
       dz.appendChild(document.createTextNode(i+1));
       
       if(this.date.day===i+1){
           dz.setAttribute("class", "active");
       }
       daydiv.appendChild(dz);
    }
    niw.setDate(honog);
    var suul=niw.getDay();
    if(suul<=6){
        for(let a=1; a<=6-suul; a++)
        {
            let notemp=document.createElement("div");
            notemp.appendChild(document.createTextNode(a));
            notemp.setAttribute("class", "fut");
            daydiv.appendChild(notemp);
        }
       
    }
    else {

    }
    cont.appendChild(daydiv);
}
}
>>>>>>> b2aac1026c447271f4b610180e0bfb984c62037a
