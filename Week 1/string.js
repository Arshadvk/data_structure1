let msg = 'i love u'
let count = 2
let change = count%26
let res=''
for (let i = 0; i < msg.length; i++) {
    code = msg.charCodeAt(i)+change
    res+=String.fromCharCode(code)
    
}
console.log(res)
console.log(msg.toUpperCase());
