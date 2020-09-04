<?php
declare (strict_types = 1);

use DI\ContainerBuilder;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        'settings' => [
            'displayErrorDetails' => true,
            'db'                  => [
                'driver'    => 'mysql',
                'host'      => 'localhost',
                'database'  => 'car-visits',
                'username'  => 'homestead',
                'password'  => 'secret',
                'charset'   => 'utf8mb4',
                'collation' => 'utf8mb4_unicode_ci',
                'prefix'    => '',
                'options'   => [
                    PDO::ATTR_PERSISTENT         => false,
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_EMULATE_PREPARES   => true,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci',
                ],
            ],
        ],
    ]);
};
