<?php
namespace App\Domain\Car;

use JsonSerializable;
use DateTime;

class Car implements JsonSerializable
{
    /**
     * @var int|null
     */
    protected $id;

    /**
     * @var string
     */
    protected $company;

    /**
     * @var string
     */
    protected $model;

    /**
     * @var string
     */
    protected $description;

    /**
     * @var float
     */
    protected $price;

    /**
     * @var string
     */
    protected $created_at;

    /**
     * @var string
     */
    protected $updated_at;

    public function __construct(array $properties = [])
    {
        foreach ($properties as $property => $value) {
            if (\property_exists($this, $property)) {
                $this->{$property} = $value;
            }
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompany(): string
    {
        return $this->company;
    }

    public function getModel(): string
    {
        return $this->model;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function getCreatedAt(): DateTime
    {
        return new DateTime($this->created_at);
    }

    public function getUpdatedAt(): DateTime
    {
        return new DateTime($this->updated_at);
    }

    public function jsonSerialize()
    {
        return [
            'id'          => $this->id ?? null,
            'company'     => $this->company ?? null,
            'model'       => $this->model ?? null,
            'description' => $this->description ?? null,
            'price'       => $this->price ?? null,
            'created_at'  => $this->created_at ?? null,
            'updated_at'  => $this->updated_at ?? null,
        ];
    }
}
