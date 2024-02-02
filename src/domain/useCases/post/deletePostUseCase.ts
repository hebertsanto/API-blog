import { DeletePostRepository } from "../../../adapters/repositories/post/deletePostRepository";

export class DeletePostUseCase {
   private delete : DeletePostRepository;

   constructor(){
    this.delete = new DeletePostRepository();
   }

   async execute(id : number){
    
     const post = await this.delete.execute(id);

     if(!post){
        throw new Error('this post not exist');
     }
   }
}