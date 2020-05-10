const Schema = use('Schema');

class CommunityOwnerSchema extends Schema {
  up() {
    this.create('community_owner', (table) => {
      table.increments();
      table.integer('user_id').references('users.id').onDelete('CASCADE');
      table.integer('community_id').references('communities.id').onDelete('CASCADE');
    });
  }

  down() {
    this.drop('community_owner');
  }
}

module.exports = CommunityOwnerSchema;
