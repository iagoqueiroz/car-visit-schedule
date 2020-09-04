<?php

namespace App\Domain\Car\Repository;

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

    public function findById(int $carId): array
    {
        return $this->connection->find($carId);
    }

    public function getAll(): Collection
    {
        return $this->connection->get();
    }
}
