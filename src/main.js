let screen = $('.screen')
let num = localStorage.getItem('operating-num') || 100
num = parseInt(num)
console.log(typeof num)
screen.text(num)
const local = (setnum) => {
  localStorage.setItem('operating-num', setnum)
}
$('.addNum').on('click', () => {
  local(num += 1)
  screen.text(num)
})
$('.lessNum').on('click', () => {
  local(num -= 1)
  screen.text(num)
})
$('.multiplyNum').on('click', () => {
  local(num *= 2)
  screen.text(num)
})
$('.exceptNum').on('click', () => {
  local(num /= 2)
  screen.text(num)
})


let $ol = $('ol')
let $content = $('.content')
const index = localStorage.getItem('show-index') || 0
$ol.on('click', 'li', e => {
  const $li = $(e.currentTarget)
  $li.addClass('active').siblings().removeClass('active')
  const index = $li.index()
  localStorage.setItem('show-index', index)
  $content.eq(index).addClass('show').siblings().removeClass('show')
})
$ol.children().eq(index).trigger('click')


let $movebox = $('.movebox')
let active = localStorage.getItem('stateMove') === 'yes'
$movebox.toggleClass('active', active)
$movebox.on('click', () => {
  if ($movebox.hasClass('active')) {
    $movebox.removeClass('active')
    localStorage.setItem('stateMove', 'no')
  } else {
    $movebox.addClass('active')
    localStorage.setItem('stateMove', 'yes')
  }
})


let $discoloration = $('.discoloration')
$discoloration.on('mouseenter', () => {
  $discoloration.addClass('active')
}).on('mouseleave', () => {
  $discoloration.removeClass('active')
})