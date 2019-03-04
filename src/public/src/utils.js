export const Auth = {
  user: 'user',
  logIn(){
    localStorage.setItem(this.user, this.user);
  },
  logOut(){
    localStorage.removeItem(this.user);
  },
  checkLogin(){
    return !!localStorage.getItem(this.user);
  }
};
