function Datum(executionContext) 
{
    debugger;
   
    var formContext = executionContext.getFormContext();

    var Today = new Date();
    var dd = Today.getDate();
    var mm = Today.getMonth() + 1;
    var yyyy = Today.getFullYear();

	if (dd < 10)
	{
		dd = '0' + dd
	}

	if (mm < 10)
	{
		mm = '0' + mm
	} 

	if (Today) 
	{
		formContext.getAttribute("prefix_anfangsdatum_dat").setValue(Today)
	}

	
	var EndDate = AddWerktage(new Date(),4);

	if (EndDate) 
	{
		formContext.getAttribute("prefix_enddatum_dat").setValue(EndDate);
	}
}


function AddWerktage(datum, AnzahlTage)
{
    while (AnzahlTage > 0)
    {
        var werktag = datum.getDay();
        if (werktag !== 0 & werktag !== 6)
        {
            AnzahlTage = AnzahlTage - 1;
        }
        datum.setDate(datum.getDate() + 1);
    }
    return datum;
}
