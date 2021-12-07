const cars = [
  {
    vin: '3C3CFFCR7CT272159',
    make: 'Fiat',
    model: '500',
    mileage: 150000,
    title: 'clean',
    transmission: 'automatic',
  },
  {
    vin: 'JH4KA7670NC002886',
    make: 'Acura',
    model: 'Legend',
    mileage: 50000,
  },
  {
    vin: '1HGCG2254WA015540',
    make: 'Honda',
    model: 'Accord',
    mileage: 260000,
    title: 'clean',
  },
];

exports.seed = function (knex) {
  return knex('cars')
    .truncate()
    .then(() => {
      return knex('cars').insert(cars);
    });
};
