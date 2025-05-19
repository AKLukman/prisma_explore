import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const paginationAndSorting =async()=>{
    // offset based paginations
    // const result = await prisma.post.findMany({
    //     skip:5,
    //     take:2
    // })

     // cursor based paginations. prefer
    // const result = await prisma.post.findMany({
    //     skip:5,
    //     take:2,
    //     cursor:{
    //         id:4 //start count from this id and according this field
    //     },
        

    // })
    
    // sorting
    const result = await prisma.post.findMany({
       orderBy:{
        id:'desc'
       },
       where:{
        title:"Title 1"
       }
        

    })
    console.log(result)

}