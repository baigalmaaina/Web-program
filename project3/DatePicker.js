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
        if(date.getMonth()===12){
            date.setMonth(1);
            date.setFullYear(date.getFullYear()+1);            
        }
        else{
            date.setMonth(date.getMonth()+1);
        }
        this.render(date);
    }
render(date){
    this.date.year=date.getFullYear()
    this.date.month=date.getMonth();
    this.date.day=date.getDate();

    let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.cont=document.getElementById(this.id);
    this.cont.innerHTML=`<div><span> prev < </span>${months[date.getMonth()]}${date.getFullYear()}<span> next >  </span></div>`;
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
    
    let on=date.getFullYear();
    let sar=date.getMonth();
    let honog=0;
    let oldhonog=0;

    if(sar===0||sar===2||sar===4||sar===6||sar===7||sar===9||sar===11)
    {
        honog=31;
    }
    else if(sar===3||sar===5||sar===8||sar===10)
    {
        honog=30;
    }
    else {
        if(on%4===0)
        {
            honog=29;
        }
        else{
            honog=28;
        }
    }
    if(old===0||old===2||old===4||old===6||old===7||old===9||old===11)
    {
        oldhonog=31;
    }
    else if(old===3||old===5||old===8||old===10)
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

    if(zaah<7){
        for(let j=zaah; j>=0; j--){
            let emp=document.createElement("div");
            emp.setAttribute("class", "old");
            emp.appendChild(document.createTextNode(oldhonog-j));
            daydiv.appendChild(emp);
        }
    }

    for(let i=0; i<honog; i++){
        let dz=document.createElement("div");
        dz.setAttribute("class", "bld");
       dz.appendChild(document.createTextNode(i+1));
       
       if(this.date.day===i+1){
           dz.setAttribute("class", "active");
       }
       daydiv.appendChild(dz);
    }
    niw.setDate(honog);
    var suul=niw.getDay();
    if(suul<=7){
        for(let a=1; a<=7-suul; a++)
        {
            let notemp=document.createElement("div");
            notemp.appendChild(document.createTextNode(a));
            notemp.setAttribute("class", "fut");
            daydiv.appendChild(notemp);
        }
      //  else{ }
    }
    cont.appendChild(daydiv);
}}
