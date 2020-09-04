<?php
namespace App\Application\Action\Schedule;

use App\Domain\Schedule\Repository\ScheduleRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ViewCarSchedulesAction
{
    private $scheduleRepository;

    public function __construct(ScheduleRepository $scheduleRepository)
    {
        $this->scheduleRepository = $scheduleRepository;
    }

    public function __invoke(Request $request, Response $response, $args): Response
    {
        $carId = (int) $args['id'];

        $schedules = $this->scheduleRepository->getAllByCarId($carId);

        $payload = json_encode($schedules, JSON_PRETTY_PRINT);

        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}
