/* original: https://scrapbox.io/scrasobox/%E3%81%97%E3%81%8A%E3%82%8A%E8%A8%98%E6%B3%95 */

const __bkmClass = '.deco-\\.' /* ここで記法のセレクタを設定してね。デフォルトはドットです */

const __bkmMenuTitle = 'Bookmarks'
scrapbox.PageMenu.addMenu({
  title: __bkmMenuTitle,
  image: '/assets/img/logo.png',
  onClick: function() {
    const __fixedHeaderHeight = ($('.navbar').css('position') == 'fixed' ? $('.navbar').height() : 0) + 
        ($('.navbar-pagemenu').height() || 0)
    scrapbox.PageMenu(__bkmMenuTitle).removeAllItems()
    $(__bkmClass).closest('.line').each(function(i, e){
      scrapbox.PageMenu(__bkmMenuTitle).addItem({
        title: $(e).find(__bkmClass).text(),
        onClick: function() { 
          $('html,body').animate({ 
            scrollTop: $(e).offset().top - $('body').offset().top - __fixedHeaderHeight 
          }, 150) 
        }
      })
    })
  }
})
