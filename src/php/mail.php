<?php

// base values
$recipient = "tol.testing@yandex.ru";

// get data from form
$name = isset($_POST['name']) ? strip_tags($_POST['name']) : "";
$phone = isset($_POST['phone']) ? strip_tags($_POST['phone']) : "";

$email = isset($_POST['email']) ? strip_tags($_POST['email']) : "";
$meters = isset($_POST['meters']) ? strip_tags($_POST['meters']) : "";

$color = isset($_POST['color']) ? strip_tags($_POST['color']) : "";
$heating_type = isset($_POST['heating_type']) ? strip_tags($_POST['heating_type']) : "";
$object = isset($_POST['object']) ? strip_tags($_POST['object']) : "";
$condition = isset($_POST['condition']) ? strip_tags($_POST['condition']) : "";

$plintus_meters = isset($_POST['plintus_meters']) ? strip_tags($_POST['plintus_meters']) : "";
$dop_info = isset($_POST['dop_info']) ? strip_tags($_POST['dop_info']) : "";

$form_title = strip_tags($_POST['form_title']);



$message = "<table border='1' cellspacing='0' cellpadding='3' style='width: 500px; text-align: center; font-size: 14px;'>";
$message .= "<tr style='border: 1px solid black; background-color: silver'> <th> Поле </th> <th> Данные </th> </tr>";
$message .= "<tr style='padding: 5px;'><td><b> Форма </b></td><td> $form_title </td></tr>";
$message .= "<tr style='padding: 5px;'><td><b> Имя </b></td><td> $name </td></tr>";
$message .= "<tr style='padding: 5px;'><td><b> Телефон </b></td><td> $phone </td></tr>";

// inline form
if(isset($_POST['meters'])) {
	$message .= "<tr style='padding: 5px;'><td><b> Email </b></td><td> $email </td></tr>";
	$message .= "<tr style='padding: 5px;'><td><b> Кол-во метров </b></td><td> $meters </td></tr>";
}

// big form
if(isset($_POST['color'])) {
	$message .= "<tr style='padding: 5px;'><td><b> Email </b></td><td> $email </td></tr>";
	$message .= "<tr style='padding: 5px;'><td><b> Вид отопления  </b></td><td> $heating_type </td></tr>";
	$message .= "<tr style='padding: 5px;'><td><b> Цвет  </b></td><td> $color </td></tr>";
	$message .= "<tr style='padding: 5px;'><td><b> Объект  </b></td><td> $object </td></tr>";
	$message .= "<tr style='padding: 5px;'><td><b> Состояние  </b></td><td> $condition </td></tr>";
	$message .= "<tr style='padding: 5px;'><td><b> Кол-во погоных метров плинтуса </b></td><td> $plintus_meters </td></tr>";
	$message .= "<tr style='padding: 5px;'><td><b> Краткие сведения  </b></td><td> $dop_info </td></tr>";
}

$message .= "</table>";

require_once('PHPMailer/class.phpmailer.php'); 

$mail = new PHPMailer;

$mail->From = "";
$mail->FromName = "";

$mail->addAddress($recipient);
// $mail->addAddress("okulovvv1@gmail.com");

$mail->isHTML(true);
$mail->CharSet="UTF-8";

$mail->Subject = "Новая заявка на сайте стоматологической студии Гамма";
$mail->Body = $message;

$mail->send(); 


?>