let screen = $('.screen')
let num = parseInt(screen.text())
$('.addNum').on('click', () => {
  screen.text(num += 1)
})
$('.lessNum').on('click', () => {
  screen.text(num -= 1)
})
$('.multiplyNum').on('click', () => {
  screen.text(num *= 2)
})
$('.exceptNum').on('click', () => {
  screen.text(num /= 2)
})