Router.route('/pxl/:id', function(){
  this.response.statusCode = 200;
  this.response.setHeader("Content-Type", "application/json");
  this.response.setHeader("Access-Control-Allow-Origin", "*");
  this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let pixelId = this.params.id;
  let pixel = Pixels.findOne(pixelId);
  if (pixel && pixel.active) {
    Pixels.update({ _id: pixelId }, { $inc: { views: 1 } });
  }
  console.log(this.request);
  this.response.end('');
}, {where: 'server'});
