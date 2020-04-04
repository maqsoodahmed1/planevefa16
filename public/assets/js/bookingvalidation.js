bookingvalidation = () =>{
    var element = document.getElementById('validation')
    var bookedVenue = document.getElementsByName('bookedVenue')[0].value
    var dateOfViewing = document.getElementsByName('dateOfViewing')[0].value
    var fullName = document.getElementsByName('fullName')[0].value
    var emailAddress = document.getElementsByName('emailAddress')[0].value
    var PhoneNumber = document.getElementsByName('PhoneNumber')[0].value
    var eventType = document.getElementsByName('eventType')[0].value
    var eventDate = document.getElementsByName('eventDate')[0].value
    var numberOfGuests = document.getElementsByName('numberOfGuests')[0].value
    
    if(fullName.length <= 0 || fullName.length < 5)
    {
        window.alert('name is lesser than 0')
        return false      
    }
    if(dateOfViewing.length <= 0)
    {
        window.alert('date of viewing is lesser than 0')
        return false      
    }
     if(PhoneNumber.length <= 0 || PhoneNumber.length > 12 )
    {
        window.alert('number is lesser than 0')
        return false      
    } 
    if(eventType.length <= 0 )
    {
        window.alert('eventtype is lesser than 0')
        return false      
    } if(eventDate.length <= 0 )
    {
        window.alert('event date is lesser than 0')
        return false      
    }
    if(numberOfGuests.length <= 0 )
    {
        window.alert('number of guests is lesser than 0')
        return false      
    }
    
}