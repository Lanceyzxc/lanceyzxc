<?php
// Database connection
$servername = "localhost";
$username = "root"; // or your database username
$password = ""; // or your database password
$dbname = "portfolio_db"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch messages from the database
$sql = "SELECT name, email, message, created_at FROM messages ORDER BY created_at DESC";
$result = $conn->query($sql);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Messages</title>
    <link rel="stylesheet" href="styles.css">  <!-- If you have CSS -->
</head>
<body>
    <h1>Messages</h1>
    <div class="messages">
        <?php
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<div class='message'>";
                echo "<p><strong>Name:</strong> " . htmlspecialchars($row['name']) . "</p>";
                echo "<p><strong>Email:</strong> " . htmlspecialchars($row['email']) . "</p>";
                echo "<p><strong>Message:</strong> " . nl2br(htmlspecialchars($row['message'])) . "</p>";
                echo "<p><em>Received on: " . $row['created_at'] . "</em></p>";
                echo "</div>";
            }
        } else {
            echo "<p>No messages found.</p>";
        }

        // Close the connection
        $conn->close();
        ?>
    </div>
</body>
</html>
