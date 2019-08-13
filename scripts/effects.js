$(function () {
    // Tab Change Effects Begin

    //add click event to run the effect to each tab button
    for (let i = 0; i < $('.btn-primary').length; i++) {
        $('.btn-primary')[i].addEventListener('click', runEffect);
    }

    //gets the data id of the clicked tab to select to correct div/page, selects any divs/pages with 'page' class that aren't the clicked one and animates them away with slide up, runs an anonymous function upon completion to run the slidedown affect and show the selected section
    function runEffect(event) {
        //Page Id
        var pgId = $(this).data("info");
        $('.page:not(#' + pgId + ')').slideUp(300, function () {
            setTimeout(function () {
                $('#' + pgId).slideDown('slow');
            }, 300);
        });
    }

/*   Unused
    function callback(event) {
        let pgId = $(this).data("info");
        setTimeout(function () {
            $('#' + pgId).hide();
        }, 1000);
    }
    */
   // Tab Change Effects End
});
