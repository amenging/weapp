function drawBigCircle(ctx, canvasW, circlePos, circleR) {
  ctx.setLineCap('round')
  ctx.setLineWidth(8)
  ctx.setStrokeStyle('#ccc')
  ctx.setFillStyle('#ccc')
  ctx.arc(circlePos, circlePos, circleR, 0, Math.PI * 2, false)
  ctx.stroke()
  ctx.draw(true)

  ctx.setLineWidth(6)
  ctx.setStrokeStyle('#f00')
  ctx.setFillStyle('#f00')
}
function drawLittleCircle(ctx, x, st, canvasW, circlePos, circleR) {
  ctx.arc(circlePos, circlePos, circleR, st, x, false)
  ctx.stroke()

  ctx.draw(true)
}


module.exports = {
  drawBigCircle: drawBigCircle,
  drawLittleCircle: drawLittleCircle
}
