// const greet=(name)=>()=>{
//     console.log(name);
// }
// greet("abhi")();

// const greet=(name)=>{
//     return ()=>{
//         console.log(name);
//     }
// }
// greet("abhi")();

const asyncHandler= (requestHandler)=> {
    return (req,res,next)=> {
        Promise.resolve(requestHandler(req,res,next))
        .catch((error)=> next(error))
    }
}

export {asyncHandler}

