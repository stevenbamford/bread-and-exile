exports.up = function(knex, Promise) {
  return knex.schema.table('order_entries', function (table) {
    table.string('order_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('order_entries', function (table) {
    table.dropColumn('order_id');
  });
};
