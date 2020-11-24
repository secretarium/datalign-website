<?php

function checkBool($data, $name) {
    return is_array($data) && array_key_exists($name, $data) && ($data[$name] == true);
}

$incidentFile = realpath(__DIR__ . "/incident-state.json");
if($incidentFile !== false) {
    $state = json_decode(file_get_contents($incidentFile), true);
    if(checkBool($state, "incident")) {
        readfile(realpath(__DIR__ . "/maintenance.html"));
        exit();
    }
}
readfile(realpath(__DIR__ . "/index.html"));

?>