<?php

$api = json_decode(file_get_contents('http://api.loire-atlantique.fr:80/opendata/1.0/traficevents?filter=Tous'));

$HEADER = <<<END

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
    integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
    crossorigin=""/>

    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
    integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
    crossorigin=""></script>

    <style>
        #mapid { height: 500px; }
    </style>
    

    <title>Json</title>

</head>
<body>
    
<div id="mapid">
        
</div>

</body>
</html>

END;

echo $HEADER;

?>

<script>
    var api = <?php echo json_encode($api) ?>;
</script>

<script src="script.js"></script>