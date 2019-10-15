$(document).ready(function () {
    $('.frm-bike-sizes > label').css('display', 'none');
    $('[value="elektrischefietsheren"]').on("change", function () {

        $('label[for="fiets1"] , label[for="fiets2"] , label[for="fiets3"]').slideDown(1000);
        $('label[for="fiets4"] , label[for="fiets5"] , label[for="fiets6"] , label[for="fiets7"] , label[for="fiets8"] , label[for="fiets9"] , label[for="fiets10"] , label[for="fiets11"] , label[for="fiets12"]').fadeOut(100);
    });

    $('[value="stadfietsheren"]').on("change", function () {
        $('label[for="fiets4"],label[for="fiets5"],label[for="fiets6"]').slideDown(1000);
        $('label[for="fiets1"] , label[for="fiets2"] , label[for="fiets3"] , label[for="fiets7"] , label[for="fiets8"] , label[for="fiets9"] , label[for="fiets10"] , label[for="fiets11"] , label[for="fiets12"]').fadeOut(100);
    });

    $('[value="elektrischefietsdames"]').on("change", function () {
        $('label[for="fiets7"],label[for="fiets8"],label[for="fiets9"]').slideDown(1000);
        $('label[for="fiets1"] , label[for="fiets2"] , label[for="fiets3"] , label[for="fiets4"] , label[for="fiets5"] , label[for="fiets6"] , label[for="fiets10"] , label[for="fiets11"] , label[for="fiets12"]').fadeOut(100);
    });

    $('[value="stadsfietsdames"]').on("change", function () {
        $('label[for="fiets10"],label[for="fiets11"]').slideDown(1000);
        $('label[for="fiets1"] , label[for="fiets2"] , label[for="fiets3"] , label[for="fiets4"] , label[for="fiets5"] , label[for="fiets6"] , label[for="fiets7"] , label[for="fiets8"] , label[for="fiets9"] , label[for="fiets12"]').fadeOut(100);
    });

    $('[value="vouwfietsen"]').on("change", function () {
        $('label[for="fiets12"]').slideDown(1000);
        $('label[for="fiets1"] , label[for="fiets2"] , label[for="fiets3"] , label[for="fiets4"] , label[for="fiets5"] , label[for="fiets6"] , label[for="fiets7"] , label[for="fiets8"] , label[for="fiets9"] , label[for="fiets10"] , label[for="fiets11"]').fadeOut(100);
    });


});