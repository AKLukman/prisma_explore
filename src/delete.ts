import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const deleteData = async()=>{
    // // delete one data from db
    // const result = await prisma.post.delete({
    //     where:{
    //         id:3
    //     }
    // })
    // delete many data from db
    const result = await prisma.post.deleteMany({
        where:{
            published:true
        }
    })
    console.log(result)
}