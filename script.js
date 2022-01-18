$( document ).ready(function() {
});
// function that encrypts the input string
function action1(){
    var inpstr =  document.getElementById("input1").value;
    var result='';
    for(let i=0;i<inpstr.length;i++)
    {
        let val=inpstr.charCodeAt(i);
        if(val<97||val>122)
        {
            result+=inpstr[i];
        }
        else
        {
            //here we encrpt the characters of input string
            result+=String.fromCharCode((122-val+97));
        }
    }
    result="Encrypted text is '"+result+"'";
    document.getElementById("output1").innerHTML=result;
}

//function that decrypts the input string
function action2(){
    var inpstr =  document.getElementById("input2").value;
    var result='';
    for(let i=0;i<inpstr.length;i++)
    {
        let val=inpstr.charCodeAt(i);
        if(val<97||val>122)
        {
            result+=inpstr[i];
        }
        else
        {
            //here we encrpt the characters of input string
            result+=String.fromCharCode((122-val+97));
        }
    }
    result="Encrypted text is '"+result+"'";
    document.getElementById("output2").innerHTML=result;
}