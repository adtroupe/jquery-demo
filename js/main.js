/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

// $('button').on('click', function() {
//     var buttonID = $(this).attr('id');
//     var modifyThis = $('#selector').val();
//     var newContent = $('#newContent').val();

//     if(buttonID == "change-content") {
//         function changeContent() {
//             $(modifyThis).text(newContent);
//         }
//     }
// });

$('#change-content').on('click', function() {
    var modifyThis = $('#selector').val();
    var newContent = $('#newContent').val();
    $(modifyThis).text(newContent);
});


$('#add-at-end').on('click', function() {
    var modifyThis = $('#selector').val();
    var newContent = $('#newContent').val();
    $(modifyThis).append(newContent);    
});


$('#add-at-start').on('click', function() {
    var modifyThis = $('#selector').val();
    var newContent = $('#newContent').val();
    $(modifyThis).prepend(newContent);    
});


$('#insert-before').on('click', function() {
    var modifyThis = $('#selector').val();
    var newContent = $('#newContent').val();
    $(modifyThis).before(newContent);    
});


$('#move-after').on('click', function() {
    var modifyThis = $('#selector').val();
    var newContent = $('#newContent').val();
    $(modifyThis).insertAfter(newContent);    
});


$('#surround-class').on('click', function() {
    var modifyThis = $('#selector').val();
    var newContent = $('#newContent').val();
    var current = $(modifyThis).text();
    $(modifyThis).html('<div class='+newContent+'>'+current+'</div>');    
});


$('#hide-text').on('click', function() {
    var modifyThis = $('#selector').val();
    var newContent = $('#newContent').val();
    var current = $(modifyThis).text();
    if (current.length > 12) {
        $(modifyThis).html('<div class="hidden">'+current+'</div>');    
    }
});






