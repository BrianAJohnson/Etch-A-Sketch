var size;

$(document).ready(function(){

  // Create the gid with the default size
  createGrid(size);

  // Set reset event listener
  $('#reset').click(function(){
    reset();
  });
});



// Create Grid - Set size - Add mouseover Event
function createGrid(size){

  if(isNaN(size) || size<1 || size>100){
    size = 16;
  }

  var width = 100 / size;

  // loop through rows and colomns and add divs to DOM
  for(var row = 0; row < size; row++){
    for(var col = 0; col < size; col++){
        $('.container').append('<div class="grid" ></div>');
    }
  }

  // set size and add mouseover functionality
  $('.grid').css('width', width + '%');
  $('.grid').css('height', width + '%');

  $('.grid').mouseover(function(){
    $(this).css('background-color', 'blue');
  });
}

// setup reset button
function reset(){
  $('.container').html('');
  size = $('#gridsize').val();
  createGrid(size);
}
