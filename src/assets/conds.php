<?php
/*
https://www.wattnboardsport.de/fileadmin/cam/wetter/conds.php?d=[DD]/[MM]/[YYYY],[hh]:[mm]:[ss],[th0temp-act],[th0hum-act.0],[th0dew-act],[wind0avgwind-act],[wind0wind-act],[wind0dir-act],[rain0rate-act],[rain0total-daysum],[thb0seapress-act],[wind0dir-act],[wind0wind-act=bft.0],m/s,C,hPa,mm,--,[thb0seapress-val60:--],[rain0total-monthsum],[rain0total-yearsum],[rain0total-ydaysum],[thb0temp-act],[thb0hum-act],[wind0chill-act],[th0temp-val60:--],[th0temp-dmax],[th0temp-dmaxtime],[th0temp-dmin],[th0temp-dmintime],[wind0avgwind-dmax],[wind0avgwind-dmaxtime],[wind0wind-dmax],[wind0wind-dmaxtime],[thb0seapress-dmax],[thb0seapress-dmaxtime],[thb0seapress-dmin],[thb0seapress-dmintime],[mbsystem-swversion:--],[mbsystem-buildnum:--],[wind0wind-max10],--,--,[uv0index-act:--],--,[sol0rad-act:--],[wind0dir-avg10:--],[rain0total-sum60],--,[mbsystem-daynightflag:--],--,[wind0dir-avg10:--],--,m,--,[mbsystem-daylength:--],--,--,[uv0index-dmax:--]
*/

	$params = $_GET['d'];
	$params = explode(',', $params);
	$file = 'params.json';
	file_put_contents($file, json_encode($params, JSON_FORCE_OBJECT));
