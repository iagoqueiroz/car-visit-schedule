<?php
namespace App\Application\Action\Schedule;

use App\Domain\Car\Repository\CarRepository;
use App\Domain\Schedule\Repository\ScheduleRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ViewCarSchedulesAction
{
    private $scheduleRepository;
    private $carRepository;

    public function __construct(ScheduleRepository $scheduleRepository, CarRepository $carRepository)
    {
        $this->scheduleRepository = $scheduleRepository;
        $this->carRepository = $carRepository;
    }

    public function __invoke(Request $request, Response $response, $args): Response
    {
        $carId = (int) $args['id'];

        $car = $this->carRepository->findById($carId);

        if (!$car->getId()) {
            $response->getBody()->write(json_encode(['error' => 'Car not found!'], JSON_PRETTY_PRINT));

            return $response->withHeader('Content-Type', 'application/json')
                ->withStatus(404);
        }

        $schedules = $this->scheduleRepository->getAllByCarId($carId);

        $payload = json_encode($schedules, JSON_PRETTY_PRINT);

        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}
