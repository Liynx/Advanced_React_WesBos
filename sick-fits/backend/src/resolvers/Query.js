const { forwardTo } = require('prisma-binding');

const Query = {
  //Dog Example:
  // dogs: function(parent, args, ctx, info) {
  //   global.dogs = global.dogs || []
  //   return global.dogs
  // }

  // Writing custom query:
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items()
  //   return items;
  // }

  //forward query directly to prisma so it uses the query defined there
  items: forwardTo('db')

};

module.exports = Query;
