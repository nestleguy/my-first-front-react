<?php
 $name = $_POST['name'];
 $email =$_POST['email'];
 $password =  $_POST['password'];
$con = mysqli_connect('localhost','root','','registeration');
$query = "INSERT INTO `signup`(`name`, `email`, `password`) VALUES ('$name','$email','$password')";

$run=mysqli_query($con,$query);

if($run==TRUE)
    echo "Data Insert Successfully";
 else
     echo "Error !";

?>