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


let $ol = $('ol')
let $content = $('.content')
$ol.on('click', 'li', e => {
  const $li = $(e.currentTarget)
  $li.addClass('active').siblings().removeClass('active')
  const index = $li.index()
  $content.eq(index).addClass('show').siblings().removeClass('show')
})
$ol.children().eq(0).trigger('click')


$('.movebox').on('click', () => {
  $('.movebox').toggleClass('active')
})