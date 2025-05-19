import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const careateData = async ()=>{
    // careate one data
    // const result = await prisma.post.create({
    //     data:{
    //         title:"this is title2",
    //         content:"Hello world2",
    //         author:"lukman"
    //     }
    // })

    const result = await prisma.post.createMany({
        data:[
            {
                     
                title:"this is title 3",
                content:"Hello world 3",
                author:"lukman"
  
            },
            {
                     
                title:"this is title4",
                content:"Hello world4",
                author:"lukman"
  
            },
        ]
    })

    console.log(result)
   
}
