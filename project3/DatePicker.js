class DatePicker{
    constructor(id, callback){
        this.id = id;
        this.callback = callback;
        this.date = {};
    }
}
render(Date)
{
    console.log(date);
    this.date.year=date.getFullYear();
    this.date.month=date.getMonth();
    this.date.day=date.getDay();
    let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov","Dec"];
    let cont=document.getElementById(this.id);
    cont.innerHTML=months[date.getMonth()]+" "+date.getFullYear();
    this.callback(this.id, this.date);
    this.cont.innerHTML="<span id=prev> < </span>" + this.cont.innerHTML+"<span id=next> > </span>" ;
    
    //calendar head hesegt odor haruulah mon ter odor ali hesegt   
}   
//omnoh sariin medeelel      
prev(date)
{
    if(date.getMonth()>0)
    {
        date.setMonth(date.getMonth()-1);
    }
    else {
        date.setMonth(11);
        date.setFullYear(date.getFullYear()-1);
    }
    this.render(date);
}
//daraagiinh 
next(date)
{
    if(date.getMonth()<11)
    {
        date.setMonth(date.getMonth()+1);
    }
    else {
        date.setMonth(0);
        date.setFullYear(date.getFullYear()+1);
    }
    this.render(date);
}
//sar
month(date)
{
    let cmon=date.getMonth();
    if(cmon==0){ cmon=12; }
   //sariin odriig yaj huwaarilah we odroor n
}
//odor
new(day)
{
    let shine=new Date(this.date.year, this.date.month, day);
    this.render(shine);
}
Days(date)
{
    let odoo=new date(date.getFullYear(), date.getMonth(), 1);
    let suul=new Date(date.getFullYear(), date.getMonth(), this.cmon(date));
    let lastday=suul.getDay()+1;
   //zaa yu vbolood bgn buu med  2009 bolon onooodriin on saraa awah ged panic>?

   let.calendar=document.createElement("div");
   
}
