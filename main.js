$(document).ready(() => {
  // Show and hide menu
  $('.menu').on('mouseover', () => {
    $('.nav-menu').show()
  });

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide()
  });

  // Toggle style on '+1' buttons
  $('.btn').on('mouseover', event => {
    $(event.currentTarget).addClass('btn-hover')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover')
  });

  // Display number of characters remaining in post
  $('.postText').on('keyup', event => {
    const post = $(event.currentTarget).val();
    const remaining = 140 - post.length;
    if(remaining <= 0) {
      $('.wordcount').addClass('red')
    } else {
      $('.wordcount').removeClass('red')
    }
    $('.characters').html(remaining);

  })

  $('.postText').focus();

});
