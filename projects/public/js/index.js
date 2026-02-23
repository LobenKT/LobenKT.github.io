/* Expense Logger - Fixed and Enhanced Version */
/* LOBEN KLIEN A TIPAN S15 */

$(document).ready(function () {
    // Initialize total from existing items
    updateTotal();
    
    // Filter functionality
    $("select#filter").change(function () { 
        var category = $(this).val();
        
        if (category === "All") {
            $(".financeItem").show();
        } else {
            $(".financeItem").each(function () {
                if ($(this).find(".itemCategory").text() === category) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
        
        // Update total based on visible items
        updateTotal();
    });
    
    // Submit button functionality
    $("#submitBtn").click(function () {
        // Get form values
        var amount = $("#amount").val().trim();
        var date = $("#date").val();
        var category = $("#category").val();
        var description = $("#desc").val().trim();
        
        // Clear previous error
        $("#errorText").text("");
        
        // Validate inputs
        var errors = [];
        
        if (!date) {
            errors.push("Date cannot be left unset");
        }
        if (!amount || parseFloat(amount) <= 0) {
            errors.push("Amount must be a positive number");
        }
        if (!description) {
            errors.push("Description cannot be left blank");
        }
        
        // Display errors if any
        if (errors.length > 0) {
            if (errors.length > 1) {
                $("#errorText").text("Multiple input fields are blank/invalid!");
            } else {
                $("#errorText").text(errors[0]);
            }
            return;
        }
        
        // Format amount to 2 decimal places
        var formattedAmount = parseFloat(amount).toFixed(2);
        
        // Create new expense item
        var newItem = `
            <div class="financeItem">
                <div class="itemHeader ${category}"> 
                    <span class="itemCategory">${category}</span>
                </div>
                <div class="itemBody">
                    <span class="itemDate">${date}</span>
                    <span class="itemDescription">${description}</span>
                    <span class="itemAmount">${formattedAmount}</span>
                </div>
            </div>
        `;
        
        // Add to top of list
        $(".itemsList").prepend(newItem);
        
        // Update total
        updateTotal();
        
        // Reset form
        $("#financesForm")[0].reset();
        $("#errorText").text("");
        
        // Show success message briefly
        $("#errorText").css("color", "green").text("Expense added successfully!");
        setTimeout(function() {
            $("#errorText").text("");
            $("#errorText").css("color", "red");
        }, 2000);
    });
    
    // Function to calculate and update total
    function updateTotal() {
        var total = 0;
        var filter = $("#filter").val();
        
        $(".financeItem").each(function () {
            // Only count visible items
            if ($(this).is(":visible")) {
                var amount = parseFloat($(this).find(".itemAmount").text());
                if (!isNaN(amount)) {
                    total += amount;
                }
            }
        });
        
        $("#financesTotal").text(total.toFixed(2));
    }
    
    // Allow Enter key to submit
    $("#financesForm input, #financesForm textarea, #financesForm select").keypress(function(e) {
        if (e.which === 13 && e.target.tagName !== "TEXTAREA") {
            e.preventDefault();
            $("#submitBtn").click();
        }
    });
});

