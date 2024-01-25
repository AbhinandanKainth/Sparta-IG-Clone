// dblclick is a double click event
// click is a single click event
$('.bi-suit-heart').on('click', function () {
    // For red color, see feed.css
    
    if ($(this).hasClass('bi-suit-heart')) {
        // Remove this class
        $(this).removeClass('bi-suit-heart');

        // Add this class
        // Adding fill
        $(this).addClass('bi-suit-heart-fill');


    } 
    
    // If we are clicking again, then fill gets removed
    else if ($(this).hasClass('bi-suit-heart-fill')) { 
        // Removing fill
        $(this).removeClass('bi-suit-heart-fill');
        $(this).addClass(' bi-suit-heart');
    }
});


//bookmarks
$('.bi-bookmark').on('click', function () {
    // Same as heart buttons

    // Send this info to the server
    if ($(this).hasClass('bi-bookmark')) {
        $(this).removeClass('bi-bookmark');
        $(this).addClass('bi-bookmark-fill');
        i++;
    } else if ($(this).hasClass('bi-bookmark-fill')) {
        $(this).removeClass('bi-bookmark-fill');
        $(this).addClass('bi-bookmark');
        i--;
    }
});