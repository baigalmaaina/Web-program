class Cs142TemplateProcessor{
    constructor(template){
        this.template=template;
    }
    fillIn(dictionary){
        console.log(dictionary)
        console.log(this.template)

        var res = this.template;
    var re = /{{[^{]*}}/g;
    var match = this.template.match(re);
    console.log(match)
    var pre, key, after;
    for (var i = 0; i < match.length; i++) {
        pre = match[i];
        key = pre.replace("{{", "");
        key = key.replace("}}", "");
        after = dictionary[key];
         if (after === undefined) {
            after = '';
         }

        res = res.replace(pre, after);
    }
    console.log(res)
    return res;
        
    }
}