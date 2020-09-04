<?php
declare (strict_types = 1);

use DI\ContainerBuilder;
use Illuminate\Container\Container as IlluminateContainer;
use Illuminate\Database\Connection;
use Illuminate\Database\Connectors\ConnectionFactory;
use Psr\Container\ContainerInterface;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        Connection::class => function (ContainerInterface $container) {
            $factory = new ConnectionFactory(new IlluminateContainer);

            $connection = $factory->make($container->get('settings')['db']);
            $connection->disableQueryLog();

            return $connection;
        },

        PDO::class => function (ContainerInterface $container) {
            return $container->get(Connection::class)->getPdo();
        },
    ]);
};
