// const greet=(name)=>()=>{
//     console.log(name);
// }
// greet("abhi")();

const greet=(name)=>{
    return ()=>{
        console.log(name);
    }
}
greet("abhi")();

