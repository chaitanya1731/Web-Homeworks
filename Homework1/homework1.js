//----Qsn 1
//console.log(wordLengths(str))
function wordLengths(text) {
    return text.split(/\s+/g).filter(i => i).map(i=>i.length);
}

//-----Qsn 2
//console.log(selectWords(str,2))
function selectWords(str, number) {
    return (number ? (str.split(/\s+/g).filter(i => i.length % number === 0)) :
        (str.split(/\s+/g).filter(i => i).map(i=>i)));
}

//-----Qsn 3
//console.log(casedWords(text))
function casedWords(text){
    return(text.toLowerCase().split(/\s+/g).filter(i=>i)
        .map(word => { return (word.length % 2) ? (word.replace(/[a-z]/, word[0].toUpperCase())) : word }));
}

//-----Qsn 4
//console.log(alternatingCase(text));
function alternatingCase(text){
    return(text.toLowerCase().split(/\s+/g).filter(i=>i)
        .map(word => { return (word.length % 2) ?
            (word.replace(/[a-z0-9]/gi, c=>c[`to${(word=!word)?'Low':'Upp'}erCase`]()))
            : (word.replace(/[a-z0-9]/gi, c=>c[`to${(word=!word)?'Upp':'Low'}erCase`]())) }));
}


//-----Qsn 5
//console.log(rotAlphabets(text))
function rotAlphabets(text, n=13) {
    return (text.split('').map(i => i.replace(/[A-Za-z]/g, i =>  {
        return String.fromCharCode((i <= "Z" ? 90 : 122) >= (i = i.charCodeAt(0) + n) ?
            i : i-26)})).join('').toString());
}


//-----Qsn 6
//console.log(wordLenPoly(text, 10))
function wordLenPoly(text, x) {
    return (text.split(/\s+/g).filter(i => i).map((i, index) => {
        return (i.length * Math.pow(x, index));}).reduce((a, b) => a + b, 0));
}

//-----Qsn 7
//console.log(map2((a, b) =>a * b,  [], [3, 4, 5]))
function map2(fn, list1, list2){
    return(list1.map((i, index) => {
        return fn(i, list2[index]);}).filter(i=>i));
}

//-----Qsn 8
//console.log(rmap2(( a, b ) =>a/b, [3, 4, 5] ))
function rmap2(fn, list){
    return(list.map((i, index) => {
        return (fn(i, list[list.length-index-1]))}))
}



//-----Qsn 9
//console.log(partialSums([1, 2, 3, 4, 5, 6, 7, 8, 9]));
function partialSums(list){
    return (list.map((item,index) => list.filter((temp,j) => j <= index))
            .map(item => item.reduce((a, b) => a + b,0)));
}

//-----Qsn 10
//console.log(partialFnAppl((a, b) => a * b, [3]));
function partialFnAppl(fn, list){
    return (list.map((item,index) => list.filter((temp,j) => j <= index))
            .map(item => item.reduce(fn)));
}


//-----Qsn 11
/*Since the strings in JavaScript are immutable,
meaning that they cannot change, instead can make a new string.
Hence memory allocated to each string cannot be over-written.
The only way to do it is assigning a new memory location. Hence making "in place" reversals impossible.
*/


//-----Qsn 12
/*
if (obj.id===null || obj.id===undefined){
    console.log(obj.id);
}
*/

//-----Qsn 13
//1. /[(a+b)*(b)\b]{99}[b]{1}$/
//2. /[(a+b)*(b)\b]{100,}[b]{1}$/
3. /[a+b]*(b)\1{2}/