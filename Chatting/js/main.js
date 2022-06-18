$(document).ready(function() {
    // setInterval(function() {
    //     loadXMLDoc();
    // }, 1000);
    loadXMLDoc();


    $("#search_text").keyup(function() {

        var input = $(this).val();
        // alert(input);
        if (input != "") {
            $.ajax({
                url: "searchuser.php",
                method: "POST",
                data: { input: input },
                success: function(data) {
                    $("#userlist").html(data);
                    $("#userlist").css("dsiplay", "block");
                }

            });
        } else {
            $("#userlist").css("dsiplay", "none");
        }
    });




    // var text1 = getUrlParameter('touserid');
    // getUrlParameter('fromuserid');
    // alert(text1);


    // $('#content').click(function() {
    //     var xhttp = new XMLHttpRequest();
    //     // xhttp.responseType = 'json';
    //     xhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
    //             $('#userdata').html(xhttp.response);
    //         }
    //     };
    //     xhttp.open("GET", "selectuser.php", true);
    //     xhttp.send();
    //     alert("suja");
    // });




});

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    // xhttp.responseType = 'json';
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $('#userlist').html(xhttp.response);


        }
    };
    xhttp.open("GET", "userindexfetch.php?u_id=" + u_id, true);
    xhttp.send();
};

// function getUrlParameter(sParam) {
//     var sPageURL = window.location.search.substring(1),
//         sURLVariables = sPageURL.split('&&'),
//         sParameterName,
//         i;

//     for (i = 0; i < sURLVariables.length; i++) {
//         sParameterName = sURLVariables[i].split('=');

//         if (sParameterName[0] === sParam) {
//             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//         }
//     }
//     return false;
// };