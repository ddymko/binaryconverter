/*
 * Main driver for the application; contains logic for conversion between
 * decimal, binary, hexadecimal, and octal.
 *
 * @author: David Dymko, Spencer Kordecki
 */

$(document).ready(function() {

  var numb, bina, octa, hexa;

  $('#dec').keyup(function() {
    var decimal = $('#dec').val();

    if (isEmpty(decimal)) {
      clear();
    }
    else if (!isNaN(decimal)) {
      convert(decimal);
      $('#bin').val(bina);
      $('#oct').val(octa);
      $('#hex').val(hexa);
    }
  });

  $('#bin').keyup(function() {
    var binary = $('#bin').val();

    if (isEmpty(binary)) {
      clear();
    }
    else if (!isNaN(binary)) {
      convert(parseInt(binary, 2));
      $('#dec').val(numb);
      $('#oct').val(octa);
      $('#hex').val(hexa);
    }
  });

  $('#oct').keyup(function() {
    var octal = $('#oct').val();

    if (isEmpty(octal)) {
      clear();
    }
    else if (!isNaN(octal)) {
      convert(parseInt(octal, 8));
      $('#dec').val(numb);
      $('#bin').val(bina);
      $('#hex').val(hexa);
    }
  });

  $('#hex').keyup(function() {
    var hexadecimal = $('#hex').val();

    if (isEmpty(hexadecimal)) {
      clear();
    }
    else if ((97 < String.charCodeAt(hexadecimal.toLowerCase()) < 102) || !isNaN(hexadecimal)) {
      convert(parseInt(hexadecimal, 16));
      $('#dec').val(numb);
      $('#bin').val(bina);
      $('#oct').val(octa);
    }
  });

  function convert(val) {
    numb = new Number(val);
    bina = numb.toString(2);
    octa = numb.toString(8);
    hexa = numb.toString(16);
  }

  function isEmpty(value) {
    return value === '';
  }

  function clear() {
    $('#dec').val('');
    $('#bin').val('');
    $('#hex').val('');
    $('#oct').val('');
  }
});
