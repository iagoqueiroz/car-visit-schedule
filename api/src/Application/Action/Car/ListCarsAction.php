<?php
namespace App\Application\Action\Car;

use App\Domain\Car\Repository\CarRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ListCarsAction
{
    private $carRepository;

    public function __construct(CarRepository $carRepository)
    {
        $this->carRepository = $carRepository;
    }

    public function __invoke(Request $request, Response $response): Response
    {
        $cars = $this->carRepository->getAll();

        $payload = json_encode($cars, JSON_PRETTY_PRINT);

        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}
