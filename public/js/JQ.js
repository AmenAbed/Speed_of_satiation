$(document).ready(function () {
    /*Pizza*/
    $("#vege").click(function () {
        $("#Vegetarian").addClass("animate__jello");
        $(".Stpizza").slideUp(1200);
        $(".Stpizza button.btn-danger").parent().siblings(".card").show()
    })
    $("#Vegetarian").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#pep").click(function () {
        $("#Pepperoni").addClass("animate__jello");
        $(".Stpizza").slideUp(1200);
        $(".Stpizza button.btn-danger").parent().siblings(".card").show()
    })
    $("#Pepperoni").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#saus").click(function () {
        $("#Sausage").addClass("animate__jello");
        $(".Stpizza").slideUp(1200);
        $(".Stpizza button.btn-danger").parent().siblings(".card").show()
    })
    $("#Sausage").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#marg").click(function () {
        $("#Margherita").addClass("animate__jello");
        $(".Stpizza").slideUp(1200);
        $(".Stpizza button.btn-danger").parent().siblings(".card").show()
    })
    $("#Margherita").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#capr").click(function () {
        $("#Caprese").addClass("animate__jello");
        $(".Stpizza").slideUp(1200);
        $(".Stpizza button.btn-danger").parent().siblings(".card").show()
    })
    $("#Caprese").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#hot").click(function () {
        $("#Hot").addClass("animate__jello");
        $(".Stpizza").slideUp(1200);
        $(".Stpizza button.btn-danger").parent().siblings(".card").show()
    })
    $("#Hot").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#bbq").click(function () {
        $("#BBQ").addClass("animate__jello");
        $(".Stpizza").slideUp(1200);
        $(".Stpizza button.btn-danger").parent().siblings(".card").show()
    })
    $("#BBQ").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    /*Burger*/
    $("#ch-burger").click(function () {
        $("#Ch-burger").addClass("animate__jello");
        $(".Stburger").slideUp(1200);
        $(".Stburger button.btn-danger").parent().siblings(".card").show()
    })
    $("#Ch-burger").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#vi-burger").click(function () {
        $("#Vi-burger").addClass("animate__jello");
        $(".Stburger").slideUp(1200);
        $(".Stburger button.btn-danger").parent().siblings(".card").show()
    })
    $("#Vi-burger").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#mu-burger").click(function () {
        $("#Mu-burger").addClass("animate__jello");
        $(".Stburger").slideUp(1200);
        $(".Stburger button.btn-danger").parent().siblings(".card").show()

    })
    $("#Mu-burger").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#tu-burger").click(function () {
        $("#Tu-burger").addClass("animate__jello");
        $(".Stburger").slideUp(1200);
        $(".Stburger button.btn-danger").parent().siblings(".card").show()

    })
    $("#Tu-burger").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#ja-burger").click(function () {
        $("#Ja-burger").addClass("animate__jello");
        $(".Stburger").slideUp(1200);
        $(".Stburger button.btn-danger").parent().siblings(".card").show()

    })
    $("#Ja-burger").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#bbq-burger").click(function () {
        $("#Bbq-burger").addClass("animate__jello");
        $(".Stburger").slideUp(1200);
        $(".Stburger button.btn-danger").parent().siblings(".card").show()

    })
    $("#Bbq-burger").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#fish-burger").click(function () {
        $("#Fish-burger").addClass("animate__jello");
        $(".Stburger").slideUp(1200);
        $(".Stburger button.btn-danger").parent().siblings(".card").show()

    })
    $("#Fish-burger").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    /*soup*/
    $("#ch-soup").click(function () {
        $("#Ch-soup").addClass("animate__jello");
        $(".Stsoup").slideUp(1200);
        $(".Stsoup button.btn-danger").parent().siblings(".card").show()
    })
    $("#Ch-soup").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#to-soup").click(function () {
        $("#To-soup").addClass("animate__jello");
        $(".Stsoup").slideUp(1200);
        $(".Stsoup button.btn-danger").parent().siblings(".card").show()
    })
    $("#To-soup").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#fr-soup").click(function () {
        $("#Fr-soup").addClass("animate__jello");
        $(".Stsoup").slideUp(1200);
        $(".Stsoup button.btn-danger").parent().siblings(".card").show()

    })
    $("#Fr-soup").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#br-soup").click(function () {
        $("#Br-soup").addClass("animate__jello");
        $(".Stsoup").slideUp(1200);
        $(".Stsoup button.btn-danger").parent().siblings(".card").show()

    })
    $("#Br-soup").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    /*fires*/
    $("#fr-fr").click(function () {
        $("#Fr-fr").addClass("animate__jello");
        $(".Stfries").slideUp(1200);
        $(".Stfries button.btn-danger").parent().siblings(".card").show()
    })
    $("#Fr-fr").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#ch-fr").click(function () {
        $("#Ch-fr").addClass("animate__jello");
        $(".Stfries").slideUp(1200);
        $(".Stfries button.btn-danger").parent().siblings(".card").show()
    })
    $("#Ch-fr").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#pa-fr").click(function () {
        $("#Pa-fr").addClass("animate__jello");
        $(".Stfries").slideUp(1200);
        $(".Stfries button.btn-danger").parent().siblings(".card").show()
    })
    $("#Pa-fr").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    /*fish*/
    $("#gr-fi").click(function () {
        $("#Gr-fi").addClass("animate__jello");
        $(".Stfish").slideUp(1200);
        $(".Stfish button.btn-danger").parent().siblings(".card").show()

    })
    $("#Gr-fi").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#sm-fi").click(function () {
        $("#Sm-fi").addClass("animate__jello");
        $(".Stfish").slideUp(1200);
        $(".Stfish button.btn-danger").parent().siblings(".card").show()

    })
    $("#Sm-fi").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#su").click(function () {
        $("#Su").addClass("animate__jello");
        $(".Stfish").slideUp(1200);
        $(".Stfish button.btn-danger").parent().siblings(".card").show()

    })
    $("#Su").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#sp-pa").click(function () {
        $("#Sp-pa").addClass("animate__jello");
        $(".Stfish").slideUp(1200);
        $(".Stfish button.btn-danger").parent().siblings(".card").show()

    })
    $("#Sp-pa").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#po-sa").click(function () {
        $("#Po-sa").addClass("animate__jello");
        $(".Stfish").slideUp(1200);
        $(".Stfish button.btn-danger").parent().siblings(".card").show()

    })
    $("#Po-sa").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#br-fi").click(function () {
        $("#Br-fi").addClass("animate__jello");
        $(".Stfish").slideUp(1200);
        $(".Stfish button.btn-danger").parent().siblings(".card").show()

    })
    $("#Br-fi").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#ch-ho").click(function () {
        $("#Ch-ho").addClass("animate__jello");
        $(".Stfish").slideUp(1200);
        $(".Stfish button.btn-danger").parent().siblings(".card").show()

    })
    $("#Ch-ho").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    /*ramen*/
    $("#sp-bo").click(function () {
        $("#Sp-bo").addClass("animate__jello");
        $(".Stramen").slideUp(1200);
        $(".Stramen button.btn-danger").parent().siblings(".card").show()
    })
    $("#Sp-bo").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#la").click(function () {
        $("#La").addClass("animate__jello");
        $(".Stramen").slideUp(1200);
        $(".Stramen button.btn-danger").parent().siblings(".card").show()
    })
    $("#La").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#ra").click(function () {
        $("#Ra").addClass("animate__jello");
        $(".Stramen").slideUp(1200);
        $(".Stramen button.btn-danger").parent().siblings(".card").show()
    })
    $("#Ra").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#pe-pa").click(function () {
        $("#Pe-pa").addClass("animate__jello");
        $(".Stramen").slideUp(1200);
        $(".Stramen button.btn-danger").parent().siblings(".card").show()
    })
    $("#Pe-pa").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#fe-al").click(function () {
        $("#Fe-al").addClass("animate__jello");
        $(".Stramen").slideUp(1200);
        $(".Stramen button.btn-danger").parent().siblings(".card").show()
    })
    $("#Fe-al").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#ja-pa").click(function () {
        $("#Ja-pa").addClass("animate__jello");
        $(".Stramen").slideUp(1200);
        $(".Stramen button.btn-danger").parent().siblings(".card").show()
    })
    $("#Ja-pa").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    $("#li-al").click(function () {
        $("#Li-al").addClass("animate__jello");
        $(".Stramen").slideUp(1200);
        $(".Stramen button.btn-danger").parent().siblings(".card").show()
    })
    $("#Li-al").mouseover(function () {
        $(this).removeClass("animate__jello");
    })
    /* ******************************************************* */
    $(".Or-Now").click(function () {
        $(".order-form").show();
        $(".ImHung").hide()
    })
    $(".close").click(function () {
        $(this).parent().hide();
        $(".order-form input,.order-form select, .order-form textarea").css({
            opacity: "1"
        })
    })

    /*$("#ImHung").click(function(){
        $(".ImHung").show();
        $(".order-form input,.order-form select, .order-form textarea").css({
            opacity: ".5"
        })
    })*/






    $("#ImHung").click(function () {
        if ($('#validationServer01').val() === "" ||
            $('#validationServer02').val() === "" ||
            $('#validationServer03').val() === "" ||
            $('#validationServer04').val() === "" ||
            $('#validationServer05').val() === "" ||
            $('#validationServer06').val() === "" ||
            $('#validationServer07').val() === "") {
            $("#Alert").slideDown();
        }
        else {
            $(".ImHung").show();
            $(".order-form input,.order-form select, .order-form textarea").css({
                opacity: ".5"
            })
            setTimeout(function () {
                $(".order-form").hide();
                $(".order-form input,.order-form select, .order-form textarea").css({
                    opacity: "1"
                })

            }, 5000)
        }
    })
    $("#more").click(function () {
        $(".info").show()
    })
    $('button.btn-danger').click(function () {
        $(this).parent().slideUp(500);
        $(this).parent().siblings(".card").show()
    })

})