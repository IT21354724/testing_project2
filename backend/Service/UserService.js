const userModel = require('../models/userModel');
const notificationService = require('./notificationService');
const loggingService = require('./loggingService');

class UserService {
  async getUserById(id) {
    try {
      const user = await userModel.findUserById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      loggingService.logError(error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const user = await userModel.createUser(userData);
      await notificationService.sendWelcomeEmail(user.email);  // Sending notification
      return user;
    } catch (error) {
      loggingService.logError(error);
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      const updatedUser = await userModel.updateUser(id, userData);
      if (updatedUser) {
        return updatedUser;
      }
      throw new Error('User update failed');
    } catch (error) {
      loggingService.logError(error);
      throw error;
    }
  }
}

module.exports = new UserService();
