<?php
namespace App\Application\Action\Schedule;

use App\Domain\Schedule\Repository\ScheduleRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class AddCarScheduleAction
{
    private $scheduleRepository;

    public function __construct(ScheduleRepository $scheduleRepository)
    {
        $this->scheduleRepository = $scheduleRepository;
    }

    public function __invoke(Request $request, Response $response, $args): Response
    {
        $carId = (int) $args['id'];

        $data = [
            'visit_date' => new \DateTime(),
            'visitant_name' => 'Rodrigo Hilbert',
            'visitant_email' => 'rodrigo.test@email.com',
            'visitant_phone' => '(85) 8787-3333'
        ];

        $schedule = $this->scheduleRepository->createFromCarId($carId, $data);

        $payload = json_encode($schedule, JSON_PRETTY_PRINT);

        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}
