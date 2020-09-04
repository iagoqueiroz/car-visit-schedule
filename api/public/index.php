<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Routing\RouteCollectorProxy;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Hello world!");
    return $response;
});

$cars = [
    [
        'id'          => 1,
        'company'     => 'Fiat',
        'model'       => 'Argo',
        'description' => '1.8 E.TORQ FLEX PRECISION MANUAL',
        'schedules'   => [
            [
                'id'             => 1,
                'car_id'         => 1,
                'visit_date'     => '2020-08-02 09:00:00',
                'visitant_name'  => 'Iago Queiroz',
                'visitant_email' => 'iago.test@email.com',
                'visitant_phone' => '(85) 8888-2222',
            ],
            [
                'id'             => 2,
                'car_id'         => 1,
                'visit_date'     => '2020-08-02 13:00:00',
                'visitant_name'  => 'Mark Zukenberg',
                'visitant_email' => 'mark.test@email.com',
                'visitant_phone' => '(85) 8888-2222',
            ],
        ],
    ],
    [
        'id'          => 2,
        'company'     => 'Fiat',
        'model'       => 'Cronos',
        'description' => '1.8 E.TORQ FLEX PRECISION AT6',
        'schedules'   => [],
    ],
    [
        'id'          => 3,
        'company'     => 'Chevrolet',
        'model'       => 'Onix',
        'description' => '1.0 FLEX LT MANUAL',
        'schedules'   => [
            [
                'id'             => 3,
                'car_id'         => 3,
                'visit_date'     => '2020-08-03 10:00:00',
                'visitant_name'  => 'Bill Gates',
                'visitant_email' => 'bill.test@email.com',
                'visitant_phone' => '(85) 8888-2222',
            ],
        ],
    ],
];

// Car routes
$app->group('/cars', function (RouteCollectorProxy $group) use ($cars) {

    // Get all car resources
    $group->get('', function (Request $request, Response $response) use ($cars) {
        $payload = json_encode($cars, JSON_PRETTY_PRINT);

        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    });

    // Get single car by id
    $group->get('/{id}', function (Request $request, Response $response, $args) use ($cars) {
        $carId = $args['id'];

        $foundIndex = array_search($carId, array_column($cars, 'id'));

        if ($foundIndex === false) {
            $response->getBody()->write(json_encode(['error' => 'Car not found!', JSON_PRETTY_PRINT]));

            return $response->withHeader('Content-Type', 'application/json')
                ->withStatus(404);
        }

        $payload = json_encode($cars[$foundIndex], JSON_PRETTY_PRINT);

        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    });

    $group->get('/{id}/schedules', function (Request $request, Response $response, $args) use ($cars) {
        $carId = $args['id'];

        $foundIndex = array_search($carId, array_column($cars, 'id'));

        if ($foundIndex === false) {
            $response->getBody()->write(json_encode(['error' => 'Car not found!', JSON_PRETTY_PRINT]));

            return $response->withHeader('Content-Type', 'application/json')
                ->withStatus(404);
        }

        $payload = json_encode($cars[$foundIndex]['schedules'], JSON_PRETTY_PRINT);

        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    });
});

$app->run();
