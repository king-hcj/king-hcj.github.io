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