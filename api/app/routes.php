<?php
declare (strict_types = 1);

use App\Application\Action\Car\ListCarsAction;
use App\Application\Action\Car\ViewCarAction;
use App\Application\Action\Schedule\ViewCarSchedulesAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;

return function (App $app) {
    $app->get('/', function (Request $request, Response $response, $args) {
        $response->getBody()->write("Hello world!");
        return $response;
    });

    // Car routes
    $app->group('/cars', function (RouteCollectorProxy $group) {

        // Get all car resources
        $group->get('', ListCarsAction::class);

        // Get single car by id
        $group->get('/{id}', ViewCarAction::class);

        // Get all schedules from car id
        $group->get('/{id}/schedules', ViewCarSchedulesAction::class);
    });
};
