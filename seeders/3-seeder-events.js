'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Events",
      [{
          userId: 1,
          categoryId: 3,
          title: "Siraman Rohani",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: "2022-01-24 04:30:00",
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642996716/image/seeEvents/siraman-rohani_ycc9ty.jpg"
        },
        {
          userId: 2,
          categoryId: 6,
          title: "Tahlilan",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-01-25 19:30:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642996883/image/seeEvents/tahlilan_e7fjo3.jpg"
        },
        {
          userId: 1,
          categoryId: 2,
          title: "Photography Trickshot",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-01-27 00:00:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642996948/image/seeEvents/photography-tricks_bypxbp.jpg"
        },
        {
          userId: 2,
          categoryId: 2,
          title: "Tiktok Photography Hacks",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-02-28 19:00:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642997016/image/seeEvents/tiktok-photography_saymre.jpg"
        },
        {
          userId: 2,
          categoryId: 3,
          title: "Apple Developer Conference 2022",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-01-31 23:30:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642997132/image/seeEvents/appledev-conference_j1uh5d.jpg"
        },
        {
          userId: 1,
          categoryId: 6,
          title: "Zara Flash Sale Discount",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-02-01 20:00:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642997278/image/seeEvents/ZARA-sale_rfex4j.jpg"
        },
        {
          userId: 2,
          categoryId: 6,
          title: "America's Next Top Model",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-01-30 19:00:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642997421/image/seeEvents/antm_rubwpz.jpg"
        },
        {
          userId: 2,
          categoryId: 7,
          title: "Charlie Puth Concert 2022",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-02-10 19:00:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642997527/image/seeEvents/charlie-puth_bolixl.jpg"
        },
        {
          userId: 1,
          categoryId: 7,
          title: "Djakarta Warehouse Projects 2022",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-12-23 18:00:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642997567/image/seeEvents/dwp_yvkxx2.jpg"
        },
        {
          userId: 2,
          categoryId: 1,
          title: "Adobe Photoshop Tricks ",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
          eventDate: '2022-01-25 20:00:00',
          image: "https://res.cloudinary.com/dry2yqm3h/image/upload/v1642997605/image/seeEvents/photoshop-hacks_ih1vu3.jpg"
        },
      ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};