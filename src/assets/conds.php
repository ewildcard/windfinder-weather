<?php

	$params = $_GET['d'];
	$params = explode(',', $params);
	$file = 'params.json';
	file_put_contents($file, json_encode($params, JSON_FORCE_OBJECT));
