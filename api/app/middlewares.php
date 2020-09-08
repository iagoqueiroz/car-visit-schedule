<?php
declare (strict_types = 1);

use App\Application\Middlewares\CorsMiddleware;
use Slim\App;

return function (App $app) {
    $container           = $app->getContainer();
    $displayErrorDetails = $container->get('settings')['displayErrorDetails'];

    $app->options('/{routes:.+}', function ($request, $response, $args) {
        return $response;
    });

    $app->add(new CorsMiddleware);

    $app->addBodyParsingMiddleware();
    $app->addRoutingMiddleware();
    $app->addErrorMiddleware($displayErrorDetails, false, false);
};
