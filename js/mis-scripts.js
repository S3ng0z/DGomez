$(function () {

    /*----------------------------------------------------------
        INIT
    -----------------------------------------------------------*/
        
    $(document).ready(function() {
        setInterval(button_disable, 5000);
        setInterval(load, 500);

        let fade = document.getElementById('fade');

        fade.classList.toggle('hidden');
        fade.classList.toggle('fade-in');

        $('.link').click(function() {
        
        let fade = document.getElementById('fade')
        
        event.preventDefault();
        
        newLocation = this.href;

        $('#fade').fadeOut(2000, newpage);
        
        });
        
        function newpage() {
        
        window.location = newLocation;
        
        }

        function button_disable(){
            document.getElementById('ButtonMenu').style.opacity = "1";
            document.getElementById('ButtonMenu').style.cursor = "allowed";
            document.getElementById('ButtonMenu').style.pointerEvents = "all";
        }

        function load(){
            document.getElementById('principal').style.opacity = "1";
        }
        
        });

    /*-----------------------------------------------------------
    1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/

    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {

        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');

    });

    /*-----------------------------------------------------------
     2. INICIANDO SWIPER
     -------------------------------------------------------------*/
    var swiper = new Swiper('#animacion', {

        /*Botones de navegación */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        /*Botones de paginación */
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        speed: 1000,
        effect: 'fade',
        grabCursor: true,
        loop: true,
           autoplay: {
             delay: 3000,            
       },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        }

    });

    /*-----------------------------------------------------------
  3. INICIANDO VENOBOX
  -------------------------------------------------------------*/

    $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: 'rgba(255, 255, 255, 0.4)',
        border: '5px',
        closeColor: '#fff',
        overlayColor: 'rgba(12, 60, 22, 0.83)',
        spinner: 'three-bounce'
    });


    /*-----------------------------------------------------------
4. INICIANDO jquery.counterup
-------------------------------------------------------------*/
    $('.counter').counterUp();

    /*-----------------------------------------------------------
   5. INICIANDO "picker.date.js"
   -------------------------------------------------------------*/
    $('.datepicker').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        firstDay: 1,
        format: 'dddd, dd !de mmmm !de yyyy',
        formatSubmit: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true,
        min: true,
        max: 30,
        onStart: function () {
            var date = new Date();
            this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
        }
    });

    /*-----------------------------------------------------------
      6. INICIANDO "picker.time.js"
      -------------------------------------------------------------*/
    $('.timepicker').pickatime({
        clear: 'Borrar',
        format: 'hh:i A',
        interval: 60,
        min: [8, 00],
        max: [18, 00]

    });

    /*-----------------------------------------------------------
         6. INICIANDO "parsley.js"
         -------------------------------------------------------------*/
    $('#mi-formulario').parsley({
        errorClass: 'is-invalid text-danger',
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
        errorTemplate: '<li></li>',
        trigger: 'change',
        triggerAfterFailure: 'change'

    });

    /*-----------------------------------------------------------
             6. INICIANDO "stickit.js"
     -------------------------------------------------------------*/
    $('#menu-navegacion').stickit({
        className:'menu-fijo'        
    });

    /*-----------------------------------------------------------
             7. INICIANDO "page-scroll-to-id"
     -------------------------------------------------------------*/

    $('#menu-principal a').mPageScroll2id({
        offset: 50,
        highlightClass:'active'
    });



})