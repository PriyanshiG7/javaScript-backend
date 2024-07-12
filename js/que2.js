//Qs2.WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.Example:str=“abcdabcdefgggh”ans=“abcdefgh”
let str="abcdabcdefgggh";//functiontogetStringwithalluniqueelements
functiongetUnique(str)
{
    let ans="";
    for(let i=0;i<str.length;i++){
        let currChar=str[i];
        if(ans.indexOf(currChar)==-1){//ifcurrentcharacterisnotadded,thenadd it in ans.
            //Otherwiseitisaduplicate.
            ans+=currChar;}}
            return ans;}
            getUnique(str);