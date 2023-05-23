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
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;
        case "2": // Song Lyrics

            document.getElementById("example").innerHTML = "Hint: [Verse X] some lyrics";
            pattern = /^\[Verse \d+\] (.+)/;
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;

        case "3": // Twitter Username
            document.getElementById("example").innerHTML = "Hint: @username";
            pattern = /^@\w+/;
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;

        case "4": // ISBN Number
            document.getElementById("example").innerHTML = "Hint: ISBN xxx-x-xxx-xxxxx-x";
            pattern = /^ISBN\s\d{3}-\d{1}-\d{3}-\d{5}-\d{1}$/;
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;

        case "5": // Jokes
            document.getElementById("example").innerHTML = "Hint: Why did the ... ? Because...";
            pattern = /(^Why did the .+\?)\s(Because .+)+/;
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;

        case "6": // TV Episode Titles
            document.getElementById("example").innerHTML = "Hint: Show Name SXXEXX: Episode Title";
            pattern = /(.+)\d{2}E\d{2}:(.+)/;
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;
        case "7": // Weirdly Formatted Dates
            document.getElementById("example").innerHTML = "Hint: dd-MMM-yyyy";
            pattern = /^\d{2}\-[A-Z]{3}\-\d{4}$/;
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;

        case "8": // HEX Color codes
            document.getElementById("example").innerHTML = "Hint: #XXXXXX";
            pattern = /^#\w{6}$/;
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;

        case "9": // IP Address
            document.getElementById("example").innerHTML = "Hint: xxx.xxx.xxx.xxx";
            pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
            errorMessage = userInput + " is not in the correct format. Check Hint!";
            break;
        default:
            break;
    }

    if (userInput.match(pattern)) {
        var outputMessage = userInput + " is in the correct pattern of " + pattern;
        document.getElementById("output").innerHTML = outputMessage;
    } else {
        document.getElementById("output").innerHTML = errorMessage;
    }

}


function getMatchingStrings(regex) {
    var set_list = [
        'Different (1971)',
        'Holy Grail (1975)',
        'Brian (1979)',
        'Moly (2000) the nother',
        '[Verse 1] beat it boy',
        '[Verse 500] any verse',
        '[Verse X] everything is alright',
        '@sir_Uracyaryamye',
        '@umuyede6t57239629',
        'wakanda@forever',
        '@more_life',
        'ISBN 978-3-126-14810-0',
        'ISBN',
        'ISBN 276-3-006-12310-5',
        'Why did the tree fall down ? Because of the wind',
        '[Verse 5] any verse',
        '[Verse X] everything is alright',
        'Marvelous Maisel in the forest S12E12: Boardway runner',
        'Holy Grail (1975)',
        'Brian (1979)',
        'Moly (2000)',
        '21-MAR-1982',
        '31st-APR-1982',
        '21-JUN-1875',
        '09/DEC/1672',
        '#FF0000',
        '#800000',
        'hvjkjhqe',
        '#000000',
        '255.255.255.255',
        '127.0.0.0.0.1',
        '127.0.0.1'
    ];

    var matches = [];
    for (var i = 0; i < set_list.length; i++) {
        if (regex.test(set_list[i])) {
            matches.push(set_list[i]);
        }
    }

    return matches;
}


function checkFromList() {
    var dataType = document.getElementById("pattern_choice").value;
    var pattern;
    if (dataType === "1"){
        pattern = /^(.+) \((\d{4})\)$/;
    } else if (dataType === "2"){
        pattern = /^\[Verse \d+\] (.+)/;
    } else if (dataType === "3"){
        pattern = /^@\w+/;
    } else if (dataType === "4"){
        pattern = /^ISBN\s\d{3}-\d{1}-\d{3}-\d{5}-\d{1}$/;
    } else if (dataType === "5"){
        pattern = /(^Why did the .+\?)\s(Because .+)+/
    } else if (dataType === "6") {
        pattern = /(.+)\d{2}E\d{2}:(.+)/;
    } else if (dataType === "7") {
        pattern = /^\d{2}\-[A-Z]{3}\-\d{4}$/;
    } else if (dataType === "8") {
        pattern = /^#\w{6}$/;
    } else if (dataType === "9") {
        pattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}/;
    }
    var matchingStrings = getMatchingStrings(pattern);
    document.getElementById("list_output").innerHTML = matchingStrings.join("<br>");
}