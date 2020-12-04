const Mutations = {
  //wait for item to be created before returning from db
  async createItem(parent, args, ctx, info) {
    //Todo: Check if they are logged in
    
    const item = await ctx.db.mutation.createItem({
      data: {
        // Spread the agruments into the data to add to that db
        ...args
      }
    }, info);

    return item;
  }
  // createDog(parent, args, ctx, info){
  //   global.dogs = global.dogs || [];
  //   //create a dog
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;

  //   //console.log(args)
  // }
};

module.exports = Mutations;
