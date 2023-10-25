console.log("Hello World")


//Number
let age: number=24

//String
let my_name: string="Shruthi"

//Boolean
let is_published: boolean=true


//any
let some_value
some_value="abc"
let any_value: any="anyvalue here"

//Number Array
const num_array:number[]=[1,2,3,4,5]
console.log(num_array)

//String Array
const string_array:String[]=["ABC","DEF","GHIJ"]
console.log(string_array)


//Tuples
const tuple_list:[number,string,boolean]=[1,"fruma",true]
console.log(tuple_list)


//Enums
const enum Size{
    Small=1,
    Medium=2,
    Large=3
}
const MySize: Size=Size.Medium
console.log(MySize)


//Functions
const calculateTax=(income:number,taxYear:number):number=>{
    if(taxYear>2022){
       return income=income*1.5
    }
    return income=income*1.3
}
let myIncome=calculateTax(1000000,2023)
console.log("My Income is ",myIncome)


//Objects using interface
interface Info{
    personName:string
    age:number,
    occupation:string
}
let my_info:Info={
    personName:"fruma",
    age:24,
    occupation:"SDE"
}
console.log("My info obj is",my_info)



//Union type
const myFunction=(param:number|string):number=>{
       if(typeof param==='number'){
         return param*5
       }
       return parseInt(param)*10
}
let ansByNum=myFunction(5)
console.log("Union Type for Number",ansByNum)
let ansByStr=myFunction("5")
console.log("Union Type for String",ansByStr)
