var box = document.querySelector('.box');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    box.classList.remove( currentClass );
  }
  box.classList.add( showClass );
  currentClass = showClass;
}

changeSide();

radioGroup.addEventListener( 'change', changeSide );

// https://3dtransforms.desandro.com/box