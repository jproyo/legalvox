;( function( window ) {

    $('#submitButton').on('click', function(e){
        e.preventDefault();
        $('#emailDiv').show();
        $('#submitButton').hide();
    });

    $('#submitButton2').on('click', function(e){
        e.preventDefault();
        window.location.href = './contractSign.html'
    });

    $('#emailDiv').hide();

})(window);
