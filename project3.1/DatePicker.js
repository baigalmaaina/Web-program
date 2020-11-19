class DatePicker{
    constructor(id, callback){
        this.id=id;
        thid.callback=callback;
        this.date={};
    }
render(dater){
    this.date.year=date.getFullYear()
    this.date.month=date.getMonth();
    this.date.day=date.getDate();

    let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.cont=document.getElementById(this.id);
    this.cont.innerHTML=`<div><span> prev < </span>${months[this.date.getMonth()]}${date.getFullYear()}<span> next  </span></div>`;
    let huuhed=this.cont.firstChild.firstChild;
    huuhed.addEventListener("click", ()=>this.prevMonth(date));
    console.log(huuhed);
}