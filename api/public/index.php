<?php
use DI\ContainerBuilder;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$containerBuilder = new ContainerBuilder();

// Set up settings
$settings = require __DIR__ . '/../app/settings.php';
$settings($containerBuilder);

$dependencies = require __DIR__ . '/../app/dependencies.php';
$dependencies($containerBuilder);

$repositories = require __DIR__ . '/../app/repositories.php';
$repositories($containerBuilder);

// Build PHP-DI container instance
$container = $containerBuilder->build();

AppFactory::setContainer($container);
$app = AppFactory::create();

// Register middlewares
$middlewares = require __DIR__ . '/../app/middlewares.php';
$middlewares($app);

// Register routes
$routes = require __DIR__ . '/../app/routes.php';
$routes($app);

$app->run();
