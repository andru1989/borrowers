import { test } from 'qunit';
import moduleForAcceptance from 'borrowers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends', {
  beforeEach() {
    //
    // Mirage makes the variable server avaialble in our tests.
    //
    // We can use server.create('model-name') to create 1 entry in the
    // mock server or use createList to create many.
    //
    //
    server.createList('friend', '10');
  }
});

test('visiting /friends', function(assert) {
  visit('/friends');

  andThen(function() {
    assert.equal(currentURL(), '/friends');

    assert.equal(
      find('table tbody tr').length,
      10,
      'assertion'
    );
  });
});
