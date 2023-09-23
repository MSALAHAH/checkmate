 var sentenceParts = [];

        function updateSentence() {
            document.getElementById('sentence').value = sentenceParts.join(' ').trim();
        }

        // function uncheckAll() {
        //     var checkboxes = document.getElementsByName('checkbox');
        //     for (var i = 0; i < checkboxes.length; i++) {
        //         checkboxes[i].checked = false;
        //     }
        //     sentenceParts = [];
        //     updateSentence();
        // }

        function reloadPage() {
            window.location.reload();
        }


        function copyToClipboard() {
            var textarea = document.getElementById('sentence');
            textarea.select();
            document.execCommand('copy');
        }

        // SUB-OPTIONS FUNCTIONS BELOW
// SUBs=======================================================================

        // creditSubOptionsFunction
        function toggleCreditAddedOptions() {
            var creditAddedCheckbox = document.getElementById('creditAdded');
            var creditAddedOptions = document.getElementById('creditAddedOptions');

            if (creditAddedCheckbox.checked) {
                creditAddedOptions.style.display = 'block';
            } else {
                creditAddedOptions.style.display = 'none';
            }
            updateSentence();
        }

        // customerEducationSubOptionsFunction
        function toggleCustomerEducatedOptions() {
            var customerEducatedCheckbox = document.getElementById('customerEducated');
            var customerEducatedOptions = document.getElementById('customerEducatedOptions');

            if (customerEducatedCheckbox.checked) {
                customerEducatedOptions.style.display = 'block';
            } else {
                customerEducatedOptions.style.display = 'none';
            }
            updateSentence();
        }

        // temporaryServiceRestorationFunction
        function toggletemporaryServiceRestorationOptions() {
            var temporaryServiceRestorationCheckbox = document.getElementById('temporaryServiceRestoration');
            var temporaryServiceRestorationOptions = document.getElementById('temporaryServiceRestorationOptions');

            if (temporaryServiceRestorationCheckbox.checked) {
                temporaryServiceRestorationOptions.style.display = 'block';
            } else {
                temporaryServiceRestorationOptions.style.display = 'none';
            }
            updateSentence();
        }

        // collectionsPaymentsFunction
        function toggleCollectionOptionsOptions() {
            var collectionOptionsCheckbox = document.getElementById('collectionOptions');
            var collectionOptionsOptions = document.getElementById('collectionOptionsOptions');

            if (collectionOptionsCheckbox.checked) {
                collectionOptionsOptions.style.display = 'block';
            } else {
                collectionOptionsOptions.style.display = 'none';
            }
            updateSentence();
        }
        // optimumIdActionsFunction
        function toggleoptIdActionsOptions() {
            var optIdActionsCheckbox = document.getElementById('optIdActions');
            var optIdActionsOptions = document.getElementById('optIdActionsOptions');

            if (optIdActionsCheckbox.checked) {
                optIdActionsOptions.style.display = 'block';
            } else {
                optIdActionsOptions.style.display = 'none';
            }
            updateSentence();
        }

        function toggledisconnectionActionsOptions() {
            var disconnectionActionsCheckbox = document.getElementById('disconnectionActions');
            var disconnectionActionsOptions = document.getElementById('disconnectionActionsOptions');

            if (disconnectionActionsCheckbox.checked) {
                disconnectionActionsOptions.style.display = 'block';
            } else {
                disconnectionActionsOptions.style.display = 'none';
            }
            updateSentence();
        }

        function toggledroppedCallActionsOptions() {
            var droppedCallActionsCheckbox = document.getElementById('droppedCallActions');
            var droppedCallActionsOptions = document.getElementById('droppedCallActionsOptions');

            if (droppedCallActionsCheckbox.checked) {
                droppedCallActionsOptions.style.display = 'block';
            } else {
                droppedCallActionsOptions.style.display = 'none';
            }
            updateSentence();
        }
// SUBs=======================================================================
        window.onload = function () {
            var checkboxes = document.getElementsByName('checkbox');
            for (var i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener('change', handleCheckboxChange);
            }
        }

        // var sentenceParts = [];
        // var suggestions = [
        //     "a Proper Greeting is Always a Good Start.",
        //     "It's Useful To Collect The Best Callback Number.",
        //     "Let The Customer Confirm The Address.",
        //     "Don't Forget To Run STAT Tool.",
        //     "Remember To Run IBA and Follow the Tool.",
        //     "Always Updated The CPC.",
        //     "Ask About the Best Way to send Alerts (Text/E-mail).",
        //     "Use Words Like .Please. and .Thank you..",
        //     // Add more suggestions or reminders here
        // ];

        function displayRandomSuggestion() {
            var suggestionsDiv = document.getElementById('suggestions');
            var randomIndex = Math.floor(Math.random() * suggestions.length);
            var randomSuggestion = suggestions[randomIndex];
            suggestionsDiv.innerHTML = "<strong>_Reminder_<br></strong> " + randomSuggestion;
        }

        function handleCheckboxChange(event) {
            var checkbox = event.target;
            if (checkbox.checked) {
                if (sentenceParts.indexOf(checkbox.value) === -1) {
                    sentenceParts.push(checkbox.value);
                }
            } else {
                var index = sentenceParts.indexOf(checkbox.value);
                if (index !== -1) {
                    sentenceParts.splice(index, 1);
                }
            }
            updateSentence();
        }


        // window.onload = function () {
        //     displayRandomSuggestion();
        //     var intervalDuration = 5000;
        //     setInterval(function () {
        //         displayRandomSuggestion();
        //     }, intervalDuration);

        //     var checkboxes = document.getElementsByName('checkbox');
        //     for (var i = 0; i < checkboxes.length; i++) {
        //         checkboxes[i].addEventListener('change', handleCheckboxChange);
        //     }
        // };


