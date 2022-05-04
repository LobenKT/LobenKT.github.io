/* You have full freedom on what to write inside this js file */
/* LOBEN KLIEN A TIPAN S15 */

$(document).ready(function () {
    /* Write your code here. You may also opt out to not use jQuery. 
    If so, you may remove everything in this file and write your js from scratch.*/

    
    

    $("select#filter").change(function () { 
        var category = $(this).val();
        $(".financeItem").each(function () {
            if ($(this).find(".itemCategory").text() != category) {
                $(this).hide();
            }
            else {
                $(this).show();
                //if shown category is equal to bills then show the new filtered total
                if (category == "Bills") {
                    var total = 0;
                    $(".financeItem").each(function () {
                        total += parseFloat($(this).find(".itemAmount").text());
                    });
                    $("#financesTotal").text(total);
                }
            }
        });
    
    });
    
    //function to submit the form on click of the submit button
    $("#submitBtn").click(function () {
        //get the values of the form
        var amount = $("#amount").val();
        var date = $("#date").val();
        var category = $("#category").val();
        var description = $("#desc").val();
        
    
        //validate the inputs in the form
        if (amount == "" || date == "" || description == "") {
            //function to display the error message if date is missing
            if (description == "" && amount == "" && date =="") {
                $("#errorText").text("Multiple input fields are blank/unset!");
            }
            //function to display the error message if amount is missing
            else if (amount == "") {
                $("#errorText").text("Amount cannot be left blank.");
            }
            //function to display the error message if description is missing
            else if (description == "") {
                $("#errorText").text("Description cannot be left blank");
            }
            else if (date == ""){ //if multiple fields are missing
                $("#errorText").text("Date cannot be left unset");    
            }
        
        }
        else {
            //function to get the total amount of all #amount values
            //convert text string from span to float
            var total = parseFloat($("#financesTotal").text());
            $("#amount").each(function () {
                total += parseFloat($(this).val());
            });
            //function to display the total amount
            $("#financesTotal").text(total);

            

            //function to add new expense inside itemList div
            if (category == "Bills") {
            $(".itemsList").prepend(`
            <div class='.financeItem' style="background-color: #e4e2e2;">
            <div class="itemHeader Bills">
                <span class='itemCategory'>${category}</span>
                </div>
            <div class="itemBody" >
                <span class='itemDate'>${date}</span>   
                <span class='itemDesc'>${description}</span> 
                <span class='itemAmount'>${amount}</span>
                </div>
                
             
            </div><br>`);
            
            }
            else if (category == "Food" ){
                $(".itemsList").prepend(`
                <div class='.financeItem' style="background-color: #e4e2e2;">
                <div class="itemHeader Food">
                    <span class='itemCategory'>${category}</span>
                    </div>
                <div class="itemBody">
                    <span class='itemDate'>${date}</span>   
                    <span class='itemDesc'>${description}</span> 
                    <span class='itemAmount'>${amount}</span>
                    </div>

                </div><br>`);
            }
            
            else if (category == "Leisure") {
                $(".itemsList").prepend(`
                <div class='.financeItem'>
                <div class="itemHeader Leisure style="background-color: #e4e2e2;"">
                    <span class='itemCategory'>${category}</span>
                    </div>
                <div class="itemBody">
                    <span class='itemDate'>${date}</span>   
                    <span class='itemDesc'>${description}</span> 
                    <span class='itemAmount'>${amount}</span>
                    </div>
                </div><br>`);
            }
    
            
            //function to reset the form
            $("#financesForm").trigger("reset");
            $("#errorText").html("");
        }

    });
    

});

