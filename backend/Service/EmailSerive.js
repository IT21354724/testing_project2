class NotificationService {
  async sendWelcomeEmail(email) {
    try {
      // Code for sending email (e.g., using nodemailer)
      console.log(`Sending welcome email to: ${email}`);
    } catch (error) {
      console.error(`Error sending email to ${email}: ${error.message}`);
      throw error;
    }
  }

  async sendPasswordResetEmail(email) {
    try {
      // Code for sending password reset email
      console.log(`Sending password reset email to: ${email}`);
    } catch (error) {
      console.error(`Error sending password reset email to ${email}: ${error.message}`);
      throw error;
    }
  }
}

module.exports = new NotificationService();
