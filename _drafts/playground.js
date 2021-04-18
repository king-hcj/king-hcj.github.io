// 模版引擎

// 实现一
// function tmpl(str, data) {
//     var fn = new Function("obj",//其实就是这里多添加了一句 with(obj){...}
//     "var p = []; with(obj){p.push('" +

//     str
//     .replace(/[\r\t\n]/g, "")
//     .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
//     .replace(/<%/g, "');")
//     .replace(/%>/g,"p.push('")
//     + "');}return p.join('');");
//     console.log(fn);

//     document.body.innerHTML = fn(data);
// };

// 实现二
// function tmpl(str, data) {

//     var string = "var p = []; p.push('" +
//     str
//     .replace(/[\r\t\n]/g, "")
//     .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
//     .replace(/<%/g, "');")
//     .replace(/%>/g,"p.push('")
//     + "');"

//     eval(string)

//     document.body.innerHTML = p.join('');
//     // return p.join('');
// };

// 实现三
function tmpl(str, data) {

    var fn = new Function("obj",

    "var p = []; p.push('" +

    str
    .replace(/[\r\t\n]/g, "")
    .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
    .replace(/<%/g, "');")
    .replace(/%>/g,"p.push('")
    + "');return p.join('');");

    // return fn(data);
    document.body.innerHTML = fn(data);
};

var users = [
    { "name": "Byron", "url": "http://localhost" },
    { "name": "Casper", "url": "http://localhost" },
    { "name": "Frank", "url": "http://localhost" }
]

tmpl(`<%for ( var i = 0; i < users.length; i++ ) { %>
    <li>
        <a href="<%=users[i].url%>">
            <%=users[i].name%>
        </a>
    </li>
<% } %>`, users)

// 一些报错：
`Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src github.githubassets.com".`


const S = 'ace', lens = S.length, L = 'abcde', lenl = L.length;
const getLastIndex = () => {
    let scurr = 0, lcurr = 0, res = -1;
    while(scurr < lens && lcurr < lenl) {
        if(S[scurr] === L[lcurr]) {
            if(scurr === lens - 1) {
                res = lcurr;
            }
            scurr ++;
        }
        lcurr ++;
    }
    return res;
    // let res = -1, curr = 0;
    // for(let i = 0; i < lens; i ++) { //遍历S
    //     for(let j = curr; j < lenl; j ++) { // 从上次的位置开始遍历L
    //         if(S[i] === L[j]) { // 找到了当前字符
    //             if(i === lens - 1) { // 如果已经是S的最后一个
    //                 return j;
    //             }
    //             curr = j + 1; // 下一次开始的位置
    //             break;
    //         } else if(j === lenl - 1 && i <= lens - 1) {
    //             return -1;
    //         }
    //     }
    //     if(curr >= lenl && i <= lens - 1) {
    //         return -1
    //     }
    // }
}
getLastIndex()

// let input = 1000
// let binaryInput = input.toString(2);
// console.log(binaryInput)
// // parseInt(1000..toString(2), 2).toString(16)
// // 100 => 110 0100
// // 1000 => 11 1110 1000
// if(binaryInput.length < 7) {
//     console.log('0'+parseInt(input.toString(2), 2).toString(16))
// } else {
//     if(binaryInput.length <= 8) {
//         console.log(parseInt(input.toString(2), 2).toString(16))
//     } else {
//         let len = binaryInput.length, curr = len - 7, end = len, res = [];
//         while(end >= 0) {
//             let temp = parseInt((curr > 0 ? '1' : '') + binaryInput.substring(curr,end), 2).toString(16);
//             if(temp.length < 2) temp = '0' + temp;
//             res.push(temp.toUpperCase());
//             end = curr, curr -= 7;
//         }
//         console.log(res.join(''))  
//     }
// }

let flaw = parseInt(readline());
let str = readline().toLowerCase().split(''),
    len = str.length,
    lenRes = 0,
    left = 0,
    curr = 0,
    already = 0,
    needNextAEI = false, // 是否需要下一个元音才能有效
    lenResNeed = 0; // 需要下一个元音才能有效的长度
let aeiou = new Set(['a', 'e', 'i', 'o', 'u']);
if(len < flaw) console.log(0);
while(left < len) {
    if(aeiou.has(str[left])) {
        left ++;
        curr ++;
        if(needNextAEI) {
            lenRes = Math.max(lenRes, curr, lenResNeed + 1);
            needNextAEI = false;
            lenResNeed = 0;
        } else {
          lenRes = Math.max(curr, lenRes);
        };
    } else if(already < flaw) {
        already ++;
        left ++;
        curr ++;
        if(needNextAEI) {
           lenResNeed ++; 
        } else if(lenRes < curr) {
            needNextAEI = true;
            lenResNeed = curr;
        }
    } else {
        left ++;
        curr = 0;
        already = 0;
        needNextAEI = false;
        lenResNeed = 0;
    }
}
console.log(lenRes)
