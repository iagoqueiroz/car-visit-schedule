<?php
namespace App\Domain\Car\Repository;

use App\Domain\Car\Car;
use Illuminate\Database\Connection;
use Illuminate\Support\Collection;

class CarRepository
{
    private $connection;
    private $table = 'cars';

    public function __construct(Connection $connection)
    {
        $this->connection = $connection->table($this->table);
    }

    public function findById(int $carId): Car
    {
        $car = (array) $this->connection->find($carId);

        return new Car($car);
    }

    public function getAll(): Collection
    {
        $cars = $this->connection->get();

        return $cars->map(function ($car) {
            return new Car((array) $car);
        });
    }
}
