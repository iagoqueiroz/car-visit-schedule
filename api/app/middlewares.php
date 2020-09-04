<?php
declare (strict_types = 1);

use Slim\App;

return function (App $app) {
    $container           = $app->getContainer();
    $displayErrorDetails = $container->get('settings')['displayErrorDetails'];

    $app->addBodyParsingMiddleware();
    $app->addRoutingMiddleware();
    $app->addErrorMiddleware($displayErrorDetails, false, false);
};
