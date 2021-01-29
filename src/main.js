const featuresOne = {
  init () {
    featuresOne.screen.text(featuresOne.num)
    featuresOne.bindEvents()
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
      featuresOne.screen.text(result)
      localStorage.setItem('operating-num', result)
    },
    addNumFn () {
      featuresOne.methods.local(featuresOne.num += 1)
    },
    lessNumFn () {
      featuresOne.methods.local(featuresOne.num -= 1)
    },
    multiplyNumFn () {
      featuresOne.methods.local(featuresOne.num *= 2)
    },
    exceptNumFn () {
      featuresOne.methods.local(featuresOne.num /= 2)
    }
  },
  bindEvents () {
    for (let key in featuresOne.hashEvents) {
      console.log(key)
      $(key).on('click', featuresOne.methods[featuresOne.hashEvents[key]])
    }
  }
}
featuresOne.init()



const featuresTwo = {
  index: localStorage.getItem('show-index') || 0,
  ui: {
    $ol: $('ol'),
    $content: $('.content'),
    $li: undefined
  },
  init () {
    featuresTwo.bindEvents()
  },
  bindEvents () {
    featuresTwo.ui.$ol.on('click', 'li', e => {
      featuresTwo.showIndex(e.currentTarget)
    })
    featuresTwo.ui.$ol.children().eq(featuresTwo.index).trigger('click')
  },
  setIndex (index) {
    localStorage.setItem('show-index', index)
    featuresTwo.ui.$content.eq(index).addClass('show').siblings().removeClass('show')
  },
  showIndex (currentTarget) {
    featuresTwo.ui.$li = $(currentTarget)
    featuresTwo.ui.$li.addClass('active').siblings().removeClass('active')
    featuresTwo.setIndex(featuresTwo.ui.$li.index())
  }
}
featuresTwo.init()



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