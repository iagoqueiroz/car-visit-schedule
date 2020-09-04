<?php
namespace App\Application\Action\Car;

use App\Domain\Car\Repository\CarRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ViewCarAction
{
    private $carRepository;

    public function __construct(CarRepository $carRepository)
    {
        $this->carRepository = $carRepository;
    }

    public function __invoke(Request $request, Response $response, $args): Response
    {
        $carId = (int) $args['id'];

        $car = $this->carRepository->findById($carId);

        if (!$car) {
            $response->getBody()->write(json_encode(['error' => 'Car not found!'], JSON_PRETTY_PRINT));

            return $response->withHeader('Content-Type', 'application/json')
                ->withStatus(404);
        }

        $payload = json_encode($car, JSON_PRETTY_PRINT);

        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}
