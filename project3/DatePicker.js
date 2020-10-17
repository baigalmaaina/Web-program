class DatePicker{
    constructor(id,f){
        this.id =id;
        this.callback=f;
        this.date ={}
    }
    render(date){
        console.log(date);
        this.date.year = date.getFullYear();
        this.date.month =date.getMonth();
        this.date.day =date.getDate();
       let  cont = document.getElementById(this.id);
       cont.innerHTML = date.getFullYear();
       console.log(this.date);
    }
}