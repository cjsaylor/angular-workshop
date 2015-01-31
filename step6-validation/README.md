# Validation

Angular is able to provide relatively robust validation (customizable to boot). It does this by
attaching some basic functionality to form elements on the page. In conjuntion with the `ngModel` controller, 
the scopes of input fields within the form will start to recieve special scope variables to show indications
of validity.

[More indepth information on validation](https://code.angularjs.org/1.3.10/docs/api/ng/directive/ngModel)

## Assignment

1. Add basic validation to the `checkout.html` form: required fields and error messaging when invalid.
2. Create a special directive called `awCardExpiration` that will take the month and year of the form
   input and validates that the date provided is valid. Valid in this case means that the month and year
   must be the current month and year or later.
