var element = document.getElementById('modl');
element.innerHTML = `
<!-- booking details -->
<div class="space-70"></div>
    <!--booking end  -->


    <!-- model start -->
 

    <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-full" role="document">
            <div class="modal-content ">
            
                <div class="modal-header mdl col-md-6">
                  
                    <h1 class="modal-title ">
                      Book Your Venue</h1>
                   
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <h3><span aria-hidden="true"><i class="fas fa-times-circle"></i></span></h3>
                    </button>
                    
                </div>
                <div class="col-md-6 mdl " style="size: 5px;" >
                  <h5>&nbsp;&nbsp;&nbsp;Kashana</h5>
               
               <hr style="height:1px;border:none;color:#333;background-color:#333;" />
               <form action="/booking/booking" method="POST" >
               <input style="display: none;" name="venueId" type="text" value="<%= venues._id %>"> 

           <br>
                  <div class="">
        <div class="row text-left">
          <div class="form-group col-md-6 " style="margin-left:0px;margin-right: 0px; width: 27.5%;">
            <label for="inputEmail4">Prefered date of viewing</label>
            <input type="text" name = "dateOfViewing" class="form-control datepicker inputborder" id="inputPassword4">        
          </div>
          <div class="form-group col-md-6 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">Your full name</label>
            <input type="text" name="fullName" class="form-control inputborder" id="inputPassword4">        
          
          </div>
        </div>
        <div class="row text-left">
            <div class="form-group col-md-6 " style="margin-left:0px;margin-right: 0px; width: 27.5%;">
              <label for="inputEmail4">Your email address</label>
              <input type="text" name="emailAddress" class="form-control inputborder" id="inputPassword4">        
            </div>
            <div class="form-group col-md-6 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
              <label for="inputPassword4">Your phone number</label>
              <input type="text" name="PhoneNumber" class="form-control inputborder" id="inputPassword4">        
            
            </div>
          </div>
          <!-- <div class="space-70"></div> -->
          <br>
          <h5>Your Event Details</h5>
          <hr style="height:1px;border:none;color:#333;background-color:#333;" />
          <br>
          <div class="row text-left ml-auto">
              <div class="form-group col-md-4 " style="margin-left:0px;margin-right: 0px; width: 27.5%;">
                <label for="inputEmail4">Event Type</label>
                <input type="text" name="eventType" class="form-control inputborder" id="inputPassword4">        
              </div>
              <div class="form-group col-md-4 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
                <label for="inputPassword4">Event date</label>
                <input type="text" name="eventDate" class="form-control datepicker inputborder" id="inputPassword4">        
              
              </div>
              <div class="form-group col-md-4 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
                  <label for="inputPassword4">Number of guest</label>
                  <input type="number" name = "numberOfGuests" class="form-control inputborder" id="inputPassword4">        
                
                </div>
            </div>

            <button type="submit"  class="btn btn-primary col-md-12">Send to Kashana</button>



    </div>
    
      </form>
   



                </div>
           
            </div>
        </div>

    </div> <!-- model end -->


`

