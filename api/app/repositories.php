<?php
declare (strict_types = 1);

use App\Domain\Car\Repository\CarRepository;
use DI\ContainerBuilder;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        CarRepository::class => DI\autowire(),
    ]);
};
