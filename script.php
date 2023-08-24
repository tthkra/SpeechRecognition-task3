<?php

// set up connection variables
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "robot";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connection successful<br>";
}


$data = json_decode(file_get_contents("php://input"), true);

$text = $data["text"];
        
$query = "INSERT INTO transcription (text) VALUES 
('$text')";

if ($conn->query($query)) {
    echo "value inserted into database";
} 
else {
    echo "error: " . $conn->error;
}



$conn->close();

?>