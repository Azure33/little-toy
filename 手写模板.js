let obj = {a:1, b:2}
let str = 'xxxx{{a}}xxxx{{b}}xxx'
function rep(str, obj) {
  let reg = /{{(\w+)}}/g
  return str.replace(reg,function(raw,key,offset,string){
    console.log(arguments)
    console.log(key)
    console.log('$1')
    return obj[key] || raw
  })
}
console.log(rep(str, obj))
// console.log(str)



// let arr = [1,2,3]
// let newA = [...arr]
// console.log(newA)
// arr.pop()

// console.log(newA)



// let arr = [1,2,3,4,5]
// let res = arr.slice(-3).concat(arr.slice(0,-3))
// console.log(res)