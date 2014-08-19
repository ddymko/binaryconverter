/*
*   Author: David Dymko
*
*
* */

$(document).ready(function(){

    $("#dec").keyup(function(e) {
        var decimal = $("#dec").val();

            if (!isNaN(decimal)){
            decConvert($("#dec").val(), 'dec');
        }
          else {
            $("#hex").val("");
            $("#bin").val("");
            $("#oct").val("");   
             }
          
        
    });

    $("#bin").keyup(function(e) {
        var binary = $("#bin").val();
        var num = new Number(binary);
        var decimal = parseInt(binary, 2);

        if ( !isNaN(num)|| !decimal === undefined){
         
         binConvert(decimal, 'bin');  

        }
         else {
            $("#hex").val("");
            $("#dec").val("");
            $("#oct").val("");   
             }
    });

  
    $("#hex").keyup(function(e) {
        var hex = $("#hex").val();
        var decimal;
         decimal = parseInt(hex, 16);
        hexConvert(decimal, 'hex');
    });
    
     $("#oct").keyup(function(e) {
        var oct = $("#oct").val();
        var decimal;
        //
    if (!isNaN(oct)){
        decimal = parseInt(oct, 8);
        octConvert(decimal, 'oct');
        }
     else {
            $("#hex").val("");
            $("#bin").val("");
            $("#dec").val("");   
             }
    });

});

function decConvert(value) {
           
            var num = new Number(value);
            var binary = num.toString(2);
            var octal = num.toString(8);
            var hexa = num.toString(16);
           
           
                $("#hex").val(hexa);
                $("#bin").val(binary);
                $("#oct").val(octal);     
    };



function hexConvert(value) {
            var num = new Number(value);
            var binary = num.toString(2);
            var octal = num.toString(8);
            var hexa = parseInt(binary, 2).toString(16);

           
                $("#dec").val(num.toString());
                $("#bin").val(binary);
                $("#oct").val(octal);
};

function binConvert(value) {
            var num = new Number(value);
            var binary = num.toString(2);
            var octal = num.toString(8);
            var hexa = num.toString(16);
           
                $("#dec").val(num.toString());
                $("#hex").val(hexa);
                $("#oct").val(octal);
};


function octConvert(value) {
            var num = new Number(value);
            var binary = num.toString(2);
            var octal = num.toString(8);
            var hexa = parseInt(binary, 2).toString(16);

                $("#dec").val(num.toString());
                $("#bin").val(binary);
                $("#hex").val(hexa);

           
};


