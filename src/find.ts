import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()

export const find = async ()=>{
    
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where:{
    //         published:false
    //     }
    // })
    const findUnique = await prisma.post.findUnique({
        where:{
            id:4
        },
        select:{
            title:true,
            content:true
        }
    })
    console.log(findUnique)
}


