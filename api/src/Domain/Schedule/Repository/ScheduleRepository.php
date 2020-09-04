<?php
namespace App\Domain\Schedule\Repository;

use Illuminate\Database\Connection;
use Illuminate\Support\Collection;

class ScheduleRepository
{
    private $connection;
    private $table = 'schedules';

    public function __construct(Connection $connection)
    {
        $this->connection = $connection->table($this->table);
    }

    public function findById(int $carId): ?object
    {
        return $this->connection->find($carId);
    }

    public function getAllByCarId(int $carId): Collection
    {
        return $this->connection->where('car_id', $carId)->get();
    }

    public function createFromCarId(int $carId, array $data)
    {
        $data = array_merge($data, ['car_id' => $carId]);

        return $this->connection->insertGetId($data);
    }
}
