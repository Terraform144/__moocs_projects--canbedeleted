<?php

    /**
     * Author: Terraform144 @zululad - november 2022
     * TEMPORIS VIP KEY GENERATOR
     */
    // todo authenticated & request validation
    $authenticated = true;
    $request_valid = true;

    if( !($request_valid && $authenticated) ) die();

    if( isset($_POST['name']) ) {
        // token generator not attribuated yet
        function gen_uid($l=7){ // unique id generator
            return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, $l);
        }

        echo $token = gen_uid(8); die();

        // record token in mysql
    }

?>
<!DOCTYPE html>
<html lang="en">
<?php

    // administration and access generator
    $inc = <<<EOD
    <script>

        function generate() {
            if($('#iClient').val().length > 3) {
                $.post( "", { name: $('#iClient').val() })
                    .done(function( data ) {
                        $('.token-pad').html(data);
                        $('.token-pad').css('background-color', 'green');
                        $('.token-pad').css('color', 'white');
                });
            }
        }

    </script>
    <div class="form-group">
        <div class="token-pad">- - - - - - - - </div>
        <input type="text" id="iClient" class="form-control" placeholder="Prenom Nom" name="client" />
        <button type="button" class="btn btn-primary" name="nAdmin" id="bAdmin" onclick="generate()" >Generate access token</button>
    </div>
    EOD

?>
<head>
<style>
    .vip-ttl {
        font-weight: bold;
        font-size: xx-large;
        text-align: center;
        background-color: red;
        color:white; width:100%;
    }
    .token-pad {
        margin-bottom: 50px;
        padding:15px;
        width:100%;
    }
    .form-group,#iClient,.token-pad {
        font-size:xx-large;
        text-align: center;
    }
    #main {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #bAdmin {
        margin-top:40px;
        width:100%;
        font-size: xx-large;
    }


</style><link href="styles/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<script src="scripts/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script src="scripts/jquery-3.6.1.min.js"></script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    <div class="vip-ttl">TEMPORIS ACADEMY<br/><small style="color: black;"><strong>VIP KEY GENERATOR</strong></small></div>

    <div id="main">
        <?php echo $inc; ?>
    </div>
</body>
</html>


