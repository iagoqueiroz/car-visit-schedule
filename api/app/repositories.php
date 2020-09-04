<?php
declare (strict_types = 1);

use App\Domain\Car\Repository\CarRepository;
use DI\ContainerBuilder;
use Illuminate\Database\Connection;
use Psr\Container\ContainerInterface;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        CarRepository::class => function (ContainerInterface $container) {
            $connection = $container->get(Connection::class);

            return new CarRepository($connection);
        },
    ]);
};
