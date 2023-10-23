// Instructs the engine to load the HTML and CSS before running the JS
$(document).ready(function () {

    // Create a variable to display the current date and time
    var displayTime = document.querySelector("#currentDay");
  
    // Use dayjs to format and display the current date and time
    var currentTime = dayjs().format("dddd, MMMM D, YYYY")
    displayTime.textContent = currentTime;
  
    // Assign a click listener to the save buttons for user input and save to local storage
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // Save user input text in local storage with the corresponding time
      localStorage.setItem(time, text);
    });
  
    // Function to track and update the background indicators based on the current hour
    function hourTracker() {
      // Get the current hour
      var currentHour = dayjs().hour();
  
      // Loop over time blocks
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // Check the time and add the appropriate classes for background indicators
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
    // Call the hourTracker function to update the background indicators
    hourTracker();
  
    // Function to retrieve and display data from local storage
    function displayText() {
      // Loop over time blocks
      $(".time-block").each(function () {
        var blockHour = $(this).attr("id");
        // Retrieve text data from local storage based on the block's ID and display it
        $(this).children(".description").val(localStorage.getItem(blockHour));
      });
    }
    // Call the displayText function to display saved data from local storage
    displayText();
  
  });