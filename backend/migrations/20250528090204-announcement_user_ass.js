'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addConstraint('Announcements' , {
      fields : ['UserId'],
      type : 'foreign key',
      references : {
        table : "Users",
        field: "id"
      }
    })
     await queryInterface.addConstraint('Files' , {
      fields : ['UserId'],
      type : 'foreign key',
      references : {
        table : "Users",
        field: "id"
      }
    })
     await queryInterface.addConstraint('Messages' , {
      fields : ['senderId'],
      type : 'foreign key',
      name: 'sender',
      references : {
        table : "Users",
        field: "id"
      }
    })
     await queryInterface.addConstraint('Messages' , {
      fields : ['receiverId'],
      type : 'foreign key',
      name : 'receiver',
      references : {
        table : "Users",
        field: "id"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     * 
     */
    await queryInterface.removeConstraint('Announcements' , {
      fields : ['senderId'],
      type : 'foreign key',
      references : {
        table : "Users",
        field: "id"
      }
    })
    await queryInterface.removeConstraint('Files' , {
      fields : ['receiverId'],
      type : 'foreign key',
      references : {
        table : "Users",
        field: "id"
      }
    })
     await queryInterface.removeConstraint('Messages' , {
      fields : ['userId'],
      type : 'foreign key',
      name: 'sender',
      references : {
        table : "Users",
        field: "id"
      }
    })
     await queryInterface.removeConstraint('Files' , {
      fields : ['userId'],
      type : 'foreign key',
      name : 'receiver',
      references : {
        table : "Users",
        field: "id"
      }
    })

  }
};
