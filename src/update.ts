import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
export const update = async()=>{
    // update one
    // const result = await prisma.post.update({
    //     where:{
    //         id:2
    //     },
    //     data:{
    //         title:"Title changed 2"
    //     }
    // })

    // update many
    // const result = await prisma.post.updateMany({
    //     where:{
    //          title:"Title 1"
    //     },
    //     data:{
    //         published:true
    //     }
    // })

    // upsert
   const upsert = await prisma.post.upsert({
    where:{
        id:1
    },
    update:{
        title:"Title 1"
    },
    create:{
        title:"Title 1",
        content:"Hello world"
    }
   })


}