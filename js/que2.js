//Qs2.WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.Example:str=“abcdabcdefgggh”ans=“abcdefgh”
letstr="abcdabcdefgggh";//functiontogetStringwithalluniqueelements
functiongetUnique(str)
{
    letans="";
    for(leti=0;i<str.length;i++){
        letcurrChar=str[i];
        if(ans.indexOf(currChar)==-1){//ifcurrentcharacterisnotadded,thenadd it in ans.
            //Otherwiseitisaduplicate.
            ans+=currChar;}}
            returnans;}
            getUnique(str);