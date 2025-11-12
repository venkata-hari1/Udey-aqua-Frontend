export const baseURL = 'http://localhost:3000/api';

export const endpoints = {
 //Auth
  register: 'auth/register',
  login: 'auth/login',
  forgetPassword: 'auth/forgetpassword',
  resetPassword: 'auth/resetpassword',

  // Home
  createHeader: 'home/header',
  uploadSection: 'home/common',
  getSectionData: 'home/common',
  deleteSectionImage: 'home/common', // DELETE /home/common/:section/:sid/:fid

};