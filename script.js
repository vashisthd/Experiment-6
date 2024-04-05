
        function addusingwhile() {
            alert("Enter values for sum using While loop ");
            var sumWhile = 0;
        var countWhile = 0;
        while (countWhile < 5) {
            var numberWhile = parseInt(prompt("Enter "+(countWhile+1)+" integer number:"));
            sumWhile += numberWhile;
            countWhile++;
        }
        document.getElementById("result").innerHTML = "<h2>Sum using while loop: " + sumWhile + "</h2>";
        // document.write("<h2>Sum using while loop: " + sumWhile + "</h2>");
        }
        function addusingfor() {
            alert("Now Enter values for sum using for loop ");
        var sumFor = 0;
        for (var i = 0; i < 5; i++) {
            var numberFor = parseInt(prompt("Enter "+(i+1)+" integer number:"));
            sumFor += numberFor;
        }
        document.getElementById("result").innerHTML = "<h2>Sum using for loop: " + sumFor + "</h2>";
        // document.write("<h2>Sum using for loop: " + sumFor + "</h2>");
        }
        