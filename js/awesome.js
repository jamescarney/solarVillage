$('#icon').addClass('animate rotateOut');

$('.donationButton').click( function() {
  
  var amount = $(this).text();
  $('.donationAmount').html(amount);
//  $( this ).clone().appendTo( ".donationAmount" );  
});


