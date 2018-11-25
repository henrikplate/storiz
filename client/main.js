import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/body.js';

// Subscribe to the method which retrieves the current Tile.
Tracker.autorun(() => {
  Meteor.subscribe('currentTileContent', Session.get('to_tile'));
//  Meteor.subscribe('currentStuffContent', Session.get('item_name'));
  Meteor.subscribe('currentStuffContent', Session.get('items'));
});

