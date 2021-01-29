const globalObj = {
  init () {
    globalObj.screen.text(globalObj.num)
    globalObj.bindEvents()
  },
  screen: $('.screen'),
  num: parseFloat(localStorage.getItem('operating-num') || 100),
  hashEvents: {
    '.addNum': 'addNumFn',
    '.lessNum': 'lessNumFn',
    '.multiplyNum': 'multiplyNumFn',
    '.exceptNum': 'exceptNumFn',
  },
  methods: {
    local (result) {
      globalObj.screen.text(result)
      localStorage.setItem('operating-num', result)
    },
    addNumFn () {
      globalObj.methods.local(globalObj.num += 1)
    },
    lessNumFn () {
      globalObj.methods.local(globalObj.num -= 1)
    },
    multiplyNumFn () {
      globalObj.methods.local(globalObj.num *= 2)
    },
    exceptNumFn () {
      globalObj.methods.local(globalObj.num /= 2)
    }
  },
  bindEvents () {
    for (let key in globalObj.hashEvents) {
      console.log(key)
      $(key).on('click', globalObj.methods[globalObj.hashEvents[key]])
    }
  }
}
globalObj.init()



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