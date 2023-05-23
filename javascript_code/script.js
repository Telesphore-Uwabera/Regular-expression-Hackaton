function displayChoice() {
    var choice = document.getElementById("pattern_choice");
    var selectedChoice = choice.options[choice.selectedIndex].text;
    var choiceMsg = "Fantastic! You have selected " + selectedChoice;
    document.getElementById("choice_msg").innerHTML = choiceMsg;
    input_message = "Please enter any " + selectedChoice + " of your choice:";
    document.getElementById("input_request").innerHTML = input_message;
    document.getElementById("output").innerHTML = "";
}

function validateInput() {
    var choice = document.getElementById("pattern_choice");
    var selectedChoice = choice.value;
    var userInput = document.getElementById("user_input").value;
    var pattern;
    var errorMessage;

    switch (selectedChoice) {
        case "1": // Movie Title

            document.getElementById("example").innerHTML = "Hint: Title (yyyy)";
            pattern = /^(.+) \(\d{4}\)$/;
            errorMessage = "Movie titles can only contain letters, digits, spaces, and the characters: '.,?!-";
            break;
        case "2": // Song Lyrics

            document.getElementById("example").innerHTML = "Hint: [Verse X] some lyrics";
            pattern = /^\[Verse \d+\] (.+)/;
            errorMessage = "Song lyrics can only contain letters, digits, spaces, and the characters: '.,?!-";
            break;

        case "3": // Twitter Username
            document.getElementById("example").innerHTML = "Hint: @username";
            pattern = /^@\w+/;
            errorMessage = "Twitter usernames must be 1-15 characters long and can only contain letters, digits, and underscores.";
            break;

        case "4": // ISBN Number
            document.getElementById("example").innerHTML = "Hint: ISBN xxx-x-xxx-xxxxx-x";
            pattern = /^ISBN\s\d{3}-\d{1}-\d{3}-\d{5}-\d{1}$/;
            errorMessage = "Please enter a valid ISBN number.";
            break;

        case "5": // Jokes
            document.getElementById("example").innerHTML = "Hint: Why did the ... ? Because...";
            pattern = /(^Why did the .+\?)\s(Because .+)+/;
            errorMessage = "Jokes can only contain letters, digits, spaces, and the characters: '.,?!-";
            break;

        case "6": // TV Episode Titles
            document.getElementById("example").innerHTML = "Hint: Show Name SXXEXX: Episode Title";
            pattern = /(.+)\d{2}E\d{2}:(.+)/;
            errorMessage = "TV episode titles can only contain letters, digits, spaces, and the characters: '.,?!-";
            break;
        case "7": // Weirdly Formatted Dates
            document.getElementById("example").innerHTML = "Hint: dd-MMM-yyyy";
            pattern = /^\d{2}\-[A-Z]{3}\-\d{4}$/;
            errorMessage = "Please enter a date in the format dd-MMM-yyyy.";
            break;

        case "8": // HEX Color codes
            document.getElementById("example").innerHTML = "Hint: #XXXXXX";
            pattern = /^#\w{6}$/;
            errorMessage = "Please enter a valid HEX color code.";
            break;

        case "9": // IP Address
            document.getElementById("example").innerHTML = "Hint: xxx.xxx.xxx.xxx";
            pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
            errorMessage = "Please enter a valid IP address.";
            break;
        default:
            break;
    }

    if (userInput.match(pattern)) {
        var outputMessage = userInput + " is in the correct pattern of " + selectedChoice;
        document.getElementById("output").innerHTML = outputMessage;
    } else {
        document.getElementById("output").innerHTML = errorMessage;
    }
}