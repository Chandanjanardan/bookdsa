const obj={
    name:"Chandan",
    lastname:"Janardan",
    fullname:function(){
        console.log(`hello ${this.name} ${this.lastname}`)
    }
}



function me(){
    console.log(this.name)
}
let connect=me.bind(obj)
connect()
function me(){
    console.log(this.name)
}
let connect=me.bind(obj)
connect()
function me(){
    console.log(this.name)
}
let connect=me.bind(obj)
connect()

