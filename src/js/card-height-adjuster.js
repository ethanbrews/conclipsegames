function adjustcards() {
    var height = 0;
    $('.adjustable-card').each(function() {
        if ($(this).height() > height) {
            height = $(this).height;
        }
    });
    $('.adjustable-card').height(height);
}
$(document).ready(function() {
    adjustcards();
})
$(window).resize(function() {
   adjustcards(); 
});