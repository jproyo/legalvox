;( function( window ) {

    $('#submitButton').on('click', function(e){
        e.preventDefault();
        $('#emailDiv').show();
        $('#submitButton').hide();
        $('#submitButton2').focus();
    });

    $('#submitButton2').on('click', function(e){
        e.preventDefault();
        window.location.href = './contractStatus.html'
    });

    $('#emailDiv').hide();

    $('div[id^="step"]').hide();

    $('#tipoContrato').on('changeSelect', function(e){
        $('#stepTipo').show();
    });

    $('#selectHoras').on('changeSelect', function(e){
        $('#stepHorario').show();
    });

    $('#selectDias').on('changeSelect', function(e){
        $('#stepBanda').show();
    });

    $('#selectBanda').on('changeSelect', function(e){
        $('#stepSueldo').show();
    });

    $('#inputSueldo').on('changeSelect', function(e){
        $('#stepDuracion').show();
    });

    $('#selectDuracion').on('changeSelect', function(e){
        $('#stepPuesto').show();
    });


})(window);
