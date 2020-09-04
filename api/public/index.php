<?php
use DI\ContainerBuilder;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$containerBuilder = new ContainerBuilder;

// Set up settings
$settings = require __DIR__ . '/../app/settings.php';
$settings($containerBuilder);

// Build PHP-DI container instance
$container = $containerBuilder->build();

AppFactory::setContainer($container);
$app = AppFactory::create();

// Add Routing Middleware
$app->addRoutingMiddleware();

// Add Error Handling Middleware
$displayErrorDetails = $container->get('settings')['displayErrorDetails'];
$app->addErrorMiddleware($displayErrorDetails, false, false);

// Register routes
$routes = require __DIR__ . '/../app/routes.php';
$routes($app);

$app->run();
