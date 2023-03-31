export class UserInfo {
    constructor({ selectorName, selectorJob }) {
        this._profileTitle = document.querySelector(selectorName);
        this._profileSubtitle = document.querySelector(selectorJob);
      }
    
      getUserInfo() {
        const userInfo = {
          userName: this._profileTitle.textContent,
          userJob: this._profileSubtitle.textContent
        };

        return userInfo
      }

      setUserInfo({ name, job }) {
        console.log(name)
        this._profileTitle.textContent = name;
        this._profileSubtitle.textContent = job;
      }
    }