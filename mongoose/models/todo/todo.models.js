import mongoose from 'mongoose'

const todoSchema=new mongoose.Schema(
  {
    content:{
      type: String,
      requied: true,
    },
    compelete:{
      type: Boolean,
      default: false
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    // subTodo will contain a list of objects
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"subTodo"
      }
    ]
  },
  {timestamps: true}
)
export const Todo=mongoose.model('Todo',todoSchema);