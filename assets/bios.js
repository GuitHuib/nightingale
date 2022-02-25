/* Toggle bio classes */
$('.headshot').click(function() {
  $(".headshot").removeClass("is-active");
  $(this).addClass("is-active");
  $("#bios").removeClass("d-none");
  $(".bio").removeClass("active");
  $("#bio"+this.id).addClass("active");
});
