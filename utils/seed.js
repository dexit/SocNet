const connection = require('../config/connection');
const { User, Thought } = require('../models');

const users = [
  {
    username: 'jack_griffin',
    email: 'jack_griffin@domain.tld',
    thoughts: [],
    friends: [],
  },
  {
    username: 'jane_smith',
    email: 'jane_smith@domain.tld',
    thoughts: [],
    friends: [],
  },
  {
    username: 'system_admin',
    email: 'system_admin@domain.tld',
    thoughts: [],
    friends: [],
  },
  {
    username: 'rihards_man',
    email: 'rihards_man@domain.tld',
    thoughts: [],
    friends: [],
  },
  {
    username: 'yusif_mobeen',
    email: 'yusif_mobeen@domain.tld',
    thoughts: [],
    friends: [],
  }
]

const thoughts = [
  {
    thoughtText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros nec vestibulum sodales. Aliquam hendrerit diam ipsum, vel mollis lectus sodales in. Maecenas non lorem non ex cursus molestie vel vel velit.',
    username: 'jack_griffin',
    reactions: [
      {
        reactionBody: '<3 love it 111111 !',
        username: 'jack_griffin',
      },
      {
        reactionBody: 'are are are.... fuwa fuwa',
        username: 'jane_smith',
      },
      {
        reactionBody: 'The hell is this ? It is amazing!',
        username: 'system_admin',
      },
      {
        reactionBody: 'I agree',
        username: 'rihards_man',
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith',
      }
    ],
  },
  {
    thoughtText: 'In posuere pharetra massa eget consectetur. Quisque pharetra vestibulum erat id finibus. Aenean et magna nisl. Proin vitae ullamcorper elit. Etiam placerat urna vitae sagittis pellentesque. Donec euismod, velit vel feugiat euismod, ante ante tincidunt tortor, eu posuere ipsum nunc ac tellus.',
    username: 'jane_smith',
    reactions: [
      {
        reactionBody: '<3 love it !31313',
        username: 'jack_griffin',
      },
      {
        reactionBody: 'are are are.... fuwa fuwa',
        username: 'jane_smith',
      },
      {
        reactionBody: 'The hell is this ? It is amazing!',
        username: 'system_admin',
      },
      {
        reactionBody: 'I agree',
        username: 'rihards_man',
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith',
      }
    ]
  },
  {
    thoughtText: 'Nam pretium, nulla a pulvinar interdum, magna nunc lobortis nulla, nec ultrices turpis purus ac ex. Sed eget justo mi. Sed auctor felis ut augue eleifend, vel posuere elit convallis. Sed fermentum, ipsum euismod faucibus tempor, lectus leo rhoncus sem, ac consequat quam enim in lorem.',
    username: 'system_admin',
    reactions: [
      {
        reactionBody: '<3 love it 11111!',
        username: 'jack_griffin',
      },
      {
        reactionBody: 'are are are.... fuwa fuwa',
        username: 'jane_smith',
      },
      {
        reactionBody: 'The hell is this ? It is amazing!',
        username: 'system_admin',
      },
      {
        reactionBody: 'I agree',
        username: 'rihards_man',
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith',
      }
    ]
  },
  {
    thoughtText: 'Nunc gravida, magna a dictum luctus, mauris turpis aliquet nulla, at bibendum est dolor in lorem. Duis euismod lectus non libero pharetra, sit amet molestie dolor bibendum. In sed tellus mauris. Vestibulum aliquam nulla felis, euismod luctus est luctus vel.',
    username: 'rihards_man',
    reactions: [
      {
        reactionBody: '<3 love it !2232',
        username: 'jack_griffin',
      },
      {
        reactionBody: 'are are are.... fuwa fuwa',
        username: 'jane_smith',
      },
      {
        reactionBody: 'The hell is this ? It is amazing!',
        username: 'system_admin',
      },
      {
        reactionBody: 'Cant agree ',
        username: 'rihards_man',
      },
      {
        reactionBody: 'As usual  not for me',
        username: 'dave_smith',
      }
    ]
  },
  {
    thoughtText: 'Proin vehicula dolor a malesuada scelerisque. Aenean consectetur, enim ac congue malesuada, purus sem malesuada nibh, a aliquet sapien lacus vel urna. Duis pellentesque euismod justo, nec sollicitudin massa finibus vitae.',
    username: 'yusif_mobeen',
    reactions: [
      {
        reactionBody: 'I love it!',
        username: 'jack_griffin',
      },
      {
        reactionBody: 'There is no spoon....',
        username: 'jane_smith',
      },
      {
        reactionBody: 'Kore naniii  ? It is amazing!',
        username: 'system_admin',
      },
      {
        reactionBody: 'I agree',
        username: 'rihards_man',
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith',
      }
    ]
  }
];

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany();
  await Thought.deleteMany();

  console.table(users);

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.info('Seeding complete!');
  process.exit(0);
});
