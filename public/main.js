//text counter
function textCounter( field, countfield, maxlimit ) {
    if ( field.value.length > maxlimit ) {
        field.value = field.value.substring( 0, maxlimit );
        field.blur();
        field.focus();
        return false;
    } else {
        countfield.value = maxlimit - field.value.length;
    }
}
//reset comment form
function formReset() {
    document.getElementById("formreset").reset();
}

